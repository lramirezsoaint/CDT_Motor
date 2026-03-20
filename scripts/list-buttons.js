require('dotenv').config();
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(__dirname, '..', '.auth', 'admin.json') });
  const page = await context.newPage();
  await page.goto(process.env.MOTOR_BASE_URL, { waitUntil: 'networkidle' });
  const data = await page.locator('[role="button"]').evaluateAll((els) =>
    els.slice(0, 50).map((e) => ({ aria: e.getAttribute('aria-label'), text: e.textContent.trim() }))
  );
  console.log(data);
  await browser.close();
})();
