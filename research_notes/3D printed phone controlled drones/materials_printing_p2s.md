# 3D Printing Drone Frames and Parts on a Bambu Lab P2S: Materials, Settings, Design Rules (PLA, PETG, TPU 85A, TPU ~65D, and Add-On Filaments)

Research date: 2026-10-05. Prices are US-store list prices as shown on the pages when they were fetched (Oct 2026); Bambu runs frequent sales, so they may change. Datasheet (TDS) values come from Bambu Lab's official PDFs linked on the US store product pages. Specimens were printed at 100% infill and dried or annealed before testing, so real parts will usually perform worse than the TDS numbers.

## 1. Bambu Lab P2S specs that matter for drone parts (official sources)

### Takeaway
The P2S is a fully enclosed 256 x 256 x 256 mm printer. It has a 300 °C hotend, a 110 °C bed and a hardened-steel nozzle and extruder gear as standard, so carbon-fibre filaments (PA6-CF, PET-CF, PAHT-CF, PPA-CF) are officially supported out of the box. It has no active chamber heater; the chamber reaches about 50 °C passively. The biggest P2S-specific gotcha is TPU 85A. It cannot go through any AMS feeder and cannot be printed with the stock 0.4 mm nozzle (you need a 0.6 or 0.8 mm hotend). It has to be loaded by hand from above the printer and unloaded by hand. A harder "TPU for AMS" (68D) can be fed through the AMS. A generic third-party 64D/65D TPU is not on Bambu's AMS-supported list, so it goes on an external spool.

