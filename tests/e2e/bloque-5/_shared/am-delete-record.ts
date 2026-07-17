import { expect, test } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import { ensureAmContext } from './am-context';

type DeleteResult = 'success' | 'processError';

type DeleteRecordCaseConfig = {
  caseId: string;
  section: string;
  view: string;
  role: 'gestorAM' | 'admin';
  expectedResult: DeleteResult;
  warningMessage: RegExp;
  expectedMessage: RegExp;
  skipReason?: string;
};

export function DeleteRecordCase(config: DeleteRecordCaseConfig) {
  test(`${tagsFor(config)} elimina registro y valida resultado ${config.expectedResult}`, async ({ page }) => {
    test.setTimeout(180_000);
    test.skip(Boolean(config.skipReason), config.skipReason);

    await test.step('Abrir vista del flujo de Asientos Manuales', async () => {
      await ensureAmContext(page, 'mutation');
    });

    await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      await openAmView(page, config);
      await expect(page.getByRole('heading', { name: new RegExp(escapeRegExp(config.view), 'i') })).toBeVisible({
        timeout: 30_000,
      });
    });

    const row = page.locator('table tbody tr').first();
    await expect(row, 'Debe existir al menos un registro en la tabla para eliminar.').toBeVisible({ timeout: 30_000 });

      await test.step('Ejecutar accion Eliminar desde la tabla', async () => {
      await openDeleteAction(page, row);
    });

    const modal = page.getByRole('alertdialog').or(page.getByRole('dialog')).or(page.locator('[role="dialog"]')).first();

    await expect(modal, 'Debe mostrarse modal/alerta de confirmacion de eliminacion.').toBeVisible({ timeout: 15_000 });
    await expect(modal.getByText(config.warningMessage).or(page.getByText(config.warningMessage)).first()).toBeVisible();

    await test.step('Confirmar eliminacion', async () => {
      await modal.getByRole('button', { name: /aceptar|confirmar|eliminar/i }).last().click();
    });

    if (config.expectedResult === 'success') {
      await test.step('Validar eliminacion exitosa', async () => {
        await expect(page.getByText(config.expectedMessage).first()).toBeVisible({ timeout: 30_000 });
      });
      return;
    }

     });
}

async function openAmView(page: Page, config: Pick<DeleteRecordCaseConfig, 'section' | 'view'>) {
  const amPage = new Bloque5AsientosManualesPage(page);
  await amPage.openSidebarView(sectionName(config.section), config.view);
}

async function openDeleteAction(page: Page, row: Locator) {
  const directDelete = row
    .getByRole('button', { name: /eliminar|borrar|delete/i })
    .or(row.locator('[data-testid*="delete"], [data-testid*="trash"], [aria-label*="Eliminar"], [title*="Eliminar"]'))
    .first();

  if (await directDelete.isVisible({ timeout: 2_000 }).catch(() => false)) {
    return;
  }

  const actionButton = row
    .getByRole('button', { name: /acciones|mas|more|opciones/i })
    .or(row.locator('[data-testid*="action"], [aria-label*="Acciones"], [title*="Acciones"]'))
    .or(row.getByRole('button').last())
    .first();

  await expect(actionButton, 'Debe existir el menu de acciones del registro.').toBeVisible();
  //await actionButton.click();

  const deleteOption = page
    .getByRole('menuitem', { name: /eliminar|borrar|delete/i })
    .or(page.getByRole('button', { name: /eliminar|borrar|delete/i }))
    .or(page.getByText(/eliminar|borrar|delete/i))
    .first();

  await expect(deleteOption, 'Debe existir la opcion Eliminar en el menu de acciones.').toBeVisible();
  await deleteOption.click();
}

async function firstMeaningfulCellText(row: Locator) {
  const cells = row.locator('td');
  const count = await cells.count();

  for (let index = 0; index < count; index += 1) {
    const text = (await cells.nth(index).innerText().catch(() => '')).trim();
    if (text && !/acciones|editar|eliminar/i.test(text)) {
      return text.split(/\r?\n/)[0].trim();
    }
  }

  return '';
}

function tagsFor(config: Pick<DeleteRecordCaseConfig, 'caseId'>) {
  return `@bloque5 @${config.caseId} @am @eliminar @gestor-asiento @regression`;
}

function sectionName(value: string) {
  return /^parametrizaci/i.test(value) ? 'Parametrizaci\u00f3n' : value;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
