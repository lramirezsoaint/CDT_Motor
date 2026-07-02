import { UploadCase } from '../_shared/gt-upload';

UploadCase ({
 caseId: 'E5-GT-02.5',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 modalTitle: /Cargar Maestro de Negocios y Embebidos/i,
 fileFolder: 'Real/headersError',
 fileName: 'REAL Maestro Embebidos GT.xlsx',
 expectedResult: 'headersError',
});

