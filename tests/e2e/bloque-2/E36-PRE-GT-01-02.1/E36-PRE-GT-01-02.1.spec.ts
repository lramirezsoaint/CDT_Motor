import { EditRecordCase } from '../_shared/gt-edit-record';

EditRecordCase({
 caseId: 'E36-PRE-GT-01-02.1',
 section: 'Aprovisionamiento',
 view: 'Unidad de Cuenta GT',
 flow: 'presupuesto',
 role: 'gestorGT',
 distribution: { tipo: /Presupuesto/i },
 modalTitle: /Editar Unidad de Cuenta GT/i,
 fields: [
 { label: /Moneda/i, value: 'USD', kind: 'select' },
 ],
 expectedResult: 'success',
 expectedTableValues: ['USD'],
});