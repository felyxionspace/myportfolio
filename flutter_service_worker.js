'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "de75277f748f9fa2a89aff02996ecbf5",
".git/config": "b9ea6bc700e3da55a9caf540f1ae2a13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a9bad7838435fca721c1befe168d97af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb59883c1e1fa2a8fd1eec3b1856ae93",
".git/logs/refs/heads/main": "7e246242a26f36536645eb613b5a803f",
".git/logs/refs/remotes/origin/main": "280891ecb78f29b28f0ed94bd885fbfc",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/0f83378fec8191101763758ea74fcbb87ea5a7": "6ebbefdb500d3469840e8de44acc602f",
".git/objects/04/68797a4385323e12936d0a07cb4c3d64192160": "f7f00f52e3c4eb67e7189ee15249cfd1",
".git/objects/06/17eecb071453acc7b5f02bd15d1e4fb10a1be8": "baf0260c9d851f5deccf03d4826bbeb8",
".git/objects/08/a9dc8b83a867eabd4f3657fe79883511ee8eec": "7e4a63ef80f62964963b51379968b35a",
".git/objects/09/33412a679c310e192ba2960ded1d0106995fc2": "c17cc95487e9154b60d985f6f8cc31c7",
".git/objects/0e/3d565f6f16161c498b58d766fe48cee51349a6": "a43a963fb039bfeaaad360ac0516ce98",
".git/objects/19/b9f64b7531a3262f67f646e855e84cfe133abd": "4ee18cdbdac9185fcf005e9c38d20cee",
".git/objects/1c/4ef5cd964520dd6d5a8a81c0a60a69df89e399": "3df456cc0ee5bd57f58e8ca9e5269c1a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/a41234a4cb562fe7292a8cd44d1e96bab9e930": "46ae24b12f8cf22ba67fe82b05a4fb53",
".git/objects/23/e39f94ef6441de7c168b7c043aeb207f401e01": "97dac0345af12e0af2a3a3b35b673875",
".git/objects/25/8c9d6dd34bf8ac56bbb9092d81d64690c12e18": "8d6bfa7846b278dc4ac34093a30fcd67",
".git/objects/27/ac5ad51d133ac0f4edf10a07aaeef8e076efa2": "c34a7e804e7369638e2f147d125b557b",
".git/objects/29/7c04d588df931752c90e87bf9262d84be70298": "43aeb93c4b377356acc0ccf47ae12c11",
".git/objects/29/efd80eecb705078ab025fe0a78e50ca9fe68a4": "910b3df274d9b7d57a1b121c80537711",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/70dadc562a7bf97046645141c88682ec7eb771": "1800f70a6176acbcecfc10a70522afb2",
".git/objects/2f/a8641183f8f129c084feaa343011227cb2a7a5": "90d0495a5da1d27a31c38040081bd3c7",
".git/objects/31/65a74d14cfa8973e642745d1c5e32acb7808a7": "7063aca838f307fe055491cc4eff09bc",
".git/objects/32/14d75449a9e12e66c2bb25f3291c777e1ad52e": "aee453596eb0fc21d0cb74821b11bc70",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/5f467a89bf5bca8f557529b4f3c91f56687c28": "78f3236529e7ddeca3f92e2a5a45f1fd",
".git/objects/3f/68d77ed238478bbd7ff68399d206641234f5c0": "4efb38077a1ac97c743270478dfbd8fb",
".git/objects/43/1bd10bf72ab5ad1dddfcff3ce081d6296815b8": "ce0e7eacc70fa46535f309f288c45351",
".git/objects/46/087a0fa0d858b00c7510d9b50130a3f7e9dc1b": "0b30ed59e398f9f928f86797201c1f0e",
".git/objects/47/bf6d91b7f47626547f25bd458c08a10c1db32a": "b2234a38d2502446550cdd3c88718571",
".git/objects/48/536bd8ea4263f9855886c5f0f36655f654d85c": "e9870aef5797922fbeef1202a06fb55f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/e33d4da381a25eb67d5a3155c84a1a940d06b4": "9b6c007c1ecc1ce54a2567af031579e1",
".git/objects/4d/b6866b3227a202e985aa8706368604117b91dd": "25aaa7423dc230fb387d7c6637f4b949",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/55/cfd13ba3b07a6257fc587de887ed2af83f807d": "ad1cc9c56525fad2a11f9da1e099a0f3",
".git/objects/61/ed5be3c35cc7baaee65dfbd7d33dc9cbabb75c": "b87612f9eabd785e5b2932db549c42dd",
".git/objects/6f/1dd87685449fb4b8c0679687f7eb5f96920846": "9fc48afcb6a01ccb8a7f85be16fcad0f",
".git/objects/79/8d3ca934d065c05c53674ddf6a9c11b32ec234": "0b6a3448b5e80e67a5ad8f578a76d863",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/9787d4fe45eaedb63f42bd289a35ba43a42f5a": "17479e989bd2fe61f20a3dfa2b60cd0e",
".git/objects/7c/eecbed131643ec622cf598d0d80eafd791079b": "2eea8c67dd3572ce59ba8327339c241e",
".git/objects/7e/0d173c5b8069d8bc7a340660882fa56f4c2301": "a8694cad2213313352a49b6e25166018",
".git/objects/81/a875ec3dea9f5c76f0157cca3db5fb46daeed0": "8176d3d33cf2bfc522a058f0c8681c65",
".git/objects/84/de6e3c818c735c6cbffa3d68416c7738ebb0f1": "e0b664026607bf90a3e90a67e6211984",
".git/objects/85/af7d1f7288cf0a2d05420eaef8506c643a75a6": "75c660a689d808dc69e6e30f5a9487cd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/47891e099c2e388ee7ebe698e78017fdff29fa": "d954af989f9ad5c2eef66abf2cf6aab8",
".git/objects/95/434d83e6c76baa927532a98409764de2530cfa": "3e7e23ba0ae62af91ae09cfabe435c0a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/08152a1d089ebe2408d723c7f6694f25817cfd": "2658fac2f936ae2316f95273e5118085",
".git/objects/a0/be0ca781239563cf2b24d80b61531cb75b23d3": "f97a47fde4b90a9f51a3b2678fdf87bd",
".git/objects/a2/bde44836b0e3362ab04374bd5957e8f3c10e5f": "d592df8c7acd6f8e937d1c6012f9e378",
".git/objects/a2/cc9d9bb2edb5483d5048ad3ffd6a624f54b129": "bfef51d0d5b1414438fb6aa134689e19",
".git/objects/a3/6589d2bb7742fee77ff872f04063655b6b7389": "84ce1cca04c426b35f54c3c9e97eb9e1",
".git/objects/af/75bb751d8a95a8a3ab683c9d9e420b4011d721": "d547d47350f4c49a4b4db53975ffeee3",
".git/objects/b4/f963f2f50aa0e124d99ec3894f16bd75c04bb0": "6ce08e931d732bd03a60f44ea736dce6",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/37191c12deaf9f9db3ae666ca02f2cbc4da73d": "6fc233976b60986c309f7e7c4d4ca726",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5aa3b069b0a67514f077d3f15ee42e1de759e9": "e4d96a2634341735843e9eaefec98e4f",
".git/objects/bb/085b249ae2b850639493691f6fcb6a782b84da": "ce9ac1bc59a59268466b5d488fe16f1f",
".git/objects/bb/831c8b8f0ca8db9e212becfefcab51d98daea5": "338c05fa02580edc4e178d868784f579",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/a088bba0b11d2f6585313b39eb2e7bddc30285": "f098afc3859ca2890bfbf683f69e63a5",
".git/objects/c6/af292df34e89965e895875c377b7238f5be388": "ba35b30469425f59e1f78a72d0131950",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/1628709a114c343bead0de662280e3162f6228": "75f89a218afece5f97ee5e6521be63b2",
".git/objects/cd/9fdae014c84f7af31a52a7b63feb510066de36": "41da3dcafc26608ca366ca896d6dbb6c",
".git/objects/d1/42f8b1759f3a460835d9cb4af515eed7fb1273": "8579e47923c6d9ce4c78416ea4ef5337",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1d595c0939aaa1b33afb6d6276db72774e0c2": "373eabb09d9e1a5da11979fcfdac216e",
".git/objects/da/eb580df88092b12eef9549037d77f542b23069": "67603a6d472b6ad1ab2d916b0e839ea7",
".git/objects/de/ca4465bf92590b7a6b39cda92ad5bd606fdc67": "6aa1f081adf4b424d2babfa5fad2452b",
".git/objects/de/e50caf709904bd8f212947ed50283944981c7f": "43b9f301ea419c231214355ddb6eabc1",
".git/objects/e2/e9cdcca38d2c6971496cdde66a6477f51cd486": "002da73a71dafcbe658a55b0eb29de40",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/f3712d7d7437e2369b9067dd4e92d7e2f06f7c": "9e744fd53f0f2c8c06ae7800db6736f5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cb43fdb24267bbad563dbb98d503f65ffa7429": "6694d6789940d26cb3641a38d1a4dea4",
".git/objects/ec/400aeb8a7aaa5040f265da110e3deea770f8ef": "4269f054b6dd82617d9c9877c10e4746",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/e653afe4e2be6c279379940e32327812d04426": "4355ffbeb499b41739ea55d4602cc3cc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bafe02763263a23e716e6c7e8ad327b053218a": "3c2cd89d0bdb01a953cd665f6af7ac7a",
".git/objects/fa/05587117976ff9b6eaffe4b26dd7fca44f758e": "3343613c0bc1c47a45c0e27e4d13a345",
".git/objects/fa/249d4d111d919683722694912687aba08e0ad6": "ef7d50785b56bfb0aa7986be722b3306",
".git/objects/fb/64bacab0d3ec42545391e761c6b2e50732f0d0": "29c6c79f81204fd09d5e0f6c6652f150",
".git/objects/fb/f01e102c172fe46bfd4e64dd2358b2132c95bc": "2874a40a048133c398e463e1bd55c1b0",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "970858717d25cca2fab510988c430e3c",
".git/refs/remotes/origin/main": "970858717d25cca2fab510988c430e3c",
"android-chrome-512x512.png": "e3394fb6b326ec7108e4050f0e1df8b5",
"assets/AssetManifest.bin": "700b893e990c14a3dd1edb515ff889a8",
"assets/AssetManifest.bin.json": "f4b76bf5939b32bd80395af48fd5864b",
"assets/AssetManifest.json": "b7cd726310655e296732c28024297a96",
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
"assets/fonts/MaterialIcons-Regular.otf": "611b7fac5b0483b91777646caf851b35",
"assets/NOTICES": "a4ba44e9c5ae69cf53afa8e27615f63d",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b2436e2b4a0e79da95c527d66a6e3c10",
"icons/circle_logo_new.ico": "da8dda38cd3ef051b20be3cfb960fbca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e06462dcd71a66a9807d78cf56f5a316",
"/": "e06462dcd71a66a9807d78cf56f5a316",
"main.dart.js": "03d1aafecd55d9fd592098e208672705",
"manifest.json": "ccea4026da72874e3eb20fc792281e78",
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
