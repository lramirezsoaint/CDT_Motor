require('dotenv').config();

const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
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

async function validateGastosFinancierosShell(page) {
  const trigger = page.getByTestId('header-expense-type-trigger');

  await expect
    .poll(
      async () => {
        if (await trigger.isVisible().catch(() => false)) {
          return true;
        }

        const currentUrl = page.url();
        if (/pacificotest\.com\.pe/i.test(currentUrl) && !/\/login/i.test(currentUrl)) {
          await page.goto(appUrl('/distribuciones/'), { waitUntil: 'commit' }).catch(() => undefined);
        }

        return false;
      },
      {
        timeout: 600_000,
        message: 'Debes completar login manual hasta que se vea el shell autenticado.',
      },
    )
    .toBe(true);

  await page.getByText(/Verificando permisos/i).waitFor({ state: 'hidden', timeout: 60_000 }).catch(() => undefined);

  await expect(trigger, 'Debe existir selector de modulo.').toBeVisible({ timeout: 120_000 });

  const currentText = (await trigger.innerText()).trim();
  if (!/Gastos Financieros/i.test(currentText)) {
    await expect(trigger, `Selector de modulo bloqueado en estado incorrecto: ${currentText}`).toBeEnabled({
      timeout: 30_000,
    });
    await trigger.click();
    await page
      .locator('[data-radix-popper-content-wrapper]')
      .getByText(/^Gastos Financieros$/i)
      .first()
      .click();
  }

  await expect(trigger, 'Debe quedar activo Gastos Financieros.').toHaveText(/Gastos Financieros/i, {
    timeout: 60_000,
  });

  for (const sectionName of ['Parametrización', 'Aprovisionamiento', 'Asignaciones']) {
    await expect(
      page
        .getByRole('button', { name: new RegExp(`^${sectionName}$`, 'i') })
        .or(page.getByRole('link', { name: new RegExp(`^${sectionName}$`, 'i') }))
        .first(),
      `Debe existir ${sectionName} en sidebar GF.`,
    ).toBeVisible({ timeout: 60_000 });
  }
}

(async () => {
  if (fs.existsSync(storagePath)) {
    fs.unlinkSync(storagePath);
  }

  const browser = await chromium.launch({
    headless: false,
    channel: process.env.PW_CHANNEL || undefined,
  });
  const context = await browser.newContext({ storageState: undefined });
  const page = await context.newPage();

  console.log('Navegador limpio abierto. Haz login manual y deja activo el modulo Gastos Financieros.');
  await page.goto(appUrl('/'), { waitUntil: 'domcontentloaded' });

  await validateGastosFinancierosShell(page);
  await context.storageState({ path: storagePath });

  console.log(`storageState limpio guardado en ${storagePath}`);
  console.log(`URL final: ${page.url()}`);

  await browser.close();
})().catch(async (error) => {
  fs.mkdirSync(path.join(rootDir, 'tmp'), { recursive: true });
  console.error('No se pudo guardar storageState. Deja visible el shell autenticado de GF antes de cerrar el navegador.');
  console.error(error);
  process.exit(1);
});
