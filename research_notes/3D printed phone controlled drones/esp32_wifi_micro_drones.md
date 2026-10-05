# Phone-controlled, 3D-printable micro drones built on ESP32/ESP8266 and other WiFi/BLE microcontrollers: project catalog (state as of 5 Oct 2026)

Method notes for the report writer:
- GitHub stars, forks, licence and "last push" come from the GitHub API search endpoint, queried on 2026-10-05. "Last push" is the `pushed_at` field, meaning the last commit pushed to any branch. Where only `updated_at` was available, the entry says so; that field also changes when someone stars the repo, so it is not a commit date.
- Prices are in USD where the source gives USD. Other currencies are shown as found.
- The shared web-search budget ran out near the end of this research, so some items (Makerfabs/Ai-Thinker kits, Arduino Nano 33 BLE projects, Reddit experience reports) are listed as gaps instead of being researched further.
- Materials, generic tools and regulations are out of scope. They appear here only where a project's own docs specify them.

## 1. Which projects exist, and how do they compare (hardware, BOM/cost, sensors, flight modes, phone app, link, range, flight time, difficulty, docs, licence, activity)?

### Takeaway
As of October 2026, the projects that you can fly natively from a phone are:
- **Espressif ESP-Drone.** The firmware is still occasionally updated, but its official app is from 2020 and the reference frame is a PCB.
- **CircuitDigest LiteWing.** A ready-to-fly ESP-Drone derivative for about $49, with a PCB frame and a new LiteWing app for Android and iOS (2025–26).
- **Seeed Studio × Max Imagination ESP-FLY.** New in 2026. It uses a XIAO ESP32-S3 and a 3D-printed 50 mm frame, flies with the ESP-Drone app, and sells as a $59.99 kit.
- **Flix (okalachev).** The best-documented DIY build that is genuinely 3D-printed and uses only off-the-shelf modules. Phone control goes through QGroundControl or the Mavlink Joystick app, both **Android-only**.

Projects that are not natively phone-flown or not printable:
- **StampFly and ESP-FC** are capable platforms, but they are flown with ESP-NOW handheld transmitters or RC radios, not a phone.
- **Crazyflie 2.1+** flies from a phone over BLE, but it costs $240 and only accessories are printable. The $480 Brushless model is not supported by the Android app.
- **Pluto** has an actively maintained phone app, but it has a nylon frame and is sold mainly in India.
- **ESPcopter** appears to be defunct.

### Cited Findings

