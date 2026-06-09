import { test } from '@fixtures/base.fixture';
import { executeComunesAddNegativeScenario } from '../_shared/comunes-add-negative';

const ignoredLabelsPattern =
  /^codigo$|^nombre$|^negocio$|^estado$|^agregar$|^cancelar$|^codigo es requerido$|^nombre es requerido$/i;

test.describe('@comunes @critical @E35-C-03.1', () => {
  test('@critical @comunes @E35-C-03.1 debe bloquear el alta de Líneas con errores específicos por campo', async ({ page }) => {
    await executeComunesAddNegativeScenario(page, {
      caseId: 'E35-C-03.1',
      menu: 'Líneas',
      route: 'comunes/lineas',
      modalPattern: /agregar l[ií]nea/i,
      ignoredLabelsPattern,
      selectorFields: [
        { labels: ['negocio'], tag: 'negocio' },
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
