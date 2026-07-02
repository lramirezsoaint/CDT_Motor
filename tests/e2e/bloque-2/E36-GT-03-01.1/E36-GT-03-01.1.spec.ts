import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-GT-03-01.1',
 section: 'Parametrización',
 view: 'Ramo',
 role: 'gestorGT',
 modalTitle: /Editar Ramo/i,
 fields: [
 { label: /Descripción Ramo|Descripción/i,value: '@+qs' },
 { label: /Rubro/i,value: '@+qs' },
 ],
 expectedResult: 'validationError',
 expectedMessages: [/requerido|obligatorio|formato|incorrecto|no valido/i],
});