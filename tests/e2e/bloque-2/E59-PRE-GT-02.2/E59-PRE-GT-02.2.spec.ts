import { UploadCase } from '../_shared/gt-upload';

// TODO: El catalogo nombra el archivo como 'PRESUPUESTO Driver Subcanal GT'; el fixture disponible no incluye ese prefijo.
UploadCase({
  caseId: 'E59-PRE-GT-02.2',
  section: 'Aprovisionamiento',
  view: 'Driver Subcanal',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Driver Subcanal|Recargar Driver Subcanal/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'Driver Subcanal GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});