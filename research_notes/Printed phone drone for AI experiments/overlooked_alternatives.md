# Overlooked or newer (2024–2026) small drones and kits for one phone-flown, mostly printed camera-and-sensor drone used for Python AI experiments (state as of 6 Oct 2026)

Method notes for the report writer (read first):
- **Scope.** This file adds to the earlier notes in `research_notes/3D printed phone controlled drones/` (ESP-FLY, Flix, LiteWing, ESP-Drone, Crazyflie, Tello, StampFly, Pluto, PicoW Copter, Comet, cifertech, CF-Drone, pyDrone) and `research_notes/3D printed phone drones Sydney prices/` (Australian prices for ESP-FLY and LiteWing). It reports what those notes missed or what has changed. Facts carried over from them are marked "(earlier research, 5 Oct 2026)" and cite the original page.
- **Date.** Everything was observed on **6 Oct 2026** unless another date is given.
- **How data was collected:**
  - WebSearch worked.
  - GitHub search through `gh`/curl was refused by the session proxy ("sessions are bound to their configured repositories"). The GitHub MCP search tool was used instead; star counts are as of 6 Oct 2026.
  - SDK maintenance was checked with PyPI's JSON API, using release upload dates.
  - Pakronics (Melbourne, Shopify): the storefront API returns prices **excluding GST**, and product pages show them **including GST** (×1.1). This was verified on 7 product pages; where a figure is ex-GST only, it is labelled.
  - She Maps (Australian education reseller): read through the WooCommerce Store API, which does not say whether prices include GST.
  - M5Stack, Freenove and the Arduino Store were read through their Shopify search APIs.
  - MakerWorld was read through Bambu's public search API, Printables through its GraphQL API, and YouTube views through returnyoutubedislikeapi.com.
- **Sites that blocked fetching:**
  - Core Electronics returned a Cloudflare 403, including its `.md` "agent lane", which had worked on 5 Oct.
  - eBay AU returned 403, as did vexrobotics.com/air, kb.vex.com and RobotShop.
  - Little Bird Electronics' suggest endpoint returned "Not found".
  - brainary.com redirects to a "lander" page and appears parked.
