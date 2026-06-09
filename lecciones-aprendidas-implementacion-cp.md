# Lecciones aprendidas — Implementación de casos de prueba Playwright

> Fecha: 2026-05-04  
> Contexto: Discrepancia entre métricas de QA manual (94% pass / 6% fail) y automatización Playwright (50% pass / 46% fail) tras ejecución de 112 tests del Bloque 1.  
> Objetivo: Evitar que las mismas causas de error se repitan en la implementación de los próximos casos.

---

## 1. Sincronizar el catálogo con la suite antes de escribir código

### Qué ocurrió
- El QA manual reportó 7 CP fallidos (E8-C-01.5, E8-C-01.6, E9-C-01.5, E9-C-01.6, E10-C-01.6, E11-C-01.5, E11-C-01.6).
- De esos 7, **4 ni siquiera estaban implementados** en la suite ejecutada (E8-C-01.5, E8-C-01.6, E9-C-01.5, E9-C-01.6).
- Resultado: la automatización no cubría los mismos escenarios que el manual, haciendo imposible comparar métricas.

### Regla para futuros casos
- **Antes de implementar cualquier caso**, verificar que el ID exista en `catalogo_casos_prueba.md` y que no esté duplicado o en bloques no ejecutados.
- **Cada caso implementado debe actualizar `seguimiento_casos_prueba.md`** para reflejar si está listo para automatización, pendiente de datos o bloqueado por defecto.

---

## 2. No asumir la estructura DOM del modal de carga

### Qué ocurrió
- 8 tests fallaron con el mismo error: `[BUG] El modal de carga no expone un input de archivo para seleccionar el Excel.`
- El selector usado fue: `getByTestId('cargas-parametros-upload-dialog').locator('input[type="file"]').first()`
- El modal había cambiado su implementación visual (probablemente usa un botón nativo, drag & drop o un input oculto sin el tipo esperado), pero los tests no se adaptaron.

### Regla para futuros casos
- **Inspeccionar el DOM real del modal de carga en cada módulo** antes de escribir el selector de archivo.
- Si el input no es un `input[type="file"]` estándar, documentar la alternativa (ej. botón con `data-testid` específico, API de drag & drop, etc.) en los Page Objects compartidos.
- **Preferir `data-testid` sobre selectores de tipo o etiqueta** cuando se trata de componentes reutilizados (como el modal de carga).

---

## 3. Validar la existencia de fixtures antes de declarar un caso "implementado"

### Qué ocurrió
- `E35-C-04.3` falló con `[DATA] No existe un archivo controlado para Canales`. El fixture `fixtures/files/bloque-1/E35-C-04.3/REAL Canales.xlsx` no existía.
- Esto se reportó como fallo de automatización, cuando era un problema de preparación de datos.

### Regla para futuros casos
- **Checklist obligatorio antes de marcar un caso como implementado:**
  - [ ] Archivo fixture creado en la ruta esperada.
  - [ ] Nombre del archivo coincide exactamente con lo que el test busca (sensible a mayúsculas/minúsculas y tildes).
  - [ ] El archivo tiene las cabeceras que el caso describe (no solo las del catálogo, sino las que el sistema realmente genera).

---

## 4. Las descargas necesitan validación de tiempo real, no solo de resultado final

### Qué ocurrió
- 4 tests de descarga (`E10-C-01.1` a `01.4`) hicieron timeout (>90s). El manual no reportó estos casos como fallidos, posiblemente porque esperó más tiempo o no midió el tiempo estrictamente.
- Además, `E10-C-01.6` (BBA/VFA) y `E11-C-01.6` fallaron porque la descarga nunca se completó.

### Regla para futuros casos
- **Definir el criterio de timeout de descarga con QA manual antes de implementar.** Si el manual acepta 3 minutos, el test debe configurarse con ese timeout, no con el genérico de 90s.
- **No solo validar "se descargó un archivo"**: verificar nombre del archivo, extensión, y que el evento de descarga realmente se emitió (`page.waitForEvent('download')`).
- Si la descarga es asíncrona (aparece mensaje "Procesando"), el test debe esperar la notificación de finalización, no solo el archivo en disco.

---

## 5. Homologar cabeceras entre catálogo, frontend y archivo descargado

### Qué ocurrió
- `E11-C-01.5` (Maestro UoA): faltaban 10 cabeceras en el archivo descargado (`ifrsGroup`, `profDesc`, `measureShortDesc`, etc.).
- `E11-C-01.7` (Configuración de Parches): faltaban `Tipo de Gasto`, `Código Concepto`, `Porciento %`.
- El manual también reportó estos mismos problemas (BUG-UAT-011, inconsistencia de cabeceras), pero la automatización los detectó antes.

### Regla para futuros casos
- **Antes de implementar cualquier caso de descarga/integridad**, pedir a QA manual o al negocio la **plantilla Excel oficial homologada**.
- El test debe comparar cabeceras con un contrato explícito (array esperado), no inferirlas de la tabla del frontend, que puede tener columnas visuales diferentes a las del archivo.
- Si hay una diferencia conocida y aceptada (ej. frontend muestra "Estado" pero el archivo usa "Estatus"), documentarla como excepción en el test, no silenciarla.

---

