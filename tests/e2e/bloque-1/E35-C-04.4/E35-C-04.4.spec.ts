import { expect, test } from '@fixtures/base.fixture';
import { currentFieldValue, fillTextField, findField } from '../_shared/comunes-edit';
import { clickFinalAdd, expectAddSuccess, openPositiveAddDialog, selectComboboxOption } from '../_shared/comunes-add-positive';
import { processSelectiveOverwriteUpload, readWorkbookSample, requireFixtureOrThrow } from '../_shared/comunes-upload-overwrite';

function randomLetters(length: number) {
 const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function randomDigits(length: number) {
 return Array.from({ length }, () => Math.floor(Math.random() * 10).toString()).join('');
}

function buildNombre() {
 return `SUBCANAL QA ${randomLetters(4)}`;
}

test.describe('@bloque1 @E35-C-04.4 ', () => {
 test('@bloque1 @E35-C-04.4 @upload_valido debe sobrescribir un Subcanal manual al cargar el archivo del periodo', async ({ page }) => {
 test.setTimeout(420_000);

 const filePath = requireFixtureOrThrow({
 caseId: 'E35-C-04.4',
 entityName: 'Subcanales',
 modalPattern: /cargar subcanales/i,
 fixtureDir: 'fixtures/files/bloque-1/E9-C-01.4',
 relativePath: 'real_subcanales.xlsx',
 localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Subcanales (1).xlsx'],
 expectedSampleTexts: [],
 overwrittenTexts: [],
 });
 const workbookSample = readWorkbookSample(filePath).firstDataRow;
 expect(workbookSample.length, '[DATA] El archivo real_subcanales.xlsx no contiene filas para validar sobrescritura.').toBeGreaterThan(0);

 const dialog = await openPositiveAddDialog(page, 'Subcanales', 'comunes/subcanales', /agregar subcanal/i);
 const codigoField = await findField(dialog, ['codigo subcanal', 'codigo']);
 const nombreField = await findField(dialog, ['nombre subcanal', 'nombre']);
 const codigoCanalField = await findField(dialog, ['codigo canal', 'canal']);
 const nombreCanalField = await findField(dialog, ['nombre canal']);
 const estadoField = await findField(dialog, ['estado']);

 const codigoCanal = await selectComboboxOption(page, codigoCanalField);
 await expect(nombreCanalField).toBeDisabled();
 await expect.poll(async () => await currentFieldValue(nombreCanalField)).not.toBe('');

 const nombreCanal = await currentFieldValue(nombreCanalField);
 const codigo = `${codigoCanal.replace(/\s+/g, '').slice(0, 3).toUpperCase()}${randomDigits(3)}`;
 const nombre = buildNombre();
 const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

 await fillTextField(codigoField, codigo);
 await fillTextField(nombreField, nombre);

 await clickFinalAdd(dialog);
 await expectAddSuccess(page, dialog, 'Subcanales');

 await processSelectiveOverwriteUpload(page, {
 caseId: 'E35-C-04.4',
 entityName: 'Subcanales',
 modalPattern: /cargar subcanales/i,
 fixtureDir: 'fixtures/files/bloque-1/E9-C-01.4',
 relativePath: 'real_subcanales.xlsx',
 localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Subcanales (1).xlsx'],
 uploadName: 'REAL Subcanales.xlsx',
 expectedSampleTexts: [workbookSample[0], workbookSample[1], workbookSample[2]].filter(Boolean),
 preservedTexts: [codigo, nombre, codigoCanal, nombreCanal, estado],
 });
 });
});
