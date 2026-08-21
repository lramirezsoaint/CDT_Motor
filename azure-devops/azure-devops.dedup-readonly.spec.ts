import { expect, test } from '@playwright/test';
import { getAzureWorkItems, loadIncidentRuntimeConfig, queryAzureWorkItems } from './azure-devops.client';
import { buildDuplicateWiql, findDuplicateBySignature } from './azure-devops.dedup';
import type { IncidentCandidate } from '../integrations/incidents/incident.types';

test.skip(process.env.AZURE_DEVOPS_RUN_DEDUP_TEST !== 'true', 'Dedup read-only harness deshabilitado por defecto.');

test.describe('Azure DevOps dedup read-only harness', () => {
  test('queries E37 duplicate candidates without creating Work Items', async () => {
    const config = loadIncidentRuntimeConfig();
    const candidate = makeE37Candidate();
    const started = Date.now();

    console.log('[AZURE DEDUP]');
    console.log('step=signature-built');
    console.log('signature=E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables');
    console.log('[AZURE DEDUP]');
    console.log('step=wiql-start');

    try {
      const wiql = buildDuplicateWiql(candidate, config);
      console.log('[AZURE DEDUP]');
      console.log('step=wiql-request');
      const queryResult = await queryAzureWorkItems(config, wiql);
      const ids = (queryResult.workItems ?? []).map((item) => item.id).filter((id) => Number.isFinite(id));

      console.log('[AZURE DEDUP]');
      console.log('step=wiql-response');
      console.log(`statusCode=${queryResult.__statusCode ?? 'N/D'}`);
      console.log(`candidateCount=${ids.length}`);

      console.log('[AZURE DEDUP]');
      console.log('step=workitems-start');
      console.log(`count=${ids.length}`);
      const workItems = await getAzureWorkItems(config, ids);

      console.log('[AZURE DEDUP]');
      console.log('step=workitems-response');
      console.log(`count=${workItems.length}`);
      const duplicate = findDuplicateBySignature(candidate, workItems);

      console.log('DEDUP RESULT');
      console.log(`candidateCount=${workItems.length}`);
      console.log(`duplicate=${Boolean(duplicate)}`);
      if (duplicate) {
        console.log(`existingBugId=${duplicate.id}`);
      }
      console.log(`elapsedMs=${Date.now() - started}`);

      expect(Array.isArray(workItems)).toBe(true);
    } catch (error) {
      console.log('DEDUP RESULT');
      console.log('status=ERROR');
      console.log(`message=${error instanceof Error ? error.message : String(error)}`);
      console.log(`elapsedMs=${Date.now() - started}`);
      throw error;
    }
  });
});

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
      reason: 'Validacion read-only de deduplicacion.',
      recommendation: 'N/D',
      azureDevOpsEligibility: 'ELEGIBLE PARA CREACION AUTOMATICA',
    },
    originalError: 'N/D',
  };
}
