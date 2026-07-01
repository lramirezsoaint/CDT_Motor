import { test } from '@fixtures/base.fixture';

type PendingCatalogRoleCaseConfig = {
  caseId: string;
  reason: string;
  role: 'admin' | 'gestorGT';
  priority?: 'critical' | 'smoke';
};

function tagsForRole(config: PendingCatalogRoleCaseConfig) {
  return [
    '@bloque2',
    '@gt',
    `@${config.role}`,
    config.priority ? `@${config.priority}` : '',
    `@${config.caseId}`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function PendingCatalogRoleCase(config: PendingCatalogRoleCaseConfig) {
  test.skip(`${tagsForRole(config)} pendiente de automatizacion`, async () => {
    test.info().annotations.push({
      type: `${config.caseId}-pending`,
      description: config.reason,
    });
  });
}
