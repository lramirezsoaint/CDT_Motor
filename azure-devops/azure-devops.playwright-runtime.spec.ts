import { expect, test } from '@playwright/test';
import { buildDuplicateWiql } from './azure-devops.dedup';
import { loadIncidentRuntimeConfig, queryAzureWorkItems } from './azure-devops.client';
import { buildAzureBugPatch } from './azure-devops.mapper';
import type { IncidentCandidate } from '../integrations/incidents/incident.types';

test.skip(
  process.env.AZURE_DEVOPS_RUN_RUNTIME_DIAGNOSTIC !== 'true',
  'Runtime diagnostic read-only deshabilitado por defecto.',
);

test.describe('Azure DevOps Playwright runtime diagnostic', () => {
  test('queryWiql responds from Playwright technical spec without opening a browser', async () => {
    const previousRuntimeContext = process.env.AZURE_DEVOPS_RUNTIME_CONTEXT;
    process.env.AZURE_DEVOPS_RUNTIME_CONTEXT = 'playwright-technical-spec';

    try {
      const started = Date.now();
      const config = loadIncidentRuntimeConfig();
      const candidate = makeE37Candidate();
      logCandidateSizes(candidate);
      const wiql = buildDuplicateWiql(candidate, config);
      const result = await queryAzureWorkItems(config, wiql);
      const candidateCount = result.workItems?.length ?? 0;

      console.log('[AZURE RUNTIME RESULT]');
      console.log('runtimeContext=playwright-technical-spec');
      console.log(`statusCode=${result.__statusCode ?? 'N/D'}`);
      console.log(`candidateCount=${candidateCount}`);
      console.log(`elapsedMs=${Date.now() - started}`);

      expect(result.__statusCode).toBe(200);
      expect(Array.isArray(result.workItems ?? [])).toBe(true);
    } finally {
      restoreRuntimeContext(previousRuntimeContext);
    }
  });
});

function logCandidateSizes(candidate: IncidentCandidate): void {
  const patch = buildAzureBugPatch(candidate);
  const description = patch.find((operation) => operation.path === '/fields/System.Description')?.value ?? '';

  console.log('[AZURE RUNTIME]');
  console.log('runtimeContext=playwright-technical-spec');
  console.log(`candidateBytes=${Buffer.byteLength(JSON.stringify(candidate), 'utf8')}`);
  console.log(`originalErrorBytes=${Buffer.byteLength(candidate.originalError ?? '', 'utf8')}`);
  console.log(`descriptionBytes=${Buffer.byteLength(description, 'utf8')}`);
}

function makeE37Candidate(): IncidentCandidate {
  return {
    caseId: 'E37-AM-01.01.1',
    title: 'elimina registro y valida resultado success',
    bugTitle: '[QA-AUTO][E37-AM-01.01.1] No se encuentra la opcion Eliminar en Cuentas Contables',
    bugDescription: 'N/D',
    block: 'Bloque 5',
    specFile: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
    project: 'chromium-gestorAM',
    role: 'gestorAM',
    browser: 'chromium',
    status: 'FAILED',
    durationMs: 0,
    retry: 0,
    finalUrl: 'N/D',
    phase: 'Ejecutar accion Eliminar desde la tabla',
    classification: 'NAV_FAILURE',
    errorMessage: 'Debe existir la opcion Eliminar en el menu de acciones.',
    expectedResult: 'La opcion Eliminar en el menu de acciones debe estar visible.',
    observedResult: 'No se encontro la opcion Eliminar en el menu de acciones.',
    stackSummary: 'N/D',
    expected: 'visible',
    received: 'N/D',
    errorOrigin: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
    timeout: '5000 ms',
    executedAt: new Date().toISOString(),
    evidence: {
      screenshot: [],
      video: [],
      trace: [],
      htmlReport: [],
      logs: [],
    },
    action: 'CANDIDATO A BUG',
    technicalDiagnostic: {
      error: 'ELEMENT_NOT_FOUND',
      caseId: 'E37-AM-01.01.1',
      phase: 'Ejecutar accion Eliminar desde la tabla',
      probableCause: 'NAV_FAILURE',
      message: 'Debe existir la opcion Eliminar en el menu de acciones.',
      expectedRole: 'gestorAM',
      expectedProject: 'chromium-gestorAM',
      usedProject: 'chromium-gestorAM',
      file: 'tests/e2e/bloque-5/E37-AM-01.01.1/E37-AM-01.01.1.spec.ts',
      technicalOrigin: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
      view: 'Cuentas Contables',
    },
    incidentDecision: {
      classification: 'BUSINESS_RULE_FAILURE',
      probableCause: 'OPTION_NOT_AVAILABLE',
      confidence: 'HIGH',
      evidence: [],
      decision: 'BUG_AUTO',
      reason: 'Validacion read-only de runtime Playwright.',
      recommendation: 'N/D',
      azureDevOpsEligibility: 'ELEGIBLE PARA CREACION AUTOMATICA',
    },
    originalError: 'N/D',
  };
}

function restoreRuntimeContext(value: string | undefined): void {
  if (value === undefined) {
    delete process.env.AZURE_DEVOPS_RUNTIME_CONTEXT;
    return;
  }

  process.env.AZURE_DEVOPS_RUNTIME_CONTEXT = value;
}
