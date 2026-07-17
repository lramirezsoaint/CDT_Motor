import { test } from '@fixtures/base.fixture';
import {
 confirmGfDistributionDelete,
 findDistributionRowByStatus,
 loginForGfDistribution,
 openGfDeleteConfirmation,
} from '../_shared/gf-distribution-actions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque3 @E43-DIS-01.2 @distribucion @admin @critical elimina distribucion con errores', async ({ page }) => {
 await test.step('Acceder a Distribucion con rol Administrador de Gastos', async () => {
 await loginForGfDistribution(page, 'admin');
 });

 await test.step('Buscar distribucion en estado Con errores y eliminarla', async () => {
 const row = await findDistributionRowByStatus(page, /con errores|error/i, 'con errores');
 const modal = await openGfDeleteConfirmation(page, row);
 await confirmGfDistributionDelete(page, modal);
 });
});
