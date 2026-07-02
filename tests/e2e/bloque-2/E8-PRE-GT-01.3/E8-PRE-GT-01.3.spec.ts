import { UploadCase } from '../_shared/gt-upload';

 // TODO: No existe fixture incompleto especifico de Presupuesto para Centros; se reutiliza el fixture incompleto equivalente de GT Real.

UploadCase({
 caseId: 'E8-PRE-GT-01.3',
 section: 'Parametrización',
 view: 'Centros',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Cargar Centros/i,
 fileFolder: 'Presupuesto/validationError',
 fileName: 'PRESUPUESTO Centros GT.xlsx',
 expectedResult: 'validationError',
});
