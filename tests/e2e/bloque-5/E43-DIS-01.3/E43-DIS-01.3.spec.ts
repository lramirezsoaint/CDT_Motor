import { test } from '@fixtures/base.fixture';
import { assertActionHiddenForStatuses, loginForDistribution } from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E43-DIS-01.3 @am @distribucion @admin @critical valida eliminar no visible para estados no permitidos', async ({
  page,
}) => {
  await test.step('Acceder a Distribucion con rol Administrador de Gastos', async () => {
    await loginForDistribution(page, 'admin');
  });

  await test.step('Buscar distribuciones detenida, corriendo y completada sin icono eliminar', async () => {
    await assertActionHiddenForStatuses(
      page,
      [
        { label: 'Detenida', pattern: /Detenid[ao]/i },
        { label: 'Corriendo', pattern: /Corriendo/i },
        { label: 'Completada', pattern: /Completad[ao]/i },
      ],
      'delete',
    );
  });
});
