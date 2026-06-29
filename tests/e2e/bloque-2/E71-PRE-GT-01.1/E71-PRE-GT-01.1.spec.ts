import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
  caseId: 'E71-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramo|Cargar Ramos/i,
});
