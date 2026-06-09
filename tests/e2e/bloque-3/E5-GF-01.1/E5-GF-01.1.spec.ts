import { UploadCase  } from '../_shared/gf-upload';

UploadCase ({
  caseId: 'E5-GF-01.1',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  modalTitle: /Cargar Cuentas Contables/i,
  fileFolder: 'E5-GF-01.1',
  fileName: 'REAL Cuentas Contables GF.xlsx',
  expectedResult: 'headersError',
});