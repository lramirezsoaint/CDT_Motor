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
  const combos = await page.locator('[role="dialog"] button[role="combobox"]').count();
  const details = [];
  for (let i = 0; i < combos; i++) {
    const combo = page.locator('[role="dialog"] button[role="combobox"]').nth(i);
    await combo.click({ force: true });
    await page.waitForTimeout(500);
    const popup = await page.evaluate(() => {
      const maybe = Array.from(document.querySelectorAll('div, ul, section')).find(el => el.getAttribute('data-state') === 'open' || el.id.startsWith('radix-'));
      if (!maybe) return null;
      return {
        tag: maybe.tagName,
        id: maybe.id,
        role: maybe.getAttribute('role'),
        class: maybe.className,
        text: maybe.innerText.trim().replace(/\s+/g, ' ').slice(0,500),
        options: Array.from(maybe.querySelectorAll('div, button, li, span')).filter(el => el.innerText && el.innerText.trim().length > 1 && el.childElementCount===0).map(el => ({tag: el.tagName, role: el.getAttribute('role'), text: el.innerText.trim().replace(/\s+/g,' '), class: el.className.slice(0,100)})).slice(0,50)
      };
    });
    details.push({index: i, popup});
    await page.keyboard.press('Escape');
    await page.waitForTimeout(150);
  }
  fs.writeFileSync(path.join(process.cwd(), 'tmp', 'inspect-modal-options.json'), JSON.stringify({combos, details}, null, 2), 'utf8');
  await browser.close();
})();
