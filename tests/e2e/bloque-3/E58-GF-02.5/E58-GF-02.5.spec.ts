import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-02.5',
 section: 'Aprovisionamiento',
 view: 'Maestro de Negocio y Embebidos',
 entityName: 'Maestro de Negocio y Embebidos',
 fileName: 'REAL Maestro Negocio y Embebidos GF.xlsx',
 modalTitle: /cargar maestro de negocio y embebidos/i,
 errorMessage: /no se puede cargar.*archivo anterior.*no ha sido cargado/i,
});
