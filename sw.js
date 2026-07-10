const CACHE_NAME = 'nzoku-cache-v2';

// Liste de tous les fichiers à sauvegarder pour le mode hors-ligne
const ASSETS = [
  '',
  'index.html',
  'style.css',
  'manifest.json',
  'logo-192.png',
  'logo-512.png',
  'jeux/quiz.html',
  'jeux/quiz.css',
  'jeux/quiz.js',
  'sons/correct.mp3',
  'sons/incorrect.mp3',
  'sons/bravo.mp3'
];
// 1. Installation : On met tous les outils en mémoire cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// 2. Activation : On nettoie les anciens fichiers si tu fais une mise à jour
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. Stratégie réseau : On pioche d'abord dans le cache du téléphone. 
// Si le fichier n'y est pas, on demande au réseau (si connecté).
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).catch(() => {
        // Optionnel : Vous pouvez renvoyer vers l'index si une page hors-cache est demandée hors-ligne
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
