import XLSX from 'xlsx';
import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import {
  ComunesDownloadConfig,
  executeComunesDownload,
  openComunesDownloadView,
} from './comunes-download';

type UiSnapshot = {
  headers: string[];
  rows: string[][];
};

const expectedWorkbookHeadersByMenu: Record<string, string[]> = {
  'Líneas': ['CODIGO', 'NOMBRE', 'ESTATUS', 'NEGOCIO'],
  'Grupo Producto': ['CODIGO', 'NOMBRE', 'NOMBRE LINEA', 'METODO DE VALORACION', 'ESTATUS'],
  'Canales': ['CODIGO', 'NOMBRE', 'ESTATUS'],
  'Subcanales': ['CODIGO', 'NOMBRE', 'CODIGO CANAL', 'NOMBRE CANAL', 'ESTATUS'],
  'Maestro UoA': [
    'aniomes',
    'ifrsGroup',
    'profDesc',
    'measureShortDesc',
    'ifrsCurrency',
    'entryYear',
    'entryMonth',
    'collectionName',
    'grossCeded',
    'uoaCeded',
    'uoaPeriodo',
    'Estatus',
  ],
  'Unidades de Cuenta - BBA/VFA': [
    'obId',
    'Periodo',
    'SistemaOrigen',
    'IdPoliza',
    'CodigoProductoPacifico',
    'NumeroPoliza',
    'DescripcionUoA_LRC_LIC',
    'DescripcionUoA_REA',
    'CodigoMoneda',
    'DescripcionMoneda',
    'CodigoOnerosidad',
    'DescripcionOnerosidad',
    'AniadaAnio',
    'AniadaMes',
    'CodigoPortafolio',
    'DescripcionPortafolio',
    'CentroCosto',
    'LineaNegocio',
    'ProductoPPTO',
    'CanalDistribucion',
    'SubCanal',
    'CodigoMetodologia',
    'DescripcionMetodologia',
    'CodigoLineaSBS',
    'IndPolizaRehabilitada',
  ],
  'Configuración de Parches': [
    'Atribuible',
    'Tipo de Gasto',
    'Código Concepto',
    'Dígito de Cuenta',
    'Cuenta',
    'Ramo',
    'Producto',
    'Subcanal',
    'UoA Antes',
    'UoA Después',
    'Porciento %',
  ],
};

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

function headerMatches(expected: string, actual: string) {
  const normalizedExpected = normalizeText(expected);
  const normalizedActual = normalizeText(actual);

  if (
    (normalizedExpected === 'estado' && normalizedActual === 'estatus') ||
    (normalizedExpected === 'estatus' && normalizedActual === 'estado')
  ) {
    return true;
  }

  return (
    normalizedActual === normalizedExpected ||
    normalizedActual.includes(normalizedExpected) ||
    normalizedExpected.includes(normalizedActual)
  );
}

function isOperationalHeader(header: string) {
  const normalizedHeader = normalizeText(header);
  return normalizedHeader === 'acciones';
}

async function tableHeaders(page: Page) {
  return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
}

async function visibleDataRows(page: Page) {
  const rows = await page.locator('table tbody tr').evaluateAll((tableRows) =>
    tableRows.map((row) =>
      Array.from(row.querySelectorAll('td')).map((cell) => (cell.textContent || '').trim()),
    ),
  );

  return rows.filter((row) => row.some(Boolean));
}

async function captureUiSnapshot(page: Page) {
  const headers = await tableHeaders(page);
  const rows = await visibleDataRows(page);

  expect(headers.length, '[BUG] La tabla visible no muestra cabeceras para validar la integridad del archivo descargado.').toBeGreaterThan(0);
  expect(
    rows.length,
    '[DATA] La tabla visible no muestra filas con datos para contrastar la permanencia en el archivo descargado.',
  ).toBeGreaterThan(0);

  return { headers, rows } satisfies UiSnapshot;
}

function readWorkbook(filePath: string) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json<string[]>(worksheet, { header: 1, defval: '' });
}

