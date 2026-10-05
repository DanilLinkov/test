# Australian prices and buying strategy for drone tools, consumables and Bambu Lab printing supplies (Sydney)

All prices are AUD including GST, observed on **5 Oct 2026** unless a different date is given. "Observed directly" means fetched from the retailer's own page or data feed. "Search snippet" means taken from a search-engine result for that page, because the site blocked automated fetching (HTTP 403, CAPTCHA or geo-redirect). These snippet figures may be stale. Amazon AU prices were captured with the delivery location set to **Sydney NSW 2000**. AliExpress prices were captured with the region set to Australia and the currency to AUD. The USD→AUD rate is **1 USD = 1.4411 AUD** (ECB reference rate dated 2 Oct 2026, via [Frankfurter](https://api.frankfurter.app/latest?from=USD&to=AUD)).

## 1. Bambu Lab Australia prices (0.6 mm P2S hotend, PLA Basic, PETG HF, TPU 85A/90A, TPU for AMS, PET-CF, PA6-CF, ASA, AMS HT), shipping thresholds, and cheaper Australian filament sources

### Takeaway
After a September 2026 price cut, Bambu's AU store lists PLA Basic at A$28.99 with a spool or A$23.99 as a refill. Multi-buy discounts of 10–32% apply, delivery is A$8, and delivery is free on orders of A$77 or more or five or more spools. JB Hi-Fi sells the same PLA Basic and PETG HF for A$24–29. The specialty grades cost far more: TPU 85A A$65–69, TPU for AMS A$60.99, PET-CF 0.5 kg A$75.99, PA6-CF 0.5 kg A$85.99 and ASA about A$46–48. A genuine Bambu 0.6 mm hardened-steel H2/P2S hotend costs A$30 in Australia. Elegoo AU (PETG A$19.95–20.99, TPU 95A A$27.99) and DREMC (TPU 85A A$39.95) are clearly cheaper sources for PETG and TPU.

### Cited Findings

