export type Store = 'woolworths' | 'coles';

export interface Product {
  id: string;
  name: string;
  brand?: string;
  price: number | null;
  unitPrice?: string;
  available: boolean;
  url: string;
  imageUrl?: string;
}

export interface ScrapedResult {
  term: string;
  slug: string;
  scrapedAt: string;
  results: {
    woolworths: Product[];
    coles: Product[];
  };
  totalProducts: number;
}

export interface Ingredient {
  term: string;
  slug: string;
  addedAt: string;
  lastScrapedAt: string | null;
}

export interface IngredientsData {
  ingredients: Ingredient[];
  lastFullScrape: string | null;
}

export interface ScraperConfig {
  timeout: number;
  retries: number;
  delayBetweenRetries: number;
}

export const DEFAULT_SCRAPER_CONFIG: ScraperConfig = {
  timeout: 30000,
  retries: 3,
  delayBetweenRetries: 2000,
};
