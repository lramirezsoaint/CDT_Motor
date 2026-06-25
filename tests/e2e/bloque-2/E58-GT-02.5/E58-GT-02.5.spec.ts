import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-02.5',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  role: 'gestor-gasto',
  modalTitle: /Cargar Maestro de Negocio y Embebidos/i,
  fileFolder: 'Real',
  fileName: 'REAL Maestro Embebidos GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

