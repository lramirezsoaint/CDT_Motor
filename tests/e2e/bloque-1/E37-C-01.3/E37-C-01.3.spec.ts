import { test } from '@fixtures/base.fixture';
import { executePositiveInactivation } from '../_shared/comunes-status-action';

test.describe('@bloque1 @E37-C-01.3 ', () => {
 test('@bloque1 @E37-C-01.3 @eliminar debe inactivar un Canal desde edición y reflejar el cambio en tabla', async ({ page }) => {
 await executePositiveInactivation(page, {
 menu: 'Canales',
 route: 'comunes/canales',
 modalPattern: /canal/i,
 keyLabels: ['codigo', 'nombre'],
 });
 });
});
