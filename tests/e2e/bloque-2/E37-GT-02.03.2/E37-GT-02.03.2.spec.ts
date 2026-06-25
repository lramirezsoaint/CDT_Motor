import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-02.03.2',
  section: 'Asignaciones',
  view: 'Metodo Producto|Método Producto',
  role: 'admin',
  expectedResult: 'processError',
warningMessage: /Está seguro que desea eliminar este registro.*/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});