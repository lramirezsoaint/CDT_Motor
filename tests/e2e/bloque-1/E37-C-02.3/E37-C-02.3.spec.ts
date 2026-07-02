import { test } from '@fixtures/base.fixture';
import { executeNegativeInactivation } from '../_shared/comunes-status-action';

test.describe('@bloque1 @E37-C-02.3 ', () => {
 test('@bloque1 @E37-C-02.3 @eliminar debe bloquear la inactivación de un Canal con dependencias activas', async ({ page }) => {
 await executeNegativeInactivation(page, {
 menu: 'Canales',
 route: 'comunes/canales',
 modalPattern: /canal/i,
 keyLabels: ['codigo', 'nombre'],
 });
 });
});
