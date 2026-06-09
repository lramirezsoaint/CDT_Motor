import path from 'path';
import { expect, Page, test } from '@playwright/test';
import {
  acceptButtonFrom,
  goToComunesView,
  openUploadDialog,
  uploadFile,
  uploadFileWithName,
} from './comunes-upload';

export type NegativeUploadConfig = {
  caseId: string;
  menu: string;
  route: string;
  modalPattern: RegExp;
  fixtureDir: string;
  relativePath: string;
  expectedMessage: RegExp;
  entityName: string;
  uploadName?: string;
  shouldProcess?: boolean;
  confirmReplaceWarning?: boolean;
};

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

async function visibleMessages(page: Page) {
  const locators = [
    page.locator('[role="alert"]'),
    page.locator('[role="status"]'),
    page.locator('[data-sonner-toast]'),
    page.locator('.Toastify__toast'),
    page.locator('.MuiAlert-root'),
    page.locator('[aria-live="polite"], [aria-live="assertive"]'),
    page.getByTestId('cargas-parametros-upload-dialog'),
  ];

  const messages = new Set<string>();

  for (const locator of locators) {
    const count = await locator.count().catch(() => 0);
    for (let index = 0; index < count; index += 1) {
      const candidate = locator.nth(index);
      if (!(await candidate.isVisible().catch(() => false))) continue;
      const text = (await candidate.innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
      if (text) messages.add(text);
    }
  }

  return [...messages];
}

export async function executeNegativeUpload(page: Page, config: NegativeUploadConfig) {
  await test.step(`QA: ingresar a Distribucion y abrir Comunes > ${config.menu}`, async () => {
    await goToComunesView(page, config.menu, config.route);
  });

  await test.step(`QA: abrir modal de carga de ${config.entityName}`, async () => {
    const dialog = await openUploadDialog(page, config.modalPattern);

    if (config.confirmReplaceWarning) {
      await expect(
        dialog,
        `[BUG] El modal de ${config.entityName} no muestra la advertencia de reemplazo antes de continuar con la carga.`,
      ).toContainText(/si sube un nuevo archivo|informaci[oó]n previamente cargada ser[aá] reemplazada|desea continuar/i, {
        timeout: 10_000,
      });

      const continueButton = dialog.getByRole('button', { name: /continuar con la carga/i });
      await expect(
        continueButton,
        `[BUG] El modal de ${config.entityName} no muestra el boton "Continuar con la carga" en la advertencia de reemplazo.`,
      ).toBeEnabled({ timeout: 10_000 });
      await continueButton.click();
    }

    await expect(
      acceptButtonFrom(dialog),
      `[BUG] El boton Aceptar de ${config.entityName} no inicia deshabilitado antes de seleccionar archivo.`,
    ).toBeDisabled();
  });

  await test.step(`QA: seleccionar archivo negativo para ${config.entityName}`, async () => {
    const dialog = page.getByTestId('cargas-parametros-upload-dialog');
    const uploadedFile = config.uploadName
      ? await uploadFileWithName(page, {
          fixtureDir: config.fixtureDir,
          relativePath: config.relativePath,
          uploadName: config.uploadName,
        })
      : await uploadFile(page, {
          fixtureDir: config.fixtureDir,
          relativePath: config.relativePath,
        });
    const uploadedFileName = config.uploadName ?? path.basename(uploadedFile);

    await expect(
      dialog,
      `[BUG] El modal de ${config.entityName} no muestra el archivo seleccionado (${uploadedFileName}).`,
    ).toContainText(uploadedFileName, { timeout: 10_000 });

    if (config.shouldProcess) {
      const acceptButton = acceptButtonFrom(dialog);
      if (await acceptButton.isEnabled().catch(() => false)) {
        await acceptButton.click();
      }
    }
  });

  await test.step(`QA: validar mensaje de rechazo para ${config.entityName}`, async () => {
    await expect
      .poll(async () => {
        const messages = await visibleMessages(page);
        return messages.find((message) => config.expectedMessage.test(normalizeText(message))) ?? '';
      }, {
        message: `[BUG] No aparece el mensaje esperado de rechazo para ${config.entityName}.`,
        timeout: 20_000,
      })
      .not.toBe('');
  });
}
