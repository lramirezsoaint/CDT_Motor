import { expect, Page } from '@playwright/test';
import { env } from '@config/env';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
  }

  async isLoginPage(): Promise<boolean> {
    const microsoftButton = this.page.getByRole('button', { name: /iniciar sesi\u00f3n/i }).or(
      this.page.getByText(/inicia sesi\u00f3n/i)
    );
    return microsoftButton.first().isVisible().catch(() => false);
  }

  async login(username: string, password: string): Promise<void> {
    await this.goto();
    await this.loginWithMicrosoft(username, password);
  }

  async loginWithMicrosoft(username: string, password: string): Promise<void> {
    const entryButton = this.page
      .getByRole('button', { name: /iniciar sesi\u00f3n/i })
      .or(this.page.getByText(/iniciar sesi\u00f3n/i));

    try {
      await entryButton.first().waitFor({ state: 'visible', timeout: 30_000 });
      await entryButton.first().click();
    } catch {
      // si ya estamos autenticados, continuamos sin volver a hacer login
      return;
    }

    await this.page.waitForURL(/login\.microsoftonline\.com|\.pacificotest\.com\.pe\/login/, { timeout: 60_000 });

    const emailInput = this.page.locator('#i0116');
    await emailInput.waitFor({ state: 'visible', timeout: 20_000 });
    await emailInput.fill(username);
    await this.page.locator('#idSIButton9').click();

    const passwordInput = this.page.locator('#i0118');
    await passwordInput.waitFor({ state: 'visible', timeout: 20_000 });
    await passwordInput.fill(password);
    await this.page.locator('#idSIButton9').click();

    const staySignedIn = this.page.locator('#idSIButton9').or(this.page.getByRole('button', { name: /yes|si/i }));
    try {
      await staySignedIn.first().waitFor({ state: 'visible', timeout: 20_000 });
      await staySignedIn.first().click();
    } catch {
      // prompt may not appear
    }

    await this.page.waitForLoadState('networkidle');
    await this.page.waitForURL(/\/distribuciones/i, { timeout: 60_000 });
  }

  async assertAuthenticated(): Promise<void> {
    await expect(this.page).toHaveURL(/\/distribuciones\/?(?:\?|#|$)/i, { timeout: 40_000 });
    await expect(this.page.getByText(/distribuci\u00f3n/i).first()).toBeVisible({ timeout: 40_000 });
  }
}
