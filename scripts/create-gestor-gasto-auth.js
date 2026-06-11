const { chromium } = require('@playwright/test');
require('dotenv').config();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    'https://distribuciongastos.pacificotest.com.pe/'
  );

  // Haz login MANUAL
  console.log('Inicia sesión manualmente...');

  // Esperar home
  await page.waitForURL(/distribuciones/i, {
    timeout: 180000,
  });

  // Guardar sesión
  await context.storageState({
    path: '.auth/gestorGasto.json',
  });

  console.log('✅ Sesión guardada');

  await browser.close();
})();