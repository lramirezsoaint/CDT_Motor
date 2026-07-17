import { test } from '@fixtures/base.fixture';
import { executeDownloadSystemError } from '../_shared/comunes-system-errors';

test.describe('@bloque1 @E62-ERROR-02 ', () => {
 test('@bloque1 @E62-ERROR-02 @error @download debe mostrar error controlado cuando falla la descarga de Comunes', async ({ page }) => {
 await executeDownloadSystemError(page);
 });
});
