import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
 caseId: 'E35-GT-01.01.3',
 section: 'Parametrización',
 view: 'Centros',
 role: 'gestorGT',
 modalTitle: /Agregar Centros|Agregar Centro/i,
 fields: [
 { label: /Negocio/i, value: 'PPS', kind: 'select' },
 { label: /Centro de Costo/i, value: '010203' },
 { label: /Nombre Centro de Costo/i, value: 'CENTRO DE COSTO 1' },
 { label: /Código Linea/i, value: 'SEPE', kind: 'select' },
 { label: /Código Producto/i, value: 'SEPE001', kind: 'select' },
 { label: /Código Canal/i, value: 'AFP', kind: 'select' },
 { label: /Código subcanal/i, value: 'AFP002', kind: 'select' },
 { label: /^Tipo$/i, value: 'DIRECTOS', kind: 'select' },
 { label: /Tipo emisión/i, value: 'DIGITAL', kind: 'select' },
 { label: /Tipo negocio/i, value: 'PERSONA', kind: 'select' },
 { label: /Tipo producto/i, value: 'MODULAR', kind: 'select' },
 ], expectedResult: 'success',
 expectedTableValues: ['PPS', 'SEPE'],
});