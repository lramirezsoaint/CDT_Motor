import { test } from '@fixtures/base.fixture';
import { executeCreateSystemError } from '../_shared/comunes-system-errors';

test.describe('@bloque1 @E62-ERROR-03 ', () => {
 test('@bloque1 @E62-ERROR-03 @error @registrar debe mostrar error controlado cuando falla la creacion de registro', async ({ page }) => {
 await executeCreateSystemError(page);
 });
});
