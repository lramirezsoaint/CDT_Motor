import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution, SelectGtDistributionOptions } from './gt-distribution';
import { GtCaseBase, openGtView, tagsFor } from './gt-ui';

type SearchViewConfig = Pick<GtCaseBase, 'section' | 'view'> & {
  searchText?: string;
};

type SearchCaseConfig = Pick<GtCaseBase, 'caseId' | 'priority' | 'flow' | 'role'> & {
  views: SearchViewConfig[];
  distribution?: SelectGtDistributionOptions;
  todo?: string;
};

export function SearchCase(config: SearchCaseConfig) {
  test(`${tagsFor(config)} valida busqueda en vistas GT`, async ({ page }, testInfo) => {
    test.setTimeout(180_000);

    if (config.todo) {
      testInfo.annotations.push({
        type: 'TODO',
        description: config.todo,
      });
    }

    await test.step('Abrir vista del flujo de Gastos Tecnicos', async () => {
      try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(
          env.gestorGTUsername,
          env.gestorGTPassword
        );
      } catch (error) { }
    });

    await selectGtDistribution(page, config.distribution);

    for (const viewConfig of config.views) {
      await test.step(`Validar buscador en ${viewConfig.section} > ${viewConfig.view}`, async () => {
        await openGtView(page, viewConfig);
        const table = page.locator('table').first();
        await expect(table, 'La vista debe mostrar una tabla consultable.').toBeVisible({ timeout: 30_000 });

        const searchInput = page
          .getByPlaceholder(/buscar/i)
          .or(page.getByRole('textbox', { name: /buscar/i }))
          .or(page.locator('input').first());

        await expect(searchInput, 'La vista debe exponer el campo de busqueda documentado en el catalogo.').toBeVisible();

        const searchText = viewConfig.searchText ?? await firstSearchableCellText(page);
        expect(searchText, 'Debe existir al menos un dato visible para ejecutar la busqueda.').not.toEqual('');

        await searchInput.fill(searchText);
        await expect(table.locator('tbody tr').first(), 'La busqueda debe devolver filas visibles.').toBeVisible({ timeout: 15_000 });
        await expect(table, 'El resultado debe contener el criterio buscado en alguna columna.').toContainText(new RegExp(escapeRegExp(searchText), 'i'));

        await searchInput.fill('');
        await expect(table.locator('tbody tr').first(), 'Al limpiar la busqueda debe conservarse la consulta visible.').toBeVisible({ timeout: 15_000 });
      });
    }
  });
}

async function firstSearchableCellText(page: Page) {
  const cells = page.locator('table tbody tr:first-child td');
  const count = await cells.count();

  for (let index = 0; index < count; index += 1) {
    const text = (await cells.nth(index).innerText()).trim();
    if (text) {
      return text.split(/\s+/)[0];
    }
  }

  return '';
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}