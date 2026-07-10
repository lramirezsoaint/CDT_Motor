import { DeleteRecordCase } from '../_shared/am-delete-record';

DeleteRecordCase({
  caseId: 'E37-AM-02.01.2',
  section: 'Parametrizaci\u00f3n',
  view: 'Partidas',
  role: 'gestorAM',
  expectedResult: 'processError',
  warningMessage: /seguro.*eliminar este registro|desea eliminar este registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecuci\u00f3n|no es posible editar o eliminar/i,
  skipReason: 'No existe el boton de eliminar',});