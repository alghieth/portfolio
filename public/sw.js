const CACHE_NAME = 'alghieth-cache-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // تمرير الطلبات كالمعتاد مع استيفاء شرط PWA للتثبيت
  event.respondWith(fetch(event.request));
});