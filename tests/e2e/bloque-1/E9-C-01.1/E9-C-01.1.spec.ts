import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E9-C-01.1.json';
import {
  acceptButtonFrom,
  goToComunesView,
  openUploadDialog,
  uploadFile,
  validateSuccessfulUpload,
  validateTableStructure,
} from '../_shared/comunes-upload';

test.describe('@comunes @critical @E9-C-01.1', () => {
  test('@critical @comunes @E9-C-01.1 debe cargar el archivo de Líneas y mostrar la tabla con su estructura esperada', async ({
    page,
  }) => {
    test.setTimeout(240_000);

    await test.step('QA: ingresar a Distribución y abrir Comunes > Líneas', async () => {
      await goToComunesView(page, 'Líneas', 'comunes/lineas');
    });

    await test.step('QA: abrir "Cargar Líneas" y confirmar que "Aceptar" inicia deshabilitado', async () => {
      const dialog = await openUploadDialog(page, /cargar l[ií]neas/i);
      await expect(
        acceptButtonFrom(dialog),
        '[BUG] El botón "Aceptar" ya aparece habilitado antes de seleccionar un archivo. QA esperaba que iniciara deshabilitado.',
      ).toBeDisabled();
    });

    await test.step('QA: seleccionar archivo y comprobar que "Aceptar" se habilita', async () => {
      const dialog = page.getByTestId('cargas-parametros-upload-dialog');
      const uploadedFile = await uploadFile(page, {
        fixtureDir: 'fixtures/files/bloque-1/E9-C-01.1',
        relativePath: scenarioData.archivo,
        envVarName: 'MOTOR_REAL_LINEAS_FILE',
        localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Lineas.xlsx'],
      });
      const uploadedFileName = path.basename(uploadedFile);

      await expect(
        dialog,
        `[BUG] El modal no muestra el archivo seleccionado (${uploadedFileName}) después del upload. QA no puede confirmar qué archivo tomó el sistema.`,
      ).toContainText(uploadedFileName, { timeout: 10_000 });

      await expect(
        acceptButtonFrom(dialog),
        `[BUG] Después de seleccionar el archivo ${uploadedFileName}, el botón "Aceptar" sigue deshabilitado. QA esperaba verlo habilitado para continuar con la carga.`,
      ).toBeEnabled({ timeout: 15_000 });

      await acceptButtonFrom(dialog).click();
    });

    await test.step('QA: confirmar que el sistema informa una carga exitosa', async () => {
      await validateSuccessfulUpload(page, { entityName: 'Líneas', closeWithAccept: true });
    });

    await test.step('QA: validar que se muestra la tabla con la estructura del archivo cargado', async () => {
      await validateTableStructure(page, {
        expectedColumns: scenarioData.expected.columnas,
        minRows: scenarioData.expected.filasMinimas,
        entityName: 'Líneas',
      });
    });
  });
});
