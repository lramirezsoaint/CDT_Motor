export type AmCrudCase = {
  caseId: string;
  flow: 'uploadValidation';
  section: string;
  view: string;
  entityName: string;
  catalogFileDescription?: string;
};

const upload = (caseId: string, section: string, view: string, file: string): AmCrudCase => ({
  caseId,
  flow: 'uploadValidation',
  section,
  view,
  entityName: view,
  catalogFileDescription: file,
});

export const AM_CRUD_CASES: Record<string, AmCrudCase> = Object.fromEntries([
  upload('E70-AM-01.1', 'Parametrizaci\u00f3n', 'Cuentas Contables', 'REAL Cuentas Contables AM preparado con errores'),
  upload('E70-AM-01.2', 'Parametrizaci\u00f3n', 'Partidas', 'REAL Partidas AM preparado con errores'),
  upload('E70-AM-01.3', 'Parametrizaci\u00f3n', 'Centros', 'REAL Centros AM preparado con errores'),
  upload('E70-AM-02.1', 'Aprovisionamiento', 'Exactus', 'REAL Exactus sin Procesar AM preparado con errores'),
  upload('E70-AM-02.2', 'Aprovisionamiento', 'Unidad de Cuenta AM', 'REAL Unidad de Cuenta AM preparado con errores'),
].map((config) => [config.caseId, config]));
