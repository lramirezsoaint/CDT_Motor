import { test } from '@fixtures/base.fixture';
import { findFirstDistributionRow, loginForDistribution, selectDistributionAndAssert } from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test.skip(true, 'El caso queda omitido por dependencia en la pestaña Procesos');

test('@bloque5 @E44-DIS @am @distribucion @gestor-asiento @regression selecciona distribucion del listado principal', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Hacer click en el nombre de distribucion desde la tabla principal', async () => {
    const row = await findFirstDistributionRow(page, 'seleccionar distribucion');
    await selectDistributionAndAssert(page, row);
  });
});
