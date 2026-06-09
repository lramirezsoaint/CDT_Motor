const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForTimeout(10000);
  const elements = await page.evaluate(() => {
    const matches = [];
    const texts = ['Creada', 'Real NIIF', 'Flujo del mes', 'Tipo', 'Nombre', 'Buscar'];
    const all = Array.from(document.querySelectorAll('*'));
    for (const el of all) {
      const text = el.innerText?.trim();
      if (!text) continue;
      if (texts.some(t => text.includes(t))) {
        matches.push({tag: el.tagName, role: el.getAttribute('role'), class: el.className, text: text.slice(0,100), childCount: el.childElementCount});
      }
      if (matches.length >= 30) break;
    }
    return matches;
  });
  console.log(JSON.stringify(elements, null, 2));
  await browser.close();
})();
