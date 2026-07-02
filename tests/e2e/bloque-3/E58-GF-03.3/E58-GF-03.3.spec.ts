import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-03.3',
 section: 'Asignaciones',
 view: 'Método Subcanal',
 entityName: 'Especiales NIIF',
 fileName: 'REAL Especiales NIIF GF.xlsx',
 modalTitle: /cargar m[eé]todo subcanal/i,
 errorMessage: /no se puede cargar.*archivo anterior.*no ha sido cargado/i,
});
