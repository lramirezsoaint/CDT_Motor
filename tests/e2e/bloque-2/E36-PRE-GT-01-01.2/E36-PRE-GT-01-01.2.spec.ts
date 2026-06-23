import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-PRE-GT-01-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  flow: 'presupuesto',
  role: 'gestor-gasto',
  distribution: { tipo: /Presupuesto/i },
  modalTitle: /Editar Cuenta Contable/i,
  fields: [
    { label: /Cuenta Contable|Codigo Cuenta/i, value: '47.1.7.40.09.10' },
    { label: /Nombre Cuenta Contable|Nombre/i, value: 'BONOS, PREMIOS Y GRATIFICACIONES' },
    { label: /Código Ramo|Ramo/i, value: '44', kind: 'select' },
    { label: /Tipo Cuenta|Tipo/i, value: 'MT', kind: 'select' },
    { label: /NIIF 17 Tipo|Tipo NIIF|NIIF/i, value: 'GM', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['47.1.7.40.09.10', 'BONOS'],
});