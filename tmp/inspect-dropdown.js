const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: "networkidle" });
  await page.waitForTimeout(5000);
  await page.click("button:has-text(\"Nueva Distribución\")");
  await page.waitForTimeout(1000);
  const tipoButton = await page.locator('button[role="combobox"]:has-text("Seleccione")').first();
  console.log('tipo count', await tipoButton.count());
  await tipoButton.click();
  await page.waitForTimeout(1000);
  const options = await page.locator('div[role="option"], [role="option"], [role="menuitem"], [data-radix-slot="item"], [data-testid="select-item"]').all();
  console.log('options count', options.length);
  for (let i = 0; i < options.length; i++) { console.log(i, await options[i].textContent()); }
  const html = await page.content();
  fs.writeFileSync('tmp/after-option-click.html', html, 'utf8');
  await browser.close();
})();
