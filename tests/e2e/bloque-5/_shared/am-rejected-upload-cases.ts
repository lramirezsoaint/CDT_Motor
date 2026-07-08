import type { AmUploadResult } from './am-upload';

export type RejectedAmUploadCase = {
  caseId: string;
  section: string;
  view: string;
  entityName: string;
  modalTitle: RegExp;
  expectedResult: Extract<AmUploadResult, 'headersError' | 'emptyFile'>;
  catalogFileDescription: string;
  catalogNote?: string;
};

export const REJECTED_AM_UPLOAD_CASES: Record<string, RejectedAmUploadCase> = {
  'E5-AM-01.1': {
    caseId: 'E5-AM-01.1',
    section: 'Parametrizaci',
    view: 'Cuentas Contables',
    entityName: 'Cuentas Contables',
    modalTitle: /Cargar Cuentas Contables/i,
    expectedResult: 'headersError',
    catalogFileDescription: 'Archivo con el mismo nombre pero diferente funcionalidad',
  },
  'E5-AM-01.2': {
    caseId: 'E5-AM-01.2',
    section: 'Parametrizaci',
    view: 'Partidas',
    entityName: 'Partidas',
    modalTitle: /Cargar Partidas/i,
    expectedResult: 'headersError',
    catalogFileDescription: 'Archivo con el mismo nombre pero diferente funcionalidad',
  },
  'E5-AM-01.3': {
    caseId: 'E5-AM-01.3',
    section: 'Parametrizaci',
    view: 'Centros',
    entityName: 'Centros',
    modalTitle: /Cargar Centros/i,
    expectedResult: 'headersError',
    catalogFileDescription: 'Archivo con el mismo nombre pero diferente funcionalidad',
  },
  'E5-AM-02.1': {
    caseId: 'E5-AM-02.1',
    section: 'Aprovisionamiento',
    view: 'Exactus',
    entityName: 'Exactus',
    modalTitle: /Cargar Exactus/i,
    expectedResult: 'headersError',
    catalogFileDescription: 'Archivo con el mismo nombre pero diferente funcionalidad',
  },
  'E5-AM-02.2': {
    caseId: 'E5-AM-02.2',
    section: 'Aprovisionamiento',
    view: 'Unidad de Cuenta AM',
    entityName: 'Unidad de Cuenta AM',
    modalTitle: /Cargar Unidad de Cuenta AM/i,
    expectedResult: 'emptyFile',
    catalogFileDescription: 'Archivo con el mismo nombre pero diferente funcionalidad',
    catalogNote:
      'TODO [CATALOGO]: la descripcion indica cabeceras diferentes, pero el resultado esperado exige un archivo sin informacion.',
  },
  'E6-AM-01.1': {
    caseId: 'E6-AM-01.1',
    section: 'Parametrizaci',
    view: 'Cuentas Contables',
    entityName: 'Cuentas Contables',
    modalTitle: /Cargar Cuentas Contables/i,
    expectedResult: 'emptyFile',
    catalogFileDescription: 'REAL Cuentas Contables AM con estructura y sin datos',
  },
  'E6-AM-01.2': {
    caseId: 'E6-AM-01.2',
    section: 'Parametrizaci',
    view: 'Partidas',
    entityName: 'Partidas',
    modalTitle: /Cargar Partidas/i,
    expectedResult: 'emptyFile',
    catalogFileDescription: 'REAL Partidas AM con estructura y sin datos',
  },
  'E6-AM-01.3': {
    caseId: 'E6-AM-01.3',
    section: 'Parametrizaci',
    view: 'Centros',
    entityName: 'Centros',
    modalTitle: /Cargar Centros/i,
    expectedResult: 'emptyFile',
    catalogFileDescription: 'REAL Centros AM con estructura y sin datos',
  },
  'E6-AM-02.1': {
    caseId: 'E6-AM-02.1',
    section: 'Aprovisionamiento',
    view: 'Exactus',
    entityName: 'Exactus',
    modalTitle: /Cargar Exactus/i,
    expectedResult: 'emptyFile',
    catalogFileDescription: 'REAL Exactus AM con estructura y sin datos',
  },
  'E6-AM-02.2': {
    caseId: 'E6-AM-02.2',
    section: 'Aprovisionamiento',
    view: 'Unidad de Cuenta AM',
    entityName: 'Unidad de Cuenta AM',
    modalTitle: /Cargar Unidad de Cuenta AM/i,
    expectedResult: 'emptyFile',
    catalogFileDescription: 'REAL Unidad de Cuenta AM con estructura y sin datos',
  },
};
