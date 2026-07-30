/* 应用入口 */
const App = {
  init() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }

    // Initialize state
    State.init();

    // Initialize sidebar
    Sidebar.init();

    // Render home page
    UI.navigate('home');

    // Set up theme on document
    document.documentElement.setAttribute('data-theme', State.theme || 'pink');

    // Welcome toast
    setTimeout(() => {
      const streak = Motivation.getCurrentStreak();
      if (streak === 0) {
        UI.showToast(`👋 ${State.getUserName()}，开始今天的学习吧~`);
      } else {
        UI.showToast(`🔥 ${State.getUserName()}欢迎回来！已连续打卡${streak}天！`);
      }
    }, 800);

    // Add to home screen prompt
    let deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });

    // Share functionality for widget
    if (navigator.share) {
      document.addEventListener('click', (e) => {
        const shareBtn = e.target.closest('#shareBtn');
        if (shareBtn) {
          navigator.share({
            title: '学习工作台',
            text: '一起来学习吧！',
            url: window.location.href
          });
        }
      });
    }

    // Handle page visibility for time tracking
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this._lastVisible = Date.now();
      } else if (this._lastVisible) {
        const minutes = Math.floor((Date.now() - this._lastVisible) / 60000);
        if (minutes > 0 && minutes < 120) {
          State.addStudyTime(minutes);
        }
        this._lastVisible = null;
      }
    });

    // Track study time periodically
    setInterval(() => {
      if (!document.hidden) {
        State.addStudyTime(1);
      }
    }, 60000);

    // ESC key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        UI.closeDetail();
        document.getElementById('celebrationModal').classList.add('hidden');
      }
    });

    // Prevent zoom on double tap (mobile)
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }, { passive: false });
  }
};

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