**How the official AU store was accessed**
- au.store.bambulab.com redirects non-Australian visitors to us.store.bambulab.com (HTTP 302). Neither curl nor WebFetch could open the AU store directly from this session, so AU-store prices below come from an OzBargain deal post that links to it, or from search snippets — [au.store.bambulab.com](https://au.store.bambulab.com/products/pla-basic-filament) (observed redirect, 5 Oct 2026).

**Official Bambu AU store: everyday filament prices and shipping (OzBargain post dated 15 Sep 2026, linking au.store.bambulab.com)**
- Post title: "10%-32% off 3D Filaments Multi-Buy + $8 Del ($0 with $77 Order): e.g. 10 PLA Basic Refills from $163.13 Delivered @ Bambu Lab." The post also says "Bambu Lab offers free shipping when your order includes five or more spools" and that refills and spools can be mixed and matched across any material and colour — [OzBargain 975119](https://www.ozbargain.com.au/node/975119).
- Regular prices with spool: PLA Basic **A$28.99**, PLA Matte A$28.99, PETG Basic **A$26.99**, PETG Translucent A$28.99, ABS A$28.99, PLA Tough+ A$36.99. Refill prices: PLA Basic **A$23.99**, PETG Basic **A$21.99**, ABS A$23.99 — [OzBargain 975119](https://www.ozbargain.com.au/node/975119).
- Multi-buy price tiers at 10% / 20% / 25% / 32% off:

  | Product | 10% off | 20% off | 25% off | 32% off |
  |---|---|---|---|---|
  | PLA Basic, spool | A$26.09 | A$23.19 | A$21.74 | A$19.71 |
  | PLA Basic, refill | A$21.59 | A$19.19 | A$17.99 | A$16.31 |
  | PETG Basic, spool | A$24.29 | A$21.59 | A$20.24 | A$18.35 |
  | PETG Basic, refill | A$19.79 | A$17.59 | A$16.49 | A$14.95 |

  The post says discounts start "when you buy two or more rolls", and the 10-roll example (10 × A$16.31 = A$163.13) shows that 32% applies at 10 rolls — [OzBargain 975119](https://www.ozbargain.com.au/node/975119).
- The poster suggests the deal may combine with Bambu's "$15 off $150 newsletter codes", and a commenter confirmed "Does work with the newsletter code". Another commenter said Bambu "Lowered price of filament and lowered the discount so that it's roughly similar to the old price with 45% discount" — [OzBargain 975119 comments](https://www.ozbargain.com.au/node/975119).
- A commenter wrote "I miss PETG-HF", suggesting PETG HF is not in this deal or has been displaced by PETG Basic on the AU store. This was not verified — [OzBargain 975119 comments](https://www.ozbargain.com.au/node/975119).
- **Earlier structure (20 Mar 2026):** 30% off 4+ items, 40% off 6+ items and 45% off 10+ items, plus A$8 shipping (A$0 on filament orders of A$77 or more). PLA Basic was then A$31 as a refill and A$35 with a spool. The deal covered PETG Basic/HF/Translucent, PLA Basic/Matte/Silk+ and ABS — [OzBargain 952762](https://www.ozbargain.com.au/node/952762).
- Recent AU-store printer deals for context: P2S Combo **A$1,099** + shipping on 12 Jun 2026 (expired) — [OzBargain Bambu deals list](https://www.ozbargain.com.au/deals/bambulab.com).

**Official Bambu AU store: specialty materials and parts (search snippets of au.store.bambulab.com; possibly stale)**
- TPU 85A / TPU 90A "from **A$64.99**" — [Bambu AU new arrivals (snippet)](https://au.store.bambulab.com/collections/new-arrivals).
- PA6-CF "from **A$65.99**" — [Bambu AU PA collection (snippet)](https://au.store.bambulab.com/collections/pa).
- ASA **A$45.99**, ASA Aero A$76.99, ASA-CF A$56.99. The snippet's banner text dates from the H2D launch period, so these prices may predate the September 2026 price cut — [Bambu AU ASA collection (snippet)](https://au.store.bambulab.com/collections/asa).
- AMS HT **A$239.00** on the official AU store, per a search summary. The same summary gives Core Electronics A$236.58 and Ink Station A$229 — [Bambu AU AMS collection (snippet)](https://au.store.bambulab.com/collections/all-ams); [Core Electronics (snippet)](https://core-electronics.com.au/bambu-lab-ams-ht.html); [Ink Station (snippet)](https://www.inkstation.com.au/2573/bambu-lab-ams-ht-automatic-material-system-p-33501.html).
- AMS HT spare parts on the AU store: Mainboard A$115.99, Main Frame A$49.99, Screen A$41.99, Heating Unit A$66.99 — [AMS HT Mainboard (snippet)](https://au.store.bambulab.com/products/ams-ht-mainboard); [Main Frame (snippet)](https://au.store.bambulab.com/products/ams-ht-main-frame); [Screen (snippet)](https://au.store.bambulab.com/products/ams-ht-screen); [Heating Unit (snippet)](https://au.store.bambulab.com/products/ams-ht-heating-unit).
- No AU-store price could be found for the H2/P2S 0.6 mm hotend, TPU for AMS or PET-CF. For reference, the US store lists the standard H2/P2S 0.6 mm hardened-steel hotend at US$20.99 (≈A$30.25) and the high-flow version at US$51.99 (≈A$74.92) — [Bambu US Hotends Bulk Sale (snippet)](https://us.store.bambulab.com/pages/promotions/Hotends-Bulk-Sale); [Shop3DUniverse](https://shop3duniverse.com/products/bambu-lab-hotend-for-h2-p2s).

**JB Hi-Fi (official Bambu stockist, Sydney stores) — observed directly from the store's product data**
- Bambu PLA Basic with spool **A$29.00**; PLA Basic refill **A$24.00**; PETG HF with spool **A$29.00** (black, white); ABS with spool A$29.00. All showed as available. The two items checked in detail (PETG HF black, PLA Basic refill black) had no "compare-at" (sale) price — [JB PETG HF black](https://www.jbhifi.com.au/products/bambu-lab-petg-hf-3d-printer-filament-with-spool-black-1kg); [JB PLA Basic refill black](https://www.jbhifi.com.au/products/bambu-lab-pla-basic-3d-printer-filament-refill-black-1kg); [JB PLA Basic spool black](https://www.jbhifi.com.au/products/bambu-lab-pla-basic-3d-printer-filament-with-spool-black-1kg).
- JB also lists the P2S at A$899 and the P2S Combo at A$1,149. No Bambu TPU, PET-CF, PA6-CF, ASA or hotends appeared in JB search results — [JB P2S Combo](https://www.jbhifi.com.au/products/bambu-lab-p2s-combo-3d-printer-enclosed-excludes-filament).
- Cheaper third-party PETG at JB: 3D META High Speed PETG **A$16.95**; Filaform Naked PETG Matte A$24.20 — [JB 3D META PETG](https://www.jbhifi.com.au/products/3d-meta-high-speed-petg-3d-printing-filament-brown); [JB Filaform PETG](https://www.jbhifi.com.au/products/filaform-naked-petg-matte-3d-printer-filament-1-75mm-1kg-pastel-beige).

**3D Printer Gear (Australian Bambu reseller) — observed directly**
- **Genuine Bambu Lab hotend with hardened-steel nozzle for H2D, H2D Pro, H2S, H2C, P2S and X2D, 0.6 mm: A$30, In Stock.** The 0.8 mm version is A$30, the High Flow 0.6 mm is A$83 (in stock) and the tungsten-carbide 0.6 mm is A$103 — [3D Printer Gear hotend](https://www.3dprintergear.com.au/bambu-lab-hotend-with-hardened-steel-nozzle-0.6-mm) (redirects to the H2/P2S/X2D product page); [brand listing](https://www.3dprintergear.com.au/brand/bambu-lab/).
- Bambu **TPU 85A** spool (Light Cyan, Neon Orange) **A$69**, In Stock — [3DPG TPU 85A](https://www.3dprintergear.com.au/bambu-lab-tpu-85a-light-cyan-spool).
- Bambu **TPU 90A** Black **A$65**, In Stock; TPU 90A Blaze/Frozen A$92 — [3DPG flexible](https://www.3dprintergear.com.au/filament/shop-by-category/flexible/).
- Bambu **TPU for AMS** Black spool **A$60.99**, In Stock — [3DPG TPU for AMS](https://www.3dprintergear.com.au/bambu-lab-tpu-for-ams-black-spool).
- Bambu TPU 95A HF A$66.99 — [3DPG TPU](https://www.3dprintergear.com.au/tpu/).
- Bambu **PET-CF 0.5 kg A$75.99**, In Stock. A "1 kg" PET-CF listing appears at A$159.99 — [3DPG PET-CF](https://www.3dprintergear.com.au/bambu-lab-pet-cf-carbon-fibre-pet-0.5kg-spool); [3DPG nylon/CF list](https://www.3dprintergear.com.au/filament/shop-by-category/nylon/).
- Bambu **PA6-CF 0.5 kg A$85.99**, In Stock; PAHT-CF 0.5 kg A$89; PETG-CF A$55.99; PLA-CF from A$49.99 — [3DPG PA6-CF](https://www.3dprintergear.com.au/bambu-lab-pa6-cf-carbon-fibre-nylon-0.5kg-spool); [3DPG carbon fibre](https://www.3dprintergear.com.au/filament/shop-by-category/carbon-fibre/).
- Bambu **ASA** spool **A$47.99** (Green, Grey and White in stock; Black and Blue out of stock); ASA Aero A$76.99 — [3DPG ASA](https://www.3dprintergear.com.au/filament/bambu-lab/asa/).
- Bambu PETG HF spool A$37.99 (several colours in stock); PETG HF refill A$32.99 (out of stock) — [3DPG PETG HF](https://www.3dprintergear.com.au/filament/bambu-lab/petg-hf/).
- **AMS HT A$229, In Stock** — [3DPG AMS HT](https://www.3dprintergear.com.au/bambu-lab-ams-ht-automatic-material-system).

**DREMC (Brisbane, online only) — observed directly**
- Third-party (Trianglelab) "Bambu Lab P2S / X2D Hot End (Harden Steel + Nano Coating Nozzle)", available in 0.4 or **0.6 mm**, standard or high flow, all **A$28.95**. The listing says it is a "compatible replacement" with a non-removable nozzle, and that the HF version should avoid filled/chopped-fibre materials — [DREMC hotend](https://store.dremc.com.au/products/bambu-lab-p2s-x2d-hot-end-harden-steel-nano-coating).
- DREMC filament: PETG A$26.95; **TPU 85A A$39.95**; TPU 95A A$39.95; TPU 64D A$33.95; TPU 72D A$33.95; PETG-CF A$44.45; PET-CF 1 kg A$64.95; PA6-CF A$66.45 (out of stock); Polymaker Fiberon PA6-CF20 A$89.95; Polymaker PET-CF17 500 g A$54.95 — [DREMC TPU 85A](https://store.dremc.com.au/products/dremc-tpu-85a-filament-1-75mm-1kg); [DREMC PETG](https://store.dremc.com.au/products/dremc-petg-pro-filament-1-75mm-1kg); [DREMC TPU 64D](https://store.dremc.com.au/products/dremc-tpu-64d-filament-1-75mm-1kg); [DREMC PET-CF](https://store.dremc.com.au/products/dremc-pet-cf-filament-1-75mm-1kg).
- Shipping: from Brisbane; Standard Post "typically 2-10+ business days", Express Post "typically 1-4+ business days"; online only, no pickup (Algester QLD 4115) — [DREMC shipping policy](https://store.dremc.com.au/policies/shipping-policy); [DREMC site footer](https://store.dremc.com.au/pages/contact).

**Elegoo AU official store — observed directly**
- Rapid PETG **A$19.95**/kg; **PETG HF A$20.99**; PETG Pro A$21.99; Rapid PETG 5 kg A$78.00 and 10 kg A$146.95 (≈A$14.70/kg); PETG-CF A$28.99 — [Elegoo Rapid PETG](https://au.elegoo.com/products/rapid-petg-filament-1-75mm-colored-1kg); [Elegoo PETG HF](https://au.elegoo.com/products/petg-hf); [Elegoo 10 kg PETG](https://au.elegoo.com/products/rapid-petg-filament-1-75mm-colored-10kg).
- **TPU 95A A$27.99**; Rapid TPU 95A A$34.99; **TPU 72D A$32.99**; TPU 95A 5 kg A$109. PLA A$19.95; PLA Basic refill from A$18.95 — [Elegoo TPU 95A](https://au.elegoo.com/products/tpu-filament-1-75mm-colored-1kg); [Elegoo TPU 72D](https://au.elegoo.com/products/tpu-72d); [Elegoo PLA](https://au.elegoo.com/products/pla-filament-1-75mm-colored-1kg).
- Shipping: "Orders under A$70 : A$7 Orders over A$70 : Free Shipping". The policy lists two routes, 3–7 business days and 5–17 business days — [Elegoo AU shipping policy](https://au.elegoo.com/policies/shipping-policy).

**Amazon AU (Sydney 2000 delivery location) — observed directly**
- eSUN TPU 95A 1 kg **A$39.09** (was A$54.99) — [Amazon AU B094HN4M9K](https://www.amazon.com.au/dp/B094HN4M9K).
- Siraya Tech Flex **TPU 85A** 1 kg **A$44.07** (4.5★, 375 ratings), "FREE delivery Thu, 8 Oct on your first order" — [Amazon AU B0CP213ZMG](https://www.amazon.com.au/dp/B0CP213ZMG).
- Creality TPU 95A A$35.99 (sponsored); eSUN PLA+ A$26.99–27.26; generic PETG A$22.39–24.99 (sponsored) — [Amazon AU search "tpu 85a filament"](https://www.amazon.com.au/s?k=tpu+85a+filament+1.75); [Amazon AU search "jayo petg"](https://www.amazon.com.au/s?k=jayo+petg+filament+1kg).
- Third-party Bambu PLA refill listings A$31.44 (was A$36.99) — [Amazon AU B0DF7LY9NK](https://www.amazon.com.au/dp/B0DF7LY9NK).
- Commenters on the Bambu deal recommended JAYO filament, with "buy 5 for 3" promotions. One said Jaycar prices suit "a quick local fix" — [OzBargain 975119 comments](https://www.ozbargain.com.au/node/975119).

### Inferences
- **Hotend for TPU 85A:** the genuine Bambu 0.6 mm hardened-steel H2/P2S hotend at 3D Printer Gear (A$30) costs about the same as the US price converted (US$20.99 ≈ A$30.25). It is the safest buy. DREMC's Trianglelab clone (A$28.95) saves little, has a fixed nozzle and is not genuine. Buy two hotends if you will also print carbon-fibre filaments, so one stays dedicated to TPU, as the earlier report advised.
- **Everyday PLA and PETG:** JB Hi-Fi is the simplest Sydney source at A$24–29 per roll. In-store pickup is likely but was not verified. Bambu's AU store is cheaper only on multi-buys of about four or more rolls, or past the A$77 / five-spool free-shipping line. Elegoo AU is the cheapest per kilogram for PETG (A$19.95–20.99, or about A$14.70/kg in a 10 kg box) and is free over A$70.
- **TPU:** for drone mounts and skids, Elegoo's TPU 72D (A$32.99) or DREMC's TPU 64D/72D (A$33.95) cost about half of Bambu's TPU for AMS (A$60.99). Note that only Bambu's TPU for AMS is documented to feed through the AMS. For soft TPU 85A, DREMC (A$39.95) and Siraya Tech (A$44.07, Amazon) cost 35–45% less than Bambu (A$64.99–69).
- **AMS HT:** 3D Printer Gear (A$229, in stock) is slightly cheaper than the AU store's apparent A$239. It is optional for this user; a drying box or the printer's bed dryer is a lower-cost route.
- **Carbon-fibre and ASA:** Bambu PET-CF and PA6-CF are sold in 0.5 kg spools in Australia (A$75.99 and A$85.99 at 3DPG), roughly A$150–170/kg. DREMC's 1 kg PET-CF (A$64.95) is far cheaper per kilogram but has no Bambu datasheet.

### Gaps
- AU-store prices for the H2/P2S hotend, TPU for AMS, PET-CF and PETG HF, and the current ASA price, could not be read: the store geo-redirects non-AU traffic. The snippet prices for TPU 85A/90A, PA6-CF, ASA and AMS HT may predate the September 2026 price cut.
- Whether PETG HF is still sold on the AU store, or has been replaced by "PETG Basic", is unconfirmed (one OzBargain comment only).
- The exact roll counts for the 10%, 20% and 25% multi-buy tiers were not stated in the 15 Sep 2026 post; only 32% is confirmed at 10 rolls.
- Several sites could not be fetched or priced: Polymaker AU (au.polymaker.com: proxy 502; polymaker.com: 403), Sunlu AU (au.store.sunlu.com: 502), Cosmic Filaments (502), PB Tech AU (403) and Ink Station (Cloudflare challenge). Officeworks' and Jaycar's filament ranges were not checked. Amazon AU did not clearly surface JAYO-branded listings.

## 2. Tools, consumables, safety gear and fasteners: best Australian prices by retailer

### Takeaway
A full beginner kit can be bought locally for about A$100, cheaper in AUD than the earlier US list (≈US$96, or ≈A$138). The sources are a Sydney FPV store (NextFPV) for FPV-specific items, Amazon AU for generic tools, DREMC or Core Electronics for heat-set inserts, Bunnings for Loctite and Jaycar for a cheap multimeter or a same-day item. The ViFly ShortSaver 2 is cheapest locally at NextFPV (A$21.99). The ToolkitRC P200 was not found in any reachable Australian store; AliExpress (≈A$116) or a generic A$66 bench supply are the realistic options.

### Cited Findings

**Access notes (affect which retailers could be priced directly)**
- Blocked to automated fetching, so prices below come from search snippets or are missing: jaycar.com.au (HTTP 403), altronics.com.au (reCAPTCHA page), core-electronics.com.au (Cloudflare "Just a moment"), bunnings.com.au (Cloudflare), ebay.com.au (403) and officeworks.com.au (client-side search; one product URL returned 404). The session's egress proxy rejected several Australian FPV stores (HTTP 502 on CONNECT): aussiefpv.com.au, dronesdirect.com.au, mojodrones.com.au, fpvhub.com.au, rcgeeks.com.au and techrabbit.com.au — observed 5 Oct 2026.
- NextFPV shows USD to non-Australian visitors. Its Shopify settings report `{"active":"USD","rate":"0.70761072"}`, and USD prices are rounded up to whole dollars. AUD prices were read from the store's Atom feed, which reports `currency="AUD"`. Items not in the feed are shown below as USD with an AUD range back-calculated from that rate — [NextFPV ShortSaver page](https://www.nextfpv.com/products/vifly-shortsaver-v2-smart-smoke-stopper); [NextFPV tools feed](https://www.nextfpv.com/collections/tools.atom).
- AliExpress search results show two AUD prices per item; the lower one is the current or sale price. An "AU $1.49" price appeared on many unrelated items and looks like a new-user welcome deal, not a normal price — [AliExpress search](https://www.aliexpress.com/w/wholesale-whoop-prop-remover.html?g=y&SearchText=whoop+prop+remover).

**63/37 solder**
- NextFPV 63/37 solder spool, 100 g, 0.8 mm: shown as US$8.00 (≈A$9.90–11.30 by the store's rate); available — [NextFPV solder spool](https://www.nextfpv.com/products/nextfpv-solder-spool-63-37-100g-dia-0-8mm).
- Amazon AU: MAIYUM 63/37 0.8 mm 100 g **A$25.20** (4.6★, 21,515 ratings); SainSmart 63/37 0.8 mm 100 g A$36.49; a 4-pack of 120 g Sn63/Pb37 A$12.99 (10 ratings) — [Amazon AU B076QF1Y85](https://www.amazon.com.au/dp/B076QF1Y85); [B07NW8WZ5G](https://www.amazon.com.au/dp/B07NW8WZ5G); [B0H4FQMW5L](https://www.amazon.com.au/dp/B0H4FQMW5L).
- AliExpress: 63/37 CF-10 50/100 g reel from **AU$6.32–6.35** (2,000+ sold) — [AliExpress 1005008309556064](https://www.aliexpress.com/item/1005008309556064.html).
- Jaycar's "Duratech" solder appears to be 60/40 (0.71 mm 1 kg NS3002 was on clearance at A$49, down from A$119). A 1 mm Duratech 200 g roll was cited at A$29.95. No Jaycar 63/37 product was confirmed — [Jaycar NS3002 (snippet)](https://roadtechm-prod.australia-southeast1.gcp.storefrontcloud.io/0-71mm-duratech-solder-1kg/p/NS3002); [Jaycar NS3010 (snippet)](https://roadtechm-prod.australia-southeast1.gcp.storefrontcloud.io/1mm-duratech-solder-200gm/p/NS3010).

**Flux paste**
- NextFPV: soldering flux paste RMA-223 **A$6.95**; TBS Flux A$9.95 — [NextFPV RMA-223](https://www.nextfpv.com/products/soldering-flux-paste-rma-223); [NextFPV TBS Flux](https://www.nextfpv.com/products/tbs-flux).
- Amazon AU: Essmetuin no-clean flux paste 4-pack A$25.45 (706 ratings); generic 2-jar no-clean A$11.99 — [Amazon AU B0C2L478LM](https://www.amazon.com.au/dp/B0C2L478LM); [B0G64Q3WM7](https://www.amazon.com.au/dp/B0G64Q3WM7).

**Heat-shrink assortment**
- Amazon AU: Ginsco 580-piece 2:1 kit **A$14.99** (4.7★, 20,027 ratings), "FREE delivery Thu, 8 Oct on your first order" — [Amazon AU B01MFA3OFA](https://www.amazon.com.au/dp/B01MFA3OFA).
- Jaycar: WH5520 "The Ultimate Heatshrink Pack" A$22.95; WH5521 glue-lined trade pack (60 pieces) A$49.95 — [Jaycar WH5520 (snippet)](https://jaycar.com.au/p/WH5520); [Jaycar WH5521 (snippet)](https://jaycar.com.au/glue-lined-pre-cut-heatshrink-tubing-trade-pack/p/WH5521).
- NextFPV Heat Shrink Mega Pack, 50 pieces: US$6 (≈A$7.10–8.50) — [NextFPV heat shrink](https://www.nextfpv.com/products/heat-shrink-mega-pack-50pcs).

**Mini hex drivers (1.5 / 2 / 2.5 mm)**
- Amazon AU: Neewer titanium-nitride 4-piece hex driver set **A$17.59** (was A$21.99; 1,489 ratings); HRB 4-piece 1.5/2.0/2.5/3.0 mm A$30.78 (4,362 ratings); generic 4-piece 1.5–3.0 mm A$20.90 (371 ratings) — [Amazon AU B00C7N1DV8](https://www.amazon.com.au/dp/B00C7N1DV8); [B07QGZW57K](https://www.amazon.com.au/dp/B07QGZW57K); [B07FDTQ8LQ](https://www.amazon.com.au/dp/B07FDTQ8LQ).
- DREMC set of 6 metric hex key drivers A$32 — [DREMC hex drivers](https://store.dremc.com.au/products/6-metric-hex-key-drivers-for-3d-printers-allen-keys-by-dremc).
- NextFPV 15-piece "Ultimate FPV Toolkit": US$39, on sale from US$42 (≈A$53.70–55.10) — [NextFPV toolkit](https://www.nextfpv.com/products/15-piece-ultimate-fpv-toolkit).

**Whoop prop remover**
- AliExpress: JU64 2-piece FPV prop removal tool for tiny whoops **AU$4.49** (AU$1.49 promo; 192 sold); BetaFPV-style 1S prop puller AU$8.89–10.10 — [AliExpress 1005009157784624](https://www.aliexpress.com/item/1005009157784624.html); [AliExpress 1005012564984434](https://www.aliexpress.com/item/1005012564984434.html).
- Amazon AU: FPV propeller removal wrench set A$10.11 (no ratings) — [Amazon AU B0FX7JGHW9](https://www.amazon.com.au/dp/B0FX7JGHW9).
- NextFPV stocks the TBS Ethix prop tool (A$26.90), which is aimed at larger props; no whoop-specific remover appeared in its search — [NextFPV Ethix tool](https://www.nextfpv.com/products/tbs-ethix-prop-tool).

**Reverse tweezers**
- Amazon AU: 3-piece precision reverse ceramic tweezers **A$12.99** (20 ratings); ESD stainless precision tweezer set A$6.56 (287 ratings) — [Amazon AU B0C4PMVC4Q](https://www.amazon.com.au/dp/B0C4PMVC4Q); [B0CCXDJ52Z](https://www.amazon.com.au/dp/B0CCXDJ52Z).
- DREMC curved/straight stainless tweezer A$6 — [DREMC tweezer](https://store.dremc.com.au/products/curved-straight-stainless-steel-tweezer).

**Basic digital multimeter**
- Jaycar QM1500 low-cost DMM **A$9.95** (down from A$16.95; A$8.95 each for 3–5) — [Jaycar QM1500 (snippet)](https://jaycar-prod.australia-southeast1.gcp.storefrontcloud.io/low-cost-digital-multimeter-dmm/p/QM1500).
- Amazon AU: AstroAI 2000-count **A$21.99** (was A$25.99; 54,432 ratings) — [Amazon AU B01ISAMUA6](https://www.amazon.com.au/dp/B01ISAMUA6).
- NextFPV ZOYI VC921 auto-ranging: US$18, on sale from US$22 (≈A$24–25.40) — [NextFPV VC921](https://www.nextfpv.com/products/zotek-vc921-handheld-auto-ranging-digital-multimeter-tool).
- Little Bird Electronics lists the same low-cost DMM at A$18.05 — [Little Bird (snippet)](https://littlebirdelectronics.com.au/products/low-cost-digital-multimeter-dmm.md).

**1S LiPo checker (and 1S chargers)**
- NextFPV: BetaFPV BT2.0 Battery Charger and Voltage Tester V2 **A$15.00**, currently out of stock; GT Power cell checker 1S–7S (needs a balance lead) A$19.95; BetaFPV 6-port 1S charger A$19.95; VIFLY WhoopStor 3 1S storage charger/discharger A$56.95 — [NextFPV BT2.0 tester](https://www.nextfpv.com/products/betafpv-bt2-0-battery-charger-and-voltage-tester-v2); [NextFPV GT Power](https://www.nextfpv.com/products/gt-power-battery-cell-checker-tool-1s-8s-with-balancing-function); [NextFPV BetaFPV 1S charger](https://www.nextfpv.com/products/betafpv-6-port-1s-charger); [NextFPV WhoopStor 3](https://www.nextfpv.com/products/vifly-whoopstor-3-1s-battery-storage-charger-and-discharger).
- Amazon AU: sponsored 1S testers for JST/PH plugs A$18.89–20.15 (no reviews); RC Cellmeter 8 (balance-lead type) A$15.99 (232 ratings) — [Amazon AU search](https://www.amazon.com.au/s?k=1s+lipo+battery+checker+voltage+tester); [Amazon AU B0DN1CJ6ZC](https://www.amazon.com.au/dp/B0DN1CJ6ZC).
- AliExpress: VIFLY WhoopStor 3 from AU$34.95 (3,000+ sold) — [AliExpress 1005007823488859](https://www.aliexpress.com/item/1005007823488859.html).

**LiPo safety bag / fire-resistant box**
- Core Electronics LiPo Safety Battery Bag 18×23 cm **A$7.35**; 23×30 cm **A$7.05** — [Core (snippet)](https://core-electronics.com.au/lipo-safety-battery-bag.html); [Core 23×30 (snippet)](https://core-electronics.com.au/lipo-battery-safety-bag-23x30cm.html).
- NextFPV FMR AirSafe Travel Locker LiPo bag: US$10, on sale from US$14 (≈A$12.70–14.10) — [NextFPV LiPo bag](https://www.nextfpv.com/products/fmr-lipo-safe-lipo-bag).
- Amazon AU: Zeee safety battery bag set (1 large + 1 small) A$24.79 (1,840 ratings); a single LiPo guard bag A$12.99 — [Amazon AU B08X2MSWBW](https://www.amazon.com.au/dp/B08X2MSWBW); [B0DRNZ7GDJ](https://www.amazon.com.au/dp/B0DRNZ7GDJ).
- AliExpress LiPo guard bag 215×115×155 mm AU$10.41 (5,000+ sold) — [AliExpress 1005004478094343](https://www.aliexpress.com/item/1005004478094343.html).

**Smoke stopper (ViFly ShortSaver 2)**
- NextFPV **A$21.99**, available — [NextFPV ShortSaver V2](https://www.nextfpv.com/products/vifly-shortsaver-v2-smart-smoke-stopper).
- Amazon AU A$31.55 (4.8★, 629 ratings) — [Amazon AU B088TVVNVM](https://www.amazon.com.au/dp/B088TVVNVM).
- AliExpress VIFLY ShortSaver 2 AU$19.59–24.49 (83 sold, 4.9★) — [AliExpress 1005003677152225](https://www.aliexpress.com/item/1005003677152225.html).
- For comparison, RaceDayQuads (US) sells it at US$17.49 (≈A$25.20 before shipping) — [RDQ](https://www.racedayquads.com/products/vifly-short-saver-2-smoke-stopper-xt30-xt60).
- Passive alternatives at NextFPV: JHEMCU XT30/XT60 smokestopper A$12.95 (out of stock); "Smoke Stopper Tool" XT60 US$7 (≈A$8.50–9.90) — [NextFPV JHEMCU](https://www.nextfpv.com/products/jhemcu-smokestopper-xt30-and-xt60); [NextFPV smoke stopper](https://www.nextfpv.com/products/xt60-smokestopper).

**Current-limited bench power supply**
- ToolkitRC P200 V2 (30 V / 10 A / 200 W) on AliExpress **AU$115.99** (164 sold, 4.9★) — [AliExpress 1005007476534950](https://www.aliexpress.com/item/1005007476534950.html).
- In the US, RaceDayQuads lists the P200 at US$95.99 (≈A$138.33) — [RDQ P200](https://www.racedayquads.com/products/toolkitrc-p200-v2-mini-30v-10a-200w-adjustable-power-supply-xt60).
- The P200 was not in NextFPV's ToolkitRC collection (only the M6 charger at A$49.95 and the ST8 at A$94.95) and did not appear in Amazon AU search — [NextFPV ToolkitRC feed](https://www.nextfpv.com/collections/toolkitrc.atom); [Amazon AU search](https://www.amazon.com.au/s?k=toolkitrc+p200).
- Generic 0–30 V / 0–10 A lab bench supply on Amazon AU **A$66.49** (was A$69.99; 71 ratings) — [Amazon AU B09KXXXQRC](https://www.amazon.com.au/dp/B09KXXXQRC).
- Jaycar MP3840 0–30 VDC / 0–5 A regulated lab supply with adjustable current limit A$259.00 — [Jaycar MP3840 (snippet)](https://jaycar.com.au/p/MP3840).

**Brass heat-set inserts (M2/M3)**
- DREMC M3 brass knurled inserts: 20 pieces A$6–7, 50 pieces A$10.95, **100 pieces A$18.95**. The LDO Heat Insert Tool Kit (soldering-iron tip plus 50 × M3×5×4 inserts) costs **A$13.95**; CNC Kitchen inserts start at A$17.50 — [DREMC M3 inserts](https://store.dremc.com.au/products/m3-brass-threaded-knurled-heat-insert); [DREMC LDO kit](https://store.dremc.com.au/products/ldo-heat-insert-tool-kit); [DREMC CNC Kitchen](https://store.dremc.com.au/products/cnc-kitchen-metric-brass-threaded-heat-set-insert).
- Core Electronics: Adafruit M3×4 mm 50-pack A$12.05; M3×3 mm 50-pack A$12.15; M2–M6 300-piece kit A$28.40 — [Core kit (snippet)](https://core-electronics.com.au/heat-set-insert-nut-for-3d-prints-m2-m3-m4-m5-m6-kit-300pcs.html); [Core M3×4 (snippet)](https://core-electronics.com.au/brass-heat-set-inserts-for-plastic-m3-x-4mm-50-pack.html).
- Amazon AU: 388-piece M2–M8 kit A$23.99; 300-piece M2–M6 A$21.59 (sponsored) — [Amazon AU B0G423B5BD](https://www.amazon.com.au/dp/B0G423B5BD).
- AliExpress M2–M8 inserts from AU$2.89 per pack (50,000+ sold) — [AliExpress 1005003582355741](https://www.aliexpress.com/item/1005003582355741.html).

**M2/M3 screw and nut assortments**
- Amazon AU: 1,080-piece M2/M3/M4 stainless socket-head screw, nut and washer kit **A$22.39** (63 ratings); Glarks 560-piece M2/M3 pan-head kit A$20.99 (196 ratings, sponsored) — [Amazon AU B0CJ3GB47W](https://www.amazon.com.au/dp/B0CJ3GB47W); [Amazon AU search](https://www.amazon.com.au/s?k=m2+m3+screw+nut+assortment+kit).
- AliExpress 304 stainless socket-head screws, M2–M8, from AU$2.34 per pack — [AliExpress 1005006385690832](https://www.aliexpress.com/item/1005006385690832.html).

**Kapton tape**
- DREMC Kapton tape **A$7.95** — [DREMC Kapton](https://store.dremc.com.au/products/kapton-tape-foil-tape-for-3d-printer-bed-thermistor).
- Amazon AU: skycabin Kapton 20 mm × 33 m A$11.96 (56 ratings); skycabin smaller roll A$7.90 — [Amazon AU B09B3SQY5X](https://www.amazon.com.au/dp/B09B3SQY5X); [B0912LJ5N9](https://www.amazon.com.au/dp/B0912LJ5N9).

**Thread locker**
- Bunnings Loctite 243 10 ml **A$17.40** (I/N 1560362); click & collect available — [Bunnings (snippet)](https://www.bunnings.com.au/loctite-243-10ml-adhesive-threadlocker_p1560362).
- Amazon AU "243 Threadlocker" medium-strength listing A$18.99 (2,595 ratings) — [Amazon AU B00BYV0Q58](https://www.amazon.com.au/dp/B00BYV0Q58).

**Zip ties and superglue**
- Amazon AU: Cable Matters 200-pack cable ties (15/20/30 cm) A$12.99; 300-piece assorted A$10.99 — [Amazon AU B00L2LGMO4](https://www.amazon.com.au/dp/B00L2LGMO4); [B07GQNC8BJ](https://www.amazon.com.au/dp/B07GQNC8BJ).
- Amazon AU: super glue gel 3 g 2-pack A$9.29 (487 ratings); 15 g gel A$9.54 — [Amazon AU B08C14X75K](https://www.amazon.com.au/dp/B08C14X75K); [B08C157GMH](https://www.amazon.com.au/dp/B08C157GMH).

**USB-C data cable and USB-C OTG adapter**
- JB Hi-Fi: UGREEN USB 3.0 (USB-A) to USB-C 1 m cable **A$9.95**; XCD USB-C to USB-C 1 m A$15.00; Pioneer braided USB-C to USB-C "Charging Data Cable" A$16.01 — [JB UGREEN](https://www.jbhifi.com.au/products/ugreen-usb-3-0-to-usb-c-cable-1m-black); [JB XCD](https://www.jbhifi.com.au/products/xcd-usb-c-to-usb-c-cable-1m); [JB Pioneer](https://www.jbhifi.com.au/products/pioneer-usb-c-braided-cable-1m-usb-c-to-usb-c-charging-data-cable).
- Amazon AU: UGREEN 100 W USB-C to USB-C 1 m A$12.74 (16,685 ratings) — [Amazon AU B07Z8QGV4H](https://www.amazon.com.au/dp/B07Z8QGV4H).
- Amazon AU: **UGREEN USB-C to USB-A (OTG) adapter, 2-pack, A$10.99** (16,979 ratings), "FREE delivery Fri, 9 Oct on your first order" — [Amazon AU B0B9N3QSL3](https://www.amazon.com.au/dp/B0B9N3QSL3).
- Officeworks lists a Satechi "USB-A to USB-C Adapter" at A$17.99, which turns a USB-A port into USB-C. JB Hi-Fi lists a similar Satechi adapter at A$17.00 — [Officeworks (snippet)](https://www.officeworks.com.au/shop/officeworks/p/satechi-usb-a-to-usb-c-adapter-sttaucs); [JB Satechi](https://www.jbhifi.com.au/products/satechi-aluminium-usb-a-to-usb-c-adapter-space-grey).

### Inferences
- **Cheapest sensible AU basket, equivalent to the earlier US list** (solder, flux, heat-shrink, hex drivers, whoop prop remover, reverse tweezers, 1S checker, LiPo bag): about **A$100**:

  | Item | Source | Price |
  |---|---|---|
  | Solder | NextFPV | ≈A$11 |
  | Flux | NextFPV | A$6.95 |
  | Heat-shrink | Amazon | A$14.99 |
  | Hex drivers | Amazon | A$17.59 |
  | Prop remover | Amazon | A$10.11 |
  | Reverse tweezers | Amazon | A$12.99 |
  | 1S tester | Amazon | ≈A$18.95 |
  | LiPo bag | Core | A$7.35 |

  Add a multimeter (A$9.95 Jaycar sale or A$21.99 AstroAI) and a ShortSaver 2 (A$21.99 NextFPV). The US list was ≈US$96 ≈ A$138 before shipping, so buying locally is not a penalty for this category.
- **A US-sourced kit costs more:** the US list was about US$96, roughly A$138 before shipping and GST.
- **AliExpress halves some prices** (solder A$6, prop tool A$4.50, inserts A$3, ShortSaver ≈A$20), but delivery takes 1–2 weeks. Use it for non-urgent fasteners and inserts only.
- **Bench supply:** the P200 was not found in any reachable AU store. The A$66 generic 30 V/10 A bench supply on Amazon AU does the same current-limiting job for a first power-up. The AliExpress P200 (≈A$116) is more compact and has XT60 output.
- **ShortSaver 2 is 2–6S only:** for first power-up of a 1S ESP32 micro, use the bench supply's current limit instead, as the earlier report advised.
- **OTG adapter direction:** for a USB-C phone, the adapter must have a USB-C *plug* and a USB-A *socket*. The Satechi "USB-A to USB-C" adapters at Officeworks and JB appear to be the reverse type. The UGREEN USB-C-to-USB-A 2-pack (A$10.99) is the right type.

### Gaps
- Jaycar, Altronics, Core Electronics, Bunnings, Officeworks and eBay AU could not be browsed directly. Their prices here are search snippets of unknown date, or missing. Missing items:
  - Jaycar: flux paste, Kapton, tweezers, hex drivers and screw kits
  - Altronics: everything
  - Bunnings: zip ties, superglue and multimeters
  - eBay AU: everything
- No Jaycar 63/37 solder was confirmed; the Duratech line appears to be 60/40.
- NextFPV's AUD prices for items outside its Atom feed (solder, heat-shrink, VC921, LiPo bag, toolkit, XT60 smoke stopper) are back-calculated ranges. NextFPV's physical location and pickup option were not confirmed; a search snippet implies it is Sydney-based.
- No reviewed whoop-specific 1S checker with PH2.0/BT2.0 plugs was found in stock in Australia: the BetaFPV tester at NextFPV is out of stock, and the Amazon listings have no reviews.
- Several Australian FPV retailers were blocked by the egress proxy and are unpriced: Aussie FPV, Drones Direct, Mojo Drones, FPV Hub, RC Geeks and Techrabbit.

## 3. Buying strategy from Sydney in 2026: local stores vs Australian online vs overseas, thresholds, delivery times, GST, lithium-battery shipping, secondhand

### Takeaway
Buy batteries and anything urgent in Australia: Sydney click & collect (Jaycar in as little as an hour, Bunnings) or Australian online stores with free-shipping thresholds. Thresholds include Amazon AU A$59 on eligible items, Elegoo A$70, Bambu A$77 or five spools, and NextFPV A$150. Use AliExpress (GST added at checkout, roughly 7–12 days) only for cheap non-battery parts. LiPos cannot travel loose by air: Australia Post and couriers carry them by road only, and overseas sellers generally cannot air-mail them. DigiKey and Mouser ship free to Australia above about A$60.

### Cited Findings

**GST on imports**
- Since 1 July 2018, GST applies to low-value imported goods (customs value A$1,000 or less) sold to Australian consumers. Overseas sellers, electronic distribution platforms (marketplaces) and re-deliverers with GST turnover of A$75,000 or more must collect it at the time of sale. The marketplace operator has first liability, then the merchant, then the re-deliverer — [ATO, GST on low value imported goods (snippet; ato.gov.au returned 403)](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-on-imported-goods-and-services/gst-on-low-value-imported-goods).
- The ATO says GST may be included in the advertised price, added at checkout or shown on the receipt. Shipping and insurance are part of the price on which GST is calculated — [ATO, Australian consumers importing goods and services (snippet)](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-on-imported-goods-and-services/australian-consumers-importing-goods-and-services).
- A search summary states that "AliExpress adds 10% GST at the checkout". Its underlying source was an IceInSpace forum thread, not AliExpress or the ATO — [IceInSpace (snippet)](https://www.iceinspace.com.au/forum/showthread.php?p=1502885).
- An OzBargain AliExpress coupon poster (2025) recommends "paying in USD, as that's the currency AliExpress trade in and their AU rate will fluctuate". This is an opinion, not an official policy — [OzBargain 918557](https://www.ozbargain.com.au/node/918557).

**AliExpress delivery and coupons**
- AliExpress Choice orders are consolidated at a Cainiao warehouse and flown on faster lanes. A delivery commitment applies, with a coupon if the order is late. Choice to Australia "typically takes 7-12 days"; items shipped from Australian warehouses take 2–5 business days. These figures come from third-party guides, not AliExpress — [findniche (snippet)](https://findniche.com/blog/aliexpress-shipping-time); [Parcel Monitor (snippet)](https://www.parcelmonitor.com/blog/aliexpress-shipping-time-tracking).
- AliExpress runs tiered coupon sales on Choice items, for example "US$2 off US$14 … US$35 off US$279" for the 1 Nov 2025 Mega Choice sale — [OzBargain 930657](https://www.ozbargain.com.au/node/930657).

**Australian online stores: thresholds and delivery**
- **Amazon AU:** "Free Delivery within Australia on eligible orders over $59". Eligible items are sold or fulfilled by Amazon AU and show "FREE Delivery" messaging — [Amazon AU help, observed 5 Oct 2026](https://www.amazon.com.au/gp/help/customer/display.html?nodeId=GZXW7X6AKTHNUP6H).
  - With a Sydney 2000 address, many tool listings showed "FREE delivery Thu, 8 Oct on your first order" when checked on Mon 5 Oct — [Amazon AU search](https://www.amazon.com.au/s?k=heat+shrink+tubing+assortment+kit).
  - Conflicting source: an Internet Retailing article reported the threshold falling to A$39 from A$49, with metro delivery in 3–5 business days. The article is undated in the snippet and conflicts with Amazon's current A$59 help page — [Internet Retailing (snippet)](https://internetretailing.com.au/amazon-lowers-free-shipping-threshold/).
- **DigiKey AU:** free delivery on orders of A$60 or more, otherwise a A$24 charge; typically delivered within 4 days. Terms are CPT, meaning "Duty, customs, and applicable VAT/Tax due at time of delivery" — [DigiKey AU (snippet; digikey.com.au returned 403)](https://www.digikey.com.au/en/maker/search-results?pn=3523678).
- **Mouser AU:** "free shipping on most orders over AUD $60" — [Mouser AU (snippet)](https://au.mouser.com/wi2wi).
- **Core Electronics (Newcastle):**
  - Dispatches Monday–Friday (excluding NSW public holidays), the same business day if ordered before 2 PM.
  - Standard shipping costs A$7+ for 5+ days, tracked; Express costs A$11+ for 2+ days.
  - eParcel Express is "typically a 1-day service within the AusPost next-day network" when ordered before 2 PM AEST Mon–Thu.
  - Free pickup is available in Newcastle only — [Core Electronics customer service (snippet)](https://core-electronics.com.au/customer-service).
  - Batteries such as LiPos "can't be shipped by Air"; Express Post and international methods are unavailable when one is in the cart — [Core Electronics (snippet)](https://core-electronics.com.au/dji-fpv-ac-power-adapter.html).
- **NextFPV:** "Free AU delivery for orders over $150"; "Order before 2.30pm AEST for same day shipping". NextFPV advises customers outside greater Sydney not to choose express/air shipping for orders containing lithium batteries — [NextFPV shipping policy](https://www.nextfpv.com/policies/shipping-policy); [NextFPV LiPo collection (snippet)](https://www.nextfpv.com/collections/lipo-battery?page=3).
- **Elegoo AU:** A$7 shipping under A$70, free over A$70; 3–7 or 5–17 business days depending on route — [Elegoo AU shipping](https://au.elegoo.com/policies/shipping-policy).
- **DREMC (Brisbane):** Standard Post 2–10+ business days, Express 1–4+ business days; no pickup — [DREMC shipping](https://store.dremc.com.au/policies/shipping-policy).
- **Bambu AU store:** A$8 delivery, A$0 with a A$77 order, and free with five or more spools (Sep 2026) — [OzBargain 975119](https://www.ozbargain.com.au/node/975119).

**Sydney stores and pickup**
- **Jaycar:** "Click and Collect is available from all company owned Jaycar stores, and your order will be available in as little as 1 hour". Sydney-area stores include Chippendale (Central Park Mall), Wetherill Park and Castle Hill — [Jaycar click & collect (snippet)](https://www.jaycar.com.au/click-and-collect); [Whitepages Chippendale](https://www.whitepages.com.au/jaycar-electronics-pty-ltd-10050134/chippendale-nsw-12786116B); [Whitepages Castle Hill](https://www.whitepages.com.au/jaycar-electronics-pty-ltd-10050134/castle-hill-nsw-12859411B).
- **Altronics:** "11 electronics stores around Australia", with a NSW listing at 15 Short Street, Auburn NSW 2144. The search summary also describes sales offices and distribution centres in Sydney. Whether Auburn is a retail counter with pickup was not verified — [Altronics about (snippet)](https://www.altronics.com.au/about); [Altronics store locations (snippet)](https://altronics.com.au/storelocations); [Whitepages Auburn](https://www.whitepages.com.au/altronics-10061721/auburn-nsw-10333653B).
- **Bunnings:** offers Click & Collect, in-store and delivery for Loctite 243 — [Bunnings (snippet)](https://www.bunnings.com.au/loctite-243-10ml-adhesive-threadlocker_p1560362).

**Lithium-battery transport rules**
- **Australia Post quick reference guide** (PDF, modified 12 Apr 2024):
  - Lithium-ion cells may be mailed up to 20 Wh, and batteries up to 100 Wh.
  - Li-ion up to 100 Wh *installed in equipment* may go by air and surface (international or domestic) and by domestic road. Air and international sea mail is limited to 2 batteries or 4 cells.
  - Li-ion *packed alongside equipment or by itself* is ✖ for air and surface and ✔ for domestic road only. It "Must have Australia Post Road Transport Only label" and is "Domestic mail only".
  - Li-ion over 100 Wh is ✖ for all services.
  - Packing: batteries must be "protected against short circuiting" and enclosed in inner packaging, with strong outer packaging — [AusPost lithium batteries quick reference guide](https://auspost.com.au/content/dam/auspost_corp/media/documents/lithium-batteries-quick-reference-guide.pdf).
- **Australia Post web page (5 Oct 2026):**
  - "Lithium batteries can only be sent internationally (air or sea), or domestically by air if the battery or cell (maximum of two batteries or four individual cells) are installed in the device".
  - Recalled or damaged batteries are prohibited.
  - The page also says "Under no circumstances should lithium batteries be packed by themselves, or alongside a device". This conflicts with the PDF's road-only allowance for loose batteries; the web page may be consumer guidance and the PDF the network rule — [AusPost dangerous and prohibited items](https://auspost.com.au/sending/check-sending-guidelines/dangerous-prohibited-items).
- **CouriersPlease:** "Lithium Batteries can be shipped by road only within Australia". Labels must show UN3480 (battery only) or UN3481 (packed in or with equipment). CouriersPlease does not carry lithium batteries "of any description via air anywhere within Australia or internationally". Its dangerous-goods service is "for pre-approved EDI customers only" — [CouriersPlease dangerous goods](https://www.couriersplease.com.au/dangerous-goods).
- **International shipping of loose cells:** loose UN3480 lithium-ion batteries are barred from passenger aircraft. When carried on cargo aircraft they are limited to a 30% state of charge with "Cargo Aircraft Only" labels — [US Federal Register 2017 (snippet)](https://www.govinfo.gov/content/pkg/FR-2017-07-26/html/2017-15624.htm); [DHL AU lithium battery checklist (snippet)](https://www.dhl.com/discover/en-au/logistics-advice/import-export-advice/lithium-batteries-dangerous-goods-checklist).

**Secondhand**
- General marketplace advice (Gumtree, Facebook Marketplace, eBay):
  - Inspect items in person before paying.
  - Be wary of prices "far below market value", fake bank-transfer screenshots and SMS/WhatsApp links offering "Gumtree delivery".
  - These tips come from a non-government article — [qbank (snippet)](https://qbank.com.au/latest-news/articles/how-to-avoid-marketplace-scams-in-australia/).
  - NSW Police publishes a "Swap Smart" fact sheet on safe trading, but it returned 403 and was not read — [NSW Police Swap Smart (not fetched)](https://www.police.nsw.gov.au/__data/assets/pdf_file/0005/778586/15397_Crime_Prevention_Fact_Sheet_-_Swap_Smart.pdf).
- For used camera drones, a forum user warns that a drone still bound to the previous owner's DJI account can cause problems, and that "the only true test is to fly the thing" — [MavicPilots (snippet)](https://mavicpilots.com/threads/newbie.151669/post-1702219).

### Inferences
- **LiPos:** buy from Australian hobby stores, ideally Sydney-based such as NextFPV, and choose standard road delivery. Sydney metro orders arrive quickly by road; interstate orders take several days because Express Post (air) is not allowed. Overseas sellers (AliExpress, US stores) effectively cannot air-mail loose LiPos to Australia.
- **Battery size limits are no obstacle:** 1S whoop packs (≈1–2 Wh) and 6S 1,300 mAh packs (≈29 Wh) are well under the 20 Wh-per-cell and 100 Wh-per-battery limits. The obstacle is the road-only rule, not size.
- **Suggested buying order for a Sydney beginner:**
  1. Same day (Jaycar or Bunnings click & collect; JB Hi-Fi stores likely but unverified): multimeter, Loctite, cables, PLA/PETG.
  2. Next day to a few days (NextFPV, DREMC, Core): FPV-specific tools, ShortSaver, inserts. Combine orders to pass the free-shipping thresholds.
  3. Amazon AU: generic tools, batched over A$59 or using the first-order free delivery.
  4. AliExpress (1–2+ weeks): bulk fasteners, inserts and spare props.
- **DigiKey and Mouser** suit component orders over A$60. DigiKey's CPT terms suggest import charges may be payable on delivery.
- **Secondhand radios:** buy in person and power the radio on before paying. Check that the gimbals and switches move every channel in the radio's channel or input display, confirm the protocol module (for example ELRS), and check the condition of the internal battery. Avoid shipping-only deals with bank transfer.

### Gaps
- How goods over A$1,000 are taxed (GST and duty at the border, import processing charges) was not researched with a primary source, and the ATO site blocked fetching.
- Whether DigiKey and Mouser collect GST at checkout for Australian orders under A$1,000 is unconfirmed: the DigiKey snippet says taxes are due on delivery under CPT terms.
- No primary AliExpress page confirming Australian delivery times or how GST is shown was read.
- Amazon Prime AU's price and benefits, and JB Hi-Fi's delivery and click & collect fees, were not checked.
- Core Electronics' free-shipping threshold (if any) was not found.
- Altronics' Sydney retail pickup is unconfirmed.
- eBay AU, Gumtree and Facebook Marketplace could not be browsed: 403, or a login is required. No data was gathered on typical secondhand radio or drone prices.

## 4. LiPo battery disposal and recycling in Sydney/NSW

### Takeaway
Never bin a LiPo. Tape the leads and terminals, store the battery in a non-airtight glass or fire-resistant container, and take loose, removable batteries under 5 kg to a free B-cycle drop-off; NSW EPA says many supermarkets, hardware stores and electronics shops host them. Larger removable batteries (under 20 kg) and some embedded batteries can go free to NSW Community Recycling Centres. Swollen or damaged packs need a call to the council or transfer station first.

### Cited Findings
- **B-cycle:**
  - Drop-off is "100% free for everyday Australians". There is a "5kg Drop off limit", and if you have "more than 1 kg of batteries, please call the Drop off point" first — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).
  - It accepts "small, loose and easily removable batteries", including "rechargeable batteries and power banks", power-tool batteries and e-bike/e-scooter batteries — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).
  - It does not accept batteries from vapes, solar panels, home energy storage systems or caravans, or batteries embedded in devices — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).
  - Preparation: tape terminals with clear sticky tape, "store them in a fire-resistant container like a glass jar", and take them to a B-cycle drop-off point — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).
  - "Badly damaged, swollen or bulging batteries" should go in a "non-airtight glass container"; contact the local council or transfer station to see whether it can accept them — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).
  - "95% of Australians live within 15 minutes drive of a Drop off point" — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).
- **NSW EPA "Never bin a battery":**
  - "Loose battery recycling under 5kg falls under … B-cycle". Loose batteries "can be dropped off at many supermarkets, hardware stores and electronics shops"; tape them with clear sticky tape and keep them "in a ventilated, glass container" — [NSW EPA Never bin a battery](https://www.epa.nsw.gov.au/your-environment/recycling-and-reuse/never-bin-a-battery).
  - "Large removable household batteries that are less than 20kg can be taken to a Community Recycling Centre (CRC) or Household Chemical CleanOut (HCC) events for free disposal" — [NSW EPA Never bin a battery](https://www.epa.nsw.gov.au/your-environment/recycling-and-reuse/never-bin-a-battery).
  - The EPA "offers free collection of embedded batteries at select Community Recycling Centres" — [NSW EPA Never bin a battery](https://www.epa.nsw.gov.au/your-environment/recycling-and-reuse/never-bin-a-battery).
- **NSW Community Recycling Centres:**
  - CRCs are "permanent drop-off centres for common household problem wastes … free of charge". There are "more than 100 CRCs open in NSW" — [NSW EPA CRCs](https://www.epa.nsw.gov.au/Your-environment/Recycling-and-reuse/household-recycling-overview/community-recycling-centres).
  - Household quantities only: "a maximum container of 20 litres or 20 kilograms for each waste type" — [NSW EPA CRCs](https://www.epa.nsw.gov.au/Your-environment/Recycling-and-reuse/household-recycling-overview/community-recycling-centres).
  - Most CRCs are open to all NSW residents; Leichhardt and Cumberland are the exceptions — [NSW EPA CRCs](https://www.epa.nsw.gov.au/Your-environment/Recycling-and-reuse/household-recycling-overview/community-recycling-centres).
  - Search tool: [Find CRCs or Chemical CleanOuts](https://www.epa.nsw.gov.au/Your-environment/Recycling-and-reuse/household-recycling-overview/community-recycling-centres).
- **Why not the bin:** used batteries "can be crushed or damaged during collection and processing, causing sparks and fires" — [B-cycle FAQs](https://bcycle.com.au/resources/faqs/).

### Inferences
- Drone LiPos (1S whoop packs, 4–6S packs) are loose, removable rechargeable batteries, so healthy retired packs fit B-cycle. Tape the bare connector or lead ends, not just the cell body, so they cannot short in the collection bin.
- Puffed or damaged packs should not go in a shop's B-cycle bin. Keep them in a glass container outdoors and phone a CRC or the council first.
- Collecting packs until you have about 1 kg, then calling ahead, avoids being turned away at small drop-off points.

### Gaps
- The B-cycle drop-off locator and individual Sydney CRC addresses and opening hours were not retrieved. These are interactive map tools.
- Whether specific Sydney retailers' B-cycle bins accept hobby LiPo packs with bare leads was not confirmed.
- No official NSW guidance on discharging LiPos before recycling was found. B-cycle and the EPA only say to tape terminals and use a glass or fire-resistant container.
