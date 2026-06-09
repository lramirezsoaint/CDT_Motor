const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('text=Distribuciones', { timeout: 30000 });
  await page.waitForTimeout(3000);
  const html = await page.evaluate(() => {
    const body = document.body.innerHTML;
    const idx = body.indexOf('data-slot');
    return {
      dataSlotFound: idx !== -1,
      snippet: idx !== -1 ? body.slice(idx, idx + 500) : null,
      tableText: body.includes('<table'),
      rowText: body.includes('data-slot="table-row"') || body.includes('role="row"')
    };
  });
  console.log(JSON.stringify(html, null, 2));
  await browser.close();
})();
