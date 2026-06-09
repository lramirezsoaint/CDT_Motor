import { test as base, expect } from '@playwright/test';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { Sidebar } from '@components/Sidebar';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';

export const test = base.extend<{
  bloque3GastosFinancierosPage: Bloque3GastosFinancierosPage;
  procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
  sidebar: Sidebar;
  loginPage: LoginPage;
}>({
  bloque3GastosFinancierosPage: async ({ page }, use) => {
    await use(new Bloque3GastosFinancierosPage(page));
  },
  procesosGastosFinancierosPage: async ({ page }, use) => {
    await use(new ProcesosGastosFinancierosPage(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new Sidebar(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };