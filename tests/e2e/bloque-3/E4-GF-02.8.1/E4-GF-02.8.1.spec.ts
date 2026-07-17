import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-02.8.1',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebidos',
 modalTitle: /cargar maestro de negocios y embebidos/i,
 fileFolder: 'E4-GF-02.5',
 fileName: 'REAL Maestro Negocio y Embebidos GF.xlsx',
 expectedResult: 'success',
});
