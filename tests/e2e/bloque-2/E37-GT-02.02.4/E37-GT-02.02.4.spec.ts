import { DeleteRecordCase } from '../_shared/gt-delete-record';

DeleteRecordCase({
  caseId: 'E37-GT-02.02.4',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos|Maestro de Negocio y Embebidos',
  role: 'admin',
  expectedResult: 'processError',
  warningMessage: /Está seguro.*desea eliminar.*registro/i,
  expectedMessage: /Actualmente hay un proceso en ejecución.*no es posible editar o eliminar el registro|Espere a que finalice el proceso/i,
});