import path from 'path';
import { expect, test } from '@playwright/test';
import XLSX from 'xlsx';
import scenarioData from '@data/bloque-1/E59-C-01.1.json';
import {
  acceptButtonFrom,
  goToComunesView,
  openUploadDialog,
  resolveUploadPath,
  uploadFile,
  validateSuccessfulUpload,
} from '../_shared/comunes-upload';

type LineaRow = {
  codigo: string;
  nombre: string;
  estatus: string;
  negocio: string;
};

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function readRows(filePath: string): LineaRow[] {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<string[]>(worksheet, { header: 1 });

  return rows.slice(1).map((row) => ({
    codigo: String(row[0] ?? '').trim(),
    nombre: String(row[1] ?? '').trim(),
    estatus: String(row[2] ?? '').trim(),
    negocio: String(row[3] ?? '').trim(),
  }));
}

async function tableHeaders(page: Parameters<typeof test>[0]['page']) {
  return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
}

async function headerIndex(page: Parameters<typeof test>[0]['page'], headerName: string) {
  const headers = await tableHeaders(page);
  return headers.findIndex((header) => normalizeText(header) === normalizeText(headerName));
}

async function visibleRows(page: Parameters<typeof test>[0]['page']) {
  const rows = await page.locator('table tbody tr').evaluateAll((tableRows) =>
    tableRows.map((row) =>
      Array.from(row.querySelectorAll('td')).map((cell) => (cell.textContent || '').trim()),
    ),
  );

  return rows.filter((row) => row.some(Boolean));
}

async function rowByCodigo(page: Parameters<typeof test>[0]['page'], codigo: string) {
  const codigoIndex = await headerIndex(page, 'Código');
  const rows = await visibleRows(page);
  return rows.find((row) => normalizeText(row[codigoIndex] ?? '') === normalizeText(codigo)) ?? null;
}

async function assertUploadSucceeded(entityName: string, page: Parameters<typeof test>[0]['page']) {
  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  const errorPattern = /error al procesar el archivo/i;

  await expect
    .poll(async () => await dialog.innerText(), {
      message: `[BUG] La carga de ${entityName} no finaliza correctamente. Se esperaba el mensaje de éxito "¡Listo! El archivo se cargó correctamente".`,
      timeout: 240_000,
    })
    .toMatch(/carga exitosa del archivo/i);

  await expect(
    dialog,
    `[BUG] La carga de ${entityName} muestra un error inesperado y no permite validar la sobrescritura.`,
  ).not.toContainText(errorPattern);

  await validateSuccessfulUpload(page, { entityName, closeWithAccept: true, timeoutMs: 240_000 });
}

async function uploadLineasFile(page: Parameters<typeof test>[0]['page'], fixtureDir: string, relativePath: string) {
  const dialog = await openUploadDialog(page, /cargar l[ií]neas/i);
  const uploadedFile = await uploadFile(page, {
    fixtureDir,
    relativePath,
  });
  const uploadedFileName = path.basename(uploadedFile);

  await expect(
    dialog,
    `[BUG] El modal no muestra el archivo seleccionado (${uploadedFileName}) después del upload.`,
  ).toContainText(uploadedFileName, { timeout: 10_000 });

  await expect(
    acceptButtonFrom(dialog),
    `[BUG] No se habilita el botón "Aceptar" al seleccionar el archivo ${uploadedFileName}.`,
  ).toBeEnabled({ timeout: 15_000 });

  return { dialog, uploadedFileName };
}

