import { expect, Locator, Page } from '@playwright/test';
import { env } from '@config/env';

export interface ProcesoGastosFinancierosInput {
  periodo: string;
  version: string;
  modo: string;
  regiones: string[];
}

export class ProcesosGastosFinancierosPage {
  constructor(private readonly page: Page) {}

  private get procesoHeading(): Locator {
    return this.page.getByRole('main').getByText(/^Procesos$/i).or(this.page.getByText(/^Procesos$/i)).first();
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
    const modoPattern = /^Completo$/i.test(input.modo) ? /Completo|Detallado/i : new RegExp(input.modo, 'i');
    await this.modoCombobox.click();
    await this.page.getByRole('option', { name: modoPattern }).click();
    await expect(this.page.getByRole('main')).toContainText(modoPattern);

    if (input.regiones.length > 0) {
      const regionTrigger = await this.openRegionSelector();
      for (const region of input.regiones) {
        const checkbox = this.page.getByRole('checkbox', { name: new RegExp(region, 'i') });
        await expect(checkbox).toBeVisible({ timeout: 10_000 });
        if (!(await checkbox.isChecked().catch(() => false))) {
          await checkbox.check({ force: true });
        }
        await expect(checkbox).toBeChecked();
      }
      await this.closeRegionSelector(regionTrigger);
    }
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
  }

  async startExecutionAndStop(): Promise<void> {
    await expect(this.ejecutarTodoButton, 'Debe estar visible Ejecutar Todo antes de iniciar.').toBeVisible({
      timeout: 15_000,
    });
    await expect(this.ejecutarTodoButton, 'Ejecutar Todo debe estar habilitado antes de iniciar.').toBeEnabled({
      timeout: 15_000,
    });
    await this.ejecutarTodoButton.click();

    if (await this.patchQuestion.first().isVisible({ timeout: 5_000 }).catch(() => false)) {
      await expect(this.noPatchButton, 'Debe poder continuar sin aplicar parche.').toBeVisible({ timeout: 10_000 });
      await this.noPatchButton.click();
      await expect(this.patchQuestion.first(), 'El modal de parche debe cerrarse antes de detener.').toBeHidden({
        timeout: 15_000,
      });
    }

    const stopButton = this.page
      .getByRole('button', { name: /Detener/i })
      .or(this.page.getByRole('button', { name: /Parar/i }))
      .first();

    await expect(stopButton, 'Debe mostrarse el boton Detener mientras la ejecucion esta en curso.').toBeVisible({
      timeout: 20_000,
    });
    await expect(stopButton, 'El boton Detener debe estar habilitado durante la ejecucion.').toBeEnabled({
      timeout: 10_000,
    });
    await stopButton.click();

    await expect
      .poll(
        async () => {
          const stopVisible = await stopButton.isVisible().catch(() => false);
          const executeEnabled = await this.ejecutarTodoButton.isEnabled().catch(() => false);
          return !stopVisible || executeEnabled;
        },
        { timeout: 30_000, message: 'La ejecucion debe responder a la accion Detener.' },
      )
      .toBe(true);
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
    await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await expect(this.page).toHaveURL(/\/distribuciones/i, { timeout: 40_000 });
  }

  private async selectRealFlow(): Promise<void> {
    const flowTrigger = this.page
      .locator('header')
      .getByRole('button')
      .filter({ hasText: /REAL|PRESUPUESTO|LOCAL|NIIF/i })
      .first();
    const realBadge = flowTrigger.locator('span').filter({ hasText: /^REAL$/i }).first();

    if (!(await flowTrigger.isVisible({ timeout: 10_000 }).catch(() => false))) {
      return;
    }

    const currentFlowText = (await flowTrigger.innerText().catch(() => '')).trim();
    if (/REAL/i.test(currentFlowText)) {
      await expect(realBadge).toBeVisible({ timeout: 15_000 });
      return;
    }

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

    if (await this.page.locator('[data-radix-popper-content-wrapper]').isVisible().catch(() => false)) {
      await this.page.keyboard.press('Escape').catch(() => undefined);
    }
  }

  private async selectGastosFinancierosModule(): Promise<void> {
    const activeModuleText = this.page.getByText(/Gestor de Gastos Financieros|Gastos Financieros/i).first();
    if (await activeModuleText.isVisible({ timeout: 10_000 }).catch(() => false)) {
      return;
    }

    const moduleTrigger = this.page
      .locator('header')
      .getByRole('button')
      .filter({ hasText: /Gastos Financieros|Asientos Manuales|Gastos Generales|Gastos T[eé]cnicos/i })
      .first();

    await expect(moduleTrigger).toBeVisible({ timeout: 10_000 });
    const currentModuleText = (await moduleTrigger.innerText().catch(() => '')).trim();
    if (/Gastos Financieros/i.test(currentModuleText)) {
      return;
    }

    await moduleTrigger.click({ timeout: 10_000 });

    const moduleDropdown = this.page
      .locator('[data-radix-popper-content-wrapper]')
      .filter({ hasText: /Gastos Financieros|Asientos Manuales/i })
      .last();
    await expect(moduleDropdown).toBeVisible({ timeout: 10_000 });

    const gastosFinancierosOption = moduleDropdown.locator('div[role="menuitem"]').filter({ hasText: /^Gastos Financieros$/i }).first();

    if (await gastosFinancierosOption.isVisible({ timeout: 5_000 }).catch(() => false)) {
      await gastosFinancierosOption.click({ timeout: 10_000 });
    }

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
      await this.page.goto(new URL('/procesos/procesos/', env.baseUrl).toString(), { waitUntil: 'domcontentloaded' });
    }

    await expect(this.procesoHeading).toBeVisible({ timeout: 20_000 });
  }

  private async openRegionSelector(): Promise<Locator> {
    const selectedRegionsButton = this.descripcionRegionTrigger;
    if (await selectedRegionsButton.isVisible({ timeout: 3_000 }).catch(() => false)) {
      await selectedRegionsButton.click({ timeout: 5_000 });
      const regionCheckbox = this.page.getByRole('checkbox', { name: /Exactus/i });
      if (await regionCheckbox.isVisible({ timeout: 2_000 }).catch(() => false)) {
        return selectedRegionsButton;
      }
      await this.page.keyboard.press('Escape').catch(() => undefined);
    }

    throw new Error('No se pudo identificar el selector de regiones del módulo Procesos de Gastos Financieros.');
  }

  private async closeRegionSelector(selectedRegionsButton: Locator): Promise<void> {
    const openDropdown = this.page.locator('[data-radix-popper-content-wrapper]').filter({ hasText: /Exactus|AMED|AP Vida/i }).last();

    if (!(await openDropdown.isVisible({ timeout: 2_000 }).catch(() => false))) {
      return;
    }

    await selectedRegionsButton.click({ timeout: 5_000 }).catch(() => undefined);

    if (await openDropdown.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await this.page.keyboard.press('Escape').catch(() => undefined);
    }

    await expect(openDropdown, 'El selector de regiones debe quedar cerrado antes de continuar con FASE 3.').toBeHidden({
      timeout: 10_000,
    });
  }

}
