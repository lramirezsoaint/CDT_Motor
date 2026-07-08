import { test as baseTest, expect as baseExpect } from '@fixtures/base.fixture';
import type { Locator, Page } from '@playwright/test';
import type { AmCrudCase } from './am-crud-cases';
import {
  amUploadFixtureExistsByResult,
  confirmAmUploadByResult,
  ensureAmSession,
  openAmUploadDialog,
  openAmView,
  resolveAmUploadFileByResult,
} from './am-upload';

export function CrudCase(test: typeof baseTest, expect: typeof baseExpect, config: AmCrudCase): void {
  test.use({ storageState: '.auth/gestorAM.json' });
  test(`@bloque5 @${config.caseId} @am @crud @gestor-asiento @regression ${title(config)}`, async ({ page }) => {
    test.setTimeout(360_000);
    test.skip(config.flow === 'blocked', config.blockedReason);

    const fixture = config.flow === 'uploadValidation' ? fixtureFile(config) : undefined;
    test.skip(config.flow === 'uploadValidation' && !fixture, fixtureReason(config));

    await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
      await expect(page).toHaveURL(/\/distribuciones/i);
      await ensureAmSession(page, 'mutation');
      await openAmView(page, config);
    });
    await test.step(title(config), async () => {
      if (config.flow === 'uploadValidation') {
        const dialog = await openAmUploadDialog(page, {
          modalTitle: new RegExp(`Cargar ${config.entityName}`, 'i'),
        });
        await dialog.locator('input[type="file"]').first().setInputFiles(fixture!);
        await confirmAmUploadByResult(dialog, config.entityName, 'validationDownload');
        return;
      }
      await validateRequiredFields(page, config, expect);
    });
  });
}

function fixtureFile(config: AmCrudCase): string | undefined {
  if (!amUploadFixtureExistsByResult(config.entityName, 'validationError')) return undefined;
  return resolveAmUploadFileByResult(config.entityName, 'validationError');
}

function fixtureReason(config: AmCrudCase): string {
  return `TODO [FIXTURE]: falta archivo validationError para "${config.entityName}" en fixtures/files/bloque-5/Real/validationError/.`;
}

async function validateRequiredFields(page: Page, config: AmCrudCase, expect: typeof baseExpect): Promise<void> {
  await page.getByRole('button', { name: /Agregar/i }).first().click();
  const dialog = page.getByRole('dialog').filter({ hasText: /Agregar/i }).last();
  await expect(dialog, 'Debe abrirse el formulario Agregar.').toBeVisible();

  for (const fieldName of config.requiredFields ?? []) {
    const field = fieldFor(dialog, fieldName);
    await expect(field, `Debe existir el campo obligatorio ${fieldName}.`).toBeVisible();
    if (await field.isEditable().catch(() => false)) {
      await field.fill('');
      await field.blur();
    } else {
      await field.click();
      await page.keyboard.press('Escape');
      await page.keyboard.press('Tab');
    }
    await expect(
      dialog.getByText(new RegExp(`${escapeRegex(fieldName)}.*requerid|required.*${escapeRegex(fieldName)}`, 'i')).first(),
      `Debe mostrarse validacion requerida para ${fieldName}.`,
    ).toBeVisible();
  }
  await expect(dialog.getByRole('button', { name: /^Agregar$/i }), 'Agregar debe permanecer deshabilitado.').toBeDisabled();
}

function fieldFor(dialog: Locator, name: string): Locator {
  const pattern = new RegExp(name.replace('Codigo', 'C[oó]digo'), 'i');
  return dialog.getByTestId(name)
    .or(dialog.getByRole('textbox', { name: pattern }))
    .or(dialog.getByRole('combobox', { name: pattern }))
    .or(dialog.locator('input, button[role="combobox"]').filter({ has: dialog.getByText(pattern) }))
    .first();
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function title(config: AmCrudCase): string {
  if (config.flow === 'uploadValidation') return `rechaza carga con errores de ${config.entityName}`;
  if (config.flow === 'requiredFields') return `valida campos obligatorios al agregar ${config.entityName}`;
  return `caso CRUD pendiente de datos para ${config.entityName}`;
}
