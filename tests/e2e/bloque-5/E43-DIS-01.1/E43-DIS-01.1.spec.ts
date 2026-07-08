import { test } from '@fixtures/base.fixture';
import {
  createDistribution,
  expectCreateSuccess,
  loginForDistribution,
  openDeleteConfirmation,
  confirmDelete,
  uniqueDistributionName,
  validDistributionData,
} from '../_shared/am-distribution-flows';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque5 @E43-DIS-01.1 @am @distribucion @admin @critical elimina distribucion creada', async ({ page }) => {
  const data = {
    name: uniqueDistributionName('AM eliminar creada'),
    ...validDistributionData,
  };

  await test.step('Acceder a Distribucion con rol Administrador de Gastos', async () => {
    await loginForDistribution(page, 'admin');
  });

  await test.step('Preparar distribucion en estado Creada', async () => {
    await createDistribution(page, data);
    await expectCreateSuccess(page, data.name);
  });

  await test.step('Presionar icono basurero y aceptar advertencia', async () => {
    const row = page.locator('table tbody tr').filter({ hasText: data.name }).first();
    const modal = await openDeleteConfirmation(page, row);
    await confirmDelete(page, modal, data.name);
  });
});
