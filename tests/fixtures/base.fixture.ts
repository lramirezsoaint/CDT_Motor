import { test as base, expect } from '@playwright/test';
import { ComunesPage } from '@pages/comunes/ComunesPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';
import { LoginPage } from '@pages/auth/LoginPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { Sidebar } from '@components/Sidebar';

export const test = base.extend<{
  comunesPage: ComunesPage;
  distribucionPage: DistribucionPage;
  procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
  loginPage: LoginPage;
  sidebar: Sidebar;
}>({
  comunesPage: async ({ page }, use) => {
    await use(new ComunesPage(page));
  },
  distribucionPage: async ({ page }, use) => {
    await use(new DistribucionPage(page));
  },
  procesosGastosFinancierosPage: async ({ page }, use) => {
    await use(new ProcesosGastosFinancierosPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new Sidebar(page));
  },
});

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

export { expect };
