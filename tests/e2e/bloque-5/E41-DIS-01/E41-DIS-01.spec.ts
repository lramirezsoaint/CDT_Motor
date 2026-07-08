import { test } from '@fixtures/base.fixture';
import {
  assertProgressModalMatchesCatalog,
  findFirstDistributionRow,
  loginForDistribution,
  openViewDistributionModal,
} from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E41-DIS-01 @am @distribucion @gestor-asiento @regression visualiza progreso de distribucion', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Presionar icono ojo para visualizar registro seleccionado', async () => {
    const row = await findFirstDistributionRow(page, 'visualizar progreso');
    const rowText = await row.innerText();
    const modal = await openViewDistributionModal(page, row);
    await assertProgressModalMatchesCatalog(modal, rowText);
  });
});
