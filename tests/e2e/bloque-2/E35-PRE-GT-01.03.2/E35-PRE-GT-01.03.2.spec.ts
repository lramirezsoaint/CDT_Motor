import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-PRE-GT-01.03.2',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Especiales NIIF/i,
  fields: [
    { label: /Código Línea/i, value: 'LA', kind: 'select' },
    { label: /Código Producto/i, value: 'LPER019', kind: 'select' },
    { label: /Código Canal/i, value: 'DFV', kind: 'select' },
    { label: /Código Subcanal/i, value: 'DFV008', kind: 'select' },
    { label: /Método Valoración/i, value: '0', kind: 'select' },
    { label: /Porcentaje/i, value: '100' },
    { label: /Dígito de cuenta/i, value: '44', kind: 'select' },
    { label: /Tipo Distribución/i, value: 'POLIZAS', kind: 'select' },
    { label: /NIIF 17 Atribuible/i, value: 'Atribuible', kind: 'select' },
    { label: /NIIF 17 Tipo/i, value: 'GM', kind: 'select' },
    { label: /Concepto N1/i, value: 'Egresos Tecnicos netos' },
    { label: /Concepto N2/i, value: 'Servicios' },
    { label: /Código Concepto/i, value: '10.14.00', kind: 'select' },
    { label: /CECO/i, value: '06.99.80', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['LA', '100'],
});