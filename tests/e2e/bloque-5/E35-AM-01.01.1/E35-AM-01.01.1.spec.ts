import { AddRecordCase } from '../_shared/am-add-record';

AddRecordCase({
  caseId: 'E35-AM-01.01.1',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestorAM',
  modalTitle: /Agregar Cuenta(?:s)? Contable(?:s)?/i,
  fields: [
    { label: /Cuenta Contable/i, value: '40.1.1.01.02.01' },
    { label: /Nombre Cuenta Contable/i, value: 'REPARACION Y MANTENIMIENTO' },
    { label: /Tipo de Gasto/i, value: 'IF', kind: 'select' },
    { label: /NIIF17 Atribuible/i, value: 'ATRIBUIBLE', kind: 'select' },
    { label: /NIIF17 Tipo/i, value: 'GA', kind: 'select' },
    { label: /NIIF17 Clase/i, value: 'FI', kind: 'select' },
    { label: /Concepto/i, value: '30.05.04' },
    { label: /Concepto N1/i, value: 'Ingresos Financieros Netos' },
    { label: /Concepto N2/i, value: 'Arrendamiento' },
    { label: /Concepto N3/i, value: 'Otros costos relacionados a Arrendamiento' },
    { label: /Concepto NIIF17/i, value: 'Ingresos Financieros Netos' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['40.1.1.01.02.01', 'REPARACION Y MANTENIMIENTO'],
  });
