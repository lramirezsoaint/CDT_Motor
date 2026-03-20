import { test } from '@fixtures/base.fixture';

test.describe('@distribucion @critical @E40-DIS-01', () => {
  test('@critical @distribucion @E40-DIS-01 debe mostrar acci\u00f3n Nueva Distribuci\u00f3n disponible', async ({
    distribucionPage,
  }) => {
    await test.step('Validar presencia de acci\u00f3n', async () => {
      await distribucionPage.expectNuevaDistribucionDisponible();
    });
  });
});
