import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E59-PRE-GT-01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Centros|Recargar Centros/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Centros GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});