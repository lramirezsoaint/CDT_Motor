import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';

export const AM_MODULE_NAME = 'Asientos Manuales';
export const AM_DISTRIBUTION_NAME = '202506_Real NIIF_Flujo del mes';
export const AM_DISTRIBUTION_PERIOD = '202506';

export async function ensureAmContext(page: Page): Promise<void> {
  if (!/\/distribuciones/i.test(page.url())) {
    const loginPage = new LoginPage(page);
    await loginPage.login(env.gestorAMUsername, env.gestorAMPassword);
  }

  if (!/\/distribuciones/i.test(page.url())) {
    await page.goto('/distribuciones/', { waitUntil: 'commit' });
  }

  await expect(page, 'Debe estar autenticado en Distribuciones para preparar contexto AM.').toHaveURL(/\/distribuciones/i, {
    timeout: 40_000,
  });
  await waitForAmLoading(page);

  await ensureAmModule(page);
  await acceptInformationModal(page);
  await ensureAmDistribution(page);
  await acceptInformationModal(page);
  await waitForAmLoading(page);
}

async function ensureAmModule(page: Page): Promise<void> {
  const moduleTrigger = getModuleTrigger(page);
  await expect(moduleTrigger, 'Debe existir el selector de modulo.').toBeVisible({ timeout: 20_000 });

  const currentModule = normalizeText(await moduleTrigger.innerText().catch(() => ''));
  if (/Asientos Manuales/i.test(currentModule)) {
    return;
  }

  await expect(moduleTrigger, 'El selector de modulo debe estar habilitado.').toBeEnabled({ timeout: 20_000 });
  await moduleTrigger.click();

  const option = page
    .getByRole('option', { name: /^Asientos Manuales$/i })
    .or(page.getByRole('menuitem', { name: /^Asientos Manuales$/i }))
    .or(page.locator('[data-radix-popper-content-wrapper], [role="listbox"], [role="menu"]').getByText(/^Asientos Manuales$/i))
    .first();

  await expect(option, 'Debe existir la opcion Asientos Manuales.').toBeVisible({ timeout: 15_000 });
  await option.click();
  await expect(moduleTrigger, 'Debe quedar seleccionado Asientos Manuales.').toContainText(/Asientos Manuales/i, {
    timeout: 20_000,
  });
  await waitForAmLoading(page);
}

async function ensureAmDistribution(page: Page): Promise<void> {
  if (await isTargetDistributionSelected(page)) {
    return;
  }

  await selectAmPeriod(page);

  const targetDistribution = page.getByText(AM_DISTRIBUTION_NAME, { exact: true }).first();
  await expect(
    targetDistribution,
    `Debe aparecer la distribucion ${AM_DISTRIBUTION_NAME} para poder seleccionarla.`,
  ).toBeVisible({ timeout: 30_000 });

  await targetDistribution.click();
  await acceptInformationModal(page);

  await expect
    .poll(async () => isTargetDistributionSelected(page), {
      timeout: 20_000,
      message: `La distribucion seleccionada debe ser ${AM_DISTRIBUTION_NAME}.`,
    })
    .toBe(true);
}

async function selectAmPeriod(page: Page): Promise<void> {
  const periodSelector = page
    .getByTestId('filter-periodo-select')
    .or(page.getByRole('combobox', { name: /periodo/i }))
    .or(page.locator('[data-testid*="periodo" i], button:has-text("2025"), button:has-text("Periodo")'))
    .first();

  await expect(periodSelector, 'Debe existir el selector de periodo.').toBeVisible({ timeout: 20_000 });
  const currentPeriod = normalizeText(await periodSelector.innerText().catch(() => ''));
  if (currentPeriod.includes(AM_DISTRIBUTION_PERIOD)) {
    return;
  }

  await periodSelector.click();
  const periodOption = page
    .getByRole('option', { name: new RegExp(`^${AM_DISTRIBUTION_PERIOD}$`) })
    .or(page.getByRole('menuitem', { name: new RegExp(`^${AM_DISTRIBUTION_PERIOD}$`) }))
    .or(page.locator('[data-radix-popper-content-wrapper], [role="listbox"], [role="menu"]').getByText(AM_DISTRIBUTION_PERIOD, { exact: true }))
    .first();

  await expect(periodOption, `Debe existir el periodo ${AM_DISTRIBUTION_PERIOD}.`).toBeVisible({ timeout: 15_000 });
  await periodOption.click();
  await waitForAmLoading(page);
}

async function isTargetDistributionSelected(page: Page): Promise<boolean> {
  const selectedDistribution = page
    .locator('table tbody tr[data-state="selected"], [role="row"][aria-selected="true"]')
    .filter({ hasText: AM_DISTRIBUTION_NAME })
    .first();

  if (await selectedDistribution.isVisible({ timeout: 1_000 }).catch(() => false)) {
    return true;
  }

  const selectedIndicator = page
    .locator(
      [
        '[data-testid*="selected"][data-testid*="distribution" i]',
        '[data-testid*="distribution"][data-testid*="selected" i]',
        '[aria-label*="distribuci" i][aria-label*="seleccion" i]',
        `[title*="${AM_DISTRIBUTION_NAME}" i]`,
      ].join(', '),
    )
    .filter({ hasText: AM_DISTRIBUTION_NAME })
    .first();

  return selectedIndicator.isVisible({ timeout: 1_000 }).catch(() => false);
}

export async function acceptInformationModal(page: Page): Promise<void> {
  const informationModal = page
    .getByRole('dialog')
    .filter({ hasText: /Informaci[oó]n|distribuci[oó]n seleccionada/i })
    .first();

  if (!(await informationModal.isVisible({ timeout: 2_000 }).catch(() => false))) {
    return;
  }

  const acceptButton = informationModal.getByRole('button', { name: /^Aceptar$/i }).first();
  await expect(acceptButton, 'El modal Informacion debe permitir Aceptar.').toBeVisible({ timeout: 10_000 });
  await acceptButton.click();
  await expect(informationModal, 'El modal Informacion debe cerrarse al aceptar.').toBeHidden({ timeout: 15_000 }).catch(() => undefined);
}

export async function waitForAmLoading(page: Page): Promise<void> {
  await page.getByText(/Verificando permisos/i).waitFor({ state: 'hidden', timeout: 30_000 }).catch(() => undefined);
  await page.getByText(/Cargando(?: distribuciones)?/i).waitFor({ state: 'hidden', timeout: 30_000 }).catch(() => undefined);
  await page.getByText(/Procesando|Guardando|Actualizando/i).waitFor({ state: 'hidden', timeout: 30_000 }).catch(() => undefined);
}

function getModuleTrigger(page: Page) {
  return page
    .locator('[data-testid="header-expense-type-trigger"]')
    .or(page.getByRole('button', { name: /Asientos Manuales|Gestor de Asientos Manuales/i }))
    .or(page.locator('[aria-label*="asientos" i], [data-testid*="expense-type" i]'))
    .first();
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}
