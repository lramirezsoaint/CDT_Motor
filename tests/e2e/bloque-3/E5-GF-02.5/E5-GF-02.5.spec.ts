import { UploadCase  } from '../_shared/gf-upload';

UploadCase ({
  caseId: 'E5-GF-02.5',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  modalTitle: /Cargar Maestro de Negocios y Embebidos/i,
  fileFolder: 'E5-GF-02.5',
  fileName: 'REAL Maestro Negocio y Embebidos GF.xlsx',
  expectedResult: 'headersError',
});