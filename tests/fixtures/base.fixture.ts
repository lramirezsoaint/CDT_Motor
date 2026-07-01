import { test as base, expect } from '@playwright/test';
import { ComunesPage } from '@pages/comunes/ComunesPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { Sidebar } from '@components/Sidebar';
import { buildDiagnosticErrorFromTestInfo } from '../e2e/_globalshared/diagnostics/diagnostic-error';

export const test = base.extend<{
  comunesPage: ComunesPage;
  distribucionPage: DistribucionPage;
  procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
  sidebar: Sidebar;
}>({
  page: async ({ page }, use, testInfo) => {
    try {
      await use(page);
    } catch (error) {
      const currentUrl = page.url?.();
      throw buildDiagnosticErrorFromTestInfo({ page, testInfo, originalError: error, currentUrl });
    }
  },
  comunesPage: async ({ page }, use) => {
    await use(new ComunesPage(page));
  },
  distribucionPage: async ({ page }, use) => {
    await use(new DistribucionPage(page));
  },
  procesosGastosFinancierosPage: async ({ page }, use) => {
    await use(new ProcesosGastosFinancierosPage(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new Sidebar(page));
  },
});

test.beforeEach(async ({ page }) => {
  await page.goto('.', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === testInfo.expectedStatus || testInfo.errors.length === 0) {
    return;
  }

  const originalError = testInfo.errors[0];
  if (String(originalError.message ?? '').includes('DIAGNÓSTICO')) {
    return;
  }

  const currentUrl = page.url?.();
  throw buildDiagnosticErrorFromTestInfo({ page, testInfo, originalError, currentUrl });
});

export { expect };
