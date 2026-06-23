import { expect, Page } from '@playwright/test';

export type GtCaseBase = {
  caseId: string;
  section: string;
  view: string;
  priority?: 'critical' | 'smoke';
  flow?: 'presupuesto';
  role?: 'admin' | 'gestor-gasto';
};

export function tagsFor(config: Pick<GtCaseBase, 'caseId' | 'priority' | 'flow' | 'role'>) {
  return [
    '@bloque2',
    '@gt',
    config.flow ? `@${config.flow}` : '',
    config.role ? `@${config.role}` : '',
    config.priority ? `@${config.priority}` : '',
    `@${config.caseId}`,
  ]
    .filter(Boolean)
    .join(' ');
}

export async function openGtView(page: Page, config: Pick<GtCaseBase, 'section' | 'view'>) {
  await page.goto('/');
  await expect(page, 'Debe abrir la pantalla de Distribuciones con la sesion del rol.').toHaveURL(/\/distribuciones/i);

  await page.getByText(config.section, { exact: false }).click();
  await page
    .getByRole('link', { name: new RegExp(config.view, 'i') })
    .click();
}

export async function clickFirstVisible(page: Page, candidates: ReturnType<Page['locator']>[]) {
  for (const candidate of candidates) {
    const visible = await candidate.isVisible({ timeout: 2_000 }).catch(() => false);
    if (visible) {
      await candidate.click();
      return candidate;
    }
  }

  throw new Error('[BUG] No se encontro una accion visible para continuar el flujo.');
}

export function visibleButton(page: Page, name: RegExp) {
  return page
    .getByRole('button', { name })
    .or(page.locator('button').filter({ hasText: name }))
    .first();
}
