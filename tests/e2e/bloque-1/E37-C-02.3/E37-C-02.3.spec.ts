import { test } from '@fixtures/base.fixture';
import { executeNegativeInactivation } from '../_shared/comunes-status-action';

test.describe('@comunes @critical @E37-C-02.3', () => {
  test('@critical @comunes @E37-C-02.3 debe bloquear la inactivación de un Canal con dependencias activas', async ({ page }) => {
    await executeNegativeInactivation(page, {
      menu: 'Canales',
      route: 'comunes/canales',
      modalPattern: /canal/i,
      keyLabels: ['codigo', 'nombre'],
    });
  });
});
