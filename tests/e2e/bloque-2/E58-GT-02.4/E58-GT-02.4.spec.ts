import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E58-GT-02.4',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  role: 'gestorGT',
  modalTitle: /Cargar Unidad de Cuenta GT/i,
  fileFolder: 'Real',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'ancestorError',
  expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

