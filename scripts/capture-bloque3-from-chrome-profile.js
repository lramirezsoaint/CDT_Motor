require('dotenv').config();

const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
const os = require('os');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'tmp', 'bloque3-context');
const storagePath = path.join(rootDir, 'storageState.json');
const chromeUserDataDir =
  process.env.CHROME_USER_DATA_DIR || path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data');
const chromeProfile = process.env.CHROME_PROFILE || 'Default';
const useProfileCopy = process.env.CHROME_COPY_PROFILE === 'true';

function requiredEnv(name) {
  const value = (process.env[name] || '').trim();
  if (!value) throw new Error(`Falta variable requerida: ${name}`);
  return value;
}

function appUrl(pathname) {
  const base = new URL(requiredEnv('MOTOR_BASE_URL'));
  return new URL(pathname, base.origin).toString();
}

async function snapshot(page, context, label) {
  fs.mkdirSync(outDir, { recursive: true });
  const bodyText = await page.locator('body').innerText().catch(() => '');
  const data = {
    label,
    capturedAt: new Date().toISOString(),
    url: page.url(),
    title: await page.title().catch(() => ''),
    bodyText,
    localStorage: await page.evaluate(() => Object.fromEntries(Object.entries(window.localStorage))).catch(() => ({})),
    sessionStorage: await page.evaluate(() => Object.fromEntries(Object.entries(window.sessionStorage))).catch(() => ({})),
    cookies: await context.cookies(),
  };
  const base = `${Date.now()}-${label}`;
  fs.writeFileSync(path.join(outDir, `${base}.json`), JSON.stringify(data, null, 2));
  fs.writeFileSync(path.join(outDir, `${base}.html`), await page.content().catch(() => ''));
  await page.screenshot({ path: path.join(outDir, `${base}.png`), fullPage: true }).catch(() => undefined);
  console.log(`Snapshot guardado: ${path.join(outDir, `${base}.json`)}`);
}

function copyChromeProfile() {
  const copyRoot = path.join(rootDir, 'tmp', 'chrome-profile-copy', 'User Data');
  const sourceProfile = path.join(chromeUserDataDir, chromeProfile);
  const targetProfile = path.join(copyRoot, chromeProfile);

  fs.rmSync(path.join(rootDir, 'tmp', 'chrome-profile-copy'), { recursive: true, force: true });
  fs.mkdirSync(copyRoot, { recursive: true });
  fs.copyFileSync(path.join(chromeUserDataDir, 'Local State'), path.join(copyRoot, 'Local State'));
  fs.cpSync(sourceProfile, targetProfile, {
    recursive: true,
    filter: (source) =>
      !/[\\\/](Cache|Code Cache|GPUCache|DawnCache|ShaderCache|GrShaderCache)[\\\/]?/i.test(source) &&
      !/[\\\/](Sessions|Session Storage)[\\\/]?/i.test(source) &&
      !/[\\\/](Network|Safe Browsing Network)[\\\/].*Cookies(-journal)?$/i.test(source),
  });

  return copyRoot;
}

(async () => {
  const userDataDir = useProfileCopy ? copyChromeProfile() : chromeUserDataDir;
  console.log(`Usando Chrome profile: ${userDataDir} / ${chromeProfile}`);
  const context = await chromium.launchPersistentContext(userDataDir, {
    channel: 'chrome',
    headless: false,
    args: [`--profile-directory=${chromeProfile}`],
  });
  const page = context.pages()[0] || (await context.newPage());
  await page.goto(appUrl('/distribuciones/'), { waitUntil: 'commit' });

  if (await page.getByTestId('login-btn-iniciar-sesion').isVisible({ timeout: 10_000 }).catch(() => false)) {
    console.log('La copia del perfil requiere login. Haz login manual en esta ventana; luego el script validara Prueba QA / REAL.');
    await expect
      .poll(
        async () => {
          const text = await page.locator('body').innerText().catch(() => '');
          return /Gestor de Gastos Financieros/i.test(text) && /Distribuciones/i.test(text);
        },
        { timeout: 900_000, message: 'Esperando login manual en la copia del perfil Chrome.' },
      )
      .toBe(true);
  }

  await expect(page.locator('body'), 'El perfil Chrome debe entrar al contexto Prueba QA.').toContainText(/Prueba QA/i, {
    timeout: 120_000,
  });
  await expect(page.locator('body'), 'El perfil Chrome debe entrar al ambiente REAL.').toContainText(/REAL/i, {
    timeout: 120_000,
  });
  await expect(page.locator('body'), 'El perfil Chrome debe mostrar la data esperada de QA.').toContainText(/16 resultados/i, {
    timeout: 120_000,
  });

  await snapshot(page, context, 'chrome-profile-correct-context');
  await context.storageState({ path: storagePath });
  console.log(`storageState guardado: ${storagePath}`);
  await context.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
