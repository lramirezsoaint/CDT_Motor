import { test } from '@fixtures/base.fixture';
import { executeComunesAddNegativeScenario } from '../_shared/comunes-add-negative';

const ignoredLabelsPattern = /^codigo$|^nombre$|^estado$|^agregar$|^cancelar$/i;

test.describe('@comunes @critical @E35-C-03.3', () => {
  test('@critical @comunes @E35-C-03.3 debe bloquear el alta de Canales con errores específicos por campo', async ({ page }) => {
    await executeComunesAddNegativeScenario(page, {
      caseId: 'E35-C-03.3',
      menu: 'Canales',
      route: 'comunes/canales',
      modalPattern: /agregar canal/i,
      ignoredLabelsPattern,
      selectorFields: [{ labels: ['estado'], tag: 'estado' }],
      requiredFields: [
        { labels: ['codigo'], tag: 'codigo' },
        { labels: ['nombre'], tag: 'nombre' },
      ],
      invalidTextFields: [
        { labels: ['codigo'], tag: 'codigo', invalidValue: '$#@!*?+' },
        { labels: ['nombre'], tag: 'nombre', invalidValue: '$#@!*?+' },
      ],
    });
  });
});
