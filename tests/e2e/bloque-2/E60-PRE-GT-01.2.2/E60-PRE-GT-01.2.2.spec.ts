import { ColumnsCase } from '../_shared/gt-columns';

ColumnsCase({
 caseId: 'E60-PRE-GT-01.2.2',
 section: 'Parametrización',
 view: 'Centros',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 action: 'search',
 searchText: 'Centro',
});