#### 1.0 Summary table (details and more sources in the per-project entries below)
| Project | MCU | Frame | Native phone control | Flight modes | Flight time / AUW | Price | GitHub activity (2026-10-05) |
|---|---|---|---|---|---|---|---|
| ESP-Drone (Espressif) | ESP32 / S2 / S3 | All-in-one PCB (ref. V1.2) | ESP-Drone app (iOS v1.0.1, 2020; Android APK), WiFi AP + UDP | Stabilize, height-hold, position-hold (the holds need add-on boards) | not documented | no official kit price found | 2,219★, last push 2026-08-10, GPL-3.0 ([repo](https://github.com/espressif/esp-drone)) |
| LiteWing (CircuitDigest) | ESP32-S3 (V2.5C/V2.6/V3.0); original 2024 version used ESP32-WROOM-32 | FR4 PCB, 100×100 mm | LiteWing app (Android + iOS), ESP-Drone app, CRTP over UDP | Angle (stabilized), height hold with ToF add-on, position hold with optical-flow add-on | ~45 g without battery; flight time not documented | $49 assembled, no battery ([Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/)) | 53★, last push 2026-05-29 ([repo](https://github.com/jobitjoseph/LiteWing)) |
| ESP-FLY (Seeed × Max Imagination) | XIAO ESP32-S3 | **3D-printed** 50 mm frame (~4 g) | ESP-Drone app over WiFi AP; optional ESP-NOW radio with ESP-FC | Angle, Acro | 5–5.5 min; 25 g | $59.99 kit ([Seeed](https://www.seeedstudio.com/ESP-FLY-co-create-p-6744.html)) | 125★, last push 2026-04-30, GPL-3.0 ([repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)) |
| Flix (okalachev) | ESP32 Mini (also ESP32-S3/C3) | **3D-printed** (STL/STEP in repo) | QGroundControl virtual joystick or Mavlink Joystick (both Android), MAVLink over WiFi AP | STAB, ACRO, RAW, AUTO (Python) | not documented | DIY only; no official BOM cost | 2,044★, last push 2026-09-30, no licence file detected ([repo](https://github.com/okalachev/flix)) |
| ESP-FC (rtlopez) | ESP32 / ESP32-S3 | any (bring your own) | **No.** WiFi is for configuration only; ESP-NOW needs a DIY transmitter | ACRO, ANGLE, AIRMODE | n/a | free firmware | 850★, last push 2026-10-03, MIT ([repo](https://github.com/rtlopez/esp-fc)) |
| M5Stack StampFly | ESP32-S3 (StampS3 / StampS3A) | Molded plastic (not printable) | **No phone app.** Atom JoyStick over ESP-NOW; firmware also accepts UDP over its own AP | ACRO, STABILIZE, ALT_HOLD, POS_HOLD (ecosystem firmware) | ~4 min; 27.6–36.8 g (sources conflict) | ¥10,439 (v1.1, JP); £54 (UK) | ecosystem: 48★, last push 2026-10-03, MIT ([repo](https://github.com/M5Fly-kanazawa/stampfly_ecosystem)) |
| Crazyflie 2.1+ / 2.1 Brushless (Bitcraze) | STM32F405 + nRF51822 | Molded/PCB; printable parts only | "Crazyflie 2" iOS app and Android app over BLE (the Android app does not support Brushless) | Manual; flow-deck assisted modes | 7 min / 29 g (2.1+); 10 min / 34 g (Brushless) | $240 / $480 ([store](https://store.bitcraze.io/collections/kits)) | firmware 1,555★, last push 2026-10-02, GPL-3.0 ([repo](https://github.com/bitcraze/crazyflie-firmware)) |
| Pluto 1.2 / Pluto X (Drona Aviation) | Primus FC boards | Nylon (not printable) | Pluto Controller app (iOS v5.2.0, updated about 2026-09-30; Android) over WiFi hotspot | app-assisted; flips | 8–9+ min; 54–60 g (Pluto 1.2, retailer data) | Pluto X ₹14,000 MRP | Magis firmware 38★ ([repo](https://github.com/DronaAviation/Magis)) |
| PicoW Copter | Raspberry Pi Pico W | **3D-printed** PLA | UDP Joystick (Android, via Aptoide) over WiFi AP | auto-level, manual | <60 g (docs) | ~$25–30 BOM | 67★, last push 2024-05-17 (inactive) ([repo](https://github.com/anish-natekar/PicoW_Copter)) |
| ESPcopter | ESP8266-12S | not documented in the sources found | Browser UI / app over WiFi | not documented | 35 g | $49 kit (2017 crowdfunding) | official site unreachable 2026-10-05 |

#### 1.1 Espressif ESP-Drone (ESP32/S2/S3, Crazyflie-derived)
- **What it is.** "ESP-Drone is an open source solution based on Espressif ESP32/ESP32-S2/ESP32-S3 Wi-Fi chip, which can be controlled by a mobile APP or gamepad over Wi-Fi". The main code is ported from Crazyflie under GPL-3.0, and the build environment is ESP-IDF release/v5.0. — [ESP-Drone README](https://github.com/espressif/esp-drone)
- **Features listed:** Stabilize mode, Height-hold mode, Position-hold mode, app control, cfclient support (via the [leeebo/crazyflie-clients-python](https://github.com/leeebo/crazyflie-clients-python) fork) and ESP-BOX3 joystick control through ESP-NOW. "To implement Height-hold/Position-hold mode, extension boards are needed." — [ESP-Drone README](https://github.com/espressif/esp-drone)
- **Maintenance status:** "From December 2022, we will offer limited support on this project, but Pull Request is still welcomed!" — [ESP-Drone README](https://github.com/espressif/esp-drone). The repo has 2,219 stars, 511 forks and 34 open issues, uses GPL-3.0, and was last pushed 2026-08-10 — [GitHub](https://github.com/espressif/esp-drone)
- **Reference hardware, ESP32-S2-Drone V1.2:**
  - ESP32-S2-WROVER with an MPU6050 IMU on I2C.
  - 716 brushed coreless motors (720 optional) with 46 mm propellers (55 mm optional).
  - 300 mAh 1S LiPo (350 mAh optional).
  - All-in-one PCB frame.
  - Extension boards: position-hold "PMW3901 + VL53L1X", MS5611 pressure module, HMC5883 compass.
  - Source: [ESP-Drone hardware docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)
- **Legacy ESPlane-FC-V1:** "ESP32-WROOM-32D + MPU6050", 46 mm props, 300 mAh 1S. It "requires external drone frame assembly" and is marked as old hardware. This is a precedent for putting ESP-Drone electronics on a separate (for example, printed) frame. — [ESP-Drone hardware docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)
- **Link:** the drone acts as a WiFi AP with SSID `ESP-DRONE_XXXX` and password `12345678`. — [ESP-Drone Get Started](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/gettingstarted.html)
- **iOS app:**
  - "ESP-Drone" by Espressif Systems (Shanghai), version 1.0.1, last updated **July 16, 2020**, requires iOS 10.0 or later. It is still listed free on the App Store with 1 rating. — [App Store](https://apps.apple.com/app/id1522247884)
  - The app communicates over Wi-Fi using UDP. — [App Store](https://apps.apple.com/app/id1522247884)
- **Android app:**
  - Distributed by QR code in the docs; there is no Play Store listing in the docs. — [gettingstarted.rst](https://github.com/espressif/esp-drone/blob/master/docs/en/rst/gettingstarted.rst)
  - The ESP-FLY guide links the "Android APK via pgyer link" (a Chinese app-hosting site). — [Elektor ESP-FLY](https://www.elektormagazine.com/labs/esp-fly-the-smallest-esp32-drone-you-can-build)
  - Users reported "Error 502" when trying to download the ESP-Drone Android app. — [esp32.com thread](https://esp32.com/viewtopic.php?p=155487)
  - The Android source ([ESP-Drone-Android](https://github.com/EspressifApps/ESP-Drone-Android)) is a fork of the Crazyflie Android client with about 105 stars.
- **Third-party verdict on the app:** CircuitDigest (Sept 2025) says the ESP-Drone app "only covers the basic flight capabilities and no longer seems to be actively maintained" — [CircuitDigest](https://circuitdigest.com/articles/litewing-esp32-drone-gets-new-mobile-app). Its flight guide adds that the old ESP Drone app is being phased out "due to compatibility issues with modern devices" — [CircuitDigest flight guide](https://circuitdigest.com/articles/start-flying-with-litewing)
- **Not in the docs:** weight, flight time, range and BOM cost are not documented in the hardware docs. — [ESP-Drone hardware docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)

#### 1.2 CircuitDigest LiteWing (ESP-Drone derivative; V2.5C → V3.0)
- **Positioning:** a "compact, WiFi-controlled drone based on the ESP32-S3"; "LiteWing connects to your smartphone, allowing for an intuitive flying experience without additional hardware." — [LiteWing GitHub](https://github.com/jobitjoseph/LiteWing)
- **Current specs, LiteWing V3.0 ("more GPIO pins, sensor mounts, LED indicators"):**
  - ESP32-S3 (dual-core LX7, 240 MHz) and MPU6050 IMU.
  - 720 coreless motors with MOSFET PWM; 55 or 65 mm props.
  - "3.7 V 1S Li-Po battery, 20C or higher"; TP4056 charger (1 A); SPX3819 LDO.
  - 100×100 mm, "~45 g (without battery)", payload "~25 g (with 55 mm propellers)", "Custom FR4 PCB frame".
  - Link: Wi-Fi 2.4 GHz "CRTP over UDP".
  - Programming: ESP-IDF firmware (based on ESP-Drone), Python cflib, cfclient, Arduino IDE, Blockly; the page also claims Betaflight support.
  - Optional "Drone Positioning Module": VL53L1X ToF for height hold, PMW3901 optical flow for position hold ("Tested and working"), MS5611 barometer ("Coming soon").
  - Licence: "CC license", with schematics, Gerbers and firmware available.
  - Source for all of the above: [LiteWing wiki](https://circuitdigest.com/wiki/litewing/)
- **Version history:**
  - The original 2024 LiteWing used an **ESP32-WROOM-32**, MPU6050, four 720 coreless motors, 55 mm props and a TP4056. Its PCB is the chassis, "eliminating need for 3D-printed parts". DIY cost was "around 1000 Rupees… or $12". — [CNX Software, Apr 2024](https://www.cnx-software.com/2024/04/02/low-cost-diy-esp32-drone-12-dollars/)
  - CNX says that version used a "1300mAh Li-Ion battery"; current docs only specify a 1S LiPo of 20C or higher. — [CNX](https://www.cnx-software.com/2024/04/02/low-cost-diy-esp32-drone-12-dollars/) vs [wiki](https://circuitdigest.com/wiki/litewing/)
- **Prices and availability:**
  - Kickstarter (2024): "$50 kit" (no battery) and "$60" fully assembled; shipping was $2 to India and $20 elsewhere. The CNX author noted that "similar ESP32 drones on Aliexpress" cost "about $40 shipped". — [CNX](https://www.cnx-software.com/2024/04/02/low-cost-diy-esp32-drone-12-dollars/); [Hackster](https://hackster.io/news/circuitdigest-opens-crowdfunding-for-the-low-cost-espressif-esp32-powered-litewing-drone-4359579cf3fe)
  - Tindie, Oct 2026: **$49.00**, fully assembled and "ready to fly", but "shipped without a battery". The seller is in Jaipur, India, and the listing showed "Only 9 left". — [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/)
  - Other listed sellers: [Quartz Components](https://quartzcomponents.com/products/litewing-esp32-based-programmable-drone-with-battery-ready-to-fly), [Robu.in](https://robu.in/product/circuit-digest-litewing-drone-development-board/), [Elecrow](https://www.elecrow.com/litewing-esp32-based-programmable-drone.html), [RoboCraze](https://robocraze.com/products/litewing-esp32-s3-programmable-ready-to-fly-drone-development-board-with-battery), [Amazon](https://www.amazon.com/dp/B0GNN1MGC7). — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/)
- **Phone app (new, 2025):**
  - "LiteWing" by CircuitDigest, announced Sept 4, 2025, for Android ([Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller)) and iOS ([App Store](https://apps.apple.com/in/app/litewing/id6751232172)).
  - Features: height hold mode, trim, battery-voltage monitoring with low-battery warnings, emergency stop, gradual landing, exponential stick curve, and support for "other mini drones that works using the crazyflie protocol".
  - The article does not say whether the app is open source.
  - Source: [CircuitDigest announcement](https://circuitdigest.com/articles/litewing-esp32-drone-gets-new-mobile-app)
- **Google Play listing as of 2026-10-05:** "Mobile drone controller for LiteWing and other ESP32/Crazyflie based Drones", updated **Mar 24, 2026**, 1K+ downloads, 4.5★ from 11 reviews. — [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller)
- **iOS listing caveat:** a WebFetch of the Indian App Store URL returned HTTP 404 on 2026-10-05, although search results still indexed it in the IN, BS and JP storefronts. Current iOS availability is unconfirmed. — [App Store IN](https://apps.apple.com/in/app/litewing/id6751232172)
- **Connection:**
  - SSID `LiteWing_xxxxxxxxxxxx`, password `12345678`.
  - "Some Android devices were not able to connect to drones when mobile data was enabled". The fix is airplane mode with WiFi on, and VPNs off.
  - Yaw is disabled by default in the app.
  - Source: [LiteWing flight guide](https://circuitdigest.com/articles/start-flying-with-litewing)
- **Repo:** [jobitjoseph/LiteWing](https://github.com/jobitjoseph/LiteWing) has 53★, 58 forks, licence reported as "Other", and was last pushed 2026-05-29.
  - Positioning-module firmware is published only as a binary, under `LiteWing Firmware binary files` in the [Circuit-Digest/LiteWing repo](https://github.com/Circuit-Digest/LiteWing/tree/main/LiteWing%20Firmware%20binary%20files/LiteWing%20Flight%20Positioning%20Module%20Firmware).
  - A user complained that "only part of the firmware source appears to be publicly available". — [issue #18](https://github.com/jobitjoseph/LiteWing/issues/18)
- **Printability:** no 3D-printable accessories are mentioned on the wiki — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/). The frame is the PCB.

#### 1.3 ESP-FLY (Seeed Studio × Max Imagination, 2026; XIAO ESP32-S3)
- **What it is:** a "50 mm class micro drone" built from a XIAO ESP32-S3 stacked on a custom 4-layer IMU/motor-driver PCB. — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
- **Specs:**
  - MPU-6050 IMU and 4× SI2300 MOSFETs.
  - 4× 615 coreless motors ("70,000 RPM, approx. 17 g thrust each") with 30 mm tri-blade props.
  - 1S 250 mAh LiPo with JST-PH 2-pin connector.
  - Weight 18 g without LiPo, 25 g with LiPo, 28 g with FPV camera.
  - Flight time ~5 min typical, "up to ~5.5 minutes tested".
  - Range "Approx. 50 m via Wi-Fi / up to approx. 200 m via ESP-NOW".
  - Flight modes "Angle and Acro"; no altitude hold, GPS or autonomy.
  - Recommended maximum payload about 3 g; batteries of 150–350 mAh are usable.
  - Source: [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
- **Control:** "Fly from your phone using the drone's 2.4 GHz Wi-Fi Access Point with the ESP-Drone mobile app". Alternatively, flash rtlopez's ESP-FC and use an ESP-NOW radio with the Betaflight Configurator. — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
- **Firmware lineage:** a modified version of ESP-Drone and of CircuitDigest's modified version, under GPL-3.0. — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
- **Kit:**
  - **$59.99**, $49.99 each for 10+ units, "In stock", shipped from the China warehouse. — [Seeed product page](https://www.seeedstudio.com/ESP-FLY-co-create-p-6744.html); [CNX, May 2026](https://www.cnx-software.com/2026/05/01/esp-fly-diy-kit-tiny-esp32-s3-based-diy-micro-drone-kit/)
  - Contents: XIAO with headers, antenna, the **pre-assembled** IMU/motor module, motors, 8 props, 250 mAh LiPo and the printed frame set (frame, standard cover and FPV cover).
  - Not included: soldering iron, superglue, prop remover, USB-C cable.
  - Assembly "mainly requires basic soldering". — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
  - Also listed by [Think Robotics (India)](https://thinkrobotics.com/products/esp-fly-diy-micro-drone-kit-based-on-xiao-esp32-s3) and [OpenELAB (EU)](https://openelab.io/nl/products/seeed-studio-esp-fly-diy-kit-diy-micro-drone-kit).
- **DIY route (original Elektor/Instructables build):**
  - BOM total "$37.30 USD (±$10)": XIAO ESP32-S3 $7.49, MPU6050 $4.40, 4 motors $10.99, 150–250 mAh LiPo $9.99, PCB from JLCPCB $0.42.
  - Self-assembling the PCB needs a "soldering iron with SMD stencil, hot plate for reflow".
  - Frame STL is on [Cults3D](https://cults3d.com/en/3d-model/gadget/esp-fly-an-esp32-micro-drone-body-frame-3d-design-stl-files); a search-result summary described these files as offered for purchase.
  - Print settings: ePLA, "Layer Height: 0.12mm, Infill Density: 10%, Support: Yes, Speed: 100mm/s, Nozzle Temp: 220°, … Bed Temp: 60°", about 30 min print, about 4 g.
  - A PVC-sheet frame alternative is documented.
  - The article claims "100m+" range and "7-25ms latency", which conflicts with Seeed's "~50 m".
  - Source: [Elektor Labs](https://www.elektormagazine.com/labs/esp-fly-the-smallest-esp32-drone-you-can-build)
- **Repo:** 125★, 19 forks, created 2026-04-22, last push 2026-04-30, GPL-3.0. — [GitHub](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)

#### 1.4 Flix (okalachev) — ESP32, 3D-printed frame, MAVLink
- **Features:**
  - "Simple and clean source code in Arduino (<2k lines firmware)".
  - "Communication using MAVLink protocol over Wi-Fi or ESP-NOW".
  - "Control with USB gamepad, remote control or smartphone".
  - Gazebo simulation, Python library, and a textbook in development.
  - "Position control (planned)".
  - Source: [Flix README](https://github.com/okalachev/flix)
- **Components (Version 1.1, 3D-printed frame):**
  - ESP32 Mini; ESP32-S3/C3 boards are also supported.
  - IMU: GY-91 / MPU-9265 (MPU-9250/6500), ICM-20948, or GY-521 (MPU-6050). The barometer is "not used for now".
  - "8520 3.7V brushed motor" — "Motor with exact 3.7V voltage is needed, not ranged working voltage (3.7V — 6V)".
  - 55 or 65 mm props.
  - MOSFET "UMW 100N03A" — "don't use KIA 100N03A or other manufacturers, they might not work!"
  - 10 kΩ pull-down resistors.
  - Battery: LW 952540, "25C with 1000 mAh or more is recommended", MX2.0 2P connector.
  - Optional 5 V boost converter "for more stable power supply".
  - M3x5 and M1.4x5 screws.
  - Source: [Flix README](https://github.com/okalachev/flix)
- **Frame:** "3D printed: stl, step. Recommended settings: layer 0.2 mm, line 0.4 mm, infill 100%". The frame "is optimized for GY-91 board". The top part is an ESP32 holder, plus printed M3 washers.
  - Tools listed: "3D printer. Soldering iron. Solder wire (with flux). Screwdrivers. Multimeter."
  - Source: [Flix README](https://github.com/okalachev/flix)
- **Assembly tips:** the ESP32 is attached with double-sided tape and the MOSFETs are taped to the frame. "Motors should be installed very tightly — any vibration may lead to bad attitude estimation and unstable flight." — [Flix assembly](https://github.com/okalachev/flix/blob/master/docs/assembly.md)
- **Firmware:**
  - Prebuilt web-flashable binaries for ESP32 (DevKit, D1 Mini), ESP32-S3 (Super Mini, Zero), ESP32-C3 Super Mini and the "Flix2 board".
  - Building from source uses Arduino IDE with ESP32 core 3.3.10, the `FlixPeriph` library and MAVLink 2.0.33.
  - Supported IMUs: MPU-9250/6500, ICM-20948, MPU-6050 and ICM-40609-D.
  - IMU loop rate should be "about 1000 (Hz)".
  - Source: [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **Phone control:**
  - (a) The [Mavlink Joystick app](https://github.com/goldarte/mavlink-joystick/releases/latest) (Android APK from GitHub). Connect the phone to the `flix` WiFi network, password `flixwifi`.
  - (b) The QGroundControl mobile app with "Virtual Joystick" enabled and "Auto-Center Throttle" **disabled**.
  - Tip: "Decrease `CTL_ATT_MAX` parameter when flying using the smartphone".
  - Source: [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **Mavlink Joystick repo:** created 2026-04-27, last push 2026-06-19, Kotlin, 14★. — [GitHub](https://github.com/goldarte/mavlink-joystick)
- **QGroundControl platforms:** the official docs list Windows, macOS, Ubuntu and **Android** only. Android ships as a direct APK and needs Android 9+. iOS is not mentioned. — [QGC download docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html)
- **Link options:**
  - `WIFI_MODE` 1 = AP. 2 = STA, which "may cause additional delays, so generally not recommended". 3 = ESP-NOW.
  - ESP-NOW "can provide lower latency, better reliability, and longer range than Wi-Fi" but "requires a second ESP32 board" as a proxy.
  - Source: [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **Flight modes:**
  - STAB, the main mode: "The drone doesn't stabilize its position, so slight drift is possible".
  - ACRO.
  - RAW, which "cannot fly".
  - AUTO, driven by the pyflix Python library.
  - Source: [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **Status and roadmap:**
  - The official PCB "(Flix2) is in development now".
  - Position control is in development; the RoboCamp 2026 demo used an overhead camera.
  - Source: [Flix README](https://github.com/okalachev/flix)
  - At RoboCamp (July 2026), "Several participants were able to implement altitude hold, and two participants implemented stable position hold" using distance sensors and an overhead camera. — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)
- **Community builds** ([user builds gallery](https://github.com/okalachev/flix/blob/master/docs/user.md)):
  - A QX95 frame build with MPU6050 and 1050 mAh 25C battery: "total quadcopter weight of 66 g".
  - ESP32 D1 Mini with MPU-6050, 8520 motors and 1200 mAh, flown "via Mavlink Joystick app".
  - A brushless DShot build, an ESP32-C3 SuperMini build with a Bluetooth gamepad (Flydigi Vader 3), and an ESP32-S3-CAM camera build.
  - A third-party Cults3D frame ([FanBy0ru](https://cults3d.com/en/3d-model/gadget/armature-pour-flix-drone)).
  - A Chinese custom-PCB variant "with a big community of users" ([oshwhub malagis](https://oshwhub.com/malagis/esp32-mini-plane)).
  - Used in courses: School 548 Moscow (2025) and RoboCamp 2025/2026.
- **Community channels:** Telegram channel and chat, in English and Russian. — [Flix README](https://github.com/okalachev/flix)
- **Repo:** 2,044★, 327 forks, 2 open issues, last push 2026-09-30. — [GitHub](https://github.com/okalachev/flix)
- **Licence:** the GitHub API reports **no licence**, and LICENSE / LICENSE.md / LICENSE.txt / COPYING returned 404 at the repo root on 2026-10-05. The derivative Sprig-Drone states that Flix is "used and modified under the MIT License". This conflict is unresolved. — [Sprig-Drone](https://github.com/Frapais/Sprig-Drone)
- **Author's disclaimer:** "it's not easy to assemble and set up". — [Flix README](https://github.com/okalachev/flix)

#### 1.5 ESP-FC (rtlopez) — Betaflight-compatible ESP32 firmware
- **Features:**
  - Targets ESP32 and ESP32-S3; brushed and DShot output.
  - "Builtin ESP-NOW receiver and WiFi configuration".
  - Gyros: MPU6050, MPU9250, ICM20602, ICM42688, BMI160.
  - Flight modes "ACRO, ANGLE, AIRMODE".
  - "Betaflight configuration tool compatible (v10.10)".
  - Up to 4 kHz loop with an SPI gyro.
  - Altitude hold is on the TODO list.
  - Source: [ESP-FC README](https://github.com/rtlopez/esp-fc)
- **Phone control: not supported natively.**
  - "WiFi function can only be used to configure device. Whilst WiFi is active, it is not possible to ARM controller".
  - For ESP-NOW control, "there are no real transmitters usng this protocol on the market, you have to build your own transmitting module first" ([espnow-rclink-tx](https://github.com/rtlopez/espnow-rclink-tx), for a radio with a JR bay).
  - Source: [ESP-FC wireless docs](https://github.com/rtlopez/esp-fc/blob/master/docs/wireless.md)
- **Board support:** ESP32 and ESP32-S3 "recommended"; ESP32-C3 "experimantal, lack of performance, no FPU"; ESP8266 "obsolete". The project has a Discord. — [ESP-FC README](https://github.com/rtlopez/esp-fc)
- **Repo:** 850★, MIT, last push 2026-10-03. — [GitHub](https://github.com/rtlopez/esp-fc)
- **Use in kits:** ESP-FLY offers ESP-FC as its radio-control alternative. — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)

#### 1.6 M5Stack StampFly (ESP32-S3) — not natively phone-flown
- **v1.0 specs** ([M5Stack docs](https://docs.m5stack.com/en/app/Stamp%20Fly)):
  - ESP32-S3 at 240 MHz with 8 MB flash.
  - BMI270 IMU, BMM150 magnetometer, BMP280 barometer.
  - 2× VL53L3C ToF ("Max 3 m"); a PMW3901MB optical-flow part appears in the schematics; INA3221 power monitor.
  - "Motor: 716-17600kv" coreless.
  - "300mAh High-Voltage Lithium Battery" at 4.35 V, "Battery Life: Approx. 4 min".
  - "Weight: 27.7g", 81.5×81.5×31 mm.
  - Remote: "Atom JoyStick" via "ESP-NOW protocol".
- **v1.1:**
  - Released **July 6, 2026** with the StampS3A core: "optimized antenna design with significantly improved wireless reception" and a 320 mAh LiHV battery.
  - 27.6 g, about 4 min flight, ¥10,439 including tax.
  - The box contains the drone, battery, prop tool and 2 spare props.
  - Source: [Switch Science](https://www.switch-science.com/products/11202)
- **Other retail prices:** £54 at [The Pi Hut](https://thepihut.com/products/m5stamp-fly-with-m5stamps3) and AU$129.95 at [Core Electronics](https://core-electronics.com.au/m5stamp-fly-programmable-open-source-quadcopter-kit.html).
- **StampFly Ecosystem firmware (2026)** ([stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem)):
  - ACRO, STABILIZE, ALT_HOLD and POS_HOLD modes.
  - ESP-IDF v5.5.2 with a 400 Hz loop and an ESKF estimator.
  - Controller link: "ESP-NOW (TDMA-synchronized, up to 10 vehicles) or UDP (via the vehicle's WiFi access point)".
  - PC link: "WiFi telemetry at 50 Hz… Tello-SDK-compatible API".
  - Browser Blockly programming, simulators, and a web flasher.
  - Measured mass "about 37 g (measured 36.8 g)", which conflicts with M5Stack's 27.7 g.
  - Repo: MIT, 48★, last push 2026-10-03.
- **No official phone app:** none was found in the M5Stack docs or the ecosystem README. The controller is an M5Stack AtomS3 + Atom JoyStick. — [stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem)
- **Related:** madflight lists a "ESP32-S3 M5Stack Stampfly" build flown with an ELRS receiver. — [madflight](https://github.com/qqqlab/madflight)

#### 1.7 Bitcraze Crazyflie 2.1+ / 2.1 Brushless (BLE phone apps; printable accessories only)
- **Crazyflie 2.1+:**
  - STM32F405 + nRF51822, BMI088 IMU, BMP388 barometer.
  - 29 g, 92×92×29 mm, "Flight time: 7 minutes", max payload 15 g.
  - Radio range "> 1 km range LOS with Crazyradio PA"; phone control on "iOS and Android with Bluetooth LE".
  - Compared with the 2.1, it has an "upgraded battery and propellers for a up to 15% improved flight performance".
  - Source: [Bitcraze 2.1+](https://www.bitcraze.io/products/crazyflie-2-1-plus/)
- **Crazyflie 2.1 Brushless:**
  - "4 x 08028-10000KV" motors at up to 30 g thrust each; 55 mm props.
  - Takeoff weight 34 g with legs, 37 g with guards; "10 minutes"; max payload 40 g.
  - Integrated 1S 5 A ESCs running BLHeli_S/Bluejay.
  - Source: [Bitcraze Brushless](https://www.bitcraze.io/products/crazyflie-2-1-brushless/)
- **Prices:**
  - Bitcraze store: Crazyflie 2.1 Brushless **$480**, Crazyflie 2.1+ **$240**, Crazyflie Bolt 1.1 $205. — [store.bitcraze.io](https://store.bitcraze.io/collections/kits)
  - RobotShop UK lists the Brushless at £461.54. — [RobotShop](https://uk.robotshop.com/products/crazyflie-21-brushless-version-open-source-micro-quadcopter-drone)
- **Android app:**
  - Controls Crazyflie 2.0/2.1 over BLE. "**The app does not support the Crazyflie 2.1 Brushless**." It also works with a Crazyradio over USB OTG. — [crazyflie-android-client](https://github.com/bitcraze/crazyflie-android-client)
  - Available on [Google Play](https://play.google.com/store/apps/details?id=se.bitcraze.crazyfliecontrol2) and [F-Droid](https://f-droid.org/app/se.bitcraze.crazyfliecontrol2).
  - BLE needs Android 4.4+ and the device should not be pre-paired. — [Bitcraze user guide](https://www.bitcraze.io/documentation/repository/crazyflie-android-client/master/userguides/user-instructions/)
  - Repo: 115★, GPL-2.0, last push 2026-09-29. — [GitHub](https://github.com/bitcraze/crazyflie-android-client)
- **iOS app:** "Crazyflie 2" v1.3.1, updated **April 16, 2025**, iOS 12+, "Firmware >= 2024.02 are compatible". Controls are on-screen joysticks or phone tilt, rated 2.7★ (6 ratings). — [App Store](https://apps.apple.com/us/app/crazyflie-2/id946151480)
- **App maintenance:** a Bitcraze blog post (Apr 21, 2025) says app firmware updating is "broken since we altered the update process when changing the Crazyflie bluetooth stack last year". The iOS update feature "has been removed in a recent release". The plan is to rewrite the lib in Rust with Java/Swift bindings. — [Bitcraze blog](https://www.bitcraze.io/?p=13866)
- **Printable parts:** [bitcraze-mechanics](https://github.com/bitcraze/bitcraze-mechanics) holds "Mechanical models of the Crazyflie and other parts" (OpenSCAD, 67★). Forum threads share STL files and printed arm repairs. — [Bitcraze forum](https://forum.bitcraze.io/viewtopic.php?p=7054); [arm fix](https://forum.bitcraze.io/viewtopic.php?p=5252)
- **Firmware:** 1,555★, GPL-3.0, last push 2026-10-02. — [crazyflie-firmware](https://github.com/bitcraze/crazyflie-firmware)

#### 1.8 Drona Aviation Pluto 1.2 / Pluto X (India) — phone-flown, nylon frame
- **App:** "Pluto Controller" by Drona Aviation, iOS version 5.2.0, "Last Update: 5 days ago" (about 2026-09-30 relative to the 2026-10-05 fetch), iOS 14+, 4.0★ from 8 ratings. Features include automated flight commands, flips, HD camera streaming and calibration/motor-test diagnostics. — [App Store](https://apps.apple.com/us/app/id1173323776)
  - The app "connects to the Drone's WiFi Hotspot" and is on the App Store and Google Play. This comes from a search summary of the App Store and Drona pages. — [App Store](https://apps.apple.com/us/app/id1173323776); [Drona docs](https://www.dronaaviation.com/docs/Home)
- **Pluto 1.2 specs (from retailer listings, via search summaries; not verified on a primary spec sheet):**
  - 54–60 g, 600 mAh 25C battery weighing 16 g.
  - "9+ minutes" flight (other listings say 8+), 80 m range, 16×16 cm.
  - Primus V4 flight controller, "crash-resistant nylon frame".
  - Sources: [Drona battery page](https://www.dronaaviation.com/product/pluto-lipo-battery-600mah), [Flipkart](https://www.flipkart.com/pluto-diy-pluto1-2-drone/p/itmf616e826054df), [desertcart](https://www.desertcart.nl/products/101774035), [Pluto 1.2 manual](https://www.dronaaviation.com/support/manuals/Pluto1.2%20User%20Manual%20Final-compressed.pdf)
- **Pluto X:**
  - MRP ₹14,000 — [ElectronicsForU](https://electronicsforu.com/technology-trends/arduino-is-for-electronics-raspberry-pi-is-for-computing-we-aim-to-become-that-for-drones-with-pluto)
  - Tinkerer Kit ₹21,499 — [Drona Aviation](https://dronaaviation.com/product/plutox-tinkerer-kit)
  - Was on Indiegogo for $149 — [Digit](https://www.digit.in/news/general/plutox-diy-aerial-robotics-kit-now-on-indiegogo-for-149-43371.html)
  - Adds a camera and extra sensor support over Pluto 1.2 — [ElectronicsForU](https://electronicsforu.com/technology-trends/arduino-is-for-electronics-raspberry-pi-is-for-computing-we-aim-to-become-that-for-drones-with-pluto)
- **Firmware:** open-source flight firmware [Magis](https://github.com/DronaAviation/Magis) (38★) and [MagisV2](https://github.com/DronaAviation/MagisV2) (created Feb 2025), plus Python control in [plutocontrol](https://github.com/DronaAviation/plutocontrol).

#### 1.9 ESPcopter (ESP8266) — effectively defunct
- **What it was:** a "35-gram flier" with an ESP8266-12S module by Metehan Emlik, sold as a "$49" basic kit during 2017 crowdfunding on Indiegogo and Arıkovanı. — [Hackster](https://blog.hackster.io/espcopter-is-a-programmable-esp8266-powered-mini-drone-8e028a48f836); [Teknoblog](https://www.teknoblog.com/yerli-programlanabilir-mini-drone-espcopter-destekcilerini-ariyor)
- **Control and programming:**
  - Flown from a phone over WiFi: SSID "ESPcopter", password "12345678", browser UI at 192.168.4.1. This is from a search summary. — [esp8266.com](https://www.esp8266.com/viewtopic.php?p=83429)
  - Programmable in Arduino and Visuino. — [Visuino](https://www.visuino.com/?p=14855)
- **Remaining code and status:**
  - The only maintained-looking firmware repo is [verlab/espcopter](https://github.com/verlab/espcopter), a ROS-over-WiFi firmware (43★). It requires ESP8266 Arduino core 2.5.0.
  - espcopter.com could not be reached on 2026-10-05 (proxy returned 502).

#### 1.10 Raspberry Pi Pico W and Arduino-class boards
- **PicoW Copter:**
  - "Affordable micro sub 100g coreless motor quadcopter made using Raspberry Pi pico W and controlled via an APP through WiFi".
  - The app is the Android "UDP Joystick", installed via Aptoide.
  - PCB files are on OSHWLab.
  - Source: [PicoW_Copter](https://github.com/anish-natekar/PicoW_Copter)
- **PicoW Copter docs:**
  - MPU6050, BMP280 (altitude hold "not yet tested"), 4× 720 or 8520 motors, 55 mm props, si2302 MOSFETs.
  - "1S 360mAh Lipo", frame "3D-printed PLA (30-40% infill)", "Under 60 grams" (the README says "sub 100g").
  - Cost "Rs 2000 to Rs 2500… near $25 to $30".
  - WiFi AP at 192.168.42.1, UDP port 8888; auto-level and manual modes.
  - Source: [PicoW docs](https://picow-copter-docs.readthedocs.io/en/latest/)
  - Repo: MIT, 67★, last push **2024-05-17**, so inactive. — [GitHub](https://github.com/anish-natekar/PicoW_Copter); also covered by [Tom's Hardware](https://www.tomshardware.com/news/raspberry-pi-pico-w-copter)
- **PiWings (Ravi Butani):** a Pico-powered quadcopter with a custom PCB and an "original Android-based app". This comes from a search summary only; details were not retrieved. — [Tom's Hardware](https://www.tomshardware.com/news/raspberry-pi-pico-drone)
- **Arduino Nano + BLE:** an Instructables "Arduino Nano Quadcopter" is described as a "3D printed nano quadcopter… based on Arduino nano… uses BLE-Nano and is controlled using a smartphone". This is from a search summary; page details were not retrievable. — [Instructables](https://instructables.com/Arduino-micro-Quadcopter)

#### 1.11 Newer / smaller ESP32 projects with browser or phone control (2024–2026)
- **CF-Drone (songge8):**
  - "ESP32无人机飞控固件" (ESP32 drone flight-control firmware) for ESP32/ESP32-S3 with an MPU6500/9250.
  - Browser-based WiFi remote control (`web_rc`), low-battery auto-land and inverted-flight protection.
  - Targets "琛光E1" (Chenguang E1) drones whose open hardware is on JLC (oshwhub). Docs are in Chinese.
  - 255★, created 2026-03-27, last push 2026-09-25, licence "Other".
  - Source: [GitHub](https://github.com/songge8/CF-Drone)
- **Comet Drone:**
  - ESP32-C3 Super Mini, MPU6050, 4× 0716 coreless motors, SI2302 MOSFETs with flyback diodes.
  - 250 Hz cascaded PID; WebSocket telemetry over an AP (SSID `CometDrone`).
  - Motors are killed "if WiFi telemetry is lost for more than 500ms".
  - MIT, 13★, created 2026-05.
  - Source: [GitHub](https://github.com/CoreCometIndustries/Comet-Drone)
- **cifertech ESP32-Drone:**
  - "Wi‑Fi quadcopter flight stack with browser UI": MPU6050, Madgwick filter, 250 Hz, virtual sticks over WebSocket, live PID tuning, motor test.
  - Connects to a router in STA mode; the phone opens `http://<IP>/`.
  - Runs on a "custom, experimental PCB".
  - MIT, 47★, last push 2026-05-03.
  - Source: [GitHub](https://github.com/cifertech/ESP32-Drone)
- **drone_meishi (business-card drone):**
  - ESP32 flight controller with a 500 Hz loop and 20 kHz motor PWM.
  - Web UI over an AP (`ESP32-DRONE`, password 12345678) with 50 Hz WebSocket control.
  - The frame is the PCB business card. 167★, last push 2026-04-18.
  - Source: [GitHub](https://github.com/fumimaker/drone_meishi); [blog](https://fumimaker.net/drone_business_card_rev32)
- **Sprig-Drone:**
  - A single-board Flix derivative on the ESP32-C3 Sprig-C3 module. The PCB "doubles as the drone's frame".
  - ICM-20948 or MPU-6050, 8520 motors, MAX17048 fuel gauge.
  - "Wi‑Fi + MAVLink control with the QGroundControl app"; the assembled board is sold at sprig-labs.com.
  - Source: [GitHub](https://github.com/Frapais/Sprig-Drone)
- **01Studio pyDrone:**
  - ESP32-S3-WROOM-1 (N16R8), QMI8658A IMU, SPA06-003 barometer, QMC5883P compass.
  - 716 coreless motors, 400 mAh battery, prop guard included.
  - Android app included in the repo; programmed in MicroPython. Sold on [AliExpress](https://www.aliexpress.com/item/1005009354821307.html).
  - MIT, 110★, last push 2026-09-30.
  - Source: [GitHub](https://github.com/01studio-lab/pyDrone)
  - The wiki has separate "蓝牙控制" (Bluetooth control) and "WiFi控制" (WiFi control) chapters. — [01Studio wiki](https://wiki.01studio.cc/en/docs/pydrone/)
- **EDISON-SCIENCE-CORNER ESP32-DRONE:** "A SIMPLE DRONE USING ESP32", with an HTML-based UI and a minimal README. CC0, 68★, last push 2025-03-20. — [GitHub](https://github.com/EDISON-SCIENCE-CORNER/ESP32-DRONE)
- **AceMicroFlyer:**
  - ESP32-C3 Mini, MPU9250, 2N2222 transistors, 8520 motors, 380 mAh, carbon frame; Bluetooth control planned.
  - Marked work in progress, last push 2024-02-12, so abandoned.
  - Source: [GitHub](https://github.com/ace-cooper/AceMicroFlyer-ESP32)
- **Generic printable frame:** a MakerWorld "ESP32 drone" frame for 8.5×20 mm coreless motors measures 110×110 mm and weighs about 18 g in PLA at 20% infill. This is from a search summary; the page returned 403 when fetched. — [MakerWorld](https://makerworld.com/en/models/2580472-esp32-drone)

#### 1.12 Excluded: popular ESP32 flight controllers that are not phone-flown
- **madflight:** a "toolbox to build high performance flight controllers" for ESP32-S3/ESP32/RP2350/RP2040/STM32. Builds use ELRS receivers. MIT, 500★. — [madflight](https://github.com/qqqlab/madflight)
- **KyThuatUAV LacWing:** ESP32-WROOM-DA, ICM-20602, BMP388, SBUS receiver, tuned on a 5-inch frame. — [GitHub](https://github.com/KyThuatUAV/ESP32_FC)
- **PepeTheFroggie EspCopter / EspCopter32:** "RC uses the ack-less ESPNOW protocol" with a companion ESP transmitter. — [EspCopter32](https://github.com/PepeTheFroggie/EspCopter32); [EspCopter](https://github.com/PepeTheFroggie/EspCopter)

#### 1.13 Phone-app availability, October 2026
- **ESP-Drone (Espressif):** iOS listed, but last updated July 2020. The Android APK is sideloaded via QR/pgyer, and users have reported download errors. — [App Store](https://apps.apple.com/app/id1522247884); [esp32.com](https://esp32.com/viewtopic.php?p=155487); [Elektor](https://www.elektormagazine.com/labs/esp-fly-the-smallest-esp32-drone-you-can-build)
- **LiteWing (CircuitDigest):** Android on Google Play (updated Mar 24, 2026). An iOS listing exists, but the fetch returned 404 on 2026-10-05. It supports LiteWing and other CRTP drones. — [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller); [CircuitDigest](https://circuitdigest.com/articles/litewing-esp32-drone-gets-new-mobile-app)
- **QGroundControl (for Flix and Sprig-Drone):** Android APK, Android 9+; no iOS listed. — [QGC docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html)
- **Mavlink Joystick (for Flix):** Android APK from GitHub releases. — [GitHub](https://github.com/goldarte/mavlink-joystick)
- **Crazyflie apps:** iOS "Crazyflie 2" (April 2025); Android on Google Play and F-Droid. Neither updates firmware anymore, and the Android app does not support the Brushless. — [App Store](https://apps.apple.com/us/app/crazyflie-2/id946151480); [Bitcraze blog](https://www.bitcraze.io/?p=13866); [Android client](https://github.com/bitcraze/crazyflie-android-client)
- **Pluto Controller:** iOS, actively updated (around late Sept 2026). — [App Store](https://apps.apple.com/us/app/id1173323776)
- **UDP Joystick (PicoW Copter):** Android, installed via the Aptoide store. — [PicoW_Copter](https://github.com/anish-natekar/PicoW_Copter)
- **Browser UIs** (Comet, cifertech, drone_meishi, CF-Drone, ESPcopter) need no app install. — repos cited above

### Inferences
- **Best fit for a 3D-printing beginner who solders and wants phone control on both iOS and Android: the ESP-FLY kit.**
  - It is the only current product with a printed frame that also comes with the fiddly SMD board pre-assembled.
  - The kit ships its own printed frame. The P2S would be used for spares or alternative covers, and the STL may cost extra on Cults3D.
  - Its CRTP/ESP-Drone firmware should also work with the newer LiteWing app, which advertises support for ESP-Drone/Crazyflie-protocol drones. This is unverified for ESP-FLY specifically.
- **Best "print it and wire it yourself" project: Flix.**
  - Strengths: the most active maintainer, the largest DIY community, open STL/STEP files, and only iron-and-multimeter tools.
  - Weaknesses: phone control is **Android-only** (QGC and Mavlink Joystick), first-time setup is more involved (IMU orientation, calibration, parameters), and there is no altitude hold in mainline yet.
  - iPhone users would need a gamepad and laptop, an RC transmitter, or a third-party iOS MAVLink app. No such app was found.
- **Lowest-friction ready-to-fly option: LiteWing.**
  - It costs $49 plus a battery and has a maintained Android app.
  - Its frame is an FR4 PCB, so the printer would only add guards or mounts. No official printable accessories were found.
- **ESP-Drone itself is mostly useful as firmware.** Its official app is effectively unmaintained (iOS build from 2020; Android sideload). New builders should use the LiteWing app or cfclient.
- **StampFly is a strong learning platform but not a phone drone.** It has optical-flow position hold and an active 2026 ecosystem. A phone could plausibly drive it through the documented UDP/Tello-SDK-compatible API with third-party Tello apps, but this is speculative and untested.
- **Crazyflie gives the most polished, best-documented flight (flow deck, Python) of all the options.** However, it costs 4–8× more, the frames are not printable, the phone apps are minimal, and Brushless support on Android is absent.
- **Documentation quality, judged from the doc sets reviewed:** Crazyflie > StampFly ecosystem ≈ Flix > LiteWing ≈ ESP-FLY > ESP-Drone > PicoW > the small 2026 GitHub projects (README-only).

### Gaps
- **Flight time not documented:** Flix (reference build), ESP-Drone (V1.2) and LiteWing (any version).
- **Real-world WiFi range not documented:** LiteWing, ESP-Drone and Flix.
- **No measured phone-to-motor latency** for any project; the only figure is Elektor's unmeasured "7-25ms" claim for ESP-FLY.
- **No official Flix BOM cost.** No source gives a USD total for the Flix 1.1 parts.
- **ESP-Drone iOS app on current iOS:** whether v1.0.1 still installs and runs on iOS 18/26 could not be verified.
- **LiteWing iOS listing:** the 404 may be regional or may mean removal; this is unresolved.
- **Not researched (search budget exhausted):**
  - Makerfabs and Ai-Thinker ESP32 drone kits.
  - Arduino Nano 33 BLE, Nano ESP32 and ESP32-C6 phone-flown drones; no well-documented project was found in the searches that did run.
  - Generic AliExpress "ESP32 drone" kits; only the CNX "$40 shipped" remark was found.
  - Reddit user experience reports.
- **StampFly v1.1 price** at the M5Stack official store in USD was not retrieved.
- **Atom JoyStick:** whether it is bundled or sold separately was not confirmed.
- **Pluto specs** come from retailer pages via search summaries, not a primary spec sheet.
- **ESPcopter kit availability** in 2026 could not be confirmed; the site was unreachable.

## 2. Which projects can be built purely from off-the-shelf modules with hand soldering, and which need a custom PCB (and at what cost)?

### Takeaway
Flix is the clear "modules plus hand soldering" project. It needs an ESP32 Mini dev board, an IMU breakout, four discrete MOSFETs, resistors and a printed frame. PicoW Copter and Comet Drone follow the same pattern but are less mature. ESP-Drone, LiteWing, ESP-FLY, drone_meishi, cifertech and Sprig-Drone all rely on custom SMD PCBs. Of those, ESP-FLY and LiteWing sell the PCB pre-assembled, which avoids a hot plate or hot-air station; self-building the ESP-FLY PCB needs a stencil and hot-plate reflow.

### Cited Findings
- **Flix:**
  - "Made from general-purpose components": an ESP32 Mini board, a GY-91/MPU-9265/ICM-20948/GY-521 IMU breakout, 4 MOSFETs, 10 kΩ resistors, a pre-crimped MX2.0 battery lead, and a printed frame.
  - Tools: 3D printer, soldering iron, solder with flux, screwdrivers, multimeter.
  - Source: [Flix README](https://github.com/okalachev/flix)
  - The IMU is wired over SPI (VSPI pins) and the motors through MOSFETs with pull-downs. A user-contributed full schematic exists on Miro. — [Flix README](https://github.com/okalachev/flix)
  - The official Flix2 PCB is "in development". Firmware for the "Flix2 board" is already offered. — [Flix README](https://github.com/okalachev/flix); [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **PicoW Copter:** parts are a Pico W, an MPU6050 module, si2302 MOSFETs and a 3D-printed PLA frame. An optional PCB is on OSHWLab. Cost is about $25–30. — [PicoW docs](https://picow-copter-docs.readthedocs.io/en/latest/); [PicoW_Copter](https://github.com/anish-natekar/PicoW_Copter)
- **Comet Drone:** ESP32-C3 Super Mini, MPU6050 module, SI2302 logic-level MOSFETs with flyback diodes, 0716 motors. — [Comet-Drone](https://github.com/CoreCometIndustries/Comet-Drone)
- **ESP-FLY:**
  - Uses a "Custom 4-layer flight controller PCB" with MPU-6050 and 4× SI2300 MOSFETs. The kit ships it "pre-assembled", and kit assembly needs only "basic soldering". — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
  - The DIY route lists "PCB (JLCPCB): $0.42" for the bare board. Assembly requires a "soldering iron with SMD stencil, hot plate for reflow". The whole DIY BOM is $37.30 ±$10, excluding shipping. — [Elektor Labs](https://www.elektormagazine.com/labs/esp-fly-the-smallest-esp32-drone-you-can-build)
- **LiteWing:**
  - Custom FR4 PCB frame, "Fully open-source design with schematics, Gerber & Firmware available". — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/)
  - DIY parts cost about ₹1000 (~$12) for the 2024 version, "based on a custom PCB and off-the-shelf parts". — [CNX](https://www.cnx-software.com/2024/04/02/low-cost-diy-esp32-drone-12-dollars/); [Hackster](https://www.hackster.io/news/low-cost-esp32-drone-0864cce16815)
  - Assembled boards sell for $49. — [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/)
- **ESP-Drone:**
  - The reference S2-Drone V1.2 is an "all-in-one PCB"; its schematic PDF is published. — [ESP-Drone hardware docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html); [schematic](https://docs.espressif.com/projects/espressif-esp-drone/zh_CN/latest/_static/ESP32_S2_Drone_V1_2/SCH_Mainboard_ESP32_S2_Drone_V1_2.pdf)
  - The legacy ESPlane-FC-V1 (ESP32-WROOM-32D + MPU6050) used an external frame. — [ESP-Drone hardware docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)
- **Other custom-PCB projects:**
  - cifertech ESP32-Drone: "custom, experimental PCB… may have layout or wiring issues". — [GitHub](https://github.com/cifertech/ESP32-Drone)
  - drone_meishi: a PCB business-card frame. — [GitHub](https://github.com/fumimaker/drone_meishi)
  - Sprig-Drone: a single-board PCB airframe, with an assembled board for sale. — [GitHub](https://github.com/Frapais/Sprig-Drone)
  - CF-Drone: hardware on JLC (oshwhub). — [GitHub](https://github.com/songge8/CF-Drone)
  - malagis Flix-PCB variant. — [oshwhub](https://oshwhub.com/malagis/esp32-mini-plane)
- **AceMicroFlyer** used through-hole 2N2222 transistors and an off-the-shelf carbon frame, but it is unfinished. — [GitHub](https://github.com/ace-cooper/AceMicroFlyer-ESP32)

### Inferences
- **Flix fits the user's existing tools exactly:** a P2S for the frame (PLA or PETG at 100% infill per the docs) plus a soldering station. No hot air or reflow is needed, since breakout boards hold all the fine-pitch parts.
  - The fiddliest steps are soldering four TO-252/SOT-type MOSFETs and 28 AWG motor leads, and fitting M1.4 screws. This is based on the component list; the MOSFET package is not stated in the README.
- **Anyone building ESP-FLY, LiteWing or ESP-Drone boards from Gerbers needs SMD reflow capability** or a PCBA service (JLCPCB/PCBWay assembly). A hot plate or hot-air station is required for self-assembly; the user does not own one. Buying the pre-assembled kit avoids this.
- **SOT-23 MOSFETs** (SI2302/SI2300, used by Comet, PicoW and the ESP-FLY board) are hand-solderable with a fine tip, but they are a step up from through-hole for a beginner. This is general experience, not from a project source.

### Gaps
- **Custom PCB with assembly costs:** no project gave a quoted JLCPCB/PCBWay PCBA cost. The only data points are the $0.42 bare ESP-FLY board and the ~$12 LiteWing BOM.
- **Module-only ESP-Drone wiring:** no documented build was found running ESP-Drone firmware on a module-only stack, such as an ESP32-S3 dev board plus a GY-521 on perfboard.

## 3. What problems do builders report (brownouts, gyro noise, drift, resonance, motor wear, WiFi dropouts, app incompatibility), and what are the fixes?

### Takeaway
The recurring failures are:
- power sag and brownout resets when the motors spool up, and IMU I2C lock-ups at low battery;
- vibration from loose motors corrupting attitude estimates;
- horizontal drift without optical flow, combined with coarse app trim;
- WiFi/UDP packet loss, worse with Android mobile data or VPNs;
- stale or incompatible phone apps.

Documented fixes are high-C batteries, an optional boost/buck-boost supply, tight motor mounting, careful IMU orientation and accelerometer calibration, AP mode instead of STA, airplane mode on Android, and switching to newer apps.

### Cited Findings
- **Power and brownout:**
  - ESP-Drone issue #85 (Sept 2024, open): on a custom ESP32-C3 build, the "esp32c3 isn't getting enough voltage once motors start consuming more power". It resets above ~20% throttle (~700 mA total), and "a 10uF electrolytic capacitor between VBAT/GND… didn't help". — [esp-drone #85](https://github.com/espressif/esp-drone/issues/85)
  - ESP-Drone issue #105 (2025): at mid/low battery (~3.7 V) the MPU6050 I2C bus latches (SCL held low). This causes reboots and WiFi disconnects, sometimes cyclic. The issue was closed with a reference to PR #115. — [esp-drone #105](https://github.com/espressif/esp-drone/issues/105)
  - Flix: "The battery should be able to provide 15A of current. So the C-rating for a 1000 mAh battery should be at least 15C (higher is better)". "Never run the motors when powering the drone from USB". A boost converter is optional "for more stable power supply"; the older README called a buck-boost converter "recommended". — [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md); [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md); [Flix README](https://github.com/okalachev/flix); [older README fork](https://github.com/CatRey/Flix-Camera-Streaming)
  - LiteWing issue #7 (Oct 2025): with a different (larger) battery, the board boot-loops ("LED briefly flickers… board resets"), while the stock battery works. — [LiteWing #7](https://github.com/jobitjoseph/LiteWing/issues/7)
  - Sprig-Drone: motor or LED MOSFET gates on ESP32-C3 GPIO8/GPIO9 (strapping pins) prevent boot, because "the I²C/IMU bus comes up dead". — [Sprig-Drone](https://github.com/Frapais/Sprig-Drone)
- **Motor and part selection (Flix):**
  - Motors must be "exact 3.7V" types.
  - Use the UMW 100N03A MOSFET; KIA parts "might not work".
  - Check the propeller A/B types and motor directions using the `mfr`/`mfl`/`mrl`/`mrr` motor tests.
  - Source: [Flix README](https://github.com/okalachev/flix); [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md)
- **Vibration and gyro:**
  - "Motors should be installed very tightly — any vibration may lead to bad attitude estimation and unstable flight". — [Flix assembly](https://github.com/okalachev/flix/blob/master/docs/assembly.md)
  - Flix troubleshooting checklist: confirm IMU `status: OK` and ~1000 Hz rate, set the IMU orientation parameters, calibrate the accelerometer (`ca`), and verify the attitude display in QGC. — [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md)
  - Flix issue #33 (Jan 2026, 20 comments, closed): the drone "doesn't stabilize… whereas on the QGroundControl app the gyroscope is stabilized". The resolution was not retrieved. — [flix #33](https://github.com/okalachev/flix/issues/33)
  - ESP-FC offers configurable gyro filters (LPF, dynamic notch, RPM) for noise. — [ESP-FC README](https://github.com/rtlopez/esp-fc)
- **Drift:**
  - LiteWing: "minor drift during flight is expected" without the positioning module; correct it with roll/pitch trim. — [LiteWing flight guide](https://circuitdigest.com/articles/start-flying-with-litewing)
  - LiteWing issue #12 (Jan 2026): "severe horizontal flight offset", MPU6050 biases with no cfclient calibration path, and an app trim "minimum adjustment step of 0.6 degrees is too coarse". — [LiteWing #12](https://github.com/jobitjoseph/LiteWing/issues/12)
  - Flix STAB mode: "slight drift is possible. The pilot should compensate it manually". — [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
  - ESP-Drone issue #102 (open): "Kalman estimator does not work after flowdeck v2 integration". — [esp-drone #102](https://github.com/espressif/esp-drone/issues/102)
- **WiFi and link:**
  - LiteWing issue #18 (Aug 2026): "Frequent UDP packet loss with 'Dropped packet — transient UDP send failure'" in both the app and Python scripts, on drones with positioning modules. After reflashing, the positioning module became incompatible (ToF/flow dropouts). — [LiteWing #18](https://github.com/jobitjoseph/LiteWing/issues/18)
  - Android phones may drop the drone link while mobile data is on; use airplane mode and disable VPN. — [LiteWing flight guide](https://circuitdigest.com/articles/start-flying-with-litewing)
  - Flix: STA mode "may cause additional delays"; if QGC won't connect, disable the firewall/VPN. — [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
  - Comet Drone kills the motors when WiFi telemetry is lost for more than 500 ms. — [Comet-Drone](https://github.com/CoreCometIndustries/Comet-Drone)
  - Older ESP32 copter firmware shuts down if RC data fails for more than 100 ms. — [EspCopter32](https://github.com/PepeTheFroggie/EspCopter32)
- **App and client incompatibility:**
  - ESP-Drone issues include #123 (Nov 2025, open: "用手机app操作esp-drone没有任何反应", i.e. the phone app gets no response) — [esp-drone #123](https://github.com/espressif/esp-drone/issues/123)
  - #104: motors not responding after a successful app connection — [esp-drone #104](https://github.com/espressif/esp-drone/issues/104)
  - cfclient hangs and failed connections in #114, #38 and #57 — [esp-drone #114](https://github.com/espressif/esp-drone/issues/114); [#38](https://github.com/espressif/esp-drone/issues/38); [#57](https://github.com/espressif/esp-drone/issues/57)
  - Android app download error 502 — [esp32.com](https://esp32.com/viewtopic.php?p=155487)
  - LiteWing replaced the ESP-Drone app because of maintenance and compatibility issues; for app crashes it says "Update to latest firmware version". — [CircuitDigest](https://circuitdigest.com/articles/litewing-esp32-drone-gets-new-mobile-app); [flight guide](https://circuitdigest.com/articles/start-flying-with-litewing)
  - Crazyflie: in-app firmware update is broken or removed, and the Android app does not support the Brushless. — [Bitcraze blog](https://www.bitcraze.io/?p=13866); [Android client](https://github.com/bitcraze/crazyflie-android-client)
- **Toolchain pitfalls:**
  - KyThuatUAV warns that ESP32 Arduino core 3.x renamed the LEDC PWM APIs (`'ledcSetup' was not declared`), so its code needs core 2.0.17. — [ESP32_FC](https://github.com/KyThuatUAV/ESP32_FC)
  - Flix pins ESP32 core 3.3.10. — [Flix usage](https://github.com/okalachev/flix/blob/master/docs/usage.md)
  - ESP-Drone requires ESP-IDF release/v5.0. — [ESP-Drone README](https://github.com/espressif/esp-drone)

### Inferences
- **Power sag** is the most common hard failure on 1S coreless builds. Beyond what the projects document (higher-C, low-resistance packs and an optional regulator), the usual remedies are short, thick battery leads, a larger low-ESR bulk capacitor at the ESP32 supply, and keeping the MCU and IMU on a regulated rail. These are general practice; the projects themselves only document the C-rating and converter advice.
- **Printed-frame stiffness matters.** The Flix doc's 100% infill and "motors installed very tightly" guidance points to vibration-sensitive IMU estimation on brushed micros. A stiff PLA/PETG frame with snug motor bores is preferable to a light low-infill frame for 8520-class builds. ESP-FLY's much smaller 615-motor frame uses 10% infill, so the right infill depends on scale.
- **Crowded 2.4 GHz environments.** On a WiFi-AP link, as used by ESP-Drone, LiteWing, ESP-FLY and Flix, expect more dropouts in crowded areas. ESP-NOW (Flix, ESP-FLY via ESP-FC, StampFly) is the documented path to better latency and range, but it needs a second ESP32 or a dedicated transmitter instead of a phone.

### Gaps
- **Coreless motor wear:** no project-specific data on motor lifetime or brush wear for 615/716/720/8520 motors was found.
- **Frame resonance:** no measured resonance problems on printed micro frames were found; only Flix's general vibration warning.
- **Resolutions not retrieved:** Flix #33 and ESP-Drone #85/#105. PR #115 for #105 was not inspected.

## 4. Can a camera (ESP32-CAM / ESP32-S3 + OV2640/OV5640) stream video to the phone, and at what quality, latency and weight cost?

### Takeaway
Yes, but it is marginal on these micro drones. Video sharing the ESP32's own WiFi has to be MJPEG, which limits resolution and frame rate.
- The only phone-flown ESP32 micro-drone project with an integrated ESP32 camera is a Flix community build (ESP32-S3-CAM with an HTTP stream).
- ESP-FLY says ESP32 cameras are not supported by its firmware and recommends a 3 g analog 5.8 GHz FPV camera instead.
- LiteWing's tutorial uses a separate toy-drone WiFi camera on its own network.
- The best ESP32-camera link, hx-esp32-cam-fpv, achieves 90–110 ms latency at 640×360–1024×576 and 30–50 fps. It needs a dedicated ESP32-S3 camera board, and for raw-broadcast mode a USB WiFi adapter on the phone.

### Cited Findings
- **Flix camera build:** "the first drone based on ESP32-S3-CAM board with a camera, implementing Wi-Fi video streaming. Runs HTTP server and HTTP video stream". The modified firmware is [Flix-Camera-Streaming](https://github.com/CatRey/Flix-Camera-Streaming). — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)
  - Another Flix build used an "FPV camera, 3-blade 31 mm propellers" (analog). — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)
- **ESP-FLY:**
  - "Can I add an ESP32 camera for FPV? Not directly with the current open-source firmware workflow on the XIAO." The frame instead supports a "5.8 GHz analog AIO FPV camera".
  - Weight rises from 25 g to 28 g with the FPV camera; recommended payload is about 3 g.
  - Source: [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)
- **LiteWing camera tutorial:**
  - Uses a "dual WiFi camera module from a toy drone", calling dedicated WiFi camera modules "easier and more reliable" than an ESP32-CAM.
  - Viewed in "WebCam / IP Camera" apps on Android/iOS, on its own WiFi network, so "each system operates on its own WiFi Network".
  - "Noise or jitter may appear in the live video feed when the drone motors start operating"; the fix is "a battery with a higher C-rating".
  - No resolution, latency or flight-time numbers are given.
  - Source: [CircuitDigest tutorial](https://circuitdigest.com/tutorial/adding-wi-fi-camera-to-litewing-esp32-drone)
  - LiteWing payload is "~25 g (with 55 mm propellers)". — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/)
- **hx-esp32-cam-fpv (state of the art for ESP32 cameras):**
  - Modes: ESP32/ESP32-S3 + OV2640 at "640x360 30fps… 800x600 30fps, 1024x576 12fps"; ESP32-S3 + OV5640 at "640x360 30/50fps… 1024x576 30fps".
  - "Latency 90-110ms"; range "up to 1km at 24Mbps" line of sight.
  - The camera streams MJPEG because "the ESP32 lacks the processing power for real-time video encoding".
  - Recommended air unit: "Seed Studio XIAO ESP32S3 Sense with ov5640".
  - Android phones can act as the ground station with an rtl8812au USB adapter, or in "APFPV mode" with built-in WiFi.
  - On quality: "Set your expectations low… comparable to smartphone cameras from around 2005", with a noisy image and weak low-light performance.
  - Source: [hx-esp32-cam-fpv](https://github.com/RomanLut/hx-esp32-cam-fpv)
- **Simpler ESP32-CAM drone setups:**
  - Typical frame rate is "about 10-15 FPS" for an OV2640, and splitting control and video into two separate WiFi channels is recommended for lag-free flying. — [ElectronicsForU ESP32-CAM drone](https://www.electronicsforu.com/electronics-projects/low-cost-drone-powered-by-esp32-cam)
  - Forum reports of naive streams range from under half a second of lag to very slow refreshes. — [DroneBot Workshop forum](https://forum.dronebotworkshop.com/esp32-esp8266/esp32-cam-video-steam-performance/)
- **Commercial reference:** the Pluto Controller app includes "HD streaming and camera functions" for Pluto X. — [App Store](https://apps.apple.com/us/app/id1173323776)

### Inferences
- **On sub-30 g coreless drones** (ESP-FLY, StampFly, ESP-Drone with 716 motors), an ESP32 camera board plus its power draw exceeds the documented payload margins (about 3 g on ESP-FLY). An analog AIO FPV camera, or no camera, is the realistic choice.
- **On 8520/720-class drones** (LiteWing with about 25 g payload, Flix at about 66 g AUW), carrying an ESP32-S3 camera board is feasible, at a cost in flight time.
- **Run video on a separate radio.** Sharing the flight controller's WiFi AP for both MJPEG video and UDP control risks control latency spikes. Use a separate camera MCU or network (the LiteWing approach), or move control to ESP-NOW. This follows from both the LiteWing and ElectronicsForU recommendations.
- **Expect** roughly 640×480 at 10–30 fps with latency from ~100 ms (optimized hx-esp32-cam-fpv) to several hundred milliseconds or more for simple HTTP MJPEG streams in a phone browser. Image quality will be poor in low light.

### Gaps
- No measured weight for ESP32-CAM or XIAO ESP32S3 Sense camera boards was retrieved, and no measured flight-time penalty on any of these micro drones was found.
- No latency measurement was found for the Flix ESP32-S3-CAM build or for LiteWing's toy WiFi camera.
- Whether iPhones can view hx-esp32-cam-fpv streams (the docs list Android and Meta Quest ground stations) was not established.
