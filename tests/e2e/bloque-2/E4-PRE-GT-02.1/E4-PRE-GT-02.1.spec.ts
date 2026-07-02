import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E4-PRE-GT-02.1',
 section: 'Aprovisionamiento',
 view: 'Presupuesto',
 modalTitle: /Cargar Detalle de Gasto/i,
 fileFolder: 'Presupuesto/success',
 fileName: 'PRESUPUESTO GT.xlsx',
 expectedResult: 'success',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
});
