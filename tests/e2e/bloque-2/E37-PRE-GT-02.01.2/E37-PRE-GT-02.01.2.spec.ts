import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-02.01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'processError',
warningMessage: /Está seguro que desea eliminar este registro.*/i,
  expectedMessage: /Registro eliminado con éxito|registro.*eliminado.*xito/i,
});