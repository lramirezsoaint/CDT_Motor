import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Producto',
  modalTitle: /Cargar Driver Producto|Recargar Driver Producto/i,
  fileFolder: 'E59-GT-02.2',
  fileName: 'REAL Driver Producto GT.xlsx',
  expectedResult: 'success',
});
