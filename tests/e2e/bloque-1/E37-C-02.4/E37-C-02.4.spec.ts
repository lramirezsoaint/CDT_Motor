import { test } from '@fixtures/base.fixture';
import { executeNegativeInactivation } from '../_shared/comunes-status-action';

test.describe('@comunes @critical @E37-C-02.4', () => {
  test('@critical @comunes @E37-C-02.4 debe bloquear la inactivación de un Subcanal con dependencias activas', async ({
    page,
  }) => {
    await executeNegativeInactivation(page, {
      menu: 'Subcanales',
      route: 'comunes/subcanales',
      modalPattern: /subcanal/i,
      keyLabels: ['codigo subcanal', 'nombre subcanal'],
    });
  });
});
