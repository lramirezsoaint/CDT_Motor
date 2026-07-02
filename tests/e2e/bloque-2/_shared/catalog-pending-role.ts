import { test } from '@fixtures/base.fixture';
import { buildTags, FlowTag } from '../../_globalshared/tags/tags';
import { inferGtFlowTag } from './gt-ui';

type PendingCatalogRoleCaseConfig = {
 caseId: string;
 reason: string;
 role: 'admin' | 'gestorGT';
 priority?: 'critical' | 'smoke';
 flowTag?: FlowTag;
};

function tagsForRole(config: PendingCatalogRoleCaseConfig) {
 return buildTags({ bloque: '@bloque2', caseId: config.caseId, flowTag: config.flowTag ?? inferGtFlowTag(config) });
}

export function PendingCatalogRoleCase(config: PendingCatalogRoleCaseConfig) {
 test.skip(`${tagsForRole(config)} pendiente de automatizacion`, async () => {
 test.info().annotations.push({
 type: `${config.caseId}-pending`,
 description: config.reason,
 });
 });
}
