import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
  caseId: 'E10-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: {
    tipo: /Presupuesto/i,
  },
});