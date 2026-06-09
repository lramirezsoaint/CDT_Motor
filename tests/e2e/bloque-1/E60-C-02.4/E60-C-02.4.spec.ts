import { expect, test } from '@playwright/test';
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

test.describe('@comunes @critical @E60-C-02.4', () => {
  test('@critical @comunes @E60-C-02.4 debe mantener solo las columnas por defecto en Unidades de Cuenta - BBA/VFA al usar "Ocultar todas"', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    let baselineHeaders: string[] = [];
    let optionalColumnLabels: string[] = [];

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

      await expect(page.locator('table').first()).toBeVisible({ timeout: 20_000 });
      baselineHeaders = await tableHeaderTexts(page);
    });

    await test.step('QA: abrir Columnas y detectar dinamicamente columnas por defecto y opcionales', async () => {
      const columnMenu = await openColumnsMenu(page);
      const initialStates = await collectColumnOptionStates(columnMenu);
      const defaultColumns = initialStates.filter((option) => option.isDefault);
      const optionalColumns = initialStates.filter((option) => !option.isDefault);

      expect(defaultColumns.length, '[BUG] El modal de columnas no identifica columnas marcadas como "Por Defecto".').toBeGreaterThan(0);
      optionalColumnLabels = optionalColumns.map((option) => option.label);
    });

    await test.step('QA: usar "Ocultar todas" y validar que solo quedan seleccionadas las columnas por defecto', async () => {
      const columnMenu = page.getByRole('menu').last();
      const hideAllControl = columnMenu.getByText(/ocultar todas/i);

      await expect(hideAllControl).toBeVisible({ timeout: 10_000 });
      await hideAllControl.click();

      await expect
        .poll(async () => {
          const states = await collectColumnOptionStates(columnMenu);
          const defaultColumns = states.filter((option) => option.isDefault);
          const optionalColumns = states.filter((option) => !option.isDefault);
          return defaultColumns.length > 0 && defaultColumns.every((option) => option.checked) && optionalColumns.every((option) => !option.checked);
        }, {
          message: '[BUG] "Ocultar todas" no respeta columnas por defecto.',
          timeout: 20_000,
        })
        .toBe(true);
    });

    await test.step('QA: aceptar cambios y validar que la tabla mantiene solo el baseline por defecto', async () => {
      const columnMenu = page.getByRole('menu').last();
      const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');
      await expect(acceptButton).toBeEnabled();
      await acceptButton.click();
      await expect(columnMenu).toBeHidden({ timeout: 10_000 });

      await expect
        .poll(async () => {
          const headers = await tableHeaderTexts(page);
          const baselineVisible = baselineHeaders.every((label) => headersContainLabel(headers, label));
          const optionalHidden = optionalColumnLabels.every((label) => !headersContainLabel(headers, label));
          return baselineVisible && optionalHidden;
        }, {
          message: '[BUG] Inconsistencia entre modal y tabla.',
          timeout: 20_000,
        })
        .toBe(true);

      const currentHeaders = await tableHeaderTexts(page);
      const visibleOptionalColumns = optionalColumnLabels.filter((label) => headersContainLabel(currentHeaders, label));

      expect(
        visibleOptionalColumns,
        `[BUG] "Ocultar todas" no respeta columnas por defecto. Siguen visibles columnas opcionales en tabla: ${visibleOptionalColumns.join(', ')}. Headers actuales: ${currentHeaders.join(', ')}.`,
      ).toEqual([]);
    });
  });
});
