import { test } from '@fixtures/base.fixture';
import { executeNegativeInactivation } from '../_shared/comunes-status-action';

test.describe('@comunes @critical @E37-C-02.1', () => {
  test('@critical @comunes @E37-C-02.1 debe bloquear la inactivación de una Línea con dependencias activas', async ({ page }) => {
    await executeNegativeInactivation(page, {
      menu: 'Líneas',
      route: 'comunes/lineas',
      modalPattern: /linea/i,
      keyLabels: ['codigo', 'nombre'],
    });
  });
});
