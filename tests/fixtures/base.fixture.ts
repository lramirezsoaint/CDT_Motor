import { test as base, expect, type Page, type TestInfo } from '@playwright/test';
import { ComunesPage } from '@pages/comunes/ComunesPage';
import { DistribucionPage } from '@pages/distribucion/DistribucionPage';
import { ProcesosGastosFinancierosPage } from '@pages/procesos/ProcesosGastosFinancierosPage';
import { Sidebar } from '@components/Sidebar';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { getRoleByProject } from '@config/roles';
import { buildDiagnosticErrorFromTestInfo } from '../e2e/_globalshared/diagnostics/diagnostic-error';

export const test = base.extend<{
  comunesPage: ComunesPage;
  distribucionPage: DistribucionPage;
  procesosGastosFinancierosPage: ProcesosGastosFinancierosPage;
  sidebar: Sidebar;
}>({
  page: async ({ page }, use, testInfo) => {
    try {
      await use(page);
    } catch (error) {
      const currentUrl = page.url?.();
      throw buildDiagnosticErrorFromTestInfo({ page, testInfo, originalError: error, currentUrl });
    }
  },
  comunesPage: async ({ page }, use) => {
    await use(new ComunesPage(page));
  },
  distribucionPage: async ({ page }, use) => {
    await use(new DistribucionPage(page));
  },
  procesosGastosFinancierosPage: async ({ page }, use) => {
    await use(new ProcesosGastosFinancierosPage(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new Sidebar(page));
  },
});

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('.', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
  await ensureStoredSessionFallback(page, testInfo);
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === testInfo.expectedStatus || testInfo.errors.length === 0) {
    return;
  }

  const originalError = testInfo.errors[0];
  if (String(originalError.message ?? '').includes('DIAGNÓSTICO')) {
    return;
  }

  const currentUrl = page.url?.();
  throw buildDiagnosticErrorFromTestInfo({ page, testInfo, originalError, currentUrl });
});

export { expect };

async function ensureStoredSessionFallback(page: Page, testInfo: TestInfo) {
  if (process.env.PW_AUTH_FALLBACK === 'false' || /@login|@admin/i.test(testInfo.title)) {
    return;
  }

  const role = getRoleByProject(testInfo.project.name);
  if (!role) {
    return;
  }

  const shell = authenticatedShell(page);
  if (/\/distribuciones/i.test(page.url()) && (await shell.isVisible({ timeout: 3_000 }).catch(() => false))) {
    return;
  }

  const loginPage = new LoginPage(page);
  const shouldLogin =
    isLoginUrl(page.url()) ||
    (await loginPage.isLoginPage()) ||
    !(await shell.isVisible({ timeout: 3_000 }).catch(() => false));

  if (!shouldLogin) {
    return;
  }

  const credentials = credentialsForRole(role.id);
  await loginPage.login(credentials.username, credentials.password);
  await expect(page, `Fallback de login debe autenticar el rol ${role.id}.`).toHaveURL(/\/distribuciones/i, {
    timeout: 60_000,
  });
  await expect(authenticatedShell(page), `Fallback de login debe dejar visible el shell para ${role.id}.`).toBeVisible({
    timeout: 60_000,
  });
}

function credentialsForRole(roleId: string) {
  const credentialsByRole: Record<string, { username: string; password: string }> = {
    admin: { username: env.username, password: env.password },
    gestorGF: { username: env.gestorGFUsername, password: env.gestorGFPassword },
    gestorGT: { username: env.gestorGTUsername, password: env.gestorGTPassword },
    gestorAM: { username: env.gestorAMUsername, password: env.gestorAMPassword },
  };
  const credentials = credentialsByRole[roleId];

  if (!credentials?.username || !credentials.password) {
    throw new Error(
      `No se puede ejecutar fallback de login para rol "${roleId}" porque faltan credenciales de entorno.`,
    );
  }

  return credentials;
}

function authenticatedShell(page: Page) {
  return page
    .getByTestId('sidebar-user-trigger')
    .or(page.getByRole('heading', { name: /distribuciones/i }))
    .or(page.locator('aside, nav'))
    .first();
}

function isLoginUrl(value: string) {
  return /login\.microsoftonline\.com|microsoftonline|\/login|signin|redirect=/i.test(value);
}
