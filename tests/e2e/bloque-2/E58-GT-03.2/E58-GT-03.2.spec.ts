import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
 caseId: 'E58-GT-03.2',
 section: 'Asignaciones',
 view: 'Método Producto',
 role: 'gestorGT',
 modalTitle: /Cargar Método Producto/i,
 fileFolder: 'Real',
 fileName: 'REAL Metodo producto GT.xlsx',
 expectedResult: 'ancestorError',
 expectedMessage: /No se puede Recargar esté archivo porque el archivo anterior aún no ha sido cargado/i,
});

