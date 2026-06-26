import { expect, Locator, Page, test } from '@playwright/test';
import path from 'path';
import {
  GtCaseBase,
  openGtView,
  tagsFor,
  visibleButton,
} from './gt-ui';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution58,selectGtDistribution,selectGtDistributionE4, SelectGtDistributionOptions } from './gt-distribution';
type UploadResult =
  | 'success'
  | 'headersError'
  | 'emptyFile'
  | 'maxSize'
  | 'validationError'
  | 'validationDownload'
  | 'ancestorError';

type UploadCaseConfig = GtCaseBase & {
  modalTitle: RegExp;
  fileFolder: string;
  fileName: string;
  expectedResult: UploadResult;
  expectedMessage?: RegExp;
  expectedWarning?: RegExp;
  action?: 'cargar' | 'recargar';
  distribution?: SelectGtDistributionOptions;
};

export function UploadCase(config: UploadCaseConfig) {
  test(`${tagsFor(config)} carga archivo y valida resultado ${config.expectedResult}`, async ({ page }, testInfo) => {
    test.setTimeout(360_000);
    await test.step('Abrir vista del flujo de Gastos Tecnicos', async () => {
      try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.gestorGastoUsername,
          env.gestorGastoPassword
        );
      } catch (error) { }
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await selectGtDistribution(page, config.distribution);
      await openGtView(page, config);
      try {
        await expect(
          page.getByRole('heading', {
            name: new RegExp(config.view, 'i')
          })
        ).toBeVisible({
          timeout: 1_000
        });
      } catch (error) {
      }
    });

    await test.step('Abrir modal Cargar y validar estado inicial', async () => {
      await visibleButton(page, /^cargar$/i).click();
    });

    const modal = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
    const processButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });

    await test.step('Validar modal inicial y boton deshabilitado', async () => {
      await expect(modal, 'Debe mostrarse el modal de carga definido por el catalogo.').toBeVisible();
      await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
      if (config.expectedWarning) {
        await expect(modal.getByText(config.expectedWarning), 'Debe mostrarse la advertencia de sobrescritura del catalogo.').toBeVisible();
      }
      await expect(processButton, 'El boton de procesar/aceptar inicia deshabilitado.').toBeDisabled();
    });

    await test.step('Validar mensaje previo de advertencia si existe', async () => {
      const continueButton = modal.getByRole('button', {
        name: /Continuar con la carga/i
      });

      try {
        await continueButton.click();
      } catch (error) {
      }
    });

    await test.step('Seleccionar archivo de prueba', async () => {
      const filePath = path.resolve('fixtures', 'files', 'bloque-2', config.fileFolder, config.fileName);
      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        modal.getByText('Haz click para examinar', { exact: true }).click(),
      ]);

      await fileChooser.setFiles(filePath);
    });

    if (config.expectedResult === 'emptyFile' || config.expectedResult === 'maxSize') {
      await assertImmediateUploadError(modal, config.expectedResult);
      return;
    }

    await test.step('Procesar archivo seleccionado', async () => {
      await expect(processButton, 'El boton debe habilitarse tras seleccionar archivo.').toBeEnabled();
      await processButton.click();
    });

    await assertProcessedUploadResult(page, modal, config.expectedResult, config.expectedMessage);
  });
}
export function UploadCaseE4(config: UploadCaseConfig) {
  test(`${tagsFor(config)} carga archivo y valida resultado ${config.expectedResult}`, async ({ page }, testInfo) => {
    test.setTimeout(360_000);
    await test.step('Abrir vista del flujo de Gastos Tecnicos', async () => {
      try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.gestorGastoUsername,
          env.gestorGastoPassword
        );
      } catch (error) { }
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await selectGtDistributionE4(page, config.distribution);
      await openGtView(page, config);
      try {
        await expect(
          page.getByRole('heading', {
            name: new RegExp(config.view, 'i')
          })
        ).toBeVisible({
          timeout: 1_000
        });
      } catch (error) {
      }
    });

    await test.step('Abrir modal Cargar y validar estado inicial', async () => {
      await visibleButton(page, /^cargar$/i).click();
    });

    const modal = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
    const processButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });

    await test.step('Validar modal inicial y boton deshabilitado', async () => {
      await expect(modal, 'Debe mostrarse el modal de carga definido por el catalogo.').toBeVisible();
      await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
      if (config.expectedWarning) {
        await expect(modal.getByText(config.expectedWarning), 'Debe mostrarse la advertencia de sobrescritura del catalogo.').toBeVisible();
      }
      await expect(processButton, 'El boton de procesar/aceptar inicia deshabilitado.').toBeDisabled();
    });

    await test.step('Validar mensaje previo de advertencia si existe', async () => {
      const continueButton = modal.getByRole('button', {
        name: /Continuar con la carga/i
      });

      try {
        await continueButton.click();
      } catch (error) {
      }
    });

    await test.step('Seleccionar archivo de prueba', async () => {
      const filePath = path.resolve('fixtures', 'files', 'bloque-2', config.fileFolder, config.fileName);
      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        modal.getByText('Haz click para examinar', { exact: true }).click(),
      ]);

      await fileChooser.setFiles(filePath);
    });

    if (config.expectedResult === 'emptyFile' || config.expectedResult === 'maxSize') {
      await assertImmediateUploadError(modal, config.expectedResult);
      return;
    }

    await test.step('Procesar archivo seleccionado', async () => {
      await expect(processButton, 'El boton debe habilitarse tras seleccionar archivo.').toBeEnabled();
      await processButton.click();
    });

    await assertProcessedUploadResult(page, modal, config.expectedResult, config.expectedMessage);
  });
}
export function UploadCase58(config: UploadCaseConfig) {
  test(`${tagsFor(config)} carga archivo y valida resultado ${config.expectedResult}`, async ({ page }, testInfo) => {
    test.setTimeout(360_000);
    await test.step('Abrir vista del flujo de Gastos Tecnicos', async () => {
      try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.gestorGastoUsername,
          env.gestorGastoPassword
        );
      } catch (error) { }
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await selectGtDistribution58(page, config.distribution);
      await openGtView(page, config);
      try {
        await expect(
          page.getByRole('heading', {
            name: new RegExp(config.view, 'i')
          })
        ).toBeVisible({
          timeout: 1_000
        });
      } catch (error) {
      }
    });

    await test.step('Abrir modal Cargar y validar estado inicial', async () => {
      await visibleButton(page, /^cargar$/i).click();
    });

    const modal = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
    const processButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });

    await test.step('Validar modal inicial y boton deshabilitado', async () => {
      await expect(modal, 'Debe mostrarse el modal de carga definido por el catalogo.').toBeVisible();
      await expect(modal.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
      if (config.expectedWarning) {
        await expect(modal.getByText(config.expectedWarning), 'Debe mostrarse la advertencia de sobrescritura del catalogo.').toBeVisible();
      }
      await expect(processButton, 'El boton de procesar/aceptar inicia deshabilitado.').toBeDisabled();
    });

    await test.step('Validar mensaje previo de advertencia si existe', async () => {
      const continueButton = modal.getByRole('button', {
        name: /Continuar con la carga/i
      });

      try {
        await continueButton.click();
      } catch (error) {
      }
    });

    await test.step('Seleccionar archivo de prueba', async () => {
      const filePath = path.resolve('fixtures', 'files', 'bloque-2', config.fileFolder, config.fileName);
      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        modal.getByText('Haz click para examinar', { exact: true }).click(),
      ]);

      await fileChooser.setFiles(filePath);
    });

    if (config.expectedResult === 'emptyFile' || config.expectedResult === 'maxSize') {
      await assertImmediateUploadError(modal, config.expectedResult);
      return;
    }

    await test.step('Procesar archivo seleccionado', async () => {
      await expect(processButton, 'El boton debe habilitarse tras seleccionar archivo.').toBeEnabled();
      await processButton.click();
    });

    await assertProcessedUploadResult(page, modal, config.expectedResult, config.expectedMessage);
  });
}

