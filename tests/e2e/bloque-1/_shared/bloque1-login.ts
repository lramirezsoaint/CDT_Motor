import { expect } from '@fixtures/base.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import type { Page } from '@playwright/test';
import { goToComunesView } from './comunes-upload';

export const adminCredentials = {
 username: env.username,
 password: env.password,
};

export async function loginAsAdmin(page: Page) {
 const loginPage = new LoginPage(page);
 await loginPage.login(adminCredentials.username, adminCredentials.password);
 await expect(page, 'El Administrador debe acceder correctamente a Distribuciones.').toHaveURL(/\/distribuciones/i, {
 timeout: 40_000,
 });
}

export async function expectAdminSidebarUser(page: Page) {
 const sidebar = page.locator('[data-sidebar="sidebar"], aside').first();
 await expect(sidebar, 'Debe mostrarse el sidebar autenticado.').toBeVisible({ timeout: 15_000 });
 await expect(sidebar, 'El sidebar debe mostrar el rol administrador.').toContainText(/Administrador/i, { timeout: 15_000 });
 const userTrigger = page.getByTestId('sidebar-user-trigger').first();
 await expect(userTrigger, 'Debe mostrarse el usuario en el sidebar.').toBeVisible({ timeout: 15_000 });
 await userTrigger.click();
 await expect(page.getByText(adminCredentials.username, { exact: false }), 'El perfil debe mostrar el correo del administrador.').toBeVisible({
 timeout: 15_000,
 });
 await page.keyboard.press('Escape');
}

export async function expectAdminCanOpenComunes(page: Page) {
 const views = [
 { menu: 'Líneas', route: 'comunes/lineas' },
 { menu: 'Grupo Producto', route: 'comunes/grupo-producto' },
 { menu: 'Canales', route: 'comunes/canales' },
 { menu: 'Subcanales', route: 'comunes/subcanales' },
 { menu: 'Maestro UoA', route: 'comunes/maestro-uoa' },
 { menu: 'Unidades de Cuenta - BBA/VFA', route: 'comunes/unidades-cuenta-bba-vfa' },
 { menu: 'Configuración de Parches', route: 'comunes/configuracion-parches' },
 ];

 for (const view of views) {
 await goToComunesView(page, view.menu, view.route);
 await expect(page.getByRole('heading', { name: new RegExp(view.menu, 'i') })).toBeVisible({ timeout: 20_000 });
 }
}
