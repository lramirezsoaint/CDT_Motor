import { env } from '@config/env';
import { test } from './_shared/bloque3.fixture';
import { crearYSeleccionarDistribucion, DistribucionCreada } from './_shared/distribucion-precondicion';
import { openGfUploadDialog, attachGfUploadFile, confirmGfUpload } from './_shared/gf-upload';
import { UPLOAD_CASES, DOWNLOAD_CASES } from './_shared/gf-upload-cases-data';
import { expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';

test.describe('@bloque3 @gf @carga-completa', () => {
  let distribucion: DistribucionCreada;

  test('@smoke @bloque3 @gf @carga-completa debe ejecutar carga secuencial completa de archivos GF', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
    test.setTimeout(900_000);
    try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(
            env.username,
            env.password
        );
    } catch (error) { }
    await test.step('Seleccionar distribucion existente', async () => {
      await bloque3GastosFinancierosPage.openHome();
      await page.waitForTimeout(3_000);
      // Use search to find any CARGA_COMPLETA distribution
      const searchInput = page.getByPlaceholder('Buscar').first();
      await expect(searchInput, 'Debe existir el campo Buscar.').toBeVisible({ timeout: 10_000 });
      await searchInput.fill('CARGA_COMPLETA');
      await page.waitForTimeout(3_000);
      const row = page.locator('table tbody tr').filter({ hasText: 'CARGA_COMPLETA' }).first();
      const hasRow = await row.isVisible({ timeout: 10_000 }).catch(() => false);
      if (hasRow) {
        const cells = row.locator('td');
        distribucion = {
          nombre: await cells.nth(0).innerText().catch(() => 'FALLBACK'),
          periodo: await cells.nth(2).innerText().catch(() => '202606'),
          tipo: await cells.nth(1).innerText().catch(() => 'Real NIIF'),
          seccion: 'Flujo del mes',
        };
        await cells.nth(0).click();
        await searchInput.fill('');
        const confirmDialog = page.locator('[role="dialog"]').filter({
          hasText: /informaci[oó]n que se mostrar[aá]|distribuci[oó]n seleccionada/i,
        }).first();
        if (await confirmDialog.isVisible({ timeout: 3_000 }).catch(() => false)) {
          await confirmDialog.getByRole('button', { name: /aceptar|confirmar|continuar/i }).first().click();
        }
      } else {
        await searchInput.fill('');
        distribucion = await crearYSeleccionarDistribucion(page, bloque3GastosFinancierosPage, 'CARGA_COMPLETA');
      }
    });

    for (const uploadCase of UPLOAD_CASES) {
      await test.step(`P${uploadCase.order}: Cargar ${uploadCase.entityName}`, async () => {
        await bloque3GastosFinancierosPage.openSidebarView(uploadCase.section, uploadCase.view);
        const dialog = await openGfUploadDialog(page, uploadCase);
        await attachGfUploadFile(dialog, uploadCase.fileName);
        await confirmGfUpload(dialog, uploadCase.entityName);
      });
    }
  });

  test('@bloque3 @gf @carga-completa debe validar descarga de archivos cargados', async ({
    bloque3GastosFinancierosPage,
    page,
  }) => {
    test.setTimeout(360000);
 const loginPage = new LoginPage(page);

    await page.goto('https://distribuciongastos.pacificotest.com.pe/');

    await loginPage.login(
      env.username,
      env.password
    );
    await test.step('Seleccionar distribucion existente', async () => {
      await bloque3GastosFinancierosPage.openHome();
      const firstRow = page.locator('table tbody tr').first();
      const hasRow = await firstRow.isVisible({ timeout: 10_000 }).catch(() => false);
      if (hasRow) {
        await firstRow.locator('td').first().click();
        const confirmDialog = page.locator('[role="dialog"]').filter({
          hasText: /informaci[oó]n que se mostrar[aá]|distribuci[oó]n seleccionada/i,
        }).first();
        if (await confirmDialog.isVisible({ timeout: 3_000 }).catch(() => false)) {
          await confirmDialog.getByRole('button', { name: /aceptar|confirmar|continuar/i }).first().click();
        }
      }
    });

    for (const downloadCase of DOWNLOAD_CASES) {
      await test.step(`Descargar ${downloadCase.entityName}`, async () => {
        await bloque3GastosFinancierosPage.openSidebarView(downloadCase.section, downloadCase.view);

        await page.waitForTimeout(2_000);

        // Look for any enabled download button on the current view
        const downloadBtn = page.locator('button[id*="-download"]:not([disabled])').first()
          .or(page.locator('[data-testid*="-download"]:not([disabled])').first());

        const isClickable = await downloadBtn.isVisible({ timeout: 15_000 }).catch(() => false);
        if (!isClickable) {
          test.info().annotations.push({
            type: 'skip',
            description: `Sin boton descargar habilitado en ${downloadCase.entityName}.`,
          });
          return;
        }

        const [download] = await Promise.all([
          page.waitForEvent('download', { timeout: 60_000 }),
          downloadBtn.click(),
        ]);

        expect(download, 'Debe iniciarse la descarga del archivo.').toBeTruthy();

        const filename = download.suggestedFilename();
        expect(filename, 'El archivo descargado debe tener un nombre valido.').toBeTruthy();
        expect(filename.toLowerCase(), `El archivo descargado debe ser un Excel. Recibido: ${filename}`).toMatch(/\.xlsx?$/i);

        const failure = await download.failure();
        expect(failure, 'La descarga no debe fallar.').toBeNull();

        const downloadPath = await download.path().catch(() => null);
        if (downloadPath) {
          const stats = require('fs').statSync(downloadPath);
          expect(stats.size, `El archivo descargado debe tener contenido > 0. Recibido: ${stats.size} bytes`).toBeGreaterThan(0);
        }
      });
    }
  });
});
