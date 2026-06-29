import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
  caseId: 'E10-PRE-GT-01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: {
    tipo: /Presupuesto/i,
  },
});