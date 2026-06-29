import { UploadCase58 } from '../_shared/gt-upload';

UploadCase58({
  caseId: 'E59-PRE-GT-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'gestorGT',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Método Subcanal|Metodo Subcanal|Recargar Método Subcanal|Metodo Subcanal/i,
  fileFolder: 'Presupuesto/success',
  fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});