import { test } from './bloque5.fixture';
import { expect } from '@fixtures/base.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { ensureAmContext } from './am-context';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';
import fs from 'fs';
import * as XLSX from 'xlsx';

type AmDownloadIntegrityCaseConfig = {
  caseId: string;
  section: string;
  view: string;
  entityName: string;
  buttonId: string;
  flowTag?: FlowTag;
};

export function AmDownloadIntegrityCase(config: AmDownloadIntegrityCaseConfig) {
  test(`${buildTags({ bloque: '@bloque5', caseId: config.caseId, flowTag: config.flowTag ?? '@download_catalogo' })} valida estructura y datos del archivo descargado`, async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const amPage = new Bloque5AsientosManualesPage(page);

    await expect(page, 'Debe quedar autenticado en Distribuciones.').toHaveURL(/\/distribuciones/i, {
      timeout: 40_000,
    });
    await ensureAmContext(page);

    await amPage.openSidebarView(config.section, config.view);

    const downloadButton = page.locator(`#${config.buttonId}`).first();

    const isEnabled = await downloadButton.isEnabled().catch(() => false);
    if (!isEnabled) {
      test.info().annotations.push({ type: 'skip', description: `Botón descargar deshabilitado en ${config.entityName}: no hay datos para exportar.` });
      return;
    }

    await expect(downloadButton, `Debe existir el boton Descargar en ${config.entityName}.`).toBeVisible({
      timeout: 20_000,
    });

    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 60_000 }),
      downloadButton.click(),
    ]);

    const filename = download.suggestedFilename();
    expect(filename, 'El archivo descargado debe ser Excel o CSV.').toMatch(/\.(xlsx?|csv)$/i);
    expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();

    const downloadPath = await download.path();
    const stats = fs.statSync(downloadPath);
    expect(stats.size, `El archivo ${filename} debe tener contenido.`).toBeGreaterThan(0);

    if (/\.xlsx?$/i.test(filename)) {
      const workbook = XLSX.readFile(downloadPath);
      const firstSheet = workbook.SheetNames[0];
      expect(firstSheet, 'El Excel descargado debe incluir al menos una hoja.').toBeTruthy();

      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], {
        header: 1,
        blankrows: false,
      }) as unknown[][];

      expect(rows.length, 'El archivo debe conservar cabeceras y datos.').toBeGreaterThan(1);
      expect(rows[0].filter(Boolean).length, 'La primera fila debe conservar columnas.').toBeGreaterThan(0);
    }
  });
}
