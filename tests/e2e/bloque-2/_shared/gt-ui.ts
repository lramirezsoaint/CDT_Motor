import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

export type GtCaseBase = {
 caseId: string;
 section: string;
 view: string;
 priority?: 'critical' | 'smoke';
 flow?: 'presupuesto';
 role?: 'admin' | 'gestorGT';
 flowTag?: FlowTag;
};

export function tagsFor(config: Pick<GtCaseBase, 'caseId' | 'flowTag'> & { expectedResult?: string }) {
 return buildTags({ bloque: '@bloque2', caseId: config.caseId, flowTag: config.flowTag ?? inferGtFlowTag(config) });
}

export function inferGtFlowTag(config: Pick<GtCaseBase, 'caseId'> & { expectedResult?: string }): FlowTag {
 const caseId = config.caseId;
 if (/^E0-/i.test(caseId)) return '@login';
 if (/^E(?:40|41|42|44)-/i.test(caseId)) return '@distribucion';
 if (/^E(?:4|9|58|59)-/i.test(caseId)) return config.expectedResult && config.expectedResult !== 'success' ? '@upload_invalido' : '@upload_valido';
 if (/^E(?:5|6|8|61|62)-/i.test(caseId)) return '@upload_invalido';
 if (/^E35-/i.test(caseId)) return '@registrar';
 if (/^E36-/i.test(caseId)) return '@editar';
 if (/^E(?:37|43|68)-/i.test(caseId)) return '@eliminar';
 if (/^E63-/i.test(caseId)) return '@busqueda';
 if (/^E60-/i.test(caseId)) return '@columnas';
 if (/^E56-/i.test(caseId)) return '@paginacion';
 if (/^E(?:47|51|52|64|65|66|69-GT-EC)-/i.test(caseId)) return '@procesos';
 if (/^E70-/i.test(caseId)) return '@upload_invalido';
 if (/^E71-/i.test(caseId)) return '@upload_valido';
 if (/^E(?:10|11)-/i.test(caseId)) return '@download_catalogo';
 if (/^E(?:67|69-GT-01)-/i.test(caseId)) return '@download_reporte';
 return '@distribucion';
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
