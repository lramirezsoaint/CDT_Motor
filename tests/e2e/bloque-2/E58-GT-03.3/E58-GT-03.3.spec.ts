import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E58-GT-03.3',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  role: 'gestor-gasto',
  modalTitle: /Cargar Especiales NIIF/i,
  fileFolder: 'Real',
  fileName: 'REAL Especiales NIIF GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

