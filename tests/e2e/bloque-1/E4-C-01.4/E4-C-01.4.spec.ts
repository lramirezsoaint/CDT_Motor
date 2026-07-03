import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E4-C-01.4.json';
import {
 acceptButtonFrom,
 goToComunesView,
 openUploadDialog,
 uploadFile,
 validateSuccessfulUpload,
} from '../_shared/comunes-upload';

test.describe('@bloque1 @E4-C-01.4 ', () => {
 test('@bloque1 @E4-C-01.4 @upload_valido debe aceptar un archivo valido de Subcanales y completar el flujo del modal', async ({
 page,
 }) => {
 test.setTimeout(240_000);

 await test.step('QA: ingresar a Distribucion y abrir Comunes > Subcanales', async () => {
 await goToComunesView(page, 'Subcanales', 'comunes/subcanales');
 });

 await test.step('QA: abrir "Cargar Subcanales" y validar estado inicial del modal', async () => {
 const dialog = await openUploadDialog(page, /cargar subcanales/i);

 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton Aceptar no inicia deshabilitado antes de seleccionar un archivo valido.',
 ).toBeDisabled();
 });

 await test.step('QA: seleccionar archivo valido y validar estados intermedios del modal', async () => {
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

 await validateSuccessfulUpload(page, { entityName: 'Subcanales', timeoutMs: 240_000 });
 });
 });
});
