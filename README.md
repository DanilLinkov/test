# Food Scrapper

Scrapes grocery prices from Coles and Woolworths (Australia) using Playwright with stealth plugin. Data is cached and served via GitHub Pages.

## Features

- **Woolworths & Coles scraping** with bot detection bypass (playwright-extra + stealth)
- **Scheduled scraping** every 12 hours via GitHub Actions
- **On-demand scraping** via GitHub API
- **GitHub Pages hosting** for JSON data
- **100% free** - no external services required

## How It Works

```
┌──────────────────────────────────────────────────────────────┐
│                    GitHub Actions                             │
│  - Scheduled: Every 12 hours                                  │
│  - On-demand: Triggered via API                               │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│              Playwright Scrapers (with Stealth)               │
│  - Woolworths: API interception                               │
│  - Coles: __NEXT_DATA__ extraction                            │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                    GitHub Pages                               │
│  https://danillinkov.github.io/food-scrapper/                 │
│  └── results/paprika.json                                     │
│  └── results/chicken-breast.json                              │
│  └── ingredients.json                                         │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                      Your App                                 │
│  fetch('https://danillinkov.github.io/food-scrapper/...')    │
└──────────────────────────────────────────────────────────────┘
```

## Usage

### Fetch Prices (from your app)

```typescript
const DATA_URL = 'https://danillinkov.github.io/food-scrapper';

// Get prices for an ingredient
const response = await fetch(`${DATA_URL}/results/paprika.json`);
const data = await response.json();

console.log(data.results.woolworths); // Woolworths products
console.log(data.results.coles);      // Coles products
```

### Add New Ingredient (via GitHub API)

```typescript
const GITHUB_TOKEN = 'your-github-pat';
const REPO = 'DanilLinkov/food-scrapper';

// Trigger on-demand scrape for new ingredient
await fetch(
  `https://api.github.com/repos/${REPO}/actions/workflows/on-demand-scrape.yml/dispatches`,
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ref: 'main',
      inputs: { ingredient: 'chicken breast' },
    }),
  }
);
```

## Local Development

### Setup

```bash
npm install
npx playwright install chromium
```

### Scrape All Ingredients

```bash
npm run scrape:all
```

### Scrape Single Ingredient

```bash
npm run scrape:single "paprika"
```

## Data Structure

### ingredients.json

```json
{
  "ingredients": [
    {
      "term": "paprika",
      "slug": "paprika",
      "addedAt": "2025-01-10T00:00:00Z",
      "lastScrapedAt": "2025-01-10T12:00:00Z"
    }
  ],
  "lastFullScrape": "2025-01-10T12:00:00Z"
}
```

### results/{slug}.json

```json
{
  "term": "paprika",
  "slug": "paprika",
  "scrapedAt": "2025-01-10T12:00:00Z",
  "results": {
    "woolworths": [
      {
        "id": "ww_251130",
        "name": "Woolworths Paprika Ground",
        "brand": "Woolworths",
        "price": 2.00,
        "unitPrice": "$0.67 / 10G",
        "available": true,
        "url": "https://www.woolworths.com.au/shop/productdetails/251130",
        "imageUrl": "https://cdn0.woolworths.media/content/wowproductimages/medium/251130.jpg"
      }
    ],
    "coles": [
      {
        "id": "coles_8982961",
        "name": "Ground Paprika",
        "brand": "Coles",
        "price": 2.15,
        "unitPrice": "$0.55 per 10g",
        "available": true,
        "url": "https://www.coles.com.au/product/8982961",
        "imageUrl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/8982961.jpg"
      }
    ]
  },
  "totalProducts": 29
}
```

## GitHub Setup

### 1. Enable GitHub Pages

1. Go to repo Settings → Pages
2. Source: Deploy from branch
3. Branch: `gh-pages`, folder: `/ (root)`
4. Save

### 2. Create GitHub PAT (for app integration)

1. GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained tokens
2. Repository access: Only `food-scrapper`
3. Permissions:
   - Contents: Read and write
   - Actions: Read and write
4. Generate and save token

## Tech Stack

- **Runtime**: Node.js + TypeScript
- **Scraping**: Playwright + playwright-extra + stealth plugin
- **Hosting**: GitHub Pages (free)
- **Scheduling**: GitHub Actions (free for public repos)

## License

MIT
