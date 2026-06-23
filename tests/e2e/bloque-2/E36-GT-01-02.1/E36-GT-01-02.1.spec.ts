import { EditRecordCase } from '../_shared/gt-edit-record';

// TODO(catalogo): el ID E36-GT-01-02.1 aparece duplicado en el catalogo; se implementa la primera definicion: Driver Producto.
EditRecordCase({
  caseId: 'E36-GT-01-02.1',
  section: 'Aprovisionamiento',
  view: 'Driver Producto',
  role: 'gestor-gasto',
  modalTitle: /Editar Driver Producto/i,
  fields: [
    { label: /Descripción Método/i, value: 'Metodo actualizado' },
  ],
  expectedResult: 'success',
  expectedTableValues: ['Método actualizado'],
});