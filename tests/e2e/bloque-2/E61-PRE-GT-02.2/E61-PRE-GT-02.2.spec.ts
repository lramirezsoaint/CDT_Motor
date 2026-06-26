import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-PRE-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Driver Subcanal/i,
  fileFolder: 'Presupuesto/maxSize',
  fileName: 'Driver Subcanal GT.xlsx',
  expectedResult: 'maxSize',
});
