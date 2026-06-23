import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
  caseId: 'E36-GT-01-01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestor-gasto',
  modalTitle: /Editar Cuentas Contables|Editar Cuenta Contable/i,
  fields: [
    { label: /Nombre Cuenta Contable/i, value: 'BONOS ASESORES - PROV. ESSALUD' },
    { label: /Código Ramo/i, value: '44', kind: 'select' },
    { label: /Tipo de cuenta/i, value: 'MT', kind: 'select' },
    { label: /NIIF 17 Tipo/i, value: 'GM', kind: 'select' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['47.1.7.40.09.10'],
});