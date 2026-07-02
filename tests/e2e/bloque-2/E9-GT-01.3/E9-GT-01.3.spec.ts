import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E9-GT-01.3',
 section: 'Parametrización',
 view: 'Centros',
 modalTitle: /Cargar Centros/i,
 fileFolder: 'Real/success',
 fileName: 'REAL Centros GT.xlsx',
 expectedResult: 'success',
 action: 'recargar',
});