async function assertImmediateUploadError(modal: Locator, result: UploadResult) {
  if (result === 'emptyFile') {
    await expect(modal.getByText(/el archivo seleccionado no contiene informacion|el archivo seleccionado no contiene información/i)).toBeVisible({
      timeout: 5_000,
    });
    await expect(modal.getByText(/verifique el contenido/i)).toBeVisible();
  }

  if (result === 'maxSize') {
    await expect(modal.getByText(/Error de validación del archivo/i)).toBeVisible({
      timeout: 5_000,
    });
    await expect(modal.getByText(/\(30 mb\)/i)).toBeVisible();
  }
}

async function assertProcessedUploadResult(page: Page, modal: Locator, result: UploadResult, expectedMessage?: RegExp) {
  await expect(modal.getByText(/procesando archivo/i), 'Debe mostrar estado de procesamiento.').toBeVisible();
  await expect(modal.getByText(/por favor espere mientras procesamos su archivo/i)).toBeVisible();

  if (result === 'success') {
    await expect
      .poll(
        async () => page.getByRole('button', { name: /subir otro archivo/i }).isVisible().catch(() => false),
        { timeout: 300_000, intervals: [1_000, 2_000, 3_000] },
      )
      .toBe(true);
    await expect(modal.getByText(/listo.*archivo se cargo correctamente|listo|archivo se carg[oó] correctamente|cargado satisfactoriamente/i)).toBeVisible();
    await expect(modal.getByRole('button', { name: /subir otro archivo|subir un nuevo archivo/i })).toBeVisible();
    await expect(modal.getByRole('button', { name: /^aceptar$/i })).toBeEnabled();
    return;
  }

  if (result === 'headersError') {
    await expect
      .poll(
        async () => page.getByRole('button', { name: /intentar de nuevo/i }).isVisible().catch(() => false),
        { timeout: 300_000, intervals: [1_000, 2_000, 3_000] },
      )
      .toBe(true);
    await expect(modal.getByText(/cabeceras.*no coinciden/i)).toBeVisible();
    await expect(modal.getByRole('button', { name: /intentar de nuevo/i })).toBeVisible();
    return;
  }

  if (result === 'ancestorError') {
    await expect(modal.getByText(expectedMessage ?? /no se puede cargar|no existen datos|antecesor|relacionado/i)).toBeVisible({
      timeout: 300_000,
    });
    await expect(modal.getByRole('button', { name: /intentar de nuevo/i })).toBeVisible();
    return;
  }

  await expect
    .poll(
      async () => page.getByRole('button', { name: /descargar errores/i }).isVisible().catch(() => false),
      { timeout: 300_000, intervals: [1_000, 2_000, 3_000] },
    )
    .toBe(true);

  await expect(modal.getByText(/faltan algunos datos obligatorios|formato incorrecto|datos que no existen/i)).toBeVisible();
  const downloadErrors = modal.getByRole('button', { name: /descargar errores/i });
  await expect(downloadErrors, 'Debe permitir descargar errores de validacion.').toBeVisible();

  if (result === 'validationDownload') {
    const [download] = await Promise.all([page.waitForEvent('download'), downloadErrors.click()]);
    const fileName = download.suggestedFilename();
    expect(fileName, 'La descarga de errores debe ser csv o xlsx.').toMatch(/\.(csv|xlsx)$/i);
    expect(await download.failure(), 'La descarga de errores no debe fallar.').toBeNull();
  }
}


