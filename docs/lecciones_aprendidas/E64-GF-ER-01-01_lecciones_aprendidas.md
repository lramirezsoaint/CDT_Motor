# E64-GF-ER-01-01 - Lecciones Aprendidas

## Objetivo

Documentar los problemas encontrados al implementar el caso `E64-GF-ER-01-01` y las decisiones que permitieron estabilizar su automatización en Playwright.

Este documento sirve como base de conocimiento para futuros casos que reutilicen patrones similares dentro del módulo `Procesos > Gastos Financieros`.

## Contexto del caso

- Caso: `E64-GF-ER-01-01`
- Módulo: `Procesos > Gastos Financieros`
- Flujo esperado:
  - seleccionar `Gastos Financieros`
  - seleccionar flujo `REAL`
  - entrar a `Procesos > Procesos`
  - configurar `Modo de Ejecución = Resumido`
  - configurar `Descripción Región`
  - marcar `FASE 3`
  - ejecutar `Ejecutar Todo`
  - responder `No`
  - validar fases y porcentajes

## Problemas y soluciones

### 1. Confusión entre los dos combos superiores

**Problema**

En la cabecera del módulo hay dos combos distintos:

- combo de módulo: `Gastos Financieros`, `Asientos Manuales`, etc.
- combo de flujo: `202508_REAL_Flujo_Mes` con badge `REAL`

Al principio el código trataba de resolver ambos usando texto demasiado amplio, y en varios intentos terminaba interactuando con el trigger visible en vez de con la opción real del dropdown.

**Señales observadas**

- clicks interceptados por overlays
- el locator resolvía al trigger del combo y no al item del menú
- el badge `REAL` se confundía con la opción del dropdown

**Solución**

Separar claramente ambas responsabilidades:

- `selectGastosFinancierosModule()`
- `selectRealFlow()`

Y buscar las opciones dentro del popper visible, no en toda la página.

**Referencia**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)

### 2. El flujo `REAL` no debe resolverse por texto concatenado del trigger

**Problema**

El trigger del flujo renderiza algo como:

- `202508_REAL_Flujo_Mes`
- badge `REAL`

Playwright leía todo concatenado y eso volvió frágil la validación por texto completo.

**Solución**

Buscar explícitamente el `span` del badge `REAL` dentro del trigger y seleccionar la opción `REAL` dentro del dropdown visible, en vez de depender del texto total del botón.

**Referencia**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)

### 3. El menú lateral `Procesos` y el submenú `Procesos` tienen el mismo nombre

**Problema**

El menú lateral contiene:

- botón de sección `Procesos`
- submenú/link `Procesos`

Usar solo texto `Procesos` generó ambigüedad.

**Solución**

Resolver primero la sección lateral y después el submenú por su `href`:

- `a[href="/procesos/procesos/"]`

Esto evitó clicks al nivel incorrecto del menú.

**Referencia**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)

### 4. `Periodo` y `Versión` no siempre son editables

**Problema**

Las grabaciones y las corridas reales mostraron estados distintos:

- en algunas sesiones `Periodo` y `Versión` aparecían deshabilitados
- en otras corridas se veían renderizados pero sin quedar claro si debían ser escritos en este caso

Esto quedó desalineado con la descripción del catálogo.

**Solución**

No forzar todavía escritura sobre esos campos y dejar el comportamiento documentado con `TODO` en el código hasta confirmar si el frontend actual requiere edición real o si son solo lectura en este flujo.

**Referencia**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)

### 5. `Modo de Ejecución` y `Descripción Región` deben tratarse como pasos secuenciales independientes

**Problema**

Se introdujeron errores al intentar generalizar el cierre de popups:

- se volvió a abrir `Modo de Ejecución` por error
- se confundió el trigger de `Descripción Región` con otros botones
- se llegó a pensar que había que “cerrar” `Modo`, cuando en realidad al seleccionar `Resumido` ya se cierra solo

**Regla correcta**

El flujo válido quedó así:

1. identificar `Modo de Ejecución`
2. abrirlo
3. marcar `Resumido` si no estaba marcado
4. identificar `Descripción Región`
5. abrirlo
6. marcar `Exactus`, `AMED` y `AP Vida` si no están marcadas
7. cerrar `Descripción Región` repitiendo exactamente el mismo click del paso 5

**Solución**

Se dejó el flujo sin heurísticas globales ni reescaneo genérico de botones.

`Descripción Región` se maneja con su trigger propio, y el cierre se hace reutilizando el mismo locator con el que fue abierto.

**Referencia**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)

### 6. Los overlays abiertos de combos bloquean interacciones posteriores

**Problema**

Cuando un dropdown quedaba abierto:

- interceptaba el click del siguiente paso
- Playwright reportaba `html intercepts pointer events`
- parecía que el locator siguiente estaba mal, cuando en realidad había un overlay flotante todavía activo

Esto pasó principalmente con:

- `Modo de Ejecución`
- `Descripción Región`

**Solución**

Cerrar explícitamente el combo correcto antes de continuar:

