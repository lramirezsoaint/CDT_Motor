import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E35-GF-04-02.3',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 modalTitle: /cargar maestro de negocios y embebidos/i,
 fileFolder: 'E4-GF-02.5',
 fileName: 'REAL Maestro Negocio y Embebidos GF.xlsx',
 expectedResult: 'success',
});
