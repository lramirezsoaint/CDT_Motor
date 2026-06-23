const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('h1:has-text("Distribuciones")', { timeout: 30000 });
  await page.waitForTimeout(3000);
  console.log('frames', page.frames().map(f => f.url()));
  console.log('frame count', page.frames().length);
  for (const f of page.frames()) {
    console.log('frame url', f.url());
    console.log('frame name', f.name());
    console.log('frame html length', await f.evaluate(() => document.documentElement.outerHTML.length));
    console.log('frame table count', await f.evaluate(() => document.querySelectorAll('table').length));
  }
  await browser.close();
})();
