# _globalshared

Comportamiento tecnico comun para pruebas E2E de todos los bloques.

- `auth`: login y manejo tecnico de sesion.
- `navigation`: navegacion comun por sidebar o vistas.
- `upload`: flujo generico de carga de archivos.
- `download`: validaciones tecnicas de descargas.
- `assertions`: assertions reutilizables.
- `fixtures`: fixtures tecnicos compartidos.
- `data`: datos tecnicos compartidos.

Las reglas de negocio, datos de GF/GT/Comunes y precondiciones especificas deben vivir en el `_bloqueshared` de cada bloque.

bloque-1/_bloqueshared

Helpers especificos de Bloque 1 y del modulo Comunes: altas, ediciones, cargas, descargas, columnas y acciones de estado sobre catalogos comunes.

bloque-2/_bloqueshared

Helpers especificos de Bloque 2 y Gastos Tecnicos. Mantiene wrappers y datos/reglas propias del bloque; la logica tecnica compartida debe vivir en `tests/e2e/_globalshared`.

bloque-3/_bloqueshared

Helpers especificos de Bloque 3 y Gastos Financieros: fixtures del bloque, precondiciones, datos GF y wrappers de carga/descarga/columnas.
