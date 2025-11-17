'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-512x512.png": "e3394fb6b326ec7108e4050f0e1df8b5",
"assets/AssetManifest.bin": "d7f56c1b7f6929702227558bd93297f5",
"assets/AssetManifest.bin.json": "b4b5ba782cc53ed3bb1f32ae2cd599ea",
"assets/AssetManifest.json": "659b8f97e3e3058edbb0fdf7a61296c2",
"assets/assets/app_icon.png": "72336ef7b6bacd54250a7fcb763befe8",
"assets/assets/foto_1_0.png": "b680728dd8fd02eb190a11df54d0d1d4",
"assets/assets/foto_1_1.png": "a06e9cd0c794e1b6c7c2f15fe239c9fc",
"assets/assets/foto_1_2.jpg": "78e51caa955f21f5d4ca445f649eb7de",
"assets/assets/foto_2_0.jpg": "9e699465e5670ff0390c25c4050e319c",
"assets/assets/foto_2_1.png": "dbfedd150d8ebd9fd2395c93333926ea",
"assets/assets/foto_2_2.jpg": "d5d8174c294dcbbb7f711e95bd8351b1",
"assets/assets/foto_3_0.png": "5fd5bc37e2071ca4b087079e3cfdf615",
"assets/assets/foto_3_1.png": "30abc90f845fe6a0b38da082af02048e",
"assets/assets/foto_3_2.jpg": "5a60900edb005c2a83464d4d25fbaa7a",
"assets/assets/foto_4_0.png": "6f3644836a76208da4989061865aa23a",
"assets/assets/foto_4_1.png": "7de12670403952b97d6c6e6debf506bb",
"assets/assets/foto_4_2.jpg": "e0424f2f95d854d2c48d5415d51f4597",
"assets/assets/foto_buka_bersama.png": "6d7bbf01261d560218873807c18cf843",
"assets/assets/foto_portfolio_18.png": "481c9c2c637ad056d86158f2b1ce7426",
"assets/assets/instagram_logo.png": "83170e62a0c1ddbd2954fb7a16e513a1",
"assets/assets/instagram_logo_2022.svg": "3ac698bad870f281280222a52b6c20f6",
"assets/assets/linkedin_icon.svg": "a2a4fcfd72d4462c52544ff6281f4bff",
"assets/assets/logo_ugm.png": "ac72f34f55b46bedb01809084b87ef4f",
"assets/assets/new_logo.png": "147e74edb12588206d646b14c4f9c7ec",
"assets/assets/nodata.json": "51f8c676566e3d78fedb0afb863c3a04",
"assets/assets/regina_logo.png": "249742e0abcc44ab7621ae678384fab4",
"assets/assets/space.json": "a3e99f7af870c91ff247445305ff6f8f",
"assets/assets/uajy_logo.png": "f5e3772ef8f4ae781bd825d59c70fbee",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b9d464ed1bcaee35f95dc69ad3992440",
"assets/NOTICES": "47a9ac4d1eb2f06dfa7ba55978981199",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon-32x32.png": "35764edcaf977747d283df6ba4c0cd91",
"favicon.png": "5ca1f3e75d64e80fce5a900c82907221",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "868ad6d2edecb60fa6bfc3921d4029e7",
"icons/circle_logo_new.ico": "da8dda38cd3ef051b20be3cfb960fbca",
"icons/Icon-192.png": "ca138b73e74ac8406c5272304f0eabca",
"icons/Icon-512.png": "3f4179976aecfff18d0eef02ba7ef559",
"icons/Icon-maskable-192.png": "ca138b73e74ac8406c5272304f0eabca",
"icons/Icon-maskable-512.png": "3f4179976aecfff18d0eef02ba7ef559",
"index.html": "91e5f352ec74d09017362247e796b4fd",
"/": "91e5f352ec74d09017362247e796b4fd",
"main.dart.js": "dc7d787dee30b1a257b97ca0426cfd33",
"manifest.json": "ab9925b5f7ccb7f89f20c314d15f3e65",
"version.json": "b8443887c78825e6ae21127eadb7ca1f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
