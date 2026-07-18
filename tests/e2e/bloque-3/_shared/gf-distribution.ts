import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import {
 GF_DISTRIBUTION_NAME,
 GF_DISTRIBUTION_PERIOD,
 acceptInformationModal,
 ensureGfContext,
 waitForGfLoading,
} from './gf-context';

export type SelectGfDistributionOptions = {
 periodo?: string;
 distribucion?: string;
 tipo?: RegExp | string;
};

export async function selectGfDistribution(
 page: Page,
 options: SelectGfDistributionOptions = {}
): Promise<void> {
 await ensureGfContext(page);

 const periodo = options.periodo;
 const distribucion = options.distribucion;
 const tipo = options.tipo;

 if (!periodo && !distribucion && !tipo) {
 return;
 }

 await expect(page).toHaveURL(/\/distribuciones/i, { timeout: 60_000 });

 if (periodo && periodo !== GF_DISTRIBUTION_PERIOD) {
 await page.getByTestId('filter-periodo-select').click();
 await page.getByRole('option', { name: new RegExp(`^${periodo}$`) }).click();
 await waitForGfLoading(page);
 }

 if (distribucion && distribucion !== GF_DISTRIBUTION_NAME) {
 await expect(page.getByText(distribucion, { exact: true }), `Debe aparecer la distribucion ${distribucion}.`).toBeVisible({ timeout: 30_000 });
 await page.getByText(distribucion, { exact: true }).click();
 await acceptInformationModal(page);
 await waitForGfLoading(page);
 return;
 }

 if (tipo) {
 const tipoPattern = typeof tipo === 'string' ? new RegExp(tipo, 'i') : tipo;
 const row = page.locator('table tbody tr').filter({ hasText: tipoPattern }).last();
 await expect(row, `Debe existir una distribucion de tipo ${tipoPattern}.`).toBeVisible({ timeout: 30_000 });
 await row.locator('td').first().click();
 await acceptInformationModal(page);
 await waitForGfLoading(page);
 }
}

export async function selectGfDistributionAdd(
 page: Page,
 options: SelectGfDistributionOptions = {}
): Promise<void> {
 await selectGfDistribution(page, options);
}
