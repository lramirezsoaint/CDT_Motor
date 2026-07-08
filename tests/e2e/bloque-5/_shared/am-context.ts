import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';

export const AM_MODULE_NAME = 'Asientos Manuales';
export type AmDistributionFlow = 'upload' | 'read' | 'mutation';

type AmDistributionConfig = {
  period: string;
  periodOptions: string[];
  distributionName: string;
};

export const AM_DISTRIBUTIONS: Record<AmDistributionFlow, AmDistributionConfig> = {
  upload: {
    period: '2026Julio',
    periodOptions: ['2026Julio', '202607', '2026 Julio', 'Julio 2026'],
    distributionName: '2026Julio_Pruebas',
  },
  read: {
    period: '2025Junio',
    periodOptions: ['2025Junio', '202506', '2025 Junio', 'Junio 2025'],
    distributionName: '202506_JoselinCarga_P2',
  },
  mutation: {
    period: '2026Julio',
    periodOptions: ['2026Julio', '202607', '2026 Julio', 'Julio 2026'],
    distributionName: '2026Julio_Pruebas',
  },
};

export const AM_DISTRIBUTION_NAME = AM_DISTRIBUTIONS.mutation.distributionName;
export const AM_DISTRIBUTION_PERIOD = AM_DISTRIBUTIONS.mutation.period;

export async function ensureAmContext(page: Page, flow: AmDistributionFlow = 'read'): Promise<void> {
  const distribution = AM_DISTRIBUTIONS[flow];
  const loginPage = new LoginPage(page);
  try {
    await page.goto('/');
  } catch (error) {
    if (!/\/(?:login|distribuciones)/i.test(page.url())) {
      throw error;
    }
  }

  const sessionSurface = page
    .getByRole('button', { name: /iniciar sesi[oó]n/i })
    .or(page.getByRole('heading', { name: /distribuciones/i }))
    .or(page.locator('aside, nav'))
    .first();
  await expect(
    sessionSurface,
    'Debe mostrarse la aplicacion autenticada o la pantalla de login.',
  ).toBeVisible({ timeout: 40_000 });

  const sessionExpired = /\/login/i.test(page.url()) || await loginPage.isLoginPage();
  if (sessionExpired) {
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
  await ensureAmDistribution(page, distribution);
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

async function ensureAmDistribution(page: Page, distribution: AmDistributionConfig): Promise<void> {
  if (await isTargetDistributionSelected(page, distribution)) {
    return;
  }

  const visibleTarget = targetDistributionLocator(page, distribution);
  if (await visibleTarget.isVisible({ timeout: 3_000 }).catch(() => false)) {
    await clickTargetDistribution(visibleTarget);
    await acceptInformationModal(page);
    return;
  }

  await selectAmPeriod(page, distribution);

  const targetDistribution = targetDistributionLocator(page, distribution);
  await expect(
    targetDistribution,
    `Debe aparecer la distribucion ${distribution.distributionName} para poder seleccionarla.`,
  ).toBeVisible({ timeout: 30_000 });

  await clickTargetDistribution(targetDistribution);
  await acceptInformationModal(page);

  await expect
    .poll(async () => isTargetDistributionSelected(page, distribution), {
      timeout: 20_000,
      message: `La distribucion seleccionada debe ser ${distribution.distributionName}.`,
    })
    .toBe(true);
}

async function selectAmPeriod(page: Page, distribution: AmDistributionConfig): Promise<void> {
  const periodSelector = page
    .getByTestId('filter-periodo-select')
    .or(page.getByRole('combobox', { name: /periodo/i }))
    .or(page.locator('[data-testid*="periodo" i], button:has-text("2025"), button:has-text("Periodo")'))
    .first();

  await expect(periodSelector, 'Debe existir el selector de periodo.').toBeVisible({ timeout: 20_000 });
  const currentPeriod = normalizeText(await periodSelector.innerText().catch(() => ''));
  if (distribution.periodOptions.some((period) => currentPeriod.includes(period))) {
    return;
  }

  await periodSelector.click();

  for (const period of distribution.periodOptions) {
    const periodOption = page
      .getByRole('option', { name: new RegExp(`^${escapeRegex(period)}$`) })
      .or(page.getByRole('menuitem', { name: new RegExp(`^${escapeRegex(period)}$`) }))
      .or(page.locator('[data-radix-popper-content-wrapper], [role="listbox"], [role="menu"]').getByText(period, { exact: true }))
      .first();

    if (await periodOption.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await periodOption.click();
      await waitForAmLoading(page);
      return;
    }
  }

  await expect(
    page.locator('[data-radix-popper-content-wrapper], [role="listbox"], [role="menu"]').first(),
    `Debe existir alguno de los periodos ${distribution.periodOptions.join(', ')}.`,
  ).toContainText(new RegExp(distribution.periodOptions.map(escapeRegex).join('|')), { timeout: 1_000 });
  await waitForAmLoading(page);
}

function targetDistributionLocator(page: Page, distribution: AmDistributionConfig) {
  return page.getByText(distribution.distributionName, { exact: true }).first();
}

async function clickTargetDistribution(targetDistribution: ReturnType<typeof targetDistributionLocator>) {
  await targetDistribution.click({ timeout: 5_000 }).catch(async () => {
    await targetDistribution.click({ force: true });
  });
}

async function isTargetDistributionSelected(page: Page, distribution: AmDistributionConfig): Promise<boolean> {
  const selectedDistribution = page
    .locator('table tbody tr[data-state="selected"], [role="row"][aria-selected="true"]')
    .filter({ hasText: distribution.distributionName })
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
        `[title*="${distribution.distributionName}" i]`,
      ].join(', '),
    )
    .filter({ hasText: distribution.distributionName })
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

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
