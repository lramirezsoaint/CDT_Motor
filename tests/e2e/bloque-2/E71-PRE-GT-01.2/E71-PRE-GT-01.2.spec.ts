import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
  caseId: 'E71-PRE-GT-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Cuentas Contables/i,
});
