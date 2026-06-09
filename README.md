# Framework base Playwright - Motor Distribución

Esta base toma el repositorio actual de BD1 y lo reorganiza para que pueda crecer por bloques sin seguir sumando scripts aislados.

## Objetivo de esta versión
- eliminar login repetido por cada spec;
- separar páginas, componentes, utilidades y pruebas;
- dejar una capa de `legacy selectors` mientras Front expone `data-testid`;
- partir de BD1 como semilla y no rehacer todo desde cero;
- dejar smoke, críticos y regresión separados.

## Estructura
```text
tests/
  e2e/
    smoke/
    critical/
src/
  config/
  pages/
  components/
  utils/
  data/
legacy/
  specs/
docs/
```

## Qué se migró en esta primera base
- login reutilizable vía `global.setup.ts` + `storageState`;
- page object de autenticación;
- page object de distribución;
- page object de comunes;
- componente de sidebar;
- helpers de descarga y lectura de Excel;
- 4 pruebas ejemplo ya ubicadas en la nueva estructura;
- copia de los specs originales en `legacy/specs/`.

## Cómo usarlo
1. Copiar `.env.example` a `.env` o exportar variables en tu shell.
2. Completar `MOTOR_USERNAME`, `MOTOR_PASSWORD`, `MOTOR_GESTOR_USERNAME` y `MOTOR_GESTOR_PASSWORD`.
3. Ejecutar:
   - `npm ci`
   - `npx playwright install chromium`
   - `npm run test:list`
   - `npm run test:smoke`

## Recomendación de trabajo
### Fase 1
- estabilizar login, exportaciones y búsquedas de BD1;
- identificar 5 a 8 CP realmente críticos;
- no migrar los 54 automatizados en una sola iteración.

### Fase 2
- pedir a Front `data-testid` estables;
- reemplazar selectores absolutos centralizados en `src/utils/legacy-selectors.ts`.

### Fase 3
- convertir los CP priorizados de Bloque 3 y Bloque 2 a esta estructura;
- dejar smoke diario, críticos por merge y regresión bajo ventana controlada.

## Convención sugerida
- `@smoke`: lo mínimo para saber si el ambiente sigue vivo;
- `@critical`: flujos funcionales con valor de negocio;
- `@regression`: cobertura pesada o nocturna.

## Qué no hacer todavía
- no meter Gherkin como base del framework;
- no correr regresión completa en ambiente sin freezing;
- no seguir creando specs con credenciales hardcodeadas;
- no mezclar lógica de descarga, assertions y navegación en el mismo archivo si se puede reutilizar.

## Próximos pasos recomendados
1. mapear los 54 CP automatizados de BD1 a smoke / critical / regression;
2. reemplazar gradualmente xpaths por selectores estables;
3. agregar fixtures por rol si se suman más usuarios;
4. preparar una capa API/contratos para Bloque 3 cuando Swagger esté disponible.
