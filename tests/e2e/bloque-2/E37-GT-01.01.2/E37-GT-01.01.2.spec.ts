import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-01.01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'admin',
  expectedResult: 'success',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});