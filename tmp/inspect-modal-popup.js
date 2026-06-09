const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('text=Nueva Distribución', { timeout: 30000 });
  await page.locator('button:has-text("Nueva Distribución")').click();
  await page.waitForSelector('text=Crear distribución', { timeout: 30000 });
  await page.waitForTimeout(1000);
  const combo = page.locator('[role="dialog"] button[role="combobox"]').first();
  const ariaControls = await combo.getAttribute('aria-controls');
  await combo.click({ force: true });
  await page.waitForTimeout(500);
  const result = await page.evaluate((ariaControls) => {
    const popup = document.getElementById(ariaControls);
    const allOpen = Array.from(document.querySelectorAll('[data-state="open"], [data-state="closed"]')).map(el => ({tag: el.tagName, id: el.id, role: el.getAttribute('role'), state: el.getAttribute('data-state'), text: el.innerText.trim().replace(/\s+/g,' ').slice(0,200)}));
    const popupDetail = popup ? {tag: popup.tagName, id: popup.id, role: popup.getAttribute('role'), class: popup.className, text: popup.innerText.trim().replace(/\s+/g,' ').slice(0,500), childCount: popup.childElementCount, options: Array.from(popup.querySelectorAll('div, button, li, span')).filter(el => el.innerText && el.innerText.trim().length > 1 && el.childElementCount===0).map(el => ({tag: el.tagName, role: el.getAttribute('role'), text: el.innerText.trim().replace(/\s+/g,' '), class: el.className.slice(0,100)})).slice(0,50)} : null;
    return {ariaControls, popupDetail, allOpenCount: allOpen.length, allOpen: allOpen.slice(0,30)};
  }, ariaControls);
  fs.writeFileSync(path.join(process.cwd(), 'tmp', 'inspect-modal-popup.json'), JSON.stringify(result, null, 2), 'utf8');
  await browser.close();
})();
