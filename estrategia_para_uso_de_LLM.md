# Estrategia Para Uso De LLM

## Objetivo

Evaluar cómo usar un LLM para que, pasándole el `case_id` y la información del caso de prueba extraída desde Excel/JSON, pueda generar código Playwright con calidad suficiente para este proyecto.

La idea no debe tratarse como "generación libre de tests", sino como un pipeline controlado con contexto, validación y límites claros.

## Punto De Partida

Sí se puede, pero no conviene pasar directamente de:

- `case_id`
- caso del Excel

a:

- test final completo

sin una capa intermedia de:

- normalización de entrada
- construcción de contexto
- generación estructurada
- validación automática
- revisión humana o gate autorizado

Si no se hace así, el resultado normal será:

- tests frágiles
- falsos positivos
- trazabilidad pobre
- código inconsistente con el repo

## Cambios Clave

### 1. Estandarizar La Entrada

Usar el JSON estructurado como fuente principal, no el Excel crudo.

El input mínimo para el LLM debe ser:

- `case_id`
- objeto del caso
- metadata de seguimiento si existe

### 2. Añadir Contexto Técnico Mínimo

El LLM no debe trabajar solo con el caso funcional. También necesita contexto real del repo:

- estructura del proyecto
- fixtures disponibles
- Page Objects existentes
- convenciones de `tags` y nombres
- reglas de seguridad
- limitaciones conocidas del framework

### 3. Forzar Salida Estructurada

La respuesta del LLM no debe ser texto libre sin control.

Debe producir algo parecido a:

- `analysis`: cómo entendió el caso
- `plan`: pasos, riesgos y supuestos
- `patch`: cambio de código o diff
- `checks`: qué validar localmente

### 4. Introducir Gates Automáticos

Antes de aceptar código generado, debe pasar por validaciones mínimas:

- `lint` o `typecheck` si aplica
- ejecución de test objetivo por `case_id`
- detección de anti-patrones

Anti-patrones importantes:

- credenciales hardcodeadas
- `waitForTimeout()`
- selectores frágiles innecesarios
- cambios de módulo no justificados

## Arquitectura Recomendada

### 1. `case-loader`

Responsabilidades:

- recibir `case_id`
- extraer el caso desde el JSON
- agregar estado de `seguimiento_casos_prueba.md`

### 2. `context-builder`

Responsabilidades:

- detectar módulo probable
- traer snippets relevantes de `tests/e2e`, `pages`, `fixtures`
- resumir locators, componentes y utilidades disponibles

### 3. `generator`

Responsabilidades:

- llamar al LLM con una plantilla de prompt estable
- pedir patch/diff, no archivo completo

### 4. `validator`

Responsabilidades:

- aplicar patch en working tree o rama controlada
- correr checks mínimos
- si falla, iterar con feedback controlado al LLM

### 5. `review-gate`

Responsabilidades:

- en modo humano-en-el-medio: mostrar diff y checks
- en modo batch autorizado: continuar por lote

## Implementación Práctica En Este Repo

### Estructura Sugerida

Crear `scripts/llm/` con:

- `generate_case.py` o `generate_case.ts` como orquestador
- `prompts/case_to_playwright.md` como plantilla principal
- `rules.json` con guardrails

Crear `scripts/llm/context.py` o equivalente para:

- identificar archivos candidatos por módulo (`auth`, `comunes`, `distribucion`, etc.)
- armar el contexto mínimo a pasar al modelo

Crear `scripts/llm/validate.sh` para:

- `npm run test:list`
- `playwright test --grep <ID> --project=chromium --workers=1`

Integrar tracking:

- actualizar `seguimiento_casos_prueba.md` con transiciones tipo:
  - `not_started -> implemented`
  - `not_started -> blocked`

## Guardrails Obligatorios

- No credenciales en código.
- No `waitForTimeout()` salvo diagnóstico temporal.
- No fallback que cambie el módulo del caso.
- No marcar `implemented` si no pasa el test objetivo.
- Si el caso está incompleto, devolver `blocked` con razón explícita.
- No inventar expected results no observables.
- No asumir equivalencia de IDs solo por similitud funcional.

## Estrategia De Rollout

### Etapa 1. Piloto

Empezar con `3` a `5` casos de alta confianza.

### Etapa 2. Medición

Medir al menos:

