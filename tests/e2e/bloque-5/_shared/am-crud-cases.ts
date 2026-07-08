export type AmCrudCase = {
  caseId: string;
  flow: 'uploadValidation' | 'requiredFields' | 'blocked';
  section: string;
  view: string;
  entityName: string;
  requiredFields?: string[];
  catalogFileDescription?: string;
  blockedReason?: string;
};

const blocked = (caseId: string, section: string, view: string, reason: string): AmCrudCase => ({
  caseId, flow: 'blocked', section, view, entityName: view, blockedReason: reason,
});
const required = (caseId: string, section: string, view: string, fields: string[]): AmCrudCase => ({
  caseId, flow: 'requiredFields', section, view, entityName: view, requiredFields: fields,
});
const upload = (caseId: string, section: string, view: string, file: string): AmCrudCase => ({
  caseId, flow: 'uploadValidation', section, view, entityName: view, catalogFileDescription: file,
});

const noUniqueValues = 'TODO [CATALOGO]: el caso enumera valores permitidos, pero no define un juego unico a seleccionar.';
const noTarget = 'TODO [DATA]: el catalogo no identifica un registro objetivo seguro y estable para editar o eliminar.';
const priorCase = 'TODO [PRECONDICION]: requiere datos creados por otro caso, sin identificador aislado ni estrategia de preparacion.';
const runningProcess = 'TODO [PRECONDICION]: requiere un proceso en ejecucion y el catalogo no define como prepararlo de forma aislada.';

export const AM_CRUD_CASES: Record<string, AmCrudCase> = Object.fromEntries([
  upload('E70-AM-01.1', 'Parametrizaci', 'Cuentas Contables', 'REAL Cuentas Contables AM preparado con errores'),
  upload('E70-AM-01.2', 'Parametrizaci', 'Partidas', 'REAL Partidas AM preparado con errores'),
  upload('E70-AM-01.3', 'Parametrizaci', 'Centros', 'REAL Centros AM preparado con errores'),
  upload('E70-AM-02.1', 'Aprovisionamiento', 'Exactus', 'REAL Exactus sin Procesar AM preparado con errores'),
  upload('E70-AM-02.2', 'Aprovisionamiento', 'Unidad de Cuenta AM', 'REAL Unidad de Cuenta AM preparado con errores'),
  blocked('E35-AM-01.01.1', 'Parametrizaci', 'Cuentas Contables', noUniqueValues),
  blocked('E35-AM-01.01.2', 'Parametrizaci', 'Partidas', noUniqueValues),
  blocked('E35-AM-01.01.3', 'Parametrizaci', 'Centros', noUniqueValues),
  blocked('E35-AM-01.02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', noUniqueValues),
  blocked('E35-AM-02.01.1', 'Parametrizaci', 'Cuentas Contables', priorCase),
  blocked('E35-AM-02.01.2', 'Parametrizaci', 'Partidas', priorCase),
  blocked('E35-AM-02.01.3', 'Parametrizaci', 'Centros', priorCase),
  blocked('E35-AM-02.02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', priorCase),
  required('E35-AM-03-01.1', 'Parametrizaci', 'Cuentas Contables', [
    'Cuenta Contable', 'Nombre Cuenta Contable', 'Tipo de gasto', 'Concepto', 'Concepto N1', 'Concepto N2', 'Concepto N3', 'Concepto NIIF',
  ]),
  required('E35-AM-03-01.2', 'Parametrizaci', 'Partidas', ['Codigo Partida', 'Partida', 'Grupo Gasto', 'Tipo Gasto']),
  required('E35-AM-03-01.3', 'Parametrizaci', 'Centros', ['Codigo Centro', 'Centro', 'Tipo']),
  required('E35-AM-03-02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', ['Prioridad', 'Unidad de cuenta', 'Factor']),
  blocked('E35-AM-04-01.1', 'Parametrizaci', 'Cuentas Contables', priorCase),
  blocked('E35-AM-04-01.2', 'Parametrizaci', 'Partidas', priorCase),
  blocked('E35-AM-04-01.3', 'Parametrizaci', 'Centros', priorCase),
  blocked('E35-AM-04-02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', priorCase),
  blocked('E36-AM-01-01.1', 'Parametrizaci', 'Cuentas Contables', `${noTarget} ${noUniqueValues}`),
  blocked('E36-AM-01-01.2', 'Parametrizaci', 'Partidas', `${noTarget} ${noUniqueValues}`),
  blocked('E36-AM-01-01.3', 'Parametrizaci', 'Centros', `${noTarget} ${noUniqueValues}`),
  blocked('E36-AM-01-02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', `${noTarget} ${noUniqueValues}`),
  blocked('E36-AM-03-01.1', 'Parametrizaci', 'Cuentas Contables', noTarget),
  blocked('E36-AM-03-01.2', 'Parametrizaci', 'Partidas', noTarget),
  blocked('E36-AM-03-01.3', 'Parametrizaci', 'Centros', noTarget),
  blocked('E36-AM-03-02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', noTarget),
  blocked('E37-AM-01.01.1', 'Parametrizaci', 'Cuentas Contables', noTarget),
  blocked('E37-AM-01.01.2', 'Parametrizaci', 'Partidas', noTarget),
  blocked('E37-AM-01.01.3', 'Parametrizaci', 'Centros', noTarget),
  blocked('E37-AM-01.02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', noTarget),
  blocked('E37-AM-02.01.1', 'Parametrizaci', 'Cuentas Contables', runningProcess),
  blocked('E37-AM-02.01.2', 'Parametrizaci', 'Partidas', runningProcess),
  blocked('E37-AM-02.01.3', 'Parametrizaci', 'Centros', runningProcess),
  blocked('E37-AM-02.02.1', 'Aprovisionamiento', 'Unidad de Cuenta AM', runningProcess),
].map((config) => [config.caseId, config]));
