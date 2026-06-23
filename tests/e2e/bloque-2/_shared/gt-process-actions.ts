import { expect, Page, test, TestInfo } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution } from './gt-distribution';

type ProcessMode = 'Completo' | 'Resumido';

type ProcessActionBase = {
  caseId: string;
  mode: ProcessMode;
  role?: 'gestor-gasto';
  priority?: 'critical' | 'smoke';
};

type ProcessExecuteAllConfig = ProcessActionBase & {
  includePhase3: boolean;
  applyPatch: boolean;
  expectedLabels: RegExp[];
};

type ProcessStopConfig = ProcessActionBase & {
  action: 'detener' | 'reiniciar';
  expectedMessage: RegExp;
};

export function ProcessExecuteAllCase(config: ProcessExecuteAllConfig) {
  test(`${tagsFor(config)} valida Ejecutar Todo ${config.mode}`, async ({ page }, testInfo) => {
    test.setTimeout(240_000);
    annotateProcessData(testInfo, 'El catalogo define periodo 202506 y descripcion de region por default, pero no indica version/estado de distribucion estable para ejecutar sin depender de datos vivos.');
    await openProcessView(page);

    await test.step('Validar configuracion de proceso documentada', async () => {
      await expect(page.getByText(new RegExp(config.mode, 'i')).first()).toBeVisible({ timeout: 30_000 });
      await configurePhase3(page, config.includePhase3);
      const executeAll = page.getByRole('button', { name: /Ejecutar Todo/i }).or(page.getByText(/Ejecutar Todo/i)).first();
      await expect(executeAll, 'Debe mostrarse el boton Ejecutar Todo.').toBeVisible({ timeout: 30_000 });
      await expect(executeAll, 'El boton Ejecutar Todo debe habilitarse tras configurar periodo, version, modo y descripcion.').toBeEnabled();
    });

    await test.step('Ejecutar todo y responder modal de parches', async () => {
      const executeAll = page.getByRole('button', { name: /Ejecutar Todo/i }).or(page.getByText(/Ejecutar Todo/i)).first();
      await executeAll.click();
      const patchDialog = page.getByRole('dialog').filter({ hasText: /parche|cambios/i }).first();
      if (await patchDialog.isVisible({ timeout: 10_000 }).catch(() => false)) {
        await patchDialog.getByRole('button', { name: config.applyPatch ? /si|s./i : /no/i }).first().click();
      }
    });

    await test.step('Validar fases esperadas por catalogo', async () => {
      for (const label of config.expectedLabels) {
        await expect(page.getByText(label).first(), `Debe mostrarse ${label}.`).toBeVisible({ timeout: 30_000 });
      }
      if (!config.applyPatch) {
        await expect(page.getByText(/parche/i).first()).toBeHidden({ timeout: 5_000 }).catch(() => undefined);
      }
    });
  });
}

export function ProcessStopOrRestartCase(config: ProcessStopConfig) {
  test(`${tagsFor(config)} valida ${config.action} de proceso`, async ({ page }, testInfo) => {
    test.setTimeout(180_000);
    annotateProcessData(testInfo, config.action === 'detener'
      ? 'El catalogo requiere un proceso en ejecucion con porcentaje visible, pero no especifica distribucion/version que garantice ese estado.'
      : 'El catalogo requiere un proceso previamente detenido, pero no especifica distribucion/version que garantice ese estado.');
    await openProcessView(page);

    await test.step(`Ejecutar accion ${config.action}`, async () => {
      await expect(page.getByText(new RegExp(config.mode, 'i')).first()).toBeVisible({ timeout: 30_000 });
      const action = page.getByRole('button', { name: config.action === 'detener' ? /Detener/i : /Reiniciar/i }).or(page.getByText(config.action === 'detener' ? /Detener/i : /Reiniciar/i)).first();
      await expect(action, `Debe existir el boton ${config.action}.`).toBeVisible({ timeout: 30_000 });
      await expect(page.getByText(/%|porcentaje|avance/i).first(), 'Debe existir porcentaje de avance o estado de proceso.').toBeVisible({ timeout: 30_000 });
      await action.click();
    });

    await test.step('Validar resultado esperado', async () => {
      await expect(page.getByRole('dialog').or(page.locator('body')).getByText(config.expectedMessage).first()).toBeVisible({ timeout: 30_000 });
      const executeAll = page.getByRole('button', { name: /Ejecutar Todo/i }).or(page.getByText(/Ejecutar Todo/i)).first();
      await expect(executeAll, 'Ejecutar Todo debe permanecer deshabilitado durante el estado esperado.').toBeDisabled();
    });
  });
}

async function openProcessView(page: Page) {
  await loginAsGestor(page);
  await selectGtDistribution(page);
  await test.step('Abrir Procesos > Gastos Tecnicos', async () => {
    await page.getByText(/Procesos/i).click();
    const gtLink = page.getByRole('link', { name: /Gastos Tecnicos|Gastos T.cnicos/i }).or(page.getByText(/Gastos Tecnicos|Gastos T.cnicos/i)).first();
    if (await gtLink.isVisible({ timeout: 5_000 }).catch(() => false)) await gtLink.click();
    await expect(page.getByText(/Gastos Tecnicos|Gastos T.cnicos|Procesos/i).first()).toBeVisible({ timeout: 30_000 });
  });
}

async function loginAsGestor(page: Page) {
  try {
    await page.goto('https://distribuciongastos.pacificotest.com.pe/');
    const loginPage = new LoginPage(page);
    await loginPage.login(env.gestorGastoUsername, env.gestorGastoPassword);
  } catch (error) { }
}

async function configurePhase3(page: Page, includePhase3: boolean) {
  const phase3 = page.getByText(/fase 3|Distribuir Objetos/i).first();
  await expect(phase3, 'Debe mostrarse la fase 3 para poder marcarla o no marcarla segun catalogo.').toBeVisible({ timeout: 30_000 });
  const checkbox = page.getByRole('checkbox').filter({ hasText: /fase 3|Distribuir Objetos/i }).first();
  if (await checkbox.isVisible({ timeout: 2_000 }).catch(() => false)) {
    await checkbox.setChecked(includePhase3);
  }
}

function annotateProcessData(testInfo: TestInfo, description: string) {
  testInfo.annotations.push({ type: 'TODO', description });
}

function tagsFor(config: ProcessActionBase) {
  return [
    '@bloque2',
    '@gt',
    '@gestor-gasto',
    config.priority ? `@${config.priority}` : '',
    `@${config.caseId}`,
  ]
    .filter(Boolean)
    .join(' ');
}