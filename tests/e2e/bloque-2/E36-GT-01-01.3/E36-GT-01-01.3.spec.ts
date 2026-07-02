import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-GT-01-01.3',
 section: 'Parametrización',
 view: 'Centros',
 role: 'gestorGT',
 modalTitle: /Editar Centros|Editar Centro/i,
 fields: [
 { label: /Negocio/i, value: 'PVI', kind: 'select' },
 { label: /Código Linea/i, value: 'VIND', kind: 'select' },
 { label: /Código Producto/i, value: 'VIND001', kind: 'select' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['PVI'],
});