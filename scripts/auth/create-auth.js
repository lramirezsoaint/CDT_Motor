require('dotenv').config();
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const rolesConfig = require('../../src/config/roles.json');
const VALID_ROLE_IDS = rolesConfig.map(r => r.id);
const roleId = VALID_ROLE_IDS.includes(process.env.AUTH_ROLE) ? process.env.AUTH_ROLE : 'admin';

function getCredentials(roleId) {
  const role = rolesConfig.find(r => r.id === roleId);
  const prefix = role?.envPrefix || 'MOTOR';
  return {
    user: process.env[`${prefix}_USERNAME`] || '',
    pass: process.env[`${prefix}_PASSWORD`] || '',
  };
}

const { user: username, pass: password } = getCredentials(roleId);

if (!username || !password) {
  console.error(`[${roleId.toUpperCase()}] Faltan credenciales en .env para el rol "${roleId}".`);
  process.exit(1);
}

const authDir = path.join(__dirname, '..', '..', '.auth');
const authFile = path.join(authDir, `${roleId}.json`);

console.log(`[${roleId.toUpperCase()}] Auth setup iniciado`);
console.log(`[${roleId.toUpperCase()}] URL: ${process.env.MOTOR_BASE_URL}`);
console.log(`[${roleId.toUpperCase()}] Username: ${username}`);
console.log(`[${roleId.toUpperCase()}] Archivo destino: ${authFile}`);

function isAppUrl(url) {
  return url.hostname.includes('pacificotest.com.pe')
    && !url.hostname.includes('login.microsoftonline.com')
    && !url.pathname.includes('/login')
    && !url.href.includes('redirect_uri=');
}

async function waitForAppSession(page, timeout = 180_000) {
  await page.waitForURL(isAppUrl, { timeout }).catch((error) => {
    throw new Error(
      `[${roleId}] Login no completado. No se alcanzó una URL válida de la app. URL final: ${page.url()}. ${error.message}`,
    );
  });
}

async function saveValidatedStorageState(page) {
  const finalUrl = page.url();

  if (!isAppUrl(new URL(finalUrl))) {
    throw new Error(`Login no completado para ${roleId}. URL final inválida: ${finalUrl}`);
  }

  const state = await page.context().storageState();

  if ((state.cookies?.length ?? 0) === 0 && (state.origins?.length ?? 0) === 0) {
    throw new Error(`Storage state vacío para ${roleId}. Login no completado. URL final: ${finalUrl}`);
  }

  await page.context().storageState({ path: authFile });
  console.log(
    `[${roleId.toUpperCase()}] Sesión validada. Cookies: ${state.cookies.length}. Origins: ${state.origins.length}. URL final: ${finalUrl}`,
  );
}

async function fillMicrosoftLogin(page) {
  const emailInput = page
    .locator('#i0116, input[type="email"], input[name="loginfmt"]')
    .or(page.getByRole('textbox', { name: /email|phone|skype|correo|tel[eé]fono/i }))
    .first();

  await emailInput.waitFor({ state: 'visible', timeout: 60_000 });
  console.log(`[${roleId.toUpperCase()}] Llenando email...`);
  await emailInput.fill(username);
  await page.locator('#idSIButton9').click();

  const passwordInput = page.locator('#i0118, input[type="password"]').first();
  const approveSignIn = page.getByText(/Approve sign in|Aprobar inicio/i).first();

  const hasPasswordInput = await passwordInput.isVisible({ timeout: 30_000 }).catch(() => false);
  if (!hasPasswordInput && (await approveSignIn.isVisible({ timeout: 5_000 }).catch(() => false))) {
    console.log(`[${roleId.toUpperCase()}] MFA detectado. Aprueba el inicio de sesión para continuar...`);
    await waitForAppSession(page);
    return;
  }

  await passwordInput.waitFor({ state: 'visible', timeout: 60_000 });
  console.log(`[${roleId.toUpperCase()}] Llenando password...`);
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

  await entryButton.first().waitFor({ state: 'visible', timeout: 30_000 });

  const popupPromise = page.waitForEvent('popup', { timeout: 15_000 }).catch(() => undefined);
  await entryButton.first().click();
  const popup = await popupPromise;

  if (popup) {
    await popup.waitForLoadState('domcontentloaded').catch(() => undefined);
    return popup;
  }

  return page;
}

(async () => {
  try {
    fs.mkdirSync(authDir, { recursive: true });

    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log(`[${roleId.toUpperCase()}] Navegando a ${process.env.MOTOR_BASE_URL}`);
    await page.goto(process.env.MOTOR_BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60_000 });

    const currentUrl = new URL(page.url());

    const isAlreadyAuthenticated = isAppUrl(currentUrl);

    if (isAlreadyAuthenticated) {
      console.log(`[${roleId.toUpperCase()}] Ya autenticado. Validando sesión antes de guardar...`);
      await saveValidatedStorageState(page);
      await browser.close();
      console.log(`[${roleId.toUpperCase()}] Sesión guardada en ${authFile}`);
      process.exit(0);
    }

    const authPage = await startAppLogin(page);

    await authPage.waitForURL((url) => {
      return url.hostname.includes('login.microsoftonline.com') || isAppUrl(url);
    }, { timeout: 60_000 }).catch(() => undefined);

    if (/login\.microsoftonline\.com/i.test(authPage.url())) {
      await fillMicrosoftLogin(authPage);
    } else {
      const emailInput = authPage.locator('#i0116, input[type="email"], input[name="loginfmt"]').first();
      if (await emailInput.isVisible({ timeout: 10_000 }).catch(() => false)) {
        await fillMicrosoftLogin(authPage);
      }
    }

    if (authPage !== page) {
      await authPage.waitForEvent('close', { timeout: 90_000 }).catch(() => undefined);
    }

    console.log(`[${roleId.toUpperCase()}] Esperando redirección a la app...`);
    await waitForAppSession(page);

    console.log(`[${roleId.toUpperCase()}] Autenticado exitosamente. Validando sesión antes de guardar...`);
    await saveValidatedStorageState(page);
    await browser.close();

    console.log(`[${roleId.toUpperCase()}] Sesión guardada en ${authFile}`);
    console.log(`[${roleId.toUpperCase()}] Listo.`);
    process.exit(0);
  } catch (error) {
    console.error(`[${roleId.toUpperCase()}] Auth falló:`, error.message);
    process.exit(1);
  }
})();

