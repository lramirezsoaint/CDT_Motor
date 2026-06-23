import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
  caseId: 'E60-PRE-GT-02.2.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  action: 'search',
  searchText: 'Metodo',
});
