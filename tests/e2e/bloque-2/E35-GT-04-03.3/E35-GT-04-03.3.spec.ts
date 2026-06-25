import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-GT-04-03.3',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  role: 'gestor-gasto',
  modalTitle: /Cargar Especiales NIIF|Recargar Especiales NIIF/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Especiales NIIF GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});