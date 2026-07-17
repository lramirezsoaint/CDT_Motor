import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executePredecessorBlockedUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E58-C-01.4 ', () => {
 test('@bloque1 @E58-C-01.4 @upload_invalido debe bloquear Maestro UoA cuando Subcanales no esta cargado', async ({ page }) => {
 await executePredecessorBlockedUpload(page, 'E58-C-01.4', comunesUploadCases.maestroUoa);
 });
});
