import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  initBrowser,
  closeBrowser,
  scrapeWoolworths,
  scrapeColes,
  randomDelay,
  type ScrapedResult,
  type IngredientsData,
} from './scrapers/index.js';
import { readJson, writeJson } from './utils/file.js';
import { slugify } from './utils/slugify.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const INGREDIENTS_FILE = join(DATA_DIR, 'ingredients.json');
const RESULTS_DIR = join(DATA_DIR, 'results');

async function scrapeIngredient(term: string, slug: string): Promise<ScrapedResult> {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Scraping: "${term}"`);
  console.log('='.repeat(50));

  const [woolworthsProducts, colesProducts] = await Promise.all([
    scrapeWoolworths(term).catch((error) => {
      console.error(`[Woolworths] Failed to scrape "${term}":`, error.message);
      return [];
    }),
    scrapeColes(term).catch((error) => {
      console.error(`[Coles] Failed to scrape "${term}":`, error.message);
      return [];
    }),
  ]);

  const result: ScrapedResult = {
    term,
    slug,
    scrapedAt: new Date().toISOString(),
    results: {
      woolworths: woolworthsProducts,
      coles: colesProducts,
    },
    totalProducts: woolworthsProducts.length + colesProducts.length,
  };

  console.log(
    `Found: ${woolworthsProducts.length} Woolworths, ${colesProducts.length} Coles products`
  );

  return result;
}

async function main(): Promise<void> {
  console.log('Starting full scrape...');
  console.log(`Data directory: ${DATA_DIR}`);

  // Read ingredients list
  let ingredientsData: IngredientsData;
  try {
    ingredientsData = await readJson<IngredientsData>(INGREDIENTS_FILE);
  } catch (error) {
    console.error('Failed to read ingredients.json:', error);
    console.log('Creating empty ingredients file...');
    ingredientsData = {
      ingredients: [],
      lastFullScrape: null,
    };
    await writeJson(INGREDIENTS_FILE, ingredientsData);
    console.log('No ingredients to scrape. Add ingredients to data/ingredients.json');
    return;
  }

  if (ingredientsData.ingredients.length === 0) {
    console.log('No ingredients to scrape. Add ingredients to data/ingredients.json');
    return;
  }

  console.log(`Found ${ingredientsData.ingredients.length} ingredients to scrape`);

  // Initialize browser
  await initBrowser();

  try {
    for (let i = 0; i < ingredientsData.ingredients.length; i++) {
      const ingredient = ingredientsData.ingredients[i];
      const slug = ingredient.slug || slugify(ingredient.term);

      const result = await scrapeIngredient(ingredient.term, slug);

      // Save result to file
      const resultFile = join(RESULTS_DIR, `${slug}.json`);
      await writeJson(resultFile, result);
      console.log(`Saved: ${resultFile}`);

      // Update ingredient's lastScrapedAt
      ingredientsData.ingredients[i].lastScrapedAt = result.scrapedAt;
      ingredientsData.ingredients[i].slug = slug;

      // Add delay between ingredients (except for last one)
      if (i < ingredientsData.ingredients.length - 1) {
        console.log('Waiting before next ingredient...');
        await randomDelay(3000, 5000);
      }
    }

    // Update lastFullScrape
    ingredientsData.lastFullScrape = new Date().toISOString();
    await writeJson(INGREDIENTS_FILE, ingredientsData);

    console.log('\n' + '='.repeat(50));
    console.log('Full scrape complete!');
    console.log(`Scraped ${ingredientsData.ingredients.length} ingredients`);
    console.log('='.repeat(50));
  } finally {
    await closeBrowser();
  }
}

main().catch((error) => {
  console.error('Scrape failed:', error);
  process.exit(1);
});
