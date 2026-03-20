require('dotenv').config();
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(__dirname, '..', '.auth', 'admin.json') });
  const page = await context.newPage();
  await page.goto(process.env.MOTOR_BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const html = await page.content();
  fs.writeFileSync('page.html', html, 'utf8');
  console.log('saved');
  await browser.close();
})();
