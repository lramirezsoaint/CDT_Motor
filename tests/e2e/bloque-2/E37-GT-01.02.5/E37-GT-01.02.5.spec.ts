import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-01.02.5',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos|Maestro de Negocio y Embebidos',
  role: 'admin',
  expectedResult: 'success',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Registro eliminado con .xito|registro.*eliminado.*xito/i,
});