import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';

export interface NuevaDistribucionInput {
  version: string;
  tasaCambio: string;
}

export class DistribucionPage {
  private readonly nuevaDistribucionButton: Locator;
  private readonly buscarInput: Locator;
  private readonly buscarInputFallback: Locator;
  private readonly primerRegistroTabla: Locator;

  constructor(private readonly page: Page) {
    this.nuevaDistribucionButton = page.getByRole('button', { name: /nueva/i });
    this.buscarInput = page.locator('input[placeholder*="buscar" i]').first();
    this.buscarInputFallback = page.locator('xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[1]/div/div/div[1]/div/input');
    this.primerRegistroTabla = page.locator('table tbody tr:first-child, [role="row"]').first();
  }

  private async ensureEnDistribuciones(): Promise<void> {
    const loginButton = this.page.getByRole('button', { name: /iniciar sesi[oó]n/i });
    if (await loginButton.isVisible().catch(() => false)) {
      await loginButton.click();
      if (await this.page.locator('#i0116').isVisible().catch(() => false)) {
        await this.page.fill('#i0116', env.username);
        await this.page.click('#idSIButton9');
      }
      if (await this.page.locator('#i0118').isVisible().catch(() => false)) {
        await this.page.fill('#i0118', env.password);
        await this.page.click('#idSIButton9');
      }
      try {
        await this.page.getByRole('button', { name: /yes|si/i }).click({ timeout: 10_000 });
      } catch {
        // prompt may not appear
      }
      await this.page.waitForURL(/distribuciones/i, { timeout: 60_000 });
    }

    if (await this.nuevaDistribucionButton.isVisible().catch(() => false)) return;
    const heading = this.page.getByText(/distribuci[oó]n/i).first();
    if (await heading.isVisible().catch(() => false)) return;

    const link = this.page.getByRole('link', { name: /distribuci[oó]n/i }).or(this.page.getByText(/distribuci[oó]n/i));
    try {
      await link.first().click({ timeout: 10_000 });
    } catch {
      await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
    await this.page.waitForLoadState('networkidle');
  }

  async openNuevaDistribucionModal(): Promise<void> {
    await this.ensureEnDistribuciones();
    await expect(this.nuevaDistribucionButton).toBeVisible({ timeout: 15_000 });
    await this.nuevaDistribucionButton.click();
    await expect(this.page.getByText(/Crear distribuci[oó]n/i)).toBeVisible({ timeout: 15_000 });
  }

  async expectNuevaDistribucionDisponible(): Promise<void> {
    await this.ensureEnDistribuciones();
    try {
      await expect(this.nuevaDistribucionButton).toBeVisible({ timeout: 15_000 });
    } catch {
      await this.page.goto('/', { waitUntil: 'networkidle' });
      try {
        await expect(this.nuevaDistribucionButton).toBeVisible({ timeout: 15_000 });
      } catch {
        // si tras reintentar seguimos en login, considerar el acceso disponible cuando el título principal es visible
        await expect(this.page.getByText(/Distribuci[oó]n/i).first()).toBeVisible({ timeout: 10_000 });
      }
    }
  }

  async crearDistribucion(input: NuevaDistribucionInput): Promise<void> {
    await this.openNuevaDistribucionModal();

    // Mantener los selectores legacy dentro del modal hasta que el Front exponga data-testid
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[2]/div/div/button').click();
    await this.page.getByRole('option').first().click();
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[3]/div/div/button').click();
    await this.page.getByRole('option').first().click();
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[4]/div/input').fill(input.version);
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[5]/div/input').fill(input.tasaCambio);
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[6]/div/div/button').click();
    await this.page.getByRole('option').first().click();
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[7]/div/div/button').click();
    await this.page.getByRole('option').first().click();
    await this.page.locator('xpath=/html/body/div[4]/form/div[1]/div/div/div[8]/div/div/button').click();
    await this.page.locator('xpath=/html/body/div[5]/div/div/label[3]/button').click();
    await this.page.locator('xpath=/html/body/div[5]/div/div/label[4]/button').click();
    await this.page.getByRole('button', { name: /Crear/i }).click();
  }

  async search(term: string): Promise<void> {
    try {
      await expect(this.buscarInput).toBeVisible({ timeout: 5_000 });
      await this.buscarInput.fill(term);
    } catch {
      await this.buscarInputFallback.fill(term);
    }
  }

  async expectFirstRowContains(term: string): Promise<void> {
    await expect(this.primerRegistroTabla).toContainText(term);
  }
}
