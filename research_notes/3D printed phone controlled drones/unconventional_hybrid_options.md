# Unconventional and hybrid routes to a 3D-printed, smartphone-flown drone (status checked 5 Oct 2026)

Scope note: this file covers routes other than purpose-built ESP32 micro drones (ESP-Drone, ESP-FLY, LiteWing, Flix, Crazyflie) and standard Betaflight/ArduPilot builds. Those appear here only briefly, for comparison. User context: Bambu Lab P2S printer; PLA, PETG, TPU 85A and TPU 65D filament (no LW-PLA); a soldering station; new to drones.

Research caveat: the shared web-search budget ran out partway through. The last part of the research used direct fetches of primary pages only. Some claims below rest on search-result summaries rather than full page reads, and are labelled "(search summary)".

---

## 1. "Toy drone transplant": moving the electronics of cheap phone-app toy drones (E58/E88/E99, JJRC, "WiFi UFO"-style) into custom 3D-printed frames

### Takeaway
This is the cheapest route by far: donor drones cost about $15–40. It is also the least documented and least flexible. I found no 2024–2026 step-by-step guide for moving E88/E99/E58 electronics into a printed frame. The documented transplants are older and use non-app micro quads (for example, a 2014 printed frame built for V929/Q-Bot boards). The donor electronics are closed: the MCU markings are removed, the tuning is fixed, and the 2.4 GHz handset link is proprietary. On at least the basic E88, the phone only receives video and the flying is done with the handset. In practice, the realistic version is to print a new body or shell of similar size and weight around a donor that explicitly advertises "APP control". For programmability, the hybrid hacks are reverse-engineered Wi-Fi protocols, or injecting commands into the stock flight controller with Arduino + nRF24.

### Cited Findings