- `Modo de Ejecución` se cierra naturalmente al seleccionar `Resumido`
- `Descripción Región` se cierra reutilizando el mismo trigger con el que fue abierto

No introducir cierres globales o genéricos que vuelvan ambiguo el flujo.

### 7. El checkbox de `FASE 3` no puede modelarse solo por accesibilidad

**Problema**

El control de `FASE 3` fue el punto más delicado del caso.

Problemas detectados:

- a veces Playwright lo veía como `checkbox`
- a veces solo como estructura visual
- su nombre accesible podía incluir `(bloqueada)`
- no bastaba con buscar por `getByRole('checkbox', ...)`
- los intentos basados solo en accesibilidad resultaron inestables

**HTML relevante**

El componente real tiene esta forma:

- `label[aria-label="Distribuir Objetos de Costo a Unidades de Cuenta"]`
- `input[type="checkbox"]`
- `svg` de check

Y su estado visual depende de:

- `input.checked`
- `label.border-red-500`
- `svg.text-red-500`

**Solución**

Resolver `FASE 3` por su bloque visual real:

- heading `FASE 3`
- texto `Distribuir Objetos de Costo a Unidades de Cuenta`
- `label` del checkbox dentro de ese bloque
- `input[type="checkbox"]` interno como estado fuente

Luego validar:

- `toBeChecked()`
- clase `border-red-500` en el label
- clase `text-red-500` en el icono

**Referencias**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)
- código fuente del componente compartido durante el análisis

### 8. El checkbox debe accionarse como componente React controlado

**Problema**

Del código fuente del frontend se confirmó:

- `checked={Boolean(fase.isChecked)}`
- `onChange={() => onSelect?.(fase.id)}`

Eso significa que el estado no se resuelve “tocando el DOM” sin más; hay que disparar la interacción que React espera.

**Solución**

La interacción correcta quedó alineada a este modelo:

- click sobre el `label` asociado al checkbox
- verificación posterior del `input.checked`
- verificación posterior de las clases visuales

Evitar como solución final:

- escribir atributos directamente por `evaluate`
- confiar solo en texto o solo en `role="checkbox"`

### 9. La grabación de Playwright no debe copiarse literalmente

**Problema**

Las grabaciones contenían:

- navegación errática
- pasos exploratorios
- credenciales hardcodeadas
- clicks redundantes

Usarlas como script literal habría degradado el test.

**Solución**

Usarlas solo como fuente de descubrimiento para:

- identificar componentes reales
- confirmar estructura visual
- entender el orden funcional del flujo
- detectar modales, labels, badges y porcentajes

El JSON del catálogo sigue siendo la fuente de verdad del caso.

### 10. El estado del ambiente cambia la forma visible de las fases

**Problema**

Se observaron diferencias entre:

- sesiones manuales
- grabaciones
- corridas automatizadas

Ejemplos:

- `FASE 2` mostró textos distintos según el estado del ambiente
- `FASE 3` a veces mostraba el check visual y otras no parecía hacerlo claramente en screenshot
- `Parches` y `Cierre` podían aparecer ya procesados en sesión manual

**Solución**

No inferir reglas solo desde una captura aislada.

Cruzar siempre:

- catálogo JSON
- grabaciones
- DOM inspeccionado manualmente
- screenshot/trace de la corrida real

### 11. La validación de porcentajes debía reflejar la regla de negocio real

**Problema**

Inicialmente se estaba asumiendo `100%` para todas las fases, pero el usuario aclaró que para este caso:

- tras responder `No`
- hay que esperar entre 15 y 20 segundos
- `Aplicar Parches` debe quedar en `0%`
- las demás fases relevantes deben llegar a `100%`

**Solución**

Se dejó una espera explícita de `15s` documentada con `TODO` y la validación quedó orientada a:

- fases esperadas en `100%`
- `Aplicar Parches` en `0%`

**Referencia**

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)
- [gastos-financieros.critical.spec.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/tests/e2e/procesos/gastos-financieros.critical.spec.ts)

## Reglas reutilizables para otros casos

- No asumir que dos combos con apariencia similar se manipulan igual.
- No usar búsqueda global genérica cuando el paso tiene un contexto visual claro.
- Si un dropdown se abrió con un trigger concreto, cerrarlo con ese mismo trigger.
- No mezclar exploración manual con implementación literal del recorder.
- Si Playwright y el DOM visual no coinciden, revisar screenshot, trace y árbol accesible antes de cambiar el locator.
- Para componentes React controlados, validar siempre el estado final observable y no solo el click.

## Archivos relacionados

- [ProcesosGastosFinancierosPage.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/pages/procesos/ProcesosGastosFinancierosPage.ts)
- [gastos-financieros.critical.spec.ts](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/tests/e2e/procesos/gastos-financieros.critical.spec.ts)
- [E64-GF-ER-01-01.md](/Users/jorgeinfante/repos/proyectos/soaint/QA-Aldis/MotordeDistribucion/docs/analisis_casos_prueba/E64-GF-ER-01-01.md)
