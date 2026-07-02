import { UploadCase } from '../_shared/gt-upload';

// TODO: El paso 2 del catalogo dice Asignaciones > Metodo Producto, pero titulo, datos, modal y resultado esperado son de Especiales NIIF.
UploadCase({
 caseId: 'E4-PRE-GT-03.2.1',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 modalTitle: /Cargar Especiales NIIF/i,
 fileFolder: 'Presupuesto/success',
 fileName: 'PRESUPUESTO Especiales NIIF GT.xlsx',
 expectedResult: 'success',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
});
