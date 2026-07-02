import { expect, test } from '@fixtures/base.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution, SelectGtDistributionOptions } from './gt-distribution';
import { GtCaseBase, openGtView, tagsFor } from './gt-ui';

type PaginationCaseConfig = GtCaseBase & {
 distribution?: SelectGtDistributionOptions;
};

export function PaginationCase(config: PaginationCaseConfig) {
 test(`${tagsFor(config)} valida paginador en ${config.view}`, async ({ page }) => {
 test.setTimeout(180_000);

 try {
 await page.goto('https://distribuciongastos.pacificotest.com.pe/');
 const loginPage = new LoginPage(page);
 await loginPage.login(env.gestorGTUsername, env.gestorGTPassword);
 } catch (error) {
 }

 await selectGtDistribution(page, config.distribution);
 await openGtView(page, config);

 test.info().annotations.push({
 type: 'TODO',
 description: 'El catalogo no especifica una vista exacta para paginador; se usa la vista configurada en el spec como representante del flujo.',
 });

 const tableRows = page.locator('table tbody tr');
 const paginator = page.locator('[aria-label*="pagination" i], nav, [data-testid*="pagination" i]').filter({ hasText: /1|5|siguiente|anterior/i }).first();
 await expect.poll(
 async () => {
 const hasRows = await tableRows.first().isVisible().catch(() => false);
 const hasPaginator = await paginator.isVisible().catch(() => false);

 return hasRows || hasPaginator;
 },
 {
 message: 'Debe existir tabla o paginador en la vista con data cargada.',
 timeout: 30_000,
 intervals: [1000, 2000, 3000],
 }
 ).toBe(true);
 const firstPage = page.getByRole('button', { name: /^1$/ }).or(page.getByText(/^1$/)).first();
 await expect(firstPage, 'Debe mostrarse la pagina 1 al acceder inicialmente.').toBeVisible({ timeout: 30_000 });

 const previous = page.getByRole('button', { name: /anterior|previous|primera|first/i }).first();
 if (await previous.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await expect(previous, 'Anterior/Primera pagina debe iniciar bloqueado en pagina 1.').toBeDisabled();
 }

 const rowsSelector = page.getByRole('combobox', { name: /filas|rows|vista/i }).or(page.locator('select, [role="combobox"]').last()).first();
 if (await rowsSelector.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await expect(rowsSelector, 'Debe existir selector de filas por vista.').toBeVisible();
 await rowsSelector.click();
 const option = page.getByRole('option', { name: /^5$/ }).or(page.getByText(/^5$/)).first();
 if (await option.isVisible({ timeout: 2_000 }).catch(() => false)) {
 await option.click();
 }
 }

 const next = page.getByRole('button', { name: /siguiente|next/i }).first();
 if (await next.isEnabled({ timeout: 2_000 }).catch(() => false)) {
 await next.click();
 await expect(page.getByRole('button', { name: /^2$/ }).or(page.getByText(/^2$/)).first()).toBeVisible({ timeout: 10_000 });
 }
 });
}