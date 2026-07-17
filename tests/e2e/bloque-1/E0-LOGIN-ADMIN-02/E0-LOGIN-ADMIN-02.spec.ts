import { test } from '@fixtures/base.fixture';
import { expectAdminCanOpenComunes, loginAsAdmin } from '../_shared/bloque1-login';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('@bloque1 @E0-LOGIN-ADMIN-02 ', () => {
 test('@bloque1 @E0-LOGIN-ADMIN-02 @login @admin @critical debe permitir al Administrador visualizar y modificar Comunes', async ({ page }) => {
 await loginAsAdmin(page);
 await expectAdminCanOpenComunes(page);
 });
});
