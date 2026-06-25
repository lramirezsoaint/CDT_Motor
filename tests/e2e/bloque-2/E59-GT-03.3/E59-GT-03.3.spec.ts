import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-GT-03.3',
  section: 'Asignaciones',
  view: 'especiales niif',
  modalTitle: /Cargar Especiales NIIF|Recargar Especiales NIIF/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Especiales NIIF GT.xlsx',
  expectedResult: 'success',
});