- `pass rate` en primer intento
- tiempo de estabilización
- flakiness
- cantidad de intervención manual necesaria

### Etapa 3. Escalado

Si funciona:

- pasar a batch por lotes pequeños (`10` a `20`)
- no escalar de golpe a todo el catálogo

### Etapa 4. Control Operativo

Mantener siempre:

- opción de stop humano
- trazabilidad entre caso, diff, ejecución y estado de seguimiento

## Sobre Modelos Gratis Y Pagos

## Recomendación Principal

Para este caso de uso, la recomendación es:

- pago para la solución real
- gratis solo para prototipar

## Por Qué

Aquí el problema no es "generar un archivo cualquiera". El modelo tiene que razonar con:

- caso del JSON
- código existente
- convenciones del repo
- grabaciones Playwright
- validación parcial contra la UI

Eso exige:

- contexto largo
- buen seguimiento de instrucciones
- generación consistente de parches
- baja tasa de alucinación
- uso repetido y estable por API

## Limitaciones De Los Modelos Gratis

Los modelos gratis suelen fallar precisamente en los puntos que más importan aquí:

- límites de uso bajos o variables
- peor consistencia entre llamadas
- más probabilidad de inventar pasos o IDs
- menos fiabilidad para iterar sobre diffs grandes
- en varios casos, ausencia de API gratuita estable para producción

## Recomendación Concreta

- Para producción o pipeline serio: usar uno de pago.
- Para experimentar rápido sin costo inicial: usar uno gratis o local solo para validar el flujo, no como base de generación final.

## Opciones

### OpenAI `gpt-5` / `gpt-5 mini`

- Fuerte para código, razonamiento y salidas estructuradas.
- Buen punto de partida si buscas equilibrio entre calidad y ecosistema de herramientas.
- `gpt-5 mini` puede servir bien para clasificación y contexto.
- `gpt-5` puede reservarse para generación delicada.

Referencias oficiales:

- `https://platform.openai.com/pricing`
- `https://platform.openai.com/docs/models/gpt-5`

### Claude Sonnet 4

- Muy buena opción para razonamiento y edición de código.
- Normalmente más caro que una opción mini.

Referencia oficial:

- `https://docs.anthropic.com/en/docs/about-claude/pricing`

### Gemini 2.5 Pro

- Potente, sobre todo si ya estás en ecosistema Google.
- Para uso serio normalmente lleva a facturación y su conveniencia depende del entorno de despliegue.

Referencia oficial:

- `https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro`

### Mistral / Codestral

- Útiles y más económicos en ciertos escenarios.
- Buenos para coding, pero no serían la primera apuesta si la prioridad es máxima calidad en trazabilidad y validación.

Referencias oficiales:

- `https://mistral.ai/pricing`
- `https://docs.mistral.ai/models/codestral-25-08`

## Decisión Práctica

- Si quieres que esto sea factible de verdad: usar pago.
- Si quieres minimizar costo sin perder demasiada calidad:
  1. `gpt-5 mini` para clasificar casos y preparar contexto.
  2. `gpt-5` o `Claude Sonnet 4` para generar o ajustar tests complejos.
- Si quieres solo probar el concepto:
  1. usar un modelo gratis o local para matching y clasificación
  2. no usarlo como base para la generación final confiable

## Qué Debe Tener Un LLM Para Que Sea Viable

- contexto amplio y estable
- buen desempeño en TypeScript/Playwright
- salidas estructuradas fiables
- buen seguimiento de instrucciones largas
- bajo nivel de alucinación
- API estable con `rate limits` predecibles
- costo razonable por iteración
- capacidad de trabajar con diffs/parches, no solo texto libre

## Conclusión

Gratis puede servir para demo o exploración.

Para una solución que implemente casos desde JSON con calidad suficiente, trazabilidad y posibilidad real de escalar, no es recomendable apostar por gratis como base principal.

El costo de corregir:

- código malo
- falsos positivos
- tests frágiles

termina siendo mayor que pagar un modelo decente con mejor consistencia.

## Recomendación Final Para Este Proyecto

La variante más sensata sería una arquitectura híbrida:

1. modelo barato para clasificación y armado de contexto
2. modelo fuerte para generación o refactor de tests
3. validación automática local antes de aceptar cada cambio
4. gate humano al inicio y batch solo cuando la calidad ya esté demostrada
