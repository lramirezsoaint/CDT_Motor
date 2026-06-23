import { UploadCase } from '../_shared/gt-upload';

// TODO: El catalogo solicita archivo PRESUPUESTO Unidad de Cuenta GT, pero fixtures/files/bloque-2/GT/Presupuesto no contiene ese archivo.
UploadCase({
  caseId: 'E4-PRE-GT-02.3.1',
  section: 'Aprovisionamiento',
  view: 'Unidad de cuenta GT',
  modalTitle: /Cargar Unidad de cuenta GT|Cargar Unidad de Cuenta/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Unidad de Cuenta GT.xlsx',
  expectedResult: 'success',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
});
