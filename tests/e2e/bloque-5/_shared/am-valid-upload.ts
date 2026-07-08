import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import {
  AmUploadCase,
  attachAmUploadFile,
  amUploadFixtureExistsByResult,
  confirmAmUpload,
  ensureAmSession,
  openAmUploadDialog,
  openAmView,
} from './am-upload';

export type ValidAmUploadCase = AmUploadCase & {
  validateReplaceFile?: boolean;
  catalogIssue?: string;
};

export function validAmFixtureExists(config: ValidAmUploadCase): boolean {
  return amUploadFixtureExistsByResult(config.entityName, 'success');
}

export function validAmFixtureMissingReason(config: ValidAmUploadCase): string {
  return `TODO [FIXTURE]: falta archivo success para ${config.entityName} en fixtures/files/bloque-5/Real/success/.`;
}

export async function runValidAmUpload(page: Page, config: ValidAmUploadCase): Promise<void> {
  await ensureAmSession(page);
  await openAmView(page, config);

  let dialog = await openAmUploadDialog(page, config);
  await attachAmUploadFile(dialog, { ...config, fileFolder: 'Real/success' });

  const replaceButton = dialog
    .getByRole('button', { name: /subir (?:un )?(?:nuevo|otro) archivo/i })
    .or(dialog.getByText(/subir (?:un )?(?:nuevo|otro) archivo/i))
    .first();

  await expect(
    replaceButton,
    `Debe mostrarse Subir nuevo archivo despues de seleccionar ${config.entityName}.`,
  ).toBeVisible({ timeout: 15_000 });

  if (config.validateReplaceFile) {
    await replaceButton.click();

    const currentDialog = page.getByTestId('cargas-parametros-upload-dialog').or(page.getByRole('dialog')).first();
    if (await currentDialog.isVisible({ timeout: 5_000 }).catch(() => false)) {
      dialog = currentDialog;
    } else {
      dialog = await openAmUploadDialog(page, config);
    }

    await attachAmUploadFile(dialog, { ...config, fileFolder: 'Real/success' });
  }

  await confirmAmUpload(dialog, config.entityName);
}
