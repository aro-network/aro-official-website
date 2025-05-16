// app/service-worker.js
self.addEventListener("install", () => {
  console.log("Service Worker installed.");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