## 6. No confiar en el estado del ambiente como precondición estable

### Qué ocurrió
- `E41-DIS-01` y `E44-DIS` fallaron porque no había distribuciones visibles en la tabla.
- `E4-C-02.x` (cargas iniciales) pasaron pero con anotaciones: "La tabla ya contiene X filas antes de la carga" y "No se pudo validar el mensaje de éxito final".

### Regla para futuros casos
- **Si un caso requiere datos previos**, el test debe:
  - Verificar si los datos existen.
  - Si no existen, **crearlos vía API o UI** como precondición, no asumir que el ambiente los tiene.
  - O, marcar el caso como `QA_PENDING` con anotación clara de que necesita seeding.
- **Evitar tests que dependen del orden de ejecución** a menos que se usen `test.describe.serial` y se documente explícitamente.

---

## 7. Revisar selectores de navegación cuando cambia la landing page

### Qué ocurrió
- `E0-LOGIN-01` falló porque esperaba redirección a `/distribuciones` pero el sistema quedó en `/`.
- `E64-GF-ER-01-01` falló porque esperaba `/distribuciones` pero quedó en `/comunes/lineas/`.
- `E4-C-02.5` no encontró el botón "Comunes" en el sidebar.

### Regla para futuros casos
- **No hardcodear la URL de landing post-login**. Usar una variable de entorno o una función de navegación que adapte la ruta según el rol.
- **Si el menú lateral cambia de nombre o estructura**, los tests de navegación deben actualizarse inmediatamente. Preferir `data-testid` sobre texto visible para ítems de menú estables.

---

## 8. El generador de reportes ejecutivos debe coincidir con la fuente cruda

### Qué ocurrió
- Playwright JSON reportó 52 fallos.
- El reporte ejecutivo (`summary.json`) reportó 48 fallos.
- Esto generó confusión sobre cuál era la cifra real.

### Regla para futuros casos
- **La fuente de verdad es el JSON crudo de Playwright**. Cualquier reporte derivado debe reconciliarse contra ese JSON antes de publicarse.
- **Si un test tiene `status: "unexpected"` o `"timedOut"`, siempre debe contarse como fallo**, independientemente de si el generador ejecutivo lo clasifica como `TECH`, `BUG` o `DATA`.

---

## 9. Distinguir entre "falso positivo de automatización" y "defecto real del producto"

### Qué ocurrió
- Algunos fallos (modal de carga, fixture faltante, timeout de red) eran problemas de la automatización o del ambiente, no del producto.
- Otros (cabeceras faltantes, descarga no completa, duplicidad no validada en Parches) eran defectos reales.
- Sin esta distinción, el equipo de desarrollo no sabe qué corregir primero.

### Regla para futuros casos
- **Usar prefijos consistentes en los mensajes de error:**
  - `[BUG]` = Defecto real del producto. Debe ir a Azure.
  - `[TECH]` = Problema de selector, timeout de red, cambio de UI. Debe corregirse en el test.
  - `[DATA]` = Fixture faltante, ambiente sin datos. Debe corregirse en la preparación.
  - `[QA_PENDING]` = Caso implementado pero no validable aún por falta de definición o ambiente.
- **Revisar todos los `[TECH]` y `[DATA]` antes de presentar métricas a QA manual**, para no reportar falsos positivos como fallos del producto.

---

## 10. Los casos de validación de mensajes de error deben ser resilientes

### Qué ocurrió
- `E8-C-01.5` y `E8-C-01.6` (manuales) reportaron: "Carga de archivo incompleto muestra mensaje incorrecto".
- La automatización no tenía estos casos implementados, pero sí tenía varios (`E6-C-01.x`) que fallaban por no poder cargar el archivo, no por validar el mensaje de error.

### Regla para futuros casos
- **Separar claramente** los casos de:
  - Carga exitosa de archivo válido.
  - Rechazo por archivo inválido (cabeceras, formato).
  - Rechazo por archivo incompleto (faltan columnas o filas).
  - Mensaje de error específico esperado.
- **El mensaje de error debe validarse contra el texto exacto del catálogo**, no solo contra "apareció algún mensaje rojo".
- Si el mensaje de error cambia frecuentemente, usar una lista de mensajes aceptables, no un string exacto.

---

## Checklist pre-implementación (usar en cada nuevo caso)

- [ ] El ID del caso existe en el catálogo y está en el bloque correcto.
- [ ] Se revisó el caso más cercano ya implementado en el mismo módulo para reutilizar patrones.
- [ ] Los fixtures necesarios existen y tienen el nombre y contenido correcto.
- [ ] El modal/componente de carga fue inspeccionado en el DOM real antes de escribir selectores.
- [ ] Las cabeceras esperadas del archivo descargado fueron confirmadas con la plantilla oficial.
- [ ] Se definió el timeout de descarga con QA manual.
- [ ] Las precondiciones de datos pueden satisfacerse en el ambiente de automatización.
- [ ] Se identificó si el caso es `expected`, `QA_PENDING` o `skip` con justificación.
- [ ] Se actualizó `seguimiento_casos_prueba.md` con el estado del caso.

---

*Documento generado tras el análisis de la ejecución del 2026-05-04. Aplicar a partir de la implementación del Bloque 2 y Bloque 3.*
