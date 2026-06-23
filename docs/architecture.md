# Framework Architecture

## Stack

El framework usa Playwright Test con TypeScript sobre Node.js. Las pruebas se organizan como specs E2E, pero la lógica repetible vive en helpers compartidos. El patrón dominante es declarar casos con configuración y delegar la ejecución a helpers reutilizables.

## Capas

### Specs

Los `.spec.ts` deben ser delgados. Un spec normalmente contiene:

- import del helper
- llamada al helper
- `caseId`
- sección/vista/rol/flujo
- archivo fixture o acción esperada
- tags derivados desde el helper

### Helpers Compartidos

Bloque 2 usa helpers GT:

- `gt-upload.ts`
- `gt-download.ts`
- `gt-reload.ts`
- `gt-columns.ts`
- `gt-pagination.ts`
- `gt-search.ts`
- `gt-process.ts`
- `gt-process-actions.ts`
- `gt-add-record.ts`
- `gt-edit-record.ts`
- `gt-delete-record.ts`
- `gt-distribution.ts`
- `gt-ui.ts`

Bloque 3 usa helpers GF:

- `gf-upload.ts`
- `gf-upload-case.ts`
- `gf-download-case.ts`
- `gf-reload.ts`
- `gf-columns.ts`
- `gf-column-bulk.ts`
- `gf-context.ts`
- `gf-download-integrity.ts`
- `bloque3.fixture.ts`

### Page Objects

Usar Page Objects para pantallas transversales. `LoginPage` centraliza autenticación y debe reutilizarse en helpers que hacen login explícito.

### Fixtures

Los archivos de prueba viven en `fixtures/files`. No crear, modificar ni reemplazar fixtures sin solicitud explícita. Si el catálogo pide un fixture que no existe, documentar TODO en el caso.

### Storage State

Los roles pueden resolverse por storageState o por login explícito del helper. Mantener separados los roles y no mezclar credenciales dentro de specs.

### Reportes

Los reportes son artefactos de ejecución. No deben versionarse como parte de una implementación de caso salvo que el usuario lo pida.

## Patrón de Ejecución de Caso

1. Preparar sesión o usar storageState.
2. Seleccionar contexto funcional: distribución, período, flujo o módulo.
3. Abrir vista desde menú lateral.
4. Ejecutar acción del catálogo.
5. Validar resultado esperado.
6. Documentar TODO si el catálogo no define datos suficientes.

## Diseño de Helpers

Un helper debe aceptar configuración tipada y generar el test con tags consistentes. Debe encapsular navegación, acciones repetidas y validaciones comunes. No debe ocultar supuestos no documentados: cualquier faltante de datos debe quedar como TODO o anotación de `testInfo`.