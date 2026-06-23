import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E9-GT-03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  modalTitle: /Cargar Método Producto/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Metodo producto GT.xlsx',
  expectedResult: 'success',
  action: 'recargar',
});
