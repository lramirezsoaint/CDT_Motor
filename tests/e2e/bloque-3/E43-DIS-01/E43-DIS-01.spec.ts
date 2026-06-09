import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

test('ELIMINAR-DISTRIBUCION-CREADA', async ({ page }) => {

 try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorUsername,
        env.gestorPassword
      );
    } catch (error) { }

  await expect(page)
    .toHaveURL(/\/distribuciones/i);

  // Buscar una distribución en estado Creada
  const row = page
    .getByRole('row')
    .filter({
      hasText: /creada/i
    })
    .first();

  await expect(row).toBeVisible({
    timeout: 30000
  });

  const rowText = await row.innerText();

  // Presionar icono basurero
  await row.getByRole('button')
    .last()
    .click();

  const modal = page.getByRole('dialog');

  // Confirmar eliminación
  await page.locator('button, [role="button"]')
    .filter({ hasText: /^Eliminar$/i })
    .click();
  await page.locator('button, [role="button"]')
    .filter({ hasText: /^Confirmar$/i })
    .click();
  // Mensaje de éxito
  await expect(
    page.getByText(
      /¡registro eliminado con éxito!/i
    )
  ).toBeVisible({
    timeout: 30000
  });

});