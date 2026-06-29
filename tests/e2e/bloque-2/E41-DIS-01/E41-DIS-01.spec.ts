import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { selectGtDistribution } from '../_shared/gt-distribution';

test.use({ storageState: '.auth/gestorGT.json' });
test('@bloque2 @gt @gestorGT @E41-DIS-01 VISUALIZAR-PROGRESO-DISTRIBUCION', async ({ page }) => {

  try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGTUsername,
      env.gestorGTPassword
      );
    } catch (error) { }
await selectGtDistribution(page);
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


