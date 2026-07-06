import { expect, Locator, Page } from '@playwright/test';

export class Bloque5AsientosManualesPage {
  constructor(private readonly page: Page) {}

  private get moduleTrigger(): Locator {
    return this.page
      .locator('[data-testid="header-expense-type-trigger"]')
      .or(this.page.getByRole('button', { name: /Asientos Manuales/i }))
      .or(this.page.getByText(/Asientos Manuales/i))
      .first();
  }

  private get table(): Locator {
    return this.page.locator('table, [role="table"]').first();
  }

  private get tableRows(): Locator {
    return this.page.locator('table tbody tr');
  }

  async assertAsientosManualesShellReady(): Promise<void> {
    await expect(this.page, 'Debe acceder a Distribuciones.').toHaveURL(/\/distribuciones/i, { timeout: 40_000 });
    await expect(this.moduleTrigger, 'El selector superior debe quedar en Asientos Manuales.').toHaveText(
      /Asientos Manuales/i,
      { timeout: 20_000 },
    );

    await this.assertSidebarSections(['Parametrización', 'Aprovisionamiento', 'Asignaciones', 'Procesos']);
  }

  async assertSidebarSections(sectionNames: string[]): Promise<void> {
    const shell = this.page.locator('aside, nav').first();
    await expect(shell, 'Debe existir sidebar de navegacion.').toBeVisible({ timeout: 20_000 });

    for (const sectionName of sectionNames) {
      const section = this.page
        .getByRole('button', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') })
        .or(this.page.getByRole('link', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') }))
        .first();
      await expect(section, `Debe existir la seccion ${sectionName} en el sidebar AM.`).toBeVisible({ timeout: 15_000 });
    }
  }

  async assertComunesHiddenForAsientosManuales(): Promise<void> {
    const comunesEntry = this.page
      .getByRole('button', { name: /^Comunes$/i })
      .or(this.page.getByRole('link', { name: /^Comunes$/i }))
      .or(this.page.getByText(/^Comunes$/i))
      .first();

    await expect(comunesEntry, 'El flujo Comunes no debe contaminar el shell de Asientos Manuales.').toBeHidden({
      timeout: 10_000,
    });
  }

  async openSidebarView(sectionName: string, itemName: string): Promise<void> {
    const section = this.page
      .getByRole('listitem')
      .filter({ has: this.page.getByRole('button', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') }) })
      .first();
    const sectionButton = section.getByRole('button', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') }).first();

    await expect(sectionButton, `Debe existir la seccion ${sectionName} en el menu lateral.`).toBeVisible({ timeout: 15_000 });
    await sectionButton.click();

    const itemPattern = new RegExp(itemName, 'i');
    const scopedItem = section.getByRole('link', { name: itemPattern }).or(section.getByRole('button', { name: itemPattern })).first();
    const globalItem = this.page.getByRole('link', { name: itemPattern }).or(this.page.getByRole('button', { name: itemPattern })).first();
    const targetItem = (await scopedItem.isVisible({ timeout: 5_000 }).catch(() => false)) ? scopedItem : globalItem;

    await expect(targetItem, `Debe existir la opcion ${itemName} en ${sectionName}.`).toBeVisible({ timeout: 15_000 });
    await targetItem.click();
    await this.page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
  }

  private escapeRegex(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
