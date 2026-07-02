import fs from 'fs';
import * as XLSX from 'xlsx';
import { test, expect } from '../_shared/bloque3.fixture';

test('@bloque3 @E67-DIS @distribucion valida estructura del archivo descargado de Distribucion', async ({
  page,
  distribucionPage,
}, testInfo) => {
  await test.step('Abrir pantalla Distribuciones GF', async () => {
    await distribucionPage.openDistribuciones();
  });

  await test.step('Descargar archivo de Distribucion', async () => {
    const downloadButton = page
      .locator('[data-testid$="-download"], [data-testid*="download" i], [aria-label*="descargar" i]')
      .or(page.getByRole('button', { name: /descargar/i }))
      .first();

    await expect(downloadButton, 'Debe existir el boton Descargar de Distribucion.').toBeVisible({ timeout: 30_000 });
    await expect(downloadButton, 'El boton Descargar de Distribucion debe estar habilitado.').toBeEnabled();

    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 60_000 }),
      downloadButton.click(),
    ]);

    expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();
    expect(download.suggestedFilename(), 'El archivo descargado debe tener extension valida.').toMatch(/\.(xlsx?|csv)$/i);

    const targetPath = testInfo.outputPath(download.suggestedFilename());
    await download.saveAs(targetPath);

    const stats = fs.statSync(targetPath);
    expect(stats.size, 'El archivo descargado debe tener contenido.').toBeGreaterThan(0);
    expect(readHeaderCount(targetPath), 'El archivo descargado debe conservar estructura de columnas.').toBeGreaterThan(0);
  });
});

function readHeaderCount(filePath: string): number {
  if (/\.csv$/i.test(filePath)) {
    const firstLine = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).find(Boolean) ?? '';
    return firstLine.split(/,|;|\t/).filter((value) => value.trim()).length;
  }

  const workbook = XLSX.readFile(filePath);
  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) return 0;

  const rows = XLSX.utils.sheet_to_json<string[]>(workbook.Sheets[firstSheetName], { header: 1 });
  const header = rows.find((row) => Array.isArray(row) && row.some((value) => String(value ?? '').trim()));
  return header?.filter((value) => String(value ?? '').trim()).length ?? 0;
}
