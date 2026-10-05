# 3D-printed GPS/autonomous multirotors (ArduPilot / PX4 / INAV) flown and commanded from a smartphone ground station — state as of October 2026

Research date: 2026-10-05. Version and release dates marked "(git)" were read directly from the projects' Git tags or latest commits with `git ls-remote`/`git fetch` on 2026-10-05. They are more reliable than dates shown by web-page summarizers, which gave wrong years for some GitHub and App Store pages; this is noted where it matters. Printables and MakerWorld pages returned HTTP 403 (Cloudflare) to the fetch tool, so details for models hosted there come from search-engine snippets of those pages and are flagged "(snippet)".

## 1. Printable airframes in this class (3D-printed GPS quads, folding "DJI-style" camera drones, hexacopters, ArduPilot/PX4/INAV designs)

### Takeaway
A handful of printable GPS airframes have real documentation. The best-documented current one is the open-source **Grasshopper5**, a 5" design on MakerWorld with a full ArduPilot/INAV reference electronics list, GPS and optical flow. Others are the ArduPilot-forum **Teardrop Quad** (all printed in PLA-Pro, with a published grid-mission log), the contest-winning **Sub-250 g Autonomous Drone Platform** (ArduPilot with MAVLink over ExpressLRS), and the **AX540** hexacopter (F550-class). Published all-up weights and flight times are scarce for every one of them. No well-documented printed folding "DJI-style" GPS camera drone was found: the folding printed designs are either FPV-only or have no build evidence.

### Cited Findings

#### Grasshopper5 (Robofusion), 5-inch, ArduPilot / INAV / Betaflight. Best-documented GPS-ready printed frame
- MakerWorld model: https://makerworld.com/en/models/729739-grasshopper5-5-inch-long-range-fpv-frame. Project documentation: [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- 5-inch props. The rotor plane tilts relative to the body (20°/30°/45°) using swappable printed parts, a "DJI FPV approach" that keeps the body streamlined in forward flight. The flight controller needs a custom board-orientation setting because of the tilt — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- Materials: "Use ABS or PETG minimum — ABS-CF / PETG-CF preferred". Motor arms and the VTX area get hot enough that PLA will not survive (snippet of the same page). Infill 50–70%. The MakerWorld print profile uses 0.2 mm layers, 4 walls and 75% infill — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- Reference electronics: MicoAir H743 V2 FC (30.5×30.5), MicoAir 50A 4-in-1 Bluejay ESC (2–6S), M10G-5883 or MG-F10-C GPS/compass, MTF-01P optical flow + rangefinder (rear-mounted, ~10 m effective), MicoAir TRS 2-in-1 (one 2.4 GHz link carrying both RC and MAVLink telemetry), 2.5 W analog VTX, 2207-class motors, about a 6S 1300 mAh battery — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- The GPS sits above the battery in a printed case, which "flight testing showed picks up the least motor/ESC interference for both GNSS and compass". The MTF-01P covers position hold when GNSS is weak (snippet of the docs page) — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- ArduPilot features listed: GPS hold, waypoint missions, RTL, auto-landing, optical-flow position hold. The complete electronics kit is "from $219.99". The frame is free under CC BY-NC 4.0 — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- Popularity and evidence: "1,800+ downloads and 7,500+ collections" on MakerWorld. All-up weight and flight time are **not stated**. Flight videos, logs and range tests are listed as "upcoming", so no published flight-test evidence exists yet — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)

