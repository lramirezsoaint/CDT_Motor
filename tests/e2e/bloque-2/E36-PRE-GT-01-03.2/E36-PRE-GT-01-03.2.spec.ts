import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-03.2',
  section: 'Parametrización',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Especiales NIIF/i,
  fields: [
    { label: /Código Línea|Linea/i, value: 'LA', kind: 'select' },
    { label: /Código Producto|Producto/i, value: 'LPER019', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'DFV', kind: 'select' },
    { label: /Código Plan|Plan/i, value: 'DFV008', kind: 'select' },
    { label: /Código Método|Metodo/i, value: '0', kind: 'select' },
    { label: /Porcentaje/i, value: '100' },
    { label: /Digito/i, value: '44' },
    { label: /Tipo Distribucion|Distribucion/i, value: 'POLIZAS', kind: 'select' },
    { label: /NIIF 17 Atribuible|Atribuible/i, value: 'Atribuible', kind: 'select' },
    { label: /NIIF 17 Tipo|Tipo NIIF|NIIF/i, value: 'GM', kind: 'select' },
    { label: /Código Concepto|Concepto/i, value: '10.14.00', kind: 'select' },
    { label: /CECO|Centro/i, value: '06.99.80', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['LA', '100', '10.14.00'],
});