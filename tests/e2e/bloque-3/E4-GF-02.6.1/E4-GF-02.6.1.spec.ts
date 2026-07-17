import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-02.6.1',
 section: 'Aprovisionamiento',
 view: 'Driver Subcanal',
 modalTitle: /cargar driver subcanal/i,
 fileFolder: 'E4-GF-02.3',
 fileName: 'REAL Driver Subcanal GF.xlsx',
 expectedResult: 'success',
});
