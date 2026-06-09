require('dotenv').config();

const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'tmp', 'bloque3-context');
const storagePath = path.join(rootDir, 'storageState.json');

function requiredEnv(name) {
  const value = (process.env[name] || '').trim();
  if (!value) {
    throw new Error(`Falta variable requerida: ${name}`);
  }
  return value;
}

function appUrl(pathname) {
  const base = new URL(requiredEnv('MOTOR_BASE_URL'));
  return new URL(pathname, base.origin).toString();
}

function safeName(value) {
  return value.replace(/[^a-z0-9.-]+/gi, '-').replace(/^-|-$/g, '');
}

async function snapshot(page, context, label) {
  fs.mkdirSync(outDir, { recursive: true });
  const bodyText = await page.locator('body').innerText().catch(() => '');
  const data = {
    label,
    capturedAt: new Date().toISOString(),
    browserChannel: process.env.PW_CHANNEL || 'bundled-chromium',
    url: page.url(),
    title: await page.title().catch(() => ''),
    moduleTrigger: await page.getByTestId('header-expense-type-trigger').innerText().catch(() => ''),
    bodyText,
    localStorage: await page.evaluate(() => Object.fromEntries(Object.entries(window.localStorage))).catch(() => ({})),
    sessionStorage: await page.evaluate(() => Object.fromEntries(Object.entries(window.sessionStorage))).catch(() => ({})),
    cookies: await context.cookies(),
  };

  const base = `${Date.now()}-${safeName(label)}-${safeName(data.browserChannel)}`;
  fs.writeFileSync(path.join(outDir, `${base}.json`), JSON.stringify(data, null, 2));
  fs.writeFileSync(path.join(outDir, `${base}.html`), await page.content().catch(() => ''));
  await page.screenshot({ path: path.join(outDir, `${base}.png`), fullPage: true }).catch(() => undefined);
  console.log(`Snapshot guardado: ${path.join(outDir, `${base}.json`)}`);
  return data;
}

async function selectPruebaQaContext(page) {
  const distributionTrigger = page.getByTestId('distribution-selector-trigger');
  await expect(distributionTrigger, 'Debe existir selector de distribucion/contexto.').toBeVisible({ timeout: 120_000 });

  const currentText = (await distributionTrigger.innerText()).replace(/\s+/g, ' ').trim();
  if (/Prueba QA/i.test(currentText) && /REAL/i.test(currentText)) {
    return;
  }

  await distributionTrigger.click();
  await page.locator('[role="menu"], [role="listbox"], [data-radix-popper-content-wrapper]').first().waitFor({
    state: 'visible',
    timeout: 15_000,
  }).catch(() => undefined);

  const dropdownText = await page.locator('body').innerText().catch(() => '');
  if (!/Prueba QA/i.test(dropdownText)) {
    await snapshot(page, await page.context(), 'missing-prueba-qa-option');
    throw new Error(`No existe opcion Prueba QA en el selector de contexto. Opciones visibles: ${dropdownText.slice(0, 2000)}`);
  }

  const option = page
    .locator('[role="menuitem"], [role="option"], [data-radix-collection-item], [data-slot="dropdown-menu-item"]')
    .filter({ hasText: /Prueba QA/i })
    .first();
  await expect(option, 'Debe existir la opcion Prueba QA en el selector de contexto.').toBeVisible({ timeout: 30_000 });
  await option.click();
  await expect(distributionTrigger, 'Debe quedar seleccionado el contexto Prueba QA.').toContainText(/Prueba QA/i, {
    timeout: 60_000,
  });
  await expect(distributionTrigger, 'Debe quedar seleccionado el ambiente REAL.').toContainText(/REAL/i, {
    timeout: 60_000,
  });
}

async function main() {
  if (fs.existsSync(storagePath)) {
    fs.unlinkSync(storagePath);
  }

  const browser = await chromium.launch({
    headless: false,
    channel: process.env.PW_CHANNEL || undefined,
  });
  const context = await browser.newContext({ storageState: undefined });
  const page = await context.newPage();

  console.log(`Contexto limpio. Canal: ${process.env.PW_CHANNEL || 'bundled-chromium'}`);
  console.log('Haz login manual y deja visible Distribuciones con ambiente Prueba QA / REAL.');

  await page.goto(appUrl('/'), { waitUntil: 'domcontentloaded' });

  await expect
    .poll(
      async () => {
        const text = await page.locator('body').innerText().catch(() => '');
        const url = page.url();
        if (/\/distribuciones/i.test(url) && /Gestor de Gastos Financieros/i.test(text)) {
          return true;
        }

        console.log(`Esperando login en Distribuciones. URL=${url}`);
        return false;
      },
      { timeout: 900_000, message: 'Esperando login manual en navegador Playwright limpio.' },
    )
    .toBe(true);

  await selectPruebaQaContext(page);
  await expect(page.locator('body'), 'Debe cargar data del contexto Prueba QA.').toContainText(/16 resultados/i, {
    timeout: 60_000,
  });

  await snapshot(page, context, 'clean-context-ok');
  await context.storageState({ path: storagePath });
  console.log(`storageState guardado: ${storagePath}`);
  await browser.close();
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
