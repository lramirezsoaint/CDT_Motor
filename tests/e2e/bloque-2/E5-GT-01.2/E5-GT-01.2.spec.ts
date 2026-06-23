import { UploadCase  } from '../_shared/gt-upload';

UploadCase ({
  caseId: 'E5-GT-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  modalTitle: /Cargar Cuentas Contables/i,
  fileFolder: 'Real/headersError',
  fileName: 'REAL Cuentas Contables GT.xlsx',
  expectedResult: 'headersError',
});