/* SW Version 1.0 */
const CACHE_NAME = 'pwa-cache';
const ASSETS = ['./', './index.html', './manifest.json', './icons/icon-512x512.png'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});