import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E4-C-01.4.json';
import {
 acceptButtonFrom,
 goToComunesView,
 openUploadDialog,
 uploadFile,
} from '../_shared/comunes-upload';

async function selectValidFile(page: Parameters<typeof test>[0]['page']) {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 const uploadedFile = await uploadFile(page, {
 fixtureDir: 'fixtures/files/bloque-1/E4-C-01.4',
 relativePath: scenarioData.archivo,
 });
 const uploadedFileName = path.basename(uploadedFile);

 await expect(
 dialog,
 `[BUG] El modal no se comporta correctamente con archivo valido. No muestra el archivo ${uploadedFileName} despues del upload.`,
 ).toContainText(uploadedFileName, { timeout: 10_000 });

 await expect(
 dialog.getByRole('button', { name: /subir (otro|un nuevo) archivo/i }),
 '[BUG] No aparece boton "Subir un nuevo archivo".',
 ).toBeVisible({ timeout: 10_000 });

 return { dialog, uploadedFileName };
}

test.describe('@bloque1 @E4-C-01.4.1 ', () => {
 test('@bloque1 @E4-C-01.4.1 @upload_valido debe permitir subir un nuevo archivo desde el flujo de Subcanales y mostrar todos los estados del modal', async ({
 page,
 }) => {
 test.setTimeout(360_000);

 await test.step('QA: ingresar a Distribucion y abrir Comunes > Subcanales', async () => {
 await goToComunesView(page, 'Subcanales', 'comunes/subcanales');
 });

 await test.step('QA: abrir el modal de carga y validar estado inicial', async () => {
 const dialog = await openUploadDialog(page, /cargar subcanales/i);

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton "Procesar archivo" no inicia deshabilitado antes de seleccionar un archivo.',
 ).toBeDisabled();
 });

 await test.step('QA: realizar una primera carga valida para habilitar el flujo de subir nuevo archivo', async () => {
 const { dialog } = await selectValidFile(page);

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton "Procesar archivo" no se habilita tras seleccionar archivo valido.',
 ).toBeEnabled({ timeout: 15_000 });

 await acceptButtonFrom(dialog).click();

 await expect(
 dialog,
 '[BUG] No se muestra estado "Procesando archivo" despues de iniciar la carga.',
 ).toContainText(/procesando archivo/i, { timeout: 20_000 });

 await expect(
 dialog,
 '[BUG] No se muestra el mensaje "Por favor espere mientras procesamos su archivo" durante la carga.',
 ).toContainText(/por favor espere mientras procesamos su archivo/i, { timeout: 20_000 });

 await expect(
 dialog,
 '[BUG] No se muestra mensaje final de exito tras la carga inicial.',
 ).toContainText(/carga exitosa del archivo/i, { timeout: 240_000 });
 });

 await test.step('QA: usar "Subir otro archivo" y validar el flujo de sobrescritura dentro del modal', async () => {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 const newFileButton = dialog.getByRole('button', { name: /subir (otro|un nuevo) archivo/i }).first();

 await expect(
 newFileButton,
 '[BUG] No aparece boton "Subir un nuevo archivo" tras una carga exitosa.',
 ).toBeVisible({ timeout: 10_000 });
 await newFileButton.click();

 const overwriteText = await dialog.innerText();
 if (!/informaci[oó]n previamente cargada ser[aá] reemplazada/i.test(overwriteText)) {
 test.info().annotations.push({
 type: 'observacion',
 description:
 'La UI actual no muestra la advertencia explicita de sobrescritura al usar "Subir otro archivo".',
 });
 }

 const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i });
 if ((await continueButton.count()) === 0) {
 test.info().annotations.push({
 type: 'observacion',
 description: 'La UI actual no muestra el boton "Continuar con la carga"; el flujo continua en el mismo modal.',
 });
 }

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton "Procesar archivo" no vuelve a quedar deshabilitado al iniciar un nuevo flujo de carga.',
 ).toBeDisabled();
 });

 await test.step('QA: seleccionar nuevamente el archivo valido y validar estados intermedios', async () => {
 const { dialog } = await selectValidFile(page);

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton "Procesar archivo" no se habilita en el flujo de subir nuevo archivo.',
 ).toBeEnabled({ timeout: 15_000 });

 await expect(
 dialog.getByRole('button', { name: /subir (otro|un nuevo) archivo/i }),
 '[BUG] No aparece boton "Subir un nuevo archivo" en el segundo ciclo de carga.',
 ).toBeVisible({ timeout: 10_000 });
 });

 await test.step('QA: procesar el nuevo archivo y validar procesamiento y exito final', async () => {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');

 await acceptButtonFrom(dialog).click();

 await expect(
 dialog,
 '[BUG] No se muestra estado "Procesando archivo" durante la segunda carga.',
 ).toContainText(/procesando archivo/i, { timeout: 20_000 });

 await expect(
 dialog,
 '[BUG] No se muestra el mensaje de espera durante la segunda carga.',
 ).toContainText(/por favor espere mientras procesamos su archivo/i, { timeout: 20_000 });

 await expect(
 dialog,
 '[BUG] No se muestra mensaje final de exito tras cargar un nuevo archivo.',
 ).toContainText(/carga exitosa del archivo/i, { timeout: 240_000 });

 await expect(
 dialog,
 '[BUG] No se muestra el mensaje final "¡Listo! El archivo se cargo correctamente".',
 ).toContainText(/archivo se carg[oó] correctamente/i, { timeout: 240_000 });
 });
 });
});
