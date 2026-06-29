import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E70-PRE-GT-02.4',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Driver Subcanal/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'Driver Subcanal GT.xlsx',
  expectedResult: 'validationDownload',
});
