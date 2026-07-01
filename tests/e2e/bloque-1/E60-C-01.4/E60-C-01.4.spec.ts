import { expect, test } from '@fixtures/base.fixture';
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

test.describe('@comunes @critical @E60-C-01.4', () => {
  test('@critical @comunes @E60-C-01.4 debe mantener solo las columnas por defecto en Maestro UoA al usar "Ocultar todas"', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    let defaultColumnLabels: string[] = [];
    let optionalColumnLabels: string[] = [];

    await test.step('QA: ingresar a Distribucion y abrir Comunes > Maestro UoA', async () => {
      await goToComunesView(page, 'Maestro UoA', 'comunes/maestro-uoa');
      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Maestro UoA no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });
    });

    await test.step('QA: abrir Columnas, detectar dinamicamente default y opcionales, y validar estado inicial', async () => {
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

      defaultColumnLabels = defaultColumns.map((option) => option.label);
      optionalColumnLabels = optionalColumns.map((option) => option.label);

      for (const option of defaultColumns) {
        expect(
          option.checked,
          `[BUG] Las columnas por defecto no estan seleccionadas correctamente. La columna ${option.label} aparece sin marcar.`,
        ).toBe(true);
      }
    });

    await test.step('QA: usar "Ocultar todas" y validar que solo quedan seleccionadas las columnas por defecto', async () => {
      const columnMenu = page.getByRole('menu').last();
      const hideAllControl = columnMenu.getByText(/ocultar todas/i);

      await expect(
        hideAllControl,
        '[BUG] No se encuentra la opcion "Ocultar todas" dentro del modal de columnas.',
      ).toBeVisible({ timeout: 10_000 });
      await hideAllControl.click();

      await expect
        .poll(async () => {
          const states = await collectColumnOptionStates(columnMenu);
          const defaultColumns = states.filter((option) => option.isDefault);
          const optionalColumns = states.filter((option) => !option.isDefault);

          return (
            defaultColumns.length > 0 &&
            defaultColumns.every((option) => option.checked) &&
            optionalColumns.every((option) => !option.checked)
          );
        }, {
          message: '[BUG] "Ocultar todas" no respeta columnas por defecto.',
          timeout: 20_000,
        })
        .toBe(true);

      const statesAfterHideAll = await collectColumnOptionStates(columnMenu);
      const selectedOptionalColumns = statesAfterHideAll
        .filter((option) => !option.isDefault && option.checked)
        .map((option) => option.label);
      const unselectedDefaultColumns = statesAfterHideAll
        .filter((option) => option.isDefault && !option.checked)
        .map((option) => option.label);

      expect(
        unselectedDefaultColumns,
        `[BUG] "Ocultar todas" no respeta columnas por defecto. Estas columnas default quedaron desmarcadas: ${unselectedDefaultColumns.join(', ')}.`,
      ).toEqual([]);
      expect(
        selectedOptionalColumns,
        `[BUG] Columnas opcionales siguen visibles en el modal despues de usar "Ocultar todas": ${selectedOptionalColumns.join(', ')}.`,
      ).toEqual([]);
    });

    await test.step('QA: aceptar cambios y validar que la tabla refleja solo las columnas por defecto', async () => {
      const columnMenu = page.getByRole('menu').last();
      const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');

      await expect(
        acceptButton,
        '[BUG] El boton "Aceptar" del modal de columnas no esta disponible para aplicar "Ocultar todas".',
      ).toBeEnabled();
      await acceptButton.click();
      await expect(columnMenu).toBeHidden({ timeout: 10_000 });

      await expect
        .poll(async () => {
          const headers = await tableHeaderTexts(page);
          const headerSet = normalizedSet(headers);
          const allDefaultsVisible = defaultColumnLabels.every((label) => headerSet.has(normalizeColumnsText(label)));
          const allOptionalsHidden = optionalColumnLabels.every((label) => !headerSet.has(normalizeColumnsText(label)));
          return allDefaultsVisible && allOptionalsHidden;
        }, {
          message: '[BUG] Inconsistencia entre modal y tabla.',
          timeout: 20_000,
        })
        .toBe(true);

      const currentHeaders = await tableHeaderTexts(page);
      const headerSet = normalizedSet(currentHeaders);
      const missingDefaultColumns = defaultColumnLabels.filter(
        (label) => !headerSet.has(normalizeColumnsText(label)),
      );
      const visibleOptionalColumns = optionalColumnLabels.filter((label) =>
        headerSet.has(normalizeColumnsText(label)),
      );

      expect(
        missingDefaultColumns,
        `[BUG] La tabla muestra columnas incorrectas. Faltan columnas por defecto: ${missingDefaultColumns.join(', ')}. Headers actuales: ${currentHeaders.join(', ')}.`,
      ).toEqual([]);
      expect(
        visibleOptionalColumns,
        `[BUG] Columnas opcionales siguen visibles en la tabla: ${visibleOptionalColumns.join(', ')}. Headers actuales: ${currentHeaders.join(', ')}.`,
      ).toEqual([]);
    });
  });
});
