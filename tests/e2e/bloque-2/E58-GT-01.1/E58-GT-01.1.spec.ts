import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
 caseId: 'E58-GT-01.1',
 section: 'Parametrización',
 view: 'Centros',
 role: 'gestorGT',
 modalTitle: /Cargar Centros/i,
 fileFolder: 'Real/success',
 fileName: 'REAL Centros GT.xlsx',
 expectedResult: 'ancestorError',
 expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

