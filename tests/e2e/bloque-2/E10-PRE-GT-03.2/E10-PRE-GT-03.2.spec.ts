import { DownloadCase } from '../_shared/gt-download';

DownloadCase({
  caseId: 'E10-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: {
    tipo: /Presupuesto/i,
  },
});