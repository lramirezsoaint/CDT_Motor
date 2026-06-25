import { AddRecordCase } from '../_shared/gt-add-record';

AddRecordCase({
  caseId: 'E35-GT-01.03.3',
  section: 'Asignaciones',
  view: 'Especiales NIIF',
  role: 'gestor-gasto',
  modalTitle: /Agregar Especiales NIIF/i,
    fields: [
    { label: /Código Línea|Código Linea/i, value: 'AMED', kind: 'select' },
    { label: /Código Producto|Producto/i, value: 'AMED001', kind: 'select' },
    { label: /Código Canal|Canal/i, value: 'AFX', kind: 'select' },
    { label: /Código Subcanal|Subcanal/i, value: 'AFX001', kind: 'select' },
    { label: /Dígito de cuenta/i, value: '44', kind: 'select' },
    { label: /Método de Valoración/i, value: 'PAA', kind: 'select' },
    { label: /Porcentaje/i, value: '22.563' },
    { label: /Tipo Distribución/i, value: 'POLIZAS', kind: 'select'},                                                                                                                                                                                     
  ],  expectedResult: 'success',
  expectedTableValues: [],

});