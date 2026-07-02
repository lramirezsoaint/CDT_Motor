import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E9-GT-02.3',
 section: 'Aprovisionamiento',
 view: 'Driver Subcanal',
 modalTitle: /Cargar Driver Subcanal/i,
 fileFolder: 'Real/success',
 fileName: 'Driver Subcanal GT.xlsx',
 expectedResult: 'success',
 action: 'recargar',
});
