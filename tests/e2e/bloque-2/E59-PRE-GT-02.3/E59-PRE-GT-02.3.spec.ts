import { UploadCase } from '../_shared/gt-upload';

// TODO: El catalogo nombra el archivo como 'PRESUPUESTO Unidad de Cuenta GT'; el fixture disponible se llama 'REAL Unidad de Cuenta GT.xlsx'.
UploadCase({
  caseId: 'E59-PRE-GT-02.3',
  section: 'Aprovisionamiento',
  view: 'Unidad de Cuenta GT',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Unidad de Cuenta|Recargar Unidad de Cuenta/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'REAL Unidad de Cuenta GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});