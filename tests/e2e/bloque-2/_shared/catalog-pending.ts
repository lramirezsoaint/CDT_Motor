import { test } from '@fixtures/base.fixture';
import { tagsFor } from './gt-ui';

type PendingCatalogCaseConfig = {
 caseId: string;
 reason: string;
 priority?: 'critical' | 'smoke';
};

export function PendingCatalogCase(config: PendingCatalogCaseConfig) {
 test.skip(`${tagsFor(config)} pendiente de automatizacion`, async () => {
 test.info().annotations.push({
 type: `${config.caseId}-pending`,
 description: config.reason,
 });
 });
}
