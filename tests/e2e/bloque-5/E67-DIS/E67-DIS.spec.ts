import { test } from '@fixtures/base.fixture';
import { downloadDistributionAndAssertIntegrity, loginForDistribution } from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E67-DIS @am @download_catalogo @gestor-asiento @regression valida integridad de descarga Distribucion', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Presionar boton Descargar', async () => {
    await downloadDistributionAndAssertIntegrity(page);
  });
});
