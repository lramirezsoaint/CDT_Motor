import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Producto',
  role: 'gestor-gasto',
  modalTitle: /Cargar Driver Producto/i,
  fileFolder: 'GT/Real',
  fileName: 'REAL Driver Producto GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

