import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeWrongTemplateUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E5-C-01.3 ', () => {
 test('@bloque1 @E5-C-01.3 @upload_invalido debe rechazar Canales con plantilla de otra funcionalidad aunque conserve el nombre esperado', async ({ page }) => {
 await executeWrongTemplateUpload(page, 'E5-C-01.3', comunesUploadCases.canales);
 });
});
