# Popularity, activity and community health of small programmable drones (LiteWing, ESP-Drone, ESP-FLY, Flix, Crazyflie, Tello/Tello EDU, RoboMaster TT, StampFly, Pluto X, CoDrone EDU), with evidence observed 6 Oct 2026

## 1. How widely used, active and well supported is each platform? (GitHub, YouTube, Reddit/forums, apps, printable accessories, stock/sales, independent projects, research/education)

### Takeaway
On hard numbers, two ecosystems are far larger than the rest:
- **Tello family (Tello, Tello EDU, RoboMaster TT).** It has the biggest legacy community and tutorial base by an order of magnitude, but the hardware was discontinued in 2024. The official TELLO and Tello EDU Android apps are now gone from Google Play.
- **Bitcraze Crazyflie.** It is the only large ecosystem that is also actively maintained this month: pushes on 2–5 Oct 2026, 30+ contributors per main repo, 161 arXiv papers and about 6.4k cflib downloads a month. However, its AI-deck camera board and both "AI bundles" are out of stock.

The rest are smaller:
- **Pluto (Drona Aviation).** It has the largest *phone-app* user base after the Tello apps (about 136k Android installs), but it is India-centred, with little open-source activity.
- **CoDrone EDU.** Its activity is school and competition use, and the community content is mostly Robolink's own.
- **ESP32 family (ESP-Drone, LiteWing, ESP-FLY).** It shows big GitHub star counts and one viral video (ESP-FLY, 1.67M views), but the actual user bases are small. LiteWing had 163 Kickstarter backers and has about 4.1k Android app installs.
- **StampFly and Flix.** Both are niche communities, centred in Japan and Russia respectively.

### Cited Findings

