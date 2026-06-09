import { test } from '@fixtures/base.fixture';
import { executeComunesAddNegativeScenario } from '../_shared/comunes-add-negative';

const ignoredLabelsPattern =
  /^codigo$|^nombre$|^codigo canal$|^nombre canal$|^estado$|^agregar$|^cancelar$/i;

test.describe('@comunes @critical @E35-C-03.4', () => {
  test('@critical @comunes @E35-C-03.4 debe bloquear el alta de Subcanales con errores específicos por campo', async ({ page }) => {
    await executeComunesAddNegativeScenario(page, {
      caseId: 'E35-C-03.4',
      menu: 'Subcanales',
      route: 'comunes/subcanales',
      modalPattern: /agregar subcanal/i,
      ignoredLabelsPattern,
      selectorFields: [
        { labels: ['codigo canal'], tag: 'codigo-canal' },
        { labels: ['nombre canal'], tag: 'nombre-canal' },
        { labels: ['estado'], tag: 'estado' },
      ],
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
