const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('text=Distribuciones', { timeout: 30000 });
  await page.waitForTimeout(3000);
  const dataSlots = await page.evaluate(() => ({
    tableRows: document.querySelectorAll('[data-slot="table-row"]').length,
    tableHeads: document.querySelectorAll('[data-slot="table-head"]').length,
    tableBody: document.querySelectorAll('[data-slot="table-body"]').length,
    table: document.querySelectorAll('[data-slot="table"]').length,
    tbody: document.querySelectorAll('tbody').length,
    tableElems: Array.from(document.querySelectorAll('[data-slot="table"], [data-slot="table-row"], [data-slot="table-head"]')).slice(0,5).map(el => ({tag: el.tagName, class: el.className, outer: el.outerHTML.slice(0,200)})),
  }));
  console.log(JSON.stringify(dataSlots, null, 2));
  await browser.close();
})();
