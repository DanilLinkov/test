# Flix motors, propellers, batteries and charger: where to buy for Sydney NSW 2000

Everything below was observed on **8 Oct 2026 UTC**, which is the morning of **Fri 9 Oct 2026 in Sydney (AEDT)**. Prices are A$ including GST unless marked otherwise.

- **Exchange rate:** 1 USD = 1.4402 AUD, ECB rate dated 2026-10-08 via Frankfurter (the .app URL now redirects to api.frankfurter.dev/v1) — [Frankfurter](https://api.frankfurter.app/latest?from=USD&to=AUD). Every price found was already in AUD, so no conversion was needed.
- **Stock and prices** for the Australian stores come from each store's live Shopify catalogue (`/products.json`).
- **Shipping costs** are live checkout quotes for postcode 2000. Each quote was made by building a cart through the store's `/cart/add.js` and reading `/cart/shipping_rates.json`.
- **AliExpress prices** come from search pages requested with an AU/AUD locale. "reg" is the regular price decoded from the listing data. "AU$1.49" prices are new-shopper welcome deals and are not used.

## What exactly must be bought, and which stores could be checked?

### Takeaway
**What Flix needs:**
- four 8520 brushed motors rated for 3.7 V: two clockwise with blue & red wires, two counter-clockwise with black & white wires
- 55 or 65 mm props whose hole matches the motor shaft
- a 1S "LW 952540 (or any compatible by the size)" LiPo, 25C and 1000 mAh or more, with an MX2.0 plug
- any LiPo charger

**What could be checked:**
- Phaser FPV, Next FPV, Rising Sun FPV, Buzz FPV, Hobbyco and Hobby Warehouse were all checked live.
- AliExpress search pages worked.
- AliExpress item pages, Amazon AU and eBay AU blocked automated access on 8 Oct.

### Cited Findings
- **Flix README.** It is identical to repo commit 1f5b268 (22 Sep 2026) — [Flix README](https://github.com/okalachev/flix):
  - Motor: "8520 3.7V brushed motor. Motor with exact 3.7V voltage is needed, not ranged working voltage (3.7V — 6V). Make sure the motor shaft diameter and propeller hole diameter match!" (qty 4)
  - Propeller: "55 mm or 65 mm" (qty 4)
  - Battery: "LW 952540 (or any compatible by the size). Make sure the battery has enough discharge rate and capacity — 25C with 1000 mAh or more is recommended!"
  - Connector: "MX2.0 2P female"
  - Charger: "Any"
- **Motor wiring table.** Motor 0 (rear left) and motor 2 (front right) are counter-clockwise, prop B, "Black & White" wires. Motor 1 (rear right) and motor 3 (front left) are clockwise, prop A, "Blue & Red". The README adds: "Clockwise motors have blue & red wires and correspond to propeller type A (marked on the propeller). Counter-clockwise motors have black & white wires correspond to propeller type B." — [Flix README](https://github.com/okalachev/flix)
- **Battery current.** "The battery should be able to provide 15A of current. So the C-rating for a 1000 mAh battery should be at least 15C (higher is better)." — [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md)
- **The obsolete Flix version 0** used:
  - "8520 3.7V brushed motor (**shaft 0.8mm!**)"
  - "Hubsan 55 mm" props
  - a "3.7 Li-Po 850 MaH 60C" battery
  - Source: [Flix version 0](https://github.com/okalachev/flix/blob/master/docs/version0.md)
- **User builds** list "55 mm propellers, 3.7 V 25C 1050 mAh LiPo" and "8520 3.7V brushed motors, 55 mm propellers, battery li-po 1200 mAh" — [Flix user builds](https://github.com/okalachev/flix/blob/master/docs/user.md)
- **Under-deck cradle in the printed frame.** Measured from the frame STL with a script slicing the mesh. The README does not label it; reading it as the battery holder is an inference from its size:
  - Below the deck there are two parallel walls with a **25.0 mm inner gap** (walls at x = ±12.5 to ±13.3 mm).
  - The walls are **31 mm long** (y = −15.5…+15.5) and open at both ends.
  - They are **about 10 mm deep** (present at z = −9.5 mm, gone by −10.5 mm).
  - Source: [flix-frame-1.1.stl](https://github.com/okalachev/flix/blob/master/docs/assets/flix-frame-1.1.stl)
- **Store locations (Shopify `meta.json`):**
  - Phaser FPV: Somersby NSW — [meta](https://phaserfpv.com.au/meta.json)
  - Next FPV: Prestons NSW — [meta](https://www.nextfpv.com.au/meta.json)
  - Hobbyco: Macquarie Park NSW — [meta](https://www.hobbyco.com.au/meta.json)
  - Rising Sun FPV: Kirwan QLD (Townsville) — [meta](https://risingsunfpv.com.au/meta.json)
  - Buzz FPV: Wangara WA (Perth) — [meta](https://buzzfpv.com.au/meta.json)
- **Store address details:**
  - Phaser: "1/80 Somersby Falls Rd, Somersby NSW 2250 … Walk-ins welcome for in-store purchases and pickups" — [Phaser shipping policy](https://phaserfpv.com.au/policies/shipping-policy)
  - Next FPV gives a mailing address of "Ingleburn NSW 1890" and says "We are registered for GST and all prices include local tax" — [Next FPV about](https://www.nextfpv.com.au/pages/about-us)
  - Rising Sun: "Same-day dispatch from Townsville on weekday orders before 3pm AEST" — [Rising Sun contact](https://risingsunfpv.com/pages/contact-us)
- **Blocked sources (8 Oct):**
  - **Amazon AU:** curl received a JavaScript "bm-verify" interstitial, then HTTP 503. WebFetch also got HTTP 503 — [Amazon AU search](https://www.amazon.com.au/s?k=952540+lipo+battery+1000mah)
  - **eBay AU:** WebFetch got HTTP 403 — [eBay AU search](https://www.ebay.com.au/sch/i.html?_nkw=952540+1000mah+battery&LH_PrefLoc=1)
  - **AliExpress item pages:** they render client-side, and their data API returned "FAIL_SYS_USER_VALIDATE … punish … captcha" — [AliExpress item](https://www.aliexpress.com/item/1005007322229008.html)
- **AliExpress search data** shows AUD prices, "ship_to_country":"AU" and "taxRate":"0" — [AliExpress search](https://www.aliexpress.com/w/wholesale-952540-battery.html?SearchText=952540+battery&shipCountry=AU)
  - The ATO says GST on low-value imports "may be included in the advertised price, added at checkout or included on your receipt" (cited in the 5 Oct notes) — [ATO](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-on-imported-goods-and-services/australian-consumers-importing-goods-and-services)

### Inferences
- **What 952540 means.** By the usual cell-naming convention, "952540" is about 9.5 × 25 × 40 mm, which matches the frame's 25 mm-wide, ~10 mm-deep cradle exactly. A 40 mm pack overhangs the 31 mm walls by about 4.5 mm at each end. Other pack shapes fit only with padding (see the battery section).
- **The motor voltage rule.** Read the "exact 3.7 V, not 3.7–6 V" rule as: buy motors designed for 1S. Avoid higher-voltage 8520 motors, which would be weak at 3.7 V. Phaser's "1.5–3.7 V" motors have a 3.7 V maximum, so they meet the intent.

### Gaps
- Amazon AU and eBay AU prices, stock and Australian-seller status could not be checked on 8 Oct, so neither is evaluated here. The 5 Oct notes recorded:
  - Amazon AU MX2.0 multipacks with chargers at A$21.99–27.99, shown as "Currently unavailable"
  - Amazon AU 8520 2-packs at A$30.76–34.92
- AliExpress item-level data could not be read. This includes shipping options, delivery estimates, connector variants and "cannot ship to your country" flags.
- No other Sydney walk-in hobby shop with relevant stock was found. A web search turned up only online sellers and an unverified eBay seller ("RC Hobbyland", Sydney location) — [search result](https://www.ebay.de/itm/187158166323)

## What does delivery to Sydney 2000 cost and take from each seller, and which can actually ship LiPos?

### Takeaway
**Phaser FPV (Somersby NSW) is the best-placed seller:**
- free walk-in pickup
- live quotes to 2000 of **A$7.09 standard and A$7.64 express** for motors and props
- **A$8.45 standard and A$9.11 express** for a cart that includes LiPos
- LiPos go by road only, adding 2–5 business days

**Other Australian stores:**
- Next FPV (Sydney) ships LiPos by road, and Sydney buyers may pick Express. It has none of the Flix parts except chargers.
- Buzz FPV (WA) and Rising Sun FPV (QLD) ship batteries by road only. They cost A$9.50–12.29 and are slower.

**AliExpress:** LiPo delivery to Sydney is **unverified**. Every 952540 listing ships from China, and no Australian-warehouse listing exists.

### Cited Findings
- **Phaser FPV:**
  - **Dispatch and rates:** "Order before 1pm AEST … ships the same day from Somersby NSW". "Live carrier rates at checkout". "Over $99 saves $5, over $150 saves $8" — [Phaser shipping policy](https://phaserfpv.com.au/policies/shipping-policy)
  - **DG rule in the policy:** "Items marked [DG] travel by road only (no air, no express upgrade, no international) and add 1-2 business days" — [Phaser shipping policy](https://phaserfpv.com.au/policies/shipping-policy)
  - **Delivery page:**
    - Sydney is 2 business days standard and 1 express from dispatch.
    - "for battery orders, allow 2–5 extra days".
    - "Sydney same-day courier: GO Logistics, $16.95 to Sydney and greater Sydney" (order before 9 am).
    - "Express shipping is available on battery orders. Air freight is not."
    - **This contradicts the policy page's "no express upgrade".**
    - Source: [Phaser shipping & delivery](https://phaserfpv.com.au/pages/shipping-delivery)
  - **Battery page:**
    - "Lithium batteries are Class 9 dangerous goods".
    - "Road only, within Australia, with a 'Road Transport Only' label on the parcel".
    - "battery orders travel by road and take 2–5 business days longer than normal".
    - "Check every new pack within 7 days of delivery".
    - Source: [Phaser battery safety](https://phaserfpv.com.au/pages/battery-safety)
  - **Live quote, motors and props only** (2 × CW and 2 × CCW CL-0820-15, 2 × Gemfan 65 mm packs):
    - AusPost eParcel Standard A$7.09, estimated Tue 13–Thu 15 Oct
    - eParcel Express A$7.64, estimated Sun 11–Mon 12 Oct
    - TNT Air A$29.91; TNT Road A$34.37; Direct Freight A$37.37; DHL A$51.62
    - Source: cart quote on [Phaser](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-coreless-brushed-motor)
  - **Live quote, same cart plus 3 × GNB 850 mAh [DG]:**
    - eParcel Standard A$8.45 (13–15 Oct)
    - eParcel Express A$9.11 (11–12 Oct)
    - "Go Logistics 24-48 Hour Delivery – 1 Label" A$24.95
    - A cart of 3 × GNB 850 plus a WhoopStor charger got identical rates.
    - Source: cart quote on [Phaser GNB 850](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-850mah-60c-a30-cabled-lipo-battery-long-range)
- **Next FPV:**
  - **LiPo rule:** "Lithium batteries cannot be shipped by air. If you're outside Greater Sydney, please do not select Express, Expedited or Air shipping." — [Next FPV LiPo collection](https://www.nextfpv.com.au/collections/lipo-battery)
  - **Dispatch:** "Order before 2.30pm AEST for same day shipping". "Free AU delivery for orders over $150" — [Next FPV shipping policy](https://www.nextfpv.com.au/policies/shipping-policy)
  - **Live quote for a WhoopStor 3:** — cart quote on [Next FPV WhoopStor 3](https://www.nextfpv.com.au/products/vifly-whoopstor-3-1s-battery-storage-charger-and-discharger)
    - Aramex/Couriers Please A$10.95 (3–5 days)
    - eParcel Standard A$11.95 (3–5 days)
    - eParcel Express A$15.95 (1–3 days)
    - StarTrack Air Express "NO LIPOS…" A$19.95
- **Buzz FPV (WA), live quotes:**
  - HexaCharger cart: "Express – AIR (NO BATTERIES)" A$12.25 (1–4 days) or "Standard – Road" A$9.95 (2–8 days) — [Buzz HexaCharger](https://buzzfpv.com.au/products/betafpv-hexacharger-1s-charger)
  - Battery cart (3 × HappyModel 650 mAh): only "Standard – Road" A$9.95 (2–8 days) — [Buzz HappyModel 650](https://buzzfpv.com.au/products/happymodel-1s-3-8v-650mah-30c-lipo-lihv-battery-ph2-0-plug)
  - The contact page lists "Local Pickup" (in WA) — [Buzz contact](https://buzzfpv.com.au/pages/contact)
- **Rising Sun FPV (Townsville), live quote for one prop pack** — [Rising Sun Gemfan 65 mm](https://risingsunfpv.com.au/products/gemfan-65mm-micro-propellers-1-5mm-shaft-set-of-8-1mm-shaft-set-of-8):
  - AusPost Standard A$9.50; AusPost Express A$12.29; Aramex A$18.82; StarTrack Premium A$45.81
  - The quoted delivery dates were blank or invalid.
  - Its .com.au domain redirects to risingsunfpv.com, which showed USD to a non-Australian visitor (`Shopify.currency` "USD", rate 0.7099). The store's base currency is AUD — [meta](https://risingsunfpv.com.au/meta.json)
- **Hobbyco:**
  - "Standard Shipping: $9.90 Australia-wide (Excludes Bulky & Dangerous Goods)", free over $125 (excluding DG).
  - Click & Collect orders are processed "Mondays, Wednesdays and Fridays".
  - Source: [Hobbyco shipping policy](https://www.hobbyco.com.au/policies/shipping-policy)
- **Hobby Warehouse** ships from Melbourne, "2-5 business days" to metro areas — [Hobby Warehouse shipping policy](https://hobbywarehouse.com.au/policies/shipping-policy)
- **Australia Post's public guidance:**
  - "Lithium batteries can only be sent internationally (air or sea), or domestically by air if the battery or cell (maximum of two batteries or four individual cells) are installed in the device".
  - "Under no circumstances should lithium batteries be packed by themselves, or alongside a device."
  - Limit: 20 Wh per cell, 100 Wh per battery.
  - Source: [Australia Post dangerous & prohibited items](https://auspost.com.au/business/shipping/check-sending-guidelines/dangerous-prohibited-items)
  - This conflicts with what DG-registered retailers actually do, such as Phaser's road-only "Road Transport Only" parcels — [Phaser battery safety](https://phaserfpv.com.au/pages/battery-safety)
- **AliExpress batteries:**
  - The 952540 listings carry "shipFrom":"CN" in their search data — [AliExpress 952540 search](https://www.aliexpress.com/w/wholesale-952540-battery.html?SearchText=952540+battery&shipCountry=AU)
  - Filtering "Ships from: Australia" for "952540 lipo battery" returned only two unrelated items, a 9 V Li-ion and an AA USB cell — [AliExpress AU-warehouse search](https://www.aliexpress.com/w/wholesale-952540-lipo-battery.html?SearchText=952540+lipo+battery&shipCountry=AU&shipFromCountry=AU)
- **Anecdotal reports on AliExpress LiPos to Australia.** These are from a 2021 forum thread, taken from a search-result summary; the thread was not fetched:
  - A listing showed "Can Not ship to Australia".
  - "Shipping of LiPos seems to be 'seasonal' to some places".
  - Source: [IntoFPV thread](https://intofpv.com/archive/index.php/thread-17659-2.html)

### Inferences
- **Australian retailers with a DG process can ship LiPos to Sydney by road:** Phaser, Next FPV, Buzz and Rising Sun.
- **Phaser is the only one with confirmed walk-in pickup** within reach of Sydney. Its product pages say "Visit us in-store in NSW - We are located 1 hour north of Sydney" — [Phaser HQProp 65 mm](https://phaserfpv.com.au/products/hq-durable-65mm-propellers)
- **AliExpress LiPos:** listings priced for AU suggest the sellers accept AU orders, but checkout acceptance, carrier and transit time could not be confirmed. Forum evidence says acceptance varies by seller and over time. Treat AliExpress LiPos as an uncertain, slow, parallel order, not the critical path.

### Gaps
- AliExpress shipping cost and delivery time to Sydney for any item (LiPo or not) could not be read.
- Whether Phaser's GO Logistics same-day courier carries DG items is not stated. The DG cart offered only the 24–48 h GO Logistics service, at about 09:45 AEDT, after the 9 am same-day cut-off.
- Rising Sun FPV's LiPo shipping rules could not be extracted; the policy page is mostly navigation.
- Next FPV's pickup or walk-in options are not stated anywhere checked.

## Motors: which 8520 3.7 V motors to buy, and where?

### Takeaway
**Best buy: four Micro Motor Warehouse CL-0820-15 from Phaser FPV, two CW and two CCW, at A$6.95 each (A$27.80).**
- In stock and unchanged from the 5 Oct check.
- 1 mm shaft, rated 1.5–3.7 V.
- The wire colours match Flix's convention exactly.
- Delivered to 2000 for A$7.09 standard or A$7.64 express (with props), or free at walk-in.

AliExpress 8520 sets cost about AU$12 for four, but shaft size, voltage rating and delivery are less certain.

### Cited Findings
- **Phaser MMW CL-0820-15**, "direct drive version … 8cm wires" — [Phaser CL-0820-15](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-coreless-brushed-motor):
  - A$6.95 each as "1pcs / CW" or "1pcs / CCW", both available; the page shows "In stock".
  - Specs: "speed: 15.000Kv", "operating voltage: 1.5-3.7V", "max. thrust: 40g (direct drive, Hubsan X4 propeller)", "2.75A max. load current at 3.7V", 8.5 mm can × 20 mm long, "shaft diameter: 1mm", 4.9 g.
  - Wire colours: "clockwise: red +, blue - / counter clockwise: white +, black -".
  - "Note: this is NOT the Alias Plug'n'Play version".
- **Phaser MMW CL-0820-18 "Dark Edition"** — [Phaser CL-0820-18](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-18-coreless-brushed-motor):
  - A$7.95 each CW or CCW, in stock.
  - "speed: 17.800Kv", "operating voltage: 1.5-3.7V", "5A+ current at 3.7V (66mm Parrot propeller)", 1 mm shaft, 4.9 g, 8 cm wire, Micro-JST-1.25 plug, same colour code.
- **Phaser geared 8520 versions to avoid:**
  - CL-0820-15-11T, A$7.95 ("geared version … 11T polymer pinions") — [Phaser](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-11t-coreless-motor-for-latrax-alias)
  - CL-0820-15-9T, A$7.95 — [Phaser](https://phaserfpv.com.au/products/micro-motor-warehouse-cl-0820-15-9t-coreless-brushed-motor)
  - CL-0820-15-Omi, A$8.00 or A$29 for 4 ("2cm wires", 11T pinion) — [Phaser](https://phaserfpv.com.au/products/cl-0820-15-omi)
  - CL-0820-17-11T, A$9.00 — [Phaser](https://phaserfpv.com.au/products/cl-0820-17-11t)
- **Buzz FPV BetaFPV 8.5×20 mm 16000KV (2CW+2CCW)** — [Buzz BetaFPV 8.5x20](https://buzzfpv.com.au/products/8-5x20mm-16000kv-brushed-motors-2cw-2ccw):
  - A$25.48 per set of 4, **out of stock**.
  - "shaft diameter: 1.0mm", "60,000 rpm at 3.7V", "clockwise motor(with red blue), anti-clockwise motor(with black white)", JST 1.25 mm plug, about 5.2 g.
- **Other Australian stores:**
  - Next FPV, Rising Sun FPV, Hobby Warehouse and Hobbyco catalogues had no 8520 drone motors. Next FPV and Rising Sun returned only servos for "coreless" — [Next FPV catalogue](https://www.nextfpv.com.au/products.json); [Rising Sun catalogue](https://risingsunfpv.com.au/products.json)
  - Hobbyco's "8520" and "coreless motor" searches returned unrelated items — [Hobbyco search](https://www.hobbyco.com.au/search/suggest.json?q=coreless%20motor&resources%5Btype%5D=product)
- **AliExpress, ship-to AU** (from the [AliExpress search](https://www.aliexpress.com/w/wholesale-8520-coreless-motor-3.7v.html?SearchText=8520+coreless+motor+3.7v&shipCountry=AU)). Shipping cost and time could not be read for any of these:
  - "4pcs 8520 2CW and 2CCW Coreless Motor DC 3.7V 58000RPM … 1mm shaft": reg AU$11.81, 17 sold — [AliExpress 1005012596273761](https://www.aliexpress.com/item/1005012596273761.html)
  - "Hubsan H107C X4 3.7V 1S Motors 8520 … CW CCW Brushed 8.5x20mm": reg AU$12.82 (AU$1.49 new-shopper only), 237 sold, 4.8★ — [AliExpress 32809389517](https://www.aliexpress.com/item/32809389517.html)
  - "2PCS 8.5mm*20mm CW CCW Mini Coreless Motor DC 3.7V 50000RPM": AU$6.00 per pair, 140 sold, 5★ — [AliExpress 1005012436172560](https://www.aliexpress.com/item/1005012436172560.html)
  - "2PCS Mini 8.5mm*20mm 8520 CW CCW Coreless Motor 1mm shaft 1S DC 3.7V 58000RPM": reg AU$5.82 per pair, 28 sold — [AliExpress 1005011620195333](https://www.aliexpress.com/item/1005011620195333.html)
  - Listings that conflict with Flix's rule or are ambiguous:
    - "DC 3V 3.7V 4.2V 5V 39500RPM" — [AliExpress 1005010702230397](https://www.aliexpress.com/item/1005010702230397.html)
    - "2S DC 3.7V 52500RPM 1.0mm 1.2mm shaft" — [AliExpress 1005013256011184](https://www.aliexpress.com/item/1005013256011184.html)
    - Several "with Gearbox" versions — [AliExpress 1005006422998326](https://www.aliexpress.com/item/1005006422998326.html)
- **Earlier price for comparison:** Amazon AU 8520 2-packs at A$30.76–34.92 (5 Oct notes; not re-checkable on 8 Oct) — [Amazon AU search](https://www.amazon.com.au/s?k=8520+coreless+motor)

### Inferences
- **Why the CL-0820-15:**
  - Its red/blue CW and white/black CCW leads match Flix's table, so prop A/B assignment and wiring follow the README directly.
  - Its 1 mm shaft fits the locally stocked 1 mm Gemfan props.
  - Four motors at 2.75 A each is about 11 A peak, within Flix's 15 A battery guidance.
- **Why not the CL-0820-18.** Its 17,800 Kv and "5A+" draw mean four motors could pull 20 A or more, beyond a 25C 1000 mAh pack's 25 A margin. It is not a first-build choice.
- **AliExpress motors** are about A$16 cheaper for four but slower, with delivery cost unknown. A shaft size is stated in some titles and missing from others, so check it against the props bought. Flix v0's own 8520 motors had 0.8 mm shafts.
- **Fastest:** Phaser walk-in, same day. **Cheapest delivered and verified:** Phaser at A$27.80 + A$7.09 = **A$34.89** (A$35.44 with express).

### Gaps
- Phaser's exact motor stock count is not shown; the page says only "In stock".
- Wire colours, shaft sizes and real voltage ratings of the AliExpress sets could not be checked, because item pages were blocked.

## Propellers: which 55/65 mm A/B props fit, and where?

### Takeaway
**Best buy: two packs of Gemfan 65 mm 2-blade 1 mm-hole props (4 CW + 4 CCW each) from Phaser, at A$1.45 each (A$2.90 for 2 sets).**
- In stock, and they ship in the same parcel as the motors.
- They fit the CL-0820-15's 1 mm shaft.
- Use CW props (Flix "A") on the blue/red motors and CCW props ("B") on the black/white motors.

Rising Sun FPV has the same props for A$5.50, but from Townsville with A$9.50 shipping. AliExpress has Gemfan 65 mm and Hubsan 55 mm "1 mm shaft" props for about AU$5–7.

### Cited Findings
- **Phaser Gemfan 65mm 2.5" 2-blade (4CW + 4CCW)** — [Phaser Gemfan 65 mm](https://phaserfpv.com.au/products/gemfan-65mm-2-blade-propellers):
  - 1 mm versions: A$1.45 (Whisky or Yellow) and A$2.64 (Clear Gray), all in stock; "was" A$5.95.
  - The 1.5 mm versions (A$5.95) are out of stock.
- **Phaser Gemfan 65S 65 mm, 1 mm**, A$2.19 (Clear Black, Blue or Red), in stock; the 1.5 mm versions are out of stock — [Phaser Gemfan 65S](https://phaserfpv.com.au/products/gemfan-65mm-micro-propellers)
- **Rising Sun FPV Gemfan 65 mm, 1 mm, set of 8**, A$5.50 — [Rising Sun Gemfan 65 mm](https://risingsunfpv.com.au/products/gemfan-65mm-micro-propellers-1-5mm-shaft-set-of-8-1mm-shaft-set-of-8):
  - Whisky 1 mm is in stock.
  - Adding 2 × Yellow 1 mm returned "Only 1 item was added to your cart due to availability".
  - Shipping to 2000: A$9.50 standard or A$12.29 express.
- **Buzz FPV** has only 1.5 mm-hole 65 mm props, all out of stock (e.g., Gemfan 65 mm 1.5 mm at A$3.55) — [Buzz Gemfan 65 mm 1.5 mm](https://buzzfpv.com.au/products/gemfan-65mm-2-blade-propellers-1-5mm-shaft)
- **Next FPV, Hobbyco and Hobby Warehouse** had no 55/65 mm micro props. Hobbyco's "propeller 65mm" search returned only plane props — [Hobbyco search](https://www.hobbyco.com.au/search/suggest.json?q=propeller%2065mm&resources%5Btype%5D=product)
- **AliExpress, ship-to AU** (shipping cost and time not readable):
  - "8pcs/4 Pairs Gemfan 65mm 1mm / 1.5mm Hole 2 Blade Propeller … CW CCW": AU$4.79 (reg AU$4.94), 67 sold, 5★ — [AliExpress 1005003179700194](https://www.aliexpress.com/item/1005003179700194.html)
  - Another listing of the same: reg AU$11.48, 277 sold — [AliExpress 1005007021233820](https://www.aliexpress.com/item/1005007021233820.html)
  - "4 Or 20pcs 55MM Long Propeller For HUBSAN X4 H107 H107C H107D Quadcopter Suitable For Motors With A Shaft Diameter Of 1MM": AU$5.83 (reg AU$7.38), 77 sold — [AliExpress 1005004569053344](https://www.aliexpress.com/item/1005004569053344.html)
  - "Mini 60mm CW/CCW Propeller for 0720 0820 8520 Coreless Motor for Hubsan H107": reg AU$3.73 — [AliExpress 32913073299](https://www.aliexpress.com/item/32913073299.html)
- **Flix prop rules:** "Make sure the motor shaft diameter and propeller hole diameter match!" Prop type A goes on CW (blue & red) motors and type B on CCW (black & white) motors — [Flix README](https://github.com/okalachev/flix)

### Inferences
- Two Phaser packs give 8 CW and 8 CCW props, which covers the four needed plus a full spare set, for A$2.90 in the motor parcel. No local option is cheaper or faster.
- Gemfan packs are sold as CW/CCW rather than lettered A/B. Map CW to Flix "A" and CCW to "B", per the README's motor table.
- If AliExpress motors with a 0.8 mm shaft are bought instead, buy 0.8 mm-hole Hubsan 55 mm props, matching Flix v0. The Phaser 1 mm props will not grip a 0.8 mm shaft.

### Gaps
- Whether Gemfan 65 mm props carry an A/B moulding is not stated in any listing checked.
- AliExpress prop shipping costs and times are unknown.

## Batteries: can a 952540 1000 mAh 25C MX2.0 pack be had in or delivered to Sydney, and what is the local fallback?

### Takeaway
**No Australian store checked stocks a 952540-class 1000 mAh 1S MX2.0 pack (8–9 Oct).**
- The exact-fit packs exist only on AliExpress, at **AU$3.90–6.91 each, shipped from China**. Delivery of these LiPos to Sydney could not be verified.

**Best local fallback: GNB/Gaoneng 1S 850 mAh 60C packs with an A30 plug from Phaser FPV.**
- A$10.95 each, with "6 In stock".
- Delivered by road for A$8.45–9.11 per cart, or collected on foot.
- Fit an A30 lead instead of MX2.0, and pad the pack into the 25 mm cradle.

### Cited Findings
- **Phaser GNB 850mAh 3.8V 1S 60C A30 LiHV (Cabled) Long Range [DG]** — [Phaser GNB 850](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-850mah-60c-a30-cabled-lipo-battery-long-range):
  - A$10.95; the page shows "6 In stock". The plastic-head version (A$9.57) is out of stock.
  - Specs: "Pack Dimension: 7.7*18*66mm (H*W*L)", "Net Weight: 17.5g", "Discharge Rate: 60C", "Charge Rate: 1C to 5C", "Discharge and Charge Connector: A30", 3.8 V LiHV.
  - "Our recommended 1s charger is the VIFLY v3 - The BT2 ports on this charger are compatible with A30 connectors."
- **Phaser GNB 720mAh 1S 100C A30 (Cabled)**: A$10.10, in stock; 7.5 × 18 × 66 mm; 18.5 g — [Phaser GNB 720](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-720mah-100c-a30-cabled-lipo-battery)
- **Phaser mylipo 720mAh 3.7V 1S 25C JST [DG]** — [Phaser mylipo 720](https://phaserfpv.com.au/products/lipo720mah25c1s37v):
  - A$9.07 (was A$13.95), in stock.
  - "dimensions: 50mm x 22mm x 9mm", "weight (incl. plug and wire): 18g", "wire gauge: 18AWG", "plug: JST" (JST type not specified), "designed to fit the Dromida Ominus".
- **Phaser A30 connectors (GNB), all in stock** — [Phaser A30 connectors](https://phaserfpv.com.au/products/gaoneng-a30-connector-adapter-for-fpv-whoops-quads-lipo-battery):

  | Part | Price |
  |---|---|
  | "A30-F Female for Drone" | A$1.21 |
  | "A30-F8080 A30 Female with Cable for Drone" | A$1.74 |
  | "A30-PH2.0 A30 Female to PH2.0 Male Adapter for Charger" | A$1.78 |
  | "A30-M Male for Battery" | A$1.21 |

- **Other in-stock Australian 1S packs** (all below the 1000 mAh recommendation):
  - BetaFPV LAVA II 1S 680 mAh 95C BT2.0 4-pack:
    - Buzz FPV A$44.95 — [Buzz LAVA II 680](https://buzzfpv.com.au/products/betafpv-lava-ii-1s-580mah-95c-lihv-battery-bt2-0-4pcs-dg)
    - Rising Sun FPV A$44.99 — [Rising Sun LAVA II 680](https://risingsunfpv.com.au/products/lava-ii-1s-680mah-battrey-95c-4pcs)
    - Dimensions 80 × 15 × 6.5 mm, 16.2 g (Buzz page).
  - HappyModel 1S 650 mAh 30C PH2.0 at Buzz FPV, A$12.50; "Size: 60mmx18mmx8mm", 16 g — [Buzz HappyModel 650](https://buzzfpv.com.au/products/happymodel-1s-3-8v-650mah-30c-lipo-lihv-battery-ph2-0-plug)
  - EMAX 750 mAh 1S "EM2.0" at Phaser, A$16.95 — [Phaser EMAX 750](https://phaserfpv.com.au/products/emax-1s-750mah-em20-battery-for-tinyhawk-lite)
  - Tattu 1S 550 mAh 75C BT2.0 5-pack at Next FPV, A$47.95 — [Next FPV Tattu 550](https://www.nextfpv.com.au/products/tattu-1s-550mah-75c-3-8v-hv-lipo-battery-pack-with-bt-2-0-plug-5pcs)
  - The only 1100 mAh 1S pack found locally is BetaFPV's Aquila16 BT2.0 pack at Phaser (A$24.95 per 2). It is out of stock, rated 15C, 62.8 × 41.3 × 17.8 mm, and "Only compatible with Aquila16" — [Phaser Aquila16 battery](https://phaserfpv.com.au/products/betafpv-aquila16-exclusive-battery-2pcs)
- **Stores with no suitable pack:**
  - Hobbyco: the closest items are "ES950 LiPo Battery" A$15 (a "HISINGY Drone Battery for Firefly Collection, 3.7V 950 mAh", proprietary) and "PB3102 3.7v-400mah Lipo" A$10 — [Hobbyco ES950](https://www.hobbyco.com.au/products/es950-lipo-battery)
  - Hobby Warehouse and Next FPV had no 1S packs of 650 mAh or more in stock — [Next FPV catalogue](https://www.nextfpv.com.au/products.json)
- **AliExpress 952540 1000 mAh 25C packs**, all "shipFrom CN" (search, ship-to AU):

  | Listing | Price | Sold / rating |
  |---|---|---|
  | "3.7V 1000mAh 25c Lipo Battery 952540 For Syma X5 X5C X5SC X5SW…" — [1005007322229008](https://www.aliexpress.com/item/1005007322229008.html) | AU$3.90 (reg AU$5.57) | 500+ sold, 4.7★ |
  | "Upgraded 3.7V 1000mAh 25C Li-PO Battery 952540…", attribute "UAV, 1000 mAh, 3.7 V, Charger Sets" — [1005010048131612](https://www.aliexpress.com/item/1005010048131612.html) | AU$6.69 (reg AU$8.58) | 380 sold, 4.6★ |
  | "3.7v 1000mah 25C 952540 lipo battery…" — [1005007341566219](https://www.aliexpress.com/item/1005007341566219.html) | AU$6.91 (reg AU$9.87) | 315 sold, 4.8★ |
  | "Upgraded…952540" — [4001344912951](https://www.aliexpress.com/item/4001344912951.html) | AU$4.39 (reg AU$6.36) | 93 sold, 4.9★ |
  | "X5 Battery 3.7V 1000mAh 952540 Lipo Battery And 5in1 Charger" — [1005011838295589](https://www.aliexpress.com/item/1005011838295589.html) | AU$6.80 (reg AU$8.72) | 24 sold, 5★ |
  | "3.7V 1000mAh 25c Lipo Battery + 5in1 Charger for Syma X5…" — [4001120107600](https://www.aliexpress.com/item/4001120107600.html) | from AU$3.28 (cheapest variant) | 116 sold, 4.4★ |

  - Wrong-plug warning: "(JST) 3.7V 1000mAh 25c Lipo Battery and Charger for Syma X5…", AU$8.92 — [AliExpress 1005001276332402](https://www.aliexpress.com/item/1005001276332402.html)
  - Source search: [AliExpress search](https://www.aliexpress.com/w/wholesale-952540-1000mah-mx2.0.html?SearchText=952540+1000mah+mx2.0&shipCountry=AU)
- **MX2.0 polarity.** "There is no standardisation on MX2.0 connector polarity… make sure the battery polarity matches the polarity marking on the PCB" (CircuitDigest, fetched in the 5 Oct research) — [CircuitDigest battery guide](https://circuitdigest.com/articles/how-to-select-right-battery-for-litewing)
- **Supporting evidence for the 850 mAh fallback:**
  - Flix's own v0 build used a "3.7 Li-Po 850 MaH 60C" battery — [Flix version 0](https://github.com/okalachev/flix/blob/master/docs/version0.md)
  - Flix needs about 15 A — [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md)

### Inferences
- **Current capacity (C-rating × capacity):**

  | Pack | Rated current | vs Flix's 15 A |
  |---|---|---|
  | GNB 850 60C | about 51 A | well above |
  | GNB 720 100C | about 72 A | well above |
  | LAVA II 680 95C | about 65 A | well above |
  | mylipo 720 25C | about 18 A | above |
  | 952540 1000 mAh 25C | about 25 A | above, if the rating is honest |

  The C-ratings of no-name Syma-type packs are unverified.
- **Fit in the 25 mm × 31 mm × ~10 mm cradle:**
  - **952540 (about 9.5 × 25 × 40 mm):** snug fit; about 4.5 mm of overhang at each open end.
  - **GNB 850 or 720 (18 × 66 mm):** about 7 mm side play, so it needs foam or tape. It overhangs about 17.5 mm at each end, which clears the corner motor mounts at about ±40 mm.
  - **mylipo 720 (22 × 50 × 9 mm):** the closest local shape; 3 mm side play, about 9.5 mm overhang.
  - The user can also reprint a narrower cradle.
- **What the GNB swap involves:**
  - Replace the MX2.0 pigtail with Phaser's A30-F8080 (A$1.74).
  - Solder it to the board's VCC/GND with a multimeter-confirmed red-to-positive.
  - A30 is keyed, which removes the MX2.0 polarity ambiguity on the battery side.
  - The packs are LiHV: charge to 4.35 V for full capacity or 4.20 V for gentler use.
  - Expect about 15% less flight time than a 1000 mAh pack.
- **If buying MX2.0 packs from AliExpress:**
  - Order the variant explicitly described as MX2.0/Molex (not "JST").
  - Before the first plug-in, measure each pack's polarity against the drone lead and the charger lead.
  - Charge at 4.20 V only; these are standard LiPo, not LiHV.
- **Cost of three packs:** AliExpress AU$11.70 (3 × AU$3.90) plus unknown shipping. Phaser GNB 850 A$32.85 + A$8.45 = **A$41.30 delivered**, or A$32.85 at walk-in.

### Gaps
- Whether the AliExpress 952540 listings will accept a Sydney address for LiPos, by which carrier, at what cost and in what time.
- The connector each listing actually ships (MX2.0 vs other) and the pack weights.
- The GNB A30's exact current rating, the mylipo pack's "JST" plug type, and the real (tested) C-rating of any Syma-type pack.
- Australian eBay sellers of Syma X5 1000 mAh packs could not be checked (eBay AU 403). A web search found only European listings, e.g., an Italian eBay.de seller at €5.90 and Maison du Drone (FR) at €6.79 — [eBay.de 302480743235](https://www.ebay.de/itm/302480743235); [Maison du Drone](https://www.maisondudrone.com/produit/accessoires-pieces-detachees-pour-drones/alimentation-chargeurs/batterie-3-7v-1000mah-pour-syma-x5-x5c-x5sc-x5sw-tk-m68-cx-30-k60-905-v931/)

## Charger: which 1S charger matches the chosen battery, and where?

### Takeaway
**For GNB A30 packs:**
- The **ViFly WhoopStor V3** has native A30 ports, LiPo/LiHV modes and storage/discharge. A$54.99 at Phaser, in stock.
- Budget alternative: **BetaFPV 6-port 1S V2 with its 30 W adapter** (A$20.95, Phaser), plus A$1.78 A30→PH2.0 adapters. Its spec is LiHV 4.35 V only, which suits GNB LiHV packs but not 952540 LiPos.

**For MX2.0 packs, or both:**
- The **HGLRC Thor 1S Charger V2** (Buzz FPV, A$42.95, in stock) is the only Australian-stocked charger found with native MX2.0 and A30 ports. It switches between 4.20 and 4.35 V.
- AliExpress Syma-style USB chargers and MX2.0 USB leads cost AU$4–9.

### Cited Findings
- **Phaser VIFLY WhoopStor V3 40W** — [Phaser WhoopStor V3](https://phaserfpv.com.au/products/vifly-whoopstor-1s-lipo-charger-v3):
  - A$54.99 (White) or A$59.95 (Black or Red), in stock.
  - "capable of both BT2.0, A30 and PH2.0".
  - "Increase the maximum charge current from 0.9A to 1.3A, charges much faster especially for large capacity batteries like 850mah".
  - "capable of discharging"; input "XT60/USB C/12V".
  - Next FPV sells it at A$56.95, in stock — [Next FPV WhoopStor 3](https://www.nextfpv.com.au/products/vifly-whoopstor-3-1s-battery-storage-charger-and-discharger)
- **Buzz FPV HGLRC Thor 1S Charger V2** — [Buzz Thor V2](https://buzzfpv.com.au/products/hglrc-thor-1s-charger-v2-racing-model-fpv-drone-lithium-battery-6-way-charging-board-charger):
  - A$42.95, in stock.
  - "Supports lithium batteries with multiple interfaces PH2.0 & MX2.0 & A30 & BT2.0 plugs".
  - "maximum charging current of 800mah-1A".
  - "Supports ordinary 4.2V lithium batteries and 4.35V LIHV lithium batteries, charging voltage switching (switch switching)".
  - Input "PD3.0 Type C 12V", "Max 65W"; "Suggest a powerfull USBC PD power supply".
  - Being non-DG, it can go Express Air. Buzz's live quote for a comparable non-battery cart (one HexaCharger Pro) was "Express – AIR (NO BATTERIES)" A$12.25 (1–4 days) or "Standard – Road" A$9.95 (2–8 days). A Thor-only cart was not quoted — [Buzz HexaCharger](https://buzzfpv.com.au/products/betafpv-hexacharger-1s-charger)
- **Phaser BetaFPV 6 Ports 1S Battery Charger & Adapter V2** — [Phaser BetaFPV 6-port V2](https://phaserfpv.com.au/products/betafpv-6-ports-1s-battery-charger-adapter):
  - A$20.95, in stock.
  - "Support battery connector: BT2.0&PH2.0", "Max charging current: 1A (Single-port)", "Battery Type：LiHV 4.35V".
  - The page describes "This portable 30W Type-C power adapter".
  - Rising Sun sells the same V2 board for A$22.99 — [Rising Sun BetaFPV 6-port V2](https://risingsunfpv.com.au/products/betafpv-6-port-1s-charger-board-v2)
- **BetaFPV HexaCharger 1S** (dual BT2.0 & PH2.0 ports, "Charge, storage mode, and adjustable current settings"):
  - Phaser A$46.95, or Pro A$53.95 — [Phaser HexaCharger](https://phaserfpv.com.au/products/betafpv-hexacharger-1s-charger)
  - Buzz A$44.95, or Pro A$55.99 — [Buzz HexaCharger](https://buzzfpv.com.au/products/betafpv-hexacharger-1s-charger)
  - Rising Sun A$44.99, or Pro A$54.99 — [Rising Sun HexaCharger](https://risingsunfpv.com.au/products/betafpv-hexacharger-1s-charger)
- **Buzz FPV HotRc A100 6-in-1 USB charger** — [Buzz HotRc A100](https://buzzfpv.com.au/products/hotrc-a100-6-in-1-3-7v-usb-lipo-battery-charger):
  - The only Australian-listed charger with Molex (Hubsan/Syma-type) ports: "Connector: Molex (Hubsan, WLToys etc)", "Output: DC 4.3V 350mah".
  - A$3.54, **out of stock**.
- **Hobbyco** had no 1S whoop/Syma USB charger; its "usb charger" search returned car and 3S items — [Hobbyco search](https://www.hobbyco.com.au/search/suggest.json?q=usb%20charger&resources%5Btype%5D=product)
- **USB-C PD supplies,** if one is not already owned:
  - Phaser Simplecom CU235 35 W PD, A$23.10, in stock. Whether it offers the 12 V PD profile the Thor V2 needs was not checked — [Phaser Simplecom CU235](https://phaserfpv.com.au/products/simplecom-cu235-dual-port-pd-35w-fast-wall-charger-usb-c-usb-a)
  - Buzz HEYMIX 65 W GaN USB-C charger, A$49.99 (was A$59.99), in stock; Buzz's Thor V2 page suggests a "Heymix 65w USB-C" — [Buzz HEYMIX 65W](https://buzzfpv.com.au/products/heymix-65w-gan3-usb-c-charger-2c1a-port-au-plug-w-1-5m-100w-cable)
- **AliExpress chargers** (non-DG, ship-to AU; shipping not readable):
  - **HGLRC Thor 1S Charger V2 "PH2.0 MX2.0 A30 BT2.0 … 4.2V 4.35V":**
    - AU$25.39 (reg AU$31.74) — [AliExpress 1005008783483601](https://www.aliexpress.com/item/1005008783483601.html)
    - AU$30.19, 10 sold, 5★ — [AliExpress 1005006887956773](https://www.aliexpress.com/item/1005006887956773.html)
  - **MX2.0 USB charging lead:** "3.7V USB Charging Cable JST SM 1.25 2.0 2.5 3.5 MX2.0 Plug", reg AU$8.82, 193 sold — [AliExpress 1005006206633668](https://www.aliexpress.com/item/1005006206633668.html)
  - **Syma-style USB chargers:**
    - "Syma X5 USB Charger Cable – Compatible X5C/X5SC/X5SW … Hubsan X4 H107", reg AU$4.14 — [AliExpress 32823901164](https://www.aliexpress.com/item/32823901164.html)
    - "Syma X5HW X5HC X5C X5SW 3.7V 5 In 1 Balance USB Charger PH2.0 PH2.54 Connector", reg AU$7.34 — [AliExpress 1005006852817618](https://www.aliexpress.com/item/1005006852817618.html)
    - "Mini 4/5/6 Port Lipo Battery USB Charger For Syma X5C Hubsan H107", reg AU$11.48 — [AliExpress 1005006267939198](https://www.aliexpress.com/item/1005006267939198.html)
  - **Branded chargers at steep "sale" prices** (likely promotional):
    - VIFLY WhoopStor 3: AU$34.89 (reg AU$95.18), 3K+ sold — [AliExpress 1005007823488859](https://www.aliexpress.com/item/1005007823488859.html)
    - BETAFPV HexaCharger: AU$25.83 (reg AU$83.00) — [AliExpress 1005011644583617](https://www.aliexpress.com/item/1005011644583617.html)

### Inferences
- **Charger by battery choice:**
  - **GNB A30 packs:** the WhoopStor V3 is the safest single box. It has A30 natively, selectable LiPo/LiHV and a storage/discharge function, is in stock locally and ships with the batteries. The A$20.95 BetaFPV 6-port V2 with three A30→PH2.0 adapters (A$26.29) is the cheapest sensible local option, but has no storage function.
  - **MX2.0 packs:** never use a LiHV-only 4.35 V charger such as the BetaFPV 6-port V2. Use the Thor V2 on its 4.20 V setting, or a basic Syma-type USB charger.
  - **Both connector types:** the Thor V2 (A$42.95 + A$12.25 express = **A$55.20 delivered**) covers MX2.0 and A30, so it keeps both battery routes open.
- **Power supply.** The WhoopStor, Thor V2 and HexaCharger run from USB-C/PD supplies. The BetaFPV 6-port V2 is listed with its adapter.

### Gaps
- Whether the WhoopStor V3 and HexaCharger include a power supply is not stated.
- Whether the HexaCharger's BT2.0 ports accept A30 plugs is not stated. Phaser claims this only for the WhoopStor's BT2 ports.
- The connector naming on Syma "PH2.0/PH2.54" USB chargers is ambiguous and could not be checked against MX2.0.

## What are the cheapest sensible and the fastest ways to get all four parts to Sydney?

### Takeaway
**Fastest:** walk into Phaser FPV in Somersby. Everything in the local GNB basket is in stock there: motors, props, 3 × GNB 850, an A30 lead and a charger.

**Cheapest fully verified delivered option:** the same Phaser basket with the BetaFPV 6-port charger, about **A$100** by eParcel.

**Cheapest on paper:** AliExpress-heavy, about A$42–59 before AliExpress shipping. It depends on unverified LiPo delivery and takes weeks.

### Cited Findings
- All prices, stock levels and shipping quotes are cited in the sections above:
  - Phaser motor, prop, GNB 850, A30, WhoopStor and BetaFPV 6-port pages
  - Phaser live quotes of A$7.09/A$7.64 (non-DG cart) and A$8.45/A$9.11 (DG cart)
  - Buzz Thor V2 and Buzz quotes
  - AliExpress listings
- Phaser's shipping discount: "over $99 saves $5, over $150 saves $8" — [Phaser shipping policy](https://phaserfpv.com.au/policies/shipping-policy)

### Inferences
- **Basket A, local GNB route, all from Phaser:**

  | Item | A$ |
  |---|---|
  | 4 × CL-0820-15 (2 CW + 2 CCW) | 27.80 |
  | 2 × Gemfan 65 mm 1 mm (4CW+4CCW) | 2.90 |
  | 3 × GNB 850 mAh 60C A30 | 32.85 |
  | 1 × A30-F8080 female lead for the drone | 1.74 |
  | **Parts subtotal** | **65.29** |
  | + charger option 1: BetaFPV 6-port V2 + 3 × A30→PH2.0 adapters | 26.29 → subtotal **91.58** |
  | + eParcel Express (DG cart) | 9.11 → **≈A$100.69** (A$100.03 standard; A$91.58 at walk-in) |
  | or charger option 2: WhoopStor V3 (White) instead | 54.99 → subtotal **120.28** |
  | + eParcel Express less the A$5 over-$99 discount | ≈4.11 → **≈A$124.39** (A$120.28 at walk-in) |

  - Batteries arrive by road. The checkout estimate for Express was 11–12 Oct, but Phaser says to allow 2–5 extra business days for battery orders.
- **Basket B, MX2.0 as per the README:**
  - Phaser motors + props: A$30.70 + A$7.64 express = **A$38.34** (in hand in about 1–3 business days).
  - 3 × AliExpress 952540 at AU$3.90 = **AU$11.70** + unknown shipping.
  - Charger, either:
    - Buzz Thor V2, **A$55.20 delivered** → **≈A$105.24** in total, or
    - AliExpress MX2.0 USB lead at AU$8.82 → **≈A$58.86** in total.
  - Both totals exclude AliExpress shipping. The batteries are the long pole and may not ship at all.
- **Basket C, cheapest on paper, almost all AliExpress:**
  - 4 × 8520 "1mm shaft" set: AU$11.81
  - 2 × Gemfan 65 mm 4-pair: AU$9.58
  - 3 × 952540: AU$11.70
  - MX2.0 USB lead: AU$8.82
  - **≈AU$41.91** + shipping and GST. Delivery time and LiPo acceptance are unknown, and motor quality and shaft size are unverified. Not recommended for a first build.
- **Per-part cheapest sensible (delivered, verified):**

  | Part | Option | A$ delivered |
  |---|---|---|
  | Motors | Phaser CL-0820-15 ×4 | 34.89 |
  | Props | Phaser Gemfan 65 mm ×2 | 2.90 in the same parcel |
  | Batteries | Phaser GNB 850 ×3 | 41.30 |
  | Charger (A30 packs) | BetaFPV 6-port V2 + adapters | 26.29 in the same parcel |
  | Charger (MX2.0 packs) | Thor V2 from Buzz | 55.20 |

### Gaps
- AliExpress shipping and GST for baskets B and C are unknown, so those totals are incomplete.
- Phaser's GO Logistics same-day option for DG carts could not be confirmed after the 9 am cut-off.

## Which battery choice gives the safest, most reliable result for a first build, given Australian LiPo shipping limits?

### Takeaway
**Recommendation: the local GNB route.**
- Buy **three Gaoneng GNB 1S 850 mAh 60C A30 packs from Phaser FPV** (walk-in, or road delivery).
- Fit an **A30 lead** on the drone, charge on a **ViFly WhoopStor V3** (or a BetaFPV 6-port V2 with A30 adapters), and pad the narrower pack into the cradle.

**Why:**
- The packs are in stock in NSW and shipped legally by road.
- They come with a published spec sheet: 60C, about 51 A against Flix's 15 A.
- Flix's own v0 used an 850 mAh 60C pack.
- The keyed A30 plug removes MX2.0's polarity ambiguity.

**MX2.0 952540 packs:** treat them as an optional, cheap, uncertain AliExpress add-on. If they arrive, check each pack's polarity with a multimeter and charge at 4.20 V only.

### Cited Findings
- **GNB 850 specifications and stock:** 60C; 7.7 × 18 × 66 mm; 17.5 g; A30; "6 In stock"; A$10.95 — [Phaser GNB 850](https://phaserfpv.com.au/products/gaoneng-gnb-lihv-1s-38v-850mah-60c-a30-cabled-lipo-battery-long-range)
- **Flix requirements and precedent:**
  - "15A … C-rating for a 1000 mAh battery should be at least 15C" — [Flix troubleshooting](https://github.com/okalachev/flix/blob/master/docs/troubleshooting.md)
  - Flix v0 battery "3.7 Li-Po 850 MaH 60C" — [Flix version 0](https://github.com/okalachev/flix/blob/master/docs/version0.md)
- **Phaser DG handling:**
  - Road only, "Road Transport Only" label.
  - "Check every new pack within 7 days of delivery"; DOA packs are replaced on photo evidence.
  - Source: [Phaser battery safety](https://phaserfpv.com.au/pages/battery-safety)
- **No 952540 MX2.0 pack** was found in any Australian catalogue checked, and AliExpress offers no Australian-warehouse listing — [AliExpress AU-warehouse search](https://www.aliexpress.com/w/wholesale-952540-lipo-battery.html?SearchText=952540+lipo+battery&shipCountry=AU&shipFromCountry=AU)
- **AliExpress LiPo shipping to Australia** is reported as inconsistent ("Can Not ship to Australia"; "seasonal"), per a 2021 forum thread taken from a search summary — [IntoFPV](https://intofpv.com/archive/index.php/thread-17659-2.html)
- **MX2.0 polarity is not standardised** — [CircuitDigest](https://circuitdigest.com/articles/how-to-select-right-battery-for-litewing)
- **Charger match:**
  - WhoopStor V3: A30/BT2.0/PH2.0, up to 1.3 A — [Phaser WhoopStor V3](https://phaserfpv.com.au/products/vifly-whoopstor-1s-lipo-charger-v3)
  - BetaFPV 6-port V2: "LiHV 4.35V" — [Phaser BetaFPV 6-port V2](https://phaserfpv.com.au/products/betafpv-6-ports-1s-battery-charger-adapter)

### Inferences
- **Trade-offs of the GNB route:**
  - About 15% less capacity than 1000 mAh, so shorter flights.
  - A long, narrow pack (66 × 18 mm) in a cradle built for a 25 × 40 mm pack: foam or tape for 7 mm of side play, and about 17.5 mm of overhang per end. A reprinted narrower cradle is also an option.
  - LiHV chemistry: charge to 4.35 V for full capacity, or 4.20 V for longevity.
- **The "safest and most reliable" ranking rests on three facts:**
  - the GNB packs can be obtained now, legally and quickly
  - their spec is documented and well above Flix's current need
  - a keyed connector and a matching smart charger are stocked at the same shop
- **Battery alternatives, in order:**
  1. The mylipo 720 mAh 25C (A$9.07, Phaser) is a closer shape (50 × 22 × 9 mm) at about 18 A. It has thinner margins and an unspecified "JST" plug, so re-terminate it with A30 or MX2.0.
  2. LAVA II 680 mAh 95C BT2.0 (A$44.95 per 4) has the most current but the least capacity and an awkward 80 mm length.
  3. AliExpress 952540 MX2.0: the exact fit and the cheapest, but delivery is uncertain and the quality and polarity are unverified.

### Gaps
- No Australian-stocked 1S pack of 1000 mAh or more with MX2.0 was found, so the README's exact battery cannot be bought locally (as of 8–9 Oct 2026).
- Real-world Flix flight time on an 850 mAh 60C GNB pack versus a 1000 mAh 25C 952540 pack was not found in any source.