- **Currency conversions.** The rates are the same as in the Sydney price notes: 1 USD = 1.4411 AUD, 1 EUR = 1.6176 AUD, 1 GBP = 1.9023 AUD (ECB via Frankfurter, dated 2 Oct 2026) — [Frankfurter USD](https://api.frankfurter.app/latest?from=USD&to=AUD); [Frankfurter EUR](https://api.frankfurter.app/latest?from=EUR&to=AUD). Converted figures are marked "≈" and exclude shipping and import GST.
- **"(search summary)"** marks a claim taken from a search-engine summary whose page was not opened or could not be fetched.

## 1. Are there newer ESP32-S3 / ESP32-P4 / RP2040 / RP2350 drones or kits with a camera and/or optical-flow/ToF sensors (Seeed, Makerfabs, Waveshare, Freenove, Elecrow, DFRobot, M5Stack, Ai-Thinker, Adafruit, SparkFun, Arduino), including any with printable frames and phone apps?

### Takeaway
As of October 2026, no maker-vendor kit combines an onboard camera, optical-flow/ToF hold and a phone app. Of the vendors checked, only three sell drones at all:
- **M5Stack: StampFly v1.1.** It has ToF + flow hold and a Python/Tello-style API, but no camera, no phone app and a moulded frame.
- **Seeed: ESP-FLY.** It has a printed frame and a phone app, but no hold sensors and no digital camera.
- **Elecrow:** resells CircuitDigest's LiteWing.

Freenove, Waveshare, Makerfabs, Adafruit and the Arduino Store sell no drone. ESP32-P4/C5 and RP2350 drone work consists of early custom boards and flight-control firmware, none of it phone-flown or sold as a kit. The two "new" kit-like products found both have red flags: SkyByte Mini (plagiarism) and ALIENTEK MiniFly (camera *or* flow, not both).

### Cited Findings

#### Vendor catalogue checks (6 Oct 2026)
- **M5Stack:**
  - "M5Stamp Fly v1.1 with M5StampS3A": US$49.95 (≈A$71.98), available — [M5Stack shop](https://shop.m5stack.com/products/m5stamp-fly-v1-1-with-m5stamps3a)
  - The original "M5Stamp Fly with M5StampS3" is marked "[EOL]" — [M5Stack shop](https://shop.m5stack.com/products/m5stamp-fly-with-m5stamps3)
  - The "M5Atom Joystick with M5AtomS3" controller is US$29.95 (≈A$43.16) — [M5Stack shop](https://shop.m5stack.com/products/atom-joystick-with-m5atoms3)
- **Seeed:**
  - ESP-FLY is the only Seeed drone kit found (earlier research). Pakronics sells it at **A$150.83 inc GST, in stock** — [Pakronics ESP-FLY](https://pakronics.com.au/products/esp-fly-diy-kit-diy-micro-drone-kit-based-on-xiao-esp32-s3-by-max-imagination-ss114993694)
  - Seeed camera parts at Pakronics: XIAO ESP32S3 Sense A$29.02 ex GST, sold out — [Pakronics](https://pakronics.com.au/products/seeed-studio-xiao-esp32s3-sense-ss113991115). "OV5640 Camera for XIAO ESP32S3 Sense (With Heat Sink)" A$22.99 ex GST, in stock — [Pakronics](https://pakronics.com.au/products/ov5640-camera-for-xiao-esp32s3-sense-with-heat-sink-ss114993115)
- **Elecrow:** a "drone" search returns LiteWing as its only drone; the other hits are IMU breakouts, an RC transmitter kit and displays — [Elecrow search](https://www.elecrow.com/catalogsearch/result/?q=drone). The LiteWing page shows US$49, and its page text includes "Out of stock" — [Elecrow LiteWing](https://www.elecrow.com/litewing-esp32-based-programmable-drone.html)
- **Freenove:** a "drone" query returns only ESP32-CAM starter kits, a robot dog, a hexapod and a car kit — [Freenove store](https://store.freenove.com/search?q=drone). The full storefront catalogue (95 products in `products.json`) has no drone, quadcopter or aircraft kit; the only "quad" matches are a quadruped robot and an NVMe adapter — [Freenove products.json](https://store.freenove.com/products.json?limit=250)
  - Conflict: a search summary of Freenove's "about" page says it offers kits "for robots, smart cars, and drones". The store catalogue does not support this — [Freenove about](https://freenove-docs2.readthedocs.io/en/latest/about-freenove/about.html) (search summary)
- **Waveshare:** "Your search returns no results" for "drone" — [Waveshare search](https://www.waveshare.com/catalogsearch/result/?q=drone)
- **Makerfabs:** one hit for "drone", the "MaUWB_DSTO Chipset" UWB module (US$38.9), not a drone — [Makerfabs search](https://www.makerfabs.com/catalogsearch/result/?q=drone)
- **Adafruit:** the only drone-related hit is "Educational mini UAVs- Sticker!" — [Adafruit search](https://www.adafruit.com/search?q=drone)
- **Arduino Store:** "drone" returns Alvik, UNO Q, GIGA R1 WiFi and similar, with no drone — [Arduino Store](https://store.arduino.cc/search?q=drone)
- **Not determinable:**
  - DFRobot's search page is JavaScript-rendered, so the result was inconclusive — [DFRobot search](https://www.dfrobot.com/search-drone.html)
  - SparkFun's search URL returned 404 — [SparkFun](https://www.sparkfun.com/search/?q=drone)
  - Ai-Thinker has no web store to search.
  - A combined web search for Makerfabs, Freenove and Waveshare ESP32 drone kits found none.

#### M5Stack StampFly: 2026 status
- **Flight modes:** "ACRO (rate control) / STABILIZE (angle control) / ALT_HOLD (altitude hold) / POS_HOLD (position hold)".
- **Sensors:** BMI270 IMU at 400 Hz, barometer, two ToF sensors and optical flow, plus "forward obstacle detection" via ToF.
- **Links:** ESP-NOW, UDP over the vehicle's Wi-Fi AP, and USB HID.
- **Programming:** a "Tello-SDK-compatible API", a Python SDK through the `sf` CLI, and Blockly.
- **What is missing:** the README mentions no phone app and no camera.
- Source: [stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem)
- **Australian price:** Core Electronics lists "M5Stamp Fly with M5StampS3" (the v1.0 name, which M5Stack now marks EOL) at A$129.95 inc GST (search summary; Core blocked direct fetching) — [Core Electronics](https://core-electronics.com.au/m5stamp-fly-programmable-open-source-quadcopter-kit.html)
- OpenELAB lists the "M5Stamp Fly M5Atom Joystick Drone Kit" as "[EOL]" (search-result title) — [OpenELAB](https://openelab.io/a/s/products/m5stamp-m5atom-drone-fly-kit)

#### SkyByte Mini (Kickstarter, July 2024): an ESP-Drone clone with a plagiarism flag
- **Hardware:** ESP32-WROOM-32 + MPU6050, SI2302 MOSFETs, USB-C, and an "all-in-one" PCB frame that "removes the need for 3D-printed parts".
- **Software:** runs "the ESP32-Drone firmware" with the open-source Android/iOS app.
- **Pricing:** Kickstarter $54 (Super Early Bird), $65 or five for $295; no camera; battery not included.
- **Plagiarism flag:** CNX added an update that "the campaign plagiarized content from Circuit Digest's DIY ESP32 drone project".
- Source: [CNX Software, 7 Jul 2024](https://cnx-software.com/2024/07/07/skybyte-mini-wifi-drone-open-source-esp32-drone-firmware/)
- No 2025–2026 delivery or support information was found.

#### ALIENTEK MiniFly (STM32 + nRF51822; Crazyflie-style architecture)
- **Product listing:** OpenELAB lists the "MiniFly Quadrotor Drone STM32 DIY Kit" at **€89.90 (≈A$145.42), sold out**.
  - Electronics: STM32F411CEU6, NRF51822 + RFX2401, MPU9250 and a "BMP280 barometer for altitude hold".
  - Flight: 250 mAh, "Approximately 9 minutes (bare drone)", 30 g, 13 × 13 cm.
  - Control: remote or smartphone.
  - Options: an optical flow module (needed for "Waypoint Flight") and a camera module.
  - Source: [OpenELAB MiniFly](https://openelab.io/a/s/products/minifly-quadrotor-drone-stm32-diy-kit)
- **Camera and flow cannot be fitted together.** A Python host program for MiniFly fetches camera JPEGs from `http://192.168.1.1:80/snapshot.cgi…` and sends flight commands over a COM port. Its author notes:
  - MiniFly "has a single expansion port, preventing simultaneous camera and optical-flow module installation".
  - Control signals have to be sent every 1 ms, motor quality is poor and range is about 10 m.
  - The project "ultimately transitioned to Tello".
  - Repo: 5★, created 2021 — [Big-Clever/minifly-upper-computer](https://github.com/Big-Clever/minifly-upper-computer)

#### ESP32-P4 and ESP32-C5 (new chips with camera interfaces): only early, custom projects
- **p4eregrine:** "All-in-one ESP32 P4-based drone ESC, flight controller, and video processor". KiCad, 16★, created 23 Aug 2026 — [GitHub](https://github.com/anticitizn/p4eregrine)
- **Team Mach Mind, Swarm Drone Challenge 2026** (MBDA/brigkAIR):
  - The v1.0 drones used one ESP32-S3; the v2.0 finals drones used an ESP32-P4 + ESP32-S3.
  - 4–6 ToF sensors and onboard ArUco vision at 320×240, effective up to 12 m.
  - ROS 2 / Python / OpenCV ground station; custom 3D-printed parts.
  - 4th place at the finals, 11 June 2026, ILA Berlin. 47★.
  - Source: [GitHub](https://github.com/machmind-dev/drone-swarm-challenge-2026)
- **ESP32_C5_DRONE_VTX:** "Custom 4-layer FPV camera transmitter featuring an ESP32-C5 microcontroller, OV5640 camera sensor… and 5.8 GHz Wi-Fi video streaming". 0★, created 21 Sep 2026 — [GitHub](https://github.com/Jamane92/ESP32_C5_DRONE_VTX)

#### RP2040 / RP2350 (Pico / Pico 2 W): flight-controller firmware and boards, no phone-flown kit
- **ESP-FC** (852★) now carries an `rp2350` topic — [GitHub](https://github.com/rtlopez/esp-fc)
- **madflight** (501★) targets "ESP32 / Raspberry Pico / STM32" (RP2040/RP2350) — [GitHub](https://github.com/qqqlab/madflight)
- **Kolibri-FC** is a "Flight Controller for FPV quads based on the RP2350" (31★) — [GitHub](https://github.com/bastian2001/Kolibri-FC). Its companion hardware is a 30/20 mm FC "with RP2350 + ELRS onboard" (7★) — [GitHub](https://github.com/bastian2001/Kolibri-FC-Hardware)
- **TichyTech** RP2350 prototype flight controller (4★) — [GitHub](https://github.com/TichyTech/rp2350-flight-controller)
- **PicoW Copter** (phone UDP app) has been inactive since May 2024 (earlier research) — [GitHub](https://github.com/anish-natekar/PicoW_Copter)

#### Small 2025–2026 ESP32-S3 camera / ToF drone designs (very low evidence)
- **MiniDrone-Flight-Controller-PCB:** "ESP32-S3 flight controller with OV2640 camera, MPU-6050 IMU… 4× brushed motor MOSFET drives… PCB is the drone frame". 1★, created 22 Apr 2026 — [GitHub](https://github.com/Hardwarehustle/MiniDrone-Flight-Controller-PCB)
- **IJRASET paper:** an ESP32-S3 Sense flight controller with MPU6050 and a VL53L0X ToF for altitude hold, a 1D Kalman filter, AO3400 MOSFETs and four "8250" coreless motors (sic; probably 8520) (search summary) — [IJRASET](https://www.ijraset.com/best-journal/design-and-development-of-an-affordable-esp32based-micro-drone-with-automated-landing-and-kalman-filtered-tof-sensing)

### Inferences
- **StampFly is the only vendor kit with built-in hold sensors that is sold in Australia** (Core Electronics). Its "Tello-SDK-compatible API" makes it the closest thing to a Tello for Python control. Without a camera or phone app, however, it fails two of the user's core requirements.
- **No vendor sells the combination the user wants.** Getting a camera, flow/ToF hold and phone flight together is still a self-integration job on top of LiteWing, ESP-Drone or Flix (see sections 3 and 5).
- **ESP32-P4/C5 drone work is months old and single-team.** For a beginner it is a 2027+ option, not a 2026 purchase.
- **MiniFly's single expansion port makes it unsuitable** for "camera + hold". It is also sold out at its only Western reseller found.

### Gaps
- DFRobot, SparkFun and Ai-Thinker catalogues could not be verified. Seeed's own catalogue search is JavaScript-rendered (earlier research).
- No AliExpress listing could be verified for an ESP32 drone with both a camera and optical flow; searches surfaced only ESP-Drone, StampFly and ESP-FLY material.
- SkyByte Mini's fulfilment and support status after the 2024 campaign is unknown.
- It is unknown whether Core Electronics' StampFly stock is v1.0 or v1.1, and what its stock level is (site blocked).

## 2. Open-source printable micro drones with a camera plus height/position hold (GitHub, Hackaday.io, Printables, MakerWorld, Instructables, YouTube, 2024–2026): what exists and how many people have built them?

### Takeaway
No open, printable micro drone that combines an onboard camera with height/position hold has a visible build community in 2024–2026.
- **Repository sweeps** (MakerWorld via Bambu's API, Printables via GraphQL) found no camera or optical-flow micro-drone designs with traction. The phone-drone-adjacent printables with real downloads are Tello accessories.
- **GitHub:** the 2025–2026 repos that pair an ESP32 with PMW3901 + VL53L1X, or an ESP32-S3 with OV2640, are single-author projects with 0–1 stars.
- **Onboard camera evidence is negative.** The one documented attempt to fly an ESP32-CAM on a Crazyflie failed on weight and power, and the camera was moved off the drone. CircuitDigest's 2026 AI demo also uses a ceiling webcam rather than an onboard camera.
- **Flix** (earlier research) remains the only active printed design with community camera and altitude-hold work. Its Python API reached v1.0.0 in Aug 2026.

### Cited Findings

#### MakerWorld (Bambu API search, 6 Oct 2026)
- **Searches with no relevant drone designs:** "optical flow", "pmw3901", "esp32 cam drone", "camera drone esp32", "stampfly", "flow deck", "litewing", "minifly", "esp32 drone camera" and "esp32-s3 drone". They returned ESP32-CAM enclosures, fidget toys and general FPV frames — [Bambu search API "esp32 cam drone"](https://api.bambulab.com/v1/search-service/select/design2?keyword=esp32%20cam%20drone&limit=50&offset=0)
- **Tello accessories:**
  - "DJI Tello Protector": 229 downloads, 152 prints (Feb 2025) — [MakerWorld 1073603](https://makerworld.com/en/models/1073603)
  - "DJI Tello Drone Landing Legs" (26 Apr 2026) — [MakerWorld 2721823](https://makerworld.com/en/models/2721823)
  - "DJI Tello Brush‑Motor Replacement Support Part" (10 Jul 2026) — [MakerWorld 3033937](https://makerworld.com/en/models/3033937)
- **CoDrone EDU accessories:** an 8-slot charging tray (15 DL) — [MakerWorld 2326534](https://makerworld.com/en/models/2326534) — and "CoDrone Storage" (14 DL) — [MakerWorld 1436863](https://makerworld.com/en/models/1436863)

#### Printables (GraphQL search, 6 Oct 2026)
- "optical flow drone" returned 0 results.
- "esp32 cam drone" returned only model 947634: 35 DL, 0 makes. Earlier research found its files were not yet posted — [Printables 947634](https://www.printables.com/model/947634)
- **PMW3901 items are mounts for larger drones:**
  - Matek 3901-L0X mount: 53 DL — [Printables 1411484](https://www.printables.com/model/1411484)
  - Holybro PMW3901 mount for S500/X500: 31 DL — [Printables 1555534](https://www.printables.com/model/1555534)
- **Crazyflie:** only the 2.1 cage/prop guard (289 DL) — [Printables 76336](https://www.printables.com/model/76336)
- **Tello has the deepest accessory catalogue:**
  - "Tello drone propeller guard v3": 771 DL — [Printables 275499](https://www.printables.com/model/275499)
  - "Tello Mirror Clip": 219 DL, 3 makes — [Printables 90020](https://www.printables.com/model/90020)
  - "Tello Ryze Drone Payload System": 178 DL — [Printables 479370](https://www.printables.com/model/479370)
  - "Tello 808 Camera Mount": 56 DL — [Printables 90023](https://www.printables.com/model/90023)

#### GitHub (2025–2026 projects combining camera or flow sensors with a micro drone)
- **Pozisyon-Korumali-Drone** (Turkish): "ESP32 tabanlı, MPU9250, PMW3901 ve TOF400/VL53L1X… web arayüzü üzerinden kontrol edilebilen pozisyon korumalı drone" ("ESP32-based position-hold drone using MPU9250, PMW3901 and TOF400/VL53L1X, controllable through a web interface"). 0★, created 15 Dec 2025 — [GitHub](https://github.com/HalitSimsek0/Pozisyon-Korumali-Drone)
- **MiniDrone-Flight-Controller-PCB** (ESP32-S3 + OV2640, PCB frame): 1★ — [GitHub](https://github.com/Hardwarehustle/MiniDrone-Flight-Controller-PCB)
- **Crazyflie-OpenCv** (4★, created 2 May 2025): "Real-time green object tracking with a Crazyflie 2.1 drone using an ESP32-CAM and OpenCV".
  - The onboard camera was abandoned: "the battery died pretty quickly or the crazyflie wouldn't take off because of the weight and the amount of power that was being taken away from the camera".
  - The project switched to an "offboard vision architecture" with an ESP32-CAM streaming `http://<ip>:81/stream` to the PC, and flight commands sent via cflib and a Crazyradio PA.
  - Source: [GitHub](https://github.com/lcoronelr/Crazyflie-OpenCv)
- **Flix:**
  - 2,057★ on 6 Oct 2026 — [GitHub](https://github.com/okalachev/flix)
  - Its Python API `pyflix` reached 1.0.0 on 17 Aug 2026, after 13 releases since 22 Jul 2025 — [PyPI pyflix](https://pypi.org/project/pyflix/)
  - At RoboCamp 2026, "Several participants were able to implement altitude hold, and two participants implemented stable position hold" using distance sensors and an overhead camera (earlier research) — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)

#### Documented AI demos on micro drones (2026)
- **CircuitDigest "Object-Tracking Drone Using LiteWing"** (9 Jul 2026):
  - Uses a "ceiling-mounted USB webcam" plugged into the laptop. OpenCV and NumPy do colour tracking, and the LiteWing Python library sends Wi-Fi flight commands.
  - "The Position Module enables features such as height hold and position hold, allowing the drone to maintain a stable flight while the tracking algorithm focuses on following the target."
  - Source: [CircuitDigest](https://circuitdigest.com/microcontroller-projects/object-tracking-drone-using-litewing)
- **YouTube:** CircuitDigest's "This ESP32 Drone Flies Autonomously… Without GPS! | Optical Flow + ToF Positioning Module Demo" had **16,077 views** in the returnyoutubedislike snapshot of 20 Aug 2026 — [YouTube](https://www.youtube.com/watch?v=SAOXv9A0n1o); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=SAOXv9A0n1o)

### Inferences
- **The proven low-tinkering pattern for Python vision on micro drones is "drone with flow/ToF hold + camera off the drone".** The camera can be overhead (CircuitDigest, Flix RoboCamp) or a separate Wi-Fi camera. Onboard cameras on sub-50 g brushed quads remain marginal: the Crazyflie-OpenCv failure, ESP-FLY's roughly 3 g payload limit (earlier research), and MiniFly's single-port limit.
- **Community size for "printed + camera + hold" is effectively zero outside Flix.** The user would be pioneering that combination rather than following a build log.

### Gaps
- Hackaday.io (search is login-gated), Instructables (search API needs a key) and Reddit (blocked) were not swept in this session. Earlier research hit the same blocks.
- YouTube was checked only for specific videos. No systematic 2024–2026 YouTube sweep for "camera + optical flow micro drone" builds was possible.
- No flight-time or latency numbers were found for any onboard-camera micro drone build with flow hold.

## 3. Crazyflie-compatible or clone boards and DIY printed frames using Crazyflie firmware with a flow deck; ESP-Drone builds on printed frames with PMW3901 + VL53L1X that are documented working

### Takeaway
**ESP-Drone side.** The only productised and documented ESP-Drone + PMW3901 + VL53L1X combination is CircuitDigest's LiteWing Positioning Module, at US$38. It comes with:
- a wiki and seven tutorials;
- a cflib-based Python library with `fly_to()`/`fly_path()` (Mar 2026);
- a 16k-view demo video;
- a 2026 object-tracking project.

Its weak points are binary-only module firmware, drift reports, UDP packet loss (earlier research) and no Australian stockist. It runs on LiteWing's PCB frame; no printed-frame ESP-Drone + flow build with flight evidence was found.

**Crazyflie side.** Bitcraze's own Bolt 1.1 with the official 130 mm printed frame and a Flow deck v2 is a documented printed-frame path. It is far over budget, and the Flow deck is sold out in Australia.

**Clones.** The Crazyflie-style ALIENTEK MiniFly cannot carry flow and camera together, and SkyByte Mini is an ESP-Drone clone with a plagiarism flag. No commercial Crazyflie-clone board with flow plus camera was found.

### Cited Findings

#### LiteWing Positioning Module (VL53L1X + PMW3901), the documented ESP-Drone flow path
- **Tindie listing:** US$38.00, shipped from Jaipur.
  - "Height hold and position hold without GPS"; "~8g"; "Plug-and-play 24-pin expansion connector"; "4x WS2812B RGB LEDs".
  - Source: [Tindie](https://www.tindie.com/products/semicon_lab/litewing-drone-positioning-module/)
- **Wiki details:**
  - Sensors are a "VL53L1X Time-of-Flight distance sensor" and a "PMW3901MB optical flow sensor". The flow sensor's working range is "80 mm to 2m"; the ToF reads up to 4 m.
  - "The required firmware binaries are maintained in the LiteWing GitHub repository". Gerbers remain proprietary; the circuit diagrams are CC-licensed.
  - Seven tutorials, including "Autonomous Flight Path using LiteWing".
  - User comments mention drift needing wall corrections and USB flashing problems.
  - Source: [CircuitDigest wiki](https://circuitdigest.com/wiki/litewing-drone-positioning-module/)
- **LiteWing Python library** (5 Mar 2026):
  - Installed by cloning `Circuit-Digest/LiteWing-Library`; it "is built on top of the cflib".
  - API: `arm()`, `takeoff()`, `hover()`, `land()`, `fly_to()`, `fly_path()`, `height`, `position`, `velocity`, `read_sensors()`.
  - "To maintain height and hold position, the drone will need a height sensor and a position sensor, both of which are present on the LiteWing Positioning module only."
  - Requires Python 3.11 and cflib 0.1.30. No onboard camera support.
  - Source: [CircuitDigest docs](https://circuitdigest.com/articles/litewing-drone-python-library-documentation)
- **Earlier research:**
  - LiteWing issue #18 (Aug 2026) reported "Frequent UDP packet loss" on drones with positioning modules — [GitHub issue](https://github.com/jobitjoseph/LiteWing/issues/18)
  - The LiteWing Android app (Google Play, updated 24 Mar 2026) offers height-hold mode — [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller)
- **Australian availability:** Pakronics returned 0 hits for "litewing" — [Pakronics search](https://pakronics.com.au/search?q=litewing). The Sydney price notes found Tindie (India) the practical source: LiteWing + module ≈ US$132 delivered (A$190.23; A$209.25 with GST) — [Tindie LiteWing](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/)

#### Crazyflie-compatible boards and printed frames
- **Bitcraze Bolt 1.1** (search summary of Bitcraze pages):
  - A "Crazyflie 2.x compatible flight controller for brushless builds", 36 × 35.4 mm with 30.5 mm mounting holes.
  - "A custom designed 130mm 3D printed frame (latest v5)" is in the bitcraze-mechanics repo.
  - The reference build uses DYS 1806 motors and DYS 20A BLHeli_S ESCs.
  - Being pin-compatible, it can take the Flow Deck v2.
  - Sources: [Bitcraze blog "Crazyflie Bolt: FPV meets Autonomy"](https://www.bitcraze.io/2020/01/crazyflie-bolt-fpv-meets-autonomy/); [Bolt 1.1 product](https://bitcraze.io/products/crazyflie-bolt-1-1); [bitcraze-mechanics](https://github.com/bitcraze/bitcraze-mechanics)
  - Bolt 1.1 price: US$205 (≈A$295.43) (earlier research) — [Bitcraze store](https://store.bitcraze.io/collections/kits)
- **Australian Crazyflie prices at Pakronics (6 Oct 2026):**
  - **Flow deck v2: A$125.72 inc GST, sold out** — [Pakronics](https://pakronics.com.au/products/crazyflie-flow-v2-deck-ss114991549)
  - Z-ranger v2 deck: A$55.32 inc GST, in stock — [Pakronics](https://pakronics.com.au/products/crazyflie-z-ranger-v2-deck-ss114991550)
  - "Getting started bundle - Crazyflie 2.1+" (includes a Crazyradio): **A$540.78 inc GST, in stock** — [Pakronics](https://pakronics.com.au/products/crazyflie-getting-started-bundle-900000044)
  - Crazyflie 2.1+ alone: A$409.99 ex GST (≈A$450.99 inc; not checked on page), in stock — [Pakronics](https://pakronics.com.au/products/crazyflie-2-1-version-open-source-mirco-quadcopter-drone-support-bluetooth5-le-robotics-suitable-for-indoor-small-space-high-density-ss114993295)
  - Crazyflie 2.1 Brushless: A$789.99 ex GST, in stock — [Pakronics](https://pakronics.com.au/products/crazyflie-2-1-brushless-version-open-source-mirco-quadcopter-drone-support-bluetooth5-le-robotics-suitable-for-indoor-small-space-high-density-ss114993410)
  - **AI-deck 1.1: A$353.09 inc GST, in stock** — [Pakronics](https://pakronics.com.au/products/crazyflie-ai-deck-v1-1-with-gap8-risc-v-mcu-esp32-wi-fi-ss114992445)
- **AI-deck 1.1:** has a "gray-scale" camera; the earlier v1.0 had a "Bayer RGB" variant. Bitcraze still describes it as "early access" — [Bitcraze AI-deck 1.1](https://www.bitcraze.io/products/ai-deck-1-1/)
- **Crazyflie Python library:** cflib 0.1.34 released 30 Sep 2026 (48 releases since 2016) — [PyPI cflib](https://pypi.org/project/cflib/)

#### Clones and look-alikes
- **ALIENTEK MiniFly:** STM32F411 + nRF51822, BMP280, optional flow and camera modules, €89.90, sold out. One expansion port means flow *or* camera — [OpenELAB](https://openelab.io/a/s/products/minifly-quadrotor-drone-stm32-diy-kit); [minifly-upper-computer](https://github.com/Big-Clever/minifly-upper-computer)
- **SkyByte Mini:** an ESP-Drone-firmware PCB drone, flagged by CNX for plagiarising CircuitDigest — [CNX](https://cnx-software.com/2024/07/07/skybyte-mini-wifi-drone-open-source-esp32-drone-firmware/)
- **Upstream ESP-Drone with a flow deck:** issue #102, "Kalman estimator does not work after flowdeck v2 integration", is open (earlier research) — [esp-drone #102](https://github.com/espressif/esp-drone/issues/102)

### Inferences
- **For a printed frame with Crazyflie-grade flow hold, the Bolt route works but is expensive.** Bolt ≈ A$295 + brushless motors/ESCs + Flow deck A$125.72 (when back in stock) + battery and radio puts it well over A$450 before any camera. It is also a brushless 130 mm build: more tinkering and more crash energy than the user wants.
- **LiteWing + Positioning Module is the only in-budget path where flow/ToF hold and Python waypoint control are documented working.** The trade-off is a PCB frame, so printing is limited to guards, legs and mounts, plus India shipping.
- **A "LiteWing positioning module on a printed ESP-Drone frame" build is plausible but undocumented.** The module plugs into LiteWing's 24-pin connector, and no printed-frame adapter was found.

### Gaps
- No independent (non-CircuitDigest) flight report of the LiteWing Positioning Module was found, and no flight-time figure with the module fitted.
- Whether the module firmware works with ESP-FLY or generic ESP-Drone boards is undocumented.
- Bolt 1.1 Australian stock and price were not checked (Pakronics' Bolt listing not queried). Flow deck v2 restock date unknown.

## 4. Commercial programmable camera drones that replaced the DJI Tello for Python/AI education in 2025–2026: phone control, camera stream to Python/OpenCV, position hold, printed parts, Australian availability

### Takeaway
No like-for-like Tello replacement under A$250 is sold in Australia in October 2026. Tello EDU is **sold out** at Pakronics (A$216.70), and She Maps, an Australian education reseller, no longer lists Tello drones at all, only CoDrone EDU.

The 2025–26 education successors split into two groups:
- **Sensor-rich but camera-less, controller-flown:** Robolink **CoDrone EDU**, A$391.60–409 in Australia. It has optical flow, front and bottom range sensors, and an actively maintained Python library.
- **Camera-equipped but expensive:** **VEX AIR**, US$699 (≈A$1,007), with front and bottom cameras, Python, and a dedicated controller.

Phone-flown camera drones with Python exist but each has a catch:
- **LiteBee Wing:** €229.95 / £179.99, 8 MP camera, LiteBeeGo app, Python; 126 g; no Australian stockist found.
- **Drona Pluto X:** Python library with a camera endpoint; India-centric.
- **HighGreat HULA:** US$139, but 104 Kickstarter backers, an iOS app last updated Jan 2024, and a Python library that needs vendor "activation".

**Duckiedrone DD24** (US$449) is a Raspberry Pi camera drone with 5 ToF sensors, but it is a large 4S brushless kit, not a phone-flown micro drone.

### Cited Findings

#### Tello / Tello EDU / RoboMaster TT in Australia
- **Pakronics (6 Oct 2026):**
  - "DJI Tello EDU" **A$216.70 inc GST, sold out** — [Pakronics](https://pakronics.com.au/products/tello-edu)
  - "Buy Tello DJI" A$158.60 ex GST, sold out — [Pakronics](https://pakronics.com.au/products/tello-dji-drone-for-beginners)
  - "DJI RoboMaster Tello Talent (TT)" A$369.00 ex GST, sold out — [Pakronics](https://pakronics.com.au/products/dji-robomaster-tello-talent-tt-pakr-a0354)
  - All Tello starter packs sold out.
  - A "Tello Snap on Top Cover - Blue" is in stock (A$16.00 ex GST) — [Pakronics](https://pakronics.com.au/products/tello-snap-on-top-cover-blue-pakr-a0268)
- **She Maps:** its store API returns only a free "Tello 3D Printed Lego Clip" for "tello" — [She Maps](https://shemaps.com/product/tello-3d-printed-lego-clip/)
  - Conflict: a search summary claimed Tello EDU "is still available in Australia through education resellers such as She Maps". The store data does not support that — [She Maps "Tello Edu VS Tello"](https://shemaps.com/?p=11354) (search summary)
- **Ryze's own Tello page** still shows "Buy Now"/"Where to Buy" under a 2026 copyright footer and lists "Vision Positioning System - Smart tech that facilitates precise hovering" — [Ryze Tello](https://www.ryzerobotics.com/tello)
  - Specs: "Approximately 80 g", 13 min, 100 m, "5MP (2592x1936)" photos, "HD720P30" video, 82.6° FOV, EIS, "2.4 GHz 802.11n Wi-Fi, 720p Live View" — [Ryze Tello specs](https://www.ryzerobotics.com/tello/specs)
  - DJI ended its education line in 2024 (earlier research) — [DroneDJ, 4 Jan 2024](https://dronedj.com/2024/01/04/dji-education-drone-shutdown-us/)
- **Python libraries:**
  - djitellopy 2.5.0, last PyPI release 9 Jun 2023: "easily retrieve a video stream", "control a swarm of drones" — [PyPI](https://pypi.org/project/djitellopy/)
  - TelloPy 0.7.0, released 3 Oct 2026 — [PyPI](https://pypi.org/project/tellopy/)
  - The RoboMaster SDK's last release was 6 May 2022 — [PyPI](https://pypi.org/project/robomaster/)

#### Robolink CoDrone EDU (the main classroom successor in Australia)
- **Specs:**
  - "Gyroscope, accelerometer, barometer, optical flow, bottom range, front range, dual underside color sensor". No camera.
  - "54.8 g", 138.8 × 138.5 × 34.8 mm, "7-8 min flight time".
  - Flown with the included Smart Controller (2× AA). No phone app.
  - Blockly in the browser; Python on macOS/Windows only.
  - "Almost all of the parts of the drone can be replaced, including propellers, motors, even the frame itself".
  - US$249.
  - Source: [Robolink](https://www.robolink.com/products/codrone-edu)
- **Python library:** `codrone-edu` 2.10 released **10 Sep 2026**, 29 releases since Oct 2021 — [PyPI](https://pypi.org/project/codrone-edu/)
- **Australian prices:**
  - Pakronics **A$391.60 inc GST, in stock** — [Pakronics](https://pakronics.com.au/products/codrone-edu-pakr-a0400)
  - She Maps "CoDrone EDU – Individual Kit" **A$409, in stock**.
  - She Maps spares: replacement frame A$39, set of 4 motors A$59, propellers A$24, Power Pack A$64. Classroom kits A$2,079–3,990; Complete Starter Kit A$4,450.
  - Source: [She Maps](https://shemaps.com/product/codrone-edu/); [She Maps frame](https://shemaps.com/product/codrone-edu-replacement-frame/)
- **Old camera accessory:** Pakronics lists a "Camera (FPV) for CoDrone" (A$63.69 ex GST, sold out). It is not stated to fit CoDrone EDU — [Pakronics](https://pakronics.com.au/products/camera-fpv-for-codrone)

#### VEX AIR (new 2025–26 competition and education drone)
- "VEX AIR Competition Drone is priced at $699, while the VEX AIR Competition Drone Bundle costs $899" (search summary) — [VEX 737-9001](https://www.vexrobotics.com/737-9001.html); [VEX 737-9000](https://vexrobotics.com/737-9000.html)
- "two Vision Sensors that serve as its onboard cameras—one on the front and one on the bottom". Programmable with "VEXcode Blocks, Switch, Python, and a Microsoft Visual Studio Code extension" (search summary; the page returned 403) — [VEX KB](https://kb.vex.com/hc/en-us/articles/38749895688340-Features-of-the-VEX-AIR-Drone)
- A Python Camera API is documented — [api.vex.com AIR Python Camera](https://api.vex.com/air/home/python/Camera.html)
- No Australian price could be read (vexrobotics.com/air returned 403).

#### LiteBee Wing (MakerFire)
- **Kubii (EU):** €229.95 incl. VAT (≈A$371.97), "5 units in stock".
  - "8 MP resolution with 88° field of view".
  - "Control options: Radio controller, smartphone (via LiteBeeGo app), or computer".
  - "Block-based (Scratch-compatible), Python, and LiteBeeGo app".
  - Altitude hold, LEGO-compatible, propeller guards.
  - Source: [Kubii](https://www.kubii.com/en/robots-extensions/5093-product-3272496326026.html)
- **Scan UK:** £179.99 (≈A$342.39); listing title "LiteBee Wing Educational Drone 8 MP 88° FOV 126g 11-minute flight time" (search summary) — [Scan UK](https://www.scan.co.uk/products/litebee-wing-educational-drone-8-mp-88-fov-126g-11-minute-flight-time)
- **RobotShop:** lists formation packs "Litebee Wing FM-4 V2 with Infraded camera" (sic) and "FM-10 V2"; a 3 × 3 m QR-code mat enables formation flight (search summary) — [RobotShop FM-4](https://www.robotshop.com/products/litebee-wing-drone-fm-4-pack-4x); [mybotshop](https://www.mybotshop.de/LiteBee-Wing-4-x-Educational-Programmable-Drones-Classroom-kit_1)
- **Conflict:** earlier research found LiteBee Wing marked "CLOSEOUT" at STEMfinity (URL 404 in Oct 2026). Kubii shows stock and RobotShop shows "V2" listings in 2026.
- **Third-party Python tool:** `litebee` (PyBeeClient) 0.9.1, releases from 22 Oct 2025 to 7 Sep 2026. It compiles LiteBee Client light-show files ("tested on version 1.3.9") — [PyPI](https://pypi.org/project/litebee/)
- **Australia:** no Australian listing found. Pakronics returned no LiteBee products — [Pakronics search](https://pakronics.com.au/search?q=litebee)

#### HighGreat HULA
- **Notebookcheck, 24 Dec 2024:**
  - Starting at $139 (≈A$200.31) via Kickstarter, "shipping scheduled for January".
  - "720p at 30 fps"; "IR sensors for navigation and collision avoidance"; QR code/visual-tag/gesture recognition.
  - 100 g, 10 min, 100 m range, no GPS; smartphone app control.
  - Source: [Notebookcheck](https://www.notebookcheck.net/Hula-Affordable-drone-with-camera-supports-AR-applications-and-multiplayer-action-thanks-to-laser-blaster.936640.0.html)
  - **Conflict:** Kicktraq and press list a "1080p Camera" and "120° Adjustable Gimbal" — [Kicktraq](https://www.kicktraq.com/projects/highgreat/hula-an-entertaining-and-educational-toy-drone-for-everyone/); [Camera Jabber](https://camerajabber.com/?p=1410511)
- **Kickstarter:** 17 Oct – 5 Dec, HK$207,652 raised against a HK$50,000 goal, **104 backers** — [Kicktraq](https://www.kicktraq.com/projects/highgreat/hula-an-entertaining-and-educational-toy-drone-for-everyone/)
- **"HuLa EDU" iOS app** (HighGreat): v2.0.5, **last updated 13 Jan 2024**, 1 rating. Features include "Real time high-definition image transmission", "QR code carpet formation flight", "positioning mode enabled" and block programming — [App Store](https://apps.apple.com/app/id6474287372)
- **pyhula 1.1.4** (both releases 8 Aug 2024; depends on pymavlink and opencv-python): "pyhula needs to be activated before it can be used. Contact with the author to get the activator and documents." — [PyPI](https://pypi.org/project/pyhula/)

#### Drona Aviation Pluto X / Pluto 1.2
- **plutocontrol 2.0.0** (24 Mar 2026): connects to `192.168.4.1:23`. `pluto.cam()` "Sets the IP and port for the camera connection" — [PyPI](https://pypi.org/project/plutocontrol/)
- **Drona's Python page:** "Switch to camera endpoint and wire the stream into any vision pipeline". Telemetry: "height, attitude, and battery metrics at 10+ Hz" — [Drona Python](https://www.dronaaviation.com/python)
- **Pluto X kit:** includes "wifi camera, range sensor and DC geared motors"; "Nylon 6 structure" (search summary) — [Drona Pluto X](https://www.dronaaviation.com/plutox)
- ₹20,000 on the product page (earlier research).
- No Australian seller found; Pakronics returned no Pluto products — [Pakronics search](https://pakronics.com.au/search?q=pluto)

#### Duckiedrone DD24 (Duckietown)
- US$449 (≈A$647.05) on the official store; another retailer lists $749.
- Raspberry Pi 4 (4 GB), OV5647 camera with a 160° fisheye lens, 5 ToF sensors, IMU, 4 brushless motors, SpeedyBee F405, 1500 mAh 4S.
- Programmable in Python; comes with an undergraduate course.
- Source (search summary): [Duckietown store](https://get.duckietown.com/products/autonomous-raspberrypi-quadcopter-duckiedrone-dd24); [DD24 components](https://docs.duckietown.com/daffy/opmanual-dd24/preliminaries/dd24-components-description.html); [OzRobotics](https://ozrobotics.com/shop/duckiedrone-diy-raspberry-pi-based-quadcopter-drone-kit-to-introduce-learners-autonomous-flight/)

#### Other Australian-listed education drones (title-only listings at Pakronics)
- "Air:bit 2 Drone for micro:bit": A$199.18 ex GST, sold out — [Pakronics](https://pakronics.com.au/products/air-bit-2-drone-for-micro-bit-pakr-et1192)
- "Airwood 4 in 1 Drone Kit with Camera and Program module and 3x Battery": A$209.05 ex GST, sold out — [Pakronics](https://pakronics.com.au/products/airwood-4-in-1-drone-kit-with-camera-and-program-pakr-aw-droneedu)
- "DIY wooden Drone with Aerial Photography": A$53.94 ex GST, in stock. Programmability not stated — [Pakronics](https://pakronics.com.au/products/diy-wooden-drone-kit-pakr-a0627)

### Inferences
- **Australian schools appear to have moved from Tello EDU to CoDrone EDU** (She Maps' range, Pakronics stock). For this user, CoDrone EDU is a strong sensor platform with an actively maintained Python library, but it has no camera and no phone flight, and A$391.60–409 is over the A$250 budget.
- **A used Tello or Tello EDU remains the best ready-made "phone + 720p camera + Python video + hover-hold" drone.** It is now a second-hand-only purchase in Australia, and printing is limited to accessories, though plentiful ones.
- **The camera-equipped successors each break a requirement:**
  - VEX AIR: price, roughly 4× budget.
  - LiteBee Wing: price after conversion and shipping, 126 g weight, no Australian seller.
  - HULA: small backer base, stale app, activation-gated SDK.
  - Pluto X: Australian availability.
  - Duckiedrone: size and price.

### Gaps
- Used Tello/Tello EDU prices in Australia could not be read (eBay AU 403; no other source).
- It is unknown whether LiteBee Wing's Python API exposes the 8 MP camera stream to OpenCV on a laptop. The same applies to the camera resolution and latency of Pluto's camera endpoint, and to HULA's video access through pyhula.
- No HULA Android app or 2025–2026 HighGreat retail listing was found. Its Australian availability is unknown.
- VEX AIR's Australian price and whether any VEX AIR camera stream reaches a laptop-side Python program are unknown.
- Whether CoDrone EDU can carry a small add-on camera (payload margin) is undocumented.

## 5. Candidate-by-candidate assessment against the user's requirements (Android phone flight, camera → laptop for OpenCV, height/position hold and obstacle sensing, Python SDK, how much is printable, price in AUD, Australian availability, community size and maturity)

### Takeaway
None of the newly found options meets all of the user's requirements: one phone-flown drone, mostly printed, with camera and hold sensors, for about A$250, buyable in Sydney.
- **Best documented sensor-plus-Python platform within budget:** LiteWing + Positioning Module, ≈A$190–233 delivered from India. It flies from an Android phone, has ToF + flow height/position hold, and has a 2026 Python library with waypoint functions. The onboard camera is its weak spot: the documented toy Wi-Fi camera is viewed only in phone apps, and CircuitDigest's own AI demo uses a ceiling webcam.
- **Best ready-made camera + Python + hover-hold:** a used Tello/Tello EDU, if one can be found. It is discontinued, sold out new in Australia and not printable beyond accessories.
- **Over budget:** CoDrone EDU, VEX AIR, the Crazyflie AI stack, Duckiedrone and LiteBee Wing. CoDrone EDU and VEX AIR are both controller-flown.
- **Low-evidence or flawed:** HULA, MiniFly and SkyByte.

### Cited Findings

| Candidate (status) | Android phone flight | Camera → laptop/OpenCV | Hold / obstacle sensing | Python | Printable share | Price (AUD) | Australian availability | Community / maturity evidence | Sources |
|---|---|---|---|---|---|---|---|---|---|
| **LiteWing V3 + Positioning Module** (active) | Yes, LiteWing app (Google Play, updated 24 Mar 2026) | Only a DIY toy Wi-Fi camera on its own AP, shown in phone "IP Camera/WebCam" apps; no laptop path documented. The CircuitDigest AI demo uses a ceiling USB webcam. | VL53L1X height + PMW3901 position hold (flow 80 mm–2 m) | LiteWing library (cflib) with `fly_to()`/`fly_path()`; cflib/cfclient | PCB frame; only guards/legs/mounts printable | US$49 + US$38 → ≈A$190.23 delivered (A$209.25 with GST), per the Sydney price notes | No Australian stockist (Pakronics 0 hits); Tindie ships from India; Elecrow page text includes "Out of stock" (ambiguous: the page also lists other products) | CircuitDigest tutorials, 16k-view demo, 2026 object-tracking project; issue #18 UDP loss | [Tindie module](https://www.tindie.com/products/semicon_lab/litewing-drone-positioning-module/); [wiki](https://circuitdigest.com/wiki/litewing-drone-positioning-module/); [Python lib](https://circuitdigest.com/articles/litewing-drone-python-library-documentation); [camera tutorial](https://circuitdigest.com/tutorial/adding-wi-fi-camera-to-litewing-esp32-drone); [object tracking](https://circuitdigest.com/microcontroller-projects/object-tracking-drone-using-litewing); [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller); [issue #18](https://github.com/jobitjoseph/LiteWing/issues/18) |
| **M5Stack StampFly v1.1** (active; v1.0 EOL) | No phone app; ESP-NOW joystick or UDP over its AP | None | 2× ToF, optical flow, baro; ALT_HOLD/POS_HOLD; forward ToF obstacle detection | `sf` CLI Python SDK; "Tello-SDK-compatible API"; Blockly | None (moulded) | US$49.95 (≈A$71.98) + joystick US$29.95; Core Electronics A$129.95 (v1.0 listing) | Core Electronics (search summary) | Ecosystem workshops (high-school curriculum, SICE tutorial) | [M5Stack](https://shop.m5stack.com/products/m5stamp-fly-v1-1-with-m5stamps3a); [ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem); [Core](https://core-electronics.com.au/m5stamp-fly-programmable-open-source-quadcopter-kit.html) |
| **Robolink CoDrone EDU** (active) | No (Smart Controller) | No camera | Optical flow, bottom + front range, baro, colour | `codrone-edu` 2.10 (10 Sep 2026) | Replaceable frame (A$39 spare); printable trays/storage only | A$391.60 (Pakronics) / A$409 (She Maps) | In stock in Australia | Classroom kits sold in Australia (A$2,079–4,450 packs) | [Robolink](https://www.robolink.com/products/codrone-edu); [PyPI](https://pypi.org/project/codrone-edu/); [Pakronics](https://pakronics.com.au/products/codrone-edu-pakr-a0400); [She Maps](https://shemaps.com/product/codrone-edu/) |
| **Ryze/DJI Tello or Tello EDU** (discontinued; used only) | Yes (Tello apps) | 720p30 live view over Wi-Fi; djitellopy "easily retrieve a video stream" | Vision Positioning System "facilitates precise hovering" | djitellopy (last release Jun 2023); TelloPy 0.7.0 (3 Oct 2026) | Accessories only; the largest catalogue (prop guard v3 771 DL, mirror clip, payload system) | New A$216.70 (sold out); used price unknown | Sold out at Pakronics; She Maps lists none | Largest Python/education community of any candidate | [Ryze specs](https://www.ryzerobotics.com/tello/specs); [Ryze](https://www.ryzerobotics.com/tello); [Pakronics](https://pakronics.com.au/products/tello-edu); [djitellopy](https://pypi.org/project/djitellopy/); [TelloPy](https://pypi.org/project/tellopy/); [Printables 275499](https://www.printables.com/model/275499) |
| **LiteBee Wing (V2)** (active in EU/UK) | Yes, LiteBeeGo app (Android & iOS) | 8 MP, 88° camera; laptop/Python stream access not documented | Altitude hold; QR-mat formation positioning (FM packs) | "Python" listed; details not found | LEGO-compatible (no printed parts documented) | €229.95 ≈A$371.97; £179.99 ≈A$342.39 | No Australian seller found | Formation packs; third-party light-show tool (2025–26) | [Kubii](https://www.kubii.com/en/robots-extensions/5093-product-3272496326026.html); [Scan](https://www.scan.co.uk/products/litebee-wing-educational-drone-8-mp-88-fov-126g-11-minute-flight-time); [PyPI litebee](https://pypi.org/project/litebee/) |
| **HighGreat HULA** (2024 crowdfund; support unclear) | App found for iOS (last update Jan 2024); Android not found | 720p30 (or 1080p, per conflicting sources) with real-time image transmission; pyhula depends on OpenCV | 4-direction IR obstacle sensing; QR-carpet positioning | pyhula 1.1.4 (Aug 2024), needs vendor activation | None | From US$139 ≈A$200.31 (2024 Kickstarter) | Unknown | 104 Kickstarter backers | [Notebookcheck](https://www.notebookcheck.net/Hula-Affordable-drone-with-camera-supports-AR-applications-and-multiplayer-action-thanks-to-laser-blaster.936640.0.html); [Kicktraq](https://www.kicktraq.com/projects/highgreat/hula-an-entertaining-and-educational-toy-drone-for-everyone/); [App Store](https://apps.apple.com/app/id6474287372); [PyPI](https://pypi.org/project/pyhula/) |
| **Drona Pluto X** (active, India) | Yes, Pluto Controller app (earlier research) | Wi-Fi camera; Python "camera endpoint" into "any vision pipeline" | Range sensor in kit; height telemetry at 10+ Hz | plutocontrol 2.0.0 (Mar 2026) | Nylon frame; vendor encourages own (printed) frames (earlier research) | ₹20,000 (earlier research) | No Australian seller found | ~21,000 units sold (2024 interview, earlier research) | [PyPI](https://pypi.org/project/plutocontrol/); [Drona Python](https://www.dronaaviation.com/python); [Pluto X](https://www.dronaaviation.com/plutox); [ElectronicsForU](https://electronicsforu.com/technology-trends/arduino-is-for-electronics-raspberry-pi-is-for-computing-we-aim-to-become-that-for-drones-with-pluto); [Pluto Controller app](https://apps.apple.com/us/app/id1173323776) |
| **ALIENTEK MiniFly** (sold out) | "Smartphone" control (app unnamed) | Optional camera with HTTP snapshots; cannot be fitted with flow at the same time | BMP280 baro; optional flow (one port) | Third-party host only | Not documented | €89.90 ≈A$145.42 | No | A host-app author abandoned it for Tello | [OpenELAB](https://openelab.io/a/s/products/minifly-quadrotor-drone-stm32-diy-kit); [host app](https://github.com/Big-Clever/minifly-upper-computer) |
| **Crazyflie 2.1+ + Flow deck v2 + AI-deck 1.1** (active) | Android BLE app (flight only; no Brushless support; earlier research) | AI-deck grayscale camera, "early access" | Flow deck (ToF + flow); Multi-ranger optional (A$185.99 ex GST) | cflib 0.1.34 (30 Sep 2026) | Accessories only | A$540.78 + A$125.72 + A$353.09 ≈ **A$1,019.59** | Pakronics; Flow deck sold out | Research-grade community | [Android client](https://github.com/bitcraze/crazyflie-android-client); [Pakronics bundle](https://pakronics.com.au/products/crazyflie-getting-started-bundle-900000044); [Flow deck](https://pakronics.com.au/products/crazyflie-flow-v2-deck-ss114991549); [AI-deck](https://pakronics.com.au/products/crazyflie-ai-deck-v1-1-with-gap8-risc-v-mcu-esp32-wi-fi-ss114992445); [Bitcraze AI-deck](https://www.bitcraze.io/products/ai-deck-1-1/); [cflib](https://pypi.org/project/cflib/) |
| **Crazyflie Bolt 1.1 + official 130 mm printed frame** | As Crazyflie (app) | Add AI-deck | Flow deck v2 compatible | cflib | Frame printable (130 mm, v5) | Bolt US$205 ≈A$295.43 + motors/ESCs/flow | Not checked | Bitcraze reference build (2020) | [Bitcraze blog](https://www.bitcraze.io/2020/01/crazyflie-bolt-fpv-meets-autonomy/); [bitcraze-mechanics](https://github.com/bitcraze/bitcraze-mechanics) |
| **VEX AIR** (new 2025–26) | No (VEX controller) | Front and bottom cameras; Python Camera API | Not verified | Python, VS Code | Not documented | US$699 ≈A$1,007 (bundle US$899 ≈A$1,296) | Australian price not readable | New competition platform | [VEX 737-9001](https://www.vexrobotics.com/737-9001.html); [api.vex.com](https://api.vex.com/air/home/python/Camera.html) |
| **Duckiedrone DD24** | Not documented | Pi camera (on-board Raspberry Pi 4) | 5 ToF sensors | Python | Not documented | US$449 ≈A$647.05 | Ships from Duckietown (not verified for Australia) | University course and community | [Duckietown](https://get.duckietown.com/products/autonomous-raspberrypi-quadcopter-duckiedrone-dd24) |
| **ESP-FLY** (for Australian-price comparison) | Yes, ESP-Drone app (earlier research) | 5.8 GHz analog AIO camera only; ESP32 camera "Not directly" supported | None (Angle/Acro only) | cflib/cfclient (CRTP) | Printed frame | **A$150.83 inc GST** | **In stock at Pakronics** | 1.63M-view video (earlier research) | [Pakronics](https://pakronics.com.au/products/esp-fly-diy-kit-diy-micro-drone-kit-based-on-xiao-esp32-s3-by-max-imagination-ss114993694); [ESP-FLY README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY); [YouTube](https://www.youtube.com/watch?v=V_mZsiZcy7s) |
| **SkyByte Mini** (2024 crowdfund) | ESP-Drone app | None | IMU only | ESP-Drone tools | PCB frame | $54–65 (2024) | Unknown | Plagiarism flag | [CNX](https://cnx-software.com/2024/07/07/skybyte-mini-wifi-drone-open-source-esp32-drone-firmware/) |

#### Camera-path evidence relevant to every candidate
- **Analog FPV into Android and possibly a laptop:**
  - The Eachine ROTG02 receiver "connects to a phone over USB OTG and appears as a UVC video device". It needs an Android device supporting OTG and UVC, and has "approximately 100ms latency", which the review says is not suitable as a pilot's primary display (search summary) — [Unmanned Tech review](https://www.unmannedtechshop.co.uk/blogs/knowledge-base/eachine-rotg02-android-fpv-receiver-setup-review); [Unmanned Tech product](https://www.unmannedtechshop.co.uk/products/android-compatible-150ch-5-8ghz-otg-diversity-fpv-receiver-rotg02)
  - Phaser FPV (NSW) returned no UVC/OTG 5.8 GHz receiver. Its 1S analog AIO cameras (BetaFPV A01 A$46.95, M01 A$48.95) were sold out — [Phaser FPV A01](https://phaserfpv.com.au/products/betafpva01aiocamera58gvtxwire-connectedversion); [Phaser FPV M01](https://phaserfpv.com.au/products/betafpv-m01-aio-camera-58ghz-vtx-v21-wired)
- **ESP32 digital video, best case** (earlier research): hx-esp32-cam-fpv quotes "Latency 90-110ms" at 640×360–1024×576 — [GitHub](https://github.com/RomanLut/hx-esp32-cam-fpv)
- **Onboard ESP32-CAM on a Crazyflie failed** on weight and power — [Crazyflie-OpenCv](https://github.com/lcoronelr/Crazyflie-OpenCv)
- **LiteWing's documented camera** is phone-app-only — [CircuitDigest](https://circuitdigest.com/tutorial/adding-wi-fi-camera-to-litewing-esp32-drone)
- **MiniFly's camera** delivers HTTP JPEG snapshots to Python — [GitHub](https://github.com/Big-Clever/minifly-upper-computer)

### Inferences
- **Ranking for this user** (my synthesis; weights: phone flight, hold sensors, Python, a camera usable from a laptop, Sydney availability, budget, printability):
  1. **LiteWing + Positioning Module, with the camera off the drone.** Use an overhead USB webcam, as in CircuitDigest's own 2026 demo. This is the most proven, least-tinkering way to do Python vision with stable hover inside the budget. If an onboard view is essential, the low-risk additions are a 1S analog AIO camera plus a UVC OTG receiver (Android live view; on a laptop it should enumerate like a webcam, which is untested) or the toy Wi-Fi camera (phone view proven, laptop path untested). LiteWing's "~25 g (with 55 mm propellers)" payload (earlier research, [LiteWing wiki](https://circuitdigest.com/wiki/litewing/)) can carry either. The frame is a PCB, so the "mostly printed" goal shrinks to guards, legs and mounts.
  2. **A used Tello/Tello EDU.** Best out-of-the-box fit for phone flight + camera + Python video + hover-hold, at the cost of printability and of buying second-hand, now that it is sold out new in Australia.
  3. **StampFly v1.1** (Australian stock, A$129.95 at Core) for hold sensors + Python, or **ESP-FLY** (Australian stock, A$150.83) for a printed phone drone. Each misses camera or sensors, and StampFly misses phone flight.
  4. **Over budget or flawed:** CoDrone EDU, VEX AIR, Crazyflie AI stack, Bolt build, Duckiedrone, LiteBee Wing, HULA, MiniFly, SkyByte.
- **Phone and laptop control can clash on single-AP drones** (LiteWing, Tello, ESP-FLY). The phone app and a laptop Python script both need the drone's Wi-Fi network, and a separate Wi-Fi camera adds a second network. The user should expect to fly from the phone *or* from Python per session, or to give the laptop a second Wi-Fi adapter. This is an inference from the single-AP designs documented above; no source tested simultaneous clients.
- **"Mostly printed" and "camera + hold" pull in opposite directions in 2026.** The printed designs (ESP-FLY, Flix) lack documented camera + hold. The designs with documented hold (LiteWing, StampFly, CoDrone EDU, Crazyflie) are PCB or moulded.

### Gaps
- Used Tello/Tello EDU prices in Sydney (eBay AU and other marketplaces blocked).
- Whether the LiteWing app and the LiteWing Python library can be connected at the same time, and whether the toy Wi-Fi camera's stream (protocol/URL) can be opened by OpenCV on a laptop.
- Whether the ESP-FLY or LiteWing firmware works with a UVC-receiver analog-camera setup in practice. No build log was found combining a 1S analog AIO camera, a UVC receiver and laptop OpenCV on a phone-flown ESP32 drone.
- No measured flight time for LiteWing with the positioning module plus any camera.
- Australian availability and prices for LiteBee Wing, Pluto X, HULA and VEX AIR.
