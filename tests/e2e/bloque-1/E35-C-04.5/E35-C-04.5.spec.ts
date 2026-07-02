import { expect, Locator, test } from '@fixtures/base.fixture';
import { currentFieldValue, fillTextField, findField, normalizeEditText } from '../_shared/comunes-edit';
import { clickFinalAdd, expectAddSuccess, findRowContaining, openPositiveAddDialog, selectComboboxOption } from '../_shared/comunes-add-positive';
import { processPriorityOverwriteUpload, readWorkbookSample, requireFixtureOrThrow } from '../_shared/comunes-upload-overwrite';

const cuentaValidationPattern = /cuenta contable debe tener formato/i;

function buildValidCuenta() {
 return '56.1.4.AB.UZ.05';
}

async function stabilizeCuentaIfNeeded(dialog: Locator) {
 const cuentaField = await findField(dialog, ['cuenta']).catch(() => null);
 if (!cuentaField) return null;

 const dialogText = await dialog.innerText().catch(() => '');
 if (!cuentaValidationPattern.test(normalizeEditText(dialogText))) {
 return null;
 }

 const digitoField = await findField(dialog, ['digito de cuenta', 'dígito de cuenta']).catch(() => null);
 const cuenta = buildValidCuenta();
 await fillTextField(cuentaField, cuenta);
 if (digitoField && (await digitoField.isEnabled().catch(() => false))) {
 await fillTextField(digitoField, '56');
 }
 return cuenta;
}

test.describe('@bloque1 @E35-C-04.5 ', () => {
 test('@bloque1 @E35-C-04.5 @upload_valido debe sobrescribir Configuración de Parches manual al cargar el archivo del periodo', async ({
 page,
 }) => {
 test.setTimeout(480_000);

 const filePath = requireFixtureOrThrow({
 caseId: 'E35-C-04.5',
 entityName: 'Configuración de Parches',
 modalPattern: /cargar parches/i,
 fixtureDir: 'fixtures/files/bloque-1/E35-C-04.5',
 relativePath: 'REAL Configuración de Parches.xlsx',
 localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Configuración de Parches.xlsx'],
 expectedSampleTexts: [],
 overwrittenTexts: [],
 });
 const workbookSample = readWorkbookSample(filePath).firstDataRow;
 expect(workbookSample.length, '[DATA] El archivo REAL Configuración de Parches.xlsx no contiene filas para validar sobrescritura.').toBeGreaterThan(0);

 const dialog = await openPositiveAddDialog(page, 'Configuración de Parches', 'comunes/configuracion-parches', /agregar parche/i);

 const atribuableField = await findField(dialog, ['atribuible']).catch(() => null);
 const tipoGastoField = await findField(dialog, ['tipo de gasto']);
 const gaGmField = await findField(dialog, ['ga/gm']).catch(() => null);
 const uoaAntesField = await findField(dialog, ['uoa antes']);
 const uoaDespuesField = await findField(dialog, ['uoa después', 'uoa despues']);
 const porcentajeField = await findField(dialog, ['porcentaje %', 'porcentaje']);
 const estadoField = await findField(dialog, ['estado']).catch(() => null);

 const atribuable = atribuableField ? await selectComboboxOption(page, atribuableField, { preferredPattern: /atri/i }) : '';
 const tipoGasto = await selectComboboxOption(page, tipoGastoField);
 const gaGm = gaGmField ? await selectComboboxOption(page, gaGmField) : '';
 const uoaAntes = await selectComboboxOption(page, uoaAntesField);
 const uoaDespues = await selectComboboxOption(page, uoaDespuesField, { excludeNormalized: [uoaAntes] });
 const estado =
 (estadoField ? await currentFieldValue(estadoField) : '') ||
 (estadoField ? await selectComboboxOption(page, estadoField, { preferredPattern: /activo/i }) : '');
 const registroManual = [tipoGasto, atribuable, gaGm, uoaAntes, uoaDespues, '100', estado].filter(Boolean);

 await fillTextField(porcentajeField, '100');
 await stabilizeCuentaIfNeeded(dialog);

 await clickFinalAdd(dialog);
 await expectAddSuccess(page, dialog, 'Configuración de Parches').catch(async () => {
 await expect
 .poll(async () => await findRowContaining(page, registroManual), {
 message:
 '[BUG] El flujo de alta de Configuración de Parches no muestra mensaje visible de éxito ni deja visible el registro agregado en la tabla.',
 timeout: 20_000,
 })
 .toBeTruthy();

 test.info().annotations.push({
 type: 'observacion',
 description:
 'El alta manual de Configuración de Parches dejó visible el registro en tabla aunque no apareció un mensaje visible de éxito. Para E35-C-04.5 se continuó porque el resultado esperado crítico es la prioridad de la carga masiva.',
 });
 });

 await processPriorityOverwriteUpload(page, {
 caseId: 'E35-C-04.5',
 entityName: 'Configuración de Parches',
 modalPattern: /cargar parches/i,
 fixtureDir: 'fixtures/files/bloque-1/E35-C-04.5',
 relativePath: 'REAL Configuración de Parches.xlsx',
 localFallbacks: ['C:\\Users\\Aldis Experto\\Downloads\\REAL Configuración de Parches.xlsx'],
 uploadName: 'REAL Configuración de Parches.xlsx',
 expectedSampleTexts: workbookSample.slice(0, 4),
 overwrittenTexts: [tipoGasto, atribuable, gaGm, uoaAntes, uoaDespues, '100', estado].filter(Boolean),
 });
 });
});
