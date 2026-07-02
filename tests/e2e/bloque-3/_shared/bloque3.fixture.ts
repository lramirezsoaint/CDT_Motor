import { test as base, expect } from '@fixtures/base.fixture';
import { Bloque3GastosFinancierosPage } from '@pages/bloque3/Bloque3GastosFinancierosPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';
import { ensureGfContext } from './gf-context';

export const test = base.extend<{
 gfContext: void;
 bloque3GastosFinancierosPage: Bloque3GastosFinancierosPage;
 procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
 distribucionPage: DistribucionPage;
}>({
 gfContext: [
 async ({ page }, use) => {
 await ensureGfContext(page);
 await use();
 },
 { auto: true },
 ],
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
