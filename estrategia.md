Objetivo real

Automatizar con Playwright unos casos de prueba que vienen de un Excel convertido a JSON, sobre una web que:

no conoces,

no tiene código fuente disponible,

tiene casos ambiguos,

requiere que la IA acelere tanto el descubrimiento del sitio como la implementación de los tests.


La estrategia correcta no es “generar tests directamente”, sino montar un pipeline con estas fases:

1. preparar el entorno


2. descubrir el sitio


3. persistir conocimiento del sitio


4. construir capa reusable


5. clasificar los casos del JSON


6. implementar tests por nivel de confianza


7. estabilizar y endurecer


8. operar el ciclo con el agente




---

1. Principio rector

Tu agente no debe actuar solo como generador de código.

Debe cumplir 4 roles:

explorador del sitio

modelador del conocimiento descubierto

constructor de infraestructura reusable

implementador de tests


Eso cambia completamente la probabilidad de éxito.


---

2. Qué problema estás resolviendo realmente

No estás resolviendo solo “cómo escribir Playwright”.

Estás resolviendo esto:

los casos están incompletos;

el sitio es desconocido;

hace falta observar la UI para reducir ambigüedad;

el conocimiento descubierto debe quedar persistido;

los tests deben construirse sobre una base reusable;

el agente debe operar con límites para no inventar ni hacer acciones peligrosas.



---

3. Estrategia general en una sola vista

Fase A. Base técnica

Preparar proyecto, credenciales, entorno y reglas.

Fase B. Discovery

Hacer que el agente explore la web con scripts Playwright.

Fase C. Knowledge base

Guardar lo descubierto en archivos estructurados.

Fase D. Reusable layer

Construir page objects, components, fixtures, helpers, assertions.

Fase E. Matching

Cruzar el JSON de tests con el conocimiento descubierto.

Fase F. Implementation

Implementar primero casos de alta confianza.

Fase G. Hardening

Reducir fragilidad y dejar la suite mantenible.

Fase H. Operación continua

Hacer que cada nueva ejecución enriquezca el conocimiento del sistema.


---

4. Fase A: preparación del entorno

Aquí defines todo lo necesario para que el agente pueda trabajar de verdad.

4.1. Precondiciones mínimas

Debes tener:

URL del sitio

ambiente no productivo preferiblemente

credenciales

proyecto Playwright funcional

JSON de casos

posibilidad de ejecutar navegador

carpeta para guardar artefactos


4.2. Estructura recomendada del proyecto

project/
  playwright.config.ts
  package.json
  .env
  data/
    test-cases.json
  discovery/
    site-map.json
    ui-catalog.json
    known-flows.json
    selector-hints.json
    ambiguities.json
    pages/
    screenshots/
  scripts/
    discovery/
      discover-home.ts
      discover-navigation.ts
      discover-page.ts
      discover-forms.ts
      discover-tables.ts
      discover-action-result.ts
      crawl-site.ts
  src/
    fixtures/
      test.ts
    pages/
      LoginPage.ts
      DashboardPage.ts
    components/
      Sidebar.ts
      DataTable.ts
      ConfirmModal.ts
      Toast.ts
      FormSection.ts
    helpers/
      discovery.ts
      dataFactory.ts
      caseParser.ts
      selectors.ts
      waits.ts
    assertions/
      businessAssertions.ts
    models/
      TestCase.ts
      DiscoveryModels.ts
  tests/
    generated/
    reviewed/
    smoke/

4.3. Variables de entorno

Necesitas algo así:

BASE_URL=https://tu-sitio
USERNAME=...
PASSWORD=...
HEADLESS=false

4.4. Reglas de seguridad obligatorias

Define desde el inicio:

no eliminar registros;

no confirmar acciones destructivas;

no usar producción;

no aprobar, pagar, enviar o procesar;

no inventar expected results;

si algo es ambiguo, registrar ambigüedad;

guardar evidencias de lo explorado.


Estas reglas deben estar tanto en tus instrucciones al agente como en el código.


---

5. Fase B: discovery del sitio

Esta fase es la más importante, porque tú no conoces la web.

5.1. Qué es discovery

No es scraping simple.
Es un proceso donde el agente:

abre la web;

identifica navegación;

