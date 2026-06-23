import { UploadCase } from '../_shared/gt-upload';

// TODO: El catalogo solicita archivo PRESUPUESTO Unidad de Cuenta GT, pero fixtures/files/bloque-2/GT/Presupuesto no contiene ese archivo.
UploadCase({
  caseId: 'E4-PRE-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta',
  modalTitle: /Cargar Unidad de Cuenta GT/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Unidad de Cuenta GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
});
