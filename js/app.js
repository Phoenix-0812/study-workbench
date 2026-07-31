/* 应用入口 */
const App = {
  init() {
    // ========== 1. Service Worker 注册 + 自动更新提示（不阻塞业务初始化） ==========
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
          // 每次打开页面主动检查更新
          try { reg.update(); } catch (e) {}

          // 发现新版本 SW 安装中 → 等它进入 installed 状态就弹提示
          reg.addEventListener('updatefound', () => {
            const nw = reg.installing;
            if (!nw) return;
            nw.addEventListener('statechange', () => {
              if ((nw.state === 'installed' || nw.state === 'waiting')
                  && navigator.serviceWorker.controller) {
                App._showUpdateBanner(reg);
              }
            });
          });

          // 如果已经有 waiting 的 SW（用户上次忽略了更新），也弹提示
          if (reg.waiting && navigator.serviceWorker.controller) {
            App._showUpdateBanner(reg);
          }
        }).catch(() => {});

        // 新版本 SW 接管成功 → 自动刷新页面启用新版本
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        });
      });
    }

    // ========== 2. 业务初始化（不依赖 SW） ==========
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
      // 显示安装按钮
      this._showInstallButton(deferredPrompt);
    });

    // iOS Safari 安装提示（不支持 beforeinstallprompt）
    this._showIOSInstallTip();

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
        const cel = document.getElementById('celebrationModal');
        if (cel) cel.classList.add('hidden');
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

    // ========== 3. 底部导航栏自动隐藏/显示（滚动检测） ==========
    this._initBottomNavAutoHide();
  },

  // 底部导航栏：向下滚动隐藏，向上滚动显示，到底部隐藏，到顶部显示
  _initBottomNavAutoHide() {
    const container = document.getElementById('pageContainer');
    const bottomNav = document.getElementById('bottomNav');
    if (!container || !bottomNav) return;

    let lastScrollTop = 0;
    let ticking = false;
    const SCROLL_THRESHOLD = 10; // 滚动超过10px才触发
    const BOTTOM_THRESHOLD = 40; // 距离底部40px视为到底

    const updateNav = () => {
      ticking = false;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const scrollDelta = scrollTop - lastScrollTop;
      const isAtTop = scrollTop <= 5;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - BOTTOM_THRESHOLD;

      // 滚动到顶部 → 显示
      if (isAtTop) {
        bottomNav.classList.remove('nav-hidden');
        lastScrollTop = scrollTop;
        return;
      }

      // 滚动到底部 → 隐藏（不遮挡内容）
      if (isAtBottom) {
        bottomNav.classList.add('nav-hidden');
        lastScrollTop = scrollTop;
        return;
      }

      // 向下滚动超过阈值 → 隐藏
      if (scrollDelta > SCROLL_THRESHOLD) {
        bottomNav.classList.add('nav-hidden');
      }
      // 向上滚动超过阈值 → 显示
      else if (scrollDelta < -SCROLL_THRESHOLD) {
        bottomNav.classList.remove('nav-hidden');
      }

      lastScrollTop = scrollTop;
    };

    container.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
  },

  // 显示PWA安装按钮（Android/Chrome）
  _showInstallButton(deferredPrompt) {
    // 首次访问5秒后显示安装提示
    setTimeout(() => {
      if (document.getElementById('pwaInstallTip')) return;
      // 检查是否已安装（standalone模式）
      if (window.matchMedia('(display-mode: standalone)').matches) return;

      const tip = document.createElement('div');
      tip.id = 'pwaInstallTip';
      tip.style.cssText = `
        position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
        background:linear-gradient(135deg,#ff9a9e,#fad0c4); color:#fff;
        padding:12px 24px; border-radius:20px; font-size:14px; font-weight:600;
        box-shadow:0 4px 20px rgba(255,154,158,0.4); z-index:9999;
        cursor:pointer; display:flex; align-items:center; gap:8px;
        animation: slideUp 0.3s ease;
      `;
      tip.innerHTML = '📲 <span>添加到桌面，离线也能用！</span>';
      tip.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            UI.showToast('✅ 已添加到桌面！');
          }
          deferredPrompt = null;
        }
        tip.remove();
      });
      document.body.appendChild(tip);

      // 15秒后自动消失
      setTimeout(() => { if (tip.parentNode) tip.remove(); }, 15000);
    }, 5000);
  },

  // iOS Safari 安装引导（iOS不支持beforeinstallprompt）
  _showIOSInstallTip() {
    // 检测iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isIOS || !isSafari) return;
    // 已安装则不提示
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    // 检查是否已提示过
    if (localStorage.getItem('ios_install_tip_shown')) return;

    setTimeout(() => {
      if (document.getElementById('iosInstallTip')) return;
      const tip = document.createElement('div');
      tip.id = 'iosInstallTip';
      tip.style.cssText = `
        position:fixed; bottom:80px; left:50%; transform:translateX(-50%);
        background:rgba(0,0,0,0.85); color:#fff;
        padding:14px 20px; border-radius:16px; font-size:13px; line-height:1.6;
        box-shadow:0 4px 20px rgba(0,0,0,0.3); z-index:9999;
        max-width:320px; text-align:center;
        animation: slideUp 0.3s ease;
      `;
      tip.innerHTML = `
        <div style="margin-bottom:8px;">📲 <strong>添加到主屏幕</strong></div>
        <div>点击底部 <span style="display:inline-block;transform:rotate(180deg);">⬆</span> 分享按钮 → 选择「添加到主屏幕」</div>
        <div style="margin-top:8px;font-size:11px;color:#aaa;">添加后可像App一样使用，离线也能做题</div>
        <div style="margin-top:8px;">
          <button id="iosTipClose" style="background:rgba(255,255,255,0.2);color:#fff;border:none;padding:4px 16px;border-radius:8px;font-size:12px;cursor:pointer;">知道了</button>
        </div>
      `;
      document.body.appendChild(tip);
      document.getElementById('iosTipClose')?.addEventListener('click', () => {
        localStorage.setItem('ios_install_tip_shown', '1');
        tip.remove();
      });
    }, 8000);
  },

  // 显示"发现新版本"横幅提示（安全区域适配，不突兀）
  _showUpdateBanner(reg) {
    if (document.getElementById('swUpdateBanner')) return;
    const banner = document.createElement('div');
    banner.id = 'swUpdateBanner';
    banner.style.cssText = `
      position:fixed;top:0;left:0;right:0;z-index:99999;
      background:linear-gradient(90deg,#ff8fab 0%,#a0c4ff 100%);
      color:#fff;padding:10px 14px;
      padding-left:calc(14px + env(safe-area-inset-left,0px));
      padding-right:calc(14px + env(safe-area-inset-right,0px));
      padding-top:calc(10px + env(safe-area-inset-top,0px));
      display:flex;align-items:center;justify-content:space-between;
      gap:10px;box-shadow:0 4px 16px rgba(0,0,0,0.12);
      font-size:14px;font-weight:600;
      animation:swSlideDown .35s cubic-bezier(.2,.9,.3,1.2) both;
      transform-origin:top;
    `;
    // 注入动画关键帧（避免依赖 CSS 文件）
    if (!document.getElementById('swAnimStyle')) {
      const s = document.createElement('style');
      s.id = 'swAnimStyle';
      s.textContent = `@keyframes swSlideDown{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}`;
      document.head.appendChild(s);
    }
    banner.innerHTML = `
      <div style="flex:1;min-width:0;display:flex;align-items:center;gap:8px;">
        <span style="font-size:18px;flex-shrink:0;">🎉</span>
        <span style="line-height:1.4;min-width:0;word-break:break-word;">发现新版本！点右侧按钮立即更新，无需重新下载安装</span>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0;">
        <button id="swLaterBtn" style="background:rgba(255,255,255,0.22);color:#fff;border:none;border-radius:999px;padding:7px 14px;font-size:13px;font-weight:600;cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);white-space:nowrap;">稍后</button>
        <button id="swUpdateNowBtn" style="background:#fff;color:#ff6b8b;border:none;border-radius:999px;padding:7px 16px;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,0.12);white-space:nowrap;">立即更新</button>
      </div>
    `;
    document.body.appendChild(banner);

    banner.querySelector('#swLaterBtn').addEventListener('click', () => banner.remove());
    banner.querySelector('#swUpdateNowBtn').addEventListener('click', () => {
      // 给 waiting SW 发消息让它立即接管，controllerchange 触发后会自动 reload
      if (reg && reg.waiting) {
        try {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
          // 兜底：2 秒后强制刷新
          setTimeout(() => window.location.reload(), 2000);
        } catch (e) {
          window.location.reload();
        }
      } else {
        window.location.reload();
      }
    });
  }
};

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
