import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  initBrowser,
  closeBrowser,
  scrapeWoolworths,
  scrapeColes,
  type ScrapedResult,
  type IngredientsData,
} from './scrapers/index.js';
import { readJson, writeJson, fileExists } from './utils/file.js';
import { slugify } from './utils/slugify.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const INGREDIENTS_FILE = join(DATA_DIR, 'ingredients.json');
const RESULTS_DIR = join(DATA_DIR, 'results');

async function main(): Promise<void> {
  const term = process.argv[2];

  if (!term) {
    console.error('Usage: npx tsx src/scrape-single.ts "ingredient name"');
    process.exit(1);
  }

  const slug = slugify(term);
  console.log(`Scraping single ingredient: "${term}" (slug: ${slug})`);

  // Initialize browser
  await initBrowser();

  try {
    // Scrape both stores
    console.log('\n--- Scraping Woolworths ---');
    const woolworthsProducts = await scrapeWoolworths(term).catch((error) => {
      console.error(`[Woolworths] Failed:`, error.message);
      return [];
    });

    console.log('\n--- Scraping Coles ---');
    const colesProducts = await scrapeColes(term).catch((error) => {
      console.error(`[Coles] Failed:`, error.message);
      return [];
    });

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

    // Save result to file
    const resultFile = join(RESULTS_DIR, `${slug}.json`);
    await writeJson(resultFile, result);
    console.log(`\nSaved results to: ${resultFile}`);

    // Update ingredients.json if it exists
    if (fileExists(INGREDIENTS_FILE)) {
      const ingredientsData = await readJson<IngredientsData>(INGREDIENTS_FILE);

      // Find or add ingredient
      const existingIndex = ingredientsData.ingredients.findIndex(
        (i) => i.slug === slug || slugify(i.term) === slug
      );

      if (existingIndex >= 0) {
        ingredientsData.ingredients[existingIndex].lastScrapedAt = result.scrapedAt;
      } else {
        // Add new ingredient
        ingredientsData.ingredients.push({
          term,
          slug,
          addedAt: new Date().toISOString(),
          lastScrapedAt: result.scrapedAt,
        });
        console.log(`Added "${term}" to ingredients list`);
      }

      await writeJson(INGREDIENTS_FILE, ingredientsData);
    }

    console.log('\n' + '='.repeat(50));
    console.log('Scrape complete!');
    console.log(`Woolworths: ${woolworthsProducts.length} products`);
    console.log(`Coles: ${colesProducts.length} products`);
    console.log(`Total: ${result.totalProducts} products`);
    console.log('='.repeat(50));
  } finally {
    await closeBrowser();
  }
}

main().catch((error) => {
  console.error('Scrape failed:', error);
  process.exit(1);
});
