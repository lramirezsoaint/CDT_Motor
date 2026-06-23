import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
  caseId: 'E60-PRE-GT-01.3.2',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  action: 'showAll',
});