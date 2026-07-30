/* 侧边栏交互 */
const Sidebar = {
  init() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const menuBtn = document.getElementById('menuBtn');
    const navList = document.getElementById('navList');

    // Toggle sidebar collapse (desktop)
    toggle.addEventListener('click', () => {
      if (window.innerWidth > 768) {
        sidebar.classList.toggle('collapsed');
      } else {
        sidebar.classList.toggle('mobile-open');
        this.showOverlay();
      }
    });

    // Mobile menu button
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      if (sidebar.classList.contains('mobile-open')) {
        this.showOverlay();
      } else {
        this.hideOverlay();
      }
    });

    // Nav item click
    navList.addEventListener('click', (e) => {
      const item = e.target.closest('.nav-item');
      if (!item) return;
      const page = item.dataset.page;
      UI.navigate(page);
    });

    // Bottom nav
    document.getElementById('bottomNav').addEventListener('click', (e) => {
      const item = e.target.closest('.bottom-nav-item');
      if (!item) return;
      const page = item.dataset.page;
      UI.navigate(page);
    });

    // Quick actions on home
    document.getElementById('pageContainer').addEventListener('click', (e) => {
      const action = e.target.closest('.quick-action');
      if (action) {
        const target = action.dataset.action;
        UI.navigate(target);
        return;
      }
      const nav = e.target.closest('[data-nav]');
      if (nav) {
        UI.navigate(nav.dataset.nav);
      }
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      State.toggleTheme();
    });

    // Detail modal close
    document.getElementById('detailClose').addEventListener('click', () => {
      UI.closeDetail();
    });
    document.getElementById('detailModal').addEventListener('click', (e) => {
      if (e.target.id === 'detailModal') UI.closeDetail();
    });

    // Celebration close
    document.getElementById('celebrationClose').addEventListener('click', () => {
      document.getElementById('celebrationModal').classList.add('hidden');
    });

    // Settings handlers (delegated)
    document.getElementById('pageContainer').addEventListener('click', (e) => {
      const themeOption = e.target.closest('.theme-option');
      if (themeOption) {
        const themeVal = themeOption.dataset.themeVal;
        State.setTheme(themeVal);
        document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
        themeOption.classList.add('active');
        UI.showToast('主题已切换！');
        return;
      }
      const exportBtn = e.target.closest('#exportBtn');
      if (exportBtn) {
        this.exportData();
        return;
      }
      const importBtn = e.target.closest('#importBtn');
      if (importBtn) {
        this.importData();
        return;
      }
      const clearBtn = e.target.closest('#clearBtn');
      if (clearBtn) {
        this.clearData();
        return;
      }
    });

    // Name input handler
    document.getElementById('pageContainer').addEventListener('change', (e) => {
      if (e.target.id === 'userNameInput') {
        const name = e.target.value.trim();
        State.setUserName(name);
        UI.showToast('名字已更新！');
      }
    });
    document.getElementById('pageContainer').addEventListener('input', (e) => {
      if (e.target.id === 'userNameInput') {
        const name = e.target.value.trim();
        State.setUserName(name);
      }
    });
  },

  showOverlay() {
    let overlay = document.getElementById('sidebarOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'sidebarOverlay';
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('mobile-open');
        overlay.classList.remove('show');
      });
    }
    setTimeout(() => overlay.classList.add('show'), 10);
  },

  hideOverlay() {
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.classList.remove('show');
  },

  exportData() {
    const data = Storage.export();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `学习数据备份_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    UI.showToast('数据导出成功！');
  },

  importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (Storage.import(ev.target.result)) {
          UI.showToast('数据导入成功！页面即将刷新');
          setTimeout(() => location.reload(), 1000);
        } else {
          UI.showToast('导入失败，文件格式有误');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  clearData() {
    if (!confirm('确定要清空所有学习数据吗？此操作不可恢复！')) return;
    if (!confirm('再次确认：所有打卡、错题、进度数据都将被删除！')) return;
    Storage.clear();
    UI.showToast('数据已清空，即将刷新');
    setTimeout(() => location.reload(), 1000);
  }
};
