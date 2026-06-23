const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForTimeout(10000);
  console.log('page html length', await page.content().then(html => html.length));
  const h1 = await page.evaluate(() => {
    const el = document.querySelector('h1');
    return el ? { outerHTML: el.outerHTML, text: el.innerText, tag: el.tagName, role: el.getAttribute('role') } : null;
  });
  console.log('h1', h1);
  const main = await page.evaluate(() => {
    const el = document.querySelector('main');
    return el ? { outerHTML: el.outerHTML.slice(0,1200), class: el.className } : null;
  });
  console.log('main', main);
  const hidden = await page.evaluate(() => {
    const el = document.querySelector('div[hidden]');
    return el ? { outerHTML: el.outerHTML.slice(0,200) }: null;
  });
  console.log('hidden', hidden);
  await browser.close();
})();
