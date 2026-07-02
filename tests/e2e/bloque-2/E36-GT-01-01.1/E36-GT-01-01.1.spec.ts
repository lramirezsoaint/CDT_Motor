import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-GT-01-01.1',
 section: 'Parametrización',
 view: 'Ramo',
 role: 'gestorGT',
 modalTitle: /Editar\s+Ramo|Editar Ramo/i,
 fields: [
 { label: /Descripción Ramo/i, value: 'DESHONESTIDAD' },
 { label: /Rubro/i, value: 'DESHONESTIDAD FRENTE A LA EMPRESA' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['DESHONESTIDAD'],
});