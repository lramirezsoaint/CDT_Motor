import { expect, test } from './bloque5.fixture';
import type { Locator, Page } from '@playwright/test';
import { ensureAmContext, type AmDistributionFlow } from './am-context';
import { buildTags, flowTagForUploadResult, FlowTag } from '../../_globalshared/tags/tags';
import fs from 'fs';
import path from 'path';

export type AmUploadResult =
  | 'success'
  | 'headersError'
  | 'emptyFile'
  | 'maxSize'
  | 'validationError'
  | 'validationDownload';

export type AmUploadCase = {
  caseId: string;
  section: string;
  view: string;
  entityName: string;
  fileName: string;
  modalTitle: RegExp;
  fileFolder?: string;
  flowTag?: FlowTag;
};

export type AmErrorUploadCase = AmUploadCase & {
  errorMessage?: RegExp;
  expectedResult?: AmUploadResult;
};

export type AmOverwriteUploadCase = AmUploadCase;

type UploadCaseConfig = Omit<AmUploadCase, 'entityName'> & {
  expectedResult: AmUploadResult;
};

type AmUploadFlowOptions = {
  expectedResult: AmUploadResult;
  fileFolder?: string;
  errorMessage?: RegExp;
};

function tagsFor(config: Pick<AmUploadCase, 'caseId' | 'flowTag'> & { expectedResult: AmUploadResult }) {
  return buildTags({
    bloque: '@bloque5',
    caseId: config.caseId,
    flowTag: config.flowTag ?? flowTagForUploadResult(config.expectedResult),
  });
}

export async function ensureAmSession(page: Page, flow: AmDistributionFlow = 'upload') {
  await ensureAmContext(page, flow);
}

export async function openAmView(page: Page, config: Pick<AmUploadCase, 'section' | 'view'>) {
  await page.keyboard.press('Escape').catch(() => undefined);
  await page.getByText(config.section, { exact: false }).click();
  await page.getByRole('link', { name: new RegExp(config.view, 'i') }).click();

  await expect(
    page.getByRole('heading', { name: new RegExp(config.view, 'i') }).or(page.getByText(new RegExp(config.view, 'i'))).first(),
    `Debe abrir la vista ${config.section} > ${config.view}.`,
  ).toBeVisible({ timeout: 30_000 });
}

export function resolveAmUploadFile(config: Pick<AmUploadCase, 'caseId' | 'fileName' | 'fileFolder'>) {
  return resolveAmUploadFixture(config.fileName, config.fileFolder ?? config.caseId);
}

export function resolveAmUploadFixture(fileName: string, fileFolder?: string) {
  const fixtureRoot = path.resolve('fixtures', 'files', 'bloque-5');
  const directPath = fileFolder
    ? path.resolve(fixtureRoot, fileFolder, fileName)
    : path.resolve(fixtureRoot, fileName);

  if (fs.existsSync(directPath)) {
    return directPath;
  }

  return resolveAmUploadFileByName(fileName);
}

export function resolveAmUploadFileByResult(
  entityName: string,
  expectedResult: Exclude<AmUploadResult, 'validationDownload'>,
) {
  return resolveAmUploadFixture(fileNameForEntity(entityName), path.join('Real', expectedResult));
}

export function amUploadFixtureExistsByResult(
  entityName: string,
  expectedResult: Exclude<AmUploadResult, 'validationDownload'>,
) {
  return fs.existsSync(resolveAmUploadFileByResult(entityName, expectedResult));
}

export async function openAmUploadDialog(page: Page, config: Pick<AmUploadCase, 'modalTitle'>): Promise<Locator> {
  const uploadButton = page
    .getByRole('button', { name: /^cargar$/i })
    .or(page.locator('button').filter({ hasText: /^cargar$/i }))
    .first();

  await expect(uploadButton, 'Debe existir el boton Cargar.').toBeVisible({ timeout: 20_000 });
  await expect(uploadButton, 'El boton Cargar debe estar habilitado.').toBeEnabled();
  await uploadButton.click();

  const dialog = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
  await expect(dialog, 'Debe mostrarse el modal de carga.').toBeVisible({ timeout: 20_000 });
  await expect(dialog.getByText(config.modalTitle), 'Debe mostrarse el titulo esperado del modal.').toBeVisible();
  await expect(processButton(dialog), 'El boton procesar debe iniciar deshabilitado.').toBeDisabled();

  const continueButton = dialog
    .getByRole('button', { name: /continuar con la carga/i })
    .or(dialog.locator('button').filter({ hasText: /continuar con la carga/i }))
    .first();

  if (await continueButton.isVisible({ timeout: 3_000 }).catch(() => false)) {
    await expect(continueButton, 'Continuar con la carga debe estar habilitado.').toBeEnabled();
    await continueButton.click();

    await expect(
      dialog
        .getByText(/haz click para examinar|coloque aqu[ií] el archivo/i)
        .or(dialog.locator('input[type="file"]'))
        .first(),
      'Debe mostrarse la zona para seleccionar archivo despues de continuar.',
    ).toBeVisible({ timeout: 10_000 });
  }

  return dialog;
}

