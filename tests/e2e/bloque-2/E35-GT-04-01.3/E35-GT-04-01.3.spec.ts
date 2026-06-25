import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-GT-04-01.3',
  section: 'Parametrización',
  view: 'Centros',
  role: 'gestor-gasto',
  modalTitle: /Cargar Centros|Recargar Centros/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Centros GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});