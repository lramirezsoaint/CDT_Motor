import { test, expect } from '@fixtures/base.fixture';
import {
  adminCredentials,
  assertSidebarUserInfo,
  loginAndAssertDistribuciones,
} from '../_shared/am-permissions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E0-LOGIN-ADMIN-01 @am @login @admin @smoke valida acceso del rol Administrador', async ({ page }) => {
  await test.step('Acceder a la pagina de inicio de sesion', async () => {
    await page.goto('.', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
  });

  await test.step('Ingresar correo y contrasena del rol Administrador', async () => {
    await loginAndAssertDistribuciones(page, adminCredentials, 'Administrador de Gastos');
  });

  await test.step('Validar sidebar con nombre, rol, correo y cerrar sesion', async () => {
    await assertSidebarUserInfo(page, adminCredentials.username, /Administrador/i);
  });
});
