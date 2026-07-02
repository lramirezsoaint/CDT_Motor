import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-PRE-GT-01-01.2',
 section: 'Parametrización',
 view: 'Cuentas Contables',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Editar Cuenta Contable/i,
 fields: [
 { label: /Nombre Cuenta Contable/i, value: 'BONOS ASESORES - PROV. ESSALUD' },
 { label: /Código Ramo/i, value: '03', kind: 'select' },
 { label: /Tipo de cuenta/i, value: 'MT', kind: 'select' },
 { label: /Niif17 Tipo/i, value: 'GM (Gastos de Mantenimiento)', kind: 'select' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['BONOS ASESORES - PROV. ESSALUD'],
});