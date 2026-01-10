import type { Page } from 'playwright';
import { getPage, closePage, randomDelay } from './browser.js';
import type { Product, ScraperConfig } from './types.js';
import { DEFAULT_SCRAPER_CONFIG } from './types.js';

const COLES_BASE_URL = 'https://www.coles.com.au';

interface ColesImageUri {
  uri?: string;
  altText?: string;
  type?: string;
}

interface ColesProduct {
  id?: number;
  productId?: number;
  name?: string;
  title?: string;
  brand?: string;
  brandName?: string;
  pricing?: {
    now?: number;
    price?: number;
    comparable?: string;
    unitPrice?: string;
  };
  price?: number;
  availability?: {
    isAvailable?: boolean;
  };
  onlineAvailable?: boolean;
  outOfStock?: boolean;
  slug?: string;
  imageUris?: (string | ColesImageUri)[];
  image?: string;
  thumbnailUrl?: string;
}

interface ColesNextData {
  props?: {
    pageProps?: {
      searchResults?: {
        results?: ColesProduct[];
      };
      products?: ColesProduct[];
      initialState?: {
        search?: {
          results?: ColesProduct[];
        };
      };
    };
  };
}

function parseProduct(item: ColesProduct): Product | null {
  const id = item.id ?? item.productId;
  const name = item.name ?? item.title;

  if (!id || !name) {
    return null;
  }

  const pricing = item.pricing ?? {};
  const price = pricing.now ?? pricing.price ?? item.price ?? null;
  const unitPrice = pricing.comparable ?? pricing.unitPrice;

  let available = true;
  if (item.availability?.isAvailable !== undefined) {
    available = item.availability.isAvailable;
  } else if (item.onlineAvailable !== undefined) {
    available = item.onlineAvailable;
  } else if (item.outOfStock !== undefined) {
    available = !item.outOfStock;
  }

  // Handle imageUris which can be strings or objects with uri property
  let imageUrl: string | undefined;
  const firstImage = item.imageUris?.[0];
  if (typeof firstImage === 'string') {
    imageUrl = firstImage;
  } else if (firstImage && typeof firstImage === 'object' && firstImage.uri) {
    // Build full URL from uri path
    imageUrl = `https://shop.coles.com.au/wcsstore/Coles-CAS/images${firstImage.uri}`;
  }
  imageUrl = imageUrl ?? item.image ?? item.thumbnailUrl;

  return {
    id: `coles_${id}`,
    name,
    brand: item.brand ?? item.brandName,
    price,
    unitPrice,
    available,
    url: `${COLES_BASE_URL}/product/${item.slug ?? id}`,
    imageUrl,
  };
}

function extractProductsFromNextData(data: ColesNextData): Product[] {
  const products: Product[] = [];
  const pageProps = data?.props?.pageProps;

  if (!pageProps) {
    return products;
  }

  // Try different locations where products might be
  const possibleProductArrays = [
    pageProps.searchResults?.results,
    pageProps.products,
    pageProps.initialState?.search?.results,
  ];

  for (const items of possibleProductArrays) {
    if (Array.isArray(items)) {
      for (const item of items) {
        const product = parseProduct(item);
        if (product) {
          products.push(product);
        }
      }
      if (products.length > 0) {
        break;
      }
    }
  }

  return products;
}

async function parseFromDOM(page: Page): Promise<Product[]> {
  console.log('[Coles] Falling back to DOM parsing...');

  return page.evaluate((baseUrl: string) => {
    const products: any[] = [];
    const tiles = document.querySelectorAll('[data-testid="product-tile"], .product-tile, article');

    tiles.forEach((tile) => {
      const nameEl = tile.querySelector('[data-testid="product-title"], .product-title, h2, h3');
      const priceEl = tile.querySelector('[data-testid="product-pricing"], .price, [class*="price"]');
      const linkEl = tile.querySelector('a[href*="/product/"]');
      const imgEl = tile.querySelector('img');

      if (nameEl && linkEl) {
        const href = (linkEl as HTMLAnchorElement).href;
        const idMatch = href.match(/(\d+)(?:\?|$)/);
        const priceText = priceEl?.textContent?.match(/\$?([\d.]+)/)?.[1] ?? '';

        products.push({
          id: `coles_${idMatch?.[1] ?? Date.now()}`,
          name: nameEl.textContent?.trim() ?? '',
          price: priceText ? parseFloat(priceText) : null,
          available: true,
          url: href,
          imageUrl: (imgEl as HTMLImageElement)?.src,
        });
      }
    });

    return products;
  }, COLES_BASE_URL);
}

export async function scrapeColes(
  searchTerm: string,
  config: ScraperConfig = DEFAULT_SCRAPER_CONFIG
): Promise<Product[]> {
  console.log(`[Coles] Scraping: "${searchTerm}"`);

  const page = await getPage();
  let products: Product[] = [];

  try {
    const searchUrl = `${COLES_BASE_URL}/search?q=${encodeURIComponent(searchTerm)}`;

    await page.goto(searchUrl, {
      waitUntil: 'domcontentloaded',
      timeout: config.timeout,
    });

    // Wait for __NEXT_DATA__ to be present
    try {
      await page.waitForSelector('script#__NEXT_DATA__', { timeout: 10000 });
    } catch {
      console.log('[Coles] __NEXT_DATA__ not found, waiting for content...');
      await randomDelay(2000, 3000);
    }

    // Extract __NEXT_DATA__ JSON
    const nextData = await page.evaluate(() => {
      const script = document.getElementById('__NEXT_DATA__');
      if (!script?.textContent) return null;
      try {
        return JSON.parse(script.textContent);
      } catch {
        return null;
      }
    });

    if (nextData) {
      products = extractProductsFromNextData(nextData as ColesNextData);
      console.log(`[Coles] Found ${products.length} products via __NEXT_DATA__`);
    }

    if (products.length === 0) {
      products = await parseFromDOM(page);
      console.log(`[Coles] Found ${products.length} products via DOM`);
    }

    // Limit to top 20 results
    products = products.slice(0, 20);

    console.log(`[Coles] Returning ${products.length} products`);
  } catch (error) {
    console.error(`[Coles] Error scraping "${searchTerm}":`, error);
    throw error;
  } finally {
    await closePage(page);
  }

  return products;
}
