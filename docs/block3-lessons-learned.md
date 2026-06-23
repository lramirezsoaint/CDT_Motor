# Block 3 Lessons Learned

## Dominio

Bloque 3 cubre Gestión Financiera (`@gf`). Sus helpers viven en `tests/e2e/bloque-3/_shared` y deben mantenerse separados de los helpers GT de Bloque 2.

## Fixtures y Contexto

Usar fixtures del bloque cuando existan:

- `bloque3.fixture.ts`
- `gestor.fixture.ts`
- `distribucion-precondicion.ts`
- `gf-context.ts`

No mover lógica GF a Bloque 2 ni reutilizar helpers GT para flujos GF.

## Helpers Principales

- `gf-upload.ts`: lógica base de carga GF.
- `gf-upload-case.ts`: casos configurables de carga.
- `gf-upload-cases-data.ts`: datos de casos de carga.
- `gf-download-case.ts`: descargas GF.
- `gf-download-integrity.ts`: validaciones de integridad de descargas.
- `gf-reload.ts`: recargas GF.
- `gf-columns.ts` y `gf-column-bulk.ts`: componente de columnas.
- `gf-pending.ts`: placeholder histórico; debe reemplazarse cuando el catálogo tenga información suficiente.

## Catálogo

Usar `docs/catalogos/catalogo_casos_prueba_bloque3.md` como fuente de verdad. No implementar desde similitud con Bloque 2 si el catálogo GF define pasos distintos.

## Uploads GF

Mantener el patrón:

1. abrir contexto GF
2. navegar a la vista del catálogo
3. abrir modal de carga
4. validar título y botón inicial
5. seleccionar archivo fixture
6. procesar
7. validar resultado esperado

Cuando el componente use Radix/Shadcn, preferir input real o `data-testid` antes que `filechooser`.

## Descargas GF

Validar evento de descarga, extensión y fallo nulo. Para integridad, usar helper existente si puede leer el archivo descargado. Si no hay parser estable o el catálogo no define columnas exactas, documentar TODO.

## Columnas GF

Separar acciones individuales de acciones masivas. Usar `gf-columns.ts` para comportamiento estándar y `gf-column-bulk.ts` para mostrar/ocultar todas cuando aplique.

## Procesos y Precondiciones

Si un caso requiere distribución/precondición específica, usar `distribucion-precondicion.ts` o fixture de contexto existente. No crear estados de negocio en vivo sin instrucción explícita.

## Reportes

No modificar `reports`, `test-results` ni `playwright-report`. Los reportes ejecutivos pueden consultarse para aprendizaje, pero no son fuente funcional frente al catálogo.

## Separación con Bloque 2

Aunque GT y GF compartan conceptos como carga, descarga, columnas o recarga, sus helpers deben permanecer separados para evitar acoplar dominios. Solo extraer a `tests/e2e/_shared` si ambos bloques ya usan el mismo contrato y el cambio está explícitamente solicitado.

## Validación

Para cambios de Bloque 3:

```bash
npx.cmd playwright test tests/e2e/bloque-3 --list
```

Para un caso puntual:

```bash
npx.cmd playwright test tests/e2e/bloque-3/<case-id> --list
```
