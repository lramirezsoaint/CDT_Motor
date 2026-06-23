const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded'});
  await page.waitForSelector('text=Nueva Distribución', { timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.locator('button:has-text("Nueva Distribución")').click();
  await page.waitForSelector('text=Crear distribución', { timeout: 30000 });
  await page.waitForTimeout(2000);
  const modalHTML = await page.locator('div[role="dialog"], [role="dialog"]').first().evaluate(el => el.outerHTML.slice(0, 5000)).catch(() => null);
  const labels = await page.evaluate(() => Array.from(document.querySelectorAll('label, button, span')).filter(el => el.innerText && /Tipo|Periodo|Secciones|Crear|Cancelar|Nombre|Versi|Tasa/i.test(el.innerText)).map(el => ({tag: el.tagName, text: el.innerText, role: el.getAttribute('role'), class: el.className})).slice(0,50));
  console.log('modalHTML', modalHTML);
  console.log('labels', JSON.stringify(labels, null, 2));
  await browser.close();
})();
