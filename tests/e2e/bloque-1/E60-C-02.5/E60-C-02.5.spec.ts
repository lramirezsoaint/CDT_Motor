import { expect, test } from '@fixtures/base.fixture';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  collectColumnOptionStates,
  missingColumnLabels,
  openColumnsMenu,
  tableHeaderTexts,
} from '../_shared/comunes-columns';

test.describe('@comunes @critical @E60-C-02.5', () => {
  test('@critical @comunes @E60-C-02.5 debe mostrar automaticamente las columnas por defecto en Unidades de Cuenta - BBA/VFA', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    let baselineHeaders: string[] = [];
    let defaultColumnLabels: string[] = [];

    await test.step('QA: ingresar a Distribucion y abrir Comunes > Unidades de Cuenta - BBA/VFA', async () => {
      await goToComunesView(page, 'Unidades de Cuenta - BBA/VFA', 'comunes/unidades-cuenta-bba-vfa').catch(
        async () => {
          await expect(page).toHaveURL(/comunes\/unidades-cuenta-bba-vfa/i, { timeout: 20_000 });
          await expect(
            page.getByRole('heading', { name: /unidades de cuenta.*bba.?vfa/i }),
            '[BUG] La vista Unidades de Cuenta - BBA/VFA no muestra el encabezado esperado despues de la navegacion.',
          ).toBeVisible({ timeout: 20_000 });
        },
      );

      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Unidades de Cuenta - BBA/VFA no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });

      baselineHeaders = await tableHeaderTexts(page);
      expect(
        baselineHeaders.length,
        '[BUG] Columnas por defecto no se muestran automáticamente.',
      ).toBeGreaterThan(0);
    });

    await test.step('QA: abrir Columnas y validar que las columnas por defecto ya vienen seleccionadas', async () => {
      const columnMenu = await openColumnsMenu(page);
      const optionStates = await collectColumnOptionStates(columnMenu);
      const defaultColumns = optionStates.filter((option) => option.isDefault);

      expect(
        defaultColumns.length,
        '[BUG] Inconsistencia entre modal y tabla. El modal no identifica columnas por defecto.',
      ).toBeGreaterThan(0);

      defaultColumnLabels = defaultColumns.map((option) => option.label);

      for (const option of defaultColumns) {
        expect(
          option.checked,
          `[BUG] Columnas por defecto no se muestran automáticamente. La columna ${option.label} aparece sin seleccionar en el modal.`,
        ).toBe(true);

        if (option.disabled) {
          expect(
            option.disabled,
            `[BUG] Columnas por defecto desaparecen o se pueden modificar indebidamente. La columna ${option.label} debería mantenerse bloqueada si aplica.`,
          ).toBe(true);
        }
      }

      const missingDefaultsInTable = missingColumnLabels(baselineHeaders, defaultColumnLabels);
      expect(
        missingDefaultsInTable,
        `[BUG] Inconsistencia entre modal y tabla. Faltan columnas default del modal en la tabla: ${missingDefaultsInTable.join(', ')}. Headers actuales: ${baselineHeaders.join(', ')}.`,
      ).toEqual([]);

      await columnMenu.getByTestId('table-column-toggle-cancel').click();
      await expect(columnMenu).toBeHidden({ timeout: 10_000 });
    });

    await test.step('QA: validar que las columnas por defecto permanecen visibles sin interacción del usuario', async () => {
      await expect
        .poll(async () => missingColumnLabels(await tableHeaderTexts(page), defaultColumnLabels), {
          message: '[BUG] Columnas por defecto desaparecen.',
          timeout: 20_000,
        })
        .toEqual([]);
    });
  });
});
