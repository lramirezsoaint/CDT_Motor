import { PaginationCase } from '../_shared/gt-pagination';

// TODO: El catalogo no define una vista especifica para paginador; se usa Ramo como vista con data de Parametrizacion GT para Presupuesto.
PaginationCase({
  caseId: 'E56-PRE-GT-PAG',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
});