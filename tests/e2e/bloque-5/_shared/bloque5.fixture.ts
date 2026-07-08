import { test as base, expect } from '@fixtures/base.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';
import { ensureAmContext } from './am-context';

export const test = base.extend<{
  amContext: void;
  bloque5AsientosManualesPage: Bloque5AsientosManualesPage;
  distribucionPage: DistribucionPage;
}>({
  amContext: [
    async ({ page }, use) => {
      await ensureAmContext(page, 'read');
      await use();
    },
    { auto: false },
  ],
  bloque5AsientosManualesPage: async ({ page }, use) => {
    await use(new Bloque5AsientosManualesPage(page));
  },
  distribucionPage: async ({ page }, use) => {
    await use(new DistribucionPage(page));
  },
});

export { expect };
