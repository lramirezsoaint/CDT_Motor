import { test } from '../_shared/bloque3.fixture';
import { expect } from '@fixtures/base.fixture';
test('@bloque3 @E41-DIS-01 @distribucion VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

 // 1. Accede a Distribuciones
 await expect(page)
 .toHaveURL(/\/distribuciones/i);

 // 2. Presiona icono ojo del primer registro
 await page
 .getByRole('row')
 .nth(1)
 .getByRole('button')
 .first()
 .click();

 // 3. Se levanta modal con información de progreso
 const modal = page.getByRole('dialog');

 await expect(modal).toBeVisible();

 await expect(
 modal.getByText(/proceso/i)
 ).toBeVisible();

 await expect(
 modal.getByText(/Resumido/i)
 ).toBeVisible();

 await expect(
 modal.getByText(/Completo/i)
 ).toBeVisible();

});
