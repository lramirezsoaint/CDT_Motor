import * as XLSX from 'xlsx';
import { expect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import {
  amUploadFixtureExistsByResult,
  confirmAmUploadByResult,
  ensureAmSession,
  openAmUploadDialog,
  openAmView,
  resolveAmUploadFileByResult,
} from './am-upload';
import type { AmDataUploadCase } from './am-data-upload-cases';

export function amDataFixtureExists(uploadCase: AmDataUploadCase): boolean {
  return amUploadFixtureExistsByResult(uploadCase.entityName, uploadCase.expectedResult);
}

export function amDataFixtureMissingReason(uploadCase: AmDataUploadCase): string {
  return (
    `TODO [FIXTURE]: falta archivo ${uploadCase.expectedResult} para "${uploadCase.entityName}" en ` +
    `fixtures/files/bloque-5/Real/${uploadCase.expectedResult}/.`
  );
}

export async function runAmDataUpload(page: Page, uploadCase: AmDataUploadCase): Promise<void> {
  const filePath = resolveAmUploadFileByResult(uploadCase.entityName, uploadCase.expectedResult);
  await ensureAmSession(page);
  await openAmView(page, uploadCase);
  const dialog = await openAmUploadDialog(page, uploadCase);
  await dialog.locator('input[type="file"]').first().setInputFiles(filePath);
  await confirmAmUploadByResult(dialog, uploadCase.entityName, uploadCase.expectedResult);

  if (uploadCase.expectedResult === 'success') {
    await closeSuccessfulUpload(dialog);
    await assertTableMatchesFixture(page, filePath);
  }
}

async function closeSuccessfulUpload(dialog: Locator): Promise<void> {
  const acceptButton = dialog.getByRole('button', { name: /^aceptar$/i }).last();
  await expect(acceptButton, 'Aceptar debe cerrar el resultado de carga exitosa.').toBeEnabled();
  await acceptButton.click();
  await expect(dialog, 'El modal debe cerrarse despues de aceptar.').toBeHidden({ timeout: 20_000 });
}

async function assertTableMatchesFixture(page: Page, filePath: string): Promise<void> {
  const table = page.getByTestId('data-table').or(page.locator('table')).first();
  await expect(table, 'Debe mostrarse la tabla con los datos cargados.').toBeVisible({ timeout: 30_000 });

  const sourceRows = readSourceRows(filePath);
  expect(sourceRows.length, 'El fixture debe contener encabezados y al menos una fila de datos.').toBeGreaterThan(1);

  const sourceHeaders = normalizeRow(sourceRows[0]);
  const displayedHeaders = normalizeRow(await table.locator('thead th').allTextContents());
  expect(displayedHeaders, 'Las columnas visibles deben corresponder a la estructura del archivo.').toEqual(
    expect.arrayContaining(sourceHeaders),
  );

  const displayedRows = await table.locator('tbody tr').evaluateAll((rows) =>
    rows.map((row) => Array.from(row.querySelectorAll('td')).map((cell) => cell.textContent ?? '')),
  );
  expect(displayedRows.length, 'La tabla debe mostrar datos del archivo cargado.').toBeGreaterThan(0);

  const normalizedSourceRows = sourceRows.slice(1).map(normalizeRow);
  for (const displayedRow of displayedRows.map(normalizeRow)) {
    expect(
      normalizedSourceRows,
      `La fila visible ${JSON.stringify(displayedRow)} debe existir en el archivo fuente.`,
    ).toContainEqual(displayedRow);
  }
}

function readSourceRows(filePath: string): string[][] {
  const workbook = XLSX.readFile(filePath);
  const firstSheet = workbook.SheetNames[0];
  expect(firstSheet, 'El fixture debe contener al menos una hoja.').toBeTruthy();
  return XLSX.utils.sheet_to_json<string[]>(workbook.Sheets[firstSheet], {
    header: 1,
    blankrows: false,
    defval: '',
    raw: false,
  });
}

function normalizeRow(row: unknown[]): string[] {
  return row.map((value) => String(value).trim().replace(/\s+/g, ' ')).filter(Boolean);
}
