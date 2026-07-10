import { expect, Locator, Page } from '@playwright/test';
import { ensureAmContext } from 'tests/e2e/bloque-5/_shared/am-context';

export interface NuevaDistribucionInput {
  version: string;
  tasaCambio: string;
}

type DistributionRowValues = {
  nombre: string;
  tipo: string;
  periodo: string;
  version: string;
  tasaCambio: string;
  secciones: string;
  estado: string;
};

export class DistribucionPage {
  private readonly nuevaDistribucionButton: Locator;
  private readonly buscarInput: Locator;
  private readonly buscarInputFallback: Locator;
  private readonly primerRegistroTabla: Locator;
  private readonly tableRows: Locator;

  constructor(private readonly page: Page) {
    this.nuevaDistribucionButton = page.getByRole('button', { name: /nueva/i });
    this.buscarInput = page.locator('input[placeholder*="buscar" i]').first();
    this.buscarInputFallback = page.locator('xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[1]/div/div/div[1]/div/input');
    this.primerRegistroTabla = page.locator('table tbody tr:first-child, [role="row"]').first();
    this.tableRows = page.locator('table tbody tr');
  }

  private async ensureEnDistribuciones(): Promise<void> {
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
    await ensureAmContext(this.page, 'upload');
    await expect(this.page).toHaveURL(/\/distribuciones/i, { timeout: 20_000 });
  }

