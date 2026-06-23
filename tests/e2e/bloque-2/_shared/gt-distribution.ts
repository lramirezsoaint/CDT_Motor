import { expect, Page } from '@playwright/test';

export type SelectGtDistributionOptions = {
  periodo?: string;
  distribucion?: string;
  tipo?: RegExp | string;
};

export async function selectGtDistribution(
  page: Page,
  options: SelectGtDistributionOptions = {}
): Promise<void> {
  const useDefaultDistribution = !options.periodo && !options.distribucion && !options.tipo;
  const periodo = options.periodo ?? (useDefaultDistribution ? '202506' : undefined);
  const distribucion = options.distribucion ?? (useDefaultDistribution ? '2025_06_JoselinCarga' : undefined);

  await expect(page).toHaveURL(/\/distribuciones/i, {
    timeout: 60_000,
  });

  if (periodo) {
    await page.getByTestId('filter-periodo-select').click();
    await page.getByRole('option', { name: new RegExp(`^${periodo}$`) }).click();
  }

  if (distribucion) {
    await expect(
      page.getByText(distribucion, { exact: true }),
      `Debe aparecer la distribución ${distribucion}.`
    ).toBeVisible({
      timeout: 30_000,
    });

    await page
      .getByText(distribucion, { exact: true })
      .click();
  } else if (options.tipo) {
    const tipoPattern = typeof options.tipo === 'string' ? new RegExp(options.tipo, 'i') : options.tipo;
    const row = page.locator('table tbody tr').filter({ hasText: tipoPattern }).first();

    await expect(row, `Debe existir una distribución de tipo ${tipoPattern}.`).toBeVisible({ timeout: 30_000 });
    await row.locator('td').first().click();
  } else {
    throw new Error('[DATA] Debe indicarse distribucion o tipo para seleccionar el contexto GT.');
  }

  const infoModal = page
    .getByRole('dialog')
    .filter({
      hasText: /Información|Informacion/i,
    })
    .first();

  if (await infoModal.isVisible({ timeout: 5_000 }).catch(() => false)) {
    await infoModal
      .getByRole('button', {
        name: /^aceptar$/i,
      })
      .click();
    await expect(infoModal).toBeHidden({ timeout: 10_000 });
  }
}
