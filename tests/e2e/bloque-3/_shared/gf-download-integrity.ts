import { expect, test } from '@fixtures/base.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { ensureGfContext } from './gf-context';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';
import fs from 'fs';
import * as XLSX from 'xlsx';

type GfDownloadIntegrityCaseConfig = {
 caseId: string;
 section: string;
 view: string;
 entityName: string;
 flowTag?: FlowTag;
};

export function GfDownloadIntegrityCase(config: GfDownloadIntegrityCaseConfig) {
 test.use({ storageState: '.auth/gestorGF.json' });

 test(`${buildTags({ bloque: '@bloque3', caseId: config.caseId, flowTag: config.flowTag ?? '@download_catalogo' })} valida estructura y datos del archivo descargado`, async ({
 page,
 }) => {
 test.setTimeout(180_000);
 const gfPage = new Bloque3GastosFinancierosPage(page);

 await page.goto('/');
 if (!/distribuciones/i.test(page.url())) {
 const loginPage = new LoginPage(page);
 await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
 }
 await expect(page, 'Debe quedar autenticado en Distribuciones.').toHaveURL(/\/distribuciones/i, {
 timeout: 40_000,
 });
 await ensureGfContext(page);

 await gfPage.openSidebarView(config.section, config.view);

 const downloadButton = page
 .getByRole('button', { name: /descargar/i })
 .or(page.locator('[data-testid*="download"], button[id*="download"], [aria-label*="descargar" i]'))
 .first();

 await expect(downloadButton, `Debe existir el boton Descargar en ${config.entityName}.`).toBeVisible({
 timeout: 20_000,
 });
 await expect(downloadButton, `El boton Descargar debe estar habilitado en ${config.entityName}.`).toBeEnabled();

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
