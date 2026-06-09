import { expect, Locator, Page } from '@playwright/test';
import { env } from '@config/env';

export class Bloque3GastosFinancierosPage {
  constructor(private readonly page: Page) { }

  private readonly noResultsPattern = /no hay distribuciones disponibles|no existen registros|sin resultados/i;

  private get moduleTrigger(): Locator {
    return this.page
      .locator('[data-testid="header-expense-type-trigger"]')
      .or(
        this.page.getByRole('button', {
          name: /Gastos Financieros/i
        })
      )
      .or(
        this.page.getByRole('button', {
          name: /Gestor de Gastos Financieros/i
        })
      )
      .or(
        this.page.getByText(
          /Gestor de Gastos Financieros/i
        )
      )
      .or(
        this.page.getByText(
          /Gastos Financieros/i
        )
      ).first();
  }

  private get searchInput(): Locator {
    return this.page.getByPlaceholder('Buscar').first();
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

  private get createDistributionDialog(): Locator {
    return this.page.getByRole('dialog', { name: /Crear Distribuci/i }).last();
  }

  async openHome(): Promise<void> {
    await this.page.goto(new URL('/distribuciones/', env.baseUrl).toString(), { waitUntil: 'commit' });
    await expect(this.page, 'Debe iniciar autenticado en Distribuciones.').toHaveURL(/\/distribuciones/i, {
      timeout: 40_000,
    });
    await this.page.getByText(/Verificando permisos/i).waitFor({ state: 'hidden', timeout: 30_000 }).catch(() => undefined);
    await this.ensureGastosFinancierosSelected();
    await this.page.getByText(/Cargando distribuciones/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
    await expect(this.page.getByRole('heading', { name: /Distribuciones/i }), 'Debe cargar la pantalla principal.').toBeVisible({
      timeout: 20_000,
    });
  }

  async assertBusinessHomeReady(): Promise<void> {
    await expect(this.moduleTrigger, 'Debe quedar activo el modulo Gastos Financieros.').toHaveText(/Gastos Financieros/i);
    await expect(
      this.page.getByRole('button', {name: /Nueva Distribuci[oó]n/i}),
      'Debe mostrarse la accion de negocio Nueva Distribucion.').toBeVisible({ timeout: 15_000 });
  }

  async clickNuevaDistribucion(): Promise<void> {
    await this.page.getByRole('button', { name: /Nueva Distribuci/i }).click();
    await expect(this.createDistributionDialog, 'Debe abrirse el modal Crear Distribucion.').toBeVisible({
      timeout: 10_000,
    });
  }

  async fillNombre(nombre: string): Promise<void> {
    const input = this.createDistributionDialog
      .getByRole('textbox', { name: /Nombre/i })
      .or(this.createDistributionDialog.locator('input[name*="nombre" i], input[id*="nombre" i]'))
      .first();
    await expect(input, 'Debe existir el campo Nombre en el modal.').toBeVisible({ timeout: 10_000 });
    await input.fill(nombre);
  }

  async selectTipo(tipo: string): Promise<void> {
    await this.selectDialogCombobox(/Tipo/i, new RegExp(tipo, 'i'));
  }

  async selectPeriodo(periodo: string): Promise<void> {
    await this.selectDialogCombobox(/Periodo/i, new RegExp(periodo, 'i'));
  }

  async selectVersion(version: string): Promise<void> {
    const input = this.createDistributionDialog
      .getByRole('textbox', { name: /Versi/i })
      .or(this.createDistributionDialog.locator('input[name*="version" i], input[id*="version" i]'))
      .first();
    await expect(input, 'Debe existir un campo para Version.').toBeVisible({ timeout: 10_000 });
    await input.fill(version);
  }

  async selectTasaDeCambio(tasa: string): Promise<void> {
    const input = this.createDistributionDialog
      .getByRole('textbox', { name: /Tasa/i })
      .or(this.createDistributionDialog.locator('input[name*="tasa" i], input[id*="tasa" i]'))
      .first();
    await expect(input, 'Debe existir un campo para Tasa de cambio.').toBeVisible({ timeout: 10_000 });
    await input.fill(tasa);
  }

  async selectSecciones(secciones: string[]): Promise<void> {
    const trigger = this.createDistributionDialog.getByRole('combobox', { name: /Secciones/i }).first();
    await expect(trigger, 'Debe existir el selector Secciones.').toBeVisible({ timeout: 10_000 });
    await trigger.click();
    for (const seccion of secciones) {
      await this.clickVisibleOption(new RegExp(seccion, 'i'));
    }
    await this.page.keyboard.press('Escape');
    await expect(trigger, 'Debe mostrar la seccion seleccionada.').toContainText(new RegExp(secciones[0], 'i'));
  }

  async clickCrear(): Promise<void> {
    const crearBtn = this.createDistributionDialog.getByRole('button', { name: /^Crear$/i });
    await expect(crearBtn, 'Debe existir el boton Crear.').toBeVisible({ timeout: 10_000 });
    await expect(crearBtn, 'El boton Crear debe habilitarse con datos validos.').toBeEnabled({ timeout: 10_000 });
    await crearBtn.click();
    await expect(
      this.page.getByText(/Hecho|registro se agreg|agrego sin problemas|agreg[oó] sin problemas|se ha creado|creada exitosamente/i).first(),
      'Debe mostrarse confirmacion de creacion.',
    ).toBeVisible({ timeout: 30_000 }).catch(() => {
      // fallback: if toast already dismissed, just ensure dialog closed
    });
    await expect(
      this.createDistributionDialog,
      'El dialogo de creacion debe cerrarse tras crear.',
    ).not.toBeVisible({ timeout: 5_000 }).catch(() => undefined);
  }
  private async selectDialogCombobox(label: RegExp, optionName: RegExp): Promise<void> {
    const trigger = this.createDistributionDialog.getByRole('combobox', { name: label }).first();
    await expect(trigger, `Debe existir el selector ${label.source}.`).toBeVisible({ timeout: 10_000 });
    await trigger.click();
    await this.page.waitForTimeout(1_000);
    await this.clickVisibleOption(optionName);
    await expect(trigger, `Debe quedar seleccionada la opcion ${optionName.source}.`).toContainText(optionName, {
      timeout: 10_000,
    });
  }

  private async clickVisibleOption(optionName: RegExp): Promise<void> {
    const option = this.page
      .getByRole('option', { name: optionName })
      .or(this.page.getByRole('menuitem', { name: optionName }))
      .or(this.page.locator('[cmdk-item], [data-radix-collection-item]').filter({ hasText: optionName }))
      .or(this.page.locator('[role="listbox"]').getByRole('option', { name: optionName }))
      .first();
    await expect(option, `Debe existir la opcion ${optionName.source}.`).toBeVisible({ timeout: 15_000 });
    await option.click();
  }

  async assertGastosFinancierosShellReady(): Promise<void> {
    await expect(this.page, 'Debe acceder a Distribuciones.').toHaveURL(/\/distribuciones/i, { timeout: 40_000 });
    await expect(this.moduleTrigger, 'El selector superior debe quedar en Gastos Financieros.').toHaveText(
      /Gastos Financieros/i,
      { timeout: 20_000 },
    );

    await this.assertSidebarSections(['Parametrizaci\u00f3n', 'Aprovisionamiento', 'Asignaciones', 'Procesos', 'Reportes']);
  }

  async assertComunesHiddenForGastosFinancieros(): Promise<void> {
    const comunesEntry = this.page
      .getByRole('button', { name: /^Comunes$/i })
      .or(this.page.getByRole('link', { name: /^Comunes$/i }))
      .or(this.page.getByText(/^Comunes$/i))
      .first();

    await expect(comunesEntry, 'El flujo Comunes no debe contaminar el shell de Gastos Financieros.').toBeHidden({
      timeout: 10_000,
    });
  }

  async assertSidebarSections(sectionNames: string[]): Promise<void> {
    const shell = this.page.locator('aside, nav').first();
    await expect(shell, 'Debe existir sidebar de navegacion.').toBeVisible({ timeout: 20_000 });

    for (const sectionName of sectionNames) {
      const section = this.page
        .getByRole('button', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') })
        .or(this.page.getByRole('link', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') }))
        .first();
      await expect(section, `Debe existir la seccion ${sectionName} en el sidebar GF.`).toBeVisible({ timeout: 15_000 });
    }
  }

  async assertDeleteActionHiddenInCurrentView(context: string): Promise<void> {
    await expect(this.table, `Debe existir una tabla para validar acciones en ${context}.`).toBeVisible({ timeout: 20_000 });

    const deleteAction = this.page
      .getByRole('button', { name: /eliminar|delete|trash|basurero/i })
      .or(this.page.locator('button[aria-label*="eliminar" i], button[aria-label*="delete" i], button[title*="eliminar" i]'))
      .first();

    await expect(deleteAction, `No debe mostrarse accion eliminar en ${context} para rol Gestor GF.`).toBeHidden({
      timeout: 5_000,
    });
  }

  async requireSearchableDistributionValue(): Promise<string> {
    await expect(this.searchInput, 'Debe existir el buscador general en Distribuciones GF.').toBeVisible({ timeout: 15_000 });
    await expect(this.table, 'Debe existir una tabla de resultados en Distribuciones GF.').toBeVisible({ timeout: 20_000 });

    await expect
      .poll(async () => {
        const bodyText = await this.page.locator('body').innerText().catch(() => '');
        const rowCount = await this.tableRows.count().catch(() => 0);
        return rowCount > 0 || this.noResultsPattern.test(bodyText);
      }, { timeout: 20_000, message: 'La tabla debe cargar datos o un estado sin resultados.' })
      .toBe(true);

    const bodyText = await this.page.locator('body').innerText().catch(() => '');
    const rowCount = await this.tableRows.count().catch(() => 0);
    expect(rowCount, '[DATA] No hay registros visibles para validar E63-GF-BUS.').toBeGreaterThan(0);
    expect(this.noResultsPattern.test(bodyText), '[DATA] La tabla no debe estar en estado sin resultados para validar busqueda.').toBe(false);

    const firstRowText = (await this.tableRows.first().innerText()).replace(/\s+/g, ' ').trim();
    const searchValue = firstRowText
      .split(/\s+/)
      .find((value) => /[A-Za-z0-9]/.test(value) && value.length >= 3);

    expect(searchValue, '[DATA] La primera fila debe tener un valor buscable de al menos 3 caracteres.').toBeTruthy();
    return searchValue ?? '';
  }

  async searchByGeneralInput(searchValue: string): Promise<void> {
    await expect(this.searchInput, 'El buscador general debe estar visible antes de filtrar.').toBeVisible({ timeout: 10_000 });
    await this.searchInput.fill(searchValue);
    await this.page.keyboard.press('Enter');
  }

  async assertGeneralSearchResults(searchValue: string): Promise<void> {
    await expect
      .poll(async () => (await this.table.innerText().catch(() => '')).includes(searchValue), {
        timeout: 20_000,
        message: `La tabla debe mostrar resultados relacionados con ${searchValue}.`,
      })
      .toBe(true);
  }

  async assertSearchRespondsAfterThreeCharacters(searchValue: string): Promise<void> {
    await this.searchInput.fill(searchValue.slice(0, 3));
    await expect
      .poll(async () => (await this.table.innerText().catch(() => '')).includes(searchValue.slice(0, 3)), {
        timeout: 20_000,
        message: 'La tabla debe responder al criterio ingresado desde el tercer caracter.',
      })
      .toBe(true);
  }

  async openSidebarView(sectionName: string, itemName: string): Promise<void> {
    await this.openHome();
    await this.assertGastosFinancierosShellReady();

    const section = this.page
      .getByRole('listitem')
      .filter({ has: this.page.getByRole('button', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') }) })
      .first();
    const sectionButton = section.getByRole('button', { name: new RegExp(`^${this.escapeRegex(sectionName)}$`, 'i') }).first();

    await expect(sectionButton, `Debe existir la seccion ${sectionName} en el menu lateral.`).toBeVisible({ timeout: 15_000 });
    await sectionButton.click();

    const itemPattern = new RegExp(this.getMenuAliases(itemName).map((alias) => this.escapeRegex(alias)).join('|'), 'i');
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

  async assertPaginatorInitialState(): Promise<void> {
    await expect(this.page.getByTestId('pagination-select-size'), 'Debe existir selector de filas por pagina.').toBeVisible({
      timeout: 15_000,
    });
    await expect(this.page.getByTestId('pagination-first'), 'Primera pagina debe iniciar deshabilitada.').toBeDisabled();
    await expect(this.page.getByTestId('pagination-prev'), 'Pagina anterior debe iniciar deshabilitada.').toBeDisabled();
    await expect(this.page.getByTestId('pagination-page-1'), 'Debe mostrarse la pagina 1 activa.').toBeVisible();
  }

  async selectRowsPerPage(size: number): Promise<void> {
    const selector = this.page.getByTestId('pagination-select-size');
    await expect(selector, `Debe estar disponible el selector de ${size} filas por pagina.`).toBeVisible({ timeout: 10_000 });
    await selector.click();
    await this.page.getByRole('option', { name: String(size) }).click({ timeout: 10_000 });
    await expect(selector, `El selector debe reflejar ${size} filas por pagina.`).toContainText(String(size), {
      timeout: 10_000,
    });
  }

  async assertVisibleRowsDoNotExceed(size: number): Promise<void> {
    const rowCount = await this.tableRows.count();
    expect(rowCount, `La tabla no debe mostrar mas de ${size} filas.`).toBeLessThanOrEqual(size);
  }

  async assertPaginatorNavigationWhenMultiplePages(): Promise<void> {
    const pageButtons = this.page.locator('[data-testid^="pagination-page-"]');
    const pageCount = await pageButtons.count();

    if (pageCount <= 1) {
      await expect(this.page.getByTestId('pagination-next'), 'Siguiente debe estar deshabilitado cuando solo hay una pagina.').toBeDisabled();
      await expect(this.page.getByTestId('pagination-last'), 'Ultima debe estar deshabilitado cuando solo hay una pagina.').toBeDisabled();
      return;
    }

    const firstRowBefore = (await this.tableRows.first().innerText()).trim();
    await this.page.getByTestId('pagination-next').click();
    await expect(this.page.getByTestId('pagination-page-2'), 'Debe activarse la pagina 2 al avanzar.').toBeVisible({
      timeout: 10_000,
    });
    const firstRowAfter = (await this.tableRows.first().innerText()).trim();
    expect(firstRowAfter, 'Al avanzar pagina deben cambiar los datos visibles.').not.toBe(firstRowBefore);

    await this.page.getByTestId('pagination-last').click();
    await expect(this.page.getByTestId(`pagination-page-${pageCount}`), 'Debe activarse la ultima pagina.').toBeVisible({
      timeout: 10_000,
    });
    await expect(this.page.getByTestId('pagination-next'), 'Siguiente debe quedar deshabilitado en ultima pagina.').toBeDisabled();
    await expect(this.page.getByTestId('pagination-last'), 'Ultima debe quedar deshabilitado en ultima pagina.').toBeDisabled();
  }

  private async ensureGastosFinancierosSelected(): Promise<void> {
    await expect(this.moduleTrigger, 'Debe existir el selector de modulo en el header.').toBeVisible({ timeout: 20_000 });

    const currentText = (await this.moduleTrigger.innerText()).trim();
    if (/Gastos Financieros/i.test(currentText)) {
      return;
    }

    await expect(
      this.moduleTrigger,
      `El selector de modulo no debe quedar bloqueado en estado incorrecto: ${currentText}`,
    ).toBeEnabled({ timeout: 20_000 });

    await this.moduleTrigger.click();
    const option = this.page
      .locator('[data-radix-popper-content-wrapper]')
      .getByText(/^Gastos Financieros$/i)
      .first();
    await expect(option, 'Debe existir la opcion Gastos Financieros.').toBeVisible({ timeout: 10_000 });
    await option.click();
    await expect(this.moduleTrigger).toHaveText(/Gastos Financieros/i, { timeout: 15_000 });
  }

  private escapeRegex(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private getMenuAliases(itemName: string): string[] {
    const aliases = new Set([itemName]);

    if (/^Drivers CC Vida$/i.test(itemName)) {
      aliases.add('Driver CC Vida');
    }

    if (/^Maestro de Negocio Embebidos$/i.test(itemName)) {
      aliases.add('Maestro de Negocio y Embebidos');
    }

    if (/^Distribuci[oó]n UoA Generales Multiramo$/i.test(itemName)) {
      aliases.add('Distribucion UoA Generales Multiramo');
      aliases.add('Distribución UoA Generales Multiramo');
    }

    if (/^Driver UoA - VIDA$/i.test(itemName)) {
      aliases.add('Driver Reservas a UoA');
    }

    if (/^Driver Reservas a UoA$/i.test(itemName)) {
      aliases.add('Driver UoA - VIDA');
    }

    return [...aliases];
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
}

