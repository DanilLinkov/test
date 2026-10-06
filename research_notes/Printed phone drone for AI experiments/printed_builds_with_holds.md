# Printed small drones with height hold and indoor position hold (optical flow + rangefinder), a camera feed to a laptop, phone flight and Python control: documented builds, firmware support, camera paths, Sydney costs and how much core-flight tinkering each needs (state as of 6 October 2026)

Method notes for the report writer:
- Research date: 6 October 2026. USD prices are converted at **1 USD = 1.4411 AUD** (ECB reference rate dated 2 Oct 2026, as used in the earlier Sydney price notes in `research_notes/3D printed phone drones Sydney prices/`). Overseas prices exclude Australian GST (10%) and shipping unless stated.
- GitHub repositories were read by **cloning them with git on 6 Oct 2026**: the GitHub API and plain HTML fetches were blocked for this session, though WebFetch of GitHub issue pages worked. Commit dates quoted as "(git)" are commit-author dates from those clones.
- Core Electronics' agent "markdown lane" returned a Cloudflare 403 challenge on 6 Oct 2026, although it worked on 5 Oct. Core prices therefore come from the 5 Oct notes.
- Pakronics' Shopify search JSON shows prices **excluding GST**; multiply by 1.1 for the shelf price (verified in the earlier notes: A$137.12 in JSON vs "A$150.83 Inc. GST" on the page).
- Facts marked "(search summary)" come from a search engine's summary of a page that was not opened directly. Treat them as weaker evidence.
- Some facts are re-cited from the 5 Oct 2026 research notes ("prior notes"). The original source URL is given in each case.

## 1. Brushed ESP32 route: are there documented, working ESP-Drone (or Crazyflie-firmware) builds on printed frames with PMW3901 + VL53L1X? Does Flix's mainline firmware now support height/position hold, and how reliable are community versions? What do these builds' authors report?

### Takeaway
No documented, working ESP-Drone or Crazyflie-firmware build was found that runs optical-flow position hold on a 3D-printed frame.
- **Espressif's own flow-deck integration has two open bugs from 2025:** motors spin randomly, and cflib commands are ignored once the PMW3901 starts.
- **LiteWing is the only ESP32 drone with a documented, working hold, and its frame is a PCB.** Height hold runs onboard and is selected in the Android app. Position hold is a **Python dead-reckoning loop on a PC** over Wi-Fi.
- **Flix mainline has no altitude or position hold.** As of the last commit (22 Sep 2026), position control is "planned" and "in development".
- **Flix community versions** from RoboCamp 2025 and 2026 added VL53L1X altitude hold. Two 2026 participants achieved stable position hold, but they used an **overhead laptop camera**, not optical flow. These are camp prototypes, not maintained releases.

### Cited Findings

