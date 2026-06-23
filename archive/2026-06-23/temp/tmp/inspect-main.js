const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('text=Distribuciones', { timeout: 30000 });
  await page.waitForTimeout(3000);
  const main = await page.evaluate(() => {
    const mainEl = Array.from(document.querySelectorAll('main')).find(el => el.innerText.includes('Distribuciones'));
    return mainEl ? mainEl.outerHTML.slice(0, 6000) : null;
  });
  console.log(main ? main : 'no main html');
  await browser.close();
})();
