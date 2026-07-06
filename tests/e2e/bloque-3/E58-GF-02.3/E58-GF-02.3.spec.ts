import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-02.3',
 section: 'Aprovisionamiento',
 view: 'Driver Subcanal',
 entityName: 'Driver Subcanal',
 fileName: 'REAL Driver Subcanal GF.xlsx',
 modalTitle: /cargar driver subcanal/i,
 errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i,
});
