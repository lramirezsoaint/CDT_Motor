import { test } from '@fixtures/base.fixture';
import { executePositiveInactivation } from '../_shared/comunes-status-action';

test.describe('@comunes @critical @E37-C-01.2', () => {
  test('@critical @comunes @E37-C-01.2 debe inactivar un Grupo Producto desde edición y reflejar el cambio en tabla', async ({
    page,
  }) => {
    await executePositiveInactivation(page, {
      menu: 'Grupo Producto',
      route: 'comunes/grupo-producto',
      modalPattern: /producto/i,
      keyLabels: ['codigo', 'nombre'],
    });
  });
});
