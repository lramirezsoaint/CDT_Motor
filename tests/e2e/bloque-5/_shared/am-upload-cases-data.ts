import { AmUploadCase, AmErrorUploadCase } from '../_shared/am-upload';

export interface AmDownloadCase {
  caseId: string;
  section: string;
  view: string;
  entityName: string;
}

export const AM_UPLOAD_CASES: (AmUploadCase & { order: number })[] = [
  // Parametrización
  { order: 1, caseId: 'E59-AM-01.1', section: 'Parametrización', view: 'Cuentas Contables', entityName: 'Cuentas Contables', fileName: 'REAL Cuentas Contables AM.xlsx', modalTitle: /cargar cuentas contables/i },
  { order: 2, caseId: 'E59-AM-01.2', section: 'Parametrización', view: 'Partidas', entityName: 'Partidas', fileName: 'REAL Partidas AM.xlsx', modalTitle: /cargar partidas/i },
  { order: 3, caseId: 'E59-AM-01.3', section: 'Parametrización', view: 'Centros', entityName: 'Centros', fileName: 'REAL Centros AM.xlsx', modalTitle: /cargar centros/i },
  // Aprovisionamiento
  { order: 4, caseId: 'E59-AM-02.1', section: 'Aprovisionamiento', view: 'Exactus', entityName: 'Exactus', fileName: 'REAL Exactus sin Procesar AM.xlsx', modalTitle: /cargar exactus/i },
  { order: 5, caseId: 'E59-AM-02.2', section: 'Aprovisionamiento', view: 'Unidad de Cuenta AM', entityName: 'Unidad de Cuenta AM', fileName: 'REAL Unidad de Cuenta AM.xlsx', modalTitle: /cargar unidad de cuenta/i },
];

export const AM_ERROR_UPLOAD_CASES: AmErrorUploadCase[] = [
  // Aprovisionamiento - sin antecesor
  { caseId: 'E58-AM-02.1', section: 'Aprovisionamiento', view: 'Exactus', entityName: 'Exactus', fileName: 'REAL Exactus sin Procesar AM.xlsx', modalTitle: /cargar exactus/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
  { caseId: 'E58-AM-02.2', section: 'Aprovisionamiento', view: 'Unidad de Cuenta AM', entityName: 'Unidad de Cuenta AM', fileName: 'REAL Unidad de Cuenta AM.xlsx', modalTitle: /cargar unidad de cuenta/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
  // Parametrización - archivo incorrecto
  { caseId: 'E60-AM-01', section: 'Parametrización', view: 'Cuentas Contables', entityName: 'Cuentas Contables', fileName: 'REAL Cuentas Contables AM incorrecto.xlsx', modalTitle: /cargar cuentas contables/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
  { caseId: 'E60-AM-02', section: 'Parametrización', view: 'Partidas', entityName: 'Partidas', fileName: 'REAL Partidas AM incorrecto.xlsx', modalTitle: /cargar partidas/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
  { caseId: 'E60-AM-03', section: 'Parametrización', view: 'Centros', entityName: 'Centros', fileName: 'REAL Centros AM incorrecto.xlsx', modalTitle: /cargar centros/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
  // Aprovisionamiento - archivo incorrecto
  { caseId: 'E60-AM-04', section: 'Aprovisionamiento', view: 'Exactus', entityName: 'Exactus', fileName: 'REAL Exactus AM incorrecto.xlsx', modalTitle: /cargar exactus/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
  { caseId: 'E60-AM-05', section: 'Aprovisionamiento', view: 'Unidad de Cuenta AM', entityName: 'Unidad de Cuenta AM', fileName: 'REAL Unidad de Cuenta AM incorrecto.xlsx', modalTitle: /cargar unidad de cuenta/i, errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i },
];

export const AM_DOWNLOAD_CASES: AmDownloadCase[] = [
  { caseId: 'E62-AM-01.1', section: 'Parametrización', view: 'Cuentas Contables', entityName: 'Cuentas Contables' },
  { caseId: 'E62-AM-01.2', section: 'Parametrización', view: 'Partidas', entityName: 'Partidas' },
  { caseId: 'E62-AM-01.3', section: 'Parametrización', view: 'Centros', entityName: 'Centros' },
  { caseId: 'E62-AM-02.1', section: 'Aprovisionamiento', view: 'Exactus', entityName: 'Exactus' },
  { caseId: 'E62-AM-02.2', section: 'Aprovisionamiento', view: 'Unidad de Cuenta AM', entityName: 'Unidad de Cuenta AM' },
];
