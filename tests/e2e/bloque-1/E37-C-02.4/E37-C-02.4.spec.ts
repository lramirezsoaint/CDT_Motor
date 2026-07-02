import { test } from '@fixtures/base.fixture';
import { executeNegativeInactivation } from '../_shared/comunes-status-action';

test.describe('@bloque1 @E37-C-02.4 ', () => {
 test('@bloque1 @E37-C-02.4 @eliminar debe bloquear la inactivación de un Subcanal con dependencias activas', async ({
 page,
 }) => {
 await executeNegativeInactivation(page, {
 menu: 'Subcanales',
 route: 'comunes/subcanales',
 modalPattern: /subcanal/i,
 keyLabels: ['codigo subcanal', 'nombre subcanal'],
 });
 });
});