export async function attachAmUploadFile(
  dialog: Locator,
  uploadCaseOrFileName: AmUploadCase | string
) {
  const filePath =
    typeof uploadCaseOrFileName === 'string'
      ? resolveAmUploadFileByName(uploadCaseOrFileName)
      : resolveAmUploadFile(uploadCaseOrFileName);

  const inputFile = dialog.locator('input[type="file"]').first();

  await expect(
    inputFile,
    'Debe existir un input file dentro del modal.'
  ).toBeAttached({
    timeout: 10_000,
  });

  await inputFile.setInputFiles(filePath);
}

export async function runAmUploadFlow(page: Page, uploadCase: AmUploadCase, options: AmUploadFlowOptions) {
  await openAmView(page, uploadCase);
  const dialog = await openAmUploadDialog(page, uploadCase);
  await attachAmUploadFile(dialog, {
    ...uploadCase,
    fileFolder: options.fileFolder ?? uploadCase.fileFolder ?? path.join('Real', options.expectedResult),
  });
  await confirmAmUploadByResult(dialog, uploadCase.entityName, options.expectedResult, options.errorMessage);
}

export async function confirmAmUpload(dialog: Locator, entityName: string) {
  await confirmAmUploadByResult(dialog, entityName, 'success');
}

export async function confirmAmUploadWithError(dialog: Locator, entityName: string, errorMessage?: RegExp) {
  await confirmAmUploadByResult(dialog, entityName, 'validationError', errorMessage);
}

export async function confirmAmUploadOverwrite(dialog: Locator, entityName: string) {
  await confirmAmUploadByResult(dialog, entityName, 'success');
}

export async function confirmAmUploadByResult(
  dialog: Locator,
  entityName: string,
  expectedResult: AmUploadResult,
  errorMessage?: RegExp,
) {
  if (expectedResult === 'emptyFile' || expectedResult === 'maxSize') {
    await assertImmediateUploadError(dialog, expectedResult);
    return;
  }

  const button = processButton(dialog);
  await expect(button, `El boton procesar debe habilitarse al seleccionar archivo para ${entityName}.`).toBeEnabled({
    timeout: 20_000,
  });
  await button.click();

  await expect(dialog.getByText(/procesando archivo/i), 'Debe mostrarse estado de procesamiento.').toBeVisible({
    timeout: 20_000,
  }).catch(() => undefined);

  if (expectedResult === 'success') {
    await assertUploadSuccess(dialog);
    return;
  }

  if (expectedResult === 'headersError') {
    await assertHeadersError(dialog);
    return;
  }

  await assertValidationError(dialog, expectedResult, errorMessage);
}

function processButton(dialog: Locator) {
  return dialog.getByRole('button', { name: /procesar archivo|aceptar/i }).first();
}

function resolveAmUploadFileByName(fileName: string) {
  const directPath = path.resolve('fixtures', 'files', 'bloque-5', fileName);
  if (fs.existsSync(directPath)) {
    return directPath;
  }

  const matches: string[] = [];
  collectMatchingFiles(path.resolve('fixtures', 'files', 'bloque-5'), fileName, matches);
  expect(matches.length, `Debe existir el fixture ${fileName} en fixtures/files/bloque-5.`).toBeGreaterThan(0);
  return matches[0];
}

function fileNameForEntity(entityName: string) {
  const normalized = normalizeEntityName(entityName);
  const fileNames: Record<string, string> = {
    centros: 'REAL Centros AM.xlsx',
    'cuentas contables': 'REAL Cuentas Contables AM.xlsx',
    'exactus procesado': 'REAL Exactus procesado AM.xlsx',
    exactus: 'REAL Exactus sin procesar AM.xlsx',
    'exactus sin procesar': 'REAL Exactus sin procesar AM.xlsx',
    partidas: 'REAL Partidas AM.xlsx',
    'unidad de cuenta am': 'REAL Unidad de Cuenta AM.xlsx',
  };

  const fileName = fileNames[normalized];
  expect(fileName, `Debe existir mapeo de fixture para la entidad ${entityName}.`).toBeTruthy();
  return fileName;
}

