import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-PRE-GT-02.4',
  section: 'Aprovisionamiento',
  view: 'Maestro Negocio/Embebidos',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Maestro de Negocio|Embebidos|Recargar Maestro de Negocio|Embebidos/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Maestro Negocio y Embebidos GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});