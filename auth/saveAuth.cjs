require('dotenv/config');
const path = require('path');
const { chromium } = require('@playwright/test');

async function main() {
  const storageStatePath = path.join(__dirname, '..', 'storageState.json');
  const baseURL = process.env.MOTOR_BASE_URL;

  if (!baseURL) {
    throw new Error('Falta MOTOR_BASE_URL en el entorno.');
  }

  const browser = await chromium.launch({
    headless: false,
    channel: process.env.PW_CHANNEL || undefined,
    slowMo: Number(process.env.PW_SLOWMO) || 0,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
  await page.pause();
  await context.storageState({ path: storageStatePath });

  await browser.close();
  console.log(`Sesion guardada en ${storageStatePath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
