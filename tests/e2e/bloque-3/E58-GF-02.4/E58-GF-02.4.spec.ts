import { defineGfUploadErrorCase } from '../_shared/gf-upload-case';

defineGfUploadErrorCase({
 caseId: 'E58-GF-02.4',
 section: 'Aprovisionamiento',
 view: 'Unidad de Cuenta',
 entityName: 'Unidad de Cuenta',
 fileName: 'REAL Unidad de Cuenta GF.xlsx',
 modalTitle: /cargar unidad de cuenta/i,
 errorMessage: /no se puede cargar.*archivo anterior.*no ha sido cargado/i,
});
