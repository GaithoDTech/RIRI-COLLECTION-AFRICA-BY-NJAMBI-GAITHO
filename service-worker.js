self.addEventListener("install",function(event){
event.waitUntil(
caches.open("riri-cache").then(function(cache) {
    console.log("Opened cache");
    return cache.addAll(urlsToCache);
        "./",
        "./index.html",
        "./style.css",
        "./ukeni.jpg.jpg",
        "./utana.jpg.jpg",
        "./uthaka.jpg.jpg",
        "./utugi.jpg.jpg",
        "./wendo.jpg,jpg",
    ]);
    })
    );
    });

    self.addEventListener("fetch",function(event) {
        event.respondWith(
            caches.match(event.request).then(function(response){
                return response || fetch(event.request);
            })
        );
    });

