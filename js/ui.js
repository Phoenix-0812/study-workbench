/* UI 通用组件 */
const UI = {
  showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  },

  showDetail(html, title = '详情') {
    const body = document.getElementById('detailBody');
    body.innerHTML = `<h3 style="margin-bottom:16px;font-size:18px;">${title}</h3>${html}`;
    document.getElementById('detailModal').classList.remove('hidden');
  },

  closeDetail() {
    document.getElementById('detailModal').classList.add('hidden');
  },

  navigate(page, params = {}) {
    State.currentPage = page;
    const titles = {
      home: '首页', chinese: '语文', math: '数学', english: '英语',
      papers: '真题试卷', textbook: '电子课本', checkin: '打卡日历',
      pomodoro: '番茄钟', wrongbook: '错题本', stats: '数据统计',
      materials: '素材库', achievements: '打卡成就', widget: '图片小组件',
      settings: '设置'
    };
    document.getElementById('topTitle').textContent = titles[page] || page;
    
    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      const ip = item.dataset.page;
      if (page === 'chinese' || page === 'math' || page === 'english') {
        item.classList.toggle('active', ip === page);
      } else if (page === 'home') {
        item.classList.toggle('active', ip === 'home');
      } else if (page === 'tools' || ['checkin','pomodoro','wrongbook','stats','materials'].includes(page)) {
        item.classList.toggle('active', ip === 'tools');
      } else {
        item.classList.remove('active');
      }
    });

    this.renderPage(page, params);
    window.scrollTo(0, 0);

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('mobile-open');
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.classList.remove('show');
  },

  renderPage(page, params) {
    const container = document.getElementById('pageContainer');
    container.classList.remove('page-enter');
    void container.offsetWidth;
    container.classList.add('page-enter');

    const pages = {
      home: () => this.renderHome(),
      chinese: () => Subjects.renderSubject('chinese'),
      math: () => Subjects.renderSubject('math'),
      english: () => Subjects.renderSubject('english'),
      papers: () => Papers.render(),
      textbook: () => Textbooks.render(),
      checkin: () => Tools.renderCheckin(),
      pomodoro: () => Tools.renderPomodoro(),
      wrongbook: () => Tools.renderWrongBook(),
      stats: () => Tools.renderStats(),
      materials: () => Tools.renderMaterials(),
      achievements: () => this.renderAchievements(),
      widget: () => Widget.render(),
      settings: () => this.renderSettings(),
      tools: () => Tools.renderToolsPage()
    };

    const renderer = pages[page] || pages.home;
    container.innerHTML = '';
    container.appendChild(this.createElement(renderer()));
    // 渲染后绑定页面级事件
    this.bindPageEvents(page);
  },

  // 绑定各页面渲染后的事件
  bindPageEvents(page) {
    if (page === 'home') this.bindHomeEvents();
    if (page === 'settings') this.bindSettingsEvents();
  },

  // 首页：实时时钟 + 快速计时器 + 打卡 + 导航
  bindHomeEvents() {
    const container = document.getElementById('pageContainer');

    // 实时时钟
    const clockEl = document.getElementById('homeClock');
    const tickClock = () => {
      if (!clockEl || !document.body.contains(clockEl)) return;
      const d = new Date();
      const pad = n => String(n).padStart(2, '0');
      clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };
    tickClock();
    if (this._clockTimer) clearInterval(this._clockTimer);
    this._clockTimer = setInterval(tickClock, 1000);

    // 快速计时器
    let timerSec = 0;
    const timerEl = document.getElementById('homeTimer');
    const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
    const startBtn = document.getElementById('homeTimerStart');
    const stopBtn = document.getElementById('homeTimerStop');
    const resetBtn = document.getElementById('homeTimerReset');
    if (startBtn) startBtn.addEventListener('click', () => {
      if (this._timerInterval) return;
      this._timerInterval = setInterval(() => {
        timerSec++;
        if (timerEl) timerEl.textContent = fmt(timerSec);
      }, 1000);
    });
    if (stopBtn) stopBtn.addEventListener('click', () => {
      if (this._timerInterval) { clearInterval(this._timerInterval); this._timerInterval = null; }
    });
    if (resetBtn) resetBtn.addEventListener('click', () => {
      if (this._timerInterval) { clearInterval(this._timerInterval); this._timerInterval = null; }
      // 计入学习时长（按分钟）
      if (timerSec > 0) State.addStudyTime(Math.max(1, Math.round(timerSec / 60)));
      timerSec = 0;
      if (timerEl) timerEl.textContent = '00:00';
    });

    // 快捷动作 / 卡片导航
    container.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.action));
    });
    container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.nav));
    });

    // 首页打卡按钮
    const checkinBtn = document.getElementById('homeCheckinBtn');
    if (checkinBtn) checkinBtn.addEventListener('click', () => {
      const today = State.getTodayKey();
      const checkins = State.getCheckins();
      if (checkins[today]) {
        this.navigate('checkin');
      } else {
        State.setCheckin(today, { note: '首页快速打卡' });
        Motivation.showCelebration('打卡成功！今天也很棒！', '📅');
        this.navigate('home');
      }
    });

    // 首页照片收藏：上传图片（贴图）
    const homeImgUpload = document.getElementById('homeImgUpload');
    if (homeImgUpload) homeImgUpload.addEventListener('change', (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;
      if (typeof Widget !== 'undefined' && Widget.handleUpload) {
        Widget.handleUpload(files);
      }
    });

    // 首页照片收藏：查看全部
    const homeViewAllImg = document.getElementById('homeViewAllImg');
    if (homeViewAllImg) homeViewAllImg.addEventListener('click', () => this.navigate('widget'));

    // 首页图片缩略图点击：跳转到图片小组件
    container.querySelectorAll('.home-img-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => this.navigate('widget'));
    });

    // 首页成就墙：查看完整成就
    const homeViewAllAch = document.getElementById('homeViewAllAch');
    if (homeViewAllAch) homeViewAllAch.addEventListener('click', () => this.navigate('achievements'));

    // 首页成就项点击：跳转成就墙
    container.querySelectorAll('.home-ach-item').forEach(item => {
      item.addEventListener('click', () => this.navigate('achievements'));
    });
  },

  // ========== 多端同步：同步码 ==========
  // 简易压缩（UTF-8安全）：学习数据通常几KB，Base64即可
  _encodeData(str) {
    try {
      // 用 encodeURIComponent + Base64 支持中文
      return btoa(unescape(encodeURIComponent(str)));
    } catch (e) { return ''; }
  },
  _decodeData(b64) {
    try {
      return decodeURIComponent(escape(atob(b64)));
    } catch (e) { return ''; }
  },
  // 生成设备ID（只生成一次，永久保存）
  _genDeviceId() {
    const saved = Storage.get(Storage.KEYS.SETTINGS, {});
    if (saved._deviceId) return saved._deviceId;
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let id = '';
    for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
    saved._deviceId = id;
    Storage.set(Storage.KEYS.SETTINGS, saved);
    return id;
  },
  // 生成6位同步校验码（和数据绑定，用于用户确认）
  _genShortCode(dataStr) {
    let h = 0;
    for (let i = 0; i < dataStr.length; i++) h = ((h << 5) - h) + dataStr.charCodeAt(i), h |= 0;
    const code = Math.abs(h) % 1000000;
    return String(code).padStart(6, '0');
  },

  // 设置页：主题切换 + 名字 + 数据管理 + 多端同步
  bindSettingsEvents() {
    const container = document.getElementById('pageContainer');
    const that = this;

    // 1. 账号与多端同步 - 生成同步码
    const genBtn = document.getElementById('genSyncCodeBtn');
    if (genBtn) genBtn.addEventListener('click', async () => {
      const rawData = Storage.export(); // JSON字符串
      const encoded = that._encodeData(rawData);
      const shortCode = that._genShortCode(encoded);

      // 把完整数据写入剪贴板（6位码仅用于校验提示）
      let copyOk = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(encoded);
          copyOk = true;
        }
      } catch (e) {}

      // 以弹窗形式展示6位码，并提示剪贴板状态
      const clipMsg = copyOk ? '✅ 完整数据已自动复制到剪贴板' : '⚠️ 剪贴板不可用，请手动复制下面的完整数据';
      UI.showDetail(`
        <div style="text-align:center;">
          <div style="font-size:14px;color:var(--text-muted);margin-bottom:10px;">🔑 6位同步校验码（在另一台设备输入时用到）</div>
          <div style="font-size:40px;font-weight:800;letter-spacing:10px;padding:16px;background:var(--bg-secondary);border-radius:16px;margin-bottom:16px;font-family:monospace;color:var(--accent-dark);">${shortCode}</div>
          <div style="font-size:13px;color:var(--text-muted);line-height:1.7;margin-bottom:12px;">
            ${clipMsg}<br>
            💡 <strong>使用方法：</strong>在另一台设备打开「设置 → 输入同步码」，<br>
            先粘贴剪贴板完整数据，再输入上方6位校验码确认。
          </div>
          <details style="text-align:left;margin-top:12px;">
            <summary style="cursor:pointer;font-size:13px;color:var(--text-secondary);padding:8px;background:var(--bg-secondary);border-radius:10px;">📋 查看/手动复制完整数据</summary>
            <textarea id="syncFullData" readonly style="width:100%;margin-top:8px;padding:10px;border-radius:10px;border:1px solid var(--border-soft);font-size:11px;font-family:monospace;resize:vertical;height:140px;background:var(--bg-secondary);color:var(--text-primary);">${encoded}</textarea>
          </details>
          <div style="margin-top:16px;">
            <button class="btn-primary" onclick="document.getElementById('detailClose')?.click?.();">我知道了</button>
          </div>
        </div>
      `, '🔑 生成同步码');
    });

    // 2. 账号与多端同步 - 输入同步码
    const inpBtn = document.getElementById('inputSyncCodeBtn');
    if (inpBtn) inpBtn.addEventListener('click', () => {
      UI.showDetail(`
        <div>
          <div style="font-weight:700;margin-bottom:14px;font-size:16px;">📥 导入学习数据</div>
          <div style="margin-bottom:12px;">
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:6px;">① 粘贴旧设备复制的完整数据：</div>
            <textarea id="syncPasteData" placeholder="在此粘贴旧设备复制的长串数据..." style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border-soft);font-family:monospace;font-size:12px;resize:vertical;height:100px;background:var(--bg-secondary);color:var(--text-primary);outline:none;"></textarea>
          </div>
          <div style="margin-bottom:16px;">
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:6px;">② 输入6位校验码（用于确认数据正确）：</div>
            <input type="text" id="syncShortCode" maxlength="6" placeholder="6位数字" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--border-soft);font-family:monospace;font-size:20px;letter-spacing:8px;text-align:center;background:var(--bg-secondary);color:var(--text-primary);outline:none;">
          </div>
          <div style="display:flex;gap:10px;justify-content:flex-end;">
            <button class="btn-secondary" id="syncCancel">取消</button>
            <button class="btn-primary" id="syncOk">✅ 确认同步</button>
          </div>
        </div>
      `, '🔓 输入同步码');
      setTimeout(() => {
        const cancelBtn = document.getElementById('syncCancel');
        if (cancelBtn) cancelBtn.addEventListener('click', () => UI.closeDetail());
        const okBtn = document.getElementById('syncOk');
        if (okBtn) okBtn.addEventListener('click', async () => {
          const pasteData = document.getElementById('syncPasteData').value.trim();
          const shortCode = document.getElementById('syncShortCode').value.trim();
          if (!pasteData) { UI.showToast('请先粘贴完整数据'); return; }
          // 校验
          const expectCode = that._genShortCode(pasteData);
          if (shortCode && shortCode !== expectCode) {
            if (!confirm(`⚠️ 6位校验码与数据不匹配。\n期望：${expectCode}\n您输入：${shortCode}\n\n是否仍要继续导入？`)) return;
          }
          // 解码并导入
          const jsonStr = that._decodeData(pasteData);
          if (!jsonStr) { UI.showToast('数据格式错误，请检查粘贴内容'); return; }
          if (Storage.import(jsonStr)) {
            UI.closeDetail();
            // 保存新设备ID，避免覆盖
            const s = Storage.get(Storage.KEYS.SETTINGS, {});
            if (!s._deviceId) { s._deviceId = that._genDeviceId(); Storage.set(Storage.KEYS.SETTINGS, s); }
            UI.showToast('🎉 同步成功！学习进度已恢复');
            State.init();
            that.navigate('home');
          } else {
            UI.showToast('导入失败，数据损坏');
          }
        });
      }, 80);
    });

    // 主题切换
    container.querySelectorAll('.theme-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const val = opt.dataset.themeVal;
        State.setTheme(val);
        container.querySelectorAll('.theme-option').forEach(o => o.classList.toggle('active', o === opt));
        this.showToast('主题已切换');
      });
    });

    // 名字输入
    const nameInput = document.getElementById('userNameInput');
    if (nameInput) nameInput.addEventListener('change', () => {
      State.setUserName(nameInput.value.trim());
      this.showToast('名字已保存');
    });

    // 顶部主题快捷切换按钮
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle && !themeToggle.dataset.bound) {
      themeToggle.dataset.bound = '1';
      themeToggle.addEventListener('click', () => State.toggleTheme());
    }

    // 数据管理 - 文件备份
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) exportBtn.addEventListener('click', () => {
      const data = Storage.export();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `学习数据备份_${State.getTodayKey()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('备份已导出');
    });
    const importBtn = document.getElementById('importBtn');
    if (importBtn) importBtn.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file'; input.accept = '.json,application/json';
      input.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          if (Storage.import(ev.target.result)) {
            this.showToast('导入成功');
            State.init();
            this.navigate('home');
          } else {
            this.showToast('导入失败，文件格式错误');
          }
        };
        reader.readAsText(file);
      });
      input.click();
    });
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      if (confirm('确定清空所有学习数据吗？\n⚠️ 此操作不可恢复！建议先备份！')) {
        Storage.clear();
        this.showToast('数据已清空');
        this.navigate('home');
      }
    });
  },

  // 今日答对题数
  getTodayCorrect() {
    const records = State.getRecords();
    const today = State.getTodayKey();
    return records.filter(r => r.date === today && r.type === 'question_answer' && r.correct).length;
  },

  createElement(html) {
    if (typeof html === 'string') {
      const div = document.createElement('div');
      div.innerHTML = html.trim();
      // 若模板含多个顶层节点，需全部插入，否则 firstChild 会丢失后续兄弟节点
      if (div.childNodes.length === 1) {
        return div.firstChild;
      }
      const frag = document.createDocumentFragment();
      while (div.firstChild) frag.appendChild(div.firstChild);
      return frag;
    }
    return html;
  },

  renderHome() {
    const streak = Motivation.getCurrentStreak();
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}月${today.getDate()}日`;
    const weekday = ['日', '一', '二', '三', '四', '五', '六'][today.getDay()];
    const userName = State.getUserName();
    const todayChecked = !!State.getCheckins()[State.getTodayKey()];
    const todayCount = this.getTodayCount();
    const todayCorrect = this.getTodayCorrect();
    const accuracy = todayCount > 0 ? Math.round(todayCorrect / todayCount * 100) : 0;

    // 收藏图片 & 成就（首页直接展示）
    const widgetImages = Storage.get(Storage.KEYS.WIDGET_IMAGES, []);
    const unlockedAch = State.getAchievements();
    const allAchievements = APP_DATA.achievements || [];
    const unlockedCount = Object.keys(unlockedAch).length;

    // 首页图片收藏预览（最多显示前4张，可点击查看全部）
    const imagePreviewHtml = widgetImages.length > 0
      ? widgetImages.slice(0, 4).map((src, i) => `
          <div class="home-img-thumb" data-idx="${i}" style="position:relative;width:100%;padding-top:100%;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);cursor:pointer;">
            <img src="${src}" alt="收藏${i+1}" loading="lazy" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
          </div>
        `).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-muted);font-size:13px;">
          📷 还没有收藏照片<br>
          <span style="font-size:12px;">点击下方按钮上传你的第一张照片</span>
        </div>`;

    // 首页成就墙预览（显示已解锁 + 前6个未解锁）
    const unlockedList = allAchievements.filter(a => unlockedAch[a.id]);
    const lockedList = allAchievements.filter(a => !unlockedAch[a.id]).slice(0, 6);
    const achievementPreviewHtml = [...unlockedList, ...lockedList].slice(0, 8).map(a => `
      <div class="home-ach-item ${unlockedAch[a.id] ? 'unlocked' : 'locked'}" title="${a.name}: ${a.desc}" style="display:flex;flex-direction:column;align-items:center;padding:10px 6px;border-radius:12px;background:${unlockedAch[a.id] ? 'linear-gradient(135deg,var(--pink-light),#fff)' : 'var(--bg-secondary)'};border:1px solid ${unlockedAch[a.id] ? 'var(--pink)' : 'var(--border-soft)'};cursor:pointer;transition:transform 0.2s;">
        <div style="font-size:28px;filter:${unlockedAch[a.id] ? 'none' : 'grayscale(1) opacity(0.5)'};">${a.icon}</div>
        <div style="font-size:11px;font-weight:600;color:var(--text-primary);margin-top:4px;text-align:center;">${a.name}</div>
      </div>
    `).join('');

    return `
      <div class="page-header">
        <div>
          <div class="page-title">🏠 ${userName}，你好呀！👋</div>
          <div class="page-subtitle">${dateStr} 星期${weekday} · 已连续打卡 ${streak} 天</div>
        </div>
      </div>

      <!-- 实时时钟模块 -->
      <div class="glass-card" style="padding:20px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
        <div style="text-align:center;flex:1;min-width:140px;">
          <div id="homeClock" style="font-size:38px;font-weight:700;color:var(--accent-dark);letter-spacing:2px;font-variant-numeric:tabular-nums;">--:--:--</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">${dateStr} 星期${weekday}</div>
        </div>
        <div style="height:50px;width:1px;background:var(--border-soft);"></div>
        <!-- 快速计时器 -->
        <div style="text-align:center;flex:1;min-width:160px;">
          <div id="homeTimer" style="font-size:26px;font-weight:600;color:var(--text-primary);font-variant-numeric:tabular-nums;">00:00</div>
          <div style="display:flex;gap:6px;justify-content:center;margin-top:6px;">
            <button class="btn-secondary" id="homeTimerStart" style="padding:6px 14px;font-size:12px;">▶ 开始</button>
            <button class="btn-secondary" id="homeTimerStop" style="padding:6px 14px;font-size:12px;">⏸ 暂停</button>
            <button class="btn-secondary" id="homeTimerReset" style="padding:6px 10px;font-size:12px;">↺</button>
          </div>
        </div>
      </div>

      <div class="home-banner">
        <div class="banner-title">✨ 每日鼓励</div>
        <div class="banner-quote">${Motivation.getRandomQuote()}</div>
      </div>

      <div class="quick-actions">
        <div class="quick-action" data-action="chinese">
          <div class="quick-action-icon">📖</div>
          <div class="quick-action-label">语文学习</div>
        </div>
        <div class="quick-action" data-action="math">
          <div class="quick-action-icon">🔢</div>
          <div class="quick-action-label">数学练习</div>
        </div>
        <div class="quick-action" data-action="english">
          <div class="quick-action-icon">🔤</div>
          <div class="quick-action-label">英语背诵</div>
        </div>
        <div class="quick-action" data-action="papers">
          <div class="quick-action-icon">📝</div>
          <div class="quick-action-label">模拟试卷</div>
        </div>
        <div class="quick-action" data-action="pomodoro">
          <div class="quick-action-icon">🍅</div>
          <div class="quick-action-label">番茄专注</div>
        </div>
        <div class="quick-action" data-action="checkin">
          <div class="quick-action-icon">📅</div>
          <div class="quick-action-label">今日打卡</div>
        </div>
      </div>

      <!-- 📸 我的照片收藏（上移到首页显眼位置，直接展示照片）-->
      <div class="home-section">
        <div class="home-section-title" style="display:flex;align-items:center;justify-content:space-between;">
          <span>📸 我的照片收藏</span>
          <span style="font-size:12px;color:var(--text-muted);font-weight:normal;">共 ${widgetImages.length} 张</span>
        </div>
        <div class="glass-card" style="padding:16px;">
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
            ${imagePreviewHtml}
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <label style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;padding:8px 16px;background:linear-gradient(135deg,var(--pink),var(--purple));color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;" for="homeImgUpload">
              📤 贴图/上传
              <input type="file" id="homeImgUpload" accept="image/*" multiple style="position:absolute;opacity:0;width:0;height:0;">
            </label>
            <button class="btn-secondary" id="homeViewAllImg" style="padding:8px 16px;font-size:13px;">🖼️ 查看全部</button>
          </div>
        </div>
      </div>

      <!-- 🏆 我的成就墙（上移到首页，直接展示奖杯和成就）-->
      <div class="home-section">
        <div class="home-section-title" style="display:flex;align-items:center;justify-content:space-between;">
          <span>🏆 我的成就墙</span>
          <span style="font-size:12px;color:var(--text-muted);font-weight:normal;">已解锁 ${unlockedCount}/${allAchievements.length}</span>
        </div>
        <div class="glass-card" style="padding:16px;">
          ${unlockedCount > 0 ? `
            <div style="margin-bottom:12px;padding:10px 14px;background:linear-gradient(135deg,#fff5f7,#fff);border-radius:10px;border:1px solid var(--pink);">
              <div style="font-size:13px;font-weight:600;color:var(--accent-dark);">✨ 我获得的成就：</div>
              <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;line-height:1.6;">
                ${unlockedList.map(a => `${a.icon} ${a.name}`).join(' · ')}
              </div>
            </div>
          ` : `
            <div style="margin-bottom:12px;padding:10px 14px;background:var(--bg-secondary);border-radius:10px;font-size:12px;color:var(--text-muted);text-align:center;">
              🌟 还未解锁成就，快去打卡学习解锁专属徽章吧！
            </div>
          `}
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            ${achievementPreviewHtml}
          </div>
          <button class="btn-secondary" id="homeViewAllAch" style="width:100%;margin-top:12px;padding:8px;font-size:13px;">🏆 查看完整成就墙</button>
        </div>
      </div>

      <!-- 今日完成情况模块 -->
      <div class="home-section">
        <div class="home-section-title">📊 今日完成情况</div>
        <div class="stats-overview">
          <div class="stats-card" data-nav="chinese">
            <div class="stats-icon">📚</div>
            <div class="stats-value">${todayCount}</div>
            <div class="stats-label">今日做题</div>
          </div>
          <div class="stats-card" data-nav="wrongbook">
            <div class="stats-icon">✅</div>
            <div class="stats-value">${todayCorrect}</div>
            <div class="stats-label">答对题数</div>
          </div>
          <div class="stats-card" data-nav="stats">
            <div class="stats-icon">🎯</div>
            <div class="stats-value">${accuracy}%</div>
            <div class="stats-label">正确率</div>
          </div>
          <div class="stats-card" data-nav="pomodoro">
            <div class="stats-icon">⏰</div>
            <div class="stats-value">${this.getTodayMinutes()}</div>
            <div class="stats-label">学习(分钟)</div>
          </div>
        </div>
      </div>

      <!-- 今日打卡情况模块 -->
      <div class="home-section">
        <div class="home-section-title">📅 今日打卡</div>
        <div class="glass-card" style="padding:18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="font-size:32px;">${todayChecked ? '✅' : '⏳'}</div>
            <div>
              <div style="font-size:15px;font-weight:600;color:var(--text-primary);">${todayChecked ? '今日已打卡' : '今日还未打卡'}</div>
              <div style="font-size:12px;color:var(--text-muted);">连续 ${streak} 天 · 累计 ${Object.keys(State.getCheckins()).length} 天</div>
            </div>
          </div>
          <button class="${todayChecked ? 'btn-secondary' : 'btn-primary'}" id="homeCheckinBtn" style="padding:10px 22px;">${todayChecked ? '查看记录' : '立即打卡'}</button>
        </div>
      </div>

      <div class="home-section">
        <div class="home-section-title">🔥 连续打卡与错题</div>
        <div class="stats-overview">
          <div class="stats-card" data-nav="checkin">
            <div class="stats-icon">🔥</div>
            <div class="stats-value">${streak}</div>
            <div class="stats-label">连续打卡(天)</div>
          </div>
          <div class="stats-card" data-nav="wrongbook">
            <div class="stats-icon">❌</div>
            <div class="stats-value">${State.getWrongBook().length}</div>
            <div class="stats-label">待复习错题</div>
          </div>
          <div class="stats-card" data-nav="achievements">
            <div class="stats-icon">🏆</div>
            <div class="stats-value">${unlockedCount}</div>
            <div class="stats-label">已解锁成就</div>
          </div>
        </div>
      </div>

      <div class="home-section">
        <div class="home-section-title">🎯 推荐练习</div>
        <div class="card-grid">
          <div class="card card-accent clickable" data-nav="chinese">
            <div class="card-title">📖 语文每日一练</div>
            <div class="card-desc">古诗词鉴赏、阅读理解、词句练习，全面提升语文素养。</div>
          </div>
          <div class="card card-accent card-accent-mint clickable" data-nav="math">
            <div class="card-title">🔢 数学专项训练</div>
            <div class="card-desc">计算题、应用题、思维拓展，打好数学基础。</div>
          </div>
          <div class="card card-accent card-accent-blue clickable" data-nav="english">
            <div class="card-title">🔤 英语单词默写</div>
            <div class="card-desc">核心词汇、句型练习，英语进步看得见。</div>
          </div>
        </div>
      </div>
    `;
  },

  getTodayCount() {
    const records = State.getRecords();
    const today = State.getTodayKey();
    return records.filter(r => r.date === today).length;
  },

  getTodayMinutes() {
    const st = State.getStudyTime();
    const today = State.getTodayKey();
    return st.sessions.filter(s => s.date === today).reduce((sum, s) => sum + s.minutes, 0);
  },

  renderAchievements() {
    const unlocked = State.getAchievements();
    return `
      <div class="page-header">
        <div>
          <div class="page-title">🏆 打卡成就</div>
          <div class="page-subtitle">完成挑战，解锁专属徽章</div>
        </div>
      </div>
      <div class="achievements-grid">
        ${APP_DATA.achievements.map(a => `
          <div class="achievement-card ${unlocked[a.id] ? 'unlocked' : ''}">
            <div class="achievement-icon">${a.icon}</div>
            <div class="achievement-name">${a.name}</div>
            <div class="achievement-desc">${a.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderSettings() {
    const settings = Storage.get(Storage.KEYS.SETTINGS, { theme: 'pink' });
    const syncInfo = Storage.get(Storage.KEYS.SETTINGS, {});
    const deviceId = syncInfo._deviceId || this._genDeviceId();
    return `
      <div class="page-header">
        <div>
          <div class="page-title">⚙️ 设置</div>
          <div class="page-subtitle">个性化你的学习体验</div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">👤 账号与多端同步</div>
        <div class="settings-item">
          <div>
            <div class="settings-label">🔐 当前设备ID</div>
            <div class="settings-desc" id="deviceIdText" style="font-family:monospace;font-size:12px;word-break:break-all;">${deviceId}</div>
          </div>
          <div>📱</div>
        </div>
        <div class="settings-item clickable" id="genSyncCodeBtn">
          <div>
            <div class="settings-label">📤 生成同步码</div>
            <div class="settings-desc">将当前学习数据生成6位同步码，在另一台设备输入即可同步</div>
          </div>
          <div>🔑</div>
        </div>
        <div class="settings-item clickable" id="inputSyncCodeBtn">
          <div>
            <div class="settings-label">📥 输入同步码</div>
            <div class="settings-desc">输入另一台设备生成的6位同步码，恢复学习进度</div>
          </div>
          <div>🔓</div>
        </div>
        <div class="settings-item" style="padding-top:12px;">
          <div style="flex:1;">
            <div class="settings-label">💡 使用说明</div>
            <div class="settings-desc" style="line-height:1.7;">
              ① 在旧设备点「生成同步码」→ 复制6位码<br>
              ② 在新设备点「输入同步码」→ 粘贴并确定<br>
              ③ 学习进度（打卡/做题/错题/时长）立即同步
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">👤 个性化</div>
        <div class="settings-item">
          <div>
            <div class="settings-label">你的名字</div>
            <div class="settings-desc">设置后在首页和导航栏显示</div>
          </div>
          <input type="text" id="userNameInput" class="name-input" value="${State.getUserName()}" placeholder="输入名字" maxlength="10" style="width:100px;padding:8px 12px;border:1px solid var(--border-soft);border-radius:10px;background:var(--bg-secondary);color:var(--text-primary);font-size:14px;text-align:center;outline:none;">
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">🎨 主题颜色</div>
        <div class="settings-desc" style="padding:0 4px 12px;font-size:13px;color:var(--text-muted);">选择你喜欢的主题色系</div>
        <div class="theme-picker">
          <div class="theme-option ${State.theme === 'pink' ? 'active' : ''}" data-theme-val="pink">
            <div class="theme-swatch" style="background:linear-gradient(135deg,#ffb6c1,#ffd6e0);"></div>
            <span>粉色</span>
          </div>
          <div class="theme-option ${State.theme === 'white' ? 'active' : ''}" data-theme-val="white">
            <div class="theme-swatch" style="background:linear-gradient(135deg,#fafafa,#e8eaff);border:1px solid #ddd;"></div>
            <span>白色</span>
          </div>
          <div class="theme-option ${State.theme === 'green' ? 'active' : ''}" data-theme-val="green">
            <div class="theme-swatch" style="background:linear-gradient(135deg,#a5d6a7,#c8e6c9);"></div>
            <span>绿色</span>
          </div>
          <div class="theme-option ${State.theme === 'purple' ? 'active' : ''}" data-theme-val="purple">
            <div class="theme-swatch" style="background:linear-gradient(135deg,#ce93d8,#e1bee7);"></div>
            <span>紫色</span>
          </div>
          <div class="theme-option ${State.theme === 'dark' ? 'active' : ''}" data-theme-val="dark">
            <div class="theme-swatch" style="background:linear-gradient(135deg,#1a1a24,#3a3350);"></div>
            <span>黑色</span>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">💾 数据管理（文件备份）</div>
        <div class="settings-item clickable" id="exportBtn">
          <div>
            <div class="settings-label">📤 导出备份文件</div>
            <div class="settings-desc">导出为JSON文件，可长期保存或发微信/邮件</div>
          </div>
          <div>📄</div>
        </div>
        <div class="settings-item clickable" id="importBtn">
          <div>
            <div class="settings-label">📥 导入备份文件</div>
            <div class="settings-desc">从JSON备份文件恢复学习数据</div>
          </div>
          <div>📂</div>
        </div>
        <div class="settings-item clickable" id="clearBtn" style="color:#e74c3c;">
          <div>
            <div class="settings-label">🗑️ 清空所有数据</div>
            <div class="settings-desc">⚠️ 此操作不可恢复，建议先备份！</div>
          </div>
          <div>⚠️</div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">📱 桌面小组件</div>
        <div class="settings-item">
          <div>
            <div class="settings-label">添加到桌面</div>
            <div class="settings-desc">在浏览器菜单中选择"添加到主屏幕"</div>
          </div>
          <div>📲</div>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-label">离线使用</div>
            <div class="settings-desc">所有学习内容均已缓存，支持断网学习</div>
          </div>
          <div>✅</div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title">ℹ️ 关于</div>
        <div class="settings-item">
          <div>
            <div class="settings-label">${State.getUserName()}的学习工作台</div>
            <div class="settings-desc">语文·数学·英语 · 四~六年级全覆盖</div>
          </div>
          <div>🌸</div>
        </div>
      </div>
    `;
  }
};
