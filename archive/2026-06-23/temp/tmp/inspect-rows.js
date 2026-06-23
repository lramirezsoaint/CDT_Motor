const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  const response = await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: "networkidle" });
  console.log("url", page.url());
  console.log("status", response?.status());
  await page.waitForTimeout(10000);
  console.log("title", await page.title());
  const visible = await page.locator('h1:has-text("Distribuciones")').count();
  console.log('heading count', visible);
  const counts = await page.evaluate(() => ({ tbrows: document.querySelectorAll('table tbody tr').length, tables: document.querySelectorAll('table').length, divrows: document.querySelectorAll('[role="row"]').length, rows: document.querySelectorAll('tr').length }));
  console.log(JSON.stringify(counts, null, 2));
  await page.screenshot({ path: 'tmp/distribuciones-after-wait.png', fullPage: true });
  await browser.close();
})();
