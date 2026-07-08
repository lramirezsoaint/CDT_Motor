import { test } from '@fixtures/base.fixture';
import {
  assertDeleteHiddenInViews,
  gestorAmCredentials,
  loginAndAssertDistribuciones,
} from '../_shared/am-permissions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E0-LOGIN-GESTOR-GASTO-03.2 @am @login @gestor-asiento @critical valida que Gestor AM no elimina en Aprovisionamiento', async ({
  page,
}) => {
  await test.step('Acceder e iniciar sesion con rol Gestor de Asientos Manuales', async () => {
    await loginAndAssertDistribuciones(page, gestorAmCredentials, 'Gestor de Asientos Manuales');
  });

  await test.step('Validar Aprovisionamiento > Exactus y Unidad de Cuenta AM sin icono eliminar', async () => {
    await assertDeleteHiddenInViews(page, 'Aprovisionamiento', ['Exactus', 'Unidad de Cuenta AM'], 'Aprovisionamiento');
  });
});
