import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-03-01.3',
  section: 'Parametrización',
  view: 'Centros',
  role: 'gestor-gasto',
  modalTitle: /Agregar Centros|Agregar Centro/i,
  fields: [
    { label: /Negocio/i, value: 'PPS', kind: 'select' },
    { label: /Centro de Costo/i, value: 'CC001' },
    { label: /Código línea/i, value: 'SEPE', kind: 'select' },
    { label: /Código producto/i, value: 'SEPE001', kind: 'select' },
    { label: /Código canal/i, value: 'COR', kind: 'select' },
    { label: /Código subcanal/i, value: 'COR004', kind: 'select' },
    { label: /^Tipo$/i, value: 'DIRECTOS', kind: 'select' },
    { label: /Tipo emisión/i, value: 'DIGITAL', kind: 'select' },
    { label: /Tipo negocio/i, value: 'PERSONA', kind: 'select' },
    { label: /Tipo producto/i, value: 'MODULAR', kind: 'select' },
  ],  expectedResult: 'validationError',
  expectedMessages: [/Negocio.*requer/i, /Centro de costo.*requer/i, /Código Línea.*requer/i],
});