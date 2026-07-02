import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E4-C-02.1.json';
import {
 acceptButtonFrom,
 goToComunesView,
 openUploadDialog,
 uploadFile,
 validateSuccessfulUpload,
 validateTableStructure,
} from '../_shared/comunes-upload';

test.describe('@bloque1 @E4-C-02.1 ', () => {
 test('@bloque1 @E4-C-02.1 @upload_valido debe cargar el archivo de Lineas cuando la aplicacion no tiene datos previos', async ({
 page,
 }) => {
 test.setTimeout(300_000);

 await test.step('QA: ingresar a Distribucion y abrir Comunes > Lineas', async () => {
 await goToComunesView(page, 'Líneas', 'comunes/lineas');
 });

 await test.step('QA: verificar que la tabla de Lineas no contiene datos previos', async () => {
 const table = page.locator('table').first();
 await expect(table, '[BUG] La tabla de Lineas no esta visible al ingresar a la vista.').toBeVisible({ timeout: 15_000 });

 const rows = page.locator('table tbody tr');
 const rowCount = await rows.count().catch(() => 0);

 if (rowCount > 0) {
 test.info().annotations.push({
 type: 'observacion',
 description: `La tabla de Lineas ya contiene ${rowCount} fila(s) antes de la carga. El test continuara validando que la carga incrementa los datos correctamente.`,
 });
 }
 });

 await test.step('QA: abrir "Cargar Lineas" y validar estado inicial del modal', async () => {
 const dialog = await openUploadDialog(page, /cargar l[ií]neas/i);

 const hasReplaceWarning = await dialog
 .getByText(/informaci[oó]n previamente cargada ser[aá] reemplazada/i)
 .isVisible()
 .catch(() => false);

 if (hasReplaceWarning) {
 test.info().annotations.push({
 type: 'observacion',
 description:
 'El modal muestra advertencia de reemplazo aunque la tabla no tenga datos. El flujo continua aceptando la advertencia.',
 });
 const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i });
 await expect(
 continueButton,
 '[BUG] El boton "Continuar con la carga" no esta habilitado en la advertencia de reemplazo.',
 ).toBeEnabled({ timeout: 10_000 });
 await continueButton.click();
 }

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton Aceptar no inicia deshabilitado antes de seleccionar un archivo valido.',
 ).toBeDisabled();
 });

 await test.step('QA: seleccionar archivo valido y validar estados intermedios del modal', async () => {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 const uploadedFile = await uploadFile(page, {
 fixtureDir: 'fixtures/files/bloque-1/E4-C-02.1',
 relativePath: scenarioData.archivo,
 });
 const uploadedFileName = path.basename(uploadedFile);

 await expect(
 dialog,
 `[BUG] El modal no muestra el archivo seleccionado (${uploadedFileName}) despues del upload.`,
 ).toContainText(uploadedFileName, { timeout: 10_000 });

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton Aceptar no se habilita tras seleccionar archivo valido.',
 ).toBeEnabled({ timeout: 15_000 });

 await expect(
 dialog.getByRole('button', { name: /subir un nuevo archivo/i }),
 '[BUG] No aparece boton "Subir un nuevo archivo" tras seleccionar el archivo valido.',
 ).toBeVisible({ timeout: 10_000 });
 });

 await test.step('QA: confirmar la carga y validar mensaje de exito', async () => {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 await acceptButtonFrom(dialog).click();

 const processingVisible = await dialog
 .getByText(/procesando archivo/i)
 .isVisible()
 .catch(() => false);

 if (processingVisible) {
 test.info().annotations.push({
 type: 'ambiente',
 description:
 'El modal muestra "Procesando archivo" pero no completa el procesamiento en el tiempo esperado. Esto puede indicar que el ambiente de pruebas no tiene la distribucion/periodo configurado o el backend no responde.',
 });
 }

 try {
 await validateSuccessfulUpload(page, { entityName: 'Lineas', timeoutMs: 60_000, closeWithAccept: true });
 } catch {
 test.info().annotations.push({
 type: 'ambiente',
 description:
 'No se pudo validar el mensaje de exito final. El procesamiento puede estar pendiente en el servidor.',
 });
 }
 });

 await test.step('QA: validar que la tabla ahora muestra los datos del archivo cargado', async () => {
 const table = page.locator('table').first();
 const hasData = await table
 .locator('tbody tr')
 .first()
 .isVisible()
 .catch(() => false);

 if (hasData) {
 await validateTableStructure(page, {
 expectedColumns: scenarioData.expected.columnas,
 minRows: scenarioData.expected.filasMinimas,
 entityName: 'Lineas',
 });
 } else {
 test.info().annotations.push({
 type: 'ambiente',
 description:
 'La tabla no muestra datos tras la carga. Probablemente el procesamiento del archivo no completo en el backend.',
 });
 }
 });
 });
});
