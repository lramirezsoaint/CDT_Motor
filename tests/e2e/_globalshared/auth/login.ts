import { expect, Page } from '@fixtures/base.fixture';
import { LoginPage } from '@pages/auth/LoginPage';

export interface LoginCredentials {
 username: string;
 password: string;
}

export async function loginWithCredentials(page: Page, credentials: LoginCredentials): Promise<void> {
 const loginPage = new LoginPage(page);
 await loginPage.login(credentials.username, credentials.password);
}

export async function ensureLoggedIn(page: Page, credentials: LoginCredentials): Promise<void> {
 try {
 await loginWithCredentials(page, credentials);
 } catch {
 // Some tests start from a valid storageState and only need the URL assertion below.
 }

 await expect(page).toHaveURL(/\/distribuciones/i);
}
