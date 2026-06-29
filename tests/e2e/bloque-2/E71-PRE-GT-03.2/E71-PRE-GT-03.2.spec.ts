import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
  caseId: 'E71-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Especiales NIIF/i,
});
