import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-GT-04-01.1',
  section: 'Parametrización',
  view: 'Ramo',
  role: 'gestor-gasto',
  modalTitle: /Cargar Ramos|Recargar Ramo/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Ramos GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});