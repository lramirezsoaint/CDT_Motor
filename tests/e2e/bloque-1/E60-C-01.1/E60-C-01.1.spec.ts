import { expect, Locator, Page, test } from '@playwright/test';
import { goToComunesView } from '../_shared/comunes-upload';
import {
  defaultMaestroUoaColumns,
  getColumnOption,
  normalizeColumnsText as normalizeText,
  openColumnsMenu,
} from '../_shared/comunes-columns';

const columnas = ['UoA Período', 'Período', 'Descripción', 'Estado', 'UoA Cedido'];

function columnSearchTerm(columnName: string) {
  const normalized = normalizeText(columnName);

  if (normalized.includes('descripcion')) return 'descrip';
  if (normalized.includes('cedido')) return 'cedido';
  if (normalized === 'estado') return 'estado';
  if (normalized.includes('periodo')) return 'periodo';

  return normalized;
}

async function headerTexts(page: Page) {
  return (await page.locator('table thead th, [role="columnheader"]').allTextContents())
    .map((value) => value.trim())
    .filter(Boolean);
}

async function firstNonEmptyValueInColumn(page: Page, columnIndex: number) {
  const rows = page.locator('table tbody tr');
  const rowCount = await rows.count();

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const value = (await rows.nth(rowIndex).locator('td').nth(columnIndex).innerText().catch(() => '')).trim();
    if (value) return value;
  }

  return '';
}

async function assertDefaultColumns(columnMenu: Locator) {
  for (const columnName of defaultMaestroUoaColumns) {
    const option = await getColumnOption(columnMenu, columnName);
    await expect(
      option,
      `[BUG] Las columnas por defecto no están marcadas correctamente. Falta "${columnName}" en el selector de columnas.`,
    ).toHaveAttribute('aria-checked', 'true');
    await expect(
      option,
      `[BUG] Las columnas por defecto no están marcadas correctamente. "${columnName}" debería permanecer bloqueada como columna obligatoria.`,
    ).toHaveAttribute('aria-disabled', 'true');
  }
}

async function searchColumn(columnMenu: Locator, columnName: string) {
  const searchInput = columnMenu.getByTestId('table-column-toggle-search');
  const searchTerm = columnSearchTerm(columnName);
  const allOptions = columnMenu.getByRole('menuitemcheckbox');
  const totalOptions = await allOptions.count();

  await expect(searchInput, '[BUG] El selector de columnas no expone el buscador para filtrar columnas.').toBeVisible();
  await searchInput.fill(searchTerm);

  const selectedOption = await getColumnOption(columnMenu, columnName);
  await expect(
    selectedOption,
    `[BUG] El buscador no filtra correctamente la columna ${columnName}. No se encontró al buscar "${searchTerm}".`,
  ).toBeVisible({ timeout: 10_000 });

  const visibleOptions = await allOptions.evaluateAll((nodes) =>
    nodes
      .filter((node) => {
        const style = window.getComputedStyle(node);
        return style.display !== 'none' && style.visibility !== 'hidden';
      })
      .map((node) => (node.textContent || '').trim())
      .filter(Boolean),
  );

  if (totalOptions > 2) {
    expect(
      visibleOptions.length,
      `[BUG] El buscador no filtra correctamente la columna ${columnName}. La cantidad visible de opciones no se redujo tras buscar "${searchTerm}". Total inicial: ${totalOptions}. Total visible: ${visibleOptions.length}.`,
    ).toBeLessThan(totalOptions);
  }

  return selectedOption;
}

async function applyColumnChanges(columnMenu: Locator) {
  const acceptButton = columnMenu.getByTestId('table-column-toggle-accept');
  await expect(
    acceptButton,
    '[BUG] El botón "Aceptar" del selector de columnas no está disponible para aplicar los cambios.',
  ).toBeEnabled();
  await acceptButton.click();
  await expect(columnMenu).toBeHidden({ timeout: 10_000 });
}

