/* 本地存储模块 - 数据持久化 */
const Storage = {
  KEYS: {
    SETTINGS: 'study_settings',
    CHECKINS: 'study_checkins',
    RECORDS: 'study_records',
    WRONG_BOOK: 'study_wrong_book',
    POMODORO: 'study_pomodoro',
    STATS: 'study_stats',
    ACHIEVEMENTS: 'study_achievements',
    WIDGET_IMAGES: 'study_widget_images',
    STUDY_TIME: 'study_time',
    ANSWERS: 'study_answers'
  },

  get(key, defaultVal = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch {
      return defaultVal;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  },

  getAll() {
    const data = {};
    Object.values(this.KEYS).forEach(key => {
      data[key] = this.get(key);
    });
    return data;
  },

  export() {
    return JSON.stringify(this.getAll(), null, 2);
  },

  import(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          this.set(key, value);
        }
      });
      return true;
    } catch {
      return false;
    }
  },

  clear() {
    Object.values(this.KEYS).forEach(key => this.remove(key));
  }
};
