import { UploadCaseE4 } from '../_shared/gt-upload';

UploadCaseE4({
  caseId: 'E35-GT-04-02.2',
  section: 'Aprovisionamiento',
  view: 'maestro de negocio.*embebidos',
  role: 'gestorGT',
  modalTitle: /Cargar Maestro de Negocio y Embebidos|Recargar Maestro de Negocio y Embebidos/i,
  fileFolder: 'Real/success',
  fileName: 'REAL Maestro Embebidos GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*información previamente cargada será reemplazada|Desea continuar con la carga/i,
});