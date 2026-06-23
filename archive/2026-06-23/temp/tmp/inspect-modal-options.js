const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), 'storageState.json') });
  const page = await context.newPage();
  await page.goto('https://distribuciongastos.pacificotest.com.pe/distribuciones/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('text=Nueva Distribución', { timeout: 30000 });
  await page.locator('button:has-text("Nueva Distribución")').click();
  await page.waitForSelector('text=Crear distribución', { timeout: 30000 });
  await page.waitForTimeout(1500);
  const comboboxes = await page.locator('button[role="combobox"]').count();
  const details = [];
  for (let i=0; i<comboboxes; i++) {
    await page.locator('button[role="combobox"]').nth(i).click();
    await page.waitForTimeout(500);
    const items = await page.evaluate(() => {
      const popup = Array.from(document.querySelectorAll('div, ul, section')).find(el => el.innerText && /Seleccione|Real|Flujo|Local|Ajustes|NIEA|NII?F|2026|Enero|Febrero|Marzo/i.test(el.innerText));
      if (!popup) return null;
      const optionEls = Array.from(popup.querySelectorAll('*')).filter(el => el.innerText && el.innerText.trim().length > 0 && el.childElementCount===0).map(el => ({tag: el.tagName, role: el.getAttribute('role'), text: el.innerText.trim().replace(/\s+/g,' '), class: el.className.slice(0,100)})).slice(0,50);
      return { popupTag: popup.tagName, popupClass: popup.className, popupText: popup.innerText.slice(0,500), options: optionEls.slice(0,50), count: optionEls.length};
    });
    details.push({index: i, comboboxText: await page.locator('button[role="combobox"]').nth(i).innerText(), details: details});
    await page.waitForTimeout(300);
  }
  fs.writeFileSync(path.join(process.cwd(), 'tmp', 'inspect-modal-options-output.json'), JSON.stringify({comboboxes, details}, null, 2), 'utf8');
  await browser.close();
})();
