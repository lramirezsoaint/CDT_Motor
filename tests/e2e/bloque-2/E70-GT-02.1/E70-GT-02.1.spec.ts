import { UploadCase  } from '../_shared/gt-upload';

UploadCase ({
  caseId: 'E70-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Exactus',
  modalTitle: /Cargar Exactus/i,
  fileFolder: 'Real/validationError',
  fileName: 'REAL Exactus sin procesar GT.xlsx',
  expectedResult: 'validationDownload',
});

