import { expect, Page, test, TestInfo } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistribution } from './gt-distribution';

type ProcessMode = 'Completo' | 'Resumido';

type ProcessActionBase = {
  caseId: string;
  mode: ProcessMode;
  role?: 'gestorGT';
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
  
   test.skip(`pendiente de liberación`, async () => {
        test.info().annotations.push({
          type: `${config.caseId}-pending`,
          description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
        });
      });
}

export function ProcessStopOrRestartCase(config: ProcessStopConfig) {
   test.skip(`pendiente de liberación`, async () => {
        test.info().annotations.push({
          type: `${config.caseId}-pending`,
          description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
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
   test.skip(`pendiente de liberación`, async () => {
        test.info().annotations.push({
          type: `pending`,
          description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
        });
      });
}

async function configurePhase3(page: Page, includePhase3: boolean) {
   test.skip(`pendiente de liberación`, async () => {
        test.info().annotations.push({
          type: `pending`,
          description: "Aun no se ha definido distribucion/version que garantice que el proceso pueda ejecutarse sin depender de datos vivos.",
        });
      });
}

function annotateProcessData(testInfo: TestInfo, description: string) {
  testInfo.annotations.push({ type: 'TODO', description });
}

function tagsFor(config: ProcessActionBase) {
  return [
    '@bloque2',
    '@gt',
    '@gestorGT',
    config.priority ? `@${config.priority}` : '',
    `@${config.caseId}`,
  ]
    .filter(Boolean)
    .join(' ');
}