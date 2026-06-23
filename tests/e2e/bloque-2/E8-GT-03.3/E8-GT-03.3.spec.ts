import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E8-GT-03.3',
  section: 'Asignaciones',
  view: 'especiales niif',
  modalTitle: /Cargar Especiales NIIF/i,
  fileFolder: 'Real/validationError',
  fileName: 'REAL Especiales NIIF GT.xlsx',
  expectedResult: 'validationError',
});
