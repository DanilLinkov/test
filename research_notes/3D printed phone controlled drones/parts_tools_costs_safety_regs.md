# Non-printed shopping list, tooling, budget, battery safety and legal requirements for a phone-flown DIY drone (October 2026)

Context for the report writer: the builder owns a Bambu Lab P2S, PLA, PETG, TPU 85A and TPU 65D, and a soldering station. They are new to drones and want to fly from a phone, either through a WiFi/BLE app or a phone ground-station app. Four drone classes are covered: (1) 1S micro brushed ESP32, (2) 1S–2S brushless micro/whoop, (3) 3"–5" brushless, (4) GPS/autonomous 5"–7".

Method note: unless another date is given, the retailer prices below were read from each store's live product listing (Shopify storefront JSON) on 2026-10-05. Prices on RaceDayQuads (RDQ), Pyrodrone, NewBeeDrone (NBD), BetaFPV, Holybro and Bitcraze are in USD. Prices on Unmanned Tech, The Pi Hut and Pimoroni are in **GBP** and prices on CNC Kitchen are in **EUR**. The currency of each store was checked through its `/meta.json`, which returned USD for RDQ and Holybro, GBP for Unmanned Tech, The Pi Hut and Pimoroni, and EUR for CNC Kitchen. "OOS" means out of stock when checked. The web-search quota ran out partway through, so later facts come from direct page fetches. The CASA (Australia), ACMA and Ofcom pages returned errors (HTTP 503 or 403) and could not be read, and this is flagged wherever it matters.

## 1. What each component category is, and what to buy for each class

### Takeaway
Two kinds of build exist. **Class 1** uses a single ESP32 board that runs the flight software, talks WiFi/BLE to the phone and drives four coreless motors through MOSFETs; ESP-Drone and LiteWing are examples, and the IMU is usually an MPU6050. **Classes 2–4** use hobby flight-controller ecosystems: AIO whoop boards, F405/F722/H743 stacks, Bluejay/AM32 ESCs, ExpressLRS and M10 GPS. These are not phone-native, so phone flying needs a bridge. Classes 2–3 need an ESP32 WiFi/ESP-NOW link or an ordinary radio. Class 4 needs a MAVLink link to QGroundControl on Android. For the IMU, the ICM‑42688‑P is now the standard. Avoid the MPU6050 on serious builds because it is I2C-only, but it is still used by the ESP32 teaching drones.

### Cited Findings

**Flight controller / microcontroller**
- Class 1 reference designs. ESP-Drone is Espressif's open-source drone for ESP32, ESP32-S2 and ESP32-S3, "controlled by a mobile APP or gamepad over Wi‑Fi". Its code is ported from Crazyflie (GPL3.0). Height-hold and position-hold need extension boards. Espressif has offered only "limited support" since December 2022. — [ESP-Drone README](https://raw.githubusercontent.com/espressif/esp-drone/master/README.md)
- The ESP32-S2-Drone V1.2 bill of materials has these parts:
  - main board with ESP32‑S2‑WROVER and MPU6050
  - 4× 716 coreless motors (720 optional)
  - 46 mm A/B props (55 mm optional)
  - 300 mAh 1S LiPo (350 mAh optional)
  - The MPU6050 sits on I2C0.
  — [ESP-Drone hardware reference](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)
- The CircuitDigest ESP32 drone is a custom PCB that also serves as the frame. Its BOM:
  - ESP32‑WROOM module and MPU6050
  - MIC5219‑3.3 LDO
  - AO3401 P‑MOSFET and 2N7002DW dual N‑MOSFET
  - 4× SI2302 N‑MOSFET motor drivers, each with a flyback diode and pulldown resistor
  - 720 coreless motors and 55 mm props
  - 1S 1300 mAh 30C LiPo

  CircuitDigest quotes a build cost of "$30‑50", a 6–8 h build, about 60 g total weight, 5–7 min flight on 1300 mAh, and WiFi range of 30–50 m in the open and 15–25 m indoors. It drifts in wind above about 5–8 mph. — [CircuitDigest DIY ESP32 drone](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)
