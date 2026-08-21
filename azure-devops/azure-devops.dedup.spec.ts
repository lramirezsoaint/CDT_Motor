import { expect, test } from '@playwright/test';
import type { IncidentCandidate } from '../integrations/incidents/incident.types';
import { findDuplicateBySignature } from './azure-devops.dedup';

function makeCandidate(overrides: {
  caseId?: string;
  probableCause?: IncidentCandidate['incidentDecision']['probableCause'];
  view?: string;
} = {}): IncidentCandidate {
  const caseId = overrides.caseId ?? 'E37-AM-01.01.1';
  const probableCause = overrides.probableCause ?? 'OPTION_NOT_AVAILABLE';
  const view = overrides.view ?? 'Cuentas Contables';

  return {
    caseId,
    title: 'elimina registro y valida resultado success',
    bugTitle: `[QA-AUTO][${caseId}] No se encuentra la opcion Eliminar en ${view}`,
    bugDescription: 'N/D',
    block: 'Bloque 5',
    specFile: `tests/e2e/bloque-5/${caseId}/${caseId}.spec.ts`,
    project: 'chromium-gestorAM',
    role: 'gestorAM',
    browser: 'chromium',
    status: 'FAILED',
    durationMs: 53000,
    retry: 0,
    finalUrl: 'https://distribuciongastos.pacificotest.com.pe/parametrizacion/cuentas-contables/',
    phase: 'Ejecutar accion Eliminar desde la tabla',
    classification: 'NAV_FAILURE',
    errorMessage: 'Debe existir la opcion Eliminar en el menu de acciones.',
    expectedResult: 'La opcion Eliminar en el menu de acciones debe estar visible.',
    observedResult: 'No se encontro la opcion Eliminar en el menu de acciones dentro del tiempo maximo de 5000 ms.',
    stackSummary: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
    expected: 'visible',
    received: 'N/D',
    errorOrigin: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
    timeout: '5000 ms',
    executedAt: '2026-08-19T00:00:00.000Z',
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
      caseId,
      phase: 'Ejecutar accion Eliminar desde la tabla',
      probableCause: 'NAV_FAILURE',
      message: 'Debe existir la opcion Eliminar en el menu de acciones.',
      expectedRole: 'gestorAM',
      expectedProject: 'chromium-gestorAM',
      usedProject: 'chromium-gestorAM',
      file: `tests/e2e/bloque-5/${caseId}/${caseId}.spec.ts`,
      technicalOrigin: 'tests/e2e/bloque-5/_shared/am-delete-record.ts:94',
      view,
    },
    incidentDecision: {
      classification: 'BUSINESS_RULE_FAILURE',
      probableCause,
      confidence: 'HIGH',
      evidence: [],
      decision: 'BUG_AUTO',
      reason: 'El caso requiere funcionalmente la accion Eliminar.',
      recommendation: 'Registrar incidencia funcional.',
      azureDevOpsEligibility: 'ELEGIBLE PARA CREACION AUTOMATICA',
    },
    originalError: 'Error: Debe existir la opcion Eliminar en el menu de acciones.',
  };
}

function bug(id: number, signature?: string, state = 'Active') {
  return {
    id,
    fields: {
      'System.Description': signature ? `QA-AUTO-SIGNATURE:<br>\n${signature}` : 'Bug automatico antiguo sin firma.',
      'System.State': state,
      'System.Tags': 'QA-AUTO; Playwright; E37-AM-01.01.1',
    },
  };
}

test.describe('azure incident duplicate signature', () => {
  test.beforeEach(() => {
    test.info().annotations.push({ type: 'dedup', description: 'console.debug is expected for candidate audit' });
  });

  test('A. same caseId, cause and view is duplicate', () => {
    const duplicate = findDuplicateBySignature(makeCandidate(), [
      bug(11, 'E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables'),
    ]);

    expect(duplicate?.id).toBe(11);
  });

  test('B. same caseId with different cause is not duplicate', () => {
    const duplicate = findDuplicateBySignature(makeCandidate({ probableCause: 'PROCESS_TIMEOUT' }), [
      bug(11, 'E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables'),
    ]);

    expect(duplicate).toBeUndefined();
  });

  test('C. same caseId and cause with different view is not duplicate', () => {
    const duplicate = findDuplicateBySignature(makeCandidate({ view: 'Distribuciones' }), [
      bug(11, 'E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables'),
    ]);

    expect(duplicate).toBeUndefined();
  });

  test('D. same caseId without QA-AUTO-SIGNATURE is not duplicate', () => {
    const duplicate = findDuplicateBySignature(makeCandidate(), [bug(11)]);

    expect(duplicate).toBeUndefined();
  });

  test('E. identical signature in closed bug is not duplicate', () => {
    const duplicate = findDuplicateBySignature(makeCandidate(), [
      bug(11, 'E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables', 'Closed'),
    ]);

    expect(duplicate).toBeUndefined();
  });

  test('F. returns only the candidate with identical signature', () => {
    const duplicate = findDuplicateBySignature(makeCandidate(), [
      bug(11, 'E37-AM-01.01.1|PROCESS_TIMEOUT|Cuentas Contables'),
      bug(12, 'E37-AM-01.01.1|OPTION_NOT_AVAILABLE|Cuentas Contables'),
    ]);

    expect(duplicate?.id).toBe(12);
  });

  test('G. case and spacing differences are normalized for comparison', () => {
    const duplicate = findDuplicateBySignature(makeCandidate(), [
      bug(11, ' e37-am-01.01.1 | option_not_available | cuentas   contables '),
    ]);

    expect(duplicate?.id).toBe(11);
  });
});
