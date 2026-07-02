import { test } from '@fixtures/base.fixture';
import { executeNegativeInactivation } from '../_shared/comunes-status-action';

test.describe('@bloque1 @E37-C-02.2 ', () => {
 test('@bloque1 @E37-C-02.2 @eliminar debe bloquear la inactivación de un Grupo Producto con dependencias activas', async ({
 page,
 }) => {
 await executeNegativeInactivation(page, {
 menu: 'Grupo Producto',
 route: 'comunes/grupo-producto',
 modalPattern: /producto/i,
 keyLabels: ['codigo', 'nombre'],
 });
 });
});
