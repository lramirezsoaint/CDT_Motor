import { test } from '@fixtures/base.fixture';
import {
 createGfDistribution,
 confirmGfDistributionDelete,
 expectGfCreateSuccess,
 loginForGfDistribution,
 openGfDeleteConfirmation,
 uniqueGfDistributionName,
 validGfDistributionData,
} from '../_shared/gf-distribution-actions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque3 @E43-DIS-01.1 @distribucion @admin @critical elimina distribucion creada', async ({ page }) => {
 const data = {
 name: uniqueGfDistributionName('GF eliminar creada'),
 ...validGfDistributionData,
 };

 await test.step('Acceder a Distribucion con rol Administrador de Gastos', async () => {
 await loginForGfDistribution(page, 'admin');
 });

 await test.step('Preparar distribucion en estado Creada', async () => {
 await createGfDistribution(page, data);
 await expectGfCreateSuccess(page, data.name);
 });

 await test.step('Eliminar distribucion creada desde menu de acciones', async () => {
 const row = page.locator('table tbody tr').filter({ hasText: data.name }).first();
 const modal = await openGfDeleteConfirmation(page, row);
 await confirmGfDistributionDelete(page, modal, data.name);
 });
});
