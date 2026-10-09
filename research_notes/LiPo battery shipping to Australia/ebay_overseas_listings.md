# eBay Australia: overseas sellers listing 1S LiPos with postage to Australia

Checked 9 Oct 2026 from this session. eBay returned 403 to plain curl requests, so pages were loaded in headless Chromium (Playwright). Even then eBay blocked some loads at random, and it always blocked the postage calculator call.

## Summary

- **China-located eBay sellers openly list loose 1S LiPo packs on eBay Australia with a delivery price shown.** In one search, 31 of 51 matching 1S/3.7 V LiPo listings were located in China. Their delivery prices were free or AU$4.72–14.59.
- **One MX2.0 listing from Huizhou, China lists its postage as "Worldwide" with exclusions.** Australia is not among the exclusions. The United States, France and Germany are.
- **The exact carrier and delivery estimate to Sydney 2000 could not be read.** eBay's postage calculator endpoint returned 403 every time.

## Searches (eBay AU, sorted by Best Match)

| Search | Listings parsed | 1S/3.7 V LiPo listings | Of those, located overseas | Overseas countries |
|---|---|---|---|---|
| [1s lipo 1000mah mx2.0](https://www.ebay.com.au/sch/i.html?_nkw=1s+lipo+1000mah+mx2.0) | 65 | 11 | 3 | China (4 listings in total) |
| [3.7v lipo drone battery 1s 25c](https://www.ebay.com.au/sch/i.html?_nkw=3.7v+lipo+drone+battery+1s+25c) | 62 | 51 | 31 | China (33 listings in total) |

A third search, for "952540 battery", was blocked (403).

How these were counted: eBay AU search cards show "from <country>" only for items located outside Australia. A card without it is taken as Australia-located. A "1S/3.7 V LiPo listing" is a title containing "LiPo", "Li-Po" or "Li-pol" plus "3.7V" or "1S".

## Examples of China-located 1S LiPo listings (search cards, 9 Oct 2026)

| eBay item | Title (shortened) | Price | Delivery shown | Location |
|---|---|---|---|---|
| [820185921927](https://www.ebay.com.au/itm/820185921927) | 5PCS 3.7V 1S 220mAh 20C LiPo, MX2.0-2P plug | AU$39.60 | +AU$10.99 | China |
| [820189438923](https://www.ebay.com.au/itm/820189438923) | 3.7V 500mAh 20C LiPo, MX2.0-2P plug | AU$25.85 | +AU$10.99 | Huizhou, China (item page) |
| [358640032536](https://www.ebay.com.au/itm/358640032536) | 3.7V 1S 800mAh 25C LiPo, JST plug | AU$18.69–130.90 | +AU$10.99 | Huizhou, China (item page) |
| [235183235206](https://www.ebay.com.au/itm/235183235206) | 4PCS 3.7V 1S 650mAh 25C, XH2.54 plug | AU$31.29 | +AU$8.33 | China |
| [398047944733](https://www.ebay.com.au/itm/398047944733) | 903052 1200mAh 3.7V 25C, XH2.54 plug | AU$14.20 | +AU$6.30 | China |
| [317875304065](https://www.ebay.com.au/itm/317875304065) | 1800mAh 1S 3.7V 25C + USB charger | AU$22.10 | +AU$4.72 | China |
| [128066527961](https://www.ebay.com.au/itm/128066527961) | 3.7V 1100mAh 25C, JST plug | AU$25.26 | Free | China |
| [315029803107](https://www.ebay.com.au/itm/315029803107) | 2Pcs 3.7V 1S 750mAh 25C, XH2.54 plug | AU$26.84 | +AU$6.30 | China |
| [235096416118](https://www.ebay.com.au/itm/235096416118) | 4Pcs 3.7V 300mAh 25C + charger | AU$41.73 | +AU$14.59 | China |

None of these is the Flix 952540 1000 mAh pack. They show that the channel exists, not a specific Flix part.

## Item page detail: 820189438923 (MX2.0, Huizhou, China)

The page was read in Chromium. eBay geolocated the session to the United States and prefilled postcode 94104.

- Postage: "Doesn't post to United States."
- "Posts to": Austria, Belgium, Bulgaria, Canada, China, Czech Republic, Denmark, Estonia, Finland, Greece, Hungary, Israel, Italy, Latvia, Lithuania, Luxembourg, Malaysia, Netherlands, New Zealand, Norway, Poland, Portugal, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom, **Worldwide**.
- "Excludes": a long list. It runs alphabetically "…Armenia, Aruba, Azerbaijan Republic…", so Australia is not on it. It includes France, Germany, Hong Kong, Japan, Singapore and South Korea.
- The country picker in the postage calculator lists Australia.
- Handling time: "Will usually post within 15 business days of receiving cleared payment."
- Returns: 30 days, buyer pays return postage.

Inference: the listing is set to post to Australia, consistent with the +AU$10.99 shown on the AU search card. This was not confirmed with a quote.

## What was blocked

- curl: every eBay AU URL returned eBay's own 403 "Error Page | eBay" (not a proxy denial).
- Chromium: search and item pages loaded at random, roughly half the time. The postage calculator request is `GET /itemmodules/<id>?module_groups=GET_RATES_MODAL&…&shipToCountryCode=AUS&shippingZipCode=2000`. It returned 403 both when clicked in the page and when called from the page context. So the shipping service name (for example SpeedPAK or a battery line) and the delivery window to 2000 are unknown.