function verifyHeaders(uiHeaders: string[], workbookHeaders: string[], menu: string) {
  const businessUiHeaders = uiHeaders.filter((header) => !isOperationalHeader(header));
  const expectedWorkbookHeaders = expectedWorkbookHeadersByMenu[menu] ?? [];

  expect(
    workbookHeaders.length,
    `[BUG] El archivo descargado de ${menu} no contiene una fila de cabeceras para validar su estructura.`,
  ).toBeGreaterThan(0);

  expect(expectedWorkbookHeaders.length, `[BUG] No existe lista de cabeceras completas configurada para ${menu}.`).toBeGreaterThan(0);

  const missingExpectedHeaders = expectedWorkbookHeaders.filter(
    (expectedHeader) => !workbookHeaders.some((actualHeader) => headerMatches(expectedHeader, String(actualHeader ?? ''))),
  );

  expect(
    missingExpectedHeaders,
    `[BUG] El archivo descargado de ${menu} no contiene todas las cabeceras esperadas. Faltan: ${missingExpectedHeaders.join(', ')}. Cabeceras archivo: ${workbookHeaders.join(', ')}.`,
  ).toEqual([]);

  const comparableHeaders = businessUiHeaders.filter(
    (expectedHeader) => workbookHeaders.some((actualHeader) => headerMatches(expectedHeader, String(actualHeader ?? ''))),
  );

  expect(
    comparableHeaders.length,
    `[BUG] No hay cabeceras comparables entre la UI y el archivo descargado de ${menu}. Cabeceras UI: ${businessUiHeaders.join(', ')}. Cabeceras archivo: ${workbookHeaders.join(', ')}.`,
  ).toBeGreaterThan(0);
}

function workbookHeaderIndex(workbookHeaders: string[], uiHeader: string) {
  return workbookHeaders.findIndex((header) => headerMatches(uiHeader, String(header ?? '')));
}

function verifyDataPermanence(uiHeaders: string[], uiRows: string[][], workbookHeaders: string[], workbookRows: string[][], menu: string) {
  const businessUiHeaders = uiHeaders.filter((header) => !isOperationalHeader(header));
  const comparableColumns = businessUiHeaders
    .map((header) => ({
      header,
      uiIndex: uiHeaders.findIndex((candidate) => candidate === header),
      workbookIndex: workbookHeaderIndex(workbookHeaders, header),
    }))
    .filter((column) => column.workbookIndex >= 0);

  expect(
    comparableColumns.length,
    `[BUG] No se identificaron columnas comparables entre la tabla de ${menu} y el archivo descargado.`,
  ).toBeGreaterThan(0);

  const normalizedWorkbookRows = workbookRows.map((row) => row.map((value) => normalizeText(String(value ?? ''))));
  const rowsToValidate = uiRows.slice(0, 2);

  for (const [rowIndex, uiRow] of rowsToValidate.entries()) {
    const expectedPairs = comparableColumns.map((column) => ({
      header: column.header,
      value: normalizeText(String(uiRow[column.uiIndex] ?? '')),
      workbookIndex: column.workbookIndex,
    }));

    const matchingRow = normalizedWorkbookRows.find((workbookRow) =>
      expectedPairs.every((pair) => workbookRow[pair.workbookIndex] === pair.value),
    );

    expect(
      matchingRow,
      `[BUG] El archivo descargado de ${menu} no conserva la fila visible ${rowIndex + 1} de la tabla. Valores esperados: ${expectedPairs
        .map((pair) => `${pair.header}=${pair.value}`)
        .join(' | ')}.`,
    ).toBeTruthy();
  }
}

export async function executeComunesDownloadIntegrity(page: Page, config: ComunesDownloadConfig) {
  await openComunesDownloadView(page, config.menu, config.route);
  const uiSnapshot = await captureUiSnapshot(page);
  const { filePath, suggestedName } = await executeComunesDownload(page, {
    ...config,
    alreadyOnView: true,
  });

  const workbookRows = readWorkbook(filePath);
  const workbookHeaders = (workbookRows[0] ?? []).map((value) => String(value ?? '').trim()).filter(Boolean);
  const workbookDataRows = workbookRows
    .slice(1)
    .map((row) => row.map((value) => String(value ?? '').trim()))
    .filter((row) => row.some(Boolean));

  expect(
    workbookDataRows.length,
    `[BUG] El archivo descargado de ${config.menu} no conserva filas con datos para validar la permanencia del contenido.`,
  ).toBeGreaterThan(0);

  verifyHeaders(uiSnapshot.headers, workbookHeaders, config.menu);
  verifyDataPermanence(uiSnapshot.headers, uiSnapshot.rows, workbookHeaders, workbookDataRows, config.menu);

  return { filePath, suggestedName };
}
