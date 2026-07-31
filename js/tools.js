/* 学习工具模块 */
const Tools = {
  /* ========== 打卡日历 ========== */
  renderCheckin() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const todayKey = State.getTodayKey();
    const checkins = State.getCheckins();
    const streak = Motivation.getCurrentStreak();

    let html = `
      <div class="page-header">
        <div>
          <div class="page-title">📅 打卡日历</div>
          <div class="page-subtitle">坚持每一天，成就更好的自己</div>
        </div>
        <button class="btn-primary" id="checkinBtn">✅ 立即打卡</button>
      </div>

      <div class="stats-overview">
        <div class="stats-card">
          <div class="stats-icon">🔥</div>
          <div class="stats-value">${streak}</div>
          <div class="stats-label">连续打卡(天)</div>
        </div>
        <div class="stats-card">
          <div class="stats-icon">📆</div>
          <div class="stats-value">${Object.keys(checkins).length}</div>
          <div class="stats-label">累计打卡(天)</div>
        </div>
        <div class="stats-card">
          <div class="stats-icon">📊</div>
          <div class="stats-value">${this.getMonthCheckins(year, month)}</div>
          <div class="stats-label">本月打卡(天)</div>
        </div>
      </div>

      <div class="calendar-container">
        <div class="calendar-header">
          <button class="calendar-nav-btn" id="prevMonth">◀</button>
          <div class="calendar-title">${year}年${month + 1}月</div>
          <button class="calendar-nav-btn" id="nextMonth">▶</button>
        </div>
        <div class="calendar-grid">
          <div class="calendar-weekday">日</div>
          <div class="calendar-weekday">一</div>
          <div class="calendar-weekday">二</div>
          <div class="calendar-weekday">三</div>
          <div class="calendar-weekday">四</div>
          <div class="calendar-weekday">五</div>
          <div class="calendar-weekday">六</div>
          ${this.renderMonthDays(year, month, checkins, todayKey)}
        </div>
      </div>

      <div class="heatmap-container">
        <div class="home-section-title">📊 年度打卡热力图</div>
        <div class="heatmap-grid">${this.renderHeatmap(year)}</div>
        <div class="heatmap-legend">
          <span>少</span>
          <div class="heatmap-legend-cell" style="background:var(--bg-glass);"></div>
          <div class="heatmap-legend-cell level-1" style="background:rgba(255,182,193,0.3);"></div>
          <div class="heatmap-legend-cell level-2" style="background:rgba(255,182,193,0.5);"></div>
          <div class="heatmap-legend-cell level-3" style="background:rgba(255,182,193,0.75);"></div>
          <div class="heatmap-legend-cell level-4" style="background:var(--pink);"></div>
          <span>多</span>
        </div>
      </div>

      <div id="dayDetail" style="margin-top:20px;"></div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      wrap.querySelector('#checkinBtn').addEventListener('click', () => {
        this.doCheckin(wrap);
      });

      let currentYear = year, currentMonth = month;
      wrap.querySelector('#prevMonth').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) { currentMonth = 11; currentYear--; }
        UI.navigate('checkin');
      });
      wrap.querySelector('#nextMonth').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) { currentMonth = 0; currentYear++; }
        UI.navigate('checkin');
      });

      // Day click
      wrap.querySelectorAll('.calendar-day[data-day]').forEach(day => {
        day.addEventListener('click', () => {
          const d = day.dataset.day;
          this.showDayDetail(wrap, year, month, d, checkins);
        });
      });

      // Heatmap click
      wrap.querySelectorAll('.heatmap-cell').forEach(cell => {
        cell.addEventListener('click', () => {
          const date = cell.dataset.date;
          if (date && checkins[date]) {
            UI.showDetail(`<p>日期：${date}</p><p>打卡时间：${new Date(checkins[date].timestamp).toLocaleString('zh-CN')}</p>`, '打卡详情');
          }
        });
      });
    }, 0);

    return wrap;
  },

  getMonthCheckins(year, month) {
    const checkins = State.getCheckins();
    return Object.keys(checkins).filter(d => {
      const dt = new Date(d);
      return dt.getFullYear() === year && dt.getMonth() === month;
    }).length;
  },

  renderMonthDays(year, month, checkins, todayKey) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let html = '';

    for (let i = 0; i < firstDay; i++) {
      html += '<div class="calendar-day empty"></div>';
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const checked = checkins[dateStr];
      const classes = ['calendar-day'];
      if (dateStr === todayKey) classes.push('today');
      if (checked) classes.push('checked');
      if (checked) classes.push('has-record');
      html += `<div class="${classes.join(' ')}" data-day="${d}">${d}</div>`;
    }

    return html;
  },

  renderHeatmap(year) {
    const checkins = State.getCheckins();
    let html = '';
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    for (let weekStart = new Date(startDate); weekStart <= endDate; weekStart.setDate(weekStart.getDate() + 7)) {
      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const date = new Date(weekStart);
        date.setDate(date.getDate() + dayOffset);
        if (date > endDate) break;
        if (date < startDate) continue;

        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        const hasCheckin = !!checkins[dateStr];
        const level = hasCheckin ? (checkins[dateStr].minutes >= 60 ? 'level-3' : checkins[dateStr].minutes >= 30 ? 'level-2' : 'level-1') : '';
        html += `<div class="heatmap-cell ${level}" data-date="${dateStr}" title="${dateStr}"></div>`;
      }
    }
    return html;
  },

  doCheckin(container) {
    const today = State.getTodayKey();
    const checkins = State.getCheckins();
    if (checkins[today]) {
      UI.showToast('今天已经打过卡啦！');
      return;
    }
    State.setCheckin(today, { subject: 'all', minutes: 0 });
    Motivation.showCheckinCelebration();
    setTimeout(() => UI.navigate('checkin'), 1000);
  },

  showDayDetail(container, year, month, day, checkins) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const record = checkins[dateStr];
    const detail = container.querySelector('#dayDetail');

    if (record) {
      detail.innerHTML = `
        <div class="glass-card" style="padding:20px;">
          <h3 style="margin-bottom:12px;">📅 ${dateStr} 打卡详情</h3>
          <p>✅ 打卡时间：${new Date(record.timestamp).toLocaleString('zh-CN')}</p>
          <p>📚 学习科目：${record.subject || '综合'}</p>
          <p>⏱️ 学习时长：${record.minutes || 0} 分钟</p>
        </div>
      `;
    } else {
      detail.innerHTML = `
        <div class="glass-card" style="padding:20px;text-align:center;color:var(--text-muted);">
          日期：${dateStr}（暂无打卡记录）
        </div>
      `;
    }
  },

  /* ========== 番茄钟 ========== */
  renderPomodoro() {
    const pomodoro = State.getPomodoros();
    const html = `
      <div class="page-header">
        <div>
          <div class="page-title">🍅 番茄专注</div>
          <div class="page-subtitle">专注学习，提升效率</div>
        </div>
      </div>

      <div class="pomodoro-container glass-card">
        <div class="pomodoro-mode">
          <button class="pomodoro-btn active" data-mode="work">📚 专注 25分钟</button>
          <button class="pomodoro-btn" data-mode="short">☕ 短休 5分钟</button>
          <button class="pomodoro-btn" data-mode="long">🌙 长休 15分钟</button>
        </div>
        <div class="pomodoro-timer" id="timer">25:00</div>
        <div class="pomodoro-controls">
          <button class="pomodoro-control-btn pomodoro-reset" id="resetBtn">🔄</button>
          <button class="pomodoro-control-btn pomodoro-start" id="startBtn">▶</button>
          <button class="pomodoro-control-btn pomodoro-reset" id="skipBtn">⏭</button>
        </div>
        <div class="pomodoro-stats">
          <div class="pomodoro-stat">
            <div class="pomodoro-stat-value">${pomodoro.count}</div>
            <div class="pomodoro-stat-label">总番茄数</div>
          </div>
          <div class="pomodoro-stat">
            <div class="pomodoro-stat-value">${pomodoro.totalMinutes}</div>
            <div class="pomodoro-stat-label">专注分钟</div>
          </div>
          <div class="pomodoro-stat">
            <div class="pomodoro-stat-value">${this.getTodayPomodoros()}</div>
            <div class="pomodoro-stat-label">今日番茄</div>
          </div>
        </div>
      </div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      let mode = 'work';
      let duration = 25 * 60;
      let remaining = duration;
      let interval = null;
      let isRunning = false;

      const timerEl = wrap.querySelector('#timer');
      const startBtn = wrap.querySelector('#startBtn');
      const resetBtn = wrap.querySelector('#resetBtn');
      const skipBtn = wrap.querySelector('#skipBtn');

      const updateDisplay = () => {
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;
        timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        document.title = `${timerEl.textContent} · 学习工作台`;
      };

      updateDisplay();

      wrap.querySelectorAll('.pomodoro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          mode = btn.dataset.mode;
          duration = mode === 'work' ? 25 * 60 : mode === 'short' ? 5 * 60 : 15 * 60;
          remaining = duration;
          wrap.querySelectorAll('.pomodoro-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateDisplay();
          if (isRunning) {
            clearInterval(interval);
            isRunning = false;
            startBtn.textContent = '▶';
          }
        });
      });

      startBtn.addEventListener('click', () => {
        if (isRunning) {
          clearInterval(interval);
          isRunning = false;
          startBtn.textContent = '▶';
        } else {
          isRunning = true;
          startBtn.textContent = '⏸';
          const startTime = Date.now();
          interval = setInterval(() => {
            remaining--;
            updateDisplay();
            if (remaining <= 0) {
              clearInterval(interval);
              isRunning = false;
              startBtn.textContent = '▶';
              this.onPomodoroComplete(mode);
            }
          }, 1000);
        }
      });

      resetBtn.addEventListener('click', () => {
        clearInterval(interval);
        isRunning = false;
        remaining = duration;
        startBtn.textContent = '▶';
        updateDisplay();
      });

      skipBtn.addEventListener('click', () => {
        remaining = 0;
        updateDisplay();
        if (isRunning) clearInterval(interval);
        isRunning = false;
        startBtn.textContent = '▶';
        this.onPomodoroComplete(mode);
      });
    }, 0);

    return wrap;
  },

  getTodayPomodoros() {
    const p = State.getPomodoros();
    const today = State.getTodayKey();
    return p.history.filter(h => h.date === today).length;
  },

  onPomodoroComplete(mode) {
    const minutes = mode === 'work' ? 25 : mode === 'short' ? 5 : 15;
    if (mode === 'work') {
      State.addPomodoro(minutes);
      State.addStudyTime(minutes);
      Motivation.showCelebration('🍅 番茄钟完成！干得漂亮！', '🎉');
    } else {
      Motivation.showCelebration('休息结束，准备开始新的一轮吧！', '☕');
    }
    setTimeout(() => UI.navigate('pomodoro'), 2000);
  },

  /* ========== 错题本 ========== */
  renderWrongBook() {
    const wrongBook = State.getWrongBook();
    const aiAnalysis = AIAnalysis.analyzeWrongBook(wrongBook);
    const aiCardHtml = AIAnalysis.renderAnalysisCard(aiAnalysis, 'wrongbook');

    const html = `
      <div class="page-header">
        <div>
          <div class="page-title">❌ 错题本</div>
          <div class="page-subtitle">共 ${wrongBook.length} 道错题，反复练习查漏补缺</div>
        </div>
      </div>

      ${aiCardHtml}

      <div class="wrongbook-filter">
        <div class="filter-chip active" data-filter="all">全部</div>
        <div class="filter-chip" data-filter="chinese">语文</div>
        <div class="filter-chip" data-filter="math">数学</div>
        <div class="filter-chip" data-filter="english">英语</div>
      </div>

      <div id="wrongList"></div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      this.renderWrongList(wrap, 'all');
      wrap.querySelectorAll('[data-filter]').forEach(f => {
        f.addEventListener('click', () => {
          wrap.querySelectorAll('[data-filter]').forEach(x => x.classList.remove('active'));
          f.classList.add('active');
          this.renderWrongList(wrap, f.dataset.filter);
        });
      });
    }, 0);

    return wrap;
  },

  renderWrongList(container, filter) {
    const wrongBook = State.getWrongBook();
    const filtered = filter === 'all' ? wrongBook : wrongBook.filter(q => q.subject === filter);
    const list = container.querySelector('#wrongList');

    if (filtered.length === 0) {
      list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">暂无错题，太棒了！</div>';
      return;
    }

    list.innerHTML = filtered.map(q => `
      <div class="wrongbook-item" data-qid="${q.id}">
        <div class="question-header">
          <span class="question-type">${q.type}</span>
          <span class="question-difficulty">${q.subject || ''}</span>
        </div>
        <div class="wrongbook-question">${q.text}</div>
        <div class="wrongbook-answer">
          <span class="correct">✓ 答案：${q.answer}</span>
        </div>
        <div class="answer-explanation" style="display:block;margin-top:8px;">
          <div class="explanation-title">解析</div>
          <div>${q.explanation}</div>
        </div>
        <div class="wrongbook-actions" style="margin-top:12px;">
          <button class="btn-check" data-action="practice">重新练习</button>
          <button class="btn-show-answer" data-action="remove">移除</button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('[data-action="remove"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.closest('.wrongbook-item').dataset.qid;
        State.removeFromWrongBook(qid);
        UI.showToast('已从错题本移除');
        this.renderWrongList(container, filter);
      });
    });

    list.querySelectorAll('[data-action="practice"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.closest('.wrongbook-item').dataset.qid;
        const q = wrongBook.find(x => x.id === qid);
        if (q) {
          UI.showDetail(`
            <div style="margin-bottom:16px;">
              <strong>${q.text}</strong>
            </div>
            <div class="options-list">
              ${q.options ? q.options.map((opt, i) => `
                <div class="option-item" data-idx="${i}">
                  <span class="option-letter">${String.fromCharCode(65 + i)}.</span>
                  <span>${opt}</span>
                </div>
              `).join('') : '<input type="text" class="answer-input" placeholder="请输入你的答案..."/>'}
            </div>
            <div style="margin-top:16px;">
              <button class="btn-check" id="submitPractice">提交答案</button>
            </div>
          `, '错题重做');

          setTimeout(() => {
            const submitBtn = document.getElementById('submitPractice');
            if (submitBtn) {
              submitBtn.addEventListener('click', () => {
                const input = document.querySelector('#detailBody .answer-input');
                let correct = false;
                if (input) {
                  correct = input.value.trim().toLowerCase() === String(q.answer).toLowerCase();
                } else {
                  const selected = document.querySelector('#detailBody .option-item.selected');
                  if (selected) {
                    correct = parseInt(selected.dataset.idx) === q.answer;
                  }
                }
                UI.closeDetail();
                if (correct) {
                  State.removeFromWrongBook(qid);
                  UI.showToast('✨ 回答正确！已从错题本移除');
                  Motivation.showCelebration('答对啦！真棒！', '🎉');
                } else {
                  UI.showToast('💪 再接再厉！');
                }
              });
            }
            document.querySelectorAll('#detailBody .option-item').forEach(opt => {
              opt.addEventListener('click', () => {
                document.querySelectorAll('#detailBody .option-item').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
              });
            });
          }, 100);
        }
      });
    });
  },

  /* ========== 数据统计 ========== */
  renderStats() {
    const records = State.getRecords();
    const studyTime = State.getStudyTime();
    const pomodoros = State.getPomodoros();
    const wrongBook = State.getWrongBook();
    const checkins = State.getCheckins();

    // Per-subject counts
    const subjectCounts = {};
    records.forEach(r => {
      if (r.subject) {
        subjectCounts[r.subject] = (subjectCounts[r.subject] || 0) + 1;
      }
    });

    // Weekly data (last 7 days)
    const weekly = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const count = records.filter(r => r.date === key).length;
      weekly.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, count, date: key });
    }

    const maxCount = Math.max(...weekly.map(w => w.count), 5);
    const subjectColors = { chinese: 'var(--pink)', math: 'var(--mint)', english: 'var(--blue)' };
    const subjectNames = { chinese: '语文', math: '数学', english: '英语' };

    const html = `
      <div class="page-header">
        <div>
          <div class="page-title">📊 数据统计</div>
          <div class="page-subtitle">了解你的学习情况</div>
        </div>
      </div>

      <div class="stats-overview">
        <div class="stats-card">
          <div class="stats-icon">📚</div>
          <div class="stats-value">${records.length}</div>
          <div class="stats-label">总做题数</div>
        </div>
        <div class="stats-card">
          <div class="stats-icon">⏰</div>
          <div class="stats-value">${Math.floor(studyTime.total / 60)}</div>
          <div class="stats-label">学习小时</div>
        </div>
        <div class="stats-card">
          <div class="stats-icon">🍅</div>
          <div class="stats-value">${pomodoros.count}</div>
          <div class="stats-label">番茄总数</div>
        </div>
        <div class="stats-card">
          <div class="stats-icon">📅</div>
          <div class="stats-value">${Object.keys(checkins).length}</div>
          <div class="stats-label">打卡天数</div>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-title">📈 近7天做题量</div>
        <div class="bar-chart">
          ${weekly.map(w => `
            <div class="bar-item" data-date="${w.date}">
              <div class="bar" style="height:${(w.count / maxCount) * 100}%;">
                <span class="bar-value">${w.count > 0 ? w.count : ''}</span>
              </div>
              <div class="bar-label">${w.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-title">📊 学科分布</div>
        <div class="pie-chart-container">
          ${this.generatePieChart(subjectCounts)}
          <div class="pie-legend">
            ${Object.entries(subjectCounts).map(([k, v]) => `
              <div class="pie-legend-item" data-subject="${k}">
                <div class="legend-color" style="background:${subjectColors[k] || 'var(--purple)'}"></div>
                <span>${subjectNames[k] || k}：${v}题</span>
              </div>
            `).join('')}
            ${Object.keys(subjectCounts).length === 0 ? '<div style="color:var(--text-muted);">暂无数据</div>' : ''}
          </div>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-title">📝 错题分析</div>
        <div class="stats-overview">
          <div class="stats-card">
            <div class="stats-icon">📋</div>
            <div class="stats-value">${wrongBook.length}</div>
            <div class="stats-label">待复习错题</div>
          </div>
          <div class="stats-card">
            <div class="stats-icon">🎯</div>
            <div class="stats-value">${records.length > 0 ? Math.round((records.filter(r => r.correct).length / records.length) * 100) : 0}%</div>
            <div class="stats-label">正确率</div>
          </div>
          <div class="stats-card">
            <div class="stats-icon">🔥</div>
            <div class="stats-value">${Motivation.getCurrentStreak()}</div>
            <div class="stats-label">连续打卡</div>
          </div>
        </div>
      </div>
    `;

    return html;
  },

  generatePieChart(subjectCounts) {
    const entries = Object.entries(subjectCounts);
    if (entries.length === 0) {
      return '<div style="color:var(--text-muted);text-align:center;padding:40px;">暂无数据</div>';
    }
    const total = entries.reduce((s, [, v]) => s + v, 0);
    const colors = { chinese: '#ffb6c1', math: '#b5ead7', english: '#c7e2ff' };
    let gradientStops = '';
    let offset = 0;
    entries.forEach(([k, v]) => {
      const pct = (v / total) * 360;
      const c = colors[k] || '#e0c8ff';
      gradientStops += `${c} ${offset}deg ${offset + pct}deg,`;
      offset += pct;
    });
    gradientStops = gradientStops.slice(0, -1);

    return `<div class="pie-chart" style="background:conic-gradient(${gradientStops});"></div>`;
  },

  /* ========== 素材库（重定向到电子课本页的素材专题，统一三级导航） ========== */
  renderMaterials() {
    // 素材库与电子课本页「素材专题」统一入口：点击后跳转到 Textbooks.openCollection
    const collections = (APP_DATA.textbooks && APP_DATA.textbooks.collections) || {};
    const allEntries = Object.entries(collections);
    // 把专题按学科推荐分组展示
    const groups = [
      {
        title: '📖 语文专区',
        desc: '古诗词、作文素材、好词好句、名言警句',
        keys: ['chinese_poems', 'chinese_essays', 'chinese_words', 'famous_quotes']
      },
      {
        title: '🔢 数学专区',
        desc: '公式定理、单位换算、应用题解法、知识点速记',
        keys: ['math_formulas', 'math_knowledge']
      },
      {
        title: '🔤 英语专区',
        desc: '核心词汇、必背句型、语法速记、情景对话',
        keys: ['english_core', 'english_vocabulary']
      },
      {
        title: '🎯 通用学习方法',
        desc: '艾宾浩斯复习、错题本、费曼法、番茄钟',
        keys: ['learning_methods']
      }
    ];

    let html = `
      <div class="page-header">
        <div>
          <div class="page-title">📋 素材库</div>
          <div class="page-subtitle">点击专题卡片进入查阅，支持刷新换序</div>
        </div>
        <button class="reader-btn reader-btn-primary" id="matGoTextbook" title="打开电子课本查看完整专题">
          📗 <span>查看电子课本</span>
        </button>
      </div>
    `;

    groups.forEach(g => {
      const cards = g.keys.map(k => {
        const c = collections[k];
        if (!c) return '';
        return `
          <div class="card card-accent clickable" data-colkey="${k}">
            <div class="card-title">${c.icon || '📚'} ${c.title}</div>
            <div class="card-desc">${c.desc} · 共 ${c.items.length} 篇 · 点击进入</div>
          </div>
        `;
      }).join('');
      html += `
        <div class="home-section-title" style="margin-top:16px;">${g.title}</div>
        <div style="font-size:13px;color:var(--text-muted);margin:4px 0 12px;padding:0 4px;">${g.desc}</div>
        <div class="card-grid" style="margin-bottom:24px;">${cards || '<div style="padding:16px;color:var(--text-muted);">暂无内容</div>'}</div>
      `;
    });

    // 再加一个「全部专题」板块，避免遗漏
    html += `
      <div class="home-section-title" style="margin-top:16px;">🌈 全部专题 · 共 ${allEntries.length} 个</div>
      <div class="card-grid">
        ${allEntries.map(([k, c]) => `
          <div class="card clickable" data-colkey="${k}">
            <div class="card-title">${c.icon || '📚'} ${c.title}</div>
            <div class="card-desc">共 ${c.items.length} 篇 · 点击进入阅读</div>
          </div>
        `).join('')}
      </div>
    `;

    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      // 点击专题卡片 → 跳转到 Textbooks.openCollection
      wrap.querySelectorAll('[data-colkey]').forEach(card => {
        card.addEventListener('click', () => {
          const colKey = card.dataset.colkey;
          UI.navigate('textbook');
          // 等页面渲染完再打开专题
          setTimeout(() => Textbooks.openCollection(colKey), 200);
        });
      });
      wrap.querySelectorAll('#matGoTextbook').forEach(btn => {
        btn.addEventListener('click', () => UI.navigate('textbook'));
      });
    }, 0);

    return wrap;
  },

  /* ========== 工具页（移动端底部导航） ========== */
  renderToolsPage() {
    const html = `
      <div class="page-header">
        <div>
          <div class="page-title">🛠️ 学习工具</div>
          <div class="page-subtitle">选择你需要的工具</div>
        </div>
      </div>
      <div class="card-grid">
        <div class="card card-accent clickable" data-tool="checkin">
          <div class="card-title">📅 打卡日历</div>
          <div class="card-desc">每日打卡记录学习，年度热力图展示。</div>
        </div>
        <div class="card card-accent card-accent-mint clickable" data-tool="pomodoro">
          <div class="card-title">🍅 番茄钟</div>
          <div class="card-desc">专注计时，提升学习效率。</div>
        </div>
        <div class="card card-accent card-accent-blue clickable" data-tool="wrongbook">
          <div class="card-title">❌ 错题本</div>
          <div class="card-desc">自动收纳错题，反复练习。</div>
        </div>
        <div class="card card-accent card-accent-yellow clickable" data-tool="stats">
          <div class="card-title">📊 数据统计</div>
          <div class="card-desc">学习数据可视化分析。</div>
        </div>
        <div class="card clickable" data-tool="materials">
          <div class="card-title">📋 素材库</div>
          <div class="card-desc">好词好句、公式、单词表。</div>
        </div>
        <div class="card clickable" data-tool="achievements">
          <div class="card-title">🏆 成就墙</div>
          <div class="card-desc">解锁学习成就徽章。</div>
        </div>
        <div class="card card-accent card-accent-blue clickable" data-tool="calculator">
          <div class="card-title">🧮 计算器</div>
          <div class="card-desc">四则运算、小数分数计算，解题好帮手。</div>
        </div>
        <div class="card card-accent card-accent-mint clickable" data-tool="aisearch">
          <div class="card-title">📸 AI搜题讲解</div>
          <div class="card-desc">拍照或输入题目，AI智能搜题并讲解思路。</div>
        </div>
        <div class="card card-accent clickable" data-tool="dictionary">
          <div class="card-title">📕 语文词典</div>
          <div class="card-desc">查汉字拼音、笔顺、释义、组词造句。</div>
        </div>
        <div class="card card-accent card-accent-yellow clickable" data-tool="translate">
          <div class="card-title">🌐 英语翻译</div>
          <div class="card-desc">中英互译，单词查询，例句参考。</div>
        </div>
      </div>
    `;

    // 用 DOM 元素包裹，避免字符串只取到首个子节点的问题
    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();

    setTimeout(() => {
      // 给所有工具卡片绑定点击事件
      wrap.querySelectorAll('[data-tool]').forEach(card => {
        card.addEventListener('click', () => {
          const tool = card.dataset.tool;
          // 已有工具跳转对应页面
          const navMap = { checkin: 'checkin', pomodoro: 'pomodoro', wrongbook: 'wrongbook', stats: 'stats', materials: 'materials', achievements: 'achievements' };
          if (navMap[tool]) { UI.navigate(navMap[tool]); return; }
          // 新工具打开对应面板
          this.openToolPanel(tool);
        });
      });
    }, 0);

    return wrap;
  },

  /* ========== 打开工具面板（计算器 / AI搜题 / 词典 / 翻译） ========== */
  openToolPanel(tool) {
    const container = document.getElementById('pageContainer');
    container.classList.remove('page-enter');
    void container.offsetWidth;
    container.innerHTML = '';
    if (tool === 'calculator') this.renderCalculator(container);
    else if (tool === 'aisearch') this.renderAisearch(container);
    else if (tool === 'dictionary') this.renderDictionary(container);
    else if (tool === 'translate') this.renderTranslate(container);
    else { UI.navigate('tools'); return; }
    container.classList.add('page-enter');
  },

  /* ---------- 通用辅助：HTML 转义 / 历史读写 ---------- */
  _escape(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
  _loadHistory(key) {
    try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; }
  },
  _saveHistory(key, arr) {
    try { localStorage.setItem(key, JSON.stringify(arr)); } catch (e) {}
  },

  /* ---------- 计算器 ---------- */
  renderCalculator(container) {
    const html = `
      <div class="page-header">
        <div>
          <button class="btn-secondary" id="calcBack">◀ 返回工具箱</button>
          <div class="page-title" style="margin-top:10px;">🧮 计算器</div>
          <div class="page-subtitle">支持四则运算、括号、小数、百分号</div>
        </div>
      </div>
      <div class="glass-card" style="padding:20px;max-width:420px;margin:0 auto;">
        <div id="calcDisplay" style="font-size:34px;font-weight:700;text-align:right;padding:16px 12px;background:var(--bg-secondary);border-radius:14px;min-height:64px;color:var(--text-primary);word-break:break-all;font-variant-numeric:tabular-nums;">0</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px;">
          <button class="btn-secondary calc-btn" data-key="AC" style="padding:14px;font-size:16px;">AC</button>
          <button class="btn-secondary calc-btn" data-key="back" style="padding:14px;font-size:16px;">⌫</button>
          <button class="btn-secondary calc-btn" data-key="%" style="padding:14px;font-size:16px;">%</button>
          <button class="btn-secondary calc-btn" data-key="÷" style="padding:14px;font-size:16px;">÷</button>
          <button class="btn-secondary calc-btn" data-key="7" style="padding:14px;font-size:16px;">7</button>
          <button class="btn-secondary calc-btn" data-key="8" style="padding:14px;font-size:16px;">8</button>
          <button class="btn-secondary calc-btn" data-key="9" style="padding:14px;font-size:16px;">9</button>
          <button class="btn-secondary calc-btn" data-key="×" style="padding:14px;font-size:16px;">×</button>
          <button class="btn-secondary calc-btn" data-key="4" style="padding:14px;font-size:16px;">4</button>
          <button class="btn-secondary calc-btn" data-key="5" style="padding:14px;font-size:16px;">5</button>
          <button class="btn-secondary calc-btn" data-key="6" style="padding:14px;font-size:16px;">6</button>
          <button class="btn-secondary calc-btn" data-key="-" style="padding:14px;font-size:16px;">-</button>
          <button class="btn-secondary calc-btn" data-key="1" style="padding:14px;font-size:16px;">1</button>
          <button class="btn-secondary calc-btn" data-key="2" style="padding:14px;font-size:16px;">2</button>
          <button class="btn-secondary calc-btn" data-key="3" style="padding:14px;font-size:16px;">3</button>
          <button class="btn-secondary calc-btn" data-key="+" style="padding:14px;font-size:16px;">+</button>
          <button class="btn-secondary calc-btn" data-key="(" style="padding:14px;font-size:16px;">(</button>
          <button class="btn-secondary calc-btn" data-key="0" style="padding:14px;font-size:16px;">0</button>
          <button class="btn-secondary calc-btn" data-key="." style="padding:14px;font-size:16px;">.</button>
          <button class="btn-secondary calc-btn" data-key=")" style="padding:14px;font-size:16px;">)</button>
          <button class="btn-primary calc-btn" data-key="=" style="grid-column:span 4;padding:14px;font-size:18px;">=</button>
        </div>
      </div>
    `;
    container.innerHTML = html;
    setTimeout(() => {
      let expr = '';
      const display = container.querySelector('#calcDisplay');
      const update = () => { display.textContent = expr || '0'; };
      update();
      container.querySelector('#calcBack').addEventListener('click', () => UI.navigate('tools'));
      container.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const k = btn.dataset.key;
          if (k === 'AC') {
            expr = '';
          } else if (k === 'back') {
            expr = expr.slice(0, -1);
          } else if (k === '=') {
            if (!expr) return;
            // 安全校验：只允许数字和 +-*/.()% 以及 ×÷ 和空格
            if (!/^[\d+\-*/.()%\s×÷]+$/.test(expr)) {
              display.textContent = '表达式不合法';
              return;
            }
            try {
              const safe = expr.replace(/×/g, '*').replace(/÷/g, '/');
              const result = eval(safe);
              if (result === Infinity || result === -Infinity || isNaN(result)) {
                display.textContent = '无法计算';
                return;
              }
              expr = String(Math.round(result * 1e10) / 1e10);
            } catch (e) {
              display.textContent = '计算错误';
              return;
            }
          } else {
            expr += k;
          }
          update();
        });
      });
    }, 0);
  },

  /* ---------- DeepSeek AI 配置 ---------- */
  _aiConfig: {
    apiKey: null
  },

  _getApiKey() {
    if (this._aiConfig.apiKey === null) {
      try {
        this._aiConfig.apiKey = localStorage.getItem('deepseek_api_key') || '';
      } catch (e) {
        this._aiConfig.apiKey = '';
      }
    }
    return this._aiConfig.apiKey;
  },

  _setApiKey(key) {
    this._aiConfig.apiKey = key || '';
    try {
      if (key) localStorage.setItem('deepseek_api_key', key);
      else localStorage.removeItem('deepseek_api_key');
    } catch (e) {}
  },

  // 调用 DeepSeek API
  async _callDeepSeekAPI(messages) {
    const apiKey = this._getApiKey();
    if (!apiKey) return null;

    try {
      const resp = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: messages,
          stream: false,
          temperature: 0.7
        })
      });
      if (!resp.ok) {
        const errText = await resp.text();
        console.error('DeepSeek API error:', resp.status, errText);
        return null;
      }
      const data = await resp.json();
      return data.choices[0]?.message?.content || null;
    } catch (e) {
      console.error('DeepSeek API fetch error:', e);
      return null;
    }
  },

  // AI搜题
  async _aiSearchQuestion(text, subject) {
    const subjectName = { math: '数学', chinese: '语文', english: '英语' }[subject] || subject;
    const messages = [
      {
        role: 'system',
        content: `你是一个专业的小学${subjectName}老师AI助手。请根据学生的题目给出详细的解题步骤和知识点讲解。格式要求：\n1. 先识别题目类型\n2. 给出分步解题过程（用①②③编号）\n3. 给出最终答案\n4. 总结涉及的知识点\n请用简洁清晰的语言，适合小学生理解。`
      },
      {
        role: 'user',
        content: `请讲解这道${subjectName}题：\n${text}`
      }
    ];
    return await this._callDeepSeekAPI(messages);
  },

  // AI批改作业
  async _aiCorrectHomework(question, userAnswer, subject) {
    const subjectName = { math: '数学', chinese: '语文', english: '英语' }[subject] || subject;
    const messages = [
      {
        role: 'system',
        content: `你是一个专业的小学${subjectName}老师。请批改学生的作业答案。格式要求：\n1. 先判断答案是否正确（✅正确/❌错误）\n2. 如果错误，指出具体问题\n3. 给出正确的解题过程和答案\n4. 给出鼓励性评语\n请用适合小学生理解的语言。`
      },
      {
        role: 'user',
        content: `科目：${subjectName}\n题目：${question}\n学生答案：${userAnswer}\n请批改这份作业。`
      }
    ];
    return await this._callDeepSeekAPI(messages);
  },

  // 简易 Markdown 渲染（支持标题、粗体、斜体、行内代码、代码块、列表、换行）
  _renderMarkdown(md) {
    if (!md) return '';
    const lines = String(md).split('\n');
    let html = '';
    let inCodeBlock = false;
    let codeBuffer = [];

    for (let line of lines) {
      if (/^```/.test(line.trim())) {
        if (inCodeBlock) {
          html += `<pre style="background:var(--bg-secondary);padding:12px;border-radius:8px;overflow-x:auto;margin:8px 0;"><code>${this._escape(codeBuffer.join('\n'))}</code></pre>`;
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }
      if (inCodeBlock) {
        codeBuffer.push(line);
        continue;
      }

      let processed = this._escape(line);

      if (/^### /.test(processed)) {
        html += `<h4 style="margin:10px 0 6px;">${processed.replace(/^### /, '')}</h4>`;
        continue;
      }
      if (/^## /.test(processed)) {
        html += `<h3 style="margin:12px 0 6px;">${processed.replace(/^## /, '')}</h3>`;
        continue;
      }
      if (/^# /.test(processed)) {
        html += `<h2 style="margin:12px 0 6px;">${processed.replace(/^# /, '')}</h2>`;
        continue;
      }

      processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      processed = processed.replace(/`([^`]+)`/g, '<code style="background:var(--bg-secondary);padding:1px 5px;border-radius:4px;">$1</code>');
      processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

      if (/^[·\-\*]\s+/.test(processed)) {
        html += `<div style="padding-left:18px;margin:2px 0;">• ${processed.replace(/^[·\-\*]\s+/, '')}</div>`;
        continue;
      }

      if (processed.trim() === '') {
        html += '<br>';
        continue;
      }

      html += `<div style="margin:4px 0;">${processed}</div>`;
    }

    if (inCodeBlock && codeBuffer.length) {
      html += `<pre style="background:var(--bg-secondary);padding:12px;border-radius:8px;overflow-x:auto;margin:8px 0;"><code>${this._escape(codeBuffer.join('\n'))}</code></pre>`;
    }

    return html;
  },

  /* ---------- AI搜题讲解 ---------- */
  renderAisearch(container) {
    const history = this._loadHistory('study_aisearch_history');
    const hasApiKey = !!this._getApiKey();
    const html = `
      <div class="page-header">
        <div>
          <button class="btn-secondary" id="aiBack">◀ 返回工具箱</button>
          <div class="page-title" style="margin-top:10px;">📸 AI搜题讲解</div>
          <div class="page-subtitle" id="aiSubtitle">${hasApiKey ? '已接入 DeepSeek AI，智能讲解解题思路' : '本地智能搜题，配置 API Key 后可启用 AI 讲解'}</div>
        </div>
        <button class="btn-secondary" id="aiSettings" title="设置 DeepSeek API Key" style="display:inline-flex;align-items:center;gap:6px;">⚙️ API Key</button>
      </div>

      <div class="glass-card" style="padding:8px;margin-bottom:12px;">
        <div style="display:flex;gap:8px;">
          <button class="btn-primary ai-tab active" data-mode="search" style="flex:1;">📚 搜题讲解</button>
          <button class="btn-secondary ai-tab" data-mode="correct" style="flex:1;">✏️ 批改作业</button>
        </div>
      </div>

      <div id="aiSearchMode" class="glass-card" style="padding:20px;">
        <div style="font-weight:600;margin-bottom:8px;">📝 输入题目</div>
        <textarea id="aiInput" rows="4" placeholder="请输入题目文字，例如：解方程 2x+3=7" style="width:100%;box-sizing:border-box;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;resize:vertical;outline:none;"></textarea>
        <div style="margin-top:14px;display:flex;flex-wrap:wrap;gap:10px;">
          <button class="btn-secondary" id="aiCameraBtn" style="display:inline-flex;align-items:center;gap:6px;">📷 立即拍照</button>
          <button class="btn-secondary" id="aiGalleryBtn" style="display:inline-flex;align-items:center;gap:6px;">🖼️ 从相册选择</button>
        </div>
        <input type="file" id="aiCameraFile" accept="image/*" style="display:none;">
        <input type="file" id="aiGalleryFile" accept="image/*" style="display:none;">
        <div id="aiPreview" style="margin-top:12px;"></div>
        <div style="margin-top:14px;">
          <span style="font-weight:600;">科目：</span>
          <label style="margin-right:12px;"><input type="radio" name="aiSubject" value="math" checked> 数学</label>
          <label style="margin-right:12px;"><input type="radio" name="aiSubject" value="chinese"> 语文</label>
          <label><input type="radio" name="aiSubject" value="english"> 英语</label>
        </div>
        <button class="btn-primary" id="aiSearch" style="margin-top:16px;">🔍 AI搜题讲解</button>
      </div>

      <div id="aiCorrectMode" class="glass-card" style="padding:20px;display:none;">
        <div style="font-weight:600;margin-bottom:8px;">📝 输入题目</div>
        <textarea id="aiQuestionInput" rows="3" placeholder="请输入题目" style="width:100%;box-sizing:border-box;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;resize:vertical;outline:none;"></textarea>
        <div style="font-weight:600;margin:12px 0 8px;">✏️ 我的答案</div>
        <textarea id="aiAnswerInput" rows="3" placeholder="请输入你的答案" style="width:100%;box-sizing:border-box;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;resize:vertical;outline:none;"></textarea>
        <div style="margin-top:14px;">
          <span style="font-weight:600;">科目：</span>
          <label style="margin-right:12px;"><input type="radio" name="aiCorrectSubject" value="math" checked> 数学</label>
          <label style="margin-right:12px;"><input type="radio" name="aiCorrectSubject" value="chinese"> 语文</label>
          <label><input type="radio" name="aiCorrectSubject" value="english"> 英语</label>
        </div>
        <button class="btn-primary" id="aiCorrect" style="margin-top:16px;">✏️ AI批改作业</button>
      </div>

      <div id="aiResult" style="margin-top:16px;"></div>
      <div class="glass-card" style="padding:16px;margin-top:16px;">
        <div style="font-weight:600;margin-bottom:8px;">📜 已搜题目历史</div>
        <div id="aiHistory"></div>
      </div>

      <div id="aiKeyModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;align-items:center;justify-content:center;">
        <div class="glass-card" style="padding:24px;max-width:420px;width:90%;margin:auto;">
          <div style="font-weight:700;font-size:16px;margin-bottom:12px;">⚙️ DeepSeek API Key 设置</div>
          <input type="password" id="aiKeyInput" placeholder="粘贴你的 DeepSeek API Key" style="width:100%;box-sizing:border-box;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;outline:none;">
          <div style="font-size:12px;color:var(--text-muted);margin-top:8px;line-height:1.5;">
            获取地址：<a href="https://platform.deepseek.com/" target="_blank" style="color:var(--accent-dark);">https://platform.deepseek.com/</a><br>
            配置后即可使用 DeepSeek AI 进行智能搜题讲解和作业批改。Key 仅保存在本地浏览器，不会上传。
          </div>
          <div style="display:flex;gap:10px;margin-top:14px;">
            <button class="btn-primary" id="aiKeySave" style="flex:1;">💾 保存</button>
            <button class="btn-secondary" id="aiKeyClear" style="flex:1;">🗑️ 清除</button>
            <button class="btn-secondary" id="aiKeyClose" style="flex:1;">取消</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML = html;
    this._renderAisearchHistory(container, history);

    // 设备检测：仅移动端为拍照 input 添加 capture 属性，桌面端不添加以免文件选择器打不开
    const ua = navigator.userAgent || '';
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);
    const cameraInput = container.querySelector('#aiCameraFile');
    // 先创建 input（已在 HTML 中，无 capture），再根据设备类型动态设置 capture 属性
    if (isMobile) {
      try {
        cameraInput.setAttribute('capture', 'environment');
      } catch (e) {
        console.error('set capture attr error:', e);
      }
    }

    // 统一的图片处理函数（含错误处理）
    const handleImageFile = (file) => {
      if (!file) return;
      if (!file.type || !file.type.startsWith('image/')) {
        UI.showToast('⚠️ 请选择图片文件');
        return;
      }
      const reader = new FileReader();
      reader.onload = ev => {
        const preview = container.querySelector('#aiPreview');
        preview.innerHTML = `
          <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:var(--bg-secondary);border-radius:12px;border:1px solid var(--border-soft);">
            <img src="${ev.target.result}" style="max-width:120px;max-height:120px;border-radius:10px;border:1px solid var(--border-soft);object-fit:cover;">
            <div style="flex:1;min-width:0;">
              <div style="font-weight:600;margin-bottom:4px;">✅ 图片已上传</div>
              <div style="font-size:12px;color:var(--text-muted);line-height:1.5;">提示：请在下方输入框中输入题目文字，AI 将根据文字进行讲解。</div>
            </div>
          </div>
        `;
        UI.showToast('📷 图片已上传');
      };
      reader.onerror = () => {
        UI.showToast('⚠️ 图片读取失败，请重试');
      };
      try {
        reader.readAsDataURL(file);
      } catch (e) {
        console.error('readAsDataURL error:', e);
        UI.showToast('⚠️ 图片读取失败，请重试');
      }
    };

    // 触发文件选择（含错误处理，重置 value 以便重复选择同一文件）
    const triggerFilePick = (inputEl, label) => {
      try {
        inputEl.value = '';
        inputEl.click();
      } catch (e) {
        console.error(`${label} click error:`, e);
        UI.showToast(`⚠️ 无法打开${label}，请重试`);
      }
    };

    // 更新副标题
    const refreshSubtitle = () => {
      const sub = container.querySelector('#aiSubtitle');
      if (sub) {
        sub.textContent = this._getApiKey()
          ? '已接入 DeepSeek AI，智能讲解解题思路'
          : '本地智能搜题，配置 API Key 后可启用 AI 讲解';
      }
    };

    setTimeout(() => {
      container.querySelector('#aiBack').addEventListener('click', () => UI.navigate('tools'));

      // 模式切换
      container.querySelectorAll('.ai-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const mode = tab.dataset.mode;
          container.querySelectorAll('.ai-tab').forEach(t => {
            t.classList.remove('active', 'btn-primary');
            t.classList.add('btn-secondary');
          });
          tab.classList.add('active', 'btn-primary');
          tab.classList.remove('btn-secondary');
          container.querySelector('#aiSearchMode').style.display = mode === 'search' ? '' : 'none';
          container.querySelector('#aiCorrectMode').style.display = mode === 'correct' ? '' : 'none';
        });
      });

      // API Key 设置弹窗
      const keyModal = container.querySelector('#aiKeyModal');
      container.querySelector('#aiSettings').addEventListener('click', () => {
        container.querySelector('#aiKeyInput').value = this._getApiKey() || '';
        keyModal.style.display = 'flex';
      });
      container.querySelector('#aiKeyClose').addEventListener('click', () => { keyModal.style.display = 'none'; });
      container.querySelector('#aiKeySave').addEventListener('click', () => {
        const key = container.querySelector('#aiKeyInput').value.trim();
        if (!key) { UI.showToast('请输入 API Key'); return; }
        this._setApiKey(key);
        keyModal.style.display = 'none';
        refreshSubtitle();
        UI.showToast('✅ API Key 已保存');
      });
      container.querySelector('#aiKeyClear').addEventListener('click', () => {
        this._setApiKey('');
        container.querySelector('#aiKeyInput').value = '';
        refreshSubtitle();
        UI.showToast('已清除 API Key');
      });

      // 拍照（动态 capture 已在上方设置）
      container.querySelector('#aiCameraBtn').addEventListener('click', () => {
        triggerFilePick(cameraInput, '拍照');
      });
      cameraInput.addEventListener('change', e => handleImageFile(e.target.files[0]));

      // 从相册选择（桌面端也可正常打开文件选择器）
      container.querySelector('#aiGalleryBtn').addEventListener('click', () => {
        triggerFilePick(container.querySelector('#aiGalleryFile'), '相册');
      });
      container.querySelector('#aiGalleryFile').addEventListener('change', e => handleImageFile(e.target.files[0]));

      // 搜题讲解
      const doSearch = async () => {
        const text = container.querySelector('#aiInput').value.trim();
        const subject = container.querySelector('input[name="aiSubject"]:checked').value;
        if (!text) { UI.showToast('请输入题目文字'); return; }

        const btn = container.querySelector('#aiSearch');
        const originalText = btn.textContent;
        btn.disabled = true;
        btn.textContent = '🤖 AI搜题中...';

        let result = null;
        let isAIResult = false;

        if (this._getApiKey()) {
          const aiText = await this._aiSearchQuestion(text, subject);
          if (aiText) {
            result = { type: 'AI讲解', content: aiText };
            isAIResult = true;
          } else {
            UI.showToast('⚠️ AI 调用失败，已回退到本地规则引擎');
            result = this.analyzeQuestion(text, subject);
          }
        } else {
          result = this.analyzeQuestion(text, subject);
        }

        btn.disabled = false;
        btn.textContent = originalText;

        if (!result) { UI.showToast('未能识别题目，请补充信息'); return; }
        this._renderAisearchResult(container, text, subject, result, isAIResult);

        const hist = this._loadHistory('study_aisearch_history');
        hist.unshift({ text, subject, result, isAI: isAIResult, time: Date.now() });
        this._saveHistory('study_aisearch_history', hist.slice(0, 20));
        this._renderAisearchHistory(container, this._loadHistory('study_aisearch_history'));
      };
      container.querySelector('#aiSearch').addEventListener('click', doSearch);

      // 批改作业
      const doCorrect = async () => {
        const question = container.querySelector('#aiQuestionInput').value.trim();
        const userAnswer = container.querySelector('#aiAnswerInput').value.trim();
        const subject = container.querySelector('input[name="aiCorrectSubject"]:checked').value;
        if (!question) { UI.showToast('请输入题目'); return; }
        if (!userAnswer) { UI.showToast('请输入你的答案'); return; }
        if (!this._getApiKey()) { UI.showToast('⚠️ 批改作业需要先配置 API Key'); return; }

        const btn = container.querySelector('#aiCorrect');
        const originalText = btn.textContent;
        btn.disabled = true;
        btn.textContent = '🤖 AI批改中...';

        const aiText = await this._aiCorrectHomework(question, userAnswer, subject);

        btn.disabled = false;
        btn.textContent = originalText;

        if (!aiText) { UI.showToast('⚠️ AI 批改失败，请检查 API Key 或网络'); return; }

        const result = { type: 'AI批改结果', content: aiText };
        const displayText = `题目：${question}\n我的答案：${userAnswer}`;
        this._renderAisearchResult(container, displayText, subject, result, true);

        const hist = this._loadHistory('study_aisearch_history');
        hist.unshift({ text: `[批改] ${question}`, subject, result, isAI: true, time: Date.now() });
        this._saveHistory('study_aisearch_history', hist.slice(0, 20));
        this._renderAisearchHistory(container, this._loadHistory('study_aisearch_history'));
      };
      container.querySelector('#aiCorrect').addEventListener('click', doCorrect);
    }, 0);
  },

  // 本地规则引擎：根据题目文字识别类型并给出讲解框架
  analyzeQuestion(text, subject) {
    const t = text.trim();
    if (!t) return null;

    if (subject === 'math') {
      // 方程题：含 x 和 = 或"方程"等关键词
      if ((/求x|方程|解方程/i.test(t) || t.includes('=')) && /x/i.test(t)) {
        const sol = this.solveLinear(t);
        const steps = [
          '① 明确未知数 x 表示的量；',
          '② 移项：把含 x 的项移到等号一边，常数项移到另一边（移项要变号）；',
          '③ 合并同类项；',
          '④ 系数化为 1：两边同除以 x 的系数，求出 x 的值；',
          '⑤ 检验：把求得的 x 代入原方程，看左右两边是否相等。'
        ];
        if (sol !== null && isFinite(sol)) {
          steps.push(`⑥ 本题求得：x = ${Math.round(sol * 1e6) / 1e6}`);
        } else {
          steps.push('⑥ 含括号或较复杂的方程，请按上述步骤逐步展开求解。');
        }
        return {
          type: '🧮 一元一次方程题',
          steps,
          knowledge: '解方程的核心是"移项变号、合并同类项、系数化为1"。等式两边同时加减乘除同一个数（0除外），等式仍然成立。'
        };
      }
      // 纯算式计算
      if (/^[0-9+\-*/.()%\s×÷]+$/.test(t)) {
        let result = null;
        try {
          const safe = t.replace(/×/g, '*').replace(/÷/g, '/');
          const r = eval(safe);
          if (isFinite(r)) result = r;
        } catch (e) {}
        const steps = [
          '① 观察算式中的运算符；',
          '② 确定运算顺序：先算括号内，再乘除，最后加减；',
          '③ 同级运算从左到右依次计算；',
          `④ 逐步算出最终结果${result !== null ? '：' + (Math.round(result * 1e6) / 1e6) : '。'}`
        ];
        return {
          type: '🔢 算式计算题',
          steps,
          knowledge: '四则运算顺序：括号优先 → 乘除 → 加减，同级运算从左到右。'
        };
      }
      // 应用题
      if (/应用题|一共|还剩|平均|多少|总共|比.{0,4}多|比.{0,4}少/.test(t)) {
        const steps = [
          '① 朗读题目，找出已知条件和所求问题；',
          '② 分析数量关系：哪些量需要先求，哪些量可直接求；',
          '③ 列出算式（可用 x 设未知数列方程）；',
          '④ 计算得出结果；',
          '⑤ 写出答语，注意单位，并检查结果是否合理。'
        ];
        return {
          type: '📋 应用题',
          steps,
          knowledge: '解应用题关键：读懂题意 → 找条件与问题 → 分析数量关系 → 列式计算 → 作答检验。'
        };
      }
      return {
        type: '📐 数学题',
        steps: ['① 仔细读题，明确已知与所求；', '② 回顾相关公式与定理；', '③ 分步列式求解；', '④ 检验结果是否合理。'],
        knowledge: '数学解题通用思路：审题→联想知识→列式→计算→检验。'
      };
    }

    if (subject === 'chinese') {
      // 修辞手法
      if (/比喻|拟人|夸张|排比|修辞/.test(t)) {
        const steps = [
          '① 比喻：用"像/仿佛/犹如"把一物比作另一物（本体+喻体+比喻词）；',
          '② 拟人：把物当作人来写，赋予人的动作或情感；',
          '③ 夸张：故意放大或缩小事物的特征；',
          '④ 排比：三个或以上结构相似的句子连用；',
          '⑤ 判断时先找标志词，再分析表达效果。'
        ];
        return { type: '✍️ 修辞手法题', steps, knowledge: '判断修辞手法：找标志词→分析手法→体会表达效果（生动形象/突出特点/抒发情感）。' };
      }
      // 字音题
      if (/拼音|读音|注音|声调/.test(t)) {
        return {
          type: '🔤 字音题',
          steps: ['① 注意多音字在不同词中的读音；', '② 区分前后鼻音、平翘舌音；', '③ 可借助"语文词典"工具查询正确拼音。'],
          knowledge: '字音题要结合词语语境判断，多音字据义定音。'
        };
      }
      // 古诗名句
      const poems = [
        { kw: '床前明月光', author: '李白', source: '《静夜思》' },
        { kw: '春眠不觉晓', author: '孟浩然', source: '《春晓》' },
        { kw: '锄禾日当午', author: '李绅', source: '《悯农》' },
        { kw: '白日依山尽', author: '王之涣', source: '《登鹳雀楼》' },
        { kw: '两个黄鹂鸣翠柳', author: '杜甫', source: '《绝句》' },
        { kw: '离离原上草', author: '白居易', source: '《赋得古原草送别》' }
      ];
      for (const p of poems) {
        if (t.includes(p.kw)) {
          return {
            type: '📜 古诗名句题',
            steps: [`① 该名句出自${p.author}的${p.source}；`, '② 结合全诗理解句意；', '③ 体会诗人表达的情感。'],
            knowledge: `名句"${p.kw}"出自${p.author}《${p.source}》。`
          };
        }
      }
      // 默认：阅读理解框架
      return {
        type: '📖 阅读理解题',
        steps: ['① 通读全文，了解大意；', '② 带着问题回读，定位关键句；', '③ 抓住中心句和关键词理解；', '④ 答题时"词不离句，句不离篇"，分点作答。'],
        knowledge: '阅读理解答题框架：通读→定位→分析→归纳→作答。'
      };
    }

    if (subject === 'english') {
      // 翻译题
      if (/翻译|译成|translate/i.test(t)) {
        return {
          type: '🌐 翻译题',
          steps: ['① 找出主语、谓语、宾语；', '② 注意时态和语态；', '③ 逐句翻译，未掌握的词可用"英语翻译"工具查询；', '④ 通读检查语句是否通顺。'],
          knowledge: '中英翻译要点：抓主干→定时态→补修饰→通读润色。'
        };
      }
      // 时态题
      if (/时态|现在进行时|一般现在时|一般过去时|将来时|完成时|tense/i.test(t)) {
        return {
          type: '⏰ 时态题',
          steps: ['① 找时间状语判断时态；', '② 一般现在时：often/usually + 动词原形/三单；', '③ 现在进行时：now/look + be+doing；', '④ 一般过去时：yesterday + 动词过去式；', '⑤ 一般将来时：tomorrow + will+动词原形。'],
          knowledge: '时态由"时间状语+动词形式"共同决定，先看时间再定动词。'
        };
      }
      return {
        type: '🔤 英语题',
        steps: ['① 读懂题干，划出关键词；', '② 分析语法结构（主谓宾/时态）；', '③ 排除明显错误选项；', '④ 代入验证，选择最佳答案。'],
        knowledge: '英语解题思路：读题→抓关键词→分析语法→排除→验证。'
      };
    }
    return null;
  },

  // 尝试求解简单一元一次方程（如 2x+3=7），复杂情况返回 null
  solveLinear(eqStr) {
    let s = String(eqStr).replace(/×/g, '*').replace(/÷/g, '/').replace(/\s/g, '');
    // 去掉中文等非运算字符，只保留 0-9 + - * / . ( ) = x
    s = s.replace(/[^0-9+\-*/.()=xX]/g, '');
    if (!s.includes('=') || !/x/i.test(s)) return null;
    // 含括号的方程不自动求解，避免给出错误答案
    if (/[()]/.test(s)) return null;
    const sides = s.split('=');
    if (sides.length !== 2) return null;
    const analyzeSide = side => {
      let coef = 0, constVal = 0;
      if (!/^[+-]/.test(side)) side = '+' + side;
      const terms = side.match(/[+-][^+-]+/g) || [];
      for (const term of terms) {
        const sign = term[0] === '-' ? -1 : 1;
        const body = term.slice(1);
        if (/x/i.test(body)) {
          let c = body.replace(/x/gi, '').replace(/\*/g, '');
          if (c === '') c = '1';
          const num = parseFloat(c);
          coef += sign * (isNaN(num) ? 1 : num);
        } else {
          const num = parseFloat(body);
          if (!isNaN(num)) constVal += sign * num;
        }
      }
      return { coef, constVal };
    };
    const L = analyzeSide(sides[0]);
    const R = analyzeSide(sides[1]);
    // L.coef * x + L.const = R.coef * x + R.const
    // (L.coef - R.coef) * x = R.const - L.const
    const a = L.coef - R.coef;
    const b = R.constVal - L.constVal;
    if (a === 0) return null;
    return b / a;
  },

  _renderAisearchResult(container, text, subject, result, isAIResult) {
    const subjectName = { math: '数学', chinese: '语文', english: '英语' }[subject] || subject;
    const el = container.querySelector('#aiResult');
    const useAI = isAIResult || (result && result.content);
    let bodyHtml = '';
    if (useAI && result.content) {
      // AI 结果：直接用 markdown 渲染返回的文本，不再需要 type/steps/knowledge 结构
      bodyHtml = `
        <div style="color:var(--text-muted);margin-bottom:4px;">${this._escape(result.type || 'AI讲解')}：</div>
        <div class="ai-markdown" style="line-height:1.7;font-size:14px;">${this._renderMarkdown(result.content)}</div>
      `;
    } else if (result && result.steps) {
      // 本地规则引擎结果：type/steps/knowledge 结构
      bodyHtml = `
        <div style="margin-bottom:10px;"><span style="color:var(--text-muted);">识别类型：</span><strong>${this._escape(result.type)}</strong></div>
        <div style="margin-bottom:10px;">
          <div style="color:var(--text-muted);margin-bottom:4px;">解题步骤：</div>
          <div>${result.steps.map(s => `<div style="padding:2px 0;">${this._escape(s)}</div>`).join('')}</div>
        </div>
        <div><span style="color:var(--text-muted);">知识点总结：</span>${this._escape(result.knowledge)}</div>
      `;
    } else {
      bodyHtml = `<div style="color:var(--text-muted);">暂无讲解内容</div>`;
    }
    el.innerHTML = `
      <div class="glass-card" style="padding:20px;">
        <div style="font-weight:700;font-size:16px;margin-bottom:10px;">🤖 ${useAI ? 'AI讲解结果' : '本地讲解结果'}</div>
        <div style="margin-bottom:10px;"><span style="color:var(--text-muted);">题目：</span>${this._escape(text).replace(/\n/g, '<br>')}</div>
        <div style="margin-bottom:10px;"><span style="color:var(--text-muted);">科目：</span>${subjectName}</div>
        ${bodyHtml}
      </div>
    `;
  },

  _renderAisearchHistory(container, history) {
    const el = container.querySelector('#aiHistory');
    if (!history || history.length === 0) {
      el.innerHTML = '<div style="color:var(--text-muted);font-size:13px;">暂无历史记录</div>';
      return;
    }
    const subjectName = { math: '数学', chinese: '语文', english: '英语' };
    el.innerHTML = history.map((h, i) => `
      <div class="clickable" data-aihist="${i}" style="padding:10px;border:1px solid var(--border-soft);border-radius:10px;margin-bottom:8px;">
        <div style="font-size:13px;color:var(--text-primary);">${this._escape(h.text.slice(0, 40))}${h.text.length > 40 ? '...' : ''}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">${subjectName[h.subject] || h.subject}${h.isAI ? ' · AI' : ' · 本地'} · ${new Date(h.time).toLocaleString('zh-CN')}</div>
      </div>
    `).join('');
    el.querySelectorAll('[data-aihist]').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.aihist);
        const h = history[idx];
        if (h) this._renderAisearchResult(container, h.text, h.subject, h.result, h.isAI);
      });
    });
  },

  /* ---------- 语文词典 ---------- */
  // 小学常见字词词库（4-6年级）
  _dictData: {
    '美丽': { pinyin: 'měi lì', meaning: '好看的样子，让人赏心悦目。', words: ['美丽动人', '绚丽美丽'], sentence: '春天的花园美丽极了。' },
    '勇敢': { pinyin: 'yǒng gǎn', meaning: '有勇气，不怕危险和困难。', words: ['勇敢无畏', '英勇勇敢'], sentence: '他勇敢地面对困难。' },
    '智慧': { pinyin: 'zhì huì', meaning: '辨析判断、发明创造的能力。', words: ['智慧无穷', '足智多谋'], sentence: '老人的智慧令人敬佩。' },
    '坚持': { pinyin: 'jiān chí', meaning: '坚决保持、进行下去。', words: ['坚持不懈', '坚持到底'], sentence: '只要坚持就能成功。' },
    '芬芳': { pinyin: 'fēn fāng', meaning: '香，香气。', words: ['芬芳扑鼻', '芬芳迷人'], sentence: '玫瑰散发着芬芳的香气。' },
    '茂盛': { pinyin: 'mào shèng', meaning: '植物生长得多而茁壮。', words: ['枝叶茂盛', '茂盛繁密'], sentence: '这棵大树枝叶茂盛。' },
    '忽然': { pinyin: 'hū rán', meaning: '表示来得迅速而又出乎意料。', words: ['忽然下雪', '忽然明白'], sentence: '忽然下起了大雨。' },
    '观察': { pinyin: 'guān chá', meaning: '仔细察看客观事物或现象。', words: ['仔细观察', '观察入微'], sentence: '他喜欢观察小动物。' },
    '鼓励': { pinyin: 'gǔ lì', meaning: '激发，勉励。', words: ['鼓励进步', '鼓励支持'], sentence: '老师的鼓励让我充满信心。' },
    '骄傲': { pinyin: 'jiāo ào', meaning: '自以为了不起；也指值得自豪的人或事物。', words: ['骄傲自满', '引以为傲'], sentence: '我为祖国的成就感到骄傲。' },
    '谦虚': { pinyin: 'qiān xū', meaning: '虚心，不自满。', words: ['谦虚谨慎', '谦虚好学'], sentence: '他成绩优秀却很谦虚。' },
    '珍惜': { pinyin: 'zhēn xī', meaning: '珍重爱惜。', words: ['珍惜时间', '珍惜友谊'], sentence: '我们要珍惜美好的时光。' },
    '梦想': { pinyin: 'mèng xiǎng', meaning: '幻想，理想。', words: ['追逐梦想', '实现梦想'], sentence: '他为梦想不断努力。' },
    '希望': { pinyin: 'xī wàng', meaning: '心里想着实现某种事情。', words: ['满怀希望', '希望工程'], sentence: '我希望明天是个晴天。' },
    '灿烂': { pinyin: 'càn làn', meaning: '光彩鲜明夺目。', words: ['阳光灿烂', '灿烂夺目'], sentence: '灿烂的阳光洒满大地。' },
    '宁静': { pinyin: 'níng jìng', meaning: '安静，平静。', words: ['宁静致远', '宁静祥和'], sentence: '夜晚的湖面十分宁静。' },
    '辽阔': { pinyin: 'liáo kuò', meaning: '宽广，空旷。', words: ['辽阔无垠', '辽阔草原'], sentence: '辽阔的草原一望无边。' },
    '蜿蜒': { pinyin: 'wān yán', meaning: '弯弯曲曲地延伸。', words: ['蜿蜒曲折', '蜿蜒盘旋'], sentence: '长城蜿蜒在群山之间。' },
    '巍峨': { pinyin: 'wēi é', meaning: '形容山或建筑物高大雄伟。', words: ['巍峨挺拔', '巍峨耸立'], sentence: '巍峨的高山直插云霄。' },
    '晶莹': { pinyin: 'jīng yíng', meaning: '光亮而透明。', words: ['晶莹剔透', '晶莹夺目'], sentence: '露珠在阳光下晶莹闪亮。' },
    '勤奋': { pinyin: 'qín fèn', meaning: '不懈怠，努力干好一件事。', words: ['勤奋好学', '勤奋刻苦'], sentence: '他学习非常勤奋。' },
    '诚实': { pinyin: 'chéng shí', meaning: '言行跟内心一致，不虚假。', words: ['诚实守信', '诚实可靠'], sentence: '做个诚实的孩子。' },
    '善良': { pinyin: 'shàn liáng', meaning: '心地纯洁，没有恶意。', words: ['善良淳朴', '善良可爱'], sentence: '她是个善良的姑娘。' },
    '友谊': { pinyin: 'yǒu yì', meaning: '朋友间的交情。', words: ['深厚友谊', '友谊长存'], sentence: '我们的友谊地久天长。' },
    '快乐': { pinyin: 'kuài lè', meaning: '感到幸福或满意。', words: ['快乐无比', '快乐成长'], sentence: '祝大家新年快乐。' },
    '温暖': { pinyin: 'wēn nuǎn', meaning: '暖和；使感到亲切关怀。', words: ['温暖如春', '温暖人心'], sentence: '阳光温暖着大地。' },
    '茁壮': { pinyin: 'zhuó zhuàng', meaning: '形容生长旺盛的样子。', words: ['茁壮成长', '茁壮挺拔'], sentence: '小树苗在阳光下茁壮成长。' },
    '慈祥': { pinyin: 'cí xiáng', meaning: '仁慈和蔼。', words: ['慈祥可爱', '慈祥微笑'], sentence: '奶奶露出慈祥的笑容。' },
    '璀璨': { pinyin: 'cuǐ càn', meaning: '形容珠玉等光彩鲜明。', words: ['璀璨夺目', '璀璨星空'], sentence: '璀璨的星空美丽极了。' },
    '静谧': { pinyin: 'jìng mì', meaning: '安静。', words: ['静谧祥和', '静谧无声'], sentence: '山林里一片静谧。' },
    '辽远': { pinyin: 'liáo yuǎn', meaning: '遥远。', words: ['辽远天空', '辽远无边'], sentence: '辽远的天边飘着白云。' },
    '清澈': { pinyin: 'qīng chè', meaning: '清而透明。', words: ['清澈见底', '清澈明亮'], sentence: '湖水清澈见底。' }
  },

  renderDictionary(container) {
    const history = this._loadHistory('study_dict_history');
    const allWords = Object.keys(this._dictData);
    const html = `
      <div class="page-header">
        <div>
          <button class="btn-secondary" id="dictBack">◀ 返回工具箱</button>
          <div class="page-title" style="margin-top:10px;">📕 语文词典</div>
          <div class="page-subtitle">查汉字拼音、释义、组词、例句</div>
        </div>
      </div>
      <div class="glass-card" style="padding:20px;">
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <input type="text" id="dictInput" placeholder="输入汉字或词语，如 美丽 或 美" style="flex:1;min-width:160px;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;outline:none;">
          <button class="btn-primary" id="dictQuery">🔍 查询</button>
        </div>
      </div>
      <div id="dictResult" style="margin-top:16px;"></div>
      <div class="glass-card" style="padding:16px;margin-top:16px;">
        <div style="font-weight:600;margin-bottom:8px;">📜 查询历史</div>
        <div id="dictHistory"></div>
      </div>
      <div class="glass-card" style="padding:16px;margin-top:16px;">
        <div style="font-weight:600;margin-bottom:8px;">📚 词库收录（${allWords.length} 词）</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">${allWords.map(w => `<span class="clickable" data-word="${w}" style="padding:4px 10px;background:var(--bg-secondary);border:1px solid var(--border-soft);border-radius:8px;font-size:13px;">${w}</span>`).join('')}</div>
      </div>
    `;
    container.innerHTML = html;
    this._renderDictHistory(container, history);
    setTimeout(() => {
      container.querySelector('#dictBack').addEventListener('click', () => UI.navigate('tools'));
      const doQuery = () => {
        const q = container.querySelector('#dictInput').value.trim();
        if (!q) { UI.showToast('请输入要查询的字或词'); return; }
        this._dictQuery(container, q);
      };
      container.querySelector('#dictQuery').addEventListener('click', doQuery);
      container.querySelector('#dictInput').addEventListener('keydown', e => { if (e.key === 'Enter') doQuery(); });
      container.querySelectorAll('[data-word]').forEach(el => {
        el.addEventListener('click', () => {
          container.querySelector('#dictInput').value = el.dataset.word;
          this._dictQuery(container, el.dataset.word);
        });
      });
    }, 0);
  },

  _dictQuery(container, q) {
    const data = this._dictData;
    let matches = [];
    // 精确匹配优先
    if (data[q]) {
      matches.push({ word: q, ...data[q] });
    } else {
      // 单字/部分匹配：返回含该字的所有词条
      Object.keys(data).forEach(w => {
        if (w.includes(q)) matches.push({ word: w, ...data[w] });
      });
    }
    const el = container.querySelector('#dictResult');
    if (matches.length === 0) {
      el.innerHTML = `
        <div class="glass-card" style="padding:20px;text-align:center;color:var(--text-muted);">
          词库暂未收录该词，可尝试其他词语。
          <div style="margin-top:10px;font-size:13px;text-align:left;">可用词语：${Object.keys(data).join('、')}</div>
        </div>
      `;
      return;
    }
    el.innerHTML = matches.map(m => `
      <div class="glass-card" style="padding:18px;margin-bottom:12px;">
        <div style="font-size:20px;font-weight:700;color:var(--accent-dark);">${this._escape(m.word)} <span style="font-size:14px;color:var(--text-muted);font-weight:normal;">${this._escape(m.pinyin)}</span></div>
        <div style="margin-top:8px;"><span style="color:var(--text-muted);">释义：</span>${this._escape(m.meaning)}</div>
        <div style="margin-top:6px;"><span style="color:var(--text-muted);">组词：</span>${m.words.map(w => this._escape(w)).join('、')}</div>
        <div style="margin-top:6px;"><span style="color:var(--text-muted);">例句：</span>${this._escape(m.sentence)}</div>
      </div>
    `).join('');
    // 存历史，最多20条，已存在则移到最前
    const hist = this._loadHistory('study_dict_history');
    const idx = hist.indexOf(q);
    if (idx >= 0) hist.splice(idx, 1);
    hist.unshift(q);
    this._saveHistory('study_dict_history', hist.slice(0, 20));
    this._renderDictHistory(container, this._loadHistory('study_dict_history'));
  },

  _renderDictHistory(container, history) {
    const el = container.querySelector('#dictHistory');
    if (!history || history.length === 0) {
      el.innerHTML = '<div style="color:var(--text-muted);font-size:13px;">暂无历史记录</div>';
      return;
    }
    el.innerHTML = history.map((w, i) => `<span class="clickable" data-dicthist="${i}" style="padding:4px 10px;background:var(--bg-secondary);border:1px solid var(--border-soft);border-radius:8px;font-size:13px;margin:0 6px 6px 0;display:inline-block;">${this._escape(w)}</span>`).join('');
    el.querySelectorAll('[data-dicthist]').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.dicthist);
        const w = history[idx];
        if (w) {
          container.querySelector('#dictInput').value = w;
          this._dictQuery(container, w);
        }
      });
    });
  },

  /* ---------- 英语翻译 ---------- */
  // 中英对照词库（小学常见单词/短语）
  _translateData: {
    'hello': '你好', 'school': '学校', 'student': '学生', 'teacher': '老师', 'book': '书',
    'friend': '朋友', 'like': '喜欢', 'play': '玩', 'go': '去', 'eat': '吃',
    'happy': '开心', 'sad': '伤心', 'big': '大', 'small': '小', 'beautiful': '美丽',
    'good': '好', 'morning': '早上', 'afternoon': '下午', 'thank': '谢谢', 'please': '请',
    'sorry': '对不起', 'love': '爱', 'family': '家庭', 'father': '爸爸', 'mother': '妈妈',
    'water': '水', 'food': '食物', 'study': '学习', 'read': '读', 'write': '写',
    'listen': '听', 'speak': '说', 'weather': '天气', 'sunny': '晴天', 'rainy': '雨天',
    'season': '季节', 'spring': '春天', 'summer': '夏天', 'autumn': '秋天', 'winter': '冬天',
    'color': '颜色', 'red': '红', 'blue': '蓝', 'green': '绿', 'yellow': '黄',
    'what': '什么', 'where': '哪里', 'when': '何时', 'who': '谁', 'why': '为什么',
    'i': '我', 'you': '你', 'he': '他', 'she': '她', 'we': '我们', 'they': '他们', 'it': '它',
    'is': '是', 'are': '是', 'am': '是', 'have': '有', 'do': '做'
  },

  renderTranslate(container) {
    const history = this._loadHistory('study_translate_history');
    const html = `
      <div class="page-header">
        <div>
          <button class="btn-secondary" id="trBack">◀ 返回工具箱</button>
          <div class="page-title" style="margin-top:10px;">🌐 英语翻译</div>
          <div class="page-subtitle">中英互译，基于本地词库</div>
        </div>
      </div>
      <div class="glass-card" style="padding:20px;">
        <div style="margin-bottom:10px;">
          <span style="font-weight:600;">方向：</span>
          <label style="margin-right:12px;"><input type="radio" name="trDir" value="cn2en" checked> 中译英</label>
          <label><input type="radio" name="trDir" value="en2cn"> 英译中</label>
        </div>
        <textarea id="trInput" rows="3" placeholder="输入要翻译的文字" style="width:100%;box-sizing:border-box;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;resize:vertical;outline:none;"></textarea>
        <button class="btn-primary" id="trBtn" style="margin-top:12px;">🌐 翻译</button>
        <textarea id="trOutput" rows="3" readonly placeholder="翻译结果" style="width:100%;box-sizing:border-box;margin-top:12px;padding:12px;border:1px solid var(--border-soft);border-radius:12px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;resize:vertical;outline:none;"></textarea>
        <div style="font-size:12px;color:var(--text-muted);margin-top:6px;">本翻译基于本地词库，仅供学习参考。</div>
      </div>
      <div class="glass-card" style="padding:16px;margin-top:16px;">
        <div style="font-weight:600;margin-bottom:8px;">📜 翻译历史</div>
        <div id="trHistory"></div>
      </div>
    `;
    container.innerHTML = html;
    this._renderTranslateHistory(container, history);
    setTimeout(() => {
      container.querySelector('#trBack').addEventListener('click', () => UI.navigate('tools'));
      container.querySelector('#trBtn').addEventListener('click', () => {
        const dir = container.querySelector('input[name="trDir"]:checked').value;
        const input = container.querySelector('#trInput').value.trim();
        if (!input) { UI.showToast('请输入要翻译的文字'); return; }
        const output = dir === 'cn2en' ? this._translateCn2En(input) : this._translateEn2Cn(input);
        container.querySelector('#trOutput').value = output;
        // 存历史，最多20条
        const hist = this._loadHistory('study_translate_history');
        hist.unshift({ source: input, target: output, dir, time: Date.now() });
        this._saveHistory('study_translate_history', hist.slice(0, 20));
        this._renderTranslateHistory(container, this._loadHistory('study_translate_history'));
      });
    }, 0);
  },

  // 中译英：按词库最长匹配，未命中用原字符并加 [?]
  _translateCn2En(text) {
    const dict = this._translateData;
    const entries = Object.entries(dict).map(([en, cn]) => ({ en, cn })).sort((a, b) => b.cn.length - a.cn.length);
    let result = '';
    let i = 0;
    while (i < text.length) {
      let matched = false;
      for (const e of entries) {
        if (e.cn && text.startsWith(e.cn, i)) {
          result += e.en + ' ';
          i += e.cn.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        const ch = text[i];
        if (/[，、]/.test(ch)) result = result.replace(/\s+$/, '') + ', ';
        else if (/[。]/.test(ch)) result = result.replace(/\s+$/, '') + '. ';
        else if (/[！]/.test(ch)) result = result.replace(/\s+$/, '') + '! ';
        else if (/[？]/.test(ch)) result = result.replace(/\s+$/, '') + '? ';
        else if (/[,.!?;:\s]/.test(ch)) result += ch;
        else result += ch + '[?] ';
        i++;
      }
    }
    return result.replace(/\s+/g, ' ').trim();
  },

  // 英译中：按空格/标点分词，逐词查表，未命中加 [?]
  _translateEn2Cn(text) {
    const dict = this._translateData;
    const tokens = text.match(/[a-zA-Z']+|[^a-zA-Z'\s]+|\s+/g) || [];
    let result = '';
    for (const tok of tokens) {
      if (/^\s+$/.test(tok)) { result += tok; continue; }
      if (/^[a-zA-Z']+$/.test(tok)) {
        const lower = tok.toLowerCase();
        if (dict[lower] !== undefined) result += dict[lower];
        else result += tok + '[?]';
      } else {
        result += tok;
      }
    }
    return result;
  },

  _renderTranslateHistory(container, history) {
    const el = container.querySelector('#trHistory');
    if (!history || history.length === 0) {
      el.innerHTML = '<div style="color:var(--text-muted);font-size:13px;">暂无历史记录</div>';
      return;
    }
    const dirName = { cn2en: '中译英', en2cn: '英译中' };
    el.innerHTML = history.map((h, i) => `
      <div class="clickable" data-trhist="${i}" style="padding:10px;border:1px solid var(--border-soft);border-radius:10px;margin-bottom:8px;">
        <div style="font-size:12px;color:var(--text-muted);">${dirName[h.dir] || h.dir} · ${new Date(h.time).toLocaleString('zh-CN')}</div>
        <div style="font-size:13px;color:var(--text-primary);margin-top:2px;">${this._escape(h.source.slice(0, 30))}${h.source.length > 30 ? '...' : ''} → ${this._escape(h.target.slice(0, 30))}${h.target.length > 30 ? '...' : ''}</div>
      </div>
    `).join('');
    el.querySelectorAll('[data-trhist]').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.trhist);
        const h = history[idx];
        if (h) {
          const dirRadio = container.querySelector(`input[name="trDir"][value="${h.dir}"]`);
          if (dirRadio) dirRadio.checked = true;
          container.querySelector('#trInput').value = h.source;
          container.querySelector('#trOutput').value = h.target;
        }
      });
    });
  }
};
