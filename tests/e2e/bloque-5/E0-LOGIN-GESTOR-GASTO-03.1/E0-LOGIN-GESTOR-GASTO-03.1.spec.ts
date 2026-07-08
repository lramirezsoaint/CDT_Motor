import { test } from '@fixtures/base.fixture';
import {
  assertDeleteHiddenInViews,
  gestorAmCredentials,
  loginAndAssertDistribuciones,
} from '../_shared/am-permissions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E0-LOGIN-GESTOR-GASTO-03.1 @am @login @gestor-asiento @critical valida que Gestor AM no elimina en Parametrizacion', async ({
  page,
}) => {
  await test.step('Acceder e iniciar sesion con rol Gestor de Asientos Manuales', async () => {
    await loginAndAssertDistribuciones(page, gestorAmCredentials, 'Gestor de Asientos Manuales');
  });

  await test.step('Validar Parametrizacion > Cuentas Contables, Partidas y Centros sin icono eliminar', async () => {
    await assertDeleteHiddenInViews(page, 'Parametrización', ['Cuentas Contables', 'Partidas', 'Centros'], 'Parametrización');
  });
});
