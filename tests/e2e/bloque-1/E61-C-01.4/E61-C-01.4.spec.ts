import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeOversizedUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E61-C-01.4 ', () => {
 test('@bloque1 @E61-C-01.4 @upload_invalido debe rechazar archivo de Subcanales mayor a 30 MB', async ({ page }) => {
 await executeOversizedUpload(page, comunesUploadCases.subcanales);
 });
});
