import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-GT-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  modalTitle: /Cargar Cuentas Contables|Recargar Cuentas Contables/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Cuentas Contables GT.xlsx',
  expectedResult: 'success',
});
