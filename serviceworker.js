self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(function(cache) {            
                return cache.addAll(["ergasia 3.html","ICON.png","ashleigh-barty.jpg","skysports-ashleigh-barty-tennis_5329199.jpg","jfdjsefnjwer.jpg","./Ashleigh-Barty-US-Open-too-risky.jpg","./images.jpg","./pexels-photo-5739228.jpeg"]);
            })
    );

});
self.addEventListener("fetch",e =>
{
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || caches.match("/ergasia 3.html");
        })
    );
});