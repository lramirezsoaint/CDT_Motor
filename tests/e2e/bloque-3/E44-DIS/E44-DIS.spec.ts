import { test } from '../_shared/bloque3.fixture';

test('@bloque3 @E44-DIS @distribucion visualiza distribucion seleccionada desde el listado principal', async ({
  distribucionPage,
}) => {
  let rowValues: Awaited<ReturnType<typeof distribucionPage.getRowValues>> | undefined;

  await test.step('Tomar una distribucion visible del listado', async () => {
    const row = await distribucionPage.requireFirstDistributionRow('visualizar distribucion GF desde listado');
    rowValues = await distribucionPage.getRowValues(row);
  });

  await test.step('Seleccionar la distribucion desde la tabla principal', async () => {
    const row = await distribucionPage.requireFirstDistributionRow('seleccionar distribucion GF desde listado');
    await distribucionPage.selectDistributionFromList(row);
  });

  await test.step('Confirmar seleccion y validar reflejo en pantalla', async () => {
    if (!rowValues) throw new Error('[DATA] No se capturaron datos de distribucion para validar E44-DIS.');
    await distribucionPage.confirmDistributionSelection(rowValues);
  });
});
