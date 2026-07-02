import { test } from '@fixtures/base.fixture';

type PendingCatalogRoleCaseConfig = {
 caseId: string;
 reason: string;
 role: 'admin' | 'gestorGT';
 priority?: 'critical' | 'smoke';
 flowTag?: '@login' | '@distribucion' | '@upload_valido' | '@upload_invalido' | '@registrar' | '@editar' | '@eliminar' | '@busqueda' | '@columnas' | '@paginacion' | '@procesos' | '@download_catalogo' | '@download_reporte';
};

function tagsForRole(config: PendingCatalogRoleCaseConfig) {
 return ['@bloque2', `@${config.caseId}`, config.flowTag ?? inferFlowTag(config.caseId)].join(' ');
}

function inferFlowTag(caseId: string) {
 if (/^E0-/i.test(caseId)) return '@login';
 if (/^E(?:40|41|42|44)-/i.test(caseId)) return '@distribucion';
 if (/^E(?:4|9|58|59)-/i.test(caseId)) return '@upload_valido';
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

export function PendingCatalogRoleCase(config: PendingCatalogRoleCaseConfig) {
 test.skip(`${tagsForRole(config)} pendiente de automatizacion`, async () => {
 test.info().annotations.push({
 type: `${config.caseId}-pending`,
 description: config.reason,
 });
 });
}
