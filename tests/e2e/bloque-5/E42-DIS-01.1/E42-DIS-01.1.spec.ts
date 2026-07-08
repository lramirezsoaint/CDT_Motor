import { test } from '@fixtures/base.fixture';
import { assertActionHiddenForStatuses, loginForDistribution } from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E42-DIS-01.1 @am @distribucion @gestor-asiento @regression valida copia no visible para estados no completados', async ({
  page,
}) => {
  await test.step('Acceder a la pagina de inicio Distribucion', async () => {
    await loginForDistribution(page, 'gestorAM');
  });

  await test.step('Buscar distribuciones creada, detenida, con errores y corriendo', async () => {
    await assertActionHiddenForStatuses(
      page,
      [
        { label: 'Creada', pattern: /Creada/i },
        { label: 'Detenida', pattern: /Detenid[ao]/i },
        { label: 'Con errores', pattern: /Con errores/i },
        { label: 'Corriendo', pattern: /Corriendo/i },
      ],
      'copy',
    );
  });
});
