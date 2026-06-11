import { UploadCase  } from '../_shared/gt-upload';

UploadCase ({
  caseId: 'E70-GT-02.5',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  modalTitle: /Cargar Maestro de Negocios y Embebidos/i,
  fileFolder: 'E70-GT-02.5',
  fileName: 'REAL Maestro Embebidos GT.xlsx',
  expectedResult: 'validationDownload',
});

