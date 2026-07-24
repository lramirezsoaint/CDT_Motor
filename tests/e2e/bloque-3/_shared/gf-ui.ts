import { expect } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';
import { acceptInformationModal, waitForGfLoading } from './gf-context';

export type GfCaseBase = {
 caseId: string;
 section: string;
 view: string;
 priority?: 'critical' | 'smoke';
 role?: 'admin' | 'gestorGF';
 flowTag?: FlowTag;
};

export function tagsFor(config: Pick<GfCaseBase, 'caseId' | 'flowTag'> & { expectedResult?: string }) {
 return buildTags({ bloque: '@bloque3', caseId: config.caseId, flowTag: config.flowTag ?? inferGfFlowTag(config) });
}

export function inferGfFlowTag(config: Pick<GfCaseBase, 'caseId'> & { expectedResult?: string }): FlowTag {
 const caseId = config.caseId;
 if (/^E35-/i.test(caseId)) return '@registrar';
 if (/^E36-/i.test(caseId)) return '@editar';
 if (/^E37-/i.test(caseId)) return '@eliminar';
 if (/^E(?:4|8|61|70)-/i.test(caseId)) return config.expectedResult && config.expectedResult !== 'success' ? '@upload_invalido' : '@upload_valido';
 if (/^E(?:5|6)-/i.test(caseId)) return '@upload_invalido';
 if (/^E(?:47|51|52|64|65|66|69-GF-EC)-/i.test(caseId)) return '@procesos';
 if (/^E(?:10|11)-/i.test(caseId)) return '@download_catalogo';
 if (/^E(?:67|69-GF-01)-/i.test(caseId)) return '@download_reporte';
 return '@distribucion';
}

export async function openGfView(page: Page, config: Pick<GfCaseBase, 'section' | 'view'>) {
 await page.goto('/');
 await expect(page, 'Debe abrir la pantalla de Distribuciones con la sesion del rol.').toHaveURL(/\/distribuciones/i);
 await acceptInformationModal(page);
 await waitForGfLoading(page);

 await page.getByText(config.section, { exact: false }).click();
 const linkName = /Maestro Reservas Producto/i.test(config.view)
 ? /Maestro Producto|Maestro Reservas Producto/i
 : /Driver UoA|Driver Reservas a UoA/i.test(config.view)
 ? /Driver Reservas a UoA|Driver UoA(?: - VIDA)?/i
 : new RegExp(config.view, 'i');
 await page.getByRole('link', { name: linkName }).click();
 await waitForGfLoading(page);
}

export function viewTitlePattern(view: string) {
 if (/Maestro de Negocio(?: y)? Embebidos/i.test(view)) {
 return /Maestro de Negocios y Embebidos|Maestro de Negocio y Embebidos/i;
 }

 if (/Driver UoA|Driver Reservas a UoA/i.test(view)) {
 return /Driver Reservas a UoA|Driver UoA(?: - VIDA)?/i;
 }

 return new RegExp(view, 'i');
}

export function visibleButton(page: Page, name: RegExp) {
 return page
 .getByRole('button', { name })
 .or(page.locator('button').filter({ hasText: name }))
 .first();
}
