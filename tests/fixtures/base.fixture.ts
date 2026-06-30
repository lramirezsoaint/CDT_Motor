import { test as base, expect } from '@playwright/test';
import { ComunesPage } from '@pages/comunes/ComunesPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { Sidebar } from '@components/Sidebar';
import { buildDiagnosticErrorFromTestInfo } from '../e2e/_globalshared/diagnostics/diagnostic-error';

export const test = base.extend<{
  _diagnostic: void;
  comunesPage: ComunesPage;
  distribucionPage: DistribucionPage;
  procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
  sidebar: Sidebar;
}>({
  _diagnostic: [
    async ({ page }, use, testInfo) => {
      try {
        await use();
      } catch (error) {
        throw buildDiagnosticErrorFromTestInfo({ page, testInfo, originalError: error });
      }
    },
    { auto: true },
  ],
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

export { expect };
