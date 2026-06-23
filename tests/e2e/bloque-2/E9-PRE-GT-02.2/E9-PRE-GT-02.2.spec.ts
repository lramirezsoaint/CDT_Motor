import { UploadAndTableCase } from '../_shared/gt-upload-table';

UploadAndTableCase({
  caseId: 'E9-PRE-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Driver Subcanal/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'Driver Subcanal GT.xlsx',
});
