import { test } from '@fixtures/base.fixture';
import { executeQuerySystemError } from '../_shared/comunes-system-errors';

test.describe('@bloque1 @E62-ERROR-04 ', () => {
 test('@bloque1 @E62-ERROR-04 @error @busqueda debe mostrar error controlado cuando falla una consulta', async ({ page }) => {
 await executeQuerySystemError(page);
 });
});
