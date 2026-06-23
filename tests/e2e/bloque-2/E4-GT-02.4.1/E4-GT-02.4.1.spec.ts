import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E4-GT-02.4.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de cuenta GT',
  modalTitle: /Cargar Unidad de Cuenta GT/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'success',
});
