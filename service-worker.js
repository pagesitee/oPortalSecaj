const CACHE_NAME = 'portal-secaj-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/portal.html',
  '/admin.html',
  '/styles.css',
  '/scripts.js',
  '/imagens/imagem1.jpg',
  '/imagens/imagem2.jpg',
  '/imagens/imagem3.jpg',
  '/imagens/imagem4.jpg',
  '/imagens/imagem5.jpg',
  '/imagens/imagem6.jpg',
  '/imagens/imagem7.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});