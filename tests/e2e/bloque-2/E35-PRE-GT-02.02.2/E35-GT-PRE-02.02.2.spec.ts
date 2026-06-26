import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-PRE-02.02.2',
  section: 'Aprovisionamiento',
  view: 'Maestro de Negocio.*Embebidos',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Agregar Maestro de Negocio.*Embebidos/i,
  fields: [
    { label: /Negocio/i, value: 'GENERALES', kind: 'select' },
    { label: /Línea/i, value: 'ASISTENCIA MEDICA', kind: 'select' },
    { label: /Producto/i, value: 'INDEMNIZATORIO INDIVIDUAL', kind: 'select' },
    { label: /Canal/i, value: 'ALIANZAS', kind: 'select' },
    { label: /Subcanal/i, value: 'FALABELLA', kind: 'select' },
    { label: /Embebido/i, value: 'Embebido', kind: 'select' },
    { label: /Tipo Negocio/i, value: 'PERSONA', kind: 'select' },
  ],
  expectedResult: 'duplicateError',
  expectedMessages: [/Registro duplicado|registro que intentas agregar ya existe/i],
});