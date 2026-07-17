import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeWrongTemplateUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E5-C-01.4 ', () => {
 test('@bloque1 @E5-C-01.4 @upload_invalido debe rechazar Subcanales con plantilla de otra funcionalidad aunque conserve el nombre esperado', async ({ page }) => {
 await executeWrongTemplateUpload(page, 'E5-C-01.4', comunesUploadCases.subcanales);
 });
});
