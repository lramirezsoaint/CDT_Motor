import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E58-GT-02.5',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  role: 'gestorGT',
  modalTitle: /Cargar Maestro de Negocio y Embebidos/i,
  fileFolder: 'Real',
  fileName: 'REAL Maestro Embebidos GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

