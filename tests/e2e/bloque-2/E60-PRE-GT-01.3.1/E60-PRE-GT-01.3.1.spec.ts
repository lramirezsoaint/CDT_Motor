import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
  caseId: 'E60-PRE-GT-01.3.1',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  action: 'showAll',
});