import { UploadCase } from '../_shared/gt-upload';

// TODO: El catalogo de E58-GT-03.3 es inconsistente: titulo/datos indican Especiales NIIF, pero los pasos y modal indican Metodo Subcanal.
UploadCase({
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

