import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  modalTitle: /Cargar Ramos|Recargar Ramo/i,
  fileFolder: 'E59-GT-01.1',
  fileName: 'REAL Ramos GT.xlsx',
  expectedResult: 'success',
});
