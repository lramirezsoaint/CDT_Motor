import { AddRecordCase } from '../_shared/gf-add-record';

AddRecordCase({
 caseId: 'E35-GF-01.03.1',
 section: 'Asignaciones',
 view: 'Especiales NIIF',
 modalTitle: /Agregar Especiales NIIF/i,
 fields: [
 { label: /C[oó]digo L[ií]nea/i, value: 'AFP', kind: 'select' },
 { label: /C[oó]digo Producto/i, value: 'AFP003', kind: 'select' },
 { label: /C[oó]digo Canal/i, value: 'AFP', kind: 'select' },
 { label: /C[oó]digo Subcanal/i, value: 'AFP001', kind: 'select' },
 { label: /M[eé]todo de Valoraci[oó]n/i, value: 'PAA', kind: 'select' },
 { label: /Porcentaje/i, value: '22.583' },
 { label: /Tipo Distribuci[oó]n/i, value: 'POLIZAS', kind: 'select' },
 { label: /NIIF17 Atribuible/i, value: 'Atribuible', kind: 'select' },
 { label: /NIIF\s*17Tipo/i, value: 'GA', kind: 'select' },
 { label: /Concepto N1/i, value: 'Ingresos Financieros Netos', kind: 'select' },
 { label: /Concepto N2/i, value: 'Utilidad venta inmuebles, muebles y equipo', kind: 'select' },
 { label: /C[oó]digo Concepto/i, value: '30.02.02', kind: 'select' },
 { label: /D[ií]gito de cuenta/i, value: '46', kind: 'select' },
 { label: /CECO/i, value: '07.99.43', kind: 'select' },
 ],
 expectedResult: 'success',
});



