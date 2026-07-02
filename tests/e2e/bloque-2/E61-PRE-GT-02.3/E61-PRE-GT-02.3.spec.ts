import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E61-PRE-GT-02.3',
 section: 'Aprovisionamiento',
 view: 'Unidad de Cuenta|Unidad de cuenta GT',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Unidad de Cuenta GT/i,
 fileFolder: 'Presupuesto/maxSize',
 fileName: 'PRESUPUESTO Unidad de Cuenta GT.xlsx',
 expectedResult: 'maxSize',
});
