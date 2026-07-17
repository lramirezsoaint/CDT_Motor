import { test } from '@fixtures/base.fixture';
import { executePcfPredecessorBlocked } from '../_shared/comunes-pcf';

test.describe('@bloque1 @E58-C-01.5 ', () => {
 test('@bloque1 @E58-C-01.5 @upload_invalido debe bloquear Traer PCF cuando los antecesores no estan cargados', async ({ page }) => {
 await executePcfPredecessorBlocked(page);
 });
});
