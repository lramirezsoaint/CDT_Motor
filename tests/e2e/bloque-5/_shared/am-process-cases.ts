export type AmProcessFlow = 'phase' | 'close' | 'executeAll' | 'stop' | 'restart' | 'deleteVersion' | 'manualProcessed';
export type AmProcessAutomationCase = {
  caseId: string;
  flow: AmProcessFlow;
  mode?: 'Resumido' | 'Completo';
  phase?: RegExp;
  readiness: 'BLOQUE5_PROCESS_READY' | 'BLOQUE5_EXACTUS_DELETE_READY' | 'BLOQUE5_MANUAL_EXACTUS_READY';
};
const processCase = (
  caseId: string, flow: AmProcessFlow, mode: 'Resumido' | 'Completo', phase?: RegExp,
): AmProcessAutomationCase => ({ caseId, flow, mode, phase, readiness: 'BLOQUE5_PROCESS_READY' });

export const AM_PROCESS_CASES: Record<string, AmProcessAutomationCase> = Object.fromEntries([
  processCase('E47-GF-EC-01.01', 'phase', 'Completo', /Fase Inicial|Distribuci[oó]n preliminar/i),
  processCase('E47-GF-EC-01.02', 'phase', 'Completo', /Fase 1|Canales y Subcanales/i),
  processCase('E47-GF-EC-01.03', 'phase', 'Completo', /Fase 2|Objeto de costos/i),
  processCase('E47-GF-EC-01.04', 'close', 'Completo'),
  processCase('E47-GF-EC-02.01', 'phase', 'Completo', /Fase Inicial|Distribuci[oó]n preliminar/i),
  processCase('E47-GF-EC-02.02', 'phase', 'Completo', /Fase 1|Canales y Subcanales/i),
  processCase('E47-GF-EC-02.03', 'phase', 'Completo', /Fase 2|Objeto de costos/i),
  processCase('E47-GF-EC-02.04', 'close', 'Completo'),
  processCase('E47-GF-ER-01.1', 'phase', 'Resumido', /Fase Inicial|Distribuci[oó]n preliminar/i),
  processCase('E47-GF-ER-01.2', 'phase', 'Resumido', /Fase 1|Canales y Subcanales/i),
  processCase('E47-GF-ER-01.3', 'phase', 'Resumido', /Fase 2|Objeto de costos/i),
  processCase('E47-GF-ER-01.4', 'close', 'Resumido'),
  processCase('E47-GF-ER-02.01', 'phase', 'Resumido', /Fase Inicial|Distribuci[oó]n preliminar/i),
  processCase('E47-GF-ER-02.02', 'phase', 'Resumido', /Fase 1|Canales y Subcanales/i),
  processCase('E47-GF-ER-02.03', 'phase', 'Resumido', /Fase 2|Objeto de costos/i),
  processCase('E47-GF-ER-02.04', 'close', 'Resumido'),
  processCase('E64-GF-EC-01-01', 'executeAll', 'Completo'),
  processCase('E64-GF-EC-01-02', 'executeAll', 'Completo'),
  processCase('E64-GF-ER-01-01', 'executeAll', 'Resumido'),
  processCase('E64-GF-ER-01-02', 'executeAll', 'Resumido'),
  processCase('E65-GF-EC', 'stop', 'Completo'),
  processCase('E65-GF-ER', 'stop', 'Resumido'),
  processCase('E66-GF-EC', 'restart', 'Completo'),
  processCase('E66-GF-ER', 'restart', 'Resumido'),
  { caseId: 'E68-AM-01', flow: 'deleteVersion', readiness: 'BLOQUE5_EXACTUS_DELETE_READY' },
  { caseId: 'E69-GF-EC-01', flow: 'manualProcessed', mode: 'Completo', readiness: 'BLOQUE5_MANUAL_EXACTUS_READY' },
].map((config) => [config.caseId, config]));
