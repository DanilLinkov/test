# Flix drone project: start here

This folder and [`../research_notes`](../research_notes) hold the research and the build plan for one 3D-printed, phone-controlled drone for AI experiments. The rest of this repository is an unrelated project.

Last updated 11 Oct 2026. Branch: `claude/quirky-mccarthy-vx8omm`.

## The goal

- **Builder and location:** Sydney, NSW, Australia. Owns a Bambu Lab P2S printer (PLA, PETG, TPU 85A, TPU 65D), a soldering station and a multimeter.
- **The drone:** one drone, flown from an Android phone, indoors and outdoors, with no GPS. It should be 3D-printed as far as builders normally print drones, and carry a camera and sensors so it can later fly itself.
- **Budget:** under about A$250. The current plan is A$140 to fly and A$277 with the camera and height sensor.
- **Software:** AI code runs on a laptop in Python. Core flight should use a proven design; experimenting is for the AI part.

## The decision: Flix v1.1

[Flix](https://github.com/okalachev/flix) is an open-source ESP32 quadcopter by Oleg Kalachev. You print the frame, buy standard parts and load the firmware.

- **Hardware:** printed frame, 8520 brushed motors on UMW 100N03A transistors, GY-91 motion sensor (IMU).
- **Phone control:** MAVLink over the drone's own Wi-Fi, flown with the Mavlink Joystick app or QGroundControl's virtual joystick.
- **For autonomy:** a Python library (`pyflix`) and a Gazebo simulator. The firmware does not hold position yet ("planned" upstream).

**Why:**
- Its printed frame is the official one, not a remix.
- Phone flying is documented.
- The Python API suits laptop-side AI.
- It has an active user community: a builds gallery and RoboCamp 2025/2026.

**Also researched:**
- the ESP-FLY kit (Seeed), which was the earlier recommendation
- LiteWing (Semicon Lab)
- ESP-Drone builds
- the Tello
- brushless FPV and ArduPilot GPS builds

The reports and notes below have the details.

## Status and open items

Nothing has been ordered yet. Next: order the parts below, print the frames, then build and fly stage 1.

Open items:
1. **Battery shipping:** confirm AliExpress checkout shows about AU$7.91 shipping for the "3pcs with charger" battery option. It was quoted on the 1-pack option.
2. **ESP32 board:** check its USB connector when it arrives, probably micro-USB.
3. **Camera wedge:** design a small printed wedge that tilts the camera up about 15° (stage 2).
4. **Height hold:** it needs firmware work, because Flix does not read the VL53L1X height sensor.

## Stages

1. **Build it and fly it from the phone.**
2. **Add the camera and height sensor.** Video goes to the phone, and the same USB receiver works as a webcam on the laptop.
3. **Make it fly itself.** Python on the laptop reads video and telemetry with pyflix and sends attitude commands in AUTO mode.

## Parts (recommended picks, prices checked 8–9 Oct 2026, AUD incl. GST)

| Part | Qty | Pick | Store | A$ |
|---|---|---|---|---|
| ESP32 Mini board | ×1 | Wemos Mini D1 ESP32 (seller auscomtech, QLD, 99.8% of 7,001 ratings) ([link](https://www.ebay.com.au/itm/275998572656)) | eBay AU | 15.80 |
| GY-91 motion sensor | ×1 | GY-91 MPU9250 + BMP280 ([link](https://www.aliexpress.com/item/1005012661642808.html)), incl. AU$5.68 tracked shipping | AliExpress | 13.45 |
| UMW 100N03A transistors | ×4 (sold in 5s) | UMW 100N03A, pack of 5 (C668200) ([link](https://www.lcsc.com/product-detail/C668200.html)) | LCSC | 1.44 |
| 10 kΩ resistors | ×6 | 10 kΩ 0.25 W × 6 ([link](https://core-electronics.com.au/resistor-10k-ohm-025-watt-pth.html)) | Core Electronics | 0.60 |
| 5 V boost converter | ×1 | Pololu U3V9F5 (0.4 g) ([link](https://core-electronics.com.au/pololu-5v-step-up-dc-dc-boost-converter-voltage-regulator-u3v9f5.html)) | Core Electronics | 5.80 |
| M3 × 5 mm screws | ×2 | DFRobot M3 × 5, 10 sets ([link](https://core-electronics.com.au/10-sets-m3-5-mounting-screws.html)) | Core Electronics | 1.27 |
| M1.4 × 5 mm screws | ×4 | M1.4 × 5 micro screws, 5 pcs (Port Macquarie NSW) ([link](https://www.ebay.com.au/itm/363001545559)) | eBay AU | 2.85 |
| Thin silicone wire | red + black | 26 AWG silicone, 2 m red + 2 m black ([link](https://core-electronics.com.au/silicone-cover-stranded-core-wire-2m-26awg-red.html)) | Core Electronics | 4.55 |
| Double-sided foam tape | a few pads | EVA foam pads 23 × 12 × 1 mm × 4 ([link](https://core-electronics.com.au/pad-adhesive-2-side-eva-foam-23x12x1mm.html)) | Core Electronics | 2.20 |
| Motors: 8520, 3.7 V, 1 mm shaft | 2 CW + 2 CCW | Micro Motor Warehouse CL-0820-15 × 4 ([link](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-coreless-brushed-motor)) | Phaser FPV | 27.80 |
| Props: 65 mm, 1 mm hole | 2 sets | Gemfan 65 mm 2-blade, 2 packs ([link](https://phaserfpv.com.au/products/gemfan-65mm-2-blade-propellers)) | Phaser FPV | 2.90 |
| Batteries: 1S LiPo | ×3 | LW 952540 1000 mAh 25C × 3 + 5-port USB charger, "3pcs with charger" option ([link](https://www.aliexpress.com/item/1005007341566219.html)), incl. AU$7.91 tracked shipping | AliExpress | 24.42 |
| Battery lead for the drone | ×1 | MX2.0 2-pin leads, 5 male + 5 female (seller in Melbourne) ([link](https://www.ebay.com.au/itm/800576027301)) | eBay AU | 12.38 |
| Battery charger | ×1 | The USB charger in the battery set | — | 0.00 |
| LiPo safety bag | ×1 | LiPo safety bag, 23 × 30 cm ([link](https://core-electronics.com.au/lipo-battery-safety-bag-23x30cm.html)), price from 5 Oct | Core Electronics | 7.05 |
| Camera + video receiver (stage 2) | set | EWRF TX04 25 mW camera + UVC OTG receiver set ([link](https://rcdrone.top/products/ewrf-5-8g-48ch)) | rcdrone.top | 98.41 |
| Height sensor VL53L1X (stage 2) | ×1 | Pololu VL53L1X carrier (13 × 18 mm, 0.5 g) ([link](https://core-electronics.com.au/vl53l1x-time-of-flight-distance-sensor-carrier-with-voltage-regulator-400cm-max.html)) | Core Electronics | 38.40 |

**Shipping:**

| Store | Shipping |
|---|---|
| Phaser FPV | A$8.45 |
| Core Electronics | A$6.25 |
| LCSC | about A$3.18 |
| eBay sellers above | free |
| rcdrone.top | free |

**Totals:** A$140.39 to fly (drone parts plus shipping), A$277.20 with the camera and height sensor.

**AliExpress prices:** they include the 10% GST added at checkout. Shipping is included only where it was checked: the GY-91 and the batteries.

**Fast local alternative:** Phaser FPV's GNB 850 mAh 60C A30 packs (3 for A$32.85). Use them with an A30 lead and an A30 charger such as the ViFly WhoopStor V3 (A$54.99).

The interactive page lists every alternative store.

**Not on the list (already owned or common):**
- solder with flux
- a PH00 screwdriver
- heat-shrink or tape
- a USB data cable for the ESP32
- a USB phone charger for the battery charger
- the laptop and Android phone

No radio controller is needed.

## Print

Files are in Flix's [`docs/assets`](https://github.com/okalachev/flix/tree/master/docs/assets). Print in PLA with a 0.4 mm nozzle, 0.2 mm layers, 0.4 mm line width and 100% infill.

| Part | File | Qty |
|---|---|---|
| Frame (about 16 g) | `flix-frame-1.1.stl` | 3 (1 + 2 spares) |
| ESP32 holder (about 2 g) | `esp32-holder.stl` | 1 |
| Washers for the IMU screws | `washer-m3.stl` | 2 |
| Camera wedge, about 15° | not designed yet | 1 |

## Wiring

GPIO numbers are from the Flix README. Board pin labels vary.

**Power:**
- Battery + goes to the boost converter VIN and to every motor's + wire.
- Battery − goes to the boost converter GND, the ESP32 GND and every transistor's source.
- The boost converter's 5 V output goes to the ESP32 VCC pin.
- **Optional voltage reading:** two 10 kΩ resistors in series across the battery, with the middle point to GPIO32. Set `PWR_VOLT_PIN 32`; the scale stays at its default of 2.

**GY-91 (SPI):**

| GY-91 pin | ESP32 pin |
|---|---|
| GND | GND |
| 3.3V | 3.3V |
| SCL | GPIO18 |
| SDA | GPIO23 |
| SAO | GPIO19 |
| NCS | GPIO5 |

**Each motor:**
- Motor + goes to battery +.
- Motor − goes to the transistor's drain (the tab).
- The source goes to battery −.
- The gate goes to the GPIO.
- A 10 kΩ resistor connects the gate to the source.

| Motor | Position | Spin | Wires (+ / −) | Prop | GPIO |
|---|---|---|---|---|---|
| 0 | Rear left | CCW | white / black | B | 12 |
| 1 | Rear right | CW | red / blue | A | 13 |
| 2 | Front right | CCW | white / black | B | 14 |
| 3 | Front left | CW | red / blue | A | 15 |

**Stage 2:**
- **VL53L1X:** VIN → 3.3V, GND → GND, SDA → GPIO21, SCL → GPIO22. Flix doesn't use these pins.
- **EWRF TX04 camera:** red to battery +, black to battery −. It runs on 2.5–5.5 V, so no converter is needed.

## Layout

See [Flix camera and sensor layout.png](Flix%20camera%20and%20sensor%20layout.png). It is drawn to scale from the frame STL.

- **Front:** the end with motors 2 and 3.
- **Camera:** on a printed wedge at the front of the ESP32 holder, tilted up about 15°, with the antenna up and back.
- **Height sensor:** under the rear-right arm, window facing down.
- **Battery:** sits in the cradle under the frame, between its side walls. The pack is 40 × 25 × 9.5 mm, and its ends stick out 4.5 mm at the front and back.

## Firmware and first flight

1. **Flash the firmware.** Flash [`flix.esp32.merged.bin`](https://quadcopter.dev/flix.esp32.merged.bin) with the [ESP32 Web Flasher](https://www.espboards.dev/tools/program/), flash address 0.
   - Windows may need the Silicon Labs CP210x driver.
   - To build it yourself in Arduino IDE instead: board WEMOS D1 MINI ESP32, ESP32 core 3.3.10, libraries FlixPeriph and MAVLink 2.0.33.
2. **Connect.** Join the drone's Wi-Fi `flix` (password `flixwifi`) and open QGroundControl. The console is under Analyze Tools → MAVLink Console.
3. **Set the IMU model.** `IMU_MODEL` defaults to -1 (not set) on classic ESP32 builds. Run `p IMU_MODEL 1` (MPU-9250, the GY-91's chip), then `reboot`. After that, `imu` should show `status: OK` at about 1000 Hz.
4. **Calibrate.** Run `ca` to calibrate the accelerometer, then check that QGroundControl's horizon follows the drone.
5. **Test the motors.** With the props off and the drone on battery power (never USB), run `mfr`, `mfl`, `mrl`, `mrr`.
6. **Fit the props.** A props go on the red/blue motors, B props on the white/black motors.
7. **Fly from the phone.** Use [Mavlink Joystick](https://github.com/goldarte/mavlink-joystick/releases/latest), or QGroundControl's Virtual Joystick with Auto-Center Throttle off.
   - **Arm:** left stick to the bottom right. **Disarm:** bottom left.
   - **Mode:** STAB holds attitude, not position.
   - **Gentler sticks:** lower `CTL_ATT_MAX` (default 0.52 rad), for example to 0.3.

## Python and AI

`pip install pyflix`. With the laptop on the `flix` Wi-Fi:
- `Flix()` connects to the drone.
- `flix.wait('attitude_euler')` and `flix.voltage` read telemetry.
- `flix.set_mode('AUTO')` with `flix.set_attitude([roll, pitch, yaw], thrust)` flies from code.

Position and velocity targets are not implemented yet. The video receiver shows up as a UVC webcam on Windows 10 and Linux, so OpenCV's `cv2.VideoCapture` can read it.

First projects:
- height hold with the VL53L1X, which needs a firmware change
- following a coloured object
- trying code in the Gazebo simulator first

## Batteries and shipping

- **Delivery:** AliExpress delivers loose 1S LiPos to Sydney, checked live on 9 Oct 2026. Pick listings showing "Standard" (YFH Special Standard): tracked, 15–22 days, about AU$6.62–7.91. Avoid "Seller's Shipping Method", which quoted 60 days with no tracking.
- **Why it's slow:** loose LiPos (UN3480) are barred from passenger aircraft and international air mail. Australian stores ship them by road only, and US stores generally won't send them abroad. Importing them is not prohibited.
- **Charging:** charge at 4.20 V with the set's charger. Never use a 4.35 V (LiHV) charger such as BetaFPV's 6-port.
- **Polarity:** check the MX2.0 lead against a pack with a multimeter before soldering.

## Rules for flying in Sydney (under 250 g, recreational)

- **Paperwork:** no registration or licence.
- **Every flight:**
  - Keep the drone in your own sight.
  - Stay below 120 m and fly in daylight only.
  - Keep 30 m from people and never fly over crowds.
- **Near airports (within 5.5 km of Sydney, Bankstown, Camden or Western Sydney):** stay below 45 m, outside the approach and departure paths, and off airport land. Check a CASA-verified app such as OpenSky.
- **Banned areas:**
  - Sydney Harbour restricted areas
  - Greater Sydney Parklands (Centennial Park, Parramatta Park and others)
  - Botanic Gardens land
  - City of Sydney land
  - NSW national parks without written approval
- **Allowed:** indoors, private land with permission, MAAA club fields. FPV (flying by the video feed) outdoors is allowed only at MAAA fields, with an observer.
- **Video transmitter:** 25 mW EIRP, channels inside 5,725–5,875 MHz.

## Files

- **[Flix build guide.html](Flix%20build%20guide.html):** the current plan as an interactive page, with store choices and live totals. GitHub shows its source, so download it and open it in a browser.
- **[Flix camera and sensor layout.png](Flix%20camera%20and%20sensor%20layout.png):** the placement diagram.
- **[3D printed phone drones Sydney prices.md](3D%20printed%20phone%20drones%20Sydney%20prices.md):** Sydney report with prices and the detailed rules. It predates choosing Flix and recommends the ESP-FLY kit as a first drone.
- **[3D printed phone controlled drones.md](3D%20printed%20phone%20controlled%20drones.md):** the first, worldwide survey of printable phone-controlled drones.
- **[Sydney phone drone guide.html](Sydney%20phone%20drone%20guide.html):** both reports as one HTML page.
- **[research_notes](../research_notes):** sourced research notes, one folder per question:
  - `3D printed phone controlled drones`: designs, materials, parts and regulations worldwide
  - `3D printed phone drones Sydney prices`: Australian prices, tools and NSW rules
  - `Printed phone drone for AI experiments`: popularity, alternatives and the Tello route
  - `Flix shopping list Sydney`: per-part store comparisons for the Flix build
  - `LiPo battery shipping to Australia`: AliExpress checks, store policies, eBay listings and the rules

Prices and stock change often. Treat them as of the dates given.
