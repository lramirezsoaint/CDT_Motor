import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
  caseId: 'E71-PRE-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Driver Subcanal/i,
});
