import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E61-PRE-GT-02.1',
 section: 'Aprovisionamiento',
 view: 'Exactus|Presupuesto',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Exactus/i,
 fileFolder: 'Presupuesto/maxSize',
 fileName: 'PRESUPUESTO Exactus sin procesar GT.xlsx',
 expectedResult: 'maxSize',
});
