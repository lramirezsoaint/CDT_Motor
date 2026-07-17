import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executePredecessorBlockedUpload } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E58-C-01.1 ', () => {
 test('@bloque1 @E58-C-01.1 @upload_invalido debe bloquear Grupo Producto cuando Lineas no esta cargado', async ({ page }) => {
 await executePredecessorBlockedUpload(page, 'E58-C-01.1', comunesUploadCases.grupoProducto);
 });
});
