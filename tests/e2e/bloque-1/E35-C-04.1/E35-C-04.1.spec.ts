import { expect, test } from '@fixtures/base.fixture';
import { currentFieldValue, fillTextField, findField } from '../_shared/comunes-edit';
import { clickFinalAdd, expectAddSuccess, openPositiveAddDialog, selectComboboxOption } from '../_shared/comunes-add-positive';
import { processSelectiveOverwriteUpload, readWorkbookSample, requireFixtureOrThrow } from '../_shared/comunes-upload-overwrite';

function randomLetters(length: number) {
 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function buildCodigo() {
 return `Q${randomLetters(3)}`;
}

function buildNombre() {
 return `LINEA QA ${randomLetters(4)}`;
}

test.describe('@bloque1 @E35-C-04.1 ', () => {
 test('@bloque1 @E35-C-04.1 @upload_valido debe sobrescribir una Línea manual al cargar el archivo del periodo', async ({ page }) => {
 test.setTimeout(420_000);

 const filePath = requireFixtureOrThrow({
 caseId: 'E35-C-04.1',
 entityName: 'Líneas',
 modalPattern: /cargar l[ií]neas/i,
 fixtureDir: 'fixtures/files/bloque-1/E4-C-01.1',
 relativePath: 'REAL Lineas.xlsx',
 expectedSampleTexts: [],
 overwrittenTexts: [],
 });
 const workbookSample = readWorkbookSample(filePath).firstDataRow;
 expect(workbookSample.length, '[DATA] El archivo REAL Lineas.xlsx no contiene filas para validar sobrescritura.').toBeGreaterThan(0);

 const dialog = await openPositiveAddDialog(page, 'Líneas', 'comunes/lineas', /agregar l[ií]nea/i);
 const codigoField = await findField(dialog, ['codigo']);
 const nombreField = await findField(dialog, ['nombre']);
 const negocioField = await findField(dialog, ['negocio']);
 const estadoField = await findField(dialog, ['estado']);

 const codigo = buildCodigo();
 const nombre = buildNombre();
 await fillTextField(codigoField, codigo);
 await fillTextField(nombreField, nombre);
 const negocio = await selectComboboxOption(page, negocioField, { preferredPattern: /generales|vida/i });
 const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

 await clickFinalAdd(dialog);
 await expectAddSuccess(page, dialog, 'Líneas');

 await processSelectiveOverwriteUpload(page, {
 caseId: 'E35-C-04.1',
 entityName: 'Líneas',
 modalPattern: /cargar l[ií]neas/i,
 fixtureDir: 'fixtures/files/bloque-1/E4-C-01.1',
 relativePath: 'REAL Lineas.xlsx',
 expectedSampleTexts: workbookSample.slice(0, 4),
 preservedTexts: [codigo, nombre, negocio, estado],
 });

 await expect(page.locator('table').first(), '[BUG] La tabla de Líneas no permanece visible después de la sobrescritura.').toBeVisible();
 });
});
