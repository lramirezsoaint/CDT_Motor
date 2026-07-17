import { expect, test as baseTest } from '@fixtures/base.fixture';
import type { AmCrudCase } from './am-crud-cases';
import {
  amUploadFixtureExistsByResult,
  confirmAmUploadByResult,
  ensureAmSession,
  openAmUploadDialog,
  openAmView,
  resolveAmUploadFileByResult,
} from './am-upload';
import { ensureAmContext } from './am-context';

export function CrudCase(test: typeof baseTest, _expect: typeof expect, config: AmCrudCase): void {
  test(`@bloque5 @${config.caseId} @am @crud @gestor-asiento @regression ${title(config)}`, async ({ page }) => {
    test.setTimeout(360_000);

    const fixture = fixtureFile(config);
    test.skip(!fixture, fixtureReason(config));

    await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
      await ensureAmContext(page, 'upload');
      await expect(page).toHaveURL(/\/distribuciones/i);
      await ensureAmSession(page, 'mutation');
      await openAmView(page, config);
    });

    await test.step(title(config), async () => {
      const dialog = await openAmUploadDialog(page, {
        modalTitle: new RegExp(`Cargar ${config.entityName}`, 'i'),
      });
      await dialog.locator('input[type="file"]').first().setInputFiles(fixture!);
      await confirmAmUploadByResult(dialog, config.entityName, 'validationDownload');
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

function title(config: AmCrudCase): string {
  return `rechaza carga con errores de ${config.entityName}`;
}
