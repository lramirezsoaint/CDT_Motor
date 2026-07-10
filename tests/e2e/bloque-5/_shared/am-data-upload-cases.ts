import type { AmUploadResult } from './am-upload';

export type AmDataUploadCase = {
  caseId: string;
  section: string;
  view: string;
  entityName: string;
  modalTitle: RegExp;
  expectedResult: Extract<AmUploadResult, 'success' | 'validationError'>;
  catalogFileDescription: string;
};

export const AM_DATA_UPLOAD_CASES: Record<string, AmDataUploadCase> = {
  'E8-AM-01.1': {
    caseId: 'E8-AM-01.1', section: 'Parametrización', view: 'Cuentas Contables',
    entityName: 'Cuentas Contables', modalTitle: /Cargar Cuentas Contables/i,
    expectedResult: 'validationError', catalogFileDescription: 'Cuentas Contables con datos obligatorios incompletos',
  },
  'E8-AM-01.2': {
    caseId: 'E8-AM-01.2', section: 'Parametrización', view: 'Partidas',
    entityName: 'Partidas', modalTitle: /Cargar Partidas/i,
    expectedResult: 'validationError', catalogFileDescription: 'Partidas con datos obligatorios incompletos',
  },
  'E8-AM-01.3': {
    caseId: 'E8-AM-01.3', section: 'Parametrización', view: 'Centros',
    entityName: 'Centros', modalTitle: /Cargar Centros/i,
    expectedResult: 'validationError', catalogFileDescription: 'Centros con datos obligatorios incompletos',
  },
  'E8-AM-02.1': {
    caseId: 'E8-AM-02.1', section: 'Aprovisionamiento', view: 'Exactus',
    entityName: 'Exactus', modalTitle: /Cargar Exactus/i,
    expectedResult: 'validationError', catalogFileDescription: 'Exactus con datos obligatorios incompletos',
  },
  'E8-AM-02.2': {
    caseId: 'E8-AM-02.2', section: 'Aprovisionamiento', view: 'Unidad de Cuenta AM',
    entityName: 'Unidad de Cuenta AM', modalTitle: /Cargar Unidad de Cuenta AM/i,
    expectedResult: 'validationError', catalogFileDescription: 'Unidad de Cuenta AM con datos obligatorios incompletos',
  },
  'E9-AM-01.1': {
    caseId: 'E9-AM-01.1', section: 'Parametrización', view: 'Cuentas Contables',
    entityName: 'Cuentas Contables', modalTitle: /Cargar Cuentas Contables/i,
    expectedResult: 'success', catalogFileDescription: 'REAL Cuentas Contables AM',
  },
  'E9-AM-01.2': {
    caseId: 'E9-AM-01.2', section: 'Parametrización', view: 'Partidas',
    entityName: 'Partidas', modalTitle: /Cargar Partidas/i,
    expectedResult: 'success', catalogFileDescription: 'REAL Partidas AM',
  },
  'E9-AM-01.3': {
    caseId: 'E9-AM-01.3', section: 'Parametrización', view: 'Centros',
    entityName: 'Centros', modalTitle: /Cargar Centros/i,
    expectedResult: 'success', catalogFileDescription: 'REAL Centros AM',
  },
  'E9-AM-02.1': {
    caseId: 'E9-AM-02.1', section: 'Aprovisionamiento', view: 'Exactus',
    entityName: 'Exactus sin Procesar', modalTitle: /Cargar Exactus/i,
    expectedResult: 'success', catalogFileDescription: 'REAL Exactus sin Procesar AM',
  },
  'E9-AM-02.2': {
    caseId: 'E9-AM-02.2', section: 'Aprovisionamiento', view: 'Unidad de Cuenta AM',
    entityName: 'Unidad de Cuenta AM', modalTitle: /Cargar Unidad de Cuenta AM/i,
    expectedResult: 'success', catalogFileDescription: 'REAL Unidad de Cuenta AM',
  },
};
