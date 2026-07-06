import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-03.1',
 section: 'Asignaciones',
 view: 'Método Subcanal',
 entityName: 'Método Subcanal',
 fileName: 'REAL Metodo Subcanal GF.xlsx',
 modalTitle: /cargar m[eé]todo subcanal/i,
 errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i,
});
