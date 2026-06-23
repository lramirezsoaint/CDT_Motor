import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-PRE-GT-03.1',
  section: 'Asignaciones',
  view: 'Método Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Método Subcanal|Metodo Subcanal|Recargar Método Subcanal|Metodo Subcanal/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Metodo Subcanal GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});