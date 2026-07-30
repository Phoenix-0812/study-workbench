/* 激励模块 */
const Motivation = {
  getRandomQuote() {
    const quotes = APP_DATA.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  },

  showQuote() {
    const banner = document.querySelector('.home-banner');
    if (!banner) return;
    const quoteEl = banner.querySelector('.banner-quote');
    if (quoteEl) {
      quoteEl.textContent = this.getRandomQuote();
    }
  },

  showCelebration(text, emoji = '🎉') {
    const modal = document.getElementById('celebrationModal');
    const emojiEl = document.getElementById('celebrationEmoji');
    const textEl = document.getElementById('celebrationText');
    emojiEl.textContent = emoji;
    textEl.textContent = text;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('hidden'), 3500);
  },

  showAchievement(achievement) {
    this.showCelebration(`🏆 成就解锁：${achievement.name}！`, achievement.icon);
  },

  showCheckinCelebration() {
    const streak = this.getCurrentStreak();
    const messages = [
      { text: '完成今日打卡，继续加油！', emoji: '✅' },
      { text: `太棒了！已连续打卡${streak}天！`, emoji: '🔥' },
      { text: '坚持的你，最闪耀！', emoji: '✨' },
      { text: '今日任务完成，为你点赞！', emoji: '👍' }
    ];
    const m = messages[Math.floor(Math.random() * messages.length)];
    this.showCelebration(m.text, m.emoji);
  },

  showPaperCelebration(score, total) {
    const pct = Math.round((score / total) * 100);
    let text, emoji;
    if (pct === 100) { text = '满分！你真是太棒了！'; emoji = '💯'; }
    else if (pct >= 90) { text = `优秀！得分${score}分！`; emoji = '🌟'; }
    else if (pct >= 80) { text = `不错！得分${score}分！`; emoji = '😊'; }
    else if (pct >= 60) { text = `及格啦！继续加油！`; emoji = '💪'; }
    else { text = '继续努力，相信你可以的！'; emoji = '🌈'; }
    this.showCelebration(text, emoji);
  },

  getCurrentStreak() {
    const checkins = State.getCheckins();
    const dates = Object.keys(checkins).sort().reverse();
    if (dates.length === 0) return 0;
    let streak = 1;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const todayKey = this.formatDate(today);
    const yestKey = this.formatDate(yesterday);
    
    if (!checkins[todayKey] && !checkins[yestKey]) return 0;
    
    for (let i = 0; i < dates.length - 1; i++) {
      const curr = new Date(dates[i]);
      const next = new Date(dates[i + 1]);
      if ((curr - next) === 86400000) streak++;
      else break;
    }
    return streak;
  },

  formatDate(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
};
