import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
  caseId: 'E10-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Presupuesto',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: {
    tipo: /Presupuesto/i,
  },
});