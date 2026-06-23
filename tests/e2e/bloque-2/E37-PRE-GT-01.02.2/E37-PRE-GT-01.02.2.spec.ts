import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-01.02.2',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'success',
  warningMessage: /eliminar|desea continuar|seguro/i,
  expectedMessage: /eliminado|registro eliminado|hecho/i,
});