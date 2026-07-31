/* 科目学习模块 - 按上/下册分区 + 做完一道刷新一道 + 做题记录库 + AI练习总结 + 自动轮换 */
const Subjects = {
  // 当前批次展示数量（做完一道补一道，保持队列长度）
  BATCH_SIZE: 8,
  practiceResults: [],
  // 当前展示中的题目ID队列（用于"做完刷新"）
  _shownIds: [],
  // 每个科目/年级/册的洗牌顺序缓存
  _shuffleCache: {},
  // 轮换次数记录
  _rotationCount: {},

  // Fisher-Yates 洗牌
  _shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // 获取洗牌后的题目列表（每个会话缓存在内存中）
  _getShuffledQuestions(subject, grade, volume) {
    const key = `${subject}_${grade}_${volume}`;
    if (!this._shuffleCache[key]) {
      const all = this.getAllQuestions(subject, grade, volume);
      this._shuffleCache[key] = this._shuffle(all);
    }
    return this._shuffleCache[key];
  },

  // 重新洗牌（轮换时调用）
  _reshuffle(subject, grade, volume) {
    const key = `${subject}_${grade}_${volume}`;
    const all = this.getAllQuestions(subject, grade, volume);
    this._shuffleCache[key] = this._shuffle(all);
    this._rotationCount[key] = (this._rotationCount[key] || 0) + 1;
  },

  // 取某科目某年级某册的所有题目（上册=旧年级巩固, 下册=新学期预习）
  getAllQuestions(subject, grade, volume) {
    const tabKey = volume === '下册' ? '新学期预习' : '旧年级巩固';
    return (APP_DATA[subject]?.[grade]?.[tabKey]) || [];
  },

  // 获取已做题ID集合（做题记录库）
  getDoneIds(subject, grade, volume) {
    const records = State.getRecords().filter(r => r.type === 'question_answer' && r.subject === subject && r.grade === grade && r.volume === volume);
    return new Set(records.map(r => r.qid));
  },

  // 检查是否需要自动轮换（做完一半时触发）
  _checkAutoRotation(subject, grade, volume) {
    const allQuestions = this.getAllQuestions(subject, grade, volume);
    const doneIds = this.getDoneIds(subject, grade, volume);
    const total = allQuestions.length;
    const doneCount = doneIds.size;

    if (total > 0 && doneCount >= total / 2) {
      // 自动轮换：清除做题记录，重新洗牌
      const records = State.getRecords().filter(r => !(r.type === 'question_answer' && r.subject === subject && r.grade === grade && r.volume === volume));
      Storage.set(Storage.KEYS.RECORDS, records);
      this._reshuffle(subject, grade, volume);
      this.practiceResults = [];
      const key = `${subject}_${grade}_${volume}`;
      const rotCount = this._rotationCount[key] || 1;
      UI.showToast(`🔄 已完成一半题目，自动为你换第${rotCount}批新题！`, 3000);
      return true;
    }
    return false;
  },

  // 取课本该册单元标题（兼容 volumes 与旧 units 结构）
  getUnitNames(subject, gradeNum, volume) {
    const tb = APP_DATA.textbooks[subject];
    if (!tb || !tb.grades[gradeNum]) return [];
    const g = tb.grades[gradeNum];
    let units = [];
    if (g.volumes) {
      const volKey = volume === '下册' ? 'down' : 'up';
      units = (g.volumes[volKey] && g.volumes[volKey].units) || [];
    } else if (g.units) {
      units = g.units;
    }
    return units.map((u, i) => u.title || `第${i + 1}单元`);
  },

  renderSubject(subject) {
    State.currentSubject = subject;
    this.practiceResults = [];
    this._shownIds = [];

    const meta = {
      chinese: { name: '语文', icon: '📖', desc: '听说读写，全面提升语文素养' },
      math: { name: '数学', icon: '🔢', desc: '计算思维，打好数学基础' },
      english: { name: '英语', icon: '🔤', desc: '听说读写，英语稳步提升' }
    };
    const m = meta[subject];
    const grades = ['grade4', 'grade5', 'grade6'];
    const gradeNames = { grade4: '四年级', grade5: '五年级', grade6: '六年级' };
    const gradeNum = State.currentGrade.replace('grade', '');

    // 兼容旧 currentTab 值，统一为上/下册
    if (State.currentTab !== '上册' && State.currentTab !== '下册') {
      State.currentTab = '上册';
    }
    const volume = State.currentTab;

    const allQuestions = this._getShuffledQuestions(subject, State.currentGrade, volume);
    const doneIds = this.getDoneIds(subject, State.currentGrade, volume);
    const unitNames = this.getUnitNames(subject, gradeNum, volume);
    const doneCount = doneIds.size;
    const total = allQuestions.length;

    let html = `
      <div class="page-header">
        <div>
          <div class="page-title">${m.icon} ${m.name}学习</div>
          <div class="page-subtitle">${m.desc}</div>
        </div>
      </div>

      <div class="subject-tabs">
        ${grades.map(g => `
          <div class="subject-tab ${State.currentGrade === g ? 'active' : ''}" data-grade="${g}">${gradeNames[g]}</div>
        `).join('')}
      </div>

      <div class="subject-tabs">
        <div class="subject-tab ${volume === '上册' ? 'active' : ''}" data-tab="上册">📘 上册</div>
        <div class="subject-tab ${volume === '下册' ? 'active' : ''}" data-tab="下册">📗 下册</div>
      </div>

      <div class="glass-card" style="padding:14px 18px;margin:12px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div style="font-size:13px;color:var(--text-secondary);">
          本册共 <strong style="color:var(--accent-dark);">${total}</strong> 题 ·
          已做 <strong style="color:var(--accent-dark);">${doneCount}</strong> 题 ·
          剩余 <strong style="color:var(--accent-dark);">${Math.max(0, total - doneCount)}</strong> 题
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn-secondary" id="historyBtn" style="padding:8px 16px;font-size:13px;">📋 做题记录</button>
          <button class="btn-secondary" id="refreshBatchBtn" style="padding:8px 16px;font-size:13px;">🔀 换一批</button>
          <button class="btn-secondary" id="resetDoneBtn" style="padding:8px 16px;font-size:13px;">🔄 重置进度</button>
        </div>
      </div>
    `;

    // 待做队列：取前 BATCH_SIZE 道未做题
    const pending = allQuestions.filter(q => !doneIds.has(q.id));
    const batch = pending.slice(0, this.BATCH_SIZE);
    this._shownIds = batch.map(q => q.id);

    if (total === 0) {
      html += '<div style="text-align:center;padding:40px;color:var(--text-muted);">该册暂无题目</div>';
    } else if (batch.length === 0) {
      html += `
        <div class="glass-card" style="text-align:center;padding:40px;color:var(--text-secondary);">
          <div style="font-size:40px;margin-bottom:12px;">🎉</div>
          <div style="font-size:16px;font-weight:600;margin-bottom:8px;">本册题目已全部完成！</div>
          <div style="font-size:13px;color:var(--text-muted);">点击"做题记录"回顾，或"重置进度"重新练习</div>
        </div>
      `;
    } else {
      // 按单元分组显示当前批次
      html += '<div id="questionList">' + this.renderBatchHtml(batch, unitNames, allQuestions) + '</div>';
      html += `
        <div class="glass-card" style="padding:14px;margin:16px 0;text-align:center;position:sticky;bottom:80px;z-index:50;">
          <button class="btn-primary" id="practiceSummaryBtn" style="padding:12px 32px;">🤖 查看本次练习AI总结</button>
        </div>
      `;
    }

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      // 年级切换
      wrap.querySelectorAll('[data-grade]').forEach(tab => {
        tab.addEventListener('click', () => {
          State.currentGrade = tab.dataset.grade;
          UI.navigate(subject);
        });
      });
      // 上/下册切换
      wrap.querySelectorAll('[data-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
          State.currentTab = tab.dataset.tab;
          UI.navigate(subject);
        });
      });
      // 题目交互
      this.attachQuestionHandlers(wrap, subject, State.currentGrade, volume);
      // AI总结
      const summaryBtn = wrap.querySelector('#practiceSummaryBtn');
      if (summaryBtn) summaryBtn.addEventListener('click', () => this.showPracticeSummary(subject));
      // 做题记录
      wrap.querySelector('#historyBtn').addEventListener('click', () => this.showHistory(subject, State.currentGrade, volume));
      // 换一批：重新洗牌并刷新
      wrap.querySelector('#refreshBatchBtn').addEventListener('click', () => {
        this._reshuffle(subject, State.currentGrade, volume);
        UI.showToast('🔀 已换一批新题！');
        UI.navigate(subject);
      });
      // 重置进度
      wrap.querySelector('#resetDoneBtn').addEventListener('click', () => this.resetDone(subject, State.currentGrade, volume));
    }, 0);

    return wrap;
  },

  // 渲染当前批次题目（按单元分组）
  renderBatchHtml(batch, unitNames, allQuestions) {
    if (batch.length === 0) return '';
    // 简单按顺序每 ~6 题归入一个单元标题，便于分区查漏补缺
    const perUnit = Math.max(1, Math.ceil(allQuestions.length / Math.max(unitNames.length, 1)));
    let html = '';
    let currentUnitIdx = -1;
    batch.forEach((q, idx) => {
      // 该题在全库中的索引，用于判定所属单元
      const globalIdx = allQuestions.findIndex(x => x.id === q.id);
      const unitIdx = unitNames.length > 0 ? Math.min(Math.floor(globalIdx / perUnit), unitNames.length - 1) : 0;
      if (unitIdx !== currentUnitIdx) {
        if (currentUnitIdx !== -1) html += '</div></div>';
        currentUnitIdx = unitIdx;
        const unitName = unitNames[unitIdx] || `第${unitIdx + 1}单元`;
        html += `
          <div class="unit-section glass-card" style="margin-bottom:16px;padding:16px;">
            <div class="unit-header" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:18px;">📚</span>
                <span style="font-size:15px;font-weight:600;color:var(--text-primary);">${unitName}</span>
              </div>
              <span class="unit-arrow" style="font-size:14px;color:var(--text-muted);transition:transform 0.3s;">▼</span>
            </div>
            <div class="unit-questions" style="margin-top:12px;">
        `;
      }
      html += this.renderQuestion(q, idx);
    });
    if (currentUnitIdx !== -1) html += '</div></div>';
    return html;
  },

  renderQuestion(q, idx) {
    const isChoice = q.type === '选择题' || q.type === '单项选择' || q.type === '听力选择';
    const isFill = ['填空题', '计算题', '简便运算', '解方程', '判断题', '古诗文填空', '词汇填空', '拼音题', '句子改写'].includes(q.type);
    const diffStars = q.difficulty ? (typeof q.difficulty === 'string' ? q.difficulty.length : q.difficulty) : 1;

    let optionsHtml = '';
    if (isChoice && q.options) {
      optionsHtml = `<div class="options-list">${q.options.map((opt, i) => `
        <div class="option-item" data-idx="${i}">
          <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
          <span>${opt}</span>
        </div>
      `).join('')}</div>`;
    } else if (isFill) {
      optionsHtml = `<input type="text" class="answer-input" placeholder="请输入答案..." />`;
    } else {
      optionsHtml = `<textarea class="answer-input" rows="3" placeholder="在此作答..."></textarea>`;
    }

    return `
      <div class="question-card" data-qid="${q.id}" style="margin-bottom:12px;">
        <div class="question-header">
          <span class="question-number">第${idx + 1}题</span>
          <span class="question-type">${q.type}</span>
          <span class="question-difficulty">${'⭐'.repeat(Math.min(diffStars, 5))}</span>
        </div>
        <div class="question-text">${q.text}</div>
        ${optionsHtml}
        <div class="question-actions">
          <button class="btn-check">✓ 检查答案</button>
          <button class="btn-show-answer">💡 查看解析</button>
          <button class="btn-show-answer" data-action="wrong">📌 加入错题本</button>
        </div>
        <div class="answer-explanation" style="display:none;">
          <div class="explanation-title">参考答案与解析</div>
          <div style="margin-bottom:8px;"><strong>答案：</strong>${q.answer}</div>
          <div><strong>解析：</strong>${q.explanation || '暂无解析'}</div>
        </div>
      </div>
    `;
  },

  attachQuestionHandlers(container, subject, grade, volume) {
    container.querySelectorAll('.question-card').forEach(card => {
      const qid = card.dataset.qid;
      const allQuestions = this._getShuffledQuestions(subject, grade, volume);
      const q = allQuestions.find(x => x.id === qid);
      if (!q) return;

      const options = card.querySelectorAll('.option-item');
      const checkBtn = card.querySelector('.btn-check');
      const showBtn = card.querySelector('.btn-show-answer:not([data-action])');
      const wrongBtn = card.querySelector('[data-action="wrong"]');
      const explanation = card.querySelector('.answer-explanation');
      const input = card.querySelector('.answer-input');

      let selectedIdx = null;
      let answered = false;

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          if (answered) return;
          options.forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          selectedIdx = parseInt(opt.dataset.idx);
        });
      });

      // 单元折叠
      const unitHeader = card.closest('.unit-section')?.querySelector('.unit-header');
      if (unitHeader && !unitHeader.dataset.bound) {
        unitHeader.dataset.bound = '1';
        unitHeader.addEventListener('click', () => {
          const content = unitHeader.nextElementSibling;
          const arrow = unitHeader.querySelector('.unit-arrow');
          if (content) {
            const hidden = content.style.display === 'none';
            content.style.display = hidden ? 'block' : 'none';
            if (arrow) arrow.style.transform = hidden ? 'rotate(0deg)' : 'rotate(-90deg)';
          }
        });
      }

      checkBtn.addEventListener('click', () => {
        if (answered) {
          UI.showToast('这道题已经做过了');
          return;
        }
        const isChoice = q.type === '选择题' || q.type === '单项选择' || q.type === '听力选择';
        let correct = false;
        let userAns = null;

        if (isChoice) {
          if (selectedIdx === null) { UI.showToast('请先选择一个选项'); return; }
          correct = selectedIdx === q.answer;
          userAns = selectedIdx;
          options.forEach((o, i) => {
            o.classList.remove('correct', 'wrong');
            if (i === q.answer) o.classList.add('correct');
            if (i === selectedIdx && !correct) o.classList.add('wrong');
          });
        } else if (input) {
          if (!input.value.trim()) { UI.showToast('请先作答'); return; }
          userAns = input.value.trim();
          const u = userAns.toLowerCase();
          const c = String(q.answer).toLowerCase();
          correct = u === c || c.includes(u) || u.includes(c);
          if (!correct) State.addToWrongBook(q);
        }

        answered = true;
        checkBtn.textContent = correct ? '✓ 已完成' : '✗ 已订正';
        checkBtn.style.opacity = '0.6';

        this.practiceResults.push({ q, userAns, correct });

        // 记录到做题库（支持"做完刷新"与"做题记录"）
        State.addRecord({
          type: 'question_answer',
          subject,
          grade,
          volume,
          qid: q.id,
          qtype: q.type,
          correct,
          userAns,
          date: State.getTodayKey()
        });

        UI.showToast(correct ? '✨ 回答正确！已更新下一题' : '💪 再接再厉！已记录');

        // 做完一道：移除当前题，补一道新的未做题进来
        setTimeout(() => this.refreshAfterAnswer(subject, grade, volume, qid), 600);

        if (correct) {
          setTimeout(() => Motivation.showCelebration('回答正确！真棒！', '✨'), 300);
        } else {
          explanation.style.display = 'block';
        }
      });

      showBtn.addEventListener('click', () => {
        explanation.style.display = explanation.style.display === 'none' ? 'block' : 'none';
      });

      wrongBtn.addEventListener('click', () => {
        State.addToWrongBook(q);
        UI.showToast('已加入错题本');
      });
    });
  },

  // 做完一道后刷新：移除已答题卡片，在列表末尾补一道新的未做题
  refreshAfterAnswer(subject, grade, volume, doneQid) {
    // 检查是否需要自动轮换（做完一半触发）
    if (this._checkAutoRotation(subject, grade, volume)) {
      // 自动轮换后重新加载页面
      setTimeout(() => UI.navigate(subject), 1000);
      return;
    }

    const allQuestions = this._getShuffledQuestions(subject, grade, volume);
    const doneIds = this.getDoneIds(subject, grade, volume);
    const listEl = document.getElementById('questionList');
    if (!listEl) return;

    // 移除已答卡片
    const doneCard = listEl.querySelector(`.question-card[data-qid="${doneQid}"]`);
    if (doneCard) {
      const section = doneCard.closest('.unit-section');
      doneCard.remove();
      // 若该单元空了，移除空单元区块
      if (section && !section.querySelector('.question-card')) section.remove();
    }

    // 找下一道未做且未在当前展示中的题
    const next = allQuestions.find(q => !doneIds.has(q.id) && !listEl.querySelector(`.question-card[data-qid="${q.id}"]`));
    if (!next) {
      // 全部做完
      if (!listEl.querySelector('.question-card')) {
        listEl.innerHTML = `
          <div class="glass-card" style="text-align:center;padding:40px;color:var(--text-secondary);">
            <div style="font-size:40px;margin-bottom:12px;">🎉</div>
            <div style="font-size:16px;font-weight:600;margin-bottom:8px;">本册题目已全部完成！</div>
            <div style="font-size:13px;color:var(--text-muted);">点击"做题记录"回顾，或"重置进度"重新练习</div>
          </div>
        `;
      }
      return;
    }

    // 追加新题卡片（简化：直接放到列表末尾的新单元区块）
    const unitNames = this.getUnitNames(subject, grade.replace('grade', ''), volume);
    const perUnit = Math.max(1, Math.ceil(allQuestions.length / Math.max(unitNames.length, 1)));
    const globalIdx = allQuestions.findIndex(x => x.id === next.id);
    const unitIdx = unitNames.length > 0 ? Math.min(Math.floor(globalIdx / perUnit), unitNames.length - 1) : 0;
    const unitName = unitNames[unitIdx] || `第${unitIdx + 1}单元`;

    // 尝试并入同单元区块，否则新建
    let targetSection = null;
    const sections = listEl.querySelectorAll('.unit-section');
    sections.forEach(s => {
      const header = s.querySelector('.unit-header span:nth-child(2)');
      if (header && header.textContent === unitName) targetSection = s;
    });

    const cardHtml = this.renderQuestion(next, listEl.querySelectorAll('.question-card').length);
    if (targetSection) {
      const qc = targetSection.querySelector('.unit-questions');
      qc.insertAdjacentHTML('beforeend', cardHtml);
    } else {
      const sec = document.createElement('div');
      sec.className = 'unit-section glass-card';
      sec.style.cssText = 'margin-bottom:16px;padding:16px;';
      sec.innerHTML = `
        <div class="unit-header" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:18px;">📚</span>
            <span style="font-size:15px;font-weight:600;color:var(--text-primary);">${unitName}</span>
          </div>
          <span class="unit-arrow" style="font-size:14px;color:var(--text-muted);transition:transform 0.3s;">▼</span>
        </div>
        <div class="unit-questions" style="margin-top:12px;">${cardHtml}</div>
      `;
      listEl.appendChild(sec);
    }

    // 给新卡片绑定事件
    const newCard = listEl.querySelector(`.question-card[data-qid="${next.id}"]`);
    if (newCard) {
      const tempWrap = document.createElement('div');
      tempWrap.appendChild(newCard.cloneNode(true));
      this.attachQuestionHandlers(tempWrap, subject, grade, volume);
      newCard.replaceWith(tempWrap.firstChild);
    }

    // 更新进度统计
    this.updateProgressBar(subject, grade, volume);
  },

  updateProgressBar(subject, grade, volume) {
    const allQuestions = this._getShuffledQuestions(subject, grade, volume);
    const doneIds = this.getDoneIds(subject, grade, volume);
    const bar = document.querySelector('.glass-card strong');
    // 简单刷新顶部进度文字
    const header = document.querySelectorAll('.glass-card')[0];
    if (header) {
      const txt = header.querySelector('div');
      if (txt) txt.innerHTML = `本册共 <strong style="color:var(--accent-dark);">${allQuestions.length}</strong> 题 · 已做 <strong style="color:var(--accent-dark);">${doneIds.size}</strong> 题 · 剩余 <strong style="color:var(--accent-dark);">${Math.max(0, allQuestions.length - doneIds.size)}</strong> 题`;
    }
  },

  showHistory(subject, grade, volume) {
    const records = State.getRecords().filter(r => r.type === 'question_answer' && r.subject === subject && r.grade === grade && r.volume === volume);
    if (records.length === 0) {
      UI.showToast('还没有做题记录，先做几道题吧！');
      return;
    }
    const allQuestions = this._getShuffledQuestions(subject, grade, volume);
    const gradeName = { grade4: '四年级', grade5: '五年级', grade6: '六年级' }[grade];
    const correct = records.filter(r => r.correct).length;
    const wrong = records.length - correct;

    const listHtml = records.slice().reverse().slice(0, 100).map(r => {
      const q = allQuestions.find(x => x.id === r.qid);
      if (!q) return '';
      return `
        <div class="question-card" style="margin-bottom:10px;${r.correct ? '' : 'border-left:3px solid #ff8a80;'}">
          <div class="question-header">
            <span class="question-type">${q.type}</span>
            <span style="font-size:12px;color:${r.correct ? '#4caf50' : '#e74c3c'};">${r.correct ? '✓ 正确' : '✗ 错误'}</span>
          </div>
          <div class="question-text" style="font-size:13px;">${q.text}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">你的答案：${r.userAns ?? '—'} ｜ 正确答案：${q.answer}</div>
          ${q.explanation ? `<div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">解析：${q.explanation}</div>` : ''}
        </div>
      `;
    }).join('');

    UI.showDetail(`
      <div style="max-width:600px;">
        <div style="margin-bottom:12px;font-size:13px;color:var(--text-muted);">
          ${gradeName} · ${volume} · 共 ${records.length} 题记录（正确 ${correct} · 错误 ${wrong}）
        </div>
        ${listHtml || '<div style="text-align:center;padding:20px;color:var(--text-muted);">暂无记录</div>'}
        <div style="text-align:center;margin-top:16px;">
          <button class="btn-secondary" id="closeHistory">关闭</button>
        </div>
      </div>
    `, '📋 做题记录库');
    setTimeout(() => {
      const b = document.getElementById('closeHistory');
      if (b) b.addEventListener('click', () => UI.closeDetail());
    }, 100);
  },

  resetDone(subject, grade, volume) {
    if (!confirm('确定要重置本册做题进度吗？已做记录将被清除，题目会重新出现。')) return;
    const records = State.getRecords().filter(r => !(r.type === 'question_answer' && r.subject === subject && r.grade === grade && r.volume === volume));
    Storage.set(Storage.KEYS.RECORDS, records);
    this.practiceResults = [];
    this._reshuffle(subject, grade, volume);
    UI.showToast('进度已重置，题目已重新洗牌');
    UI.navigate(subject);
  },

  showPracticeSummary(subject) {
    if (this.practiceResults.length === 0) {
      UI.showToast('还没有做题记录，先做几道题吧！');
      return;
    }
    const gradeName = { grade4: '四年级', grade5: '五年级', grade6: '六年级' }[State.currentGrade];
    const analysis = AIAnalysis.analyzePractice(subject, gradeName, State.currentTab, this.practiceResults);
    const aiCardHtml = AIAnalysis.renderAnalysisCard(analysis, 'practice');
    UI.showDetail(`
      <div style="max-width:600px;">
        <div style="margin-bottom:16px;">
          <h3 style="margin-bottom:8px;">🤖 练习AI总结</h3>
          <div style="font-size:13px;color:var(--text-muted);">${gradeName} · ${State.currentTab} · 本次共${this.practiceResults.length}题</div>
        </div>
        ${aiCardHtml}
        <div style="text-align:center;margin-top:16px;">
          <button class="btn-secondary" id="closeSummary">关闭</button>
        </div>
      </div>
    `, '练习总结');
    setTimeout(() => {
      const b = document.getElementById('closeSummary');
      if (b) b.addEventListener('click', () => UI.closeDetail());
    }, 100);
  }
};
