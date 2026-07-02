import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E70-PRE-GT-03.1',
 section: 'Asignaciones|Asignaci',
 view: 'M.todo Subcanal|Metodo Subcanal',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar M.todo Subcanal|Cargar Metodo Subcanal/i,
 fileFolder: 'Presupuesto/validationError',
 fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
 expectedResult: 'validationDownload',
});