function normalizeEntityName(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function collectMatchingFiles(dir: string, fileName: string, matches: string[]) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectMatchingFiles(fullPath, fileName, matches);
    } else if (entry.name.toLowerCase() === fileName.toLowerCase()) {
      matches.push(fullPath);
    }
  }
}

async function assertUploadSuccess(dialog: Locator) {
  await expect(
    dialog.getByText(/listo|archivo se carg[oó] correctamente|cargado satisfactoriamente/i),
    'Debe mostrarse mensaje de carga correcta.',
  ).toBeVisible({ timeout: 300_000 });

  await expect(
    dialog.getByRole('button', { name: /subir otro archivo|subir un nuevo archivo/i }),
    'Debe mostrarse la accion Subir otro archivo.',
  ).toBeVisible();

  await expect(dialog.getByRole('button', { name: /^aceptar$/i }), 'Aceptar debe estar habilitado.').toBeEnabled();
}

async function assertHeadersError(dialog: Locator) {
  await expect(
    dialog.getByText(/cabeceras.*no coinciden|verifique la plantilla|estructura.*archivo/i),
    'Debe mostrarse error de cabeceras o plantilla.',
  ).toBeVisible({ timeout: 300_000 });

  await expect(dialog.getByRole('button', { name: /intentar de nuevo/i }), 'Debe mostrarse Intentar de nuevo.').toBeVisible();
}

async function assertImmediateUploadError(dialog: Locator, expectedResult: 'emptyFile' | 'maxSize') {
  if (expectedResult === 'emptyFile') {
    await expect(
      dialog.getByText(/archivo seleccionado no contiene informaci[oó]n|archivo.*vac[ií]o|verifique el contenido/i),
      'Debe mostrarse error de archivo vacio.',
    ).toBeVisible({ timeout: 20_000 });
    return;
  }

  await expect(
    dialog.getByText(/excede el tama[nñ]o m[aá]ximo|30 mb|l[ií]mite establecido/i),
    'Debe mostrarse error de archivo mayor a 30 MB.',
  ).toBeVisible({ timeout: 20_000 });
}

async function assertValidationError(dialog: Locator, expectedResult: AmUploadResult, errorMessage?: RegExp) {
  if (errorMessage) {
    await expect(dialog.getByText(errorMessage), 'Debe mostrarse el mensaje de error esperado.').toBeVisible({
      timeout: 300_000,
    });
  } else {
    const validationMessage = dialog
      .getByText(/faltan algunos datos obligatorios/i)
      .or(dialog.getByText(/formato incorrecto/i))
      .or(dialog.getByText(/no existen en el cat[aá]logo/i))
      .first();

    await expect(
      validationMessage,
      'Debe mostrarse mensaje de validacion de datos.',
    ).toBeVisible({ timeout: 300_000 });
  }

  if (expectedResult === 'validationDownload') {
    const downloadErrors = dialog.getByRole('button', { name: /descargar errores/i }).first();
    await expect(downloadErrors, 'Debe mostrarse Descargar errores.').toBeVisible();

    const [download] = await Promise.all([
      dialog.page().waitForEvent('download', { timeout: 60_000 }),
      downloadErrors.click(),
    ]);

    expect(download.suggestedFilename(), 'La descarga de errores debe ser CSV o Excel.').toMatch(/\.(csv|xlsx?)$/i);
    expect(await download.failure(), 'La descarga de errores no debe fallar.').toBeNull();
    return;
  }

  await expect(
    dialog.getByRole('button', { name: /intentar de nuevo/i }).or(dialog.getByRole('button', { name: /descargar errores/i })).first(),
    'Debe mostrarse una accion de recuperacion.',
  ).toBeVisible();
}

export function UploadCase(config: UploadCaseConfig) {
  test(`${tagsFor(config)} carga archivo y valida resultado ${config.expectedResult}`, async ({ page }) => {
    test.setTimeout(360_000);

    await test.step('Abrir sesion de Gestor AM', async () => {
      await ensureAmSession(page);
    });

    await test.step(`Cargar archivo en ${config.section} > ${config.view}`, async () => {
      await runAmUploadFlow(
        page,
        {
          ...config,
          entityName: config.view,
        },
        {
          expectedResult: config.expectedResult,
          fileFolder: config.fileFolder,
        },
      );
    });
  });
}
