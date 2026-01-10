import type { Page, Response } from 'playwright';
import { getPage, closePage, randomDelay } from './browser.js';
import type { Product, ScraperConfig } from './types.js';
import { DEFAULT_SCRAPER_CONFIG } from './types.js';

const WOOLWORTHS_BASE_URL = 'https://www.woolworths.com.au';
const SEARCH_API_PATTERN = /\/apis\/ui\/Search\/products/;

interface WoolworthsProduct {
  Stockcode?: number;
  ProductId?: number;
  Name?: string;
  DisplayName?: string;
  Brand?: string;
  Price?: number;
  InstorePrice?: number;
  CupString?: string;
  CupMeasure?: string;
  IsAvailable?: boolean;
  InStock?: boolean;
  MediumImageFile?: string;
  SmallImageFile?: string;
}

interface WoolworthsApiResponse {
  Products?: Array<{ Products?: WoolworthsProduct[] }>;
  SearchResults?: WoolworthsProduct[];
}

function parseProduct(item: WoolworthsProduct): Product | null {
  const stockcode = item.Stockcode ?? item.ProductId;
  const name = item.Name ?? item.DisplayName;

  if (!stockcode || !name) {
    return null;
  }

  return {
    id: `ww_${stockcode}`,
    name,
    brand: item.Brand,
    price: item.Price ?? item.InstorePrice ?? null,
    unitPrice: item.CupString ?? item.CupMeasure,
    available: item.IsAvailable ?? item.InStock ?? true,
    url: `${WOOLWORTHS_BASE_URL}/shop/productdetails/${stockcode}`,
    imageUrl: item.MediumImageFile ?? item.SmallImageFile,
  };
}

function parseApiResponse(data: WoolworthsApiResponse): Product[] {
  const products: Product[] = [];

  // Handle nested product structure
  if (data.Products) {
    for (const group of data.Products) {
      if (group.Products) {
        for (const item of group.Products) {
          const product = parseProduct(item);
          if (product) {
            products.push(product);
          }
        }
      }
    }
  }

  // Handle flat structure
  if (data.SearchResults) {
    for (const item of data.SearchResults) {
      const product = parseProduct(item);
      if (product) {
        products.push(product);
      }
    }
  }

  return products;
}

async function parseFromDOM(page: Page): Promise<Product[]> {
  console.log('Parsing from DOM...');

  // Wait for product grid to load
  try {
    await page.waitForSelector('[class*="productGrid"], [class*="product-grid"], section', {
      timeout: 10000,
    });
    await randomDelay(1000, 2000);
  } catch {
    console.log('[Woolworths] Could not find product grid, trying anyway...');
  }

  return page.evaluate((baseUrl: string) => {
    const products: any[] = [];

    // Try multiple selectors for product tiles
    const selectors = [
      '[data-testid="product-tile"]',
      '.product-tile',
      '[class*="product-tile"]',
      'section[class*="product"]',
      'article',
    ];

    let tiles: Element[] = [];
    for (const selector of selectors) {
      const found = document.querySelectorAll(selector);
      if (found.length > 0) {
        tiles = Array.from(found);
        break;
      }
    }

    tiles.forEach((tile) => {
      // Try to find product link
      const linkEl =
        tile.querySelector('a[href*="/shop/productdetails/"]') ||
        tile.querySelector('a[href*="/shop/"]') ||
        tile.querySelector('a');

      if (!linkEl) return;

      const href = (linkEl as HTMLAnchorElement).href;
      const idMatch = href.match(/productdetails\/(\d+)/) || href.match(/\/(\d+)(?:\?|$)/);
      if (!idMatch) return;

      // Find product name
      const nameEl =
        tile.querySelector('[class*="product-title"]') ||
        tile.querySelector('[class*="title"]') ||
        tile.querySelector('h2') ||
        tile.querySelector('h3') ||
        tile.querySelector('span[class*="name"]');

      // Find price
      const priceEl =
        tile.querySelector('[class*="price-dollars"]') ||
        tile.querySelector('[class*="primary"]') ||
        tile.querySelector('[class*="price"]');

      // Find image
      const imgEl = tile.querySelector('img');

      const name = nameEl?.textContent?.trim() ?? '';
      if (!name) return;

      const priceText = priceEl?.textContent?.match(/\$?([\d.]+)/)?.[1] ?? '';

      products.push({
        id: `ww_${idMatch[1]}`,
        name,
        price: priceText ? parseFloat(priceText) : null,
        available: true,
        url: `${baseUrl}/shop/productdetails/${idMatch[1]}`,
        imageUrl: (imgEl as HTMLImageElement)?.src,
      });
    });

    return products;
  }, WOOLWORTHS_BASE_URL);
}

export async function scrapeWoolworths(
  searchTerm: string,
  config: ScraperConfig = DEFAULT_SCRAPER_CONFIG
): Promise<Product[]> {
  console.log(`[Woolworths] Scraping: "${searchTerm}"`);

  const page = await getPage();
  let products: Product[] = [];

  try {
    // Set up response interception
    let apiResponse: Response | null = null;

    page.on('response', (response) => {
      if (SEARCH_API_PATTERN.test(response.url()) && response.status() === 200) {
        apiResponse = response;
      }
    });

    const searchUrl = `${WOOLWORTHS_BASE_URL}/shop/search/products?searchTerm=${encodeURIComponent(searchTerm)}`;

    await page.goto(searchUrl, {
      waitUntil: 'domcontentloaded',
      timeout: config.timeout,
    });

    // Wait for content to load
    await randomDelay(3000, 5000);

    // Try API response first
    if (apiResponse) {
      try {
        const data = (await apiResponse.json()) as WoolworthsApiResponse;
        products = parseApiResponse(data);
        console.log(`[Woolworths] Found ${products.length} products via API`);
      } catch (e) {
        console.log('[Woolworths] Failed to parse API response');
      }
    }

    // If API didn't work, try DOM parsing
    if (products.length === 0) {
      console.log('[Woolworths] Trying DOM parsing...');
      products = await parseFromDOM(page);
    }

    // Limit to top 20 results
    products = products.slice(0, 20);

    console.log(`[Woolworths] Returning ${products.length} products`);
  } catch (error) {
    console.error(`[Woolworths] Error scraping "${searchTerm}":`, error);
    throw error;
  } finally {
    await closePage(page);
  }

  return products;
}