#### Method and data-access notes (read first)
- **Dates.** All metrics were observed on **2026-10-06** unless marked otherwise. Some figures come from the earlier notes in `3D printed phone controlled drones/`, observed 2026-10-05; these are marked "(2026-10-05)".
- **GitHub repo metadata.** Stars, forks, watchers, creation date and last push came from the ungh.cc mirror of the GitHub REST API (e.g. [ungh.cc/repos/okalachev/flix](https://ungh.cc/repos/okalachev/flix)). The session's proxied GitHub API, github.com HTML and the GitHub issue tools only allow this session's own repository.
  - "Last push" means the `pushed_at` field: the latest push to any branch. It is not necessarily the last commit on the default branch.
  - Contributor counts come from the first page of the contributors endpoint, which holds at most 30 entries, so "30+" means at least 30.
- **GitHub open issues and repo counts.** These came from GitHub repository search (via the GitHub MCP search tool) on 2026-10-06. The open-issue figure includes open pull requests. Repo counts are keyword matches, so they include noise.
- **YouTube.** View counts were read from YouTube search-result pages on 2026-10-06, both relevance-sorted and view-count-sorted (`&sp=CAMSAhAB`). "x yr ago" is YouTube's relative upload date as of 2026-10-06.
- **Reddit.** reddit.com returned HTTP 403, so the Pullpush archive API was used (e.g. [Pullpush "litewing"](https://api.pullpush.io/reddit/search/submission/?q=litewing&size=100)). It returns the most recent 100 matches, and its coverage may be incomplete.
  - The "tello", "pluto drone" and "esp-drone" queries are dominated by unrelated posts: Tello Mobile (a US phone carrier), Pluto the planet or Disney dog, and posts that merely contain the words "esp" and "drone". They were not used for counts.
- **Google Play.** Install figures are the exact install counts embedded in each listing page, which Google rounds into its "1K+"-style bucket (fetched with `gl=AU`). Ratings are from the AU or IN storefront, as stated.
- **App Store.** Data came from the iTunes Search/Lookup API for the US, AU and IN storefronts.
- **PyPI.** Downloads are "last 30 days" from the pypistats.org `recent` API.
- **MakerWorld.** Data came from `api.bambulab.com` search; the counts are designs with the platform name in the title among the first 200 results.
- **Printables.** Data came from the public GraphQL API (`searchPrints2`).
- **Blocked sources:**
  - Thingiverse's API returned HTTP 401.
  - Cults3D, Kickstarter, eBay AU, Gumtree, AppBrain, APKPure and Hackster returned HTTP 403.
  - OpenAlex and Semantic Scholar returned HTTP 429 for every query.
  - Research-use counts below therefore use the arXiv API (metadata search, not full text).

#### 1.0 Evidence table (all 2026-10-06 unless noted; details and more sources in 1.1–1.10)

| Platform | Main repos: ★ / forks / open issues+PRs / last push / contributors | Python lib downloads (30 d) | Phone app: installs or ratings; last update | Top YouTube evidence | Reddit and forums | Printable accessories (MakerWorld / Printables) | Stock and sales signals | Research and education |
|---|---|---|---|---|---|---|---|---|
| **LiteWing** (CircuitDigest) | [Circuit-Digest/LiteWing](https://github.com/Circuit-Digest/LiteWing) 87 / 41 / ? / 2026-09-28 / 3; [jobitjoseph/LiteWing](https://github.com/jobitjoseph/LiteWing) 54 / 58 / 1 / 2026-05-29 / 3; precursor [Circuit-Digest/ESP-Drone](https://github.com/Circuit-Digest/ESP-Drone) 2,462 / 399 / 4 / 2026-03-30 / 4 | No PyPI package ([pypi "litewing" 404](https://pypi.org/pypi/litewing/json)) | [Android](https://play.google.com/store/apps/details?id=com.litewing.controller) 4,093 installs, updated Mar 24 2026; iOS id6751232172 returns no result in US/AU/GB/IN ([lookup](https://itunes.apple.com/lookup?id=6751232172&country=us)) | 11 LiteWing-titled videos ≈120k views total. Circuit Digest's 8 have 117,831; one other channel's 2 have 2,102. Largest [49,374](https://www.youtube.com/watch?v=esmYcBHqBK8) | 14 relevant Reddit submissions and 12 comments, 2024-09 to 2026-09 | 0 / 0 | [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/) "Only 8 left"; [Kickstarter 2024: 163 backers](https://www.kicktraq.com/projects/2130557124/litewing-a-fun-diy-wifi-mini-drone-based-on-esp32/); [Amazon US](https://www.amazon.com/dp/B0GNN1MGC7): 3 ratings | arXiv 0; one university project repo (UNCo, Argentina) |
| **ESP-Drone** (Espressif) | [espressif/esp-drone](https://github.com/espressif/esp-drone) 2,220 / 510 / 34 / 2026-08-10 / 9 | n/a (uses a cflib fork) | No Google Play listing; [iOS](https://apps.apple.com/app/id1522247884) v1.0.1 from 2020-07-16, 1 rating | ESP-Drone-specific videos are small; e.g. ["I don't recommend the basic model of ESP-Drone"](https://www.youtube.com/watch?v=SXpK2IH-JWE) 14,483 | Not measurable (noisy keyword) | 0 / 0 | No official kit | arXiv 0 |
| **ESP-FLY** (Seeed × Max Imagination) | [Seeed-Projects/Co-Create_ESP-FLY](https://github.com/Seeed-Projects/Co-Create_ESP-FLY) 125 / 19 / 0 / 2026-04-30 / 2 | n/a | Uses the ESP-Drone app (see above) | [1,671,081](https://www.youtube.com/watch?v=V_mZsiZcy7s) (1 yr ago) and [171,762](https://www.youtube.com/watch?v=3Y_drsQtMs4) (5 mo) | Few; the keyword is too noisy to count | 1 remix (423 DL / 139 prints) / 0 | [Seeed](https://www.seeedstudio.com/ESP-FLY-co-create-p-6744.html) "In stock"; 4 reviews, avg 4.75 | None found |
| **Flix** (okalachev) | [okalachev/flix](https://github.com/okalachev/flix) 2,057 / 327 / 2 (2026-10-05) / 2026-09-30 / 4 (641 of 644 commits by the author) | [pyflix](https://pypistats.org/api/packages/pyflix/recent) 49 | No store app; uses QGroundControl or a GitHub APK | [39,214](https://www.youtube.com/watch?v=8GzzIQ3C6DQ) (2 yr); [19,340](https://www.youtube.com/watch?v=hT46CZ1CgC4) | 0 Pullpush hits; Telegram chat (earlier notes) | 0 / 0 (STL in repo) | DIY only | arXiv 0; School 548 and RoboCamp (earlier notes) |
| **Crazyflie 2.1+ / Brushless** (Bitcraze) | [crazyflie-firmware](https://github.com/bitcraze/crazyflie-firmware) 1,556 / 1,285 / 79 / 2026-10-02 / 30+; [crazyflie-lib-python](https://github.com/bitcraze/crazyflie-lib-python) 349 / 930 / 7 / 2026-09-30 / 30+; [aideck-gap8-examples](https://github.com/bitcraze/aideck-gap8-examples) 58 / 68 / 23 / 2026-10-01 / 19 | [cflib](https://pypistats.org/api/packages/cflib/recent) 6,426; [cfclient](https://pypistats.org/api/packages/cfclient/recent) 1,769 | [Android](https://play.google.com/store/apps/details?id=se.bitcraze.crazyfliecontrol2) 30,055 installs, updated Apr 16 2025; [iOS](https://apps.apple.com/app/id946151480) 6 US ratings, updated 2025-04-16 | [744,163](https://www.youtube.com/watch?v=3WBUVYZkODI) (13 yr); recent videos mostly under 10k | Pullpush, last 100 submissions: 30 in 2025, 13 in 2026 so far. [Forum](https://forum.bitcraze.io/) is read-only: 23,053 posts, 3,827 members | 2 designs (7 DL) / 1 (289 DL) | [Store](https://store.bitcraze.io/products.json): 2.1+ $240, Flow deck v2 $55 and Brushless $480 in stock; **AI-deck 1.1 and both AI bundles unavailable** | arXiv **161**; EPFL lecture series; DroneBlocks K-12 curriculum |
| **Tello / Tello EDU** (Ryze/DJI) | [DJITelloPy](https://github.com/damiafuentes/DJITelloPy) 1,482 / 528 / 43 / 2025-01-27 / 19; [dji-sdk/Tello-Python](https://github.com/dji-sdk/Tello-Python) 1,454 / 640 / 70 / 2023-12-29 / 2; [TelloPy](https://github.com/hanyazou/TelloPy) 720 / 290 / 38 / 2026-10-03 / 16 | [djitellopy](https://pypistats.org/api/packages/djitellopy/recent) 3,906 (last release 2023-06-09) | **Official TELLO and Tello EDU apps: Google Play 404 in AU/US/IN.** [iOS TELLO](https://apps.apple.com/app/id1330559633) v1.6.8 (2024-09-05), 798 US ratings. Third-party [TelloFPV](https://play.google.com/store/apps/details?id=com.volatello.tellofpv) 103,216 installs (Jul 3 2026) | Tello Python course [6,786,764](https://www.youtube.com/watch?v=LmEcyQnfpDA); [225,228](https://www.youtube.com/watch?v=vDOkUHNdmKs) | [TelloPilots](https://tellopilots.com/): 5,828 threads, 40,536 messages, 17,947 members | 12 designs (619 DL) / 37 models (3,685 DL) | Discontinued 2024 (earlier notes); Amazon US listings with 1,189–2,727 ratings | arXiv "DJI Tello" 12; tello AND drone 20 |
| **RoboMaster TT** (DJI) | [dji-sdk/RoboMaster-SDK](https://github.com/dji-sdk/RoboMaster-SDK) 444 / 194 / ? / 2024-05-10 / 7; [tianbot/rmtt_ros](https://github.com/tianbot/rmtt_ros) 65 / 14 / 0 / 2026-07-01 / 2 | [robomaster](https://pypistats.org/api/packages/robomaster/recent) 595 (last release 2022-05-06) | [iOS RoboMaster](https://apps.apple.com/app/id1449678340) v1.1.6, last updated 2021-02-05; no Google Play listing found | [183,307](https://www.youtube.com/watch?v=b5twrWtwqIo) (Conrad, 4 yr) | 20 Reddit submissions in total, 2020-12 to 2025-03 | 0 TT-specific / 0 | Discontinued 2024 (earlier notes) | arXiv 0 |
| **StampFly** (M5Stack) | [M5Fly-kanazawa/stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem) 48 / 17 / 0 / 2026-10-03 / 3 (2,073 commits by one author); [m5stack/M5StampFly](https://github.com/m5stack/M5StampFly) 92 / 75 / ? / 2026-09-07 / 6 | none | No phone app | Largest [5,954](https://www.youtube.com/watch?v=XrJ3d-WtB30); 11 StampFly-titled videos ≈19k total | 1 relevant Reddit submission and 2 comments | 0 / 0 | Original version **[EOL]**; [v1.1 (StampS3A)](https://shop.m5stack.com/products/m5stamp-fly-v1-1-with-m5stamps3a) in stock at US$49.95 | arXiv 0 relevant; Japanese workshops |
| **Pluto X / Pluto 1.2** (Drona Aviation) | [DronaAviation/Magis](https://github.com/DronaAviation/Magis) 38 / 21 / ? / 2025-12-08 / 5; [plutocontrol](https://github.com/DronaAviation/plutocontrol) 2 / 3 / ? / 2026-03-24 / 3 | [plutocontrol](https://pypistats.org/api/packages/plutocontrol/recent) 28 | [Android Pluto Controller](https://play.google.com/store/apps/details?id=com.drona.controller) **135,966 installs**, updated Sep 10 2026; [iOS](https://apps.apple.com/app/id1173323776) v5.2.0 (2026-09-29), 8 US ratings | [107,965](https://www.youtube.com/watch?v=SRtCoxkBLfU); [60,885](https://www.youtube.com/watch?v=e8feMM1Cjco) (DroneBot Workshop) | Not measurable (noisy keyword) | 0 / 0 | Not on Amazon US search | arXiv 0; Inter IIT Tech Meet challenges (2023, 2025) |
| **CoDrone EDU** (Robolink) | [RobolinkInc/codrone-edu-python-examples](https://github.com/RobolinkInc/codrone-edu-python-examples) 3 / 1 / 0 / 2026-09-10 / 3 | [codrone-edu](https://pypistats.org/api/packages/codrone-edu/recent) 599 (last release 2026-09-10) | No phone flight app (flown with a controller) | Mostly Robolink's own videos, largest [38,766](https://www.youtube.com/watch?v=kMJhf5ykLSo) | 69 of the latest 100 Reddit submissions are on two profile pages, one of them Robolink's official account | 3 designs (54 DL) / 1 (28 DL) | [CoDrone EDU $249 in stock](https://www.robolink.com/products/codrone-edu); [CoDrone EDU Plus](https://www.robolink.com/plus) ships in the 2026-27 school year | arXiv 3 (unverified); [REC Foundation Aerial Drone Competition](https://www.recf.org/aerial-drone-competition/) |

#### 1.1 LiteWing (CircuitDigest, ESP32-S3)
- **GitHub (ungh.cc).**
  - [Circuit-Digest/LiteWing](https://github.com/Circuit-Digest/LiteWing): 87★, 41 forks, created 2025-03-11, last push 2026-09-28. Three contributors: jobitjoseph (37 commits), CircuitDigest (15), DhamuVkl (14).
  - [jobitjoseph/LiteWing](https://github.com/jobitjoseph/LiteWing): 54★, 58 forks, 1 open issue/PR, last push 2026-05-29, the same three contributors.
  - Precursor [Circuit-Digest/ESP-Drone](https://github.com/Circuit-Digest/ESP-Drone): 2,462★, 399 forks, 4 open, last push 2026-03-30. It has only 4 contributors, with 58 commits by jobitjoseph.
- **Companion repos, all by CircuitDigest staff or contributors:**
  - [LiteWing-Library](https://github.com/DhamuVkl/LiteWing-Library): 4★, last push 2026-04-06.
  - [LiteWing-Blockly](https://github.com/Circuit-Digest/LiteWing-Blockly): 2★, created 2026-09-22.
  - [gesture control](https://github.com/Circuit-Digest/litewing-gesture-control-drone-using-esp32-cflib-python): 7★.
  - [object tracking](https://github.com/Circuit-Digest/Object-Tracking-Drone-using-LiteWing-): 7★.
  - [hand-gesture control](https://github.com/Circuit-Digest/Litewing-hand-gesture-drone-control): 1★.
  - [voice control](https://github.com/Circuit-Digest/LiteWing-Voice-Control-system-using-Python): 0★.
- **Independent repos.** GitHub search "litewing" returns **36** repos ([search](https://github.com/search?q=litewing&type=repositories)). Of the 30 shown, about 19 are by non-CircuitDigest accounts and relate to the drone, and **all have 0★**. Examples:
  - a university LQG control project, "PIP de Ingeniería Electrónica (UNCo)" ([Ogas123/litewing-lqg](https://github.com/Ogas123/litewing-lqg));
  - a face-follow build adding an ESP32-CAM ([bsil-co/nemesis-drone](https://github.com/bsil-co/nemesis-drone));
  - a swarm repo ([willyb234/LiteWing-Drone-Swarm](https://github.com/willyb234/LiteWing-Drone-Swarm));
  - a UART optical-flow port ([WOAH-KAMRAN/litewing-uart](https://github.com/WOAH-KAMRAN/litewing-uart)).
- **App.**
  - Google Play "LiteWing" by CircuitDigest: **4,093 installs** (bucket "1K+"), released Jul 20 2025, updated Mar 24 2026. On the India storefront it rates 4.6★ from 11 reviews — [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller); [IN storefront](https://play.google.com/store/apps/details?id=com.litewing.controller&hl=en_IN&gl=IN).
  - iOS: an iTunes lookup of id 6751232172 returned **0 results** in the US, AU, GB and IN storefronts ([lookup US](https://itunes.apple.com/lookup?id=6751232172&country=us)). On 2026-10-05 the IN App Store page returned HTTP 404 (earlier notes).
- **YouTube.** In the view-sorted search, 11 LiteWing-titled videos total 119,975 views ([search](https://www.youtube.com/results?search_query=litewing+drone&sp=CAMSAhAB)):
  - Circuit Digest: [intro, 49,374, 1 yr](https://www.youtube.com/watch?v=esmYcBHqBK8); [gesture control, 33,214](https://www.youtube.com/watch?v=agdYFeAYITA); [Betaflight, 13,647](https://www.youtube.com/watch?v=uUJ-0D_myQs); [assembly, 5,443](https://www.youtube.com/watch?v=3V2Qf6Okn2g); [voice control, 5,303](https://www.youtube.com/watch?v=6Y0AwSqIanU); [Python autonomous flight, 4,584](https://www.youtube.com/watch?v=UVSjKvjhKRI); [object tracking, 3,370, 2 mo](https://www.youtube.com/watch?v=RNTUjRI1Tc0).
  - Of the 11 LiteWing-titled results, 8 are Circuit Digest's (117,831 views in total). The only other LiteWing channel found is "INNOVATIONS - INVENTIONS", with two uploads of the same video: [1,893](https://www.youtube.com/watch?v=8BQ6VtfpYB4) and 209 views. A 42-view "Dift Team Litewing FPV drones" video is about an unrelated product.
  - The precursor "How to build a drone using ESP32?" had 290,195 views (2026-10-05) — [YouTube](https://www.youtube.com/watch?v=uzZjk0TQKtU).
- **Reddit (Pullpush).** 14 relevant submissions from 2024-09-18 to 2026-09-23 (3 in 2024, 6 in 2025, 5 in 2026) and 12 relevant comments — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=litewing&size=100). CircuitDigest's own [Kickstarter launch post](https://reddit.com/r/diydrones/comments/1fke52d/diy_wificontrolled_mini_drone_open_source_perfect/) had a score of 0 and 6 comments.
- **Wiki community.** The [LiteWing wiki](https://circuitdigest.com/wiki/litewing/) page carries 31 user comments (Jan–Jul 2026), mostly troubleshooting (see Q3).
- **Sales and stock** (more in Q4):
  - [Kicktraq](https://www.kicktraq.com/projects/2130557124/litewing-a-fun-diy-wifi-mini-drone-based-on-esp32/): 163 backers, $16,253 pledged of a $7,500 goal.
  - [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/): "Only 8 left".
  - [Amazon US](https://www.amazon.com/dp/B0GNN1MGC7): 3 ratings.

#### 1.2 ESP-Drone (Espressif)
- **GitHub.**
  - [espressif/esp-drone](https://github.com/espressif/esp-drone): 2,220★, 510 forks, 34 open, last push 2026-08-10, 9 contributors (leeebo 107 commits).
  - [ESP-Drone-Android](https://github.com/EspressifApps/ESP-Drone-Android): 105★, last push **2020-06-23**.
  - [ESP-Drone-iOS](https://github.com/EspressifApps/ESP-Drone-iOS): 41★, last push **2020-07-17**.
  - GitHub search "esp-drone" returns 711 repos, but the keyword is fuzzy.
- **App.**
  - iOS "ESP-Drone": v1.0.1, updated 2020-07-16; 1 rating in the US (5★) and 1 in AU (1★) — [App Store](https://apps.apple.com/app/id1522247884).
  - No Google Play listing: [com.espressif.espdrone](https://play.google.com/store/apps/details?id=com.espressif.espdrone) returned 404, and the Play search for "esp drone" shows LiteWing's app first and no Espressif drone app — [Play search](https://play.google.com/store/search?q=esp%20drone&c=apps).
- **Support status.** The README has said "limited support" since December 2022 (earlier notes, [repo](https://github.com/espressif/esp-drone)).
- **YouTube.** ESP-Drone-specific videos are small, e.g. That Project's ["I failed it. I don't recommend the basic model of ESP-Drone."](https://www.youtube.com/watch?v=SXpK2IH-JWE) (14,483 views, 2 yr) and [Embarcados TV, 1,521](https://www.youtube.com/watch?v=WSuS1gleYGw).

#### 1.3 ESP-FLY (Seeed × Max Imagination)
- **GitHub.** [Seeed-Projects/Co-Create_ESP-FLY](https://github.com/Seeed-Projects/Co-Create_ESP-FLY): 125★, 19 forks, 0 open, created 2026-04-22, last push 2026-04-30, 2 contributors (AYproject 4 commits, maximagination1 2).
- **YouTube (Max Imagination):**
  - "Build The Smallest ESP32 Drone You Can Fly with Your Phone | ESP-FLY": **1,671,081 views** (1 yr) — [YouTube](https://www.youtube.com/watch?v=V_mZsiZcy7s).
  - Kit tutorial: 171,762 (5 mo) — [YouTube](https://www.youtube.com/watch?v=3Y_drsQtMs4).
  - ESP-FC/Betaflight tutorial: 84,825 (10 mo) — [YouTube](https://www.youtube.com/watch?v=QTmitUFotik).
  - Instructable: 46,489 views (2026-10-05, earlier notes) — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/).
- **Stock and reviews.** The Seeed page shows "In stock" and JSON-LD reviewCount 4, ratingValue 4.75 — [Seeed](https://www.seeedstudio.com/ESP-FLY-co-create-p-6744.html).
- **Printables and repositories.**
  - One MakerWorld frame remix: 423 downloads, 139 prints — [MakerWorld 1530477](https://makerworld.com/en/models/1530477-esp-fly-frame-drone-housing).
  - 0 Printables results for "esp-fly" — [Printables GraphQL](https://api.printables.com/graphql/).
  - The original frame STL is a paid Cults3D download; Cults3D was blocked (earlier notes).
- **Camera.** The kit's optional camera is a "5.8 GHz AIO analog FPV camera" mounted under a top cover — [ESP-FLY README](https://raw.githubusercontent.com/Seeed-Projects/Co-Create_ESP-FLY/main/README.md).

#### 1.4 Flix (okalachev)
- **GitHub.** [okalachev/flix](https://github.com/okalachev/flix): 2,057★ (2,044 on 2026-10-05), 327 forks, 2 open issues (2026-10-05), last push 2026-09-30.
  - Contributors: okalachev has 641 commits; three others have 1 each ([ungh contributors](https://ungh.cc/repos/okalachev/flix/contributors)).
- **Python library.** [pyflix](https://pypi.org/project/pyflix/) had 49 downloads in 30 days. Its latest upload was 2026-08-17, with 13 releases since 2025-07-22 — [pypistats](https://pypistats.org/api/packages/pyflix/recent).
- **YouTube (Oleg Kalachev):**
  - [Flix intro: 39,214](https://www.youtube.com/watch?v=8GzzIQ3C6DQ) (2 yr).
  - [Flix v1: 19,340](https://www.youtube.com/watch?v=hT46CZ1CgC4) (1 yr).
  - [Flix in education (RoboCamp): 3,472](https://www.youtube.com/watch?v=Wd3yaorjTx0).
  - ["Outdoor test of Flix 2": 1,131](https://www.youtube.com/watch?v=KXlNmvUTi4g) (4 mo).
  - ["Flix quadcopter position control demo": 347](https://www.youtube.com/watch?v=369Xowm4HcU) (2 mo).
- **Reddit.** Pullpush returned 0 submissions and 0 comments for "flix quadcopter" — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=flix%20quadcopter&size=100).
- **Education.** Used at School 548 (Moscow) and RoboCamp 2025/2026 — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md) (earlier notes).

#### 1.5 Bitcraze Crazyflie 2.1+ / 2.1 Brushless (Flow deck, AI-deck)
- **GitHub (ungh.cc plus search):**

| Repo | ★ | Forks | Open | Last push | Contributors |
|---|---|---|---|---|---|
| [crazyflie-firmware](https://github.com/bitcraze/crazyflie-firmware) | 1,556 | 1,285 | 79 | 2026-10-02 | 30+ |
| [crazyflie-lib-python](https://github.com/bitcraze/crazyflie-lib-python) | 349 | 930 | 7 | 2026-09-30 | 30+ |
| [crazyflie-clients-python](https://github.com/bitcraze/crazyflie-clients-python) | 348 | 519 | 39 | 2026-10-05 | 30+ |
| [aideck-gap8-examples](https://github.com/bitcraze/aideck-gap8-examples) | 58 | 68 | 23 | 2026-10-01 | 19 |
| [crazyflie-android-client](https://github.com/bitcraze/crazyflie-android-client) | 115 | 140 | 29 | 2026-09-29 | 14 |
| [crazyflie-ios-client](https://github.com/bitcraze/crazyflie-ios-client) | 39 | 52 | n/a | 2025-09-04 | 11 |
| [IMRCLab/crazyswarm2](https://github.com/IMRCLab/crazyswarm2) | 260 | 136 | n/a | 2026-09-11 | 30+ |

  - GitHub search "crazyflie" returns **1,684** repos ([search](https://github.com/search?q=crazyflie&type=repositories)).
  - Independent projects include [gym-pybullet-drones](https://github.com/learnsyslab/gym-pybullet-drones) (2,153★, uses the Crazyflie model) and [CrazySim](https://github.com/gtfactslab/CrazySim) (154★).
- **PyPI.**
  - [cflib](https://pypistats.org/api/packages/cflib/recent): 6,426 downloads in 30 days, latest 0.1.34 uploaded 2026-09-30, 48 releases.
  - [cfclient](https://pypistats.org/api/packages/cfclient/recent): 1,769, latest 2026.8.1.
- **Apps.**
  - Android "Crazyflie Client": **30,055 installs** (bucket "10K+"), released Dec 8 2014, updated Apr 16 2025. India storefront: 3.8★ from 108 reviews — [Google Play](https://play.google.com/store/apps/details?id=se.bitcraze.crazyfliecontrol2).
  - iOS "Crazyflie 2": v1.3.1 (2025-04-16), 6 US ratings, avg 2.67 — [App Store](https://apps.apple.com/app/id946151480).
- **Forum.** "This forum is read-only, please start new threads on the Bitcraze discussions page instead". Totals: 23,053 posts, 4,515 topics, 3,827 members — [forum.bitcraze.io](https://forum.bitcraze.io/).
- **YouTube.**
  - The 19 Crazyflie-titled results in the view-sorted search total 1,412,345 views, but older videos dominate: [2013 pre-release video, 744,163](https://www.youtube.com/watch?v=3WBUVYZkODI); [assembly, 148,356](https://www.youtube.com/watch?v=kS3qR1IjeGE) — [search](https://www.youtube.com/results?search_query=crazyflie&sp=CAMSAhAB).
  - Recent education videos: EPFL-LIS "Crazyflie 101" lectures from 2020, 2021 and 2023 ([8,659](https://www.youtube.com/watch?v=jY-SLP3WWl0), [6,828](https://www.youtube.com/watch?v=6s8i-nhPjt0), [7,208](https://www.youtube.com/watch?v=es69Nf0Wlwc)).
  - "Crazyflie in research 2023-2024": [4,077](https://www.youtube.com/watch?v=KrN8ZyqmLWk).
  - DroneBlocks "How to Build your Crazyflie Drone": [8,241](https://www.youtube.com/watch?v=GwMt7X_zPdc).
  - AI-deck videos are small: ["Crazyflie AI deck FPV over WIFI", 6,387](https://www.youtube.com/watch?v=zLxYxvWMohQ); ["AI-deck Workshop 1", 4,358](https://www.youtube.com/watch?v=o9asYPHxEB4).
- **Reddit (Pullpush).** The most recent 100 submissions mentioning "crazyflie" span 2020-09-18 to 2026-09-17 (2023: 16, 2024: 20, 2025: 30, 2026 to date: 13), and 18 of them are in r/CrazyFlie. The latest 100 comments span 2023-01 to 2026-09-18 — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=crazyflie&size=100).
- **Store (2026-10-06)** — [store products feed](https://store.bitcraze.io/products.json):
  - In stock: Crazyflie 2.1+ US$240, Flow deck v2 US$55, Crazyflie 2.1 Brushless US$480, "STEM drone bundle – 2.1+" US$320, "Getting started bundle – 2.1+" US$270, AI-deck color camera module US$21.
  - **Unavailable: AI-deck 1.1 (US$240), "The AI bundle – Crazyflie 2.1+" (US$610) and "The AI bundle – Crazyflie 2.1 Brushless" (US$830).**
- **Printable accessories.**
  - MakerWorld: 2 Crazyflie-titled designs, 7 downloads in total — [Bambu API](https://api.bambulab.com/v1/search-service/select/design2?keyword=crazyflie&limit=50).
  - Printables: 1, "Crazyflie 2.1 cage / prop guard", 289 downloads — [Printables 76336](https://www.printables.com/model/76336-crazyflie-21-cage-prop-guard).
- **Research and education.**
  - arXiv metadata search for "crazyflie" returns **161** papers — [arXiv API](http://export.arxiv.org/api/query?search_query=all:crazyflie&max_results=1).
  - DroneBlocks' K-12 move to Crazyflie (Feb 2024): "These new micro-drones have been used at the collegiate level for several years" — [DroneBlocks community](https://community.droneblocks.io/t/dji-tello-discontinuation-new-crazyflie-micro-drones/1265).
- **Amazon.** An Amazon US search for "crazyflie" returned 0 results — [Amazon search](https://www.amazon.com/s?k=crazyflie).

#### 1.6 DJI/Ryze Tello and Tello EDU
- **Status.** Discontinued: DJI ended its education line in the US in Jan 2024 (earlier notes; [DroneDJ](https://dronedj.com/2024/01/04/dji-education-drone-shutdown-us/), [Digital Camera World](https://www.digitalcameraworld.com/news/dji-tello-drone-is-set-to-disappear-as-drone-giant-ditches-education)).
- **DroneBlocks' verdict (7 Feb 2024).** It "would not recommend [Tello] to anyone starting a NEW drone program", but "there will never be a drone that can reach the same level of functionality as the Tello at the price point it did" — [DroneBlocks community](https://community.droneblocks.io/t/dji-tello-discontinuation-new-crazyflie-micro-drones/1265).
- **Official Android apps removed.**
  - `com.ryzerobotics.tello` (TELLO) and `com.ryzerobotics.telloedu` (Tello EDU) return HTTP 404 "Not Found" on Google Play in the AU, US and IN storefronts — [TELLO on Play](https://play.google.com/store/apps/details?id=com.ryzerobotics.tello); [Tello EDU on Play](https://play.google.com/store/apps/details?id=com.ryzerobotics.telloedu). `com.ryzerobotics.tellohero` also returns 404.
  - Corroboration: a TelloFPV review of Aug 23 2026 says it "still works really well, where the native app has vanished for good" — [TelloFPV on Play](https://play.google.com/store/apps/details?id=com.volatello.tellofpv).
- **iOS.**
  - TELLO app still listed: v1.6.8 (last update 2024-09-05), 798 US ratings (avg 3.32), 225 AU (3.66), 77 IN (3.60) — [App Store](https://apps.apple.com/app/id1330559633); [lookup](https://itunes.apple.com/lookup?bundleId=com.ryzerobotics.tello&country=au).
  - No Tello EDU app was found by bundle-ID lookup ([lookup](https://itunes.apple.com/lookup?bundleId=com.ryzerobotics.telloedu&country=us)) or in "tello edu" search results ([search](https://itunes.apple.com/search?term=tello%20edu&entity=software&country=au)).
- **Third-party Android apps still listed:**
  - [TelloFPV](https://play.google.com/store/apps/details?id=com.volatello.tellofpv): 103,216 installs, updated Jul 3 2026, 4.3★ from 2.19K reviews.
  - [TelloMe](https://play.google.com/store/apps/details?id=com.volatello.tellomea): 444,078 installs, updated Sep 16 2024.
  - [TelloBlocks](https://play.google.com/store/apps/details?id=com.nadbe.telloblocks): 27,393, updated May 8 2024.
  - [DroneBlocks](https://play.google.com/store/apps/details?id=com.unmannedairlines.droneblocks): 187,224, updated Mar 14 2023, 2.2★ from 414 reviews.
- **GitHub.**
  - [DJITelloPy](https://github.com/damiafuentes/DJITelloPy): 1,482★, 528 forks, 43 open, last push 2025-01-27, 19 contributors.
  - [dji-sdk/Tello-Python](https://github.com/dji-sdk/Tello-Python): 1,454★, 640 forks, 70 open, last push 2023-12-29.
  - [TelloPy](https://github.com/hanyazou/TelloPy): 720★, last push 2026-10-03.
  - GitHub search "tello" returns **5,994** repos ([search](https://github.com/search?q=tello&type=repositories)). This includes noise such as unrelated "Tello" apps.
- **PyPI.**
  - [djitellopy](https://pypistats.org/api/packages/djitellopy/recent): 3,906 downloads in 30 days, although the latest release (2.5.0) was 2023-06-09 — [PyPI](https://pypi.org/project/djitellopy/).
  - [tellopy](https://pypistats.org/api/packages/tellopy/recent): 162.
- **Forum.** TelloPilots ("DJI Tello Drone Forum"): 5,828 threads, 40,536 messages, 17,947 members — [tellopilots.com](https://tellopilots.com/).
- **YouTube.** View-sorted "tello edu" results: 20 Tello-titled videos totalling 3,327,309 views, e.g. ["Ryze Tello: Max Range Test", 320,732](https://www.youtube.com/watch?v=sSPESsb-4bY) — [search](https://www.youtube.com/results?search_query=tello+edu&sp=CAMSAhAB). Programming videos are in Q2.
- **Printable accessories.**
  - MakerWorld: 12 Tello-titled designs, 619 downloads and 372 prints in total; top is "DJI Tello Protector" (229 DL) — [MakerWorld 1073603](https://makerworld.com/en/models/1073603).
  - Printables: 37 Tello-titled models in the first 150 results, 3,685 downloads; top "Tello drone propeller guard v3" (771 DL) — [Printables 275499](https://www.printables.com/model/275499-tello-drone-propeller-guard-v3).
- **Amazon US** ([search](https://www.amazon.com/s?k=dji+tello+drone)):
  - "Tello Drone with 720P Camera…": 2,727 ratings (4.2★).
  - "Ryze Tech Tello Boost Combo": 1,189 ratings (4.3★).
  - "TELLO Quadcopter Drone (Renewed)": 65 ratings (3.7★).
  - Tello accessories are still listed: a carry case with 638 ratings and props with 327.
- **Research.** arXiv: "DJI Tello" 12, tello AND drone 20, "Tello EDU" 2 — [arXiv API](http://export.arxiv.org/api/query?search_query=all:%22dji%20tello%22&max_results=1).
- **Education examples:**
  - Tel Aviv University ADL lab [Tello_ROS_ORBSLAM](https://github.com/tau-adl/Tello_ROS_ORBSLAM) (195★).
  - [DroneBlocks Tello Python course](https://github.com/dbaldwin/DroneBlocks-Tello-Python) (153★).
  - UiT Narvik video ["FIVE COOL PROJECTS WITH TELLO DRONE", 23,517](https://www.youtube.com/watch?v=wCPuj_iJHmY).

#### 1.7 DJI RoboMaster TT (Tello Talent)
- **GitHub.**
  - [dji-sdk/RoboMaster-SDK](https://github.com/dji-sdk/RoboMaster-SDK): 444★, 194 forks, last push **2024-05-10**, 7 contributors.
  - [tianbot/rmtt_ros](https://github.com/tianbot/rmtt_ros): 65★.
  - GitHub search "robomaster tt" returns 32 repos ([search](https://github.com/search?q=robomaster+tt&type=repositories)), e.g. [Tecnológico de Monterrey RoboMaster TT activities](https://github.com/GusMtz787/Robomaster-TT-Activities) and [Palo Alto Library TT swarm](https://github.com/PaloAltoLibrary/RobomasterDrones).
- **PyPI.** [robomaster](https://pypistats.org/api/packages/robomaster/recent): 595 downloads in 30 days, last release 2022-05-06.
- **Apps.**
  - iOS "RoboMaster": v1.1.6, **last updated 2021-02-05**, 68 US ratings — [App Store](https://apps.apple.com/app/id1449678340).
  - The Google Play search for "robomaster" showed no DJI app, and the guessed IDs return 404 — [Play search](https://play.google.com/store/search?q=robomaster&c=apps).
- **YouTube.** View-sorted: 19 TT-titled videos totalling 397,079 views; the largest is [Conrad "DJI RoboMaster Tello Talent", 183,307](https://www.youtube.com/watch?v=b5twrWtwqIo) — [search](https://www.youtube.com/results?search_query=robomaster+tt&sp=CAMSAhAB).
- **Reddit.** Only 20 submissions in total (2020-12-15 to 2025-03-31) and 6 relevant comments (last 2023-12) — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=robomaster%20tt&size=100).
- **Printables.** 0 TT-specific models on Printables and MakerWorld. The 35 MakerWorld "RoboMaster" titles are RoboMaster competition and S1 robot items — [Bambu API](https://api.bambulab.com/v1/search-service/select/design2?keyword=robomaster&limit=50).

#### 1.8 M5Stack StampFly
- **Shop status.**
  - "[EOL] M5Stamp Fly with M5StampS3": available = false — [M5Stack shop](https://shop.m5stack.com/products/m5stamp-fly-with-m5stamps3).
  - "M5Stamp Fly v1.1 with M5StampS3A": available, US$49.95 — [M5Stack shop](https://shop.m5stack.com/products/m5stamp-fly-v1-1-with-m5stamps3a).
- **GitHub.**
  - [stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem): 48★, 17 forks, 0 open, last push 2026-10-03; kouhei1970 has 2,073 commits.
  - [m5stack/M5StampFly](https://github.com/m5stack/M5StampFly): 92★, 75 forks, last push 2026-09-07.
  - [M5Fly-kanazawa/StampFly](https://github.com/M5Fly-kanazawa/StampFly): 42★, last push 2024-11-24.
  - Workshop repo [StampFly_Workshop](https://github.com/M5Fly-kanazawa/StampFly_Workshop): 5★ but **54 forks**.
  - GitHub search "stampfly" returns 44 repos, mostly Japanese ([search](https://github.com/search?q=stampfly&type=repositories)).
- **YouTube.** View-sorted: 11 StampFly-titled videos totalling 19,356 views; the largest is [Ray J, 5,954](https://www.youtube.com/watch?v=XrJ3d-WtB30). Japanese workshop video: ["StampFlyプログラミング教室", 1,369](https://www.youtube.com/watch?v=EXDoGFmD864).
- **Reddit.** 1 relevant submission (r/M5Stack, 2025-06-16, "StampFly element missing") and 2 comments — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=stampfly&size=100).
- **Research.** All 16 arXiv hits for "stampfly" are unrelated "Stampfli" maths papers, so the relevant count is 0 — [arXiv API](http://export.arxiv.org/api/query?search_query=all:stampfly&max_results=16).
- **Printables.** 0 on MakerWorld and Printables.

#### 1.9 Drona Aviation Pluto X / Pluto 1.2
- **Apps.**
  - Android "Pluto Controller": **135,966 installs** (bucket "100K+"), released Apr 26 2016, updated Sep 10 2026 — [Google Play](https://play.google.com/store/apps/details?id=com.drona.controller).
    - India storefront: 4.3★ from 315 reviews ([IN](https://play.google.com/store/apps/details?id=com.drona.controller&hl=en_IN&gl=IN)).
    - AU storefront: 1.7★ (based on very few AU ratings).
  - [PlutoBlocks](https://play.google.com/store/apps/details?id=com.dronaaviation.pluto_blocks): 1,072 installs.
  - iOS Pluto Controller: v5.2.0 (2026-09-29), 8 US ratings — [App Store](https://apps.apple.com/app/id1173323776).
- **GitHub.**
  - [Magis firmware](https://github.com/DronaAviation/Magis): 38★, last push 2025-12-08, 5 contributors.
  - [plutocontrol](https://github.com/DronaAviation/plutocontrol): 2★, last push 2026-03-24.
  - [PlutoX-Sample-Codes](https://github.com/DronaAviation/PlutoX-Sample-Codes): 16★, last push 2018-08-15.
  - [plutocontrol on PyPI](https://pypistats.org/api/packages/plutocontrol/recent): 28 downloads in 30 days.
- **YouTube.** View-sorted Pluto results include:
  - ["Made In India Drone Pluto 1.2", 107,965](https://www.youtube.com/watch?v=SRtCoxkBLfU);
  - [The Wrench, 85,895](https://www.youtube.com/watch?v=itLU3v99SVI);
  - [DroneBot Workshop PlutoX review, 60,885](https://www.youtube.com/watch?v=e8feMM1Cjco).
  - Most are 5–8 years old — [search](https://www.youtube.com/results?search_query=pluto+x+drone&sp=CAMSAhAB).
- **Education.**
  - Inter IIT Tech Meet 11.0 "Drona Aviation Pluto Swarm Challenge" (team repos e.g. [IIT Bhubaneswar](https://github.com/AiR-IITBBS/DronaAviation-InterIIT-TM-11.0), [shivam-sood00](https://github.com/shivam-sood00/Drona-InterIIT23)).
  - Inter IIT 2025 "Low Prep Drone Challenge… powered by Drona Aviation" — [DA-InterIIT25-resources](https://github.com/Fighter-195/DA-InterIIT25-resources).
- **Printables and Amazon.** 0 Pluto-drone accessories on MakerWorld and Printables. The only Printables "Pluto 3\" FPV Drone Frame" is unrelated. An Amazon US search for "pluto x drone" returned no Pluto products — [Amazon search](https://www.amazon.com/s?k=pluto+x+drone).

#### 1.10 Robolink CoDrone EDU (and the new CoDrone EDU Plus)
- **Store** ([Robolink products feed](https://www.robolink.com/products.json?limit=250)):
  - CoDrone EDU US$249, available (published 2022-03-17).
  - JROTC edition US$314.99.
  - Classroom packs of 12 (US$3,599) and 18 drones (US$5,399).
  - A TI-Nspire CX II cable for CoDrone EDU.
- **CoDrone EDU Plus.** Announced in a video published 2026-06-24 — [YouTube](https://www.youtube.com/watch?v=jyfTSIwj_-o). The [Plus page](https://www.robolink.com/plus) says:
  - "Dual front-and downward-facing cameras", "New computer vision activities and foundational AI skills", and "Detect objects and recognize colors".
  - "Drones are currently in production and will ship during the 2026-27 school year"; buyers can "Sign up… to be first in line when pre-orders open".
- **PyPI.** [codrone-edu](https://pypistats.org/api/packages/codrone-edu/recent): 599 downloads in 30 days; latest 2.10 uploaded 2026-09-10; 29 releases since 2021-10-27 — [PyPI](https://pypi.org/project/codrone-edu/).
- **GitHub.**
  - [codrone-edu-python-examples](https://github.com/RobolinkInc/codrone-edu-python-examples): 3★.
  - The old [RobolinkInc/CoDrone](https://github.com/RobolinkInc/CoDrone): 21★, last push 2020-02-05.
  - GitHub search "codrone" returns 164 repos, inflated by an unrelated "CODrone" dataset ([search](https://github.com/search?q=codrone&type=repositories)).
- **YouTube.** View-sorted "codrone edu" results: 19 titles totalling 429,173 views, almost all on Robolink's channel (largest [38,766](https://www.youtube.com/watch?v=kMJhf5ykLSo)). The TI Education Python video has [963](https://www.youtube.com/watch?v=XmE0mj4uj0g).
- **Reddit.** Of the latest 100 submissions mentioning "codrone" (2018-05 to 2026-09), 69 were posted to two user-profile pages rather than to subreddits: u_ozrobotics (37) and u_robolink_official (32) — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=codrone&size=100).
- **Competition.** The REC Foundation Aerial Drone Competition page links "Read more about the RECF & Robolink Partnership". The competition includes an "Autonomous Flight Mission" programmed by students — [RECF ADC](https://www.recf.org/aerial-drone-competition/).
- **Printables and Amazon.** MakerWorld: 3 CoDrone-titled designs, 54 downloads in total (stands, a charging tray). Printables: 1 (stand, 28 DL) — [Printables 1351406](https://www.printables.com/model/1351406). An Amazon US search for "codrone edu" returned no CoDrone products — [Amazon search](https://www.amazon.com/s?k=codrone+edu).
- **App.** No phone flight app; it is flown with Robolink's controller (earlier notes).

#### 1.11 Other candidates and items found in the same class
- **CoDrone EDU Plus** (above). It is the only new camera-equipped educational micro-drone with a Python stack found, but it is not yet orderable.
- **Crazyflie 2.1 Brushless.** In stock at US$480 — [Bitcraze store](https://store.bitcraze.io/products.json). It is not supported by the Android app (earlier notes).
- **freeCodeCamp's "Learn Drone Programming with Python – Tutorial"**: 168,382 views (5 mo) — [YouTube](https://www.youtube.com/watch?v=k-yDYgc8AmU). The drone it uses was not verified.
- **Murtaza's Workshop's PySimverse drone simulator**: [36,045 views](https://www.youtube.com/watch?v=hedBZ_ViAGo), 7 mo. It is software only.

### Inferences
- **Ranking by community size and depth:**
  1. Tello family: the largest corpus by far, but frozen. Its main library has had no release since June 2023, and the official Android apps are gone.
  2. Crazyflie: large, academic and actively maintained.
  3. Pluto: large app base, India-centred, little open-source activity.
  4. CoDrone EDU: schools and competitions, vendor-driven.
  5. ESP-FLY: viral video, small repo.
  6. Flix: one-person project with a loyal following.
  7. LiteWing, ESP-Drone, StampFly: small.
- **Health (active this quarter):**
  - Crazyflie, Flix, StampFly ecosystem, CoDrone EDU (library releases) and Pluto (app updates) all show 2026 updates.
  - ESP-Drone's apps are frozen at 2020.
  - RoboMaster's iOS app is frozen at 2021.
  - LiteWing's Android app was last updated in March 2026, and its iOS app appears delisted.
- **Star counts overstate ESP32-drone adoption.** Circuit-Digest/ESP-Drone has 2,462★ but only 4 contributors, and its successor LiteWing has about 4.1k app installs and 3 Amazon ratings. ESP-FLY's 1.67M-view video produced 125★, one MakerWorld remix and no Reddit community.
- **Best "help available" bet.** For a beginner who wants help when stuck, Crazyflie offers the deepest maintained help (code, docs, research). Tello offers the most answered questions and tutorials, but these are aging.
- **Not well supported for a Sydney beginner:**
  - LiteWing, StampFly and Pluto: few English-language, AU-relevant community resources.
  - ESP-Drone: the vendor has formally limited support.

### Gaps
- No unit-sales figures were found for Tello, Crazyflie, CoDrone EDU, Pluto, StampFly or ESP-FLY. Bitcraze and Robolink do not publish them on the pages read, and DJI never published Tello totals in the sources reached.
- Thingiverse (API 401) and Cults3D (403) could not be swept, so printable-accessory counts may be understated for Tello and Crazyflie.
- Subreddit subscriber counts (r/tello, r/crazyflie, r/diydrones) could not be read: reddit.com returned 403. Pullpush coverage may be incomplete.
- Open-issue counts are missing for Circuit-Digest/LiteWing, RoboMaster-SDK, m5stack/M5StampFly and DronaAviation/Magis (they were not in the search results). Issue *titles* could not be read, because the GitHub issue API is restricted to this session's repo.
- OpenAlex, Semantic Scholar and Google Scholar counts were unavailable (HTTP 429 or not attempted). arXiv undercounts conference and journal papers that are not on arXiv.
- Bitcraze's newer GitHub Discussions activity (which replaced the forum) could not be counted, because github.com HTML is blocked.

## 2. Which platforms have a large body of Python AI/computer-vision examples (face tracking, object following, gesture control, obstacle avoidance), and roughly how many independent tutorials and repos exist?

### Takeaway
- **Tello family: the largest body by an order of magnitude.** There are hundreds of independent repos (for example, 122 for "tello face tracking" alone), multi-million-view Python CV tutorials, and a still-heavily-downloaded library (djitellopy, about 3.9k downloads a month). All of it uses the drone's own camera streamed to a laptop.
- **Crazyflie: second.** It has cflib and Bitcraze's AI-deck examples, but the AI-deck camera board is currently out of stock and its tutorial videos have only thousands of views.
- **LiteWing and CoDrone EDU.** Each has a few vendor demos and a handful of independent repos. LiteWing's demos use an external webcam, because the drone has no camera. CoDrone EDU's camera model is due to ship during the 2026-27 school year, and pre-orders are not yet open.
- **Pluto, StampFly, Flix, ESP-FLY and ESP-Drone.** Each has near-zero CV examples.

### Cited Findings

#### Tello / Tello EDU / RoboMaster TT
- **Libraries.**
  - [DJITelloPy](https://github.com/damiafuentes/DJITelloPy) (1,482★) advertises "easily retrieve a video stream" and "control a swarm of drones" — [README](https://raw.githubusercontent.com/damiafuentes/DJITelloPy/master/README.md). It is downloaded 3,906 times a month — [pypistats](https://pypistats.org/api/packages/djitellopy/recent).
  - [dji-sdk/Tello-Python](https://github.com/dji-sdk/Tello-Python) has 1,454★.
- **GitHub repo-search counts (2026-10-06, name/description/topic matches):**
  - "djitellopy": 87 repos ([search](https://github.com/search?q=djitellopy&type=repositories)).
  - "tello face tracking": **122** ([search](https://github.com/search?q=tello+face+tracking&type=repositories)).
  - "tello": 5,994 (noisy).
- **Example independent AI repos:**
  - [kinivi/tello-gesture-control](https://github.com/kinivi/tello-gesture-control): 343★, MediaPipe gestures "on drone's camera video-stream".
  - [geaxgx/tello-openpose](https://github.com/geaxgx/tello-openpose): 305★.
  - [murtazahassan/Tello-Object-Tracking](https://github.com/murtazahassan/Tello-Object-Tracking): 117★.
  - [aqeelanwar/DRLwithTL_real](https://github.com/aqeelanwar/DRLwithTL_real): 86★, deep RL.
  - [rkassana/tello-rl-yolo](https://github.com/rkassana/tello-rl-yolo): 83★, YOLO plus DDPG.
  - [crazysuryaa/Autonomous_Tello_Drone](https://github.com/crazysuryaa/Autonomous_Tello_Drone): 46★, "Yolov4 object detection, human body pose estimation, face detection and tracking… collision avoidance… Hand Gestured controlled".
  - [juanmapf97/Tello-Face-Recognition](https://github.com/juanmapf97/Tello-Face-Recognition): 45★.
  - [fvilmos/tello_object_tracking](https://github.com/fvilmos/tello_object_tracking): 31★.
  - [dp-betalock/DJITelloDrone-YOLOv8](https://github.com/dp-betalock/DJITelloDrone-YOLOv8): 19★.
  - [tentone/tello-ros2](https://github.com/tentone/tello-ros2): 215★, ROS2 plus visual SLAM.
- **YouTube Python/CV tutorials:**
  - Murtaza's Workshop "Drone Programming With Python Course | 3 Hours | Including x4 Projects | Computer Vision": **6,786,764 views** (5 yr) — [YouTube](https://www.youtube.com/watch?v=LmEcyQnfpDA). It is Tello-based according to the same channel's Tello titles; the course page itself was not opened.
  - ["Easy Programming of Tello Drone | Python OpenCV Object Tracking", 225,228](https://www.youtube.com/watch?v=vDOkUHNdmKs).
  - ["Drone Face Tracking PID using OpenCV Python | Tello", 47,658](https://www.youtube.com/watch?v=P2wl3N2JW9c).
  - RobotAndCode ["I create AI tracking drone using DJI Tello", 85,719](https://www.youtube.com/watch?v=rHY3T7-vK38).
  - Dennis Baldwin (DroneBlocks): ["Streaming Video from Tello and Tello EDU Drones with Python", 66,363](https://www.youtube.com/watch?v=kcXN7CYgQ0g) and ["Tello EDU Drone Swarming Tutorial… Python", 81,691](https://www.youtube.com/watch?v=cIsddY4SKgA).
  - Brandon Jacobson ["Controlling Tello Drone with Python – Installing djitellopy", 37,957](https://www.youtube.com/watch?v=28ruCrZplw0).
  - Jake's Science Shop: [streaming the forward camera with DJITelloPy and OpenCV, 5,392](https://www.youtube.com/watch?v=3JEz9hq1D2w) and [the bottom camera, 4,582](https://www.youtube.com/watch?v=JOZ9XoFDEYE).
- **RoboMaster TT.**
  - The [RoboMaster-SDK](https://github.com/dji-sdk/RoboMaster-SDK) (444★) Python SDK has 595 downloads a month — [pypistats](https://pypistats.org/api/packages/robomaster/recent).
  - TT YOLO repos are tiny: [NessajCN/djiRobomasterTT-yolov3](https://github.com/NessajCN/djiRobomasterTT-yolov3) 3★; [AyuDwi1996/Yolo-Object-Detection-in-Drone](https://github.com/AyuDwi1996/Yolo-Object-Detection-in-Drone) 3★.
  - A tello-python wrapper that supports "Tello, Tello EDU and RoboMaster TT" exists — [harleylara/tello-python](https://github.com/harleylara/tello-python).

#### Crazyflie (cflib, Flow deck, AI-deck)
- **cflib.** 6,426 downloads a month — [pypistats](https://pypistats.org/api/packages/cflib/recent). Its library repo has 930 forks — [GitHub](https://github.com/bitcraze/crazyflie-lib-python).
- **AI-deck.**
  - [aideck-gap8-examples](https://github.com/bitcraze/aideck-gap8-examples): 58★, 68 forks, 23 open, 19 contributors, last push 2026-10-01.
  - GitHub search "aideck" returns 61 repos, including unrelated "AiDeck" software ([search](https://github.com/search?q=aideck&type=repositories)).
  - Independent AI-deck repos are small: [jeguzzi/ai_sail](https://github.com/jeguzzi/ai_sail) image streamer (10★); [aideck_stream_publisher](https://github.com/migranram/aideck_stream_publisher) for ROS2 (5★); a Southeast University [gesture recognition on ai_deck](https://github.com/ShenghaoJia/srtp_aideck) (1★).
- **AI-deck videos:** [AI-deck FPV over WiFi, 6,387](https://www.youtube.com/watch?v=zLxYxvWMohQ); [AI-deck Workshop 1, 4,358](https://www.youtube.com/watch?v=o9asYPHxEB4); a [fully autonomous Crazyflie swarm talk, 1,564](https://www.youtube.com/watch?v=_8849CvWwqU).
- **Availability.** AI-deck 1.1 (US$240) and both AI bundles are **unavailable** in the Bitcraze store. Replacement color and mono camera modules (US$21) are in stock — [store feed](https://store.bitcraze.io/products.json).

#### LiteWing
- **Vendor demos (Python, all CircuitDigest):**
  - Gesture control with MediaPipe on a laptop webcam: [repo](https://github.com/Circuit-Digest/Litewing-hand-gesture-drone-control); [video, 33,214](https://www.youtube.com/watch?v=agdYFeAYITA).
  - "Object tracking… using OpenCV, Python, and a **ceiling-mounted webcam**": [repo](https://github.com/Circuit-Digest/Object-Tracking-Drone-using-LiteWing-); [video, 3,370](https://www.youtube.com/watch?v=RNTUjRI1Tc0).
  - Voice control with the Vosk engine: [repo](https://github.com/Circuit-Digest/LiteWing-Voice-Control-system-using-Python).
  - A beginner Python library: [LiteWing-Library](https://github.com/DhamuVkl/LiteWing-Library), 4★, not on PyPI.
- **Independent CV project.** "NEMESIS face-follow drone: LiteWing ESP32-S3 + ESP32-CAM + Flask dashboard" (0★) adds its own camera — [bsil-co/nemesis-drone](https://github.com/bsil-co/nemesis-drone). Other independent LiteWing repos (hand control, autonomous UAVs, swarm) all have 0★ — [GitHub search](https://github.com/search?q=litewing&type=repositories).

#### CoDrone EDU
- **Python library.** [codrone-edu](https://pypi.org/project/codrone-edu/), with 599 downloads a month.
- **Independent AI repos:** [AlbertY123/codrone-AI-control](https://github.com/AlbertY123/codrone-AI-control) (2★) and [BobbyBezos/AI-CoDrone-Hand-Gesture-Controller](https://github.com/BobbyBezos/AI-CoDrone-Hand-Gesture-Controller) ("Using MediaPipe and Cv2 to detect hand gesture to control a drone", 2★).
- **Camera model.** CoDrone EDU Plus will add cameras and computer-vision lessons when it ships in the 2026-27 school year — [Robolink Plus](https://www.robolink.com/plus).

#### Pluto, StampFly, Flix, ESP-FLY, ESP-Drone
- **Pluto.**
  - [plutocontrol](https://github.com/DronaAviation/plutocontrol): 2★, 28 downloads a month.
  - The Inter IIT teams' Python work used ArUco and overhead cameras, e.g. [IIT Bhubaneswar](https://github.com/AiR-IITBBS/DronaAviation-InterIIT-TM-11.0) (topics "aruco-marker-detection", "pid-controller") and [Pluto-1.2-Autonomous-control](https://github.com/priyanshusingh302/Pluto-1.2-Autonomous-control) (topic "opencv").
  - One Play reviewer mentions starting a project with "the PlutoX camera" — [Google Play IN](https://play.google.com/store/apps/details?id=com.drona.controller&hl=en_IN&gl=IN).
- **StampFly.** No CV repos were found among the 44 StampFly repos. The ecosystem focuses on control engineering, e.g. [stampfly-eskf-estimator](https://github.com/kouhei1970/stampfly-eskf-estimator) and [stampfly_mpc](https://github.com/kokoroA/stampfly_mpc). A single camera-integration repo, ["camera-and-fly" (Atom Cam 1 + StampFly)](https://github.com/f4ah6o/camera-and-fly), has 0★.
- **Flix.**
  - The pyflix library has 49 downloads a month.
  - The author's [position-control demo](https://www.youtube.com/watch?v=369Xowm4HcU) has 347 views. RoboCamp position hold used an overhead camera (earlier notes, [user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)).
  - An ESP32-S3-CAM user build is listed in the user gallery (earlier notes).
- **ESP-FLY.** It has only an optional analog 5.8 GHz FPV camera, which needs a 5.8 GHz receiver to reach a PC — [README](https://raw.githubusercontent.com/Seeed-Projects/Co-Create_ESP-FLY/main/README.md).
- **ESP-Drone.** No CV examples found.

### Inferences
- **Rough scale of independent material:**
  - Tello: hundreds of repos and dozens of tutorials with 10k–7M views each.
  - Crazyflie: dozens of AI-deck or vision repos, and tutorials with thousands of views.
  - LiteWing, CoDrone EDU and RoboMaster TT: fewer than 10 independent CV repos each, nearly all with 0–3★.
  - Pluto, StampFly, Flix, ESP-FLY and ESP-Drone: essentially none.
- **Platforms matching the user's "camera live view + feed for laptop Python AI".**
  - Only the Tello family (onboard camera streamed over Wi-Fi to djitellopy/OpenCV) does this out of the box with a big example base.
  - Crazyflie + AI-deck can stream images, but the board is out of stock.
  - CoDrone EDU Plus may do it from the 2026-27 school year.
  - LiteWing, ESP-FLY, StampFly, Pluto and Flix would need a camera added (e.g. an ESP32-CAM, as one independent LiteWing builder did) or an external webcam (as CircuitDigest's demos do).

### Gaps
- YouTube does not expose total video counts per topic, so tutorial counts are estimates from the top 20 search results.
- GitHub's "Used by" (dependents) counts for djitellopy and cflib could not be read, because github.com HTML is blocked.
- The Murtaza course's drone was not confirmed from its own page. It is inferred from the channel's other Tello titles.

## 3. Reliability reports: what do independent users say about flight stability, app/firmware bugs and support responsiveness?

### Takeaway
- **LiteWing.** It has the most visible hardware and QC complaints relative to its user base: motors cutting out, a badly soldered IMU, a positioning module not detected, Wi-Fi errors, and "stability and other script related bugs". Vendor replies on its wiki are fast when they happen.
- **Crazyflie.** Complaints centre on the Android app (crashes after phone updates, BLE timeouts) rather than the airframe.
- **Tello.** The users' main problem in 2026 is app availability: the official Android app is gone, and they rely on third-party apps.
- **ESP-Drone.** Has a public "I don't recommend the basic model" verdict.
- **Little or no independent reliability evidence was found** for CoDrone EDU, ESP-FLY, StampFly or Pluto.

### Cited Findings

#### LiteWing
- **Wiki comments (2026)** — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/):
  - "Wifi error problem ESP 32 litewing drone" (Feb 23).
  - One motor "stopping immediately within 5 seconds" (Mar 14). The admin replied the same day: "you might have damaged your MOSFET on A2 – IRLML6344TRPBF".
  - "motors and everything is ok, but it is not flying" (May 7).
  - "You shipped your drone with motors that have Red and Blue wires, and WHITE and RED wires" (May 18).
  - "its so bad it did not work" (May 26).
  - "LiteWing V1.2 Positioning Module Not Detected" (Jun 14).
  - "my MPU6050 is failing self test… the mpu6050 was not soldered properly, after checking the soldering carefully I got it working" (Jul 2–3).
  - "motor to the left of battery connector… spins on boot but cuts under load, bought the prebuilt off Amazon, is there a fix… or any way to get it replaced?" (Jul 8).
  - "The iBOM is not available"; "why version 3's gerber files aren't available?" (Jul 8).
- **Vendor responsiveness on the same page:**
  - Jan 18 question, admin answer Jan 20: "we have only tested PMW3901 with our drone and MS5611 is a work in progress".
  - Feb 5 report of a UART flow sensor spinning the motors, admin answer Feb 9: "The problem has been rectified in our latest firmware".
  - Mar 14: same-day reply.
  - In the comments parsed, no admin reply was visible to several May–July reports — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/).
- **Reddit:**
  - "I have found litewing matching best to my requirement but I'm having stability and other script related bugs on it" (r/diydrones, 2026-06-11) — [Reddit](https://reddit.com/r/diydrones/comments/1u2soht/diy_drone_controlled_by_laptoppc/).
  - Swapping to Betaflight "Took me a whole weekend… PID tuning especially" (r/esp32, 2026-03-02) — [Reddit](https://reddit.com/r/esp32/comments/1rilqov/swapped_my_litewing_esp32_drone_firmware_to/).
  - "both LiteWings have the same hardcoded IP address" when flying two drones from one laptop (r/diydrones, 2026-09-23) — [Reddit](https://reddit.com/r/diydrones/comments/1wnrf2e/drone_communication_issues/).
  - A user testing flight "without the Positioning Module" asks whether the flight "looks stable/normal" (2026-08-07) — [Reddit](https://reddit.com/r/u_ResolutionKey6215/comments/1vhru6o/litewing_esp32_drone_flight_without_positioning/).
- **App and store ratings.**
  - Play India 4.6★ from 11 reviews, including "software needs to update" (25 Apr 2026) — [Google Play IN](https://play.google.com/store/apps/details?id=com.litewing.controller&hl=en_IN&gl=IN).
  - Amazon US 3.3 out of 5 from 3 ratings — [Amazon](https://www.amazon.com/dp/B0GNN1MGC7).
- **Connection guidance.** CircuitDigest's own guide says some Android phones cannot connect while mobile data is on (earlier notes, [flight guide](https://circuitdigest.com/articles/start-flying-with-litewing)).

#### ESP-Drone and ESP-FLY
- **ESP-Drone.**
  - That Project: "I failed it. I don't recommend the basic model of ESP-Drone." (14,483 views) — [YouTube](https://www.youtube.com/watch?v=SXpK2IH-JWE).
  - 34 open issues/PRs and "limited support" since Dec 2022 — [GitHub](https://github.com/espressif/esp-drone).
  - Users reported "Error 502" downloading the Android app (earlier notes, [esp32.com](https://esp32.com/viewtopic.php?p=155487)).
- **ESP-FLY.**
  - Seeed shows 4 reviews averaging 4.75 — [Seeed](https://www.seeedstudio.com/ESP-FLY-co-create-p-6744.html).
  - No independent flight-reliability reports were found. The MakerWorld remix comments are modification requests, not flight reports (earlier notes).

#### Crazyflie
- **Android client reviews (India storefront, 3.8★ from 108 reviews)** — [Google Play IN](https://play.google.com/store/apps/details?id=se.bitcraze.crazyfliecontrol2&hl=en_IN&gl=IN):
  - "something broke after my phone updated and now the app crashes immediately. (s22+)" (16 Apr 2025).
  - "my Moto g(8) plus refuses to connect (BLE connection timeout)" (Jun 2023).
  - "There is no stability in crazyflie while controlling with Android phone" (2019).
- **iOS app.** Averages 2.67 from 6 US ratings — [App Store](https://apps.apple.com/app/id946151480).
- **Reddit.** Recent posts are setup questions rather than failure reports, e.g. "PX4 With CrazyFlie" for the 2.1 Brushless (2026-04-01) and a Bolt firmware-flashing problem (2026-07-10) — [r/CrazyFlie](https://reddit.com/r/CrazyFlie/comments/1s95h6u/px4_with_crazyflie/); [r/embedded](https://reddit.com/r/embedded/comments/1usm1nm/not_able_to_flash_my_new_firmware_on_to_my/).
- **Support channels.** The forum is read-only; new threads go to Bitcraze's discussions page — [forum.bitcraze.io](https://forum.bitcraze.io/). The firmware repo has 79 open issues/PRs, with a push on 2026-10-02 — [GitHub](https://github.com/bitcraze/crazyflie-firmware).

#### Tello / Tello EDU / RoboMaster TT
- **App availability and quality:**
  - TelloFPV reviews: "The official Tello app crashes on my phone, so I started searching for alternatives" (2019), and "still works really well, where the native app has vanished for good" (Aug 23 2026) — [Google Play](https://play.google.com/store/apps/details?id=com.volatello.tellofpv).
  - The iOS TELLO app averages 3.32 from 798 US ratings — [App Store](https://apps.apple.com/app/id1330559633).
- **DroneBlocks app (2.2★, 414 reviews)** — [Google Play](https://play.google.com/store/apps/details?id=com.unmannedairlines.droneblocks):
  - "If it could connect to my Tello Talent it would be an amazing app. I spent hours trying to make the app connect to TT" (Apr 2022).
  - "it doesn't have the camera option" (2018).
- **Maintenance:**
  - The djitellopy repo was last pushed 2025-01-27, with 43 open issues/PRs — [GitHub](https://github.com/damiafuentes/DJITelloPy).
  - The RoboMaster iOS app has not been updated since 2021-02-05 — [App Store](https://apps.apple.com/app/id1449678340).
  - DroneBlocks still promised Tello support in Feb 2024 — [DroneBlocks](https://community.droneblocks.io/t/dji-tello-discontinuation-new-crazyflie-micro-drones/1265).

#### Pluto, StampFly, CoDrone EDU, Flix
- **Pluto.**
  - India Play reviews (4.3★ from 315) are positive. Example: "I read a lot of reviews about this app and was contemplating whether it would connect to the WiFi hotspot properly… I was able to take off the drone in the first attempt" (Oct 2020) — [Google Play IN](https://play.google.com/store/apps/details?id=com.drona.controller&hl=en_IN&gl=IN).
  - The AU storefront shows 1.7★ (few ratings) — [Google Play AU](https://play.google.com/store/apps/details?id=com.drona.controller).
- **StampFly.**
  - One Reddit report, "StampFly element missing" (2025-06-16) — [r/M5Stack](https://reddit.com/r/M5Stack/comments/1lczu9r/stampfly_element_missing/).
  - The original model is now EOL — [M5Stack](https://shop.m5stack.com/products/m5stamp-fly-with-m5stamps3).
- **CoDrone EDU.** No independent reliability reports were found. Its Reddit footprint is dominated by company posts — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=codrone&size=100).
- **Flix.** The author's warning: "it's not easy to assemble and set up… no guarantee that it will work perfectly, or even work at all" (earlier notes, [README](https://github.com/okalachev/flix)). It has only 2 open issues (2026-10-05).

### Inferences
- **LiteWing.** Several "arrived dead or weak" style reports (motor cut-out under load, IMU solder fault, MOSFET) appear among about 30 comments from a user base in the low thousands. That suggests non-trivial QC variance for an assembled "ready-to-fly" unit. Fixing it often needs soldering-level diagnosis, which conflicts with the user's "minimal tinkering for basic flight".
- **Tello.** The hardware has a good legacy reputation, but in 2026 an Android-only Sydney user would depend on paid third-party apps (TelloFPV) or a sideloaded official APK. Firmware updates normally go through the official app, which this inference ties to the removal; the update path itself was not verified.
- **Crazyflie.** The phone-app experience is the weak point (3.8★ Android, 2.67★ iOS). The core firmware and Python stack are actively maintained.

### Gaps
- No independent, quantified failure rates (returns, DOA percentages) exist for any platform.
- Response times of Bitcraze, Robolink, Drona and Seeed support could not be measured. Their forums and help desks were not readable or have moved to GitHub Discussions.
- App Store review RSS feeds returned no entries, so iOS review texts were not available.

## 4. Why are there no 3D-printable LiteWing models, and how large is LiteWing's user base?

### Takeaway
LiteWing has no printable models for three reasons:
- **By design**, the 100×100 mm FR4 PCB *is* the airframe, so there is no frame to print. Add-ons such as the positioning module are PCBs that solder to pads.
- **Its user base is small**: 163 Kickstarter backers in 2024, about 4.1k Android app installs, 3 Amazon US ratings, about 120k total YouTube views (almost all vendor-made) and 14 Reddit threads.
- **It is sold mainly from India**: Tindie (Jaipur) and Indian electronics retailers, with no Australian retailer and no AliExpress listing. Few makers own one, and the ones who do have no structural part to replace with a print.

### Cited Findings

#### Design: the PCB is the frame
- CircuitDigest's original build article: "All-in-one PCB… Doesn't need any 3D printed parts" (earlier notes) — [Circuit Digest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone).
- CNX (Apr 2024): the PCB is the chassis, "eliminating need for 3D-printed parts" — [CNX](https://www.cnx-software.com/2024/04/02/low-cost-diy-esp32-drone-12-dollars/).
- Hackaday (Mar 2024) on the precursor: "not even a 3D printer is needed" (earlier notes) — [Hackaday](https://hackaday.com/2024/03/31/esp-drone-building-an-esp32-based-quadcopter-for-not-much-cash/).
- Current spec: "Custom FR4 PCB frame", 100×100 mm, ~45 g without battery (earlier notes) — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/).
- Optional sensors mount on "SMD solder pads on the bottom of the LiteWing PCB"; "When using these solder pads, the battery may need to be mounted on top" — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/).
- A Tindie listing exists for a "LiteWing PCB bareboard frame" from a different seller (bits4bots). The page was not opened, so its contents are unverified — [Tindie](https://www.tindie.com/products/bits4bots/litewing-pcb-bareboard-frame-for-drone/).
- An owner on the trade-off: "There is an open source project (Gerber files and all) called LiteWing where the frame is the PCB. I bought ten of them from India. It sounds nice but… if the frame breaks the whole bird is roasted" (r/diydrones, 2026-03-18) — [Reddit comment](https://reddit.com/r/diydrones/comments/1rwqt8k/programmable_custom_pcb_drone/ob4cg8n/).

#### Repository evidence (2026-10-06)
- **MakerWorld:** 0 designs with "litewing" in the title among the first 200 results. The fuzzy search returns unrelated gliders — [Bambu API](https://api.bambulab.com/v1/search-service/select/design2?keyword=litewing&limit=50). The earlier sweep (2026-10-05) also found none.
- **Printables:** `searchPrints2("litewing")` returned 102 fuzzy matches, none with LiteWing in the name — [Printables GraphQL](https://api.printables.com/graphql/).
- **Thingiverse and Cults3D:** blocked (401/403), not verified.
- **Contrast with other ESP32 designs:**
  - ESP-FLY: separate flight-controller PCB plus a printed 50 mm frame; it has a free MakerWorld remix (423 DL, 139 prints) — [MakerWorld](https://makerworld.com/en/models/1530477-esp-fly-frame-drone-housing).
  - "DIY Drone Frame & Remote": 1,200 DL — [MakerWorld](https://makerworld.com/en/models/1211264-diy-drone-frame-remote).
  - Flix ships its frame STL/STEP in its repo (earlier notes).

#### User-base quantification
- **Kickstarter (Sep 17 – Nov 11, 2024).** Kicktraq gives the dates without a year; 2024 comes from CircuitDigest's r/diydrones launch post of 2024-09-19 ([Reddit](https://reddit.com/r/diydrones/comments/1fke52d/diy_wificontrolled_mini_drone_open_source_perfect/)). 163 backers, average pledge $100, $16,253 pledged against a $7,500 goal (216%) — [Kicktraq](https://www.kicktraq.com/projects/2130557124/litewing-a-fun-diy-wifi-mini-drone-based-on-esp32/). CNX had noted that the campaign's "success is currently limited probably because you can find similar ESP32 drones on Aliexpress for about $40" — [CNX](https://www.cnx-software.com/2024/04/02/low-cost-diy-esp32-drone-12-dollars/).
- **Android app.** 4,093 installs since its Jul 20 2025 release, but the app also targets "other ESP32/Crazyflie based Drones" — [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller).
- **iOS app.** Not found in the US/AU/GB/IN App Stores — [iTunes lookup](https://itunes.apple.com/lookup?id=6751232172&country=us).
- **Amazon US.** 3 ratings (3.3★); Best Sellers Rank #372,432 in Toys & Games and #1,287 in Hobby RC Quadcopters & Multirotors — [Amazon](https://www.amazon.com/dp/B0GNN1MGC7). The product did not appear in an Amazon search for "litewing drone" — [Amazon search](https://www.amazon.com/s?k=litewing+drone).
- **Tindie stock.** "Only 8 left" on 2026-10-06, versus "Only 9 left" on 2026-10-05 (earlier notes) — [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/). A Reddit user reported LiteWing "currently out of stock" on 2025-12-25 — [Reddit](https://reddit.com/r/diydrones/comments/1pv4y1v/looking_for_an_aio_esp32_drone_kit_alternative_to/).
- **GitHub.** Main repos have 87★ and 54★ with 3 contributors each, all vendor. About 19 independent LiteWing-related repos exist, all with 0★ — [GitHub search](https://github.com/search?q=litewing&type=repositories).
- **YouTube.** About 120k total views across 11 LiteWing-titled videos. Circuit Digest's 8 videos account for 117,831. The only other LiteWing channel has 2,102 views across 2 uploads, and the remaining 42-view video is about an unrelated product — [search](https://www.youtube.com/results?search_query=litewing+drone&sp=CAMSAhAB).
- **Reddit.** 14 relevant submissions and 12 comments in 2024–2026 — [Pullpush](https://api.pullpush.io/reddit/search/submission/?q=litewing&size=100).
- **Wiki.** 31 comments on the main wiki page — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/).
- **No PyPI package** under litewing, litewing-library, litewinglib, litewing-python or litewing_library (all 404) — [PyPI](https://pypi.org/pypi/litewing/json).

#### Region of sale
- **India-based sellers.**
  - Tindie seller "semicon_lab" is in Jaipur, India, and ships by India Post (earlier AU-price notes) — [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/).
  - Elecrow's seller is "SemiconLab India" (earlier notes) — [Elecrow](https://www.elecrow.com/litewing-esp32-based-programmable-drone.html).
  - Other listed sellers are Indian retailers: Quartz Components, Robu.in and RoboCraze (earlier notes) — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/).
  - A wiki commenter asks "Where to buy LiteWing V3.0 in India?" (Jul 18 2026) — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/).
- **Australia.** Core Electronics, Pakronics and Little Bird return no LiteWing listing, and AliExpress has none (earlier AU-price notes, 2026-10-05) — [Core search](https://core-electronics.com.au/search/litewing.md); [Pakronics](https://www.pakronics.com.au/search/suggest.json?q=litewing&resources%5Btype%5D=product).
- **CircuitDigest itself.** It describes itself as running "India's largest online community for electronics engineers" from Coimbatore (r/Coimbatore comment, 2025-01-01) — [Reddit](https://reddit.com/r/Coimbatore/comments/1hqhkq4/if_you_run_a_business_in_coimbatore_no_matter/m4ufbrg/).

### Inferences
- **Owner estimate.** LiteWing's real owner base is probably in the **low thousands at most**. The 163 backers are a floor for early adopters. The 4,093 Android installs are an upper-bound proxy that also includes people flying ESP-Drone or other Crazyflie-protocol drones with the app, and repeat installs. Amazon and Tindie volumes look small. This is an inference: no sales total is published.
- **Why no prints.** The no-printables outcome is mainly structural. Printing a LiteWing frame would mean moving the electronics to a separate board, which is the ESP-FLY or Flix approach. The small, India-centred buyer base explains why even accessories (prop guards, battery cradles, camera mounts) have not appeared.
- **For this user.** A LiteWing cannot meet "as much of it 3D-printed as is normal" without redesign. Spare-frame cost equals a new PCB (or a whole new drone), and crashes risk the whole board.

### Gaps
- Exact LiteWing unit sales (Tindie and Elecrow order counts) are not public: the Tindie store page returned 403 and no sales counter was shown.
- Kickstarter's own page was blocked (403). Backer figures come from Kicktraq's tracker.
- The iOS app's history (when and why it disappeared) could not be determined.
- Thingiverse and Cults3D could not be checked for LiteWing accessories.
