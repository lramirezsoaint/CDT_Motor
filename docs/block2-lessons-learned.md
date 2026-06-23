# Block 2 Lessons Learned

## Dominio

Bloque 2 cubre Gastos Técnicos (`@gt`) y Presupuesto GT (`@presupuesto`). La automatización debe respetar la selección de distribución antes de abrir vistas del menú lateral.

## Selección de Distribución

Usar `selectGtDistribution(page, options)`.

- Sin opciones, selecciona la distribución real por defecto definida en el helper.
- Para Presupuesto, usar `{ tipo: /Presupuesto/i }`.
- Siempre aceptar el modal de información si aparece.

La distribución es parte de la precondición del caso. No omitirla aunque la navegación parezca funcionar.

## Helpers Principales

- `UploadCase`: cargas exitosas, errores de cabecera, archivo vacío, tamaño máximo, validación con descarga de errores y errores de antecesor.
- `DownloadCase`: descarga y valida extensión/fallo nulo.
- `ReloadDownloadedCase`: descarga archivo base y lo vuelve a cargar.
- `ColumnsCase`: abre componente Columnas, busca, mostrar todas, ocultar todas y valida columnas por defecto.
- `PaginationCase`: valida paginación de tablas.
- `SearchCase`: búsqueda general cuando el catálogo no define criterios exhaustivos.
- `UploadAndTableCase`: carga y valida tabla visible para casos de frontend.
- `ProcessGtCase` y `ProcessExecuteAllCase`: procesos con anotaciones TODO cuando faltan datos operativos.
- `DeleteExactusVersionCase` y helpers de Exactus procesado: flujos específicos de Aprovisionamiento > Exactus.

## Placeholders

Durante la refactorización se reemplazaron specs que usaban `PendingCatalogRoleCase` y `PendingCatalogCase`. El patrón correcto es no dejar placeholders en `.spec.ts` si hay suficiente información en catálogo.

## Presupuesto GT

Los casos Presupuesto deben incluir:

```ts
flow: 'presupuesto'
role: 'gestor-gasto'
distribution: { tipo: /Presupuesto/i }
```

Cuando no exista fixture exacto de Presupuesto, documentar TODO y reutilizar fixture equivalente solo si el objetivo del caso sigue siendo comprobable sin inventar datos.

Ejemplos de faltantes detectados:

- `PRESUPUESTO Unidad de Cuenta GT` no existe como fixture exacto; solo existe `REAL Unidad de Cuenta GT.xlsx` dentro de carpeta Presupuesto.
- Algunos casos de datos incompletos de Presupuesto no tienen fixture específico y reutilizan fixtures incompletos equivalentes de GT Real con TODO.

## Uploads

Validar modal y estado inicial antes de seleccionar archivo. El botón procesar/aceptar debe iniciar deshabilitado y habilitarse tras selección. Para errores de validación, debe aparecer `Descargar errores` cuando el catálogo lo pide.

## Descargas y Recargas

Las recargas deben descargar primero el archivo base de la propia pantalla, guardarlo en `testInfo.outputPath` y luego cargar ese archivo. Para Presupuesto, `ReloadDownloadedCase` debe recibir `distribution`.

## Tablas

Cuando el catálogo exige que los datos cargados se muestren en frontend, validar tabla visible, columnas visibles y filas visibles. Solo comparar contenido exacto si existe parser o datos esperados confiables.

## Columnas

El componente Columnas se valida con:

- botón `Ver`
- modal o popover visible
- título `Columnas`
- columnas `Por Defecto`
- buscador
- acciones `Mostrar todas` y `Ocultar todas`

Ocultar todas debe conservar columnas por defecto.

## Procesos

Los procesos de GT requieren período, versión, modo de ejecución, descripción y estados previos. El catálogo no siempre define una combinación reproducible. En esos casos:

- no inventar versión
- validar presencia del flujo y controles esperados
- dejar anotación TODO con el dato faltante

## Exactus

Exactus tiene subflujos específicos:

- borrar versión
- descargar Exactus procesado
- cargar Exactus procesado y continuar procesos

Estos flujos deben usar helpers específicos porque combinan Aprovisionamiento y Procesos.

## Encoding

Se observaron problemas de acentos al escribir por consola en Windows. Preferir patrones regex tolerantes como `M.todo`, `Parametrizaci` o alternativas `Metodo|Método` cuando el texto puede variar por encoding.

## Validación

Después de cada lote:

```bash
npx.cmd playwright test tests/e2e/bloque-2 --list
```

El objetivo mínimo es que Playwright detecte los casos y TypeScript no bloquee el listado.