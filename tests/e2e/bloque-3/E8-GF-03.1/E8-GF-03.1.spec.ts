import { UploadCase  } from '../_shared/gf-upload';

UploadCase ({
  caseId: 'E8-GF-03.1',
  section: 'Asignaciones',
  view: 'especiales niif',
  modalTitle: /Cargar Especiales NIIF/i,
  fileFolder: 'E8-GF-03.1',
  fileName: 'REAL Especiales NIIF GF.xlsx',
  expectedResult: 'validationError',
});