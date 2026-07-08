import { test } from '@fixtures/base.fixture';
import {
  createDistribution,
  expectCreateSuccess,
  loginForDistribution,
  uniqueDistributionName,
  validDistributionData,
} from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E40-DIS-01 @am @distribucion @gestor-asiento @critical crea una nueva distribucion', async ({ page }) => {
  const data = {
    name: uniqueDistributionName(`${validDistributionData.periodo} ${validDistributionData.tipo} ${validDistributionData.seccion}`),
    ...validDistributionData,
  };

  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Abrir modal Nueva Distribucion y completar campos validos', async () => {
    await createDistribution(page, data);
  });

  await test.step('Validar mensaje de exito y registro creado', async () => {
    await expectCreateSuccess(page, data.name);
  });
});
