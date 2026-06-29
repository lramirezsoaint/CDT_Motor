import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
  caseId: 'E10-PRE-GT-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: {
    tipo: /Presupuesto/i,
  },
});