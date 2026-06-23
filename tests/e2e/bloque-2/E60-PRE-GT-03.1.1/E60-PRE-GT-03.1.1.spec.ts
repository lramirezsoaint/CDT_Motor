import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
  caseId: 'E60-PRE-GT-03.1.1',
  section: 'Asignaciones',
  view: 'M.todo Subcanal|Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  action: 'open',
});
