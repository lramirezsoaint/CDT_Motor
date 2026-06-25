import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E58-GT-02.4',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  role: 'gestor-gasto',
  modalTitle: /Cargar Unidad de Cuenta GT/i,
  fileFolder: 'Real',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

