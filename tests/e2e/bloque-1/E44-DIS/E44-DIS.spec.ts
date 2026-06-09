import { test } from '@fixtures/base.fixture';

test.describe('@distribucion @critical @E44-DIS', () => {
  test('@critical @distribucion @E44-DIS debe seleccionar una distribucion desde el listado principal', async ({
    distribucionPage,
  }) => {
    let rowValues: Awaited<ReturnType<typeof distribucionPage.getRowValues>> | undefined;

    await test.step('Acceder a Distribuciones y tomar una distribucion visible', async () => {
      const row = await distribucionPage.requireFirstDistributionRow('seleccionar desde listado');
      rowValues = await distribucionPage.getRowValues(row);
    });

    await test.step('Seleccionar el nombre de la distribucion desde la tabla', async () => {
      const row = await distribucionPage.requireFirstDistributionRow('abrir confirmacion desde listado');
      await distribucionPage.selectDistributionFromList(row);
    });

    await test.step('Confirmar seleccion y validar que queda reflejada en pantalla', async () => {
      if (!rowValues) throw new Error('[DATA] No se capturaron datos de distribucion para validar la seleccion.');
      await distribucionPage.confirmDistributionSelection(rowValues);
    });
  });
});
