import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E4-C-01.1.json';
import {
  acceptButtonFrom,
  goToComunesView,
  openUploadDialog,
  uploadFile,
  validateSuccessfulUpload,
} from '../_shared/comunes-upload';

test.describe('@comunes @critical @E4-C-01.1', () => {
  test('@critical @comunes @E4-C-01.1 debe aceptar un archivo válido de Líneas y completar el flujo del modal', async ({
    page,
  }) => {
    test.setTimeout(240_000);

    await test.step('QA: ingresar a Distribución y abrir Comunes > Líneas', async () => {
      await goToComunesView(page, 'Líneas', 'comunes/lineas');
    });

    await test.step('QA: abrir "Cargar Líneas" y validar estado inicial del modal', async () => {
      const dialog = await openUploadDialog(page, /cargar l[ií]neas/i);

      await expect(
        acceptButtonFrom(dialog),
        '[BUG] El botón Aceptar no inicia deshabilitado antes de seleccionar un archivo válido.',
      ).toBeDisabled();
    });

    await test.step('QA: seleccionar archivo válido y validar estados intermedios del modal', async () => {
      const dialog = page.getByTestId('cargas-parametros-upload-dialog');
      const uploadedFile = await uploadFile(page, {
        fixtureDir: 'fixtures/files/bloque-1/E4-C-01.1',
        relativePath: scenarioData.archivo,
      });
      const uploadedFileName = path.basename(uploadedFile);

      await expect(
        dialog,
        `[BUG] El modal no se comporta correctamente con archivo válido. No muestra el archivo ${uploadedFileName} después del upload.`,
      ).toContainText(uploadedFileName, { timeout: 10_000 });

      await expect(
        acceptButtonFrom(dialog),
        '[BUG] El botón Aceptar no se habilita tras seleccionar archivo válido.',
      ).toBeEnabled({ timeout: 15_000 });

      await expect(
        dialog.getByRole('button', { name: /subir un nuevo archivo/i }),
        '[BUG] No aparece botón "Subir un nuevo archivo" tras seleccionar el archivo válido.',
      ).toBeVisible({ timeout: 10_000 });
    });

    await test.step('QA: confirmar la carga y validar mensaje de éxito', async () => {
      const dialog = page.getByTestId('cargas-parametros-upload-dialog');
      await acceptButtonFrom(dialog).click();

      await validateSuccessfulUpload(page, { entityName: 'Líneas', timeoutMs: 240_000 });
    });
  });
});
