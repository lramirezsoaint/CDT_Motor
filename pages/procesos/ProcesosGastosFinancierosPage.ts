import { expect, Locator, Page } from '@playwright/test';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';

export interface ProcesoGastosFinancierosInput {
  periodo: string;
  version: string;
  modo: string;
  regiones: string[];
}

export class ProcesosGastosFinancierosPage {
  constructor(private readonly page: Page) {}

  private get procesoHeading(): Locator {
    return this.page.getByRole('heading', { name: /^Procesos$/i }).first();
  }

  private get periodoInput(): Locator {
    return this.page.getByRole('textbox').first();
  }

  private get versionInput(): Locator {
    return this.page.getByRole('textbox').nth(1);
  }

  private get modoCombobox(): Locator {
    return this.page.getByRole('combobox').first();
  }

  private get descripcionRegionTrigger(): Locator {
    return this.page
      .getByText(/^Descripci[oó]n Regi[oó]n$/i)
      .first()
      .locator('xpath=following::button[1]');
  }

  private get regionDropdown(): Locator {
    return this.page.locator('[data-radix-popper-content-wrapper]').filter({ hasText: /Exactus|AMED|AP Vida/i }).last();
  }

  private get ejecutarTodoButton(): Locator {
    return this.page.getByRole('button', { name: /Ejecutar Todo/i });
  }

  private get patchQuestion(): Locator {
    const dialog = this.page.getByRole('dialog').last();
    return dialog
      .getByText(/Desea aplicar el parche a la informaci[oó]n procesada/i)
      .or(dialog.getByText(/Desea aplicar cambios en la informaci[oó]n obtenida/i))
      .first();
  }

  private get noPatchButton(): Locator {
    return this.page.getByRole('button', { name: /^No$/i });
  }

  async open(): Promise<void> {
    await this.ensureAuthenticated();
    await this.selectGastosFinancierosModule();
    await this.selectRealFlow();
    await this.openProcesosSection();
  }

  async configure(input: ProcesoGastosFinancierosInput): Promise<void> {
    await expect(this.periodoInput).toBeVisible({ timeout: 20_000 });
    await expect(this.versionInput).toBeVisible({ timeout: 10_000 });
    // TODO: la grabación más reciente muestra Periodo y Versión deshabilitados.
    // Revisar más adelante si estos campos vuelven a ser editables o si el caso debe
    // adaptarse a un comportamiento de solo lectura en el frontend actual.

    await this.modoCombobox.click();
    await this.page.getByRole('option', { name: new RegExp(input.modo, 'i') }).click();
    await expect(this.page.getByRole('main')).toContainText(new RegExp(input.modo, 'i'));

    const regionTrigger = await this.openRegionSelector();
    for (const region of input.regiones) {
      const checkbox = this.regionDropdown.getByRole('checkbox', { name: new RegExp(region, 'i') });
      await expect(checkbox).toBeVisible({ timeout: 10_000 });
      if (!(await checkbox.isChecked().catch(() => false))) {
        await checkbox.check({ force: true });
      }
      await expect(checkbox).toBeChecked();
    }
    await this.closeRegionSelector(regionTrigger);
  }

