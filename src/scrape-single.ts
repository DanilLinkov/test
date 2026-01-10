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
import { readJson, writeJson, fileExists } from './utils/file.js';
import { slugify } from './utils/slugify.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const INGREDIENTS_FILE = join(DATA_DIR, 'ingredients.json');
const RESULTS_DIR = join(DATA_DIR, 'results');

async function scrapeIngredient(term: string, slug: string): Promise<ScrapedResult> {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Scraping: "${term}" (slug: ${slug})`);
  console.log('='.repeat(50));

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

  console.log(
    `Found: ${woolworthsProducts.length} Woolworths, ${colesProducts.length} Coles products`
  );

  return result;
}

async function main(): Promise<void> {
  const input = process.argv[2];

  if (!input) {
    console.error('Usage: npx tsx src/scrape-single.ts "ingredient1,ingredient2,..."');
    console.error('       npx tsx src/scrape-single.ts "banana"');
    process.exit(1);
  }

  // Parse comma-separated ingredients
  const terms = input.split(',').map((t) => t.trim()).filter((t) => t.length > 0);

  if (terms.length === 0) {
    console.error('No valid ingredients provided');
    process.exit(1);
  }

  console.log(`Scraping ${terms.length} ingredient(s): ${terms.join(', ')}`);

  // Initialize browser
  await initBrowser();

  // Load ingredients.json if it exists
  let ingredientsData: IngredientsData | null = null;
  if (fileExists(INGREDIENTS_FILE)) {
    ingredientsData = await readJson<IngredientsData>(INGREDIENTS_FILE);
  }

  const results: { term: string; slug: string; total: number }[] = [];

  try {
    for (let i = 0; i < terms.length; i++) {
      const term = terms[i];
      const slug = slugify(term);

      const result = await scrapeIngredient(term, slug);

      // Save result to file
      const resultFile = join(RESULTS_DIR, `${slug}.json`);
      await writeJson(resultFile, result);
      console.log(`Saved: ${resultFile}`);

      results.push({ term, slug, total: result.totalProducts });

      // Update ingredients.json if it exists
      if (ingredientsData) {
        const existingIndex = ingredientsData.ingredients.findIndex(
          (ing) => ing.slug === slug || slugify(ing.term) === slug
        );

        if (existingIndex >= 0) {
          ingredientsData.ingredients[existingIndex].lastScrapedAt = result.scrapedAt;
        } else {
          ingredientsData.ingredients.push({
            term,
            slug,
            addedAt: new Date().toISOString(),
            lastScrapedAt: result.scrapedAt,
          });
          console.log(`Added "${term}" to ingredients list`);
        }
      }

      // Add delay between ingredients (except for last one)
      if (i < terms.length - 1) {
        console.log('Waiting before next ingredient...');
        await randomDelay(2000, 4000);
      }
    }

    // Save updated ingredients.json
    if (ingredientsData) {
      await writeJson(INGREDIENTS_FILE, ingredientsData);
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('Scrape complete!');
    console.log(`Scraped ${results.length} ingredient(s):`);
    for (const r of results) {
      console.log(`  - ${r.term}: ${r.total} products`);
    }
    console.log('='.repeat(50));
  } finally {
    await closeBrowser();
  }
}

main().catch((error) => {
  console.error('Scrape failed:', error);
  process.exit(1);
});
