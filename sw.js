const CACHE_NAME = "pivotcalc-v1.4.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./calc.js",
  "./ui.js",
  "./main.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if(request.method !== "GET") return;
  event.respondWith((async()=>{
    if(request.mode === "navigate"){
      try{
        const fresh = await fetch(request, {cache:"no-store"});
        if(fresh && fresh.ok){
          const cache = await caches.open(CACHE_NAME);
          cache.put("./index.html", fresh.clone());
          return fresh;
        }
      }catch(e){}
      return caches.match("./index.html");
    }
    const cached = await caches.match(request);
    if(cached) return cached;
    try{
      const response = await fetch(request);
      if(response && response.ok && new URL(request.url).origin===self.location.origin){
        const cache=await caches.open(CACHE_NAME);cache.put(request,response.clone());
      }
      return response;
    }catch(e){ return new Response("",{status:503,statusText:"Offline"}); }
  })());
});
