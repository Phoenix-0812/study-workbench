/* Service Worker - 离线缓存 */
const CACHE_NAME = 'study-workbench-v7';
const OFFLINE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/theme.css',
  './css/layout.css',
  './css/modules.css',
  './js/chinese_questions.js?v=7',
  './js/math_questions.js?v=7',
  './js/english_questions.js?v=7',
  './js/papers_data.js?v=7',
  './js/textbooks_data.js?v=7',
  './js/data.js?v=7',
  './js/ai_analysis.js?v=7',
  './js/storage.js?v=7',
  './js/state.js?v=7',
  './js/motivation.js?v=7',
  './js/ui.js?v=7',
  './js/sidebar.js?v=7',
  './js/subjects.js?v=7',
  './js/papers.js?v=7',
  './js/textbooks.js?v=7',
  './js/tools.js?v=7',
  './js/widget.js?v=7',
  './js/app.js?v=7'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // allSettled：单个资源失败不阻断整体预缓存，部署后首次访问更健壮
      return Promise.allSettled(OFFLINE_URLS.map((url) => cache.add(url)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('./index.html');
      })
    );
  } else {
    // Network-first for JS/CSS, cache fallback
    event.respondWith(
      fetch(event.request).then((fetchResponse) => {
        if (fetchResponse && fetchResponse.status === 200) {
          const clone = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return fetchResponse;
      }).catch(() => {
        return caches.match(event.request).then((cached) => {
          return cached || caches.match('./index.html');
        });
      })
    );
  }
});
