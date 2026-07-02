import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { env } from '@config/env';

test('@bloque3 @E0-LOGIN-GESTOR-GASTO-03.1 @login valida que Gestor GF no pueda eliminar en Parametrizacion', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const gfPage = new Bloque3GastosFinancierosPage(page);
  const views = ['Cuentas Contables', 'Centros', 'Maestro Producto'];

  await test.step('Autenticarse con rol Gestor GF', async () => {
    await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
    await expect(page, 'Debe acceder correctamente al sistema con rol Gestor GF.').toHaveURL(/\/distribuciones/i, {
      timeout: 40_000,
    });
  });

  for (const view of views) {
    await test.step(`Validar Parametrizacion > ${view} sin accion eliminar`, async () => {
      await gfPage.openSidebarView('Parametrización', view);
      await gfPage.assertDeleteActionHiddenInCurrentView(`Parametrización > ${view}`);
    });
  }
});
