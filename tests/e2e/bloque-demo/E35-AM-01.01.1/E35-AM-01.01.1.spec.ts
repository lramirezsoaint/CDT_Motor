import { defineDemoAddRecordCase } from '../_shared/demo-add-record';

const demoAccount = `40.1.2.${String(Date.now()).slice(-4, -2)}.${String(Date.now()).slice(-2)}.00`;

defineDemoAddRecordCase({
  caseId: 'E35-AM-01.01.1',
  section: 'Parametrizacion',
  view: 'Cuentas Contables',
  modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
  fields: [
    { label: /Cuenta Contable/i, value: demoAccount },
    { label: /Nombre Cuenta Contable/i, value: 'REPARACION Y MANTENIMIENTO' },
    { label: /Tipo de Gasto/i, value: 'IF', kind: 'select' },
    { label: /NIIF17 Atribuible/i, value: 'SI', kind: 'select' },
    { label: /NIIF17 Tipo/i, value: 'GA', kind: 'select' },
    { label: /NIIF17 Clase/i, value: 'FI', kind: 'select' },
    { label: /Concepto/i, value: '30.05.04' },
    { label: /Concepto N1/i, value: 'Ingresos Financieros Netos' },
    { label: /Concepto N2/i, value: 'Arrendamiento' },
    { label: /Concepto N3/i, value: 'Otros costos relacionados a Arrendamiento' },
    { label: /Concepto NIIF17/i, value: 'Ingresos Financieros Netos' },
  ],
  expectedTableValues: [demoAccount, 'REPARACION Y MANTENIMIENTO'],
});
