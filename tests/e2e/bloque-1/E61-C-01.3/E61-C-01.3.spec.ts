import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeOversizedUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E61-C-01.3 ', () => {
 test('@bloque1 @E61-C-01.3 @upload_invalido debe rechazar archivo de Canales mayor a 30 MB', async ({ page }) => {
 await executeOversizedUpload(page, comunesUploadCases.canales);
 });
});
