/* PILCO - BX · serviço do app instalado (24/11/2026). Só permite instalar no computador e no celular (Chrome/Edge pedem um serviço com "fetch").
   Não guarda nada em cache: cada abertura busca a versão do site e os pacotes na rede, então os dados são sempre os publicados. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r));
});