### Cited Findings
#### Core machine specs
- Build volume is 256 x 256 x 256 mm. The printer is 392 x 406 x 478 mm and weighs 14.9 kg net — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- Maximum nozzle temperature is 300 °C and maximum bed temperature is 110 °C. Toolhead maximum speed is 600 mm/s and maximum acceleration is 20,000 mm/s² — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- The pre-installed nozzle is hardened steel, and so is the extruder gear — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq). The store page says the hardened-steel extrusion system is "designed specifically for stable, long-term printing of high-performance fiber-reinforced materials" — [Bambu US Store P2S](https://us.store.bambulab.com/products/p2s)
- Officially supported filament types: PLA, PETG, ABS, ASA, TPU, Support for PLA, Support for PLA/PETG, Support for ABS, PET, PA, PC, PVA, PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA6-CF, PA6-GF, PAHT-CF, PPA-CF, PET-CF — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- Chamber: the store page markets the P2S as "50°C Chamber Ready For Engineering-Grade Filaments", using a flap-controlled Adaptive Airflow System that seals heat in and filters the air through a carbon filter — [Bambu US Store P2S](https://us.store.bambulab.com/products/p2s). There is no active chamber heating; chamber temperature is managed by the enclosure and by switching between internal and external air circulation — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- The airflow system draws in cool outside air, so PLA and PETG can be printed with the cover closed when the room is below 30 °C. The recommended room temperature is 10–30 °C at below 85% humidity — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- The servo (PMSM) extruder gives up to 8.5 kg of extrusion force. The hotend is a quick-swap design ("30-Second Nozzle Swap", one clip, no wiring to disconnect) — [Bambu US Store P2S](https://us.store.bambulab.com/products/p2s)
- Supported nozzle sizes are 0.2 / 0.4 / 0.6 / 0.8 mm, and the printer ships with 0.4 mm — [shop3duniverse P2S listing (search excerpt)](https://shop3duniverse.com/products/bambu-lab-p2s). High-flow nozzles are supported. P2S nozzles are compatible with H2D nozzles but not A1 nozzles — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- Price: P2S standalone $749.00 — [Bambu US Store P2S](https://us.store.bambulab.com/products/p2s). Official H2/P2S hotend with hardened-steel nozzle: 0.6 mm and 0.8 mm cost $20.99 each, 0.4 mm costs $26.99 — [Shop3DUniverse Bambu Hotend H2/P2S](https://shop3duniverse.com/products/bambu-lab-hotend-for-h2-p2s)

#### AMS and TPU compatibility
- **TPU 85A / 90A** ($41.99/kg): "AMS HT Compatible; AMS 2 Pro, AMS, AMS lite NOT Compatible." TPU 85A works on P-series printers. Nozzle: TPU 85A is recommended for 0.6 mm and 0.8 mm and is not supported on 0.2 mm, 0.4 mm or high-flow nozzles. TPU 90A is recommended for 0.4, 0.6 and 0.8 mm. Flow Dynamics Calibration should be turned off, and raising the max volumetric speed is not recommended — [Bambu US Store TPU 85A/90A](https://us.store.bambulab.com/products/tpu-85a-tpu-90a)
- In the AMS HT, TPU 85A/90A must use the dedicated TPU outlet. The AMS HT then acts "only as a sealed and drying chamber — its feeding function should not be used" — [Bambu Wiki TPU 85A/90A guide for P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- Loading TPU 85A on the P2S/P1: remove the top glass cover, detach and secure the toolhead PTFE tube, and put the spool beside the printer with its outlet higher than the printer. Heat the hotend to 250 °C and feed the filament directly from above into the extruder ("loading through the PTFE tube is not supported"). Press Load slowly and not repeatedly, otherwise the TPU can wrap around the extruder gears and clog. TPU 90A can be fed through a PTFE tube — [Bambu Wiki TPU 85A/90A guide for P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- Unloading: manual only. Heat to 250 °C, press Unload slowly and pull the filament out gently. "Automatic unloading with a cutter is not supported" — [Bambu Wiki TPU 85A/90A guide for P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series). The store also warns: "Do not press Unload when switching filaments, as this may cause uncut TPU residue to get stuck in the extruder" — [Bambu US Store TPU 85A/90A](https://us.store.bambulab.com/products/tpu-85a-tpu-90a)
- Recommended containers are an AMS HT or a sealed dry box (Bambu suggests a 5.8 L sealed box with a printed spool holder and an opened side port). Raise the container so the filament feeds smoothly. Print 85A/90A at 225 °C on a 30–35 °C bed at default volumetric speed — [Bambu Wiki TPU 85A/90A guide for P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- Nozzle history matters. If the nozzle was used for CF/GF filaments, leftover fibres increase resistance for TPU, so do several cold pulls with PLA or PETG (not with fibre-filled filament). Brand-new nozzles are recommended — [Bambu Wiki TPU 85A/90A guide for P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- P2S FAQ: "It is recommended that you print TPU material using an spool holder," with a link to the 85A/90A P-series guide — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- **Bambu "TPU for AMS"** is 68D Shore hardness, from $34.99/kg. It is "All AMS Series Compatible", and only the 0.2 mm nozzle is excluded — [Bambu US Store TPU for AMS](https://us.store.bambulab.com/products/tpu-for-ams); its TDS also says "Shore hardness of 68D" — [Bambu TPU for AMS TDS](https://store.bblcdn.com/s5/default/0a98353dce6d486ca848b21d2b19a207.pdf)
- **AMS 2 Pro** ($299, dries at up to 65 °C) supports "TPU for AMS". Its other list ("TPE, generic TPU … Bambu PET-CF/TPU 95A, and other filament that contains carbon fiber or glass fiber") marks those as not supported for AMS feeding — [Bambu US Store AMS 2 Pro](https://us.store.bambulab.com/products/ams-2-pro)
- **AMS HT** ($139, dries at up to 85 °C) feeds "TPU for AMS". "TPE, generic TPU, Bambu PET-CF/TPU 95A, and other filament that contains carbon fiber or glass fiber" go through its Bypass Filament Outlet. With TPU, the AMS HT "cannot use the automatic feed and return function, but can be used as a drying box." It cannot dry while feeding through the bypass port. Each AMS HT needs its own external power supply for drying — [Bambu US Store AMS HT](https://us.store.bambulab.com/products/ams-ht)
- **TPU 95A HF** ($41.99): "All AMS Series NOT Compatible" — [Bambu US Store TPU 95A HF](https://us.store.bambulab.com/products/tpu-95a-hf)
- The P2S supports up to 4 AMS 2 Pro plus 4 AMS HT units (20 slots). The standalone P2S has no buffer, which must be bought separately. The P2S can power one AMS 2 Pro for drying while it is in standby, and printing is paused during drying — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- Recommended PTFE tube lengths for external spools on the P2S: upper-left rear spool to buffer 350 mm, lower-left 280 mm, right rear mount to chassis intake 180 mm — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq)
- Bambu sells a "TPU Feed Assist Module" accessory, cross-listed on the TPU 85A page — [Bambu US Store TPU 85A/90A](https://us.store.bambulab.com/products/tpu-85a-tpu-90a)

#### Drying on/with the P2S
- The P2S can dry filament on its heated bed. Clear the plate, unload the filament, press "Prepare", and cover the spool with a lid printed in a high-temperature material (PA-CF or PC) or with a packaging box. Flip the spool midway — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)
- AMS 2 Pro: drying up to 65 °C, and it "may not fully dry" filaments that need higher temperatures. AMS HT can dry all filaments, though PVA, PPS-CF and PPA-CF may still not dry completely. Static drying mode is unsuitable for PLA and TPU because the coils can stick or deform. TPU spools expand when heated (width grows from about 65.4 mm to 69.4 mm) — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament); [Bambu Wiki TPU guide P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- Bambu's drying table: see question 4 below for the full per-material values — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)

### Inferences
- The P2S ships with a 0.4 mm nozzle, so a beginner who wants to print the TPU 85A they already own needs to buy a 0.6 mm hotend first (about $21). Keeping one hotend for TPU and another for CF filaments avoids the fibre-residue problem Bambu warns about. The quick-swap hotend makes this practical.
- TPU 85A printing on the P2S means the top glass is off and feeding is manual, so expect slower and more hands-on prints. For bumpers and mounts that don't need to be extra soft, TPU 90A (0.4 mm nozzle, can feed through PTFE) or Bambu TPU for AMS (68D, AMS-feedable) is less hassle.
- If the user's "TPU 65D" is a third-party filament, Bambu's documents put it in the "generic TPU" group: external spool or AMS HT bypass, not AMS feeding. If it is actually Bambu "TPU for AMS", it is 68D and can go in the AMS.
- The engineering filaments' TDS ask for a 45–60 °C chamber (question 6). The P2S reaches about 50 °C passively, which sits inside that range, but small, thin drone parts are less prone to warping than large boxes anyway.

### Gaps
- The P2S Combo (with AMS 2 Pro) price could not be extracted; bambulab.com returned HTTP 403 to automated fetches and the store page didn't expose it in text.
- I found no official number for actual P2S chamber temperatures when printing PA-CF/PET-CF beyond the "50 °C chamber ready" marketing line.
- No official Bambu statement covers third-party 64D/65D TPUs in the AMS 2 Pro/AMS lite. Community success reports were not verified.

## 2. Material properties that matter for drones: PLA vs PETG vs TPU 85A vs TPU ~65D (datasheets)

### Takeaway
By Bambu's own datasheets, PLA Basic is actually the stiffest and has the best Z-layer strength of the four materials the user owns. Its weakness is heat: HDT is 54–57 °C, so it softens in a hot car or near hot motors and ESCs, and it is brittle. PETG HF is about 30% less stiff and weaker between layers, but about 8–12 °C more heat-resistant and less brittle in practice. TPU 85A is a rubber (modulus about 7 MPa, more than 700% elongation) and is only for cushioning. A ~64–68D TPU sits in between. It is semi-rigid, tough, and much stiffer than 85A, but far below PLA (BASF 64D about 0.2 GPa; Bambu 68D lists 1.19 GPa) and it creeps under load and heat. For a drone, stiffness per gram and heat resistance decide what can be a frame; impact toughness decides what makes a good guard or mount.

### Cited Findings
#### Datasheet comparison (Bambu TDS unless noted; XY = in-plane, Z = across layers)
| Material | Density g/cm³ | Young's modulus XY / Z (MPa) | Flexural modulus XY / Z (MPa) | Tensile strength XY / Z (MPa) | Elongation at break XY / Z | Charpy impact XY unnotched; XY notched; Z (kJ/m²) | HDT 1.8 / 0.45 MPa (°C) | Tg (°C) | Vicat (°C) | Sat. water absorption | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| PLA Basic | 1.24 | 2580 / 2060 | 2750 / 2370 | 35 / 31 | 12.2% / 7.5% | 26.6; 7.9; 13.8 | 54 / 57 | 60 | 57 | 0.43% | [PLA Basic TDS](https://store.bblcdn.com/s1/default/58b85d0f3db94878854a28fdb8a0006e/Bambu_PLA_Basic_Technical_Data_Sheet.pdf) |
| PETG HF | 1.28 | 1810 / 1540 | 2050 / 1810 | 34 / 23 | 8.6% / 5.1% | 31.5; 6.2; 10.6 | 62 / 69 | 66 | 70 | 0.40% | [PETG HF TDS](https://store.bblcdn.com/3a230e260a3a47c2b0db0156e07eef91.pdf) |
| TPU 85A | 1.18 | 6.8 / 5.2 | N/A | 12.0 / 10.5 | >700% / >350% | 124.3 (XY); 88.5 (Z) | N/A (melt 177 °C) | N/A | – | 0.67% | [TPU 85A TDS](https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_TPU_85A_Technical_Data_Sheet_a7233668-497b-487f-af8a-3adb49fafaa1.pdf?v=1741314674) |
| TPU for AMS (68D) | 1.26 | 1190 / 600 | N/A | 22.4 / 11.2 | >650% / 31% | 124.3 (XY); 9.6 (Z) | N/A (melt 183 °C) | N/A | N/A | 1.20% | [TPU for AMS TDS](https://store.bblcdn.com/s5/default/0a98353dce6d486ca848b21d2b19a207.pdf) |
| BASF Ultrafuse TPU 64D (3rd party) | 1.193 | 205 / 168 (orientation columns in TDS) | – | stress at break 37 / 19 | 399% / 115% | notched Charpy 115 / 103 / 34 (three orientations); notched Izod "no break" in two orientations | Vicat 48 °C @50 N; 126 °C @10 N | −26 | see HDT col. | – | [BASF Ultrafuse TPU 64D TDS](https://move.forward-am.com/hubfs/AES%20Documentation/Flexible%20Filaments/TPU%2064D/TDS/Ultrafuse_TPU_64D_TDS_EN_v1.1.pdf) |

- BASF TPU 64D creep and heat data: compression set is 25% at 23 °C over 72 h and 55% at 70 °C over 24 h (ISO 815). Measured Shore D (15 s) is 58, despite the "64D" name. Abrasion is 43 mm³ (ISO 4649) — [BASF Ultrafuse TPU 64D TDS](https://move.forward-am.com/hubfs/AES%20Documentation/Flexible%20Filaments/TPU%2064D/TDS/Ultrafuse_TPU_64D_TDS_EN_v1.1.pdf)
- Siraya Tech markets its TPU 64D as "semi-rigid… Shore 64D translates to approximately 95A–98A on the Shore A scale… considerably more rigid than 85A", for "vibration dampeners", jigs and protective housings. Price from $27.87 — [Siraya Tech TPU 64D](https://siraya.tech/collections/tpu-64d)
- Typical third-party 65D example (KLEMA TPU 65D): nozzle 225–245 °C, "mandatory drying", recommended print speed about 20–40 mm/s. It is described as "significantly stronger than standard flexible plastics (like TPU 85A or 95A)." No full mechanical TDS appears on the retailer page — [3DDevice KLEMA TPU 65D](https://3ddevice.com.ua/en/product/tpu-65d-filament-klema-1-kg-1-75-mm-black/)
- Bambu says PLA Basic "has excellent toughness and Z-layer strength" — [PLA Basic TDS](https://store.bblcdn.com/s1/default/58b85d0f3db94878854a28fdb8a0006e/Bambu_PLA_Basic_Technical_Data_Sheet.pdf)
- Bambu positions TPU 85A as "the best choice for impact absorption", "the softest TPU in Bambu's lineup", for "impact-absorbing parts" and "soft cushioning elements". TPU 90A is "ideal for… RC tires, and functional components that require both strength and elasticity" — [Bambu US Store TPU 85A/90A](https://us.store.bambulab.com/products/tpu-85a-tpu-90a)
- Bambu positions TPU for AMS (68D) for "durable, impact-resistant parts like protective cases… automotive parts". Its max volumetric speed is 18 mm³/s, versus 12 for TPU 95A HF — [Bambu US Store TPU for AMS](https://us.store.bambulab.com/products/tpu-for-ams)
- Oscar Liang (FPV reviewer) on PLA: "easy to print and has a low melting point, but it is brittle and has low impact resistance. Good for prototyping and low strength applications." On PETG: "excellent layer adhesion" and a high melting point — [Oscar Liang: FPV Pilot's Guide to 3D Printing](https://oscarliang.com/3d-printer/)
- A UK Bambu reseller says "Standard PLA is too brittle for structural parts and will shatter on impact" — [Additive-X blog (vendor)](https://www.additive-x.com/blog/3d-printing-for-drones-materials-parts-and-applications)
- Heat exposure reference: in an ASU / UC San Diego study, a car parked in the sun on a hot day can reach a dashboard temperature of "about 160 degrees [°F]" (about 71 °C) within about an hour — [ASU News](https://news.asu.edu/20180516-discoveries-asu-study-hot-cars-can-hit-deadly-temperatures-within-one-hour). The search excerpt for the same story gives dashboards averaging 157 °F (about 69 °C) and cabin air 116 °F (about 47 °C) after one hour in the sun — [ASU News (search excerpt)](https://news.asu.edu/20180516-discoveries-asu-study-hot-cars-can-hit-deadly-temperatures-within-one-hour)
- Vibration damping: Bambu notes that TPU part elasticity depends on wall loops and sparse infill. "The higher the wall loops or sparse infill density, the lower the elasticity" — [Bambu US Store TPU for AMS](https://us.store.bambulab.com/products/tpu-for-ams)

### Inferences
- **Specific stiffness** (Young's modulus XY ÷ density, MPa per g/cm³), calculated from the TDS values above: PLA about 2,080; PETG HF about 1,410; TPU 68D about 940; BASF TPU 64D about 170; TPU 85A about 6. By the same measure, ABS is about 2,100, ASA about 2,330, PC about 1,760, PET-CF about 3,670 and PA6-CF about 4,060 (from question 6 TDS). For stiffness per gram, PLA beats PETG, and CF-filled PET and nylon are roughly 2x better than either.
- **Layer adhesion** (Z/XY tensile ratio): PLA 89%, PETG HF 68%, TPU 85A 88%, TPU 68D 50% (and only 31% Z elongation versus >650% XY). PETG and the hard TPU are much weaker across layers, so print orientation matters even more for them.
- **Heat:** PLA's HDT of 54 °C sits below a sunny dashboard (about 69–71 °C) and near Tg (60 °C). PLA parts left in a hot car can sag, especially arms under motor-screw clamp load. PETG HF (HDT 62–69 °C, Vicat 70 °C) is borderline on a dashboard but fine in shade or in a bag. ABS, ASA, PC, PA6-CF and PET-CF all have HDTs of 84 °C or more (question 6).
- **Creep/clamping:** both TPUs creep. BASF 64D loses 55% of its compression set at 70 °C in 24 h, so clamping a hard TPU under motor screws or stack bolts is likely to lose preload, especially when warm. Use rigid material (or metal or CF) in bolted, load-bearing joints and keep TPU for compliant parts.
- Bambu's TPU for AMS TDS shows the same XY impact value as TPU 85A (124.3 kJ/m²) and an implausibly tight "1190 ± 0.4 MPa" modulus. This may be a copy or typo error in the TDS. Its 1.19 GPa modulus is also about 6x BASF's 64D value. Different grades and test setups could explain part of the gap, but the writer should present the 68D modulus with caution.

### Gaps
- No Bambu "PETG Basic" TDS was parsed. Values above are for PETG HF; the store shows PETG Basic at MSRP $13.99 ([store](https://us.store.bambulab.com/products/petg-basic)).
- No quantitative vibration-damping data (loss factor, tan δ) for any of these filaments was found.
- No independent (non-vendor) test data for any ~65D third-party TPU was found. KLEMA publishes no mechanical numbers on the retailer page.
- No verified data on motor or ESC operating temperatures in FPV flight (forum pages blocked fetching), so the "near hot motors" risk for PLA is qualitative only.

## 3. Which material for which drone part (what experienced builders use)

### Takeaway
Builders' practice converges on a simple rule: rigid parts in PETG (or CF-filled nylon/PET for printed frames and arms), everything that gets hit or needs to flex in TPU. Oscar Liang: "I use TPU and PETG 99% of the times, TPU for flexible parts and PETG for rigid parts." Commercial frame makers sell TPU-printed GoPro mounts, antenna mounts, arm guards, standoffs and air-unit adapters. Fully printed frames do fly (whoops in PETG-HF, PLA, PA-CF or even TPU; 3.5–5" frames in PETG or PA-CF), but they are noticeably less stiff than carbon. TPU 85A is the softest option and suits padding, bumpers and soft mounts. Most FPV accessory parts are made in harder TPU (90–95A, or the 64–68D class for semi-rigid parts).

### Cited Findings
- Oscar Liang: "Personally, I use TPU and PETG 99% of the times, TPU for flexible parts and PETG for rigid parts." He lists TPU as ideal for "shock absorbers, arm guards, antenna mounts" and his printed examples include GoPro mounts, FPV camera mounts and arm guards — [Oscar Liang: FPV Pilot's Guide to 3D Printing](https://oscarliang.com/3d-printer/)
- Commercial frame accessories are sold as TPU prints. Examples: FlyFishRC Volador 5 GoPro mount ([FPV24](https://www.fpv24.com/en/flyfishrc-volador-5-gopro-mount-3d-print-tpu)), antenna mount ([FPV24](https://www.fpv24.com/en/flyfishrc-volador-5-antennenhalterung-3d-druck-tpu)), arm guards ([FPV24](https://www.fpv24.com/en/flyfishrc-volador-5-arm-guards-3d-print-tpu)) and standoffs ([FPV24](https://www.fpv24.com/en/flyfishrc-volador-5-standoffs-3d-print-tpu)); the iFlight Chimera5 Pro V2 TPU set ([FPV24](https://www.fpv24.com/en/iflight-chimera5-pro-v2-tpu-set)); a SpeedyBee Master 5 DJI O4 adapter set in TPU ([FPV24](https://www.fpv24.com/en/speedybee-master-5-hd-v2-dji-o4-air-unit-pro-adapter-set-3d-druck-tpu-set)); and a Foxeer Foxwhoop35 receiver holder in TPU ([FPV24](https://www.fpv24.com/en/fpv24/foxeer-foxwhoop35-receiver-holder-3d-print-tpu-pink))
- Vendor material map (UK Bambu reseller; not independently tested): frame arms and body in PA-CF ("yields rather than shatters on impact"); motor mounts and landing gear in nylon (PA6/PA12); ASA for UV and outdoor parts "where PETG would degrade"; TPU for flexible parts; PETG or PLA for less critical parts — [Additive-X blog](https://www.additive-x.com/blog/3d-printing-for-drones-materials-parts-and-applications)
- Whoop and micro frames (MakerWorld/Printables design notes, taken from search excerpts because MakerWorld blocked direct fetching; low-to-moderate confidence):
  - A TPU frame for the BetaFPV Air65 flew "similar to stock, with no jello". It was heavier ("similar feeling to using a larger battery", less affected by wind) and slightly more flexible by feel.
  - An ultralight Air65 frame weighs 2.46 g and is printed in PETG-HF.
  - The "Tiny Wizard" 75 mm frame is meant for PA-CF (PETG-CF also suitable).
  - A "Tiny CineWhoop 2S" uses a TPU bumper with a PA6-CF frame (PLA/PETG "would also be fine").
  - Sources: [MakerWorld 2786698](https://makerworld.com/models/2786698), [MakerWorld 1266946](https://makerworld.com/models/1266946), [MakerWorld 2472238](https://makerworld.com/models/2472238), [MakerWorld 2599858](https://makerworld.com/models/2599858), [MakerWorld 1998168](https://makerworld.com/models/1998168), [MakerWorld 2506822](https://makerworld.com/models/2506822). Mapping each claim to a specific listing could not be verified.
- The P.E.P.85 printed whoop prints its frame and ducts in PLA or PETG, with canopy and battery holders in TPU — [Printables P.E.P.85 (search excerpt)](https://www.printables.com/model/1204932-pep85-3d-printed-whoop-drone-85mm-frame)
- Canopies: an IntoFPV builder printed canopies in PETG-CF and PET-CF, angled at 45° so "the layer lines [are] almost perpendicular to any impacts" — [IntoFPV thread 29984](https://intofpv.com/printthread.php?tid=29984)
- FC and stack soft mounting: soft mounting the FC and/or motors is "the first recommendation" for oscillations and twitching. It allows higher PID tunes, cooler motors and less video noise, and some gyros (e.g., ICM-20608) practically require it — [Oscar Liang: Soft Mounting FC and Motors](https://oscarliang.com/soft-mounting-fc-motors/). A vendor blog says "TPU at 85A–95A shore hardness is the universal choice for stack mounting components" — [UAVMODEL blog (search excerpt)](https://blog.uavmodel.com/?p=3191)
- Camera: the first-line fix for jello is mechanical: balance props, soft-mount the camera, check motor screws. In one repair shop's tally of 200 repairs, prop balance alone accounted for 45% of jello cases — [Unmanned Tech: Jello checklist (vendor)](https://www.unmannedtechshop.co.uk/blogs/knowledge-base/fpv-drone-jello-fix-vibration-checklist-every-build)
- Fully printed 5" frame projects use PETG as the baseline and PA6/PA6-CF as the recommended material, with replaceable modular arms — [ModuFrame-5 (Elecrow project page)](https://www.elecrow.com/sharepj/modular-5-inch-quadcopter-frame-1263.html). A generative-design printed frame (ManaFly 3.5") notes "carbon fiber is stiffer than PETG, so there will be less vibrations" — [MakerWorld ManaFly (search excerpt)](https://makerworld.com/models/2000546)

### Inferences (suggested part-to-material map for this user's filaments)
- **Main frame / arms (5" class):** carbon fibre plates are the reliable choice. If printing, use PETG (or PLA for indoor, cool use), or better PA6-CF/PET-CF. Expect noticeably more flex and resonance than carbon (questions 5 and 7). For micro and whoop frames (65–85 mm), PETG/PETG-HF and PLA frames are commonly flown, and PA-CF is the upgrade.
- **Whoop ducts:** the cited designs use PLA/PETG ducts. TPU ducts are heavier. No source was found on which TPU hardness builders prefer for printed ducts (gap).
- **Prop guards and bumpers:** TPU. 85A gives maximum cushioning; 90–95A or 64–68D keeps its shape better on a guard ring that must not touch the props. Use more walls and infill to stiffen (per Bambu).
- **Landing gear / skids:** TPU (hard grade) or nylon. Avoid PLA (brittle).
- **Camera, action-camera (GoPro) and antenna mounts, canopies:** TPU (90–95A or 64–68D) is the community standard. PETG-CF/PET-CF canopies printed at 45° are an option for rigid hoods.
- **Battery pads / anti-slip pads:** TPU 85A suits soft, grippy pads. Battery straps are normally purchased (no source found on printed straps).
- **FC/gyro soft-mount gummies:** TPU 85A fits the cited 85A–95A range. But 85A needs a 0.6 or 0.8 mm nozzle, which limits how fine M2/M3 grommet features can be. TPU 90A on a 0.4 mm nozzle may print small grommets more accurately. Commercial silicone gummies are a cheap alternative (not sourced).

### Gaps
- No quantitative builder survey of TPU hardness choices (85A vs 95A vs 64D) per part type was found.
- No source on printed whoop duct hardness or weight versus injection-molded stock ducts.
- MakerWorld and Printables pages returned HTTP 403, so per-design notes come only from search-result excerpts.

## 4. Recommended print settings for drone parts on Bambu printers

### Takeaway
Start from the Bambu TDS and system presets. Print load-bearing rigid parts solid or near-solid (the printed-drone studies used 100% infill on arms). Orient arms so bending loads run along the layers (XY), never across them; Z strength is only 47–89% of XY. TPU 85A must be printed slowly on a 0.6/0.8 mm nozzle with low retraction (0.4–0.8 mm at 10–30 mm/s), after drying (90 °C bed for 16 h on the P2S, 70 °C oven for 8 h, or 75 °C in an AMS HT for 18 h). For screws, use brass heat-set inserts set with the user's soldering station rather than threading screws straight into plastic. Keep wall thickness around a thread at least equal to the screw diameter.

### Cited Findings
#### Per-material print parameters (Bambu TDS)
- **PLA Basic:** nozzle 190–230 °C; bed 35–45 °C (Cool, High-Temp or Textured PEI plate); fan on; speed below 300 mm/s; retraction 0.6–1.0 mm at 20–40 mm/s; chamber 25–45 °C; max bridge 30 mm; nozzles 0.2–0.8 mm — [PLA Basic TDS](https://store.bblcdn.com/s1/default/58b85d0f3db94878854a28fdb8a0006e/Bambu_PLA_Basic_Technical_Data_Sheet.pdf)
- **PETG HF:** nozzle 230–260 °C; bed 65–75 °C (Smooth or Textured PEI); fan 0–60%; speed below 300 mm/s; retraction 0.8–1.4 mm at 30–60 mm/s; chamber 35–50 °C; max bridge about 30 mm — [PETG HF TDS](https://store.bblcdn.com/3a230e260a3a47c2b0db0156e07eef91.pdf)
- **TPU 85A:** nozzle 0.6 or 0.8 mm only; 200–250 °C (225 °C recommended by the wiki); bed 30–35 °C; fan on; speed below 200 mm/s (volumetric limit governs); retraction 0.4–0.8 mm at 10–30 mm/s; chamber 25–45 °C; max bridge 10 mm; TDS specimens printed at 34 mm/s — [TPU 85A TDS](https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_TPU_85A_Technical_Data_Sheet_a7233668-497b-487f-af8a-3adb49fafaa1.pdf?v=1741314674); [Bambu Wiki TPU guide P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- **TPU for AMS (68D):** nozzles 0.4/0.6/0.8 mm; 220–240 °C; bed 30–35 °C; fan on; speed below 250 mm/s; retraction 0.8–1.4 mm at 20–40 mm/s; max bridge 20 mm; max volumetric speed 18 mm³/s — [TPU for AMS TDS](https://store.bblcdn.com/s5/default/0a98353dce6d486ca848b21d2b19a207.pdf); [Bambu US Store TPU for AMS](https://us.store.bambulab.com/products/tpu-for-ams)
- **Third-party 64D/65D TPU:** BASF 64D 230–255 °C (245 °C nominal), bed 40–60 °C, nozzle 0.4 mm or larger, dry at 70 °C for 5 h or more — [BASF Ultrafuse TPU 64D TDS](https://move.forward-am.com/hubfs/AES%20Documentation/Flexible%20Filaments/TPU%2064D/TDS/Ultrafuse_TPU_64D_TDS_EN_v1.1.pdf). KLEMA 65D 225–245 °C at about 20–40 mm/s — [3DDevice KLEMA TPU 65D](https://3ddevice.com.ua/en/product/tpu-65d-filament-klema-1-kg-1-75-mm-black/)
- Bambu TPU tips: don't raise the max volumetric speed; turn off Flow Dynamics Calibration for 85A/90A; avoid dark PLA as a support material under TPU — [Bambu US Store TPU 85A/90A](https://us.store.bambulab.com/products/tpu-85a-tpu-90a)

#### Drying (Bambu wiki appendix; P2S bed temperature / time | forced-air oven | AMS 2 Pro | AMS HT)
- PLA Basic/Matte (drying "recommended"): bed 60–70 °C for 12 h (flip every 6 h, cover with box or PC lid) | oven 50 °C for 8 h | AMS 2 Pro 45 °C for 12 h | AMS HT 45 °C for 12 h — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)
- PETG / PETG-CF ("recommended"): bed 75–85 °C for 12 h | oven 60–65 °C for 8 h | AMS 2 Pro 65 °C for 12 h | AMS HT 65 °C for 12 h — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)
- TPU 85A / 90A (drying "required", desiccant during use "required"): bed 90 °C for 16 h | oven 70 °C for 8 h | AMS 2 Pro 65 °C for 12 h ("may not be able to fully dry TPU — use heatbed or AMS HT instead") | AMS HT 75 °C for 18 h — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)
- TPU for AMS / TPU 95A HF ("required"): bed 80–90 °C for 12 h | oven 70 °C for 8 h | AMS 2 Pro 65 °C for 12 h (may not fully dry) | AMS HT 75 °C for 18 h — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)
- Store below 20% RH, sealed with desiccant (all Bambu TDS). TPU is "highly hygroscopic", and moist TPU causes "stringing, bubbles, and weak layer adhesion" — [Bambu Wiki TPU guide P series](https://wiki.bambulab.com/en/filament-acc/filament/tpu-85a-90a-printing-guide-for-p-series)
- Oscar Liang dries filament in an oven at about 40–50 °C "for a couple of hours" — [Oscar Liang: 3D printing guide](https://oscarliang.com/3d-printer/). This is lower and shorter than Bambu's guidance, especially for TPU. Bambu also warns that kitchen and microwave ovens are "not compatible" for drying (all TDS).

#### Annealing (TDS)
- PLA Basic: 50–60 °C for 6–12 h; prints may deform or warp — [PLA Basic TDS](https://store.bblcdn.com/s1/default/58b85d0f3db94878854a28fdb8a0006e/Bambu_PLA_Basic_Technical_Data_Sheet.pdf)
- PETG HF: "not recommended" because gains are limited and shapes may deform; if you do, 75–80 °C for 4–8 h — [PETG HF TDS](https://store.bblcdn.com/3a230e260a3a47c2b0db0156e07eef91.pdf)
- TPU: "not recommended… prints with not very simple shape and structure can deform obviously" — [TPU 85A TDS](https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_TPU_85A_Technical_Data_Sheet_a7233668-497b-487f-af8a-3adb49fafaa1.pdf?v=1741314674)
- PA6-CF: 80–130 °C for 6–12 h — [PA6-CF TDS](https://store.bblcdn.com/b2abc59ac250492b979a52f1ce3e61b3.pdf). PET-CF: 80–140 °C for 6–12 h — [PET-CF TDS](https://store.bblcdn.com/9690d6226f024acab2ba0dd52dabb654.pdf)

#### Walls, infill, orientation (drone-specific evidence)
- Peer-reviewed sub-250 g FPV chassis printed in PETG: arms/structure at 0.2 mm layers, 0.66 mm line width, 100% grid infill, 230 °C nozzle and 70 °C bed; base plate at 40% grid infill to save weight; no supports — [Al-Hadithi & Alcón Flores, Drones 2025, 9, 789 (MDPI)](https://www.mdpi.com/2504-446X/9/11/789); [open-access PDF](https://oa.upm.es/92277/1/10412811.pdf)
- The ManaFly printed 3.5" frame "is designed to be printed with 100% infill", using a skeletal generative shape so the weight stays low — [MakerWorld ManaFly (search excerpt)](https://makerworld.com/models/2000546)
- ModuFrame-5: for PA-CF the designer added "thicker arms, increased wall counts, and compatibility with heat-set metal inserts to prevent thread wear" — [ModuFrame-5](https://www.elecrow.com/sharepj/modular-5-inch-quadcopter-frame-1263.html)
- Anisotropy (Z vs XY tensile strength): PLA 31 vs 35 MPa; PETG HF 23 vs 34; PA6-CF 48 vs 102; PET-CF 35 vs 74 — [PLA TDS](https://store.bblcdn.com/s1/default/58b85d0f3db94878854a28fdb8a0006e/Bambu_PLA_Basic_Technical_Data_Sheet.pdf); [PETG HF TDS](https://store.bblcdn.com/3a230e260a3a47c2b0db0156e07eef91.pdf); [PA6-CF TDS](https://store.bblcdn.com/b2abc59ac250492b979a52f1ce3e61b3.pdf); [PET-CF TDS](https://store.bblcdn.com/9690d6226f024acab2ba0dd52dabb654.pdf)
- Canopies printed at 45° so layer lines face impacts — [IntoFPV thread 29984](https://intofpv.com/printthread.php?tid=29984)
- TPU stiffness tuning: more wall loops or higher infill gives lower elasticity — [Bambu US Store TPU for AMS](https://us.store.bambulab.com/products/tpu-for-ams)

#### Fasteners: heat-set inserts, self-tapping, nuts
- CNC Kitchen heat-set inserts:
  - Set them with a soldering iron 10–20 °C above the print temperature (about 225 °C for PLA, 245 °C for PETG, 265 °C for ABS).
  - Melt them only about 90% of the way in, then press flush with a flat tool and hold until the plastic solidifies.
  - Use a blind hole about 1 mm deeper than the insert, straight (not tapered) holes, the minimum wall thickness, and normally no chamfer.
  - "Printed holes almost always come out smaller than in CAD," so print test parts per material and orientation.
  - Inserts give stronger, re-usable threads; direct plastic threads wear out after a few cycles and strip if over-tightened.
  - Source: [CNC Kitchen: Tips & Tricks for Heat-Set Inserts](https://www.cnckitchen.com/blog/tipps-amp-tricks-fr-gewindeeinstze-im-3d-druck-3awey)
- Protolabs/Hubs:
  - Minimum wall thickness around a thread should equal the fastener diameter (e.g., M5 needs 5 mm).
  - Embedded-nut pockets: start with a 0.2 mm total offset (0.1 mm per side) for a loose fit.
  - Self-tapping screws: aim for a pilot hole giving 75–80% thread engagement if the screw maker gives no figure. They are "not suited for applications where parts will regularly be assembled/disassembled."
  - Drilling holes after printing gives more accurate diameters.
  - Source: [Protolabs Network (Hubs): Threads & screws for 3D printing](https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/)
- A parametric metric self-tapping test jig with holes in 0.1 mm steps lets you find the right pilot-hole size per material and printer — [Printables: Metric self tapping thread test jig](https://printables.com/model/357084-metric-self-tapping-thread-test-jig-f3d-parametric)

### Inferences
- Print arms flat on the bed so the arm's long axis and its bending plane lie in XY. A vertically printed arm fails along a layer line at a fraction of the load (only 47% of XY strength for CF filaments, 68% for PETG HF).
- Use 100% infill (or many walls) for arms and motor mounts. Infill savings matter more on plates and canopies. On small parts, walls dominate, so 4–6 walls effectively makes the part solid. This is an inference; no drone-specific wall-count test was found.
- TPU 85A on a 0.6 mm nozzle: keep Bambu's preset volumetric limit, use 0.4–0.8 mm retraction, and dry thoroughly. These match the TDS ranges.
- The user owns a soldering station, so heat-set inserts in PETG/PLA are the most robust way to get re-usable M2/M3 threads in printed drone parts. Self-tapping is acceptable for parts that are rarely removed.

### Gaps
- CNC Kitchen's insert dimension table (hole diameter per M2/M2.5/M3 insert) is an image; the exact values couldn't be extracted, so check the table on the page or the insert vendor's spec.
- No authoritative per-material self-tapping pilot-hole numbers for M2/M3 in PLA/PETG/TPU were found. Use the test jig.
- No sources compared nyloc nuts with inserts for printed drone parts.
- No CNC Kitchen test specifically on wall count vs infill for bending stiffness was retrieved.

## 5. Design rules: hybrid frames, resonance, arms, motor mounts, cables, vibration isolation

### Takeaway
Frame stiffness directly limits flight performance. Betaflight's own tuning notes say flexy frames cause wobble, and that "stiff frames… will accept more D." Resonances show up as fixed-frequency noise that RPM filters do not remove and that the dynamic or static notch filters must handle. Printed thermoplastic frames are much less stiff than carbon, so the robust beginner designs are:
- carbon plates or tubes for the load path with printed TPU/PETG accessories, or
- hybrid designs (carbon tubes as arms, printed hubs) with modular, replaceable printed arms.

Keep motor screws about 2 mm longer than the arm thickness so they cannot reach the windings. Soft-mount the FC and camera, and route wires inside tubes or channels.

### Cited Findings
- Betaflight 4.3 tuning notes:
  - Low-level random horizon instability in cinematic flight usually means "the frame is too soft or flexy, or it is being shaken by slightly out of balance props or worn bearings." The advice: "make sure the frame is super stiff and nothing is able to wobble or flap around."
  - "the primary limit on how much D you can run is how clean the build is. Builds with good bearings, well balanced and well centered motors, stiff frames, stiff props, etc, will accept more D."
  - Static notches "work best at targeting constant frequency resonance."
  - Source: [Betaflight Wiki: 4.3 Tuning Notes](https://betaflight.com/docs/wiki/tuning/4-3-Tuning-Notes)
- Frame resonance appears in Blackbox spectrograms as a constant-frequency band that does not track RPM. Typical modes: 80–120 Hz arm bending (long 7" arms), 150–200 Hz torsional twist (common on 5"), 250–350 Hz plate vibration. Adding a 3 mm carbon brace between front and rear standoffs reportedly raises torsional resonance by 30–50 Hz, and adding tip mass lowers arm bending frequency — [UAVMODEL: Frame Resonance Analysis (vendor blog)](https://blog.uavmodel.com/fpv-drone-frame-resonance-analysis-blackbox-frequency-plot-arm-stiffness-and-vibration-mode-elimination-2026-guide/)
- "Frame resonances, which manifest as large fixed frequency noise lines, won't be removed by RPM filters; they are best managed by keeping the Dynamic Notch active." Fix the mechanics first; over-filtering adds latency — [UAVMODEL resonance article (search excerpt)](https://blog.uavmodel.com/6015-2/); [Unmanned Tech jello checklist](https://www.unmannedtechshop.co.uk/blogs/knowledge-base/fpv-drone-jello-fix-vibration-checklist-every-build)
- Soft mounting the FC and motors isolates vibration from the gyro and "allows for higher PID tunes and easier PID tuning", though it "doesn't eliminate all vibration frequencies" — [Oscar Liang: Soft Mounting](https://oscarliang.com/soft-mounting-fc-motors/)
- Jello sources by frequency (one shop's repair data): unbalanced props, loose motor screws, hard-mounted camera, bent shafts, frame arm resonance. Half a turn of looseness on one motor screw made 60 fps footage "unwatchable" — [Unmanned Tech (vendor)](https://www.unmannedtechshop.co.uk/blogs/knowledge-base/fpv-drone-jello-fix-vibration-checklist-every-build)
- Motor screws: screws that are too long can touch the motor windings, causing shorts (carbon is conductive) or physically damaging the stator coils. "Screw length should be approximately 2mm longer than the thickness of the arm. For instance, for 5mm arms use 7mm screws." Check with a multimeter in continuity mode between each screw and the motor wires — [Oscar Liang: Check if Motor Screws are Touching Windings](https://oscarliang.com/check-motor-screws-touching-winding)
- Hybrid example: a 3D-printed quad using 16 mm OD / 14 mm ID carbon tubes (cut into four 165 mm arms) with all other parts printed. Motor wires are routed inside the tubes. It was printed in PLA, but the designer says "maybe PETG or ABS is a better choice to make it more crash resistant" — [Flite Test: 3D printed FPV quadcopter](https://flitetest.com/articles/3d-printed-fpv-quadcopter)
- Modular printed 5" frame: individually replaceable arms "significantly reducing maintenance costs", optional heat-set inserts, M3 hardware throughout, 30.5 x 30.5 mm FC mount, PETG baseline or PA6-CF recommended — [ModuFrame-5](https://www.elecrow.com/sharepj/modular-5-inch-quadcopter-frame-1263.html)
- Screwless interlocking arms "inspired by Japanese joinery" were used for rapid field replacement and to remove fastener weight (PETG prototype; carbon fibre planned for production) — [Drones 2025, 9, 789](https://www.mdpi.com/2504-446X/9/11/789)
- Laminated printed arms: one builder printed a sandwich beam with outer PA6-CF layers carrying bending and a central PA6-GF layer carrying shear, with no delamination in crash tests — [IntoFPV thread 29984](https://intofpv.com/printthread.php?tid=29984)
- Thread design: wall thickness around a threaded hole should be at least the screw diameter — [Hubs](https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/)

### Inferences
- Arm cross-section: bending stiffness scales with modulus times the second moment of area, which for a rectangle grows with the cube of its height. Making printed arms taller (deeper in the thrust direction) or using a box or I-section stiffens them far more cheaply in grams than adding width. This is general beam theory; no drone-specific printed-arm cross-section test was found.
- Printed frames will have lower resonant frequencies than carbon ones, and those frequencies can land inside the motor-noise band. Plan to keep Betaflight's dynamic notch enabled and check a Blackbox log after the maiden flight.
- With non-conductive printed arms, the electrical-short path via the frame is less likely, but a too-long screw can still physically damage the windings. Oscar Liang's length rule still applies; with plastic arms, add the arm thickness plus any insert and washer stack.
- Isolate the FC (TPU or silicone grommets) and the camera (TPU mount) separately. Keep motors hard-mounted to a stiff arm unless vibration logs say otherwise.

### Gaps
- No primary source quantified the stiffness of printed arms against carbon plate arms of equal weight, other than the ManaFly "about 61% lower stiffness" excerpt (question 7).
- No dedicated source on cable-routing best practice for printed frames beyond routing through tubes.
- The UAVMODEL and Unmanned Tech articles are vendor blogs; their resonance frequency bands and repair statistics are plausible but not peer-reviewed.

## 6. Extra filaments worth adding; hardened nozzle; prices

### Takeaway
For better printed drone structures, the most useful additions are:
- **PET-CF** ($44.99 for 0.5 kg / 1 kg options): highest stiffness of Bambu's line, HDT 182 °C, low water absorption.
- **PA6-CF** (from $42.99): stiff, the toughest of the CF options, HDT 164 °C, but it absorbs water (2.35%) and must be dried at 75–85 °C or more.
- **ASA** ($29.99/kg): UV-stable, HDT 92 °C, good notched impact, for outdoor and canopy parts.

The P2S needs no nozzle upgrade for CF filaments because it ships with a hardened-steel nozzle and gear. PC ($39.99/kg) has the highest heat resistance of the unfilled options, but Bambu's TDS shows only modest impact numbers. PLA Aero ($44.99) is for fixed-wing planes, not quads. For TPU, adding TPU 90A or TPU for AMS (68D) widens the hardness range with fewer feeding hassles than 85A. Third-party PA12-CF costs about $65 per 500 g.

### Cited Findings
#### Hardened nozzle
- The P2S ships with a hardened-steel nozzle and a hardened-steel extruder gear, and officially supports PA6-CF, PAHT-CF, PET-CF, PPA-CF, PETG-CF, PLA-CF and ASA-CF — [Bambu Wiki P2S FAQ](https://wiki.bambulab.com/en/p2s/manual/p2s-faq); [Bambu US Store P2S](https://us.store.bambulab.com/products/p2s)
- A reseller notes that CF nylon "requires a hardened steel nozzle because the fibres wear through standard brass" — [Additive-X](https://www.additive-x.com/blog/3d-printing-for-drones-materials-parts-and-applications)

#### Datasheets of candidate additions (Bambu TDS)
- **PA6-CF:**
  - Density 1.09 g/cm³.
  - Young's modulus 4430 MPa XY / 2170 Z; flexural modulus 5460 / 2240 MPa.
  - Tensile strength 102 / 48 MPa.
  - Charpy 40.3 unnotched and 13.4 notched XY, 15.5 Z.
  - HDT 164 °C at 1.8 MPa and 186 °C at 0.45 MPa; Tg 68 °C (dry).
  - Saturated water absorption 2.35%.
  - Nozzle 260–290 °C (0.6 mm recommended); bed 80–100 °C; chamber 45–60 °C; dry at 80 °C for 8–12 h.
  - Source: [PA6-CF TDS](https://store.bblcdn.com/b2abc59ac250492b979a52f1ce3e61b3.pdf)
- **PET-CF:**
  - Density 1.29.
  - Young's modulus 4730 / 2160 MPa; flexural modulus 5320 / 2210.
  - Tensile strength 74 / 35 MPa.
  - Charpy 36.0 unnotched, 8.6 notched, 4.5 Z.
  - HDT 182 / 205 °C; Tg 75 °C.
  - Water absorption 0.37%.
  - Nozzle 260–290 °C (0.6 mm recommended); chamber 45–60 °C.
  - Source: [PET-CF TDS](https://store.bblcdn.com/9690d6226f024acab2ba0dd52dabb654.pdf)
- **ASA:**
  - Density 1.05.
  - Young's modulus 2450 / 2120 MPa.
  - Tensile strength 37 / 31 MPa.
  - Charpy 41.0 unnotched, 19.6 notched, 4.9 Z.
  - HDT 92 / 100 °C; Vicat 106 °C.
  - Water absorption 0.45%.
  - Nozzle 240–270 °C; bed 80–100 °C; chamber 45–60 °C; anneal at 80–90 °C.
  - Source: [ASA TDS](https://store.bblcdn.com/ad7b08230c164e72856cffbe06bb7dc9.pdf)
- **ABS:**
  - Density 1.05.
  - Young's modulus 2200 / 1960 MPa.
  - Tensile strength 33 / 28 MPa.
  - Charpy 39.3 unnotched, 21.5 notched, 7.4 Z.
  - HDT 84 / 87 °C.
  - Source: [ABS TDS](https://store.bblcdn.com/s7/default/23b4cf2b83d5470bb96d19970b5f3ae8/Bambu_ABS_Technical_Data_Sheet_V3.pdf)
- **PC:**
  - Density 1.20.
  - Young's modulus 2110 / 1450 MPa.
  - Tensile strength 62 / 56 MPa.
  - Charpy 34.8 unnotched, 7.5 notched, 9.0 Z.
  - HDT listed as 117 °C at 1.8 MPa and 112 °C at 0.45 MPa (the order looks inverted in the TDS); Tg 145 °C.
  - Nozzle 260–280 °C; bed 90–110 °C; chamber 45–60 °C.
  - Source: [PC TDS](https://store.bblcdn.com/a52afdccddfd448583d119587122c8c5.pdf)
- **PLA Aero (foaming lightweight PLA):** "Specialized for 3D RC Planes Printing". Print density is only 50–80% of the filament's. A same-volume part is "about half the weight of PLA Basic", and density is controlled by raising temperature and lowering flow. All AMS series compatible — [Bambu US Store PLA Aero](https://us.store.bambulab.com/products/pla-aero)

#### Prices (USD, Bambu US store unless noted, Oct 2026)
- PLA Basic: MSRP $15.99/kg ($11.19/roll at 10+ rolls) — [store](https://us.store.bambulab.com/products/pla-basic-filament)
- PETG HF: MSRP $15.99/kg — [store](https://us.store.bambulab.com/products/petg-hf). PETG Basic: MSRP $13.99 — [store](https://us.store.bambulab.com/products/petg-basic)
- ABS: MSRP $15.99/kg — [store](https://us.store.bambulab.com/products/abs-filament)
- ASA: $29.99/kg — [store](https://us.store.bambulab.com/products/asa-filament)
- PC: $39.99/kg — [store](https://us.store.bambulab.com/products/pc-filament)
- PA6-CF: from $42.99 (0.5 kg and 1 kg options) — [store](https://us.store.bambulab.com/products/pa6-cf)
- PET-CF: $44.99 (0.5 kg and 1 kg options; the displayed price appears to be the default/smaller size) — [store](https://us.store.bambulab.com/products/pet-cf)
- PAHT-CF: from $49.99 (0.5 kg / 1 kg) — [store](https://us.store.bambulab.com/products/paht-cf)
- PLA Aero: $44.99 — [store](https://us.store.bambulab.com/products/pla-aero)
- TPU for AMS (68D): from $34.99/kg — [store](https://us.store.bambulab.com/products/tpu-for-ams)
- TPU 85A / 90A: $41.99/kg — [store](https://us.store.bambulab.com/products/tpu-85a-tpu-90a)
- TPU 95A HF: $41.99 — [store](https://us.store.bambulab.com/products/tpu-95a-hf)
- Siraya Tech TPU 64D: from $27.87 — [Siraya Tech](https://siraya.tech/collections/tpu-64d)
- Polymaker Fiberon PA12-CF10: $65.48 per 500 g ($130.95/kg, excluding VAT, 3DJake International) — [3DJake](https://www.3djake.com/polymaker/fiberon-pa12-cf10-black)
- AMS HT (85 °C dryer and feeder): $139 — [store](https://us.store.bambulab.com/products/ams-ht). AMS 2 Pro: $299 — [store](https://us.store.bambulab.com/products/ams-2-pro). 0.6 mm P2S hotend: $20.99 — [Shop3DUniverse](https://shop3duniverse.com/products/bambu-lab-hotend-for-h2-p2s)

#### Caveats on CF filaments
- Nylon moisture trade-off: a builder found PA6-GF prints "can become dramatically more flexible" after 1–2 weeks in normal conditions, with drying restoring "perhaps 70% of the original stiffness." Another builder: "everything you do to increase the durability reduces the stiffness and vise versa" — [IntoFPV thread 29984](https://intofpv.com/printthread.php?tid=29984)
- Mixed evidence on CF fillers: a user test found Bambu PLA-CF weaker than eSUN PLA+, and Eryone CF-PETG weaker in tension than plain Overture PETG (search excerpts from forum and vendor pages, low confidence) — [3dprintingspace forum](https://3dprintingspace.com/t/tensile-tester-mounted-on-lathe/7292?page=2); [Printables strength-test model](https://www.printables.com/model/550739-strength-test)
- A vendor claim that PA-CF "matches carbon fibre plate stiffness" — [Additive-X](https://www.additive-x.com/blog/3d-printing-for-drones-materials-parts-and-applications) — is unsupported by any test I found. Bambu's TDS gives PA6-CF a flexural modulus of 5.46 GPa (XY) — [PA6-CF TDS](https://store.bblcdn.com/b2abc59ac250492b979a52f1ce3e61b3.pdf)
- AMS feeding: AMS 2 Pro and AMS HT list "Bambu PET-CF… and other filament that contains carbon fiber or glass fiber" in the unsupported/bypass group, while PAHT-CF and PETG-CF are listed as supported — [AMS 2 Pro](https://us.store.bambulab.com/products/ams-2-pro); [AMS HT](https://us.store.bambulab.com/products/ams-ht). AMS 2 Pro cannot dry PA or PET-CF ("Not compatible" for drying); AMS HT dries PA-CF at 85 °C for 12 h and PET-CF at 80 °C for 12 h — [Bambu Wiki filament drying](https://wiki.bambulab.com/en/filament-acc/filament/dry-filament)

### Inferences
- **Priority 1 for structural printed frames: PET-CF.** It has the best stiffness-to-weight of Bambu's line (about 3,670 MPa per g/cm³ against PLA's 2,080), very high heat resistance and low moisture sensitivity, so its properties stay stable. Its weakness is low notched and Z impact; print arms flat.
- **Priority 1b: PA6-CF.** It is tougher than PET-CF (notched impact 13.4 vs 8.6 kJ/m²; Z 15.5 vs 4.5), better for crash-prone arms. Its stiffness drifts with humidity, so it needs disciplined drying and storage. An AMS HT ($139) or the P2S bed-drying routine is then effectively required.
- **ASA** is the best "cheap upgrade" over PETG for outdoor and hot-car parts (canopies, mounts, landing gear): HDT 92 °C, notched impact about 3x PETG HF's in the TDS, UV-stable, $29.99/kg. ABS is similar and cheaper, but less UV-stable (the UV claim comes from Additive-X).
- **PC** is not clearly better than ASA for drones on Bambu's numbers, apart from heat resistance.
- **LW-PLA / PLA Aero** is only for fixed-wing airframes (low-load, large-volume parts). It is not suitable for quad arms.
- **TPU range:** keep 85A for pads and soft mounts, and add 90A (0.4 mm nozzle, simpler loading) or TPU for AMS 68D (AMS-feedable) for mounts, guards and bumpers.

### Gaps
- No independent head-to-head flight or crash test of PET-CF vs PA6-CF vs PETG frames was found.
- Third-party PA6-CF/PA12-CF US-store prices other than the 3DJake international listing were not verified.
- Bambu's PA6-CF TDS lists 1.09 g/cm³, lower than typical PA6-CF values. This could not be cross-checked.

## 7. Real-world evidence: printed frame tests, crash survival, weights

### Takeaway
Real-world evidence is thin and mostly from hobbyists. Printed frames fly and can survive crashes:
- A 50 g PA6-CF/GF laminated test frame survived drops from 6 m and 15 m and broke at 30 m.
- A peer-reviewed PETG sub-250 g chassis showed an FEM safety factor of about 1.35 in a 5 m/s crash.
- A PETG ManaFly is reportedly about 61% less stiff than the carbon frame it was compared to.
- Whoop-scale printed frames (2.46 g PETG-HF; a TPU Air65 frame) fly close to stock.

No controlled study compared PLA vs PETG vs PA-CF vs carbon frames in flight.

### Cited Findings
- IntoFPV (builder "ph2t"):
  - A 50 g (dry weight) laminated PA6-CF/PA6-GF test rig survived crashes from 6 m and 15 m and failed at 30 m with a "full break across the two front arms". No delamination occurred.
  - Later testing produced a broken frame and canopy.
  - Moisture conditioning combined with annealing gave better crash survival than annealing alone.
  - PA6-GF became much more flexible after 1–2 weeks at ambient humidity.
  - Source: [IntoFPV thread 29984](https://intofpv.com/printthread.php?tid=29984)
- Peer-reviewed: Al-Hadithi & Alcón Flores, "Design and Validation of a 3D-Printed Drone Chassis Model…" (Drones 2025, 9, 789):
  - Sub-250 g FPV chassis printed in PETG as a prototype ("planned production in carbon fiber to achieve final performance and durability goals").
  - Validated against accelerations up to 4.2 G and speeds of about 116 km/h, with safety factors of about 5.3 under maximum thrust and 1.35 during impact (5 m/s crash simulations with bench tests).
  - PETG properties used: E = 2100 MPa XY and 1600 MPa Z. Arms and cover weighed 38 g.
  - Source: [MDPI Drones](https://www.mdpi.com/2504-446X/9/11/789); [PDF](https://oa.upm.es/92277/1/10412811.pdf)
- ManaFly (generative-design printed unibody frame): "a ManaFly printed in PETG will have about 61% lower stiffness than the carbon fiber frame it was compared to". Designed for 100% infill; each frame "only costs about $1". These are search excerpts; the page was not fetchable — [MakerWorld 1336260](https://www.makerworld.com/en/models/1336260); [MakerWorld 2000546](https://makerworld.com/models/2000546); [MakerWorld 2512262](https://makerworld.com/models/2512262)
- An FEA study reportedly found nylon gave the best strength-to-weight ratio compared with ABS and PETG for a drone frame (search excerpt; page returned 403) — [MATEC Web of Conferences 406, 04016 (2024)](https://www.matec-conferences.org/10.1051/matecconf/202440604016)
- Whoops (search excerpts):
  - A TPU Air65 frame flew "similar to stock, with no jello or noticeable vibration changes" but was heavier and slightly more flexible.
  - An ultralight PETG-HF Air65 frame weighs 2.46 g.
  - Sources: [MakerWorld whoop listings: 2786698](https://makerworld.com/models/2786698), [2472238](https://makerworld.com/models/2472238), [2599858](https://makerworld.com/models/2599858)
- Flite Test hybrid (carbon tubes plus PLA printed parts) was flown as an FPV quad. The designer recommends PETG or ABS over PLA for crash resistance — [Flite Test](https://flitetest.com/articles/3d-printed-fpv-quadcopter)
- Oscar Liang's long-term practice: TPU and PETG for nearly all printed FPV parts — [Oscar Liang](https://oscarliang.com/3d-printer/)

### Inferences
- For a beginner new to drones, the evidence supports this sequence:
  1. Fly a carbon-frame (or stock whoop) drone first.
  2. Print TPU and PETG accessories (mounts, guards, canopies).
  3. Experiment with printed micro/whoop frames in PETG or PLA (cheap, about 2–20 g).
  4. Move to PET-CF or PA6-CF for larger printed frames only after learning to read Blackbox noise and tune filters.
- Weight is a wash or a penalty for printed frames at 5" scale. Printed parts gain their advantage in repair cost (about $1 per frame for ManaFly) and iteration speed, not in weight or stiffness.

### Gaps
- No YouTube or video test results were retrieved or verified (e.g., CNC Kitchen, Joshua Bardwell). The user's brief mentions videos; none are cited here.
- No controlled crash test compares PLA vs PETG vs PA-CF vs carbon on the same frame geometry.
- No verified weight comparison of a printed 5" frame against a carbon 5" frame of the same layout.
- MakerWorld, Printables and some IntoFPV pages blocked automated fetching (HTTP 403/202), so several claims rely on search-engine excerpts and are flagged as such.
