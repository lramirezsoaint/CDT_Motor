import { test } from '@fixtures/base.fixture';
import { assertRowActionHidden, findDistributionRowByStatus, loginForGfDistribution } from '../_shared/gf-distribution-actions';

test.use({ storageState: { cookies: [], origins: [] } });

test('@bloque3 @E43-DIS-02.1 @distribucion @admin @regression no muestra Eliminar en estados restringidos', async ({ page }) => {
 const targetStates = [
 { label: 'Detenida', pattern: /detenid[ao]/i },
 { label: 'Corriendo', pattern: /corriendo|en ejecuci[oó]n/i },
 { label: 'Completada', pattern: /completad[ao]/i },
 ];

 await test.step('Acceder a Distribucion con rol Administrador de Gastos', async () => {
 await loginForGfDistribution(page, 'admin');
 });

 for (const state of targetStates) {
 await test.step(`Validar accion Eliminar oculta para distribucion ${state.label}`, async () => {
 const row = await findDistributionRowByStatus(page, state.pattern, state.label);
 await assertRowActionHidden(page, row, /eliminar|delete/i, `distribucion ${state.label}`);
 });
 }
});
