import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-PRE-GT-02.1',
  section: 'Aprovisionamiento',
  view: 'Presupuesto',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Exactus|Presupuesto|Recargar Exactus|Presupuesto/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});