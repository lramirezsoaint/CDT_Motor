import { expect, test } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  collectColumnOptionStates,
  normalizeColumnsText,
  openColumnsMenu,
  tableHeaderTexts,
} from '../_shared/comunes-columns';

function normalizedSet(values: string[]) {
  return new Set(values.map((value) => normalizeColumnsText(value)).filter(Boolean));
}

test.describe('@comunes @critical @E60-C-01.3', () => {
  test('@critical @comunes @E60-C-01.3 debe seleccionar todas las columnas disponibles en Maestro UoA con "Mostrar todas"', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    await test.step('QA: ingresar a Distribucion y abrir Comunes > Maestro UoA', async () => {
      await goToComunesView(page, 'Maestro UoA', 'comunes/maestro-uoa');
      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Maestro UoA no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });
    });

    let selectedColumnLabels: string[] = [];

    await test.step('QA: abrir Columnas, detectar dinamicamente opciones y validar estado inicial', async () => {
      const columnMenu = await openColumnsMenu(page);
      const initialStates = await collectColumnOptionStates(columnMenu);

      expect(
        initialStates.length,
        '[BUG] El modal de columnas no muestra opciones disponibles para validar.',
      ).toBeGreaterThan(0);

      const defaultColumns = initialStates.filter((option) => option.isDefault);
      const optionalColumns = initialStates.filter((option) => !option.isDefault);

      expect(
        defaultColumns.length,
        '[BUG] El modal de columnas no identifica columnas marcadas como "Por Defecto".',
      ).toBeGreaterThan(0);
      expect(
        optionalColumns.length,
        '[BUG] El modal de columnas no expone columnas no default para validar "Mostrar todas".',
      ).toBeGreaterThan(0);

      for (const option of defaultColumns) {
        expect(
          option.checked,
          `[BUG] Las columnas por defecto no estan seleccionadas correctamente. La columna ${option.label} aparece sin marcar.`,
        ).toBe(true);
      }

      for (const option of optionalColumns) {
        expect(
          option.checked,
          `[BUG] Las columnas no default no parten desmarcadas correctamente. La columna ${option.label} ya aparece seleccionada antes de usar "Mostrar todas".`,
        ).toBe(false);
      }
    });

    await test.step('QA: usar "Mostrar todas" y validar que todas las columnas quedan seleccionadas en el modal', async () => {
      const columnMenu = page.getByRole('menu').last();
      const showAllControl = columnMenu.getByText(/mostrar todas/i);

      await expect(
        showAllControl,
        '[BUG] No se encuentra la opcion "Mostrar todas" dentro del modal de columnas.',
      ).toBeVisible({ timeout: 10_000 });
      await showAllControl.click();

      await expect
        .poll(async () => {
          const states = await collectColumnOptionStates(columnMenu);
          return states.length > 0 && states.every((option) => option.checked);
        }, {
          message: '[BUG] "Mostrar todas" no selecciona todas las columnas disponibles.',
          timeout: 20_000,
        })
        .toBe(true);

      const selectedStates = await collectColumnOptionStates(columnMenu);
      selectedColumnLabels = selectedStates.map((option) => option.label);
    });

    await test.step('QA: aceptar cambios y validar consistencia entre modal y tabla', async () => {
      const columnMenu = page.getByRole('menu').last();
      const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');

      await expect(
        acceptButton,
        '[BUG] El boton "Aceptar" del modal de columnas no esta disponible para aplicar "Mostrar todas".',
      ).toBeEnabled();
      await acceptButton.click();
      await expect(columnMenu).toBeHidden({ timeout: 10_000 });

      await expect
        .poll(async () => {
          const headers = await tableHeaderTexts(page);
          const headerSet = normalizedSet(headers);
          return selectedColumnLabels.every((label) => headerSet.has(normalizeColumnsText(label)));
        }, {
          message: '[BUG] Las columnas seleccionadas en el modal no aparecen reflejadas en la tabla.',
          timeout: 20_000,
        })
        .toBe(true);

      const currentHeaders = await tableHeaderTexts(page);
      const headerSet = normalizedSet(currentHeaders);
      const missingColumns = selectedColumnLabels.filter(
        (label) => !headerSet.has(normalizeColumnsText(label)),
      );

      expect(
        missingColumns,
        `[BUG] Inconsistencia entre modal y tabla. Las siguientes columnas seleccionadas no aparecen en la tabla: ${missingColumns.join(', ')}. Headers actuales: ${currentHeaders.join(', ')}.`,
      ).toEqual([]);
    });
  });
});
