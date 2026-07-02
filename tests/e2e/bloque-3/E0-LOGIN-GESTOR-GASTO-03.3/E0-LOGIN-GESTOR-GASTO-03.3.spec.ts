import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { env } from '@config/env';

test('@bloque3 @E0-LOGIN-GESTOR-GASTO-03.3 @login valida que Gestor GF no pueda eliminar en Asignaciones', async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const gfPage = new Bloque3GastosFinancierosPage(page);
  const views = ['Especiales NIIF', 'Driver Reservas a UoA', 'Distribución UoA Generales Multiramo'];

  await test.step('Autenticarse con rol Gestor GF', async () => {
    await loginPage.login(env.gestorGFUsername, env.gestorGFPassword);
    await expect(page, 'Debe acceder correctamente al sistema con rol Gestor GF.').toHaveURL(/\/distribuciones/i, {
      timeout: 40_000,
    });
  });

  for (const view of views) {
    await test.step(`Validar Asignaciones > ${view} sin accion eliminar`, async () => {
      await gfPage.openSidebarView('Asignaciones', view);
      await gfPage.assertDeleteActionHiddenInCurrentView(`Asignaciones > ${view}`);
    });
  }
});
