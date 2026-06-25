import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  modalTitle: /Cargar Driver Subcanal|Recargar Driver Subcanal/i,
  fileFolder: 'Real/success',
  fileName: 'Driver Subcanal GT.xlsx',
  expectedResult: 'success',
});
