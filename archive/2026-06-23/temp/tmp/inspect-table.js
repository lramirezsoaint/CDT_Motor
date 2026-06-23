const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('h1:has-text("Distribuciones")', { timeout: 30000 });
  await page.waitForTimeout(3000);
  const tableCount = await page.locator('table[data-slot="table"]').count();
  console.log('table[data-slot="table"] count', tableCount);
  if (tableCount > 0) {
    const html = await page.locator('table[data-slot="table"]').first().evaluate(el => el.outerHTML.slice(0,2000));
    console.log('table html', html);
    const rows = await page.locator('table[data-slot="table"] tr[data-slot="table-row"]').count();
    console.log('row count by data-slot', rows);
    const ft = await page.locator('table[data-slot="table"] tr[data-slot="table-row"]').first().evaluate(el => el.outerHTML.slice(0,2000)).catch(() => 'none');
    console.log('first row html', ft);
  }
  await browser.close();
})();
