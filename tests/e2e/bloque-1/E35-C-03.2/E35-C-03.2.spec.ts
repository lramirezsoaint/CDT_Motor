import { test } from '@fixtures/base.fixture';
import { executeComunesAddNegativeScenario } from '../_shared/comunes-add-negative';

const ignoredLabelsPattern =
 /^codigo$|^nombre$|^codigo linea$|^nombre linea$|^metodo de valoracion$|^m[eé]todo de valoraci[oó]n$|^estado$|^agregar$|^cancelar$/i;

test.describe('@bloque1 @E35-C-03.2 ', () => {
 test('@bloque1 @E35-C-03.2 @registrar debe bloquear el alta de Grupo Producto con errores específicos por campo', async ({ page }) => {
 await executeComunesAddNegativeScenario(page, {
 caseId: 'E35-C-03.2',
 menu: 'Grupo Producto',
 route: 'comunes/grupo-producto',
 modalPattern: /agregar grupo producto|agregar producto/i,
 ignoredLabelsPattern,
 selectorFields: [
 { labels: ['codigo linea'], tag: 'codigo-linea' },
 { labels: ['nombre linea'], tag: 'nombre-linea' },
 { labels: ['metodo de valoracion', 'valoracion'], tag: 'metodo-valoracion' },
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
