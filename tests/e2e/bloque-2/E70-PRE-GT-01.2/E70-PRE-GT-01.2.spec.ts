import { UploadCase } from '../_shared/gt-upload';

UploadCase({
 caseId: 'E70-PRE-GT-01.2',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Cuentas Contables/i,
 fileFolder: 'Presupuesto/validationError',
 fileName: 'PRESUPUESTO Cuentas Contables GT.xlsx',
 expectedResult: 'validationDownload',
});
