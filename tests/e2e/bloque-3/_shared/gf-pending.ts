import { test } from '@playwright/test';

type GfPendingCaseConfig = {
  caseId: string;
  reason: string;
  role?: 'admin' | 'gestor-gasto-financiero';
  priority?: 'critical' | 'smoke';
};

function tagsFor(config: GfPendingCaseConfig) {
  return [
    '@bloque3',
    '@gf',
    config.role ? `@${config.role}` : '@gestor-gasto-financiero',
    config.priority ? `@${config.priority}` : '',
    `@${config.caseId}`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function PendingGfCatalogCase(config: GfPendingCaseConfig) {
  test.skip(`${tagsFor(config)} pendiente de automatizacion`, async () => {
    test.info().annotations.push({
      type: `${config.caseId}-pending`,
      description: config.reason,
    });
  });
}
