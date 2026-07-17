import { test } from '@fixtures/base.fixture';
import { expectAdminSidebarUser, loginAsAdmin } from '../_shared/bloque1-login';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('@bloque1 @E0-LOGIN-ADMIN-01 ', () => {
 test('@bloque1 @E0-LOGIN-ADMIN-01 @login @admin @critical debe permitir acceso del rol Administrador y mostrar datos en sidebar', async ({ page }) => {
 await loginAsAdmin(page);
 await expectAdminSidebarUser(page);
 });
});
