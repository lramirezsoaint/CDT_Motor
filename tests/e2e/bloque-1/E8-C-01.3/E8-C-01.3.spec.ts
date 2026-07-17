import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeIncompleteRequiredDataUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E8-C-01.3 ', () => {
 test('@bloque1 @E8-C-01.3 @upload_invalido debe rechazar Canales con datos obligatorios incompletos', async ({ page }) => {
 await executeIncompleteRequiredDataUpload(page, comunesUploadCases.canales);
 });
});
