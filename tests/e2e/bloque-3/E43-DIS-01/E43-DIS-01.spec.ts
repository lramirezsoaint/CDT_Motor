import { test, expect } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { ensureGfContext } from '../_shared/gf-context';

test('ELIMINAR-DISTRIBUCION-CREADA', async ({ page }) => {

 try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGFUsername,
        env.gestorGFPassword
      );
    } catch (error) { }

  await expect(page)
    .toHaveURL(/\/distribuciones/i);
  await ensureGfContext(page);

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
