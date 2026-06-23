import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-01.01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'success',
  warningMessage: /eliminar|desea continuar|seguro/i,
  expectedMessage: /eliminado|registro eliminado|hecho/i,
});