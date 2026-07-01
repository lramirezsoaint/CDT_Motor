import { expect, test } from '@fixtures/base.fixture';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  collectColumnOptionStates,
  normalizeColumnsText,
  openColumnsMenu,
  tableHeaderTexts,
} from '../_shared/comunes-columns';

function headerMatchesLabel(actualHeader: string, expectedLabel: string) {
  const normalizedHeader = normalizeColumnsText(actualHeader);
  const normalizedLabel = normalizeColumnsText(expectedLabel);

  return normalizedHeader.includes(normalizedLabel) || normalizedLabel.includes(normalizedHeader);
}

function headersContainLabel(headers: string[], expectedLabel: string) {
  return headers.some((header) => headerMatchesLabel(header, expectedLabel));
}

test.describe('@comunes @critical @E60-C-02.3', () => {
  test('@critical @comunes @E60-C-02.3 debe seleccionar todas las columnas disponibles en Unidades de Cuenta - BBA/VFA con "Mostrar todas"', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    let defaultColumnLabels: string[] = [];
    let optionalColumnLabels: string[] = [];
    let baselineHeaders: string[] = [];

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
        '[BUG] La tabla inicial de Unidades de Cuenta - BBA/VFA no expone headers visibles para usar como baseline.',
      ).toBeGreaterThan(0);
    });

    await test.step('QA: abrir Columnas, detectar dinamicamente default y opcionales, y validar estado inicial', async () => {
      const columnMenu = await openColumnsMenu(page);
      const initialStates = await collectColumnOptionStates(columnMenu);
      const defaultColumns = initialStates.filter((option) => option.isDefault);
      const optionalColumns = initialStates.filter((option) => !option.isDefault);

      expect(
        initialStates.length,
        '[BUG] El modal de columnas no muestra opciones disponibles para validar.',
      ).toBeGreaterThan(0);
      expect(
        defaultColumns.length,
        '[BUG] El modal de columnas no identifica columnas marcadas como "Por Defecto".',
      ).toBeGreaterThan(0);
      expect(
        optionalColumns.length,
        '[BUG] El modal de columnas no expone columnas opcionales para validar "Mostrar todas".',
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
          message: '[BUG] "Mostrar todas" no selecciona todas las columnas.',
          timeout: 20_000,
        })
        .toBe(true);
    });

    await test.step('QA: aceptar cambios y validar que la tabla refleja columnas default y opcionales', async () => {
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
          const baselineVisible = baselineHeaders.every((label) => headersContainLabel(headers, label));
          const optionalVisible = optionalColumnLabels.every((label) => headersContainLabel(headers, label));
          return baselineVisible && optionalVisible && headers.length >= baselineHeaders.length;
        }, {
          message: '[BUG] Inconsistencia entre modal y tabla.',
          timeout: 20_000,
        })
        .toBe(true);

      const currentHeaders = await tableHeaderTexts(page);
      const missingOptionalColumns = optionalColumnLabels.filter((label) => !headersContainLabel(currentHeaders, label));
      const missingBaselineHeaders = baselineHeaders.filter((label) => !headersContainLabel(currentHeaders, label));

      expect(
        missingBaselineHeaders,
        `[BUG] Inconsistencia entre modal y tabla. Faltan headers base despues de usar "Mostrar todas": ${missingBaselineHeaders.join(', ')}. Headers actuales: ${currentHeaders.join(', ')}.`,
      ).toEqual([]);
      expect(
        missingOptionalColumns,
        `[BUG] "Mostrar todas" no selecciona todas las columnas. Faltan columnas opcionales en tabla: ${missingOptionalColumns.join(', ')}. Headers actuales: ${currentHeaders.join(', ')}.`,
      ).toEqual([]);
    });
  });
});