**Donor drones and prices (2025–2026)**
- A Printables designer describes "Drone Pro/E88/E99/E58" drones as knock-offs of the original Eachine E58, "found for around USD $20 on marketplaces such as Temu and AliExpress". Their printed prop protector was tested on the E88; the clones have "similar if not identical body shapes" (search summary) — [Printables model 1315357](https://www.printables.com/model/1315357-propeller-protector-for-drone-proe88e99e58-nubs-re)
- E88 prices: about US$28.50 on AliExpress (search summary) — [AliExpress Wiki](https://www.aliexpress.com/s/wiki-ssr/article/eachine-e88-drone). An Amazon listing for the "ikaufen E88" cited at $38.69 — [howtotechinfo E88 review 2026](https://howtotechinfo.com/e88-drone-review/). Circuit Digest gives "sub-₹2000 (approximately $24 USD)" — [Circuit Digest E88 teardown, 5 Jan 2026](https://circuitdigest.com/review/everything-you-need-to-know-about-the-e88-drone-teardown)
- E99 variants: "E99 Max brushless drone w/ optical flow stabilization" at $15.43 shipped from AliExpress (Mar 2025) — [Slickdeals](https://slickdeals.net/f/18195781-e99-max-brushless-drone-w-optical-flow-stabilization-15-43-shipped). "2026 New E99 PRO" with dual cameras, optical-flow hover and "APP control" at $29 — [TikTok Shop listing](https://www.tiktokshop.com/pdp/e99-pro-drone-with-dual-cameras-360-flips-app-control/1732196888353739094). A German eBay listing advertises E88/E99 "mit APP Steuerung" (with app control) — [eBay.de](https://www.ebay.de/itm/406402559176)
- E58 (the original, from about 2018) spare-part prices: complete arm with motor and prop $3.99, prop set $2.89, upper/lower covers $3.25–3.59, 720p camera $21.99, 3 batteries + charger $23.99 — [FirstQuadcopter E58 spare parts](https://www.firstquadcopter.com/spare-parts/spare-parts-eachine-e58-drone/)

**What is inside a typical donor (E88 component teardown, Jan 2026)**
- Flight MCU "STM32F030F4P6 (suspected, markings removed)", 48 MHz, 250 Hz control loop. Gyro L3GD20H (suspected). BMP180 barometer (confirmed) "for altitude hold". XN297LBW 2.4 GHz transceiver to the handset. Four 716 coreless motors driven by Si2300DS MOSFETs at 16 kHz PWM. Suspected Lewei LW9809 Wi-Fi camera IC on its own 3.3 V LDO, switched by an MCU GPIO. 3.7 V Li-ion pack ("1200mAh" on the pack vs "1800mAh" on the cell). 8–10 min flight — [Circuit Digest teardown](https://circuitdigest.com/review/everything-you-need-to-know-about-the-e88-drone-teardown)
- The teardown's verdict is "very much a toy with a camera attached", with "no access to the flight controller, no programmable features, and no open-source code to tinker with". The app named for the camera is "WiFi_CAM" — [Circuit Digest teardown](https://circuitdigest.com/review/everything-you-need-to-know-about-the-e88-drone-teardown)
- The companion article says the phone is used only for the video feed: "The controller continuously sends commands such as throttle, direction, and flight modes to the drone" — [Circuit Digest Substack](https://circuitdigest.substack.com/p/inside-the-e88-drone-teardown-secrets)
- A commenter (2 Oct 2026) reported trying to pair an ESP32 and finding the link "uses BLE rather than standard RF protocols". This is unverified — [Circuit Digest teardown comments](https://circuitdigest.com/review/everything-you-need-to-know-about-the-e88-drone-teardown)
- E88 review (2026): "Altitude hold is real on many versions… often based on a barometric sensor". The Wi-Fi FPV stream "can be low bitrate, and it can stutter". Typical problems are drift in hover, wind sensitivity and an 8–10 min battery. The manual points to an app called "RC FPV" — [howtotechinfo](https://howtotechinfo.com/e88-drone-review/)

**Phone apps used by these drones (status Oct 2026)**
- **WiFi UFO** (Le Wei Technology HK). Latest iOS version 7.9 dates from 11 May 2022, so it is stale (about 4.5 years without updates). 3.3★ from 77 ratings — [App Store](https://apps.apple.com/us/app/id977558457)
- **KY UFO** (Shenzhen Cooingdv). Google Play: 3.1★ from about 3.5K reviews, 1M+ installs (search summary) — [AppPricingLab](https://apppricinglab.com/app/google_play/com.cooingdv.kyufo)
- **KY FPV** (Shenzhen Cooingdv): virtual joysticks, "gravity induction" (tilt), voice control and trajectory flight. It works with drones whose Wi-Fi networks are named "KY-…" (search summary) — [App Store](https://apps.apple.com/np/app/ky-fpv/id1486555370), [mwm.ai](https://mwm.ai/apps/ky-fpv/1486555370)
- **RC UFO** is another Cooingdv app — [mwm.ai](https://mwm.ai/apps/rc-ufo/6502386083). **HF UFO** is a further clone app — [mwm.ai](https://mwm.ai/apps/hf-ufo/1412628377)
- **WiFi UAV**: 2.5M+ downloads, 3.6★ from 970 ratings, last updated 25 Aug 2026. It offers on-screen sticks, tilt control and waypoint/trajectory flight. Users complain of crashes on startup and "connection instability beyond short distances" — [mwm.ai](https://mwm.ai/apps/wifi-uav/1471622385)

**Existing printed frames, shells and transplant precedents**
- **XL-RCM 6.0 EXO** (Feb 2014): a printed (ABS) frame that takes the board from V929/MQX/HobbyKing Q-Bot toy quads. "Plugs, screws and wires need to be cut or removed… Everything I made into this quad are direct soldering". About 60 g without the LiPo. Gives maximum board dimensions (4.4 × 0.7 × 3.2 cm). STLs are on the page and Thingiverse — [supermotoxl](https://mail.supermotoxl.com/projects-articles/3d-printed-models/xl-rcm-60-exo-mini-hd-quad-frame-for-v929hk-q-bot.html)
- Printable frames for 8520 brushed (coreless) motors exist, e.g.:
  - Micro Hexcopter frame, about 16 g, 6 × 8520 motors — [Printables 201225](https://www.printables.com/model/201225-micro-hexcopter-frame)
  - Modular "120 Quadcopter" frame for 8520 motors — [MyMiniFactory](https://www.myminifactory.com/object/3d-print-120-quadcopter-modular-frame-64815)
  - A frame for 8.5 × 20 mm motors, "approximately 18 grams" in PLA at 20% infill (search summary) — [MakerWorld 2580472](https://makerworld.com/it/models/2580472-esp32-drone) / [CGTrader](https://www.cgtrader.com/3d-print-models/hobby-diy/robotics/esp32-micro-drone-frame)
- A forum discussion (summarized) warns that when moving a toy "brain" to a new frame, the board needs protecting, and that re-tuning "may not be possible if tuning parameters are not exposed" (search summary) — [IntoFPV forum thread](https://intofpv.com/archive/index.php/thread-17014.html)
- Another "toy shell" hybrid: a TIE-Fighter toy shell with printed motor mounts. Note that it used 250-class hobby electronics (MultiWii Flip 1.5), not toy electronics. Dec 2015 — [3DPrint.com](https://3dprint.com/109405/tie-fighter-rc-quadcopter/)

**Hybrid hacks (keep the toy's hardware, replace the phone/control layer)**
- **libcopter**: a reverse-engineered Wi-Fi control and video protocol for the SG500 and "JJRC blue crab" drones (which are basically the same). C++ with Python 3 bindings and OpenCV. CC BY-SA, 2014–2020 — [windfis.ch libcopter](https://windfis.ch/libcopter/libcopter.html)
- **DroneHackOpenCV**: Python control of the JJRC H49 SOL (about €20) via its reverse-engineered protocols, aimed at ArUco-marker positioning. Experimental; firmware-dump attempts stalled — [GitHub](https://github.com/karolis1115/DroneHackOpenCV)
- **Eachine-E58-CFW**: an early-stage custom firmware for the E58 (14 commits; Rust/C) — [GitHub](https://github.com/flaminggoat/Eachine-E58-CFW). A forum post says the work used "NuMicro's modified openocd with an STLINK" (search summary) — [DeviationTX forum](https://mail.deviationtx.com/forum/model-requests/7793-eachine-e58?start=20)
- **Holy Stone H120D** (a ~$200 GPS drone, not a sub-$40 toy): full Wi-Fi protocol reverse-engineering published 26 Jun 2026. UDP port 8080. Standard-library Python scripts for flight, camera and live H.264 video, plus an Arduino Nano 33 IoT autonomy sketch — [BrightCoding write-up](https://converter.brightcoding.dev/blog/i-reverse-engineered-a-200-drones-secret-wifi-protocol), repo [zturner1/h120d-protocol](https://github.com/zturner1/h120d-protocol)
- **"Project Pelican"** (7 Sep 2026): a P8 Pro toy drone (well under $50). The author keeps the factory flight controller because it "already knows how to take low-level commands… and turn them into stable flight". Commands are injected with an Arduino + nRF24L01+ — [HackerNoon](https://hackernoon.com/i-bought-a-$30-toy-drone-and-started-reverse-engineering-it-into-an-autonomous-machine-part-1)

### Inferences
- **What "transplant" really means for a beginner.** The stock flight controller's PID gains are fixed and not exposed. A printed frame should therefore copy the donor's motor-to-motor spacing, all-up weight, centre of gravity and motor orientation. Otherwise the stock tuning may oscillate or drift. In practice this means printing a new body or shell around the same geometry, not designing a radically different airframe. This is inferred from the closed-firmware findings and the IntoFPV warning.
- **Motor-size trap.** The E88 uses 716 (7 × 16 mm) motors, while most printable micro frames target 8520 (8.5 × 20 mm). Motor clips will need resizing; easy in Bambu Studio or CAD.
- **App-control trap.** Some E88s only stream video to the phone (Circuit Digest), while other E88/E99 listings advertise "APP control". A buyer who wants to fly with the phone must check the listing for app flight control and the app name. Prefer the actively updated WiFi UAV or KY FPV family over the stale WiFi UFO app.
- **Filament fit.** PLA or PETG for the shell and arms. TPU 85A for bumpers and prop guards. TPU 65D could give a tougher one-piece "whoop-style" ducted body. 716/8520 toy quads have very little spare thrust, so the printed body must stay close to the stock body's weight. The XL-RCM EXO flew at about 60 g.
- **Cost estimate (mine).** Donor $15–40 (sourced above), plus filament under about $2 (my estimate), plus optionally a spare donor for parts. This is the cheapest route but a dead end for learning: no tuning, no code, short Wi-Fi range.

**Cross-route ranking for this user** (my synthesis of all six sections; sources are in each section)

| Route | Typical cost (USD) | Phone control | Printing role | Beginner fit | Main risk |
|---|---|---|---|---|---|
| Toy donor + printed shell (E88/E99) | 15–40 | Yes, on "APP control" variants | New body or guards | Easy (desoldering only) | Closed firmware; app/link quality; may be video-only on phone |
| Used Tello / Tello EDU + printed shells | Secondhand only (discontinued) | Excellent (Tello / TelloFPV apps, SDK) | Shells, guards, mounts | Very easy | Availability; no official support in the US/China |
| Pluto X (Drona Aviation) | ₹14,000 MRP (2024) to "20k" (page, 2026) | Yes (Pluto Controller app) | Vendor encourages custom frames | Easy–medium | India-centric sales; USD price unclear |
| ESP32 micro drone (other researcher), e.g. LiteWing kit | $50–60 + shipping | Yes | Frame or guards | Medium | Covered elsewhere |
| ESP32/ESP8266 indoor blimp | My estimate: electronics ~$15–30 + balloon + helium (unsourced); the commercial Vat19 blimp was $49.99 | Yes (Wi-Fi/BLE app) | Gondola, mounts | Easiest flight physics | Needs helium; large balloon |
| PowerUp 4.0 paper plane | $59.99 | Yes (Bluetooth) | Optional accessories only | Very easy | Not really a printed drone |
| Printed fixed-wing/VTOL + ArduPilot + phone GCS | Plans €27–39 + electronics (hundreds) | Phone as GCS; RC usually still needed | Whole airframe | Hard | Not beginner-friendly; some designs need LW-PLA |
| Smartphone as onboard brain | Phone + 330–450 mm quad | Phone is the drone | Frame | Very hard / legacy | Weight; obsolete projects |

### Gaps
- No 2024–2026 documented guide found for transplanting E88/E99/E58 Wi-Fi boards into a printed frame. Printables and MakerWorld returned 403 to direct fetches, so per-model listings could not be checked.
- It is unconfirmed which current E88/E99 sub-variants route phone app commands to the flight MCU and which only stream video. This must be checked per listing.
- No internals found for the brushless/optical-flow E99 Pro/Max (motor drivers, whether the ESCs are integrated), so how transplant-friendly they are is unknown.
- The status of the "Eachine" brand and the original E58 in 2026 could not be verified.
- No data on how far geometry or weight can change before the stock toy flight controller becomes unstable.

---

## 2. Commercial programmable/open drones that are phone-controlled and accept 3D-printed frames, shells or mods

### Takeaway
Most of the classic options are dead or dying in 2026:
- DJI/Ryze Tello, Tello EDU and RoboMaster TT were discontinued in 2024 (secondhand or leftover stock only).
- Makeblock Airblock: no longer stocked.
- Flybrix: company shut down in 2018.
- Parrot Mambo: Parrot now lists only professional ANAFI drones.
- LiteBee Wing/Ghost II and CoDrone Mini: closeouts.

Robolink's CoDrone EDU ($249) is alive but is flown with its own controller, not a phone. Two live, phone-flown, frame-friendly commercial options remain: Drona Aviation's Pluto X (India; Pluto Controller app updated in 2026), and the ESP32 kits covered by the other researcher (e.g., the LiteWing kit). Tello still has the richest phone-app and printable-accessory ecosystem, for those who can find one.

### Cited Findings

**DJI/Ryze Tello, Tello EDU, RoboMaster TT (Tello Talent)**
- Manufactured 2018–2024. "In January 2024, DJI announced the discontinuation of its educational products, including the Tello and RoboMaster series, in the United States", after ceasing sales in Asia in Dec 2023. Specs: 80 g, 13 min, 100 m range, 720p. Tello EDU (Nov 2018) is programmable in Python/Scratch/Swift. RoboMaster TT (May 2021) adds an ESP32 microcontroller, 8 × 8 LED matrix and ToF sensor — [Wikipedia](https://en.wikipedia.org/wiki/Ryze_Tello)
- DJI ceased sales of Tello and RoboMaster in China. DJI said the education line "is still available in the overseas market" with continued after-sales support — [DroneDJ, 4 Jan 2024](https://dronedj.com/2024/01/04/dji-education-drone-shutdown-us/), [DroneDJ, 29 Dec 2023](https://dronedj.com/2023/12/29/dji-education-tello-robomaster-shutdown/)
- The Tello, Tello RoboMaster TT and RoboMaster robots are listed as discontinued, with the US STEM division closed (8 Jan 2024) — [Digital Camera World](https://www.digitalcameraworld.com/news/dji-tello-drone-is-set-to-disappear-as-drone-giant-ditches-education)
- "Out of stock in the official DJI store for several months"; DJI had not confirmed either discontinuation or continued production (updated 29 Mar 2025) — [Pilot Institute](https://pilotinstitute.com/dji-tello-alternatives-top-3-best-educational-drones/)
- DroneBlocks (7 Feb 2024): the discontinuation "has been on our radar since late 2022". It advises against buying Tellos for new programmes but promises continued support — [DroneBlocks community](https://community.droneblocks.io/t/dji-tello-discontinuation-new-crazyflie-micro-drones/1265)
- **Conflict:** Ryze's own Tello page still shows "Buy Now" and "Where to Buy" with no discontinuation notice (fetched Oct 2026). This is probably a stale marketing page — [ryzerobotics.com/tello](https://www.ryzerobotics.com/tello)
- DJI's Education Hub software is labelled "Updates discontinued" — [DJI downloads](https://www.dji.com/downloads/softwares/dji-education-hub-eos)
- Apps: the official TELLO app reportedly remains on app stores in 2026. The third-party TelloFPV app is recommended as better (search summary) — [Droneblog](https://www.droneblog.com/best-app-for-tello-drone/)
  - TelloFPV supports MFi/Android gamepads plus GameSir T1d/T1s and the Parrot Flypad. It has 1–4 stick modes and a trainer mode (search summary) — [App Store TelloFPV](https://apps.apple.com/app/id1545864950), [TelloPilots thread](https://tellopilots.com/threads/new-app-tellofpv-for-android.2710/page-48)
- Printable Tello mods:
  - Lunar Excursion Module shell. Prints without supports, the dish snaps on, and the hollow legs take a paperclip rod for strength — [Printables 89990](https://www.printables.com/model/89990-tello-drone-lem-lunar-excursion-module)
  - Thinner and lighter prop guards — [Printables 275499](https://www.printables.com/model/275499-tello-drone-propeller-guard-v3)
  - Prop-guard holder — [MyMiniFactory 65940](https://www.myminifactory.com/object/3d-print-ryze-tello-prop-guard-holder-65940)
  - A community rebuild of a Tello into a foldable chassis — [TelloPilots](https://tellopilots.com/threads/overvoltage-to-repeater-and-rebuilding-into-a-foldable-chassi.5074/)
- EDC "EduDroneController": an open-source ESP32 handset for Tello-family drones. Uses Bluepad32 for PS3/PS4/Switch gamepads (Aug 2023) — [DroneBot Workshop forum](https://forum.dronebotworkshop.com/esp32-esp8266/edc-edudronecontroller/), [GitHub ESP32Controller](https://github.com/jsolderitsch/ESP32Controller)

**Drona Aviation Pluto X (India)**
- Prices: Pluto 1.2 ₹7,300, Pluto X ₹14,000, "Guru" ₹16,000 (Aug 2024). Supports C++, Python and block programming. The company says "3D printing… enables students to design their frames and use our electronics to start flying". About 21,000 units sold; planned US/UAE expansion via distributors — [ElectronicsForU interview, 9 Aug 2024](https://electronicsforu.com/technology-trends/arduino-is-for-electronics-raspberry-pi-is-for-computing-we-aim-to-become-that-for-drones-with-pluto)
- The current product page shows "20k" (₹20,000), "Robust Nylon 6 Frame", a "HD 720p Wi-Fi camera", C++ APIs, ROS and "Block + Python", and a "UniBus expansion port" for sensors, LEDs and servos. Control is via the Pluto Controller app (iOS/Android) — [dronaaviation.com/plutox](https://www.dronaaviation.com/plutox)
- Tinkerer Kit listed at ₹21,499 (search summary) — [Drona product page](https://dronaaviation.com/product/plutox-tinkerer-kit). A direct fetch in Oct 2026 returned "Product Not Found", so the listing may have moved.
- Crowdfunding history: early-bird $149 (Starter) and $169 (Tinkerer) on Indiegogo — [Digit.in](https://www.digit.in/news/general/plutox-diy-aerial-robotics-kit-now-on-indiegogo-for-149-43371.html). Indiegogo Tinkerer later at $249 (search summary) — [Indiegogo](https://indiegogo.com/projects/plutox-turn-your-drone-ideas-into-innovations)
- 2018 review: 90 mm 3D-printed frame with prop guards, ESP8266 Wi-Fi on the PrimusX board, 600 mAh LiPo, 15 g payload, Cygnus IDE (C++), and phone app control with a "Developer Mode" — [DroneBot Workshop](https://dronebotworkshop.com/plutox-introduction/)
- Pluto Controller iOS app v5.2.0 was updated about 5 days before the Oct 2026 fetch (4.0★, 8 ratings). Reviews complain that the connection instructions are unclear — [App Store](https://apps.apple.com/us/app/id1173323776)

**Robolink CoDrone EDU / CoDrone Mini**
- CoDrone EDU went from $215 to $249 from 1 May 2025, because of tariffs — [Robolink blog](https://www.robolink.com/blogs/roblog-link/codrone-edu-price-update-keeping-stem-and-cte-accessible-2)
- CoDrone EDU details: flown with an included programmable "Smart Controller". Programmed in Blockly/Python from Chromebook/macOS/Windows; no Python on Chromebook. Seven sensors including optical flow. 54.8 g, 7–8 min. Props, motors and frames are replaceable — [Robolink product page](https://www.robolink.com/products/codrone-edu). **No phone flight app was found.**
- **Conflict:** one search summary claimed "CoDrone EDU is discontinued". Robolink's own page (fetched Oct 2026) sells it, so it should be treated as active.
- CoDrone Mini: "starts at $99" (Mar 2025) — [Pilot Institute](https://pilotinstitute.com/dji-tello-alternatives-top-3-best-educational-drones/). Listed as "CLOSEOUT" at STEMfinity (search summary); the product URL returned 404 in Oct 2026 — [STEMfinity](https://stemfinity.com/products/codrone-mini)

**Other educational/brick drones**
- LiteBee Wing: $199, LEGO-compatible, flown by "controller, smart phone, or computer programming". Marked "CLOSEOUT" (search summary); the URL returned 404 in Oct 2026 — [STEMfinity LiteBee Wing](https://stemfinity.com/products/litebee-wing)
- LiteBee Ghost II: phone app control, Scratch/Arduino, 720p Wi-Fi. Marked "CLOSEOUT" — [STEMfinity](https://stemfinity.com/collections/circuits-light/products/litebee-ghost-ii)
- Makeblock Airblock: "No longer stocked" — [Rapid Online](https://rapidonline.com/makeblock-airblock-modular-programmable-drone-hexacopter-75-0714)
- Flybrix (LEGO drone, Bluetooth phone app): the company "shut down in 2018", per an editor's note on a review (search summary) — [The Drone Girl review](https://www.thedronegirl.com/2017/05/23/flybrix-review-lego-drone/); background in [TechCrunch 2017](https://techcrunch.com/2017/04/11/why-flybrix-skipped-crowdfunding-to-launch-its-lego-drone-kits)
- Parrot Mambo: Parrot's drone page lists only ANAFI UKR, ANAFI Ai, ANAFI USA and CHUCK 3.0, with no minidrones (Oct 2026) — [parrot.com/en/drones](https://www.parrot.com/en/drones). The FreeFlight Mini app is still listed — [App Store](https://apps.apple.com/app/id1137022728). MathWorks still offers a Simulink support package for Mambo and Rolling Spider — [MathWorks](https://www.mathworks.com/hardware-support/parrot-minidrones.html)
- ALUX "Portable Coding Drone & Expendable Drone Game Platform": CES 2025 Innovation Award honoree; Scratch, Entry and Python. No price or availability found — [CES](https://www.ces.tech/ces-innovation-awards/2025/portable-coding-drone-expendable-drone-game-platform/)
- FlexBot (historical, 2016): $99 kit with a 3D-printed frame, cap and base, PCBA, motors, a 640×480 Wi-Fi "FlexCam", Bluetooth 4.0 phone control (tilt/"gravity sensors") and 7 min flights. No soldering; users "design and 3D-print custom shells" — [MacTrast](https://www.mactrast.com/2016/04/mactrast-deals-flexbot-diy-camera-drone-kit/)

**Brief mentions (covered by the other researcher)**
- LiteWing: Circuit Digest's ESP32 drone where the PCB is the chassis. About $12 in parts; kits from $50 (no battery), $60 assembled, $20 international shipping (Sep 2024). Uses Crazyflie-derived phone apps — [CNX Software](https://www.cnx-software.com/2024/09/21/low-cost-diy-esp32-drone-12-dollars/)
- The Crazyflie Android client flies by touchscreen or a USB/Bluetooth gamepad — [Bitcraze docs](https://www.bitcraze.io/documentation/repository/crazyflie-android-client/master/userguides/user-instructions/)

### Inferences
- For a beginner who wants a commercial, phone-flown drone to customise with prints in 2026, the practical choices are:
  1. A **used Tello or Tello EDU**: best apps, SDK and printable accessories; discontinued, so condition and battery health are risks.
  2. **Pluto X**: designed for custom frames, and its app was updated in 2026; ordering outside India and the USD price are unclear.
  3. The ESP32 kits covered elsewhere.
- Pluto at ₹14,000–20,000 is roughly US$160–240 at roughly ₹85–88 per US$. This is my approximate conversion, not a quoted USD price.
- CoDrone EDU fails the "phone-controlled" requirement. It suits classrooms, not this user.
- RoboMaster TT's open ESP32 expansion is attractive for tinkering, but it is discontinued, like the Tello.

### Gaps
- Could not verify current (Oct 2026) secondhand prices for Tello, Tello EDU or RoboMaster TT. Retailer pages returned 403 and the search budget was exhausted.
- Could not confirm whether Drona Aviation ships Pluto X internationally in 2026, or any USD retail price.
- No 2025–2026 newcomer found that is both phone-flown and explicitly designed for user-printed frames, other than ESP32 kits and Pluto. The ALUX drone's availability and price are unknown.
- I could not find the exact date Parrot discontinued the Mambo.

---

## 3. Smartphone as the drone's onboard brain or payload

### Takeaway
Using a phone as the flight controller was a 2013–2017 research and Kickstarter idea: AndroCopter, Flone, Flyver, xCraft PhoneDrone Ethos, and UPenn's "Flying Smartphones". All needed an extra board (Arduino ADK, IOIO, ESC interface) and a 330–450 mm-class frame to carry a phone of about 150–200 g. None is a maintained product in 2026, and xCraft ended in refund trouble. The living 2026 variant is the phone as a 4G/5G companion and video relay on an ArduPilot drone (Andruav), or as the ground station (QGroundControl). Neither is a beginner or small-printed-drone path.

### Cited Findings
- **AndroCopter** (Romain Baud): Nexus 4 as the flight computer (needs a gyro and barometer), plus an Arduino ADK 2011 with USB host feeding PPM ESCs. Manual flight via gamepad through a PC; experimental — [README](https://github.com/lin187/andro-copter/blob/master/README.txt). Open source under the MIT licence, code originally on Google Code — [Dronezine](https://www.dronezine.it/?p=2393); fork [prakashgowinji/andro-copter](https://github.com/prakashgowinji/andro-copter)
- **Flone** (Aeracoop, 2013): "turns the mobile phone into a stand-alone flying apparatus which can go up to a height of 20 metres", remote-controlled "by another smartphone with a wifi or 3G connection". The creators note "Motors update their velocity 400 times each second" — [We Make Money Not Art, 2014](https://we-make-money-not-art.com/flone/); [LABoral](https://laboralcentrodearte.org/en/artworks/flone-2013-2/); build: [Instructables Flone 3.0](https://instructables.com/Flone-30)
- **Flyver**: a DJI Flamewheel F330/F450 ARF kit plus an IOIO OTG board, with an Android phone as the brain and a second phone as the remote. The ESC leads plug into IOIO pins. Needs manual PID tuning. Last updated 13 Jul 2015 — [Flyver SDK wiki](https://github.com/flyver/Flyver-SDK/wiki/2.1---How-To:-Setup-with-ARF-Kit)
- **xCraft PhoneDrone Ethos**: carries an iPhone or Android phone as an "autonomous aerial camera". Had "almost $170,000 in pledges" with 34 days left (27 Oct 2015) — [DroneLife](https://dronelife.com/2015/10/27/drone-firm-xcraft-faces-funding-shark-tank/). Shipping was underway by Sep 2017; by 2019 the team was offering refunds it had not yet paid (search summary of backer updates) — [BackerKit updates](https://phonedrone-ethos-a-whole-new-dimension-for-your-sm.backerkit.com/hosted_preorders/project_updates?page=2)
- **UPenn "Flying Smartphones"** (IEEE RAM, Jun 2015): "first fully autonomous smartphone-based quadrotor", with all computation, sensing and control in a smartphone app. Demonstrated at CES 2015 — [TerraSwarm publication page](https://ptolemy.berkeley.edu/projects/terraswarm/pubs/337.html), [IEEE Spectrum](https://spectrum.ieee.org/a-smartphone-is-the-brain-for-this-autonomous-quadcopter)
- **Andruav (ArduPilot cloud)**: an Android phone on the vehicle connects to the ArduPilot flight controller "via Bluetooth, USB/Serial, or UDP". It needs a SIM with 4G/5G data and a free Andruav account and access code. Live HD video via WebRTC; telemetry is forwarded to Mission Planner or QGroundControl. Demonstrated 12,193 km (Los Angeles to Cairo). DroneEngage is the successor — [cloud.ardupilot.org scenario](https://cloud.ardupilot.org/scenarios/andruav-mp-4g5g.html), [glossary](https://cloud.ardupilot.org/glossary.html)
- Raspberry Pi-based UAVcast-Pro is the non-phone 4G alternative discussed in the ArduPilot forum — [ArduPilot Discourse](https://discuss.ardupilot.org/t/uavcast-pro-4g-lte-telemetry-and-video/36168)
- Payload reference: a Samsung Galaxy S9 (2018) weighs 163 g — [GSMArena](https://www.gsmarena.com/samsung_galaxy_s9-8966.php). Flyver used 330–450 mm frames to carry a phone — [Flyver wiki](https://github.com/flyver/Flyver-SDK/wiki/2.1---How-To:-Setup-with-ARF-Kit). Pluto X's payload limit is 15 g — [DroneBot Workshop](https://dronebotworkshop.com/plutox-introduction/)

### Inferences
- A 150–200 g phone outweighs an entire E88 or Pluto-class drone several times over. Carrying one means a brushless quad of about 5–7 inches or a 330–450 mm frame, with LiPo safety concerns. That is far outside a beginner's printed micro drone.
- A PETG-printed 5–7 inch frame on the P2S is possible, but would sit in the "standard ArduPilot build" category that is out of this file's scope.
- Android is not a real-time OS, and every project above added a microcontroller between the phone and the ESCs. In 2026 an ESP32 does that job better and cheaper. The phone is better kept as the controller or ground station than flown.
- The "old phone as 4G camera/telemetry" idea is real (Andruav) but needs an ArduPilot flight controller, a SIM data plan and a larger airframe. It may also run into local rules on cellular use and beyond-visual-line-of-sight flying (not researched here).

### Gaps
- Did not find a maintained 2024–2026 open-source project that uses a phone as the actual flight controller. Searches surfaced only legacy projects.
- No source checked on whether the Andruav Android app is still published on Google Play in 2026 (docs exist on cloud.ardupilot.org).
- No source found for the regulatory status of flying phones with SIMs (cellular-on-drone rules), which vary by country.

---

## 4. Phone-side controller add-ons (Bluetooth gamepads, tilt control) and generic hobby control apps

### Takeaway
Physical sticks beat touchscreen sticks. The best-supported add-ons are Bluetooth or clip-on gamepads paired either to a flight app that supports them (TelloFPV, Crazyflie and ESP-Drone apps, QGroundControl) or directly to an ESP32 via Bluepad32, skipping the phone. Generic maker apps work for a DIY drone with caveats:
- **RemoteXY**: local Wi-Fi/BLE links; used in published ESP32 whoop builds.
- **Dabble**: coarse −7…+7 joystick resolution; iOS joystick bugs.
- **Bluetooth Electronics**: Android only.
- **Blynk and Arduino IoT Remote**: cloud-oriented and documented as unsuitable for real-time flight control.

### Cited Findings
- **TelloFPV**: supports iOS MFi controllers and Android PS/Xbox controllers, plus GameSir T1d/T1s and the Parrot Flypad. The wired clip-on Gamevice "works perfectly" (tiny sticks). Bluetooth Flypad gives better stick precision "but comes with all the problems associated with Bluetooth". Trainer mode needs an external controller (search summary) — [App Store](https://apps.apple.com/app/id1545864950), [TelloPilots](https://tellopilots.com/threads/new-app-tellofpv-for-android.2710/page-48)
- **Crazyflie Android client**: "both touchscreen control and game-pad control", via USB or Bluetooth, with remappable axes — [Bitcraze user instructions](https://www.bitcraze.io/documentation/repository/crazyflie-android-client/master/userguides/user-instructions/)
- **ESP-Drone**: "can be connected to and controlled by an APP or a gamepad over a Wi-Fi network" (search summary) — [Espressif ESP-Drone docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/gettingstarted.html)
- **Bluepad32**: a Bluetooth gamepad host for ESP32/S3/C3 and Pico W. Only the original ESP32 (and Pico W) supports BR/EDR (Bluetooth Classic), which Switch, DualSense and DualShock pads need; S3/C3/C6 are BLE-only (search summary) — [GitHub](https://github.com/ricardoquesada/bluepad32), [FAQ](https://bluepad32.readthedocs.io/en/latest/FAQ/). Used in EDC to fly Tellos with PS3/PS4/Switch pads — [DroneBot Workshop forum](https://forum.dronebotworkshop.com/esp32-esp8266/edc-edudronecontroller/)
- **Flix** (ESP32 quad): RC (CC2500), a gamepad over Wi-Fi, MAVLink, and phone control via QGroundControl; Wi-Fi or ESP-NOW links — [GitHub okalachev/flix](https://github.com/okalachev/flix)
- **QGroundControl**: joystick/gamepad setup documented and tested on Windows, macOS and Linux, with no mention of Android or iOS. It warns that "Flying with a Joystick (or virtual thumb-sticks) requires a reliable high bandwidth telemetry channel… because joystick information is sent over MAVLink" — [QGC docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/setup_view/joystick.html)
- **DroneBridge for ESP32**: MAVLink/MSP/LTM over Wi-Fi or ESP-NOW. Auto-connects to QGroundControl or Mission Planner on UDP 14550. Wi-Fi range "up to 150 meters"; ESP-NOW or Wi-Fi LR "up to 1 kilometer" (ESP32 on both ends). AES-GCM encryption; boards around $7; Apache-2.0 — [GitHub](https://github.com/DroneBridge/ESP32)
- **RemoteXY**: links over "Bluetooth LE, Bluetooth Classic, Wi-Fi access point, Wi-Fi station (STA), Ethernet, USB OTG, Cloud". Local channels need no internet. Android and iOS apps; supports Arduino, ESP8266 and ESP32. No latency figures published — [RemoteXY docs](https://docs.remotexy.com/docs/)
  - Used in an Indonesian journal's ESP32 whoop-type quad controlled by smartphone (search summary) — [Garuda](https://garuda.kemdiktisaintek.go.id/documents/detail/6341869)
  - Used by ESPcopter — [Hackster ESPcopter remote app](https://hackster.io/metehan-emlik/make-an-espcopter-remote-app-cf3d31)
- **Dabble** (STEMpedia): Gamepad module with Digital, Joystick and Accelerometer (phone tilt) modes. Joystick X/Y values range from −7 to 7, with angle in 15° steps. "There are some bugs in the joystick interface of the Gamepad module for iOS devices". ESP32 uses its built-in Bluetooth — [Dabble docs](https://ai.thestempedia.com/docs/dabble-app/gamepad-module/)
- **Bluetooth Electronics** (keuwlsoft): Android-only. Works with HC-05/HC-06 and BLE modules (e.g., HC-08) and USB-serial. Pads, sliders and accelerometer controls; donation-supported — [keuwl.com](http://www.keuwl.com/apps/bluetoothelectronics/)
- **Arduino IoT Remote**: dashboards via Arduino Cloud over the internet; the app is free ("Phone as Device" background mode needs the Maker plan) — [Arduino Cloud](https://cloud.arduino.cc/iot-remote-app/)
- **Blynk**:
  - Send calls are "blocking functions waiting for the network". It is "orientated around home automation where a second or two does not matter" — [Blynk community](https://community.blynk.cc/t/esp-blynk-library-blocking/36816)
  - Users are advised to add command-timeout failsafes — [Blynk community: fail safe](https://community.blynk.cc/t/i-need-a-fail-safe/11648?page=2)
  - The joystick sends only when its position changes — [Blynk community](https://community.blynk.cc/t/joystick-only-sends-when-position-changes/53414)
- Toy-drone apps offer tilt ("gravity induction") control: KY FPV ([mwm.ai](https://mwm.ai/apps/ky-fpv/1486555370)) and WiFi UAV ([mwm.ai](https://mwm.ai/apps/wifi-uav/1471622385)).

### Inferences
- For a DIY ESP32 drone, the best phone-side setup is a flight app built for drones (ESP-Drone/Crazyflie-family apps, or QGroundControl over DroneBridge or Flix MAVLink) plus a Bluetooth or clip-on gamepad.
- Generic maker apps are fine for blimps, rovers and slow planes. They are risky for multirotors because:
  - None publishes a latency or update-rate spec.
  - Dabble's 15-level stick resolution is coarse for throttle.
  - Cloud apps (Blynk, Arduino IoT Remote) add internet round-trips.
- A cheap, robust alternative is to skip the phone for control: pair a PS4 or Switch pad directly with an original ESP32 via Bluepad32. The phone is then used only for setup and video.
- Any approach needs a firmware failsafe (motor cut or auto-land on lost packets), as the Blynk community advice illustrates.

### Gaps
- No measured end-to-end latency numbers found for RemoteXY, Dabble, Bluetooth Electronics, Blynk or the toy-drone Wi-Fi apps.
- Not verified whether QGroundControl's Android build supports physical Bluetooth gamepads (the docs only list desktop OSes).
- Not verified whether the ESP-Drone mobile app itself (as opposed to the PC client) accepts Bluetooth gamepads.

---

## 5. Other printable airframe types that can be phone-controlled (tri/bicopters, coaxial/ducted, blimps, printed fixed-wing/VTOL, paper-plane kits) and fit with the user's filaments

### Takeaway
- **Blimps** are the easiest phone-flown printable aircraft: forgiving physics, about 20–30 min endurance, a printed PLA gondola and an ESP8266/ESP32 with a phone app. The catch is helium: about 1.1 g of lift per litre, so roughly 100 L of balloon per 100 g.
- **Printed fixed-wing/VTOL** designs (Eclipson, 3DLabPrint, Planeprint) suit the P2S. However, many newer designs require LW-PLA (Planeprint P5 models; Eclipson's TL Stream). They are flown by RC, with ArduPilot and the phone as ground station, and are not beginner projects.
- **PowerUp 4.0** ($59.99) is the zero-printing, phone-flown paper-plane option.
- No beginner-ready phone-controlled ESP32 tricopter, bicopter, coaxial or ducted design was found.

### Cited Findings

**Blimps / airships**
- **Blimpduino 2.0** (JJRobots): Arduino-compatible Cortex-M0, ESP8266 Wi-Fi, accelerometer and lidar. Controlled from a smartphone app over Wi-Fi (UDP). Printable gondola, or buy it for $9.12; balloon kit from $5, helium sourced locally. About 20–30 min on 500 mAh; rated 8/10 (review is about 7 years old) — [Raspberry Pi Official Magazine / HackSpace review](https://magazine.raspberrypi.com/articles/take-to-the-skies-blimpduino-review)
- **Bluetooth Micro Blimp** (commercial): $49.99, 24" refillable mylar balloon (helium not included), iOS app with "Tank and Twin Joystick" modes. "No longer available for purchase directly from Vat19" (Amazon only) — [Vat19](https://vat19.com/item/bluetooth-nano-mini-blimp-remote-control)
- UCLA LEMUR blimp competition: ESP32 Feather, 3D-printed component mount, about 120 g total electronics, so a large blimp is needed. Trim by adding helium or putty (search summary) — [UCLA LEMUR GitLab](https://git.uclalemur.com/arnhold/blimp-autonomy/-/tree/26f0b859533c820ee30cca2b491f2cb3b0940aaa), [competition README diff](https://git.uclalemur.com/shahrulkamil98/november-2021-blimp-competition/-/commit/aa4777f089eeffe0427f7a3242fd887305f8d9d6.diff)
- NITK student airship: a helium indoor airship with live ESP32-CAM streaming (search summary) — [ISTE NITK](https://iste.nitk.ac.in/projects/airship)
- Helium lift at sea level is (1.292 − 0.178) = 1.114 kg/m³, i.e., about 1.1 g per litre — [Wikipedia: Lifting gas](https://en.wikipedia.org/wiki/Lifting_gas)

**Printed fixed-wing / VTOL (phone as GCS via ArduPilot; RC usually primary)**
- **Planeprint**:
  - Models from SHARD onward (2022+, "Profile P5") require LW-PLA (e.g., EAGLE NG, HALO+, EVO).
  - Older "P3" models (e.g., Big Bobber, Fouga Magister) use standard PLA with Cura 4.12.1.
  - Bambu printers are recommended for P5; larger models need A1/X1C/P1P/**P2S**-class 180×180×180 mm+ build volume — [planeprint.com/print](https://www.planeprint.com/print)
  - Swift S1: specific parts must be printed in LW-PLA in spiral-vase mode with 1 wall and no top/bottom layers (search summary) — [Swift S1 manual PDF](https://www.air-rc.com/assets/pdf/Swift-S1_3697.pdf)
- **3DLabPrint**: recommends its own PolyAir 1.0, but "any standard quality PLA is ok". Has a "Bambu Studio Setup" help section. Success depends on careful tuning: extrusion multiplier 1.02–1.15, first-layer adhesion, retraction — [3DLabPrint FAQ](https://3dlabprint.com/faq/)
- Users have printed 3DLabPrint planes (Spitfire Mk XVI, Bf 109, 3D Edge, Qtrainer, PT17) on Bambu printers. LW-PLA needs drying to under about 20% RH and careful travel settings (search summary) — [Bambu forum: 3DLabPrint planes](https://forum.bambulab.com/t/3dlabprint-planes-any-ideas/6293), [Printables Bambu LW-PLA profile](https://www.printables.com/model/463381-bambu-lab-profile-lwpla)
- **Eclipson** "UAVs" category prices: PATHFINDER €39, HELIX €27, MODEL X €39, E-VTOL-1 €27, EWW-180 (and EDF variant) €33, EBW-160 UAV €27. Filament per model is not stated on the listing page — [eclipson-airplanes.com/uavs](https://www.eclipson-airplanes.com/uavs)
- Eclipson TL Stream was designed specifically with ColorFabb LW-PLA (4 Nov 2024) — [ColorFabb blog](https://colorfabb.com/blog/post/eclipson-tl-stream-x-colorfabb). A ColorFabb page says a regular-PLA print "would weigh twice as much" for an Eclipson plane (search summary) — [ColorFabb learn: Light Weight Plane](https://learn.colorfabb.com/tag/eclipson)
- Bambu's own lightweight filaments ("PLA-LW" and "PLA-Aero") have been used for RC jets on an X1C (Oct–Nov 2024). Tips: dry 8–10 h at 55–60 °C and calibrate at the chosen temperature (220–260 °C) — [Bambu forum](https://forum.bambulab.com/t/a-first-for-me-bambu-pla-lw-rc-plane/102747)

**Phone-controlled paper plane**
- **POWERUP 4.0**: Bluetooth smartphone control; gyro and accelerometer with autopilot manoeuvres such as loops; extra motor, landing gear and LED lights — [Hackster](https://hackster.io/news/the-smartphone-controlled-paper-airplane-is-back-with-powerup-4-0-6714b0e30edd). 70 m range, about 10 min flight, up to 20 mph; packages were $69.99–$219 at launch (search summary) — [AndroidGuys](https://androidguys.com/reviews/powerup-4-0-smartphone-controlled-paper-airplane-kit/)
- PowerUp shop in Oct 2026: POWERUP 4.0 Airplane $59.99, POWERUP 2.0 $19.99, iOS and Android app — [poweruptoys.com/collections/planes](https://www.poweruptoys.com/collections/planes), [App Store POWERUP 4.0](https://apps.apple.com/app/id1521055394)

**Tri/bicopters, tilt-rotors, coaxial, ducted, and a 2026 ESP32 speed build**
- Existing tri and tilt-rotor resources:
  - "Lego Tricopter Tilt" — [Instructables](https://www.instructables.com/Lego-Tricopter-Tilt)
  - A Hackaday.io flight-controller project with tilt-servo STLs — [Hackaday.io 186410](https://Hackaday.io/project/186410)
  - ArduPilot tilt-tri quadplane conversion thread — [ArduPilot Discourse](https://discuss.ardupilot.org/t/ar-pro-wing-conversion-to-tilttri-quadplane/79697)
  - Betaflight Y-frame tricopter guide — [Zbotic](https://zbotic.in/tricopter-build-guide-unique-y-frame-drone-design/)
  - None of these is phone-controlled out of the box.
- **ESP-Blast** (Max Imagination, 15 Mar 2026): ESP32 flight controller, PETG-printed frame, 136 g, about 67 mph, 450 mAh, about 5 min, about $155. The control method and open-source status are not stated by TechSpot — [TechSpot](https://www.techspot.com/news/111684-155-esp32-powered-diy-drone-can-hit-67.html). Notebookcheck's headline calls it "open-source" (conflict, unverified) — [Notebookcheck](https://www.notebookcheck.net/Tiny-open-source-3D-printed-drone-hits-67-mph-and-weighs-136-grams.1249623.0.html)

### Inferences
- **Fit to the user's filaments (PLA, PETG, TPU 85A, TPU 65D; no LW-PLA):**
  - **Blimp:** PLA gondola and motor pods; TPU 85A bumpers. Excellent fit. Cost is mainly an ESP32 or ESP8266 board, two or three small motors with a driver, and a 24–36" mylar balloon plus helium.
  - **3DLabPrint** (standard PLA OK) and **Planeprint P3** models: possible in PLA, but the user must learn thin-wall slicing. 3DLabPrint has a Bambu Studio setup page.
  - **Planeprint P5** and LW-PLA Eclipson designs: the user would need to buy LW-PLA (Bambu PLA-LW/Aero or ColorFabb LW-PLA) and dry it.
  - **PETG** suits motor mounts and small brushless frames (ESP-Blast precedent). **TPU 65D** could suit ducts or bumpers. I found no published ducted or coaxial ESP32 design to copy.
- **Phone fit.** Fixed-wing aircraft generally need an RC transmitter for safe manual flight. A phone is best used as a QGroundControl ground station with ArduPilot over DroneBridge, at about 150 m Wi-Fi range. That makes this route more advanced and costly than multirotors. PowerUp 4.0 is the only plug-and-play phone-flown plane found.
- **PowerUp 2.0.** The $19.99 POWERUP 2.0 is, to my knowledge, a non-smartphone propulsion module (smartphone control arrived with 3.0). This is not verified in this research.
- **Indoor first flights.** For a beginner, a blimp or a toy-donor quad is safer indoors than any printed plane.

### Gaps
- No phone-controlled ESP32 bicopter, tricopter, coaxial or ducted-fan design with build docs was found. The search budget ran out before ducted/coaxial-specific queries could be tried.
- Could not confirm which Eclipson UAV/VTOL models (e.g., E-VTOL-1) need LW-PLA, or what flight controller they recommend; the product pages were not fetched.
- Whether Blimpduino 2.0 kits are still sold in 2026 (JJRobots store) is unverified.
- No current price found for a ready-made ESP32 blimp kit.

---

## 6. PCB-as-frame, print-in-place frames, and other minimal-part approaches

### Takeaway
"PCB as frame" is well proven:
- LiteWing: about $12 in parts; $50–60 kits.
- ESP-Drone and Crazyflie (covered elsewhere).
- Chiindii: an old ATmega/STM32 build with a 10 × 10 cm PCB frame, Bluetooth phone link and about $50 cost.

On the printing side, minimal-part designs come in a few forms:
- Two-part printed frames: ESP-FLY (4 g) and Flix.
- Snap-on, support-free shells for existing drones: Tello LEM.
- Modular TPU/PLA whoop frames: PEP85.
- Historically, the no-solder FlexBot kit with printed hulls.

No true print-in-place (single print, no assembly) drone frame was found.

### Cited Findings
- **LiteWing**: the PCB is the chassis ("some parts are cut out… serve as feet"). ESP32-WROOM-32, MPU6050, four 720 coreless motors with 55 mm props, 1300 mAh Li-ion, TP4056 charging, USB-C. About $12 in parts; kits $50 (no battery), assembled $60, $20 international shipping. Open hardware and firmware (ESP-Drone-based); Crazyflie-derived apps — [CNX Software, Sep 2024](https://www.cnx-software.com/2024/09/21/low-cost-diy-esp32-drone-12-dollars/)
- An ESP32 drone guide where the PCB is the main structure, with "no need for 3D printed parts"; phone-controlled (search summary) — [Gigazine, Dec 2024](https://gigazine.net/gsc_news/en/20241224-esp32-drone-diy)
- **Chiindii**: frame "completely made of PCB", fitting a 10 × 10 cm DirtyPCBs board. ATmega32u4, later STM32F410. 20 × 8 mm coreless toy-replacement motors. Bluetooth (HC-05/06) or XBee for phone or PC control. About $50; under 50 g; last updated about 9 years ago — [Hackaday.io 8488](https://hackaday.io/project/8488), [GitHub](https://github.com/thebiguno/microcontroller-projects/tree/master/projects/chiindii)
- **ESP-FLY**: XIAO ESP32S3 with MPU-6050; a 50 mm printed closed-body frame of about 4 g, or a DIY PVC frame; flown from a phone via the ESP-Drone app — [Elektor Labs](https://www.elektormagazine.com/labs/esp-fly-the-smallest-esp32-drone-you-can-build), [GitHub Seeed-Projects/Co-Create_ESP-FLY](https://github.com/Seeed-Projects/Co-Create_ESP-FLY). About $37 in parts, about 18 g without battery, 6 × 15 mm motors (search summary) — [Zelpio](https://zelpio.com/blog/build-fly-esp32-micro-drone/)
- **Flix**: a two-part printed airframe (frame base plus ESP32 holder), "layer 0.2 mm, line 0.4 mm, infill 100%", 8520 brushed motors. A PCB version (v2) is in development — [GitHub okalachev/flix](https://github.com/okalachev/flix)
- **PEP85**: printed 85 mm whoop frame that "prints fast, requires no supports". Modular: reprint only broken parts. Canopy and battery holders in TPU (Betaflight-class; not phone) (search summary) — [Printables 1204932](https://www.printables.com/model/1204932-pep85-3d-printed-whoop-drone-85mm-frame)
- **Tello LEM shell**: prints without supports, snap-on dish, paperclip-reinforced hollow legs — [Printables 89990](https://www.printables.com/model/89990-tello-drone-lem-lunar-excursion-module)
- **FlexBot** (2016): no-solder kit with a 3D-printed frame, cap and base; phone Bluetooth control; custom printable shells — [MacTrast](https://www.mactrast.com/2016/04/mactrast-deals-flexbot-diy-camera-drone-kit/)
- **Pluto X**: Drona encourages students to 3D-print their own frames around Pluto electronics — [ElectronicsForU](https://electronicsforu.com/technology-trends/arduino-is-for-electronics-raspberry-pi-is-for-computing-we-aim-to-become-that-for-drones-with-pluto)

### Inferences
- The best "minimal-part plus printer" combination is a PCB-frame ESP32 drone (LiteWing-style) with printed add-ons: TPU 85A prop guards, a PLA landing skid, a camera or LED pod. The PCB carries the structural loads, the printer handles crash protection and styling, and the phone app is already solved.
- For the toy-donor route, the minimal-part version is a single PLA or PETG "tub" body with integrated 716 motor clips, plus a TPU 85A bumper ring. This is two prints, keeping the donor's geometry.
- True print-in-place (hinged or captive parts in one print) is plausible for folding arms or guard clips on the P2S, but no flight-proven design was found.

### Gaps
- No print-in-place drone frame (single print, no assembly) was found, nor any test data on PLA, PETG or TPU print-in-place hinges for drone arms.
- Did not verify LiteWing kit pricing or availability in Oct 2026; the CNX article is from Sep 2024.
