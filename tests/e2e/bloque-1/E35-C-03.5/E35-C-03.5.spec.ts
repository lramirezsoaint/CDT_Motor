import { test } from '@fixtures/base.fixture';
import { executeComunesAddNegativeScenario } from '../_shared/comunes-add-negative';

const ignoredLabelsPattern =
  /^atribuible$|^tipo de gasto$|^ga\/gm$|^codigo concepto$|^concepto n1$|^concepto n2$|^digito de cuenta$|^d[ií]gito de cuenta$|^cuenta$|^ramo$|^producto$|^subcanal$|^uoa antes$|^uoa despu[eé]s$|^porcentaje %$|^porcentaje$|^estado$|^agregar$|^cancelar$/i;

test.describe('@comunes @critical @E35-C-03.5', () => {
  test('@critical @comunes @E35-C-03.5 debe bloquear el alta de Configuración de Parches con errores específicos por campo', async ({ page }) => {
    test.setTimeout(360_000);

    await executeComunesAddNegativeScenario(page, {
      caseId: 'E35-C-03.5',
      menu: 'Configuración de Parches',
      route: 'comunes/configuracion-parches',
      modalPattern: /agregar parche/i,
      ignoredLabelsPattern,
      selectorFields: [
        { labels: ['atribuible'], tag: 'atribuible' },
        { labels: ['tipo de gasto'], tag: 'tipo-gasto' },
        { labels: ['ga/gm'], tag: 'ga-gm' },
      ],
      requiredFields: [
        { labels: ['uoa antes'], tag: 'uoa-antes' },
        { labels: ['uoa después', 'uoa despues'], tag: 'uoa-despues' },
        { labels: ['porcentaje %', 'porcentaje'], tag: 'porcentaje' },
      ],
      invalidTextFields: [
        { labels: ['codigo concepto'], tag: 'codigo-concepto', invalidValue: 'abc' },
        { labels: ['digito de cuenta', 'dígito de cuenta'], tag: 'digito-cuenta', invalidValue: '1' },
        { labels: ['cuenta'], tag: 'cuenta', invalidValue: 'abc' },
        { labels: ['porcentaje %', 'porcentaje'], tag: 'porcentaje', invalidValue: 'abc' },
      ],
    });
  });
});
