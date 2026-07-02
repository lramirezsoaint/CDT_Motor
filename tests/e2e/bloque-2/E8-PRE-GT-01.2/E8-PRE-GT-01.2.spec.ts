import { UploadCase } from '../_shared/gt-upload';

 // TODO: No existe fixture incompleto especifico de Presupuesto para Cuentas Contables; se reutiliza el fixture incompleto equivalente de GT Real.

UploadCase({
 caseId: 'E8-PRE-GT-01.2',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Cuentas Contables/i,
 fileFolder: 'Presupuesto/validationError',
 fileName: 'PRESUPUESTO Cuentas Contables GT.xlsx',
 expectedResult: 'validationError',
});
