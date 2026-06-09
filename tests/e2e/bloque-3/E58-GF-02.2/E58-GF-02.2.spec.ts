import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
  caseId: 'E58-GF-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Producto',
  entityName: 'Driver Producto',
  fileName: 'REAL Driver Producto GF.xlsx',
  modalTitle: /cargar driver producto/i,
  errorMessage: /no se puede cargar.*archivo anterior.*no ha sido cargado/i,
});
