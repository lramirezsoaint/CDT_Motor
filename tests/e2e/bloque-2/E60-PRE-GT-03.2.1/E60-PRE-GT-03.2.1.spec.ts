import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
  caseId: 'E60-PRE-GT-03.2.1',
  section: 'Asignaciones',
  view: 'Método Subcanal|Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  action: 'search',
  searchText: 'Concepto',
});
