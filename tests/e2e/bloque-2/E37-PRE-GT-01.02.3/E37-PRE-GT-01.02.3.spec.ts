import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-01.02.3',
  section: 'Aprovisionamiento',
  view: 'Maestro Negocio/Embebidos',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'success',
  warningMessage: /eliminar|desea continuar|seguro/i,
  expectedMessage: /eliminado|registro eliminado|hecho/i,
});