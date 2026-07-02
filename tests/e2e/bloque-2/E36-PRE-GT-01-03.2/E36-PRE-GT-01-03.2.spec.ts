import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-PRE-GT-01-03.2',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Editar Especiales NIIF/i,
 fields: [
 { label: /Porcentaje/i, value: '100' },
 { label: /Tipo Distribución|Distribución/i, value: 'POLIZAS', kind: 'select' },
 { label: /NIIF17 Tipo|NIIF 17 Tipo|NIIF 17Tipo|Niif17 Tipo/i, value: 'GM', kind: 'select' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['GM', 'POLIZAS'],
});