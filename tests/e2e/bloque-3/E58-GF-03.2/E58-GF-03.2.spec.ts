import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
  caseId: 'E58-GF-03.2',
  section: 'Asignaciones',
  view: 'Método Producto',
  entityName: 'Método Producto',
  fileName: 'REAL Metodo Producto GF.xlsx',
  modalTitle: /cargar m[eé]todo producto/i,
  errorMessage: /no se puede cargar.*archivo anterior.*no ha sido cargado/i,
});
