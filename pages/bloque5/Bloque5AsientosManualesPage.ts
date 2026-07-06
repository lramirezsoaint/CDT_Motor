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

  private get columnToggleButton(): Locator {
    return this.page.getByTestId('table-column-toggle-trigger');
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

  async openColumnsMenu(): Promise<Locator> {
    await expect(this.columnToggleButton, 'Debe estar visible el boton Ver para gestionar columnas.').toBeVisible({
      timeout: 20_000,
    });

    const menu = this.page
      .getByRole('menu')
      .or(this.page.locator('[data-radix-popper-content-wrapper]'))
      .filter({ hasText: /Columnas/i })
      .last();

    await this.columnToggleButton.click();
    if (!(await menu.isVisible({ timeout: 5_000 }).catch(() => false))) {
      await this.columnToggleButton.click();
    }

    await expect(menu, 'Debe abrirse el modal/menu Columnas.').toBeVisible({ timeout: 10_000 });
    await expect(menu, 'El selector debe corresponder a Columnas.').toContainText(/Columnas/i);
    return menu;
  }

  async assertDefaultColumnsMarked(menu: Locator): Promise<void> {
    const defaultOptions = menu.getByRole('menuitemcheckbox').filter({ hasText: /Por Defecto/i });
    await expect(defaultOptions.first(), 'Debe existir al menos una columna marcada como Por Defecto.').toBeVisible({
      timeout: 10_000,
    });

    const count = await defaultOptions.count();
    expect(count, 'Debe existir al menos una columna por defecto en el selector.').toBeGreaterThan(0);

    for (let index = 0; index < Math.min(count, 5); index += 1) {
      const option = defaultOptions.nth(index);
      await expect(option, 'Las columnas por defecto deben estar marcadas.').toHaveAttribute('aria-checked', 'true');
    }
  }

  async selectFirstOptionalColumnAndApply(menu: Locator): Promise<string> {
    const options = menu.getByRole('menuitemcheckbox');
    const count = await options.count();

    for (let index = 0; index < count; index += 1) {
      const option = options.nth(index);
      const text = (await option.innerText()).replace(/\s+/g, ' ').trim();
      const checked = (await option.getAttribute('aria-checked')) === 'true';
      const isDefault = /Por Defecto/i.test(text);

      if (!checked && !isDefault && text) {
        await option.click();
        await expect(option, `Debe poder seleccionarse la columna opcional ${text}.`).toHaveAttribute('aria-checked', 'true');
        await menu.getByTestId('table-column-toggle-accept').click();
        await expect(menu, 'El selector de columnas debe cerrarse al aceptar.').toBeHidden({ timeout: 10_000 });
        return text.split(' ').filter(Boolean)[0] ?? text;
      }
    }

    throw new Error('[DATA] No hay columnas opcionales disponibles para seleccionar.');
  }

  async assertHeaderContains(columnLabel: string): Promise<void> {
    await expect
      .poll(async () => (await this.page.locator('table thead th, [role="columnheader"]').allTextContents()).join(' '), {
        timeout: 20_000,
        message: `La tabla debe mostrar la columna seleccionada ${columnLabel}.`,
      })
      .toContain(columnLabel);
  }

  async showAllColumnsAndApply(menu: Locator): Promise<number> {
    const options = menu.getByRole('menuitemcheckbox');
    const count = await options.count();
    expect(count, 'Debe existir al menos una columna configurable.').toBeGreaterThan(0);

    await this.assertDefaultColumnsMarked(menu);

    const showAll = menu
      .getByRole('menuitem', { name: /Mostrar todas/i })
      .or(menu.getByRole('button', { name: /Mostrar todas/i }))
      .or(menu.locator('[role="menuitem"]').filter({ hasText: /Mostrar todas/i }))
      .or(menu.locator('button').filter({ hasText: /Mostrar todas/i }))
      .or(menu.getByText(/Mostrar todas/i))
      .first();
    await expect(showAll, 'Debe existir la accion Mostrar todas en Columnas.').toBeVisible({ timeout: 10_000 });
    await showAll.click();

    for (let index = 0; index < count; index += 1) {
      const option = options.nth(index);
      await expect(option, 'Mostrar todas debe marcar cada columna disponible.').toHaveAttribute('aria-checked', 'true');
    }

    await this.acceptColumnsSelection(menu);
    return count;
  }

  async hideOptionalColumnsAndApply(menu: Locator): Promise<{ defaultCount: number; optionalCount: number }> {
    const options = menu.getByRole('menuitemcheckbox');
    const count = await options.count();
    expect(count, 'Debe existir al menos una columna configurable.').toBeGreaterThan(0);

    await this.assertDefaultColumnsMarked(menu);

    const hideAll = menu
      .getByRole('menuitem', { name: /Ocultar todas/i })
      .or(menu.getByRole('button', { name: /Ocultar todas/i }))
      .or(menu.locator('[role="menuitem"]').filter({ hasText: /Ocultar todas/i }))
      .or(menu.locator('button').filter({ hasText: /Ocultar todas/i }))
      .or(menu.getByText(/Ocultar todas/i))
      .first();
    await expect(hideAll, 'Debe existir la accion Ocultar todas en Columnas.').toBeVisible({ timeout: 10_000 });
    await hideAll.click();

    let defaultCount = 0;
    let optionalCount = 0;

    for (let index = 0; index < count; index += 1) {
      const option = options.nth(index);
      const text = (await option.innerText()).replace(/\s+/g, ' ').trim();
      const isDefault = /Por Defecto/i.test(text);

      if (isDefault) {
        defaultCount += 1;
        await expect(option, 'Ocultar todas debe conservar marcadas las columnas por defecto.').toHaveAttribute(
          'aria-checked',
          'true',
        );
      } else {
        optionalCount += 1;
        await expect(option, 'Ocultar todas debe desmarcar las columnas opcionales.').toHaveAttribute(
          'aria-checked',
          'false',
        );
      }
    }

    expect(defaultCount, 'Debe existir al menos una columna por defecto.').toBeGreaterThan(0);
    expect(optionalCount, 'Debe existir al menos una columna opcional para ocultar.').toBeGreaterThan(0);

    await this.acceptColumnsSelection(menu);
    return { defaultCount, optionalCount };
  }

  private async acceptColumnsSelection(menu: Locator): Promise<void> {
    const accept = menu
      .getByTestId('table-column-toggle-accept')
      .or(menu.getByRole('button', { name: /Aceptar/i }))
      .first();

    await expect(accept, 'Debe existir el boton Aceptar del selector de columnas.').toBeVisible({ timeout: 10_000 });
    await accept.click();
    await expect(menu, 'El selector de columnas debe cerrarse al aceptar.').toBeHidden({ timeout: 10_000 });
  }

  private escapeRegex(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
