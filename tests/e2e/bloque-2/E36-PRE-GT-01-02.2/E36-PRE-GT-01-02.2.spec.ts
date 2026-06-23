import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-02.2',
  section: 'Parametrización',
  view: 'Maestro Negocio/Embebidos',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Maestro/i,
  fields: [
    { label: /Negocio/i, value: 'GENERALES', kind: 'select' },
    { label: /Línea/i, value: 'ASISTENCIA MEDICA', kind: 'select' },
    { label: /Producto/i, value: 'INDEMNIZATORIO INDIVIDUAL', kind: 'select' },
    { label: /Canal/i, value: 'ALIANZAS', kind: 'select' },
    { label: /Partner/i, value: 'FALABELLA', kind: 'select' },
    { label: /Embebido/i, value: 'Embebido', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['GENERALES', 'FALABELLA'],
});