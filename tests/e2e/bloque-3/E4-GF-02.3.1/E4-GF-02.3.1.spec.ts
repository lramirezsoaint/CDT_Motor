import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-02.3.1',
 section: 'Aprovisionamiento',
 view: 'AMED',
 modalTitle: /cargar amed/i,
 fileFolder: 'E4-GF-02.6',
 fileName: 'REAL AMED GF.xlsx',
 expectedResult: 'success',
});