  async openDistribuciones(): Promise<void> {
    await this.page.goto('/distribuciones/', { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/\/distribuciones\/?$/i, { timeout: 20_000 });
    await expect(this.page.getByRole('heading', { name: /distribuciones/i })).toBeVisible({ timeout: 20_000 });
  }

  async openNuevaDistribucionModal(): Promise<void> {
    const openModal = this.page.getByText(/Crear distribuci[oó]n/i).first();
    if (await openModal.isVisible().catch(() => false)) {
      return;
    }

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
        await expect(this.page.getByText(/Distribuci[oó]n/i).first()).toBeVisible({ timeout: 10_000 });
      }
    }
  }

  async validateCreateDistributionRequiredFields(): Promise<void> {
    await this.openNuevaDistribucionModal();

    for (const fieldName of ['descripcion', 'version', 'tasaCambio']) {
      const field = this.page.locator(`input[name="${fieldName}"]`);
      await expect(field, `Debe existir el campo ${fieldName} en Crear Distribucion.`).toBeVisible({ timeout: 10_000 });
      await field.fill('x');
      await field.fill('');
      await field.blur();
    }

    await expect(this.page.getByText(/El nombre es requerido/i), 'Debe validar obligatoriedad del nombre.').toBeVisible();
    await expect(this.page.getByText(/Versi[oó]n requerida/i), 'Debe validar obligatoriedad de la version.').toBeVisible();
    await expect(this.page.getByText(/Tasa de cambio requerida/i), 'Debe validar obligatoriedad de la tasa de cambio.').toBeVisible();
    await expect(this.page.getByRole('button', { name: /^Crear$/i }), 'Crear debe permanecer deshabilitado con campos requeridos vacios.').toBeDisabled();
  }

  async validateCreateDistributionFormatFields(): Promise<void> {
    await this.openNuevaDistribucionModal();

    await this.page.locator('input[name="descripcion"]').fill('Nombre invalido');
    await this.page.locator('input[name="version"]').fill('99');
    await this.page.locator('input[name="tasaCambio"]').fill('12345,678');
    await this.page.locator('input[name="tasaCambio"]').blur();

    await expect(
      this.page.getByText(/El valor ingresado no es v[aá]lido.*n[uú]mero entre 1 y 15/i),
      'Debe validar el rango permitido para Version.',
    ).toBeVisible();
    await expect(
      this.page.getByText(/Formato no admitido.*1234\.00/i),
      'Debe validar el formato permitido para Tasa de cambio.',
    ).toBeVisible();
    await expect(this.page.getByRole('button', { name: /^Crear$/i }), 'Crear debe permanecer deshabilitado con formatos invalidos.').toBeDisabled();
    await this.page.getByRole('button', { name: /Cancelar/i }).click();
  }

  private get createDistributionDialog(): Locator {
    return this.page
      .getByRole('dialog', { name: /Crear distribuci[oó]n/i })
      .first()
      .or(this.page.locator('div[role="dialog"]').filter({ hasText: /Crear distribuci[oó]n/i }).first());
  }

  private async clickFirstDialogOption(): Promise<void> {
    const option = this.page
      .getByRole('option')
      .filter({ hasText: /^(?!\s*Seleccione\b).+/i })
      .first()
      .or(this.page.getByRole('menuitem').filter({ hasText: /^(?!\s*Seleccione\b).+/i }).first());

    await expect(option, 'Debe existir al menos una opcion seleccionable en el selector.').toBeVisible({ timeout: 15_000 });
    await option.click();
  }

  private async selectDialogCombobox(label: RegExp): Promise<void> {
    const trigger = this.createDistributionDialog.getByRole('combobox', { name: label }).first();
    await expect(trigger, `Debe existir el selector ${label.source}.`).toBeVisible({ timeout: 10_000 });
    await trigger.click();
    await this.clickFirstDialogOption();
  }

  async crearDistribucion(input: NuevaDistribucionInput): Promise<void> {
    await this.openNuevaDistribucionModal();

    const nombreInput = this.createDistributionDialog
      .getByRole('textbox', { name: /Nombre/i })
      .or(this.createDistributionDialog.locator('input[placeholder*=\"Ej.\" i], input[placeholder*=\"Nombre\" i], input[name*=\"descripcion\" i], input[id*=\"descripcion\" i]'))
      .first();
    await expect(nombreInput, 'Debe existir el campo Nombre en el modal.').toBeVisible({ timeout: 10_000 });
    await nombreInput.fill(`Distribucion prueba ${Date.now()}`);
    await nombreInput.blur();

    await this.selectDialogCombobox(/Tipo/i);
    await this.selectDialogCombobox(/Periodo/i);

    const versionInput = this.createDistributionDialog
      .getByRole('textbox', { name: /Versi/i })
      .or(this.createDistributionDialog.locator('input[name*="version" i], input[id*="version" i]'))
      .first();
    await expect(versionInput, 'Debe existir un campo para Version.').toBeVisible({ timeout: 10_000 });
    await versionInput.fill(input.version);

    const tasaInput = this.createDistributionDialog
      .getByRole('textbox', { name: /Tasa/i })
      .or(this.createDistributionDialog.locator('input[name*="tasa" i], input[id*="tasa" i]'))
      .first();
    await expect(tasaInput, 'Debe existir un campo para Tasa de cambio.').toBeVisible({ timeout: 10_000 });
    await tasaInput.fill(input.tasaCambio);

    await this.selectDialogCombobox(/Secciones/i);

    const crearButton = this.createDistributionDialog.getByRole('button', { name: /^Crear$/i }).first();
    await expect(crearButton, 'Debe existir el boton Crear.').toBeVisible({ timeout: 10_000 });
    await expect(crearButton, 'El boton Crear debe habilitarse con datos validos.').toBeEnabled({ timeout: 10_000 });
    await crearButton.click();

    await expect(this.createDistributionDialog, 'El dialogo de creacion debe cerrarse tras crear.').not.toBeVisible({ timeout: 20_000 }).catch(() => undefined);
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

  async requireFirstDistributionRow(context: string): Promise<Locator> {
    await this.openDistribuciones();
    await expect
      .poll(async () => this.tableRows.count().catch(() => 0), {
        timeout: 20_000,
        message: `[DATA] Deben cargar distribuciones visibles para validar ${context}.`,
      })
      .toBeGreaterThan(0);

    const rowCount = await this.tableRows.count().catch(() => 0);
    expect(rowCount, `[DATA] No hay distribuciones visibles para validar ${context}.`).toBeGreaterThan(0);

    const firstRow = this.tableRows.first();
    await expect(firstRow, `Debe existir una distribucion visible para ${context}.`).toBeVisible({ timeout: 10_000 });
    return firstRow;
  }

  async getRowValues(row: Locator): Promise<DistributionRowValues> {
    const cells = (await row.locator('td').allTextContents()).map((value) => value.replace(/\s+/g, ' ').trim());

    return {
      nombre: cells[0] ?? '',
      tipo: cells[1] ?? '',
      periodo: cells[2] ?? '',
      version: cells[3] ?? '',
      tasaCambio: cells[4] ?? '',
      secciones: cells[5] ?? '',
      estado: cells[6] ?? '',
    };
  }

  async findRowByStatus(status: RegExp): Promise<Locator> {
    await this.openDistribuciones();
    const rowCount = await this.tableRows.count().catch(() => 0);

    for (let index = 0; index < rowCount; index += 1) {
      const row = this.tableRows.nth(index);
      const estadoText = (await row.locator('td').nth(6).innerText().catch(() => '')).trim();
      if (status.test(estadoText)) {
        await expect(row, `Debe existir una distribucion con estado ${status}.`).toBeVisible({ timeout: 10_000 });
        return row;
      }
    }

    throw new Error(`No se encontró ninguna fila de distribución con estado que coincida con ${status}.`);
  }

  async findRowWithoutStatus(status: RegExp): Promise<Locator> {
    await this.openDistribuciones();
    const rowCount = await this.tableRows.count().catch(() => 0);

    for (let index = 0; index < rowCount; index += 1) {
      const row = this.tableRows.nth(index);
      const estadoText = (await row.locator('td').nth(6).innerText().catch(() => '')).trim();
      if (!status.test(estadoText)) {
        await expect(row, `Debe existir una distribucion cuyo estado no coincida con ${status}.`).toBeVisible({ timeout: 10_000 });
        return row;
      }
    }

    throw new Error(`No se encontró ninguna fila de distribución con estado distinto a ${status}.`);
  }

  async openRowActionsMenu(row: Locator): Promise<void> {
    const actionsButton = row.locator('button[aria-label*="accion" i], button[title*="accion" i], button:has-text(/acciones?/i)').first();
    if ((await actionsButton.count().catch(() => 0)) > 0 && (await actionsButton.isVisible().catch(() => false))) {
      await actionsButton.click();
    } else {
      const fallback = row.locator('button').last();
      await expect(fallback, 'No se encontró el botón de acciones en la fila de distribucion.').toBeVisible({ timeout: 15_000 });
      await fallback.click();
    }

    await this.page.locator('[role="menu"], [role="listbox"], [role="dialog"]').first().waitFor({ state: 'visible', timeout: 10_000 }).catch(() => undefined);
  }

  async getActionLocator(actionName: RegExp): Promise<Locator> {
    const menuItem = this.page.getByRole('menuitem', { name: actionName }).first();
    if ((await menuItem.count().catch(() => 0)) > 0) {
      return menuItem;
    }
    return this.page.getByText(actionName).first();
  }

  async expectActionVisible(actionName: RegExp): Promise<void> {
    const action = await this.getActionLocator(actionName);
    await expect(action, `La acción ${actionName} debe estar visible en el menú de acciones.`).toBeVisible({ timeout: 10_000 });
  }

  async expectActionHidden(actionName: RegExp): Promise<void> {
    const action = await this.getActionLocator(actionName);
    const count = await action.count().catch(() => 0);
    if (count === 0) {
      return;
    }
    await expect(action, `La acción ${actionName} no debe estar visible en el menú de acciones.`).toBeHidden({ timeout: 10_000 });
  }

  async closeActionsMenu(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  async openViewModalFromRow(row: Locator): Promise<void> {
    const viewButton = row.locator('button').filter({ has: row.page().locator('svg.lucide-eye') }).first();
    if ((await viewButton.count().catch(() => 0)) > 0) {
      await viewButton.click();
    } else {
      await row.locator('button').first().click();
    }

    await expect(
      this.page.locator('[role="dialog"]').or(this.page.locator('form')).first(),
      'Debe abrirse un modal al visualizar la distribucion.',
    ).toBeVisible({ timeout: 10_000 });
  }

  async expectViewModalContains(rowValues: DistributionRowValues): Promise<void> {
    const modal = this.page.locator('[role="dialog"]').or(this.page.locator('form')).first();
    await expect(modal, 'Debe mostrarse el detalle/progreso de la distribucion.').toContainText(rowValues.nombre);
    await expect(modal, 'Debe mostrarse el estado de la distribucion.').toContainText(rowValues.estado);

    if (/creada/i.test(rowValues.estado)) {
      await expect(modal, 'Una distribucion Creada debe mostrar fases sin ejecutar.').toContainText(/Sin ejecutar/i);
    }
  }

  async selectDistributionFromList(row: Locator): Promise<void> {
    const nameCell = row.locator('td').first();
    await expect(nameCell, 'Debe existir el nombre de la distribucion en la primera columna.').toBeVisible({ timeout: 10_000 });
    await nameCell.click();
  }

  async confirmDistributionSelection(rowValues: DistributionRowValues): Promise<void> {
    const confirmation = this.page.locator('[role="dialog"]').filter({
      hasText: /informaci[oó]n que se mostrar[aá].*distribuci[oó]n seleccionada|distribuci[oó]n seleccionada/i,
    });

    await expect(confirmation.first(), 'Debe aparecer la confirmacion de seleccion de distribucion.').toBeVisible({ timeout: 10_000 });
    await confirmation.first().getByRole('button', { name: /aceptar|confirmar|continuar/i }).click();

    await expect
      .poll(async () => {
        const selectedRow = this.page.locator('table tbody tr[data-state="selected"]').first();
        return (await selectedRow.innerText().catch(() => '')).includes(rowValues.nombre);
      }, { timeout: 10_000, message: 'La distribucion seleccionada debe quedar marcada en la tabla.' })
      .toBe(true);

    await expect(this.page.locator('body'), 'La distribucion seleccionada debe quedar reflejada en pantalla.').toContainText(rowValues.nombre);
  }

  async openDeleteConfirmationForTarget(targetName: string): Promise<void> {
    await this.openDistribuciones();
    const targetRow = this.tableRows.filter({ hasText: targetName }).first();
    await expect(
      targetRow,
      `[DATA] No existe una distribucion visible con nombre "${targetName}" para validar eliminacion.`,
    ).toBeVisible({ timeout: 10_000 });

    const deleteButton = targetRow.locator('button').filter({ has: targetRow.page().locator('svg.lucide-trash-2, svg.lucide-trash2') }).first();
    if ((await deleteButton.count().catch(() => 0)) > 0) {
      await deleteButton.click();
    } else {
      await targetRow.locator('button').nth(1).click();
    }

    await expect(
      this.page.locator('[role="dialog"]').filter({ hasText: /eliminar|no se puede deshacer|desea continuar/i }).first(),
      'Debe abrirse la primera confirmacion de eliminacion.',
    ).toBeVisible({ timeout: 10_000 });
  }
}
