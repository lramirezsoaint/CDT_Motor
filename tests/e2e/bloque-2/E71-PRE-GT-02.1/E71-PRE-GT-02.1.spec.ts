import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
  caseId: 'E71-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Presupuesto|Exactus',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Presupuesto|Cargar Detalle de Gasto/i,
});
