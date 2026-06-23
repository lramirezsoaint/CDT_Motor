# Automation Conventions

## IDs y Trazabilidad

El `caseId` debe coincidir con el catálogo y con la carpeta existente. No normalizar IDs si el repositorio ya contiene una variante histórica.

## Organización

Cada caso vive en:

```text
tests/e2e/<bloque>/<case-id>/<case-id>.spec.ts
```

Los helpers viven en:

```text
tests/e2e/<bloque>/_shared
```

## Tags

Usar tags estables:

- `@bloque2` o `@bloque3`
- `@gt` para Gastos Técnicos
- `@gf` para Gestión Financiera
- `@admin`
- `@gestor-gasto`
- `@critical`
- `@smoke`

Los tags deben generarse desde helpers cuando sea posible para evitar diferencias manuales.

## Fuente de Verdad

Antes de implementar, leer el caso completo en el catálogo:

- título
- descripción
- precondiciones
- datos
- pasos
- resultado esperado

No implementar desde memoria ni desde nombres de carpetas.

## Placeholders

Reemplazar placeholders solo cuando el alcance lo indique:

```ts
PendingCatalogRoleCase
PendingCatalogCase
```

No modificar casos que ya usen helpers funcionales como `UploadCase`, `DownloadCase`, `ReloadDownloadedCase`, `ColumnsCase`, `ProcessCase` o equivalentes.

## Selectores

Priorizar en este orden:

1. `data-testid`
2. role accesible con nombre estable
3. texto visible único
4. selector CSS controlado

Evitar selectores basados en posición salvo dentro de un componente bien acotado.

## Radix/Shadcn

Los selects pueden renderizar contenido fuera del DOM inmediato del formulario. Usar helpers que abran el trigger correcto y seleccionen option/listbox por role o `data-testid`. Evitar asumir que el label está asociado al input.

## Uploads

Validar:

- modal visible
- título esperado
- botón procesar/aceptar deshabilitado al inicio
- selección de archivo
- botón habilitado
- mensaje de procesamiento cuando aplique
- resultado esperado

Usar `input[type="file"]` si existe; usar `filechooser` solo si es estable para el componente.

## Descargas

Validar:

- evento `download`
- `download.failure() === null`
- extensión `.xlsx` o `.csv` según catálogo
- nombre si el catálogo lo exige

## Tablas

Para validación de frontend, validar estructura y datos visibles:

- tabla visible
- columnas visibles
- al menos una fila visible
- coincidencia con datos cargados solo si hay parser/datos esperados confiables

## Procesos

Los procesos dependen de período, versión, modo, descripción, estado previo y datos cargados. Si el catálogo no define un estado reproducible, crear una validación conservadora y anotar TODO.

## Comandos de Validación

Usar el scope más pequeño útil durante desarrollo:

```bash
npx playwright test tests/e2e/bloque-2/<case-id> --list
```

Antes de entregar cambios amplios:

```bash
npx playwright test tests/e2e/bloque-2 --list
npx playwright test tests/e2e/bloque-3 --list
```

## Archivos Protegidos

No modificar:

- `.auth/`
- `fixtures/files/`
- `reports/`
- `playwright-report/`
- `test-results/`
- `auth.json`
- `storageState.json`

## Resumen de Entrega

Cada entrega debe indicar:

- casos corregidos o creados
- archivos modificados
- helpers reutilizados
- helpers nuevos
- TODO o datos faltantes
- comando ejecutado y resultado