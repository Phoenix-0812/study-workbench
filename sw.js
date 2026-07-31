/* Service Worker - 离线缓存 + 自动更新支持 */
const CACHE_NAME = 'study-workbench-v10'; // 版本号每次功能迭代时 +1，触发用户端更新提示
const OFFLINE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-512.png',
  './icons/icon-192.png',
  './icons/icon-152.png',
  './icons/icon-144.png',
  './icons/icon-120.png',
  './icons/icon-96.png',
  './icons/icon-72.png',
  './icons/icon-48.png',
  './icons/icon-32.png',
  './css/theme.css',
  './css/layout.css',
  './css/modules.css',
  './js/chinese_questions.js?v=10',
  './js/chinese_questions_ext.js?v=10',
  './js/math_questions.js?v=10',
  './js/math_questions_ext.js?v=10',
  './js/english_questions.js?v=10',
  './js/english_questions_ext.js?v=10',
  './js/papers_data.js?v=10',
  './js/textbooks_data.js?v=10',
  './js/data.js?v=10',
  './js/ai_analysis.js?v=10',
  './js/storage.js?v=10',
  './js/state.js?v=10',
  './js/motivation.js?v=10',
  './js/ui.js?v=10',
  './js/sidebar.js?v=10',
  './js/subjects.js?v=10',
  './js/papers.js?v=10',
  './js/textbooks.js?v=10',
  './js/tools.js?v=10',
  './js/widget.js?v=10',
  './js/app.js?v=10'
];

// 安装：预缓存资源，立即激活以便下一次请求直接生效
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // allSettled：单个资源失败不阻断整体，部署后首次访问更健壮
      return Promise.allSettled(OFFLINE_URLS.map((url) => cache.add(url)));
    })
  );
  // 新 SW 安装后跳过 waiting 阶段直接激活（前提是页面端配合 postMessage('SKIP_WAITING')）
  // 注：未点击"立即更新"时，保持 waiting 状态，不打断用户当前使用
});

// 监听来自客户端的 SKIP_WAITING：用户点击"立即更新"后，新 SW 立即接管
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 激活：清理旧版本缓存，接管所有已打开的页面
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  // 立即接管所有已打开的客户端（配合 controllerchange 自动刷新）
  self.clients.claim();
});

// 拦截请求：HTML导航走 Network-first，其他 JS/CSS/静态资源走 Network-first + Cache fallback
self.addEventListener('fetch', (event) => {
  const req = event.request;
  // 只处理 GET 请求
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate') {
    // 页面导航请求：网络优先，失败走离线缓存的 index.html
    event.respondWith(
      fetch(req).catch(() => {
        return caches.match('./index.html');
      })
    );
    return;
  }

  // JS/CSS/图片等：网络优先，更新缓存；网络失败返回缓存
  event.respondWith(
    fetch(req).then((resp) => {
      if (resp && resp.status === 200 && resp.type !== 'opaque') {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
      }
      return resp;
    }).catch(() => {
      return caches.match(req).then((cached) => {
        return cached || caches.match('./index.html');
      });
    })
  );
});
