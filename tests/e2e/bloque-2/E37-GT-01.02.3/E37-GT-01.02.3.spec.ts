import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-01.02.3',
  section: 'Aprovisionamiento',
  view: 'Drive Subcanal|Driver Subcanal',
  role: 'admin',
  expectedResult: 'success',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});