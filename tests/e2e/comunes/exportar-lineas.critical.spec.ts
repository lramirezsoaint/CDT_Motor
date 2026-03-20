import { test, expect } from '@fixtures/base.fixture';
import testData from '@data/testData.json';

test.describe('@comunes @critical @E11-C-01.1', () => {
  test('@critical @comunes @E11-C-01.1 debe mostrar cabeceras esperadas en Distribuciones', async ({
    page,
    comunesPage,
  }) => {
    await test.step('Abrir m\u00f3dulo L\u00edneas', async () => {
      await comunesPage.openLineas();
    });

    await test.step('Validar cabeceras de tabla', async () => {
      const headerRow = (await page.getByRole('columnheader').allTextContents()).map((h) => h.trim());
      expect(headerRow).toEqual(testData.comunes.expectedHeaders);
    });
  });
});
