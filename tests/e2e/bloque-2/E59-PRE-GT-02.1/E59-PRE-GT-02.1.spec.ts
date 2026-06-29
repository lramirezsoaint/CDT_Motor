import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E59-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Presupuesto',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Exactus|Presupuesto|Recargar Exactus|Presupuesto/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});