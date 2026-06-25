import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-02.03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'processError',
warningMessage: /Está seguro que desea eliminar este registro.*/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});