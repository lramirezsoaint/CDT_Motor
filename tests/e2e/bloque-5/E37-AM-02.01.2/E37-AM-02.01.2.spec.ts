import { DeleteRecordCase } from '../_shared/am-delete-record';

DeleteRecordCase({
  caseId: 'E37-AM-02.01.2',
  section: 'Parametrizaci\u00f3n',
  view: 'Partidas',
  role: 'gestorAM',
  expectedResult: 'processError',
  warningMessage: /seguro.*eliminar este registro|desea eliminar este registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecuci\u00f3n|no es posible editar o eliminar/i,
  skipReason: 'TODO [PRECONDICION]: requiere proceso en ejecucion y registro objetivo estable; el catalogo no define preparacion aislada.',});

