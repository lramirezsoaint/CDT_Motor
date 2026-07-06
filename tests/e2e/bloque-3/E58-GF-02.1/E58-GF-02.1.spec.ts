import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-02.1',
 section: 'Aprovisionamiento',
 view: 'Exactus',
 entityName: 'Exactus',
 fileName: 'REAL Exactus sin procesar GF.xlsx',
 modalTitle: /cargar exactus/i,
 errorMessage: /faltan algunos datos obligatorios.*formato incorrecto.*catálogo relacionado/i,
});
