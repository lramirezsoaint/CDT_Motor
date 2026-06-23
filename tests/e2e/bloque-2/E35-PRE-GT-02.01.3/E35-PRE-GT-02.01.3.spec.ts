import { AddRecordCase } from '../_shared/gt-add-record';

// TODO(catalogo): no se especifica valor exacto de Centro de Costo para duplicar el registro.
AddRecordCase({
  caseId: 'E35-PRE-GT-02.01.3',
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
  ],
  expectedResult: 'duplicateError',
  expectedMessages: [/Registro duplicado|registro que intentas agregar ya existe/i],
});