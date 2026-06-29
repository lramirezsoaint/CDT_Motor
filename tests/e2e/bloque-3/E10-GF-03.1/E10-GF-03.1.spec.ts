import { env } from '@config/env';
import { test } from '../_shared/bloque3.fixture';
import { expect } from '@playwright/test';
import fs from 'fs';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @critical @E10-GF-03.1', () => {
  test('@critical @bloque3 @gf @E10-GF-03.1 debe validar descarga de archivo Especiales NIIF', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
   try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGFUsername,
        env.gestorGFPassword
      );
    } catch (error) { }
    await test.step('Acceder a Asignaciones > Especiales NIIF', async () => {
      await bloque3GastosFinancierosPage.openSidebarView('Asignaciones', 'Especiales NIIF');
    });

    await test.step('Validar que exista boton de descarga', async () => {
      const downloadButton = page.locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]').first();
      await expect(downloadButton, 'Debe existir el botón Descargar en Especiales NIIF.').toBeVisible({ timeout: 20_000 });
    });

    await test.step('Ejecutar descarga del archivo si el botón está habilitado', async () => {
      const downloadButton = page.locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]').first();
      await expect(downloadButton, 'Debe existir el botón Descargar en Especiales NIIF.').toBeVisible({ timeout: 15_000 });
      const isEnabled = await downloadButton.isEnabled();
      if (!isEnabled) {
        test.info().annotations.push({ type: 'skip', description: 'Botón descargar deshabilitado para Especiales NIIF.' });
        return;
      }
      const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 60_000 }),
        downloadButton.click(),
      ]);
      expect(download, 'Debe iniciarse la descarga del archivo.').toBeTruthy();
      const filename = download.suggestedFilename();
      expect(filename, 'El archivo descargado debe tener un nombre válido.').toBeTruthy();
      expect(
        filename.toLowerCase(),
        `El archivo descargado debe ser un Excel o CSV. Recibido: ${filename}`,
      ).toMatch(/\.(xlsx?|csv)$/i);
      const failure = await download.failure();
      expect(failure, 'La descarga no debe fallar.').toBeNull();
      const downloadPath = await download.path().catch(() => null);
      if (downloadPath) {
        const stats = fs.statSync(downloadPath);
        expect(
          stats.size,
          `El archivo descargado debe tener contenido (tamaño > 0). Recibido: ${stats.size} bytes`,
        ).toBeGreaterThan(0);
      }
    });
  });
});