entra a módulos accesibles;

perfila cada pantalla;

registra lo observado;

deja resultados estructurados reutilizables.


5.2. Qué debe descubrir

Como mínimo:

páginas y módulos accesibles

menús y submenús

URLs

headings

breadcrumbs

botones principales

formularios

labels

placeholders

campos requeridos aparentes

tablas

columnas

acciones por fila

tabs

modales

toasts

errores visibles

posibles criterios observables de éxito


5.3. Qué scripts debe crear el agente

El agente debe implementarlos.

a) discover-home.ts

Abre la web o dashboard post-login y extrae:

título

URL

headings

links

botones

inputs


b) discover-navigation.ts

Busca elementos navegables:

sidebar

navbar

menuitems

links

cards de dashboard

tabs principales


c) discover-page.ts

Dada una pantalla, extrae:

estructura dominante

heading principal

formularios

tablas

tabs

botones

mensajes


d) discover-forms.ts

Identifica formularios y lista:

labels

placeholders

tipos de campos

botones asociados

errores visibles


e) discover-tables.ts

Extrae:

columnas

botones de fila

filtros

paginación

acciones disponibles


f) discover-action-result.ts

Prueba acciones seguras y observa:

si abre modal

si navega

si cambia vista

si muestra toast

si muestra errores


g) crawl-site.ts

Orquesta la exploración recursiva.


---

6. Cómo descubre módulos sin que tú le escribas todas las rutas

Esto se hace con una lógica de exploración.

El agente no tiene que recibir cada módulo hardcodeado. Tiene que construir un crawler funcional seguro.

6.1. Candidatos de navegación

Debe explorar solo elementos que parezcan navegación, por ejemplo:

a[href]

[role="link"]

[role="menuitem"]

sidebar items

navbar items

cards con navegación

tabs principales

botones del tipo “Ver”, “Ir a”, “Administrar”


6.2. Qué debe evitar

No debe explorar indiscriminadamente:

Guardar

Eliminar

Confirmar

Aceptar

Procesar

Pagar

Aprobar

Enviar


6.3. Cómo sabe si está en una pantalla nueva

No debe depender solo de la URL.

Debe usar una “huella de pantalla” basada en:

URL

heading principal

breadcrumb

título visible

estructura dominante

presencia de tabla/formulario/modal

textos ancla relevantes


6.4. Control de recorrido

Debe guardar:

pantallas visitadas

rutas visitadas

elementos ya explorados

screenshots por vista

pantallas fallidas

profundidad máxima de exploración



---

7. Fase C: persistir conocimiento del sitio

Todo lo que el agente descubra debe quedar guardado.

No quieres que redescubra desde cero cada vez.

7.1. Archivos que debe generar

site-map.json

Mapa general del sistema.

Ejemplo de contenido:

nombre de módulo

URL

ruta de entrada

tipo de pantalla

componentes detectados

confianza


ui-catalog.json

Catálogo de patrones UI.

Ejemplos:

toasts

dialogs

tablas

formularios

tabs

mensajes de error


known-flows.json

Flujos que el agente pudo inferir con evidencia.

Ejemplos:

crear cliente

buscar cliente

abrir detalle

editar registro


selector-hints.json

Selectores preferidos o pistas por pantalla.

Ejemplos:

botón Nuevo

botón Guardar

tabla principal

modal de confirmación


ambiguities.json

Todo lo que no pudo concluir con suficiente certeza.

Ejemplos:

no está claro si el formulario es modal o página

hay múltiples rutas posibles

el expected result del caso no es observable


