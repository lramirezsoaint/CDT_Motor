import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E59-PRE-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Unidad de Cuenta|Recargar Unidad de Cuenta/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});