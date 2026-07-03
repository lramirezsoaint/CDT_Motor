import { expect, Page } from '@playwright/test';
import { env } from '@config/env';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
  }

  async isLoginPage(): Promise<boolean> {
    const microsoftButton = this.page.getByRole('button', { name: /iniciar sesi\u00f3n/i }).or(
      this.page.getByText(/inicia sesi\u00f3n/i),
    );
    return microsoftButton.first().isVisible().catch(() => false);
  }

  async login(username: string, password: string): Promise<void> {
    await this.goto();
    await this.loginWithMicrosoft(username, password);
  }

  async loginWithMicrosoft(username: string, password: string): Promise<void> {
    const entryButton = this.page.getByRole('button', { name: /iniciar sesi[o\u00f3]n/i });

    try {
      await entryButton.first().waitFor({ state: 'visible', timeout: 30_000 });
      await entryButton.first().click();
    } catch (error) {
      if (this.isDistribucionesUrl()) {
        // Si ya estamos autenticados, validamos la pantalla real de la app.
        await this.waitForDistribucionesReady();
        return;
      }

      if (this.isAppLoginUrl()) {
        throw new Error(
          `Login no pudo continuar: estamos en ${this.page.url()} pero no aparecio el boton Iniciar sesion.`,
        );
      }

      throw error;
    }

    await this.page.waitForURL(/login\.microsoftonline\.com|\.pacificotest\.com\.pe\/login/, { timeout: 60_000 });
    if (this.isDistribucionesUrl()) {
      await this.waitForDistribucionesReady();
      return;
    }

    try {
      const emailInput = this.page
        .getByRole('textbox', { name: /enter your email, phone, or/i })
        .or(this.page.locator('#i0116'));
      await emailInput.first().waitFor({ state: 'visible', timeout: 20_000 });
      await emailInput.first().fill(username);
      await this.page.getByRole('button', { name: /next/i }).first().click();
    } catch (error) {
      if (this.isDistribucionesUrl()) {
        await this.waitForDistribucionesReady();
        return;
      }
      console.error('Error occurred while filling email:', error);
    }

    if (this.isDistribucionesUrl()) {
      await this.waitForDistribucionesReady();
      return;
    }

    const passwordInput = this.page
      .getByRole('textbox', { name: /enter the password for/i })
      .or(this.page.locator('#i0118'));
    await passwordInput.first().waitFor({ state: 'visible', timeout: 20_000 });
    await passwordInput.first().fill(password);
    await this.page.getByRole('button', { name: /(sign in|iniciar sesi[o\u00f3]n|next)/i }).first().click();

    const staySignedIn = this.page.getByRole('button', { name: /(yes|si)/i }).or(this.page.locator('#idSIButton9'));
    try {
      await staySignedIn.first().waitFor({ state: 'visible', timeout: 20_000 });
      await staySignedIn.first().click();
    } catch {
      // prompt may not appear
    }

    await this.waitForDistribucionesReady();
  }

  async assertAuthenticated(): Promise<void> {
    await expect(this.page).toHaveURL(/\/distribuciones\/?(?:\?|#|$)/i, { timeout: 40_000 });
    await expect(this.page.getByText(/distribuci\u00f3n/i).first()).toBeVisible({ timeout: 40_000 });
  }

  private async waitForDistribucionesReady(): Promise<void> {
    await this.page.waitForURL(/\/distribuciones/i, { timeout: 60_000 });

    const distribucionesScreen = this.page
      .getByRole('heading', { name: /distribuciones/i })
      .or(this.page.locator('aside, nav'))
      .or(this.page.locator('main, [data-testid*="distribution" i], [data-testid*="distribucion" i]'))
      .first();

    await expect(
      distribucionesScreen,
      'Debe estar visible la pantalla principal de Distribuciones despues del login.',
    ).toBeVisible({ timeout: 60_000 });
  }

  private isDistribucionesUrl(): boolean {
    return /\/distribuciones/i.test(this.page.url());
  }

  private isAppLoginUrl(): boolean {
    return /\/login/i.test(this.page.url());
  }
}
