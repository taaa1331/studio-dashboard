const C='agency-v1793352272';self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icons/icon-192.png','fonts/Nikosh.woff2'])));self.skipWaiting()});
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
