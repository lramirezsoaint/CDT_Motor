import { test } from '@fixtures/base.fixture';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';

type AmPendingCaseConfig = {
  caseId: string;
  reason: string;
  priority?: 'critical' | 'smoke';
  flowTag?: FlowTag;
};

function tagsFor(config: AmPendingCaseConfig) {
  return buildTags({ bloque: '@bloque5', caseId: config.caseId, flowTag: config.flowTag ?? inferFlowTag(config.caseId) });
}

function inferFlowTag(caseId: string): FlowTag {
  if (/^E1-/i.test(caseId)) return '@login';
  if (/^E2-/i.test(caseId)) return '@distribucion';
  if (/^E(?:3|4|10|11)-/i.test(caseId)) return '@upload_valido';
  if (/^E(?:5|6|7)-/i.test(caseId)) return '@upload_invalido';
  if (/^E(?:8|12|13)-/i.test(caseId)) return '@download_catalogo';
  if (/^E(?:9|14|15)-/i.test(caseId)) return '@columnas';
  if (/^E(?:16|17)-/i.test(caseId)) return '@paginacion';
  if (/^E(?:18|19|20)-/i.test(caseId)) return '@registrar';
  if (/^E(?:21|22)-/i.test(caseId)) return '@editar';
  if (/^E(?:23|24)-/i.test(caseId)) return '@eliminar';
  if (/^E(?:25|26|27)-/i.test(caseId)) return '@procesos';
  return '@distribucion';
}

export function PendingAmCatalogCase(config: AmPendingCaseConfig) {
  test.skip(`${tagsFor(config)} pendiente de automatizacion`, async () => {
    test.info().annotations.push({
      type: `${config.caseId}-pending`,
      description: config.reason,
    });
  });
}
