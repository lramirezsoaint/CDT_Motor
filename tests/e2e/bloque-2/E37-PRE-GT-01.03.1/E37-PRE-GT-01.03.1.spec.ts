import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-01.03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'success',
  warningMessage: /seguro.*desea eliminar.*registro|eliminar este registro/i,
  expectedMessage: /registro eliminado con exito|registro eliminado/i,
});