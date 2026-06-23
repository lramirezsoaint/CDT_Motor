import { DeleteDistributionCase } from '../_shared/gt-distribution-actions';

DeleteDistributionCase({
  caseId: 'E43-DIS-01.3',
  role: 'admin',
  state: /detenida|detenido|corriendo|completada/i,
  expectedResult: 'unavailable',
});