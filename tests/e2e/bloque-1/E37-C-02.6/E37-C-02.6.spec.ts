import { test } from '@fixtures/base.fixture';
import { executeNegativeDeleteBlocked } from '../_shared/comunes-status-action';

test.describe('@bloque1 @E37-C-02.6 ', () => {
 test('@bloque1 @E37-C-02.6 @eliminar debe bloquear la eliminacion de Configuracion de Parches cuando existen dependencias', async ({ page }) => {
 await executeNegativeDeleteBlocked(page, {
 menu: 'Configuración de Parches',
 route: 'comunes/configuracion-parches',
 });
 });
});
