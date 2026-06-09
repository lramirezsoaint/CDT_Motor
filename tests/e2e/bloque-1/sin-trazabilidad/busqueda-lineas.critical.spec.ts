import { test } from '@fixtures/base.fixture';
import testData from '@data/testData.json';

test.describe('@comunes @critical @E35-C-01.1', () => {
  test('@critical @comunes @E35-C-01.1 debe buscar registros en Distribuciones', async ({ comunesPage }) => {
    await test.step('Abrir m\u00f3dulo L\u00edneas', async () => {
      await comunesPage.openLineas();
    });

    await test.step('Buscar texto objetivo', async () => {
      await comunesPage.buscar(testData.comunes.searchTerm);
    });

    await test.step('Validar resultados', async () => {
      await comunesPage.expectResultsContain(testData.comunes.searchTerm);
    });
  });
});
