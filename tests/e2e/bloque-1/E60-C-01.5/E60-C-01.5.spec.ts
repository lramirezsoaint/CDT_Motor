import { expect, test } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  collectColumnOptionStates,
  defaultMaestroUoaColumns,
  missingColumnLabels,
  openColumnsMenu,
  tableHeaderTexts,
} from '../_shared/comunes-columns';

test.describe('@comunes @critical @E60-C-01.5', () => {
  test('@critical @comunes @E60-C-01.5 debe mostrar automaticamente las columnas por defecto en Maestro UoA', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    let initialHeaders: string[] = [];
    let defaultColumnLabels: string[] = [];

    await test.step('QA: ingresar a Distribucion y abrir Comunes > Maestro UoA', async () => {
      await goToComunesView(page, 'Maestro UoA', 'comunes/maestro-uoa');
      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Maestro UoA no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });

      initialHeaders = await tableHeaderTexts(page);
      expect(
        initialHeaders.length,
        '[BUG] Columnas por defecto no se muestran automáticamente.',
      ).toBeGreaterThan(0);
    });

    await test.step('QA: validar que las columnas por defecto ya estan visibles al cargar la tabla', async () => {
      const missingDefaults = missingColumnLabels(initialHeaders, defaultMaestroUoaColumns);

      expect(
        missingDefaults,
        `[BUG] Columnas por defecto no se muestran automáticamente. Faltan: ${missingDefaults.join(', ')}. Headers actuales: ${initialHeaders.join(', ')}.`,
      ).toEqual([]);
    });

    await test.step('QA: abrir Columnas y validar consistencia entre modal y tabla sin interacción manual', async () => {
      const columnMenu = await openColumnsMenu(page);
      const optionStates = await collectColumnOptionStates(columnMenu);
      const defaultColumns = optionStates.filter((option) => option.isDefault);

      expect(
        defaultColumns.length,
        '[BUG] Inconsistencia entre modal y tabla. El modal no identifica columnas por defecto.',
      ).toBeGreaterThan(0);

      defaultColumnLabels = defaultColumns.map((option) => option.label);

      const missingDefaultsInTable = missingColumnLabels(initialHeaders, defaultColumnLabels);
      expect(
        missingDefaultsInTable,
        `[BUG] Inconsistencia entre modal y tabla. Faltan columnas default del modal en la tabla: ${missingDefaultsInTable.join(', ')}. Headers actuales: ${initialHeaders.join(', ')}.`,
      ).toEqual([]);

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

      await columnMenu.getByTestId('table-column-toggle-cancel').click();
      await expect(columnMenu).toBeHidden({ timeout: 10_000 });
    });

    await test.step('QA: validar estabilidad de las columnas por defecto sin interacción del usuario', async () => {
      await expect
        .poll(async () => missingColumnLabels(await tableHeaderTexts(page), defaultColumnLabels), {
          message: '[BUG] Columnas por defecto desaparecen.',
          timeout: 20_000,
        })
        .toEqual([]);
    });
  });
});
