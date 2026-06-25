import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-02.03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  role: 'admin',
  expectedResult: 'processError',
warningMessage: /Está seguro que desea eliminar este registro.*/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});