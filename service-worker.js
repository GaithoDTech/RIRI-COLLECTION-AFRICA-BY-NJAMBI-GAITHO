const CACHE_NAME = "riri-cache-v1"
const urlsTOCache =[
     "./",
        "./index.html",
        "./style.css",
        "./ukeni.jpg.jpg",
        "./utana.jpg.jpg",
        "./uthaka.jpg.jpg",
        "./utugi.jpg.jpg",
        "./wendo.jpg,jpg",
];
self.addEventListener("install",function(event) {
event.waitUntil(
caches.open("CACHE_NAME").then(function(cache) {
    console.log("opened cache");
    return cache.addAll(urlsTOCache);
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



