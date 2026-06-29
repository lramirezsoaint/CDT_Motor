import { DistributionCopyUnavailableCase } from '../_shared/gt-distribution-actions';

DistributionCopyUnavailableCase({
  caseId: 'E42-DIS-01.1',
  role: 'gestorGT',
  states: [/creada/i, /detenido|detenida/i, /con errores/i, /corriendo/i],
});