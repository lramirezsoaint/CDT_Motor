import { expect, test } from '@fixtures/base.fixture';
import path from 'path';
import { GtCaseBase, openGtView, tagsFor, visibleButton } from './gt-ui';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution, selectGtDistributionDownload, SelectGtDistributionOptions } from './gt-distribution';
type ReloadCaseConfig = GtCaseBase & {
 modalTitle: RegExp;
 distribution?: SelectGtDistributionOptions;
};

export function ReloadDownloadedCase(config: ReloadCaseConfig) {

 test(`${tagsFor(config)} recarga archivo descargado desde ${config.view}`, async ({ page }, testInfo) => {
 test.setTimeout(240_000);
 try {
 await page.goto('https://distribuciongastos.pacificotest.com.pe/');
 const loginPage = new LoginPage(page);
 await loginPage.login(
 env.gestorGTUsername,
 env.gestorGTPassword
 );
 } catch (error) { }
 await selectGtDistributionDownload(page, config.distribution);
 // Esperar un segundo para que la pantalla de distribuciones se estabilice
 await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
 await openGtView(page, config);
 await page.waitForTimeout(2500); // 2 segundos
 });

 let downloadedPath = '';

 await test.step('Descargar archivo base', async () => {
 const downloadButton = page.locator(
 '[data-testid$="-download"]'
 ).first();
 await expect(downloadButton, 'Debe existir el boton Descargar.').toBeVisible();
 await expect(downloadButton, 'El boton Descargar debe estar habilitado.').toBeEnabled();

 const [download] = await Promise.all([page.waitForEvent('download'), downloadButton.click()]);
 expect(await download.failure(), 'La descarga base no debe fallar.').toBeNull();

 downloadedPath = testInfo.outputPath(path.basename(download.suggestedFilename()));
 await download.saveAs(downloadedPath);
 expect(downloadedPath, 'La descarga base debe ser xlsx o csv.').toMatch(/\.(xlsx|csv)$/i);
 });

 await test.step('Abrir modal Cargar y validar estado inicial', async () => {
 await visibleButton(page, /^cargar$/i).click();

 const modal = page
 .getByTestId('cargas-parametros-upload-dialog')
 .or(page.getByRole('dialog'))
 .first();

 await expect(modal, 'Debe mostrarse el modal de carga.').toBeVisible();
 await test.step('Validar mensaje previo de advertencia si existe', async () => {
 const continueButton = modal.getByRole('button', {
 name: /continuar con la carga/i
 });

 try {
 await continueButton.click();
 } catch (error) { }
 });
 
 const acceptButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });
 
 const [fileChooser] = await Promise.all([
 page.waitForEvent('filechooser'),
 modal.getByText('Haz click para examinar', { exact: true }).click(),
 ]);

 await fileChooser.setFiles(downloadedPath);
 await expect(acceptButton, 'El boton aceptar queda habilitado tras seleccionar archivo.').toBeEnabled();
 await acceptButton.click();
 await expect(modal.getByText(/listo.*archivo se cargo correctamente|listo.*archivo se cargó correctamente/i)).toBeVisible({
 timeout: 300_000,
 });
 });
 });
}
