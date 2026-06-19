const cacheName = 'nzoku-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './logo-192.png',
  './logo-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
