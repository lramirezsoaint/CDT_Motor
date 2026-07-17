import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-02.5.1',
 section: 'Aprovisionamiento',
 view: 'Driver Producto',
 modalTitle: /cargar driver producto/i,
 fileFolder: 'E4-GF-02.2',
 fileName: 'REAL Driver Producto GF.xlsx',
 expectedResult: 'success',
});
