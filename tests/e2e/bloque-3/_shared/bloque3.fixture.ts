import { test as base, expect } from '@playwright/test';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';

export const test = base.extend<{
  bloque3GastosFinancierosPage: Bloque3GastosFinancierosPage;
  procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
  distribucionPage: DistribucionPage;
}>({
  bloque3GastosFinancierosPage: async ({ page }, use) => {
    await use(new Bloque3GastosFinancierosPage(page));
  },
  procesosGastosFinancierosPage: async ({ page }, use) => {
    await use(new ProcesosGastosFinancierosPage(page));
  },
  distribucionPage: async ({ page }, use) => {
    await use(new DistribucionPage(page));
  },
});

export { expect };
