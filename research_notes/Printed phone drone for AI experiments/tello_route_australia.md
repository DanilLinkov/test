# Tello route in Australia (Tello / Tello EDU / RoboMaster TT) vs a DIY printed drone, for phone flying plus Python AI (status 6 Oct 2026)

Method and source-access notes for the report writer:
- All pages were read on **6 Oct 2026** unless a different date is shown.
- Shop stock was read from the stores' own Shopify data (`.js` / `products.json`), which is more reliable than the page summaries. Pakronics' JSON prices **exclude GST**. I multiplied them by 1.1, which reproduces the inc-GST prices shown on its pages (e.g., 197.00 → A$216.70).
- **Blocked:** eBay AU (403 on every search, sold-listing and browse URL), Gumtree (403), BuyWisely (403), Core Electronics (403), Business Wire (403), and the RoboMaster TT spec page and TT manual (empty / 403). Facebook Marketplace was not attempted because it needs a login.
- Prices for eBay and Gumtree therefore come from **search-engine summaries**. They are labelled "(search summary)" and have no listing dates unless stated.
- The GitHub REST API was refused by the session proxy. Stars and push dates come from the GitHub search API (via the GitHub MCP tool) on 6 Oct 2026.
- Facts marked "(prior notes)" were researched on 5 Oct 2026 in `research_notes/3D printed phone drones Sydney prices/` and `research_notes/3D printed phone controlled drones/`. They are cited here with those notes' original URLs.

---

## 1. Availability and prices in Australia (new stock, secondhand, batteries, props, guards)

### Takeaway
The Tello family is discontinued, but new stock has not completely gone in Australia:
- **JB Hi-Fi:** its store data on 6 Oct 2026 lists the **Ryze Tello Boost Combo** (Tello, 3 batteries, charging hub) **new at A$214**. The data says "InStock", click & collect is "LimitedStock", and 82 store IDs are flagged as holding stock. The rendered page, however, says "Availability: Not available", so phone a Sydney store before relying on it.
- **Pakronics** (education reseller) lists the Tello EDU at A$216.70 and the RoboMaster TT starter pack at A$477.68, but marks both **unavailable**.
- **Secondhand:** Sydney/NSW Gumtree asks were about **A$49–260**, and eBay AU asks for used units about A$62 (auction) to about A$299. Both come from search summaries.
- **Spares:** official batteries are the weak point. They are out at Pakronics and gone from JB. Mwave (A$26.95) and D1 (A$29) still list them, but stock was not verified.

### Cited Findings
**New stock (6 Oct 2026)**
- **JB Hi-Fi, Ryze Tello Drone Boost Combo (White): A$214.00**
  - Shopify data: `available: true`, `published_at` 2026-08-04 (product created 2018-10-25), SKU 844779 — [JB Hi-Fi product JSON](https://www.jbhifi.com.au/products/ryze-tello-drone-boost-combo-white.js)
  - The page's embedded data reads: schema.org `"availability": "https://schema.org/InStock"`; `"CanBuyOnline":true`, `"ClickNCollectStatus":"LimitedStock"`, `"CashNCarryStatus":"LimitedStock"`; `"InStockStoreIds"` lists **82 store IDs**; supplier "INGRAM MICRO - DJI" — [JB Hi-Fi product page](https://www.jbhifi.com.au/products/ryze-tello-drone-boost-combo-white)
  - **Conflict:** the same page's static "Availability" block says "Not available", and a WebFetch read of the page reported no delivery, click & collect or in-store option — [JB Hi-Fi product page](https://www.jbhifi.com.au/products/ryze-tello-drone-boost-combo-white)
  - Box contents: Tello (with props and guards), two pairs of spare props, three flight batteries and a charging hub ("39 minutes" total flight time). The listing wrongly says "weight class 250g and above"; the Tello is about 80 g — [JB Hi-Fi product page](https://www.jbhifi.com.au/products/ryze-tello-drone-boost-combo-white); [Ryze specs](https://www.ryzerobotics.com/tello/specs)
- JB's Tello battery page now returns 404 — [JB Hi-Fi battery URL](https://www.jbhifi.com.au/products/ryze-tech-flight-battery-for-tello-drone)
- **Pakronics `tello-edu` collection.** All items below are unavailable unless marked "available"; prices are inc. GST.

  | Item | Price | Stock |
  |---|---|---|
  | DJI Tello EDU | A$216.70 | unavailable |
  | Tello EDU starter pack | A$293.18 | unavailable |
  | DJI Robomaster Tello Talent (TT) starter pack | A$477.68 | unavailable |
  | Tello battery | A$20.90 | unavailable |
  | Tello propellers | A$9.85 | unavailable |
  | Tello propeller guards | A$11.32 | unavailable |
  | GameSir T1d controller | A$73.85 | unavailable |
  | Tello battery charging hub | A$26.00 | **available** |
  | RoboMaster TT All-Protection Propeller Guard | A$36.93 | **available** |

  Sources: [Pakronics collection JSON](https://www.pakronics.com.au/collections/tello-edu/products.json); [Pakronics collection page](https://www.pakronics.com.au/collections/tello-edu)
  - **Conflict:** a WebFetch summary of the rendered collection page said "In Stock" for the Tello EDU and the guards. The store JSON says `available: false`.
- **D1 Store** ("Australia's Home of DJI"): no Tello products appear in its current navigation or listings — [D1 Store Tello category](https://d1store.com.au/categories/tello-drone)
  - Search summaries still show a D1 Tello Boost Combo page at A$239 and a Tello battery at A$29, both undated — [D1 Boost Combo](https://d1store.com.au/products/tello-boost-combo); [D1 Tello battery](https://d1store.com.au/products/tello-battery)
- **Other spares**
  - Mwave lists the "DJI Tello PT1 Flight Battery" (1100 mAh, 3.8 V) at A$26.95, with A$8.95 standard shipping (search summary). The page's HTML contains both "In Stock" and "Sold out" strings, so stock is unresolved — [Mwave](https://www.mwave.com.au/products/dji-tello-pt1-flight-battery-ac80032)
  - Core Electronics has a "DJI Tello Battery Charging Hub" page. Stock and price were not readable (403) — [Core Electronics](https://core-electronics.com.au/dji-tello-battery-charging-hub.html)
- **Price-comparison aggregate:** "DJI Tello Drone" from A$75.00 to A$202.86 (search summary; undated; page 403) — [BuyWisely](https://buywisely.com.au/au/product/dji-tello-drone)
- **OzBargain deal history** (newest first):
  - 8 Oct 2024: DJI Tello A$64 + delivery at The Good Guys eBay (now out of stock)
  - 3 Dec 2022: Boost Combo A$162 at Catch
  - 2020–2021: deals between A$79 and A$169

  Source: [OzBargain DJI Tello product page](https://www.ozbargain.com.au/product/dji-tello)

**Secondhand (search summaries; listing dates mostly unknown)**
- **Gumtree, Sydney region:** a "DJI Tello Boost Combo" at Connells Point (listed 29/04/2023), and a "DJI Tello FPV Mini Drone" in Sydney City at A$199 — [Gumtree Sydney "dji tello"](https://www.gumtree.com.au/s-cameras/sydney/dji+tello/k0c18394l3003435)
- **Gumtree, wider NSW:** asks of A$49–260, e.g. Castle Hill (with extra batteries) A$140, Haberfield A$80, Schofields A$49 — [Gumtree "dji tello"](https://www.gumtree.com.au/s-cameras/dji+tello/k0c18394); [Gumtree "tello"](https://www.gumtree.com.au/s-tello/k0)
- **eBay AU:**
  - Pre-owned "Boost Fly More Combo" with 3 batteries: AU $198.91
  - Pre-owned Tello: AU $264.27
  - Used Tello: AU $62 (auction)
  - Other used and refurbished units: AU $149–299

  Sources: [eBay AU Tello category](https://www.ebay.com.au/b/DJI-Tello-Camera-Drones/179697/bn_7116600778); [eBay AU "tello drone"](https://www.ebay.com.au/shop/tello-drone?_nkw=tello+drone)
- **eBay AU, items described as new** (seller "yu-winst"): Tello EDU AU $137.73; RoboMaster TT "Tello Talent" AU $264.27 + AU $20 delivery — [eBay AU Tello EDU](https://www.ebay.com.au/p/21035685657); [eBay AU category](https://www.ebay.com.au/b/DJI-Tello-Camera-Drones/179697/bn_7116600778)
  - **Conflict:** another search summary attached the same AU $264.27 price to a *pre-owned* Tello. Treat both as unverified.
- **eBay AU listing titles also show** a refurbished Tello EDU, a "Tello Drone… additional Free Battery - Tested 100% Working", replacement Tello EDU propellers and a "DJI CP.PT.00000213.02 Tello Battery" — [refurb EDU](https://www.ebay.com.au/itm/304060016693); [Tello + battery](https://www.ebay.com.au/itm/365703682382); [props](https://www.ebay.com.au/itm/354859530608); [battery](https://www.ebay.com.au/itm/394859370934)

**Discontinuation background (prior notes)**
- DJI stopped selling the education line in China and the US (Dec 2023 – Jan 2024), saying it remained "available in the overseas market" with after-sales support — [DroneDJ, 4 Jan 2024](https://dronedj.com/2024/01/04/dji-education-drone-shutdown-us/)
- Wikipedia gives 2018–2024 as the production run — [Wikipedia: Ryze Tello](https://en.wikipedia.org/wiki/Ryze_Tello)

### Inferences
- **Best new-in-box option in Sydney today:** JB Hi-Fi's A$214 Boost Combo, if a nearby store really has one. It includes 3 batteries and a hub, worth about A$90 at the old Pakronics prices (3 × A$20.90 + A$26.00), and leaves about A$36 of the A$250 budget for the TelloFPV app and printing.
  - The 82 in-stock store IDs plus "LimitedStock" look like real but thin leftover stock.
  - The "Not available" text probably refers to home delivery (my reading).
  - Ask a store to confirm stock before travelling.
- **Secondhand fair price** (my estimate from the asks above): about A$50–100 for a bare Tello, and about A$120–200 for a combo with 3 batteries. Pay the upper end only for verified-good batteries.
- **Battery aging is the main risk of the used route.** Production ended in 2024, so every pack is at least about 2 years old. Inspect for swelling and prefer listings with several packs. The official supply is drying up, with Pakronics and JB both out.
- **Props and guards:** these are the easiest spares to cover by printing guards (Section 5) or by buying eBay replacement props. Official Tello props and guards are out of stock at Pakronics.

### Gaps
- No eBay AU **sold** prices could be read (403), so typical transaction prices are not confirmed. Facebook Marketplace is not accessible to automated fetching.
- Which of JB's 82 "in-stock" store IDs are Sydney stores is unknown, because JB's store-ID mapping was not available.
- The DJI AU online store's Tello status could not be read (JavaScript page). A Harvey Norman Tello listing did not surface in a domain-restricted search.
- No verified in-stock **third-party** Tello battery seller in Australia was found. The one third-party 1100 mAh pack that surfaced is from a New Zealand store — [SimPower NZ](https://www.simpower.co.nz/product/recreational/drones-robot-batteries/dji-tello-drones-battery-3-8v-1100mah-li-poly-djt100rx/)

---

## 2. Software status (phone apps, Tello SDK 1.3/2.0/3.0, Python libraries, OpenCV video, breakages)

### Takeaway
**Phone flying:** the official TELLO Android app is **no longer on Google Play**. Its Play URL returns 404 in both the AU and US stores, and DJI's download centre marks the app "stop updating" and offers only a sideload APK (the same link identified in 2022 as v1.6.0.1). The iOS app is still listed (v1.6.8, Sep 2024). The maintained Android route is the paid third-party **TelloFPV** (Play, updated 3 Jul 2026, 100K+ downloads, 4.3★). TelloFPV cannot update firmware.

**Python:** djitellopy is mature (1,482★) but quiet: last PyPI release in Jun 2023, last push in Jan 2025. Its video works with OpenCV, but naive capture builds up latency unless frames are dropped. TelloPy had a fresh PyPI release on 3 Oct 2026. DJI's own RoboMaster Python SDK only ships wheels for Python 3.6–3.8.

### Cited Findings
**Phone apps**
- **Official TELLO app on Google Play: 404 (not listed).** `play.google.com/store/apps/details?id=com.ryzerobotics.tello` returned HTTP 404 with `gl=AU` and `gl=US`. The `com.ryzerobotics.telloedu` ID also returned 404. As a control, TelloFPV's listing returned 200 with the same method — [Play URL (404)](https://play.google.com/store/apps/details?id=com.ryzerobotics.tello&hl=en&gl=AU); [TelloFPV (200)](https://play.google.com/store/apps/details?id=com.volatello.tellofpv&hl=en&gl=AU)
  - Context: DJI's own DJI Fly package (`dji.go.v5`) also returns 404 on Play. DJI's download centre offers it as APK V1.21.12, so DJI distributing Android apps outside Play is not Tello-specific — [DJI download centre](https://www.dji.com/downloads/djiapp/tello)
- **DJI download centre, "Tello App" entry:**
  - Fields: `"stop_updating":true`; the Google Play URL field is empty; APK link `service-adhoc.dji.com/download/app/android/ba88a046-6f7e-4cbb-a969-27851eb4bbf5`
  - Notes: "*Not available for Android tablets"; the tested-device list is 2016–2018 era (Samsung S7, Pixel 2 and similar)
  - The iOS link is App Store id1330559633

  Source: [DJI download centre: Tello App](https://www.dji.com/downloads/djiapp/tello)
- **TelloPilots history of the Android app:**
  - 26 Mar 2022: Play version 1.6.0.0 was "not compatible with Android 12". The fix was v1.6.0.1 from DJI's direct link, the same `ba88a046…` APK as above.
  - By late Aug 2022, 1.6.0.1 had stopped working on some devices. Ryze support handed some users a password-protected test build, v1.6.4 (24 Aug 2022).
  - TelloFPV "does not do Firmware Updates".

  Source: [TelloPilots: "Tello app will not open"](https://tellopilots.com/threads/tello-app-will-not-open.6317/)
- **Official iOS TELLO app (AU store):**
  - Version history: 1.6.8 on 05/09/2024 ("Some bugfix"); 1.6.7 on 08/07/2024 ("Adds support for iOS 16")
  - 3.7★ from 225 ratings; free; "Requires iOS 13.0 or later"; seller Shenzhen RYZE Tech

  Source: [App Store AU: TELLO](https://apps.apple.com/au/app/tello/id1330559633)
- A TelloPilots thread titled "Tello app crashes on iOS 18" exists; its content was not read — [TelloPilots](https://tellopilots.com/threads/tello-app-crashes-on-ios-18.6775/latest)
- **TelloFPV on Google Play** — [Google Play: TelloFPV](https://play.google.com/store/apps/details?id=com.volatello.tellofpv&hl=en&gl=AU):
  - Developer Volate!lo (Rainer Bischof, Germany). "$9.99 Buy" shown on the AU-store fetch. 4.3★ from 2.19K reviews, 100K+ downloads, "Updated on Jul 3, 2026"; what's new: "Fixed vGPS purchase process".
  - Features: FPV trainer mode, VR goggles, return-to-home and orbit autopilots, wired/wireless gamepads (PS3, SteelSeries, Taranis), GameSir T1d and Parrot Flypad, and an optional "vGPS" in-app purchase that "fuses the onboard VPS with the phone's GPS".
  - A free "Tello FPV Demo" app is offered to test compatibility first.
  - Listed known defect: "Android 10 broke bluetooth networking. Many devices just don't connect anymore."

**SDKs (official PDFs; text commands over Wi-Fi UDP)**
- **Tello SDK 1.3** (original Tello):
  - Commands go to 192.168.10.1 on UDP 8889. `streamon` starts video. `rc a b c d` sends "RC control via four channels".
  - "If Tello does not receive any command input for 15 seconds, it will land automatically."

  Source: [Tello SDK 1.3 PDF](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)
- **Tello SDK 2.0** (Tello EDU, V1.0 2018.11):
  - Video arrives on UDP 11111 after `streamon`.
  - Adds mission pads (`mon`/`moff`/`mdirection`; detection at 20 Hz on one camera, 10 Hz each when both are used) and `ap ssid pass` station mode (join a router).
  - State string includes pitch/roll/yaw, velocities, temperatures, `tof`, height, battery and baro.
  - Same 15 s auto-land rule.

  Source: [Tello SDK 2.0 User Guide](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf)
- **Tello SDK 3.0** (RoboMaster TT, V1.0 2021.04) adds:
  - `setfps` (30/15/5 fps), `setbitrate` (auto or 1–5 Mbps), `setresolution` (720P or 480P), and a `port` command to move the status/video ports
  - `wifisetchannel` and `multiwifi`
  - Commands for the open-source ESP32 controller (`[TELLO] …` / `EXT …`): top LED, 8×8 dot-matrix display, and `EXT tof?`, which returns distance in mm "8192 if the detection range is exceeded". "*Only factory firmware is supported"

  Source: [Tello SDK 3.0 User Guide (RoboMaster TT)](https://dl.djicdn.com/downloads/RoboMaster+TT/Tello_SDK_3.0_User_Guide_en.pdf)

**Python libraries**
- **djitellopy (DJITelloPy)**
  - Activity: 1,482★, 528 forks, 43 open issues, MIT licence, created Nov 2018, last push 2025-01-27 — [GitHub](https://github.com/damiafuentes/DJITelloPy)
  - PyPI: latest is 2.5.0 (2023-06-09); before that 2.4.0 (2021-09-05). Requires Python ≥3.6 with numpy, opencv-python, av and pillow — [PyPI djitellopy](https://pypi.org/project/djitellopy/)
  - README features: "implementation of all tello commands - easily retrieve a video stream - receive and parse state packets - control a swarm of drones". Examples include `manual-control-opencv.py`, mission pads and swarm.
  - README notes:
    - "If you are using the `streamon` command and the response is `Unknown command` means you have to update the Tello firmware. That can be done through the Tello app."
    - "Mission pad detection and navigation is only supported by the Tello EDU."
    - "Connecting to an existing wifi network is only supported by the Tello EDU."
    - "When connected to an existing wifi network video streaming is not available (TODO: needs confirmation with the new SDK3 `port` commands)"

    Source: [PyPI djitellopy README](https://pypi.org/project/djitellopy/)
- **TelloPy** (hanyazou; uses the low-level protocol): 720★. **PyPI 0.7.0 was released 2026-10-03**, the first release since 0.6.0 (2018-11-24). Repo last push 2026-10-03, default branch `develop-0.8.0` — [PyPI tellopy](https://pypi.org/project/tellopy/); [GitHub hanyazou/TelloPy](https://github.com/hanyazou/TelloPy)
- **dji-sdk/Tello-Python** (official samples): 1,454★, 70 open issues, last push 2023-12-29 — [GitHub](https://github.com/dji-sdk/Tello-Python)
- **RoboMaster SDK** (for the TT and RoboMaster robots): 444★, last push 2024-05-10 — [GitHub dji-sdk/RoboMaster-SDK](https://github.com/dji-sdk/RoboMaster-SDK)
  - Latest PyPI `robomaster` is 0.1.1.68 (2022-05-06). Its only files are cp36/cp37/cp38 wheels for manylinux x86_64 and win_amd64 — [PyPI robomaster](https://pypi.org/project/robomaster/)
- **ROS:** `clydemcqueen/tello_ros` is archived: "requires Foxy and Gazebo Classic -- both EOL" — [GitHub](https://github.com/clydemcqueen/tello_ros)

**Video into OpenCV, and latency**
- TelloPilots thread on latency:
  - 9 Oct 2023: `cv2.VideoCapture` on the UDP stream read frames in about 0.002 s for the first ~50 frames, then degraded to "0.035 second or more".
  - 13 Oct 2023: diagnosis that slow processing makes "the captured frame… held in a (growing buffer) and latency will continuously increase".
  - Working fixes: PyAV decoding while skipping stale frames, or a capture thread plus a queue that keeps only the latest frame.

  Source: [TelloPilots: few seconds latency with cv2 VideoCapture](https://tellopilots.com/threads/few-seconds-latency-with-cv2-videocapture.6621/)
- DJITelloPy issue #166 (23 Nov 2022) reports "very low fps" when displaying the stream; it was unresolved in the fetched view — [GitHub issue #166](https://github.com/damiafuentes/DJITelloPy/issues/166)

### Inferences
- **Android phone flying works, with a ~A$10 step:** buy TelloFPV after testing the free demo, or sideload DJI's APK. A Play-store install of the official app is no longer possible.
- **Firmware is the trap.** TelloFPV cannot update firmware, and djitellopy needs a recent firmware for `streamon`. A used Tello with old firmware may need the official app once:
  - the sideloaded APK (Android 12+ issues reported in 2022), or
  - the iOS app on a borrowed iPhone/iPad.

  Ask secondhand sellers whether the unit was updated and still pairs with the app.
- **Python stack choice:** djitellopy is the default for OpenCV work: `get_frame_read()` and `send_rc_control()`.
  - Its pip dependencies have no upper version pins. That suggests, but does not verify, that it installs on current Python.
  - Use a latest-frame thread, or djitellopy's own background reader, and drop stale frames. That keeps AI loops near real time.
  - TelloPy's Oct 2026 release suggests some revived maintenance, but its scale is unknown.
- **Network topology limits laptop work:**
  - The standard Tello is its own Wi-Fi access point, so the laptop loses internet while connected unless it has a second adapter or Ethernet.
  - EDU/TT station mode joins a router, but djitellopy says video is not available in that mode (possibly fixable with the SDK 3.0 `port` command).
- **RoboMaster TT:** the official RoboMaster Python SDK needs a Python 3.8 (or older) environment. Alternatively, djitellopy's text commands cover TT's flight functions, and TT's ESP32/LED/ToF features are reachable as raw `EXT` commands.

### Gaps
- No measured glass-to-glass video latency (ms) for Tello → laptop → OpenCV was found.
  - A search summary claimed djitellopy's background frame buffer "can be 3–4 seconds behind", but the fetched pages did not confirm that figure.
- The exact version behind DJI's current APK link (likely still 1.6.0.1) was not confirmed. Its behaviour on Android 14/15/16 is unknown, since no 2025–2026 report was found.
- The latest Tello, EDU and TT firmware version numbers were not found.
- Whether a phone app and a Python script can share one Tello session (e.g., phone for manual override) was not documented in the sources read.

---

## 3. Capabilities and fixed limits (weight, camera, VPS hold, flight time, range, wind, closed firmware)

### Takeaway
**Specs:**
- 80 g (87 g with guards), 3-inch props
- 5 MP stills; 720p30 video and live stream (82.6° FOV, EIS); the RoboMaster TT can also drop to 480p or lower fps and bitrate
- 13 min flight; 100 m range; 30 m height cap; 2.4 GHz Wi-Fi only

**Hold:** the Vision Positioning System (downward camera + "3D infrared module", plus a barometer) holds position well indoors over textured, well-lit floors (best 0.3–6 m). Over plain, shiny or dark surfaces, or in wind, it falls into ATTI mode and drifts. DJI itself limits outdoor flying to "windless conditions".

**Not present:** obstacle sensing. The RoboMaster TT adds a single forward ToF reading via its ESP32 add-on.

**Fixed:** firmware, tuning, camera and radio are closed. Everything happens through the SDK text commands or the low-level protocol.

### Cited Findings
- **Ryze spec page:**
  - "Weight: Approximately 80 g (Propellers and Battery Included)"; 98×92.5×41 mm; 3-inch props
  - "2.4 GHz 802.11n Wi-Fi"; "Range finder" and "Barometer"
  - Max flight distance 100 m; max speed 8 m/s; max flight time 13 min; max height 30 m
  - Photo 5 MP (2592×1936); video HD720P30; FOV 82.6°; EIS; battery 1.1 Ah / 3.8 V

  Source: [Ryze Tello specs](https://www.ryzerobotics.com/tello/specs)
- **Tello User Manual v1.4, specifications:**
  - Weight with guards 87 g; max 28.8 km/h; operating temperature 0–40 °C; 2.4–2.4835 GHz at 20 dBm (FCC) / 19 dBm (CE) EIRP
  - Flight time "13 minutes (0 wind at a consistent 9mph (15 kph))"
  - Battery: 1100 mAh, 3.8 V LiPo, 4.18 Wh, 25 g, about 1.5 h to charge
  - Firmware updates come through the Tello app

  Source: [Tello User Manual v1.4](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20User%20Manual%20v1.4.pdf)
- **Manual on the VPS:**
  - "camera and a 3D infrared module located on the underside"; it lets Tello "hover in place more precisely and fly indoors or outdoors in windless conditions"
  - "only effective when the aircraft is at altitudes of… 0.3 to 30 m and works best at… 0.3 to 6 m"
  - It may switch to Attitude mode over: monochrome, highly reflective or transparent surfaces; water; moving surfaces; "surfaces without clear patterns or texture"; "identical repeating patterns… (e.g. tiling)"; fine objects; extremely dark (<10 lux) or bright (>100,000 lux) surfaces; or when flying fast below 0.5–1 m
  - "very dark (< 100 lux)" environments may prevent recognition; "Be extra cautious when flying in dark (< 300 lux) or bright (> 10,000 lux) environments"

  Source: [Tello User Manual v1.4](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20User%20Manual%20v1.4.pdf)
- **Manual on ATTI mode and failsafes:**
  - "In Attitude mode the aircraft is not able to position itself… wind can result in horizontal shifting"
  - If the VPS fails for 3 s above 6 m, Failsafe lands the drone
  - "Failsafe Protection automatically initiates landing if the mobile device's signal is weak or is lost for 50 seconds, or the Tello app crashes"
  - Flight modes: Slow (9°, 10.8 km/h) and Fast (25°, 28.8 km/h)

  Source: [Tello User Manual v1.4](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20User%20Manual%20v1.4.pdf)
- **Reviews and user reports:**
  - T3 review: the VPS (IR sensor + downward camera) enables "precise hovering" up to about 10 m. Indoors it holds height and position "without exhibiting the drift issues" of similarly priced drones. Outdoors it is "hard to control even in the lightest breath of wind" and suits "the calmest of days" (search summary) — [T3 review](https://www.t3.com/reviews/ryze-tello-drone); [T3 AU](https://www.t3.com/au/reviews/ryze-tello-drone)
  - User reports: VPS works "up to about 30 feet"; handles "light winds (less than 12mph) in fast mode" (search summary; retailer-hosted reviews, low reliability) — [desertcart listing](https://www.desertcart.com.cy/products/58259045)
- **RoboMaster TT additions:**
  - An ESP32 open-source controller, 8×8 LED matrix and ToF sensor (Tello Talent, May 2021) — [Wikipedia: Ryze Tello](https://en.wikipedia.org/wiki/Ryze_Tello)
  - SDK 3.0 exposes the forward ToF as `EXT tof?` (mm; 8192 out of range), forward or downward mission-pad detection, and adjustable stream resolution, fps and bitrate — [Tello SDK 3.0](https://dl.djicdn.com/downloads/RoboMaster+TT/Tello_SDK_3.0_User_Guide_en.pdf)
- **Closed firmware:**
  - A community repo collects "Firmware images for hacking, reverse engineering, and teardown of the Ryze / DJI / Intel Movidius Tello" (81★) — [GitHub MrJabu/RyzeTelloFirmware](https://github.com/MrJabu/RyzeTelloFirmware)
  - The TT's ESP32 commands support "Only factory firmware" — [Tello SDK 3.0](https://dl.djicdn.com/downloads/RoboMaster+TT/Tello_SDK_3.0_User_Guide_en.pdf)
- **Fixed forward camera:** Printables has a "Tello Mirror Clip" (219 downloads) and a "Mirror mount for Ryze Tello". These are mirrors that redirect the fixed forward camera's view (e.g., downward) — [Printables 90020](https://www.printables.com/model/90020); [Printables 196510](https://www.printables.com/model/196510)

### Inferences
- **What you cannot change on a Tello:**
  - PID and flight tuning, the VPS algorithms, camera resolution and stream codec (beyond TT's 720p/480p, fps and bitrate settings), and the radio (2.4 GHz Wi-Fi only)
  - The airframe and motor layout. Printing a new body is not supported because tuning is fixed.
  - The 15 s no-command auto-land: the Python loop must send a command or keep-alive at least every 15 s
- **For AI experiments it is still a good sensor platform:**
  - A 720p30 stream to the laptop
  - About 10 Hz telemetry with attitude, velocities, ToF height and barometer
  - Velocity-style control through `rc`
  - Indoor hold that frees the code from stabilisation work

  The main weaknesses for vision work are a fixed forward camera (no tilt; mirror clips are the community workaround) and Wi-Fi latency.
- **Obstacle avoidance** has to be vision-based, e.g., monocular depth or object detection on the laptop. The only hardware ranging is the downward IR module and, on the TT, one forward ToF point.
- **Outdoors without GPS:** expect calm-day-only flying over textured ground such as grass. That matches the user's "indoor and outdoor" goal only partially.

### Gaps
- DJI/Ryze publish no wind-resistance figure, and no measured drift numbers for indoor VPS hold were found.
- No official payload rating was found. Community mounts exist (Section 5), but the safe added mass is undocumented.
- The RoboMaster TT spec page (weight with expansion kit, ToF range, Wi-Fi bands) returned no content, and the TT manual URLs gave 403. TT weight and forward-ToF range are therefore unconfirmed.

---

## 4. Size of the Python/AI ecosystem (repos, tutorials, courses)

### Takeaway
The Tello has the largest hobby and education Python-vision ecosystem of any small drone:
- A GitHub search for "tello" returns 5,994 repos (not all drone-related).
- The main library has about 1.5k stars.
- Well-known open projects cover face, object and pose tracking, gesture control, YOLO segmentation, deep-RL navigation, ROS2 visual SLAM mapping and swarms.
- Several courses use it, including a freeCodeCamp-style YouTube course with over 1.5M views.

Most flagship repos date from 2019–2023 and are no longer updated, but they remain the standard examples. New projects still list Tello as a target in 2026.

### Cited Findings
- **GitHub search "tello", sorted by stars: total_count 5,994.** It includes unrelated projects, e.g., a TV-show tracker named "Tello" — [GitHub search](https://github.com/search?q=tello&type=repositories&s=stars&o=desc)
- **Notable repositories** (stars as of 6 Oct 2026; push dates where checked):

  | Repo | Stars | What it is | Last push |
  |---|---|---|---|
  | [damiafuentes/DJITelloPy](https://github.com/damiafuentes/DJITelloPy) | 1,482 | Python library | 2025-01-27 |
  | [dji-sdk/Tello-Python](https://github.com/dji-sdk/Tello-Python) | 1,454 | Official samples | 2023-12-29 |
  | [hanyazou/TelloPy](https://github.com/hanyazou/TelloPy) | 720 | Python library | 2026-10-03 |
  | [kinivi/tello-gesture-control](https://github.com/kinivi/tello-gesture-control) | 343 | Hand-gesture control from the drone's own video, MediaPipe | 2023-08-29 |
  | [geaxgx/tello-openpose](https://github.com/geaxgx/tello-openpose) | 305 | Body-pose control | not checked |
  | [SpikeCalls/FlyDrones](https://github.com/SpikeCalls/FlyDrones) | 248 | "A fruit fly connectome as a drone pilot"; created 2026-09-15; topics include tello, crazyflie, ardupilot | not checked |
  | [tentone/tello-ros2](https://github.com/tentone/tello-ros2) | 215 | "ROS2 node for DJI Tello and Visual SLAM for mapping of indoor environments" | not checked |
  | [Jabrils/TelloTV](https://github.com/Jabrils/TelloTV) | 209 | AI implementation | not checked |
  | [TelloSDK/Multi-Tello-Formation](https://github.com/TelloSDK/Multi-Tello-Formation) | 198 | Swarm formation | not checked |
  | [tau-adl/Tello_ROS_ORBSLAM](https://github.com/tau-adl/Tello_ROS_ORBSLAM) | 195 | ORB-SLAM | not checked |
  | [dbaldwin/DroneBlocks-Tello-Python](https://github.com/dbaldwin/DroneBlocks-Tello-Python) | 153 | Course notebooks | not checked |
  | [murtazahassan/Tello-Object-Tracking](https://github.com/murtazahassan/Tello-Object-Tracking) | 117 | Object tracking | not checked |
  | [aqeelanwar/DRLwithTL_real](https://github.com/aqeelanwar/DRLwithTL_real) | 86 | "Deep Reinforcement Learning with Transfer Learning in a Real Environment using DJI Tello" | not checked |
  | [rkassana/tello-rl-yolo](https://github.com/rkassana/tello-rl-yolo) | 83 | "object tracking using object detection (YOLO) and reinforcement learning (DDPG)" | not checked |
  | [Matthias84/awesome-tello](https://github.com/Matthias84/awesome-tello) | 82 | Curated list | not checked |
  | [dronefreak/dji-tello-object-detection-segmentation](https://github.com/dronefreak/dji-tello-object-detection-segmentation) | 69 | "YOLOv8/Detectron2… autonomous tracking" | not checked |

  Push dates come from GitHub repository-search metadata read on 6 Oct 2026 — [GitHub search](https://github.com/search?q=tello&type=repositories&s=stars&o=desc)
- Other-language and platform bindings in the same search: Go ([SMerrony/tello](https://github.com/SMerrony/tello)), C# ([Kragrathea/TelloLib](https://github.com/Kragrathea/TelloLib)), Node-RED ([johnwalicki/Node-RED-Tello-Control](https://github.com/johnwalicki/Node-RED-Tello-Control)), Scratch 3 ([kebhr/scratch3-tello](https://github.com/kebhr/scratch3-tello)) and a ROS1 driver ([anqixu/tello_driver](https://github.com/anqixu/tello_driver)).
- **djitellopy's "in the media and in the wild" list:**
  - YouTube "Drone Programming With Python Course" (">1.5 Million views")
  - Make magazine (Germany) 2021, "KI steuert Follow-Me-Drohne"
  - A DroneBlocks "DJITelloPy Drone Coding" webinar
  - Universities and schools using it: Ball State University, TU Kaiserslautern, Sha Tin College (HK), University of São Paulo

  Source: [PyPI djitellopy README](https://pypi.org/project/djitellopy/)
- **Courses and tutorials found** (titles from search results):
  - A 3-hour Python drone programming course with 4 Tello projects (surveillance, face tracking, mapping, line following), credited to Murtaza's Workshop (search summary) — [Scribd copy of course notes](https://www.scribd.com/document/504099089/Drone-Programming-With-Python-Course)
  - DroneBlocks, "Advanced Tello Programming with Python 3 and OpenCV - Course 1/3" — [DroneBlocks](https://learn.droneblocks.io/courses/1104093)
  - Udemy, "Drone Programming with Python - Face Recognition & Tracking" — [Udemy](https://www.udemy.com/course/drone-programming-with-python-face-recognition-tracking/)
  - PyImageSearch, "Autonomous drones with computer vision and OpenCV" — [PyImageSearch](https://hcl.pyimagesearch.com/autonomous-drones-with-computer-vision-and-opencv)
- **DroneBlocks' 2024 position:** it advised against buying Tellos for new programmes after the discontinuation but kept supporting them (prior notes) — [DroneBlocks community, 7 Feb 2024](https://community.droneblocks.io/t/dji-tello-discontinuation-new-crazyflie-micro-drones/1265)

### Inferences
- **Ready-made AI projects:** for face tracking, object following, gesture control and swarms, the user can clone a working Tello project and start from it rather than from scratch. That is the "tinkering only on the AI part" the user wants.
- **Expect dependency drift:** flagship repos are 2–5 years old, so pinned TensorFlow, MediaPipe or YOLO versions will likely need updating. That is my expectation, not verified per repo.
- **Mapping:** the available paths are ROS2 / ORB-SLAM projects. One major ROS2 driver is archived on end-of-life ROS Foxy, so mapping is the most effort-heavy experiment.
- **Code portability:** the StampFly ecosystem firmware advertises a "Tello-SDK-compatible API" (prior notes; [stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem)). Tello-style command code could therefore later move to an open platform. This is speculative and untested.

### Gaps
- Push dates were checked for only 5 repos. Most "not checked" entries may be dormant.
- The number of YouTube tutorials and university courses could not be counted. No Australian course or university using Tello was found in this pass.

---

## 5. 3D-printable accessories (counts, examples) and whether people print replacement bodies

### Takeaway
Printable **accessories** are plentiful and still being published in 2026:
- **Printables:** 37 Tello-titled models. Top: "Tello drone propeller guard v3", 771 downloads.
- **MakerWorld:** about 11 Tello-specific designs. Top: "DJI Tello Protector", 229 downloads and 152 prints.
- **Thingiverse:** guards, a Raspberry Pi Zero mount, an Insta360 GO mount, a databot sensor mount, a general platform, and wall and holder mounts.

Printed **bodies** are rare: snap-on shells and a forum rebuild into a foldable chassis. With a Tello, printing stays at guards, mounts, payload hooks, cases and cosmetic shells, not the airframe.

### Cited Findings
- **Printables search "tello"** (API `searchPrints2`, 6 Oct 2026): `totalCount` 608 fuzzy hits, of which **37 have "Tello" in the title** — [Printables GraphQL API](https://api.printables.com/graphql/). Top by downloads:

  | Model | Downloads | Published |
  |---|---|---|
  | [Tello drone propeller guard v3](https://www.printables.com/model/275499) | 771 | Oct 2022 |
  | ["Helize dron dji tello"](https://www.printables.com/model/860218) (printed replacement propellers, "los dos tipos de hélices") | 395 | Apr 2024 |
  | [Tello Mirror Clip](https://www.printables.com/model/90020) | 219 | |
  | [Tello drone propeller guard](https://www.printables.com/model/826667) | 214 | |
  | [Tello Drone Case w/ Storage](https://www.printables.com/model/160192) | 193 | |
  | [Tello Ryze Drone Payload System](https://www.printables.com/model/479370) | 178 | |

  - The Payload System "Clips to the top of your Tello or Tello EDU drone to carry objects in a box or rounded bowl"; flips drop a ping-pong ball.
  - Other models: [Millennium Falcon prop guard](https://www.printables.com/model/796099), [Tello Drone Dock](https://www.printables.com/model/135587), [AirTag mount](https://www.printables.com/model/256680), [808 camera mount](https://www.printables.com/model/90023), [flash mount](https://www.printables.com/model/437304), [Ping Pong mount](https://www.printables.com/model/655028), [LED rigging](https://www.printables.com/model/186062), [bottom attachment plate](https://www.printables.com/model/1072186), and battery cases and caddies.
  - 2026 uploads:
    - [DJI Tello Prop Guard 2 Part](https://www.printables.com/model/1607385), Feb 2026: "Total Weight was 12 grams", uses micro zip ties
    - [round guard](https://www.printables.com/model/1727462), May 2026
    - [storage box](https://www.printables.com/model/1608100), Feb 2026
    - [battery connector](https://www.printables.com/model/1703659), Apr 2026
- **MakerWorld search** (Bambu API; 10 keyword variants, up to 300 results each): **11 Tello-specific designs** after removing false hits ("cartello", "Martello") — [MakerWorld search API](https://api.bambulab.com/v1/search-service/select/design2?keyword=tello&limit=50&offset=0)

  | Design | Downloads | Prints |
  |---|---|---|
  | [DJI Tello Protector](https://makerworld.com/en/models/1073603) | 229 | 152 |
  | [Ryze Tello Drone Stand](https://makerworld.com/en/models/1015869) | 99 | 80 |
  | [DJI Tello Underbelly Pouch](https://makerworld.com/en/models/1160762) | 60 | 38 |
  | [Carriage for DJI Tello Drone Package Transport](https://makerworld.com/en/models/99111) | 54 | |
  | [Propeller Case](https://makerworld.com/en/models/1152323) | 50 | |
  | [Flashlight Mount](https://makerworld.com/en/models/490830) | 43 | |
  | [DJI Tello Drone Landing Legs](https://makerworld.com/en/models/2721823) (Apr 2026) | 27 | 26 |
  | [DJI Tello Brush-Motor Replacement Support Part](https://makerworld.com/en/models/3033937) (Jul 2026) | 2 | |

- **Thingiverse** (search results; no count obtained):
  - [Ryze Tello Wall Mount](https://www.thingiverse.com/thing:3072783)
  - Prop guards: [3734203](https://www.thingiverse.com/thing:3734203), [4339771](https://www.thingiverse.com/thing:4339771), [3879247 "for easy printing"](https://www.thingiverse.com/thing:3879247)
  - [Prop Guard Holder](https://www.thingiverse.com/thing:2829520)
  - ["Tello general platform"](https://www.thingiverse.com/thing:6116970)
  - [databot sensor mount for Tello EDU and RoboMaster TT](https://www.thingiverse.com/thing:5422097)
  - [Raspberry Pi Zero Tello mount](https://www.thingiverse.com/thing:4022999)
  - [Insta360 GO belly mount](https://www.thingiverse.com/thing:4762233)
  - A user's [Tello collection](https://www.thingiverse.com/ramjetx/collections/tello)
- **Replacement bodies / shells (prior notes):**
  - A Lunar Excursion Module shell that "prints without supports" with a snap-on dish — [Printables 89990](https://www.printables.com/model/89990-tello-drone-lem-lunar-excursion-module)
  - A community rebuild of a Tello into a foldable chassis — [TelloPilots](https://tellopilots.com/threads/overvoltage-to-repeater-and-rebuilding-into-a-foldable-chassi.5074/)

### Inferences
- **Fit with the user's filaments:**
  - TPU 85A: bumpers and flexible guards
  - TPU 65D or PETG: stiffer guards and landing legs
  - PLA: mirror clips (downward-view hack for line following or landing-pad AI), payload hooks or bowls, a Pi Zero or sensor mount, cases and stands
- **Keep add-ons light.** The 2-part guard set alone is 12 g against an 80 g aircraft. Every gram costs flight time, and the closed tuning cannot adapt to a heavy or re-shaped body.
- **Printed props:** they exist (395 downloads) but are not recommended for a closed-tuning micro drone. Balance and stiffness matter, and spare official props are cheap. This is my safety judgement.
- **Compared with "as much printed as is normal":** on a Tello, roughly 0% of the flying structure is printed. On a DIY micro, the whole frame (and possibly ducts and guards) is printed. This is the honest cost of the Tello route.

### Gaps
- No Thingiverse total count: the search is JavaScript-rendered and the API needs a token.
- No source gives the Tello's payload limit, so whether a Pi Zero mount still flies acceptably is undocumented.

---

## 6. Similar off-the-shelf programmable camera drones sold in Australia (Tello replacements), with prices

### Takeaway
No product sold at Australian retail in Oct 2026 matches the Tello's combination of phone flying, a camera stream into Python, an official SDK and optical-flow hold, under A$250:
- **CoDrone EDU** (A$391.60 Pakronics; A$409 JB, in stock): Python-programmable, but **no camera** and flown with its own controller. The camera-equipped **CoDrone EDU Plus** was announced 24 Jun 2026, with no AU price found.
- **Crazyflie 2.1+** (A$482.75 Pakronics, in stock): open and Python-friendly. Hold and camera need extra decks (Flow deck about £64.50; AI deck about £160.60), so it costs several times more.
- **DJI Neo** (A$209 JB, in stock): phone-flown camera drone but **not programmable**.
- **StampFly** (A$129.95 Core, prior notes): open, with a "Tello-SDK-compatible API", but no camera and no phone app.

### Cited Findings
- **Robolink CoDrone EDU**
  - Pakronics: A$391.60 inc GST (356.00 ex), available. Starter kit A$444.21 inc GST, available. CoDrone Mini A$159.01, unavailable — [Pakronics CoDrone JSON](https://www.pakronics.com.au/collections/codrone-kits/products.json)
  - JB Hi-Fi: "Robolink CoDrone EDU" A$409.00, `available: true` (published 2026-03-11) — [JB Hi-Fi CoDrone EDU JSON](https://www.jbhifi.com.au/products/robolink-codrone-edu.js)
  - Robolink US: US$249, "Programming languages: Blockly and Python". The kit includes "1 Smart Controller" — [Robolink CoDrone EDU JSON](https://www.robolink.com/products/codrone-edu.js)
  - The standard CoDrone EDU "does not have a camera" (color sensors and front/bottom range sensors instead) (search summary) — [JB Hi-Fi listing](https://www.jbhifi.com.au/products/robolink-codrone-edu); [PAEC](https://www.paec.org/wp/paec-stem-innovation-hub/codrone/)
- **Robolink CoDrone EDU Plus**, announced 24 Jun 2026:
  - "front- and bottom-facing programmable cameras, object detection, and computer vision tools"
  - School-oriented camera security: encryption, no audio recording
  - Search summary; Business Wire returned 403 to a direct fetch. No price or AU availability found — [Business Wire](https://secure.businesswire.com/news/home/20260624416332/en/Robolink-Introduces-CoDrone-EDU-Plus-The-Drone-That-Helps-Students-See-Whats-Possible-in-STEM); [Rutland Herald syndication](https://www.rutlandherald.com/news/business/robolink-introduces-codrone-edu-plus-the-drone-that-helps-students-see-whats-possible-in-stem/article_f5b37108-e032-5fed-bc51-102ec1cd7a25.html)
- **Bitcraze Crazyflie 2.1+**
  - Pakronics: A$482.75 inc GST (438.86 ex), `available: true` (published 2026-08-17) — [Pakronics Crazyflie 2.1+ JSON](https://www.pakronics.com.au/products/crazyflie-2-1-version-open-source-mirco-quadcopter-drone-support-bluetooth5-le-robotics-suitable-for-indoor-small-space-high-density-ss114993295-1.js)
  - Add-on decks (UK and Canada prices, search summary): AI deck (GAP8 + ESP32 Wi-Fi) £160.60; Flow deck v2 £64.50; "AI Bundle - Crazyflie 2.1+" CA$825.71 — [RobotShop UK](https://uk.robotshop.com/products/crazyflie-21-brushless-version-open-source-micro-quadcopter-drone); [RobotShop CA AI bundle](https://ca.robotshop.com/products/bitcraze-ai-bundle-crazyflie-21)
  - DroneBlocks' site menu calls Crazyflie "the Tello successor" — [DroneBlocks blog](https://droneblocks.io/dji-neo-a-compact-powerhouse-but-what-about-programmability/)
  - The Crazyflie Android client flies by touchscreen or gamepad (prior notes) — [Bitcraze docs](https://www.bitcraze.io/documentation/repository/crazyflie-android-client/master/userguides/user-instructions/)
- **DJI Neo**
  - JB Hi-Fi: A$209.00, `available: true` — [JB Hi-Fi DJI Neo JSON](https://www.jbhifi.com.au/products/dji-neo-drone.js)
  - "DJI Neo is not programmable—unlike some of the programmable drones" (DroneBlocks, 8 Oct 2024) — [DroneBlocks](https://droneblocks.io/dji-neo-a-compact-powerhouse-but-what-about-programmability/)
- **M5Stack StampFly** (prior notes):
  - AU$129.95 at Core Electronics — [Core Electronics](https://core-electronics.com.au/m5stamp-fly-programmable-open-source-quadcopter-kit.html)
  - 2026 ecosystem firmware with ALT_HOLD/POS_HOLD and a "Tello-SDK-compatible API"; no official phone app — [stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem)
- **RoboMaster TT:** no AU new stock found (the Pakronics TT starter pack is unavailable; Section 1). eBay AU "new" claims are about A$264 + A$20 delivery (search summary, unverified) — [eBay AU category](https://www.ebay.com.au/b/DJI-Tello-Camera-Drones/179697/bn_7116600778)
- **Elsewhere (prior notes):** Pluto X (India; ₹14,000–20,000; phone app updated 2026) — [dronaaviation.com/plutox](https://www.dronaaviation.com/plutox). Parrot minidrones are gone — [parrot.com/en/drones](https://www.parrot.com/en/drones)

### Inferences
- Within A$250, the only "programmable camera drone with phone app and hold" choices are:
  - a leftover or used Tello-family drone, or
  - a DIY ESP32 build (Section 8).
- **Crazyflie** is the closest open, maintained "Tello successor", but the AI-capable configuration (Crazyflie + Flow deck + AI deck) costs roughly A$480 + A$130 + A$320. The deck figures are my rough conversion of the UK prices at about A$2 per £1, not AU quotes. Treat the total as about A$900+, well over budget. Its camera is the AI deck's small sensor; resolution was not verified here.
- **DJI Neo-class selfie drones** fly better outdoors but give no Python access.

### Gaps
- No Australian price or availability was found for the CoDrone EDU Plus, and no AU price for the Crazyflie AI deck or Flow deck (Pakronics' Bitcraze collection JSON was empty).
- Other phone-flown camera drones (HoverAir, Holy Stone and similar) were not price-checked, because none has an official programming SDK.

---

## 7. Australian rules relevance (weight class and anything specific)

### Takeaway
At 80 g (87 g with guards), a Tello flown for fun is a **≤250 g model aircraft**:
- no CASA registration and no operator accreditation;
- a carve-out allowing flight inside controlled-aerodrome no-fly zones, as long as it stays out of the approach/departure paths and the aerodrome boundary;
- the standard rules still apply: ≤120 m, visual line of sight (watching the phone's video alone does not count), daylight only, not in restricted areas, and keep 30 m from people per CASA guidance.

Australia's small-drone thresholds are 250 g (and 2 kg for RPA); no separate **100 g** class was found. The Tello's 2.4 GHz Wi-Fi sits within the LIPD class licence. For contrast, a DIY build with an analog 5.8 GHz video transmitter is capped at 25 mW EIRP.

### Cited Findings
**Registration and weight classes (prior notes)**
- A drone flown purely for sport or recreation is a "model aircraft". It needs no CASA registration or accreditation at any weight; registration applies to RPA. The note to CASR 101.374A says "This Subpart does not apply to model aircraft, as they are not RPA" — [CASR Vol 3](https://www.legislation.gov.au/F1998B00220/2026-06-30/2026-06-30/text/original/epub/OEBPS/document_3/document_3.html)
- RPA weight classes: micro RPA ≤250 g; very small RPA >250 g–2 kg (CASR 101.022) — [CASR Vol 3](https://www.legislation.gov.au/F1998B00220/2026-06-30/2026-06-30/text/original/epub/OEBPS/document_3/document_3.html)

**≤250 g allowances and their limits (prior notes)**
- MOS 4.03(6): a model of no more than 250 g may fly in a controlled-aerodrome no-fly zone "PROVIDED the aircraft does not enter: (a) an approach and departure path… or (b) any area within the aerodrome boundary" — [Part 101 MOS](https://www.legislation.gov.au/F2019L00593/2024-04-30/2024-04-30/text/original/epub/OEBPS/document_1/document_1.html)
- Subpart 101.G (the legal 30 m and populous-area rules) applies only to models over 250 g. CASA's published recreational rules still tell all flyers to keep 30 m from people — [CASR Vol 3](https://www.legislation.gov.au/F1998B00220/2026-06-30/2026-06-30/text/original/epub/OEBPS/document_3/document_3.html); [Sphere Drones reproduction of CASA rules](https://www.spheredrones.com.au/resources/blog/drone-safety-rules)
- Outdoors, ≤250 g models face these limits (prior notes' synthesis of CASR 101.073, 101.095 and the MOS) — [CASR Vol 3](https://www.legislation.gov.au/F1998B00220/2026-06-30/2026-06-30/text/original/epub/OEBPS/document_3/document_3.html):
  - ≤400 ft, and ≤45 m within 3 NM of a controlled aerodrome
  - daylight only
  - eyes-on visual line of sight: "watching the phone's camera feed instead of the drone breaches 101.073"
  - night flying "appears not permitted at all"
- Indoors, "in a fully enclosed building, with the owner's permission", only the general no-hazard rules apply (prior notes) — [CASR Vol 3](https://www.legislation.gov.au/F1998B00220/2026-06-30/2026-06-30/text/original/epub/OEBPS/document_3/document_3.html)

**Sydney-specific (prior notes)**
- Since 9 Jul 2026 the Sydney Basin has "four control zones operating side by side": WSI (Class C), Sydney (Class C), Bankstown and Camden (Class D) — [Australian Flying](https://www.australianflying.com.au/latest/sydney-basin-airspace-overhaul-takes-effect-9-july-what-pilots-need-to-do-now)
- Sydney Harbour is covered by restricted areas R407A/R407B (CASA 28/26, from 9 Jul 2026). Its permission covers only licensed remote pilots doing aerial work, not hobbyists — [CASA 28/26](https://www.legislation.gov.au/F2026L00946/asmade/2026-07-08/text/original/pdf)
- NSW national parks require NPWS approval to fly a drone, applied for at least 10 days ahead — [NSW National Parks](https://www.nationalparks.nsw.gov.au/conservation-and-heritage/care-for-parks/drones-in-parks)

**Radio and commercial use**
- Radio (prior notes): under the LIPD Class Licence 2025, 2.4 GHz digital links (Wi-Fi and similar) are authorised up to 4 W EIRP, subject to density caps. A generic 5.8 GHz video transmitter is limited to 25 mW EIRP — [LIPD 2025](https://www.legislation.gov.au/F2025L01047/asmade/2025-09-05/text/original/epub/OEBPS/document_1/document_1.html)
- The Tello's rated transmitter output is 20 dBm (FCC) / 19 dBm (CE) EIRP — [Tello User Manual v1.4](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20User%20Manual%20v1.4.pdf)
- Flying for money makes the same aircraft an RPA. Even a micro RPA then needs registration and accreditation (prior notes) — [CASR Vol 2](https://www.legislation.gov.au/F1998B00220/2026-06-30/2026-06-30/text/original/epub/OEBPS/document_2/document_2.html)

### Inferences
- **Weight:** Tello + printed guards and mounts stays far below 250 g (80 g + about 12 g of guards), so printed accessories never change its legal class. The same holds for any sub-100 g DIY micro.
- **"Sub-100 g" carries no extra Australian benefit** in the rules read; 250 g is the line that matters.
- **Radio:** 19–20 dBm is about 80–100 mW, far under the 4 W 2.4 GHz digital-modulation ceiling. A stock Tello's radio is therefore lawful in Australia (my inference; the LIPD density-cap arithmetic was not done).
- **AI tests outdoors:** autonomous scripts outdoors must still be supervised with eyes on the drone, in daylight. Indoors (home, or a hired hall with permission) is the simplest lawful venue for experiments.

### Gaps
- None new. The rules were researched in the prior notes; the CASA website itself was unreachable then, so the rules were read from legislation.gov.au.

---

## 8. Fair comparison: Tello route vs a DIY printed drone for this user

### Takeaway
For this user's stated priorities — phone flying, a camera feed usable from Python/OpenCV, stable indoor hold out of the box, minimal tinkering for basic flight, budget about A$250 — a **Tello is the better fit**, provided one can be bought:
- **New:** JB's A$214 Boost Combo, if a Sydney store confirms stock.
- **Used:** about A$100–200 for a combo.

The honest costs of the Tello route:
- almost nothing structural is printed (only guards, mounts and shells);
- the firmware is closed;
- the line is discontinued, with ageing batteries and an official Android app that is off Google Play;
- outdoor flying is calm-day only;
- obstacle sensing is camera-only (forward ToF only on the TT).

A **DIY printed ESP32 drone** is truly printable and open, at similar cost:
- LiteWing + positioning module: about A$190–233 delivered
- ESP-FLY: A$150.83 kit
- Flix: about A$69–102 in parts

But each of the two things this user most needs — position hold and an AI-grade camera feed — is extra integration work on DIY. No ESP32 micro ships with both working together.

### Cited Findings
**Tello side (from Sections 1–5)**
- A$214 new Boost Combo with 3 batteries and a hub (JB data says LimitedStock) — [JB Hi-Fi](https://www.jbhifi.com.au/products/ryze-tello-drone-boost-combo-white.js)
- VPS hold "works best at… 0.3 to 6 m"; 720p30 stream; 13 min; 80 g — [Tello User Manual v1.4](https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20User%20Manual%20v1.4.pdf); [Ryze specs](https://www.ryzerobotics.com/tello/specs)
- Android flying via TelloFPV ($9.99, updated Jul 2026) — [Google Play](https://play.google.com/store/apps/details?id=com.volatello.tellofpv&hl=en&gl=AU)
- Python via djitellopy (OpenCV-ready) — [PyPI](https://pypi.org/project/djitellopy/)

**DIY side (prior notes, with original sources)**
- **LiteWing** (PCB-frame ESP32 drone, phone apps) — [Tindie LiteWing](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/); [Tindie positioning module](https://www.tindie.com/products/semicon_lab/litewing-drone-positioning-module/)
  - US$49 (no battery). The Drone Positioning Module (PMW3901 optical flow + VL53L1X ToF, "up to 4m", about 8 g) is US$38.
  - Delivered to Sydney: about A$190.23, or A$209.25 with GST. With each product charged at its first-item rate: A$211.84, or A$233.03 with GST. These conversions are computed in `au_prices_micro_phone_drones.md` at Tindie's 1.4411 rate.
- **ESP-FLY** kit A$150.83 inc GST at Pakronics — [Pakronics ESP-FLY](https://www.pakronics.com.au/products/esp-fly-diy-kit-diy-micro-drone-kit-based-on-xiao-esp32-s3-by-max-imagination-ss114993694)
  - The FAQ answers "Can I add an ESP32 camera for FPV? Not directly with the current open-source firmware workflow on the XIAO"; it recommends a 5.8 GHz analog camera with about 3 g recommended payload — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
- **Flix** (printed two-part frame) — [Flix README](https://github.com/okalachev/flix); [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)
  - Parts basket about A$69–102, computed in `au_prices_micro_phone_drones.md`. Altitude hold is not in mainline.
  - At RoboCamp (Jul 2026), "two participants implemented stable position hold" using distance sensors and an overhead camera.
  - One community build uses an ESP32-S3-CAM with an HTTP video stream.
- **LiteWing's camera tutorial** uses a separate toy-drone Wi-Fi camera on its own network, and notes "Noise or jitter… when the drone motors start operating" — [CircuitDigest](https://circuitdigest.com/tutorial/adding-wi-fi-camera-to-litewing-esp32-drone)
- **Best ESP32 camera link** (hx-esp32-cam-fpv) — [hx-esp32-cam-fpv](https://github.com/RomanLut/hx-esp32-cam-fpv):
  - "Latency 90-110ms" at 640×360–1024×576
  - MJPEG, because "the ESP32 lacks the processing power for real-time video encoding"
  - Quality "comparable to smartphone cameras from around 2005"
- **Local sensor prices** (prior notes): VL53L1X A$20.75 (Core, in stock); PMW3901 A$50.35 (Core, out of stock) or about AU$10–21 on AliExpress — [Core VL53L1X](https://core-electronics.com.au/piicodev-laser-distance-sensor-vl53l1x.html); [Core PMW3901](https://core-electronics.com.au/pimoroni-pmw3901-optical-flow-sensor-breakout.html)

### Inferences
**Scorecard against the user's criteria** (my synthesis of the cited findings):

| Criterion | Tello / Tello EDU (TT if found) | DIY printed ESP32 micro (LiteWing / ESP-FLY / Flix) |
|---|---|---|
| Phone flying (Android) | Yes: TelloFPV (~A$10) or sideloaded DJI APK; gamepad support | Yes: LiteWing/ESP-Drone apps; quality varies by project |
| Camera feed for Python/OpenCV | **Built in**: 720p30 H.264 over Wi-Fi; djitellopy; latency manageable with frame-dropping | **Add-on**: separate Wi-Fi cam or ESP32-S3 MJPEG; low quality; extra radio/power work |
| Hold out of the box | **Yes** indoors (VPS) | Only with a flow + ToF module (LiteWing module) and tuning; not mainline on Flix or ESP-FLY |
| Obstacle sensing | None (TT: one forward ToF) | Open: can add ToF rangers, but DIY |
| Minimal tinkering for basic flight | **Best** | Moderate to high (assembly, calibration, firmware, batteries) |
| 3D-printed share | Accessories only (guards, mounts, shells) | **Frame and guards printed; "normal" for drones** |
| Openness / tuning | Closed firmware | **Fully open** (ESP-IDF / Arduino) |
| Outdoor without GPS | Calm days only | Similar or worse (lighter; same flow-sensor limits) |
| Longevity / spares | Discontinued; battery supply ageing | Generic parts; open designs |
| Cost vs A$250 | A$214 new combo (if stock) or ~A$100–200 used | ~A$69–233 + camera + batteries |
| Ecosystem for AI | **Largest** (Section 4) | Small; mostly flight-control focused |

- **Recommendation logic for the report writer:**
  - If the user values "AI experiments next weekend" over "I printed my drone", choose the Tello: ideally the JB A$214 Boost Combo, otherwise a used combo with healthy batteries and recent firmware. Then print the accessories (TPU guards, mirror clip, payload hook).
  - If printing the airframe is non-negotiable, the DIY path must budget for the positioning module and a separate camera. Expect real integration work before any AI code runs.
- **Middle path:** a Tello for the AI work now, plus a later DIY printed micro as a separate flight-control project. The StampFly "Tello-SDK-compatible API" hints that command-level code might be reusable (speculative).
- **EDU vs plain Tello for this user:**
  - Plain Tello: covers phone + Python + video.
  - EDU: adds mission pads and router (station) mode, useful for swarms or keeping laptop internet. Note the djitellopy caveat on video in station mode.
  - TT: adds the ESP32, LED matrix and forward ToF (the most "maker" option), but it is unavailable new in Australia.

### Gaps
- No head-to-head measurement of hover drift was found: Tello VPS vs LiteWing/PMW3901 vs StampFly.
- No measured end-to-end latency for Tello video into OpenCV was found (Section 2), and none for DIY ESP32 MJPEG into OpenCV on a laptop. The 90–110 ms figure for hx-esp32-cam-fpv is phone or ground-station display latency.
- Whether JB's leftover Tello stock is in Sydney stores, and for how long, is unknown. It is the deciding factor between the A$214 new route and the used route.
