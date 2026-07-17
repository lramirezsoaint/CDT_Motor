import { test as baseTest, expect as baseExpect } from '@fixtures/base.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import type { Locator, Page } from '@playwright/test';
import type { AmProcessAutomationCase } from './am-process-cases';
import { ensureAmSession } from './am-upload';

export function ProcessCase(test: typeof baseTest, expect: typeof baseExpect, config: AmProcessAutomationCase): void {
  test(`@bloque5 @${config.caseId} @am @procesos @gestor-asiento @critical ${title(config)}`, async ({ page }) => {
    test.setTimeout(600_000);
   test.skip(true,'TODO [DATA]: Depende de la pestaña procesos.',);
    const amPage = new Bloque5AsientosManualesPage(page);

    await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
      await expect(page).toHaveURL(/\/distribuciones/i);
      await ensureAmSession(page, 'read');
    });
    await test.step(title(config), async () => {
      if (config.flow === 'deleteVersion') {
        await deleteExactusVersion(page, amPage, expect);
        return;
      }
      if (config.flow === 'manualProcessed') {
        test.skip(true, 'TODO [FIXTURE]: el catalogo exige Exactus procesado correcto pero no proporciona el archivo.');
      }
      await amPage.openSidebarView('Procesos', 'Asientos Manuales');
      await selectMode(page, config.mode!, expect);
      if (config.flow === 'phase') await executePhase(page, config.phase!, expect);
      if (config.flow === 'close') await executeNamedAction(page, /Cerrar (?:el )?proceso/i, /cerrado|cierre.*satisfactoriamente/i, expect);
      if (config.flow === 'executeAll') await executeAll(page, expect);
      if (config.flow === 'stop') await stopProcess(page, expect);
      if (config.flow === 'restart') await restartProcess(page, expect);
    });
  });
}

function readinessReason(config: AmProcessAutomationCase): string {
  return `TODO [PRECONDICION]: establecer ${config.readiness}=true solo cuando exista una distribucion segura con el estado y datos exigidos por ${config.caseId}.`;
}

async function selectMode(page: Page, mode: string, expect: typeof baseExpect): Promise<void> {
  const trigger = page.getByRole('combobox', { name: /Modo de Ejecuci/i })
    .or(page.getByRole('button', { name: new RegExp(mode, 'i') })).first();
  await expect(trigger, `Debe existir selector de modo ${mode}.`).toBeVisible();
  if (!(await trigger.innerText()).match(new RegExp(mode, 'i'))) {
    await trigger.click();
    await page.getByRole('option', { name: new RegExp(mode, 'i') }).click();
  }
}

async function executePhase(page: Page, phase: RegExp, expect: typeof baseExpect): Promise<void> {
  const row = await phaseRow(page, phase, expect);
  const action = row.getByRole('button', { name: /ejecutar|iniciar|play/i }).first();
  await expect(action, `Debe habilitarse la accion para ${phase.source}.`).toBeEnabled();
  await action.click();
  await expect(row, `La fase ${phase.source} debe finalizar al 100%.`).toContainText(/100%|completad|satisfactoriamente/i, {
    timeout: 540_000,
  });
}

async function phaseRow(page: Page, phase: RegExp, expect: typeof baseExpect): Promise<Locator> {
  const label = page.getByText(phase).first();
  await expect(label, `Debe existir ${phase.source}.`).toBeVisible();
  return label.locator('xpath=ancestor::*[self::tr or @role="row" or contains(@class,"row")][1]');
}

async function executeNamedAction(page: Page, actionName: RegExp, success: RegExp, expect: typeof baseExpect): Promise<void> {
  const action = page.getByRole('button', { name: actionName }).first();
  await expect(action).toBeVisible();
  await expect(action).toBeEnabled();
  await action.click();
  await expect(page.getByText(success).first()).toBeVisible({ timeout: 300_000 });
}

async function executeAll(page: Page, expect: typeof baseExpect): Promise<void> {
  await executeNamedAction(page, /Ejecutar Todo/i, /completad|finalizad|100%/i, expect);
  await expect(page.getByText(/Fase Inicial/i).first()).toBeVisible();
  await expect(page.getByText(/Fase 1/i).first()).toBeVisible();
  await expect(page.getByText(/Fase 2/i).first()).toBeVisible();
  await expect(page.getByText(/Cierre|Cerrado/i).first()).toBeVisible();
}

async function stopProcess(page: Page, expect: typeof baseExpect): Promise<void> {
  const progress = page.getByText(/\d+%/).first();
  const before = await progress.innerText();
  await executeNamedAction(page, /Detener/i, /proceso de distribuci[oó]n se ha detenido/i, expect);
  await expect(page.getByRole('button', { name: /Ejecutar Todo/i })).toBeDisabled();
  await expect(progress).toHaveText(before);
}

async function restartProcess(page: Page, expect: typeof baseExpect): Promise<void> {
  const action = page.getByRole('button', { name: /Reiniciar/i }).first();
  await expect(action).toBeVisible();
  await expect(action).toBeEnabled();
  await action.click();
  await expect(page.getByText(/en ejecuci[oó]n|procesando|\d+%/).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /Ejecutar Todo/i })).toBeDisabled();
}

async function deleteExactusVersion(
  page: Page, amPage: Bloque5AsientosManualesPage, expect: typeof baseExpect,
): Promise<void> {
  await amPage.openSidebarView('Aprovisionamiento', 'Exactus');
  const action = page.getByRole('button', { name: /Borrar Versi[oó]n/i }).first();
  await expect(action).toBeVisible();
  await action.click();
  const dialog = page.getByRole('dialog').last();
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: /Aceptar|Eliminar|Confirmar/i }).click();
  await expect(page.getByText(/Registro eliminado con [eé]xito/i)).toBeVisible();
  await expect(page.locator('table tbody tr')).toHaveCount(0);
}

function title(config: AmProcessAutomationCase): string {
  const labels = {
    phase: `ejecuta ${config.phase?.source}`,
    close: 'cierra el proceso',
    executeAll: 'ejecuta todas las fases',
    stop: 'detiene el proceso',
    restart: 'reinicia el proceso',
    deleteVersion: 'borra la version de Exactus',
    manualProcessed: 'procesa Exactus cargado manualmente',
  };
  return `${labels[config.flow]}${config.mode ? ` en modo ${config.mode}` : ''}`;
}
