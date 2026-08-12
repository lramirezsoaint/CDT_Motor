import { test } from '../_shared/demo.fixture';
import {
  assertProgressModalMatchesCatalog,
  findFirstDistributionRow,
  loginForDistribution,
  openViewDistributionModal,
} from '../_shared/demo-distribution';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque-demo @E41-DIS-01 @am @distribucion @gestor-asiento @regression valida visualizacion del estado de ejecucion de una distribucion', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Presionar icono ojo para visualizar registro seleccionado', async () => {
    const row = await findFirstDistributionRow(page, 'visualizar progreso demo');
    const rowText = await row.innerText();
    const modal = await openViewDistributionModal(page, row);
    await assertProgressModalMatchesCatalog(modal, rowText);
  });
});
