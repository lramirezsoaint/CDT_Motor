import { test } from '@fixtures/base.fixture';
import {
  assertComunesNotVisibleForGestorAm,
  gestorAmCredentials,
  loginAndAssertDistribuciones,
} from '../_shared/am-permissions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E0-LOGIN-GESTOR-GASTO-02 @am @login @gestor-asiento @critical valida que Gestor AM no visualiza Comunes', async ({
  page,
}) => {
  await test.step('Acceder e iniciar sesion con rol Gestor de Asientos Manuales', async () => {
    await loginAndAssertDistribuciones(page, gestorAmCredentials, 'Gestor de Asientos Manuales');
  });

  await test.step('Seleccionar menu lateral Comunes', async () => {
    await assertComunesNotVisibleForGestorAm(page);
  });
});
