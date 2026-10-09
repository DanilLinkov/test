# AliExpress shipping checks: loose 1S LiPo packs (952540, 1000 mAh) to Sydney NSW, October 2026

All AliExpress data below was captured live on 2026-10-09 between 00:02 and 00:38 UTC (11:02 to 11:38 AEDT) with the AliExpress ship-to set to Australia / New South Wales / Sydney and currency AUD. Prices are AliExpress's own displayed AUD figures. Each item page carried the AliExpress note "Tax excluded, add at checkout if applicable", so GST is not included in any price below.

## 1. What shipping methods, prices and delivery estimates does AliExpress return for each listing when the destination is Sydney, NSW? Does any listing say it can't be shipped?

### Takeaway
All six target listings can be shipped to Sydney, NSW. None showed "can't be shipped to your address" or any similar message. Each offered exactly one shipping method, from China, and it was never AliExpress Standard Shipping or any Cainiao service:
- Three use **"YFH Special Standard"**, shown as "Standard": AU$6.62 to AU$7.91, 15 to 22 days (delivery Oct 24 - 31 for a 9 Oct order), "Tracking available".
- Three use **"Seller's Shipping Method"**, shown as "Other": AU$6.62 to AU$7.91, a fixed 60-day estimate (delivery Dec. 08), "Tracking unavailable".

One pack costs about AU$13.40 to AU$16.80 delivered, before GST.

### Cited Findings

#### Per-listing results (ship-to Sydney, NSW; quantity 1; one-pack SKU selected)

