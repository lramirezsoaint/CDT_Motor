import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E4-PRE-GT-01.1.1',
 section: 'Parametrización',
 view: 'Ramo',
 modalTitle: /Cargar Ramos?/i,
 fileFolder: 'Presupuesto/success',
 fileName: 'PRESUPUESTO Ramos GT.xlsx',
 expectedResult: 'success',
 flow: 'presupuesto',
 role: 'gestorGT',
 priority: 'critical',
 distribution: { tipo: /Presupuesto/i },
});
