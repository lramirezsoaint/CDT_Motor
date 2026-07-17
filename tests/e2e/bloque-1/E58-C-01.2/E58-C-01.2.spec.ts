import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executePredecessorBlockedUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E58-C-01.2 ', () => {
 test('@bloque1 @E58-C-01.2 @upload_invalido debe bloquear Canales cuando Grupo Producto no esta cargado', async ({ page }) => {
 await executePredecessorBlockedUpload(page, 'E58-C-01.2', comunesUploadCases.canales);
 });
});
