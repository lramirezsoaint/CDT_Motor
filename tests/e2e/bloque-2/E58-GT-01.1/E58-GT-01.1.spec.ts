import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-01.1',
  section: 'Parametrización',
  view: 'Centros',
  role: 'gestor-gasto',
  modalTitle: /Cargar Centros/i,
  fileFolder: 'GT/Real',
  fileName: 'REAL Centros GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

