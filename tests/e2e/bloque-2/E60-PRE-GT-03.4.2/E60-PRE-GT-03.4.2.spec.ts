import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
  caseId: 'E60-PRE-GT-03.4.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  action: 'hideAll',
});