#### Teardrop Quad / CopterCam (ArduPilot Discourse, March 2025). All-printed, aimed at autonomous flight
- Posted 13 March 2025 by Joseph G. Stroup Jr. as "an inexpensive way to get started with autonomous quad-copters". All parts are printed. The author tried ASA, ABS and PETG and chose Polymaker PLA-Pro for "stiffness and layer adhesion" — [ArduPilot Discourse](https://discuss.ardupilot.org/t/free-stl-files-now-available-for-download-for-basic-quad-copter-all-3d-printed/131750)
- Flight evidence: the author shared an ArduPilot BIN log of a grid (survey) mission flown 3 March 2025 — [ArduPilot Discourse](https://discuss.ardupilot.org/t/free-stl-files-now-available-for-download-for-basic-quad-copter-all-3d-printed/131750)
- STLs and assembly guides are at CopterCam in two versions: the original (124 mm fuselage, teardrop arms) and V2 (150 mm fuselage, capsule arms) — [CopterCam parts](https://www.coptercam.tech/copter-parts/). Prop size, motors, FC, weight and flight time are not given on the parts page.
- Forum feedback: one user asked why PLA arms were used instead of carbon tubes for weight. The author answered that accessibility and simplicity were the reason — [ArduPilot Discourse](https://discuss.ardupilot.org/t/free-stl-files-now-available-for-download-for-basic-quad-copter-all-3d-printed/131750)

#### Sub-250 g Autonomous Drone Platform (Basement Creations). ArduPilot with MAVLink over ExpressLRS
- Files: [Printables 942571](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform), [Thingiverse 6699961](https://www.thingiverse.com/thing:6699961), [Cults3D](https://cults3d.com/en/3d-model/game/sub-250g-autonomous-drone-platform) (all snippets; the pages could not be fetched)
- Described as a "contest-winning sub 250 grams Ardupilot drone with fully functional Mavlink Telemetry over ExpressLRS". It reportedly won first place at a Polish competition (snippet) — [Printables](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform)
- Parts (snippet): SpeedyBee F405 Mini BLS 35A 20×20 stack, SpeedyBee Nano 2.4G ELRS RX, 4× Darwin 1104 4300KV, 2.5–3.5" props, 3S battery drawing about 15 A. The frame is printed in "Carbon PA12" and was 5 g lighter than a CNC carbon frame. Two ELRS pairs were used: 2.4 GHz for AirPort MAVLink telemetry and 868 MHz for RC — [Printables](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform); YouTube summary page: [Sider](https://sider.ai/create/video/ai-video-shortener/explore/e2464873-c8c2-466a-9da2-a7678797ac76)
- The GPS model conflicts between snippets: one says Walksnail WS-M181, another says Foxeer M10-Q120 — [Printables snippet](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform)
- ArduPilot has a board definition for the SpeedyBee F405 Mini ("SpeedyBeeF405Mini") — [ArduPilot hwdef directory, Copter-4.7.1](https://github.com/ArduPilot/ardupilot/tree/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef)

#### AX540 Hexacopter Frame (MakerWorld). Printed F550-class hex for ArduPilot
- [MakerWorld 1034757](https://makerworld.com/models/1034757) (snippet): "sit[s] in roughly the same size niche as the old DJI Flame Wheel F550 kits", and you can "print and replace anything you break". "Any ArduPilot-compatible set of avionics will work", with Pixhawk 6C recommended for new builds. Print arms and body in a stiff filament (e.g. **PA6-GF**). Legs can be cheaper or more flexible (e.g. PETG-HF).
- No weight, flight-time or flight-evidence data was retrievable (page 403).

#### Other printed GPS / ArduPilot / INAV designs with some documentation
- **Toyozumi Drone v1** (5" props, Matek F405-TE). Posted 30 January 2024. STL on [Thingiverse 6453290](https://www.thingiverse.com/thing:6453290). The author calls it "a steady flying drone frame", with motor wires routed through the legs and the FC/ESC hidden in the body. No weight, flight time or logs — [ArduPilot Discourse](https://discuss.ardupilot.org/t/3d-printed-quadcopter-frame/112416)
- **"Fully printed Quadcopter/Drone Frame for 9" propellers"**: "designed to work with INAV and an omnibus F4 flight controller", though any modern FC works (snippet) — [Printables 387178](https://www.printables.com/model/387178-fully-printed-quadcopterdrone-frame-for-9-propelle); mirror on [MakerWorld 203678](https://makerworld.com/en/models/203678-fully-printed-quadcopter-drone-frame-for-9-propell)
- **750 mm printed hexacopter** (older ArduPilot forum build): Pixhawk 2.1, T-Motor 2814 710 kV, 40 A ESCs, 13×4.4 CF props, 4S 8000 mAh, retracts and a gimbal for a Hero4, about 3.5 kg all-up (snippet) — [ArduPilot Discourse](https://discuss.ardupilot.org/t/introducing-my-medium-size-3d-printed-frame-hexacopter/35316)
- **MiniAutoDrone (Duke University MEMS)**: 3" props, printed frame with integrated mounts, a RadioLink FC running ArduPilot, GPS, 1407 3500 kV motors, 30 A 4-in-1 ESC, FrSky XM+. Ground station: Mission Planner. Maximum flight time 6 min. STL/STEP files linked through Google Drive. Lessons recorded: calibration and correct motor configuration prevent failed takeoffs — [Duke project page](https://sites.duke.edu/memscapstone/3d-printed-mini-autonomous-drone/)
- **Instructables "Foldable 3D Printed Quadcopter"**: its parts list includes an ArduPilot-capable FC and a GPS with compass (snippet; page not fetchable) — [Instructables](https://www.instructables.com/Foldable-3D-Printed-Quadcopter/)
- Related ArduPilot forum threads that were found but not reviewed: [Big quad frame 3D print](https://discuss.ardupilot.org/t/big-quad-frame-3d-print/106996), [3d printed drone – Copter 4.3](https://discuss.ardupilot.org/t/3d-printed-drone/98213), [Making a drone using 3D Printer](https://discuss.ardupilot.org/t/making-a-drone-using-3d-printer/44559), [FPV race copter with self-made printed frame for Pixhawk Mini](https://discuss.ardupilot.org/t/fpv-race-copter-build-with-selfmade-frame/61381)

#### Folding ("DJI-style") printed frames. Found, but none with documented GPS builds
- "Foldable drone frame (Mavic look like)", with spring-snapping folding arms (snippet) — [Pinshape](https://pinshape.com/items/30652-3d-printed-foldable-drone-frame-mavic-look-like); also [MyMiniFactory](https://www.myminifactory.com/object/3d-print-foldable-drone-frame-26654)
- **18650 Micro Foldable FPV Drone** (FPV GEEK): fully printed folding frame, single 18650 cell, flight times "up to 18 minutes", Cetus X motors and an AIO FC. It is an FPV build with no GPS (snippet) — [MakerWorld](https://makerworld.com/en/models/1917900-18650-micro-foldable-fpv-drone), [Printables 1081158](https://www.printables.com/model/1081158-18650-micro-foldable-fpv-drone)
- LX10 V2, a 10-inch (405 mm) foldable frame (snippet) — [Cults3D](https://cults3d.com/en/3d-model/gadget/lx10-v2-10inch-405mm-foldable-drone-frame-stl)

#### Relevant non-printed reference build (useful for choosing a firmware)
- A 7" mapping drone (carbon Source One frame with printed mounts) **switched from INAV to ArduPilot 4.7.0 "for waypoint missions and distance-triggered camera control"**. It uses a Kakute H7 v1.5, Holybro M10 GPS on a mast, 2807 1300 kV motors, 7×4.5 props and 6S 5000 mAh. Lessons recorded: carbon blocks WiFi, 2.4 GHz links conflict, and compass calibration is hard. Survey software has been tested in simulation only so far — [Evan Briggs project page](https://evanbriggs358.github.io/)

### Inferences
- For a new pilot with a Bambu P2S and PETG, the Grasshopper5 is the strongest starting point. It is documented for ArduPilot and INAV, its designer accepts PETG as the minimum material, it specifies GPS and optical-flow placement, and it has an off-the-shelf electronics kit. Its main weaknesses are no published flight logs and a tilted rotor plane that adds a configuration step. The Teardrop Quad is the best-evidenced "autonomous from day one" printed design (real ArduPilot survey log), but its electronics are undocumented.
- PLA-Pro worked for the Teardrop Quad, but the Grasshopper5 designer warns PLA fails near hot motors and the VTX. PETG is the safer default for arms. TPU 85A/65D suits GPS-mast mounts, antenna holders, landing feet and vibration-isolating FC/camera mounts, but not arms. (No source tested TPU for these parts; this is a design inference.)
- The AX540 hexacopter's recommended PA6-GF is not in the user's filament list. Building it in PETG would depart from the designer's guidance, and stiffness and vibration effects are unverified.
- A printed folding "DJI-style" GPS camera drone is a gap in the ecosystem. Folding designs exist, but none found pairs GPS/ArduPilot with documented flight results.

### Gaps
- Printables and MakerWorld pages could not be fetched (403), so makes, comments, print settings and BOMs for the Sub-250, AX540 and 9" frames are unverified beyond snippets.
- No source gave verified all-up weight and flight time for the Grasshopper5, Teardrop, AX540 or Toyozumi.
- No independent review or flight log was found for the Grasshopper5; its own docs say flight-test data is upcoming.
- No well-documented PX4-specific printed multirotor was found. The PX4-oriented hardware found (Pixhawk 6C, recommended for the AX540) is generic.

## 2. Phone GCS apps as of October 2026: QGroundControl, Mission Planner Android, MAVPilot, SpeedyBee, INAV apps, Tower and newer apps. What actually works from a phone

### Takeaway
**QGroundControl (QGC) for Android is the only mature, actively maintained, full-featured phone ground station.** It works with ArduPilot and PX4, and partly with INAV through INAV's MAVLink support. Current version is v5.1.5, tagged 30 September 2026. It offers a virtual joystick, USB/Bluetooth gamepads (SDL), USB-OTG serial, BLE and Classic Bluetooth, tap-to-go, orbit, follow-me, mission planning, RTL and video. **There is no official iOS build**: the repository says iOS is supported from the same codebase, but downloads exist only for Windows, macOS, Linux and Android. Mission Planner for Android exists but is stale and buggy. The original Tower and Mobile Flight are dead, though a Tower fork was revived in August 2026. iOS users have a scattered set of options: SidePilot, MAVPilot, MicoAir's MicoPilot (TestFlight beta), CoreWing, and the new MSP-based Flight Guide for INAV. The SpeedyBee app configures Betaflight and INAV only, not ArduPilot.

### Cited Findings

#### QGroundControl (ArduPilot + PX4; partial INAV)
- Versions: v5.0.0 tagged 15 May 2025, v5.0.2 28 May 2025, v5.0.8 8 October 2025, v5.1.0 30 July 2026, v5.1.4 30 August 2026, **v5.1.5 30 September 2026**. A v5.2.0-dev tag exists and commits continue to 4 October 2026 (git) — [QGC tags](https://github.com/mavlink/qgroundcontrol/tags). v5.1 was announced as a release candidate on 30 July 2026 — [ArduPilot Discourse](https://discuss.ardupilot.org/t/qgroundcontrol-v5-1-release-candidate-1-is-available/144968)
- v5.0 moved to Qt 6.8.3 and CMake and enabled MAVLink 2 signing by default (search summary of a 2026 comparison article) — [CSDN/GitCode article](https://gitcode.csdn.net/6a0adc80662f9a54cb757271.html); RC thread: [ArduPilot Discourse](https://discuss.ardupilot.org/t/qgroundcontrol-v5-0-release-candidate/134339)
- Android: "Android 9 (API 28) or later (arm 32/64)", distributed as an APK download — [QGC download docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html)
- iOS: the README says "Cross-platform — Windows, macOS, Linux, Android, and iOS from a single codebase", but download badges cover only Windows, macOS, Linux AppImage and Android APK (README at v5.1.5, git) — [QGC repo](https://github.com/mavlink/qgroundcontrol). The repo contains `deploy/ios` assets (git), so iOS is build-it-yourself. A PX4 forum user (not a maintainer) said in February 2024 that "QGC can not be in AppStore because Apple's policy with Qt" — [PX4 forum](https://discuss.px4.io/t/qgc-ipad-support/37067). QGC was in the iOS App Store in 2016 (v3.0.1 era) — [ArduPilot Discourse](https://discuss.ardupilot.org/t/qgroundcontrol-now-available-in-ios-app-store/11771). **Conflict:** ArduPilot's GCS overview lists QGC for iOS — [ArduPilot: Choosing a GCS](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html)
- Virtual joystick (on-screen thumbsticks): enable it under Application Settings → General → "Virtual joystick". Docs: "Thumbstick control is not as responsive as using an RC Transmitter (because the information is sent over MAVLink). Another alternative is to use a USB Joystick/Gamepad" — [QGC virtual joystick docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html) (same text in the v5.1.5 repo docs, git)
- Gamepads: "Joystick and Gamepad support is enabled using the cross-platform SDL2 library". "All ArduPilot vehicles are supported. No parameter configuration is necessary". PX4 needs `COM_RC_IN_MODE`. Sony PS3/PS4 controllers are "highly recommended"; the DS4 works over USB and Bluetooth. Joystick commands go at 5 Hz when idle and 25 Hz by default when sticks move. "Normal" mode sends MAVLink `MANUAL_CONTROL`; Attitude, Position and Velocity modes send `SET_ATTITUDE_TARGET` or `SET_POSITION_TARGET_LOCAL_NED` — [QGC joystick docs (v5.1.5 source)](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/docs/en/qgc-user-guide/setup_view/joystick.md). Android joystick support dates from QGC 3.3 — [QGC 4.3 release notes](https://docs.qgroundcontrol.com/Stable_V4.3/en/qgc-user-guide/releases/release_notes.html)
- Phone links in the source tree: an Android USB-serial manager with an FTDI driver (`android/src/org/mavlink/qgroundcontrol/QGCUsbSerialManager.java`, `QGCFtdiSerialDriver.java`), plus both `BluetoothBleWorker` and `BluetoothClassicWorker` (git) — [QGC v5.1.5 Bluetooth source](https://github.com/mavlink/qgroundcontrol/tree/v5.1.5/src/Comms/Bluetooth)
- Fly View actions: Arm/Takeoff, Land, RTL, Pause, Change Altitude, **Go to Location** ("Once flying, you can click on the map to set a Go to or Orbit at location"), Orbit, Region of Interest, **Follow Me**, Start/Continue/Resume Mission, Record Video. "You cannot pause a Goto location operation" — [QGC Fly View docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/fly_view/fly_view.html)
- Follow Me is implemented per firmware. PX4 has a native "Follow Me" flight mode (AUTO_FOLLOW_TARGET). The ArduPilot plugin sends GCS motion reports and fails with "Follow failed: Home position not set" if there is no home position (v5.1.5 source, git) — [APMFirmwarePlugin.cc](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/src/FirmwarePlugin/APM/APMFirmwarePlugin.cc), [PX4FirmwarePlugin.cc](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/src/FirmwarePlugin/PX4/PX4FirmwarePlugin.cc)

#### Mission Planner for Android (ArduPilot)
- Listed on Google Play as `com.michaeloborne.MissionPlanner`. The search snippet reported its last update as 1 August 2024 — [Google Play](https://play.google.com/store/apps/details?id=com.michaeloborne.MissionPlanner&hl=en)
- The forum thread's latest page (posts through September 2023) reports a beta that "crashes when clicking on 'Connect' whilst port setting is on 'Auto'", Bluetooth problems after reinstall, and RTSP video not working (June 2023). USB SiK radio support was fixed in a January 2023 Play build. Maintainer replies became less frequent — [ArduPilot Discourse MP Android thread](https://discuss.ardupilot.org/t/mission-planner-android/62896?page=13)
- Native macOS/iOS support is "experimental and not recommended for inexperienced users" (snippet of README) — [MissionPlanner GitHub](https://github.com/ardupilot/MissionPlanner)
- Android "other devices" permission must be granted before serial/Bluetooth/USB connections appear (forum snippet) — [ArduPilot Discourse](https://discuss.ardupilot.org/t/mission-planner-on-android-connecting-to-pixhawk6c-via-bluetooth/121375)

#### Tower / DroidPlanner (legacy Android) and its 2026 revival
- The original upstream repo's last commit was 12 November 2017 (git) — [DroidPlanner/Tower](https://github.com/DroidPlanner/Tower). The app has long been gone from the Play Store and "no longer installs or runs on current Android" — [ArduPilot Discourse revival thread](https://discuss.ardupilot.org/t/tower-droidplanner-revived-builds-and-runs-on-modern-android-again/145338); [why it disappeared](https://discuss.ardupilot.org/t/why-tower-and-droidplanner-app-disappear-from-goole-play-store/36977)
- **Revived fork, announced 30 August 2026** by Ramón José Moreno and Alejandro Moreno at [github.com/nomar2/Tower](https://github.com/nomar2/Tower). It "builds and runs on Android 8–16". A debug APK is on GitHub Releases (not the Play Store), and the released APK has no Google Maps rendering without an API key. UDP, TCP and USB serial were tested. Bluetooth "has not been re-checked yet". It adds improved GUIDED follow-me (alpha/beta filtering, 5 Hz setpoints), a dronie button and mission upload/download — [ArduPilot Discourse](https://discuss.ardupilot.org/t/tower-droidplanner-revived-builds-and-runs-on-modern-android-again/145338). Tags V4.0.1 (30 August 2026) and V4.0.0.8 (3 October 2026) (git)
- ArduPilot's GCS overview still lists Tower and MAV Pilot as "Active". For Tower this is stale, which casts doubt on the table as a whole — [ArduPilot: Choosing a GCS](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html)

#### iOS options for ArduPilot/PX4
- **MAV Pilot 1.4** (iPhone/iPad, proprietary, "predominantly ArduPilot", Plane/Copter/Rover) and **SidePilot** (iPhone/iPad, proprietary) are listed by ArduPilot — [ArduPilot: Choosing a GCS](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html). SidePilot connects over WiFi, BLE or cellular (snippet) — [App Store](https://apps.apple.com/bb/app/sidepilot/id1138193193)
- **MicoPilot (MicoAir)**: "A brand new cross-platform ground station app ... natively supporting ArduPilot and PX4". Android APK beta at https://micoair.com/micopilot/Android/MicoPilot-latest-arm64.apk; iOS on TestFlight beta; Windows and macOS in testing. Features: real-time telemetry, mission planning, actuator test, port config, sensor calibration, full parameter tree, flight summaries — [MicoAir](https://micoair.com/?p=5823)
- **CoreWing** (Zhuhai Kuyi Technology): free iOS/iPad app for **INAV and ArduPilot**. It does parameter tuning, telemetry, waypoint mission planning, firmware flashing and log playback. It connects over BLE/WiFi to CoreWing FCs, and over USB serial, TCP or UDP to third-party FCs. Version 2.0.16. The summarizer gave the listing date as "July 3, 2024", which is doubtful given the high App Store ID — [App Store](https://apps.apple.com/sr/app/corewing/id6755523356)
- A third-party "Alta" build of QGC was noted in the App Store by a forum user in 2024 — [PX4 forum](https://discuss.px4.io/t/qgc-ipad-support/37067)

#### SpeedyBee app
- The iOS listing supports "Betaflight firmware version ≥ 3.1.0", "iNav FC version ≥ 1.8.1" and "Butterflight firmware version ≥ 3.1.0", over Bluetooth (any compatible module, or the SpeedyBee BT-UART adapter). Version 3.1.8, iOS 15+, rated 3.3/5 with reports of CLI character dropping and crashes. **ArduPilot is not listed** — [App Store](https://apps.apple.com/us/app/speedybee-app/id1150315028). Oscar Liang describes it as a configurator for Betaflight, EmuFlight and INAV (search summary) — [Oscar Liang FPV apps](https://oscarliang.com/fpv-app/)
- For ArduPilot on the SpeedyBee F405 Wing, the advice is to "connect to the 'SpeedyBee F405Wing' Wi-Fi and open QGroundControl. The app should automatically connect" — [Oscar Liang](https://oscarliang.com/speedybee-f405-wing-app/)
- On the SpeedyBee F405 V4 under ArduPilot, "SERIAL4 -> UART4 (connected to internal BT module, not currently usable by ArduPilot)". The F405 V5 has the same limitation on UART1 — [ArduPilot speedybeef4v4 README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/speedybeef4v4/README.md), [speedybeef4v5 README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/speedybeef4v5/README.md)

#### INAV from a phone
- **Mobile Flight** (iOS, Cleanflight/Betaflight/INAV over WiFi or BLE) — [GitHub](https://github.com/flyinghead/mobile-flight). Last tag v2.7.1 (17 November 2017), last commit 20 November 2017 (git). **Unmaintained.**
- **Flight Guide GCS (for INAV)**, announced 7 March 2026 by beymaxios. Windows, Android and iOS. Uses **MSP**, not MAVLink, with the FC UART set to MSP at 115200. USB on Windows/Android, an ESP32 bridge plus WebSocket on iOS, and LoRa modules such as MicoAir LR-900. Mission planning, telemetry and a simulation mode — [INAV discussion #11407](https://github.com/iNavFlight/inav/discussions/11407); repo [beymaxios/flight-guide](https://github.com/beymaxios/flight-guide). v2.0.0 tagged 9 April 2026 with the commit message "mission planner ready for field testing" (git), so very new and experimental.
- INAV's mission-file tools include mwp, ezgui, INAV Configurator and "Mission Planner for INAV" — [INAV wiki: iNavFlight Missions](https://github.com/iNavFlight/inav/wiki/iNavFlight-Missions)
- **INAV's MAVLink support (10.0.0-rc2 docs):** "selective but broad" and "still not a drop-in MAVLink autopilot stack like ArduPilot or PX4". It supports mission upload/download, guided/GCS-nav control via `MAV_CMD_DO_REPOSITION`, `RC_CHANNELS_OVERRIDE` for MAVLink serial-RX setups, arm/disarm via `MAV_CMD_COMPONENT_ARM_DISARM`, RTL and LAND. `MAV_CMD_NAV_TAKEOFF` "currently returns UNSUPPORTED". It "works with common MAVLink mission planners such as QGC for simple mission flows"; use MultiWii Planner or INAV Configurator for full mission semantics. MAVLink exists only on targets with more than 512 KB flash: "every STM32F722 and STM32F411 board" has no MAVLink at all — [INAV docs/Mavlink.md @10.0.0-rc2](https://github.com/iNavFlight/inav/blob/10.0.0-rc2/docs/Mavlink.md)
- INAV versions: 9.1.0 tagged 7 July 2026; 10.0.0-rc1 22 September 2026; 10.0.0-rc2 27 September 2026 (git) — [INAV releases](https://github.com/iNavFlight/inav/releases). The 10.0 notes list "RC override over MAVLink serial RX, MSP-over-MAVLink tunnel, mission upload/download, guided navigation control, native MLRS receiver integration" — [INAV releases](https://github.com/inavflight/inav/releases)
- In INAV 9.0.1, a live guided point from Mission Planner sets position only and does not yaw toward the target. A maintainer said in May–June 2026: "INAV understands *some* words in Ardupilot language (Mavlink) ... But it's still a foreign language". MSP-native GCSs were recommended, and it was noted that ExpressLRS lacks MSP support — [INAV discussion #11538](https://github.com/iNavFlight/inav/discussions/11538)

#### Other phone apps found
- **MAVLink HUD** (Android): "MAVLink ELRS Telemetry HUD & ArduPilot Ground Station", a glass cockpit over the ELRS TX Backpack, with 4G via an "EasyDrone4G" companion board (snippets; site returned 403) — [mavlinkhud.com](https://mavlinkhud.com/), [user guide](https://mavlinkhud.com/user-guide-system-details.html)
- **MiniGroundControl**: "A simple Android ground control station for ArduPilot powered UAVs" (snippet; status not checked) — [GitHub](https://github.com/chobitsfan/MiniGroundControl)
- **AndroPilot**: discontinued per ArduPilot — [ArduPilot: Choosing a GCS](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html)
- **Andruav** is an Android app for both the onboard phone and the GCS; see Q3 — [ArduPilot Cloud glossary](https://cloud.ardupilot.org/glossary.html)

#### What works from a phone, per capability (ArduPilot and PX4 through QGC Android)
- Virtual-joystick flight: yes, but less responsive than RC — [QGC docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html). A Bluetooth or USB gamepad is a better on-phone option — [QGC joystick docs](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/docs/en/qgc-user-guide/setup_view/joystick.md)
- Tap-to-fly (Go to Location), orbit, change altitude, RTL, land, takeoff, pause: yes — [QGC Fly View](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/fly_view/fly_view.html)
- Waypoint missions and surveys: Plan View on Android. The Teardrop Quad flew a grid mission, though its log does not say which GCS was used — [ArduPilot Discourse](https://discuss.ardupilot.org/t/free-stl-files-now-available-for-download-for-basic-quad-copter-all-3d-printed/131750)
- Follow-me: QGC supports it for PX4 (native mode) and ArduPilot (GCS motion reports). ArduPilot's own "Follow Me (GCS enabled)" page describes the GCS sending "fly to here" commands "every two seconds". It lists Mission Planner, APM Planner and DroidPlanner but not QGC, and warns that barometer drift and rising terrain matter — [ArduPilot Follow Me](https://ardupilot.org/copter/docs/ac2_followme.html). The revived Tower streams GUIDED follow-me setpoints at 5 Hz — [ArduPilot Discourse](https://discuss.ardupilot.org/t/tower-droidplanner-revived-builds-and-runs-on-modern-android-again/145338)
- INAV: missions and GCS-nav "fly to" points via MAVLink (10.0 RC) or MSP apps. No MAVLink takeoff command — [INAV Mavlink.md](https://github.com/iNavFlight/inav/blob/10.0.0-rc2/docs/Mavlink.md)

### Inferences
- **Android is strongly preferred for this project.** QGC Android is official, current (v5.1.5, September 2026) and supports USB-OTG serial, Bluetooth and UDP/TCP. An iPhone user has either to build QGC from source or to rely on smaller proprietary or beta apps (SidePilot, MAV Pilot, MicoPilot TestFlight, CoreWing), whose 2026 maintenance status is unclear.
- ArduPilot plus QGC gives the most complete phone feature set. INAV is improving fast (10.0 RC adds MAVLink missions, guided control and arming), but its maintainers still call MAVLink "a foreign language" for INAV, and 512 KB-flash INAV boards have no MAVLink at all. A beginner who wants tap-to-fly and missions from a phone faces fewer surprises on ArduPilot.
- The SpeedyBee app is useful only for configuring INAV or Betaflight, not as an ArduPilot GCS. The Bluetooth module on SpeedyBee F405 V4/V5 stacks cannot be used by ArduPilot.

### Gaps
- MAV Pilot and SidePilot: no 2025–2026 update dates or feature lists could be verified, because App Store searches hit the session search limit.
- The latest Mission Planner Android build in 2026, and whether it still runs on Android 15/16, is unverified (the Play listing snippet shows August 2024).
- No first-hand 2026 reviews compare QGC Android with other phone GCSs on usability.
- "Mission Planner for INAV" (Android) and EZ-GUI: current availability and maintenance status not found.

## 3. Phone-to-drone links (WiFi/ESP32, Bluetooth, SiK via USB-OTG, ExpressLRS MAVLink + Backpack, 4G/LTE): range, latency, cost, complexity, reliability

### Takeaway
There are five practical tiers:
1. **Bluetooth built into the FC** (MicoAir743 V2, Kakute H7 V2): zero extra cost, very short range, for setup and close-in use.
2. **ESP32 WiFi bridge (DroneBridge)**: about €7–22, roughly 150 m on standard WiFi direct to the phone. ESP-NOW reaches about 1 km but needs a second ESP32 on the ground.
3. **SiK 433/915 MHz radio into Android via USB-OTG**: about $59, more than 300 m out of the box and kilometres with better antennas.
4. **ExpressLRS MAVLink mode** (ELRS ≥ 3.5, now 4.1): RC and MAVLink on one link, forwarded to the phone over WiFi by the TX Backpack. The best all-round option for a phone-centred build that keeps a real RC transmitter.
5. **4G/LTE via a companion computer** or an Android phone on board: unlimited range in coverage, but needs a VPN and the most complexity.

### Cited Findings

#### Bluetooth (FC-integrated)
- MicoAir743 V2: "SERIAL8 -> UART8 (MAVLink2, connected to on board BlueTooth module)" — [ArduPilot MicoAir743v2 README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/MicoAir743v2/README.md)
- Kakute H7 V2: "SERIAL2 -> UART2 (Telem2, DMA-enabled) (connected to internal BT module)" — [ArduPilot KakuteH7v2 README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/KakuteH7v2/README.md). Holybro describes it as an "onboard Bluetooth chip - ESP32-C3", priced at $52 — [Holybro](https://holybro.com/products/kakute-h7-v2)
- SpeedyBee F405 V4/V5: the built-in BT is not usable by ArduPilot — [speedybeef4v4 README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/speedybeef4v4/README.md)
- DroneBridge positions Bluetooth LE "for short range configuration of your UAV" — [ArduPilot DroneBridge page](https://ardupilot.org/copter/docs/common-esp32-telemetry.html)
- QGC v5.1.5 contains both BLE and Classic Bluetooth link workers (git) — [QGC source](https://github.com/mavlink/qgroundcontrol/tree/v5.1.5/src/Comms/Bluetooth)

#### WiFi MAVLink bridges (ESP32 / ESP8266)
- DroneBridge for ESP32 is a "transparent and bi-directional serial to WiFi bridge", "one of the cheapest ways to communicate with ardupilot wirelessly". It carries MAVLink, MSP and LTM, with AES-GCM 256 encryption. Range: "150m+ range using standard WiFi depending on the access point"; "Up to 1km of range using ESP-NOW or Wi-Fi LR Mode" at about 250 kbit/s. It sends UDP to port 14550 for every connected device (QGC and Mission Planner auto-detect it) or TCP 5760. ArduPilot settings: `SERIAL2_PROTOCOL=2`, `SERIAL2_BAUD=115` — [ArduPilot DroneBridge page](https://ardupilot.org/copter/docs/common-esp32-telemetry.html)
- The PX4 docs give "WiFi-Modes: ~50m-200m, ESP-NOW Modes: 300m-1km+" with `SER_TEL1_BAUD` 115200 and `MAV_0_RATE` 24000, and warn that some ESP32 boards take 3.3 V while FCs may output 5 V — [PX4 ESP32 WiFi module](https://docs.px4.io/main/en/telemetry/esp32_wifi_module)
- Hardware: the official DroneBridge ESP32-C6 board (onboard antenna plus external connector, DS-009 Pixhawk connector standard) costs **€21.99 excl. VAT**, and an FPC antenna €1. The shop was closed until 11 October 2026. JapanDrones sells ground and air configurations — [DroneBridge shop](https://drone-bridge.com/shop/). A fork README describes a DIY version as about €7 and under 10 g (snippet) — [MavESP32](https://github.com/datour/MavESP32)
- Maintenance: DroneBridge ESP32 v2.4.0 (26 August 2026) and v2.4.1 (12 September 2026) (git) — [DroneBridge/ESP32](https://github.com/DroneBridge/ESP32). **mavesp8266** last changed on 8 April 2024, a README-only commit (git), so it is effectively unmaintained — [mavesp8266](https://github.com/dogmaphobic/mavesp8266)
- ArduPilot's Follow-mode docs recommend mesh-capable telemetry such as DroneBridge ESP32 — [ArduPilot Follow mode](https://ardupilot.org/copter/docs/follow-mode.html)
- FCs with integrated wireless:
  - **SpeedyBee F405 Wing** (ESP32; about $40 FC; INAV and ArduPilot; QGC auto-connects over its WiFi; no wireless firmware flashing) — [Oscar Liang](https://oscarliang.com/speedybee-f405-wing-app/)
  - **Matek F405-WTE** (the page summary says an integrated ESP8285 provides the ELRS 2.4 G receiver, WiFi MAVLink telemetry and WiFi configuration; INAV Configurator over UDP after flashing MSPWifiBridge firmware; ArduPilot target MatekF405-TE) — [Matek](https://www.mateksys.com/?portfolio=f405-wte)
  - Reflashing the SpeedyBee F405 V3/V4's internal ESP32 (UART4) with DroneBridge was discussed in October 2024, but no result was reported. Users warned the stock firmware may be encrypted and unrecoverable — [ArduPilot Discourse](https://discuss.ardupilot.org/t/flashing-speedybee-f405-internal-esp32-to-transceive-mavlink-telemetry/125401)

#### SiK 433/915 MHz radios via USB-OTG (Android)
- Holybro SiK Telemetry Radio V3, 100 mW (433 or 915 MHz): **$58.99**. "Better than 300m 'out of the box'", extendable to several km with a patch antenna. The ground unit uses micro-USB with a Type-C adapter cable included. The 500 mW versions are discontinued and a 1 W version is available — [Holybro](https://holybro.com/products/sik-telemetry-radio-v3)
- QGC Android includes a USB serial manager and FTDI driver (git) — [QGC android source](https://github.com/mavlink/qgroundcontrol/tree/v5.1.5/android/src/org/mavlink/qgroundcontrol). Mission Planner Android fixed USB SiK support in January 2023 — [ArduPilot Discourse](https://discuss.ardupilot.org/t/mission-planner-android/62896?page=13)
- A USB OTG cable is needed to force the phone into host mode; "a direct USB-C to USB-C cable will not work" (search summary attributed to MAVLink GPS documentation) — [mavlinkgps.com](https://mavlinkgps.com/)

#### ExpressLRS MAVLink mode and Backpack WiFi to the phone
- Requires ELRS **v3.5.0+** on TX and RX and TX Backpack **v1.5.0+** for WiFi forwarding. Supports ArduPilot (primary), PX4, INAV v8+ ("limited functionality") and Betaflight 2025.12.0-beta or later. ArduPilot setup: `SERIALx_PROTOCOL=2`, `SERIALx_BAUD=460`, `RSSI_TYPE=5`, all `SRx_` = 1. "Enabling MAVLink forces a telemetry ratio of 1:2" and Hybrid or 16ch/2 switch mode ("Wide switch mode is not supported") — [ExpressLRS MAVLink docs](https://www.expresslrs.org/software/mavlink/)
- Throughput: 2.4 GHz F1000 gives about 2375 B/s downlink; "333Hz Full" is recommended in the field. The LR1121 K1000 gives about 2375 B/s. 900 MHz tops out at 200 Hz (about 470 B/s) — [ExpressLRS MAVLink docs](https://www.expresslrs.org/software/mavlink/)
- Phone connection: join the "ExpressLRS TX Backpack XXXXXX" WiFi network (password `expresslrs`, IP 10.0.0.1), then MAVLink arrives on UDP 14550. It needs an ESP-based TX and RX, so STM32 ELRS hardware is incompatible. Internal TX modules must use the backpack WiFi rather than USB — [ExpressLRS MAVLink docs](https://www.expresslrs.org/software/mavlink/); overview: [UAVMODEL blog](https://blog.uavmodel.com/expresslrs-advanced-features-2026-wifi-flashing-mavlink-backpack-and-firmware-3-x-guide/)
- **AirPort** (the older transparent-serial mode) "completely replaces the RC link", so RC plus data needs "2x TXs and 2x RXs". Since ELRS 3.5 "it is no longer recommended to use Airport for MAVLink telemetry" — [ExpressLRS AirPort](https://www.expresslrs.org/software/airport/). The Sub-250 build above used exactly that two-link AirPort setup (snippet) — [Printables](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform)
- ELRS 4.0.1 was tagged 23 April 2026 and 4.1.0 on 14 July 2026, and the Backpack repo was still active in September 2026 (git) — [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS), [Backpack](https://github.com/ExpressLRS/Backpack)
- A comparable vendor option is the MicoAir TRS 2-in-1, a "single 2.4 GHz link with MAVLink telemetry" used in the Grasshopper5 reference build — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)

#### 4G/LTE
- **UAVcast-Pro** (commercial, listed as active) gives ArduPilot "long-range communication ... over cellular networks (4G/5G/LTE), satellite, or WiFi". It runs on Raspberry Pi Zero 2W/3/4/5, Orange/Banana/Rock Pi, Jetson, NUC and similar, with HD video, dual cameras, VPN with NAT traversal and multiple telemetry destinations. Other turnkey options on the same ArduPilot page: Horizon31 PixC4 (Jetson/CM4), Alfonce Remote Gateway, XBStation, and 4Gmetry (flagged as possibly deprecated) — [ArduPilot turnkey companion solutions](https://ardupilot.org/dev/docs/turnkey-companion-computer-solutions.html)
- UAVcast-Pro uses a **ZeroTier** VPN that gives the GCS and Pi static IPs. One user reported flying 48 miles from home with telemetry strength never below 78% while video was slow (older forum thread) — [ArduPilot Discourse](https://discuss.ardupilot.org/t/uavcast-pro-4g-lte-telemetry-and-video/36168)
- **Rpanion-server** (open source, by the ArduPilot developer Stephen Dade): MAVLink routing, video streaming, PPP and network management, NTRIP and log management. 1.0.0 announced with Jetson Orin and RasPiOS Trixie support — [ArduPilot Discourse](https://discuss.ardupilot.org/t/rpanion-server-1-0-0-released/145289). Tags v0.13.0 and v1.0.0 on 24 August 2026, with commits to 5 October 2026 (git) — [Rpanion-server](https://github.com/stephendade/Rpanion-server). A VPN is still needed for 4G (snippet of the forum thread) — [ArduPilot Discourse](https://discuss.ardupilot.org/t/raspberry-pi-5-4g-lte/122668?page=2)
- **Android phone on board:**
  - **Andruav** "runs on an Android phone mounted on the drone, so you need only a phone (not a Raspberry Pi)". It is part of the ArduPilot Cloud ecosystem with DroneEngage, has a browser GCS, an Andruav GCS mode and Mission Planner/QGC integration, and offers guided mode with joystick control, geofencing and "RC blocking" — [ArduPilot Cloud glossary](https://cloud.ardupilot.org/glossary.html)
  - **DroidDrone** uses two Android phones: one on the drone, connected by USB-OTG, and one at the pilot. They connect over a VPN, WiFi or a Java relay server. Supports INAV 7+, Betaflight 4.4.2+, ArduPilot 4.5.4+ and PX4 1.15+. **The pilot flies with a physical RC transmitter plugged into the control phone by USB.** Android 8 minimum, 11+ recommended, GPL-3.0 — [DroidDrone GitHub](https://github.com/DroidDrone/DroidDrone)
- Others: OpenHD-LTE for MAVLink plus HD video over 4G — [GitHub](https://github.com/KenLagoni/OpenHD-LTE); SokilLink Cloud, plug-and-play LTE control and video — [ArduPilot Discourse](https://discuss.ardupilot.org/t/sokillink-cloud-plug-and-play-drone-control-and-video-streaming-over-lte/107907); general 4G threads — [Controlling over 4G/LTE](https://discuss.ardupilot.org/t/controlling-over-4g-lte/64710)

### Inferences
- Comparison, from the figures above. All latency statements are qualitative, because no measured telemetry latencies were found.

| Link | Typical range (source figures) | Extra cost | Phone side | Complexity / reliability notes |
|---|---|---|---|---|
| FC Bluetooth | Short (DroneBridge calls BLE "short range configuration") | $0 if the FC has it | Android QGC (Classic + BLE); iOS apps over BLE | Simplest; use for setup and pre-flight, not flying |
| ESP32 WiFi (DroneBridge AP mode) | ~50–200 m; "150 m+" | €7–22 | Any phone, UDP 14550 | Easy; 2.4 GHz may clash with 2.4 GHz RC/ELRS; ESP-NOW (~1 km) needs a ground ESP32 |
| SiK 433/915 MHz | >300 m stock, several km with patch antenna | ~$59 | Android only via USB-OTG | Mature and robust; not usable with iPhones in practice |
| ELRS MAVLink + Backpack WiFi | The RC link's range (not quantified in sources) | Built into an ESP-based ELRS radio + RX | Phone joins the Backpack WiFi near the pilot | Best single-link design: RC in hand, telemetry and commands to phone; low bandwidth (~2.4 kB/s at 2.4 GHz F1000) |
| 4G/LTE (UAVcast-Pro, Rpanion, Andruav, DroidDrone) | Cellular coverage (48 miles reported) | Pi/modem or a spare phone + data plan (+ licence for UAVcast-Pro) | Any phone with internet + VPN (ZeroTier etc.) | Highest complexity; variable latency; needs a robust failsafe |

- When the phone link is 2.4 GHz WiFi, using 868/915 MHz ELRS for RC (as the Sub-250 build did) avoids the 2.4 GHz conflicts that the mapping-drone builder reported.
- ESP-NOW and WiFi-LR modes are ESP32-to-ESP32 protocols, so a phone cannot use them directly. A ground ESP32 must re-broadcast normal WiFi or go over USB, which is why JapanDrones offers ground and air sets (inference from the DroneBridge shop page).
- iPhones generally cannot use USB serial SiK radios. iOS phone links in practice are WiFi (DroneBridge, ELRS Backpack) or BLE. This is an inference: Mobile Flight and CoreWing advertise WiFi/BLE, and no iOS app documents USB-serial SiK use.

### Gaps
- No measured end-to-end MAVLink latency figures were found for Bluetooth, ESP32 WiFi, SiK, ELRS MAVLink or LTE.
- ELRS MAVLink range was not quantified in the sources. In principle it equals ELRS RC range at the chosen packet rate, but this is unverified.
- Commercial ESP32 WiFi telemetry modules from Holybro, Matek or SpeedyBee as standalone products: none found besides FC-integrated chips and DroneBridge's own board.
- BlueOS and Tailscale for 4G drones: no sources gathered (session search budget exhausted).
- UAVcast-Pro pricing and cellular data costs were not found.

## 4. Can you fly purely from the phone with no RC transmitter? Parameters, failsafes, safety implications and expert recommendations

### Takeaway
**Yes, technically, on ArduPilot and PX4 (and partly INAV 10), but experts advise against it as the only control link.** ArduPilot documents a "GCS-only" setup. It needs RC failsafe off, the RC arming check skipped, RC protocols disabled, dummy RC calibration values, and a TAKEOFF or MISSION START sent within seconds of arming to avoid auto-disarm. PX4 accepts joystick-only input through `COM_RC_IN_MODE`. QGC's own docs say its thumbsticks are less responsive than an RC transmitter, and ArduPilot's joystick page says to "keep a regular transmitter/receiver connected and ready for use as a backup". The recommended pattern is: fly autonomously or in guided mode from the phone, keep a cheap ESP-based ELRS transmitter in hand as the manual override, and configure GCS-loss and RC-loss failsafes to RTL, SmartRTL or Land.

### Cited Findings

#### ArduPilot (Copter)
- GCS-only operation is possible "with or without joystick input" — [ArduPilot: Operation Using Only a GCS](https://ardupilot.org/copter/docs/common-gcs-only-operation.html)
- Required changes for Copter:
  - `FS_THR_ENABLE = 0` if no joystick is used, or if you do not want a failsafe when the joystick is lost.
  - `ARMING_SKIPCHK` should include bit 6 (RC check). "It is not recommended to turn on other bits since important system checks may be bypassed."
  - `RC_PROTOCOLS = 0` "to prevent accidental detection of noise as an RC source".
  - RC1–4 `MIN/MAX` changed from 1100/1900 to about 1101/1901, because "Copter checks to see that the RC calibration has been done".
  - "Copter will auto-disarm after a few seconds if the throttle is not raised above idle", so "a MISSION START command must be issued in AUTO mode ... or a TAKEOFF command be issued from the GCS ... within a few seconds of arming".
  
  Source: [ArduPilot GCS-only](https://ardupilot.org/copter/docs/common-gcs-only-operation.html)
- With joystick RC overrides, "almost the same control capabilities are available as with a radio control transmitter/receiver". A "high quality joystick or use of an RC transmitter as a joystick" is recommended. `RC_OPTIONS` bit 1 ignores RC overrides, and RC auxiliary function 46 (RC Override Enable) lets a switch enable or disable overrides (snippet of the same page) — [ArduPilot GCS-only](https://ardupilot.org/copter/docs/common-gcs-only-operation.html)
- Joystick/override parameters:
  - `MAV_GCS_SYSID` "should match the GCS's mavlink system ID. By default Mission Planner and QGC use 255".
  - `RC_OVERRIDE_TIME`: "Timeout in seconds after which RC overrides will no longer be used ... Default is 3 seconds. 0 will disable RC overrides, -1 will never timeout."
  - If the joystick stops and there is no transmitter, the vehicle enters failsafe (typically LAND or RTL).
  - "Even if flying with a joystick, you should keep a regular transmitter/receiver connected and ready for use as a backup."
  
  Source: [ArduPilot Joystick](https://ardupilot.org/copter/docs/common-joystick.html)
- GCS failsafe:
  - `FS_GCS_ENABLE`: 0 disabled; 1 RTL (Land if no GPS); 3 SmartRTL→RTL; 4 SmartRTL→Land; 5 Land; 6 DO_LAND_START→RTL; 7 Brake→Land.
  - It triggers when no heartbeat arrives for `FS_GCS_TIMEOUT` seconds (default **5 s**): GCS closed, out of range, or radio unpowered.
  - `FS_OPTIONS` bit 1 continues an auto mission during GCS failsafe; bit 3 continues landing; bit 4 continues in pilot control.
  - Warning: "If the failsafe clears (i.e. GCS reconnects), the copter will remain in its failsafe mode".
  
  Source: [ArduPilot GCS failsafe](https://ardupilot.org/copter/docs/gcs-failsafe.html)
- In QGC, ArduPilot needs no parameter changes for joysticks — [QGC joystick docs (v5.1.5)](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/docs/en/qgc-user-guide/setup_view/joystick.md). QGC's vehicle code sends both `MANUAL_CONTROL` and `RC_CHANNELS_OVERRIDE` messages (v5.1.5 source, git) — [Vehicle.cc](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/src/Vehicle/Vehicle.cc)

#### PX4
- QGC "converts joystick inputs to MAVLink MANUAL_CONTROL messages". "A joystick-based controller system requires a reliable high bandwidth telemetry channel to ensure that the vehicle is responsive to joystick movements." The default `COM_RC_IN_MODE` ("RC or MAVLink keep first") works if only a joystick is connected, and "Radio Setup is not required if using only a joystick" — [PX4 Joystick](https://docs.px4.io/main/en/config/joystick). Older docs and the QGC docs use `COM_RC_IN_MODE = 1` (Joystick only) — [PX4 v1.14 joystick](https://docs.px4.io/v1.14/en/config/joystick), [QGC joystick docs](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/docs/en/qgc-user-guide/setup_view/joystick.md)
- Manual-control-loss failsafe: `COM_RC_LOSS_T` (timeout since the last setpoint from the selected manual control source); `NAV_RCL_ACT` (Disabled/Loiter/Return/Land/Disarm/Terminate/Hold); `COM_RCL_EXCEPT` (modes in which loss is ignored, e.g. mission or offboard); `COM_FAIL_ACT_T` (delay before acting). Data-link-loss failsafe: `COM_DL_LOSS_T`, `NAV_DLL_ACT`, `COM_DLL_EXCEPT` — [PX4 Safety](https://docs.px4.io/main/en/config/safety.html)
- PX4 v1.17.0 tagged 24 April 2026 (git) — [PX4-Autopilot](https://github.com/PX4/PX4-Autopilot)

#### INAV
- INAV 10.0-rc2 accepts arming through `MAV_CMD_COMPONENT_ARM_DISARM` "through the normal INAV arming checks". It accepts `RC_CHANNELS_OVERRIDE` when `receiver_type = SERIAL` and `serialrx_provider = MAVLINK`, but `MAV_CMD_NAV_TAKEOFF` is unsupported — [INAV Mavlink.md @10.0.0-rc2](https://github.com/iNavFlight/inav/blob/10.0.0-rc2/docs/Mavlink.md)
- RTH sent over MAVLink adds a temporary RTH mode source, and "a later pilot RC flight-mode change or disarm clears" it, which assumes an RC pilot exists — [INAV Mavlink.md](https://github.com/iNavFlight/inav/blob/10.0.0-rc2/docs/Mavlink.md)

#### Experience and expert guidance
- QGC: "Thumbstick control is not as responsive as using an RC Transmitter" — [QGC docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html)
- ArduPilot: keep a regular transmitter as backup — [ArduPilot Joystick](https://ardupilot.org/copter/docs/common-joystick.html)
- DroidDrone, even when flying over 4G with two phones, uses a physical RC transmitter plugged into the phone, and stresses that GPS and RTH must work before flight — [DroidDrone](https://github.com/DroidDrone/DroidDrone)
- Andruav lists "RC blocking" and "TX freeze" as safety features, so it is designed with RC coexistence in mind — [ArduPilot Cloud glossary](https://cloud.ardupilot.org/glossary.html)
- Cheap backup transmitter: RadioMaster Pocket (ELRS) is **$71.50** — [RadioMaster](https://www.radiomasterrc.com/products/pocket-radio-controller-m2). ELRS MAVLink mode keeps RC on the transmitter while forwarding MAVLink to the phone over Backpack WiFi — [ExpressLRS MAVLink](https://www.expresslrs.org/software/mavlink/)

### Inferences
- Phone-only virtual-stick flight makes the WiFi/Bluetooth link a single point of failure. DroneBridge WiFi is roughly 50–200 m, and phones may drop or roam WiFi. If the link drops, control depends on `FS_GCS_ENABLE` (RTL/SmartRTL/Land after 5 s by default) and on `RC_OVERRIDE_TIME` (3 s default). The copter then stays in the failsafe mode after reconnection, so the pilot must deliberately retake control.
- Suggested beginner configuration for ArduPilot with an Android QGC phone, synthesised from the docs above:
  1. Keep an ELRS transmitter (for example a RadioMaster Pocket) and receiver in the loop, with RC failsafe enabled (`FS_THR_ENABLE` set to RTL or Land, not 0).
  2. Use the phone for arming, takeoff, Go-To, missions and follow-me in Guided/Auto modes.
  3. Set `FS_GCS_ENABLE` to 1 (RTL) or 3/4 (SmartRTL), and keep `FS_OPTIONS` bit 1 off unless a mission should continue without the GCS.
  4. Leave `ARMING_SKIPCHK` at defaults (all checks on).
  5. Map a transmitter switch to aux function 46 (RC Override Enable) so overrides can be cut instantly.
- On PX4, a joystick-only setup combines manual-control-loss and data-link-loss on the same link, so both failsafes may fire together. Setting both to Return or Land, and using `COM_RCL_EXCEPT` only for missions, is the conservative choice. This is an inference from the PX4 parameter descriptions.
- Older ArduPilot versions name these parameters differently: `SYSID_MYGCS` instead of `MAV_GCS_SYSID`, and `ARMING_CHECK` instead of `ARMING_SKIPCHK`. Users should follow the docs for the firmware they actually flash. This is unverified: only the current doc pages were read.

### Gaps
- No first-hand 2025–2026 forum reports were collected on flying ArduPilot only with QGC Android thumbsticks (the search budget ran out). Expert opinion here rests on the official docs.
- No measured virtual-joystick latency or stick update rate over WiFi or Bluetooth on Android was found. QGC sends joystick data at 25 Hz by default while sticks move, but that is a send rate, not measured latency.
- Whether ArduPilot treats QGC Android `MANUAL_CONTROL` from virtual thumbsticks exactly like gamepad overrides, for example in failsafe timing, was not confirmed in documentation.

## 5. Sensors and hardware per capability tier; good 2026 flight controllers for ArduPilot/INAV beginners

### Takeaway
- **Position-hold, RTH and missions outdoors** need GNSS plus compass: a u-blox M10 module such as the Holybro M10 at $43.99. They also need a barometer, which most current FCs have on board.
- **Indoor or no-GPS hold** needs optical flow plus a rangefinder: MicoAir MTF-01 at $32.99, MTF-01P at $41.99, or Matek 3901-L0X at $35.99.
- **Remote ID**, where required, can be added with an ESP32-C3 ArduRemoteID module (Holybro, roughly $20–39).
- **Beginner FCs:** the H743 boards, **MicoAir743 V2** (ArduPilot pre-installed, Bluetooth MAVLink, about $73) and **Holybro Kakute H7 V2** (ESP32-C3 Bluetooth, $52), are the sweet spot for a phone-GCS ArduPilot build. **Pixhawk 6C Mini** (about $199–234) is the robust "proper autopilot" choice. **SpeedyBee F405 V4** ($65.99 stack) is cheap and good for INAV, but under ArduPilot its Bluetooth is unusable and the 1 MB flash is limiting.

### Cited Findings

#### Capability tiers (ArduPilot unless stated)
- Tap-to-fly, Go-To, Orbit and Follow-Me need a GPS fix and home position. QGC's ArduPilot follow-me fails with "Follow failed: Home position not set" — [QGC APMFirmwarePlugin.cc](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/src/FirmwarePlugin/APM/APMFirmwarePlugin.cc). Follow-me altitude uses the barometer, which "can drift over time" — [ArduPilot Follow Me](https://ardupilot.org/copter/docs/ac2_followme.html)
- GCS failsafe action 1 is RTL, falling back to "Land if GPS unusable" — [ArduPilot GCS failsafe](https://ardupilot.org/copter/docs/gcs-failsafe.html)
- The Grasshopper5 reference build pairs M10 GNSS/compass with an MTF-01P flow and rangefinder to cover "position hold when GNSS is weak" and precise low-altitude height hold — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- INAV 9.1 improved multicopter position hold "when GPS signal is poor or fluctuating" and allows magless multicopters to be pointed North before takeoff (release-notes summary) — [INAV releases](https://github.com/inavflight/inav/releases)

#### GNSS/compass
- **Holybro M10 GPS**: $43.99; u-blox M10, "Up to 4 GNSS"; IST8310 or IST8308 compass; 32 g; JST-GH 10/6-pin or Molex. Requires PX4 1.14, ArduPilot 4.3, INAV 5.0 or Betaflight 4.3 or newer. An M10 V2 is now available — [Holybro](https://holybro.com/products/m10-gps)

#### Optical flow and rangefinder
- **MicoAir MTF-01** (8 m) $32.99 and **MTF-01P** (12 m) $41.99 at Pyrodrone. Firmware auto-detects ArduPilot (MAVLink), PX4 (MAVLink) and INAV (MSP), with no reflashing needed to switch stacks — [Pyrodrone MTF-01](https://pyrodrone.com/collections/micro-drones-accessories/products/micoair-mtf-01-optical-flow-8m-range-2in1-sensor), [Pyrodrone MTF-01P](https://pyrodrone.com/collections/micoair-products/products/micoair-mtf-01p-optical-flow-12m-range-2in1-sensor). MTF-01 is listed at $22.90 elsewhere — [Rotorama](https://rotorama.com/product/micoair-mtf-01-optical-flow-a-range-sensor)
- **Matek 3901-L0X**: $35.99; PMW3901 flow + VL53L0X lidar; range 8 cm to 200 cm; minimum illumination over 60 lux; UART MSP protocol; 2 g; for INAV and ArduPilot — [RaceDayQuads](https://www.racedayquads.com/products/matek-3901-l0x-optical-flow-lidar-sensor)
- **MAVLink GPS** (Android app) injects a phone's location into the FC over USB, marketed as "Indoor Drone Positioning for ArduPilot" (snippet; not evaluated) — [Google Play](https://play.google.com/store/apps/details?id=com.mavlink.gps&hl=en_US), [mavlinkgps.com](https://mavlinkgps.com/)

#### Barometers on current FCs (from ArduPilot board READMEs)
- SpeedyBee F405 V4: DPS310. F405 V5: SPA06-003, 1024 KB flash. MicoAir743 V2: SPL06. Kakute H7 V2: BMP280, 1 Gbit onboard flash — [ArduPilot hwdef READMEs](https://github.com/ArduPilot/ardupilot/tree/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef). Matek F405-WTE: SPL06-001 — [Matek](https://www.mateksys.com/?portfolio=f405-wte)

#### Remote ID
- **Holybro Remote ID**: an ESP32-C3 running ArduRemoteID, broadcasting over WiFi and Bluetooth. Connects by DroneCAN or serial MAVLink, with an "FCC & CE approved radio module". Price is around $20–39 depending on retailer. "Intended primarily for drone manufacturers and system integrators", and the integrator is responsible for the FAA Declaration of Compliance — [Holybro](https://holybro.com/collections/telemetry-radios/products/remote-id), [openelab](https://openelab.io/a/s/products/holybro-remote-id-module), [Holybro docs](https://docs.holybro.com/radio/remote-id/overview-and-spec), [2025–26 RID market research](https://hub.allspice.io/AllSpiceMirrors/incutec-OpenRemoteID/src/branch/main/research/RemoteID_Modules_Research.md)

#### Flight controllers (2026)
- **MicoAir743 V2**: STM32H743, BMI088 + BMI270, integrated Bluetooth telemetry, 8 UARTs, 11 PWM, dual BEC. "Pre-loaded with ArduPilot" and officially supported from ArduPilot 4.6. **$72.99** at Pyrodrone — [Pyrodrone](https://pyrodrone.com/collections/micoair-products/products/micoair-h743-v2-2-6s-flight-controller-with-bluetooth-and-pre-loaded-with-ardupilot-30-30mm). UK listings: MicoAir743 V2 stack from £40 and AIO (FC + 45 A ESC) £61.95 (snippets) — [Unmanned Tech](https://www.unmannedtechshop.co.uk/fr/products/micoair743-v2-stack-the-yes-it-actually-runs-ardupilot-30x30-fc-55a-am32-esc), [Unmanned Tech AIO](https://www.unmannedtechshop.co.uk/de/products/micoair743v2-aio-h743-flight-controller-45a-blheli_s-esc-3-6s). ArduPilot board definitions exist for MicoAir743, 743v2, 743-AIO, 743-Lite, 405v2 and 405Mini (git) — [hwdef directory](https://github.com/ArduPilot/ardupilot/tree/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef)
- **Holybro Kakute H7 V2**: **$52**; onboard ESP32-C3 Bluetooth, which works with the SpeedyBee app on Betaflight/INAV; BMP280 — [Holybro](https://holybro.com/products/kakute-h7-v2). Under ArduPilot, BT is on SERIAL2 (Telem2) — [KakuteH7v2 README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/KakuteH7v2/README.md)
- **Holybro Pixhawk 6C Mini**: €198.95 at openelab, £149.90–193.90 at Flyingtech, and "from $233.65" elsewhere — [openelab](https://openelab.io/a/s/products/holybro-pixhawk-6c-mini-flight), [Flyingtech](https://www.flyingtech.co.uk/product/holybro-pixhawk-6c-mini-autopilot-px4-flight-controller/). Recommended for the AX540 hexacopter — [MakerWorld snippet](https://makerworld.com/models/1034757)
- **SpeedyBee F405 V4 55A stack**: **$65.99**. Officially "BetaFlight(Default), INAV"; BLE Bluetooth "used for Flight Controller configuration" on UART4 — [SpeedyBee](https://www.speedybee.com/speedybee-f405-v4-bls-55a-30x30-fc-esc-stack/). An ArduPilot target exists (`speedybeef4v4`), but its BT UART is "not currently usable by ArduPilot" — [README](https://github.com/ArduPilot/ardupilot/blob/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef/speedybeef4v4/README.md)
- **SpeedyBee F405 Wing**: "just under $40". INAV ships pre-loaded, ArduPilot is flashed by USB, and it has ESP32 WiFi/BT — [Oscar Liang](https://oscarliang.com/speedybee-f405-wing-app/). Board definition `SpeedyBeeF405WING` (git) — [hwdef directory](https://github.com/ArduPilot/ardupilot/tree/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef)
- **Matek**: ArduPilot board definitions for MatekH743, MatekF405-TE, Wing and others (git) — [hwdef directory](https://github.com/ArduPilot/ardupilot/tree/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef)
- Firmware currency: ArduPilot Copter 4.7.0 tagged 21 July 2026 and **Copter-4.7.1** on 2 September 2026. INAV 9.1.0 (7 July 2026) is the latest stable, with 10.0.0-rc2 (27 September 2026). PX4 v1.17.0 tagged 24 April 2026 (all git) — [ArduPilot](https://github.com/ArduPilot/ardupilot), [INAV](https://github.com/iNavFlight/inav), [PX4](https://github.com/PX4/PX4-Autopilot)
- INAV MAVLink, and therefore QGC/phone MAVLink use, is absent on 512 KB targets (F722/F411) — [INAV Mavlink.md](https://github.com/iNavFlight/inav/blob/10.0.0-rc2/docs/Mavlink.md)

### Inferences

**Capability and sensor tiers for a phone-GCS printed quad:**

| Tier | What the phone can do | Required sensors and hardware |
|---|---|---|
| T0 | Configure and monitor | FC with IMU; Bluetooth or WiFi link |
| T1 | Altitude hold, phone telemetry | Add barometer (on board) |
| T2 | Position hold, RTH, Go-To/tap-to-fly, orbit, follow-me, waypoint missions and surveys | Add GNSS + compass (M10), GPS mast or isolated mount; reliable GCS link for guided/follow-me |
| T3 | Indoor or low-altitude no-GPS hold and precise landing height | Add optical flow + rangefinder (MTF-01/01P or 3901-L0X); needs light and texture (3901-L0X: over 60 lux, 2 m range) |
| T4 | Beyond-WiFi ranges | Add SiK/ELRS MAVLink or LTE companion |
| Remote ID | As local rules demand | RID module |

- For a beginner who wants ArduPilot and a phone, an H743 board with on-board Bluetooth (MicoAir743 V2 or Kakute H7 V2) avoids extra wiring for phone setup and gives headroom (H7, more flash). F405 boards remain fine for INAV. Under ArduPilot they cost features (1 MB flash), and SpeedyBee's BT cannot be used. ArduPilot's limited-firmware documentation page could not be retrieved (404), so the exact excluded-feature list is unverified.

### Gaps
- ArduPilot's list of features excluded on 1 MB-flash boards could not be retrieved (URL 404).
- No 2026 prices were found for the Matek H743 series, MicoAir743-Lite, or u-blox M9N modules.
- Remote ID legal requirements were left to the regulations researcher. Only hardware and prices are captured here.

## 6. Digital video to a phone (OpenHD/QOpenHD, RubyFPV, WFB-ng/OpenIPC with PixelPilot, WiFi cameras, Raspberry Pi streaming)

### Takeaway
In 2026 the practical phone-video path is **OpenIPC**. One option is **PixelPilot** on Android plus an RTL8812AU or RTL8812EU USB WiFi adapter on OTG, using wfb-ng. In one blog test, an OpenIPC SSC338Q + RTL8812EU link measured 42–58 ms at 1080p60 and flew 3.2 km line of sight; that test did not specify its ground receiver, and no phone-specific measurement was found. Cost is about $55–70 in air-unit parts, or $70–108 for a RunCam WiFiLink kit. The other is OpenIPC **APFPV** mode, where the phone simply joins the camera's WiFi: 35–70 ms and roughly 50–500 m. OpenHD has had no tagged release since mid-2024. RubyFPV is active but built around a Linux SBC ground station, not a phone app. QGC can show RTSP/UDP video from a Raspberry Pi companion (WFB-ng or Rpanion-server).

### Cited Findings
- **PixelPilot** is "an Android app packaging multiple pieces together to decode an H264/H265 video feed broadcast by wfb-ng over the air". It runs on arm64-v8a and armeabi-v7a (including Quest 2/3) and needs USB-OTG with RTL8812AU or RTL8812EU adapters. It records DVR to `Movies/` and has optional MediaPipe object detection. "performance will heavily depend on your device's processing power" — [PixelPilot GitHub](https://github.com/OpenIPC/PixelPilot). v0.24.0 was tagged 11 August 2026 and **v0.25.0 on 2 September 2026** (git).
- Community guide: RTL8812AU "recommended", or RTL8812EU2 "with a powered USB hub". In APFPV "the phone simply joins the drone's Wi-Fi network", so no adapter is needed. OSD telemetry comes over MSP from the FC, and DVR uses about 1 GB per 10 min. "the cheapest way to start flying" needs "a phone and a ~$10–15 Wi-Fi adapter" — [openfpv.com.ua PixelPilot](https://openfpv.com.ua/en/software/pixelpilot)
- **APFPV** (OpenIPC "Access Point FPV"): "your VTX simply acts like a WiFi router that you connect to directly". SSID "OpenIPC" at 192.168.0.1. Viewable in PixelPilot (Android) or a web browser, with no native iOS app mentioned. Latency "35–70ms delay", unsuitable for racing. Range 50–200 m basic, 200–500 m with good adapters, 1 km+ with professional gear. "Only one WiFi device as a receiver is possible" and there is no signal aggregation. VTX chips: RTL8812AU, RTL8812EU, RTL8733BU — [OpenIPC APFPV docs](https://docs.openipc.org/use-cases/fpv/apfpv/apfpv/)
- **Measured latency** (blog bench test dated 22 September 2026, LED timer and 240 fps camera; the ground side used for OpenIPC was not specified in the summary):
  - OpenIPC SSC338Q + RTL8812EU: 1080p60 at "42 to 58 milliseconds average"; tuned 720p60 at "31 to 41"
  - Walksnail: 22–32 ms
  - DJI O3: 28–38 ms
  - Analog: 14–22 ms
  - 3.2 km line of sight at 500 mW with cloverleaf and patch antennas at 720p
  - Air unit $55–70 (camera board $18–26, WiFi card $14–22). A Raspberry Pi ground station adds $90–130.
  
  Source: [idostudio test](https://idostudio.ai/insight/2026-09-22-testing-openipc-against-walksnail-and-dji-on-the-flight-bench)
- **RunCam WiFiLink (OpenIPC)**: $69.99. WiFiLink-G and WiFiLink 2-G are $107.99, and the G kits include an 8812AU USB dongle and USB-OTG adapter for Android, PC or SBC ground stations. IMX415, up to 1080p90 or 720p120. Configured with PixelPilot or fpv4win; supports MAVLink OSD — [RaceDayQuads WiFiLink](https://www.racedayquads.com/products/runcam-wifilink-w-openipc), [WiFiLink-G](https://www.racedayquads.com/products/runcam-wifilink-g-w-openipc), [WiFiLink 2-G](https://www.racedayquads.com/products/runcam-wifilink-2-g-w-openipc), [Oscar Liang news](https://oscarliang.com/runcam-wifilink-openipc), [OpenIPC WiFiLink 2 docs](https://docs.openipc.org/hardware/runcam/vtx/runcam-wifilink-v2/)
- **WFB-ng**: "uses low-level WiFi packets to avoid distance and latency limitations of the ordinary IEEE 802.11 stack". The PX4 reference is a Raspberry Pi with a Pi camera or C920 and an RTL8812au card, viewed in QGC — [PX4 WFB-ng guide](https://docs.px4.io/main/en/companion_computer/video_streaming_wfb_ng_wifi). The repo is active, with its last commit on 2 October 2026 (git) — [wfb-ng](https://github.com/svpcom/wfb-ng)
- **OpenHD/QOpenHD**: last tagged releases are OpenHD v2.6.0 (22 May 2024) and QOpenHD v2.6.0 (17 June 2024). Commits continue sporadically: OpenHD February 2026, QOpenHD July 2026 (git) — [OpenHD](https://github.com/OpenHD/OpenHD), [QOpenHD](https://github.com/OpenHD/QOpenHD). QOpenHD has had Android builds (snippet: "Android releases are available on the Play Store") — [OpenHD latest release page](https://github.com/OpenHD/OpenHD/releases/latest)
- **RubyFPV**: release 11.8 tagged 19 February 2026, 11.7 on 22 December 2025 (git) — [RubyFPV](https://github.com/RubyFPV/RubyFPV). It supports Radxa hardware (snippet) and is quoted at up to about 40 ms latency (snippet, source page uncertain) — [RubyFPV GitHub](https://github.com/RubyFPV/RubyFPV), [IntoFPV thread](https://intofpv.com/t-rubyfpv-rubyhd-video-transmission)
- **Raspberry Pi streaming**: Rpanion-server includes a "low latency video streaming server" plus MAVLink routing — [ArduPilot Discourse Rpanion 0.7](https://discuss.ardupilot.org/t/rpanion-server-0-7-released/64244). UAVcast-Pro streams HD video over LTE — [ArduPilot turnkey solutions](https://ardupilot.org/dev/docs/turnkey-companion-computer-solutions.html). Mission Planner Android's RTSP video did not work as of June 2023 — [ArduPilot Discourse](https://discuss.ardupilot.org/t/mission-planner-android/62896?page=13). DroidDrone streams the onboard phone's camera or a USB UVC camera over 4G — [DroidDrone](https://github.com/DroidDrone/DroidDrone)

### Inferences
- **Recommended for an Android-phone GCS user:** a RunCam WiFiLink-G kit ($107.99, adapter and OTG included) or a DIY SSC338Q + RTL8812EU air unit, viewed in PixelPilot. This is the cheapest HD option with a real-world record. Caveats:
  - The phone's single USB port is then taken by the WiFi adapter, so a USB SiK telemetry radio cannot be used at the same time. Pair video with WiFi or Bluetooth telemetry, or with ELRS MAVLink through the Backpack, which also uses phone WiFi. This is a conflict to test.
  - PixelPilot is a video app, not a GCS. Running PixelPilot and QGC at once means switching apps or using split-screen, and OSD telemetry in PixelPilot comes from MSP/MAVLink OSD.
- APFPV is the simplest path (no adapter, works with any phone browser) and fits short-range camera drones and survey-type flights. Its 35–70 ms and single-receiver limits are acceptable for GPS-assisted flying but not for acro.
- OpenHD should be treated as stagnant for new builds in 2026, with no release in more than two years.

### Gaps
- No measurement was found of PixelPilot latency on a specific mid-range phone versus a Raspberry Pi ground station. The openfpv guide gives no figure. The 50–70 ms phone figure seen in a search summary could not be pinned to a source.
- No evidence was found on whether QGC Android can receive the OpenIPC/APFPV RTP stream directly instead of using PixelPilot.
- A RubyFPV phone viewer app was not found. Its ground side appears to be SBC-based (unverified).
- Whether PixelPilot runs on iOS: no evidence found. Only Android builds are documented.

## 7. Example bill of materials and total cost for a printed ~5"–7" ArduPilot or INAV GPS quad flown from a phone

### Takeaway
With sourced prices, the **core navigation and control electronics for a printed 5" ArduPilot phone-GCS quad come to about $190**: MicoAir H743 V2 FC with Bluetooth ($72.99), Holybro M10 GPS ($43.99) and RadioMaster Pocket ELRS backup or primary radio ($71.50). Optional extras:
- Optical flow: about +$33–42
- Remote ID: about +$20–39
- OpenIPC HD video to the phone: about +$70–108
- ESP32 WiFi bridge: about +€22

ESC, motors, props, LiPo, charger and the ELRS receiver were **not price-sourced**. Adding an unsourced $150–300 for those parts gives an estimated complete build of about $340–490 without flow, Remote ID or HD video, or about $500–670 with all three, excluding the phone; see Inferences. The Robofusion Grasshopper5 electronics kit ("from $219.99") is a one-stop alternative, with motors and battery bought separately. An INAV build on a SpeedyBee F405 V4 stack ($65.99, FC plus ESC) lowers the electronics core to about $181 but gives a weaker phone-GCS feature set.

### Cited Findings
- Frame: Grasshopper5 STL is free (CC BY-NC 4.0), printed in PETG minimum, PETG-CF preferred — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame). Teardrop Quad STLs: [CopterCam](https://www.coptercam.tech/copter-parts/)
- Electronics kit for Grasshopper5 (MicoAir H743 V2, 50 A Bluejay ESC, M10 GPS, MTF-01P, TRS 2-in-1 RC + MAVLink, VTX and antenna per the reference list): "from $219.99" — [Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)
- FC options: MicoAir H743 V2 with BT, ArduPilot pre-installed, **$72.99** — [Pyrodrone](https://pyrodrone.com/collections/micoair-products/products/micoair-h743-v2-2-6s-flight-controller-with-bluetooth-and-pre-loaded-with-ardupilot-30-30mm). Kakute H7 V2 **$52** — [Holybro](https://holybro.com/products/kakute-h7-v2). SpeedyBee F405 V4 55A stack (FC + ESC, BF/INAV) **$65.99** — [SpeedyBee](https://www.speedybee.com/speedybee-f405-v4-bls-55a-30x30-fc-esc-stack/). Pixhawk 6C Mini about €199 or $234 — [openelab](https://openelab.io/a/s/products/holybro-pixhawk-6c-mini-flight)
- GPS: Holybro M10 **$43.99** — [Holybro](https://holybro.com/products/m10-gps)
- Optical flow (optional): MTF-01 **$32.99**, MTF-01P **$41.99** — [Pyrodrone](https://pyrodrone.com/collections/micoair-products/products/micoair-mtf-01p-optical-flow-12m-range-2in1-sensor); Matek 3901-L0X **$35.99** — [RaceDayQuads](https://www.racedayquads.com/products/matek-3901-l0x-optical-flow-lidar-sensor)
- RC radio (backup or primary): RadioMaster Pocket ELRS **$71.50** — [RadioMaster](https://www.radiomasterrc.com/products/pocket-radio-controller-m2)
- Phone telemetry link options: FC Bluetooth ($0 on MicoAir743 V2 or Kakute H7 V2) — [ArduPilot READMEs](https://github.com/ArduPilot/ardupilot/tree/Copter-4.7.1/libraries/AP_HAL_ChibiOS/hwdef). DroneBridge ESP32-C6 **€21.99** excl. VAT — [DroneBridge shop](https://drone-bridge.com/shop/). Holybro SiK V3 100 mW **$58.99** — [Holybro](https://holybro.com/products/sik-telemetry-radio-v3). ELRS MAVLink through the Backpack (no extra hardware if TX and RX are ESP-based ELRS ≥ 3.5) — [ExpressLRS](https://www.expresslrs.org/software/mavlink/)
- Remote ID (optional or required by local rules): Holybro RID about **$20–39** — [openelab](https://openelab.io/a/s/products/holybro-remote-id-module)
- Video to phone (optional): RunCam WiFiLink **$69.99**; WiFiLink-G with 8812AU adapter and OTG **$107.99** — [RaceDayQuads](https://www.racedayquads.com/products/runcam-wifilink-g-w-openipc). DIY OpenIPC air unit $55–70 — [idostudio](https://idostudio.ai/insight/2026-09-22-testing-openipc-against-walksnail-and-dji-on-the-flight-bench)
- Reference parts in documented builds (no prices given): 2207-class motors and 6S about 1300 mAh for the Grasshopper5 — [Robofusion](https://docs.robofusion.net/projects/grasshopper5-fpv-frame). EMAX ECO II 2807 1300 kV, 7×4.5 props and 6S 5000 mAh for a 7" mapping quad — [Evan Briggs](https://evanbriggs358.github.io/). Darwin 1104 4300 kV and 3S for a sub-250 g printed build — [Printables snippet](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform)
- Difficulty signals from the builds: a tilted rotor plane needs a custom FC orientation — [Robofusion](https://docs.robofusion.net/projects/grasshopper5-fpv-frame). Calibration and motor configuration prevent failed takeoffs — [Duke MiniAutoDrone](https://sites.duke.edu/memscapstone/3d-printed-mini-autonomous-drone/). Carbon blocks WiFi, 2.4 GHz conflicts, and compass calibration was hard — [Evan Briggs](https://evanbriggs358.github.io/)

### Inferences
**Example BOM A: 5" printed ArduPilot quad, Android QGC phone GCS, RC backup (sourced prices summed)**

| Item | Price |
|---|---|
| Frame: Grasshopper5 in PETG | $0 (filament not priced) |
| MicoAir H743 V2 FC (Bluetooth MAVLink to phone) | $72.99 |
| Holybro M10 GPS | $43.99 |
| RadioMaster Pocket ELRS | $71.50 |
| **Core subtotal** | **$188.48** |
| + MTF-01 optical flow | → $221.47 |
| + Holybro Remote ID | → about $241–260 |
| + RunCam WiFiLink-G HD video to phone | → about $349–368 |
| + DroneBridge ESP32-C6 for longer WiFi telemetry (optional) | + €21.99 |

Not priced (estimate only, not sourced): 4-in-1 ESC, 4× 2207 motors, props, 1–2 6S LiPos, a LiPo charger and an ELRS receiver. An **unsourced** rough estimate for these is $150–300. That puts a complete phone-capable ArduPilot GPS 5" at roughly $340–490 for core electronics only ($188.48 + $150–300), or roughly $500–670 with flow, Remote ID and HD video ($349–368 + $150–300), excluding the phone. Treat these figures as an estimate to be priced by the report writer or another researcher.

**Example BOM B: INAV budget build**

| Item | Price |
|---|---|
| SpeedyBee F405 V4 stack (FC + 55 A ESC) | $65.99 |
| Holybro M10 GPS | $43.99 |
| RadioMaster Pocket ELRS | $71.50 |
| **Subtotal** | **$181.48** |

Plus unsourced motors, battery and receiver. Phone use: the SpeedyBee app for configuration over Bluetooth. Waypoints over MAVLink need an F405-class target (MAVLink is present) and work best in INAV 10 (RC). The ELRS MAVLink path has only "limited" INAV support.

**Example BOM C: one-stop kit.** The Grasshopper5 electronics kit, from $219.99, plus motors, props, battery, ELRS-compatible handset and charger. The TRS 2-in-1 link carries MAVLink, but which handsets work with it was not verified.

**Difficulty ranking (inference):**
1. INAV on a SpeedyBee stack, configured with the SpeedyBee app: easiest setup, least phone GCS.
2. ArduPilot on a MicoAir743 or Kakute H7 V2 with QGC Android: moderate. It needs parameter work, compass and GPS placement, autotune and failsafe setup, but gives the full phone feature set.
3. Add LTE, OpenIPC video or PX4 custom setups: advanced.

**Safety (inference from the sources above):** never rely on the phone's virtual sticks as the only control. Set GCS and RC failsafes to RTL or Land. Test RTL and failsafes at low altitude first. Keep the GPS/compass mast away from the ESC and power wiring, as Grasshopper5's flight testing found. Avoid 2.4 GHz WiFi telemetry next to 2.4 GHz RC without testing.

### Gaps
- Prices for ESCs, motors, props, LiPos, chargers and ELRS receivers were not collected (session web-search budget exhausted). The $150–300 figure above is an unsourced estimate.
- The exact contents of the Robofusion "from $219.99" kit (for example, whether the VTX and MTF-01P are included at that price) were not verified.
- No source gave a printed 5–7" GPS quad's verified all-up weight and flight time, so the sizing of the battery and motors cannot be validated from sources.
- Whether the RadioMaster Pocket's ELRS module and Backpack support MAVLink WiFi forwarding (Backpack ≥1.5.0, ESP-based TX) was not confirmed on the product page.