async function expectColumnVisibleInTable(page: Page, columnName: string) {
  await expect
    .poll(async () => await headerTexts(page), {
      message: `[BUG] La columna ${columnName} no aparece en la tabla tras seleccionarla.`,
      timeout: 20_000,
    })
    .toContain(columnName);

  const headers = await headerTexts(page);
  const targetColumnIndex = headers.findIndex((header) => normalizeText(header) === normalizeText(columnName));

  expect(
    targetColumnIndex,
    `[BUG] La columna ${columnName} no aparece en la tabla tras seleccionarla. Headers actuales: ${headers.join(', ')}.`,
  ).toBeGreaterThanOrEqual(0);

  await expect
    .poll(async () => await firstNonEmptyValueInColumn(page, targetColumnIndex), {
      message: `[BUG] La tabla de Maestro UoA no muestra datos en la columna ${columnName} después de seleccionarla.`,
      timeout: 20_000,
    })
    .not.toBe('');
}

async function expectColumnHiddenInTable(page: Page, columnName: string) {
  await expect
    .poll(async () => await headerTexts(page), {
      message: `[BUG] La columna ${columnName} sigue visible después de deseleccionarla.`,
      timeout: 20_000,
    })
    .not.toContain(columnName);
}

test.describe('@comunes @critical @E60-C-01.1', () => {
  test('@critical @comunes @E60-C-01.1 debe agregar y quitar columnas opcionales de Maestro UoA en la tabla', async ({
    page,
  }) => {
    test.setTimeout(300_000);

    await test.step('QA: ingresar a Distribución y abrir Comunes > Maestro UoA', async () => {
      await goToComunesView(page, 'Maestro UoA', 'comunes/maestro-uoa');
      await expect(
        page.locator('table').first(),
        '[BUG] La tabla de Maestro UoA no se renderiza al ingresar a la vista.',
      ).toBeVisible({ timeout: 20_000 });
    });

    await test.step('QA: validar columnas por defecto del selector', async () => {
      const columnMenu = await openColumnsMenu(page);
      await assertDefaultColumns(columnMenu);
      await columnMenu.getByTestId('table-column-toggle-cancel').click();
      await expect(columnMenu).toBeHidden({ timeout: 10_000 });
    });

    for (const columna of columnas) {
      await test.step(`QA: agregar la columna ${columna} y validar su aparición en tabla`, async () => {
        const columnMenu = await openColumnsMenu(page);
        const option = await searchColumn(columnMenu, columna);

        if ((await option.getAttribute('aria-disabled')) === 'true') {
          await expect(
            option,
            `[BUG] La columna ${columna} aparece como "Por Defecto" y no debería intentarse seleccionar manualmente.`,
          ).toHaveAttribute('aria-checked', 'true');
          await columnMenu.getByTestId('table-column-toggle-cancel').click();
          await expect(columnMenu).toBeHidden({ timeout: 10_000 });
          return;
        }

        await expect(
          option,
          `[BUG] La columna ${columna} ya aparece marcada antes de seleccionarla en este flujo.`,
        ).toHaveAttribute('aria-checked', 'false');

        await option.click();
        await expect(option, `[BUG] No se puede seleccionar columna: ${columna}`).toHaveAttribute('aria-checked', 'true');

        await applyColumnChanges(columnMenu);
        await expectColumnVisibleInTable(page, columna);
      });

      await test.step(`QA: quitar la columna ${columna} y validar que desaparece de tabla`, async () => {
        const columnMenu = await openColumnsMenu(page);
        const option = await searchColumn(columnMenu, columna);

        if ((await option.getAttribute('aria-disabled')) === 'true') {
          await expect(
            option,
            `[BUG] La columna ${columna} sigue marcada como "Por Defecto" y no debería poder deseleccionarse.`,
          ).toHaveAttribute('aria-checked', 'true');
          await columnMenu.getByTestId('table-column-toggle-cancel').click();
          await expect(columnMenu).toBeHidden({ timeout: 10_000 });
          return;
        }

        await expect(
          option,
          `[BUG] La columna ${columna} no quedó seleccionada antes del flujo de deselección.`,
        ).toHaveAttribute('aria-checked', 'true');

        await option.click();
        await expect(option, `[BUG] No se puede deseleccionar columna: ${columna}`).toHaveAttribute('aria-checked', 'false');

        await applyColumnChanges(columnMenu);
        await expectColumnHiddenInTable(page, columna);
      });
    }
  });
});