  async selectFase3(): Promise<void> {
    const fase3Heading = this.page.getByText(/^FASE 3$/i).first();
    const fase3BusinessText = this.page.getByText(/Distribuir Objetos de Costo a Unidades de Cuenta/i).first();
    const fase3Container = this.page
      .locator('div.min-w-0')
      .filter({ has: this.page.getByText(/^FASE 3$/i) })
      .filter({ has: this.page.getByText(/^Distribuir Objetos de Costo a Unidades de Cuenta$/i) })
      .first();
    const fase3CheckboxLabel = fase3Container
      .locator('label[aria-label="Distribuir Objetos de Costo a Unidades de Cuenta"], label[aria-label="Distribuir Objetos de Costo a Unidades de Cuenta (bloqueada)"]')
      .first();
    const fase3Checkbox = fase3CheckboxLabel.locator('input[type="checkbox"]').first();
    const fase3CheckIcon = fase3CheckboxLabel.locator('svg').first();

    await expect(fase3Heading, 'Debe existir el encabezado de FASE 3 antes de continuar con la ejecución.').toBeVisible({
      timeout: 20_000,
    });
    await fase3Heading.scrollIntoViewIfNeeded().catch(() => undefined);
    await expect(fase3BusinessText).toBeVisible({ timeout: 10_000 });
    await expect(fase3Container, 'No se encontró el bloque visual de FASE 3 en la pantalla.').toBeVisible({
      timeout: 10_000,
    });
    await fase3Container.scrollIntoViewIfNeeded().catch(() => undefined);
    await expect(
      fase3CheckboxLabel,
      'No se encontró el label del checkbox de FASE 3 dentro del bloque visual esperado.'
    ).toBeVisible({ timeout: 10_000 });
    await expect(fase3Checkbox, 'Debe existir el input del checkbox de FASE 3.').toBeAttached({
      timeout: 10_000,
    });

    if (!(await fase3Checkbox.isChecked().catch(() => false))) {
      await fase3CheckboxLabel.click({ timeout: 10_000 });
    }

    await expect(fase3Checkbox, 'El checkbox de FASE 3 debe quedar marcado antes de continuar.').toBeChecked({
      timeout: 10_000,
    });
    await expect(fase3CheckboxLabel).toHaveClass(/border-red-500/, { timeout: 10_000 });
    await expect(fase3CheckIcon).toHaveClass(/text-red-500/, { timeout: 10_000 });
  }

  async executeAllWithoutPatch(): Promise<void> {
    await expect(this.ejecutarTodoButton).toBeVisible({ timeout: 15_000 });
    await expect(this.ejecutarTodoButton).toBeEnabled({ timeout: 15_000 });
    await this.ejecutarTodoButton.click();

    await expect(this.patchQuestion.first()).toBeVisible({ timeout: 15_000 });
    await expect(this.noPatchButton).toBeVisible({ timeout: 10_000 });
    await this.noPatchButton.click();
    await expect(this.noPatchButton).toBeHidden({ timeout: 15_000 });
    await expect(this.patchQuestion.first()).toBeHidden({ timeout: 15_000 });
    // TODO: el ambiente tarda en reflejar el 100% de las fases tras responder "No".
    // Mantener esta espera explícita mientras el frontend no exponga una señal más precisa.
    await this.page.waitForTimeout(15_000);
  }

  async assertExecutionStagesVisible(): Promise<void> {
    await expect(this.page.getByText(/FASE 1/i)).toBeVisible({ timeout: 10_000 });
    await expect(this.page.getByText(/FASE 2/i)).toBeVisible({ timeout: 10_000 });
    await expect(this.page.getByText(/FASE 3/i)).toBeVisible({ timeout: 10_000 });
    await expect(this.page.getByText(/FASE CIERRE/i)).toBeVisible({ timeout: 10_000 });
  }

  async assertPhase3BusinessContext(): Promise<void> {
    await expect(this.page.getByText(/Distribuir Objetos de Costo a Unidades de Cuenta/i)).toBeVisible({
      timeout: 15_000,
    });
  }

  async assertExpectedProgressAfterSkippingPatch(): Promise<void> {
    const completedPhases = [
      /Distribuci[oó]n preliminar/i,
      /Obtencion de Lineas, Grupo Productos y Canales/i,
      /Obtencion de Subcanales \+ Distribucion CECOs Vida/i,
      /Distribuir Objetos de Costo a Unidades de Cuenta/i,
      /Ejecutar Cierre/i,
    ];

    for (const phase of completedPhases) {
      const phaseCard = this.page.locator('div').filter({ hasText: phase }).first();
      await expect(phaseCard, `La fase ${phase} debe llegar a 100% tras ejecutar el proceso.`).toContainText('100%', {
        timeout: 30_000,
      });
    }

    const patchPhaseCard = this.page.locator('div').filter({ hasText: /Aplicar Parches/i }).first();
    await expect(patchPhaseCard, 'La fase Aplicar Parches debe permanecer en 0% cuando se responde "No".').toContainText(
      '0%',
      { timeout: 30_000 }
    );
  }

  private async ensureAuthenticated(): Promise<void> {
    const loginPage = new LoginPage(this.page);
    await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    if (await loginPage.isLoginPage()) {
      await loginPage.login(env.username, env.password);
    }
    await loginPage.assertAuthenticated();
  }

