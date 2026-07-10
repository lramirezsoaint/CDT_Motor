import { DeleteRecordCase } from '../_shared/am-delete-record';

DeleteRecordCase({
  caseId: 'E37-AM-01.02.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta AM',
  role: 'gestorAM',
  expectedResult: 'success',
  warningMessage: /seguro.*eliminar este registro|desea eliminar este registro/i,
  expectedMessage: /registro eliminado correctamente|eliminado correctamente/i,
  skipReason: 'No existe el boton de eliminar',});
