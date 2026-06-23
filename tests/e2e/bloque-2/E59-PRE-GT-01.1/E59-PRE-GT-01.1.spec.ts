import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E59-PRE-GT-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Ramos|Ramo|Recargar Ramos|Ramo/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Ramos GT.xlsx',
  expectedResult: 'success',
  expectedWarning: /Desea continuar con la carga|continuar con la carga/i,
});