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
  const result = await page.evaluate(() => {
    const dlg = document.querySelector('[role="dialog"]');
    if (!dlg) return { error: 'no dialog' };
    const nodes = Array.from(dlg.querySelectorAll('input, button, label, div, span'))
      .filter(el => el.innerText && /Tipo|Per[ií]odo|Secciones|Crear|Cancelar|Nombre|Versi|Tasa|Seleccione|Seleccione una|Seleccione un/i.test(el.innerText))
      .map(el => ({
        tag: el.tagName,
        role: el.getAttribute('role'),
        classes: el.className,
        text: el.innerText.trim().replace(/\s+/g, ' '),
        attrs: {type: el.getAttribute('type'), name: el.getAttribute('name'), placeholder: el.getAttribute('placeholder'), 'data-testid': el.getAttribute('data-testid')}
      }));
    const comboboxes = Array.from(dlg.querySelectorAll('button[role="combobox"], [role="combobox"]')).map(el => ({tag: el.tagName, role: el.getAttribute('role'), text: el.innerText.trim().replace(/\s+/g, ' '), classes: el.className}));
    return { count: nodes.length, nodes: nodes.slice(0,50), comboboxes };
  });
  fs.writeFileSync(path.join(process.cwd(), 'tmp', 'inspect-modal-2-output.json'), JSON.stringify(result, null, 2), 'utf8');
  await browser.close();
})();
