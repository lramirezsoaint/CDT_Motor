import { test } from '@fixtures/base.fixture';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

type GfPendingCaseConfig = {
 caseId: string;
 reason: string;
 role?: 'admin' | 'gestorGF';
 priority?: 'critical' | 'smoke';
 flowTag?: FlowTag;
};

function tagsFor(config: GfPendingCaseConfig) {
 return buildTags({ bloque: '@bloque3', caseId: config.caseId, flowTag: config.flowTag ?? inferFlowTag(config.caseId) });
}

function inferFlowTag(caseId: string): FlowTag {
 if (/^E0-/i.test(caseId)) return '@login';
 if (/^E(?:40|41|42|44)-/i.test(caseId)) return '@distribucion';
 if (/^E(?:4|9|59)-/i.test(caseId)) return '@upload_valido';
 if (/^E(?:5|6|8|61|62)-/i.test(caseId)) return '@upload_invalido';
 if (/^E35-/i.test(caseId)) return '@registrar';
 if (/^E36-/i.test(caseId)) return '@editar';
 if (/^E(?:37|43)-/i.test(caseId)) return '@eliminar';
 if (/^E63-/i.test(caseId)) return '@busqueda';
 if (/^E60-/i.test(caseId)) return '@columnas';
 if (/^E56-/i.test(caseId)) return '@paginacion';
 if (/^E(?:64|65|66)-/i.test(caseId)) return '@procesos';
 if (/^E(?:10|11)-/i.test(caseId)) return '@download_catalogo';
 return '@distribucion';
}

export function PendingGfCatalogCase(config: GfPendingCaseConfig) {
 test.skip(`${tagsFor(config)} pendiente de automatizacion`, async () => {
 test.info().annotations.push({
 type: `${config.caseId}-pending`,
 description: config.reason,
 });
 });
}
