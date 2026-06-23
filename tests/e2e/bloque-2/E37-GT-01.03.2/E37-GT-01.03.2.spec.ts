import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-01.03.2',
  section: 'Asignaciones',
  view: 'Metodo Producto|Método Producto',
  role: 'admin',
  expectedResult: 'success',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});