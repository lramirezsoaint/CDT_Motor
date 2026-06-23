import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-02.01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'processError',
  warningMessage: /seguro.*desea eliminar.*registro|eliminar este registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecucion.*no es posible editar o eliminar el registro|Espere a que finalice el proceso/i,
});