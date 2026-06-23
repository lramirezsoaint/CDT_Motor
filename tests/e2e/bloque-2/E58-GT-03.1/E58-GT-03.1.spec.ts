import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  role: 'gestor-gasto',
  modalTitle: /Cargar Método Subcanal/i,
  fileFolder: 'GT/Real',
  fileName: 'REAL Método Subcanal GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

