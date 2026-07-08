export type AmQueryFlow = 'columnSelect' | 'columnSearch' | 'showAll' | 'hideAll' | 'generalSearch' | 'download' | 'blocked';
export type AmQueryCase = {
  caseId: string;
  flow: AmQueryFlow;
  section?: string;
  view?: string;
  tab?: string;
  blockedReason?: string;
};
const column = (caseId: string, flow: AmQueryFlow, section: string, view: string, tab?: string): AmQueryCase =>
  ({ caseId, flow, section, view, tab });
const blocked = (caseId: string, reason: string): AmQueryCase => ({ caseId, flow: 'blocked', blockedReason: reason });

const noView = 'TODO [CATALOGO]: no se define una vista concreta ni un conjunto de datos para validar el paginador.';
const noProcess = 'TODO [DATA]: no se identifica distribucion, periodo, version, poliza ni estado de proceso reproducible.';

export const AM_QUERY_CASES: Record<string, AmQueryCase> = Object.fromEntries([
  blocked('E56-AM-PAG', noView),
  column('E60-AM-01.1.1', 'columnSelect', 'Parametrizaci', 'Cuentas Contables'),
  column('E60-AM-01.1.2', 'columnSelect', 'Parametrizaci', 'Centros'),
  column('E60-AM-01.2.1', 'columnSelect', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  column('E60-AM-01.2.2', 'columnSelect', 'Aprovisionamiento', 'Exactus', 'Exactus procesado'),
  column('E60-AM-02.1.1', 'columnSearch', 'Parametrizaci', 'Cuentas Contables'),
  column('E60-AM-02.1.2', 'columnSearch', 'Parametrizaci', 'Centros'),
  column('E60-AM-02.2.1', 'columnSearch', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  column('E60-AM-02.2.2', 'columnSearch', 'Aprovisionamiento', 'Exactus', 'Exactus procesado'),
  column('E60-AM-03.1.1', 'showAll', 'Parametrizaci', 'Cuentas Contables'),
  column('E60-AM-03.1.2', 'showAll', 'Parametrizaci', 'Centros'),
  column('E60-AM-03.2.1', 'showAll', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  column('E60-AM-03.2.2', 'showAll', 'Aprovisionamiento', 'Exactus', 'Exactus procesado'),
  column('E60-AM-04.1.1', 'hideAll', 'Parametrizaci', 'Cuentas Contables'),
  column('E60-AM-04.1.2', 'hideAll', 'Parametrizaci', 'Centros'),
  column('E60-AM-04.2.1', 'hideAll', 'Aprovisionamiento', 'Exactus', 'Exactus sin Procesar'),
  column('E60-AM-04.2.2', 'hideAll', 'Aprovisionamiento', 'Exactus', 'Exactus procesado'),
  { caseId: 'E63-AM-BUS', flow: 'generalSearch' },
  blocked('E51-GF-ER', noProcess),
  blocked('E51-GF-EC', noProcess),
  blocked('E52-GF-ER-01', noProcess),
  blocked('E52-GF-ER-02', noProcess),
  blocked('E52-GF-EC-01', noProcess),
  blocked('E52-GF-EC-02', noProcess),
  column('E69-GF-01', 'download', 'Aprovisionamiento', 'Exactus', 'Exactus procesado'),
].map((config) => [config.caseId, config]));
