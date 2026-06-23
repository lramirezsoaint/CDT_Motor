import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-02.01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestor-gasto',
  modalTitle: /Agregar Cuentas Contables|Agregar Cuenta Contable/i,
  fields: [
    { label: /Cuenta Contable/i, value: '46.1.7.40.09.10' },
    { label: /Nombre Cuenta Contable/i, value: 'BONOS ASESORES - PROV. ESSALUD' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Tipo de cuenta/i, value: 'MT', kind: 'select' },
    { label: /Tipo NIIF 17 CBR/i, value: 'GS', kind: 'select' },
    { label: /NIIF 17 Atribuible/i, value: 'Atribuible', kind: 'select' },
    { label: /NIIF 17 Tipo/i, value: 'GM', kind: 'select' },
    { label: /Código Concepto/i, value: '10.01.05', kind: 'select' },
    { label: /Concepto N1/i, value: 'Egresos Tecnicos netos' },
    { label: /Concepto N2/i, value: 'Compras' },
    { label: /Concepto N3/i, value: 'Seguro Social' },
  ],  expectedResult: 'duplicateError',
  expectedMessages: [/Registro duplicado|registro que intentas agregar ya existe/i],
});