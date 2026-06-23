import { UploadCase } from '../_shared/gt-upload';

UploadCase({
  caseId: 'E35-PRE-GT-04-02.2',
  section: 'Aprovisionamiento',
  view: 'Maestro de Negocio.*Embebidos',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Cargar Maestro.*Embebidos|Recargar Maestro.*Embebidos/i,
  fileFolder: 'GT/Presupuesto',
  fileName: 'PRESUPUESTO Maestro Negocio y Embebidos GT.xlsx',
  action: 'recargar',
  expectedResult: 'success',
  expectedWarning: /Si sube un nuevo archivo.*informaci[oó]n previamente cargada ser[aá] reemplazada|Desea continuar con la carga/i,
});