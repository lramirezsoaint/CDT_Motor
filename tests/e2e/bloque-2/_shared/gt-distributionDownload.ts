import { expect, Page } from '@playwright/test';

type SelectGtDistributionOptions = {
  periodo?: string;
  distribucion?: string;
};

export async function selectGtDistributionDownload(
  page: Page,
  options: SelectGtDistributionOptions = {}
): Promise<void> {

  const distribucion =
    options.distribucion ?? 'PRUEBA CARGA';

  await expect(page).toHaveURL(/\/distribuciones/i, {
    timeout: 60_000,
  });

  await page.getByTestId('filter-periodo-select').click();

  await page.getByRole('option', {
    name: /^202506$/
  }).click();

  await expect(
    page.getByText(distribucion, { exact: true }),
    `Debe aparecer la distribución ${distribucion}.`
  ).toBeVisible({
    timeout: 30_000,
  });

  await page
    .getByText(distribucion, { exact: true })
    .click();

  const infoModal = page
    .getByRole('dialog')
    .filter({
      hasText: /Información/i,
    })
    .first();
  await infoModal
    .getByRole('button', {
      name: /^aceptar$/i,
    })
    .click();
    await page.waitForTimeout(1000);

}