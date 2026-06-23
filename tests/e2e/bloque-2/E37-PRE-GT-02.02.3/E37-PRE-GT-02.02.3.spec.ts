import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-PRE-GT-02.02.3',
  section: 'Aprovisionamiento',
  view: 'Maestro Negocio/Embebidos',
  flow: 'presupuesto',
  role: 'admin',
  distribution: { tipo: /Presupuesto/i },
  expectedResult: 'processError',
  warningMessage: /seguro.*desea eliminar.*registro|eliminar este registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecucion.*no es posible editar o eliminar el registro|Espere a que finalice el proceso/i,
});