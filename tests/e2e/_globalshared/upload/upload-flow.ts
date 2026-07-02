import path from 'path';
import { expect, Locator, Page, test } from '@fixtures/base.fixture';
import { ensureLoggedIn, LoginCredentials } from '../auth/login';
import { openSidebarView } from '../navigation/sidebar';

export type UploadExpectedResult =
 | 'success'
 | 'headersError'
 | 'emptyFile'
 | 'maxSize'
 | 'validationError'
 | 'validationDownload';

export interface SharedUploadCaseConfig {
 caseId: string;
 bloqueTag: string;
 moduleTag: string;
 credentials: LoginCredentials;
 fixtureBlockFolder: string;
 section: string;
 view: string;
 modalTitle: RegExp;
 fileFolder?: string;
 fileName: string;
 expectedResult: UploadExpectedResult;
 validateReplaceFileButton?: boolean;
}

export async function openUploadDialog(page: Page, modalTitle: RegExp): Promise<Locator> {
 await page.getByRole('button', { name: /^cargar$/i }).click();

 const modal = page.getByTestId('cargas-parametros-upload-dialog');
 await expect(modal, 'Debe abrirse el modal de carga.').toBeVisible({ timeout: 10_000 });
 await expect(modal.getByText(modalTitle), 'El modal debe corresponder a la vista seleccionada.').toBeVisible({
 timeout: 10_000,
 });

 return modal;
}

export async function continueUploadIfPrompted(page: Page): Promise<void> {
 await page.getByRole('button', { name: /Continuar con la carga/i }).click().catch(() => undefined);
}

export async function attachUploadFile(modal: Locator, filePath: string): Promise<void> {
 const [fileChooser] = await Promise.all([
 modal.page().waitForEvent('filechooser'),
 modal.getByText('Haz click para examinar', { exact: true }).click(),
 ]);

 await fileChooser.setFiles(filePath);
}

export async function expectReplaceFileButtonVisible(modal: Locator): Promise<void> {
 await expect(
 modal.getByRole('button', { name: /subir (?:un )?(?:nuevo|otro) archivo/i }),
 'Debe mostrarse el boton para seleccionar otro archivo antes de procesar.',
 ).toBeVisible({ timeout: 10_000 });
}

export async function assertUploadResult(page: Page, modal: Locator, expectedResult: UploadExpectedResult): Promise<void> {
 const procesarButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });

 if (expectedResult === 'emptyFile') {
 await expect(modal.getByText(/el archivo seleccionado no contiene informaci(?:o|\u00f3|\u00c3\u00b3)n/i)).toBeVisible({ timeout: 5_000 });
 await expect(modal.getByText(/verifique el contenido antes de intentar cargarlo nuevamente/i)).toBeVisible();
 return;
 }

 if (expectedResult === 'maxSize') {
 await expect(modal.getByText(/el archivo excede el tama(?:n|\u00f1|\u00c3\u00b1)o m(?:a|\u00e1|\u00c3\u00a1)ximo permitido/i)).toBeVisible({ timeout: 5_000 });
 await expect(modal.getByText(/\(30 mb\)/i)).toBeVisible();
 await expect(modal.getByText(/seleccione un archivo que cumpla con el l(?:i|\u00ed|\u00c3\u00ad)mite establecido/i)).toBeVisible();
 return;
 }

 await expect(procesarButton).toBeEnabled();
 await procesarButton.click();

 await expect(modal.getByText(/procesando archivo/i)).toBeVisible();
 await expect(modal.getByText(/por favor espere mientras procesamos su archivo/i)).toBeVisible();
 await expect(modal.getByText(/este proceso puede tardar varios minutos/i)).toBeVisible();

 await expect
 .poll(
 async () => {
 if (expectedResult === 'success') {
 return await page.getByRole('button', { name: /Subir otro archivo/i }).isVisible().catch(() => false);
 }
 if (expectedResult === 'validationDownload') {
 return await page.getByRole('button', { name: /descargar errores/i }).isVisible().catch(() => false);
 }
 return await page.getByRole('button', { name: /intentar de nuevo/i }).isVisible().catch(() => false);
 },
 { timeout: 300_000, intervals: [1000, 2000, 3000] },
 )
 .toBe(true);

 if (expectedResult === 'success') {
 await expect(modal.getByText(/listo.*archivo se carg(?:o|\u00f3|\u00c3\u00b3) correctamente/i)).toBeVisible();
 await expect(modal.getByRole('button', { name: /subir otro archivo/i })).toBeVisible();
 await expect(modal.getByRole('button', { name: /^aceptar$/i })).toBeEnabled();
 return;
 }

 if (expectedResult === 'headersError') {
 await expect(modal.getByText(/las cabeceras del archivo no coinciden con las esperadas/i)).toBeVisible();
 await expect(modal.getByText(/verifique la plantilla/i)).toBeVisible();
 await expect(modal.getByRole('button', { name: /intentar de nuevo/i })).toBeVisible();
 return;
 }

 if (expectedResult === 'validationError' || expectedResult === 'validationDownload') {
 await expect(modal.getByText(/faltan algunos datos obligatorios/i)).toBeVisible();
 await expect(modal.getByText(/formato incorrecto/i)).toBeVisible();
 await expect(modal.getByText(/datos que no existen en el cat(?:a|\u00e1|\u00c3\u00a1)logo relacionado/i)).toBeVisible();
 await expect(modal.getByRole('button', { name: /descargar errores/i })).toBeVisible();
 }
}

export function resolveUploadFixturePath(config: Pick<SharedUploadCaseConfig, 'fixtureBlockFolder' | 'fileFolder' | 'fileName'>): string {
 return path.resolve('fixtures', 'files', config.fixtureBlockFolder, config.fileFolder ?? '', config.fileName);
}

export function defineSharedUploadCase(config: SharedUploadCaseConfig): void {
 const flowTag = config.expectedResult === 'success' ? '@upload_valido' : '@upload_invalido';

 test.describe(`@${config.bloqueTag} @${config.caseId} ${flowTag}`, () => {
 test(`@${config.bloqueTag} @${config.caseId} ${flowTag} debe cargar archivo en ${config.view}`, async ({
 page,
 }) => {
 test.setTimeout(360_000);

 await ensureLoggedIn(page, config.credentials);
 await openSidebarView(page, config.section, config.view);

 const modal = await openUploadDialog(page, config.modalTitle);
 const procesarButton = modal.getByRole('button', { name: /procesar archivo|aceptar/i });
 await expect(procesarButton).toBeDisabled();

 await continueUploadIfPrompted(page);
 await attachUploadFile(modal, resolveUploadFixturePath(config));
 if (config.validateReplaceFileButton) {
 await expectReplaceFileButtonVisible(modal);
 }
 await assertUploadResult(page, modal, config.expectedResult);
 });
 });
}
