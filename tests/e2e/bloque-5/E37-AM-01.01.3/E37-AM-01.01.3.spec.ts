import { DeleteRecordCase } from '../_shared/am-delete-record';

DeleteRecordCase({
  caseId: 'E37-AM-01.01.3',
  section: 'Parametrizaci\u00f3n',
  view: 'Centros',
  role: 'gestorAM',
  expectedResult: 'success',
  warningMessage: /seguro.*eliminar este registro|desea eliminar este registro/i,
  expectedMessage: /registro eliminado correctamente|eliminado correctamente/i,
  skipReason: 'No existe el boton de eliminar',});