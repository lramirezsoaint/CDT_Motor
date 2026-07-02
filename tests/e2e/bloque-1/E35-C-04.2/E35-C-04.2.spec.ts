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
 return `PRODUCTO QA ${randomLetters(4)}`;
}

test.describe('@bloque1 @E35-C-04.2 ', () => {
 test('@bloque1 @E35-C-04.2 @upload_valido debe sobrescribir Grupo Producto manual al cargar el archivo del periodo', async ({
 page,
 }) => {
 test.setTimeout(420_000);

 const filePath = requireFixtureOrThrow({
 caseId: 'E35-C-04.2',
 entityName: 'Grupo Producto',
 modalPattern: /cargar grupo producto|cargar l[ií]neas/i,
 fixtureDir: 'fixtures/files/bloque-1/E35-C-04.2',
 relativePath: 'REAL Grupo Productos.xlsx',
 localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Grupo Producto.xlsx'],
 expectedSampleTexts: [],
 overwrittenTexts: [],
 });
 const workbookSample = readWorkbookSample(filePath).firstDataRow;
 expect(workbookSample.length, '[DATA] El archivo REAL Grupo Producto.xlsx no contiene filas para validar sobrescritura.').toBeGreaterThan(0);

 const dialog = await openPositiveAddDialog(page, 'Grupo Producto', 'comunes/grupo-producto', /agregar grupo producto|agregar producto/i);

 const codigoField = await findField(dialog, ['codigo']);
 const nombreField = await findField(dialog, ['nombre']);
 const codigoLineaField = await findField(dialog, ['codigo linea']);
 const nombreLineaField = await findField(dialog, ['nombre linea']);
 const metodoValoracionField = await findField(dialog, ['metodo de valoracion', 'valoracion']);
 const estadoField = await findField(dialog, ['estado']);

 const codigoLinea = await selectComboboxOption(page, codigoLineaField);
 await expect(nombreLineaField).toBeDisabled();
 await expect.poll(async () => await currentFieldValue(nombreLineaField)).not.toBe('');

 const nombreLinea = await currentFieldValue(nombreLineaField);
 const codigo = `${codigoLinea.replace(/\s+/g, '').slice(0, 4).toUpperCase()}${randomDigits(3)}`;
 const nombre = buildNombre();
 const metodoValoracion = await selectComboboxOption(page, metodoValoracionField);
 const estado = (await currentFieldValue(estadoField)) || (await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }));

 await fillTextField(codigoField, codigo);
 await fillTextField(nombreField, nombre);

 await clickFinalAdd(dialog);
 await expectAddSuccess(page, dialog, 'Grupo Producto');

 await processSelectiveOverwriteUpload(page, {
 caseId: 'E35-C-04.2',
 entityName: 'Grupo Producto',
 modalPattern: /cargar grupo producto|cargar l[ií]neas/i,
 fixtureDir: 'fixtures/files/bloque-1/E35-C-04.2',
 relativePath: 'REAL Grupo Productos.xlsx',
 localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Grupo Producto.xlsx'],
 uploadName: 'REAL Grupo Producto.xlsx',
 expectedSampleTexts: [workbookSample[0], workbookSample[1], workbookSample[2], workbookSample[4]].filter(Boolean),
 preservedTexts: [codigo, nombre, codigoLinea, nombreLinea, metodoValoracion, estado],
 });
 });
});
