/* 状态管理 */
const State = {
  currentPage: 'home',
  currentSubject: 'chinese',
  currentGrade: 'grade4',
  currentTab: '旧年级巩固',
  currentTextbook: null,
  currentUnit: 0,
  currentPaper: null,
  examAnswers: {},
  examCurrentQ: 0,
  examTimer: null,
  theme: 'light',
  sidebarCollapsed: false,

  init() {
    const settings = Storage.get(Storage.KEYS.SETTINGS, { theme: 'pink', userName: '曼琳' });
    this.theme = settings.theme || 'pink';
    this.userName = settings.userName || '曼琳';
    this.applyTheme();
    this.applyUserName();
  },

  getUserName() {
    const settings = Storage.get(Storage.KEYS.SETTINGS, { theme: this.theme, userName: '曼琳' });
    return settings.userName || '曼琳';
  },

  setUserName(name) {
    this.userName = name || '曼琳';
    const settings = Storage.get(Storage.KEYS.SETTINGS, { theme: this.theme, userName: '曼琳' });
    settings.userName = this.userName;
    Storage.set(Storage.KEYS.SETTINGS, settings);
    this.applyUserName();
  },

  applyUserName() {
    const name = this.getUserName();
    const sidebarTitle = document.querySelector('.sidebar-title');
    if (sidebarTitle) sidebarTitle.textContent = `${name}的学习`;
    const topTitle = document.getElementById('topTitle');
    if (topTitle && State.currentPage === 'home') topTitle.textContent = '首页';
    document.title = `${name}的学习 · 全科学习助手`;
  },

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      const themeIcons = { pink: '🌸', white: '⬜', green: '🌿', purple: '💜', dark: '🌙' };
      toggle.textContent = themeIcons[this.theme] || '🎨';
    }
  },

  setTheme(theme) {
    this.theme = theme;
    const settings = Storage.get(Storage.KEYS.SETTINGS, { theme: 'pink', userName: '曼琳' });
    settings.theme = this.theme;
    Storage.set(Storage.KEYS.SETTINGS, settings);
    this.applyTheme();
  },

  toggleTheme() {
    const themes = ['pink', 'white', 'green', 'purple', 'dark'];
    const idx = themes.indexOf(this.theme);
    this.setTheme(themes[(idx + 1) % themes.length]);
  },

  getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  },

  getCheckins() {
    return Storage.get(Storage.KEYS.CHECKINS, {});
  },

  setCheckin(date, data) {
    const checkins = this.getCheckins();
    checkins[date] = { ...data, timestamp: Date.now() };
    Storage.set(Storage.KEYS.CHECKINS, checkins);
    this.checkAchievements();
  },

  getStudyTime() {
    return Storage.get(Storage.KEYS.STUDY_TIME, { total: 0, sessions: [] });
  },

  addStudyTime(minutes) {
    const data = this.getStudyTime();
    data.total += minutes;
    data.sessions.push({ date: this.getTodayKey(), minutes });
    Storage.set(Storage.KEYS.STUDY_TIME, data);
    this.checkAchievements();
  },

  getRecords() {
    return Storage.get(Storage.KEYS.RECORDS, []);
  },

  addRecord(record) {
    const records = this.getRecords();
    records.push({ ...record, timestamp: Date.now() });
    Storage.set(Storage.KEYS.RECORDS, records);
    this.checkAchievements();
  },

  getWrongBook() {
    return Storage.get(Storage.KEYS.WRONG_BOOK, []);
  },

  addToWrongBook(question) {
    const book = this.getWrongBook();
    if (!book.find(q => q.id === question.id)) {
      book.push({ ...question, addedAt: Date.now(), attempts: 0, correct: 0 });
      Storage.set(Storage.KEYS.WRONG_BOOK, book);
    }
  },

  removeFromWrongBook(id) {
    const book = this.getWrongBook().filter(q => q.id !== id);
    Storage.set(Storage.KEYS.WRONG_BOOK, book);
  },

  getPomodoros() {
    return Storage.get(Storage.KEYS.POMODORO, { count: 0, totalMinutes: 0, history: [] });
  },

  addPomodoro(minutes) {
    const p = this.getPomodoros();
    p.count++;
    p.totalMinutes += minutes;
    p.history.push({ date: this.getTodayKey(), minutes, timestamp: Date.now() });
    Storage.set(Storage.KEYS.POMODORO, p);
    this.checkAchievements();
  },

  getAchievements() {
    return Storage.get(Storage.KEYS.ACHIEVEMENTS, {});
  },

  checkAchievements() {
    const unlocked = this.getAchievements();
    const checkins = this.getCheckins();
    const wrongBook = this.getWrongBook();
    const pomos = this.getPomodoros();
    const records = this.getRecords();
    const studyTime = this.getStudyTime();

    const toUnlock = [];

    if (!unlocked.first_checkin && Object.keys(checkins).length > 0) {
      unlocked.first_checkin = true;
      toUnlock.push('first_checkin');
    }

    const dates = Object.keys(checkins).sort();
    if (dates.length >= 7) {
      let maxStreak = 1, streak = 1;
      for (let i = 1; i < dates.length; i++) {
        const prev = new Date(dates[i - 1]);
        const curr = new Date(dates[i]);
        if ((curr - prev) === 86400000) { streak++; maxStreak = Math.max(maxStreak, streak); }
        else streak = 1;
      }
      if (maxStreak >= 7 && !unlocked.week_streak) { unlocked.week_streak = true; toUnlock.push('week_streak'); }
      if (maxStreak >= 30 && !unlocked.month_streak) { unlocked.month_streak = true; toUnlock.push('month_streak'); }
    }

    const subjectsDone = new Set();
    records.forEach(r => { if (r.subject) subjectsDone.add(r.subject); });
    if (subjectsDone.size >= 3 && !unlocked.all_subjects) { unlocked.all_subjects = true; toUnlock.push('all_subjects'); }

    const papersDone = records.filter(r => r.type === 'paper_score').length;
    if (papersDone >= 5 && !unlocked.paper_master) { unlocked.paper_master = true; toUnlock.push('paper_master'); }

    if (pomos.count >= 10 && !unlocked.pomodoro_10) { unlocked.pomodoro_10 = true; toUnlock.push('pomodoro_10'); }

    if (studyTime.total >= 100 * 60 && !unlocked.study_100h) { unlocked.study_100h = true; toUnlock.push('study_100h'); }

    if (records.some(r => r.paper_score === 100) && !unlocked.perfect_score) { unlocked.perfect_score = true; toUnlock.push('perfect_score'); }

    if (records.some(r => r.type === 'textbook_read') && !unlocked.textbook_reader) { unlocked.textbook_reader = true; toUnlock.push('textbook_reader'); }

    const widgetImgs = Storage.get(Storage.KEYS.WIDGET_IMAGES, []);
    if (widgetImgs.length >= 10 && !unlocked.widget_master) { unlocked.widget_master = true; toUnlock.push('widget_master'); }

    Storage.set(Storage.KEYS.ACHIEVEMENTS, unlocked);

    if (toUnlock.length > 0) {
      setTimeout(() => {
        toUnlock.forEach(id => {
          const ach = APP_DATA.achievements.find(a => a.id === id);
          if (ach) Motivation.showAchievement(ach);
        });
      }, 500);
    }
  }
};
