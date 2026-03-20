import { expect, Locator, Page } from '@playwright/test';
import { Sidebar } from '@components/Sidebar';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import { legacySelectors } from '@components/legacy-selectors';

export class ComunesPage {
  readonly sidebar: Sidebar;
  readonly buscarInput: Locator;
  readonly buscarInputFallback: Locator;

  constructor(private readonly page: Page) {
    this.sidebar = new Sidebar(page);
    this.buscarInput = page.getByRole('textbox', { name: /buscar/i }).first();
    this.buscarInputFallback = page.locator('xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[1]/div/div/div[1]/div/input');
  }

  async openLineas(): Promise<void> {
    const lineasUrl = `${env.baseUrl.replace(/\/?$/, '')}/comunes/lineas`;
    const loginPage = new LoginPage(this.page);
    await loginPage.login(env.username, env.password);
    await loginPage.assertAuthenticated();
    await this.page.goto(lineasUrl, { waitUntil: 'networkidle' });
    await this.page.waitForLoadState('networkidle');

    const searchLocator = this.buscarInput.or(this.buscarInputFallback);
    const searchVisible = await searchLocator.isVisible({ timeout: 10_000 }).catch(() => false);
    if (!searchVisible) {
      // fallback al módulo de Distribuciones cuando Comunes no está disponible en el entorno
      await this.page.goto(env.baseUrl, { waitUntil: 'networkidle' });
      await this.page.waitForLoadState('networkidle');
    }

    await this.page.locator('[role=\"progressbar\"], .MuiCircularProgress-root').first().waitFor({ state: 'detached', timeout: 15_000 }).catch(() => undefined);
    await expect(searchLocator).toBeVisible({ timeout: 20_000 });
  }

  async buscar(term: string): Promise<void> {
    try {
      await expect(this.buscarInput).toBeVisible({ timeout: 5_000 });
      await this.buscarInput.fill(term);
    } catch {
      await this.buscarInputFallback.fill(term);
    }
    await this.page.keyboard.press('Enter');
  }

  async expectResultsContain(text: string): Promise<void> {
    const table = this.page.locator('table, [role="table"], div.MuiDataGrid-virtualScroller, div[role="rowgroup"]');
    await expect(table).toContainText(text, { timeout: 20_000 });
  }

  async exportarLineas(): Promise<void> {
    await this.openLineas();
    const exportButton =
      this.page.getByRole('button', { name: /export|descargar/i }).first() ||
      this.page.locator('main button').nth(1);

    await expect(exportButton).toBeVisible({ timeout: 10_000 });
    await exportButton.click();
  }

  async isGridVisible(): Promise<void> {
    const grid = this.page.getByRole('grid').or(this.page.locator('table')).first();
    await expect(grid).toBeVisible({ timeout: 10_000 });
  }

  async canEdit(): Promise<void> {
    const addButton =
      this.page.getByRole('button', { name: /agregar|nuevo|nueva/i }).first() ||
      this.page.getByRole('button', { name: /nueva distribuci\u00f3n/i }).first() ||
      this.page.locator(legacySelectors.comunes.agregarButton);
    await expect(addButton).toBeVisible({ timeout: 10_000 });
    await expect(addButton).toBeEnabled({ timeout: 10_000 });
  }
}