- LiteWing, the successor project, uses an ESP32‑S3, 720 coreless motors with MOSFET PWM control, and a 1S LiPo rated 20C or higher. It weighs about 45 g without battery and is flown from an Android or iOS app over WiFi. — [CircuitDigest LiteWing wiki](https://circuitdigest.com/litewing); [LiteWing README](https://raw.githubusercontent.com/Circuit-Digest/LiteWing/main/README.md)
  - A user comment on the LiteWing page reports that the 3.3 V LDO in PCB v2.6 cannot supply enough current when the motors start, and suggests an LDO rated at least 800 mA. This is a user report, not an official statement. — [LiteWing wiki comments](https://circuitdigest.com/litewing)
- ESP-FC is alternative ESP32 firmware that mimics Betaflight. Its README lists:
  - Modules: ESP32 and ESP32‑S3 recommended; ESP32‑S2 experimental; ESP32‑C3 experimental ("lack of performance, no FPU"); RP2040/RP2350 experimental
  - Gyros: MPU6050, MPU6000, MPU6500, MPU9250, ICM20602, ICM42688 and BMI160
  - Barometers: BMP180, BMP280 and SPL06
  - Receivers: PPM, SBUS, IBUS and CRSF/ELRS
  - ESC protocols: PWM, BRUSHED and DShot up to 600
  - A built-in ESP‑NOW receiver and WiFi configuration
  - Compatibility with Betaflight Configurator 10.10
  - Altitude hold and GPS navigation are still on the TODO list.

  — [ESP-FC README](https://raw.githubusercontent.com/rtlopez/esp-fc/master/README.md)
- ESP32 board prices:
  - Seeed XIAO ESP32S3: $7.49 at [Seeed](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) and £7.30 at [The Pi Hut](https://thepihut.com/products/seeed-studio-xiao-esp32s3)
  - Espressif ESP32‑S3‑DevKitC‑1: £28.90 — [The Pi Hut](https://thepihut.com/products/esp32-s3-devkitc-1-development-board)
  - Waveshare ESP32‑S3 board: £9.60 — [The Pi Hut](https://thepihut.com/products/esp32-s3-microcontroller-development-board-1)
  - ESP32‑C3‑WROOM‑02 module: £4.80 — [The Pi Hut](https://thepihut.com/products/esp32-c3-wroom-02-n4-module-pcb-antenna)
  - Olimex ESP32‑C3‑DevKit‑Lipo (has a LiPo charger on board): £6.80 — [The Pi Hut](https://thepihut.com/products/olimex-esp32-c3-devkit-lipo-risc-v-development-board)
- Ready-made phone-flyable reference platform. Bitcraze Crazyflie 2.1+ costs $240. It weighs 29 g, has Bluetooth LE, and "supports flying from iOS and Android". It comes with a 250 mAh LiPo and 7 mm coreless motors. — [Bitcraze store](https://store.bitcraze.io/products/crazyflie-2-1-plus)
  - The Crazyflie 2.1 Brushless costs $480. It has integrated 1‑cell 5 A ESCs running BLHeli_S/Bluejay, 55 mm props, about 10 min of flight on a 350 mAh pack, and a 40 g maximum payload. — [Bitcraze store](https://store.bitcraze.io/products/crazyflie-2-1-brushless)
- Class 2 AIO whoop boards, which combine the FC, ESC and usually ELRS and VTX:
  - **BetaFPV Air 1S Brushless FC**: $44.99 for the 4IN1 and $49.99 for the 5IN1 (5IN1 OOS). STM32G473, ICM42688P gyro on SPI, 5 A ESC running Bluejay, 25–400 mW VTX, serial ELRS 2.4G on the 5IN1. Weighs 2.9 g (4IN1) or 3.6 g (5IN1). — [BetaFPV](https://betafpv.com/products/air-brushless-flight-controller)
  - **BetaFPV Matrix 1S 5IN1 II**: $54.99. 12 A continuous / 18 A peak ESC on Bluejay, ELRS, 400 mW VTX. — [BetaFPV](https://betafpv.com/products/matrix-1s-5in1-ii-brushless-flight-controller)
  - **BetaFPV Matrix 1S 3IN1/4IN1**: $39.99. — [BetaFPV](https://betafpv.com/products/matrix-1s-brushless-flight-controller-hd)
  - **BetaFPV F4 2‑3S 20A AIO**: $54.99. — [BetaFPV](https://betafpv.com/products/f4-2-3s-20a-aio-fc-v1)
  - **Happymodel CrazyF405 ELRS HD 1–2S AIO** (12 A 8‑bit ESC): $65.99. — [RDQ](https://www.racedayquads.com/products/happymodel-crazyf405-elrs-hd)
  - **Happymodel Crazybee V1.0** (G473, 5 A 1S Bluejay, ELRS): $74.99. — [RDQ](https://www.racedayquads.com/products/happymodel-crazybee-v1-0-5-in-1-aio-g473-fc-5a-1s-bluejay-esc-elrs-rx)
  - **Flywoo GOKU F405 V2 1–2S AIO** (12 A): $89.99. — [RDQ](https://www.racedayquads.com/products/flywoo-goku-f405-v2-1-2s-aio-whoop-toothpick-flight-controller-w-12a-blheli_s-4in1-esc-elrs-2-4-ghz)
- Brushed alternative running Betaflight rather than phone-native firmware: **BetaFPV Matrix 1–2S Brushed FC**, $34.99 for the 4IN1 and $39.99 for the 5IN1. STM32G473, BMI270, 12 A continuous brushed ESC, BT2.0 connector, Betaflight 4.5.2. — [BetaFPV](https://betafpv.com/products/matrix-brushed-flight-controller)
- Class 3 stacks (FC plus separate 4‑in‑1 ESC):
  - **SpeedyBee F405 V5 stack** (55 A OX32 ESC, ICM42688P, SPA06 barometer, Bluetooth tuning through the SpeedyBee app): $119.99 standard and $129.49 deluxe, both OOS. — [RDQ](https://www.racedayquads.com/products/speedybee-f405-v5-stack-f405-fc-55a-3-6s-ox32-esc-30x30-standard)
    - In the UK: £74.98 and £84.95, also OOS. — [Unmanned Tech](https://www.unmannedtechshop.co.uk/products/speedybee-f405-v4-bls-55a-flight-stack)
  - **SpeedyBee F405 V4 BLS 55A stack**: $86.49, OOS. — [RDQ](https://www.racedayquads.com/products/speedybee-f405-v4-bls-3-6s-30x30-stack-combo-f405-fc-8bit-55a-4in1-esc)
  - **SpeedyBee F405 Mini BLS 35A 20x20**: £64.90. — [Unmanned Tech](https://www.unmannedtechshop.co.uk/products/speedybee-f405-mini-bls-35a-20x20-flight-stack)
  - **SpeedyBee F405 AIO V2 35–40A**: £54.49. — [Unmanned Tech](https://www.unmannedtechshop.co.uk/products/speedybee-f405-v2-aio-35-40a-3-6s-flight-controller-esc-25-5x25-5mm)
- Class 4 flight controllers (H7, for ArduPilot/INAV):
  - **Matek H7A3‑SLIM** (ICM42688P; 6 UARTs, CAN, 128 MB blackbox, 11 PWM): $77.99. — [RDQ](https://www.racedayquads.com/products/mateksys-h7a3-slim-flight-controller-icm42688p-30x30)
  - **Matek H743 Slim V3**: $116.49, OOS. — [RDQ](https://www.racedayquads.com/products/matek-h743-slim-30x30-flight-controller)
  - **Holybro Kakute H7**: $55–$62. — [Holybro](https://holybro.com/products/kakute-h7)
  - **Kakute H7 v1.5 stack**: $124.99–$149.99. — [Holybro](https://holybro.com/products/kakute-h7-v1-stacks)
  - **Pixhawk 6C Mini**: from $130.99. — [Holybro](https://holybro.com/products/pixhawk-6c-mini)
  - **HDZero Halo H743** (ICM42688, 20x20): $71.49. — [RDQ](https://www.racedayquads.com/products/hdzero-halo-h743-flight-controller-icm42688-20x20)
- MCU choice:
  - Oscar Liang notes that "the slower F405 might actually have an advantage over the faster F722 due to its larger memory capacity" for Betaflight. — [Oscar Liang – flight controller guide, updated 1 Jun 2024](https://oscarliang.com/flight-controller/)
  - ArduPilot says that "Due to flash memory limitations, most F4 based, and some other boards, do not include all ArduPilot features". — [ArduPilot autopilot hardware](https://ardupilot.org/copter/docs/common-autopilots.html)
- AIO boards "aren't as robust as ESCs on separate boards… because they have to use smaller FETs". Stacks are preferred for larger builds. — [Oscar Liang – flight controller guide](https://oscarliang.com/flight-controller/)

**IMU (gyro/accelerometer)**
- Oscar Liang's guidance:
  - "MPU6050 and MPU9150" should be avoided because they "only support i2c and not SPI".
  - The MPU6000 "is no longer in production".
  - The ICM‑42688‑P is now the standard: early 2022–2023 designs had noise issues, but "newer FCs released after 2023 addressed these issues".
  - The BMI270's maximum sampling is 6.4 kHz, and Betaflight forces OSR4, "resulting in an effective sampling rate of just 3.2 kHz".

  — [Oscar Liang – flight controller guide](https://oscarliang.com/flight-controller/)
- TDK lists ICM‑42688‑P gyro noise at 2.8 mdps/√Hz and accelerometer noise at 70 µg/√Hz, with drones as a target application. — [TDK ICM-42688-P](https://invensense.tdk.com/products/motion-tracking/6-axis/icm-42688-p/)
- A secondary source says the MPU‑6000 noise density is about 5 mdps/√Hz versus 2.8 for the ICM‑42688, and the MPU-6000 output data rate is 8 kHz versus 32 kHz. — [pcbsync ICM-42688-P article](https://pcbsync.com/icm-42688-p/) (secondary source)
- **2026 supply caveat.** BetaFPV's Matrix 1S 5IN1 II page says: "Due to the shortage of IMU chip ICM42688, BETAFPV team has found new IMU chips including ICM42622, BMI270, and LSM6DSK320X". It adds that Betaflight "has not yet released official firmwares compatible with some" of them. — [BetaFPV Matrix 1S 5IN1 II](https://betafpv.com/products/matrix-1s-5in1-ii-brushless-flight-controller)
- Counterfeit risk on the MPU6050. A CircuitDigest staff reply to a builder whose I2C link to the MPU6050 kept failing said: "Some duplicate MPU6050 wont work properly at 400KHz." — [CircuitDigest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)
  - The SparkFun MPU‑6050 breakout is marked "[Discontinued]" and the Adafruit MPU‑6050 (£12.50) was OOS at The Pi Hut. — [The Pi Hut](https://thepihut.com/products/sparkfun-triple-axis-accelerometer-and-gyro-breakout-mpu-6050); [The Pi Hut](https://thepihut.com/products/adafruit-mpu-6050-6-dof-accel-and-gyro-sensor-stemma-qt-qwiic)
  - CircuitDigest's Indian BOM prices the MPU6050 at ₹140. — [CircuitDigest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)

**ESCs**
- Brushed classes drive the motors with low-side N‑MOSFETs. CircuitDigest uses an SI2302 per motor with a flyback diode and pulldown, switched by PWM. — [CircuitDigest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)
- BLHeli_S and Bluejay are 8‑bit ESC firmware and can be swapped for each other. Bluejay is favoured: it adds bidirectional DShot and RPM filtering. — [Oscar Liang – BLHeli_32 end](https://oscarliang.com/end-of-blheli_32); [Oscar Liang – identify ESC firmware](https://oscarliang.com/identify-esc-firmware/)
- BLHeli_32 shut down in June 2024. No new firmware or updates will be released, and Oscar says that for new 32‑bit ESCs "AM32 is quickly emerging as the new standard". — [Oscar Liang – End of BLHeli_32 (3 Jun 2024)](https://oscarliang.com/end-of-blheli_32)
- Example 4‑in‑1 ESCs:
  - Skystars KO60II 60 A AM32: $58.49 — [RDQ](https://www.racedayquads.com/products/skystars-ko60ii-60a-3-6s-am32-4-in-1-esc-30x30)
  - TBS Lucid 60 A 8S AM32: $46.49 — [RDQ](https://www.racedayquads.com/products/tbs-lucid-60a-8s-am32-4-in-1-esc)
  - iFlight Blitz Mini E55S 8‑bit 55 A: $44.49 — [RDQ](https://www.racedayquads.com/products/iflight-blitz-mini-e55s-mini-v1-1-8bit-55a-2-6s-20x20-4in1-esc)
  - Flywoo GOKU 35 A 2–4S BLHeli_S 16x16: $41.99 — [RDQ](https://www.racedayquads.com/products/flywoo-goku-quad-v3-35a-2-4s-4-in-1-blheli_s-esc-16x16)

**Motors and KV versus cell count**
- Brushed coreless motors:
  - BetaFPV 7x16 mm 19000KV: 3.7 V, 0.8 mm shaft, 2.95 g, JST1.25 2P; $16.99 per 2CW+2CCW set (OOS) — [BetaFPV](https://betafpv.com/products/7x16mm-19000kv-brushed-motors-2cw-2ccw)
  - BetaFPV 8.5x20 mm 16000KV: $5.99 (OOS) — [BetaFPV](https://betafpv.com/products/8-5x20mm-16000kv-brushed-motors-2cw-2ccw)
  - Generic coreless 4‑packs: 7x16 mm £8.20, 8x16 mm £8.20, 6x10–6x14 mm £5.00–£7.00 — [The Pi Hut](https://thepihut.com/products/4pcs-coreless-micro-motor-7-x-16mm)
  - NBD BDR 6 mm brushed motors: $9.99–$19.99 per listing; 3‑pack $23.99 — [NewBeeDrone](https://newbeedrone.com/products/newbeedrone-bdr-brushed-motor-3-pack)
  - CircuitDigest prices 720 motors plus 55 mm props at ₹266. — [CircuitDigest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)
- 1S brushless whoop motors (BetaFPV 2026 lines, rated 4.2 V / 1S):
  - **0702**: 25000/30000/36000KV, 1.50–1.59 g, 1.0 mm shaft, $39.99–$44.99 — [BetaFPV](https://betafpv.com/products/0702-brushless-motors-2026)
  - **0802**: 22000/25000/28000KV, 1.88–1.95 g, $39.99–$44.99 for a package of 4 — [BetaFPV](https://betafpv.com/products/0802-brushless-motors-2026)
  - **1102**: 21000KV, 2.85 g, 1.5 mm shaft, $39.99 — [BetaFPV](https://betafpv.com/products/1102-brushless-motors-2026)
- KV is chosen to suit the cell count. The BetaFPV 1103 comes in 15000KV for 1S, 11000KV for 2S (3.7–7.4 V) and 8000KV for 3S (3.7–11.1 V). BetaFPV warns: "DO NOT recommend the 1103 11000KV motors for 3S power… the motors will overheat and burn (maybe the ESC)". — [BetaFPV 1103](https://betafpv.com/products/1103-brushless-motors)
- Class 3 motors:
  - EMAX ECO 1404 3700KV / 6000KV: props 2.5"–4", 8.6 g, $16.99 / $15.99 each — [RDQ](https://www.racedayquads.com/products/emax-eco-1404-3700kv-micro-motor); [RDQ](https://www.racedayquads.com/products/emax-eco-1404-6000kv-micro-motor)
  - EMAX ECO II 2207 1900KV / 2400KV: $19.49 each — [RDQ](https://www.racedayquads.com/products/emax-eco-ii-series-2207-1900kv-motor)
  - iFlight Xing‑E Pro 2207 1800KV: $20.49 — [RDQ](https://www.racedayquads.com/products/iflight-xing-e-pro-2207-1800kv-motor)
- Class 4 motors:
  - BrotherHobby Avenger 2806.5 1300KV: "No. of Cells (Lipo): 4–6S", 6–8" props, 41 g, $32.49 — [RDQ](https://www.racedayquads.com/products/brotherhobby-avenger-2806-5-1300kv)
  - FlyFishRC Flash 2806.5 1350KV: $27.49 — [RDQ](https://www.racedayquads.com/products/flyfishrc-flash-2806-5-1350kv-unibell-fpv-motor-black)
  - Foxeer Datura 2806.5 1750KV: $32.49 — [RDQ](https://www.racedayquads.com/products/foxeer-datura-2806-5-1750kv-motor)

**Propellers**
- Whoop props on 1.0 mm shafts:
  - Gemfan 1219S 3‑blade and HQ 31 mm Ultralight: $2.49 — [BetaFPV](https://betafpv.com/products/gemfan-1219s-3-blade-propellers-1-0mm-shaft); [BetaFPV](https://betafpv.com/products/hq-31mm-ultralight-3-blade-propellers-1-0mm-shaft)
  - Gemfan 40 mm 2‑blade: $0.99–$2.50 — [BetaFPV](https://betafpv.com/products/gemfan-40mm-2-blade-propellers-1-0mm-shaft-4pcs)
  - 45 mm: $2.49 — [BetaFPV](https://betafpv.com/products/gemfan-45mm-2-blade-3-blade-propellers-1-5mm-shaft-4pcs)
- Prop size depends on the frame and motor: 31 mm props for 65 mm whoops and 40 mm props for 75 mm whoops. — [Oscar Liang – best tiny whoop (updated Aug 2025)](https://oscarliang.com/best-tiny-whoop/)
- Prices per 4‑pack:
  - 3": HQ T3x1.8x3 $2.99–$3.49; Gemfan 3016 $2.59 — [RDQ](https://www.racedayquads.com/products/hq-prop-headsup-tiny-prop-t3x1-8x3-tri-blade-3-prop-4-pack-2mm-shaft-choose-your-color); [RDQ](https://www.racedayquads.com/products/hq-prop-t3x1-8x3-tri-blade-3-prop-4-pack-2mm-shaft-choose-your-color); [RDQ](https://www.racedayquads.com/products/gemfan-hurricane-3016-durable-tri-blade-3-prop-4-pack-1-5mm-choose-your-color)
  - 5": Gemfan Hurricane 51499 $2.99; HQ Ethix S3 $4.99 — [RDQ](https://www.racedayquads.com/products/gemfan-hurricane-durable-3-blade-51499-propeller-choose-your-color); [RDQ](https://www.racedayquads.com/products/hq-ethix-s3-watermelon-props)
  - 7": HQ 7x4x3 $4.99; Gemfan 7050 $4.49 — [RDQ](https://www.racedayquads.com/products/hq-durable-7x4x3-tri-blade-7-prop-4-pack); [RDQ](https://www.racedayquads.com/products/gemfan-hurricane-7050-durable-tri-blade-7-prop-4-pack-choose-your-color)

**Batteries and connectors**
- PH2.0 "suffers from high resistance". BT2.0 and the GNB A30 perform similarly, and A30‑M batteries fit drones fitted with BT2.0. GNB reverses the usual connector gender naming, which can cause confusion. — [Oscar Liang – A30 connector (2023)](https://oscarliang.com/a30-battery-connector/)
- Oscar says "BT2.0 and A30 connectors are the ideal choices", and LiHV is more energy-dense than LiPo for micros. — [Oscar Liang – best tiny whoop](https://oscarliang.com/best-tiny-whoop/)
- 1S prices:
  - BetaFPV BT2.0 300 mAh 30C 8‑pack: $23.99 — [BetaFPV](https://betafpv.com/products/bt2-0-300mah-1s-30c-battery-8pcs)
  - BT2.0 450 mAh 4‑pack: $14.99 — [BetaFPV](https://betafpv.com/products/bt2-0-450mah-1s-30c-battery-4pcs)
  - BT2.0 550 mAh 4‑pack: $15.99 — [BetaFPV](https://betafpv.com/products/bt2-0-550mah-1s-battery-4pcs)
  - LAVA 1S 450 mAh 75C 4‑pack: $17.99 — [BetaFPV](https://betafpv.com/products/lava-1s-450mah-75c-battery-4pcs)
  - GNB 1S 530–660 mAh A30: $7.99 each — [Pyrodrone](https://pyrodrone.com/products/gaoneng-gnb-1s-550mah-100c-3-8v-hv-li-po-battery-for-whoop-micro-a30-cabled)
  - Pyrodrone Hyperjuice 380 mAh A30: $6.99 each or $50.99 for 10 — [Pyrodrone](https://pyrodrone.com/products/pyrodrone-hyperjuice-380mah-3-8v-1s-60c-hv-a30-plastic-head)
  - RDQ 1S 650 mAh LiHV PH2.0: $8.49 — [RDQ](https://www.racedayquads.com/products/rdq-series-3-8v-1s-650mah-60c-lihv-battery-ph2-0)
- 2S–6S examples:
  - RDQ 2S 450 mAh XT30: $11.49 — [RDQ](https://www.racedayquads.com/products/rdq-series-450mah-2s-fpv-battery-70c-xt30-long-type)
  - RDQ 3S 650 mAh XT30: $15.49–$17.99 — [RDQ](https://www.racedayquads.com/products/rdq-series-11-1v-3s-650mah-80c-lipo-micro-battery-square-type-xt30)
  - CNHL 4S 850 mAh XT30: $23.99 — [RDQ](https://www.racedayquads.com/products/cnhl-ministar-14-8v-4s-850mah-70c-lipo-micro-battery-xt30)
  - RDQ 4S 1500 mAh LiHV: $35.49 — [RDQ](https://www.racedayquads.com/products/rdq-series-15-2v-4s-1500mah-120c-lihv-battery-xt60)
  - CNHL 6S 1300 mAh: $36.49 — [RDQ](https://www.racedayquads.com/products/cnhl-black-series-v2-0-1300mah-22-2v-130c-6s-lipo-battery-xt60)
  - Tattu R‑Line v4 6S 1300 mAh: $53.99 — [RDQ](https://www.racedayquads.com/products/tattu-r-line-version-4-0-22-2v-6s-1300mah-130c-lipo-battery-xt60)
- Li‑ion packs for class 4:
  - Auline 6S 21700 4000 mAh (35 A): $80.99 — [RDQ](https://www.racedayquads.com/products/auline-22-2v-6s-21700-4000mah-35a-li-ion-battery-xt60)
  - Upgrade Energy Amprius 6S 4000 mAh: $119.99 — [RDQ](https://www.racedayquads.com/products/upgrade-energy-green-v2-4000mah-6s-amprius-li-ion-battery-xt60)
  - Upgrade Energy 6S 8000 mAh: $229.99 — [RDQ](https://www.racedayquads.com/products/upgrade-energy-green-v2-8000mah-6s-amprius-li-ion-battery-xt60)
  - Loose Molicel P30B or P28A 18650 cells: $22.99 per 2‑pack — [RDQ](https://www.racedayquads.com/products/molicel-p30b-18650-3000mah-45a-3-7v-li-ion-battery-2pcs)

**Chargers**
- 1S multi-port chargers:
  - BetaFPV HexaCharger: $24.99, or $29.99 for the Pro. Six ports, LiPo/LiHV at 4.2/4.35 V, storage mode at 3.85 V, BT2.0 and PH2.0 ports, USB‑C PD input. — [BetaFPV](https://betafpv.com/products/hexacharger-1s-charger)
  - VIFLY WhoopStor V3: $39.99 at RDQ or $32.99 at NBD. Six ports at 1.3 A per port, storage at 3.80/3.85 V, PH2.0 and BT2.0. — [RDQ](https://www.racedayquads.com/products/vifly-whoopstor-1s-battery-charger); [NBD](https://newbeedrone.com/products/vifly-whoopstor-3-1s-battery-storage-charger-and-discharger)
  - BetaFPV 6‑port 1S charger: $11.99 — [BetaFPV](https://betafpv.com/products/bt2-0-ph2-0-1s-lipo-charger-adapter)
  - BetaFPV BT2.0 charger and voltage tester: $6.99 — [BetaFPV](https://betafpv.com/products/bt2-0-battery-charger-and-voltage-tester-v2)
  - ISDT UC2 USB‑C 1–2S micro charger: $8.99 — [RDQ](https://www.racedayquads.com/products/isdt-uc2-2a-5v-1-2s-usb-c-micro-charger)
  - ViFly ToothStor 2S: $40.99 — [RDQ](https://www.racedayquads.com/products/draft-vifly-toothstor-4-port-2s-balance-charger-with-storage-mode)
- Multi-cell smart chargers:
  - ToolkitRC M4AC (2–4S, 30 W): $35.99 — [RDQ](https://www.racedayquads.com/products/toolkitrc-m4ac-30w-2-5a-2-4s-ac-smart-charger-xt60)
  - ToolkitRC M6AC (1–6S, 300 W): $71.99 — [RDQ](https://www.racedayquads.com/products/toolkitrc-m6ac-300w-15a-1-6s-ac-charger-xt60)
  - ToolkitRC M7AC: $91.49 — [RDQ](https://www.racedayquads.com/products/toolkitrc-m7-ac-200w-15a-2-6s-dc-smart-charger-with-xt60-xt30-plug)
  - ToolkitRC M8AC: $113.99 — [RDQ](https://www.racedayquads.com/products/toolkitrc-m8ac-600w-20a-1-8s-ac-dc-smart-charger-xt60)
  - ISDT 608AC: $77.99 — [RDQ](https://www.racedayquads.com/products/isdt-ac608-200w-ac-60w-dc-8a-2-6s-smart-lipo-charger-w-detachable-ac-power-supply)
  - ISDT 608PD (DC only): $39.99 — [RDQ](https://www.racedayquads.com/products/isdt-608pd-240w-10a-2-6s-dc-smart-charger-black)
  - Matching RDQ 400 W 24 V supply for the 608PD: $59.99 — [RDQ](https://www.racedayquads.com/products/rdq-power-supply-400w-16-7a-24v-plug-and-play-for-isdt-chargers-and-others)
  - HOTA T6 PD: $44.49 — [RDQ](https://www.racedayquads.com/products/hota-t6-pd-15a-1-6s-ac-dc-smart-charger)
  - HOTA D6 Pro: $149.99 — [RDQ](https://www.racedayquads.com/products/hota-d6-pro-dual-channel-325w-15a-ac-dc-battery-charger)
  - SkyRC B6neo: $24.60 on AliExpress in November 2024 — [Oscar Liang – cheapest build](https://oscarliang.com/cheapest-fpv-drone-build/)

**Power distribution**
- XT60 pigtail (14 AWG): $1.99 — [RDQ](https://www.racedayquads.com/products/xt60-pigtail-14awg-4-choose-your-version)
- XT60 pigtail with capacitor: $7.49 — [RDQ](https://www.racedayquads.com/products/all-in-one-capacitor-and-xt60-pigtail-combo-choose-your-version)
- Low‑ESR capacitors: Panasonic 1000 µF 35 V $2.49; 470 µF 35 V $2.49; 1000 µF 50 V $1.99 — [RDQ](https://www.racedayquads.com/products/panasonic-1000uf-35v-low-esr-capacitor-for-noise-reduction); [RDQ](https://www.racedayquads.com/products/panasonic-1000uf-50v-low-esr-capacitor-for-esc-noise-reduction)
- BECs and filters:
  - Matek Micro BEC (6–60 V to 5/9/12 V): $10.99 — [RDQ](https://www.racedayquads.com/products/matek-micro-bec-6-60v-to-5v-9v-12v)
  - Matek BEC12S‑Pro (9–55 V to 5/8/12 V, 5 A): $22.99 — [RDQ](https://www.racedayquads.com/products/matek-bec12s-pro-9-55v-to-5-8-12v-5a)
  - iFlight LC filter: $5.99 — [RDQ](https://www.racedayquads.com/products/iflight-5-36v-3a-lc-filter-module)

**Receivers and radio**
- RadioMaster RP1 V2 ELRS: $24.99. 2.2 g with antenna, ESP8285 and SX1280, CRSF output, WiFi for updates. — [RDQ](https://www.racedayquads.com/products/radiomaster-rp1-v2-2-4ghz-elrs-nano-receiver)
- BetaFPV ELRS Lite: $8.99; ELRS Nano: $9.99. — [BetaFPV](https://betafpv.com/products/elrs-lite-receiver); [BetaFPV](https://betafpv.com/products/elrs-nano-receiver)
- ExpressLRS regulatory-domain builds include AU_915, EU_868, IN_866, FCC_915, ISM_2400 and EU_CE_2400. The docs say "EU Regulatory domains are now LBT compliant!" — [ExpressLRS firmware options](https://www.expresslrs.org/quick-start/firmware-options/)
- Optional handheld radios if phone control proves too limited:
  - BetaFPV LiteRadio 4: $32.99–$44.99 — [BetaFPV](https://betafpv.com/products/literadio-4-radio-transmitter)
  - RadioMaster T8L: $39.99 — [RDQ](https://www.racedayquads.com/products/radiomaster-t8l-expresslrs-radio-controller)
  - RadioMaster Pocket: $71.49–$84.49 — [RDQ](https://www.racedayquads.com/products/radiomaster-pocket-edgetx-rc-transmitter-choose-version)

**Phone link / ground-station hardware**
- QGroundControl has on-screen virtual thumbsticks. QGC notes that "Thumbstick control is not as responsive as using an RC Transmitter (because the information is sent over MAVLink)". — [QGC Virtual Joystick](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html)
- The QGC download page lists Windows, macOS, Linux (Ubuntu 24.04/26.04 AppImage) and Android builds (Android 9 / API 28 or later). No iOS build is listed. — [QGC download & install](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html)
- ArduPilot's telemetry docs list "DroneBridge for ESP32" and "ESP8266 wifi telemetry" as short-range options. — [ArduPilot ESP8266 telemetry](https://ardupilot.org/copter/docs/common-esp8266-telemetry.html)
- Holybro SiK Telemetry Radio V3 (100 mW, 433 or 915 MHz): $58.99. It ships with a "Micro‑USB to Micro‑USB OTG adapter cable" and a Type‑C adapter, and gets "better than 300m" range out of the box. — [Holybro SiK V3](https://holybro.com/products/sik-telemetry-radio-v3)

**Sensors**
- Barometers:
  - The SpeedyBee F405 V5 has an SPA06‑003 barometer onboard. — [RDQ](https://www.racedayquads.com/products/speedybee-f405-v5-stack-f405-fc-55a-3-6s-ox32-esc-30x30-standard)
  - BMP280 breakout: £5.70 — [The Pi Hut](https://thepihut.com/products/fermion-bmp280-digital-pressure-sensor)
- GPS (u‑blox M10):
  - HGLRC M100 Mini: 2.6 g, $21.49 — [RDQ](https://www.racedayquads.com/products/hglrc-m100-mini-gps-module-10th-gen)
  - Holybro Micro M10 with IST8310 compass: 14–16 g, four constellations, $27.99 — [Holybro](https://holybro.com/products/micro-m10-gps)
  - Holybro M10: $43.99 — [Holybro](https://holybro.com/products/m10-gps)
  - Matek M10Q‑5883: $47.99 (OOS) — [RDQ](https://www.racedayquads.com/products/matek-m10q-5883-gnss-compass)
  - iFlight Blitz M10 with compass: $47.99 — [RDQ](https://www.racedayquads.com/products/iflight-blitz-m10-gps-compass-10th-gen)
- Time-of-flight distance (ToF) and optical flow:
  - Adafruit VL53L1X: £12.25 at Pimoroni and £14.40 at The Pi Hut (OOS) — [Pimoroni](https://shop.pimoroni.com/products/adafruit-vl53l1x-time-of-flight-distance-sensor-30-to-4000mm-stemma-qt-qwiic)
  - Holybro VL53L1X: $19.99 (OOS) — [Pyrodrone](https://pyrodrone.com/products/holybro-st-vl53l1x-lidar)
  - Holybro PMW3901 optical flow: $20.59 — [Holybro](https://holybro.com/products/pmw3901-optical-flow-sensor)
  - PMW3901 breakout: £20.70 — [The Pi Hut](https://thepihut.com/products/pmw3901-optical-flow-sensor-breakout)
  - **MicoAir MTF‑01**: optical flow plus 8 m ToF, 4.5 g, auto-detects ArduPilot/PX4 (MAVLink) or INAV (MSP), $32.99 — [Pyrodrone](https://pyrodrone.com/products/micoair-mtf-01-optical-flow-8m-range-2in1-sensor)
  - MTF‑01P (12 m range): $41.99 — [Pyrodrone](https://pyrodrone.com/products/micoair-mtf-01p-optical-flow-12m-range-2in1-sensor)
  - Benewake TF‑Luna LiDAR: $25.99 — [RDQ](https://www.racedayquads.com/products/benewake-tf-luna-lidar)
  - Bitcraze Flow deck v2 (for Crazyflie): $55 — [Bitcraze](https://store.bitcraze.io/products/flow-deck-v2)
  - The ESP-Drone hardware docs include an "ESPlane + PMW3901" extension pin map. — [ESP-Drone hardware](https://docs.espressif.com/projects/espressif-esp-drone/en/latest/hardware.html)

**Cameras / VTX (optional for phone flying)**
- Analog micro cameras:
  - BetaFPV C03: $11.99 — [BetaFPV](https://betafpv.com/products/c03-fpv-micro-camera)
  - BetaFPV Air camera: $9.99 — [BetaFPV](https://betafpv.com/products/air-camera)
  - NBD BeeEye V2: $12.99 — [NBD](https://newbeedrone.com/products/newbeedrone-beeeye-v2-fpv-camera-10x10)
  - Caddx Ant Nano: $19.49 — [RDQ](https://www.racedayquads.com/products/caddx-ant-1200tvl-nano-fpv-camera-1-8mm-choose-color-aspect-ratio)
- Digital systems:
  - Walksnail Avatar HD Mini 1S kit: $131.99 — [RDQ](https://www.racedayquads.com/products/walksnail-avatar-hd-mini-1s-kit)
  - DJI O4 Air Unit: $139.99 — [RDQ](https://www.racedayquads.com/products/dji-o4-air-unit)
  - BetaFPV P1 HD VTX: $46.49 — [RDQ](https://www.racedayquads.com/products/betafpv-p1-air-unit-hd-vtx)
- Goggles: EV800D at $159.99 (RDQ) versus $67.99 (AliExpress, Oscar's 2024 list). — [RDQ](https://www.racedayquads.com/products/ev800d-5-8g-40ch-diversity-fpv-goggles-with-dvr); [Oscar Liang](https://oscarliang.com/cheapest-fpv-drone-build/)

**Wiring, hardware, straps, prop nuts**
- Wire gauges: silicone wire at 12/14 AWG for power, 20 AWG for motors and 28 AWG for signals. Heat shrink at 2–3 mm for motor wires and 20–25 mm for ESC/RX. Battery straps 20 mm wide and 200–260 mm long. M3 stainless screws in 10.9/12.9-grade alloys. Nylon standoffs, thread locker and silicone conformal coating. — [Oscar Liang – FPV tools (updated 20 Jun 2024)](https://oscarliang.com/fpv-tools/)
- Micro motor leads are 30 AWG on the 0702/0802 and 28 AWG on the 1102 (BetaFPV pages above). The 1404 uses 26 AWG and the 2806.5 uses 18 AWG (RDQ pages above).
- Hardware prices:
  - M3 280‑piece steel nut and bolt kit: $11.99 — [RDQ](https://www.racedayquads.com/products/m3-black-steel-280-piece-nut-bolt-kit)
  - M3 nylon standoff assortment: $11.99 — [RDQ](https://www.racedayquads.com/products/m3-nylon-hex-male-female-spacer-standoffs-screw-nut-assortment-kit-black)
  - M2 nylock nuts: $2.49 for 4 — [RDQ](https://www.racedayquads.com/products/m2-nylock-nut-1-piece-choose-your-color)
  - RDQ Kevlar straps: 3‑pack $9.99 (220 mm), $10.49 (250 mm), $6.99 (180 mm micro) — [RDQ](https://www.racedayquads.com/products/rdq-220mm-kevlar-battery-strap-w-woven-rubber-grip-metal-buckle-3pk)
  - The 2806.5 motor ships with "1x Motor Nut" on an M5 prop shaft. — [RDQ](https://www.racedayquads.com/products/brotherhobby-avenger-2806-5-1300kv)
- Heat-set inserts for printed frames, 100 pieces each (CNC Kitchen):
  - M3 x 5.7: €9.40 — [CNC Kitchen](https://cnckitchen.store/products/heat-set-insert-m3-x-5-7-100-pieces)
  - M3 x 3 short: €8.90 — [CNC Kitchen](https://cnckitchen.store/products/heat-set-insert-m3-x-3-short-version-100-pieces)
  - M2 x 3: €9.90 — [CNC Kitchen](https://cnckitchen.store/products/heat-set-insert-m2-x-3-100-pieces)
  - 200‑piece sets: €24.90–€25.90 — [CNC Kitchen](https://cnckitchen.store/products/gewindeeinsatz-threaded-insert-set-standard-200-stk-pcs)
- Frames, if not printed:
  - BetaFPV Air65 II whoop frame: $4.99 — [BetaFPV](https://betafpv.com/products/air65-ii-brushless-whoop-frame)
  - 5" carbon frames: $48.75–$64.99 — [RDQ](https://www.racedayquads.com/products/vroom-comet-pro-5-racing-frame-kit-choose-colors)
  - 7" frames: $90.49 (DeepSpace ROC7 LR) to $155.99 — [RDQ](https://www.racedayquads.com/products/deepspace-roc7-lr-frame-kit)

### Inferences
- **Class 1 shopping list:**
  - ESP32‑S3 board (XIAO or module), an IMU, 4× 716/720 coreless motors with 46–55 mm A/B props, 4× SI2302-class MOSFETs with flyback diodes
  - a 3.3 V regulator sized for the motor-start sag (the LiteWing comment suggests at least 800 mA)
  - a 1S LiPo with a matching connector (PH2.0 is fine at brushed currents; BT2.0 is better), and a 1S charger
  - printed PLA/PETG frame (or TPU guards)
  - optional VL53L1X for height hold and PMW3901 for position hold

  Prefer an ICM‑42688‑P on SPI over an MPU6050 if the firmware supports it; ESP‑FC does, and ESP‑Drone is built around the MPU6050.
- **Class 2 shopping list:**
  - a 1S AIO board (BetaFPV Air or Matrix, or Happymodel)
  - 0702/0802 motors at 22–36k KV for 1S; for 2S, use 1102/1103 at about 11k KV with a 1–2S AIO
  - 31/40 mm props, BT2.0 or A30 LiHV packs, and a 6‑port 1S charger with storage mode
  - TPU‑printed frame or ducts
  - For phone control, add an ESP32 bridge to the FC's UART, or use the ESP‑FC/ESP‑NOW route; otherwise the AIO's ELRS needs a radio.
- **Class 3 shopping list:**
  - F405 stack or AIO with a Bluejay or AM32 ESC
  - 1404 motors (3") or 2207 motors (5") with KV matched to 4S or 6S
  - XT30 or XT60 connector, low‑ESR capacitor and ELRS receiver
  - A carbon frame is strongly advisable for 5"; the frames research covers printing.
- **Class 4 shopping list:**
  - H743 (or H7A3) FC running ArduPilot or INAV and a 4‑in‑1 AM32 ESC
  - 2806.5 motors around 1300 KV on 6S, with 7" props
  - M10 GPS with compass, Remote ID where required, MTF‑01 flow/ToF for low-altitude hold
  - SiK radio plus OTG cable, or an ESP32 MAVLink WiFi bridge, for QGroundControl on Android
  - 6S Li‑ion pack for endurance
- Phone-native control is only off-the-shelf in class 1 (ESP‑Drone, LiteWing, Crazyflie over BLE) and class 4 (QGC virtual joystick over MAVLink). Classes 2–3 need custom bridge firmware, which is a software risk, not a parts-cost risk.

### Gaps
- No primary source was found for **BMI088** (search quota exhausted). Its suitability for ESP32 builds and its price are unverified, and ESP‑FC's README does not list it as supported.
- No TDK lifecycle (EOL) status for the MPU‑6050 could be found; its product page shows none. "Obsolete" is supported only for Betaflight-class use (Oscar: I2C-only, avoid), not as a formal EOL.
- Oscar's article names an ICM‑42688‑P US price only for whole FCs. Bare ICM‑42688‑P breakout prices (AliExpress/LCSC) were not captured.
- AliExpress and Amazon prices for 716/720/8520 motors, 55 mm props and generic GY‑521 modules could not be fetched. Only the CircuitDigest INR figures and GBP/USD hobby-shop figures are available.
- The OX32 ESC firmware on the SpeedyBee F405 V5 (whether it is AM32) is not stated on the RDQ page.

## 2. 2026 prices and total budget per class (one-time tools separated from per-drone cost)

### Takeaway
Rough October 2026 USD per-drone costs, built from the cited prices:

| Class | Minimum per drone | Comfortable per drone |
|---|---|---|
| 1 | about $30–60 | about $100–170 |
| 2 | about $110–160 | about $250–400 |
| 3 | about $245–330 plus batteries, or about $100–230 from AliExpress (Oscar's 2024 builds) | about $500–800 with digital FPV |
| 4 | about $500–650 | about $800–1,000+ |

One-time tools on top of the soldering station run about $60–120 for 1S-only builds, about $150–300 once a 2–6S smart charger is added, and about $400–600 comfortable. Prices vary a lot between regions and retailers.

### Cited Findings
- CircuitDigest says the ESP32 drone costs "$30‑50". Its Indian BOM: ESP32 ₹240, MPU6050 ₹140, 720 motors plus 55 mm props ₹266, MOSFETs ₹40, passives and misc ₹100. — [CircuitDigest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)
- Oscar Liang's **$100 5" build** (AliExpress, Nov 2024, Black Friday pricing) totals $102.92:
  - Mark5 frame $11.47
  - F405 V3S + 60 A ESC $32.90
  - 2306/2207 motors $12.24
  - Cyclone 1 W VTX $14.41
  - 1800TVL camera $11.47
  - receiver $2.67
  - 6S 1000–1100 mAh pack $16.77
  - props $0.99

  — [Oscar Liang – cheapest build](https://oscarliang.com/cheapest-fpv-drone-build/)
- Oscar's **$230 build** totals $228.60:
  - Source One V5 frame $29.99
  - SpeedyBee F405 V4 + 55 A $69.99
  - T‑Motor Velox 2207 ×4 $59.60
  - TX805 VTX $13.00
  - Foxeer Razer Micro camera $17.99
  - Bayck ELRS receiver $9.60
  - 6S pack $25.34
  - props $3.00

  Not included: radio (Pocket $64.99), goggles (EV800D $67.99) and charger (SkyRC B6neo $24.60). Oscar warns that "prices might increase after the promotions end". — [Oscar Liang – cheapest build](https://oscarliang.com/cheapest-fpv-drone-build/)
- Ready-made reference prices:
  - BetaFPV Air65 II and Air75 II: $99.99–$104.99 — [BetaFPV](https://betafpv.com/products/air65-ii-brushless-whoop-quadcopter); [BetaFPV](https://betafpv.com/products/air75-ii-brushless-whoop-quadcopter)
  - Air65 II at RDQ: $116.99 — [RDQ](https://www.racedayquads.com/products/betafpv-air65-ii-brushless-whoop-freestyle)
  - NBD AcroBee65 Brushed V2 ELRS BNF: $69.99 — [NBD](https://newbeedrone.com/products/newbeedrone-acrobee65-brushed-v2-elrs-bnf)
  - Crazyflie 2.1+: $240 — [Bitcraze](https://store.bitcraze.io/products/crazyflie-2-1-plus)
  - In 2024 Oscar listed the Air65 at about $95. — [Oscar Liang – best tiny whoop](https://oscarliang.com/best-tiny-whoop/)
- Remote ID modules (needed in the US for registered drones, and in the UK from 2028 for drones of 100 g or more with a camera; see section 5):
  - **NBD BeeID v1.1** (M10Q GPS plus Remote ID, about 5.2 g): $36.99 at RDQ and $39.99 at NBD. Its listing says it "Meets FAA requirements for drones over 250g" and links an FAA Declaration of Compliance. — [RDQ](https://www.racedayquads.com/products/newbeedrone-beeid-v1-1-m10q-gps-module-remote-id); [NBD](https://newbeedrone.com/products/newbeedrone-beeid-v1-1-m10q-gps-module-with-remoteid-drone-tracker)
  - **BeeID Pro** with IST8310 compass: $55.49–$59.99. — [RDQ](https://www.racedayquads.com/products/newbeedrone-beeid-pro-m10-gps-w-remoteid-compass)
  - **Phoenix UAS mRID** (2.2 g, needs an M10 GPS): $59.99, described by the retailer as "approved by the FAA". — [Pyrodrone](https://pyrodrone.com/products/phoenix-uas-mrid-remote-id-module-no-gps)
  - **Holybro Remote ID** (ArduRemoteID firmware): $19.99, or $29.59 with case. Holybro says it is "NOT for DIY users, as you need to do your own approval process at the FAA (DoC submission) if you are in the USA. This product does not include serial number." — [Holybro](https://holybro.com/products/remote-id)
- Custom PCBs:
  - JLCPCB: from $2.00 for 5 FR‑4 PCBs, 24 h build — [JLCPCB](https://jlcpcb.com/)
  - PCBWay: from $5 for 10, with assembly from $29 — [PCBWay](https://www.pcbway.com/)
- Regional price variation seen in the data:
  - SpeedyBee F405 V5 stack: $119.99 at RDQ versus £74.98 at Unmanned Tech — [RDQ](https://www.racedayquads.com/products/speedybee-f405-v5-stack-f405-fc-55a-3-6s-ox32-esc-30x30-standard); [Unmanned Tech](https://www.unmannedtechshop.co.uk/products/speedybee-f405-v4-bls-55a-flight-stack)
  - EV800D goggles: $159.99 at RDQ versus $67.99 on AliExpress in 2024 — [RDQ](https://www.racedayquads.com/products/ev800d-5-8g-40ch-diversity-fpv-goggles-with-dvr); [Oscar Liang](https://oscarliang.com/cheapest-fpv-drone-build/)
  - UK LiPo bags: £1.95–£2.49 at Unmanned Tech versus $7.49–$16.99 at RDQ — [Unmanned Tech](https://www.unmannedtechshop.co.uk/products/lipo-safety-bag-red-23x18cm); [RDQ](https://www.racedayquads.com/products/rdq-lipo-bag-choose-your-color)

### Inferences
All totals below are arithmetic on the cited prices, rounded and excluding tax and shipping.
- **Class 1 (brushed ESP32 WiFi), per drone:**
  - Minimum about $30–60: XIAO ESP32S3 $7.49, MPU6050 $2–13, motor set $6–24, props $1–3, MOSFETs/LDO/passives a few dollars, one 1S pack $8.49, printed frame. This matches CircuitDigest's $30–50.
  - Comfortable about $100–170: add 4–8 extra packs ($15–24), a 6‑port charger ($12–40), spare motors and props ($10–25), and VL53L1X plus PMW3901 sensors (about $35–40 combined).
  - An optional JLCPCB board adds about $2 per 5 plus shipping.
  - Buying a Crazyflie 2.1+ ($240) instead gives a proven BLE phone app.
- **Class 2 (1S brushless whoop), per drone:**
  - Minimum about $110–160: AIO $45–55, motors $40, props $1–3, frame $5 or printed, camera $10–12 (optional), 4‑pack of 1S batteries $15–20.
  - Phone bridge ESP32 about $7.50, or a $33 LiteRadio as a fallback.
  - Comfortable about $250–400: add more packs, a $25–40 charger, spare motors and Walksnail 1S digital FPV ($132).
  - A ready-made BNF Air65 II at $100–117 costs less than the minimum DIY build, which is a useful benchmark for the report.
- **Class 3:**
  - 5" with no FPV, ELRS or phone bridge: frame $49–65, stack $86–130 (both OOS at RDQ), 4× 2207 motors $78–82, props $3–5 per set, receiver $9–25, pigtail/capacitor $7.50, straps $10. That is about $245–330 per drone, plus 3× 6S 1300 mAh at $110–160.
  - AliExpress-sourced builds can be about $100–230 (Oscar, 2024).
  - A 3" on 1404 motors with 4S 850 or 3S 650 packs is roughly $180–260 including 3 packs.
  - Adding DJI O4 ($140) or Walksnail pushes it to about $500–800.
- **Class 4 (7" GPS long range):**
  - Frame $90–150, FC $55–117 plus ESC $46–58 (or stack $125–165), motors $110–164, props $5–10, GPS with compass $28–48, receiver $9–25, telemetry $59 (SiK) or about $7.50 (ESP32 WiFi bridge).
  - Remote ID $37–60 (US/UK where required), MTF‑01 $33 (optional), 6S Li‑ion $81–150 per pack.
  - Total about $500–800 per drone with one pack; comfortable with 2–3 packs and a spare GPS, about $800–1,000+.
  - A 5" GPS INAV build is roughly class 3 plus $50–80, since the SpeedyBee F405 V5 already has a barometer.
- **One-time tools** (user already has a soldering station; itemised in section 3):
  - About $60–120 for 1S-only work: solder, flux, heat shrink, hex kit, prop tool, tweezers, 1S checker, LiPo pouch, 1S charger, wire, cheap multimeter.
  - About $150–300 for 2–6S: add a smart charger ($36–114), ShortSaver ($17.49) and a better checker.
  - About $400–600 comfortable: add ToolkitRC P200 bench supply ($95.99), MC8 ($44.49), helping hands ($47.99) and an ISDT 608PD plus PSU or M7AC.
  - Radios and goggles are optional for phone flying and are not counted.

### Gaps
- Live AliExpress, Amazon, GetFPV and Banggood prices for 2026 could not be fetched, because of search-quota exhaustion and bot protection. Oscar's AliExpress figures are from November 2024.
- No sourced USD/GBP/EUR exchange rate, so the GBP and EUR prices are not converted.
- Tariff and import-duty effects on US prices of Chinese-made parts in 2026 were not researched.
- The 2026 price of the ESP-Drone S2 kit and of LiteWing (CircuitDigest lists distributors) was not found.

## 3. Tools and consumables beyond a soldering station

### Takeaway
The essentials are a multimeter, a smoke stopper (2S and up) or a current-limited bench supply (1S), 63/37 solder and flux, heat shrink, 1.5/2/2.5 mm hex drivers plus nut drivers, a prop tool, tweezers, a battery checker, a LiPo bag or ammo can, Kapton tape, thread locker, conformal coating and USB data cables. For the phone, add a USB‑OTG adapter (included with SiK radios). A hot-air station is only needed for SMD or custom PCB work.

### Cited Findings
- Oscar Liang's essential tools list:
  - soldering iron; Kester or MG Chemicals 63/37 solder; flux pen or syringe; helping hands; brass tip cleaner
  - hex drivers 1.5, 2.0, 2.5 and 3.0 mm; nut drivers 4.0 mm (M2) and 5.5 mm (M3); 8 mm prop nut tool, preferably with a one-way bearing
  - scissors, wire cutters, needle-nose pliers, forceps, cross-lock tweezers
  - multimeter: ANENG SZ305 (budget), INNOVA 3320 (mid-range) or Fluke 115 (premium)
  - Vifly ShortSafer smoke stopper; LiPo checker or ToolkitRC MC8; LiPo bags, metal ammo boxes or Bat‑Safe
  - consumables: 3M Super 33 electrical tape, Kapton tape, double-sided tape, E6000 glue, zip ties, thread locker, isopropyl alcohol, silicone conformal coating

  — [Oscar Liang – FPV tools (updated 20 Jun 2024)](https://oscarliang.com/fpv-tools/)
- Oscar's nice-to-have list: electric screwdriver, ToolkitRC P200 bench power supply, wire strippers, heat gun, calipers, 0.1 g scale, fume extractor, FTDI adapter, ST‑Link programmer. — [Oscar Liang – FPV tools](https://oscarliang.com/fpv-tools/)
- A search summary of the same page says "a cheap multimeter will be fine for testing for shorts, finding broken wires and checking battery voltage". — [Oscar Liang – FPV tools](https://oscarliang.com/fpv-tools/) (from search snippet)
- Smoke stopper: "A smoke stopper can help avoid damage when you power on a mini quad for the first time… can limit the current flow and prevent 'magic smoke'." — [Oscar Liang – DIY smoke stopper (2018)](https://oscarliang.com/smoke-stopper/)
  - **ViFly ShortSaver 2**: $17.49. Electronic fuse with a 1 A or 2 A threshold, 3 ms short-circuit and 10 ms over-current trip, XT30/XT60. Input is **7–25 V (2–6S)**. — [RDQ](https://www.racedayquads.com/products/vifly-short-saver-2-smoke-stopper-xt30-xt60)
  - RDQ XT30 smoke stopper: $4.99 (OOS). — [RDQ](https://www.racedayquads.com/products/smoke-stopper-xt30-by-rdq-and-bengineeringlabs-modern-led)
- Bench supply: **ToolkitRC P200 V2**, adjustable 30 V / 10 A / 200 W with XT60, $95.99. — [RDQ](https://www.racedayquads.com/products/toolkitrc-p200-v2-mini-30v-10a-200w-adjustable-power-supply-xt60)
- Solder and flux:
  - RDQ 63/37 0.8 mm: $10.99 for 100 g or $2.99 for an 18 g pocket pack — [RDQ](https://www.racedayquads.com/products/rdq-quad-solder-v2-63-37-0-8mm-100g)
  - MCN‑UV80 rosin flux: $7.49 — [RDQ](https://www.racedayquads.com/products/mcn-uv80-rosin-base-soldering-flux-paste)
- Portable soldering irons, should a field iron be wanted: Sequre SI012 $35.99–$41.99; SQ‑D60B $35.99–$48.99 — [RDQ](https://www.racedayquads.com/products/sequre-si012-soldering-iron-choose-version); [RDQ](https://www.racedayquads.com/products/sequre-sq-d60b-mini-soldering-iron-w-ts-b2-tip)
- Drivers and kits:
  - RDQ 1.5 mm hex driver: $3.99 — [RDQ](https://www.racedayquads.com/products/1-5mm-hex-driver-tool-rdq-edition)
  - Mini all-in-one hex driver: $10.99 — [RDQ](https://www.racedayquads.com/products/mini-hex-driver-tool)
  - Socket set for M2/M2.5/M3/M5 nuts: $11.99 — [RDQ](https://www.racedayquads.com/products/rdq-hex-socket-driver-tool-set-for-m2-m2-5-m3-and-m5-nuts)
  - RDQ 9‑piece kit V2: $23.99 — [RDQ](https://www.racedayquads.com/products/rdq-9-piece-drone-racing-tool-kit)
  - NBD Tool Kit V1.7: $69.99 — [NBD](https://newbeedrone.com/products/newbeedrone-tool-kit-v1-6)
- Prop tools:
  - RDQ prop driver: $8.49 — [RDQ](https://www.racedayquads.com/products/prop-wrench-rdq-prop-tool)
  - Gemfan 8 mm ratchet: $9.49 — [RDQ](https://www.racedayquads.com/products/gemfan-1-4-ratcheting-prop-wrench-8mm)
  - Mini prop remover for whoops: $9.49 — [RDQ](https://www.racedayquads.com/products/mini-propeller-remover-tool-black)
- Tweezers, holding and hot tools:
  - RDQ reverse tweezers: $7.49 — [RDQ](https://www.racedayquads.com/products/rdq-reverse-tweezers)
  - Helping hands with fan, LED and magnifier: $47.99 — [RDQ](https://www.racedayquads.com/products/rdq-helping-hands-with-fan-led-and-magnifier)
  - Sequre HT140 hot tweezers (SMD rework): $119.99 — [RDQ](https://www.racedayquads.com/products/sequre-ht140-2-in-1-hot-tweezers-for-c210-tips)
- Consumables:
  - Heat shrink set, 150 pieces: $8.49 — [RDQ](https://www.racedayquads.com/products/black-heat-shrink-tube-7-sizes-127pcs)
  - Silicone wire: $1.49–$2.99 per 1 ft red/black pair, or $17.99–$21.99 for 6‑roll kits — [RDQ](https://www.racedayquads.com/products/silicone-wire-2-ft-red-and-black-pair)
  - NBD "No Big Deal" conformal coating: $6.99 — [RDQ](https://www.racedayquads.com/products/newbeedrone-no-big-deal-conformal-coating)
- Battery checkers:
  - 1–8S checker with alarm: $4.99 — [RDQ](https://www.racedayquads.com/products/1-8s-lipo-battery-voltage-tester-low-voltage-buzzer-alarm)
  - 1S whoop checker (PH2.0/JST1.25): $8.49 — [RDQ](https://www.racedayquads.com/products/1s-whoop-battery-checker-ph2-0-and-jst-1-25)
  - Lumenier Quick Check 1–6S: $16.99 — [RDQ](https://www.racedayquads.com/products/lumenier-quick-check-battery-cell-checker-1-6s-oled-screen)
  - ToolkitRC MC8: $44.49 — [RDQ](https://www.racedayquads.com/products/toolkitrc-mc8-multifunctional-2-8s-battery-checker)
  - ISDT BattGo BG‑8S: $47.99 — [RDQ](https://www.racedayquads.com/products/isdt-battgo-bg-8s-smart-battery-checker)
- LiPo containment:
  - RDQ LiPo pouch $7.49; RDQ bag $10.99; Lumenier $16.99; Torvol Elite $54.99 — [RDQ](https://www.racedayquads.com/products/rdq-lipo-bag-choose-your-color); [RDQ](https://www.racedayquads.com/products/torvol-elite-lipo-safe-bag)
  - UK bags: £1.95–£5.99 — [Unmanned Tech](https://www.unmannedtechshop.co.uk/products/emax-lipo-safe-battery-bag-small)
- Charging accessories:
  - Lumenier ParaGuard Pro parallel board: $90.99 — [RDQ](https://www.racedayquads.com/products/lumenier-paraguard-pro-safe-parallel-charging-board-xt-60-6-port)
  - ToolkitRC SC100 USB‑C to XT60 cable: $13.49 — [RDQ](https://www.racedayquads.com/products/toolkit-rc-sc100-usb-c-to-xt60-adapter-cable)
- Cables and phone adapters:
  - NBD USB‑C and micro‑USB data cable: $2.99 — [RDQ](https://www.racedayquads.com/products/newbeedrone-usb-c-and-micro-usb-cable)
  - The Holybro SiK V3 bundle includes a micro‑USB OTG cable and a Type‑C adapter. — [Holybro](https://holybro.com/products/sik-telemetry-radio-v3)
- Heat-set insert tools: CNC Kitchen sells insert straighteners (€8.40–€34.90 range) and an M2–M3 removal tool (€16.90). — [CNC Kitchen](https://cnckitchen.store/products/insert-removal-tool-for-m2-m2-5-m3)

### Inferences
- The ShortSaver 2 only accepts 2–6S (7–25 V). It cannot protect a **1S** build, so for classes 1–2 use a current-limited bench supply (for example the P200 set to 4.2 V with a low current limit) or a fused 1S lead for first power-up.
- A hot-air station only makes sense if the user designs their own ESP32 flight-controller PCB with QFN/LGA parts such as the ICM‑42688‑P (LGA) and ESP32 modules. JLCPCB/PCBWay assembly ($29+ at PCBWay) may be cheaper than buying hot air for one board.
- Phone side:
  - For USB-OTG telemetry use an Android phone (QGC lists Android but not iOS) and a USB‑C OTG adapter or the cable bundled with the SiK.
  - The ESP32 WiFi routes (ESP‑Drone, LiteWing, Crazyflie BLE) need no adapter.
  - A USB‑C data cable (not charge-only) is still needed to flash ESP32 and FC firmware from a PC.

### Gaps
- No 2026 price was captured for a standalone multimeter (ANENG/INNOVA/Fluke), Kapton tape, thread locker, metal ammo cans or hot-air stations. Neither RDQ search nor the other stores returned them.
- No primary source was found on UK or EU-specific tool retailers beyond Unmanned Tech, The Pi Hut and CNC Kitchen.

## 4. Battery safety, LiPo handling, propeller safety, bench-testing and failsafe testing

### Takeaway
- **Voltages:** charge LiPo to 4.20 V/cell and LiHV to 4.35 V/cell. Store at 3.80–3.85 V. Land at about 3.5–3.6 V and never go below 3.0 V.
- **Charging:** charge at 1C or less, attended, on a non-flammable surface, with the balance lead connected, in a LiPo bag or vented ammo can. Discard puffed or damaged packs.
- **Disposal:** recycle through battery drop-off or household hazardous waste, with terminals taped; never in the trash.
- **Bench work:** do first power-up through a smoke stopper or current-limited supply. Do every motor or failsafe test with props off.
- **Failsafe:** configure it (Betaflight drop/land/GPS Rescue; ArduPilot RTL/Land) and test it before the first flight.

### Cited Findings
- Oscar Liang's LiPo guide (last updated 2 Mar 2025):
  - Nominal 3.7 V/cell, full 4.2 V, storage 3.80–3.85 V, minimum 3.0 V. LiHV is full at 4.35 V.
  - "Charging LiPo batteries at 1C or lower is recommended".
  - Return to storage voltage if a pack will sit for more than about 2 weeks; it is OK left full for 1–2 days.
  - Land at 3.5–3.6 V/cell. Never charge unattended; always connect the balance lead. Puffed packs are irreversible and dangerous, so dispose of them.
  - LiPo bags "slow fires but don't contain them". If using metal ammo boxes, remove the rubber seals and drill ventilation holes. Bat‑Safe boxes are another option.
  - C‑rating is largely marketing, so prefer reputable brands. Batteries perform better warm.
  - Spare LiPos go in carry‑on only.

  — [Oscar Liang – LiPo battery guide](https://oscarliang.com/lipo-battery-guide/)
- Other safety-guide points: store long-term at 3.8–3.85 V/cell; never charge above 2C; charge on cement, steel, ceramic or stone, in a LiPo bag. These come from a search-engine summary of several guides, and which specific page says what was not verified. — [Unmanned Tech LiPo safety](https://www.unmannedtechshop.co.uk/pages/liposafety); [Novritsch LiPo safety](https://us.novritsch.com/lipo-battery-safety/); [BYU combat robotics LiPo safety](https://combatrobotics.byu.edu/getting-started/lipo-safety); [Associated Electrics LiPo warnings](https://apps.associatedelectrics.com/ateamapps/reedy_power/LiPo-warnings/index.html)
- 1S chargers with storage mode:
  - VIFLY WhoopStor V3: LiPo 4.20 V / LiHV 4.35 V charge, storage 3.80 V / 3.85 V, 1.3 A per port. — [RDQ](https://www.racedayquads.com/products/vifly-whoopstor-1s-battery-charger)
  - BetaFPV HexaCharger: storage 3.85 V. — [BetaFPV](https://betafpv.com/products/hexacharger-1s-charger)
- **Disposal (US EPA):** lithium-ion batteries "should NOT go in household garbage or recycling bins" and should go to separate recycling or household hazardous waste points. "Tape battery terminals and/or place lithium-ion batteries in separate plastic bags." Recyclers can be found through Earth911 and Call2Recycle. Batteries crushed in waste trucks or sorting equipment create a fire hazard. — [EPA – Used lithium-ion batteries](https://www.epa.gov/recycle/used-lithium-ion-batteries)
- **Air travel (FAA PackSafe):**
  - Spare lithium batteries must be in carry-on baggage only.
  - Each Li‑ion battery is limited to 100 Wh. With airline approval, up to two spares of 101–160 Wh are allowed.
  - Damaged or recalled batteries "must not be carried aboard an aircraft" unless removed or made safe.
  - "To calculate Wh, multiply the battery voltage by the Amp hours."

  — [FAA PackSafe – lithium batteries](https://www.faa.gov/hazmat/packsafe/lithium-batteries)
- **Bench testing and props off.** ArduPilot's failsafe tests can be done "without plugging in your LiPo battery but if you do connect a battery you should first remove the propellers". Test 1 is to turn the transmitter off and confirm the throttle PWM drops below the failsafe value. — [ArduPilot – Radio failsafe](https://ardupilot.org/copter/docs/radio-failsafe.html)
- **Betaflight failsafe:**
  - Stage 1 (guard) holds for `failsafe_delay`: 1.5 s by default in 4.5, 1.0 s in 4.4.
  - Stage 2 by default "immediately disarms and drops", or can be set to Landing Mode or GPS Rescue. GPS Rescue "requires a working GPS module".
  - A transmitter switch can trigger failsafe, "useful for field testing the failsafe system and as a PANIC switch".
  - Stage 1 cuts throttle to zero by default; Betaflight says setting a hover or slow-descent value is "essential… when GPS Rescue is enabled".

  — [Betaflight – Failsafe](https://betaflight.com/docs/wiki/guides/current/Failsafe)
- **ArduPilot failsafe:**
  - Radio failsafe can be set to Land, RTL or SmartRTL. If the GPS position is not usable it switches to Land.
  - Battery failsafe triggers when voltage stays under `BATT_LOW_VOLT` for more than 10 s; **the default is 10.5 V**. A capacity trigger `BATT_LOW_MAH` set at about 20% of capacity is suggested, with RTL as the recommended action.

  — [ArduPilot – Radio failsafe](https://ardupilot.org/copter/docs/radio-failsafe.html); [ArduPilot – Battery failsafe](https://ardupilot.org/copter/docs/failsafe-battery.html)
- **Phone-control latency:** QGC virtual thumbsticks are "not as responsive as using an RC Transmitter". — [QGC](https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/virtual_joystick.html)
- **WiFi range:** the CircuitDigest ESP32 drone has 30–50 m range outdoors and 15–25 m indoors. — [CircuitDigest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone)
- **Smoke stopper behaviour:** the ShortSaver cuts current entirely, whereas "the automotive light-bulb or resettable fuse… just limit not stop the current flow". — [RDQ ShortSaver 2](https://www.racedayquads.com/products/vifly-short-saver-2-smoke-stopper-xt30-xt60)

### Inferences
- **Battery handling checklist:**
  - Set the charger's chemistry correctly (LiPo vs LiHV; Li‑ion for 18650/21700 packs) and set the cell count.
  - Charge at 1C or less (for a 450 mAh 1S pack, about 0.45 A).
  - Storage-charge after each session if the next flight is more than a few days away.
  - Keep packs in a LiPo bag or vented ammo can on a non-flammable surface.
  - Retire puffed packs: tape the terminals, bag them and take them to a recycler.
- **Wh examples (V × Ah):**
  - A 6S 1300 mAh LiPo is 22.2 V × 1.3 Ah ≈ 29 Wh, fine in carry-on.
  - A 6S 4000 mAh Li‑ion is about 21.6 V × 4 Ah ≈ 86 Wh, under 100 Wh.
  - A 6S 8000 mAh Li‑ion is about 173 Wh, over the 160 Wh cap, so it **cannot be flown with**.
  - The 21.6 V figure assumes a 3.6 V/cell Li‑ion nominal, which is not stated on the retailer page.
- **ArduPilot battery threshold:** the 10.5 V default `BATT_LOW_VOLT` is about 3.5 V/cell for 3S. On a 6S class 4 drone it must be raised (for example to about 21 V for Li‑ion or 21–21.6 V for LiPo), or the failsafe will never trigger before the pack is damaged.
- **Bench sequence:**
  1. Continuity and short check with a multimeter.
  2. First power-up through a smoke stopper (2S+) or current-limited bench supply (1S).
  3. Motor direction test in the configurator with **props off**.
  4. Receiver/phone-link failsafe test with props off: kill the app, WiFi or transmitter and confirm the drone disarms or lands.
  5. Only then fit props, checking CW/CCW. The ESP‑Drone and CircuitDigest boards use A/B props that must match motor direction.
- **Phone-link specific risk:** phone WiFi apps can freeze or lose focus (calls, notifications). The failsafe must therefore be tested for loss of the app connection, not just radio power-off. Cut WiFi in the phone settings mid-hover over a soft surface, with prop guards (printable in TPU).
- **Propeller safety:** arm only with the drone pointed away from people. Use printed TPU prop guards or ducts on classes 1–2. Treat 5"–7" props as able to cause serious lacerations, and never hand-catch them.

### Gaps
- The Betaflight "Motors tab / remove props" doc page returned 404, so no Betaflight-specific "props off" quote is included. ArduPilot's quote is used instead.
- NFPA and USFA lithium-battery pages were JS-rendered or 404 and yielded no usable text. No authoritative source on extinguishing LiPo fires (water versus Class D) was retrieved.
- The UK (WEEE / battery take-back) and EU disposal rules were not retrieved.

## 5. Regulations (US, UK, EU, Canada, Australia) and radio rules as of 2026; are sub-250 g / sub-100 g designs advantageous?

### Takeaway
- **US:** sub-250 g recreational drones need TRUST but no registration and hence no Remote ID. At 250 g or more: register ($5, 3 years) and use a broadcast module or fly in a FRIA.
- **UK (since 1 Jan 2026):**
  - Flyer ID (free test, 5 years) from **100 g**.
  - Operator ID (£12.34 per year) from 100 g with a camera, or from 250 g.
  - Privately built aircraft of 100 g or more with a camera need Remote ID from **1 Jan 2028**.
  - No IDs are needed for purely indoor or netted flying.
- **EU:** privately built drones under 250 g and under 19 m/s fly in A1 with no training and no minimum age. They must be registered only if they carry a camera or sensor. 250 g–25 kg goes to A3 with registration, A1/A3 online training and a minimum age of 16.
- **Canada:** under 250 g, no registration or certificate is needed.
- **Australia:** recreational flyers need no registration or accreditation, based on a CASA page summary; the page itself could not be fetched.
- **Radio:** 2.4 GHz WiFi/BLE/ELRS is licence-exempt (EU 100 mW EIRP; US Part 15.247 up to 1 W conducted). 5.8 GHz analog video is limited to 25 mW EIRP licence-exempt in the EU and UK; in the US it effectively needs an amateur licence (Part 97).

Sub-100 g (UK) and sub-250 g (everywhere else) designs are a large regulatory advantage. Classes 1–2 naturally qualify.

### Cited Findings

**United States (FAA)**
- "You must register if your drone weighs 250 grams (0.55 lbs) or more." For TRUST: "You are required by law to take TRUST and carry proof when flying… TRUST is free and online." — [FAA Recreational Flyers](https://www.faa.gov/uas/recreational_flyers)
- Recreational rules:
  - fly only for recreation
  - follow the safety guidelines of an FAA-recognized community-based organization (CBO)
  - keep visual line of sight, or use a co-located observer
  - stay at or below 400 ft in Class G airspace
  - get prior authorization (LAANC/DroneZone) in controlled airspace

  — [FAA Recreational Flyers](https://www.faa.gov/uas/recreational_flyers)
- Registration:
  - "All drones must be registered, except those that weigh 0.55 pounds or less (less than 250 grams) and are flown under the Exception for Limited Recreational Operations."
  - Recreational registration "costs $5, covers all drones in your inventory, and is valid for three (3) years".
  - Drones must be labeled with the registration number.

  — [FAA – How to Register Your Drone](https://www.faa.gov/uas/getting_started/register_drone)
- Remote ID:
  - "Drones which are required to be registered or are registered… must comply with… Remote ID."
  - Three ways to comply: a Standard Remote ID drone; a broadcast module, with which the pilot "must be able to see their drone at all times"; or flying in a FRIA.
  - Recreational pilots can move one module between drones that are listed in the same inventory.

  — [FAA Remote ID](https://www.faa.gov/uas/getting_started/remote_id)
- FRIAs:
  - Both the drone and the pilot must stay within the FRIA, with line of sight.
  - "Only FAA-recognized Community Based Organizations (CBOs) and educational institutions… are eligible to request" a FRIA.

  — [FAA FRIA](https://www.faa.gov/uas/getting_started/remote_id/fria)
- A secondary guide confirms that homebuilt drones can use FRIAs or broadcast modules. — [Pilot Institute – homebuilt Remote ID](https://pilotinstitute.com/homebuilt-remote-id-rules/) (secondary)
- Holybro states its Remote ID module is "NOT for DIY users" in the USA, because the user must file their own DoC; FAA-compliant options for DIY builders are DoC'd retail modules. — [Holybro](https://holybro.com/products/remote-id)

**United Kingdom (CAA, from 1 January 2026)**
- Requirements by weight:
  - **250 g to under 25 kg** (and UK1–UK4 class): Flyer ID **and** Operator ID.
  - **100 g to under 250 g**: Flyer ID, plus Operator ID if the aircraft has a camera; the Operator ID is optional without one.
  - **Under 100 g**: no Flyer ID required ("strongly recommend") and the Operator ID is optional.
  - "You do not need a Flyer ID or Operator ID if you will only fly indoors or where there is no possibility of your aircraft escaping, such as within a closed netted area."

  — [CAA – Registering to fly drones and model aircraft](https://www.caa.co.uk/drones/open-category/getting-started-with-drones-and-model-aircraft/registering-to-fly-drones-and-model-aircraft/)
- Fees and ages:
  - Operator ID: "£12.34 and is valid for 1 year"; the holder must be 18 or over. — [CAA – Get an Operator ID](https://www.caa.co.uk/drones/open-category/getting-started-with-drones-and-model-aircraft/get-an-operator-id/)
  - Flyer ID: £0, valid 5 years, 13 or over to get one alone. — [CAA – Get a Flyer ID](https://www.caa.co.uk/drones/open-category/getting-started-with-drones-and-model-aircraft/get-a-flyer-id/)
  - Conflict: a retailer article (Currys) gave £11.79 for the Operator ID, probably an older figure. The CAA page's £12.34 is used. — [Currys](https://www.currys.co.uk/techtalk/photography/caa-drone-new-rules.html)
- The Flyer ID threshold dropped from 250 g to 100 g, and the CAA estimates the change affects up to 500,000 flyers. — [CAA newsroom](https://www.caa.co.uk/newsroom/news/regulator-calls-on-new-and-existing-drone-users-to-learn-new-rules-before-taking-off/)
- Remote ID and night lighting:
  - Class-marked drones (UK1, UK2, UK3, UK5, UK6) broadcast Remote ID from 2026.
  - From **1 January 2028** this extends to UK0 drones with cameras (100 g or more), UK4, legacy drones and **privately built aircraft of 100 g or more with cameras**.
  - At night a "green flashing light" must be on.

  — [Heliguy – UK 2026 changes](https://www.heliguy.com/blogs/posts/uk-drone-rules-2026-changes/); [FPV UK – class marks and Remote ID](https://fpvuk.org/class-marks-and-remote-id/)
- Homebuilt drones get no class mark and are treated under weight-based rules. FPV UK issues Flyer IDs through a 40-question quiz. — [FPV UK](https://fpvuk.org/class-marks-and-remote-id/)
- The CAA confirms that "Some model aircraft and drone associations can issue Flyer IDs for their members." — [CAA](https://www.caa.co.uk/drones/open-category/getting-started-with-drones-and-model-aircraft/registering-to-fly-drones-and-model-aircraft/)

**European Union (EASA)**
- **Privately built drones under 250 g:**
  - Fly in subcategory A1 (and may fly in A3).
  - May fly over uninvolved people but should avoid it, and never over assemblies of people.
  - Registration: "No, unless camera / sensor on board and a drone is not a toy".
  - "No training required" and "No minimum age".

  — [EASA – Open category](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/open-category-low-risk-civil-drones)
- **Privately built drones under 25 kg** (250 g and over):
  - Fly in A3: 150 m from uninvolved people and urban areas, under 120 m altitude.
  - Registration "Yes".
  - Pilot needs the A1/A3 online training and exam; minimum age 16, which a State may lower to 12.

  — [EASA – Open category](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/open-category-low-risk-civil-drones)
- The A1 privately-built route also requires a maximum speed under 19 m/s: "A1 when the drone's maximum take-off weight (MTOM) including its payload is less than 250 g and the maximum speed is less than 19 m/s". — [EASA FAQ](https://www.easa.europa.eu/en/the-agency/faqs/drones-uas)
- "Privately built" means "built for your own personal use… it does not refer to UASs assembled from sets of parts placed on the market as a single, ready-to-assemble kit". — [EASA – Open category](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/open-category-low-risk-civil-drones)
- Registered operators must put a sticker with their number on all drones, including privately built ones, and upload it to the remote ID "if the drone has this function". — [EASA FAQ](https://www.easa.europa.eu/en/the-agency/faqs/drones-uas)
- **Ambiguity on Remote ID:** the open-category page also says "All drones operating in the open category (with limited exceptions) need to be equipped with a remote identification system". It lists modules carrying an EU Declaration of Conformity, such as BlueMark DroneBeacon db120/db121/db121FPV and Aerobits idME. — [EASA – Open category](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/open-category-low-risk-civil-drones)

**Canada (Transport Canada)**
- "Microdrones are drones with an operating weight of less than 250 g." Anything attached, such as cameras or safety cages, counts towards the weight. — [TC – Microdrones](https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates/microdrones)
- Microdrone pilots "don't need to register their drone or get a drone pilot certificate".
  - They must not fly recklessly and must avoid emergency sites.
  - Recommended: line of sight, under 400 ft, away from people and aerodromes.
  - An SFOC is needed at advertised events.

  — [TC – Microdrones](https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates/microdrones)
- Drones over 250 g must be registered and marked, and the pilot must carry a certificate. Minimum ages are 14 (Basic), 16 (Advanced) and 18 (Level 1 Complex). Individual fines run up to $1,000 (no certificate) and up to $5,000 (unregistered or unmarked). — [TC – Flying your drone safely and legally](https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/flying-your-drone-safely-legally)

**Australia (CASA)**
- "If you fly for fun, you must follow the drone safety rules but you do not need to register your drone (including micro drones under 250g), hold a licence, or hold operator accreditation." — [CASA – drone safety rules](https://www.casa.gov.au/drones/rules/drone-safety-rules) (**from the search-engine summary of the page; direct fetch returned HTTP 503**)

**Radio rules**
- **US, Part 15.247:** 2400–2483.5 MHz and 5725–5850 MHz digital modulation systems may use up to "1 Watt" maximum peak conducted output. — [47 CFR 15.247 (eCFR API)](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-C/section-15.247)
- **US, Part 15.249:** in 5725–5875 MHz the field strength limit is 50 mV/m at 3 m. — [47 CFR 15.249](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-C/section-15.249)
- **US amateur (Part 97):**
  - Model-craft telecommand is limited to 1 W, needs no on-air ID if a label with call sign, name and address is affixed to the transmitter, and control signals are not considered ciphers. — [47 CFR 97.215](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-B/section-97.215)
  - Other stations must transmit their call sign at least every 10 minutes. — [47 CFR 97.119](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-B/section-97.119)
  - Communications for hire, or in which the licensee has a pecuniary interest, and "messages encoded for the purpose of obscuring their meaning" are prohibited. — [47 CFR 97.113](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-B/section-97.113)
- A ham-licence prep site says most FPV VTX channels (5650–5925 MHz) need at least a Technician licence, while "some FPV systems… operate with FCC Part 15 certified equipment for which you do not need a ham radio license". — [HamRadioPrep](https://hamradioprep.com/?p=1133) (secondary)
- **EU (Implementing Decision 2022/180):**
  - 2400–2483.5 MHz "Wideband data transmission devices": 100 mW e.i.r.p.
  - 5725–5875 MHz "Non-specific short-range devices": 25 mW e.i.r.p.

  — [EUR-Lex 2022/180](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022D0180)
- ETSI EN 300 328, the harmonised standard for 2.4 GHz, states: "The RF output power for FHSS equipment shall be equal to or less than 20 dBm" (100 mW), and uses a 20 dBm e.i.r.p. reference throughout. — [ETSI EN 300 328 v2.2.2](https://www.etsi.org/deliver/etsi_en/300300_300399/300328/02.02.02_60/en_300328v020202p.pdf)
- **UK:** 5.8 GHz FPV video is licence-exempt under IR2030 in 5725–5875 MHz at up to 25 mW e.i.r.p., and airborne use is permitted. — [Ofcom licence-exempt guidance PDF](https://www.ofcom.org.uk/siteassets/resources/documents/spectrum/business-radio-licences/guidance-for-licence-exempt-operation.pdf) (**from search summary; direct fetch returned HTTP 403**)
- Typical whoop AIO VTXs output 25/100/200/400 mW. — [BetaFPV Air FC](https://betafpv.com/products/air-brushless-flight-controller)

### Inferences
- **Sub-250 g / sub-100 g advantage:**
  - Class 1 (CircuitDigest about 60 g; LiteWing about 45 g plus battery; Crazyflie 29 g) and class 2 whoops (Air65 about 17 g) are under 100 g. In the UK they need **no Flyer ID or Operator ID**, and are outside the 2028 Remote ID rule.
  - In the US they need TRUST only; no registration and no Remote ID, as long as they are not registered voluntarily.
  - In the EU they fall in A1 with no training, but a camera-equipped one still needs operator registration.
  - In Canada they are microdrones with no registration or certificate.
  - Indoor-only flying in the UK needs no IDs at all, which suits classes 1–2 particularly well.
- **Class 3 3" builds** can stay under 250 g with 1404 motors (8.6 g each) and small 3–4S packs; total weight was not verified in sources. In the EU they must also stay under 19 m/s (about 68 km/h) for A1, which a 3" can exceed.
- **5" and 7" GPS builds** will exceed 250 g; the 2806.5 motors alone are about 164 g. They therefore need:
  - US: registration, TRUST and Remote ID (e.g., BeeID/mRID), or a FRIA.
  - UK: Flyer ID, Operator ID, and Remote ID from 2028 if a camera is fitted.
  - EU: A3 rules (150 m from people and built-up areas), registration and A1/A3 training.
  - Canada: registration plus a Basic certificate.
- **Radio:**
  - Phone WiFi/BLE and ESP32 radios are licence-exempt everywhere at the module's certified power.
  - ELRS 2.4 GHz should use the EU_CE_2400 (LBT) build in the EU/UK.
  - Any 5.8 GHz analog VTX must be set to 25 mW in the EU/UK.
  - In the US an analog VTX effectively requires a Technician licence, because the Part 15.249 limit (50 mV/m at 3 m) works out to well under 1 mW EIRP (calculated). In practice, phone-flown builds without FPV video avoid the issue.
- **Australia:** a recreational sub-250 g build is the least burdensome case, but the detailed operating rules were not verified.

### Gaps
- **Australia:**
  - The CASA operating rules (altitude, distance from people, controlled-aerodrome limits, FPV spotter rule) could not be fetched because of HTTP 503 and the exhausted search quota.
  - The ACMA LIPD class licence limits for 5.8 GHz and 2.4 GHz could not be read (ACMA 503; the legislation.gov.au page is JS-rendered).
- **Canada:** fees for registration and the certificate exam, and Industry Canada (ISED) rules for 5.8 GHz VTX power and amateur licensing, were not found.
- **EU Remote ID:** whether Remote ID applies to privately built open-category drones is unclear. EASA's page says all open-category drones need it "with limited exceptions" without listing them; national authority guidance should be checked.
- **US homebuilt guidance:** the FAA page for homebuilt Remote ID (`/drone_pilots/homebuilt`) returned 404 and was not read. Which DIY-installable modules appear in the FAA DoC database was not verified independently of retailer claims.
- **UK 2.4 GHz:** no fetched UK-specific figure. The ETSI EN 300 328 limit of 20 dBm is assumed to apply in the UK, which is plausible but not verified.

## 6. Where to buy, and shipping and battery-shipping considerations

### Takeaway
- **US hobby stores** (RDQ, Pyrodrone, NewBeeDrone, GetFPV) and **manufacturer-direct** stores (BetaFPV, Holybro, Bitcraze) carry nearly all FPV parts in USD.
- **UK buyers** have Unmanned Tech for FPV parts and The Pi Hut / Pimoroni for ESP32 boards and sensors.
- **EU** heat-set inserts come from CNC Kitchen.
- **JLCPCB/PCBWay** make custom PCBs cheaply.
- **LiPos are the logistics bottleneck:** they ship by ground or road only, with restricted international shipping. Buy batteries from a domestic retailer even if the electronics come from AliExpress.

### Cited Findings
- **RaceDayQuads (US, USD):** the widest single-store coverage found here (stacks, motors, props, LiPos, Li‑ion, chargers, tools, hardware, GPS, Remote ID). Several popular stacks were OOS on 2026-10-05, including the SpeedyBee F405 V5 and V4 and the Matek H743‑SLIM V3. — [RDQ product listings above](https://www.racedayquads.com/products/speedybee-f405-v5-stack-f405-fc-55a-3-6s-ox32-esc-30x30-standard)
- **Pyrodrone (US):** "Lipo Batteries: Due to regulatory restrictions, lipo batteries cannot be shipped outside of the United States. Within the United States, they can not be shipped via any priority or air mailing methods, and must ship ground." Free shipping goes by USPS Ground Advantage. — [Pyrodrone shipping policy](https://pyrodrone.com/policies/shipping-policy)
- **Unmanned Tech (UK, GBP):** "Loose lithium batteries (such as LiPo packs) can only be shipped internationally on certain road-based courier services… They can't be sent by air or standard postal services". Free Royal Mail RM48 shipping "cannot carry… LiPo batteries". "Products with batteries installed inside them… can usually be shipped more widely." — [Unmanned Tech shipping policy](https://www.unmannedtechshop.co.uk/policies/shipping-policy)
- **NewBeeDrone (US):** whoop parts, VIFLY chargers, BeeID Remote ID and brushed motors. — [NBD](https://newbeedrone.com/products/newbeedrone-beeid-v1-1-m10q-gps-module-with-remoteid-drone-tracker)
- **BetaFPV direct (USD):** AIO boards, whoop motors, frames, BT2.0/LAVA batteries, chargers and ELRS receivers. — [BetaFPV](https://betafpv.com/products/hexacharger-1s-charger)
- **Holybro direct (USD; store country HK):** Kakute H7, Pixhawk 6C, M10 GPS, SiK radios, PMW3901 and Remote ID. — [Holybro](https://holybro.com/products/micro-m10-gps)
- **Bitcraze (USD; store country SE):** Crazyflie 2.1+ and Brushless, Flow deck. — [Bitcraze](https://store.bitcraze.io/products/crazyflie-2-1-plus)
- **UK electronics:**
  - The Pi Hut: XIAO ESP32S3, ESP32‑C3/S3 boards, coreless motors, PMW3901, VL53L1X/VL53L4CX, BMP280 — [The Pi Hut](https://thepihut.com/products/4pcs-coreless-micro-motor-7-x-16mm)
  - Pimoroni: PMW3901 and VL53L1X breakouts — [Pimoroni](https://shop.pimoroni.com/products/pmw3901-optical-flow-sensor-breakout)
- **Seeed:** XIAO ESP32S3 at $7.49. — [Seeed](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- **CNC Kitchen (DE, EUR):** heat-set inserts and insert tools. — [CNC Kitchen](https://cnckitchen.store/products/heat-set-insert-m3-x-5-7-100-pieces)
- **AliExpress:** Oscar's budget builds use AliExpress for the lowest prices (e.g., F405 V3S 60 A stack $32.90 and a 6S pack $16.77 in Nov 2024), with the caveat that "quality and reliability won't match more expensive builds". — [Oscar Liang – cheapest build](https://oscarliang.com/cheapest-fpv-drone-build/)
- **Custom PCBs:** JLCPCB from $2 for 5 PCBs (24 h build); PCBWay from $5 for 10, with assembly from $29. — [JLCPCB](https://jlcpcb.com/); [PCBWay](https://www.pcbway.com/)
- **Kit-assembled drones in the EU:** EASA's "privately built" definition excludes drones "assembled from sets of parts placed on the market as a single, ready-to-assemble kit". A purchased all-in-one kit, such as an ESP-Drone kit, may therefore not count as privately built in the EU. — [EASA – Open category](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/open-category-low-risk-civil-drones)

### Inferences
- **Buying strategy:**
  - Electronics and motors can come from AliExpress (cheapest, slow) or US/UK hobby stores (fast, returns, 2026 stock).
  - **Batteries should come from a domestic hobby store**, since LiPos ship ground or road only and often not across borders.
  - Buy chargers and safety gear from the same domestic store to consolidate shipping.
- **ESP32 parts:** maker stores (The Pi Hut, Pimoroni, Seeed) or, for custom PCBs, LCSC parts with JLCPCB assembly.
- **EU users:** buying loose parts rather than a "ready-to-assemble kit" keeps the build "privately built" under EASA's definition, which matters for A1 eligibility under 250 g.

### Gaps
- Shipping and battery policies for GetFPV, AliExpress, Banggood, Amazon, HappyModel direct, Mouser, DigiKey and LCSC were not retrieved. Search quota was exhausted and these sites block scripted fetches.
- RDQ's shipping policy page did not render its text through scripted fetch.
- Canada- and Australia-specific retailers and their battery-shipping rules were not researched.
