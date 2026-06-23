const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForTimeout(10000);
  const content = await page.content();
  console.log('Creada index', content.indexOf('Creada'));
  console.log('Flujo index', content.indexOf('Flujo del mes'));
  console.log('Real NIIF index', content.indexOf('Real NIIF'));
  console.log('Nombre index', content.indexOf('Nombre'));
  console.log('Período index', content.indexOf('Período'));
  if (content.indexOf('Flujo del mes') !== -1) {
    const idx = content.indexOf('Flujo del mes');
    console.log(content.slice(idx-100, idx+200));
  }
  await browser.close();
})();
