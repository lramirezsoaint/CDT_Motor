import { test, expect } from '@fixtures/base.fixture';
import {
  assertGestorAmShellRestrictions,
  assertSidebarUserInfo,
  gestorAmCredentials,
  loginAndAssertDistribuciones,
} from '../_shared/am-permissions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E0-LOGIN-GESTOR-ASIENTO-01 @am @login @gestor-asiento @smoke valida acceso Gestor AM', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio de sesion', async () => {
    await page.goto('.', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
  });

  await test.step('Ingresar correo y contrasena del rol Gestor de Asientos Manuales', async () => {
    await loginAndAssertDistribuciones(page, gestorAmCredentials, 'Gestor de Asientos Manuales');
  });

  await test.step('Validar sidebar con rol, correo y cerrar sesion', async () => {
    await assertSidebarUserInfo(page, gestorAmCredentials.username, /Gestor de Asientos Manuales|Asientos Manuales/i);
  });

  await test.step('Validar selector superior Asientos Manuales sin otros tipos de gasto', async () => {
    await assertGestorAmShellRestrictions(page);
  });
});
