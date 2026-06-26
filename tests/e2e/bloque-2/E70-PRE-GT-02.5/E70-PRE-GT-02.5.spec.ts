// TODO: El catalogo solicita el fixture 'PRESUPUESTO Unidad de Cuenta GT', pero en fixtures solo existe 'REAL Unidad de Cuenta GT.xlsx' para Presupuesto.
import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E70-PRE-GT-02.5',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT|Unidad de cuenta',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Unidad de Cuenta GT/i,
  fileFolder: 'Presupuesto/validationError',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'validationDownload',
});
