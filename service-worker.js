const CACHE_STATIC_NAME = "static-v1.0.0";
const CACHE_DYNAMIC_NAME = "dynamic-v1.0.0";
const STATIC_FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/src/index.js",
  "/src/index.css",
  "/assets/logo.png",
  "/assets/old_paper.png",
  "/assets/torn_edge.png",
  "/favicon.ico",
  "https://use.fontawesome.com/releases/v5.13.0/css/all.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      cache.addAll(STATIC_FILES);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

const isInArray = (string, array) => {
  let cachePath;
  if (string.indexOf(self.origin) === 0) {
    cachePath = string.substring(self.origin.length);
  } else {
    cachePath = string;
  }
  return array.indexOf(cachePath) > -1;
};

self.addEventListener("fetch", (event) => {
  if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(caches.match(event.request));
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then((res) => {
              return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
                cache.put(event.request.url, res.clone());
                return res;
              });
            })
            .catch(() => {
              return caches.open(CACHE_STATIC_NAME).then((cache) => {
                if (event.request.headers.get("accept").includes("text/html")) {
                  console.error("Something went wrong!");
                  return cache.match("/index.html");
                }
              });
            });
        }
      })
    );
  }
});
