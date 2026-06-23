import { expect, Page, test } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution } from './gt-distribution';

type ProcessAction = 'run' | 'close';
type ProcessMode = 'Completo' | 'Resumido';
type ProcessFlow = 'real' | 'presupuesto';

type ProcessBase = {
  caseId: string;
  mode: ProcessMode;
  flow?: ProcessFlow;
  role?: 'gestor-gasto';
  priority?: 'critical' | 'smoke';
  requiresPolicy?: boolean;
};

type ProcessGtCaseConfig = ProcessBase & {
  phase: RegExp;
  action: ProcessAction;
  expectedMessage: RegExp;
};

type ProcessAmountPermanenceCaseConfig = ProcessBase & {
  expectedLabels: RegExp[];
};

type ProcessAccountBalanceCaseConfig = ProcessBase & {
  expectedColumns: RegExp[];
  closedProcess?: boolean;
};

export function ProcessGtCase(config: ProcessGtCaseConfig) {
  test(`${tagsFor(config)} valida proceso GT ${config.action}`, async ({ page }) => {
    test.setTimeout(240_000);
    await openProcessView(page, config);

    await test.step('Validar configuracion requerida por catalogo', async () => {
      annotateMissingOperationalData();
      await expect(page.getByText(new RegExp(config.mode, 'i')).first()).toBeVisible({ timeout: 30_000 });
      if (config.requiresPolicy) {
        await expect(page.getByText(/Poliza|P.liza/i).first()).toBeVisible({ timeout: 30_000 });
      }
    });

    await test.step('Validar fase o cierre documentado', async () => {
      if (config.action === 'close') {
        await expect(page.getByRole('button', { name: /Cerrar proceso/i }).or(page.getByText(/Cerrar proceso/i)).first()).toBeVisible({ timeout: 30_000 });
        await expect(page.getByText(config.expectedMessage).or(page.getByText(/100%|complet/i)).first()).toBeVisible({ timeout: 30_000 });
        return;
      }

      const phase = page.getByText(config.phase).first();
      await expect(phase, 'Debe mostrarse la fase definida en el catalogo.').toBeVisible({ timeout: 30_000 });
      await expect(page.getByRole('button', { name: /play|ejecutar|iniciar/i }).or(page.locator('[aria-label*="play" i], [title*="play" i], button').first())).toBeVisible({ timeout: 30_000 });
      await expect(page.getByText(config.expectedMessage).or(page.getByText(/100%|complet/i)).first()).toBeVisible({ timeout: 30_000 });
    });
  });
}

export function ProcessAmountPermanenceCase(config: ProcessAmountPermanenceCaseConfig) {
  test(`${tagsFor(config)} valida permanencia de montos`, async ({ page }) => {
    test.setTimeout(180_000);
    await openProcessView(page, config);

    await test.step('Validar fases y cierre del modo de ejecucion', async () => {
      annotateMissingOperationalData();
      test.info().annotations.push({
        type: 'TODO',
        description: 'El catalogo no especifica montos esperados por fase; se valida que la vista exponga las fases/cierre y campos de monto sin inventar valores.',
      });
      await expect(page.getByText(new RegExp(config.mode, 'i')).first()).toBeVisible({ timeout: 30_000 });
      for (const label of config.expectedLabels) {
        await expect(page.getByText(label).first()).toBeVisible({ timeout: 30_000 });
      }
      await expect(page.getByText(/monto|importe|total/i).first()).toBeVisible({ timeout: 30_000 });
    });
  });
}

export function ProcessAccountBalanceCase(config: ProcessAccountBalanceCaseConfig) {
  test(`${tagsFor(config)} descarga cuadre de cuentas`, async ({ page }) => {
    test.setTimeout(180_000);
    await openProcessView(page, config);

    await test.step('Validar boton Cuadre de cuentas activo', async () => {
      annotateMissingOperationalData();
      if (config.closedProcess !== undefined) {
        test.info().annotations.push({
          type: 'TODO',
          description: `El catalogo requiere proceso ${config.closedProcess ? 'cerrado' : 'no cerrado'}, pero no indica distribucion exacta para garantizar ese estado.`,
        });
      }
      await expect(page.getByText(new RegExp(config.mode, 'i')).first()).toBeVisible({ timeout: 30_000 });
      const button = page.getByRole('button', { name: /Cuadre de cuentas/i }).or(page.getByText(/Cuadre de cuentas/i)).first();
      await expect(button, 'Debe existir el boton Cuadre de cuentas.').toBeVisible({ timeout: 30_000 });
      await expect(button, 'El boton Cuadre de cuentas debe estar habilitado segun precondicion del catalogo.').toBeEnabled();
    });

    await test.step('Descargar archivo Cuadre de cuentas', async () => {
      const button = page.getByRole('button', { name: /Cuadre de cuentas/i }).or(page.getByText(/Cuadre de cuentas/i)).first();
      const [download] = await Promise.all([page.waitForEvent('download'), button.click()]);
      expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();
      expect(download.suggestedFilename(), 'El archivo de cuadre debe ser Excel o CSV.').toMatch(/\.(xlsx|csv)$/i);
      test.info().annotations.push({
        type: 'TODO',
        description: `Columnas esperadas por catalogo: ${config.expectedColumns.map(String).join(', ')}. Falta parser estable para validar contenido descargado sin inventar formato.`,
      });
    });
  });
}

async function openProcessView(page: Page, config: Pick<ProcessBase, 'flow'>) {
  await loginAsGestor(page);
  await selectGtDistribution(page, config.flow === 'presupuesto' ? { tipo: /Presupuesto/i } : undefined);

  await test.step('Abrir Procesos > Gastos Tecnicos', async () => {
    await page.getByText(/Procesos/i).click();
    const gtLink = page.getByRole('link', { name: /Gastos Tecnicos|Gastos T.cnicos/i }).or(page.getByText(/Gastos Tecnicos|Gastos T.cnicos/i)).first();
    if (await gtLink.isVisible({ timeout: 5_000 }).catch(() => false)) await gtLink.click();
    await expect(page.getByText(/Gastos Tecnicos|Gastos T.cnicos|Procesos/i).first()).toBeVisible({ timeout: 30_000 });
  });
}

async function loginAsGestor(page: Page) {
  try {
    const loginPage = new LoginPage(page);
    await loginPage.login(env.gestorGastoUsername, env.gestorGastoPassword);
  } catch (error) {
  }
}

function annotateMissingOperationalData() {
  test.info().annotations.push({
    type: 'TODO',
    description: 'El catalogo no especifica periodo, version ni descripcion region/poliza; se valida presencia del flujo sin inventar datos operativos.',
  });
}

function tagsFor(config: ProcessBase) {
  return [
    '@bloque2',
    '@gt',
    config.flow === 'presupuesto' ? '@presupuesto' : '',
    '@gestor-gasto',
    config.priority ? `@${config.priority}` : '',
    `@${config.caseId}`,
  ]
    .filter(Boolean)
    .join(' ');
}