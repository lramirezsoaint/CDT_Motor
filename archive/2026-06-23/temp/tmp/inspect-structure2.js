const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('h1:has-text("Distribuciones")', { timeout: 30000 });
  await page.waitForTimeout(3000);
  const counts = await page.evaluate(() => ({
    tableLength: document.querySelectorAll('table').length,
    trLength: document.querySelectorAll('tr').length,
    thLength: document.querySelectorAll('th').length,
    roleRowLength: document.querySelectorAll('[role="row"]').length,
    divRoleRowLength: document.querySelectorAll('div[role="row"]').length,
    innerHTMLSample: document.querySelector('body')?.innerHTML.slice(0,1000)
  }));
  console.log(JSON.stringify(counts, null, 2));
  await browser.close();
})();