  private async selectRealFlow(): Promise<void> {
    const flowTrigger = this.page
      .locator('header')
      .getByRole('button')
      .filter({ hasText: /REAL|PRESUPUESTO|LOCAL|NIIF/i })
      .first();
    const realBadge = flowTrigger.locator('span').filter({ hasText: /^REAL$/i }).first();

    await expect(flowTrigger).toBeVisible({ timeout: 10_000 });
    await flowTrigger.click({ timeout: 10_000 });

    const flowDropdown = this.page
      .locator('[data-radix-popper-content-wrapper]')
      .filter({ hasText: /REAL|PRESUPUESTO|LOCAL|NIIF/i })
      .last();
    await expect(flowDropdown).toBeVisible({ timeout: 10_000 });

    const realOption = flowDropdown
      .locator('div[role="menuitem"], [role="option"]')
      .filter({
        has: this.page.locator('span').filter({ hasText: /^REAL$/i }),
      })
      .first();

    await expect(realOption).toBeVisible({ timeout: 10_000 });
    await realOption.click({ timeout: 10_000 });
    await expect(realBadge).toBeVisible({ timeout: 15_000 });
    await expect(flowDropdown).toBeHidden({ timeout: 10_000 });
  }

  private async selectGastosFinancierosModule(): Promise<void> {
    const moduleTrigger = this.page
      .locator('header')
      .getByRole('button')
      .filter({ hasText: /Gastos Financieros|Asientos Manuales|Gastos Generales|Gastos T[eé]cnicos/i })
      .first();

    await expect(moduleTrigger).toBeVisible({ timeout: 10_000 });
    await moduleTrigger.click({ timeout: 10_000 });

    const moduleDropdown = this.page
      .locator('[data-radix-popper-content-wrapper]')
      .filter({ hasText: /Gastos Financieros|Asientos Manuales/i })
      .last();
    await expect(moduleDropdown).toBeVisible({ timeout: 10_000 });

    const gastosFinancierosOption = moduleDropdown.locator('div[role="menuitem"]').filter({ hasText: /^Gastos Financieros$/i }).first();
    await expect(gastosFinancierosOption).toBeVisible({ timeout: 10_000 });
    await gastosFinancierosOption.click({ timeout: 10_000 });
    await expect(moduleTrigger).toContainText(/Gastos Financieros/i, { timeout: 15_000 });
  }

  private async openProcesosSection(): Promise<void> {
    const procesosSection = this.page
      .getByRole('listitem')
      .filter({ has: this.page.getByRole('button', { name: /^Procesos$/i }).first() })
      .first();
    const procesosToggle = procesosSection.getByRole('button', { name: /^Procesos$/i }).first();

    await expect(procesosToggle).toBeVisible({ timeout: 15_000 });
    await procesosToggle.click({ timeout: 10_000 });

    const procesosLink = procesosSection
      .locator('a[href="/procesos/procesos/"]')
      .or(procesosSection.getByRole('link', { name: /^Procesos$/i }))
      .first();

    if (await procesosLink.isVisible({ timeout: 8_000 }).catch(() => false)) {
      await procesosLink.click({ timeout: 10_000 });
    } else {
      throw new Error('No apareció el submenú "Procesos" después de expandir la sección Procesos del menú lateral.');
    }

    await expect(this.procesoHeading).toBeVisible({ timeout: 20_000 });
  }

  private async openRegionSelector(): Promise<Locator> {
    const selectedRegionsButton = this.descripcionRegionTrigger;
    await expect(selectedRegionsButton).toBeVisible({ timeout: 10_000 });
    await selectedRegionsButton.click({ timeout: 5_000 });
    const regionCheckbox = this.regionDropdown.getByRole('checkbox', { name: /Exactus/i });
    await expect(regionCheckbox, 'El combo de Descripción Región debe exponer sus opciones al abrirse.').toBeVisible({
      timeout: 10_000,
    });
    return selectedRegionsButton;

  }

  private async closeRegionSelector(selectedRegionsButton: Locator): Promise<void> {
    if (!(await this.regionDropdown.isVisible({ timeout: 2_000 }).catch(() => false))) {
      return;
    }

    await selectedRegionsButton.click({ timeout: 5_000 }).catch(() => undefined);

    if (await this.regionDropdown.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await this.page.keyboard.press('Escape').catch(() => undefined);
    }

    await expect(this.regionDropdown, 'El selector de regiones debe quedar cerrado antes de continuar con FASE 3.').toBeHidden({
      timeout: 10_000,
    });
  }

}