pages/*.json

Perfil detallado por pantalla.

screenshots/*

Evidencia visual de cada vista.


---

8. Fase D: construir la capa reusable

Una vez que ya hay evidencia del sitio, construyes la base reusable.

8.1. Objetivo de la capa reusable

Que los tests expresen intención funcional y no detalles del DOM.

El test debe decir:

crear cliente

buscar pedido

validar error de campo obligatorio


y no:

click en este selector raro

fill en el input nth-child

esperar 2 segundos


8.2. Piezas de la capa reusable

a) Fixtures

Para contexto común:

sesión autenticada

página lista

datos base

navegación base


b) Page Objects

Por módulo o pantalla.
Ejemplos:

LoginPage

DashboardPage

ClientesPage

PedidosPage


c) Component Objects

Para piezas repetibles:

Sidebar

DataTable

Toast

ConfirmModal

Tabs

FormSection


d) Helpers

Utilidades de apoyo:

generación de datos

waits seguros

lectura del JSON

parser de casos

helpers de descubrimiento


e) Assertions semánticas

Validaciones de negocio, no solo visibilidad.

Ejemplos:

validarCreacionExitosa

validarCampoObligatorio

validarRegistroEnTabla

validarToastExitoso


8.3. Regla de diseño principal

Los selectores deben vivir fuera de los tests.

Los tests consumen métodos.


---

9. Fase E: clasificación de los casos del JSON

Aquí dejas de tratar todos los tests como iguales.

9.1. Categorías

A. Automatizable de alta confianza

El caso tiene correspondencia clara con lo descubierto.

B. Automatizable con supuestos

El flujo es razonable, pero hay ambigüedades controladas.

C. Bloqueado por ambigüedad

Falta información para automatizar con seguridad.

9.2. Qué debe hacer el agente con cada caso

Por cada test del JSON debe producir:

objetivo inferido

módulo probable

flujo propuesto

datos requeridos

expected result observable

selectores o componentes implicados

nivel de confianza

supuestos

bloqueos si aplica


9.3. Regla importante

No debe inventar comportamiento funcional no sustentado por evidencia.


---

10. Fase F: implementación de tests

Ahora sí entra la automatización funcional.

10.1. Orden recomendado

Paso 1

Implementar smoke tests básicos para validar infraestructura.

Ejemplos:

login

navegación a módulo

apertura de formulario

búsqueda simple


Paso 2

Implementar los casos de alta confianza.

Paso 3

Implementar casos con supuestos controlados.

Paso 4

Marcar con fixme o equivalente los casos bloqueados.

10.2. Cómo debe generarse cada test

Cada test debería basarse en:

page objects

componentes reutilizables

assertions semánticas

datos controlados

evidencias de fallo


10.3. Qué debe quedar prohibido

selectores frágiles dispersos por todos lados

waits fijos innecesarios

lógica repetida

copiar y pegar flujos completos

validar solo “visible”



---

11. Fase G: endurecimiento y estabilización

Los tests generados al inicio no serán perfectos.

Necesitas una fase explícita de hardening.

11.1. Qué problemas corregir

selectores débiles

flakiness

dependencias temporales

estados inconsistentes

mala encapsulación

asserts pobres

duplicación de lógica


11.2. Qué acciones tomar

reemplazar selectores malos por roles/labels/textos confiables

reducir waitForTimeout

usar estados observables

desacoplar helpers

mejorar page objects

mejorar factories de datos

consolidar asserts


11.3. Evidencias

Configura:

trace al fallar

screenshot al fallar

video si aporta valor

logs por pantalla



---

12. Cómo trabajar con el agente en la práctica

Aquí está la parte operativa.

12.1. Qué le pides primero

No le pides “implementa todos los tests”.

Le pides esta secuencia:

Iteración 1

Prepara el proyecto para discovery.

Iteración 2

Crea los scripts de discovery y ejecútalos.

Iteración 3

Genera y consolida artefactos de conocimiento.

Iteración 4

Construye la capa reusable mínima.

Iteración 5

Clasifica los casos del JSON.

Iteración 6

Implementa primero 5 casos de alta confianza.

Iteración 7

Refactoriza y endurece.

12.2. Qué instrucciones debe recibir siempre

Debe tener reglas como estas:

usa la evidencia observable de la UI;

no inventes reglas de negocio;

registra ambigüedades;

no ejecutes acciones destructivas;

persiste conocimiento nuevo;

reutiliza infraestructura existente;

si un caso no es confiable, márcalo como bloqueado.



---

13. Workflow operativo completo

Te lo dejo secuenciado.

Etapa 1. Bootstrap

1. Crear proyecto Playwright.


2. Configurar .env.


3. Validar acceso y login.


4. Crear carpeta discovery/.



Etapa 2. Discovery inicial

5. Implementar discover-home.ts.


6. Implementar discover-navigation.ts.


7. Ejecutarlos.


8. Guardar home.json, navigation.json, screenshots.



Etapa 3. Exploración profunda
Implementar crawl-site.ts.


10. Recorrer módulos accesibles.


11. Perfilar cada pantalla con discover-page.ts.


12. Ejecutar discovery de formularios y tablas.



Etapa 4. Construcción de knowledge base

13. Generar site-map.json.


14. Generar ui-catalog.json.


15. Generar known-flows.json.


16. Generar selector-hints.json.


17. Generar ambiguities.json.



Etapa 5. Capa reusable mínima

18. Crear LoginPage, DashboardPage.


19. Crear Sidebar, Toast, ConfirmModal, DataTable.


20. Crear fixture authenticatedPage.


21. Crear assertions semánticas.


22. Crear parser del JSON de casos.



Etapa 6. Matching de casos

23. Para cada test del JSON, proponer:



módulo

flujo

expected result observable

confianza

supuestos


24. Separarlos en alta confianza, media, bloqueados.



Etapa 7. Implementación inicial

25. Implementar smoke tests.


26. Implementar primeros 5 casos de alta confianza.


27. Ejecutar.


28. Corregir.


29. Repetir.



Etapa 8. Escalado

30. Generar más tests con base en patrones ya consolidados.


31. Mantener actualizados los artefactos de discovery.


32. Refactorizar cada cierto lote.




---

14. Qué debe hacer el agente cuando encuentra algo nuevo

Debe enriquecer la base de conocimiento.

Regla operativa

Si descubre una nueva pantalla:

agregarla a site-map.json


Si descubre un patrón UI nuevo:

agregarlo a ui-catalog.json


Si logra un flujo estable:

agregarlo a known-flows.json


Si encuentra un selector confiable:

agregarlo a selector-hints.json


Si no puede concluir algo:

agregarlo a ambiguities.json


Eso convierte cada iteración en aprendizaje acumulativo.


---

15. Qué limitaciones debes asumir

Aunque esta estrategia es sólida, hay límites reales.

No podrá resolver solo con certeza total:

reglas de negocio invisibles en la UI

expected results mal definidos

flujos con varias interpretaciones válidas

datos previos que no estén disponibles

módulos no enlazados o no accesibles

estados especiales dependientes de backend


Por eso la estrategia no debe exigir “certeza del 100%”, sino:

alta confianza donde hay evidencia

supuestos explícitos donde falte detalle

bloqueo documentado donde no se pueda concluir



---

16. Qué entregables deberías esperar al final

Artefactos técnicos

scripts de discovery

knowledge base del sitio

page objects

componentes reutilizables

fixtures

helpers

assertions semánticas

parser del JSON

tests implementados


Artefactos de conocimiento

mapa del sitio

catálogo UI

flujos conocidos

ambigüedades

selectores recomendados

screenshots y trazas


Artefactos de gestión

listado de casos automatizados

listado de casos con supuestos

listado de casos bloqueados



---

17. Qué haría yo primero en tu lugar

En orden exacto:

1. dejar el proyecto Playwright listo para correr;


2. validar login automatizable;


3. hacer que el agente cree discover-home.ts;


4. hacer que cree discover-navigation.ts;


5. hacer que cree un crawl-site.ts seguro;


6. generar site-map.json y ui-catalog.json;


7. construir Sidebar, Toast, ConfirmModal, DataTable;


8. clasificar tu JSON de casos;


9. implementar 3 a 5 tests de alta confianza;


10. refactorizar la capa reusable;


11. escalar.




---

18. Resumen ejecutivo

La estrategia completa es esta:

no empezar por escribir los tests finales;

hacer que el agente descubra la web con Playwright;

guardar ese descubrimiento como conocimiento estructurado;

construir sobre eso una capa reusable;

cruzar cada caso del JSON con lo descubierto;

automatizar primero los casos con mayor evidencia;

dejar explícitos los supuestos y bloqueos;

endurecer la suite antes de escalar.


Ese enfoque es el que mejor encaja con tu realidad: sitio desconocido + casos ambiguos + necesidad de acelerar con IA.

Puedo convertir todo esto en un plan operativo concreto de implementación, con carpetas, responsabilidades por archivo y el orden exacto en que el agente debería ir creando cada pieza.
