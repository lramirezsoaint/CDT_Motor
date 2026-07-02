import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-GT-01-03.3',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 role: 'gestorGT',
 modalTitle: /Editar Especiales NIIF/i,
 fields: [
 { label: /Porcentaje/i, value: '100' },
 { label: /Tipo Distribución|Distribución/i, value: 'POLIZAS', kind: 'select' },
 { label: /NIIF17 Tipo|NIIF 17 Tipo|NIIF 17Tipo|Niif17 Tipo/i, value: 'GM', kind: 'select' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['GM', 'POLIZAS'],
});