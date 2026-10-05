# Australian prices and retailers for the Stage 3 (1S whoop / FPV) and Stage 4 (printed 5-inch ArduPilot GPS quad) parts lists, delivered to Sydney NSW 2000

**How these numbers were collected (read first).** All prices were observed on **5 October 2026**. Australian store prices are AUD including GST. They were read from each Shopify store's own product feed (`/products.json`, `/products/<handle>.js`) with an Australian market cookie, and spot-checked against product pages. "IN" or "OOS" means the store's in-stock/available flag on that date. On Phaser some "available" items can also be pre-ordered (some products have the inventory policy "continue"). Shipping costs to **Sydney NSW 2000** are live quotes from each store's own cart shipping calculator (`/cart/shipping_rates.json`, or the WooCommerce Store API for MicoAir). They are not estimates. USD prices are converted at **1 USD = 1.4411 AUD** and EUR at **1 EUR = 1.6176 AUD**. Both are the ECB reference rates of 2 Oct 2026 served by [Frankfurter](https://api.frankfurter.app/latest?from=USD&to=AUD). Overseas prices exclude Australian GST unless stated. See question 1 on whether 10% GST is added at checkout.

**Important data trap:** Next FPV runs two domains. `nextfpv.com` shows US-market **USD** prices, for example RP1 V2 at US$25.00 ([nextfpv.com](https://www.nextfpv.com/products/radiomaster-rp1-v2-expresslrs-2-4ghz-nano-receiver-1)). `nextfpv.com.au` shows the Australian **AUD** prices, for example the same RP1 V2 at A$34.95 ([nextfpv.com.au](https://www.nextfpv.com.au/products/radiomaster-rp1-v2-expresslrs-2-4ghz-nano-receiver-1)). Every Next FPV price below comes from the .com.au domain. Phaser, Buzz and Rising Sun returned identical prices with and without the AU cookie (0 differences across 497, 448 and 250 sampled variants respectively).

---

## 1. Which Australian FPV stores are reputable and well stocked in 2026, which overseas stores ship to Australia, and what do shipping to Sydney cost and take?

### Takeaway
Four Australian specialist stores carry almost every stage 3 and 4 part. **Phaser FPV** (Somersby NSW, Central Coast) is the only one that allows walk-in pickup near Sydney and has the broadest in-stock range. **Next FPV** is based in Prestons, south-west Sydney, but is online-only (no pickups). It offers free delivery over A$150 and is often cheapest on batteries and receivers. **Buzz FPV** (Perth) and **Rising Sun FPV** (Townsville) round out the specialists. HobbyWarehouse (Melbourne) carries no relevant FPV parts. Several overseas sources ship to Sydney cheaply: MicoAir's own store (flat US$5), BetaFPV (free over US$99.99) and Robofusion's MicoAir parts (A$9 air express). RDQ, Pyrodrone and Holybro charge US$36–68 for express courier, which wipes out their lower prices on small orders.

### Cited Findings

**Australian stores (location, size, shipping to 2000)**
- **Phaser FPV**: Shopify store in Somersby, New South Wales, priced in AUD, with 4,992 published products ([Phaser meta](https://phaserfpv.com.au/meta.json)). Address 1/80 Somersby Falls Rd, Somersby NSW 2250. "Walk-ins welcome for in-store purchases and pickups. As we are a warehouse showroom, products are not on open display" ([Phaser shipping policy](https://phaserfpv.com.au/policies/shipping-policy)).
- Phaser dispatches the same day for orders placed before 1pm Sydney time. Shipping uses live carrier rates "you pay what we pay", minus automatic discounts: −$5 over $99, −$8 over $150, −$12 over $250, −$15 over $400, −$20 over $1,000. There is deliberately no "free shipping". Sydney delivery estimates are 2 business days standard and 1 express. A "Sydney same-day courier: GO Logistics, $16.95 to Sydney and greater Sydney" is available for orders placed before 9am ([Phaser Shipping & Delivery](https://phaserfpv.com.au/pages/shipping-delivery)).
- Phaser live cart quotes to NSW 2000 (5 Oct 2026):
  - One ViFly ShortSaver 2: AusPost eParcel Standard A$7.09 (4–5 days), eParcel Express A$7.64 (3–4 days), TNT Air A$29.58, DHL A$51.62 ([product](https://phaserfpv.com.au/products/vifly-short-saver-2-smoke-stopper-xt30-xt60)).
  - Two CNHL 6S 1300 mAh LiPos (A$87.90): eParcel Standard A$9.89 (4–5 days), Express A$10.68 (3–4 days), "Go Logistics 24-48 Hour Delivery" A$24.95 ([product](https://phaserfpv.com.au/products/chinahobbyline-1300mah-6s-120c-lipo-battery-xt60-dg)). The A$24.95 courier quote conflicts with the A$16.95 on the shipping page.
- Phaser also runs a 3D-printing department. It had the **Bambu Lab hotend for H2/P2S/X2D, 0.6 mm hardened steel, A$35.95, in stock**, the nozzle the earlier report says the P2S needs for TPU 85A ([Phaser](https://phaserfpv.com.au/products/bambu-lab-hotend-h2d)).
- **Next FPV**: Shopify store in Prestons, New South Wales, priced in AUD, with 1,098 published products ([Next FPV meta](https://www.nextfpv.com/meta.json)). Its shipping page states "Sorry pickups are not available" ([Next FPV shipping](https://www.nextfpv.com.au/pages/shipping)). The store advertises "Free AU delivery for orders over $150" and "Order before 2.30pm AEST for same day shipping" ([Next FPV policy page](https://www.nextfpv.com/policies/shipping-policy)).
- Next FPV live cart quotes to NSW 2000:
  - RP1 V2 receiver alone (A$34.95): Aramex/Couriers Please A$10.95, eParcel Standard A$11.95 (3–5 days), eParcel Express A$15.95 (1–3 days), StarTrack Air Express A$19.95 ("NO LIPOS") ([product](https://www.nextfpv.com.au/products/radiomaster-rp1-v2-expresslrs-2-4ghz-nano-receiver-1)).
  - Four Tattu 6S 1300 LiPos (A$227.80): Aramex/Couriers Please **free**, eParcel Standard A$3.95, Express A$15.95 ([product](https://www.nextfpv.com.au/products/tattu-r-line-version-6-0-1300mah-22-2v-160c-6s1p-lipo-battery-pack-with-xt60-plug)).
- **Buzz FPV**: Shopify store in Wangara, Western Australia, with 2,893 products ([Buzz meta](https://buzzfpv.com.au/meta.json)). It offers free standard shipping on domestic orders over A$250. Standard delivery takes 3–5 business days and express 1–3, plus 1–2 business days to process orders. "[DG] dangerous goods can only be carried by australia post road options" outside the Perth metro area ([Buzz shipping policy](https://buzzfpv.com.au/policies/shipping-policy)). Live quote for a ShortSaver 2 to 2000: Standard Road A$9.95 (2–8 days), Express Air A$12.25 (1–4 days, "NO BATTERIES") ([product](https://buzzfpv.com.au/products/vifly-shortsaver-2)).
- **Rising Sun FPV**: Shopify store in Kirwan (Townsville), Queensland, the largest catalogue at 6,072 products ([Rising Sun meta](https://risingsunfpv.com.au/meta.json)). It offers "Same-day dispatch from Townsville on weekday orders before 3pm AEST" ([Rising Sun](https://risingsunfpv.com.au/policies/shipping-policy)). Its cart calculator returned an error, so no Sydney rate was obtained.
- **HobbyWarehouse**: Clayton, Victoria, with 1,868 products ([meta](https://hobbywarehouse.com.au/meta.json)). It ships within Australia only from Melbourne, "2-5 business days" to metro areas ([policy](https://hobbywarehouse.com.au/policies/shipping-policy)). A search of its full catalogue returned none of the stage 3 or 4 FPV parts, only diecast, RC boats and the like ([catalogue](https://hobbywarehouse.com.au/products.json)).
- DIYFPV's Oceania store directory, seen only as a search-result summary because the page returned 403 to direct fetches, ranks Buzz FPV, Phaser FPV and Next FPV as the most popular Oceania stores. It ranks Phaser FPV, Rising Sun FPV and Buzz FPV as the largest selections. It also lists Blackout Mini Quad, BoltRC, Buzz Hobbies, Ick Trading, Impulse RC and Multirotor Shop ([DIYFPV Oceania](https://www.diyfpv.com/catalog/stores/oceania)).
- Other Sydney businesses that turned up:
  - Little Bird Electronics is a Sydney electronics distributor. Its "Drone Kits & Parts" collection is STEM kits (Air:bit 2 A$229, Little Bird Quadcopter A$66.95, Flybrix) rather than FPV parts ([Little Bird](https://littlebirdelectronics.com.au/collections/drone-kits-parts.md)).
  - D1 Store at World Square is a DJI showroom with a flight cage ([D1](https://bookings.d1store.com.au/lounge/content/d1-sydney-world-square-grand-opening-21-12-2018)).

**Overseas stores that ship to Sydney (live cart quotes to NSW 2000)**
- **RaceDayQuads (Palmetto, Florida, USD)** ([meta](https://www.racedayquads.com/meta.json)). The only service offered to Sydney was **DHL Express Worldwide**:
  - One TBS Lucid 60A ESC (US$46.49): US$44.99 (3–6 days).
  - A US$221.43 cart (Lucid ESC, 4× ECO II 2207, RP1 V2, ToolkitRC M6AC): US$61.81 ([RDQ Lucid](https://www.racedayquads.com/products/tbs-lucid-60a-8s-am32-4-in-1-esc)).
  - The "FREE shipping for orders over $199" banner is a US offer ([RDQ](https://www.racedayquads.com/pages/international-shipping)).
- **BetaFPV (Shenzhen, USD)**. "We offer free standard shipping on all orders of $99.99 or more… $20 – $99.98, a flat rate of $5… under $20, a flat rate of $10". "All of the parcels are shipped by air" ([BetaFPV policy](https://betafpv.com/policies/shipping-policy)).
  - Live quotes: Air65 II (US$104.99) free standard; a US$141.96 electronics cart free.
  - A LiteRadio 3 alone (US$32.99) was quoted **US$10**, which contradicts the US$5 flat rate in the policy ([LiteRadio 3](https://betafpv.com/products/literadio-3-radio-transmitter)).
  - Duties and taxes are "the responsibility of the customer".
- **RadioMaster (Hong Kong, USD)**: Pocket (US$71.50) quoted Standard US$20 and Expedited US$35 ([RadioMaster Pocket](https://radiomasterrc.com/products/pocket-radio-controller-m2)).
- **Holybro (Hong Kong, USD)**. Ships from China under DAP terms, so the buyer pays duty and tax ([Holybro policy](https://holybro.com/policies/shipping-policy)). The only service quoted to Sydney was "DHL/FedEx Air – Australia":
  - M10 GPS alone: US$38.70.
  - Kakute H7 V2 plus Micro M10: US$36.21.
  - SiK V3: US$39.06 ([Holybro M10](https://holybro.com/products/m10-gps)).
- **Pyrodrone (Chatsworth, California, USD)**: MicoAir H743 V2 quoted UPS Worldwide Expedited US$44.96 (6–7 days), UPS Saver US$64.38, DHL Express US$67.80 (3–6 days) and UPS Express US$72.11 ([Pyrodrone MicoAir H743 V2](https://pyrodrone.com/products/micoair-h743-v2-2-6s-flight-controller-with-bluetooth-and-pre-loaded-with-ardupilot-30-30mm)). USPS First Class International takes "5–45 days" ([Pyrodrone policy](https://pyrodrone.com/policies/shipping-policy)).
- **MicoAir official store (store.micoair.com, WooCommerce, USD)**: a cart with an MTF-01P and an H743 V2 70A stack quoted "**Flat rate US$5.00**" to Sydney 2000, with tax US$0 at the cart stage ([MicoAir store](https://store.micoair.com/product/micoair743-v2/)).
- **Robofusion (robofusion.net, Hong Kong; shows AUD to Australian visitors)**: four MicoAir parts (A$188) quoted "Air Express" **A$9.00** to Sydney ([Robofusion H743 V2](https://robofusion.net/products/micoair-h743-flight-controller)). Its electronics **kit returned no shipping rate at all for Sydney 2000**, while the same kit returned free or A$9 rates to a US address and free to a Canadian address ([Robofusion kit](https://robofusion.net/products/robofusion-5-inch-fpv-drone-electronics-kit-complete-ardupilot-bundle-h743-fc-50a-esc-gps-rc-telemetry-2-5w-vtx-antenna-optical-flow-fits-any-5-7-inch-frame)).
- **AliExpress** returned AUD prices when an Australian locale cookie was set ("AU$" listings). Product pages themselves were blocked (2 KB stub pages), so SKU-level prices could not be checked ([AliExpress search](https://www.aliexpress.com/w/wholesale-micoair-h743.html)).

**GST on overseas orders**
- Overseas retailers with more than A$75,000 of Australian sales must register with the ATO. They must collect 10% GST at checkout on goods of A$1,000 or less ([AusFF](https://www.ausff.com.au/gst-on-imported-goods/); [Passport](https://passportglobal.com/blog/australian-taxes-top-10-must-know-facts-for-ecommerce-brands/); [ZDNet on ATO collections](https://www.zdnet.com.au/article/australian-taxation-office-says-low-value-gst-collection-doing-better-than-expected/)). The ATO's own page returned 403 to this session.
- None of the overseas carts probed showed a GST line before checkout. MicoAir's cart reported total tax 0 ([MicoAir store](https://store.micoair.com/)).

**Sources that could not be checked**
- HobbyKing ([hobbyking.com](https://hobbyking.com)) and GetFPV ([GetFPV search](https://www.getfpv.com/catalogsearch/result/?q=lucid)) returned Cloudflare "Just a moment…" challenge pages (403).
- eBay AU returned 403 ([eBay AU](https://www.ebay.com.au/sch/i.html?_nkw=eachine+rotg02)) and Amazon AU returned 503 ([Amazon AU](https://www.amazon.com.au/s?k=rtl8812au+usb+wifi+adapter)).
- modelflight.com.au did not connect (curl status 000).
- Banggood loaded, but its search for "rotg02" returned "We couldn't find rotg02" ([Banggood](https://www.banggood.com/search/rotg02.html)).

### Inferences
- For a Sydney buyer, **Phaser** is the natural "home" store:
  - It is in NSW, ships from 2 days standard to Sydney and lets you walk in and collect. Collecting matters for LiPos, which otherwise travel by road.
  - Its shipping discount (−$12 over $250, −$15 over $400) roughly cancels the A$7–10 eParcel cost on a stage 3 or 4 sized order.
  - It also stocks the P2S 0.6 mm hotend, so one order can cover drone parts and the TPU 85A prerequisite.
- **Next FPV** is the best second store, delivering free over A$150, but has no pickup despite its Sydney address.
  - It is cheapest for several items: Tattu 1S BT2.0 packs, the Matrix 1S AIO, Happymodel SE0702 motors and the GEPRC 60A ESC.
  - It is the only in-stock source found for the RunCam WiFiLink2 and the SpeedyBee F405 AIO V2.
- Overseas, **MicoAir's own store (flat US$5)** and **BetaFPV (free over US$99.99)** are the only sources whose shipping is cheap enough to beat Australian prices on small orders.
- RDQ, Holybro and Pyrodrone add US$36–68 of courier per order. They only make sense for parts unavailable locally, such as the Holybro M10 or SiK radio, or as part of a large consolidated order.
- Expect a further 10% GST on overseas orders if the seller is GST-registered. Budget for it even though no cart showed it.

### Gaps
- HobbyKing's Australian warehouse, Model Flight, GetFPV, eBay AU and Amazon AU could not be priced (blocked or unreachable).
- No Rising Sun FPV shipping rate to Sydney was obtained (its calculator errored).
- Whether RDQ, BetaFPV, RadioMaster, Holybro, Pyrodrone, MicoAir and Robofusion add Australian GST at checkout was not observable without completing a checkout.
- Delivery times for BetaFPV and RadioMaster economy shipping were not shown in the quotes.
- The smaller Australian stores on DIYFPV's list (Blackout Mini Quad, BoltRC, Impulse RC, Multirotor Shop, Ick Trading) were not priced.
- No Sydney-metro walk-in FPV parts shop was found. Phaser (Somersby, Central Coast) is the closest confirmed walk-in.

---

## 2. Stage 3 prices: ELRS radio, simulator, ready-made or printed-frame 1S whoop, batteries, charger and an Android 5.8 GHz receiver, and the cheapest sensible basket

### Takeaway
A stage 3 kit costs about **A$276–316 delivered** if the whoop, LiteRadio 3, charger and batteries come direct from BetaFPV (free shipping, plus 10% if GST is charged) and the phone receiver comes from AliExpress. From Australian stock it costs about **A$332 + shipping** (Rising Sun, with LiteRadio 4), or **A$380** from Phaser with the better RadioMaster Pocket. None of the four specialist stores stocks the LiteRadio 3 itself; they carry the LiteRadio 4 instead. No Australian FPV store had an Android USB-OTG receiver in stock. The Eachine ROTG02 appears to be gone, so the receiver comes from AliExpress. Printing the whoop frame saves nothing: the electronics alone cost about the same as a ready-made Air65 II.

### Cited Findings

**ELRS radios**
| Radio | Best Australian price (stock) | Other Australian prices | Direct or overseas |
|---|---|---|---|
| BetaFPV LiteRadio 3 (ELRS) | Not stocked by Phaser, Next, Buzz or Rising Sun. Only the LiteRadio 3 **Pro** at Buzz, A$148.82 (OOS) ([Buzz](https://buzzfpv.com.au/products/literadio-3-pro-radio-transmitter)) | — | US$32.99, all variants in stock, + US$10 shipping to 2000 = **A$61.95** ([BetaFPV](https://betafpv.com/products/literadio-3-radio-transmitter)) |
| BetaFPV LiteRadio 4 (ELRS) | **A$89.99 IN** (was 99.99), Rising Sun ([RSUN](https://risingsunfpv.com.au/products/literadio-4-radio-mode-2-elrs2-4g-copy)) | Buzz A$82.99 OOS ([Buzz](https://buzzfpv.com.au/products/literadio-4-radio-transmitter)); Phaser A$109.95 OOS ([Phaser](https://phaserfpv.com.au/products/betafpv-literadio-4-radio-transmitter-elrs-24ghz)) | — |
| RadioMaster Pocket (ELRS) | **A$128.99 IN** (Charcoal), Phaser; Transparent ELRS A$124.99 OOS; CC2500 version A$104.80 ([Phaser](https://phaserfpv.com.au/products/radiomaster-pocket-radio-transmitter-cc2500-elrs-24ghz)) | Next FPV A$124.95 (ELRS OOS, CC2500 IN) ([Next](https://www.nextfpv.com.au/products/radiomaster-pocket-radio-transmitter)); Rising Sun A$119.99 OOS ([RSUN](https://risingsunfpv.com.au/products/radiomaster-pocket-radio-transmitter-controller)); Buzz A$124.95 OOS ([Buzz](https://buzzfpv.com.au/products/radiomaster-pocket-radio-transmitter)) | RadioMaster US$71.50 + US$20 standard = **A$131.86** ([RadioMaster](https://radiomasterrc.com/products/pocket-radio-controller-m2)); AliExpress from **AU$91.39** (2,000+ sold, 4.9★) ([AliExpress](https://www.aliexpress.com/item/1005008011579904.html)) |
| RadioMaster Boxer (ELRS) | **A$289.95 IN**, Buzz ([Buzz](https://buzzfpv.com.au/products/radiomaster-boxer-edgetx-rc-radio-transmitter-elrs)) | Next FPV A$279.95 (4-in-1, OOS) and Boxer Crush A$299.95 OOS ([Next](https://www.nextfpv.com.au/products/radiomaster-boxer-radio-controller)); Rising Sun A$289.99 OOS ([RSUN](https://risingsunfpv.com.au/products/radiomaster-boxer-radio-controller-elrs-2-4ghz)); Phaser A$279 OOS ([Phaser](https://phaserfpv.com.au/products/radiomaster-boxer-radio-transmitter-4-in-1-multi-protocolelrs-2ghz)) | — |
| RadioMaster Zorro (ELRS) | A$239 IN, Phaser ([Phaser](https://phaserfpv.com.au/products/radiomaster-zorro-radio-controller-elrs)) | — | — |

**Simulators (Steam, AUD, 5 Oct 2026; several on sale)**
- FPV SkyDive: free ([Steam](https://store.steampowered.com/app/1278060)).
- Liftoff: Micro Drones: A$16.45, was A$23.50 ([Steam](https://store.steampowered.com/app/1432320)).
- Uncrashed: A$17.84, was A$20.99 ([Steam](https://store.steampowered.com/app/1682970)).
- TRYP FPV: A$19.96, was A$24.95 ([Steam](https://store.steampowered.com/app/1881200)).
- Liftoff: FPV Drone Racing: A$26.99, was A$29.99 ([Steam](https://store.steampowered.com/app/410340)).

**Ready-made 1S whoops**
| Whoop | Australian prices (stock) | BetaFPV direct |
|---|---|---|
| BetaFPV Air65 II (ELRS) | Buzz **A$179.95 IN** (Racing and Freestyle) ([Buzz Racing](https://buzzfpv.com.au/products/air65-ii-brushless-whoop-quadcopter-racing)); Rising Sun A$179.99 IN (Racing/Freestyle; Champion A$189.99 OOS) ([RSUN](https://risingsunfpv.com.au/products/air65-ii-brushless-whoop-quadcopter)); Phaser Champion A$179.95 IN ([Phaser](https://phaserfpv.com.au/products/betafpv-air65-ii-brushless-whoop-champion)), Racing/Freestyle A$169.95 OOS ([Phaser](https://phaserfpv.com.au/products/betafpv-air65-1s-brushless-whoop-quadcopter-dg)); Next FPV A$179 OOS ([Next](https://www.nextfpv.com.au/products/betafpv-air65-ii-brushless-whoop-quadcopter-elrs)) | Racing/Freestyle **US$99.99** (A$144.10), Champion US$104.99, all in stock, free shipping ([BetaFPV](https://betafpv.com/products/air65-ii-brushless-whoop-quadcopter)) |
| BetaFPV Air75 II (ELRS) | Phaser Racing **A$169.95 IN** (2 in stock) ([Phaser](https://phaserfpv.com.au/products/betafpv-air75-1s-brushless-whoop-quadcopter)); Rising Sun Racing A$179.99 IN ([RSUN](https://risingsunfpv.com.au/products/air75-ii-brushless-whoop-quadcopter)); Buzz Champion A$189.95 IN ([Buzz](https://buzzfpv.com.au/products/betafpv-air75-1s-brushless-whoop-quadcopter)) | — |
| BetaFPV Meteor65/75 Pro | No analog-video ELRS version found in Australian stock. Only DJI O4 versions: Meteor65 Pro II O4 PNP (no O4 unit fitted) A$144.99 IN ([RSUN](https://risingsunfpv.com.au/products/betafpv-meteor65-pro-ii-o4-brushless-whoop-quadcopter-pnp-elrs-2-4g)); Meteor75 Pro O4 A$349.99 IN ([RSUN](https://risingsunfpv.com.au/products/meteor75-pro-o4-brushless-whoop-quadcopter-1)); Phaser Meteor65 Pro O4 A$136.95 (PNP) or A$342.95 (O4), both OOS ([Phaser](https://phaserfpv.com.au/products/betafpv-meteor65-pro-o4-brushless-whoop-quadcopter)). The older Meteor75 1S is FrSky only (A$189.95 IN at Buzz) ([Buzz](https://buzzfpv.com.au/products/meteor75-brushless-whoop-quadcopter-1s)) | — |
| Happymodel Mobula6 (analog ELRS) | All OOS: Phaser Mobula6 2024 ELRS A$175.30 ([Phaser](https://phaserfpv.com.au/products/happymodel-mobula6-2024-1s-65mm-micro-whoop-analog-uart-elrs-24ghz-dg)); Buzz A$175.26 ([Buzz](https://buzzfpv.com.au/products/happymodel-mobula6-elrs-1s-65mm-brushless-fpv-brushless-whoop-race-edition-25k)); Rising Sun V3 A$194.99 ([RSUN](https://risingsunfpv.com.au/products/mobula6-2024-v3-1s)). Only the HDZero digital versions are in stock (Next FPV Mobula6 Race HD A$299.95) ([Next](https://www.nextfpv.com.au/products/happymodel-mobula6-race-hd-bnf-built-in-hdzero-aio5-flight-controller)) | — |

**Air65-class electronics for a printed frame**
| Part | Australian prices (stock) | BetaFPV direct |
|---|---|---|
| BetaFPV Matrix 1S 5-in-1 II AIO | Next FPV **A$89.95 IN** (4–5 in stock) ([Next](https://www.nextfpv.com.au/products/betafpv-matrix-1s-brushless-flight-controller-5in1-ii)); Buzz A$94.95 (solder-free IN) ([Buzz](https://buzzfpv.com.au/products/betafpv-matrix-1s-5in1-ii-flight-controller)); Rising Sun A$95.99 IN ([RSUN](https://risingsunfpv.com.au/products/matrix-1s-brushless-flight-controller-5in1-ii)) | US$54.99 ([BetaFPV](https://betafpv.com/products/matrix-1s-5in1-ii-brushless-flight-controller)) |
| 4× 0702 motors | VCI 0702 Pro Lite 30000KV set of 4 **A$57.99 IN** (Rising Sun) ([RSUN](https://risingsunfpv.com.au/products/vci-0702-pro-lite-brushless-motor-set-30000kv-4-pcs)); Happymodel SE0702 28000KV A$14.95 each IN (Next FPV; A$59.80 for 4) ([Next](https://www.nextfpv.com.au/products/happymodel-se0702-kv28000-motor)); BetaFPV 0702 (2026) 4-pack A$67.95 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/0702-brushless-motors-2026)) or A$79.95 OOS at Next ([Next](https://www.nextfpv.com.au/products/betafpv-0702-brushless-motors-2026-4pcs)); RCINPOWER GTS V3 0702 29000KV A$20.22 each IN at Phaser ([Phaser](https://phaserfpv.com.au/products/rcinpower-gts-v3-0702-motors)) | 0702 (2026) Racing/Freestyle US$39.99, Champion US$44.99 ([BetaFPV](https://betafpv.com/products/0702-brushless-motors-2026)) |
| 31 mm props | HQProp 31 mm 1.2×1.2×4 **A$1.10** a set (was A$5.95) IN, Phaser ([Phaser](https://phaserfpv.com.au/products/hqprop-12x12x4-31mm-12-micro-propellers-08mm-shaft-2cw2ccw)); Buzz 31 mm 2-blade A$2.31 ([Buzz](https://buzzfpv.com.au/products/31mm-2-blade-micro-whoop-propellers)) | — |
| Analog micro camera | Caddx Ant Lite **A$26.45 IN** at Buzz ([Buzz](https://buzzfpv.com.au/products/caddx-ant-lite-nano-fpv-camera-1200tvl-global-wdr-fpvcycle-edition)) or A$26.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/caddx-ant-lite-43-fpv-camera)); Caddx Ant Nano A$29.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/caddx-ant-fpv-camera)); BetaFPV C03 A$36.99 OOS at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/c03-fpv-micro-camera)); BetaFPV C04 A$22.95 OOS at Phaser ([Phaser](https://phaserfpv.com.au/products/c04-fpv-camera)) | C03 US$11.99 ([BetaFPV](https://betafpv.com/products/c03-fpv-micro-camera)) |
| Moulded frame (if not printed) | AliExpress Air65 II frame AU$6.69 (10,000+ sold) ([AliExpress](https://www.aliexpress.com/item/1005010439236870.html)) | US$4.99 ([BetaFPV](https://betafpv.com/products/air65-ii-brushless-whoop-frame)) |

**1S BT2.0 batteries and chargers (AUD unless stated)**
- Batteries:
  - Tattu 1S 300 mAh 75C BT2.0, 5-pack: **A$31.95 IN** (was A$36.95; 32 in stock), Next FPV ([Next](https://www.nextfpv.com.au/products/tattu-300mah-120c-1s1p-lipo-battery-pack-with-bt-2-0-plug-5pcs)).
  - CNHL Speedy Pizza 350 mAh BT2.0, 5-pack: A$33.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/chinahobbyline-cnhl-speedy-pizza-350mah-37v-1s-75c-bt2-lipo-battery-5-pack-dg)); A$34.55 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/cnhl-pizza-series-350mah-3-8v-1s-75c-lipo-battery-with-bt2-0-5-packs)).
  - BetaFPV LAVA II 1S 320 mAh 5-pack: A$39.49 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/lava-ii-1s-320mah-battrey-95c-5pcs)).
  - BetaFPV direct: BT2.0 300 mAh 30C 8-pack US$23.99 ([BetaFPV](https://betafpv.com/products/bt2-0-300mah-1s-30c-battery-8pcs)); LAVA 300 mAh 5-pack US$21.99 OOS ([BetaFPV](https://betafpv.com/products/lava-1s-300mah-75c-battery-5pcs)).
- Chargers:
  - BetaFPV HexaCharger: A$44.95 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/betafpv-hexacharger-1s-charger)); A$44.99 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/betafpv-hexacharger-1s-charger)); A$46.95 IN at Phaser, Pro A$53.95 ([Phaser](https://phaserfpv.com.au/products/betafpv-hexacharger-1s-charger)); US$24.99 direct, Pro US$29.99 ([BetaFPV](https://betafpv.com/products/hexacharger-1s-charger)).
  - Cheaper: BetaFPV 6-port 1S Charger Board V2 **A$22.99 IN** at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/betafpv-6-port-1s-charger-board-v2)).
  - ViFly WhoopStor 3: A$56.95 IN at Next FPV ([Next](https://www.nextfpv.com.au/products/vifly-whoopstor-3-1s-battery-storage-charger-and-discharger)).

**Android USB-OTG 5.8 GHz receivers**
- Australian stores: only Buzz lists them, and both are OOS. The Skydroid UVC single-antenna receiver is A$34.95 ([Buzz](https://buzzfpv.com.au/products/skydroid-uvc-single-control-receiver-otg-5-8g-150ch-channel-fpv-receiver-video-transmission-downlink-audio-for-android-phone)) and the UVC dual-antenna receiver A$49.95 ([Buzz](https://buzzfpv.com.au/products/uvc-dual-antenna-control-receiver-otg-5-8g-150ch-full-channel-fpv-receiver-w-audio-for-android-smartphone-black)).
- AliExpress (AU locale; "from" prices are the cheapest option in each listing, and several listings bundle a VTX):
  - "5.8G FPV UVC Receiver … OTG … Android" from AU$13.59 (53 sold, 5★) ([AliExpress](https://www.aliexpress.com/item/1005010645563255.html)).
  - AU$24.50 (65 sold, 4.5★) ([AliExpress](https://www.aliexpress.com/item/4000385056741.html)).
  - "Ready to Use 5.8G FPV UVC Receiver…" AU$37.39 (166 sold, 4.7★) ([AliExpress](https://www.aliexpress.com/item/1005004766486947.html)).
  - The top-ranked "Skydroid UVC" listing showed an implausible AU$336.19 with 2 sales ([AliExpress](https://www.aliexpress.com/item/1005004900995516.html)).
- Eachine ROTG02: Banggood's search found nothing ([Banggood](https://www.banggood.com/search/rotg02.html)), and AliExpress's "rotg02" search returned no listing with ROTG02 in the title ([AliExpress](https://www.aliexpress.com/w/wholesale-rotg02.html)).

### Inferences
**Cheapest sensible stage 3 baskets (delivered to Sydney 2000)**

| Basket | Contents | Total |
|---|---|---|
| **A. Cheapest overall (BetaFPV direct + AliExpress)** | One BetaFPV order (Air65 II Racing US$99.99, LiteRadio 3 ELRS US$32.99, HexaCharger US$24.99, BT2.0 300 mAh 8-pack US$23.99) = US$181.96, free shipping = **A$262.22** (A$288.44 if 10% GST is charged); plus an AliExpress UVC receiver ≈A$14–37; plus a simulator A$0 (SkyDive) to A$16.45 (Liftoff Micro Drones) | **≈A$276–316** (≈A$302–342 with GST) |
| **B. Cheapest all-Australian, one store (Rising Sun, all in stock)** | Air65 II A$179.99 + LiteRadio 4 A$89.99 + 6-port charger board A$22.99 + LAVA II 320 mAh 5-pack A$39.49 = **A$332.46** + shipping (not quoted); receiver from AliExpress; simulator | **≈A$346–386 + shipping** |
| **C. Sydney-region walk-in or fast delivery (Phaser, all in stock)** | Air75 II Racing A$169.95 + RadioMaster Pocket ELRS A$128.99 + CNHL 350 mAh BT2.0 5-pack A$33.95 + HexaCharger A$46.95 = **A$379.84**. Shipping is the live rate (≈A$10 with batteries) minus the A$12 discount, so ≈A$0; or collect at Somersby. Receiver from AliExpress; simulator | **≈A$393–434** |

- **The Pocket is the better long-term radio for stages 3 and 4.** The earlier report specified it for the GPS quad, so buying it in stage 3 removes A$129 from stage 4. On that basis basket C's premium over A and B shrinks.
- **Printed-frame whoop:** Australian in-stock electronics cost **A$180.60**: Matrix 1S A$89.95 (Next), 4× SE0702 A$59.80 (Next), Caddx Ant Lite A$26.45 (Buzz) and 4 prop sets A$4.40 (Phaser). The same set from BetaFPV direct costs US$106.97 = A$154.15. A ready-made Air65 II costs A$179.95 locally or US$99.99 (A$144.10) direct. Printing the frame therefore saves nothing. It is worth doing only for the learning, or to make spare frames and ducts in TPU 65D, which the earlier report recommends over PLA for 65 mm whoops.
- The cheapest 1S pack in Australia is the Tattu 300 mAh BT2.0 at A$6.39 each (A$31.95 / 5). Phaser's GNB 300 mAh at A$3.67 each uses the A30 plug, not BT2.0, so it does not fit an Air65 II without an adapter ([Phaser GNB](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-300mah-80c-a30-plastic-head-lipo-battery)).

### Gaps
- No Australian retailer had an Android OTG receiver in stock, and AliExpress SKU-level prices could not be verified (item pages blocked). Treat the AU$13.59–37.39 receiver prices as indicative.
- Analog ELRS Meteor65 Pro / Meteor75 Pro were not found in Australian stock, and BetaFPV-direct Meteor prices were not checked.
- BetaFPV economy delivery time to Sydney was not shown.
- The US$10 versus US$5 shipping discrepancy for a LiteRadio 3-only order is unresolved.

---

## 3. Stage 4 prices: printed 5-inch ArduPilot GPS quad flown from QGroundControl on Android, and the cheapest sensible basket

### Takeaway
None of the four Australian specialists stocks MicoAir. MicoAir's own store is by far the cheapest source: the **MicoAir743 V2 FC with a 55A AM32 4-in-1 ESC (stack) costs US$81.99 and its M10 GPS with compass US$13.99, with flat US$5 shipping**, ≈A$146 delivered. Everything else (motors, props, RP1 V2, 6S LiPos, charger, smoke stopper, pigtail, cap, strap) is in stock at Phaser for **A$349**. The result is **≈A$495 without a radio, or ≈A$624 with a RadioMaster Pocket**, against ≈A$731 for the earlier US-priced basket at today's rate. An all-Australian alternative (GEPRC Taker H743 BT + TBS Lucid ESC from Next FPV) costs ≈A$605 without a radio. Robofusion's Grasshopper5 kit is priced at A$324 for Australian visitors but **offered no shipping to Sydney**.

### Cited Findings

**Flight controller and ESC**
- **MicoAir official store (USD)**, MicoAir743 V2 ([MicoAir](https://store.micoair.com/product/micoair743-v2/)):
  - "Only FC" (ArduPilot or PX4): **US$53.99**.
  - **55A AM32 Stack: US$81.99**.
  - 60A Bluejay Stack and 70A AM32 Stack: US$104.99.
  - All in stock. Flat US$5 shipping to Sydney.
- **Robofusion (AUD shown to Australian visitors)**:
  - MicoAir H743 V2 FC only **A$74.00** (US$74.99 list) ([Robofusion](https://robofusion.net/products/micoair-h743-flight-controller)).
  - MicoAir 50A Bluejay 4-in-1 ESC A$53.00 (US$49.99) ([Robofusion](https://robofusion.net/products/4-in-1-esc-50a-2-6s-mico-air-electronic-speed-controller-bluejay-firmware-with-double-hole-spacing-for-fpv-rc-drone)).
  - Air Express A$9 for a four-part cart.
- **Pyrodrone**: MicoAir H743 V2 US$72.99 + UPS Worldwide Expedited US$44.96 = **US$117.95 (A$169.98)** ([Pyrodrone](https://pyrodrone.com/products/micoair-h743-v2-2-6s-flight-controller-with-bluetooth-and-pre-loaded-with-ardupilot-30-30mm)).
- **AliExpress**: "MicoAir H743 V2 BMI088 30.5×30.5 2-6S 55A Flight Stack BlueTooth Telemetry" from **AU$80.39** (241 sold, 4.8★; lowest option shown) ([AliExpress](https://www.aliexpress.com/item/1005008643916645.html)); another stack listing AU$94.99 with free shipping (218 sold) ([AliExpress](https://www.aliexpress.com/item/1005009540964586.html)).
- **Holybro Kakute H7 V2**: US$52.00, **out of stock** ([Holybro](https://holybro.com/products/kakute-h7-v2)).
- **H743 boards in Australian stock**:
  - GEPRC Taker H743 30×30 BT FC **A$119.45 IN** ([Next](https://www.nextfpv.com.au/products/geprc-taker-h743-30x30-bt-flight-controller)).
  - HDZero Halo H743 A$124.95 IN ([Next](https://www.nextfpv.com.au/products/hdzero-halo-h743-flight-controller)).
  - Matek H743-SLIM V3 A$159.95 OOS ([Next](https://www.nextfpv.com.au/products/matek-h743-slim-flight-controller)).
- **ArduPilot board targets** (each has a `hwdef.dat` in ArduPilot master):
  - `MicoAir743v2` ([ArduPilot](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef/MicoAir743v2)).
  - `KakuteH7v2` ([ArduPilot](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef/KakuteH7v2)).
  - `MatekH743` ([ArduPilot](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef/MatekH743)).
  - `GEPRC_TAKER_H743` ([ArduPilot](https://github.com/ArduPilot/ardupilot/tree/master/libraries/AP_HAL_ChibiOS/hwdef/GEPRC_TAKER_H743)).
  - No HDZero Halo H743 target was found under the names tried.
- **4-in-1 ESCs in Australia (30×30)**:
  - GEPRC GEP-BLS60A **A$79.95 IN** (was A$89.95) ([Next](https://www.nextfpv.com.au/products/gep-bls60a-4in1-30x30-esc)).
  - GEPRC Taker H65 8S 32-bit 65A A$89.95 IN ([Next](https://www.nextfpv.com.au/products/geprc-taker-h65_8s_32bit-65a-30x30-4in1-esc)).
  - TBS Lucid 6S 4-in-1 **A$94.90 IN** at Phaser ([Phaser](https://phaserfpv.com.au/products/tbs-lucid-6s-4in1-esc)) and Next ([Next](https://www.nextfpv.com.au/products/tbs-lucid-6s-4in1-esc)).
  - TBS Lucid 8S A$99.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/tbs-lucid-8s-4in1-esc)).
  - HobbyWing XRotor 65A AM32 A$119 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/hobbywing-xrotor-65a-3-6s-blheli32-4in1-esc-for-fpv-racing-30-5x30-5mm)).
  - RDQ: TBS Lucid 60A 8S AM32 US$46.49 + DHL US$44.99 ([RDQ](https://www.racedayquads.com/products/tbs-lucid-60a-8s-am32-4-in-1-esc)).

**Motors and props**
- 2207, about 1900KV:
  - **EMAX ECO III 2207 1900KV A$21.58 each IN** (was A$27.95; 7 in stock) at Phaser ([Phaser](https://phaserfpv.com.au/products/emax-eco-iii-series-2207-3-6s-1700kv-1900kv-2400kv-brushless-motor)).
  - T-Hobby Velox V2207 V3 1950KV A$23.76 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/t-motor-velox-v2307-v30)).
  - FlyFishRC Sword 2207 1950KV A$24.15 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/sword-2207-6s-fpv-motor)).
  - iFlight XING-E Pro 2207 1800KV A$27.95 IN at Next ([Next](https://www.nextfpv.com.au/products/xing-e-pro-2207-2-6s-fpv-motor)).
  - Team Old Mate 2207 1900KV A$20.00 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/team-old-mate-2207-1900kv-fya-series-hot-tub-henry-limited-edition-motor)).
  - RDQ: EMAX ECO II 2207 1900KV US$19.49 ([RDQ](https://www.racedayquads.com/products/emax-eco-ii-series-2207-1900kv-motor)).
- 5.1-inch props:
  - Gemfan Hurricane 51466 4-pack **A$3.30 IN** (was A$5.95) at Phaser ([Phaser](https://phaserfpv.com.au/products/gemfan-hurricane-durable-tri-blade-51466-propellers-2xcw2xccw-1-pack-4-pieces)).
  - HQ 5.1×4.1×3 A$2.86 at Phaser ([Phaser](https://phaserfpv.com.au/products/hq-5-1x4-1x3-propellers)).
  - HQ R35V2 16-pack A$18.95 at Next ([Next](https://www.nextfpv.com.au/products/hq-racing-prop-r35v2-5-1x3-5x3-8cw-8ccw)).

**GPS with compass**
- MicoAir store, "M9/M10 GPS Module" ([MicoAir](https://store.micoair.com/product/m9-m10-gps-module/)):
  - **M10G-5883 US$13.99**: u-blox M10050, QMC5883L compass, 20×20×8 mm, 7 g.
  - MG-A01 US$14.99: M10 with QMC5883L, 25×25 mm, 12 g.
  - Robofusion sells the M10G-5883 at A$23 ([Robofusion](https://robofusion.net/products/m10g-5883-m10-gps-with-compass-qmc5883l-module-for-fpv-racing-drones-robotics-boats)).
- Holybro:
  - M10 GPS US$43.99 + US$38.70 DHL/FedEx = A$119.16 delivered ([Holybro](https://holybro.com/products/m10-gps)).
  - Micro M10 US$27.99 ([Holybro](https://holybro.com/products/micro-m10-gps)).
  - On AliExpress, Holybro Micro M10 listings start at AU$42.79–44.39 ([AliExpress](https://www.aliexpress.com/item/1005008932272456.html)).
- Australian stock:
  - BZGNSS BZ-251 GPS with 5883 compass **A$41.95 IN** ([Next](https://www.nextfpv.com.au/products/bzgnss-bz-251-gps-with-5883-compass)).
  - Walksnail WS-M181 GPS with built-in magnetometer A$27.95 IN ([Phaser](https://phaserfpv.com.au/products/walksnail-ws-m181-gps-module-with-built-in-mag-copj-18gps)).
  - Generic M10Q 5883 A$49.95 IN ([Buzz](https://buzzfpv.com.au/products/m10q-5883-gps-module-high-precision-gps-with-compass)).
  - Matek M10Q-5883 A$69.95 OOS ([Next](https://www.nextfpv.com.au/products/matek-gps-and-compass-module-m10q-5883)).

**Receiver, batteries, charger and small parts**
- **RadioMaster RP1 V2 ELRS**:
  - Phaser **A$31.31 IN** ([Phaser](https://phaserfpv.com.au/products/radiomaster-expresslrs-rp1-24ghz-nano-receiver)).
  - Next A$34.95 IN ([Next](https://www.nextfpv.com.au/products/radiomaster-rp1-v2-expresslrs-2-4ghz-nano-receiver-1)).
  - Buzz A$31.95 OOS ([Buzz](https://buzzfpv.com.au/products/rp1-expresslrs-2-4ghz-nano-receiver)).
  - RDQ US$24.99 ([RDQ](https://www.racedayquads.com/products/radiomaster-rp1-v2-2-4ghz-elrs-nano-receiver)).
- **6S 1300 mAh LiPos (Australian stock)**: see question 5 for the full list. The cheapest in-stock 1300 is the **CNHL Ministar 1300 6S 120C at A$43.95** (10 in stock) ([Phaser](https://phaserfpv.com.au/products/chinahobbyline-1300mah-6s-120c-lipo-battery-xt60-dg)).
- **1–6S chargers**:
  - The ToolkitRC M6AC is **not listed** by Phaser, Next, Buzz or Rising Sun. RDQ sells it for US$71.99 ([RDQ](https://www.racedayquads.com/products/toolkitrc-m6ac-300w-15a-1-6s-ac-charger-xt60)). No ISDT 608AC listing was found in Australian stock.
  - Australian options: **ISDT 608PD (USB-C 140 W / DC 240 W) A$59.95 IN** at Phaser ([Phaser](https://phaserfpv.com.au/products/isdt-608pd-smart-charger-usb-c-140w-dc-240w)). Buzz's listing describes the 608PD as "DC 6S-240W-10A USB C" ([Buzz](https://buzzfpv.com.au/products/isdt-608pd-lipo-battery-charger-dc-6s-240w-10a-usb-c)). It needs a USB-C PD wall charger such as the Simplecom CU265 65 W GaN, A$34.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/simplecom-cu265-dual-port-pd-65w-gan-fast-wall-charger-usb-c-usb-a)), or the mbeat 100 W at A$69.95 ([Phaser](https://phaserfpv.com.au/products/mbeat-gorilla-power-pd100w-gan-ii-usb-c-charger)).
  - True AC/DC chargers: HOTA D6 Pro A$199 IN at Next ([Next](https://www.nextfpv.com.au/products/hota-d6-pro-charger-ac200w-dc650w-15a)) and A$214.99 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/hota-d6-pro-charger-ac200w-dc650w-15a)); Gens Ace iMars D300 A$199 IN ([Next](https://www.nextfpv.com.au/products/gens-ace-imars-d300-g-tech-channel-ac-dc-300w-700w-rc-battery-charger)); Ethix D6 Pro A$269.01 IN ([Phaser](https://phaserfpv.com.au/products/ethix-d6-pro-acdc-2x-325w-smart-charger)).
- **XT60 pigtail and capacitor**:
  - XT60 male 12 AWG 10 cm pigtail A$3.05 IN ([Phaser](https://phaserfpv.com.au/products/xt60-male-with-sheath-connector-pigtail-10cm-12awg-silicon-wire)); 2-pack A$6.95 ([Next](https://www.nextfpv.com.au/products/xt60-male-w-12awg-silicon-wire-10cm-pigtail)).
  - Rubycon 35 V 1000 µF low-ESR capacitor A$1.95 IN ([Phaser](https://phaserfpv.com.au/products/rubycon125x25mmzlhlowesr35v1000ufcapacitor)).
- **Battery straps**:
  - Next FPV 20 mm strap 3-pack A$7.95 IN ([Next](https://www.nextfpv.com.au/products/nextfpv-battery-straps-250mm-x-20mm-with-woven-rubber-and-metal-buckle)).
  - Buzz Kevlar 20×250 mm 3-pack A$6.95 IN ([Buzz](https://buzzfpv.com.au/products/buzzfpv-kevlar-lipo-strap-20x250mm-3pcs)).
  - Rising Sun straps A$2.99 ([RSUN](https://risingsunfpv.com.au/products/rising-sun-fpv-lipo-straps)).
  - Phaser G-Strap 260×20 mm A$11.95 IN ([Phaser](https://phaserfpv.com.au/products/phaser-g-strap-260x20mm)).
- **ViFly ShortSaver 2**:
  - Buzz A$21.00 IN ([Buzz](https://buzzfpv.com.au/products/vifly-shortsaver-2)); Phaser A$21.80 IN ([Phaser](https://phaserfpv.com.au/products/vifly-short-saver-2-smoke-stopper-xt30-xt60)); Next A$21.99 IN ([Next](https://www.nextfpv.com.au/products/vifly-shortsaver-v2-smart-smoke-stopper)).
  - Budget alternative: TBS Smoke Stopper A$9.99 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/tbs-smoke-stopper)) and Rising Sun ([RSUN](https://risingsunfpv.com.au/products/tbs-smoke-stopper)).

**Optional modules**
- **MicoAir MTF-01 optical flow**:
  - MicoAir store **US$22.90** ([MicoAir](https://store.micoair.com/product/mtf-01/)); MTF-01P US$28.99 ([MicoAir](https://store.micoair.com/product/mtf-01p/)).
  - Robofusion A$38 ([Robofusion](https://robofusion.net/products/mtf-01-integrated-laser-rangefinder-optical-flow-module-for-unmanned-aerial-vehicles-uavs)).
  - Pyrodrone US$32.99 ([Pyrodrone](https://pyrodrone.com/products/micoair-mtf-01-optical-flow-8m-range-2in1-sensor)).
  - The only Australian alternative, Matek 3901-L0X, is OOS: A$43.95 at Next ([Next](https://www.nextfpv.com.au/products/matek-optical-flow-lidar-sensor-3901-l0x)), A$44.95 at Buzz ([Buzz](https://buzzfpv.com.au/products/matek-3901-l0x-optical-flow-lidar-sensor)).
- **OpenIPC video**:
  - RunCam WiFiLink2 **A$209.95 IN**, WiFiLink2-G A$239.95 IN, at Next FPV ([Next](https://www.nextfpv.com.au/products/runcam-wifilink2based-on-openipc)). Buzz WiFiLink2 A$109 OOS ([Buzz](https://buzzfpv.com.au/products/runcam-wifilink2based-on-openipc)).
  - RDQ RunCam WiFiLink-G US$107.99 **OOS** ([RDQ](https://www.racedayquads.com/products/runcam-wifilink-g-w-openipc)).
  - RDQ EMAX Wyvern Link OpenIPC 200 mW **US$89.99 IN** ([RDQ](https://www.racedayquads.com/products/emax-wyvern-link-openipc-200mw-vtx)); the earlier report had US$69.99.
  - RTL8812AU USB adapters: no Australian FPV store lists one. AliExpress listings run AU$13.39 (no sales shown) ([AliExpress](https://www.aliexpress.com/item/1005012135176454.html)) to AU$17.69 (113 sold, 4.4★) ([AliExpress](https://www.aliexpress.com/item/1005005453962516.html)) and AU$19.19 (28 sold, 5★) ([AliExpress](https://www.aliexpress.com/item/1005007558659819.html)).
- **Telemetry to the phone**:
  - DroneBridge official ESP32-C6 board: **€21.99 excl. tax/VAT (≈A$35.57)**, shipping on request ([DroneBridge shop](https://drone-bridge.com/shop/)).
  - DroneBridge's README lists support for "ESP32-C3, ESP32-C5 & ESP32-C6" but urges use of "officially supported and tested boards" ([DroneBridge ESP32](https://github.com/DroneBridge/ESP32)). A generic ESP32-C3 SuperMini costs A$8.99 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/esp32-c3-development-board-esp32-supermini-development)).
  - Holybro SiK Telemetry Radio V3 100 mW (433 or 915 MHz): US$58.99 + US$39.06 shipping = A$141.30 ([Holybro](https://holybro.com/products/sik-telemetry-radio-v3)).
  - MicoAir TRS 2.4 GHz RC + telemetry system US$69.99 ([Robofusion](https://robofusion.net/products/micoair-trs-tx-module-receiver-2-4g-long-range-telemetry-radiorc-2in1-system)).
- **Robofusion 5-inch Electronics Kit (Grasshopper5)**:
  - The store lists Standard (M10G-5883 GPS) at US$309.99 and Precision (dual-band MG-F10-C) at US$389.99. Australian visitors see **A$324.00**.
  - Contents: MicoAir H743 V2 FC, MicoAir 50A Bluejay 4-in-1, GPS, MicoAir TRS 2.4 GHz RC + telemetry (500 mW TX module + SBUS receiver), Robofusion VT5804 analog VTX (25–2500 mW) with antenna, and an optical-flow/range sensor. It is "shipped from Canada".
  - Its cart offered **no shipping rate to Sydney 2000** (but did to US and Canadian addresses) ([Robofusion kit](https://robofusion.net/products/robofusion-5-inch-fpv-drone-electronics-kit-complete-ardupilot-bundle-h743-fc-50a-esc-gps-rc-telemetry-2-5w-vtx-antenna-optical-flow-fits-any-5-7-inch-frame)).
  - The Grasshopper5 docs still say "from $219.99" ([Robofusion docs](https://docs.robofusion.net/projects/grasshopper5-fpv-frame)).

### Inferences
**Basket A: cheapest sensible stage 4 (MicoAir direct + one Phaser order)**

| Item | Source | Price |
|---|---|---|
| Frame | Grasshopper5 printed in the user's own PETG | ~A$0 marginal |
| FC + 4-in-1 ESC | MicoAir743 V2 + 55A AM32 stack (ArduPilot), MicoAir store | US$81.99 |
| GPS + compass | MicoAir M10G-5883, MicoAir store | US$13.99 |
| Shipping | MicoAir flat rate | US$5.00 |
| *MicoAir subtotal* | | *US$100.98 = A$145.52 (A$160.07 if GST is added)* |
| 4× 2207 1900KV | EMAX ECO III, Phaser | A$86.32 |
| Props | 3× Gemfan 51466 4-packs, Phaser | A$9.90 |
| Receiver | RP1 V2, Phaser | A$31.31 |
| 2× 6S 1300 mAh | CNHL Ministar 120C, Phaser | A$87.90 |
| Charger | ISDT 608PD + Simplecom 65 W USB-C PD brick, Phaser | A$94.90 |
| Smoke stopper | ViFly ShortSaver 2, Phaser | A$21.80 |
| Power lead | XT60 12 AWG pigtail + Rubycon 35 V 1000 µF, Phaser | A$5.00 |
| Strap | Phaser G-Strap 260 mm | A$11.95 |
| *Phaser subtotal* (shipping ≈ live rate − A$12 discount ≈ A$0, or collect) | | *A$349.08* |
| **Total without radio** | | **≈A$494.60** (A$509.15 with GST on the MicoAir order) |
| + RadioMaster Pocket ELRS | Phaser (in stock) | +A$128.99 → **≈A$623.59** (A$638.14) |

- Against the earlier US basket of ≈US$507 (A$730.64 at 1.4411), buying the MicoAir parts direct and everything else in Australia is **≈A$100 cheaper**. Most of the saving comes from MicoAir's US$81.99 stack, which replaces a US$72.99 FC plus a US$46.49 ESC, and from no US courier fees.
- **Basket B, all from Australian stock (no imports):**
  - Parts: GEPRC Taker H743 BT A$119.45 + TBS Lucid 6S A$94.90 + BZ-251 GPS A$41.95, plus the same A$349.08 Phaser order.
  - Total: **≈A$605.38 without radio** (A$590.43 with the GEP-BLS60A ESC instead), **≈A$734 with a Pocket**.
  - The Taker H743 has an ArduPilot target. Whether its Bluetooth works under ArduPilot was not verified. Budget A$8.99 for an ESP32-C3 running DroneBridge as the phone link.
- **Backup for the MicoAir parts:** Robofusion's AUD prices. FC A$74 + 50A Bluejay ESC A$53 + M10G GPS A$23 + A$9 air express = **A$159**, only ≈A$13 more than the MicoAir store and already priced in AUD.
- **Add-ons:**
  - Optical flow: MTF-01 **+A$33.00** if added to the MicoAir order, which ships at a flat rate.
  - OpenIPC HD video to the phone: EMAX Wyvern Link from RDQ US$89.99 + US$44.99 DHL ≈ **A$194.52**, or RunCam WiFiLink2 from Next FPV in stock at **A$209.95**. Either needs an RTL8812AU adapter at ≈AU$13–19 from AliExpress, unless APFPV mode is used.
  - Longer-range telemetry: DroneBridge on an ESP32-C3 (A$8.99) or the official board (≈A$35.57 + shipping); a SiK pair from Holybro costs ≈A$141.30.
  - These add-ons bring a "full" stage 4 to ≈A$865–895 with radio. That covers optical flow plus OpenIPC video and adapter (A$864.50 with the Wyvern Link and a A$13.39 adapter; A$894.72 with the WiFiLink2, a A$19.19 adapter and a DroneBridge ESP32-C3). The earlier US$685 basket converts to ≈A$987, and it also included a US Remote ID module.
- Buying the Pocket in stage 3 (basket C there) avoids buying a second radio here.

### Gaps
- MicoAir's "Only FC" price includes neither ESC nor ArduPilot-specific accessories. The 55A AM32 stack contents (wiring harness, capacitor) were not itemised.
- Whether MicoAir or Robofusion charge Australian GST at checkout was not observable.
- Robofusion's A$74 AUD price for the FC is lower than its own US$74.99 list converted (A$108). This looks like fixed AUD market pricing; confirm at checkout.
- The kit's lack of Australian shipping may be temporary. The docs' "from $219.99" conflicts with the US$309.99 store price.
- Kakute H7 V2 is out of stock at Holybro, and no Australian store lists it.
- The ArduPilot Bluetooth behaviour of the GEPRC Taker H743 BT and the HDZero Halo H743 is unverified.
- ISDT 608AC and ToolkitRC M6AC were not found in Australian stock. A 608PD running from a 65 W brick will charge more slowly than an M6AC; its power limits were not verified.
- The DroneBridge official board's shipping cost to Australia is not published.

---

## 4. Australian prices for a typical 3-inch or 5-inch analog FPV build (SpeedyBee F405 AIO, 1404 and 2207 motors, analog VTX and camera)

### Takeaway
The SpeedyBee F405 AIO V2 40A is in stock only at Next FPV, at **A$144.95**. That is far above its US price, and Buzz's A$98.95 listing is out of stock. Motors are cheap and plentiful: 1404s cost A$22.95–27.05 each and 2207s A$20–28. Analog VTXs (A$32–68) and cameras (A$26–50) are well stocked. In-stock 3-inch electronics cost about **A$330** and 5-inch about **A$386**, before props, batteries and charger.

### Cited Findings
- **SpeedyBee flight controllers**:
  - F405 AIO V2 40A with heatsink **A$144.95 IN**; 35A without heatsink A$134.95 OOS ([Next](https://www.nextfpv.com.au/products/speedybee-f405-aio-v2-35-40a-bluejay-25-5x25-5-3-6s-flight-controller)).
  - F405 AIO 40A A$98.95 **OOS** at Buzz ([Buzz](https://buzzfpv.com.au/products/speedybee-f405-aio-40a-bluejay-25-5x25-5-3-6s-flight-controller)).
  - F405 V5 OX32 55A stack: Deluxe A$189.95 IN, Standard A$177.95 OOS ([Next](https://www.nextfpv.com.au/products/speedybee-f405-v5-ox32-55a-30x30-stack)).
  - F405 V4 BLS 60A stack A$137.95 OOS at Phaser ([Phaser](https://phaserfpv.com.au/products/speedybee-f405-v4-bls-60a-30x30-fcesc-stack)).
- **1404 motors (3-inch, 4S)**:
  - SpeedyBee 1404 4600KV v2 **A$22.95 IN** at Buzz ([Buzz](https://buzzfpv.com.au/products/speedybee-1404-4600kv-motor-bee25-2-5-inch-fpv)).
  - XNOVA 1404 4700KV A$24.95 IN (3800KV OOS) at Next ([Next](https://www.nextfpv.com.au/products/xnova-1404-fpv-racing-series-t-style)).
  - DeepSpace Aether 1404 4600KV A$27.05 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/deepspace-aether-1404-4s-toothpick-motor)).
  - TinyTurners 1404 4533KV set of 4 A$89.99 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/tinyturners-1404-4533kv-tinytrainer-motors-set-of-4)).
  - Happymodel EX1404 A$16.95 OOS at Phaser ([Phaser](https://phaserfpv.com.au/products/happymodel-ex1404-motor)).
- **2207 motors (5-inch)**: same as question 3. Cheapest in-stock are the EMAX ECO III 1900KV at A$21.58 (Phaser) and the Team Old Mate 1900KV at A$20 (Rising Sun) ([Phaser](https://phaserfpv.com.au/products/emax-eco-iii-series-2207-3-6s-1700kv-1900kv-2400kv-brushless-motor); [RSUN](https://risingsunfpv.com.au/products/team-old-mate-2207-1900kv-fya-series-hot-tub-henry-limited-edition-motor)).
- **Analog VTX**:
  - TBS Unify Pro Nano 5G8 **A$32.25 IN** at Phaser ([Phaser](https://phaserfpv.com.au/products/tbs-unify-pro-nano)).
  - TBS Unify Pro HV Race: A$39.99 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/tbs-unify-pro-hv-5g8-race-sma)), A$44.90 IN at Next ([Next](https://www.nextfpv.com.au/products/tbs-unify-pro-5g8-hv-race-sma)).
  - GEPRC RAD Tiny 400 mW A$48.95 IN ([Next](https://www.nextfpv.com.au/products/geprc-rad-tiny-5-8g-400mw-vtx)).
  - Rush Tank Tiny A$62.95 IN ([Next](https://www.nextfpv.com.au/products/rush-tank-tiny-vtx-5-8g-smart-audio-0-25-100-200-350mw)).
  - Rush Tank III Ultimate (30×30) A$67.95 IN ([Next](https://www.nextfpv.com.au/products/rush-tank-ii-ultimate-vtx-5-8g-pit-25-200-500-800mw-30x30-stackable)).
- **Analog cameras**:
  - Caddx Ant Lite A$26.45 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/caddx-ant-lite-nano-fpv-camera-1200tvl-global-wdr-fpvcycle-edition)).
  - Caddx Ant Nano A$29.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/caddx-ant-fpv-camera)).
  - RunCam Phoenix 2 SP V3 A$38.45 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/runcam-phoenix-2-sp)).
  - Foxeer Razer Mini V3 A$42.95 IN ([Next](https://www.nextfpv.com.au/products/foxeer-razer-mini-v3-fpv-camera)).
  - RunCam Phoenix 2 SE V2 A$45.95 IN ([Next](https://www.nextfpv.com.au/products/runcam-phoenix-2-special-edition-v2)).
  - Caddx Ratel 2: A$45.95 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/ratel-2-1-1-8inch-starlight-sensor-freestyle-fpv-camera)), A$49.95 IN at Next ([Next](https://www.nextfpv.com.au/products/caddxfpv-ratel2-analog-camera)).
  - Caddx Baby Ratel 2 A$46.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/caddx-baby-ratel-2-1200tvl-cmos-4-3-16-9-ntsc-pal-fpv-camera-18mm-black)).

### Inferences
- **3-inch analog electronics, in stock in Australia: ≈A$330.26.**
  - SpeedyBee F405 AIO V2 40A A$144.95 + 4× SpeedyBee 1404 4600KV A$91.80 + Unify Pro Nano A$32.25 + Caddx Ant Nano A$29.95 + RP1 V2 A$31.31.
  - The earlier report's US estimate was ≈US$198 (A$285). The A$145 AIO accounts for most of the gap.
- **5-inch analog electronics: ≈A$386.02.**
  - SpeedyBee F405 V5 OX32 55A stack A$189.95 + 4× ECO III 2207 A$86.32 + Unify Pro HV Race A$39.99 + Phoenix 2 SP V3 A$38.45 + RP1 V2 A$31.31.
  - The earlier US estimate was ≈US$274 (A$395), so the totals are similar.
- A 25.5 mm AIO for printed 3-inch frames is the one item where waiting for Buzz's A$98.95 restock, or importing, saves noticeably.

### Gaps
- SpeedyBee's own store price for the F405 AIO could not be read (not a WooCommerce or Shopify JSON site).
- 3-inch props, 4S batteries and 4S chargers were not priced.

---

## 5. Which stores ship LiPo batteries to Sydney (road only?), and what are the cheapest Australian sources for 1S and 6S LiPos?

### Takeaway
All four Australian specialists ship LiPos to Sydney, but **only by road**. Phaser's NSW location makes it the fastest, at 4–5 days standard for a battery parcel, A$9.89 for two 6S packs, or walk-in collection at Somersby. Next FPV ships LiPos free over A$150 by Aramex, Couriers Please or eParcel, but not on its StarTrack air service. Buzz ships them by AusPost road from Perth. Phaser will not ship batteries overseas. Among overseas stores, BetaFPV ships batteries by air and does not list Australia as restricted, and RDQ's calculator quoted DHL for LiPos, though it is unconfirmed whether RDQ would actually ship them. Cheapest Australian packs are **Tattu 1S 300 mAh BT2.0 at A$6.39 each** and **CNHL 6S 1250–1300 mAh at A$35.95–43.95**.

### Cited Findings
**Which stores ship LiPos to Sydney, and how**
- **Phaser**:
  - "Products with [DG] in the title (LiPo batteries and some chemicals) travel by road only… Battery orders take 2–5 business days longer than normal… Express shipping is available on battery orders. Air freight is not" ([Phaser Shipping & Delivery](https://phaserfpv.com.au/pages/shipping-delivery)).
  - Batteries are sent "Road only, within Australia… Never. No international battery shipping" ([Phaser Battery Safety](https://phaserfpv.com.au/pages/battery-safety)).
  - Live quote for two 6S 1300 packs to 2000: eParcel Standard A$9.89 (4–5 days) or Express A$10.68 (3–4 days) ([Phaser](https://phaserfpv.com.au/products/chinahobbyline-1300mah-6s-120c-lipo-battery-xt60-dg)).
- **Next FPV**: its StarTrack Air Express option is labelled "NO LIPOS". A cart of four 6S LiPos was offered free Aramex/Couriers Please (3–5 days), eParcel Standard A$3.95 or eParcel Express A$15.95 ([Next](https://www.nextfpv.com.au/products/tattu-r-line-version-6-0-1300mah-22-2v-160c-6s1p-lipo-battery-pack-with-xt60-plug)).
- **Buzz**: dangerous goods "can only be carried by australia post road options, no express / air services… outside of the Perth metro area" ([Buzz](https://buzzfpv.com.au/policies/shipping-policy)). Its "Express - AIR" service is marked "NO BATTERIES" ([Buzz quote](https://buzzfpv.com.au/products/vifly-shortsaver-2)).
- **BetaFPV**: "All of the parcels are shipped by air". Battery shipping is restricted only to South Africa, Cyprus, Côte d'Ivoire, Brunei, India, Argentina, Serbia, Iceland, Georgia, Oman, Costa Rica and Qatar, so Australia is not restricted ([BetaFPV policy](https://betafpv.com/policies/shipping-policy)).
- **RDQ**: its cart calculator returned DHL Express Worldwide US$53.19 for two CNHL 6S 1300 packs to Sydney ([RDQ](https://www.racedayquads.com/products/cnhl-black-series-v2-0-1300mah-22-2v-130c-6s-lipo-battery-xt60)). No RDQ policy text confirming international LiPo shipping was found.

**Cheapest Australian 1S packs (BT2.0 unless noted)**
- Tattu 300 mAh 75C 5-pack **A$31.95 (A$6.39 each), IN, 32 in stock**, Next FPV ([Next](https://www.nextfpv.com.au/products/tattu-300mah-120c-1s1p-lipo-battery-pack-with-bt-2-0-plug-5pcs)).
- CNHL 350 mAh 5-pack A$33.95 IN at Phaser ([Phaser](https://phaserfpv.com.au/products/chinahobbyline-cnhl-speedy-pizza-350mah-37v-1s-75c-bt2-lipo-battery-5-pack-dg)); A$34.55 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/cnhl-pizza-series-350mah-3-8v-1s-75c-lipo-battery-with-bt2-0-5-packs)).
- BetaFPV LAVA II 280 mAh 5-pack A$37.99 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/lava-ii-1s-280mah-battrey-95c-5pcs)).
- BetaFPV LAVA II 320 mAh 5-pack A$39.49 IN at Rising Sun ([RSUN](https://risingsunfpv.com.au/products/lava-ii-1s-320mah-battrey-95c-5pcs)); A$39.99 IN at Buzz ([Buzz](https://buzzfpv.com.au/products/betafpv-lava-ii-1s-320mah-95c-lihv-battery-bt2-0-5pcs)).
- Tattu 450 mAh 5-pack A$42.95 IN at Next FPV ([Next](https://www.nextfpv.com.au/products/tattu-450mah-1s-75c-3-8v-high-voltage-lipo-battery-pack-with-bt-2-0-plug-5pcs)).
- A30-plug GNB 300 mAh A$3.67 each IN (was A$7.49) at Phaser ([Phaser](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-300mah-80c-a30-plastic-head-lipo-battery)).

**Cheapest Australian 6S packs (about 1100–1350 mAh, XT60)**
| Pack | Price (stock) | Source |
|---|---|---|
| CNHL Ministar 1250 mAh 6S 70C | **A$35.95 IN** | [Buzz](https://buzzfpv.com.au/products/chinahobbyline-cnhl-ministar-1250mah-6s-70c-lipo-battery) |
| CNHL Black 1100 mAh 6S 100C | A$36.23 IN | [Phaser](https://phaserfpv.com.au/products/chinahobbyline-cnhl-1100mah-6s-lipo-battery) |
| **CNHL Ministar 1300 mAh 6S 120C** | **A$43.95 IN** (10 in stock) | [Phaser](https://phaserfpv.com.au/products/chinahobbyline-1300mah-6s-120c-lipo-battery-xt60-dg) |
| CNHL Ministar 1300 mAh 6S 120C | A$45.95 IN | [Buzz](https://buzzfpv.com.au/products/chinahobbyline-cnhl-ministar-1300mah-22-2v-6s-120c) |
| CNHL Black V2.0 1300 mAh 6S 130C | A$47.50 IN | [Phaser](https://phaserfpv.com.au/products/cnhl-black-series-v20-1300mah-222v-6s-130c-lipo-battery-with-xt60) |
| CNHL Speedy Pizza Pro 1350 mAh 6S 150C | A$50.96 IN | [Phaser](https://phaserfpv.com.au/products/cnhl-speedy-pizza-series-pro-1350mah-222v-6s-150c-lipo-battery-dg) |
| GNB 1350 mAh 6S 140C | A$51.47 IN | [Phaser](https://phaserfpv.com.au/products/gaoneng-gnb-6s-222v-1350mah-140c-xt60-lipo-battery-dg) |
| FMR 1300 mAh 6S 120C | A$52.95 IN (was A$57.95) | [Next](https://www.nextfpv.com.au/products/fmr-1300mah-extreme-6s-120c-lipo-battery-pack) |
| Tattu R-Line V6.0 1300 mAh 6S 160C | A$56.95 IN (was A$59.95) | [Next](https://www.nextfpv.com.au/products/tattu-r-line-version-6-0-1300mah-22-2v-160c-6s1p-lipo-battery-pack-with-xt60-plug) |
| Voscel R696 1300 mAh 6S 96C | A$58.99 IN | [RSUN](https://risingsunfpv.com.au/products/voscel-r696-1300mah-6s-96c-22-2v-28-86wh-battery-with-xt60) |
| GNB 1300 mAh 6S 120C LiHV | A$39.99 **OOS** | [Phaser](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-6s-228v-1300mah-120c-xt60-lipo-battery) |

### Inferences
- For a Sydney buyer, the cheapest sensible LiPo sources are:
  - **1S:** Next FPV's Tattu BT2.0 5-packs. Combined with other items to pass A$150, shipping is free. Alternatively Phaser's CNHL 5-pack if ordering there anyway.
  - **6S:** Phaser's CNHL Ministar 1300 at A$43.95, with road delivery from Somersby in about 4–5 business days or same-day collection by walk-in.
- RDQ's quoted DHL price of US$53.19 for two 6S packs (A$76.65) would cost almost as much as the packs themselves (US$72.98), even if RDQ did ship them. The earlier report's advice to buy LiPos domestically holds.

### Gaps
- Rising Sun FPV's and HobbyWarehouse's LiPo shipping rates and transit times to Sydney were not obtained.
- Whether RDQ actually ships LiPos to Australia was not confirmed: only the calculator responded, with no policy text found.
- AliExpress battery listings and their shipping to Australia were not checked.
