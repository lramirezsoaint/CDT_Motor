import { test as base, expect } from '@fixtures/base.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';

export const test = base.extend<{
  bloque5AsientosManualesPage: Bloque5AsientosManualesPage;
}>({
  bloque5AsientosManualesPage: async ({ page }, use) => {
    await use(new Bloque5AsientosManualesPage(page));
  },
});

export { expect };
