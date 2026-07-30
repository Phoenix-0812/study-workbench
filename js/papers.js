/* 真题试卷模块 - 100分试卷 + 答题卡 + 自动计时 + AI总结 */
const Papers = {
  examStartTime: 0,
  examTimerInterval: null,

  render() {
    const subjectFilters = [
      { value: 'all', label: '全部科目' },
      { value: '语文', label: '语文' },
      { value: '数学', label: '数学' },
      { value: '英语', label: '英语' }
    ];
    const gradeFilters = [
      { value: 'all', label: '全部年级' },
      { value: '四年级', label: '四年级' },
      { value: '五年级', label: '五年级' },
      { value: '六年级', label: '六年级' }
    ];
    const typeFilters = ['全部类型', '单元卷', '月考卷', '期中卷', '期末卷', '模拟卷', '综合卷'];

    let html = `
      <div class="page-header">
        <div>
          <div class="page-title">📝 真题试卷</div>
          <div class="page-subtitle">精选各地真题，100分满分在线作答批改</div>
        </div>
      </div>

      <div class="paper-filter">
        ${subjectFilters.map(f => `<div class="filter-chip ${f.value === 'all' ? 'active' : ''}" data-subject="${f.value}">${f.label}</div>`).join('')}
      </div>
      <div class="paper-filter">
        ${gradeFilters.map(f => `<div class="filter-chip ${f.value === 'all' ? 'active' : ''}" data-grade="${f.value}">${f.label}</div>`).join('')}
      </div>
      <div class="paper-filter">
        ${typeFilters.map((t, i) => `<div class="filter-chip ${i === 0 ? 'active' : ''}" data-type="${t}">${t}</div>`).join('')}
      </div>

      <div id="paperList"></div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      this.renderPaperList(wrap);
      wrap.querySelectorAll('[data-subject]').forEach(f => {
        f.addEventListener('click', () => {
          wrap.querySelectorAll('[data-subject]').forEach(x => x.classList.remove('active'));
          f.classList.add('active');
          this.renderPaperList(wrap);
        });
      });
      wrap.querySelectorAll('[data-grade]').forEach(f => {
        f.addEventListener('click', () => {
          wrap.querySelectorAll('[data-grade]').forEach(x => x.classList.remove('active'));
          f.classList.add('active');
          this.renderPaperList(wrap);
        });
      });
      wrap.querySelectorAll('[data-type]').forEach(f => {
        f.addEventListener('click', () => {
          wrap.querySelectorAll('[data-type]').forEach(x => x.classList.remove('active'));
          f.classList.add('active');
          this.renderPaperList(wrap);
        });
      });
    }, 0);

    return wrap;
  },

  renderPaperList(container) {
    const activeSubject = container.querySelector('[data-subject].active').dataset.subject;
    const activeGrade = container.querySelector('[data-grade].active').dataset.grade;
    const activeType = container.querySelector('[data-type].active').dataset.type;

    let papers = PAPERS_DATA.filter(p => {
      if (activeSubject !== 'all' && p.subject !== activeSubject) return false;
      if (activeGrade !== 'all' && p.grade !== activeGrade) return false;
      if (activeType !== '全部类型' && p.type !== activeType) return false;
      return true;
    });

    const list = container.querySelector('#paperList');
    const subjectIcons = { '语文': '📖', '数学': '🔢', '英语': '🔤' };

    if (papers.length === 0) {
      list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">暂无匹配的试卷</div>';
      return;
    }

    list.innerHTML = papers.map(p => `
      <div class="paper-card" data-paper="${p.id}">
        <div class="paper-icon">${subjectIcons[p.subject] || '📝'}</div>
        <div class="paper-info">
          <div class="paper-title">${p.title}</div>
          <div class="paper-meta">
            <span>${p.grade}</span>
            <span>${p.type}</span>
            <span>${p.region}</span>
            <span>满分${p.totalScore}分</span>
            <span>${p.questions.length}题</span>
            <span>⏱️${p.timeLimit || 90}分钟</span>
          </div>
        </div>
        <button class="paper-action">查看详情</button>
      </div>
    `).join('');

    list.querySelectorAll('.paper-card').forEach(card => {
      card.addEventListener('click', () => {
        this.showPaperDetail(card.dataset.paper);
      });
    });
  },

  /* 试卷详情页 - 有开始按钮 */
  showPaperDetail(paperId) {
    const paper = PAPERS_DATA.find(p => p.id === paperId);
    if (!paper) return;

    State.currentPaper = paper;
    State.examAnswers = {};

    // 按题型分组统计
    const typeGroups = {};
    paper.questions.forEach(q => {
      if (!typeGroups[q.type]) typeGroups[q.type] = [];
      typeGroups[q.type].push(q);
    });

    const subjectIcons = { '语文': '📖', '数学': '🔢', '英语': '🔤' };
    let totalScore = 0;
    Object.values(typeGroups).forEach(qs => {
      qs.forEach(q => totalScore += q.score);
    });

    const html = `
      <div class="exam-container">
        <div class="exam-header">
          <div class="exam-title">${subjectIcons[paper.subject] || '📝'} ${paper.title}</div>
          <div class="exam-info">
            <span>${paper.grade}</span>
            <span>${paper.type}</span>
            <span>${paper.region}</span>
            <span>⏱️ ${paper.timeLimit || 90}分钟</span>
            <span>📊 满分${paper.totalScore}分</span>
            <span>📝 ${paper.questions.length}题</span>
          </div>
        </div>

        <div class="glass-card" style="padding:20px;margin:16px 0;">
          <div style="font-size:15px;font-weight:600;margin-bottom:14px;">📋 试卷结构</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;">
            ${Object.entries(typeGroups).map(([type, qs]) => {
              const s = qs.reduce((sum, q) => sum + q.score, 0);
              return `<div style="background:var(--bg-secondary);padding:12px;border-radius:var(--radius-md);text-align:center;">
                <div style="font-size:13px;color:var(--text-secondary);">${type}</div>
                <div style="font-size:18px;font-weight:600;color:var(--text-primary);margin:4px 0;">${qs.length}题</div>
                <div style="font-size:12px;color:var(--accent);">${s}分</div>
              </div>`;
            }).join('')}
          </div>
        </div>

        <div class="glass-card" style="padding:20px;margin:16px 0;text-align:center;">
          <div style="font-size:14px;color:var(--text-muted);margin-bottom:16px;">准备好就开始吧！计时会自动开始</div>
          <button class="btn-primary" id="startExamBtn" style="font-size:18px;padding:16px 48px;">🚀 开始考试</button>
        </div>

        <div class="exam-nav">
          <button class="exam-nav-btn" id="backToPapers">◀ 返回试卷列表</button>
        </div>
      </div>
    `;

    const container = document.getElementById('pageContainer');
    container.innerHTML = html;
    container.classList.add('page-enter');

    document.getElementById('startExamBtn').addEventListener('click', () => {
      this.startExam(paper);
    });
    document.getElementById('backToPapers').addEventListener('click', () => {
      UI.navigate('papers');
    });
  },

  /* 开始考试 - 自动计时 */
  startExam(paper) {
    State.currentPaper = paper;
    State.examAnswers = {};
    State.examCurrentQ = 0;
    this.examStartTime = Date.now();

    const questions = paper.questions;

    const html = `
      <div class="exam-container">
        <div class="exam-header">
          <div class="exam-title">${paper.title}</div>
          <div class="exam-info">
            <span id="examTimer">⏱️ 00:00:00</span>
            <span>📝 共${questions.length}题</span>
            <span>📊 满分${paper.totalScore}分</span>
            <button class="exam-nav-btn" id="toggleAnswerCard" style="padding:4px 12px;font-size:13px;">📋 答题卡</button>
          </div>
        </div>

        <div id="answerCardPanel" style="display:none;margin-bottom:16px;"></div>

        <div id="examQuestions"></div>

        <div class="exam-nav">
          <button class="exam-nav-btn" id="prevQ">◀ 上一题</button>
          <span id="qProgress" style="font-size:14px;color:var(--text-muted);align-self:center;">1 / ${questions.length}</span>
          <button class="exam-nav-btn" id="nextQ">下一题 ▶</button>
          <button class="exam-nav-btn submit" id="submitExam">提交答卷</button>
        </div>
      </div>
    `;

    const container = document.getElementById('pageContainer');
    container.innerHTML = html;
    container.classList.add('page-enter');

    this.renderExamQuestion(questions, 0);
    this.renderAnswerCard(questions);

    // 开始计时
    this.examTimerInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);

    document.getElementById('prevQ').addEventListener('click', () => {
      if (State.examCurrentQ > 0) {
        State.examCurrentQ--;
        this.renderExamQuestion(questions, State.examCurrentQ);
        this.updateAnswerCardActive();
      }
    });
    document.getElementById('nextQ').addEventListener('click', () => {
      if (State.examCurrentQ < questions.length - 1) {
        State.examCurrentQ++;
        this.renderExamQuestion(questions, State.examCurrentQ);
        this.updateAnswerCardActive();
      }
    });
    document.getElementById('submitExam').addEventListener('click', () => {
      this.confirmSubmit(paper, questions);
    });
    document.getElementById('toggleAnswerCard').addEventListener('click', () => {
      const panel = document.getElementById('answerCardPanel');
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
  },

  updateTimer() {
    const elapsed = Math.floor((Date.now() - this.examStartTime) / 1000);
    const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
    const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    const el = document.getElementById('examTimer');
    if (el) el.textContent = `⏱️ ${h}:${m}:${s}`;
  },

  /* 答题卡 */
  renderAnswerCard(questions) {
    const panel = document.getElementById('answerCardPanel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="glass-card" style="padding:16px;">
        <div style="font-size:14px;font-weight:600;margin-bottom:12px;">📋 答题卡</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(40px,1fr));gap:8px;" id="answerCardGrid">
          ${questions.map((q, i) => {
            const answered = State.examAnswers[q.id] !== undefined;
            const isCurrent = i === State.examCurrentQ;
            return `<div class="answer-card-cell ${answered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" data-qidx="${i}" style="
              width:40px;height:40px;display:flex;align-items:center;justify-content:center;
              border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;
              background:${answered ? 'var(--accent)' : 'var(--bg-secondary)'};
              color:${answered ? '#fff' : 'var(--text-secondary)'};
              border:2px solid ${isCurrent ? 'var(--accent-dark)' : 'transparent'};
              transition:all 0.2s;
            ">${i + 1}</div>`;
          }).join('')}
        </div>
        <div style="display:flex;gap:16px;margin-top:12px;font-size:12px;color:var(--text-muted);">
          <span><span style="display:inline-block;width:12px;height:12px;background:var(--accent);border-radius:4px;vertical-align:middle;"></span> 已作答</span>
          <span><span style="display:inline-block;width:12px;height:12px;background:var(--bg-secondary);border-radius:4px;vertical-align:middle;"></span> 未作答</span>
        </div>
      </div>
    `;

    panel.querySelectorAll('.answer-card-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        State.examCurrentQ = parseInt(cell.dataset.qidx);
        this.renderExamQuestion(questions, State.examCurrentQ);
        this.updateAnswerCardActive();
      });
    });
  },

  updateAnswerCardActive() {
    const cells = document.querySelectorAll('.answer-card-cell');
    cells.forEach((cell, i) => {
      const q = State.currentPaper.questions[i];
      const answered = State.examAnswers[q.id] !== undefined;
      const isCurrent = i === State.examCurrentQ;
      cell.style.background = answered ? 'var(--accent)' : 'var(--bg-secondary)';
      cell.style.color = answered ? '#fff' : 'var(--text-secondary)';
      cell.style.border = `2px solid ${isCurrent ? 'var(--accent-dark)' : 'transparent'}`;
    });

    const progress = document.getElementById('qProgress');
    if (progress) {
      progress.textContent = `${State.examCurrentQ + 1} / ${State.currentPaper.questions.length}`;
    }
  },

  renderExamQuestion(questions, idx) {
    const q = questions[idx];
    const container = document.getElementById('examQuestions');
    const isChoice = q.type === '选择题' || q.type === '单项选择';
    const isText = q.type === '阅读理解' || q.type === '作文' || q.type === '写作' || q.type === '解答题' || q.type === '应用题';

    let optionsHtml = '';
    if (isChoice && q.options) {
      optionsHtml = `<div class="options-list">${q.options.map((opt, i) => `
        <div class="option-item" data-idx="${i}">
          <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
          <span>${opt}</span>
        </div>
      `).join('')}</div>`;
    } else if (isText) {
      const passage = q.passage ? `<div class="reading-passage" style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:12px;font-size:14px;line-height:1.8;">${q.passage}</div>` : '';
      optionsHtml = `${passage}<textarea class="answer-input" rows="5" placeholder="请在此作答..."></textarea>`;
    } else {
      optionsHtml = `<input type="text" class="answer-input" placeholder="请输入答案..." />`;
    }

    container.innerHTML = `
      <div class="question-card">
        <div class="question-header">
          <span class="question-number">第 ${idx + 1} / ${questions.length} 题</span>
          <span class="question-type">${q.type}</span>
          <span class="question-score" style="color:var(--text-muted);font-size:13px;">（${q.score}分）</span>
        </div>
        <div class="question-text">${q.text}</div>
        ${optionsHtml}
      </div>
    `;

    // Restore answer
    const saved = State.examAnswers[q.id];
    if (saved !== undefined) {
      if (isChoice) {
        const options = container.querySelectorAll('.option-item');
        options.forEach(o => {
          if (parseInt(o.dataset.idx) === saved) o.classList.add('selected');
        });
      } else {
        const input = container.querySelector('.answer-input');
        if (input) input.value = saved;
      }
    }

    // Attach handlers
    const options = container.querySelectorAll('.option-item');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        State.examAnswers[q.id] = parseInt(opt.dataset.idx);
        this.updateAnswerCardActive();
      });
    });

    const input = container.querySelector('.answer-input');
    if (input) {
      input.addEventListener('input', () => {
        State.examAnswers[q.id] = input.value;
        this.updateAnswerCardActive();
      });
    }
  },

  confirmSubmit(paper, questions) {
    const answered = Object.keys(State.examAnswers).length;
    const unanswered = questions.length - answered;
    let msg = '确定要提交答卷吗？';
    if (unanswered > 0) {
      msg = `还有${unanswered}道题未作答，确定要提交吗？`;
    }
    if (!confirm(msg)) return;

    clearInterval(this.examTimerInterval);
    const timeUsed = Math.floor((Date.now() - this.examStartTime) / 1000);
    this.submitExam(paper, questions, timeUsed);
  },

  submitExam(paper, questions, timeUsed) {
    let earnedScore = 0;
    let correctCount = 0;
    const results = questions.map(q => {
      const userAns = State.examAnswers[q.id];
      let correct = false;
      if (q.type === '选择题' || q.type === '单项选择') {
        correct = userAns === q.answer;
      } else {
        if (userAns !== undefined && userAns !== '') {
          correct = String(userAns).trim().toLowerCase() === String(q.answer).trim().toLowerCase();
        }
      }
      if (correct) {
        earnedScore += q.score;
        correctCount++;
      } else {
        State.addToWrongBook(q);
      }
      return { q, userAns, correct };
    });

    const totalScore = paper.totalScore;

    State.addRecord({
      type: 'paper_score',
      subject: paper.subject,
      paperId: paper.id,
      score: earnedScore,
      total: totalScore,
      correctCount,
      totalCount: questions.length,
      timeUsed,
      timestamp: Date.now(),
      date: State.getTodayKey()
    });

    // AI分析
    const analysis = AIAnalysis.analyzeExam(paper, results, earnedScore, totalScore, timeUsed);
    const aiCardHtml = AIAnalysis.renderAnalysisCard(analysis, 'exam');

    const timeStr = timeUsed > 0 ? `${Math.floor(timeUsed / 60)}分${timeUsed % 60}秒` : '未计时';

    const html = `
      <div class="exam-container">
        <div class="exam-header">
          <div class="exam-title">📊 作答结果</div>
          <div class="exam-info">
            <span>⏱️ 用时：${timeStr}</span>
            <span>📝 ${questions.length}题</span>
            <span>✅ 答对${correctCount}题</span>
          </div>
        </div>

        <div class="result-card glass-card">
          <div class="result-label">你的得分</div>
          <div class="result-score">${earnedScore}<span style="font-size:24px;color:var(--text-muted);">/${totalScore}</span></div>
          <div class="result-stats">
            <div class="result-stat">
              <div class="stat-value">${correctCount}</div>
              <div class="stat-label">答对题数</div>
            </div>
            <div class="result-stat">
              <div class="stat-value">${questions.length - correctCount}</div>
              <div class="stat-label">答错题数</div>
            </div>
            <div class="result-stat">
              <div class="stat-value">${Math.round(earnedScore / totalScore * 100)}%</div>
              <div class="stat-label">得分率</div>
            </div>
          </div>
        </div>

        ${aiCardHtml}

        <div style="margin-top:20px;">
          <div class="home-section-title">📋 答题详情</div>
          ${results.map((r, i) => `
            <div class="question-card">
              <div class="question-header">
                <span class="question-number">第${i + 1}题（${r.q.score}分）</span>
                <span class="question-type" style="background:${r.correct ? 'var(--mint-light)' : '#ffd6d6'};color:${r.correct ? '#2d5a3d' : '#6a2d2d'};">${r.correct ? '✓ 正确' : '✗ 错误'}</span>
              </div>
              <div class="question-text">${r.q.text}</div>
              <div class="wrongbook-answer">
                <span class="correct">正确答案：${r.q.answer}</span>
                <span class="your">你的答案：${r.userAns !== undefined && r.userAns !== '' ? r.userAns : '未作答'}</span>
              </div>
              <div class="answer-explanation" style="display:block;">
                <div class="explanation-title">解析</div>
                <div>${r.q.explanation}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="exam-nav">
          <button class="exam-nav-btn" id="backToPapers">返回试卷列表</button>
          <button class="exam-nav-btn" id="reviewWrong">复习错题</button>
        </div>
      </div>
    `;

    const container = document.getElementById('pageContainer');
    container.innerHTML = html;
    container.classList.add('page-enter');

    document.getElementById('backToPapers').addEventListener('click', () => {
      UI.navigate('papers');
    });
    document.getElementById('reviewWrong').addEventListener('click', () => {
      UI.navigate('wrongbook');
    });

    Motivation.showPaperCelebration(earnedScore, totalScore);
  }
};
