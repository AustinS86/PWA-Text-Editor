const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { CacheFirst, StaleWhileRevalidate } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

//This sets up caching for the precache manifest to support offline access
precacheAndRoute(self.__WB_MANIFEST);

//This sets up caching for the page-cache to support offline access
const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});
//This sets up caching for the index.html page and the root URL to support offline access
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});
//This sets up caching for all navigation requests to support offline access
registerRoute(({ request }) => request.mode === "navigate", pageCache);
//This sets up caching for style, script, and worker request destinations to support offline access
registerRoute(
  ({ request }) => ["style", "script", "worker"].includes(request.destination),

  new StaleWhileRevalidate({
    cacheName: "asset-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 60,
      }),
    ],
  })
);
