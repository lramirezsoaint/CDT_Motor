import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
 caseId: 'E59-GT-02.5',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 modalTitle: /Cargar Maestro de Negocios y Embebidos|Recargar Maestro de Negocio y Embebidos/i,
 fileFolder: 'Real/success',
 fileName: 'REAL Maestro Embebidos GT.xlsx',
 expectedResult: 'success',
});
