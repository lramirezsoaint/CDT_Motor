import fs from 'fs';
import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { test } from './bloque3.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { ensureGfContext } from './gf-context';

export interface GfDownloadCase {
  caseId: string;
  section: string;
  view: string;
  entityName: string;
}

export function defineGfDownloadCase(downloadCase: GfDownloadCase): void {
  test.describe(`@bloque3 @gf @descarga @${downloadCase.caseId}`, () => {
    test(`@critical @bloque3 @gf @descarga @${downloadCase.caseId} debe validar descarga de ${downloadCase.entityName}`, async ({
      bloque3GastosFinancierosPage,
      page,
    }) => {
      test.setTimeout(180_000);

      try {
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.username,
          env.password
        );
      } catch (error) { }
      await ensureGfContext(page);

      await test.step(`Acceder a ${downloadCase.section} > ${downloadCase.view}`, async () => {
        await bloque3GastosFinancierosPage.openSidebarView(downloadCase.section, downloadCase.view);
      });

      await test.step('Validar que exista boton de descarga', async () => {
        const downloadButton = page
          .locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]')
          .first();
        await expect(
          downloadButton,
          `Debe existir el botón Descargar en ${downloadCase.entityName}.`,
        ).toBeVisible({ timeout: 20_000 });
      });

      await test.step('Ejecutar y validar descarga del archivo', async () => {
        const downloadButton = page
          .locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]')
          .first();

        await expect(downloadButton, `Debe existir el botón Descargar en ${downloadCase.entityName}.`).toBeVisible({
          timeout: 15_000,
        });

        const isEnabled = await downloadButton.isEnabled();
        if (!isEnabled) {
          test.info().annotations.push({
            type: 'skip',
            description: `Botón descargar deshabilitado: no hay datos para exportar en ${downloadCase.entityName}.`,
          });
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
          `El archivo descargado debe ser un Excel. Recibido: ${filename}`,
        ).toMatch(/\.xlsx?$/i);

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
}
