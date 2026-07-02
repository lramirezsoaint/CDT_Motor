import { UploadCaseE4 } from '../_shared/gt-upload';

UploadCaseE4({
 caseId: 'E35-GT-04-03.2',
 section: 'Asignaciones',
 view: 'Método Producto',
 role: 'gestorGT',
 modalTitle: /Cargar Método Producto|Recargar Método Producto/i,
 fileFolder: 'Real/success',
 fileName: 'REAL Metodo producto GT.xlsx',
 action: 'recargar',
 expectedResult: 'success',
 expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});