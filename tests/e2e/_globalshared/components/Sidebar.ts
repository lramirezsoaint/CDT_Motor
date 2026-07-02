import { expect, Locator, Page } from '@playwright/test';
import { legacySelectors } from '../selectors/legacy-selectors';

export class Sidebar {
 constructor(private readonly page: Page) {}

 public async ensureMenuOpen(): Promise<void> {
 const toggleSidebar = this.page.getByRole('button', { name: /toggle sidebar/i });
 if (await toggleSidebar.isVisible().catch(() => false)) {
 await toggleSidebar.click();
 }
 }

 async openComunes(): Promise<void> {
 await this.ensureMenuOpen();
 await this.page.waitForTimeout(200);

 const comunesToggle = this.page
 .getByRole('button', { name: /comunes/i })
 .or(this.page.getByRole('link', { name: /comunes/i }))
 .or(this.page.getByText(/comunes/i));

 if (await comunesToggle.first().isVisible({ timeout: 8_000 }).catch(() => false)) {
 await comunesToggle.first().click({ timeout: 10_000 }).catch(() => undefined);
 return;
 }

 const legacyToggle = this.page.locator(legacySelectors.sidebar.comunesToggle);
 if (await legacyToggle.isVisible({ timeout: 8_000 }).catch(() => false)) {
 await legacyToggle.click({ timeout: 12_000 });
 }
 }

 async goToLineas(): Promise<void> {
 await this.page.locator('aside, nav').first().waitFor({ state: 'visible', timeout: 15_000 });
 await this.ensureMenuOpen();

 const parametrizacionBtn = this.page
 .getByRole('button', { name: /parametrizaci\u00f3n/i })
 .or(this.page.getByText(/parametrizaci\u00f3n/i));
 if (await parametrizacionBtn.first().isVisible({ timeout: 8_000 }).catch(() => false)) {
 await parametrizacionBtn.first().click({ timeout: 10_000 });
 } else {
 await this.openComunes();
 }

 const lineasLink = this.page.getByRole('link', { name: /l[i\u00ed]neas/i }).or(this.page.getByText(/l[i\u00ed]neas/i));
 if (await lineasLink.first().isVisible({ timeout: 8_000 }).catch(() => false)) {
 await lineasLink.first().click({ timeout: 10_000 });
 } else {
 await this.page.locator(legacySelectors.sidebar.lineas).click({ timeout: 12_000 });
 }

 await this.page.waitForLoadState('networkidle');
 }

 async goToGrupoProducto(): Promise<void> {
 await this.openComunes();
 try {
 await this.page.getByRole('link', { name: /grupo producto/i }).click();
 } catch {
 await this.page.locator(legacySelectors.sidebar.grupoProducto).click();
 }
 }

 async goToCanales(): Promise<void> {
 await this.openComunes();
 try {
 await this.page.getByRole('link', { name: /canales/i }).click();
 } catch {
 await this.page.locator(legacySelectors.sidebar.canales).click();
 }
 }

 async goToSubcanales(): Promise<void> {
 await this.openComunes();
 try {
 await this.page.getByRole('link', { name: /subcanales/i }).click();
 } catch {
 await this.page.locator(legacySelectors.sidebar.subcanales).click();
 }
 }

 userNameLocator(): Locator {
 return this.page.getByTestId('sidebar-user-name').or(
 this.page.locator('aside').filter({ hasText: /@/ }).locator('strong, span').first()
 );
 }

 userEmailLocator(email: string): Locator {
 return this.page.getByText(email, { exact: false });
 }

 async assertUserInfo(nameShouldContain: string, email: string): Promise<void> {
 await this.ensureMenuOpen();
 const userToggle = this.page
 .getByRole('button', { name: /usuario|perfil|account|psilvestre|silvestre/i })
 .or(this.page.locator('button[aria-label*=account i], button[aria-label*=perfil i]'))
 .or(this.page.locator('aside button').last());
 if (await userToggle.first().isVisible({ timeout: 5_000 }).catch(() => false)) {
 await userToggle.first().click({ timeout: 5_000 }).catch(() => undefined);
 }

 const emailLocator = this.userEmailLocator(email);
 await emailLocator.first().scrollIntoViewIfNeeded().catch(() => undefined);
 await expect(emailLocator).toBeVisible({ timeout: 15_000 });

 const nameLocator = this.page.getByText(new RegExp(nameShouldContain, 'i'), { exact: false }).first();
 await nameLocator.scrollIntoViewIfNeeded().catch(() => undefined);
 const nameText = (await nameLocator.innerText()).toLowerCase();
 expect(nameText).toContain(nameShouldContain.toLowerCase());
 }

 async openDistribuciones(): Promise<void> {
 await this.ensureMenuOpen();
 const distribucionesLink = this.page
 .getByRole('link', { name: /distribuciones/i })
 .or(this.page.getByText(/distribuciones/i))
 .first();
 await expect(distribucionesLink, 'Debe existir el link de Distribuciones en el sidebar.').toBeVisible({ timeout: 10_000 });
 await distribucionesLink.click();
 await this.page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
 }

}
