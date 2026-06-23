const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('h1:has-text("Distribuciones")', { timeout: 30000 });
  await page.waitForTimeout(3000);
  const content = await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('*')).find(el => el.innerText && el.innerText.includes('Distribuciones'));
    const container = heading ? heading.closest('main') || heading.parentElement : null;
    return {
      headingTag: heading ? heading.tagName : null,
      containerTag: container ? container.tagName : null,
      containerHTML: container ? container.outerHTML.slice(0, 4000) : null,
      sampleNames: Array.from(document.querySelectorAll('*')).filter(el => el.innerText && /Nombre|Tipo|Per[ií]odo|Vers[ió]n|Estado/.test(el.innerText)).slice(0,20).map(el => ({tag: el.tagName, text: el.innerText.slice(0,60), role: el.getAttribute('role'), class: el.className}))
    };
  });
  console.log(JSON.stringify(content, null, 2));
  await browser.close();
})();
