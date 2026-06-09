import fs from 'fs';
import path from 'path';
import { expect, Page } from '@playwright/test';
import { goToComunesView } from './comunes-upload';
import { saveDownload } from '../../../../src/utils/downloads';

export type ComunesDownloadConfig = {
  caseId: string;
  menu: string;
  route: string;
  expectedKeyword: RegExp;
  alreadyOnView?: boolean;
};

export const expectedDownloadedFileBaseNameByMenu: Record<string, string> = {
  'Líneas': 'REAL Lineas',
  'Grupo Producto': 'REAL Grupo Producto',
  'Canales': 'REAL Canales',
  'Subcanales': 'REAL Subcanales',
  'Maestro UoA': 'REAL Maestro UoA',
  'Unidades de Cuenta - BBA/VFA': 'Unidades de cuenta BBA VFA',
  'Configuración de Parches': 'REAL Configuración de Parches',
};

async function enforceSinglePage(page: Page) {
  const context = page.context();

  context.on('page', async (openedPage) => {
    if (openedPage === page) return;
    await openedPage.close().catch(() => undefined);
  });

  for (const openedPage of context.pages()) {
    if (openedPage === page) continue;
    await openedPage.close().catch(() => undefined);
  }
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

export async function openComunesDownloadView(page: Page, menu: string, route: string) {
  await goToComunesView(page, menu, route).catch(async () => {
    await expect(page).toHaveURL(new RegExp(route.replace('/', '\\/'), 'i'), { timeout: 20_000 });
  });

  const table = page.locator('table').first();
  await expect(table, `[BUG] La tabla de ${menu} no se renderiza al ingresar a la vista.`).toBeVisible({ timeout: 20_000 });
}

export async function findDownloadButton(page: Page) {
  const candidates = [
    page.getByRole('button', { name: /descargar|export/i }).first(),
    page.locator('[data-testid*="download" i], [data-testid*="descargar" i]').first(),
    page.locator('main button').filter({ hasText: /descargar|export/i }).first(),
  ];

  for (const candidate of candidates) {
    if ((await candidate.count().catch(() => 0)) === 0) continue;
    if (await candidate.isVisible().catch(() => false)) return candidate;
  }

  throw new Error('[BUG] No se encuentra visible el boton "Descargar" en la vista actual.');
}

export async function visibleSystemMessages(page: Page) {
  const locators = [
    page.locator('[role="alert"]'),
    page.locator('[role="status"]'),
    page.locator('[data-sonner-toast]'),
    page.locator('.Toastify__toast'),
    page.locator('.MuiAlert-root'),
    page.locator('[aria-live="polite"], [aria-live="assertive"]'),
  ];

  const messages = new Set<string>();

  for (const locator of locators) {
    const count = await locator.count().catch(() => 0);
    for (let index = 0; index < count; index += 1) {
      const candidate = locator.nth(index);
      const isVisible = await candidate.isVisible().catch(() => false);
      if (!isVisible) continue;

      const text = await candidate.innerText().catch(() => '');
      const normalized = text.replace(/\s+/g, ' ').trim();
      if (!normalized || normalized.length < 8) continue;
      messages.add(normalized);
    }
  }

  return Array.from(messages);
}

export async function executeComunesDownload(page: Page, config: ComunesDownloadConfig) {
  await enforceSinglePage(page);
  if (!config.alreadyOnView) {
    await openComunesDownloadView(page, config.menu, config.route);
  }

  const noRecordsVisible = await page.getByText(/no existen registros para mostrar en la tabla|no hay resultados/i).first().isVisible().catch(() => false);
  const downloadButton = await findDownloadButton(page);

  await expect(downloadButton, `[BUG] No se muestra el boton Descargar en ${config.menu}.`).toBeVisible({ timeout: 10_000 });

  if (!(await downloadButton.isEnabled().catch(() => false))) {
    if (noRecordsVisible) {
      throw new Error(`[DATA] El boton Descargar esta deshabilitado en ${config.menu} porque no hay datos disponibles para exportar.`);
    }

    throw new Error(`[BUG] El boton Descargar aparece deshabilitado en ${config.menu} sin una causa visible de datos.`);
  }

  let filePath = '';

  try {
    filePath = await saveDownload(
      page,
      async () => {
        await downloadButton.click();
      },
      path.join('artifacts', 'downloads', config.caseId),
    );
  } catch (error) {
    const messages = await visibleSystemMessages(page);
    const message = messages.find((entry) => /error|descarga|soporte|intente/i.test(normalizeText(entry)));

    if (message) {
      throw new Error(`[BUG] La descarga no se completo en ${config.menu}. Mensaje visible: ${message}`);
    }

    if (noRecordsVisible) {
      throw new Error(`[DATA] No se pudo descargar en ${config.menu} porque la vista no tiene datos visibles.`);
    }

    throw new Error(`[BUG] La descarga no se completo en ${config.menu} y el sistema no mostro un mensaje visible que explique el fallo.`);
  }

  expect(filePath, `[BUG] La descarga en ${config.menu} no devolvio una ruta de archivo.`).not.toBe('');
  expect(fs.existsSync(filePath), `[BUG] La descarga en ${config.menu} no genero el archivo esperado en disco.`).toBe(true);
  expect(path.extname(filePath).toLowerCase(), `[BUG] La descarga en ${config.menu} no se genera en formato XLSX.`).toMatch(/\.xlsx?$/i);

  const stats = fs.statSync(filePath);
  expect(stats.size, `[BUG] La descarga en ${config.menu} genero un archivo vacio.`).toBeGreaterThan(0);

  const suggestedName = path.basename(filePath);
  const downloadedBaseName = path.parse(suggestedName).name;
  const expectedBaseName = expectedDownloadedFileBaseNameByMenu[config.menu];

  expect(expectedBaseName, `[BUG] No existe nombre esperado configurado para la descarga de ${config.menu}.`).toBeTruthy();
  expect(
    downloadedBaseName,
    `[BUG] El nombre del archivo descargado en ${config.menu} no corresponde al esperado. Archivo: ${suggestedName}. Esperado: ${expectedBaseName}.`,
  ).toBe(expectedBaseName);

  testInfoAnnotation(config.caseId, page, suggestedName);

  return { filePath, suggestedName };
}

function testInfoAnnotation(caseId: string, page: Page, suggestedName: string) {
  const info = (page as unknown as { _testInfo?: { annotations: Array<{ type: string; description: string }> } })._testInfo;
  if (!info) return;
  info.annotations.push({
    type: `${caseId}-download`,
    description: `Archivo descargado: ${suggestedName}`,
  });
}
