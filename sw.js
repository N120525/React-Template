const CACHE_NAME ="precache"
const DYNAMIC_CACHE_NAME ="dynamiccache"

let preCache =[
    '/',
    'index.html'
]

self.addEventListener('install',(event)=>{
    event.waitUntill(
        caches.open(CACHE_NAME)
        .then(cache =>{
        return cache.addAll(preCache)
        })
    )
})


self.addEventListener('activate',e => {
    console.log('Service worker : Activated')
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheNames){
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})


self.addEventListener("fetch", (event) => {
    if (event.request.method !== 'GET') {
      console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
      return;
    }
    event.respondWith(
      caches
        .match(event.request)
        .then((cached) => {
          var networked = fetch(event.request)
            .then(fetchedFromNetwork, unableToResolve)
            .catch(unableToResolve);
  
          console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
          return cached || networked;
  
          function fetchedFromNetwork(response) {
            var cacheCopy = response.clone();
  
            console.log('WORKER: fetch response from network.', event.request.url);
  
            caches
              .open(DYNAMIC_CACHE_NAME)
              .then(function add(cache) {
                cache.put(event.request, cacheCopy);
              })
              .then(function() {
                console.log('WORKER: fetch response stored in cache.', event.request.url);
              });
  
            return response;
          }
  
          function unableToResolve () {
            console.log('WORKER: fetch request failed in both cache and network.');
            return new Response('<h1>Service Unavailable</h1>', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            });
          }
        })
    );
  });