#### 1.1 Espressif ESP-Drone (Crazyflie-derived firmware) with PMW3901 + VL53L1X
- **Documented modes and sensors:**
  - "Position-hold mode: maintain current flight position. To implement this mode, an optical flow sensor and a Time of Flight (TOF) sensor are needed."
  - "Height-hold mode: keep flight height. Note: to apply this mode, the drone should fly at 40 cm or higher over the ground, and a TOF is needed."
  - A "Position-hold module" extension board is listed as "PMW3901 + VL53L1X", for "Indoor position-hold flight".
  - Source: [ESP-Drone gettingstarted.rst](https://github.com/espressif/esp-drone/blob/master/docs/en/rst/gettingstarted.rst)
- **Driver notes in the docs:**
  - "Enable position-hold mode only when the height-hold mode test is stable."
  - "when the height is less than 5 cm, the optical flow will stop working".
  - "The sensor lens must be mounted facing down".
  - Source: [ESP-Drone drivers.rst](https://github.com/espressif/esp-drone/blob/master/docs/en/rst/drivers.rst)
- **Flow-deck hardware files:** on 17 Mar 2025 Espressif published "hardware: add flow deck source files" (BOM, schematic, Gerbers for "ESP32_S2_Drone_Flow_Deck V1.1"), resolving issue #93. — [esp-drone commit 3083f87](https://github.com/espressif/esp-drone/commit/3083f87f220d73151932ea3b65287685422416dd) (git); [issue #93](https://github.com/espressif/esp-drone/issues/93)
- **Open bugs:**
  - **Issue #102** (16 Jan 2025, open), "Kalman estimator does not work after flowdeck v2 integration": "Immediately after the connect, motors starts spinning randomly, unable to take off." No maintainer reply is visible. — [esp-drone #102](https://github.com/espressif/esp-drone/issues/102)
  - **Issue #107** (20 Mar 2025, open), "[Bug] PMW3901 Sensor Overrides Manual Control via cflib": on Espressif's own ESP32_S2_Drone_V1_2, the drone stops responding to cflib velocity commands right after "PMW3901 SPI connection [OK]". No workaround was posted. — [esp-drone #107](https://github.com/espressif/esp-drone/issues/107)
- **Maintenance:**
  - Last commit on 4 Jun 2026 was a CI spell-check change (git). — [esp-drone](https://github.com/espressif/esp-drone)
  - Espressif has offered "limited support" since December 2022 (prior notes). — [ESP-Drone README](https://github.com/espressif/esp-drone)
- **No printed-frame build found:** a search for "ESP32 drone 3D printed frame PMW3901 VL53L1X position hold build" returned only the ESP-Drone docs and LiteWing pages. — [search results incl. ESP-Drone hardware docs](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)

#### 1.2 LiteWing (CircuitDigest; ESP-Drone derivative; FR4 PCB frame, not printed)
- **Positioning module hardware** ([LiteWing positioning module wiki](https://circuitdigest.com/wiki/litewing-drone-positioning-module/), last update "3/FEB/2026"):
  - VL53L1X ToF, up to 4 m, 50 Hz.
  - PMW3901MB optical flow, 80 mm–2 m.
  - 4 × WS2812B LEDs; the MS5611 and HMC5883L footprints are unpopulated.
  - "~8 grams"; plugs into a 2×12 header.
- **Firmware and modes:**
  - Firmware is flashed as **binary files** (bootloader.bin, partition-table.bin, LiteWing_Shield.bin).
  - "The firmware support for the barometer and magnetometer is still under development."
  - The wiki says to "fly using the LiteWing mobile app in height hold mode".
  - Source: [LiteWing positioning module wiki](https://circuitdigest.com/wiki/litewing-drone-positioning-module/)
- **Height hold runs onboard and is set from the phone app (27 Oct 2025):**
  - Tap the height-hold button, "set your desired height for the drone and click on the start button".
  - VL53L1X "4cm to 4 meters", "±3% at 1 meter".
  - FAQ: "Height hold is working fine indoors, but not outdoors", because "Bright light can affect its functionality."
  - Source: [CircuitDigest height hold guide](https://circuitdigest.com/articles/how-to-use-height-hold-mode-in-litewing)
- **Position hold runs on a PC, not onboard** ([CircuitDigest optical position-hold guide, 6 Feb 2026](https://circuitdigest.com/microcontroller-projects/litewing-flight-positioning-module-optical-position-hold-guide); [joystick-control-with-position-hold guide, 4 Feb 2026](https://circuitdigest.com/microcontroller-projects/litewing-flight-positioning-module-joystick-control-with-position-hold)):
  - A Python cflib script connects to `udp://192.168.43.42`, sends hover setpoints at 50 Hz and receives sensor data at 100 Hz.
  - It dead-reckons position from flow and ToF.
  - "A velocity measurement error of just 1 cm/s causes a position error of 60 cm after one minute".
  - Mitigations: position resets every 90 s, velocity thresholding at 0.005 m/s, and integral decay.
  - Requirements: textured, non-reflective floor and 0.08–3 m altitude. Movement uses keyboard WASD keys.
  - Neither guide gives measured drift numbers or says the phone app supports position hold.
- **Python scripts in the repo** (git, Dec 2025–Feb 2026):
  - `height-hold-joystick.py`, `dead-reckoning-position-hold.py`
  - `Flight_Positioning_Module/dead-reckoning-optical-position-hold.py`, `dead-reckoning-maneuvers.py`
  - `opecv-object-detection.py`, which opens a local camera with `cv2.VideoCapture(0)`
  - Source: [LiteWing Python-Scripts](https://github.com/jobitjoseph/LiteWing/tree/main/Python-Scripts)
- **Problems reported by users (prior notes):**
  - Issue #18 (Aug 2026): "Frequent UDP packet loss" in the app and Python on drones with positioning modules; after reflashing, the module became incompatible (ToF/flow dropouts); "only part of the firmware source appears to be publicly available". — [LiteWing #18](https://github.com/jobitjoseph/LiteWing/issues/18)
  - Issue #12 (Jan 2026): "severe horizontal flight offset" and a coarse 0.6° app trim step. — [LiteWing #12](https://github.com/jobitjoseph/LiteWing/issues/12)
- **Airframe (prior notes):** ~45 g without battery; payload "~25 g (with 55 mm propellers)"; 720 coreless motors. — [LiteWing wiki](https://circuitdigest.com/wiki/litewing/)
- **App (prior notes):** the LiteWing Android app on Google Play was updated 24 Mar 2026, has 1K+ downloads and 4.5★. — [Google Play](https://play.google.com/store/apps/details?id=com.litewing.controller)

#### 1.3 Crazyflie firmware on non-standard frames
- **Bitcraze's own brushless build had flow-deck trouble.** Its Crazyflie Bolt build (13 Jan 2020) used a Shendrones Tweaker frame (not printed), DYS 1806 motors, 4" props and 3S, with a Flow deck v2. It reported: "Stabilization with the Flow deck does not work", suspecting Kalman tuning or outdoor VL53L1x issues. — [Bitcraze blog](https://www.bitcraze.io/2020/01/crazyflie-bolt-fpv-meets-autonomy/)
- **Unverified printed frame:** a search summary says Bitcraze offers a 130 mm 3D-printed Bolt frame (v5) on GitHub. It was not verified. — [Bitcraze BAM 2021 Bolt workshop (search summary)](https://www.bitcraze.io/about/events/documents/bam2021/BQ_Bolt_workshop_bam2021.pdf)
- **Prices (prior notes):** Crazyflie Bolt 1.1 $205, Flow deck v2 US$55 (A$79.26), Crazyflie 2.1+ $240. — [Bitcraze store](https://store.bitcraze.io/collections/kits); [Flow deck v2](https://store.bitcraze.io/products/flow-deck-v2)

#### 1.4 Flix (okalachev), mainline status
- **README (as of the 22 Sep 2026 commit):**
  - The features list ends with "*Position control (planned)*".
  - "The position control feature is in development. RoboCamp 2026 demo (using an overhead camera …)".
  - "The official PCB (Flix2) is in development now".
  - Source: [Flix README](https://github.com/okalachev/flix) (git)
- **Flight modes:** STAB ("The drone doesn't stabilize its position, so slight drift is possible. The pilot should compensate it manually"), ACRO, RAW and AUTO ("the drone can be controlled using pyflix Python library, or by modifying the firmware"). — [Flix usage.md](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **Recent commits add no hold** (git, Aug–Sep 2026; [Flix commits](https://github.com/okalachev/flix/commits/master)):
  - "pyflix@1.0.0" (17 Aug); "Support rates feedforward in set_attitude_target in mavlink" (17 Aug)
  - "Add tilt disarm failsafe" (2 Aug); "Allow hot reconnection from another gcs over wifi" (7 Aug); WIFI_BROADCAST for multiple GCS (8 Aug)
  - "Add parameters metadata for qgc" (1 Sep); docs fixes (21–22 Sep)
- **Issue tracker:** a GitHub issue search for altitude / VL53L1X / "optical flow" / "position hold" returned only #47 (licence request, closed 29 Sep 2026), so no hold work is tracked in issues. — [Flix issues search](https://github.com/okalachev/flix/issues?q=altitude+OR+VL53L1X+OR+%22optical+flow%22+OR+%22position+hold%22)
- **Python library (pyflix):**
  - `pip install pyflix`.
  - Telemetry: attitude, rates, IMU, motors, voltage.
  - Commands: `set_armed()`, `set_controls(roll, pitch, yaw, throttle)`, parameter get/set and console commands.
  - Links: Wi-Fi, or ESP-NOW through a USB proxy board.
  - Source: [pyflix README](https://github.com/okalachev/flix/blob/master/tools/pyflix/README.md)
- **Phone control (Android):** the Mavlink Joystick app, or the QGroundControl virtual joystick with "Auto-Center Throttle" disabled. Tip: "Decrease `CTL_ATT_MAX` parameter when flying using the smartphone". — [Flix usage.md](https://github.com/okalachev/flix/blob/master/docs/usage.md)
- **Author's disclaimer (prior notes):** "it's not easy to assemble and set up". — [Flix README](https://github.com/okalachev/flix)

#### 1.5 Flix community versions with holds
- **RoboCamp 2026** (July 2026, Saint Petersburg) ([Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md); [demo video](https://youtu.be/369Xowm4HcU)):
  - The goal was "autonomous position control using distance sensors and an overhead camera".
  - "Several participants were able to implement altitude hold, and two participants implemented stable position hold."
  - The winner did "an automatic takeoff, stable position hold (2 min+), and navigation to a point selected by the user by clicking on the camera image".
- **The winning code** is in [xTimop/flix-poscontrol, branch poscontrol](https://github.com/xTimop/flix-poscontrol/tree/poscontrol), commits 21–23 Jul 2026 (git):
  - Onboard, a **VL53L1X** (Pololu library, Short mode, 50 ms timing budget) feeds a height PID ([distance.ino](https://github.com/xTimop/flix-poscontrol/blob/poscontrol/flix/distance.ino)).
  - On the laptop, Python/OpenCV tracks the drone by HSV colour in an **overhead camera** and sends MAVLink `VISION_POSITION_ESTIMATE` through pyflix ([cv/poscontrol.py](https://github.com/xTimop/flix-poscontrol/blob/poscontrol/cv/poscontrol.py)).
  - PID gains are tuned with OpenCV sliders and saved to JSON.
  - No optical flow is used.
- **RoboCamp 2025:** "3D-printed and wooden frames, ESP32 Mini, DC-DC buck-boost converters. BetaFPV LiteRadio 3 to control the drones via Wi-Fi connection. Features: altitude hold, obstacle avoidance, autonomous flight elements." Model files are on Google Drive. — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)
- **Other community builds** ([Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)):
  - QX95 frame, 55 mm props, 1050 mAh 25C, MPU6050, "total quadcopter weight of 66 g".
  - Oleg1405: ESP32 Mini, MPU-6500, boost converter, BetaFPV ELRS Lite receiver, "Radiomaster Pocket + Mavlink Joystick (Android) control".
- **Camera build:** [CatRey/Flix-Camera-Streaming](https://github.com/CatRey/Flix-Camera-Streaming) (single release v1.0.0, 12 Dec 2025, git) streams `FRAMESIZE_QVGA` (320×240) MJPEG over HTTP from the same ESP32-S3-CAM that flies the drone.

#### 1.6 Non-printed ESP32 benchmark with flow position hold (context only)
- **M5Stack StampFly (prior notes):**
  - The ecosystem firmware has ACRO, STABILIZE, ALT_HOLD and POS_HOLD, plus a "Tello-SDK-compatible API" over the drone's Wi-Fi AP.
  - 27.6–36.8 g; moulded plastic frame; no official phone app.
  - AU$129.95 at Core Electronics.
  - Sources: [stampfly_ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem); [Core](https://core-electronics.com.au/m5stamp-fly-programmable-open-source-quadcopter-kit.html)

### Inferences
- **No printed ESP32 path offers working holds without core-flight work.** The two printed ESP32 platforms with good docs (Flix; ESP-FLY with a 3 g payload) have no holds. The one ESP32 drone with working holds (LiteWing) has a PCB frame.
- **LiteWing's "position hold" fits a laptop-in-the-loop AI setup but not phone-only flight.** It is laptop-side dead reckoning, so it drifts by design and depends on Wi-Fi quality (issue #18). From the phone, only height hold is available.
- **Getting holds on Flix means writing flight code.** The user would port the RoboCamp VL53L1X height loop and write PMW3901 velocity fusion and position control. Flix's maintainer lists position control as future work.
- **Expect debugging on DIY ESP-Drone with flow sensors.** Espressif's own flow integration has unresolved 2025 bugs on its reference hardware, so this is the least proven ESP32 option.
- **Crazyflie-family estimators work on Bitcraze hardware.** Off that hardware, the one documented attempt (Bitcraze's Bolt on a third-party frame) did not get flow stabilisation working.

### Gaps
- No measured hover drift (cm over time) was found for LiteWing's PC-side position hold, the Flix RoboCamp builds, or any ESP-Drone flow build.
- It is not documented whether the LiteWing app and a Python cflib script can be connected to the drone at the same time.
- Flix's main community channel is a Telegram chat, which could not be searched. Altitude-hold forks beyond RoboCamp were not found by web search.
- The Bitcraze printed Bolt frame (search summary) was not verified, and no printed Bolt + Flow deck flight report was found.

## 2. Small brushless route (65–75 mm whoops, 2–3 inch printed frames): which firmware supports optical-flow position hold on such sizes, and are there documented printed builds? How do they connect to an Android phone and to Python? Is a handheld radio effectively required?

### Takeaway
**Firmware:**
- **ArduPilot is the only one of the three with documented, maintained GPS-free optical-flow navigation:** EKF3 flow sources, Loiter/FlowHold, and GUIDED for Python via pymavlink. It also has documented support for MTF-01 and for several whoop and toothpick AIO boards. Its flow setup expects a compass for yaw and a manually set EKF origin. Its BetaFPV 1S AIO docs recommend only ACRO/STABILIZE/ALTHOLD because no compass can normally be fitted.
- **INAV's flow position hold is "experimental" (since 2.0).** Its wiki guide is a self-declared draft. An open issue shows PosHold not even offered without GPS on INAV 7.0; the workaround was a fake GPS.
- **Betaflight's Position Hold requires GPS.**

**Documented builds:**
- No documented 65–75 mm or 2–3" **printed** build with flow-based indoor hold was found on any stack.
- The closest is **CogniFly**: a printed TPU/PLA sub-250 g quad on a custom INAV 2.x fork, with a Matek 3901-L0X, a Pi Zero W camera and a laptop Python API. It is academic and unmaintained since early 2023.
- The ArduPilot "ArduWhoops" (72–76 g, GN745 AIO) are documented but GPS-based, not printed.

**Radio:**
- ArduPilot has been flown with **no RC receiver**, using QGC on Android plus a Bluetooth gamepad (IQ ArduWhoop), but ArduPilot's docs say to keep a transmitter as backup.
- For INAV and Betaflight a radio is effectively required.

### Cited Findings

#### 2.1 ArduPilot: optical flow, rangefinder, no-GPS modes
- **MTF-01 setup** ([ArduPilot MTF-01 doc](https://ardupilot.org/copter/docs/common-mtf-01.html)):
  - For 4.7+: `SERIAL1_PROTOCOL = 1`, `SERIAL1_BAUD = 115`, `MAVx_OPTIONS = 2`, `FLOW_TYPE = 5 (MAVLink)`, `RNGFND1_TYPE = 10 (MAVLink)`, `RNGFND1_MAX = 8`, `RNGFND1_MIN = 0.01`, `RNGFND1_ORIENT = 25`.
  - Before 4.7: `SERIAL1_OPTIONS = 1024`.
  - "With firmware versions 4.5.0 or above, MTF-01 may not be recognized by ArduPilot unless you use MicoAssistant to modify its 'mav_id' to 200".
- **Flow-only EKF setup** ([ArduPilot optical flow setup](https://ardupilot.org/copter/docs/common-optical-flow-sensor-setup.html)):
  - Sources: `EK3_SRC1_POSXY = 0`, `EK3_SRC1_VELXY = 5 (Optical Flow)`, `EK3_SRC1_POSZ = 1 (Baro)`, `EK3_SRC1_VELZ = 0`, `EK3_SRC1_YAW = 1 (Compass)`.
  - "Set 'EKF Origin' on Ground Control Station map."
  - With flow as the only horizontal source, "the vehicle will not climb above the rangefinder's maximum altitude specified in RNGFNDx_MAX".
  - Calibration needs "a textured surface and good lighting".
- **Compass-less operation needs GPS:** "GSF depends on good velocity reports from the GPS"; `EK3_SRC1_YAW = 8 (GSF)`. The page offers no flow-only alternative. — [ArduPilot compass-less](https://ardupilot.org/copter/docs/common-compassless.html)
- **BetaFPV F405 family** (covers the F4 1S 12A AIO V3 whoop board, F4 2-3S 20A AIO and F405 4S 20A Toothpick V5) ([ArduPilot BETAFPV F405 doc](https://ardupilot.org/copter/docs/common-betafpvf405.html)):
  - "Since a compass cannot be normally attached, only ACRO, STABILIZE, and ALTHOLD (if the unit has a BARO) modes are recommended."
  - I2C is possible on the AIO only with "special firmware" after disconnecting its ELRS module.
- **Guided mode (Python)** ([ArduPilot guided-mode commands](https://ardupilot.org/dev/docs/copter-commands-in-guided-mode.html)):
  - Positions are "relative to the vehicle's EKF Origin".
  - Velocity commands "should be re-sent every second (the vehicle will stop after 3 seconds if no command is received)".
  - GUIDED_NOGPS accepts only `SET_ATTITUDE_TARGET`.
- **Forum: "Unable to get position estimate with Optical Flow"** (Copter 4.5, MTF-01, no GPS; 20 Sep 2024 to 27 Apr 2026) ([ArduPilot Discourse](https://discuss.ardupilot.org/t/unable-to-get-position-estimate-with-optical-flow/124000)):
  - Advice given: get GPS Loiter flying well first, "then add the optical flow sensor and do an inflight optical flow calibration using GPS loiter mode".
  - Another user: "I use flowhold to hold with optical flow it works".
  - The rangefinder maximum limited Loiter to 3–4 m.
- **Forum: MTF-01 on a 2-inch FPV** (30 Oct 2023, Jiaqi Hu) ([ArduPilot Discourse](https://discuss.ardupilot.org/t/testing-of-mtf-01-optical-flow-lidar-sensor-on-2-inch-fpv-drone-with-ardupilot/108502)):
  - Build: NxtPX4 FC, ikun20 frame, T-motor 1106 6000 kV, Gemfan 2023 props, 4S 850 mAh, M10 GPS.
  - Flown "outdoors" only.
  - Later replies: "Mode change to LOITER failed: requires position" indoors (6 Jan 2024), and "EKF3 pos_horiz_abs Off" with two MTF-01s on a CUAV X5 Nano (21 Apr 2024).

#### 2.2 ArduPilot board support for whoop and 2–3" AIOs (git, ArduPilot master as of 30 Sep 2026)
- **Small AIO targets in `libraries/AP_HAL_ChibiOS/hwdef`** include:
  - BETAFPV-F405 (and -I2C), FlywooF405HD-AIOv2, FlywooF405S-AIO, FlywooF745 (GN745), FlywooF745Nano
  - JHEMCU-GSF405A, MicoAir743-AIO, MicoAir405Mini, SpeedyBeeF405AIO, SpeedyBeeF405Mini, KakuteH7Mini, GEPRCF745BTHD, ACNS-F405AIO
  - Source: [ArduPilot hwdef directory](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef)
- **BETAFPV-F405:** STM32F405, ICM42688-P, BMP280, Bluejay 4-in-1 ESC; covers the "F4 1S 12A AIO Brushless Flight Controller V3". — [README](https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_HAL_ChibiOS/hwdef/BETAFPV-F405/README.md)
- **FlywooF405HD-AIOv2:** "GOKU F405 HD 1-2S AIO v2 w/ built-in ELRS 2.4g RX", DPS310/SPL06 barometer, 12 A BLHeli_S, 25.5 mm holes, "Weight: 4.9g". — [README](https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_HAL_ChibiOS/hwdef/FlywooF405HD-AIOv2/README.md)
- **FlywooF405S-AIO:** "GOKU F405 1-2S 12A AIO w/ built-in ELRS", 8.5 g. — [README](https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_HAL_ChibiOS/hwdef/FlywooF405S-AIO/README.md)
- **MicoAir743-AIO:** STM32H743, dual IMUs, DPS310, "Integrated 4-in-1 AM32 35A ESC", 25.5 mm, "Weight: 10g". — [README](https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_HAL_ChibiOS/hwdef/MicoAir743-AIO/README.md)
- **SpeedyBeeF405AIO:** "UART1 tied internally to BT module which is not currently supported by ArduPilot", 13.6 g, 3–6S. — [README](https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_HAL_ChibiOS/hwdef/SpeedyBeeF405AIO/README.md)

#### 2.3 INAV: optical-flow position hold status
- **Wiki guide** "Optic Flow and Rangefinder Setup Guide" ([INAV wiki](https://github.com/iNavFlight/inav/wiki/Optic-Flow-and-Rangefinder)):
  - It opens with "**DRAFT - PLEASE REVIEW AND UPDATE. THIS DOCUMENT MAY CONTAIN ERRORS**".
  - It claims "GPS-free position hold … (multirotor only)".
  - Stated limitations: "Works best 10cm-3m above ground", "smooth floors don't" work, "Position estimate drifts over time".
  - The latest wiki commit (4 Oct 2026, git) is attributed to "qodo-merge-bot".
- **Settings:** `opflow_hardware` allows only NONE, CXOF and MSP. `inav_allow_dead_reckoning` "May also be useful for indoors OPFLOW navigation". — [INAV Settings.md](https://github.com/iNavFlight/inav/blob/maintenance-10.x/docs/Settings.md)
- **History:**
  - INAV 2.0 added "__Experimental__ OPFLOW mode". — [2.0.0 release notes](https://github.com/iNavFlight/inav/wiki/2.0.0-Release-Notes)
  - INAV 3.0 "Remove[d] the OPFLOW_PMW3901 opflow hardware option" (#6678). — [3.0.0 release notes](https://github.com/iNavFlight/inav/wiki/3.0.0-Release-Notes)
  - "INAV 7 is the last INAV official release available for F411 based flight controllers". — [7.0.0 release notes](https://github.com/iNavFlight/inav/wiki/7.0.0-Release-Notes)
  - No optical-flow changes appear in the 8.0, 9.0 or 9.1 release notes (git grep). — [INAV wiki](https://github.com/iNavFlight/inav/wiki)
- **Issue #9889** (2 Apr 2024, open; [INAV #9889](https://github.com/iNavFlight/inav/issues/9889)):
  - Setup: INAV 7.0 on a GEPRC F722 AIO with no baro, mag or GPS; Matek OpFlow plus rangefinder over MSP; `inav_allow_dead_reckoning = ON`.
  - PosHold and AltHold modes do not appear. The only workaround was configuring a fake GPS port, which meant bypassing arming checks.
  - No maintainer reply is visible.
- **Issue #7622**, "PosHold with Optical flow not working above 1m height", was closed in Nov 2021 as "Won't fix (HW limitation)". — [INAV issues search](https://github.com/iNavFlight/inav/issues?q=opflow+poshold)
- **Discussion #10126** (Jun–Aug 2024): maintainer sensei-hacker explains that rangefinder "Surface" altitude and GPS/baro altitude cannot be flown at the same time. — [INAV discussion #10126](https://github.com/iNavFlight/inav/discussions/10126)
- **Oscar Liang's INAV optical-flow guide** (25 Jun 2024) ([Oscar Liang](https://oscarliang.com/setup-optical-flow-rangefinder-inav/)):
  - Build: MicoAir MTF-01 (MSP) on a GEPRC Cinebot25 with a Flywoo GN745 V3.
  - One switch enables "ANGLE, NAV POSHOLD …, NAV ALTHOLD …, HEADING HOLD, and SURFACE".
  - It covers setup only, with **no flight results**.
  - A 2025 commenter reports the drone "descends to about 40-60cm off the ground and just stays there".
- **Python/companion hooks:**
  - INAV 9.0 "Enable[d] MSP override build flag by default" (#10330). — [9.0.0 release notes](https://github.com/iNavFlight/inav/wiki/9.0.0-Release-Notes)
  - INAV 8.0 allows "RC Control via Mavlink and Telemetry at the same time over a Single UART". — [8.0.0 release notes](https://github.com/iNavFlight/inav/wiki/8.0.0-Release-Notes)
  - INAV's RC over MAVLink "only listens for RC_CHANNELS_OVERRIDE" (prior notes). — [INAV discussion #11052](https://github.com/iNavFlight/inav/discussions/11052)

#### 2.4 Betaflight
- **Position Hold (2025.12) needs GPS.** "A GPS is essential", and Position Hold will not work "if there is no GPS 3D fix". A magnetometer is "strongly recommended". Optical flow or a rangefinder is not offered as an alternative. — [Betaflight Position Hold 2025.12](https://betaflight.com/docs/wiki/guides/current/Position-Hold-2025-12)
- **MSP as the only receiver is bench-only.** Betaflight's guide labels it that way; the flight-safe pattern keeps a real receiver for ARM (prior notes). — [Betaflight MSP companion guide](https://betaflight.com/docs/wiki/guides/current/MSP-Companion-Computer-Control)

#### 2.5 Documented small builds
- **IQ ArduWhoop** (Intelligent Quads / Eric Johnson; repo last commit 19 Oct 2023, thread from 21 Oct 2023):
  - Hardware: Flywoo GN745 AIO, GM8 GPS, mRo SiK telemetry radio, 2S 420 mAh; "total weight of the drone with battery is 76g".
  - The only printed part in the repo is a GPS holder (`stls/gm10_holder v5.stl`).
  - Setup: flashed by DFU because the GN745 "does not come with ardupilot preinstalled"; gyro, accel, compass and ESC calibrations; motor direction fixed in the BLHeli configurator.
  - Params use GPS EKF sources and `RNGFND1_TYPE = 0`, so no flow or rangefinder.
  - Source: [iq_arduwhoop](https://github.com/Intelligent-Quads/iq_arduwhoop) (git)
- **IQ ArduWhoop control without a receiver** ([ArduPilot Discourse "Ardupilot Tiny Whoop"](https://discuss.ardupilot.org/t/ardupilot-tiny-whoop/108129)):
  - "I am not using a dedicated RC receiver. to save weight I decided to use the mavlink joystick function in QGC."
  - "I bluetoothed the xbox one controller to the phone and setup up the joystick in the QGC android app."
  - SiK range was about 200 m.
  - A later reply on HereFlow: "the flow hold being pretty good, but the lidar only worked to about a meter outside".
- **ArduWhoop by Hideyuki Fujikawa** (11 May 2022) ([ArduPilot Discourse](https://discuss.ardupilot.org/t/arduwhoop-smallest-ardupilot-platform-72g-micro-arducopter-with-flywoo-f745-aio-85mm-frame/85281)):
  - Build: GN745 AIO, 85 mm Flywoo frame, 1102 10000 kV motors, 2" props, GM8 GPS, 72 g.
  - "the aircraft often drifts in Loiter"; RTL landed 3–5 m off.
  - Tuning started from 5-inch values and needed substantial work.
  - A 55 g replication reported "motor vibrations at ~450Hz".
- **CogniFly** (MISTLab, Polytechnique Montréal; ICRA 2022 paper):
  - **Frame:** printed exoskeleton, "All the parts in red are made of flexible TPU 95A", with PLA or ABS rigid parts and 3 mm carbon rods or bamboo skewers. — [CogniFly-STL](https://github.com/thecognifly/CogniFly-STL) (git, last commit 31 Jan 2023)
  - **BOM** ([CogniFly-STL](https://github.com/thecognifly/CogniFly-STL)):
    - Kakute F7 Mini V2 or Talon F7 Fusion FC; 4-in-1 ESC (Spedix IS35); 1104 6000 kV motors with 3025 props; 3S 650 mAh.
    - Raspberry Pi Zero W with Pi Camera V2; Matek 3901-L0X flow/lidar.
    - Firmware: "Our INav fork with targets: KAKUTEF7 or CLRACINGF7".
    - Total weight "just under 250g". — [thecognifly.github.io](https://thecognifly.github.io/)
  - **Setup:** flash the custom firmware with "inav-configurator 2.3.2", load the provided CLI config, and set up the Pi from a ready Raspbian image. — [DRONE_SETUP.md](https://github.com/thecognifly/cognifly-python/blob/main/readme/DRONE_SETUP.md)
  - **Python API** (`pip install cognifly`, last release 0.3.2 on 21 Feb 2023; [cognifly-python README](https://github.com/thecognifly/cognifly-python)):
    - A remote laptop sends velocity or position commands in the world or drone frame (`set_velocity_nonblocking`, `set_position_nonblocking`, `position_sequence`).
    - Video: `cf.stream(fps=24)` and `cf.get_frame()` return an OpenCV image.
    - Manual control: a PS4 Bluetooth gamepad (connected to the Pi) or keyboard over SSH.
    - "A slight horizontal drift of less than 1cm/s is to be expected."
    - A custom estimator exists because FC estimates "can be very poor when the ground is textureless or badly lit".
  - **Paper:** [arXiv 2103.04423](https://arxiv.org/abs/2103.04423)
- **YAMSPy** (MSP Python for INAV/Betaflight, used by CogniFly): README last updated 25 Oct 2022 (git). It was tested on "Heli-nation Talon F7 Fusion and Kakute F7 mini". The FC must use "a receiver that talks MSP", and the author advises a dedicated arming channel. — [YAMSPy](https://github.com/thecognifly/YAMSPy)

#### 2.6 Phone and laptop connections; is a radio required?
- **QGC Android** (prior notes): virtual joystick ("Thumbstick control is not as responsive as using an RC Transmitter"), plus SDL gamepads. "All ArduPilot vehicles are supported. No parameter configuration is necessary." Joystick mode sends `MANUAL_CONTROL`. — [QGC virtual joystick docs](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html); [QGC joystick docs](https://github.com/mavlink/qgroundcontrol/blob/v5.1.5/docs/en/qgc-user-guide/setup_view/joystick.md)
- **ArduPilot joystick flying** ([ArduPilot joystick doc](https://ardupilot.org/copter/docs/common-joystick.html)):
  - "Even if flying with a joystick, you should keep a regular transmitter/receiver connected and ready for use as a backup."
  - `RC_OVERRIDE_TIME` defaults to 3 s and "essentially defines the RC failsafe timeout" when no regular RC is present.
  - "It is nearly impossible to make the Joystick as responsive as a regular transmitter."
- **Wi-Fi telemetry bridges (prior notes):**
  - DroneBridge for ESP32 sends MAVLink "UDP to port 14550 for every connected device", so a phone running QGC and a laptop running pymavlink can share it. Range is "150m+" on standard Wi-Fi. — [ArduPilot DroneBridge page](https://ardupilot.org/copter/docs/common-esp32-telemetry.html)
  - ESP32-C3 SuperMini: A$8.99 in stock at Rising Sun. — [Rising Sun](https://risingsunfpv.com.au/products/esp32-c3-development-board-esp32-supermini-development)
- **ELRS MAVLink mode plus TX Backpack Wi-Fi to the phone** needs ELRS ≥ 3.5 and Backpack ≥ 1.5, and by design uses a handheld ELRS transmitter (prior notes). — [ExpressLRS MAVLink](https://www.expresslrs.org/software/mavlink/)
- **Python libraries:**
  - pymavlink "is a Python implementation of the MAVLink protocol" (ArduPilot org). — [pymavlink](https://github.com/ArduPilot/pymavlink)
  - DroneKit-Python README: "⚠️ ATTENTION: MAINTAINERS NEEDED ⚠️ … this project is not very active". — [dronekit-python](https://github.com/dronekit/dronekit-python)
  - MAVSDK lists "MAVSDK-Python (2019): Used in production". Its index page does not state the ArduPilot support level. — [MAVSDK docs](https://mavsdk.mavlink.io/main/en/index.html)
- **ESP-NOW and Wi-Fi limits on Betaflight-class FCs:** ESP-FC "WiFi … can only be used to configure device"; phone-browser ESP-NOW transmitters are "strictly intended for ground testing" (prior notes). — [esp-fc wireless.md](https://github.com/rtlopez/esp-fc/blob/master/docs/wireless.md); [ESP-FC-ESP-NOW-Web-RC](https://github.com/Ishu1519/ESP-FC-ESP-NOW-Web-RC)

#### 2.7 Sensor modules and AUD prices
- **MicoAir MTF-01** ([MicoAir MTF-01](https://micoair.com/?p=2191)):
  - "4.5g", "29.3 x 17 x 14.5 mm".
  - Range "8m@90% reflectance/600Lux; 5m@90% reflectance/60KLux".
  - Flow needs "60Lux" minimum, works above ">8cm", "42°" FOV, "100Hz".
  - Protocols: "Micolink/Mavlink/MSP" for "Ardupilot/PX4/INAV/FMT".
- **MicoAir MTF-02:** "25 x 10 x 4.5 mm", "4.5g", ToF "2.5m@90% reflectance/600Lux", flow ">60Lux", same protocols. — [MicoAir MTF-02](https://micoair.com/optical_range_sensor_mtf-02/)
- **MicoAir store prices (6 Oct 2026, in stock):** MTF-01 US$22.90, MTF-01P US$28.99, MTF-02P US$16.50, MicoAir743v2-AIO-35A US$64.99, MicoAir743v2-AIO-45A US$74.99. The original MicoAir743-AIO-35A is out of stock. — [MicoAir store API](https://store.micoair.com/wp-json/wc/store/products?search=mtf&per_page=10)
  - Shipping to Sydney was a flat US$5 (prior notes). — [MicoAir store](https://store.micoair.com/product/micoair743-v2/)
- **Matek 3901-L0X** (prior notes): 8–200 cm, >60 lux, MSP, 2 g, US$35.99 at RDQ. Australian listings are out of stock: Next FPV A$43.95, Buzz A$44.95. — [RDQ](https://www.racedayquads.com/products/matek-3901-l0x-optical-flow-lidar-sensor); [Next](https://www.nextfpv.com.au/products/matek-optical-flow-lidar-sensor-3901-l0x)
- **Australian flight-controller prices (6 Oct 2026):**

  | Board | Price | Stock | Source |
  |---|---|---|---|
  | Flywoo GN745 40A AIO | A$119.95 | in stock | [Buzz](https://buzzfpv.com.au/products/goku-gn-745-40a-aio-bl_32-mpu6000-25-5-x-25-5) |
  | BetaFPV F4 1S 12A AIO V3 | A$69.95 | out of stock | [Phaser](https://phaserfpv.com.au/products/betafpv-f4-1s-12a-aio-brushless-flight-controller-v3) |
  | BetaFPV F4 1S 12A AIO V3, BetaFPV direct | US$49.99 (Classical/STM32F405) or US$39.99 (Light/AT32F435) | both out of stock | [BetaFPV](https://betafpv.com/products/f4-1s-12a-aio-brushless-flight-controller-v3-0) |
  | BetaFPV F405 4S 20A Toothpick V5 (ICM42688) | A$117.99 | in stock | [Rising Sun](https://risingsunfpv.com.au/products/betafpv-f405-4s-20a-toothpick-brushless-flight-controller-v5-blheli_s-icm42688) |
  | "Flywoo GOKU F405 HD 1S 5A ELRS AIO V2.0" | A$94.95 | in stock | [Buzz](https://buzzfpv.com.au/products/flywoo-goku-f405-hd-1s-5a-elrs-aio-v2) |

  - The BetaFPV Light version uses an AT32F435 MCU, which is not the STM32F405 described in ArduPilot's BETAFPV-F405 README.
  - The Buzz Flywoo listing is a "1S 5A" variant, while ArduPilot's README describes a 1–2S 12 A board; whether they match is unconfirmed.
- **Australian motor and battery prices (6 Oct 2026):**
  - Motors: BetaFPV 1103, A$15.99 each, in stock. — [Phaser](https://phaserfpv.com.au/products/betafpv1103brushlessmotors1pc)
  - 2S 450 mAh packs, in stock: Tattu 75C A$12.95 ([Next](https://www.nextfpv.com.au/products/tattu-450mah-2s-75c-lipo-battery-pack)); GNB 80C A$14.27 ([Phaser](https://phaserfpv.com.au/products/gaoneng-gnb-2s-74v-450mah-80c-xt30-lipo-battery-long-type-dg)); Dinogy 65C A$10.95 ([Buzz](https://buzzfpv.com.au/products/dinogy-2s-450mah-65c-xt30-lipo)).
  - 3S 450 mAh: Tattu A$16.95, in stock. — [Next](https://www.nextfpv.com.au/products/tattu-450mah-3s-75c-lipo-battery-pack-long)
- **MTF-01 has no Australian stockist.** Phaser, Next, Rising Sun and Buzz all returned no results on 6 Oct 2026. — [Phaser search](https://phaserfpv.com.au/search/suggest.json?q=mtf-01&resources%5Btype%5D=product)

### Inferences
- **ArduPilot is the only brushless stack where "flow + rangefinder → Loiter/FlowHold → Python GUIDED → Android QGC" is documented end to end.** Two catches matter on tiny AIOs:
  - The documented flow-only EKF setup uses a compass for yaw, and compass-less GSF yaw needs GPS. A 1S BetaFPV AIO is therefore a poor flow-hold base.
  - A GN745 is a better base: the IQ build wired the GM8 GPS's I2C (SCL/SDA, which carries its compass) to it.
- **ArduPilot on sub-100 g quads needs real tuning.** Both ArduWhoop threads report vibration and Loiter drift and started from 5-inch values, and no small printed flow build was found to copy.
- **INAV is not a dependable route to GPS-free position hold.** The feature is experimental, the guide is a bot-edited draft, and an open issue shows the mode not even offered without GPS. INAV + MSP (YAMSPy) remains a good Python control path for manual or attitude-level commands.
- **Betaflight is out** for indoor flow position hold.
- **A radio is not strictly required with ArduPilot** (QGC Android + Bluetooth gamepad has been flown), but ArduPilot's docs say to keep one. For brushless props indoors, a handheld radio with a real failsafe is the prudent default. For INAV and Betaflight it is effectively required.
- **CogniFly proves that a printed, collision-tolerant, sub-250 g "flow + camera + laptop Python" drone works.** It is a 3-inch, 3S, Pi-equipped design on a 2019-era INAV fork with discontinued parts (Pi Zero W, Pi Camera V2). Copying it in 2026 means re-porting firmware, which is core-flight tinkering.

### Gaps
- No documented printed 65–75 mm or 2–3" build with ArduPilot (or INAV) flow-based indoor Loiter, with logs or video, was found.
- Not established: whether ArduPilot EKF3 can fly flow-only with no compass (yaw source "None"). The docs reviewed do not address it, and no forum thread was checked.
- Not verified: whether QGC's on-screen joystick (`MANUAL_CONTROL`) can fly INAV, which listens only for `RC_CHANNELS_OVERRIDE`.
- MTF-02/MTF-02P support in ArduPilot's docs was not checked; the vendor page claims MAVLink support.
- The MAVSDK level of ArduPilot support was not found on its docs index page.
- No measured indoor drift (cm/min) for any small brushless flow build was found.

## 3. Camera paths for laptop AI on small drones: analog 5.8 GHz camera + USB UVC receiver (does it work as a webcam in OpenCV?), OpenIPC/RunCam WiFiLink small enough for 2–3 inch, ESP32-S3 camera boards, and Raspberry Pi Zero 2 W with camera as an onboard companion: weights, latency, prices

### Takeaway
- **Analog 5.8 GHz AIO camera plus a UVC receiver** is the lightest and cheapest path to a laptop OpenCV feed on a <100 g drone.
  - The camera is about 2.7 g (BetaFPV M01, US$28.99).
  - The receiver is a driverless USB webcam on a PC: 640×480 at 30 fps, roughly 100 ms latency, AU$14–50.
  - Video stays off the drone's Wi-Fi control link.
- **OpenIPC** gives HD at 35–70 ms. In APFPV mode a laptop can receive the RTP H.265 stream with GStreamer.
  - Air units weigh 14–30 g. The RunCam WiFiLink2 needs 9–30 V, so it suits 3"+ multi-cell builds, not whoops.
  - Cost is A$110–240 for the air unit.
  - Only one Wi-Fi receiver can join an APFPV link.
- **ESP32-S3 cameras** are tiny and cheap but stream low-resolution MJPEG over Wi-Fi (the Flix camera build uses 320×240). On the flight ESP32's own Wi-Fi they compete with control traffic. No measured OpenCV latency was found.
- **A Pi Zero 2 W with camera** adds onboard compute, H.264 encoding and MAVLink routing.
  - It weighs tens of grams: 52.2 g with camera and OTG cable, per ArduPilot's DroneEngage docs.
  - Latency is about 200–300 ms in typical GStreamer/picamera2 setups (weak, search-summary evidence).
  - It fits 3-inch, 3S-class quads (CogniFly) rather than whoops.

### Cited Findings

#### 3.1 Analog 5.8 GHz camera + USB UVC receiver
- **Skydroid UVC receiver** (retailer description, search summary; [Sigmanortec](https://sigmanortec.ro/en/fpv-receiver-otg-skydroid-58ghz-150ch-true-diversity-uvc-microusb)):
  - "UVC output provides smooth 640x480 image at 30fps".
  - Three outputs: OTG to Android, "USB cable to connect PC", and AV.
  - On a Windows PC "it works like a charm with no added driver".
- **OpenCV with capture devices** (search summary): OpenCV "autodetects all capture devices that are compatible with Video4Linux, DirectShow…". A USB analog grabber can be opened with `VideoCapture(0)`. — [OpenCV Q&A](https://answers.opencv.org/question/125991/display-video-from-a-drone-fpv-camera/)
  - The LiteWing OpenCV demo script opens `cv2.VideoCapture(0)`. — [LiteWing script](https://github.com/jobitjoseph/LiteWing/blob/main/Python-Scripts/opecv-object-detection.py)
- **Latency warning:** a retailer of a USB-C analog capture adapter warns the "additional latency introduced by the video conversion process makes this adapter unsuitable for flying an FPV aircraft directly" (search summary). — [Flyingtech](https://www.flyingtech.co.uk/product/usb-c-analog-fpv-video-capture-adapter/)
- **Measured latency (prior notes):** analog OTG receivers run at about 100 ms and are suited "for slow ground models, spectators and bench tests". — [Unmanned Tech ROTG02 review](https://www.unmannedtechshop.co.uk/blogs/knowledge-base/eachine-rotg02-android-fpv-receiver-setup-review)
- **Receiver prices (prior notes):** Skydroid UVC at Buzz A$34.95 (single antenna) and A$49.95 (dual), both out of stock. AliExpress UVC receivers AU$13.59–37.39. — [Buzz](https://buzzfpv.com.au/products/skydroid-uvc-single-control-receiver-otg-5-8g-150ch-channel-fpv-receiver-video-transmission-downlink-audio-for-android-phone); [AliExpress](https://www.aliexpress.com/item/1005010645563255.html)
- **AIO camera + VTX:**
  - BetaFPV M01 AIO Camera 5.8G VTX V2.1: US$28.99 (A$41.78), "Weight: 2.72g". — [BetaFPV M01](https://betafpv.com/products/m01-aio-camera-5-8g-vtx)
  - BetaFPV direct also lists the Cetus Lite camera + VTX module (US$19.99), C03 camera (US$11.99) and Air VTX (US$11.99). — [BetaFPV search](https://betafpv.com/search?q=aio+camera)
  - Australian stock: Phaser lists M01 A$48.95 and A01 A$46.95, both out of stock. — [Phaser M01](https://phaserfpv.com.au/products/betafpv-m01-aio-camera-58ghz-vtx-v21-wired); [Phaser A01](https://phaserfpv.com.au/products/betafpva01aiocamera58gvtxwire-connectedversion)
  - Separate camera + VTX (prior notes): Caddx Ant Lite A$26.45 ([Buzz](https://buzzfpv.com.au/products/caddx-ant-lite-nano-fpv-camera-1200tvl-global-wdr-fpvcycle-edition)) plus TBS Unify Pro Nano A$32.25 ([Phaser](https://phaserfpv.com.au/products/tbs-unify-pro-nano)).
- **Payload precedent (prior notes):** ESP-FLY rises from 25 g to 28 g with a 5.8 GHz AIO camera. Its maintainers say ESP32 cameras are "Not directly" supported and recommend the analog AIO. — [ESP-FLY repo](https://github.com/Seeed-Projects/Co-Create_ESP-FLY)

#### 3.2 OpenIPC (RunCam WiFiLink and similar)
- **APFPV mode** ([OpenIPC APFPV docs](https://docs.openipc.org/use-cases/fpv/apfpv/apfpv/)):
  - The VTX "acts like a WiFi router": SSID "OpenIPC", password "12345678", VTX at 192.168.0.1, ground at 192.168.0.10.
  - Video is RTP H.265 on UDP 5600.
  - Clients: PixelPilot on Android, a web browser at 192.168.0.1, GStreamer on Linux, or "Any device" that can receive RTP on UDP 5600.
  - "35–70ms delay"; range "Basic smartphone: 50-200 meters".
  - "Only one WiFi device as a receiver is possible."
- **WFB-ng mode on a laptop** (search summary): needs a patched RTL8812AU driver on Ubuntu, or fpv4win on Windows. GStreamer pipeline: `udpsrc port=5600` → `rtph265depay`/`rtph264depay`. OpenCV needs a GStreamer-enabled build. — [OpenIPC wiki (Orange Pi ground)](https://github.com/OpenIPC/wiki/blob/master/en/fpv-ground-orange_pi5.md); [OpenCV GStreamer Q&A](https://answers.opencv.org/question/202017/how-to-use-gstreamer-pipeline-in-opencv/)
- **RunCam WiFiLink2** ([Buzz listing JSON](https://buzzfpv.com.au/products/runcam-wifilink2based-on-openipc)):
  - 25.5 mm holes; PCB 30×30 mm (338Q) plus 32×32 mm (Wi-Fi).
  - "Weight 30g".
  - "Power range DC 9-30V (BEC power supply highly recommended…)".
  - IMX415, 1080p60/90, 720p120.
  - Prices: Next FPV A$209.95 in stock ([Next](https://www.nextfpv.com.au/products/runcam-wifilink2based-on-openipc)); Buzz A$109 out of stock.
- **Other parts (prior notes):**
  - EMAX Wyvern Link OpenIPC VTX: 13.76 g, 2–6S, US$89.99 at RDQ. — [RDQ](https://www.racedayquads.com/products/emax-wyvern-link-openipc-200mw-vtx)
  - RTL8812AU adapters: AU$13.39–19.19 on AliExpress. — [AliExpress](https://www.aliexpress.com/item/1005005453962516.html)
  - A bench test measured OpenIPC at 42–58 ms at 1080p60. — [idostudio test](https://idostudio.ai/insight/2026-09-22-testing-openipc-against-walksnail-and-dji-on-the-flight-bench)

#### 3.3 ESP32-S3 camera boards
- **Seeed XIAO ESP32S3 Sense** ([Seeed wiki](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)):
  - "21 x 17.8 x 15mm (with expansion board)"; weight is not given.
  - Ships with an OV3660 (earlier units had an OV2640); OV5640 is optional.
  - Streaming power: "5V/~140mA" average and "~347mA" peak.
  - Reached 63.6 °C on the back without a heatsink in a one-hour webcam test.
- **Prices (Pakronics JSON, ex-GST, 6 Oct 2026):** XIAO ESP32S3 Sense A$29.02 (≈A$31.92 inc. GST), out of stock; OV5640 camera for XIAO A$22.99 (≈A$25.29 inc.), in stock. — [Pakronics XIAO Sense](https://www.pakronics.com.au/products/seeed-studio-xiao-esp32s3-sense-ss113991115); [Pakronics OV5640](https://www.pakronics.com.au/products/ov5640-camera-for-xiao-esp32s3-sense-with-heat-sink-ss114993115)
- **Flix camera build** streams QVGA MJPEG over HTTP from the flight ESP32-S3. — [Flix-Camera-Streaming](https://github.com/CatRey/Flix-Camera-Streaming/blob/main/flix/flix.ino)
- **hx-esp32-cam-fpv (prior notes):**
  - "Latency 90-110ms" at 640×360–1024×576.
  - MJPEG only, because "the ESP32 lacks the processing power for real-time video encoding".
  - "Set your expectations low".
  - Source: [hx-esp32-cam-fpv](https://github.com/RomanLut/hx-esp32-cam-fpv)
- **LiteWing camera tutorial (prior notes):** it uses a toy-drone Wi-Fi camera on its own network, and "Noise or jitter may appear in the live video feed when the drone motors start operating". — [CircuitDigest](https://circuitdigest.com/tutorial/adding-wi-fi-camera-to-litewing-esp32-drone)
- **No measured latency** for ESP32-CAM MJPEG into Python OpenCV was found. One write-up reports face recognition processing at about 8–12 FPS (search summary). — [DEV Community](https://dev.to/callmetarush/building-a-real-time-face-recognition-system-with-esp32-cam-in-a-weekend-4856)

#### 3.4 Raspberry Pi Zero 2 W + camera (onboard companion)
- **Zero 2 W product brief:** "65mm × 30mm"; 2.4 GHz 802.11b/g/n and Bluetooth 4.2; "H.264 encode (1080p30)"; CSI-2 camera connector; input "5V DC 2.5A". — [Raspberry Pi Zero 2 W product brief](https://datasheets.raspberrypi.com/rpizero2/raspberry-pi-zero-2-w-product-brief.pdf)
- **Camera Module 3 product brief:** Sony IMX708, "25 × 24 × 11.5mm". — [Camera Module 3 product brief](https://datasheets.raspberrypi.com/camera/camera-module-3-product-brief.pdf)
- **ArduPilot DroneEngage docs:** "For video streaming, use the Raspberry Pi Zero 2 W at only 52.2g (1.84 oz) including camera and OTG cable". The Zero 2 W or Pi 4 is recommended "for combined telemetry and video streaming". — [DroneEngage hardware](https://cloud.ardupilot.org/de-hw_2.html)
- **Latency (search summary of several pages; weak):** GStreamer/picamera2 H.264 over UDP is "consistently under 300ms", and around 200 ms over Wi-Fi to a laptop. — [Arducam forum](https://forum.arducam.com/t/streaming-options-pi02w-imx462/8071); [Hackaday](https://hackaday.com/2017/09/12/video-streaming-like-your-raspberry-pi-depended-on-it)
- **Prices (6 Oct 2026):**

  | Item | Store | Price | Stock |
  |---|---|---|---|
  | Pi Zero 2 W | Pakronics | A$24.00 ex-GST (≈A$26.40 inc.) | out of stock |
  | Pi Zero 2 WH | Pakronics | A$28.80 ex-GST | out of stock |
  | Camera Module 3 | Pakronics | A$40.00 ex-GST (≈A$44.00 inc.) | out of stock |
  | Camera Module 3 | PiAustralia | A$48.55 | in stock |
  | "Raspberry Pi Camera Module" | PiAustralia | A$19.55 | in stock |

  - Sources: [Pakronics Zero 2 W](https://www.pakronics.com.au/products/raspberry-pi-zero-2-w-rpi-sc1176); [Pakronics Camera Module 3](https://www.pakronics.com.au/products/raspberry-pi-camera-module-3-rpi-sc1223); [PiAustralia Camera Module 3](https://raspberry.piaustralia.com.au/products/raspberry-pi-camera-module-3); [PiAustralia camera](https://raspberry.piaustralia.com.au/products/raspberry-pi-camera-module)
- **Flown precedents:**
  - CogniFly streams Pi camera frames to the laptop (`cf.stream(fps=24)`; `cf.get_frame()` returns an OpenCV image) on a 3-inch, 3S, <250 g quad. — [cognifly-python](https://github.com/thecognifly/cognifly-python)
  - A RubyFPV build runs the Zero 2 W "inside the canopy" as the digital video air unit (search summary). — [bertfpv](https://www.bertfpv.com/posts/bert-rc-controller-and-rubyfpv-quad/)

### Inferences
- **Analog + UVC is the default for a ≤100 g phone-flown drone feeding laptop AI.**
  - Weight cost is about 3 g.
  - The laptop sees a webcam, so no network setup or GStreamer build is needed.
  - Video does not share the 2.4 GHz Wi-Fi that carries phone or Python control, which matters on ESP32 drones where control is Wi-Fi UDP.
  - Downsides: SD resolution, analog noise and roughly 100 ms+ latency. That is fine for detection and tracking, but marginal for fast closed-loop visual control.
- **OpenIPC gives the best image and latency** but only on 3-inch-plus multi-cell builds, since WiFiLink2 weighs 30 g and needs 9–30 V. In APFPV mode the laptop would be the single receiver, so the phone could not also view video.
- **ESP32-S3 cameras suit only very low-resolution experiments.** On a Flix-type drone they share the flight MCU's Wi-Fi. A separate camera MCU on its own network forces the laptop to sit on two networks.
- **A Pi Zero 2 W only pays off if onboard compute or MAVLink routing is wanted.** It is too heavy for a 65–75 mm whoop and adds about 100–200 ms more latency than analog.

### Gaps
- No measured end-to-end latency (glass-to-OpenCV) was found for UVC analog receivers on a laptop, ESP32-S3 MJPEG into OpenCV, or a Pi Zero 2 W H.264 stream into OpenCV.
- No published bare weight was found for the Pi Zero 2 W, the Camera Module 3 or the XIAO ESP32S3 Sense; the product briefs give only dimensions.
- Not documented: whether specific AliExpress UVC receivers enumerate as standard UVC on Linux (V4L2) and macOS. Only the Windows claim (retailer) was found.
- Not established: whether the BetaFPV M01 or Cetus Lite AIO runs directly from a 1S brushed drone's supply (input voltage not retrieved).

## 4. For each route: realistic parts list with approximate AUD prices, all-up weight, setup/tuning needed for stable flight, and evidence that it works (plus the most proven overall path and an honest difficulty rating)

### Takeaway
No single documented printed build meets all the requirements out of the box: printed frame, phone flight, onboard height hold, indoor position hold, laptop camera feed and Python. The trade-off within A$250:

| Route | Total (approx.) | Frame | Holds | Python | Core-flight tinkering |
|---|---|---|---|---|---|
| LiteWing + positioning module + analog AIO camera + laptop UVC receiver | A$237–321 | FR4 PCB, not printed; printing limited to guards, legs and mounts | Height hold onboard from the Android app; position hold as a documented laptop-Python dead-reckoning loop | cflib | Lowest of the hold-capable options |
| Flix printed + VL53L1X + PMW3901 + analog AIO + UVC | A$186–223 | Fully printed | Must be built from RoboCamp prototypes and your own flow code | pyflix | High |
| ArduPilot 2–2.5" printed (GN745 + MTF-01 + DroneBridge + analog + UVC + ELRS radio) | A$410–500 | Printed | Mature firmware features | pymavlink | Substantial tuning and setup; no small printed flow precedent |
| INAV and Betaflight | — | — | Not credible for GPS-free indoor position hold (INAV) or no flow position hold at all (Betaflight) | — | — |

### Cited Findings
(Prices are from the sources below or the cited prior notes. Overseas prices are converted at 1.4411 and exclude GST and shipping unless noted.)

#### Route A: LiteWing + positioning module (PCB frame) + analog camera to laptop
- **LiteWing + positioning module** from Tindie, shipped from India with combined shipping: A$190.23, or A$209.25 with 10% GST. If two first-item shipping rates apply: A$211.84 / A$233.03. No battery included (prior notes). — [Tindie LiteWing](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/); [Tindie module](https://www.tindie.com/products/semicon_lab/litewing-drone-positioning-module/)
- **Battery: 1S MX2.0 ≥20C** (prior notes):
  - AliExpress 952540 1000 mAh 25C at AU$4.40–6.62; delivery to Australia unverified. — [AliExpress](https://www.aliexpress.com/item/4001344912951.html)
  - Or Phaser GNB 850 mAh 1S A30 at A$10.95 plus an adapter. — [Phaser](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-850mah-60c-a30-cabled-lipo-battery-long-range)
- **Camera:** BetaFPV M01 AIO US$28.99 (A$41.78), or Cetus Lite camera + VTX US$19.99 (A$28.81). — [BetaFPV M01](https://betafpv.com/products/m01-aio-camera-5-8g-vtx)
- **Laptop UVC receiver:** AU$13.59–37.39 on AliExpress (prior notes). — [AliExpress](https://www.aliexpress.com/item/1005010645563255.html)
- **Weight data:** LiteWing ~45 g without battery and payload "~25 g (with 55 mm propellers)" ([LiteWing wiki](https://circuitdigest.com/wiki/litewing/)); module ~8 g ([module wiki](https://circuitdigest.com/wiki/litewing-drone-positioning-module/)); M01 2.72 g ([BetaFPV](https://betafpv.com/products/m01-aio-camera-5-8g-vtx)).
- **Setup:** plug in the module, flash the binary firmware, then use height hold from the app. Position hold uses the PC Python scripts. — [module wiki](https://circuitdigest.com/wiki/litewing-drone-positioning-module/); [position-hold guide](https://circuitdigest.com/microcontroller-projects/litewing-flight-positioning-module-optical-position-hold-guide)
- **Evidence and limits:** the CircuitDigest guides from Oct 2025 and Feb 2026 above give no drift numbers. Height hold works "indoors, but not outdoors" ([height hold guide](https://circuitdigest.com/articles/how-to-use-height-hold-mode-in-litewing)). Users report UDP loss and drift (issues #18 and #12 above).

#### Route B: Flix (printed) + VL53L1X + PMW3901 + analog camera
- **Flix local-first basket ≈A$101.70** plus Phaser and AliExpress shipping (prior notes). It covers an ESP32-S3-Zero, GY-91, MOSFETs, 4× MMW CL-0820-15 8520 motors, Gemfan 65 mm props and 2× GNB 850 mAh packs. — [prior notes sources: Core](https://core-electronics.com.au/esp32-s3-mini-development-board-retired.html), [Phaser](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-coreless-brushed-motor)
- **Sensors (prior notes):**
  - VL53L1X: PiicoDev at Core A$20.75 ([Core](https://core-electronics.com.au/piicodev-laser-distance-sensor-vl53l1x.html)) or AliExpress AU$11.49–12.39.
  - PMW3901 CJMCU-3901 on AliExpress: AU$10.49 sale / AU$20.98 regular ([AliExpress](https://www.aliexpress.com/item/1005011822845593.html)).
  - Core's Pimoroni PMW3901 (A$50.35) is out of stock.
- **Camera** as in Route A: A$28.81–41.78 plus UVC AU$13.59–37.39.
- **Weight data:** a QX95-frame Flix weighs 66 g with a 1050 mAh battery ([Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)). MMW CL-0820-15 motors give "max. thrust: 40g" each (prior notes) ([Phaser](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-coreless-brushed-motor)).
- **Setup for basic flight:**
  - Solder modules and MOSFETs; set IMU orientation; calibrate.
  - "Motors should be installed very tightly".
  - Battery must supply about 15 A.
  - Sources (prior notes): [Flix assembly](https://github.com/okalachev/flix/blob/master/docs/assembly.md); [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md)
- **Holds:** the user must add them (RoboCamp code as a reference; section 1.5).

#### Route C: ESP-Drone firmware on a printed frame with loose PMW3901 + VL53L1X
- **Sensor set (prior notes):** ≈A$48.93 mostly local, or ≈AU$27.09 all-AliExpress (VL53L1X + CJMCU-3901 + GY-63 MS5611). Electronics as in the Flix basket.
- **Evidence:** none. The prior report found no documented ESP-Drone build on loose modules, and Espressif's own flow integration has open bugs #102 and #107 (section 1.1).

#### Route D: ArduPilot 2–2.5" printed brushless (GN745 class) + MTF-01
- **Parts (6 Oct 2026 prices):**

  | Item | Price | Source |
  |---|---|---|
  | Flywoo GN745 40A AIO | A$119.95 (in stock) | [Buzz](https://buzzfpv.com.au/products/goku-gn-745-40a-aio-bl_32-mpu6000-25-5-x-25-5) |
  | 4× BetaFPV 1103 motors | A$63.96 | [Phaser](https://phaserfpv.com.au/products/betafpv1103brushlessmotors1pc) |
  | RadioMaster RP1 V2 ELRS receiver | A$31.31 (prior notes) | [Phaser](https://phaserfpv.com.au/products/radiomaster-expresslrs-rp1-24ghz-nano-receiver) |
  | MTF-01 with flat shipping | US$22.90 + US$5 ≈ A$40.21 | [MicoAir](https://micoair.com/?p=2191); [MicoAir store API](https://store.micoair.com/wp-json/wc/store/products?search=mtf&per_page=10) |
  | ESP32-C3 SuperMini for DroneBridge (phone QGC + laptop pymavlink over Wi-Fi) | A$8.99 (prior notes) | [Rising Sun](https://risingsunfpv.com.au/products/esp32-c3-development-board-esp32-supermini-development) |
  | 2× Tattu 2S 450 mAh | A$25.90 | [Next](https://www.nextfpv.com.au/products/tattu-450mah-2s-75c-lipo-battery-pack) |
  | BetaFPV M01 AIO camera | ≈A$41.78 | [BetaFPV](https://betafpv.com/products/m01-aio-camera-5-8g-vtx) |
  | UVC receiver | AU$13.59 | [AliExpress](https://www.aliexpress.com/item/1005010645563255.html) |
  | BetaFPV LiteRadio 3 ELRS, delivered | ≈A$61.95 (prior notes) | [BetaFPV](https://betafpv.com/products/literadio-3-radio-transmitter) |

  - Computed sum: **≈A$407.64**, plus props, a small I²C compass (not priced) and four or more shipping charges.
  - A 2S-capable charger adds about A$94.90 if needed: ISDT 608PD A$59.95 plus a 65 W PD supply A$34.95 (prior notes). — [Phaser 608PD](https://phaserfpv.com.au/products/isdt-608pd-smart-charger-usb-c-140w-dc-240w)
- **Alternative FC:** MicoAir743v2-AIO-35A at US$64.99 + US$5 ≈ A$100.86 ([MicoAir store](https://store.micoair.com/wp-json/wc/store/products?search=743&per_page=10)). The ArduPilot hwdef list shows a "MicoAir743-AIO" target; a separate v2-AIO target was not seen ([hwdef list](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef)).
- **Weight data:** the GN745 ArduWhoops weigh 72–76 g with GPS and telemetry ([iq_arduwhoop](https://github.com/Intelligent-Quads/iq_arduwhoop); [Fujikawa thread](https://discuss.ardupilot.org/t/arduwhoop-smallest-ardupilot-platform-72g-micro-arducopter-with-flywoo-f745-aio-85mm-frame/85281)); MTF-01 adds 4.5 g ([MicoAir](https://micoair.com/?p=2191)).
- **Setup reported** ([iq_arduwhoop](https://github.com/Intelligent-Quads/iq_arduwhoop); [ArduPilot flow setup](https://ardupilot.org/copter/docs/common-optical-flow-sensor-setup.html); [Discourse](https://discuss.ardupilot.org/t/unable-to-get-position-estimate-with-optical-flow/124000)):
  - DFU flashing, BLHeli passthrough to fix motor direction, and gyro/accel/compass/ESC calibrations.
  - Copying a tuned parameter file, with substantial PID and vibration tuning on whoops.
  - Flow calibration (`FLOW_FXSCALER`), EKF source parameters and setting the EKF origin.
  - Forum advice is to get GPS Loiter working before flow.

#### Route E: CogniFly-style printed 3" with INAV fork, flow and Pi
- **BOM and evidence:** section 2.5 ([CogniFly-STL](https://github.com/thecognifly/CogniFly-STL); [cognifly-python](https://github.com/thecognifly/cognifly-python)).
- **Partial 2026 AUD pricing:**
  - Matek 3901-L0X A$43.95–44.95 (Australian stock out) or MTF-01 ≈A$40.21.
  - Pi Zero 2 W ≈A$26.40 (out of stock) plus Camera Module 3 A$48.55.
  - 1404 motors ≈A$91.80 for 4 (prior notes) ([Buzz](https://buzzfpv.com.au/products/speedybee-1404-4600kv-motor-bee25-2-5-inch-fpv)).
  - 3S 450 mAh A$16.95 each; RP1 V2 A$31.31; radio ≈A$61.95.
  - The F7 Mini FC and 4-in-1 ESC were not priced.

### Inferences
**Core-flight tinkering rating, judged from the evidence above** (1 = none beyond assembly; 5 = writing or porting flight-control code):

| Route | Rating | Reasons | Approx. cost | Est. AUW |
|---|---|---|---|---|
| A: LiteWing + module | **2/5** | Ready-to-fly; binary firmware flash; onboard height hold from the phone; position hold is laptop-side and drifts by design; known UDP and drift issues; PCB frame | A$237–321 | 67–80 g (inference) |
| B: Flix + sensors | **4–5/5** | Basic flight needs careful assembly and calibration; both holds must be added in firmware (RoboCamp prototypes exist); best printed frame, Python library and Android phone flight | A$186–223 + shipping | ≈75–80 g (inference) |
| C: ESP-Drone DIY + flow | **5/5** | No working precedent; open upstream bugs | ≈A$130–150 + camera | similar to Flix |
| D: ArduPilot 2–2.5" + MTF-01 | **3–4/5** | No new code, but small-copter tuning, compass/EKF-origin/flow calibration, and no printed small flow precedent; strongest long-term features (Loiter, GUIDED velocity from pymavlink, QGC Android, outdoor flow to 5 m in daylight with MTF-01) | ≈A$410–500 | ≈80–85 g (inference) |
| E: CogniFly replica | **4/5** | Documented, but a 2019-era INAV fork and discontinued boards | over A$420 (inference) | <250 g (documented) |

- **The most proven path to "holds + Python + Android phone" under A$250 is not printed:** it is LiteWing with its positioning module, with an analog AIO camera and laptop UVC receiver for OpenCV.
- **If a printed frame is mandatory**, Flix is the most proven printed platform, but reaching hold capability means core-flight development. That is exactly the tinkering the user wants to avoid.
- **The ArduPilot brushless path has the most mature hold features, but fails the brief on two counts:**
  - The budget roughly doubles.
  - Brushless props indoors on a printed whoop without a radio backup conflicts with ArduPilot's own advice.
- **Benchmarks outside the "printed" constraint** (from earlier notes): StampFly (A$129.95; POS_HOLD in its 2026 ecosystem firmware; Python via a Tello-SDK-style API; no camera or official phone app) and Crazyflie 2.1+ with Flow deck v2 (≈A$425 before shipping). These are the reference points for "holds that just work", but neither has a printable frame.

### Gaps
- None of the routes' all-up weights were measured by a builder with the exact proposed sensor and camera combination. The AUW figures above add component weights to documented base weights.
- Unpriced items: the small compass for Route D, 2–2.5" props, the F7 Mini FC for Route E, and shipping from Tindie, BetaFPV, MicoAir and AliExpress in combination.
- Live stock changes quickly: several items were out of stock on 6 Oct 2026, including the BetaFPV F4 1S AIO V3, Pi Zero 2 W at Pakronics, all Australian 3901-L0X listings and the Skydroid UVC at Buzz.
- Core Electronics prices could not be re-checked on 6 Oct 2026 (Cloudflare 403), so 5 Oct values are used.
- No head-to-head test exists of indoor hold quality (drift per minute) between LiteWing's PC-side hold, ArduPilot flow Loiter and INAV opflow POSHOLD at this size.