| Listing | Store (positive feedback) | SKU tested, item price | Shipping method(s) returned | Shipping fee | Delivery estimate shown | Tracking | Ships from |
|---|---|---|---|---|---|---|---|
| [1005007322229008](https://www.aliexpress.com/item/1005007322229008.html) | ZN BATTERY Store (93.1%) | "1PCS battery" AU$6.99 (the page opens on the "only Charger" SKU at AU$3.90) | One option only: "Other" = **Seller's Shipping Method** | **AU$6.62** | "Delivery: Dec. 08" (deliveryDayMin = Max = 60 days) | "Tracking unavailable" | China |
| [1005010048131612](https://www.aliexpress.com/item/1005010048131612.html) | MLMTEY Store (94.2%) | "1pcs battery" AU$6.69 (was AU$8.58) | One option only: "Other" = **Seller's Shipping Method** | **AU$7.91** | "Delivery: Dec. 08" (60 days) | "Tracking unavailable" | China |
| [1005007341566219](https://www.aliexpress.com/item/1005007341566219.html) | Yalvboats Store (94.3%) | "1pcs" AU$6.91 (was AU$9.87) | One option only: "Standard" = **YFH Special Standard** (code `YFH_SSG_STANDARD`) | **AU$7.91** | "Delivery: Oct 24 - 31" (15-22 days) | "Tracking available" | China |
| [4001344912951](https://www.aliexpress.com/item/4001344912951.html) | Battery-Parts Store (95.4%) | "1PCS" AU$6.59 (the page opens on the "XH plug" SKU at AU$4.39) | One option only: "Standard" = **YFH Special Standard** | **AU$7.91** | "Delivery: Oct 24 - 31" (15-22 days) | "Tracking available" | China |
| [1005011838295589](https://www.aliexpress.com/item/1005011838295589.html) | DS BATTERY Store (93.9%) | Default SKU "Color: Blue", AU$6.80 (was AU$8.72); its thumbnail shows a single pack. SKUs are named by colour (AU$6.80 to AU$30.99) | One option only: "Standard" = **YFH Special Standard** | **AU$6.62** | "Delivery: Oct 24 - 31" (15-22 days) | "Tracking available" | China |
| [4001120107600](https://www.aliexpress.com/item/4001120107600.html) | Limskey Store (94.9%) | Fee captured on the default "usb" SKU (AU$3.28) and the "3battery" SKU (AU$14.69); the "1battery" SKU is AU$8.89 | One option only: "Other" = **Seller's Shipping Method** | **AU$7.91** (same for both SKUs) | "Delivery: Dec. 08" (60 days) | "Tracking unavailable" | China |

Sources for the table: each listing's own AliExpress item page (linked in the first column), read through the page's data call `mtop.aliexpress.pdp.pc.query` and the SKU-switch call `mtop.aliexpress.pdp.pc.adjust`, and the "Shipping method" pop-up the page opens when you click the shipping line. Exact pop-up text examples:
- 1005010048131612: "Shipping method / Other: AU$7.91 / Delivery: Dec. 08 / Tracking unavailable" — [AliExpress item page](https://www.aliexpress.com/item/1005010048131612.html)
- 1005007322229008, with the 1PCS battery SKU selected: "Shipping method / Other: AU$6.62 / Delivery: Dec. 08 / Tracking unavailable" — [AliExpress item page](https://www.aliexpress.com/item/1005007322229008.html)
- 1005007341566219: "Shipping method / Standard: AU$7.91 / Delivery: Oct 24 - 31 / Tracking available" — [AliExpress item page](https://www.aliexpress.com/item/1005007341566219.html)
- 4001344912951: "Shipping method / Standard: AU$7.91 / Delivery: Oct 24 - 31 / Tracking available" — [AliExpress item page](https://www.aliexpress.com/item/4001344912951.html)
- 1005011838295589: "Shipping method / Standard: AU$6.62 / Delivery: Oct 24 - 31 / Tracking available". The page header showed the ship-to as "Sydney/EN/ AUD" with the Australian flag. — [AliExpress item page](https://www.aliexpress.com/item/1005011838295589.html)
- 4001120107600, with the "3battery" SKU selected: "Shipping method / Other: AU$7.91 / Delivery: Dec. 08 / Tracking unavailable" — [AliExpress item page](https://www.aliexpress.com/item/4001120107600.html)

#### Raw fields behind the display (from `mtop.aliexpress.pdp.pc.query`)
- 1005007322229008: `company` "Seller's Shipping Method", `deliveryOptionCode` "Other", `formattedAmount` "AU$6.62", `deliveryDate` "Dec. 08", `deliveryDayMin` 60, `deliveryDayMax` 60, `tracking` "invisible", `shipFrom` "China", `shipTo` "Sydney", `freightCommitDay` "75". Internal logistics tag `aplLogisticsAttribute` "SENSITIVE". The fee and the 60-day estimate were the same for the "only Charger" SKU and the "1PCS battery" SKU, and the same again in an earlier Australia-level (no state or city) query. — [AliExpress item page](https://www.aliexpress.com/item/1005007322229008.html)
- 1005010048131612: `company` "Seller's Shipping Method", AU$7.91, 60 to 60 days, `tracking` "invisible", `aplLogisticsAttribute` "GENERAL". — [AliExpress item page](https://www.aliexpress.com/item/1005010048131612.html)
- 1005007341566219: `company`/`deliveryProviderName` "YFH Special Standard", `deliveryOptionCode` "YFH_SSG_STANDARD", AU$7.91, `deliveryDayMin` 15, `deliveryDayMax` 22, `displayEtaMinDate` "Oct. 24", `displayEtaMaxDate` "Oct. 31", `tracking` "visible", `aplLogisticsAttribute` "SENSITIVE", ETA source `ALGORITHM`. — [AliExpress item page](https://www.aliexpress.com/item/1005007341566219.html)
- 4001344912951: the same YFH Special Standard values: AU$7.91, 15 to 22 days, tracking visible, "SENSITIVE". — [AliExpress item page](https://www.aliexpress.com/item/4001344912951.html)
- 1005011838295589: YFH Special Standard, `formattedAmount` "AU$6.62", 15 to 22 days, tracking visible, `aplLogisticsAttribute` "SENSITIVE". Its compliance box carries a different text: "WARNING: Before using this vehicle, check the applicable local laws relating to your intended use of the vehicle on roads and road related areas. Do not dispose of this vehicle or components of this vehicle in household or kerbside garbage bins…". — [AliExpress item page](https://www.aliexpress.com/item/1005011838295589.html)
- 4001120107600: Seller's Shipping Method, AU$7.91, 60 to 60 days, tracking invisible. The internal tag changed with the SKU, "GENERAL" for "usb" and "SPECIAL" for "3battery", but the fee and estimate stayed the same. — [AliExpress item page](https://www.aliexpress.com/item/4001120107600.html)
- Every SHIPPING block had `hideDelivery: false` and `systemFeature: {"hideShipFrom": true}`. Each listing had only one ship-from location (China), and no Ships From selector was shown. — the six item pages above
- The page's text bundle includes the string "This Supplier/Shipping Company does not deliver to your selected Country/Region." (key `CAN_NOE_DELIVER_NOTE`). None of the loaded listings displayed it. — [AliExpress item page](https://www.aliexpress.com/item/1005010048131612.html)
- With the destination set to Australia, most battery item pages carried a "Statement of compliance" box: "Disclaimer: Please refer to the Product Safety Australia website for product safety information on lithium-ion battery products. See https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide." That covers 4 of the 6 target listings (1005007322229008, 1005010048131612, 1005007341566219, 4001344912951) and the BETAFPV, TATTU and 1005013322072381 comparison packs. 1005011838295589 showed a vehicle-disposal warning instead, and 4001120107600 and the GY-91 board showed no compliance box. — [AliExpress item page](https://www.aliexpress.com/item/1005007341566219.html); [Product Safety Australia guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide)

#### Search-level data for all six listings (AU search; no captcha on search pages)
On the AliExpress search "1s lipo 952540" with ship-to AU, all six target listings appear with AUD prices. Each card's trace shows `"shipFrom":"CN"` and `isChoice: false`, and none carries a "Free shipping" tag. Prices are lowest-SKU prices:
- 1005007322229008: AU$3.90, 535 sold, 4.7 stars
- 1005010048131612: AU$6.69, 380 sold, 4.6 stars
- 1005007341566219: AU$6.91, 315 sold, 4.8 stars
- 4001344912951: AU$4.39, 93 sold, 4.9 stars
- 1005011838295589: AU$6.80, 24 sold, 5.0 stars
- 4001120107600: AU$3.28, 116 sold, 4.4 stars

AliExpress's search data uses 4001120107600 as the same-product (SPU) group ID for 1005007341566219, although the two are sold by different stores (Limskey and Yalvboats). — [AliExpress search, ship-to AU](https://www.aliexpress.com/w/wholesale-1s-lipo-952540.html?shipCountry=AU)

#### Comparison items (ship-to Sydney, same method)
- BETAFPV LAVA II 1S 320 mAh 95C BT2.0, FPVibes Store, 98.1% ([1005010442637715](https://www.aliexpress.com/item/1005010442637715.html)). The "2pcs" SKU costs AU$22.79. Shipping is "Standard: Free shipping / Delivery: Oct 24 - 31 / Tracking available", which is YFH Special Standard, 15 to 22 days, from China. Internal tag `aplLogisticsAttribute` "BATTERIES". — [AliExpress item page](https://www.aliexpress.com/item/1005010442637715.html)
- TATTU 1S 3.8V 300 mAh 75C BT2.0, Teranty Official Store, 96.0% ([1005006120440681](https://www.aliexpress.com/item/1005006120440681.html)). The 1-pc SKU costs AU$10.09. Shipping is "Other: AU$0.45 / Delivery: Dec. 08 / Tracking unavailable", which is the Seller's Shipping Method with a 60-day estimate. Tag "BATTERIES". — [AliExpress item page](https://www.aliexpress.com/item/1005006120440681.html)
- Another 952540 1000 mAh pack, Shop1105211371 Store ([1005013322072381](https://www.aliexpress.com/item/1005013322072381.html)), is priced at AU$50.99 with "Free shipping". The pop-up reads "Standard: Free shipping / Delivery: Oct 24 - 31 / Tracking available" (YFH Special Standard). At that price it is an outlier, not a practical option. — [AliExpress item page](https://www.aliexpress.com/item/1005013322072381.html)
- GY-91 sensor board, a non-battery control item, Sunshine Grove Shop Store, 95.7% ([1005012661642808](https://www.aliexpress.com/item/1005012661642808.html)). Item price is AU$6.55. Pop-up text: "Shipping method / Standard: AU$5.68 / Delivery: Oct 17 - 26 / Tracking available / AU$2.00 coupon if delayed". Raw fields: `deliveryProviderName` "AliExpress Standard Shipping", `deliveryOptionCode` "CAINIAO_STANDARD", 8 to 17 days, `aplLogisticsAttribute` "GENERAL". There was no Product Safety Australia compliance box. On the same day and to the same Sydney address, the non-battery item gets Cainiao's AliExpress Standard Shipping, faster and cheaper with a late-delivery coupon, while every battery item gets a special or seller line. — [AliExpress item page](https://www.aliexpress.com/item/1005012661642808.html)

#### How the data was obtained (routes tried and what came back)
- **Legacy freight API.** `https://www.aliexpress.com/aeglodetailweb/api/logistics/freight?productId=1005007322229008&count=1&country=AU&...&tradeCurrency=AUD&userScene=PC_DETAIL` first failed with a connection reset. A retry returned HTTP 404 `{"status":404,"error":"Not Found","message":"No message available","path":"/aeglodetailweb/api/logistics/freight"}`, so this endpoint is retired. — [request URL](https://www.aliexpress.com/aeglodetailweb/api/logistics/freight?productId=1005007322229008&count=1&country=AU&provinceCode=&cityCode=&tradeCurrency=AUD&userScene=PC_DETAIL)
- **Plain HTTP item page.** A simple fetch of `https://www.aliexpress.com/item/ID.html?shipCountry=AU` (and of `m.aliexpress.com/item/ID.html`, which redirects to www) returns only a 77 KB client-side shell. The shell sets `isCSR = true` and fetches all data later through `mtop.aliexpress.pdp.pc.query`. — [AliExpress item page](https://www.aliexpress.com/item/1005007322229008.html)
- **Direct mtop H5 call.** A signed call to `acs.aliexpress.com/h5/mtop.aliexpress.pdp.pc.query/1.0/` from a script returned `{"ret":["FAIL_SYS_USER_VALIDATE","RGV587_ERROR::SM::哎哟喂,被挤爆啦,请稍后重试"]}`. That is an anti-bot block ("Oops, overcrowded, try again later") with a link to a `_____tmd_____/punish` captcha page, and no `_m_h5_tk` token was issued.
- **Headless Chromium (what worked).** Going straight to an item page redirected to `/_____tmd_____/punish`, a Google reCAPTCHA page reading "We need to check if you are a robot." / "I'm not a robot". I did not try to solve any captcha. Visiting the AliExpress homepage, then a search page, then the item page loaded normally, and that page's own data calls were captured. The ship-to was set through AliExpress's `aep_usuc_f` cookie (`region=AU&c_tp=AUD&province=901600600000000000&city=901600600012033000`). The NSW and Sydney codes came from AliExpress's own address API `mtop.aliexpress.address.addressinfo.get`: "New South Wales" = 901600600000000000, "Sydney" = 901600600012033000, out of 4,643 NSW city entries. The pages confirmed `shipTo: "Sydney"`, `shipToStateCode` and `shipToCityCode`.
- **Rate limiting.** About 9 of 22 item-page loads, across 7 browser sessions, hit the reCAPTCHA or a blocked data call (`FAIL_SYS_USER_VALIDATE`), and one returned "upstream request failed". A plain fetch of the GY-91 page was also captcha'd once. Spacing sessions 75 to 120 s apart got every target listing and the GY-91 control to load in the end, and no captcha was solved.
- **Seller logistics tool.** AliExpress's public "logistics solution" tool at `ilogistics.aliexpress.com/recommendation_engine_public.htm` returned "Blocked by egress policy" from this environment's proxy (HTTP 403). It was not retried, per the proxy rules.

### Inferences
- In October 2026, AliExpress does sell and deliver loose 1S LiPo packs to a Sydney address. None of the tested listings is blocked for Australia.
- No battery listing offered AliExpress Standard Shipping, a Cainiao line or Choice. Every one used a seller-arranged or special line, which matches the AliExpress Shipping rule summarised under Q2 (no "pure battery" goods on the standard line).
- The decisive difference between the listings is the shipping line, not the fee:
  - YFH Special Standard (1005007341566219, 4001344912951, 1005011838295589): about 2 to 3 weeks with tracking, for AU$6.62 to AU$7.91.
  - "Seller's Shipping Method" (1005007322229008, 1005010048131612, 4001120107600): a 60-day estimate with no AliExpress tracking, for AU$6.62 to AU$7.91.
  
  For a 952540 1000 mAh MX2.0 pack that arrives fast and with tracking, the better choices are 1005007341566219 (4.8 stars, 315 sold) and 4001344912951 (4.9 stars, 93 sold). 1005011838295589 is cheapest delivered but has only 24 sold and 1 review.
- Shipping costs about as much as one pack. Delivered cost for one pack, before GST:

  | Listing | Pack | Shipping | Delivered | Line |
  |---|---|---|---|---|
  | 1005011838295589 | AU$6.80 | AU$6.62 | AU$13.42 | YFH |
  | 4001344912951 | AU$6.59 | AU$7.91 | AU$14.50 | YFH |
  | 1005007341566219 | AU$6.91 | AU$7.91 | AU$14.82 | YFH |
  | 1005007322229008 | AU$6.99 | AU$6.62 | AU$13.61 | Seller's |
  | 1005010048131612 | AU$6.69 | AU$7.91 | AU$14.60 | Seller's |
  | 4001120107600 | AU$8.89 ("1battery") | AU$7.91 | about AU$16.80 | Seller's |

  The 4001120107600 fee was captured on its "usb" and "3battery" SKUs, both AU$7.91.
- Within a listing, the fee did not change between a charger-only or cable SKU and a battery SKU:
  - 1005007322229008: AU$6.62 for both
  - 4001120107600: AU$7.91 for both "usb" and "3battery"
  
  So these lines look like a flat per-parcel price for small parcels. I tested only quantity 1, so multi-pack orders still need their own check (see Gaps).
- The internal field `freightCommitDay` = 75 appears on every China-shipped option. It is probably AliExpress's committed delivery or protection window. That reading is inferred from the name only; it is not displayed to buyers.

### Gaps
- 1005011838295589 names its SKUs by colour (Blue, Red and so on), not by pack count. "Blue" (AU$6.80) was identified as a single pack only from its SKU thumbnail image. For 4001120107600 the fee was read on the "usb" and "3battery" SKUs, not on "1battery".
- Postcode 2000 itself could not be entered. AliExpress's ship-to selector works at state and city level (NSW, Sydney), and a postcode-level quote needs a logged-in checkout with a saved address, which I did not do (no account). The Sydney city-level quote is what the product page uses.
- Quantities above 1, multi-pack SKUs and the final checkout price (GST, any checkout-level fee changes) were not tested. The checkout page needs login.
- The "Seller's Shipping Method" line does not reveal its actual carrier or transport mode (air, rail or sea). The 60-day estimate and lack of tracking are consistent with a slow consolidated or sea route, but nothing in the data states the mode.
- These quotes are a snapshot from 2026-10-09. Seller-chosen lines and fees can change at any time.

## 2. Which logistics services carry batteries to Australia, and what do AliExpress/Cainiao help pages say about shipping batteries there?

### Takeaway
For these battery listings to Sydney, AliExpress returned only two kinds of service. One is "YFH Special Standard" (`YFH_SSG_STANDARD`), with tracking and a 15 to 22 day estimate. A user note says it is a third-party line run via 原飛航物流 and used for lithium-battery goods. The other is "Seller's Shipping Method", with a 60-day estimate and no tracking. AliExpress Standard Shipping and "Cainiao ... for Special Goods" lines never appeared. I found no official AliExpress Help Center or Cainiao page (reachable from here) that states battery rules for Australia. A 2024 summary of AliExpress's seller logistics rules says the AliExpress Shipping (无忧物流) "standard" line accepts goods with built-in batteries but not pure (loose) batteries, which matches what the listings showed.

### Cited Findings
- Services observed live for loose LiPo packs to Sydney:
  - "YFH Special Standard" (`YFH_SSG_STANDARD`), shown to buyers as "Standard": AU$6.62, AU$7.91 or free, 15 to 22 days, "Tracking available".
  - "Seller's Shipping Method" (`deliveryOptionCode` "Other"), shown as "Other": AU$0.45 to AU$7.91, 60 days, "Tracking unavailable".
  
  No other method appeared in any battery listing's "Shipping method" pop-up. Sources: [1005007341566219](https://www.aliexpress.com/item/1005007341566219.html), [4001344912951](https://www.aliexpress.com/item/4001344912951.html), [1005011838295589](https://www.aliexpress.com/item/1005011838295589.html), [1005010442637715](https://www.aliexpress.com/item/1005010442637715.html), [1005007322229008](https://www.aliexpress.com/item/1005007322229008.html), [1005010048131612](https://www.aliexpress.com/item/1005010048131612.html), [4001120107600](https://www.aliexpress.com/item/4001120107600.html), [1005006120440681](https://www.aliexpress.com/item/1005006120440681.html)
- AliExpress tags these items internally. The `aplLogisticsAttribute` field reads:
  - "SENSITIVE" for four of the 952540 listings
  - "BATTERIES" for the BETAFPV, TATTU and 1005013322072381 packs
  - "SPECIAL" for the 4001120107600 "3battery" SKU
  - "GENERAL" for 1005010048131612 and for the 4001120107600 "usb" SKU
  
  — the item pages above
- Control result: the non-battery GY-91 board (tag "GENERAL") was quoted "AliExpress Standard Shipping" (`CAINIAO_STANDARD`) to Sydney at AU$5.68, 8 to 17 days, with tracking and "AU$2.00 coupon if delayed". So the Cainiao standard line serves Sydney normally; it simply wasn't offered on any loose LiPo pack. — [GY-91 item page](https://www.aliexpress.com/item/1005012661642808.html)
- **AliExpress Shipping (无忧物流) rules, secondary summary dated 2024-05-23 (AMZ123):**
  - Standard mode "可寄送普货、带电、非液体化妆品，不支持纯电、液体粉末" (accepts general goods, goods containing batteries and non-liquid cosmetics; does not support pure-battery goods or liquids/powders), about 15 to 35 days.
  - Simple mode "不支持带电、纯电及化妆品" (no battery-containing goods, no pure batteries, no cosmetics).
  - Priority mode accepts only general goods.
  
  — [AMZ123, 速卖通无忧物流的具体规则](https://www.amz123.com/ask/lZCPZK77)
- **YFH Special Standard, Japanese buyer's notes (undated, examples from 2025):**
  - It is routed through 原飛航物流 (Yuan Fei Hang Logistics) and is "seen on lithium-battery-type products".
  - It issues a 14-digit tracking number starting "HRBC".
  - "Seller's Shipping Method" is often used when "batteries etc. cannot be shipped by normal transport methods", and AliExpress tracking "generally doesn't update correctly" for it.
  - "for Special Goods" methods (Cainiao Standard for Special Goods, Cainiao Super Economy for Special Goods, shown as `CAINIAO_FULFILLMENT_STD_SG`) are for "products that cannot be transported under normal handling".
  
  These notes are about Japan, not Australia. — [Scrapbox: AliExpressの配送方法メモ](https://scrapbox.io/abyssluke/AliExpress%E3%81%AE%E9%85%8D%E9%80%81%E6%96%B9%E6%B3%95%E3%83%A1%E3%83%A2)
- An AliExpress-hosted "wiki" page on YFH Special Standard is labelled "This content is provided by third-party contributors or generated by AI" and "does not necessarily reflect the views of AliExpress". It is not policy, and it says nothing about batteries. — [AliExpress Wiki: YFH Special Standard](https://www.aliexpress.com/s/wiki-ssr/article/yfh-special-standard-aliexpress)
- With an Australian destination, AliExpress shows its own compliance notice on battery listings, pointing buyers to Product Safety Australia's lithium-ion battery guide (quoted in Q1). — [AliExpress item page](https://www.aliexpress.com/item/1005010048131612.html)

### Inferences
- The standard Cainiao/AliExpress line appears not to carry loose ("pure") lithium batteries, so battery sellers ship to Australia on seller-arranged lines. On the evidence here, "YFH Special Standard" is the fast tracked one and "Seller's Shipping Method" the slow untracked one. This rests on the AMZ123 summary plus the observed options, not on an official AliExpress statement.
- A "Cainiao Standard For Special Goods" option did not appear for any 1S LiPo listing to Sydney. That is not proof it never applies to batteries, only that none of these sellers offered it on 2026-10-09.

### Gaps
- I found no official AliExpress Help Center or Cainiao page on battery or dangerous-goods shipping to Australia. Searches of aliexpress.com, cainiao.com and global.cainiao.com returned only AliExpress-hosted AI-generated "wiki" articles and third-party guides.
- AliExpress's seller logistics query tool (`ilogistics.aliexpress.com`) was blocked by the egress proxy, so the official list of lines that accept "pure battery" goods to AU could not be pulled.
- Which carrier actually delivers in Australia, and by air or sea, is not stated for either line.
- One older third-party channel chart mentions Australia, but its PDF metadata dates it to 2014-08-26 and its text could not be extracted, so it was not used. — [sfcservice.com Battery.pdf](https://www.sfcservice.com/app/upload/docs/Battery.pdf)
- No Australian-side rules (Australia Post or Border Force handling of inbound loose lithium cells) were researched here; that was out of scope.

## 3. Is there an Australian-warehouse or "Ships from Australia" option for these packs?

### Takeaway
No. All six 952540 1000 mAh MX2.0 listings ship only from China, and none has a "Ships From: Australia" SKU option. AliExpress does run AU-warehouse LiPo listings, and its "Shipping from: Australia" search filter shows them. For 1S packs the filter surfaced only whoop-style cells (BETAFPV LAVA II 580 mAh BT2.0; GNB 450 mAh HV), not 952540 MX2.0 packs. An AU-warehouse LiPo checked for comparison (OVONIC 4S) showed "Free shipping · Ship from Australia, Delivery: Oct 10 - 17" via "Seller Shipping AU".

### Cited Findings
- On the AU search for "1s lipo 952540", the "Shipping from" filter (parameter `shpf_co`) offers Australia, Turkey and China. — [AliExpress search, ship-to AU](https://www.aliexpress.com/w/wholesale-1s-lipo-952540.html?shipCountry=AU)
- With `shpf_co=AU`, the same search returns only 4 items, and none is a 952540 pack:
  - BETAFPV Matrix 1S flight controller, AU$76.19
  - JHEMCU F435 NEO V2 1S AIO flight controller, AU$48.79
  - BETAFPV LAVA II 580 mAh 1S 95C 3.8V BT2.0 battery (1005011618956517), AU$33.53, 322 sold, 4.9 stars
  - GNB 1S 3.8V 450 mAh HV LiPo (1005007518642083), AU$10.49, 23 sold, 5 stars
  
  — [AliExpress search, ships from AU](https://www.aliexpress.com/w/wholesale-1s-lipo-952540.html?shipCountry=AU&shpf_co=AU)
- With `shpf_co=CN`, the same search returns all the target 952540 listings. — [AliExpress search, ships from CN](https://www.aliexpress.com/w/wholesale-1s-lipo-952540.html?shipCountry=AU&shpf_co=CN)
- AU-warehouse results for "1s lipo battery" and "lipo mx2.0" are almost all multi-cell packs and chargers, mostly "Free shipping": OVONIC 2S-6S, CNHL MiniStar 3S/4S, HRB, Yowoo. No small 1S MX2.0 pack appears. — [AliExpress search: 1s lipo battery, ships from AU](https://www.aliexpress.com/w/wholesale-1s-lipo-battery.html?shipCountry=AU&shpf_co=AU); [AliExpress search: lipo mx2.0, ships from AU](https://www.aliexpress.com/w/wholesale-lipo-mx2.0.html?shipCountry=AU&shpf_co=AU)
- Item-level check of all six 952540 listings: `shipFrom` is "China" and `hideShipFrom` is true. Five have "Color" (pack count, charger or colour) as their only SKU property. 4001120107600 also has a "Ships From" property whose only value is "China Mainland". — [1005007322229008](https://www.aliexpress.com/item/1005007322229008.html); [1005010048131612](https://www.aliexpress.com/item/1005010048131612.html); [1005007341566219](https://www.aliexpress.com/item/1005007341566219.html); [4001344912951](https://www.aliexpress.com/item/4001344912951.html); [1005011838295589](https://www.aliexpress.com/item/1005011838295589.html); [4001120107600](https://www.aliexpress.com/item/4001120107600.html)
- The BETAFPV LAVA II 320 mAh and 1005013322072381 listings have a "Ships From" property whose only value is "China Mainland". — [1005010442637715](https://www.aliexpress.com/item/1005010442637715.html); [1005013322072381](https://www.aliexpress.com/item/1005013322072381.html)
- AU-warehouse comparison, OVONIC 4S 1550 mAh 100C 4-pack ([1005013232100957](https://www.aliexpress.com/item/1005013232100957.html)), AU$63.99:
  - Displayed: "Free shipping · Ship from Australia / Delivery: Oct 10 - 17"
  - Raw fields: `deliveryOptionCode` "SELLER_SHIPPING_AU", `company` "Seller Shipping AU", 1 to 8 days, tracking visible, `shipFrom` "Australia", `freightCommitDay` 20
  
  — [AliExpress item page](https://www.aliexpress.com/item/1005013232100957.html)

### Inferences
- A buyer who needs a 952540 1000 mAh MX2.0 pack quickly cannot get one from an AliExpress AU warehouse in October 2026. The best AliExpress option is YFH Special Standard from China, at about 2 to 3 weeks. In the searches run, AU-warehouse stock appeared only for other cell formats (whoop cells, larger multi-cell packs). Judging by the OVONIC check, these ship in about 1 to 8 days, often free.

### Gaps
- The AU-filtered search shows the first page only, and AliExpress search ranking is personalised and changes often. A small AU-warehouse 952540 seller could exist beyond the first page; none appeared in the four AU-filtered queries run.
- The AU-warehouse 1S packs found (1005011618956517, 1005007518642083) were not opened at item level. Their AU shipping fee and estimate were not captured, and it was not confirmed that their AU option is in stock.