test.describe('@comunes @critical @E59-C-01.1', () => {
  test('@critical @comunes @E59-C-01.1 debe recargar el mismo archivo de Líneas sin duplicar datos en la tabla', async ({
    page,
  }) => {
    test.setTimeout(420_000);

    const fixtureDir = 'fixtures/files/bloque-1/E59-C-01.1';
    const archivoPath = resolveUploadPath({
      fixtureDir,
      relativePath: scenarioData.archivo,
    });
    const fileRows = readRows(archivoPath);
    const sampleRow = fileRows[0];

    expect(sampleRow, '[BUG] El archivo de E59-C-01.1 no contiene filas para validar la recarga.').toBeTruthy();

    await test.step('QA: ingresar a Distribución y abrir Comunes > Líneas', async () => {
      await goToComunesView(page, 'Líneas', 'comunes/lineas');
      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Líneas no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });
    });

    let baselineUniqueCodeCount = 0;
    let baselineRowCount = 0;
    let firstLoadRowCount = 0;
    let firstLoadUniqueCodeCount = 0;

    await test.step('QA: capturar estado inicial de la tabla antes de recargar el archivo', async () => {
      const rows = await visibleRows(page);
      const codigoIndex = await headerIndex(page, 'Código');
      const rowCodes = rows.map((row) => row[codigoIndex]).filter(Boolean);

      baselineRowCount = rowCodes.length;
      baselineUniqueCodeCount = new Set(rowCodes).size;
    });

    await test.step('QA: cargar el archivo por primera vez y validar éxito', async () => {
      const { dialog } = await uploadLineasFile(page, fixtureDir, scenarioData.archivo);
      await acceptButtonFrom(dialog).click();
      await assertUploadSucceeded('Líneas', page);
    });

    await test.step('QA: validar que la primera carga deja datos visibles y sin duplicados', async () => {
      const sampleTableRow = await rowByCodigo(page, sampleRow.codigo);
      expect(
        sampleTableRow,
        `[BUG] La primera carga no dejó visible el registro clave ${sampleRow.codigo} en la tabla de Líneas.`,
      ).toBeTruthy();

      const rows = await visibleRows(page);
      const codigoIndex = await headerIndex(page, 'Código');
      const rowCodes = rows.map((row) => row[codigoIndex]).filter(Boolean);
      const uniqueCodes = new Set(rowCodes);
      firstLoadRowCount = rowCodes.length;
      firstLoadUniqueCodeCount = uniqueCodes.size;

      expect(
        rowCodes.length,
        `[BUG] Se detectan registros duplicados tras la primera carga. Total visible: ${rowCodes.length}. Total único por código: ${uniqueCodes.size}.`,
      ).toBe(uniqueCodes.size);

      expect(
        uniqueCodes.size,
        `[BUG] La primera carga redujo inesperadamente la cantidad de códigos únicos visibles. Valor inicial: ${baselineUniqueCodeCount}. Valor actual: ${uniqueCodes.size}.`,
      ).toBeGreaterThanOrEqual(baselineUniqueCodeCount);
    });

    await test.step('QA: cargar el mismo archivo por segunda vez y validar el flujo de sobrescritura', async () => {
      const { dialog } = await uploadLineasFile(page, fixtureDir, scenarioData.archivo);

      const dialogText = await dialog.innerText();
      if (!/informaci[oó]n previamente cargada ser[aá] reemplazada/i.test(dialogText)) {
        test.info().annotations.push({
          type: 'observacion',
          description:
            'La UI no mostró el mensaje explícito de sobrescritura; se continúa validando el comportamiento real en la tabla.',
        });
      }

      await acceptButtonFrom(dialog).click();
      await assertUploadSucceeded('Líneas', page);
    });

    await test.step('QA: validar que la segunda carga no duplica información en la tabla', async () => {
      const sampleTableRow = await rowByCodigo(page, sampleRow.codigo);
      expect(
        sampleTableRow,
        `[BUG] La nueva información no se refleja en la tabla. No se encontró el código ${sampleRow.codigo} tras la segunda carga.`,
      ).toBeTruthy();

      const rows = await visibleRows(page);
      const codigoIndex = await headerIndex(page, 'Código');
      const rowCodes = rows.map((row) => row[codigoIndex]).filter(Boolean);
      const uniqueCodes = new Set(rowCodes);

      expect(
        rowCodes.length,
        `[BUG] Se detectan registros duplicados tras la carga. Total visible: ${rowCodes.length}. Total único por código esperado: ${uniqueCodes.size}.`,
      ).toBe(uniqueCodes.size);

      expect(
        uniqueCodes.size,
        `[BUG] La tabla incrementó la cantidad de códigos únicos al recargar el mismo archivo. Valor tras primera carga: ${firstLoadUniqueCodeCount}. Valor actual: ${uniqueCodes.size}.`,
      ).toBe(firstLoadUniqueCodeCount);

      expect(
        rowCodes.length,
        `[BUG] La tabla incrementó su cantidad de filas visibles al recargar el mismo archivo. Valor tras primera carga: ${firstLoadRowCount}. Valor actual: ${rowCodes.length}.`,
      ).toBe(firstLoadRowCount);

      expect(
        firstLoadRowCount,
        `[BUG] La primera carga no dejó un estado consistente para validar no duplicación. Valor inicial: ${baselineRowCount}. Valor tras primera carga: ${firstLoadRowCount}.`,
      ).toBeGreaterThanOrEqual(baselineRowCount);
    });
  });
});
