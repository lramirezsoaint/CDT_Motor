import { test } from '@fixtures/base.fixture';
import { executePositiveInactivation } from '../_shared/comunes-status-action';

test.describe('@comunes @critical @E37-C-01.4', () => {
  test('@critical @comunes @E37-C-01.4 debe inactivar un Subcanal desde edición y reflejar el cambio en tabla', async ({
    page,
  }) => {
    await executePositiveInactivation(page, {
      menu: 'Subcanales',
      route: 'comunes/subcanales',
      modalPattern: /subcanal/i,
      keyLabels: ['codigo subcanal', 'nombre subcanal'],
    });
  });
});
