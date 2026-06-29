import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E58-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Exactus',
  role: 'gestorGT',
  modalTitle: /Cargar Exactus/i,
  fileFolder: 'Real',
  fileName: 'REAL Exactus sin procesar GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

