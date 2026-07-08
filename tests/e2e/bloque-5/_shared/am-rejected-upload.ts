import type { Page } from '@playwright/test';
import {
  amUploadFixtureExistsByResult,
  confirmAmUploadByResult,
  openAmUploadDialog,
  openAmView,
  resolveAmUploadFileByResult,
} from './am-upload';
import type { RejectedAmUploadCase } from './am-rejected-upload-cases';

export function rejectedAmFixtureExists(uploadCase: RejectedAmUploadCase) {
  return amUploadFixtureExistsByResult(uploadCase.entityName, uploadCase.expectedResult);
}

export function rejectedAmFixtureMissingReason(uploadCase: RejectedAmUploadCase) {
  const catalogIssue = uploadCase.catalogNote ? ` ${uploadCase.catalogNote}` : '';
  return (
    `TODO [FIXTURE]: falta archivo ${uploadCase.expectedResult} para "${uploadCase.entityName}" en ` +
    `fixtures/files/bloque-5/Real/${uploadCase.expectedResult}/.${catalogIssue}`
  );
}

export async function runRejectedAmUpload(page: Page, uploadCase: RejectedAmUploadCase) {
  const filePath = resolveAmUploadFileByResult(uploadCase.entityName, uploadCase.expectedResult);

  await openAmView(page, uploadCase);
  const dialog = await openAmUploadDialog(page, uploadCase);
  await dialog.locator('input[type="file"]').first().setInputFiles(filePath);
  await confirmAmUploadByResult(
    dialog,
    uploadCase.entityName,
    uploadCase.expectedResult,
  );
}
