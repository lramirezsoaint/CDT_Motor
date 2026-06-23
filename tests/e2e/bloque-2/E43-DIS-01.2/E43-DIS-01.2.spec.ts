import { DeleteDistributionCase } from '../_shared/gt-distribution-actions';

DeleteDistributionCase({
  caseId: 'E43-DIS-01.2',
  role: 'admin',
  state: /con errores/i,
  expectedResult: 'success',
  warningMessage: /Se eliminaran todos los datos asociados|Desea continuar|eliminar/i,
  expectedMessage: /registro eliminado con exito|registro eliminado/i,
});