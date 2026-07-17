import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-02.7.1',
 section: 'Aprovisionamiento',
 view: 'Drivers CC Vida',
 modalTitle: /cargar driver cc vida/i,
 fileFolder: 'E4-GF-02.4',
 fileName: 'REAL Driver CC VIDA GF.xlsx',
 expectedResult: 'success',
});
