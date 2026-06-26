import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E61-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Exactus',
  modalTitle: /Cargar Exactus/i,
  fileFolder: 'Real/maxSize',
  fileName: 'REAL Exactus sin procesar GT.xlsx',
  expectedResult: 'maxSize',
});
