import { expect, Locator, test } from '@playwright/test';
import { GtCaseBase, openGtView,  tagsFor,  visibleButton } from './gt-ui';
import { env } from '@config/env';
import { selectGtDistribution, SelectGtDistributionOptions } from './gt-distribution';
import { LoginPage } from '@pages/auth/LoginPage';

type ColumnAction = 'open' | 'search' | 'showAll' | 'hideAll';

type ColumnsCaseConfig = GtCaseBase & {
  distribution?: SelectGtDistributionOptions;
  action: ColumnAction;
  searchText?: string;
};

export function ColumnsCase(config: ColumnsCaseConfig) {

  test(`${tagsFor(config)} valida columnas ${config.action} en ${config.view}`, async ({ page }, testInfo) => {
    test.setTimeout(120_000);
    try {
      await page.goto('https://distribuciongastos.pacificotest.com.pe/');
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGTUsername,
        env.gestorGTPassword
      );
    } catch (error) { }
    await selectGtDistribution(page, config.distribution);
    await test.step('Abrir vista del archivo', async () => {

      await openGtView(page, config);
    });

    const modal = await test.step('Abrir componente Columnas', async () => {
      await visibleButton(page, /^ver$/i).click();
      const columnsModal = page.getByRole('dialog').or(page.locator('[role="menu"], [data-radix-popper-content-wrapper]')).first();
      await expect(columnsModal, 'Debe abrirse el componente Columnas.').toBeVisible();
      await expect(columnsModal.getByText(/columnas/i), 'Debe mostrarse el titulo Columnas.').toBeVisible();
      await expect(columnsModal.getByText(/por defecto/i).first(), 'Debe haber columnas marcadas Por Defecto.').toBeVisible();
      return columnsModal;
    });

    if (config.action === 'search') {
      await assertColumnSearch(modal, config.searchText ?? 'a');
    }

    if (config.action === 'showAll') {
      await assertBulkColumnAction(modal, /mostrar todas/i);
    }

    if (config.action === 'hideAll') {
      await assertBulkColumnAction(modal, /ocultar todas/i);
      await expect(modal.getByText(/por defecto/i).first(), 'Ocultar todas debe conservar columnas por defecto.').toBeVisible();
    }

    await test.step('Aplicar seleccion de columnas', async () => {
      const acceptButton = modal.getByRole('button', { name: /^aceptar$/i }).or(modal.locator('button').filter({ hasText: /^Aceptar$/i })).first();
      await expect(acceptButton, 'Debe existir el boton Aceptar del componente Columnas.').toBeEnabled();
      await acceptButton.click();
    });
  });
}

async function assertColumnSearch(modal: Locator, searchText: string) {
  await test.step('Usar buscador de Columnas', async () => {
    const searchInput = modal
      .getByPlaceholder(/buscar/i)
      .or(modal.getByRole('textbox', { name: /buscar/i }))
      .or(modal.locator('input').first());
    await expect(searchInput, 'El componente Columnas debe exponer buscador.').toBeVisible();
    await searchInput.fill(searchText);
    await expect(modal.getByText(new RegExp(searchText, 'i')).first(), 'El filtro debe mostrar coincidencias.').toBeVisible();
  });
}

async function assertBulkColumnAction(modal: Locator, actionName: RegExp) {
  await test.step(`Ejecutar ${actionName.source} en Columnas`, async () => {
    const action = modal
      .getByRole('button', { name: actionName })
      .or(modal.getByRole('menuitem', { name: actionName }))
      .or(modal.getByText(actionName))
      .first();
    await expect(action, 'Debe existir la accion masiva de columnas.').toBeVisible();
    await action.click();
  });
}
