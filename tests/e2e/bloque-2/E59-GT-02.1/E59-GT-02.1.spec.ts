import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Exactus',
  modalTitle: /Cargar Exactus|Recargar Exactus/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Exactus sin procesar GT.xlsx',
  expectedResult: 'success',
});
