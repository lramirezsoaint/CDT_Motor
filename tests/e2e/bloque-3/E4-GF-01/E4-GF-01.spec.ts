import { UploadCase } from '../_shared/gf-upload';

UploadCase({
 caseId: 'E4-GF-01',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 modalTitle: /cargar cuentas contables/i,
 fileFolder: 'E4-GF-01.1',
 fileName: 'REAL Cuentas Contables GF.xlsx',
 expectedResult: 'success',
});
