import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E59-PRE-GT-03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Especiales NIIF|Recargar Especiales NIIF/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Especiales NIIF GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});