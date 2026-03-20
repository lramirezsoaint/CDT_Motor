require("dotenv").config();
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async()=>{
  const authFile = path.join(__dirname, '..', '.auth', 'admin.json');
  fs.mkdirSync(path.dirname(authFile), { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(process.env.MOTOR_BASE_URL + 'login', { waitUntil: 'networkidle' });
  const entry = page.getByText(/Iniciar sesi[oó]n/).first();
  if (await entry.isVisible({ timeout: 30000 }).catch(() => false)) {
    await entry.click();
  }
  await page.waitForLoadState('domcontentloaded');
  const already = await page.getByText(/Distribuci[oó]n/i).first().isVisible().catch(()=>false);
  if (!already) {
    if (await page.locator('#i0116').isVisible().catch(()=>false)) {
      await page.fill('#i0116', process.env.MOTOR_USERNAME);
      await page.click('#idSIButton9');
    }
    if (await page.locator('#i0118').isVisible().catch(()=>false)) {
      await page.fill('#i0118', process.env.MOTOR_PASSWORD);
      await page.click('#idSIButton9');
    }
    try { await page.getByRole('button', { name: /yes|si/i }).click({ timeout: 10000 }); } catch {}
    await page.waitForURL(/distribuciones/i, { timeout: 60000 });
  }
  await page.waitForLoadState('networkidle');
  await context.storageState({ path: authFile });
  await browser.close();
  console.log('storage saved', authFile);
})();
