const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: path.join(process.cwd(), "storageState.json") });
  const page = await context.newPage();
  await page.goto("https://distribuciongastos.pacificotest.com.pe/distribuciones/", { waitUntil: "networkidle" });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: "tmp/distribuciones.png", fullPage: true });
  await page.click("button:has-text(\"Nueva Distribución\")");
  await page.waitForTimeout(3000);
  const dialog = await page.locator("div[role=\"dialog\"]:has-text(\"Crear Distribución\")").first();
  console.log("dialog count", await dialog.count());
  const html = await dialog.innerHTML();
  fs.writeFileSync("tmp/dialog.html", html, "utf8");
  console.log("dialog saved");
  await browser.close();
})();
