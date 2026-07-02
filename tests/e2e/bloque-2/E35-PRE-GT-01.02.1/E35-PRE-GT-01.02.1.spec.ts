import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
 caseId: 'E35-PRE-GT-01.02.1',
 section: 'Aprovisionamiento',
 view: 'Unidad de Cuenta',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Agregar Unidad de Cuenta GT|Agregar Unidad de cuenta GT/i,
 fields: [
 { label: /Prioridad/i, value: '1', kind: 'select' },
 { label: /Código Concepto/i, value: '01.05.00', kind: 'select' },
 { label: /Moneda/i, value: 'PEN', kind: 'select' },
 { label: /Dígito de Cuenta/i, value: '44', kind: 'select' },
 { label: /Código Ramo/i, value: '01', kind: 'select' },
 { label: /Producto/i, value: 'AFP JUAN', kind: 'select' },
 { label: /Subcanal/i, value: 'AFP NUEVO', kind: 'select' },
 { label: /Unidad de Cuenta/i, value: 'IFRS_GRP_2025_VIDA CREDITO LP 01_PEN_PAA_Ceded_Prof', kind: 'select' },
 { label: /Factor/i, value: '1' },
 ], expectedResult: 'success',
 expectedTableValues: ['01.05.00', 'PEN'],
});