import { test } from '../_shared/bloque3.fixture';
import { expect } from '@fixtures/base.fixture';
test('@bloque3 @E42-DIS-01 @distribucion VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

 // 1. Accede a Distribuciones
 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // 2. Presiona icono copy del primer registro
 


});
