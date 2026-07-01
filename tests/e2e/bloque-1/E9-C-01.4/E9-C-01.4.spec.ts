import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E9-C-01.4.json';
import {
  acceptButtonFrom,
  goToComunesView,
  openUploadDialog,
  uploadFile,
  validateSuccessfulUpload,
  validateTableStructure,
} from '../_shared/comunes-upload';

test.describe('@comunes @critical @E9-C-01.4', () => {
  test('@critical @comunes @E9-C-01.4 debe mostrar datos del archivo Subcanales cargado en el frontend', async ({
    page,
  }) => {
    test.setTimeout(240_000);

    await test.step('Navegar a Distribución y abrir Comunes > Subcanales', async () => {
      await goToComunesView(page, 'Subcanales', 'comunes/subcanales');
    });

    await test.step('Abrir modal de carga y validar estado inicial', async () => {
      const dialog = await openUploadDialog(page, /cargar subcanales/i);
      await expect(
        acceptButtonFrom(dialog),
        '[BUG] El botón Aceptar de Subcanales debería iniciar deshabilitado antes de seleccionar un archivo.',
      ).toBeDisabled();
    });

    await test.step('Seleccionar archivo Subcanales y procesar carga', async () => {
      const dialog = page.getByTestId('cargas-parametros-upload-dialog');
      const uploadedFile = await uploadFile(page, {
        fixtureDir: 'fixtures/files/bloque-1/E9-C-01.4',
        relativePath: scenarioData.archivo,
        localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Subcanales.xlsx'],
      });
      const uploadedFileName = path.basename(uploadedFile);

      await expect(
        dialog,
        `[BUG] El modal no muestra el archivo seleccionado (${uploadedFileName}) después del upload de Subcanales.`,
      ).toContainText(uploadedFileName, { timeout: 10_000 });

      const acceptButton = acceptButtonFrom(dialog);
      await expect(
        acceptButton,
        `[BUG] No se habilita botón Aceptar al seleccionar archivo Subcanales (${uploadedFileName}).`,
      ).toBeEnabled({ timeout: 15_000 });
      await acceptButton.click();
    });

    await test.step('Confirmar que el sistema informa una carga exitosa de Subcanales', async () => {
      await validateSuccessfulUpload(page, { entityName: 'Subcanales', closeWithAccept: true });
    });

    await test.step('Validar estructura visible de la tabla de Subcanales', async () => {
      await validateTableStructure(page, {
        expectedColumns: scenarioData.expected.columnas,
        minRows: scenarioData.expected.filasMinimas,
        entityName: 'Subcanales',
      });
    });
  });
});
