import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E4-PRE-GT-03.1',
 section: 'Asignaciones',
 view: 'Método Subcanal',
 modalTitle: /Cargar Método Subcanal/i,
 fileFolder: 'Presupuesto/success',
 fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
 expectedResult: 'success',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
});
