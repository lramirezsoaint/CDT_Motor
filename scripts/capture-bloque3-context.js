require('dotenv').config();

const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'tmp', 'bloque3-context');
const mode = process.argv[2] || 'manual';

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

function sanitizeHeaders(headers) {
  const sanitized = {};
  for (const [key, value] of Object.entries(headers || {})) {
    sanitized[key] = /authorization|cookie|token|secret|password/i.test(key) ? '[redacted]' : value;
  }
  return sanitized;
}

function isInterestingUrl(url) {
  return /api|auth|permission|permiso|menu|modul|expense|gasto|rol|role|profile|perfil|bootstrap|organization|organizacion|distribucion/i.test(
    url,
  );
}

async function storageSnapshot(page) {
  return await page.evaluate(() => ({
    localStorage: Object.fromEntries(Object.entries(window.localStorage)),
    sessionStorage: Object.fromEntries(Object.entries(window.sessionStorage)),
  }));
}

async function uiSnapshot(page) {
  const text = await page.locator('body').innerText().catch(() => '');
  return {
    url: page.url(),
    title: await page.title().catch(() => ''),
    moduleTrigger: await page.getByTestId('header-expense-type-trigger').innerText().catch(() => ''),
    buttons: await page.getByRole('button').allInnerTexts().catch(() => []),
    links: await page.getByRole('link').allInnerTexts().catch(() => []),
    testIds: await page
      .locator('[data-testid]')
      .evaluateAll((nodes) =>
        nodes.map((node) => ({
          testId: node.getAttribute('data-testid'),
          text: node.textContent?.replace(/\s+/g, ' ').trim() || '',
        })),
      )
      .catch(() => []),
    sidebarText: await page.locator('aside, nav').first().innerText().catch(() => ''),
    hasComunes: /Comunes/i.test(text),
    hasParametrizacion: /Parametrizaci[oó]n/i.test(text),
    hasMaestroProducto: /Maestro Producto/i.test(text),
    hasCuentasContables: /Cuentas Contables/i.test(text),
    hasAprovisionamiento: /Aprovisionamiento/i.test(text),
    hasAsignaciones: /Asignaciones/i.test(text),
  };
}

async function captureContext(label, page, context, network) {
  fs.mkdirSync(outDir, { recursive: true });
  const fileBase = `${Date.now()}-${safeName(label)}`;
  const snapshot = {
    label,
    capturedAt: new Date().toISOString(),
    ui: await uiSnapshot(page),
    storage: await storageSnapshot(page),
    cookies: await context.cookies(),
    network,
  };
  const jsonPath = path.join(outDir, `${fileBase}.json`);
  const htmlPath = path.join(outDir, `${fileBase}.html`);
  const pngPath = path.join(outDir, `${fileBase}.png`);
  fs.writeFileSync(jsonPath, JSON.stringify(snapshot, null, 2));
  fs.writeFileSync(htmlPath, await page.content().catch(() => ''));
  await page.screenshot({ path: pngPath, fullPage: true }).catch(() => undefined);
  console.log(`Contexto guardado: ${jsonPath}`);
  return jsonPath;
}

async function attachNetworkCollector(page) {
  const network = [];
  page.on('response', async (response) => {
    const url = response.url();
    if (!isInterestingUrl(url)) {
      return;
    }

    const request = response.request();
    const item = {
      url,
      method: request.method(),
      status: response.status(),
      requestHeaders: sanitizeHeaders(await request.allHeaders().catch(() => ({}))),
      responseHeaders: sanitizeHeaders(await response.allHeaders().catch(() => ({}))),
      body: null,
    };

    try {
      const contentType = item.responseHeaders['content-type'] || '';
      if (/json/i.test(contentType)) {
        item.body = await response.json();
      } else {
        item.body = (await response.text()).slice(0, 5000);
      }
    } catch {
      item.body = '[unavailable]';
    }

    network.push(item);
  });
  return network;
}

async function waitManualReady(page) {
  console.log('Haz login manual y deja visible el estado correcto: /parametrizacion/maestro-producto/ con Gastos Financieros.');
  await expect
    .poll(
      async () => {
        const snapshot = await uiSnapshot(page);
        const visibleManualState =
          /\/parametrizacion\/maestro-producto/i.test(snapshot.url) &&
          snapshot.hasMaestroProducto &&
          snapshot.hasParametrizacion &&
          snapshot.hasAprovisionamiento &&
          snapshot.hasAsignaciones;

        if (visibleManualState) {
          return true;
        }

        console.log(`Esperando estado manual. URL actual: ${snapshot.url}`);
        return false;
      },
      { timeout: 900_000, message: 'Esperando estado manual correcto de Bloque 3.' },
    )
    .toBe(true);
}

async function runManual() {
  const browser = await chromium.launch({ headless: false, channel: process.env.PW_CHANNEL || undefined });
  const context = await browser.newContext({ storageState: undefined });
  const page = await context.newPage();
  const network = await attachNetworkCollector(page);
  await page.goto(appUrl('/'), { waitUntil: 'domcontentloaded' });
  try {
    await waitManualReady(page);
    await captureContext('manual-correcto', page, context, network);
    await context.storageState({ path: path.join(rootDir, 'storageState.json') });
    console.log('storageState.json guardado desde contexto manual correcto.');
  } catch (error) {
    await captureContext('manual-timeout-debug', page, context, network);
    throw error;
  } finally {
    await browser.close();
  }
}

async function runStored() {
  const storagePath = path.join(rootDir, 'storageState.json');
  const browser = await chromium.launch({ headless: process.env.HEADLESS === 'true', channel: process.env.PW_CHANNEL || undefined });
  const context = await browser.newContext({ storageState: fs.existsSync(storagePath) ? storagePath : undefined });
  const page = await context.newPage();
  const network = await attachNetworkCollector(page);
  await page.goto(appUrl('/parametrizacion/maestro-producto/'), { waitUntil: 'commit' });
  await page.getByText(/Cargando|Verificando permisos/i).waitFor({ state: 'hidden', timeout: 60_000 }).catch(() => undefined);
  await captureContext('automation-stored', page, context, network);
  await browser.close();
}

async function runStoredDistribuciones() {
  const storagePath = path.join(rootDir, 'storageState.json');
  const browser = await chromium.launch({ headless: process.env.HEADLESS === 'true', channel: process.env.PW_CHANNEL || undefined });
  const context = await browser.newContext({ storageState: fs.existsSync(storagePath) ? storagePath : undefined });
  const page = await context.newPage();
  const network = await attachNetworkCollector(page);
  await page.goto(appUrl('/distribuciones/'), { waitUntil: 'commit' });
  await page.getByText(/Cargando|Verificando permisos/i).waitFor({ state: 'hidden', timeout: 60_000 }).catch(() => undefined);

  await expect(page.locator('body'), 'Debe restaurar contexto Prueba QA.').toContainText(/Prueba QA/i, { timeout: 120_000 });
  await expect(page.locator('body'), 'Debe restaurar ambiente REAL.').toContainText(/REAL/i, { timeout: 120_000 });
  await expect(page.locator('body'), 'Debe cargar las 16 distribuciones del contexto correcto.').toContainText(/16 resultados/i, {
    timeout: 120_000,
  });

  await captureContext('automation-stored-distribuciones-ok', page, context, network);
  await browser.close();
}

(async () => {
  if (mode === 'manual') {
    await runManual();
    return;
  }
  if (mode === 'stored') {
    await runStored();
    return;
  }
  if (mode === 'stored-distribuciones') {
    await runStoredDistribuciones();
    return;
  }
  throw new Error(`Modo no soportado: ${mode}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
