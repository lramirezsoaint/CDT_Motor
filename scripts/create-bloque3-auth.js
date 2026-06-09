require('dotenv').config();

const { chromium } = require('@playwright/test');
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

async function expectVisiblePassword(passwordInput) {
  await passwordInput.waitFor({ state: 'visible', timeout: 60_000 });
}

async function fillMicrosoftLogin(page, username, password) {
  const emailInput = page
    .locator('#i0116, input[type="email"], input[name="loginfmt"]')
    .or(page.getByRole('textbox', { name: /email|phone|skype|correo|tel[eé]fono/i }))
    .first();
  await emailInput.waitFor({ state: 'visible', timeout: 60_000 });
  await emailInput.fill(username);
  await page.locator('#idSIButton9').click();

  const passwordInput = page.locator('#i0118, input[type="password"]').first();
  const approveSignIn = page.getByText(/Approve sign in|Aprobar inicio/i).first();
  const hasPasswordInput = await passwordInput.isVisible({ timeout: 30_000 }).catch(() => false);
  if (!hasPasswordInput && (await approveSignIn.isVisible({ timeout: 5_000 }).catch(() => false))) {
    console.log('Microsoft MFA solicitado. Aprueba el inicio de sesion para continuar.');
    await page.waitForURL(/pacificotest\.com\.pe|\/distribuciones/i, { timeout: 180_000 });
    return;
  }
  await expectVisiblePassword(passwordInput);
  await passwordInput.fill(password);
  await page.locator('#idSIButton9').click();

  const staySignedIn = page.locator('#idSIButton9').or(page.getByRole('button', { name: /yes|sí|si/i }));
  if (await staySignedIn.first().isVisible({ timeout: 15_000 }).catch(() => false)) {
    await staySignedIn.first().click();
  }
}

async function startAppLogin(page) {
  const entryButton = page
    .getByTestId('login-btn-iniciar-sesion')
    .or(page.locator('#login-btn-iniciar-sesion'))
    .or(page.getByRole('button', { name: /iniciar sesi[oó]n/i }))
    .or(page.getByText(/iniciar sesi[oó]n/i));

  await entryButton.first().waitFor({ state: 'visible', timeout: 60_000 });

  const popupPromise = page.waitForEvent('popup', { timeout: 15_000 }).catch(() => undefined);
  await entryButton.first().click();
  const popup = await popupPromise;

  if (popup) {
    await popup.waitForLoadState('domcontentloaded').catch(() => undefined);
    return popup;
  }

  return page;
}

async function selectGastosFinancieros(page) {
  await page.goto(appUrl('/distribuciones/'), { waitUntil: 'commit' });
  await page.waitForURL(/\/distribuciones/i, { timeout: 60_000 });
  await page.getByText(/Verificando permisos/i).waitFor({ state: 'hidden', timeout: 30_000 }).catch(() => undefined);

  const trigger = page.getByTestId('header-expense-type-trigger');
  await trigger.waitFor({ state: 'visible', timeout: 30_000 });

  const text = (await trigger.innerText()).trim();
  if (!/Gastos Financieros/i.test(text)) {
    await trigger.waitFor({ state: 'attached', timeout: 30_000 });
    if (!(await trigger.isEnabled())) {
      throw new Error(`Selector de modulo bloqueado en estado incorrecto: ${text}`);
    }
    await trigger.click();
    const option = page.locator('[data-radix-popper-content-wrapper]').getByText(/^Gastos Financieros$/i).first();
    await option.waitFor({ state: 'visible', timeout: 15_000 });
    await option.click();
  }

  await page.getByText(/Cargando distribuciones/i).waitFor({ state: 'hidden', timeout: 20_000 }).catch(() => undefined);
  await page.getByRole('heading', { name: /Distribuciones/i }).waitFor({ state: 'visible', timeout: 30_000 });
  await trigger.waitFor({ state: 'visible', timeout: 10_000 });
  const finalText = (await trigger.innerText()).trim();
  if (!/Gastos Financieros/i.test(finalText)) {
    throw new Error(`No se pudo activar Gastos Financieros. Estado actual: ${finalText}`);
  }
}

async function validateShell(page) {
  for (const sectionName of ['Parametrización', 'Aprovisionamiento', 'Asignaciones', 'Procesos', 'Reportes']) {
    const section = page
      .getByRole('button', { name: new RegExp(`^${sectionName}$`, 'i') })
      .or(page.getByRole('link', { name: new RegExp(`^${sectionName}$`, 'i') }))
      .first();
    await section.waitFor({ state: 'visible', timeout: 20_000 });
  }
}

let debugPage;

(async () => {
  const username = requiredEnv('MOTOR_USERNAME');
  const password = requiredEnv('MOTOR_PASSWORD');

  if (fs.existsSync(storagePath)) {
    fs.unlinkSync(storagePath);
  }

  const browser = await chromium.launch({
    headless: process.env.HEADLESS === 'true',
    channel: process.env.PW_CHANNEL || undefined,
    slowMo: Number(process.env.PW_SLOWMO || 0),
  });

  const context = await browser.newContext({ storageState: undefined });
  const page = await context.newPage();
  debugPage = page;

  await page.goto(appUrl('/'), { waitUntil: 'domcontentloaded' });
  const authPage = await startAppLogin(page);

  await authPage.waitForURL(/login\.microsoftonline\.com|\/distribuciones/i, { timeout: 60_000 }).catch(() => undefined);

  if (/login\.microsoftonline\.com/i.test(authPage.url())) {
    await fillMicrosoftLogin(authPage, username, password);
  } else {
    const emailInput = authPage.locator('#i0116, input[type="email"], input[name="loginfmt"]').first();
    if (await emailInput.isVisible({ timeout: 10_000 }).catch(() => false)) {
      await fillMicrosoftLogin(authPage, username, password);
    }
  }

  if (authPage !== page) {
    await authPage.waitForEvent('close', { timeout: 90_000 }).catch(() => undefined);
  }

  await page.waitForURL(/\/distribuciones/i, { timeout: 90_000 }).catch(() => undefined);
  await selectGastosFinancieros(page);
  await validateShell(page);
  await context.storageState({ path: storagePath });

  console.log(`storageState limpio guardado en ${storagePath}`);
  console.log(`URL final: ${page.url()}`);

  await browser.close();
})().catch(async (error) => {
  if (debugPage) {
    fs.mkdirSync(path.join(rootDir, 'tmp'), { recursive: true });
    await debugPage.screenshot({ path: path.join(rootDir, 'tmp', 'bloque3-auth-failure.png'), fullPage: true }).catch(() => undefined);
    fs.writeFileSync(path.join(rootDir, 'tmp', 'bloque3-auth-failure.html'), await debugPage.content().catch(() => ''));
    console.error(`URL fallo: ${debugPage.url()}`);
  }
  console.error(error);
  process.exit(1);
});
