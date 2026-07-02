import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E70-PRE-GT-02.6',
 section: 'Aprovisionamiento',
 view: 'maestro de negocio.*embebido|maestro de negocio.*embebidos',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Maestro de Negocio y Embebido|Cargar Maestro de Negocios y Embebidos/i,
 fileFolder: 'Presupuesto/validationError',
 fileName: 'PRESUPUESTO Maestro Negocio y Embebidos GT.xlsx',
 expectedResult: 'validationDownload',
});
