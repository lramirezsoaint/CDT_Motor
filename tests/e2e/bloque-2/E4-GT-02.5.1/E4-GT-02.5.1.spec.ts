import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-GT-02.5.1',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  modalTitle: /Cargar Maestro de Negocios y Embebidos/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Maestro Embebidos GT.xlsx',
  expectedResult: 'success',
});
