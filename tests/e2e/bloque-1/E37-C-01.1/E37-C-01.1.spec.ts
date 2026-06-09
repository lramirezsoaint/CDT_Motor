import { test } from '@fixtures/base.fixture';
import { executePositiveInactivation } from '../_shared/comunes-status-action';

test.describe('@comunes @critical @E37-C-01.1', () => {
  test('@critical @comunes @E37-C-01.1 debe inactivar una Línea desde edición y reflejar el cambio en tabla', async ({ page }) => {
    await executePositiveInactivation(page, {
      menu: 'Líneas',
      route: 'comunes/lineas',
      modalPattern: /linea/i,
      keyLabels: ['codigo', 'nombre'],
    });
  });
});
