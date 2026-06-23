import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  role: 'gestor-gasto',
  modalTitle: /Cargar Método Producto/i,
  fileFolder: 'GT/Real',
  fileName: 'REAL Metodo producto GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

