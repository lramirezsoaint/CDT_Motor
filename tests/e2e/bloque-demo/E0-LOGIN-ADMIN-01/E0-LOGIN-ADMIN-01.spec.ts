import { test, expect } from '../_shared/demo.fixture';
import { adminCredentials, assertSidebarUserInfo, loginAndAssertDistribuciones } from '../_shared/demo-auth';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque-demo @E0-LOGIN-ADMIN-01 @login @admin @smoke valida que el rol Administrador tiene acceso al sistema', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio de sesion', async () => {
    await page.goto('.', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body'), 'Debe cargar la pagina de inicio de sesion.').toBeVisible();
  });

  await test.step('Ingresar correo y contrasena del rol Administrador', async () => {
    await loginAndAssertDistribuciones(page, adminCredentials, 'Administrador de Gastos');
  });

  await test.step('Validar sidebar con nombre, rol, correo y cerrar sesion', async () => {
    await assertSidebarUserInfo(page, adminCredentials.username, /Administrador/i);
  });
});
