import { AddRecordCase } from '../_shared/gt-add-record';

// TODO(catalogo): no se especifica valor exacto de Centro de Costo para seleccionar.
AddRecordCase({
  caseId: 'E35-PRE-GT-01.01.3',
  section: 'Parametrización',
  view: 'Centros',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Centros|Agregar Centro/i,
  fields: [
    { label: /Negocio/i, value: 'PPS', kind: 'select' },
    { label: /Centro de Costo/i },
    { label: /Código Línea/i, value: 'SEPE', kind: 'select' },
    { label: /Código Producto/i, value: 'SEPE001', kind: 'select' },
    { label: /Código Canal/i, value: 'COR', kind: 'select' },
    { label: /Código Subcanal/i, value: 'COR004', kind: 'select' },
    { label: /^Tipo$/i, value: 'DIRECTOS', kind: 'select' },
    { label: /Tipo Emisión/i, value: 'DIGITAL', kind: 'select' },
    { label: /Tipo negocio/i, value: 'PERSONA', kind: 'select' },
    { label: /Tipo producto/i, value: 'MODULAR', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['PPS', 'SEPE'],
});