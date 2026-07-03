import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import scenarioData from '@data/bloque-1/E9-C-01.2.json';
import {
 acceptButtonFrom,
 goToComunesView,
 openUploadDialog,
 uploadFile,
 validateSuccessfulUpload,
 validateTableStructure,
} from '../_shared/comunes-upload';

test.describe('@bloque1 @E9-C-01.2 ', () => {
 test('@bloque1 @E9-C-01.2 @upload_valido debe cargar el archivo de Grupo Producto y mostrar la tabla con su estructura esperada', async ({
 page,
 }) => {
 test.setTimeout(240_000);

 await test.step('QA: ingresar a Distribucion y abrir Comunes > Grupo Producto', async () => {
 await goToComunesView(page, 'Grupo Producto', 'comunes/grupo-producto');
 });

 await test.step('QA: abrir "Cargar Grupo Producto" y confirmar que "Aceptar" inicia deshabilitado', async () => {
 const dialog = await openUploadDialog(page, /cargar (grupo )?producto/i);
 await expect(
 acceptButtonFrom(dialog),
 '[BUG] El boton "Aceptar" ya aparece habilitado antes de seleccionar un archivo. QA esperaba que iniciara deshabilitado.',
 ).toBeDisabled();
 });

 await test.step('QA: seleccionar archivo y comprobar que "Aceptar" se habilita', async () => {
 const dialog = page.getByTestId('cargas-parametros-upload-dialog');
 const uploadedFile = await uploadFile(page, {
 fixtureDir: 'fixtures/files/bloque-1/E9-C-01.2',
 relativePath: scenarioData.archivo,
 });
 const uploadedFileName = path.basename(uploadedFile);

 await expect(
 dialog,
 `[BUG] El modal no muestra el archivo seleccionado (${uploadedFileName}) despues del upload. QA no puede confirmar que archivo tomo el sistema.`,
 ).toContainText(uploadedFileName, { timeout: 10_000 });

 await expect(
 acceptButtonFrom(dialog),
 `[BUG] Despues de seleccionar el archivo ${uploadedFileName}, el boton "Aceptar" sigue deshabilitado. QA esperaba verlo habilitado para continuar con la carga.`,
 ).toBeEnabled({ timeout: 15_000 });

 await acceptButtonFrom(dialog).click();
 });

 await test.step('QA: confirmar que el sistema informa una carga exitosa', async () => {
 await validateSuccessfulUpload(page, { entityName: 'Grupo Producto', closeWithAccept: true });
 });

 await test.step('QA: validar que se muestra la tabla con la estructura del archivo cargado', async () => {
 await validateTableStructure(page, {
 expectedColumns: scenarioData.expected.columnas,
 minRows: scenarioData.expected.filasMinimas,
 entityName: 'Grupo Producto',
 });
 });
 });
});
