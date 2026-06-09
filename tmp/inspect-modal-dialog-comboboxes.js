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
  const controls = await page.evaluate(() => {
    const dlg = document.querySelector('[role="dialog"]');
    if (!dlg) return { error: 'no dialog' };
    const combos = Array.from(dlg.querySelectorAll('button[role="combobox"], [role="combobox"]'));
    return combos.map(el => ({
      ariaControls: el.getAttribute('aria-controls'),
      ariaExpanded: el.getAttribute('aria-expanded'),
      text: el.innerText.trim().replace(/\s+/g,' '),
      class: el.className,
      outer: el.outerHTML.slice(0,300)
    }));
  });
  fs.writeFileSync(path.join(process.cwd(), 'tmp', 'inspect-modal-dialog-comboboxes.json'), JSON.stringify(controls, null, 2), 'utf8');
  await browser.close();
})();
