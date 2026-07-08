import { expect } from '@fixtures/base.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import type { Page } from '@playwright/test';

type Credentials = {
  username: string;
  password: string;
};

export const adminCredentials: Credentials = {
  username: env.username,
  password: env.password,
};

export const gestorAmCredentials: Credentials = {
  username: env.gestorAMUsername,
  password: env.gestorAMPassword,
};

export async function loginAndAssertDistribuciones(page: Page, credentials: Credentials, roleName: string): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.login(credentials.username, credentials.password);

  await expect(page, `El usuario ${roleName} debe acceder correctamente al sistema.`).toHaveURL(/\/distribuciones/i, {
    timeout: 40_000,
  });
  await expect(
    page.getByRole('heading', { name: /distribuciones/i }).or(page.locator('aside, nav')).first(),
    `Debe cargarse el shell autenticado para ${roleName}.`,
  ).toBeVisible({ timeout: 40_000 });
}

export async function assertSidebarUserInfo(page: Page, email: string, expectedRole: RegExp): Promise<void> {
  const sidebar = page
  .locator('[data-sidebar="sidebar"], aside')
  .filter({ has: page.getByTestId('sidebar-user-trigger') })
  .first();

const userTrigger = sidebar.getByTestId('sidebar-user-trigger');

  await expect(
    userTrigger,
    'Debe mostrarse el usuario autenticado en el sidebar.'
  ).toBeVisible();

  await expect(userTrigger).toContainText(/Gestor|Administrador de gastos/i);

  await expect(userTrigger, 'El sidebar debe mostrar el acceso al perfil del usuario.').toBeVisible({ timeout: 15_000 });
  await expect(sidebar, 'El sidebar debe mostrar el rol del usuario autenticado.').toContainText(expectedRole, {
    timeout: 15_000,
  });

  await userTrigger.click();
  await expect(page.getByText(email, { exact: false }), 'Al abrir el perfil debe mostrarse el correo del usuario.').toBeVisible({
    timeout: 15_000,
  });
  await expect(
    page.getByRole('menuitem', { name: /cerrar sesi[oó]n/i }).or(page.getByText(/cerrar sesi[oó]n/i)).first(),
    'Al abrir el perfil debe mostrarse la accion de cerrar sesion.',
  ).toBeVisible({ timeout: 15_000 });
    await page.keyboard.press('Escape');
}

export async function assertGestorAmShellRestrictions(page: Page): Promise<void> {
  const amPage = new Bloque5AsientosManualesPage(page);
  await amPage.assertAsientosManualesShellReady();
  await amPage.assertComunesHiddenForAsientosManuales();

  const moduleTrigger = page
    .locator('[data-testid="header-expense-type-trigger"]')
    .or(page.getByRole('button', { name: /Asientos Manuales/i }))
    .first();

  await expect(moduleTrigger, 'El selector superior debe mostrar Asientos Manuales por defecto.').toContainText(
    /Asientos Manuales/i,
    { timeout: 20_000 },
  );

  if (await moduleTrigger.isEnabled().catch(() => false)) {
    await moduleTrigger.click();
    const otherExpenseTypes = page
      .getByRole('option', { name: /Gastos Financieros|Gastos T[eé]cnicos|Gestor de Gastos/i })
      .or(page.getByRole('menuitem', { name: /Gastos Financieros|Gastos T[eé]cnicos|Gestor de Gastos/i }))
      .first();
    await expect(otherExpenseTypes, 'Gestor AM no debe poder seleccionar otro tipo de gasto.').toBeHidden({
      timeout: 5_000,
    });
    await page.keyboard.press('Escape');
  }
}

export async function assertComunesNotVisibleForGestorAm(page: Page): Promise<void> {
  const amPage = new Bloque5AsientosManualesPage(page);
  await amPage.assertComunesHiddenForAsientosManuales();
}

export async function assertDeleteHiddenInViews(
  page: Page,
  sectionName: string,
  viewNames: string[],
  flowName: string,
): Promise<void> {
  const amPage = new Bloque5AsientosManualesPage(page);

  for (const viewName of viewNames) {
    await amPage.openSidebarView(sectionName, viewName);
    await amPage.assertDeleteActionHiddenInCurrentView(`${flowName} > ${viewName}`);
  }
}
