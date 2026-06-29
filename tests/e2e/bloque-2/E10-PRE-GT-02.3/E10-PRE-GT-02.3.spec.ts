import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
  caseId: 'E10-PRE-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: {
    tipo: /Presupuesto/i,
  },
});