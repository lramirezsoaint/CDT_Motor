# Framework Automation Skill

Esta skill documenta la forma de trabajo esperada para implementar y mantener pruebas automatizadas Playwright en este framework. Debe leerse antes de crear nuevos bloques, corregir placeholders, agregar helpers compartidos o modificar flujos existentes de Bloque 2 y Bloque 3.

## Arquitectura

El framework usa Playwright + TypeScript para pruebas E2E. Las pruebas se organizan por bloques funcionales y cada caso `.spec.ts` debe ser pequeño: importa un helper de caso y declara la configuración del flujo documentado en el catálogo.

La arquitectura se apoya en:

- Playwright Test como runner, fixtures, assertions, downloads y storage state.
- TypeScript para tipar configuraciones de helpers y reducir duplicación.
- Page Objects para pantallas transversales, especialmente autenticación en `pages/auth/LoginPage.ts`.
- Helpers compartidos por bloque en `tests/e2e/bloque-2/_shared` y `tests/e2e/bloque-3/_shared`.
- Fixtures de archivos en `fixtures/files`, tratados como datos controlados de QA.
- StorageState por rol bajo `.auth/` o archivos equivalentes definidos por configuración.
- Reportes de ejecución en `reports`, `test-results` y `playwright-report`.

## Organización de carpetas

Estructura estándar:

```text
tests/e2e/
├── bloque-1
├── bloque-2
├── bloque-3
└── _shared
```

Cada bloque puede tener su propio `_shared` cuando el dominio lo necesita. Bloque 2 usa helpers `gt-*` para Gastos Técnicos. Bloque 3 usa helpers `gf-*` para Gestión Financiera.

## Convenciones

### Casos

Usar el ID exacto del catálogo y preservarlo en carpeta, archivo, tags y `caseId`.

Ejemplos:

```text
E4-GT-01
E35-GT-01
E58-GT-01
```

### Carpetas

Crear una carpeta por caso o grupo funcional existente. No renombrar carpetas ya creadas aunque el ID tenga variaciones históricas. Si existe una carpeta con typo de catálogo, mantenerla para no romper trazabilidad.

### Tags

Mantener tags existentes y agregar solo los que correspondan al catálogo:

```text
@bloque2
@bloque3
@gt
@gf
@admin
@gestor-gasto
@critical
@smoke
```

Para Presupuesto GT usar además `@presupuesto` cuando el helper lo soporte.

## Fuente de verdad

Usar siempre:

```text
docs/catalogos/catalogo_casos_prueba_bloque2.md
docs/catalogos/catalogo_casos_prueba_bloque3.md
```

Nunca inventar:

- pasos
- validaciones
- resultados esperados
- datos de negocio
- nombres de archivos fixture
- estados previos de procesos

Si falta información, documentar un `TODO` en el spec o anotación Playwright y no asumir lógica.

## Implementación de casos

Cuando exista:

```ts
PendingCatalogRoleCase
PendingCatalogCase
```

debe reemplazarse por una implementación Playwright real basada en el catálogo.

Proceso obligatorio:

1. Leer el catálogo.
2. Identificar título, descripción, precondiciones, datos, pasos y resultado esperado.
3. Clasificar el flujo: carga, descarga, recarga, consulta, tabla, proceso, navegación u otro.
4. Reutilizar helpers existentes.
5. Crear helper nuevo únicamente si no existe alternativa reutilizable.
6. Mantener storageState, tags, estructura y roles existentes.
7. Ejecutar `npx playwright test --list` o el scope más específico posible.

## Manejo de roles

Roles existentes:

- `admin`
- `gestor-gasto`
- gestor financiero

Usar el storageState correspondiente cuando el proyecto lo defina. Si el helper hace login, debe usar credenciales desde `env` y Page Object existente. No modificar `.auth/`, `storageState.json` ni `auth.json` salvo solicitud explícita.

## Selección de distribución

Patrón estándar:

1. Seleccionar período.
2. Seleccionar distribución.
3. Aceptar modal de información si aparece.
4. Esperar que la vista quede cargada.

En Bloque 2, preferir `selectGtDistribution(page, options)`. Para Presupuesto, usar `{ tipo: /Presupuesto/i }`. Para Real, usar distribución por defecto si el helper ya la define.

## Manejo de componentes

### Selects Radix/Shadcn

Priorizar `data-testid` y selectores técnicos estables. Ejemplos observados:

```text
idRamo
niif17Atribuible
niif17Tipo
tipoCuenta
tipoNIIF17CBR
```

Evitar depender únicamente del label visible porque puede estar duplicado, truncado o desacoplado del trigger real.

### Upload

Usar `input[type="file"]` cuando exista. Evitar depender solo de `waitForEvent('filechooser')` cuando el componente use Radix/Shadcn o cuando el trigger visual no sea el input real.

En helpers existentes de GT se usa `UploadCase` para cargar archivos, validar modal, estado inicial, procesamiento y resultado.

### Descargas

Validar siempre:

- descarga exitosa
- extensión esperada
- nombre sugerido cuando el catálogo o helper lo indique

No abrir archivos descargados si no hay parser o validación estable. Si el catálogo exige contenido y no hay parser, documentar TODO.

## Reglas de modificación

Nunca modificar sin solicitud explícita:

```text
.auth
fixtures/files
reports
playwright-report
test-results
auth.json
storageState.json
```

No eliminar pruebas, no renombrar carpetas, no cambiar IDs y no tocar otros bloques fuera del alcance solicitado.

## Flujo recomendado para nuevos bloques

1. Leer catálogo.
2. Comparar cobertura existente.
3. Identificar casos pendientes.
4. Reutilizar arquitectura existente.
5. Implementar helpers comunes si hace falta.
6. Ejecutar:

```bash
npx playwright test --list
```

7. Validar compilación/detección.
8. Entregar resumen de cambios, helpers usados, helpers nuevos y pendientes por falta de información.

## Lecciones aprendidas

Las lecciones completas están separadas para consulta rápida:

- `docs/block2-lessons-learned.md`
- `docs/block3-lessons-learned.md`
- `docs/architecture.md`
- `docs/automation-conventions.md`

Puntos críticos acumulados:

- Los selects Radix requieren selectores estables, preferentemente `data-testid`.
- Los roles deben aislarse con storageState o login explícito por helper.
- La selección de distribución es una precondición funcional, no un detalle de navegación.
- Las cargas deben validar modal, botón deshabilitado, selección de archivo, procesamiento y resultado.
- Las descargas deben validar evento, extensión y fallo nulo.
- Los procesos suelen requerir datos vivos; si el catálogo no define versión/estado exacto, dejar TODO.
- Los reportes y resultados generados no forman parte del código fuente de prueba.
