# Printable drone designs that fly (or can easily fly) from a smartphone: repository sweep (metrics observed 2026-10-05)

## Q1. MakerWorld (Bambu Lab): which drone designs exist, how popular are they, what Bambu profiles, materials and electronics do they use, and are there contests or official Bambu drone projects?

### Takeaway
MakerWorld has a deep catalog of printable FPV/whoop frames with P2S-compatible Bambu profiles. The most popular is BM Aether 4: 12,834 downloads, 4,291 prints and an average rating of 4.92 from 363 ratings. Phone-controlled designs are thin on MakerWorld. The only phone-ready design found is a free ESP-FLY frame remix (423 downloads, 139 prints, PLA profile). Next comes an ESP32-based 3-inch "DIY Drone Frame & Remote" (1,195 downloads, 1,527 likes). That frame uses a separate ESP32 handset, not a phone. API searches for Flix, LiteWing, StampFly and ESP-Drone returned no frames. No official Bambu drone design was found, and none of the drone designs whose details were fetched is paid.

### Cited Findings

#### Data access and method
- makerworld.com pages and the makerworld.com/api endpoint returned a Cloudflare challenge (HTTP 403) to automated fetches. WebFetch also returned 403 for [this model page](https://makerworld.com/en/models/2580472-esp32-drone). The same design records come from Bambu's public API without a challenge, including metrics, license, paid flag, per-profile printer compatibility, filament, grams, print time and ratings. Examples: [search endpoint](https://api.bambulab.com/v1/search-service/select/design2?keyword=esp32%20drone&limit=5), [design endpoint](https://api.bambulab.com/v1/design-service/design/1530477) and [comments/ratings endpoint](https://api.bambulab.com/v1/comment-service/commentandrating?designId=1530477&offset=0&limit=20&type=0).
- Sweep scope: the first pass ran 44 keywords at 2 pages × 50 hits each and returned 2,269 unique designs. Keywords included drone, ESP32 drone, quadcopter, whoop, tiny whoop, FPV frame, ESP-Drone, LiteWing, Flix, Crazyflie, StampFly, toy drone frame, 8520 motor frame, mini drone, brushed drone, coreless drone, cinewhoop, ESP-FLY, esp32-s3 drone, phone controlled drone, arduino drone, ardupilot and mavlink. A second pass of 42 keywords followed, including esp32, espfly, wifi quadcopter, smartphone drone, 8.5x20, 716/720/615 motor, toy drone, E58, Eachine, JJRC, Syma, Tello, F450 and S500. All metrics were read 2026-10-05 — [Bambu search API](https://api.bambulab.com/v1/search-service/select/design2?keyword=drone&limit=50&offset=0).
- Every design whose details were fetched returned `paidSetting.isPaid: false`, for example BM Aether 4 and GASB ONE. No paid MakerWorld designs appear in this note — [API: Aether 4](https://api.bambulab.com/v1/design-service/design/541413); [API: GASB ONE](https://api.bambulab.com/v1/design-service/design/2202921).
- Metric definitions below: DL = downloads, L = likes, C = collections, P = prints (makes), B = boosts, Cm = comment count in the design record. "P2S listed" means the profile's compatibility list includes the Bambu P2S. Data comes from the per-design API record linked in each row.

#### Phone-relevant designs on MakerWorld (ESP32 / coreless "brushed" micro quads / Wi-Fi)
| Design | Designer | Created | DL / L / C / P / B / Cm | License | Bambu profile (P2S?) | What it is / electronics | Sources |
|---|---|---|---|---|---|---|---|
| ESP-FLY Frame Gehäuse Drohne | NNN (@Bennni) | 2025-06-18 | 423 / 65 / 168 / 139 / 8 / 13 | Standard Digital File License; MW-exclusive | 1 profile: 0.08 mm layers, 4 walls, 15% infill, PLA, 15 g, 2.3 h; P2S listed; 4.75★ (n=4) | Frame drawn for the ESP-FLY drone. The designer says it is about 2–3 g lighter than the original and that the battery holder doubles as the landing foot instead of bent wires. | [MW](https://makerworld.com/en/models/1530477-esp-fly-frame-drone-housing), [API](https://api.bambulab.com/v1/design-service/design/1530477) |
| DIY Drone Frame & Remote | Jonas Gartner (@jonas3141) | 2025-03-15 | 1,195 / 1,527 / 3,761 / 277 / 115 / 41 | CC BY-NC-SA | 1 profile: 0.16 mm layers, 2 walls, 15% infill, PLA, 165 g, 8.5 h; P2S listed; 4.46★ (n=13) | Frame plus remote casing from a university project that uses two ESP32s. Built for 1404 motors with 3-inch prop guards. The listing mentions a GitHub page with schematics, PCB, code and Onshape CAD, plus a flight-demo video. | [MW](https://makerworld.com/en/models/1211264-diy-drone-frame-remote), [API](https://api.bambulab.com/v1/design-service/design/1211264) |
| Esp32 Drone | Doc (@wajahat009) | 2026-03-27 | 41 / 9 / 13 / 4 / 0 / 0 | Standard Digital File License | None (no profile) | 110 × 110 mm frame for 8.5 × 20 mm coreless motors. About 18 g in PLA at 20% infill, 0.2 mm layers, no supports. No flight evidence posted. | [MW](https://makerworld.com/en/models/2580472-esp32-drone), [API](https://api.bambulab.com/v1/design-service/design/2580472) |
| Quadcopter – 3D Printable, STM32 mcu | IMLABS | 2025-08-13 | 834 / 735 / 2,126 / 126 / 9 / 7 | CC BY-NC | PET-CF, 151 g, 6.6 h; P2S listed; 5.0★ (n=2) | STM32F411 "Blackpill" flight controller running INAV 6 with an MPU6500. Suggests PA6-CF/PPS-CF for critical parts. | [MW](https://makerworld.com/en/models/1695470-quadcopter-3d-printable-stm32-mcu), [API](https://api.bambulab.com/v1/design-service/design/1695470) |
| Micro brushed FPV drone frame – 65mm class | Stasiul_3D | 2024-05-09 | 152 / 57 / 116 / 66 / 2 / 12 | Standard; MW-exclusive | PLA, 17 g, 0.8 h; P2S listed; 4.67★ (n=6) | Brushed motors with an "Acro Naze32 BRUSH" flight controller. One commenter asked for a flight video (2025-12-06). | [MW](https://makerworld.com/en/models/459049-micro-brushed-fpv-drone-frame-65mm-class), [API](https://api.bambulab.com/v1/design-service/design/459049), [comments](https://api.bambulab.com/v1/comment-service/commentandrating?designId=459049&offset=0&limit=40&type=0) |
| 8520 coreless drone frame (8520空心杯无人机机架) | MAIMAI | 2025-02-17 | 64 / 13 / 23 / 0 / 2 / 0 | Standard | None | 120 × 150 mm wheelbase with 3 mm arms. The example build uses 8520 motors, a 1S 1000 mAh pack, a cheap receiver board and remote (≈50 RMB) and a Wi-Fi camera (≈50 RMB). | [MW](https://makerworld.com/en/models/1119557-8520-hollow-cup-drone-frame-fpv-frame-large-circle), [API](https://api.bambulab.com/v1/design-service/design/1119557) |
| 8520 coreless frame, 85 mm wheelbase | 造物工作室 | 2026-05-14 | 22 / 6 / 28 / 16 / 1 / 1 | MakerWorld Exclusive License | PETG, 19 g, 1.3 h; P2S listed | Frame only | [MW](https://makerworld.com/en/models/2799521-8520-coreless-motor-frame-85mm-wheelbase), [API](https://api.bambulab.com/v1/design-service/design/2799521) |
| Micro Wasp 103mm Quadcopter | mickkn | 2024-10-31 | 51 / 20 / 51 / 0 | CC BY | None | Coreless brushed motors, QR Ladybird props, Betaflight 3 | [MW](https://makerworld.com/en/models/746778-micro-wasp-103mm-quadcopter), [API](https://api.bambulab.com/v1/design-service/design/746778) |
| 716 4-Axis Frame (716四轴机架) | icode | 2024-07-03 | 44 / 10 / 29 / 17 / 9 / 0 | Standard; MW-exclusive | PETG, 9 g, 0.6 h; P2S listed | Frame for 716 coreless motors | [MW](https://makerworld.com/en/models/523147-716-quadruped-frame-716-4-axis-frame), [API](https://api.bambulab.com/v1/design-service/design/523147) |
| Brushed motor drone frame (made for DX 2 drone) | Omaker22 | 2024-10-26 | 46 / 17 / 39 / 18 | Standard; MW-exclusive | PLA, 25 g, 1.6 h; P2S listed | Replacement frame for a brushed toy drone | [MW](https://makerworld.com/en/models/732885-brushed-motor-drone-frame-made-for-dx-2-drone), [API](https://api.bambulab.com/v1/design-service/design/732885) |
| WiFiLink2 OpenIPC 2-inch drone frame and canopy | user_4120417674 | 2025-04-21 | 42 / 20 / 34 / 8 | CC BY-NC-SA | PA-CF + TPU, 45 g, 3.0 h; P2S listed | RunCam WiFiLink2 (OpenIPC) digital video, 1103 KV11000 motors, build ≈73 g | [MW](https://makerworld.com/en/models/1341984-wifilink2-openipc-2-inch-drone-frame-and-canopy), [API](https://api.bambulab.com/v1/design-service/design/1341984) |
| Fully Functional 3D-Printed Drone | ToniDuspara | 2025-08-20 | 929 / 670 / 1,929 / 88 / 28 / 37 | Standard | PETG, 791 g, 45.5 h (3 walls, 80% infill); P2S listed; 4.86★ (n=7) | Master's-thesis air-quality drone that can be flown as a normal RC quad. Optional NodeMCU ESP8266 + PMS5003 sensor. The free version includes 3MF, wiring and BOM; a "Premium Version" with a full step-by-step manual is announced as "coming soon" (presumably paid). | [MW](https://makerworld.com/en/models/1716301-fully-functional-3d-printed-drone), [API](https://api.bambulab.com/v1/design-service/design/1716301) |
| Crazyflie Casing | Kurzhalsgiraffe | 2025-05-06 | 5 / 6 / 5 / 5 | Standard | PETG, 308 g, 8.2 h | A casing, not a flight frame. The only Crazyflie item found. | [MW](https://makerworld.com/en/models/1391496-crazyflie-casing), [API](https://api.bambulab.com/v1/design-service/design/1391496) |
| DIY ESPNOW TX | Tham Trung | 2026-08-09 | 3 / 1 / 3 / 0 | Standard (Community Use) | PETG, 146 g; P2S listed | ESP32-S2 ESP-NOW transmitter housing for robots/drones | [MW](https://makerworld.com/en/models/3150917-diy-espnow-tx), [API](https://api.bambulab.com/v1/design-service/design/3150917) |

- Keyword searches for "LiteWing", "StampFly", "Flix", "Flix drone", "Flix quadcopter", "ESP-Drone" and "crazyflie" returned no drone frames, apart from the Crazyflie casing above. The "Flix" hits were unrelated: a tea-light lid and a dragon model. Sweep data from the [Bambu search API](https://api.bambulab.com/v1/search-service/select/design2?keyword=LiteWing&limit=50&offset=0); observed 2026-10-05.
- ESP-FLY remix comments are requests for a STEP file to change the legs for a thicker battery (2025-05-15), or to fit 7×20 mm motors with 55 mm props (2026-09-12). No explicit flight report appeared in its 8 comments and ratings — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=1530477&offset=0&limit=20&type=0).
- Brushed-motor propellers on MakerWorld: "brushed motor proppeller with 1mm shaft" (296 DL) and "drone proppeller v2 1mm shaft brushed motor" (218 DL), both by Omaker22 — [MW 736562](https://makerworld.com/en/models/736562), [MW 922050](https://makerworld.com/en/models/922050) (metrics from the [search API](https://api.bambulab.com/v1/search-service/select/design2?keyword=brushed%20drone&limit=50&offset=0)).

#### Most popular general printable multirotor frames on MakerWorld (need an RC radio; no phone control out of the box)
| Design | Designer | Created | DL / L / C / P / B / Cm | License | Main Bambu profile(s) (all P2S-listed unless noted) | Electronics noted by designer | Sources |
|---|---|---|---|---|---|---|---|
| BM Aether 4 (4-inch unibody), staff pick | Dr. J. Ma (@majianjia) | 2024-07-15 | 12,834 / 7,556 / 16,679 / 4,291 / 1,273 / 1,096 | MakerWorld Exclusive License | 8 profiles. Frame V1.1: PLA, 142 g, 8.9 h, 0.2 mm, 0% infill, 4.92★ (n=363). TPU GPS holder and antenna-mount profiles. | 4–4.5" props, 25.5 mm AIO, DJI O3; 1404/1504 motors on 4S, 2006/2204 on 6S | [MW](https://makerworld.com/en/models/541413-bm-aether-4-the-4-inch-unibody-fpv-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/541413) |
| BM Aether 4 XL (5–6 inch) | srhzrl | 2024-08-17 | 6,425 / 1,843 / 4,307 / 1,400 / 149 / 262 | Standard | PLA, 180 g, 16.9 h (0.1 mm), 4.77★ (n=31). One-piece X1C profile: 165 g, 4.85★ (n=67). | 30.5 mm stacks, 16×16 motor mounts | [MW](https://makerworld.com/en/models/593258-bm-aether-4-xl-the-5-6-inch-fpv-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/593258) |
| Improved "Nano Long Range" Drone | piodeer | 2025-03-06 | 6,164 / 8,327 / 22,756 / 1,977 / 155 / 227 | Standard; MW-exclusive | PLA, 40 g, 1.8 h, 4.87★ (n=55) | ≈100 g 1S/18650 long-range micro | [MW](https://makerworld.com/en/models/1181480-improved-nano-long-range-drone), [API](https://api.bambulab.com/v1/design-service/design/1181480) |
| Worlds Fastest Sub 250 gram FPV Quad | ASTDrones | 2024-05-09 | 4,831 / 2,912 / 6,782 / 1,494 / 127 / 207 | Standard; MW-exclusive | PLA-CF, 46 g, 2.6 h, 4.9★ (n=62) | 3", 20×20 stack, 1408 motors, 4S/6S. The designer warns hard landings will break it. | [MW](https://makerworld.com/en/models/458347-worlds-fastest-sub-250-gram-fpv-quad-drone), [API](https://api.bambulab.com/v1/design-service/design/458347) |
| 3D Printable 5-inch Drone Frame | PecaJosef | 2024-04-03 | 4,202 / 1,290 / 2,631 / 546 / 96 / 165 | Standard; MW-exclusive | PLA, 127 g, 6.7 h (60% gyroid), 4.3★ (n=44) | 5" | [MW](https://makerworld.com/en/models/411258-3d-printable-5-inch-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/411258) |
| 100MPH FPV Race Quad, staff pick | Michael Rechtin | 2024-03-08 | 3,829 / 2,869 / 5,992 / 1,069 / 254 / 356 | CC BY-NC-SA | 6 profiles: PLA 24 g 4.89★ (n=54); PA-CF 65 g 4.81★ (n=37); PLA arms + PLA-CF frame 159 g 4.93★ (n=41) | DJI O3, 4S 1300 mAh | [MW](https://makerworld.com/en/models/236234-100mph-fpv-race-quad), [API](https://api.bambulab.com/v1/design-service/design/236234) |
| LX7 FPV Drone Frame | GetPoached | 2025-01-08 | 3,028 / 1,214 / 2,703 / 946 / 36 / 83 | CC BY-NC-SA | PLA, 89 g, 3.3 h, 4.9★ (n=58) | Summary mentions PETG HF | [MW](https://makerworld.com/en/models/967346-lx7-fpv-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/967346) |
| Transforming Quadcopter | Michael Rechtin | 2024-11-14 | 2,929 / 1,857 / 3,357 / 66 / 129 / 107 | CC BY-NC-SA | PA-CF, 1,164 g, 57.6 h, 4.86★ (n=7) | Large showpiece | [MW](https://makerworld.com/en/models/785654-transforming-quadcopter), [API](https://api.bambulab.com/v1/design-service/design/785654) |
| sub 250g speeddrone 320 km/h | luisengineering | 2026-04-09 | 2,313 / 2,677 / 6,278 / 449 / 71 / 91 | Standard | PA6-CF + PLA-Aero, 63 g, 5.1 h, 4.67★ (n=12) | F722 AIO, 6S | [MW](https://makerworld.com/en/models/2637662-sub-250g-speeddrone-320km-h-fast), [API](https://api.bambulab.com/v1/design-service/design/2637662) |
| [BETA] ManaFly 3" Generative FPV Frame | Manafish | 2025-11-15 | 2,139 / 1,171 / 2,842 / 624 / 37 / 98 | MakerWorld Exclusive License | PETG, 49 g, 3.5 h, 100% infill, 4.85★ (n=20); ABS profile | 25.5 mm AIO or 3" stacks, 1404 motors, O3. The designer says crashes are worse than with carbon fiber. | [MW](https://makerworld.com/en/models/2000546-beta-manafly-3-generative-fpv-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/2000546) |
| 5inch Fpv Drone Frame | Fischi | 2025-09-06 | 2,044 / 686 / 1,716 / 574 / 12 / 34 | CC0 | PLA, 47 g, 2.0 h, 4.0★ (n=6); ABS | 5" | [MW](https://makerworld.com/en/models/1770171-5inch-fpv-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/1770171) |
| Grasshopper5 (5" long range), staff pick | ROBOFUSION | 2024-10-25 | 1,939 / 3,437 / 7,999 / 250 / 114 / 65 | CC BY-NC | PETG, 101 g, 4.6 h, 75% infill, 3.67★ (n=3) | Betaflight/ArduPilot/INAV, 30.5 mm stack, 6S | [MW](https://makerworld.com/en/models/729739-grasshopper5-5-inch-long-range-fpv-frame), [API](https://api.bambulab.com/v1/design-service/design/729739) |
| 3D Printable 3-inch Drone Frame | PecaJosef | 2024-04-18 | 1,891 / 570 / 1,169 / 523 / 51 / 153 | Standard; MW-exclusive | PETG-CF 66 g 4.82★ (n=17); PETG 64 g 4.88★ (n=17); 3.5" PETG 62 g 4.08★ (n=12) | 3"/3.5" | [MW](https://makerworld.com/en/models/434189-3d-printable-3-inch-drone-frame), [API](https://api.bambulab.com/v1/design-service/design/434189) |
| 2 Inch Freestyle FPV Frame | 铪 | 2025-02-09 | 1,480 / 1,409 / 3,134 / 534 / 49 / 152 | Standard; MW-exclusive | PET-CF, 19 g, 1.5 h; O4 version 5.0★ (n=11), analog 4.89★ (n=9) | 25.5 mm AIO, 1202 motors, 2S | [MW](https://makerworld.com/en/models/1088733-2-inch-freestyle-fpv-frame), [API](https://api.bambulab.com/v1/design-service/design/1088733) |
| Tiny Whoop FPV (65 mm), Air65 II-style | SaTL | 2026-01-02 | 1,369 / 709 / 1,547 / 900 / 4 / 40 | Standard; MW-exclusive | PLA, 9 g, 0.12 mm, 3.96★ (n=24); TPU, 10 g | BetaFPV Air65 electronics | [MW](https://makerworld.com/en/models/2189941-tiny-whoop-fpv-for65mm-drone-like-air-65ii-frame), [API](https://api.bambulab.com/v1/design-service/design/2189941) |
| Drone FPV 3,5 in (18 cm) | Gabriel D. Barp | 2025-02-07 | 1,274 / 468 / 1,094 / 438 / 18 / 57 | Standard | PETG-CF + PLA, 62 g, 5.0★ (n=16) | 3.5" | [MW](https://makerworld.com/en/models/1082202-drone-fpv-3-5-in-18cm), [API](https://api.bambulab.com/v1/design-service/design/1082202) |
| Aether 2.5 / 3 | hashi | 2025-12-03 | 837 / 312 / 720 / 316 / 15 / 68 | MakerWorld Exclusive License | PETG-CF, 39 g, 4.69★ (n=13) | 2S, 1104 8600KV | [MW](https://makerworld.com/en/models/2070800-aether-2-5-3), [API](https://api.bambulab.com/v1/design-service/design/2070800) |
| Printable Tinywhoop FPV frame | ELPI | 2025-04-07 | 780 / 569 / 1,202 / 347 / 13 / 36 | Standard; MW-exclusive | PA-CF, 5 g, 5.0★ (n=13) | 1002 motors, O4, 1S | [MW](https://makerworld.com/en/models/1296070-printable-tinywhoop-fpv-frame), [API](https://api.bambulab.com/v1/design-service/design/1296070) |
| LIGHT small tiny whoop frame + prop guards | Lucas-Dynamics | 2025-07-09 | 775 / 443 / 953 / 452 / 11 / 67 | Standard; MW-exclusive | PLA "all parts" 15 g, 4.88★ (n=8) | BetaFPV Meteor75 Pro | [MW](https://makerworld.com/en/models/1590953-light-small-tiny-whoop-fpv-drone-frame-prop-guards), [API](https://api.bambulab.com/v1/design-service/design/1590953) |
| 75mm 3D-Printed Prestress FPV Frame | 铪 | 2025-01-20 | 734 / 397 / 813 / 351 / 29 / 68 | Standard; MW-exclusive | PET-CF + TPU, 10 g, 4.77★ (n=13) | BetaFPV Air75 | [MW](https://makerworld.com/en/models/1016319-75mm-3d-printed-prestress-fpv-frame), [API](https://api.bambulab.com/v1/design-service/design/1016319) |
| World's Smallest FPV Drone | Hoarder Sam | 2025-10-08 | 692 / 2,254 / 4,882 / 195 / 42 / 129 | CC BY-NC | PLA, 3 g, 4.86★ (n=7) | BetaFPV Air65 electronics | [MW](https://makerworld.com/en/models/1867906-world-s-smallest-fpv-drone), [API](https://api.bambulab.com/v1/design-service/design/1867906) |
| 3 inch FPV Drone Frame sub250 | S4rTuS | 2026-04-27 | 608 / 585 / 1,652 / 233 / 15 / 70 | MakerWorld Exclusive License | PETG-CF profiles (52–55 g); TPU bumper | SpeedyBee F405 Mini, 1404 2700KV, Walksnail, ELRS, 6S | [MW](https://makerworld.com/en/models/2727274-3-inch-fpv-drone-frame-sub250), [API](https://api.bambulab.com/v1/design-service/design/2727274) |
| 200 km/h 3D Printed Drone For Under $200 CAD | Hydrance | 2026-03-26 | 592 / 1,622 / 5,006 / 100 / 31 / 53 | Standard | PETG + TPU, 232 g, 8.8 h (0.6 mm nozzle) | F405 60A stack, 2207 1750KV, 6S, 5", ≈600 g | [MW](https://makerworld.com/en/models/2573757-200-km-h-3d-printed-drone-for-under-200-cad), [API](https://api.bambulab.com/v1/design-service/design/2573757) |
| Tinywhoop Frame – Meteor 75 Pro | Tommy 3D Lab | 2026-01-18 | 506 / 475 / 1,114 / 233 | Standard | PLA, 24 g, 4.83★ (n=6) | BetaFPV Meteor75 Pro, O4 | [MW](https://makerworld.com/en/models/2264312-tinywhoop-frame-meteor-75-pro), [API](https://api.bambulab.com/v1/design-service/design/2264312) |
| Tiny CineWhoop 2S 40mm Drone | Wixz | 2026-05-11 | 32 / 17 / 50 / 11 | CC BY-NC-SA | Base printer P2S. PA6-CF + PETG + TPU for AMS, 28 g. | BetaFPV F4 2–3S 20A AIO (ELRS), 1103 motors, O4 | [MW](https://makerworld.com/en/models/2786698-tiny-cinewhoop-2s-40mm-drone), [API](https://api.bambulab.com/v1/design-service/design/2786698) |
| Air 65 Compatible Ducted Frame (TPU for AMS) | chris | 2026-03-03 | 35 / 17 / 46 / 14 | CC BY-SA | PLA + TPU for AMS, 18 g | Air65 | [MW](https://makerworld.com/en/models/2472238-air-65-compatible-ducted-frame-tpu-for-ams), [API](https://api.bambulab.com/v1/design-service/design/2472238) |
| FPV whoop light weight | SirPrintAlot | 2025-03-30 | 153 / 104 / 230 / 49 | Standard; MW-exclusive | PLA + TPU, 7 g | Happymodel EX0802 19000KV, DiamondF4 | [MW](https://makerworld.com/en/models/1266946-fpv-whoop-light-weight), [API](https://api.bambulab.com/v1/design-service/design/1266946) |
| Ductless 65mm Whoop Frame | NOYFB | 2025-07-08 | 179 / 82 / 130 / 117 | CC BY-NC-SA | PLA, 3 g, 4.33★ (n=6) | Air65 AIO | [MW](https://makerworld.com/en/models/1587620-ductless-65mm-whoop-frame), [API](https://api.bambulab.com/v1/design-service/design/1587620) |
| Picolongrange FPV drone | UX7_Designs | 2026-01-01 | 120 / 476 / 1,162 / 61 | CC BY-NC | PLA, 5 g (ABS+ recommended in the text) | 1S AIO, ELRS, 0802 motors, 1.6" props | [MW](https://makerworld.com/en/models/2183502-picolongrange-fpv-drone), [API](https://api.bambulab.com/v1/design-service/design/2183502) |
| Foldable 5" FPV Drone Frame – Modular | Patryk_Maker | 2026-05-06 | 239 / 189 / 569 / 77 | CC BY-NC | Base printer P2S. ABS/PETG, 132 g. | 30.5 mm stack | [MW](https://makerworld.com/en/models/2766540-foldable-5-fpv-drone-frame-modular), [API](https://api.bambulab.com/v1/design-service/design/2766540) |

- Flight evidence in MakerWorld comments:
  - **Aether 4:** builders list working builds (JHEMCU GHF405 AIO + 1404 2750KV + Caddx Vista + ELRS, 2024-10-12; BetaFPV 25A AIO + 1404 4500KV printed in Bambu PETG-CF, 2024-12-25). A 5★ rater reported "it flies" but found it hard to assemble (2025-01-05). A first-time builder could not reach the SpeedyBee F405 USB-C port and had to drill holes (2024-07-26) — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=541413&offset=0&limit=40&type=0).
  - **100MPH Race Quad:** comments include "very stable and flies very well" (2024-03-29) and "Flies really well, the vibrations are almost null" (2024-04-22). One builder flew a PETG/PA6-CF build "amazingly" for about 5 sessions before hitting a sign (2025-06-09) — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=236234&offset=0&limit=40&type=0).
  - **Nano Long Range:** one builder reports "it flies!" but the battery pops out of its contacts on the slightest crash (2026-08-02). Another found a Samsung 35E 18650 left it "more of a hovercraft" (2025-12-05). A user asked whether it can connect to a phone (2025-06-04) — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=1181480&offset=0&limit=40&type=0).
  - **Sub-250 (ASTDrones):** a 5★ rater warns "not for the faint hearted… this probably shouldn't be your first one" and says an ABS print gave "disastrous" vibrations (2025-03-08) — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=458347&offset=0&limit=40&type=0).
  - **SaTL 65 mm whoop:** "Printed in TPU for AMS and it came out great" (5★). Another user broke three PLA prints at the arms (2026-04-04), and one comment says "only print in TPU, PLA doesn't work" (2026-08-03) — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=2189941&offset=0&limit=40&type=0).
  - **ELPI tinywhoop:** a 2026-05-15 commenter says the Meteor75 Pro flight controller doesn't fit or work with the dampers and does "not recommend printing" — [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=1296070&offset=0&limit=40&type=0).
- "Drone-like" toys rank above real frames on MakerWorld by downloads but are not drones. Examples: "Strong Flying Propeller / Pull Copter" (93,635 DL), "Pocket Copter" (25,296 DL), "Baby's First Quadcopter" (1,986 DL, a non-flying toy) and "EasyCopter" (1,751 DL, a thrown wind-spinner) — [search API](https://api.bambulab.com/v1/search-service/select/design2?keyword=quadcopter&limit=50&offset=0); [API 79083](https://api.bambulab.com/v1/design-service/design/79083); [API 2669483](https://api.bambulab.com/v1/design-service/design/2669483).

#### Contests and official Bambu projects
- The only contests attached to drone-titled designs were toy-oriented. "Baby's First Quadcopter" was entered in MakerWorld's "Flying Objects Design Contest" and "EasyCopter" in the "Wind Spinner Design Contest" — [API 79083](https://api.bambulab.com/v1/design-service/design/79083); [API 2669483](https://api.bambulab.com/v1/design-service/design/2669483).
- None of the 2,974 unique designs returned by the two sweeps (2,269 + 705) has `is_official = true`. No official Bambu Lab drone model was found — [search API](https://api.bambulab.com/v1/search-service/select/design2?keyword=drone&limit=50&offset=0).
- Bambu's closest RC-aircraft tie-in is "GASB ONE – World's Most Printed RC Plane | x Bambu" by Carletto73. It is a fixed-wing plane, not a multirotor, and is not flagged official. Created 2026-01-05; 4,524 DL / 3,348 L / 1,539 P on MakerWorld; P2S-based PETG profile (503 g, 21.7 h, 4.9★, n=77) — [MW](https://makerworld.com/en/models/2202921-gasb-one-world-s-most-printed-rc-plane-x-bambu); [API](https://api.bambulab.com/v1/design-service/design/2202921).
- Bambu's own RC ecosystem is CyberBrick (Kickstarter announced for 15 March 2025). Bambu-forum threads about it discuss RC cars, boats, range and EdgeTX control. No CyberBrick drone thread appeared in forum search results — [forum: CyberBrick Kickstarter](https://forum.bambulab.com/t/cyberbrick-is-coming-to-kickstarter-march-15th/150677); [forum search JSON "cyberbrick drone"](https://forum.bambulab.com/search.json?q=cyberbrick%20drone).

### Inferences
- MakerWorld is the best place for Bambu-ready general FPV frames: high print counts, many ratings and P2S-listed profiles. It is a poor place for phone-flown designs. Phone-control content (ESP-FLY, Flix, LiteWing) lives on YouTube, GitHub and Instructables, and its MakerWorld footprint is tiny (ESP-FLY remix: 423 DL).
- Only a handful of these profiles use filaments the user already has (PLA, PETG, TPU): ESP-FLY remix (PLA), DIY Drone Frame & Remote (PLA), BM Aether 4 frame (PLA, 0% infill), Aether 4 XL (PLA), 100MPH (PLA option), LX7 (PLA), ManaFly 3" (PETG), PecaJosef 3" (PETG option) and SaTL whoop (TPU option). Many top FPV frames default to CF-filled filaments (PLA-CF, PETG-CF, PA-CF, PA6-CF).
- Designs whose text calls for "TPU for AMS" (Air 65 ducted, Tiny CineWhoop 2S) use a harder TPU than 85A. Whether the user's TPU 65D can stand in is a materials question for the materials researcher.

### Gaps
- MakerWorld "makes" photos were not opened, and comments were read only for 12 designs (first 40 per design, keyword-filtered). Flight-success rates are anecdotal.
- Each design's own boost count is reported. Bambu's API "hotScore"/"designScore" ranking signals were not used.
- No MakerWorld contest specifically for drones was found. Contest history before the two contests above could not be checked because WebSearch budget was exhausted.

## Q2. Printables, Thingiverse, Thangs, Cults3D (free and paid), GrabCAD and Onshape: what drone designs exist, and with what metrics?

### Takeaway
Printables is the largest open repository for printable FPV frames. Its top drone frames are ProgrammaDan's Goblin (7,664 downloads) and the WEareFPV JeNo family (6,441 for the 5.1"). It also has a handful of 8520/coreless brushed frames, but no ESP32 phone-drone design with real traction. The only ESP-specific item, "esp32 cam drone", has 35 downloads and no files yet. The flagship ESP32 phone design, ESP-FLY, is sold as a paid STL on Cults3D; its price could not be verified because of Cloudflare. Thingiverse, Thangs and GrabCAD added little that is phone-specific.

### Cited Findings

#### Printables (public GraphQL API; 62 queries × 2 orderings; 1,108 unique results; observed 2026-10-05)
- Method: the queries searched by "popular" and "best match" for the same term families as on MakerWorld. Fields read were downloadCount, likesCount, makesCount, datePublished, license, premium and price. No result in this note is premium or priced — [Printables GraphQL](https://api.printables.com/graphql/). Note that `datePublished` for old IDs (for example Goblin, ID 396395) shows recent dates. It probably reflects re-publication or updates.

Top Printables multirotor frames and builds by downloads:

| Design | Designer | DL / Likes / Makes | License | Notes (from listing) | Source |
|---|---|---|---|---|---|
| Goblin FPV Drone (3") | ProgrammaDan | 7,664 / 1,931 / 25 | CC BY-NC | Fully printed 3". Carbon-fiber-nylon body, PETG top. 16×16 FC/ESC stack (Flywoo GN405 Nano), 1106 motors, ELRS. | [Printables](https://www.printables.com/model/396395-goblin-fpv-drone) |
| JeNo 5.1" Drone Frame | WEareFPV | 6,441 / 549 / 3 | CC BY | 5.1"/6", DJI O3/O4 Pro integration, 6 mm arms, English version on GitHub | [Printables](https://www.printables.com/model/339099-jeno-51-drone-frame) |
| JeNo 7" Drone Frame | WEareFPV | 4,332 / 667 / 2 | CC BY | 7" | [Printables](https://www.printables.com/model/847975-jeno-7-drone-frame) |
| Dragonfly FPV Drone (5") | ProgrammaDan | 4,262 / 995 / 11 | CC BY-NC | Fully printable modular 5" | [Printables](https://www.printables.com/model/481521-dragonfly-fpv-drone) |
| JeNo 3"/3.5" | WEareFPV | 3,818 / 251 / 3 | CC BY | 3–3.5" | [Printables](https://www.printables.com/model/459702-jeno-335-drone-frame) |
| Wraith FPV Drone (4"/3.5") | ProgrammaDan | 3,589 / 702 / 25 | CC BY-NC | CF-PA6 body, ABS top; SpeedyBee Mini F405, 1404 4600KV | [Printables](https://www.printables.com/model/1068065-wraith-fpv-drone) |
| Nighthawk & Phoenix FPV Drone | ProgrammaDan | 3,302 / 586 / 9 | CC BY-NC | Printable FPV family | [Printables](https://www.printables.com/model/518729-nighthawk-phoenix-fpv-drone) |
| Sub 250g Autonomous Drone Platform | Basement Creations | 3,182 / 1,003 / 2 | CC BY-NC-SA | "Contest winning" sub-250 g ArduPilot drone with MAVLink telemetry over ExpressLRS. The author recommends PETG, carbon PETG or CF-nylon PA12, and warns PLA can soften in the sun. | [Printables](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform) |
| FPV drone – featured on GreatScott! (6" deadcat) | andreirusu99 | 2,930 / 583 / 5 | CC BY-NC | Used in GreatScott!'s FPV build guide | [Printables](https://www.printables.com/model/196607-fpv-drone-featured-on-greatscott) |
| Leopard FPV Drone (5") | ProgrammaDan | 2,032 / 761 / 9 | CC BY-NC | Printable 5" | [Printables](https://www.printables.com/model/1517629-leopard-fpv-drone) |
| FPV DRONE ("Drone frame for Arduino RC") | KendinYap | 1,995 / 378 / 0 | CC BY-NC-SA | PLA body; PETG/ABS/ASA arms | [Printables](https://www.printables.com/model/916200-fpv-drone) |
| 2" FPV Drone Frame | kaschberle | 1,829 / 142 / 5 | GPL-3.0 | ~10–13 g monocoque; ASA/PCCF recommended | [Printables](https://www.printables.com/model/1271554-2-fpv-drone-frame) |
| The PickleWhoop (20/25/30) | ledroneclub | 1,436 / 188 / 7 | CC BY | Cinewhoop frame with carbon guards | [Printables](https://www.printables.com/model/281119-the-picklewhoop-20-25-30-cinematic-whoop-frame) |
| 18650 Micro Foldable FPV Drone | FPV GEEK | 1,180 / 1,209 / 4 | CC BY-SA | Fully printed foldable long-range; up to 18 min on one 18650 | [Printables](https://www.printables.com/model/1081158-18650-micro-foldable-fpv-drone) |
| Brushed Drone Frame | Narrow | 1,157 / 57 / 1 | CC BY-NC | For 8.5 mm coreless brushed motors; ducted with prop guards; no supports | [Printables](https://www.printables.com/model/839744-brushed-drone-frame) |
| BreakMe Drone – Complete Frame Kit | CarlBloor | 1,011 / 438 / 0 | CC BY-NC | AIO FC list provided; one-click PLA gcode for Prusa MK4S | [Printables](https://www.printables.com/model/1118064-breakme-drone-complete-frame-kit) |
| JeNo Pocket (2.5") | WEareFPV | 964 / 71 / 2 | CC BY | O4 Lite | [Printables](https://www.printables.com/model/1175339-jeno-pocket-drone-frame) |
| Micro Quad (Whoop) Brushed Drone Frame | wrcrooks | 796 / 44 / 1 | CC BY-NC | 8520 brushed motors, BetaFPV F4 Brushed FC, 1S 750 mAh, 60 mm props. Print at 0.2 mm, 4 walls, 100% infill. | [Printables](https://www.printables.com/model/779536-micro-quad-whoop-brushed-drone-frame) |
| 65mm Tiny Whoop frame | blueprint3D | 762 / 50 / 0 | CC BY | Simple 65 mm whoop | [Printables](https://www.printables.com/model/443817-65mm-tiny-whoop-frame) |
| Mini Drone Frame 8mm Motors | Logichesky | 732 / 39 / 0 | CC0 | 8 mm coreless, 45 mm props, PETG | [Printables](https://www.printables.com/model/205565-mini-drone-frame-8mm-motors) |
| 75mm Tiny Whoop frame | koiiiak | 731 / 42 / 0 | GPL-3.0 | 75 mm whoop | [Printables](https://www.printables.com/model/813437-75mm-tiny-whoop-frame) |
| Fractal F65/F75 Whoop – Official 3D Printed Files | Fractal Engine | 691 / 53 / 1 | CC BY-NC-SA | Manufacturer-published printable whoop frames | [Printables](https://www.printables.com/model/727402-fractal-f65-pro-f75-pro-max-whoop-official-3d-prin) |
| TinaTina 90 mm brushless (1103, 20×20) | Jan Olejnik | 673 / 181 / 7 | CC0 | Screwless, zip-tie frame (Prusa build guide) | [Printables](https://www.printables.com/model/103-tinatina-90mm-brushless-drone-frame-110320x20mm) |
| Tinyflex HD – 75 mm rubber whoop (O4 Lite) | world_4723897 | 577 / 343 / 0 | CC BY-NC-ND | Designed for Bambu "TPU for AMS" | [Printables](https://www.printables.com/model/1764119-tinyflex-hd-75mm-rubber-whoop-o4-lite) |

- Phone-adjacent and coreless items on Printables:
  - "esp32 cam drone": 35 DL; files not yet posted ("I will add the print files once I have finished it") — [Printables](https://www.printables.com/model/947634-esp32-cam-drone).
  - "Mini 100 Brushed Frame (8520)": 369 DL. Printed in Flex-65 (flexible) filament and described as "practically indestructible" — [Printables](https://www.printables.com/model/35684-mini-100-brushed-frame-8520-motors).
  - "75MM WHOOP FRAME FOR 8520 BRUSHED MOTORS": 133 DL, a replacement for the LDARC Tiny R7 — [Printables](https://www.printables.com/model/646747-75mm-whoop-frame-for-8520-brushed-motors).
  - "Mini Drone – For 816 micro motors": 157 DL; "it flies well"; 3.7 V 650 mAh — [Printables](https://www.printables.com/model/697104-mini-drone-for-816-micro-motors).
  - "Mini Drone Frame for 7mm Motor": 462 DL, CC0 — [Printables](https://www.printables.com/model/1237294-mini-drone-frame-for-7mm-motor).
  - "Customizable Micro Brushed Quadcopter": 77 DL. Holds the Blade Nano QX FC with 6×15 mm motors; the designer moved from ABS to nylon for durability — [Printables](https://www.printables.com/model/99453-customizable-micro-brushed-quadcopter).
  - "Brushed quadcopter frame" (7 mm motors, 30.5 mm FC): 117 DL — [Printables](https://www.printables.com/model/1084696-brushed-quadcopter-frame).
  - "Coreless Motor Quadcopter": 30 DL — [Printables](https://www.printables.com/model/1417334-coreless-motor-quadcopter).
- Toy-drone (Eachine E010) frames exist but are niche. "Super Lightweight (but Durable!) Frame for Eachine E010 TinyWhoop" has 108 DL — [Printables](https://www.printables.com/model/451693-super-lightweight-but-durable-frame-for-eachine-e0).
- MAVLink/ArduPilot printables, both by Basement Creations: the Sub-250 g platform above, and "Ardupilot Tricopter Frame – Autonomous FPV Test Platform" (352 DL, CC BY) — [Printables](https://www.printables.com/model/534093-ardupilot-tricopter-frame-autonomous-fpv-test-plat).
- Arduino-based: "DIY Arduino Drone (SRD-1)", 252 DL, CC BY-SA. Uses three Arduino Nanos, 2212 motors and 30 A ESCs; GitHub MilosRasic98/SRD-1 — [Printables](https://www.printables.com/model/1212696-diy-arduino-drone-srd-1).
- Crazyflie: "Crazyflie 2.1 cage / prop guard", 288 DL, CC BY — [Printables](https://www.printables.com/model/76336-crazyflie-21-cage-prop-guard).
- Probable re-upload: "Mini drone" by User_381088 (469 DL) has the same description and Prusa video link as TinaTina — [Printables 668221](https://www.printables.com/model/668221-mini-drone); [Printables 103](https://www.printables.com/model/103-tinatina-90mm-brushless-drone-frame-110320x20mm).
- No Printables listing was found for ESP-FLY, Flix, LiteWing, StampFly or ESP-Drone frames. Queries "esp-drone", "litewing", "flix drone", "stampfly" and "crazyflie" returned unrelated or accessory items — [Printables GraphQL](https://api.printables.com/graphql/).

#### Cults3D (paid and free)
- ESP-FLY's original 50 mm frame STL is a paid download on Cults3D. The author says "Purchase the STL files from Cults 3D" — [Instructables ESP-FLY](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/); [Cults3D listing](https://cults3d.com/en/3d-model/gadget/esp-fly-an-esp32-micro-drone-body-frame-3d-design-stl-files).
- Its price, sales count and license could not be read: Cults3D returned a Cloudflare challenge (HTTP 403) to curl — [Cults3D listing](https://cults3d.com/en/3d-model/gadget/esp-fly-an-esp32-micro-drone-body-frame-3d-design-stl-files).
- Pro Know DIY's ESP32 drone links a "3D Printed Version of Drone [.stl files]" on Cults3D. Free or paid is not verified — [GitHub README](https://github.com/proknowdiy/esp32_drone); [Cults3D link](https://cults3d.com/:3007974).
- Search snippets (pages not opened) suggested Cults3D also hosts an "ESP32-S3 drone frame" and a 110 × 110 mm frame for 8.5 × 20 coreless motors. The latter matches the MakerWorld "Esp32 Drone" description. Unverified — [search result URL](https://cults3d.com/:1576638).
- Other paid or unknown listings found only by title: a CGTrader "esp32 micro drone frame" — [CGTrader](https://www.cgtrader.com/3d-print-models/hobby-diy/robotics/esp32-micro-drone-frame). Two Gumroad items, "AntoftDesign Trainer Drone 200" and "HouseRipper Drone 200" (contents not visible) — [Gumroad 1](https://antoftdesign.gumroad.com/l/fsghF); [Gumroad 2](https://antoftdesign.gumroad.com/l/eDRch).

#### Thingiverse
- "ESP-WROOM-32 Drone Frame" by mongoosereborn: CC0, published 2023-03-04, 0 likes and 0 comments (JSON-LD). Described as a redesign with less weight, motor-wire routing loops and rubber-band battery hooks — [Thingiverse thing:5890481](https://www.thingiverse.com/thing:5890481).
- Thingiverse search pages are rendered client-side and its API needs a token, so a systematic Thingiverse sweep could not be done. WebSearch for Thingiverse returned mainly non-drone ESP32 items (a PIDFlight lap timer, rovers) — [Thingiverse search](https://thingiverse.com/search?page=1&q=esp32); [Drone Timer (PIDFlight ESP32)](https://www.thingiverse.com/thing:4228550).

#### Thangs
- Thangs search for "esp32 drone" returned mostly ESP32 enclosures and non-flying "drone" figurines. The only flying-drone hit was "18650 Micro Foldable FPV Drone", which is also on Printables — [Thangs search](https://thangs.com/search/esp32%20drone?scope=all).

#### GrabCAD (public API, sorted by downloads)
- "esp32 drone" returned 4 results, none a flying drone (mecanum robots). "esp32 quadcopter" returned 0 — [GrabCAD API](https://grabcad.com/community/api/v1/models?page=1&per_page=12&query=esp32%20drone&sort=most_downloaded).
- Small printable multirotors on GrabCAD:
  - "65mm Frame 615 Brushed Motors": 410 DL, 2019-07-25 — [GrabCAD](https://grabcad.com/library/65mm-frame-615-brushed-motors-1)
  - "3D Printed Brushless Whoop mini FPV drone": 376 DL, 2020-07-18 — [GrabCAD](https://grabcad.com/library/3d-printed-brushless-whoop-mini-fpv-drone-1)
  - "Quadcopter Frame 8520": 167 DL, 2024-08-04 — [GrabCAD](https://grabcad.com/library/quadcopter-frame-8520-1)
  - "65mm Drone Frame": 492 DL, 2019 — [GrabCAD](https://grabcad.com/library/65mm-drone-frame-1)
- GrabCAD's most-downloaded "quadcopter frame" entries are mostly CAD references of commercial frames rather than print-ready designs: TBS Discovery 7,162 DL, ZMR250 6,089 DL, DJI F450 5,267 DL — [GrabCAD API](https://grabcad.com/community/api/v1/models?page=1&per_page=12&query=quadcopter%20frame&sort=most_downloaded).

#### Onshape / editable CAD
- Editable CAD is offered by Jonas Gartner's ESP32 drone (Onshape links via the project's GitHub) — [MakerWorld](https://makerworld.com/en/models/1211264-diy-drone-frame-remote). Flix ships STEP files of its frame in its repo — [Flix README](https://github.com/okalachev/flix).

### Inferences
- For phone-flyable designs, Printables and Thingiverse are not where the action is. Their ESP32 drone content is either missing or has negligible downloads. Printables is valuable as a source of free, CC-licensed brushed-coreless frames that could host an ESP-Drone or Flix-style board. "Brushed Drone Frame" and "Micro Quad (Whoop) Brushed" are the most-downloaded such frames.
- The ESP-FLY original frame is behind a paywall (Cults3D). The free MakerWorld remix by Bennni is a practical alternative for a Bambu user. Fit to the ESP-FLY electronics is implied by its design intent but has not been independently confirmed in comments.

### Gaps
- Cults3D price, sales and license for ESP-FLY are unknown (Cloudflare).
- Thingiverse could not be swept, so popular Thingiverse ESP-Drone/Crazyflie/8520 frames may be missing. Likewise for MyMiniFactory: a "120 Quadcopter modular frame" was seen only as a search title — [MyMiniFactory](https://www.myminifactory.com/object/3d-print-64815).
- Public Onshape documents could not be searched (requires login).
- GitLab was not searched.

## Q3. GitHub repos with printable frames and/or firmware for phone-flown drones: stars, last commit, license

### Takeaway
The phone-capable ESP32 drone ecosystem on GitHub is dominated by three firmware lines. Circuit-Digest's ESP-Drone fork (2,461★) is the LiteWing/ESP-FLY firmware base. Espressif's esp-drone (2,219★) has an official iOS/Android app but only limited support since December 2022. Flix (2,044★, pushed 2026-09-30) is the only one of the three that ships its own 3D-printed frame (STL+STEP) and flies from a phone via MAVLink apps. Two problems for reuse: Flix has no LICENSE file, and Circuit-Digest's fork has no detected license.

### Cited Findings
GitHub metadata comes from GitHub's repository search API, read 2026-10-05. "Pushed" is the last push date, used as a proxy for the last commit. "License" is GitHub's SPDX detection; "none" means no license file was detected — [GitHub search API (via MCP), e.g. repo:okalachev/flix](https://github.com/okalachev/flix).

| Repo | ★ / forks | Created → last push | License | What it is | Printable frame files? | Phone control? | Source |
|---|---|---|---|---|---|---|---|
| Circuit-Digest/ESP-Drone | 2,461 / 399 | 2023-09-11 → 2026-03-30 | none detected | Circuit Digest's ESP-Drone variant. Its original ESP32 drone build evolved into LiteWing; ESP-FLY credits this firmware. | No (PCB frame) | Yes, Espressif ESP-Drone app | [GitHub](https://github.com/Circuit-Digest/ESP-Drone) |
| espressif/esp-drone | 2,219 / 511 | 2020-06-22 → 2026-08-10 | GPL-3.0 (Crazyflie-derived core) | ESP32/S2/S3 drone firmware. App or gamepad over Wi-Fi; cfclient; ESP-BOX3 joystick via ESP-NOW. "Limited support" since Dec 2022. | No (PCB frames) | Yes. iOS app [EspressifApps/ESP-Drone-iOS](https://github.com/EspressifApps/ESP-Drone-iOS); Android app [EspressifApps/ESP-Drone-Android](https://github.com/EspressifApps/ESP-Drone-Android) | [GitHub](https://github.com/espressif/esp-drone) |
| okalachev/flix | 2,044 / 327 | 2020-09-06 → 2026-09-30 | none (LICENSE → 404) | ESP32 quadcopter "from scratch": Arduino firmware under 2k lines, MAVLink over Wi-Fi/ESP-NOW, Gazebo simulation | Yes: `flix-frame-1.1.stl/.step`, `esp32-holder.stl/.step`, washers | Yes: QGroundControl mobile virtual joystick or the "Mavlink Joystick" Android app | [GitHub](https://github.com/okalachev/flix); [LICENSE 404](https://raw.githubusercontent.com/okalachev/flix/master/LICENSE) |
| DroneBridge/ESP32 | 1,115 / 239 | 2018-08-19 → 2026-09-12 | Apache-2.0 | ESP32 telemetry link (Wi-Fi/ESP-NOW) for MAVLink/MSP/LTM; QGroundControl | n/a | Phone running QGroundControl as a telemetry ground station for ArduPilot/INAV (repo topics list qgroundcontrol/ardupilot/inav; mission use is an inference) | [GitHub](https://github.com/DroneBridge/ESP32) |
| rtlopez/esp-fc | 850 / 198 | 2016-12-19 → 2026-10-03 | MIT | ESP32 flight controller firmware with a Betaflight-configurator workflow. ESP-FLY uses it for ESP-NOW radio control. | n/a | No (radio) | [GitHub](https://github.com/rtlopez/esp-fc); [ESP-FLY README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY) |
| songge8/CF-Drone | 255 / 62 | 2026-03-27 → 2026-09-25 | NOASSERTION | "ESP32 drone flight-control firmware" (Chinese); no README at main/README.md | Unknown | Unknown | [GitHub](https://github.com/songge8/CF-Drone) |
| KyThuatUAV/ESP32_FC | 174 / 47 | 2026-09-06 → 2026-09-27 | GPL-3.0 | ESP32 flight controller R&D (Vietnamese) | Unknown | Unknown | [GitHub](https://github.com/KyThuatUAV/ESP32_FC) |
| fumimaker/drone_meishi | 167 / 20 | 2022-08-24 → 2026-04-18 | none | ESP32 "business card" drone (PCB is the frame) | No | — | [GitHub](https://github.com/fumimaker/drone_meishi) |
| sergiovirahonda/cortex | 157 / 23 | 2026-01-26 → 2026-03-11 | MIT | ESP32-S3 FC with DShot ESCs and nRF24 radio | No | No | [GitHub](https://github.com/sergiovirahonda/cortex) |
| Seeed-Projects/Co-Create_ESP-FLY | 125 / 19 | 2026-04-22 → 2026-04-30 | GPL-3.0 (firmware) | ESP-FLY kit firmware: ESP-Drone variant and ESP-FC option | No STL in repo (printed parts ship in the kit) | Yes, ESP-Drone app over the drone's Wi-Fi AP | [GitHub](https://github.com/Seeed-Projects/Co-Create_ESP-FLY) |
| bitcraze/crazyflie-android-client | 115 / 140 | 2014-02-28 → 2026-09-29 | GPL-2.0 | Crazyflie client for Android over OTG or BLE | n/a | Yes (Crazyflie) | [GitHub](https://github.com/bitcraze/crazyflie-android-client) |
| 01studio-lab/pyDrone | 110 / 38 | 2022-07-13 → 2026-09-30 | MIT | MicroPython ESP32-S3 drone: 716 coreless, QMI8658A IMU, barometer, compass. Android app in repo. Sold on AliExpress. | `hardware/` holds 3D models; PCB frame | Yes, Android app | [GitHub](https://github.com/01studio-lab/pyDrone) |
| pokrc/POKRION-Speed-Drone | 107 / 4 | 2026-03-08 → 2026-07-24 | CC BY-NC-SA 4.0 (README badge; GitHub shows NOASSERTION) | High-speed micro quad with printable STL/3MF shells. Betaflight 4.5, SpeedyBee F405 AIO, 1507 motors, 6S. | Yes | No | [GitHub](https://github.com/pokrc/POKRION-Speed-Drone) |
| ElektroJonas/DIY-Quadcopter | 78 / 5 | 2025-01-08 → 2025-03-31 | none | ESP32 quad control algorithm, schematics, PCB. Likely the GitHub behind MakerWorld "DIY Drone Frame & Remote". | Frame on MakerWorld | ESP32 remote (not phone) | [GitHub](https://github.com/ElektroJonas/DIY-Quadcopter) |
| EDISON-SCIENCE-CORNER/ESP32-DRONE | 68 / 17 | 2025-03-20 → 2025-03-20 | CC0-1.0 | "A simple drone using ESP32"; README nearly empty; HTML main language | Unknown | Not verified | [GitHub](https://github.com/EDISON-SCIENCE-CORNER/ESP32-DRONE) |
| jobitjoseph/LiteWing | 53 / 58 | 2025-03-11 → 2026-05-29 | NOASSERTION | LiteWing ESP32-S3 Wi-Fi drone, open hardware (PCB frame) | No | Yes, mobile app | [GitHub](https://github.com/jobitjoseph/LiteWing) |
| MichalSchwarz/wifi-drone-esp32 | 53 / 7 | 2019-01-26 → 2025-11-09 | GPL-3.0 | ESP32 bridge from a phone/browser (WebSocket) to an FC over IBus. 14 channels; IBus stops if no request arrives within 2 s. Example: F450 with Asgard32 F7. | n/a | Yes (browser) for any IBus FC | [GitHub](https://github.com/MichalSchwarz/wifi-drone-esp32) |
| M5Fly-kanazawa/stampfly_ecosystem; M5Fly-kanazawa/StampFly | 48 / 17; 42 / 51 | 2026-01-05 → 2026-10-03; 2023-07-09 → 2024-11-24 | MIT; none | M5Stack StampFly (molded frame). Flown with ATOM Joy over ESP-NOW per the README. | No | Not documented | [ecosystem](https://github.com/M5Fly-kanazawa/stampfly_ecosystem); [StampFly](https://github.com/M5Fly-kanazawa/StampFly) |
| cifertech/ESP32-Drone | 47 / 13 | 2026-05-02 → 2026-05-03 | MIT | Wi-Fi flight stack with a browser UI: virtual sticks over WebSocket, MPU6050/Madgwick, 250 Hz. Warns its PCB is experimental. | No | Yes (browser) | [GitHub](https://github.com/cifertech/ESP32-Drone) |
| Intelligent-Quads/iq_arduwhoop | 42 / 5 | 2023-08-27 → 2023-10-20 | none | ArduPilot tiny whoop: Flywoo GN745 AIO, GM8 GPS, SiK telemetry | Yes (`stls` folder) | MAVLink GCS via telemetry radio (inference) | [GitHub](https://github.com/Intelligent-Quads/iq_arduwhoop) |
| ace-cooper/AceMicroFlyer-ESP32 | 39 / 8 | 2024-02-02 → 2024-02-12 | none | WIP ESP32-C3 + MPU9250 + 8520 micro drone; Bluetooth control planned | No (carbon frame) | Planned BT | [GitHub](https://github.com/ace-cooper/AceMicroFlyer-ESP32) |
| MilosRasic98/SRD-1 | 36 / 8 | 2021-05-25 → 2025-03-01 | MIT | Arduino-Nano drone (frame on Printables) | Yes (Printables) | No | [GitHub](https://github.com/MilosRasic98/SRD-1) |
| MichaelThamm/autonomous-drone | 26 / 2 | 2023-08-26 → 2025-11-17 | MIT | "3D-printed quadcopter drone fully from scratch" | Yes (per description) | Not documented | [GitHub](https://github.com/MichaelThamm/autonomous-drone) |
| proknowdiy/esp32_drone | 21 / 12 | 2025-05-23 → 2025-05-24 | none | ESP32 drone with 720 coreless motors and 55 mm props; popsicle-stick frame; links a printed version on Cults3D | Cults3D (paid/free unknown) | Yes ("Fully Mobile Controlled" video) | [GitHub](https://github.com/proknowdiy/esp32_drone) |
| CoreCometIndustries/Comet-Drone | 13 / 2 | 2026-05-07 | MIT | ESP32-C3 Super Mini, 0716 coreless, SI2302 MOSFETs, cascaded PID at 250 Hz. WebSocket over its own AP; motors cut after 500 ms Wi-Fi loss. | No | Yes (WebSocket client) | [GitHub](https://github.com/CoreCometIndustries/Comet-Drone) |
| 42dotmk/storm-wing | 1 / 0 | 2024-11-05 → 2026-07-01 | none | "ESP32 remote controlled drone. With a DIY 3D printed chassis" | Per description | Not documented | [GitHub](https://github.com/42dotmk/storm-wing) |

- LiteWing companion repos: the Python library (DhamuVkl/LiteWing-Library, 4★), the Blockly app (Circuit-Digest/LiteWing-Blockly, 2★, created 2026-09-22), and gesture-control and object-tracking demos (7★ each) — [LiteWing-Library](https://github.com/DhamuVkl/LiteWing-Library); [LiteWing-Blockly](https://github.com/Circuit-Digest/LiteWing-Blockly); [gesture](https://github.com/Circuit-Digest/litewing-gesture-control-drone-using-esp32-cflib-python); [tracking](https://github.com/Circuit-Digest/Object-Tracking-Drone-using-LiteWing-).
- Generic DIY phone-app repos for ESP32 drones exist but have almost no stars. Examples: a React Native controller (1★) and a Flutter app (0★) — [AryanBV/drone-controller-app](https://github.com/AryanBV/drone-controller-app); [jameskan1011/ESP32-DRONE-FLUTTER-APP](https://github.com/jameskan1011/ESP32-DRONE-FLUTTER-APP).
- leeebo/ESP-Drone, an earlier ESP32-S2 drone repo from an Espressif-related author, is archived (43★) — [GitHub](https://github.com/leeebo/ESP-Drone).

### Inferences
- Flix is the only high-star repo that bundles a printable frame, firmware and a documented phone-control path. Its lack of a license file means reuse rights are unclear: default copyright applies. That is a flag for anyone remixing or redistributing the frame.
- ESP-Drone-based phone apps are the most turnkey phone-control path: Espressif's app is used by ESP-FLY and LiteWing. Espressif's limited-support status and the Android APK being distributed via pgyer.com (see Q5) are maintenance and trust risks.
- For "general" printable frames, phone control needs either a bridge or a GCS. A Wi-Fi→IBus/SBUS bridge (MichalSchwarz) gives stick control from a phone. A MAVLink GCS (DroneBridge + ArduPilot/INAV) is mainly for telemetry and missions, not primary stick flying.

### Gaps
- Exact last-commit dates (as opposed to last push) and release tags were not fetched.
- songge8/CF-Drone (255★) and KyThuatUAV/ESP32_FC (174★) could not be characterized: no README fetched, non-English, new.
- GitLab was not searched. GitHub code search for STL files was not run.

## Q4. Hackaday.io, Instructables, YouTube (2023–2026), Reddit and Hackaday Prize: build write-ups and their reach

### Takeaway
Video and write-up reach is concentrated on Max Imagination's ESP-FLY. Its main video has ~1.63M views, two follow-ups add ~160k and ~81k, and the Instructable has 46k views. Circuit Digest's ESP32 drone video (~290k) and Edison Science Corner's (~189k) are the other big ESP32 builds, but both use PCB frames. Flix's videos are much smaller (19–39k). For general printable FPV frames, GreatScott! (~592k), Basement Creations' ArduPilot sub-250 (~748k) and Prusa's TinaTina guide (~482k) are the biggest. Reddit could not be accessed.

### Cited Findings

#### YouTube
View counts and likes come from the public returnyoutubedislikeapi.com record (date = its cache timestamp). Titles and channels come from YouTube oEmbed. Upload dates were not available.

| Video | Channel | Views (likes) | Cache date | Design | Sources |
|---|---|---|---|---|---|
| Build The Smallest ESP32 Drone You Can Fly with Your Phone \| ESP-FLY | Max Imagination | 1,632,216 (43,777) | 2026-09-11 | ESP-FLY | [YouTube](https://www.youtube.com/watch?v=V_mZsiZcy7s); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=V_mZsiZcy7s) |
| Build the TINIEST ESP32 Drone (Now a Kit) \| ESP-FLY Tutorial | Max Imagination | 159,526 (3,268) | 2026-09-10 | ESP-FLY kit | [YouTube](https://www.youtube.com/watch?v=3Y_drsQtMs4); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=3Y_drsQtMs4) |
| Fly your ESP32 Drone on Betaflight with Radio Controller \| ESP-FC Tutorial | Max Imagination | 80,712 (2,526) | 2026-09-11 | ESP-FLY + ESP-FC | [YouTube](https://www.youtube.com/watch?v=QTmitUFotik); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=QTmitUFotik) |
| How to build a drone using ESP32? | Circuit Digest | 290,195 (7,477) | 2026-09-10 | CD ESP-Drone / LiteWing precursor | [YouTube](https://www.youtube.com/watch?v=uzZjk0TQKtU); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=uzZjk0TQKtU) |
| How to Make a Cheap ESP32 Drone \| ESP32 Drone \| JLCPCB | EDISON SCIENCE CORNER | 189,186 (3,777) | 2026-09-10 | EDISON ESP32-DRONE | [YouTube](https://www.youtube.com/watch?v=X3m5shEr6eY); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=X3m5shEr6eY) |
| How to Build a Drone with ESP32 from the Scratch! \| KartX Air Wing | KARTIS | 50,897 (959) | 2026-09-16 | KartX Air Wing (details unknown) | [YouTube](https://www.youtube.com/watch?v=n5862vpIyAE); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=n5862vpIyAE) |
| ESP32 Drone Built From Popsicle Sticks – Fully Mobile Controlled! | Pro Know | 48,862 (1,079) | 2026-09-15 | proknowdiy/esp32_drone | [YouTube](https://www.youtube.com/watch?v=8P6MRaY3kbY); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=8P6MRaY3kbY) |
| Flix: open source ESP32-based quadcopter made from scratch | Oleg Kalachev | 38,899 (229) | 2026-09-11 | Flix v0 | [YouTube](https://www.youtube.com/watch?v=8GzzIQ3C6DQ); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=8GzzIQ3C6DQ) |
| Flix v1 — minimalistic ESP32-based quadcopter | Oleg Kalachev | 18,935 (186) | 2026-08-06 | Flix v1.1 printed frame | [YouTube](https://www.youtube.com/watch?v=hT46CZ1CgC4); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=hT46CZ1CgC4) |
| Flix quadcopter in education — RoboCamp | Oleg Kalachev | 3,145 (32) | 2026-08-03 | Flix | [YouTube](https://www.youtube.com/watch?v=Wd3yaorjTx0); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=Wd3yaorjTx0) |
| Build the Fastest, Low-Cost ESP32-S3 Drone \| Step-by-Step Tutorial | Maradi Innovations | 10,202 (127) | 2026-09-15 | unknown design | [YouTube](https://www.youtube.com/watch?v=3xkcffDS6NM); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=3xkcffDS6NM) |
| Build Your Own ESP32 Mobile-Controlled Drone \| Tutorial 1 | OrbitronicX | 2,525 (79) | 2026-08-16 | unknown design | [YouTube](https://www.youtube.com/watch?v=Hs8GTrCqQxE); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=Hs8GTrCqQxE) |
| Build The Smallest ESP32 Drone You Could Fly With Your Phone | Marc Drouinaud Jr | 1,384 (23) | 2026-07-03 | likely an ESP-FLY replication (title match only) | [YouTube](https://www.youtube.com/watch?v=THtfXw2BRMI); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=THtfXw2BRMI) |
| Building a sub 250g Autonomous Drone with Ardupilot and ExpressLRS AirPort Telem | Basement Creations | 748,016 (21,013) | 2026-09-11 | Printables Sub-250 platform | [YouTube](https://www.youtube.com/watch?v=u_ArriXbrR0); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=u_ArriXbrR0) |
| The Idiot's Guide to Making a DIY Drone! (I am the Idiot) | GreatScott! | 592,499 (20,386) | 2026-09-11 | Printables 6" frame by andreirusu99 | [YouTube](https://www.youtube.com/watch?v=DeSDjjicGWY); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=DeSDjjicGWY) |
| How to Build a Cool & Cheap 3D Printed Mini Drone | Prusa 3D | 481,536 (9,862) | 2022-04-09 (stale cache) | TinaTina | [YouTube](https://www.youtube.com/watch?v=gpKcrYcMFKM); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=gpKcrYcMFKM) |
| I 3D Printed a $100 Long Range Drone (And It actually works) | FPV Geek | 219,232 (6,744) | 2026-09-10 | 18650 Micro Foldable (Printables) | [YouTube](https://www.youtube.com/watch?v=Jt7S5Hnu2GU); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=Jt7S5Hnu2GU) |
| Drone Making with Handmade Remote Control. DIY FPV Drone | RCMakerLab | 202,585 (2,652) | 2026-09-07 | Printables "FPV DRONE" (KendinYap) | [YouTube](https://www.youtube.com/watch?v=4R5U6r9leSc); [RYD](https://returnyoutubedislikeapi.com/votes?videoId=4R5U6r9leSc) |

- ESP-Blast (Max Imagination, 2026) is a 136 g PETG-framed ESP32 micro quad reported to reach 108 km/h. It has a barometer and GPS, a 450 mAh pack, about 5 min of flight and costs ≈$155. Notebookcheck (2026-03-14) did not confirm that 3D files were released, and the control method is not stated — [Notebookcheck](https://www.notebookcheck.net/Tiny-open-source-3D-printed-drone-hits-67-mph-and-weighs-136-grams.1249623.0.html).
- A Korben search-result snippet says ESP-Blast uses 1104 brushless motors, 2.5" tri-blades, 8 A ESCs and Betaflight 10.10, with a 40 g PETG frame. The page itself returned 403 to fetch, so this is unverified — [Korben](https://korben.info/en/3d-printed-drone-108kmh-esp32.html).

#### Instructables
- "Build the Smallest ESP32 Drone You Can Fly With Your Phone! (ESP-FLY)" by Max Imagination: published 2025-03-27, 46,489 views, 167 favorites, 28 comments, license CC BY-NC-SA — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/); [Instructables JSON API](https://www.instructables.com/json-api/showInstructableModel?urlString=Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo).
- The same write-up is mirrored on Elektor Labs and Elecrow. Both carry a resource list: Google Drive firmware, Gerbers and schematic; the Cults3D STL link; and the ESP-Drone app link — [Elektor Labs](https://www.elektormagazine.com/labs/esp-fly-the-smallest-esp32-drone-you-can-build); [Elecrow](https://www.elecrow.com/sharepj/build-the-smallest-esp32-drone-you-can-fly-with-your-phone-649.html).
- The Instructables search API requires a key, so other Instructables drone projects could not be enumerated — [Instructables search endpoint](https://www.instructables.com/api_proxy/search/collections/projects/documents/search).

#### Hackaday.io and Hackaday.com
- Hackaday.io "ESP32 drone" by Jon VB (created 2022-12-08) was entered in the 2022 FPV Contest and has 47.3k views, 165 likes and 229 followers. Hardware: ESP-WROOM-32 devkit, ArduCAM Mini 2MP, MPU6050, four Crazepony 6×15 mm motors and AO3401A MOSFETs. It uses an Android phone/tablet controller built with rawdrawandroid and includes a "Drone Frame 39mm" file — [Hackaday.io](https://hackaday.io/project/188578-esp32-drone).
- Hackaday.com ("ESP-Drone: Building An ESP32-Based Quadcopter For Not Much Cash", 2024-03-31) covered Circuit Digest's ESP-Drone variant. Points made: the PCB is the frame ("not even a 3D printer is needed"); the BOM is ≈₹1,000 (~$12); control is via cfclient or Espressif's Android/iOS app; range is limited to local Wi-Fi, making it "more of an (indoor) toy" — [Hackaday](https://hackaday.com/2024/03/31/esp-drone-building-an-esp32-based-quadcopter-for-not-much-cash/).
- Hackaday.io search redirects to sign-in, so no systematic Hackaday.io sweep or Hackaday Prize sweep was possible — [hackaday.io search](https://hackaday.io/search?term=esp32%20drone).

#### Other write-ups
- Circuit Digest "Let's Build a Low Cost Drone using ESP32" (Jobit Joseph, published 2024-03-22) says: all-in-one PCB, "Doesn't need any 3D printed parts", Android and iOS apps, 6–8 h build, $30–50, intermediate. It later evolved into LiteWing — [Circuit Digest](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone).
- Arduino Project Hub hosts "Flix v1 — minimalistic ESP32 quadcopter" (metrics not read) — [Project Hub](https://projecthub.arduino.cc/okalachev/flix-v1-minimalistic-esp32-quadcopter-757ffd).
- Seeed published "Meet ESP-FLY" (2026-04-30) and "DIY Drone: Build, Program, and Fly an ESP32 Micro Quadcopter" (2026-08-31). Pages returned 403, so only titles and dates from URLs are known — [Seeed blog 1](https://www.seeedstudio.com/blog/2026/04/30/meet-esp-fly-tiny-hackable-esp-drone-thats-easy-to-start/); [Seeed blog 2](https://www.seeedstudio.com/blog/2026/08/31/diy-drone-guide/).

#### Reddit
- WebSearch with `allowed_domains: reddit.com` was refused ("domains are not accessible to our user agent"), and reddit.com search JSON returned HTTP 403 — [Reddit r/esp32 search](https://www.reddit.com/r/esp32/search.json?q=esp32%20drone&restrict_sr=1).

### Inferences
- Video reach suggests ESP-FLY is by far the most-seen "phone-flown ESP32 drone" design of 2025–2026, roughly 5–6× the next ESP32 build video (Circuit Digest). That visibility has not turned into repository downloads: the MakerWorld remix has 423 DL and the Cults3D original's sales are unknown. This is probably because the original STL is paid and many builders buy the Seeed kit, which includes printed parts.
- Among general frames, GreatScott!'s and Basement Creations' videos make their Printables designs unusually well-documented for beginners.

### Gaps
- No Reddit data (r/diydrones, r/esp32, r/3Dprinting, r/BambuLab, r/Multicopter showcases were not accessible).
- YouTube upload dates were not retrieved, so the 2023–2026 window can't be confirmed per video. RYD counts are cached snapshots.
- No Hackaday Prize entries were identified. The KARTIS, Maradi and OrbitronicX videos' designs were not characterized.
- WebSearch budget was exhausted mid-sweep (200/200), which limited discovery of further videos and write-ups.

## Q5. Per-design profiles: size class, motors, electronics/firmware, phone method, difficulty, flight evidence and known issues

### Takeaway
Only ESP-FLY, Flix and the ESP-Drone/LiteWing family have documented, working phone-flight paths. ESP-FLY (50 mm, 615 coreless, XIAO ESP32-S3) and LiteWing (PCB frame) use the ESP-Drone app with on-screen sticks. Flix (8520 brushed, ESP32 Mini, printed frame) uses QGroundControl's or the Mavlink Joystick app's virtual sticks. Everything else either uses a dedicated radio or needs a bridge to get phone control. The bridge can be a Wi-Fi→IBus ESP32, browser UIs like cifertech/Comet, or MAVLink GCS stacks such as ArduPilot + DroneBridge.

### Cited Findings

#### ESP-FLY (Max Imagination; Seeed Co-Create kit)
- **Size and specs:**
  - 50 mm class; 67 × 67 × 31 mm with props
  - ~18 g without battery, 25 g with the 250 mAh LiPo, 28 g with FPV camera
  - 4 × 615 coreless motors (70,000 rpm, ≈17 g thrust each)
  - Seeed XIAO ESP32-S3
  - Custom 4-layer IMU/driver board: MPU-6050 and 4 × SI2300 MOSFETs
  - ~5 min typical flight (5.5 min tested)
  - Range ≈50 m over Wi-Fi, ≈200 m over ESP-NOW
  - Angle and Acro modes; no altitude hold or GPS; max payload ≈3 g

  — [Seeed ESP-FLY README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY).
- **Phone method:** the drone creates its own Wi-Fi AP (password 12345678) and is flown with the "ESP-Drone" app. On iOS it comes from the App Store; on Android it is an APK from pgyer.com that needs "Install Unknown Apps". The app offers on-screen joysticks or tilt control, trims, advanced mode and yaw lock. cfclient on a PC is used for tuning — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/).
- **Alternative control:** an ESP-NOW radio via rtlopez's ESP-FC, which is Betaflight-configurator compatible — [Seeed README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY).
- **Frame and printing:**
  - The original frame is ~4 g (printed parts ~5 g including alternate covers), with an optional FPV-camera top cover.
  - Recommended settings: 0.12 mm layers, 10% infill, supports on, 100 mm/s, 220 °C nozzle, 60 °C bed, ePLA. The author's frame took ~30 min to print.
  - A hand-cut PVC frame is an alternative (6 g, about 2 g heavier than the printed one).

  — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/).
- **Bambu-ready alternative frame:** MakerWorld remix by @Bennni. One PLA profile (15 g, 2.3 h, 0.08 mm layers), P2S listed, 139 prints, 4.75★ (n=4) — [MakerWorld](https://makerworld.com/en/models/1530477-esp-fly-frame-drone-housing).
- **Performance claims:** thrust-to-weight 2.7:1 (68 g thrust / 25 g); flown to ≈50 m "before losing sight"; Wi-Fi latency 7–25 ms — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/).
- **Difficulty depends on route:**
  - The Instructable calls the from-scratch build "geared for the intermediate or advanced maker". It involves reflowing the MPU6050 board, flashing ESP-IDF 5.0.7 and soldering motors with correct CW/CCW wiring — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/).
  - The kit FAQ calls assembly "relatively straightforward… basic soldering" and "suitable for beginners", because the IMU/driver module comes pre-assembled — [Seeed README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY).
- **Known issues and caveats:**
  - Battery advice conflicts: 150–450 mAh in the Instructable vs 150–350 mAh in the kit FAQ — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/); [Seeed README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY).
  - The original STL is paid on Cults3D — [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/).
  - Firmware is GPL-3.0, and Seeed and Max Imagination disclaim firmware responsibility ("AS IS") — [Seeed README](https://github.com/Seeed-Projects/Co-Create_ESP-FLY).

#### Flix (Oleg Kalachev)
- **Size and specs:** 8520 3.7 V brushed motors. The author stresses exactly 3.7 V; "3.7–6 V" ranged motors won't work. 55 or 65 mm props. ESP32 Mini (ESP32-S3/C3 also supported). IMU: GY-91, MPU-9265, ICM-20948 or GY-521. 4 × UMW 100N03A MOSFETs; the author warns "don't use KIA 100N03A". 3.7 V LiPo of 1000 mAh+ at 25C — [Flix README](https://github.com/okalachev/flix).
- **Frame:** 3D-printed `flix-frame-1.1` (STL+STEP) plus `esp32-holder` top part, at 0.2 mm layer, 0.4 mm line and 100% infill. The frame is optimized for the GY-91 board — [Flix README](https://github.com/okalachev/flix).
- **Phone method:** join the drone's `flix` Wi-Fi network (password `flixwifi`). Then either use the "Mavlink Joystick" Android app, or the QGroundControl mobile app with Virtual Joystick enabled and Auto-Center Throttle disabled. The docs tip is to reduce `CTL_ATT_MAX` for phone flying. An SBUS RC receiver or a USB gamepad via QGC are alternatives — [Flix usage docs](https://raw.githubusercontent.com/okalachev/flix/master/docs/usage.md).
- **Difficulty:** the author says "it's not easy to assemble and set up… no guarantee that it will work perfectly, or even work at all" — [Flix README](https://github.com/okalachev/flix).
- **Known issues:** the battery must supply about 15 A (≥15C for 1000 mAh). Wrong motor voltage, wrong IMU model selection or wrong orientation all prevent flight. QGroundControl may need firewall or VPN disabled — [Flix troubleshooting](https://raw.githubusercontent.com/okalachev/flix/master/docs/troubleshooting.md).
- **Evidence it flies:** "It actually flies" demo videos (v1: 18.9k views; v0: 38.9k). The user-builds gallery shows education use (RoboCamp 2026, School 548 course, RoboCamp). A PCB version (Flix2) and position control are in development — [Flix README](https://github.com/okalachev/flix); [user builds](https://raw.githubusercontent.com/okalachev/flix/master/docs/user.md).

#### ESP-Drone (Espressif) on a printed coreless frame (DIY)
- **Firmware:** ESP32/S2/S3, Stabilize/Height-hold/Position-hold modes (the last two need extension boards), app control, cfclient, ESP-BOX3 joystick via ESP-NOW. Support has been limited since December 2022 — [espressif/esp-drone](https://github.com/espressif/esp-drone).
- **Printable frames that fit 8.5×20 / 7 mm coreless motors**, none validated with ESP-Drone by its designer:
  - MakerWorld "Esp32 Drone": 110 mm, ~18 g PLA — [MakerWorld](https://makerworld.com/en/models/2580472-esp32-drone)
  - Printables "Brushed Drone Frame": 1,157 DL — [Printables](https://www.printables.com/model/839744-brushed-drone-frame)
  - Printables "Micro Quad (Whoop) Brushed Drone Frame": built around a BetaFPV F4 Brushed FC — [Printables](https://www.printables.com/model/779536-micro-quad-whoop-brushed-drone-frame)
  - Thingiverse "ESP-WROOM-32 Drone Frame" — [Thingiverse](https://www.thingiverse.com/thing:5890481)

#### LiteWing (Circuit Digest), phone-native but not printable
- PCB frame ("All-in-one PCB… Doesn't need any 3D printed parts"); smartphone app for Android and iPhone; Crazyflie cfclient/cflib and a Python SDK; a Blockly app; optional VL53L1X (height hold), MS5611 (altitude hold) and PMW3901 (position hold) add-ons — [Circuit Digest LiteWing wiki](https://circuitdigest.com/wiki/litewing/); [Circuit Digest original build](https://circuitdigest.com/microcontroller-projects/DIY-wifi-controlled-drone).
- Tindie listings exist for the drone and a bare "LiteWing PCB bareboard frame". A search-result summary described it as a 100 × 100 mm FR4 PCB frame weighing ~45 g without battery; the page was not opened — [Tindie](https://www.tindie.com/products/semicon_lab/litewing-esp32-based-programmable-drone/); [Tindie PCB frame](https://www.tindie.com/products/bits4bots/litewing-pcb-bareboard-frame-for-drone/).

#### DIY Drone Frame & Remote (Jonas Gartner, MakerWorld)
- 3"-guarded quad built for 1404 brushless motors. Two ESP32s (drone and handheld remote). PLA profile of 165 g including the remote, 8.5 h, 4.46★ (n=13), 277 prints. Onshape CAD, PCB and code are on the project's GitHub. The listing mentions a flight-demo video. One commenter could not find the propellers, which are not included (2026-07-09) — [MakerWorld](https://makerworld.com/en/models/1211264-diy-drone-frame-remote); [comments API](https://api.bambulab.com/v1/comment-service/commentandrating?designId=1211264&offset=0&limit=40&type=0).

#### Other phone-control-capable ESP builds (lower evidence)
- **Pro Know DIY ESP32 drone:** 720 coreless motors, 55 mm props, 1S LiPo. Popsicle-stick frame or a 3D-printed version on Cults3D. Video "Fully Mobile Controlled" with 48.9k views — [GitHub](https://github.com/proknowdiy/esp32_drone); [YouTube](https://www.youtube.com/watch?v=8P6MRaY3kbY).
- **cifertech ESP32-Drone:** browser virtual sticks over WebSocket. The author warns the custom PCB is experimental — [GitHub](https://github.com/cifertech/ESP32-Drone).
- **Comet-Drone:** ESP32-C3 Super Mini, 0716 coreless motors, WebSocket over its own AP, motor kill after 500 ms of lost Wi-Fi — [GitHub](https://github.com/CoreCometIndustries/Comet-Drone).
- **pyDrone (01Studio):** ESP32-S3, MicroPython API, Android app — [GitHub](https://github.com/01studio-lab/pyDrone).
- **Hackaday.io ESP32 drone (Jon VB):** Android control via rawdrawandroid, plus an OV2640/ArduCAM camera stream — [Hackaday.io](https://hackaday.io/project/188578-esp32-drone).

#### Phone-capable via bridges or GCS on general printable frames
- **ESP32 Wi-Fi→IBus bridge (MichalSchwarz):** phone browser to any IBus flight controller; demonstrated on an F450 with Asgard32 F7. IBus stops if no request arrives for 2 s — [GitHub](https://github.com/MichalSchwarz/wifi-drone-esp32).
- **DroneBridge ESP32:** MAVLink/MSP/LTM over Wi-Fi/ESP-NOW to QGroundControl — [GitHub](https://github.com/DroneBridge/ESP32).
- **ArduPilot printable airframes for phone GCS use:**
  - Sub-250 g Autonomous Drone Platform: ArduPilot with MAVLink telemetry over ExpressLRS — [Printables](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform)
  - IQ Arduwhoop: STLs in repo, SiK telemetry — [GitHub](https://github.com/Intelligent-Quads/iq_arduwhoop)
- **INAV-based printable quad:** IMLABS STM32 design — [MakerWorld](https://makerworld.com/en/models/1695470-quadcopter-3d-printable-stm32-mcu).
- **Crazyflie:** the Android client works over BLE; printable accessories only (cage/prop guard) — [crazyflie-android-client](https://github.com/bitcraze/crazyflie-android-client); [Printables cage](https://www.printables.com/model/76336-crazyflie-21-cage-prop-guard).
- **StampFly:** molded frame, flown with ATOM Joy over ESP-NOW; no phone method documented — [StampFly README](https://github.com/M5Fly-kanazawa/StampFly).

### Inferences
- For a first build on a P2S with PLA/PETG/TPU, the ESP-FLY path is the lowest-friction option. Buying the kit avoids SMD reflow. The free MakerWorld remix (PLA profile) or the paid original covers the frame. Flight is via the ESP-Drone app.
- Flix is the best "learn everything" printable project but is harder: hand-wired MOSFETs, careful part sourcing, and Arduino/QGC setup.
- Phone flying limits all of these to calm, indoor or close-range use: roughly 50 m Wi-Fi range and no camera feed by default.
- Brushless printable FPV frames (Aether 4, 100MPH, Goblin, JeNo, etc.) are well proven but are radio-first platforms. Phone flight on them means a DIY bridge, which goes against the beginner focus.

### Gaps
- Independent flight reports specifically for the Bennni ESP-FLY remix, the MakerWorld "Esp32 Drone" frame and Printables brushed frames used with ESP-Drone firmware were not found.
- The control method and design of the EDISON SCIENCE CORNER and KartX builds were not verified.
- Phone-app quality (latency, reliability) is reported only by the ESP-FLY author (7–25 ms).

## Q6. Top ~15 most credible/popular options overall, ranked with justification

### Takeaway
Ranking weights:
1. Documented phone-control path (highest weight, given the user's goal)
2. Printable frame obtainable for a Bambu P2S in PLA/PETG/TPU, ideally with a P2S-listed profile
3. Independent evidence that it flies (videos, prints/makes, ratings, comments)
4. Popularity
5. Openness and maintenance

On that basis ESP-FLY ranks first, Flix second, then the ESP-Drone-on-printed-coreless-frame DIY route, LiteWing (phone-native, not printable) and Jonas Gartner's ESP32 frame. The general printable frames follow, ordered by validated popularity, and need a radio or a bridge for phone use.

### Cited Findings
| Rank | Design (category) | Key evidence (observed 2026-10-05) | Why here | Sources |
|---|---|---|---|---|
| 1 | ESP-FLY, Max Imagination / Seeed kit (phone-native, printable) | 1.63M-view video; Instructable 46.5k views; Seeed kit; free MakerWorld remix (423 DL, 139 prints, PLA, P2S listed) | Only design combining a printable frame, a turnkey phone app and mass validation. Caveats: original STL paid on Cults3D; Android APK via pgyer.com. | [YouTube](https://www.youtube.com/watch?v=V_mZsiZcy7s); [Instructables](https://www.instructables.com/Build-the-Smallest-ESP32-Drone-You-Can-Fly-With-Yo/); [Seeed](https://github.com/Seeed-Projects/Co-Create_ESP-FLY); [MW remix](https://makerworld.com/en/models/1530477-esp-fly-frame-drone-housing) |
| 2 | Flix (phone via MAVLink apps, printable) | 2,044★, pushed 2026-09-30; frame STL/STEP in repo; QGC / Mavlink Joystick phone control; used in courses | Most open and active from-scratch printable phone drone. Downsides: harder build; no license file; no Bambu profile. | [GitHub](https://github.com/okalachev/flix); [usage](https://raw.githubusercontent.com/okalachev/flix/master/docs/usage.md) |
| 3 | ESP-Drone firmware + app on a printed 8520/coreless frame (DIY route) | esp-drone 2,219★ (GPL-3.0); Circuit-Digest fork 2,461★; frames: Printables Brushed Drone Frame 1,157 DL, Micro Quad brushed 796 DL; MW "Esp32 Drone" 41 DL | Proven firmware and app. Frame/firmware pairing is unvalidated by the frame designers; Espressif support is limited. | [esp-drone](https://github.com/espressif/esp-drone); [CD fork](https://github.com/Circuit-Digest/ESP-Drone); [Printables](https://www.printables.com/model/839744-brushed-drone-frame); [MW](https://makerworld.com/en/models/2580472-esp32-drone) |
| 4 | LiteWing, Circuit Digest (phone-native, PCB frame) | 290k-view video; mobile app, cfclient, Blockly; Hackaday coverage | Easiest phone-native flyer, but not a printed frame. Only accessories would be printed. | [Wiki](https://circuitdigest.com/wiki/litewing/); [YouTube](https://www.youtube.com/watch?v=uzZjk0TQKtU); [Hackaday](https://hackaday.com/2024/03/31/esp-drone-building-an-esp32-based-quadcopter-for-not-much-cash/) |
| 5 | DIY Drone Frame & Remote, Jonas Gartner (ESP32 brushless 3", printable) | 1,195 DL, 1,527 L, 277 prints, 4.46★ (n=13); P2S-listed PLA profile; Onshape CAD | Strong engagement and an ESP32 on board, but it is controlled by its own ESP32 remote. Phone control would be a firmware change. | [MW](https://makerworld.com/en/models/1211264-diy-drone-frame-remote); [GitHub](https://github.com/ElektroJonas/DIY-Quadcopter) |
| 6 | Sub-250 g Autonomous Drone Platform, Basement Creations (ArduPilot/MAVLink → phone GCS) | 3,182 DL, 1,003 likes (Printables); 748k-view video | Best-documented printable MAVLink airframe for phone-GCS use (missions/telemetry). Advanced, and primary control is RC. | [Printables](https://www.printables.com/model/942571-sub-250g-autonomous-drone-platform); [YouTube](https://www.youtube.com/watch?v=u_ArriXbrR0) |
| 7 | BM Aether 4 (general 4" frame) | 12,834 DL; 4,291 prints; 4.92★ (n=363); staff pick; PLA profile | Most validated printable multirotor on MakerWorld. Needs Betaflight + radio, or a bridge for phone use. Comments note tight assembly. | [MW](https://makerworld.com/en/models/541413-bm-aether-4-the-4-inch-unibody-fpv-drone-frame) |
| 8 | Improved "Nano Long Range" (general micro) | 6,164 DL; 1,977 prints; 4.87★ (n=55); PLA | Huge print count. Builders report it flies; battery retention is a weak point. | [MW](https://makerworld.com/en/models/1181480-improved-nano-long-range-drone) |
| 9 | Goblin / Dragonfly / Wraith family, ProgrammaDan (general, Printables) | Goblin 7,664 DL and 25 makes; Wraith 3,589 DL and 25 makes; Dragonfly 4,262 DL | Most-downloaded Printables frames, with documented parts lists. Uses CF-nylon/PA6 bodies; CC BY-NC. | [Goblin](https://www.printables.com/model/396395-goblin-fpv-drone); [Wraith](https://www.printables.com/model/1068065-wraith-fpv-drone); [Dragonfly](https://www.printables.com/model/481521-dragonfly-fpv-drone) |
| 10 | Worlds Fastest Sub-250 g, ASTDrones (general 3") | 4,831 DL; 1,494 prints; 4.9★ (n=62); PLA-CF | High validation. Raters say it is not a first build. | [MW](https://makerworld.com/en/models/458347-worlds-fastest-sub-250-gram-fpv-quad-drone) |
| 11 | 100MPH FPV Race Quad, Michael Rechtin (general) | 3,829 DL; 1,069 prints; profiles in PLA and PA-CF with 4.8–4.9★; staff pick | Multiple flight-success comments, including a first-time builder. Profiles available in the user's PLA. | [MW](https://makerworld.com/en/models/236234-100mph-fpv-race-quad) |
| 12 | JeNo frames, WEareFPV (general, open source) | JeNo 5.1" 6,441 DL; 3"/3.5" 3,818; 7" 4,332; Pocket 964; CC BY | Open-licensed, frequently updated family (v1.6.0 for the 5.1"). | [JeNo 5.1](https://www.printables.com/model/339099-jeno-51-drone-frame); [JeNo Pocket](https://www.printables.com/model/1175339-jeno-pocket-drone-frame) |
| 13 | GreatScott!-featured 6" frame, andreirusu99 (general) | 2,930 DL; 592k-view build guide | Best beginner documentation for a printed brushless build. | [Printables](https://www.printables.com/model/196607-fpv-drone-featured-on-greatscott); [YouTube](https://www.youtube.com/watch?v=DeSDjjicGWY) |
| 14 | LX7 FPV Drone Frame, GetPoached (general) | 3,028 DL; 946 prints; 4.9★ (n=58); PLA profile | Strong rating volume, simple PLA profile. | [MW](https://makerworld.com/en/models/967346-lx7-fpv-drone-frame) |
| 15 | Printed tiny-whoop frames (general, for BetaFPV Air65/Meteor electronics) | SaTL Air65-style: 1,369 DL, 900 prints, 3.96★ (n=24), PLA/TPU. ELPI PA-CF: 5.0★ (n=13). LIGHT tiny whoop: 452 prints. | Safest indoor size class. Comments say PLA arms break (use TPU), and one ELPI commenter reports fit problems. | [SaTL](https://makerworld.com/en/models/2189941-tiny-whoop-fpv-for65mm-drone-like-air-65ii-frame); [ELPI](https://makerworld.com/en/models/1296070-printable-tinywhoop-fpv-frame); [LIGHT](https://makerworld.com/en/models/1590953-light-small-tiny-whoop-fpv-drone-frame-prop-guards) |

- **Honorable mentions:**
  - Pro Know ESP32 drone: phone-controlled; printed version on Cults3D; 48.9k-view video — [GitHub](https://github.com/proknowdiy/esp32_drone)
  - Hackaday.io ESP32 drone: Android control; 2022 contest entry — [Hackaday.io](https://hackaday.io/project/188578-esp32-drone)
  - Comet-Drone and cifertech: browser/WebSocket control — [Comet](https://github.com/CoreCometIndustries/Comet-Drone); [cifertech](https://github.com/cifertech/ESP32-Drone)
  - 18650 Micro Foldable FPV Drone: 1,180 DL; 219k-view video — [Printables](https://www.printables.com/model/1081158-18650-micro-foldable-fpv-drone)
  - ManaFly 3" (PETG profile, 624 prints) — [MW](https://makerworld.com/en/models/2000546-beta-manafly-3-generative-fpv-drone-frame)
  - PecaJosef 3"/5" (PETG/PLA profiles) — [MW 3"](https://makerworld.com/en/models/434189-3d-printable-3-inch-drone-frame); [MW 5"](https://makerworld.com/en/models/411258-3d-printable-5-inch-drone-frame)
  - IMLABS STM32/INAV quad — [MW](https://makerworld.com/en/models/1695470-quadcopter-3d-printable-stm32-mcu)
  - TinaTina (Prusa guide, CC0) — [Printables](https://www.printables.com/model/103-tinatina-90mm-brushless-drone-frame-110320x20mm)

### Inferences
- Phone control and validated printable design rarely coincide. ESP-FLY (plus its MakerWorld remix) and Flix are the only options where both are strong. Ranks 3–6 each trade away printability, validation or phone-nativeness.
- **Licensing flags:**
  - Flix: no license file.
  - Circuit-Digest ESP-Drone and LiteWing: license not detected / NOASSERTION.
  - Many MakerWorld frames use "Standard Digital File License" or "MakerWorld Exclusive License" rather than Creative Commons.
  - ProgrammaDan, GreatScott-frame and other CC BY-NC designs prohibit commercial use.
  - ESP-FLY STL: paid.

### Gaps
- The ranking can't weigh Reddit/Thingiverse community signals (not accessible).
- Real-world crash durability of each printed frame in the user's exact filaments (PLA, PETG, TPU 85A, TPU 65D) is a materials question and is left to the materials researcher.
