import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeSimpleOverwriteUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E59-C-01.5 ', () => {
 test('@bloque1 @E59-C-01.5 @upload_valido debe sobrescribir Maestro UoA con archivo del periodo', async ({ page }) => {
 await executeSimpleOverwriteUpload(page, comunesUploadCases.maestroUoa);
 });
});
