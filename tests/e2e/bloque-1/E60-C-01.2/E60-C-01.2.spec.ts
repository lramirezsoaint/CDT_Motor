import { expect, test } from '@playwright/test';
import scenarioData from '@data/bloque-1/E60-C-01.2.json';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  defaultMaestroUoaColumns,
  expectColumnHiddenInTable,
  expectColumnVisibleInTable,
  getColumnOption,
  normalizeColumnsText,
  openColumnsMenu,
  tableHeaderTexts,
  visibleColumnOptionTexts,
} from '../_shared/comunes-columns';

function uniqueNormalized(values: string[]) {
  return [...new Set(values.map((value) => normalizeColumnsText(value)))];
}

function containsExpectedLabel(actualValue: string, expectedLabel: string) {
  return normalizeColumnsText(actualValue).includes(normalizeColumnsText(expectedLabel));
}

test.describe('@comunes @critical @E60-C-01.2', () => {
  test('@critical @comunes @E60-C-01.2 debe filtrar correctamente las columnas de Maestro UoA desde el buscador del modal', async ({
    page,
  }) => {
    test.setTimeout(180_000);

    await test.step('QA: ingresar a Distribución y abrir Comunes > Maestro UoA', async () => {
      await goToComunesView(page, 'Maestro UoA', 'comunes/maestro-uoa');
      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Maestro UoA no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });
    });

    await test.step('QA: abrir el modal de columnas y validar estado inicial', async () => {
      const columnMenu = await openColumnsMenu(page);
      const searchInput = columnMenu.getByTestId('table-column-toggle-search');

      await expect(
        searchInput,
        '[BUG] El modal "Columnas" no expone el input de búsqueda.',
      ).toBeVisible({ timeout: 10_000 });

      const visibleDefaults = uniqueNormalized(await visibleColumnOptionTexts(columnMenu));
      for (const defaultColumn of defaultMaestroUoaColumns) {
        expect(
          visibleDefaults.some((value) => containsExpectedLabel(value, defaultColumn)),
          `[BUG] Las columnas por defecto no están visibles al abrir el modal. Falta "${defaultColumn}".`,
        ).toBe(true);
      }
    });

    await test.step('QA: validar casos data-driven del buscador de columnas', async () => {
      const columnMenu = page.getByRole('menu').last();
      const searchInput = columnMenu.getByTestId('table-column-toggle-search');

      for (const searchCase of scenarioData.busqueda) {
        await test.step(`QA: buscar "${searchCase.input}" y validar columnas filtradas`, async () => {
          await searchInput.fill('');
          await searchInput.fill(searchCase.input);

          const visibleOptions = uniqueNormalized(await visibleColumnOptionTexts(columnMenu));
          const expectedLabels = uniqueNormalized(searchCase.expected);

          for (const expectedLabel of expectedLabels) {
            expect(
              visibleOptions.some((value) => containsExpectedLabel(value, expectedLabel)),
              `[BUG] No se muestran columnas esperadas en el filtro. Búsqueda: "${searchCase.input}". Falta: "${expectedLabel}". Valor actual: ${visibleOptions.join(', ')}.`,
            ).toBe(true);
          }

          const unexpectedOptions = visibleOptions.filter(
            (option) => !expectedLabels.some((expectedLabel) => containsExpectedLabel(option, expectedLabel)),
          );
          expect(
            unexpectedOptions,
            `[BUG] Se muestran columnas que no coinciden con el criterio de búsqueda "${searchCase.input}". Valor actual: ${unexpectedOptions.join(', ')}.`,
          ).toEqual([]);
        });
      }
    });

    for (const columnName of scenarioData.columnas) {
      await test.step(`QA: buscar "${columnName}", interactuar con su checkbox y confirmar impacto en tabla`, async () => {
        const currentHeaders = await tableHeaderTexts(page);
        const alreadyVisible = currentHeaders.some((header) => containsExpectedLabel(header, columnName));
        const searchTerm = columnName.slice(0, 3);

        let columnMenu = await openColumnsMenu(page);
        const searchInput = columnMenu.getByTestId('table-column-toggle-search');
        await searchInput.fill('');
        await searchInput.fill(searchTerm);

        const option = await getColumnOption(columnMenu, columnName);
        await expect(
          option,
          `[BUG] El buscador no filtra correctamente las columnas. No se encontró "${columnName}" usando el criterio "${searchTerm}".`,
        ).toBeVisible({ timeout: 10_000 });

        if ((await option.getAttribute('aria-disabled')) === 'true') {
          await expect(
            option,
            `[BUG] Las columnas por defecto no están marcadas correctamente. "${columnName}" debería estar marcada como obligatoria.`,
          ).toHaveAttribute('aria-checked', 'true');
          await columnMenu.getByTestId('table-column-toggle-cancel').click();
          await expect(columnMenu).toBeHidden({ timeout: 10_000 });
          return;
        }

        await expect(
          option,
          `[BUG] No se puede seleccionar una columna desde el resultado filtrado. "${columnName}" no está inicialmente en el estado esperado.`,
        ).toHaveAttribute('aria-checked', alreadyVisible ? 'true' : 'false');

        await option.click();
        await expect(
          option,
          `[BUG] El checkbox no cambia estado al interactuar. "${columnName}" no se seleccionó correctamente.`,
        ).toHaveAttribute('aria-checked', alreadyVisible ? 'false' : 'true');

        const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');
        await expect(acceptButton, '[BUG] El botón "Aceptar" del modal de columnas no está disponible.').toBeEnabled();
        await acceptButton.click();
        await expect(columnMenu).toBeHidden({ timeout: 10_000 });

        if (alreadyVisible) {
          await expectColumnHiddenInTable(page, columnName);
        } else {
          await expectColumnVisibleInTable(page, columnName);
        }

        columnMenu = await openColumnsMenu(page);
        const secondSearchInput = columnMenu.getByTestId('table-column-toggle-search');
        await secondSearchInput.fill('');
        await secondSearchInput.fill(searchTerm);

        const secondOption = await getColumnOption(columnMenu, columnName);
        await expect(
          secondOption,
          `[BUG] No se puede volver a localizar la columna "${columnName}" después de aplicar el primer cambio.`,
        ).toBeVisible({ timeout: 10_000 });
        await expect(
          secondOption,
          `[BUG] El checkbox no conserva el estado esperado tras aplicar cambios para "${columnName}".`,
        ).toHaveAttribute('aria-checked', alreadyVisible ? 'false' : 'true');

        await secondOption.click();
        await expect(
          secondOption,
          `[BUG] El checkbox no cambia estado al interactuar. "${columnName}" no se pudo revertir.`,
        ).toHaveAttribute('aria-checked', alreadyVisible ? 'true' : 'false');

        const secondAcceptButton = columnMenu.getByTestId('table-column-toggle-accept');
        await expect(secondAcceptButton).toBeEnabled();
        await secondAcceptButton.click();
        await expect(columnMenu).toBeHidden({ timeout: 10_000 });

        if (alreadyVisible) {
          await expectColumnVisibleInTable(page, columnName);
        } else {
          await expectColumnHiddenInTable(page, columnName);
        }
      });
    }
  });
});
