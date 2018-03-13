self.addEventListener('install', function (event) {
    // event listener that cashing all image on browser
}); var cash = 'restaurant-cache';
var urlsToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
];


self.addEventListener('install', function (event) {

    event.waitUntil(
        caches.open(cash)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cash_url);
            })
    );
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
        return response || fetch(event.request);
})
.catch(err => console.log(err, event.request))
);
});