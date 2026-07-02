import { expect, test } from '@fixtures/base.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { ensureGfContext } from './gf-context';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

type GfReloadDownloadedCaseConfig = {
 caseId: string;
 section: string;
 view: string;
 entityName: string;
 modalTitle: RegExp;
 flowTag?: FlowTag;
};

export function GfReloadDownloadedCase(config: GfReloadDownloadedCaseConfig) {
 test.use({ storageState: '.auth/gestorGF.json' });

 test(`${buildTags({ bloque: '@bloque3', caseId: config.caseId, flowTag: config.flowTag ?? '@upload_valido' })} recarga archivo descargado`, async ({
 page,
 }) => {
 test.setTimeout(240_000);
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

 await expect(downloadButton, `Debe existir Descargar en ${config.entityName}.`).toBeVisible({ timeout: 20_000 });
 await expect(downloadButton, `Descargar debe estar habilitado en ${config.entityName}.`).toBeEnabled();

 const [download] = await Promise.all([
 page.waitForEvent('download', { timeout: 60_000 }),
 downloadButton.click(),
 ]);
 const downloadedFile = await download.path();
 expect(download.suggestedFilename(), 'El archivo descargado debe ser Excel o CSV.').toMatch(/\.(xlsx?|csv)$/i);

 await page.getByRole('button', { name: /^cargar$/i }).click();

 const dialog = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
 const processButton = dialog.getByRole('button', { name: /procesar archivo|aceptar/i }).first();

 await expect(dialog, 'Debe mostrarse el modal de carga.').toBeVisible({ timeout: 20_000 });
 await expect(dialog.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado.').toBeVisible();
 await expect(processButton, 'El boton procesar debe iniciar deshabilitado.').toBeDisabled();

 const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i }).first();
 if (await continueButton.isVisible({ timeout: 3_000 }).catch(() => false)) {
 await continueButton.click();
 }

 const [fileChooser] = await Promise.all([
 page.waitForEvent('filechooser'),
 dialog.getByText(/haz click para examinar/i).click(),
 ]);
 await fileChooser.setFiles(downloadedFile);

 await expect(processButton, 'El boton procesar debe habilitarse al seleccionar archivo.').toBeEnabled();
 await processButton.click();

 await expect(
 dialog.getByText(/listo|archivo se carg[oó] correctamente|cargado satisfactoriamente/i),
 'Debe mostrarse confirmacion de carga.',
 ).toBeVisible({ timeout: 180_000 });
 });
}
