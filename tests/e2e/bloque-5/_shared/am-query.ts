import fs from 'fs';
import { test as baseTest, expect as baseExpect } from '@fixtures/base.fixture';
import { Bloque5AsientosManualesPage } from '@pages/bloque5/Bloque5AsientosManualesPage';
import type { Locator, Page } from '@playwright/test';
import type { AmQueryCase } from './am-query-cases';
import { ensureAmSession } from './am-upload';

export function QueryCase(test: typeof baseTest, expect: typeof baseExpect, config: AmQueryCase): void {
  test.use({ storageState: '.auth/gestorAM.json' });
  test(`@bloque5 @${config.caseId} @am @consulta @gestor-asiento @regression ${title(config)}`, async ({ page }) => {
    test.setTimeout(240_000);
    test.skip(config.flow === 'blocked', config.blockedReason);
    const amPage = new Bloque5AsientosManualesPage(page);

    await test.step('Acceder a Distribucion con selector Asientos Manuales', async () => {
      await expect(page).toHaveURL(/\/distribuciones/i);
      await ensureAmSession(page, 'read');
    });
    await test.step(title(config), async () => {
      if (config.flow === 'generalSearch') {
        const value = await amPage.requireSearchableDistributionValue();
        await amPage.searchByGeneralInput(value);
        await amPage.assertGeneralSearchResults(value);
        await amPage.assertSearchRespondsAfterThreeCharacters(value);
        return;
      }
      await amPage.openSidebarView(config.section!, config.view!);
      await activateTab(page, config.tab);
      if (config.flow === 'download') {
        await assertDownload(page, expect);
        return;
      }
      const menu = await amPage.openColumnsMenu();
      if (config.flow === 'columnSelect') {
        await amPage.assertDefaultColumnsMarked(menu);
        const selected = await amPage.selectFirstOptionalColumnAndApply(menu);
        await amPage.assertHeaderContains(selected);
      } else if (config.flow === 'columnSearch') {
        await assertColumnSearch(menu, expect);
      } else if (config.flow === 'showAll') {
        expect(await amPage.showAllColumnsAndApply(menu)).toBeGreaterThan(0);
      } else if (config.flow === 'hideAll') {
        const result = await amPage.hideOptionalColumnsAndApply(menu);
        expect(result.defaultCount).toBeGreaterThan(0);
        expect(result.optionalCount).toBeGreaterThan(0);
      }
    });
  });
}

async function activateTab(page: Page, tab?: string): Promise<void> {
  if (!tab) return;
  const target = page.getByRole('tab', { name: new RegExp(tab, 'i') })
    .or(page.getByRole('button', { name: new RegExp(tab, 'i') })).first();
  await baseExpect(target, `Debe existir la vista ${tab}.`).toBeVisible();
  await target.click();
}

async function assertColumnSearch(menu: Locator, expect: typeof baseExpect): Promise<void> {
  const options = menu.getByRole('menuitemcheckbox');
  await expect(options.first(), 'Debe existir al menos una columna para buscar.').toBeVisible();
  const label = "a";
  const search = menu.getByPlaceholder(/buscar/i).or(menu.getByRole('textbox')).first();
  await expect(search, 'Debe existir el filtro Buscar del componente Columnas.').toBeVisible();
  await search.fill(label);
  await expect(options.filter({ hasText: new RegExp(escapeRegex(label), 'i') }).first()).toBeVisible();
}

async function assertDownload(page: Page, expect: typeof baseExpect): Promise<void> {
  const button = page.getByRole('button', { name: /descargar/i })
    .or(page.locator('[data-testid*="download"], button[id*="download"]')).first();
  await expect(button, 'Debe existir Descargar para Exactus procesado.').toBeVisible();
  await expect(button).toBeEnabled();
  const [download] = await Promise.all([page.waitForEvent('download'), button.click()]);
  expect(download.suggestedFilename()).toMatch(/\.(xlsx?|csv)$/i);
  expect(await download.failure()).toBeNull();
  const file = await download.path();
  expect(fs.statSync(file).size).toBeGreaterThan(0);
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function title(config: AmQueryCase): string {
  const names = {
    columnSelect: 'selecciona columnas visibles',
    columnSearch: 'busca columnas',
    showAll: 'muestra todas las columnas',
    hideAll: 'oculta columnas opcionales',
    generalSearch: 'filtra desde el tercer caracter',
    download: 'descarga Exactus procesado',
    blocked: 'consulta pendiente de datos',
  };
  return `${names[config.flow]}${config.view ? ` en ${config.view}` : ''}`;
}
