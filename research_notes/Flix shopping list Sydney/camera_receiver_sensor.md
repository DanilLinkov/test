# Flix drone (Sydney 2000): where to buy a tiny 25 mW AIO FPV camera, an Android/laptop 5.8 GHz UVC receiver and a VL53L1X downward distance sensor

How the data was collected: prices and stock were observed on **8 Oct 2026 UTC** (Little Bird's quote is stamped 9 Oct 2026, 9:46 AM AEDT). Methods were Shopify product feeds (`/products/<handle>.js`, `/search/suggest.json`), each store's live cart shipping calculator for **NSW 2000**, Core Electronics' and Little Bird's agent quote endpoints, and AliExpress AU-locale search results. **FX:** 1 USD = **1.4402 AUD** and 1 GBP = **1.9021 AUD**. These are ECB reference rates dated 2026-10-08 from [Frankfurter USD](https://api.frankfurter.app/latest?from=USD&to=AUD) and [Frankfurter GBP](https://api.frankfurter.app/latest?from=GBP&to=AUD). Australian store prices include GST. Overseas prices exclude Australian GST unless stated: 10% GST applies to imported goods with a customs value of A$1,000 or less ([ATO, via prior notes](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-on-imported-goods-and-services/australian-consumers-importing-goods-and-services)). **Not checkable:** eBay AU (HTTP 403 to every query), Altronics (reCAPTCHA wall) and AliExpress item pages (the item-data API returned `FAIL_SYS_USER_VALIDATE`, an anti-bot check). For AliExpress, only search-card prices could be read.

## Q1. Camera: which ≤25 mW, <5 g analog AIO camera (BetaFPV M01 or equivalent) to buy, where, delivered price to Sydney, specs and band compliance

### Takeaway
**The BetaFPV M01 can no longer be bought.** BetaFPV tags it "Discontinued", and it is out of stock there and at Phaser (the only Australian listing). **No Australian FPV store has any analog AIO camera in stock.**

**Best verified value:** the **BetaFPV Cetus Lite Camera and VTX Module**, US$19.99. It is 2.47 g, 25 mW and runs on **3.7–5.5 V**, so it can take 1S power directly. Add BetaFPV's US$1 antenna pack so the order passes US$20 and shipping drops from US$10 to US$5. That makes **≈A$37.43 delivered** (≈A$41.17 if GST is charged), in 12–30 days. Its channel table could not be confirmed.

**Fastest:** a local camera + VTX pair from **Phaser FPV** (Somersby NSW). The Caddx Ant Nano (2 g) plus a TBS Unify Pro32 Nano (1 g, set to 25 mW) costs **A$97.49** with 1–2 day eParcel Express, or can be collected at Somersby.

**Best-documented for channel control:** the generic LST-S4/S4+ AIO from AliExpress (3.6 g, 3.6–5.5 V, 40 channels, push-button bands A/B/E/F/R). It is cheap, but the exact option price and shipping could not be verified.

### Cited Findings
**BetaFPV M01 / A01 status (the requested part)**
- BetaFPV direct lists only "M01 AIO Camera 5.8G VTX V2.1 (Pin-Connected)" at US$28.99 (A$41.75). It is unavailable and tagged "Discontinued", and no Wired variant is listed — [BetaFPV M01](https://betafpv.com/products/m01-aio-camera-5-8g-vtx)
  - Specs: output power 25 mW, "Supply Voltage: 5V", "Size: 18*14*4.5mm(VTX)", "Weight: 2.72g", NTSC, "6 bands 37 channels, with Raceband: 5362~5945MHz", C02 1200TVL camera (Phaser's copy says 600TVL/800TVL) — [BetaFPV M01](https://betafpv.com/products/m01-aio-camera-5-8g-vtx); [Phaser M01 Wired](https://phaserfpv.com.au/products/betafpv-m01-aio-camera-58ghz-vtx-v21-wired)
- Phaser FPV lists the "M01 AIO Camera 5.8G VTX V2.1 (Wired Version)" at A$48.95: out of stock, inventory 0, back-orders disabled ("deny") — [Phaser M01](https://phaserfpv.com.au/products/betafpv-m01-aio-camera-58ghz-vtx-v21-wired)
- BetaFPV A01 AIO (Pin-Connected) is US$28.99, unavailable and tagged "Discontinued". Specs: 0/25/200 mW adjustable, 5 V, 3.2 g, 28×19×5 mm VTX, SmartAudio — [BetaFPV A01](https://betafpv.com/products/a01-aio-camera-vtx). Phaser's A01 Wired is A$46.95, out of stock — [Phaser A01](https://phaserfpv.com.au/products/betafpva01aiocamera58gvtxwire-connectedversion)
- Phaser's BetaFPV C04 Camera and VTX Module is A$68.95, out of stock — [Phaser C04 module](https://phaserfpv.com.au/products/betafpv-c04-camera-and-vtx-module)
- Searches for "m01" returned no M01 at Next FPV, Rising Sun FPV or Buzz FPV. Their "aio camera" / "vtx camera" / "25mw" searches returned only digital HD systems, standalone VTXs and cameras — [Next FPV search](https://www.nextfpv.com.au/search/suggest.json?q=m01&resources%5Btype%5D=product); [Rising Sun search](https://risingsunfpv.com.au/search/suggest.json?q=aio%20camera&resources%5Btype%5D=product); [Buzz search](https://buzzfpv.com.au/search/suggest.json?q=m01&resources%5Btype%5D=product)
- An AliExpress AU search for "betafpv m01" returned no M01 among the top 60 results, only other BetaFPV parts — [AliExpress search](https://www.aliexpress.com/w/wholesale-betafpv-m01.html?SearchText=betafpv+m01&shipCountry=AU)

**Purchasable equivalents (all ≤25 mW output, under 5 g)**

| Option | Price observed | Shipping to 2000 / time | Key specs | Stock | Source |
|---|---|---|---|---|---|
| **BetaFPV Cetus Lite Camera and VTX Module** | US$19.99 (A$28.79) | US$10 flat alone (total US$29.99 = **A$43.19**). With the US$1.00 "5.8G VTX Antenna Packet" the cart is US$20.99 and shipping is **US$5** (total US$25.99 = **A$37.43**). Standard registered mail "12-30 days" | 2.47 g (camera+VTX), 25 mW, **DC 3.7–5.5 V**, 800TVL 1/4" CMOS, NTSC 4:3, 1.8 mm lens 150° FOV, 15.5×14.5×16 mm, plug-in power cable; **channel count not stated** | In stock | [BetaFPV Cetus Lite module](https://betafpv.com/products/cetus-lite-camera-and-vtx-module); [antenna packet](https://betafpv.com/products/5-8g-vtx-antenna-packet); live quotes from BetaFPV `cart/shipping_rates.json` (AU, 2000) |
| **BetaFPV Air VTX + Air Camera** (two parts, wired together) | US$11.99 + US$9.99 = US$21.98 | US$5 flat (total US$26.98 = **A$38.86**) | VTX: 0.6 g (no antenna), 14×10.5 mm, **5 V**, 150 mA, 25 mW/PIT, 48 ch, Raceband 5658–5917 MHz. "Channel SEL: SmartAudio 2.0"; the page says it "could only use the SmartAudio port for band and power adjustment" yet also documents a press-button band/channel menu with LEDs (contradictory). Camera: 1.48 g, **DC 5–12 V**, 600TVL, NTSC 16:9 or 4:3 | In stock | [BetaFPV Air VTX](https://betafpv.com/products/air-vtx); [BetaFPV Air Camera](https://betafpv.com/products/air-camera) |
| **Phaser FPV (NSW): Caddx Ant Nano + TBS Unify Pro32 Nano** | A$29.95 + A$59.90 = A$89.85 | eParcel Express **A$7.64 (1–2 days)** → **A$97.49**; eParcel Standard A$7.09 (3–5 days); walk-in pickup at Somersby | Ant Nano: 2 g, 14×14 mm, **DC 5–25 V**, 1200TVL. Unify Pro32 Nano: **1 g**, 15×13×2 mm, **3–13 V**, 25/100/400/500+ mW (set to 25 mW), SmartAudio/CRSF plus fallback button menu, u.FL whip antenna included | In stock (Ant 1–2 per colour/ratio, Unify 10) | [Phaser Unify Pro32 Nano](https://phaserfpv.com.au/products/tbs-unify-pro32-nano); [Phaser Caddx Ant Nano](https://phaserfpv.com.au/products/caddx-ant-fpv-camera); live Phaser `cart/shipping_rates.json` (2000) |
| **rcdrone.top EWRF TX04 "40CH 25mW 700TVL Mini VTX Camera"** | US$35.36 (A$50.93) | **Free shipping (9–15 days)**; Express (5–8 days) US$29 → US$64.36 = A$92.69 | 4 g, 17.5×17×14 mm, **2.5–5.5 V**, 255–365 mA, 25 mW, 40 ch "Five bands … with Raceband", **PAL only**, 700TVL, auto-saves channel | In stock | [rcdrone.top EWRF set](https://rcdrone.top/products/ewrf-5-8g-48ch); live rcdrone `cart/shipping_rates.json` (2000) |
| **AliExpress LST-S4+ / LST-S2+ (generic 25 mW AIO with OSD)** | Search-card prices AU$12.99–29.59 (sale/coupon); regular ("original") AU$41.99–54.56 | Some cards tagged "Free shipping"; time not verifiable | Base LST-S4/S2: **3.6 g**, 18×16×16 mm (no antenna), **3.6–5.5 V** ("1S LiPo or 5V power input"), 380 mA @ 3.7 V, 25 mW, 40 ch with Raceband, push-button channel/band | e.g. [1005008226307221](https://www.aliexpress.com/item/1005008226307221.html) (1,000+ sold, 4.9★, orig AU$54.56 / sale AU$26.19); [1005008558124437](https://www.aliexpress.com/item/1005008558124437.html) (800+ sold, 4.7★, AU$12.99–17.09 with new-shopper coupon); [1005003545468888](https://www.aliexpress.com/item/1005003545468888.html) LST-S2+ (161 sold, orig AU$41.99 / sale AU$29.39, "Free shipping") | Specs: [Flying Tech LST-S4](https://www.flyingtech.co.uk/product/lst-s4-mini-5-8ghz-25mw-40ch-vtx-800tvl-aio-camera/); [Flying Tech LST-S2](https://www.flyingtech.co.uk/product/lst-s2-mini-5-8ghz-25mw-40ch-vtx-800tvl-camera/); [Evelta LST-S4+](https://evelta.com/fpv-aio-5-8g-25mw-40ch-800tvl-transmitter-lst-s4-fpv-camera-with-osd-parts-for-rc-racing-drone/) |
| AliExpress EWRF EWR701U / "Only 3.6g" 48CH 25 mW 600TVL AIO | EWR701U orig AU$34.74 / sale AU$27.79 (49 sold, 4.4★); "Only 3.6g mini … 48CH 25mW VTX-CAM" AU$23.19 (183 sold, 4.3★) | Not verifiable | 48 ch, 25 mW, 600TVL, 120°. A search-result summary of a 701U manual gives 2.5–5.5 V (page returned 403); weight not confirmed | — | [AliExpress 1005007795436682](https://www.aliexpress.com/item/1005007795436682.html); [AliExpress 1005003041995538](https://www.aliexpress.com/item/1005003041995538.html); [manuals.plus 701U (search summary only)](https://manuals.plus/asin/B0BBP4Z3PJ) |

- **BetaFPV shipping policy:** "free standard shipping on all orders of $99.99 or more. For orders between $20 – $99.98, a flat rate of $5 applies. For orders under $20, a flat rate of $10 applies"; "All duties and taxes are the responsibility of the customer" — [BetaFPV shipping policy](https://betafpv.com/policies/shipping-policy)
- **BetaFPV transit time:** "Standard Shipping: Estimated delivery in 12-30 days via registered mail". "Expedited Shipping has been temporarily suspended due to increased customs inspections". Orders are "processed within 1-2 working days" — [BetaFPV Cetus Lite page](https://betafpv.com/products/cetus-lite-camera-and-vtx-module)
- **Local camera-only stock (no matching VTX in Australia):** BetaFPV Air Camera is in stock at Buzz FPV (A$19.95) and Rising Sun FPV (A$18.99). The Air VTX was not found at any Australian store — [Buzz Air Camera](https://buzzfpv.com.au/products/air-camera); [Rising Sun Air Camera](https://risingsunfpv.com.au/products/betafpv-air-camera); [Phaser "air vtx" search](https://phaserfpv.com.au/search/suggest.json?q=air%20vtx&resources%5Btype%5D=product)
- **Pickup near Sydney:** Phaser (1/80 Somersby Falls Rd, Somersby NSW 2250): "Walk-ins welcome for in-store purchases and pickups". Next FPV (Prestons, Sydney): "Sorry pickups are not available" (prior notes) — [Phaser shipping policy](https://phaserfpv.com.au/policies/shipping-policy); [Next FPV shipping](https://www.nextfpv.com.au/pages/shipping)

**Band compliance (5,725–5,875 MHz, 25 mW EIRP)**
- The LIPD Class Licence 2025, Schedule 1 Part 1 (class "Any" transmitter), allows **5725–5875 MHz at 25 mW EIRP**. The licence also says a transmitter "must not operate … at a radiated power that exceeds, in any direction, the maximum EIRP", and Note 4 warns that using a non-supplied external antenna "may result in a breach" (prior notes) — [LIPD 2025 (F2025L01047)](https://www.legislation.gov.au/F2025L01047/asmade/2025-09-05/text/original/epub/OEBPS/document_1/document_1.html)
- Standard 5.8 GHz channel table, as published for the LST-S4 (push-button: short press = channel 1–8, long press = band A-B-E-F-R) — [Flying Tech LST-S4](https://www.flyingtech.co.uk/product/lst-s4-mini-5-8ghz-25mw-40ch-vtx-800tvl-aio-camera/):
  - Band A: 5865, 5845, 5825, 5805, 5785, 5765, 5745, 5725
  - Band B: 5733, 5752, 5771, 5790, 5809, 5828, 5847, 5866
  - Band E: 5705, 5685, 5665, 5645, 5885, 5905, 5925, 5945
  - Band F: 5740 … 5880 (20 MHz steps)
  - Band R: 5658, 5695, 5732, 5769, 5806, 5843, 5880, 5917
  - EWRF's receiver table lists the same A/B/F(D)/R values plus low bands (5362–5621 MHz and 4990–5200 MHz) — [rcdrone EWRF 56CH](https://rcdrone.top/products/ewrf-5-8ghz-56ch-uvc-otg-audio-fpv-receiver-720-480-for-android-mobile-phone)
- M01's stated span "5362~5945MHz" includes low-band channels outside the Australian band. Its per-band table is only an image on the product page — [BetaFPV M01](https://betafpv.com/products/m01-aio-camera-5-8g-vtx)
- The TBS Unify Pro32 Nano "ships with only legal channels enabled" (HAM channels and power need unlocking) — [Phaser Unify Pro32 Nano](https://phaserfpv.com.au/products/tbs-unify-pro32-nano)

### Inferences
- **In-band channels** from the table above (centre frequency within 5725–5875 MHz):
  - A1–A8, B1–B8, F1–F7 and R3–R6.
  - Band E, F8, R1–R2 and R7–R8 are outside.
  - Edge channels (A8 5725, B1 5733, R3 5732, A1 5865, B8 5866) leave part of the FM video signal outside the band. Mid-band channels such as F2–F6, R4–R5 or A2–A6 are the safer choice.
- **EIRP caution:** "25 mW" on these cameras is transmitter output. With a typical ~2 dBi whip antenna the EIRP is somewhat above 25 mW. Because the licence limit is EIRP, a 25 mW setting with the supplied antenna is the best a buyer can do; a higher-gain antenna would make it worse.
- **Power on a 1S Flix:**
  - **Cameras that can run straight from 1S:** Cetus Lite (3.7–5.5 V), EWRF TX04 (2.5–5.5 V), LST-S4 (3.6–5.5 V) and the Unify VTX (3–13 V).
  - **Parts that need 5 V:** M01, A01, the Air VTX and Air Camera, and the Caddx Ant (5–25 V). These need a 5 V boost converter; prior notes list the Pololu U3V9F5 at Core for A$5.80 ([Core U3V9F5](https://core-electronics.com.au/pololu-5v-step-up-dc-dc-boost-converter-voltage-regulator-u3v9f5.html), not re-checked).
  - **Brownout risk:** a 1S pack sagging toward 3.5 V under motor load could brown out the 3.6–3.7 V-minimum cameras. A 5 V boost or a well-filtered supply is the safer design for all options.
- **Recommendation for the M01's role:**
  - **Cetus Lite:** the lightest purchasable, documented, 1S-capable equivalent, and the cheapest verified delivered price (A$37.43). Before relying on it, confirm that its channel can be set inside 5725–5875 MHz.
  - **LST-S4(+):** better if verifiable channel control matters most (documented push-button table), at the cost of 3.6 g and an unverified AliExpress price.
  - **Phaser pair:** the only option in hand within days, but it costs about 2.5× as much and needs 5 V for the camera.

### Gaps
- The Cetus Lite module's channel count, frequency table and how channels are changed (button or fixed) were not found on BetaFPV's page or in search results.
- The M01's per-band channel table is image-only, so it was not read.
- AliExpress option-level prices, shipping cost and delivery time could not be read (anti-bot check on item data), so AliExpress figures are search-card "from" prices. New-shopper coupons (for example AU$1.49 to AU$12.99) are not regular prices.
- Weight of the "+" (OSD) LST variants and of the EWR701U was not confirmed.
- eBay AU could not be checked (HTTP 403).
- Whether BetaFPV collects Australian GST at checkout was not confirmed; its policy only says duties and taxes are the customer's responsibility.

## Q2. Receiver: which 5.8 GHz analog receiver plugs into an Android phone over USB-C (UVC/OTG), also works as a laptop webcam for OpenCV, includes an OTG cable, and where to buy it

### Takeaway
**No Australian store has a UVC/OTG receiver in stock.** Buzz FPV's Skydroid UVC (A$34.95 single, A$49.95 dual) is out of stock, and Phaser, Next FPV, Rising Sun and Amazon AU had none.

**Best verified buy now:** the **rcdrone.top EWRF 48CH UVC OTG receiver + 25 mW TX04 camera set** at US$68.33 (**≈A$98.41 delivered**, free 9–15-day shipping). It includes micro-USB→micro-USB and micro-USB→USB-C cables. The implied receiver price is about A$47.

**Cheaper but unverified:** AliExpress listings show UVC receivers "from" AU$13.59–37.19, but those are multi-option bundle listings whose receiver-only price could not be confirmed.

**How they work:**
- **Phone:** Android only (no iPhone) with OTG + UVC support, using FUAV/Skydroid FPV, FPV Viewer, Go FPV or generic UVC camera apps (EWRF says not to use FUAV with its newer receiver).
- **Laptop:** they enumerate as standard webcams. Skydroid says Windows 10 opens it in the Camera app, and on Ubuntu it appears as `/dev/videoN` (VLC and GStreamer worked).
- **OpenCV:** reads them as a normal capture device, typically **640×480 at 30 fps, often MJPEG**, with about 100 ms latency.

### Cited Findings
**Options and prices**

| Option | Price observed | Shipping / time to 2000 | Key specs / contents | Stock | Source |
|---|---|---|---|---|---|
| Buzz FPV — Skydroid UVC Single Control Receiver OTG 5.8G 150CH | **A$34.95** | Not quotable (out of stock); Buzz ships from Perth | 150 ch, "Resolution 640*480 30fps", OTG to Android ("does not support Apple phone"), "USB cable to connect PC", AV out; app "FUAV" or "search Fpv viewer in the android play store" | **Out of stock** | [Buzz Skydroid single](https://buzzfpv.com.au/products/skydroid-uvc-single-control-receiver-otg-5-8g-150ch-channel-fpv-receiver-video-transmission-downlink-audio-for-android-phone) |
| Buzz FPV — UVC Dual Antenna Control Receiver OTG 5.8G 150CH | **A$49.95** | — | Same feature text as the single | **Out of stock** | [Buzz UVC dual](https://buzzfpv.com.au/products/uvc-dual-antenna-control-receiver-otg-5-8g-150ch-full-channel-fpv-receiver-w-audio-for-android-smartphone-black) |
| rcdrone.top — EWRF 5.8G 48CH 720×480 UVC OTG Phone Receiver **+ 40CH 25 mW TX04 mini VTX camera** ("camera and receiver" option) | **US$68.33 (A$98.41)**; camera-only option US$35.36, so the receiver is implicitly ≈US$32.97 (A$47.48) | **Free (9–15 days)**; Express (5–8 days) US$29 → US$97.33 = A$140.17 | Receiver requirements: Android, OTG, "Qualcomm full range of CPUs", Kirin 950+, MediaTek X20+, "Apple phone is not supported". Package: receiver, RP-SMA antenna, "Micro-USB To Micro_USB ×1, micro_usb To Type_C ×1", 1.27 mm 4-pin AV cable. Camera: 4 g, 2.5–5.5 V, 25 mW, PAL | In stock | [rcdrone EWRF set](https://rcdrone.top/products/ewrf-5-8g-48ch); live rcdrone `cart/shipping_rates.json` (2000) |
| rcdrone.top — EWRF 5.8GHz 56CH UVC OTG Audio FPV Receiver (receiver only) | US$69.00 (A$99.37); US$75 with Fatshark antenna | — | 720×480/30 fps; 52×23×9 mm; 20 g with antenna; button tuning plus auto-search. Apps: "do not use 'FUAV' app. Search apps: PocketFPV / GoFPV / usb otg camera. Suggested apps: CameraFi / FPViewer / USB Web Camera" | Receiver-only options **out of stock**; only combos with 1–5.5 W VTXs (illegal in Australia) in stock | [rcdrone EWRF 56CH](https://rcdrone.top/products/ewrf-5-8ghz-56ch-uvc-otg-audio-fpv-receiver-720-480-for-android-mobile-phone) |
| rcdrone.top — Skydroid Receiver OTG (single, mini) | US$39.50 (A$56.89) | — | Package: "1 x 5.8Ghz 150ch Receiver, 1 x OTG Cable, 1 x Type-C cable, 1 x Antenna"; 5645–5945 MHz; 640×480 30 fps; USB 5 V 190 mA; 59×40×11 mm; 29 g; app FUAV (`skydroidfpv.apk`). PC: "WIN10: open camera. Or MP groundstation" (Win7 needs AMCP software) | **Out of stock** | [rcdrone Skydroid OTG](https://rcdrone.top/products/skydroid-receiver-otg) |
| rcdrone.top — SKYDROID Mini UVC OTG 150CH | US$44.92 single / US$53.60 dual | — | "Only suit for android support UVC"; package "1 x 5.8G FPV Receiver, 1 x OTG Cable, 1 x Connector"; Go-FPV app link | **Out of stock** | [rcdrone Skydroid mini](https://rcdrone.top/products/skydroid-mini-uvc-otg-5-8g-150ch-audio-fpv-receiver-for-android-mobile-phone-tablet-smartphone-transmitter-rc-drone-spare-part) |
| Banggood — EWRF OTG Receiver 5.8GHz 56CH 720×480/30 fps | US$65.99 (A$95.04; page meta shows "AU$96.31") | **Shipping to Australia not confirmed**: the page was served with a US geolocation and contains a generic "CAN NOT ship to" template string; the AU destination check could not be run | Package: OTG receiver, antenna, micro-USB↔micro-USB cable, micro-USB↔Type-C cable, 1.27 mm 4-pin line; "Interface: Micro USB"; 19 g; 52×31×6 mm; "delay is about 100ms" | In stock (CN warehouse) | [Banggood EWRF OTG receiver](https://www.banggood.com/EWRF-OTG-Receiver-5_8GHz-56CH-720+480-or-30Fps-FPV-Receiver-For-Phone-Tablet-Smart-Android-Mobile-Transmitter-UVC-Video-Capture-Card-FPV-Drone-p-2046141.html) |
| AliExpress — "Ready to Use 5.8G FPV UVC Receiver Video Downlink OTG VR Android Phone + 200/600mW Transmitter + CMOS 1200TVL" (multi-option) | "From" AU$37.19 (orig AU$37.57) | Card tagged "Free shipping" | 162 sold, 4.7★; receiver-only option not verifiable | — | [AliExpress 1005004766486947](https://www.aliexpress.com/item/1005004766486947.html) |
| AliExpress — "5.8G FPV UVC Receiver Video Downlink OTG VR Android Phone & TS2823 200/600mW Transmitter & CMOS Camera" (multi-option) | "From" AU$13.59 (orig AU$14.31) | Not verifiable | 53 sold, 5★; cheapest option may not be the receiver | — | [AliExpress 1005010645563255](https://www.aliexpress.com/item/1005010645563255.html) |
| AliExpress — "mini 5.8G FPV 48CH 25mW transmitter VTX-CAM with 600TVL camera and Skydroid OTG UVC Receiver for Android" | "From" AU$30.19 (orig AU$37.74) | Card tagged "Free shipping" | 89 sold, **3.6★**; option contents not verifiable | — | [AliExpress 1005003504887193](https://www.aliexpress.com/item/1005003504887193.html) |

- **Other stores searched:**
  - Phaser, Next FPV and Rising Sun returned no UVC/OTG receivers — [Phaser "uvc" search](https://phaserfpv.com.au/search/suggest.json?q=uvc&resources%5Btype%5D=product); [Next FPV "otg" search](https://www.nextfpv.com.au/search/suggest.json?q=otg&resources%5Btype%5D=product); [Rising Sun "skydroid" search](https://risingsunfpv.com.au/search/suggest.json?q=skydroid&resources%5Btype%5D=product)
  - Amazon AU searches ("skydroid uvc receiver", "5.8g otg uvc fpv receiver android") returned no UVC receiver. The only 5.8 GHz FPV item was a Radiolink 48CH 25 mW camera transmitter at A$79.62 — [Amazon AU search](https://www.amazon.com.au/s?k=5.8g+otg+uvc+fpv+receiver+android)
  - eBay AU returned HTTP 403 — [eBay AU](https://www.ebay.com.au/sch/i.html?_nkw=skydroid+uvc)
  - Eachine ROTG02: Banggood and AliExpress searches found no listing on 5 Oct 2026 (prior notes) — [Banggood rotg02](https://www.banggood.com/search/rotg02.html); [AliExpress rotg02](https://www.aliexpress.com/w/wholesale-rotg02.html)
- AliExpress Skydroid-branded receiver-only cards were priced erratically: "Skydroid Cloud Zhuo UVC Dual Antenna" AU$79.69–112.19 (2★) and "Skydroid … True Diversity UVC OTG" AU$444.39 — [AliExpress 1005008582645670](https://www.aliexpress.com/item/1005008582645670.html); [AliExpress 1005012777789187](https://www.aliexpress.com/item/1005012777789187.html)

**Laptop / OpenCV compatibility**
- **Ubuntu:** a user opened a Skydroid analog OTG receiver in VLC as a video capture device ("/dev/video1 and it did the rest"), later at /dev/video2, and also displayed it with GStreamer. QGroundControl needed an RTSP-server workaround because it "expects an RTSP URL rather than a direct video device" (June–Aug 2023) — [ArduPilot Discourse](https://discuss.ardupilot.org/t/5-8g-fpv-usb-receiver-direct-to-qgc/102782)
- **Video format:** an unnamed "5.8G UVC USB receiver" on a Jetson Nano reported only "Pixel Format: 'MJPG' (compressed)" at 640×480 and 352×288 (60/30/15/5 fps). A YUY2 1280×720 request failed; an MJPEG→jpegdec pipeline at 640×480/30 worked (Sept–Oct 2019) — [NVIDIA forum](https://forums.developer.nvidia.com/t/jetson-nano-and-usb-5-8g-uvc-camera-receiver/82382)
- **Windows:** Skydroid's listing says "XP: open the camera; WIN7: install AMCP camera software; WIN10: open camera" — [rcdrone Skydroid OTG](https://rcdrone.top/products/skydroid-receiver-otg). A European retailer's Skydroid True Diversity listing says it works on PC via USB, includes micro-USB and Type-C OTG cables and gives "640x480 at 30fps" (search-result summary; the page returned 403) — [Sigmanortec](https://sigmanortec.ro/en/fpv-receiver-otg-skydroid-58ghz-150ch-true-diversity-uvc-microusb)
- **macOS:** no receiver-specific test was found. An old Apple Discussions thread says "UVC compliant webcams do not require any driver installation" (search-result summary) — [Apple Discussions](https://discussions.apple.com/thread/1416363)
- **Latency:** about 100 ms per the Banggood EWRF listing ("delay is about 100ms") and Unmanned Tech's ROTG02 review (prior notes) — [Banggood EWRF](https://www.banggood.com/EWRF-OTG-Receiver-5_8GHz-56CH-720+480-or-30Fps-FPV-Receiver-For-Phone-Tablet-Smart-Android-Mobile-Transmitter-UVC-Video-Capture-Card-FPV-Drone-p-2046141.html); [Unmanned Tech review](https://www.unmannedtechshop.co.uk/blogs/knowledge-base/eachine-rotg02-android-fpv-receiver-setup-review)
- **Power:** the Skydroid is powered by the phone over OTG ("no external power supply required"), USB 5 V 190 mA — [Buzz Skydroid single](https://buzzfpv.com.au/products/skydroid-uvc-single-control-receiver-otg-5-8g-150ch-channel-fpv-receiver-video-transmission-downlink-audio-for-android-phone); [rcdrone Skydroid OTG](https://rcdrone.top/products/skydroid-receiver-otg)

### Inferences
- **Opening the receiver in OpenCV:**
  - Windows: `cv2.VideoCapture(index)`. Linux: `cv2.VideoCapture('/dev/videoN', cv2.CAP_V4L2)`.
  - If frames are black or the open fails, request `MJPG` FOURCC at 640×480.
  - With no transmitter locked, these receivers output "snow" frames, so a successful `read()` does not prove a valid picture.
- **Cables:**
  - Most of these receivers have a **micro-USB** port (EWRF "Interface: Micro USB"). A USB-C phone therefore needs the micro-USB→USB-C OTG cable, which the Skydroid single and both EWRF listings include; Buzz's listing does not state contents.
  - For a laptop, use a normal micro-USB data cable (USB-A) or a micro-USB→USB-C cable. Phone OTG cables can be directional.
- **Video system:** the receiver's 640×480 (Skydroid) or 720×480 (EWRF) digitised output accepts NTSC (Cetus Lite, M01) or PAL (EWRF TX04) camera video. Resolution for AI work is SD either way.
- **Value ranking:**
  1. Buzz's Skydroid at A$34.95 is the cheapest known *verified* receiver-only price if it restocks.
  2. Today the cheapest verified purchasable route is the rcdrone EWRF camera+receiver set, ≈A$98 delivered for both parts.
  3. AliExpress may be cheaper, but only if the chosen option is receiver-only. Avoid the bundled 200–600 mW transmitters, which exceed the Australian 25 mW limit.

### Gaps
- Receiver-only option prices, shipping and delivery times on AliExpress could not be read.
- Banggood's shipping to Australia could not be confirmed.
- eBay AU could not be checked (403).
- No first-hand test of these receivers on macOS was found.
- The exact UVC formats (MJPEG vs YUYV) of the Skydroid and EWRF units specifically were not found; the Jetson thread's receiver is unnamed.
- Buzz's Skydroid listing gives no package contents and no restock date.

## Q3. Downward distance sensor: VL53L1X breakout (I2C, 3.3 V) — smallest/lightest and best-value delivered to Sydney

### Takeaway
**Best value with fast, verified delivery:** Core Electronics' **PiicoDev VL53L1X**, A$20.75 in stock (166 units, ships same day before 2 pm) + **A$6.25 eParcel Express = A$27.00** to 2000. But it is the largest board (25.4×25.4 mm) and runs on 3.3 V only (2.6–3.5 V).

**Smallest/lightest:** the **Pololu VL53L1X carrier** (13×18×2 mm, **0.5 g** without headers, 2.6–5.5 V). Core sells it for A$38.40 + A$6.25 = **A$44.65**, dispatching 13–16 Oct.

**Fastest:** Little Bird in Sydney (Pimoroni board, 19×19×3.2 mm, A$34.00, 5 in its Sydney warehouse) by **same-day GoPeople courier, A$49.21 → A$83.21**. Express Post is A$8 (A$42.00 total, 1–3 business days).

**Cheapest overall:** AliExpress generic VL53L1X modules (regular about AU$4.81–7.42), but shipping, delivery time and board size are unverified.

### Cited Findings

| Board | Store | Price (inc GST) | Delivery to 2000 | Size / weight / supply | Stock | Source |
|---|---|---|---|---|---|---|
| **PiicoDev Laser Distance Sensor VL53L1X** (CE07741) | Core Electronics (Newcastle NSW) | **A$20.75** | Stamped mail A$3.70 (8+ business days, untracked); eParcel Standard A$6.25 (5+); **eParcel Express A$6.25 (1+ business days)**; StarTrack Premium A$31.07; DHL A$41.52 | **25.4×25.4 mm**, 2× M2.5 holes; "Operating Voltage: 2.6 to 3.5V"; PiicoDev/Qwiic/STEMMA QT connector "(3.3V only)"; ±20 mm typical error | In stock: "dispatch 166 today", same day if ordered before 2 PM | [Core PiicoDev](https://core-electronics.com.au/piicodev-laser-distance-sensor-vl53l1x.html); [Core quote to 2000](https://core-electronics.com.au/cart/link/CE07741:1/to/2000.md) |
| **Adafruit VL53L1X** (ADA3967) | Core Electronics | **A$28.25** | Same rates (Express A$6.25) | **25.5×17.5×4.6 mm, 1.8 g**; regulator and level shifting, "3-5V"; STEMMA QT | In stock (10 today) | [Core Adafruit](https://core-electronics.com.au/adafruit-vl53l1x-time-of-flight-distance-sensor-30-to-4000mm-stemma-qt-qwiic.html); [Core quote](https://core-electronics.com.au/cart/link/ADA3967:1/to/2000.md) |
| **Pimoroni VL53L1X breakout** (CE05771) | Core Electronics | **A$33.35** | Express A$6.25 | **19×19×3.2 mm**; "3.3V or 5V compatible"; reverse-polarity protection; ±25 mm | In stock: **1 unit**, more in 7–12 days | [Core Pimoroni](https://core-electronics.com.au/vl53l1x-time-of-flight-tof-sensor-breakout.html) |
| **Pololu VL53L1X carrier** (#3415) | Core Electronics | **A$38.40** | Express A$6.25 (no stamped-mail option offered) | **13×18×2 mm, 0.5 g without header pins**; 2.6–5.5 V; I2C level-shifted; 2 mounting holes for #2/M2 | Lead time: "expect dispatch between Oct 13 and Oct 16" | [Core Pololu](https://core-electronics.com.au/vl53l1x-time-of-flight-distance-sensor-carrier-with-voltage-regulator-400cm-max.html); [Core quote](https://core-electronics.com.au/cart/link/POLOLU-3415:1/to/2000.md) |
| SparkFun VL53L1X (Qwiic) | Core Electronics | A$49.65 | Express A$6.25 | 2.6–3.5 V | Lead time: dispatch Oct 14–20 | [Core SparkFun](https://core-electronics.com.au/sparkfun-distance-sensor-breakout-4-meter-vl53l1x-qwiic.html) |
| **Pimoroni VL53L1X breakout** (PR-PIM373) | **Little Bird Electronics (Sydney)** | **A$34.00** | Parcel Post A$8.00 (3–7 business days); **Express Post A$8.00 (1–3 business days)**; **GoPeople same-day A$49.21–82.21** ("deliver by 5:00 PM today" for A$49.21). No pickup option shown | 19×19×3.2 mm | "In Sydney now: **5**", "Ships from our Sydney warehouse" | [Little Bird product](https://littlebirdelectronics.com.au/products/vl53l1x-time-of-flight-tof-sensor-breakout); [Little Bird quote to 2000](https://littlebirdelectronics.com.au/cart/link.md?items=PR-PIM373:1&postcode=2000) |
| Adafruit VL53L1X (AF-3967) | Little Bird | A$28.35 | Same rates (A$8 post) | 25.5×17.5×4.6 mm, 1.8 g | "In Sydney now: **0** · Available from our supplier: **99**" ("Comes in from our supplier") | [Little Bird Adafruit](https://littlebirdelectronics.com.au/products/adafruit-vl53l1x-time-of-flight-distance-sensor-30-to-4000mm); [quote](https://littlebirdelectronics.com.au/cart/link.md?items=AF-3967:1&postcode=2000) |
| Adafruit VL53L1X | Pimoroni (UK), AU storefront | A$24.00 (AU market; UK price £12.25) | **Only UPS Saver A$95.40 or DHL Express A$95.88 "+ duties + taxes"** quoted to 2000 | 25.5×17.5×4.6 mm, 1.8 g | In stock (Pimoroni's own PIM373 board, £13.75, is out of stock) | [Pimoroni AU Adafruit](https://shop.pimoroni.com/en-au/products/adafruit-vl53l1x-time-of-flight-distance-sensor-30-to-4000mm-stemma-qt-qwiic); [Pimoroni PIM373](https://shop.pimoroni.com/products/vl53l1x-breakout); live Pimoroni `en-au/cart/shipping_rates.json` |
| Generic "VL53L1X laser ranging sensor module TOF … 4 meters" | AliExpress (Choice) | Regular AU$7.42; new-shopper deal AU$1.49 | Not verifiable | Not stated on card | 187 sold, 5★ | [AliExpress 1005007324288727](https://www.aliexpress.com/item/1005007324288727.html) |
| Generic "VL53L1X VL53LO … 400cm Measurement Extension Board" | AliExpress | Orig AU$5.17 / sale AU$4.81 | Not verifiable | Not stated | 500+ sold, 4.7★ | [AliExpress 1005008281495691](https://www.aliexpress.com/item/1005008281495691.html) |
| Generic VL53L1X modules (3rd-party marketplace) | Amazon AU | A$30.57–43.94 for VL53L1X-titled results (several are multi-packs; some "VL53L1X V2" titles also name the VL53L0X, so the chip is ambiguous), e.g. "VL53L1X Ranging Flight Time Sensor Module 3V-5V" A$33.82, Jevina A$31.44 | Delivery and shipper not captured | — | — | [Amazon AU search](https://www.amazon.com.au/s?k=vl53l1x+sensor); [B0BTH9XQN7](https://www.amazon.com.au/dp/B0BTH9XQN7); [B0CPHYV11D](https://www.amazon.com.au/dp/B0CPHYV11D) |

- **Core Electronics shipping and pickup:** Core ships from Cardiff (Newcastle) NSW; "In-stock orders are dispatched within one business day". Pickup at Cardiff is "offered at checkout for nearby postcodes" only — [Core shipping](https://core-electronics.com.au/shipping.md)
- **Not available at:**
  - Pakronics: only Crazyflie decks (Z-ranger v2 A$50.29 ex GST ≈ A$55.32 inc; Multi-ranger A$205.71 ex GST) and an Adafruit VL53L4CX — [Pakronics search](https://www.pakronics.com.au/search/suggest.json?q=vl53l1x&resources%5Btype%5D=product); [Pakronics Z-ranger v2](https://www.pakronics.com.au/products/crazyflie-z-ranger-v2-deck-ss114991550)
  - Jaycar: the "vl53l1x" search returned only unrelated fallback products (power supplies, 3D printers) — [Jaycar search](https://www.jaycar.com.au/search?text=vl53l1x)
  - Phaser FPV: 0 results — [Phaser search](https://phaserfpv.com.au/search/suggest.json?q=vl53l1x&resources%5Btype%5D=product)
- **Not checkable:** Altronics returned a reCAPTCHA page — [Altronics search](https://www.altronics.com.au/search/?q=vl53l1x). eBay AU returned 403 — [eBay AU](https://www.ebay.com.au/sch/i.html?_nkw=vl53l1x&LH_PrefLoc=1)
- **AliExpress listing caveat:** many AliExpress "VL53L1X" cards are multi-variant TOF050C/TOF200C/TOF400C listings whose cheapest variant is not the VL53L1X (prior notes) — [AliExpress 1005002932722448](https://www.aliexpress.com/item/1005002932722448.html)
- **Sensor modes (all boards):** short mode "up to ~130 cm, 50 Hz max", most immune to ambient light; medium/long up to 4 m at 30 Hz max — [Core Pololu page](https://core-electronics.com.au/vl53l1x-time-of-flight-distance-sensor-carrier-with-voltage-regulator-400cm-max.html)
- **Flix precedent:** the Flix RoboCamp 2026 height-hold fork reads a VL53L1X with the Pololu VL53L1X library in Short mode with a 50 ms timing budget (prior notes) — [xTimop/flix-poscontrol distance.ino](https://github.com/xTimop/flix-poscontrol/blob/poscontrol/flix/distance.ino)

### Inferences
- **Electrical fit:** every board listed works on the Flix's 3.3 V I2C bus. The PiicoDev and SparkFun are 3.3 V-only, which is fine for an ESP32. The Pololu, Adafruit and Pimoroni boards also accept 5 V.
- **Board size:**
  - The **Pololu** is the clear choice when weight and footprint matter: 0.5 g, 13×18 mm, and it can be wired directly without headers.
  - The **PiicoDev** is the cheapest delivered tracked option but about 2.7× the Pololu's area. Its connector is convenient for testing but adds cable weight.
  - The Pimoroni (19×19 mm) is a middle ground.
- **Pimoroni direct** is poor value for one sensor: A$24 + about A$95 courier.
- **AliExpress** is the cheapest per unit if the buyer can wait and verify which variant ships.

### Gaps
- Net weights of the PiicoDev, Pimoroni and SparkFun boards were not stated by the sellers.
- Board dimensions of the AliExpress and Amazon generic modules were not available from search cards.
- Little Bird's lead time for the supplier-held Adafruit board was not retrieved.
- Pimoroni's "International Tracked" service (5–10 working days, listed under "Rest of world") was not offered in the live quote for this cart.

## Q4. Best-value and fastest option per part, delivered to Sydney 2000

### Takeaway
| Part | Best value (delivered) | Fastest |
|---|---|---|
| Camera | **BetaFPV Cetus Lite + US$1 antenna pack, US$25.99 ≈ A$37.43** (≈A$41.17 if GST charged), 12–30 days | **Phaser FPV Caddx Ant Nano + TBS Unify Pro32 Nano, A$97.49** with eParcel Express (1–2 days), or walk-in pickup at Somersby NSW |
| Receiver | **Buzz Skydroid UVC A$34.95** if restocked; **today: rcdrone EWRF receiver + 25 mW camera set, US$68.33 ≈ A$98.41**, free 9–15 days | No Australian stock. rcdrone Express (5–8 days): US$97.33 ≈ A$140.17 |
| ToF sensor | **Core PiicoDev VL53L1X, A$27.00** with eParcel Express (1+ business days); lightest board: **Pololu via Core, A$44.65** | **Little Bird (Sydney) Pimoroni board by same-day GoPeople, A$83.21**; or A$42.00 by Express Post (1–3 days) |

### Cited Findings
- Cetus Lite US$19.99 + antenna packet US$1.00 → cart US$20.99 → "Standard Shipping = 5.00 USD"; Cetus Lite alone → "Standard Shipping = 10.00 USD" (BetaFPV live cart quotes to AU 2000, 8 Oct 2026) — [BetaFPV Cetus Lite](https://betafpv.com/products/cetus-lite-camera-and-vtx-module); [BetaFPV shipping policy](https://betafpv.com/policies/shipping-policy)
- Phaser cart (Unify Pro32 Nano + Caddx Ant Nano, A$89.85): eParcel Standard A$7.09 (3–5 days), eParcel Express A$7.64 (1–2 days), TNT Air A$29.91, DHL A$51.62 (live quote, 2000) — [Phaser Unify Pro32 Nano](https://phaserfpv.com.au/products/tbs-unify-pro32-nano); [Phaser Caddx Ant Nano](https://phaserfpv.com.au/products/caddx-ant-fpv-camera)
- rcdrone.top EWRF set: "1-Free Shipping(9-15days) = 0.00 USD", "2-Express Delivery(5-8days) = 29.00 USD" (live quote, AU 2000) — [rcdrone EWRF set](https://rcdrone.top/products/ewrf-5-8g-48ch)
- Core PiicoDev and Little Bird delivery quotes as tabled in Q3 — [Core quote](https://core-electronics.com.au/cart/link/CE07741:1/to/2000.md); [Little Bird quote](https://littlebirdelectronics.com.au/cart/link.md?items=PR-PIM373:1&postcode=2000)

### Inferences
- **One-order shortcut:** the rcdrone EWRF set buys a matching 25 mW camera (4 g, 2.5–5.5 V) **and** a receiver with USB-C cable for ≈A$98, one shipment, no GST surprise beyond 10%. That is good value if a 4 g PAL camera is acceptable instead of the 2.47 g Cetus Lite.
- **Cheapest full set, but slow and partly unverified:** Cetus Lite (≈A$37) + an AliExpress receiver-only option + Core PiicoDev (A$27) ≈ A$90–110.
- **All-fast set:** Phaser pair A$97.49 + PiicoDev A$27.00, but there is no fast receiver. The receiver is the bottleneck in every scenario.

### Gaps
- AliExpress delivery times and shipping fees could not be verified, so it cannot be ranked for speed.
- Buzz FPV's restock timing and its shipping cost from Perth were not available.

## Q5. Compatibility issues (5 V supply, receiver apps and phones, OpenCV video format, radio rules)

### Takeaway
- **Camera supply:** the M01, A01, Air VTX/camera and Caddx Ant need **5 V**, so on a 1S Flix they need a boost converter. The Cetus Lite (3.7–5.5 V), LST-S4 (3.6–5.5 V) and EWRF TX04 (2.5–5.5 V) can run from 1S.
- **Receivers:** they need an **Android** phone with OTG + UVC (no iPhone) and a UVC viewer app.
- **Laptop:** the receivers appear as ordinary webcams (Windows 10 Camera app; Linux `/dev/videoN`), so OpenCV can read them, typically at 640×480/30 fps, often MJPEG, with about 100 ms latency.
- **Radio rules:** set the camera to **25 mW on a mid-band channel inside 5725–5875 MHz** and keep the supplied antenna.

### Cited Findings
- **Supply voltages:**
  - M01 "Supply Voltage: 5V" — [BetaFPV M01](https://betafpv.com/products/m01-aio-camera-5-8g-vtx)
  - Cetus Lite "Power: DC 3.7V-5.5V" — [BetaFPV Cetus Lite](https://betafpv.com/products/cetus-lite-camera-and-vtx-module)
  - Air VTX "Operating voltage: 5V"; Air Camera "DC 5-12V" — [Air VTX](https://betafpv.com/products/air-vtx); [Air Camera](https://betafpv.com/products/air-camera)
  - LST-S4 "Power: 3.6-5.5V" — [Flying Tech LST-S4](https://www.flyingtech.co.uk/product/lst-s4-mini-5-8ghz-25mw-40ch-vtx-800tvl-aio-camera/)
  - EWRF TX04 "Working Voltage: 2.5V-5.5V" — [rcdrone EWRF set](https://rcdrone.top/products/ewrf-5-8g-48ch)
  - Caddx Ant "DC 5-25v"; Unify Pro32 Nano "Operating Voltage: 3-13V" — [Phaser Ant](https://phaserfpv.com.au/products/caddx-ant-fpv-camera); [Phaser Unify](https://phaserfpv.com.au/products/tbs-unify-pro32-nano)
- **Video systems:** M01 NTSC; Cetus Lite NTSC 4:3; EWRF TX04 PAL; LST-S4 "switchable NTSC/PAL" (search summary of Flying Tech/Evelta) — sources as above
- **Phone requirements and apps:**
  - Skydroid: "This product does not support Apple phone"; apps "FUAV" or "Fpv viewer" — [Buzz Skydroid](https://buzzfpv.com.au/products/skydroid-uvc-single-control-receiver-otg-5-8g-150ch-channel-fpv-receiver-video-transmission-downlink-audio-for-android-phone)
  - EWRF: Android + OTG, Qualcomm / Kirin 950+ / MediaTek X20+; apps "PocketFPV / GoFPV / usb otg camera … CameraFi / FPViewer / USB Web Camera"; "do not use 'FUAV' app" — [rcdrone EWRF 56CH](https://rcdrone.top/products/ewrf-5-8ghz-56ch-uvc-otg-audio-fpv-receiver-720-480-for-android-mobile-phone)
  - Skydroid mini: Go-FPV app — [rcdrone Skydroid mini](https://rcdrone.top/products/skydroid-mini-uvc-otg-5-8g-150ch-audio-fpv-receiver-for-android-mobile-phone-tablet-smartphone-transmitter-rc-drone-spare-part)
- **Laptop/OpenCV evidence:** Windows 10 "open camera" — [rcdrone Skydroid OTG](https://rcdrone.top/products/skydroid-receiver-otg); Ubuntu VLC `/dev/video1`/`/dev/video2` — [ArduPilot Discourse](https://discuss.ardupilot.org/t/5-8g-fpv-usb-receiver-direct-to-qgc/102782); MJPEG-only 640×480 — [NVIDIA forum](https://forums.developer.nvidia.com/t/jetson-nano-and-usb-5-8g-uvc-camera-receiver/82382)
- **Radio rules:** 5725–5875 MHz at 25 mW EIRP for class "Any" transmitters; EIRP limit "in any direction"; non-supplied external antennas "may result in a breach" (prior notes) — [LIPD 2025](https://www.legislation.gov.au/F2025L01047/asmade/2025-09-05/text/original/epub/OEBPS/document_1/document_1.html)
- **Power-adjustable parts:** A01 "0/25mW/200mW adjustable"; Unify Pro32 Nano "14dBm (25mW), 20dBm (100mW), 26dBm (400mW), 28dBm (500+mw)". These must be set to 25 mW in Australia — [BetaFPV A01](https://betafpv.com/products/a01-aio-camera-vtx); [Phaser Unify](https://phaserfpv.com.au/products/tbs-unify-pro32-nano)

### Inferences
- **Flix power design:** Flix runs from a 1S LiPo with a 3.3 V ESP32. If a 5 V-only camera is chosen, add a small 5 V boost converter and feed the camera from it. Even for the 1S-capable cameras, a filtered or boosted 5 V rail avoids video brownouts and motor noise when the pack sags.
- **Avoid high-power bundles:** many cheap AliExpress "ready to use" bundles pair the receiver with 200–2000 mW transmitters, which are not licence-free in Australia. Buy receiver-only, or bundles with a 25 mW camera.
- **One receiver, two hosts:** a single receiver can serve both the Android phone (OTG) and the laptop (USB webcam), but not at the same time. Using both simultaneously would need two receivers on the same channel.

### Gaps
- No source confirmed macOS behaviour for these receivers.
- No measured glass-to-OpenCV latency was found for a specific receiver (the ~100 ms figure is the seller's or reviewer's display latency).
- Whether the Cetus Lite's VTX channel can be set within 5725–5875 MHz is unconfirmed.
