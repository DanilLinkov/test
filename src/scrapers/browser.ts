import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import type { Browser, BrowserContext, Page } from 'playwright';

chromium.use(StealthPlugin());

export const browserConfig = {
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  viewport: { width: 1920, height: 1080 },
  locale: 'en-AU',
  timezoneId: 'Australia/Sydney',
};

let browser: Browser | null = null;
let context: BrowserContext | null = null;

export async function initBrowser(): Promise<void> {
  if (browser) return;

  console.log('Launching browser...');

  browser = await chromium.launch({
    headless: true,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--disable-dev-shm-usage',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  context = await browser.newContext({
    userAgent: browserConfig.userAgent,
    viewport: browserConfig.viewport,
    locale: browserConfig.locale,
    timezoneId: browserConfig.timezoneId,
  });

  console.log('Browser initialized');
}

export async function getPage(): Promise<Page> {
  if (!context) {
    await initBrowser();
  }
  return context!.newPage();
}

export async function closePage(page: Page): Promise<void> {
  await page.close();
}

export async function closeBrowser(): Promise<void> {
  if (context) {
    await context.close();
    context = null;
  }
  if (browser) {
    await browser.close();
    browser = null;
  }
  console.log('Browser closed');
}

export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function randomDelay(minMs: number = 1000, maxMs: number = 3000): Promise<void> {
  const delayTime = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return delay(delayTime);
}
