import { test } from '@fixtures/base.fixture';
import { comunesUploadCases } from '../_shared/comunes-case-config';
import { executeUploadAndValidateVisibleTable } from '../_shared/comunes-generated-upload';

test.describe('@bloque1 @E9-C-01.7 ', () => {
 test('@bloque1 @E9-C-01.7 @upload_valido debe cargar Configuracion de Parches y mostrar la tabla con su estructura esperada', async ({ page }) => {
 test.setTimeout(240_000);
 await executeUploadAndValidateVisibleTable(page, comunesUploadCases.configuracionParches);
 });
});
