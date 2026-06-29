import { ReloadDownloadedCase } from '../_shared/gt-reload';

ReloadDownloadedCase({
  caseId: 'E71-PRE-GT-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal|Metodo Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Método Subcanal|Cargar Metodo Subcanal/i,
});
