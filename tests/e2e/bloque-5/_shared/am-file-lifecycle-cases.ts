export type AmFileLifecycleFlow =
  | 'dependencyError'
  | 'overwrite'
  | 'maxSize'
  | 'download'
  | 'downloadIntegrity'
  | 'reloadDownloaded';

export type AmFileLifecycleCase = {
  caseId: string;
  flow: AmFileLifecycleFlow;
  section: string;
  view: string;
  entityName: string;
  modalTitle: RegExp;
  catalogFileDescription?: string;
};

const row = (
  caseId: string, flow: AmFileLifecycleFlow, section: string, view: string,
  entityName = view, catalogFileDescription?: string,
): AmFileLifecycleCase => ({
  caseId, flow, section, view, entityName, catalogFileDescription,
  modalTitle: new RegExp(`Cargar ${entityName.replace(' sin Procesar', '')}`, 'i'),
});

export const AM_FILE_LIFECYCLE_CASES: Record<string, AmFileLifecycleCase> = Object.fromEntries([
  row('E58-AM-02.1', 'dependencyError', 'Aprovisionamiento', 'Exactus', 'Exactus', 'REAL Exactus sin Procesar AM'),
  row('E58-AM-02.2', 'dependencyError', 'Aprovisionamiento', 'Unidad de Cuenta AM', 'Unidad de Cuenta AM', 'REAL Unidad de Cuenta AM'),
  row('E59-AM-01.1', 'overwrite', 'Parametrizaci', 'Cuentas Contables', 'Cuentas Contables', 'REAL Cuentas Contables AM'),
  row('E59-AM-01.2', 'overwrite', 'Parametrizaci', 'Partidas', 'Partidas', 'REAL Partidas AM'),
  row('E59-AM-01.3', 'overwrite', 'Parametrizaci', 'Centros', 'Centros', 'REAL Centros AM'),
  row('E59-AM-02.1', 'overwrite', 'Aprovisionamiento', 'Exactus', 'Exactus', 'REAL Exactus sin Procesar AM'),
  row('E59-AM-02.2', 'overwrite', 'Aprovisionamiento', 'Unidad de Cuenta AM', 'Unidad de Cuenta AM', 'REAL Unidad de Cuenta AM'),
  row('E61-AM-01.1', 'maxSize', 'Parametrizaci', 'Cuentas Contables', 'Cuentas Contables', 'REAL Cuentas Contables AM mayor a 30 MB'),
  row('E61-AM-01.2', 'maxSize', 'Parametrizaci', 'Partidas', 'Partidas', 'REAL Partidas AM mayor a 30 MB'),
  row('E61-AM-01.3', 'maxSize', 'Parametrizaci', 'Centros', 'Centros', 'REAL Centros AM mayor a 30 MB'),
  row('E61-AM-02.1', 'maxSize', 'Aprovisionamiento', 'Exactus', 'Exactus', 'REAL Exactus sin Procesar AM mayor a 30 MB'),
  row('E61-AM-02.2', 'maxSize', 'Aprovisionamiento', 'Exactus procesado', 'Exactus procesado', 'REAL Exactus procesado AM mayor a 30 MB'),
  row('E61-AM-02.3', 'maxSize', 'Aprovisionamiento', 'Unidad de Cuenta AM', 'Unidad de Cuenta AM', 'REAL Unidad de Cuenta AM mayor a 30 MB'),
  row('E10-AM-01.1', 'download', 'Parametrizaci', 'Cuentas Contables'),
  row('E10-AM-01.2', 'download', 'Parametrizaci', 'Partidas'),
  row('E10-AM-01.3', 'download', 'Parametrizaci', 'Centros'),
  row('E10-AM-02.1', 'download', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  row('E10-AM-02.2', 'download', 'Aprovisionamiento', 'Unidad de Cuenta AM'),
  row('E11-AM-01.1', 'downloadIntegrity', 'Parametrizaci', 'Cuentas Contables'),
  row('E11-AM-01.2', 'downloadIntegrity', 'Parametrizaci', 'Partidas'),
  row('E11-AM-01.3', 'downloadIntegrity', 'Parametrizaci', 'Centros'),
  row('E11-AM-02.1', 'downloadIntegrity', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  row('E11-AM-02.2', 'downloadIntegrity', 'Aprovisionamiento', 'Unidad de Cuenta AM'),
  row('E71-AM-01.1', 'reloadDownloaded', 'Parametrizaci', 'Cuentas Contables'),
  row('E71-AM-01.2', 'reloadDownloaded', 'Parametrizaci', 'Partidas'),
  row('E71-AM-01.3', 'reloadDownloaded', 'Parametrizaci', 'Centros'),
  row('E71-AM-02.1', 'reloadDownloaded', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  row('E71-AM-02.2', 'reloadDownloaded', 'Aprovisionamiento', 'Exactus procesado'),
  row('E71-AM-02.3', 'reloadDownloaded', 'Aprovisionamiento', 'Unidad de Cuenta AM'),
].map((config) => [config.caseId, config]));
