import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-01-03.3',
  section: 'Parametrización',
  view: 'Especiales NIIF',
  role: 'gestor-gasto',
  modalTitle: /Editar Especiales NIIF/i,
  fields: [
    { label: /Porcentaje/i, value: '100' },
    { label: /Tipo Distribución|Distribución/i, value: 'POLIZAS', kind: 'select' },
    { label: /NIIF 17 Tipo|Tipo NIIF|NIIF/i, value: 'GM', kind: 'select' },
    { label: /Código Concepto|Concepto/i, value: '10.14.00', kind: 'select' },
    { label: /CECO|Centro/i, value: '06.99.80', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['100', '10.14.00', '06.99.80'],
});