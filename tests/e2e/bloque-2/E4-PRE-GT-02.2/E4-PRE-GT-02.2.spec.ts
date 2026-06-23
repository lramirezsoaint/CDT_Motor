import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-PRE-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  modalTitle: /Cargar Driver Subcanal/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'Driver Subcanal GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
});
