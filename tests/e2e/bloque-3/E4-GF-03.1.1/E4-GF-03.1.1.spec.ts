import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-03.1.1',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 modalTitle: /cargar especiales niif/i,
 fileFolder: 'E4-GF-03.1',
 fileName: 'REAL Especiales NIIF GF.xlsx',
 expectedResult: 'success',
});
