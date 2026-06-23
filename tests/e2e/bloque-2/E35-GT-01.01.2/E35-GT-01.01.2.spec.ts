import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.01.2',
  section: 'Parametrización',
  view: 'Cuentas Contables',
  role: 'gestor-gasto',
  modalTitle: /Agregar Cuentas Contables|Agregar Cuenta Contable/i,
  fields: [
    { label: /Cuenta Contable/i, value: '44.1.7.40.09.11' },
    { label: /Nombre Cuenta Contable/i, value: 'BONOS ASESORES - PROV. ESSALUD' },
    { label: /Código Ramo/i, value: '01', kind: 'select' },
    { label: /Niif17 Atribuible/i, value: 'ATRIBUIBLE', kind: 'select' },
    { label: /Niif17 Tipo/i, value: 'GM (GAstos de Mantenimiento)', kind: 'select' },
    { label: /Concepto/i, value: '10.01.05'},
    { label: /Concepto N1/i, value: 'Egresos Tecnicos netos' },
    { label: /Concepto N2/i, value: 'Compras' },
    { label: /Concepto N3/i, value: 'Seguro Social' },
    { label: /Tipo de cuenta/i, value: 'MT', kind: 'select' },
    { label: /Tipo Niif17 CBR/i, value: 'GS', kind: 'select' },
    
  ],  expectedResult: 'success',
  expectedTableValues: ['44.1.7.40.09.11', 'BONOS ASESORES - PROV. ESSALUD'],
});