import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  role: 'gestor-gasto',
  modalTitle: /Cargar Driver Subcanal/i,
  fileFolder: 'GT/Real',
  fileName: 'REAL Driver Subcanal GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

