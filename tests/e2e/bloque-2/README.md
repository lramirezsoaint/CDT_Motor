# Bloque 2 - Scaffold

Este bloque fue creado a partir del catálogo Excel:
- `2025-PACIFICO-DESARORROLLO-Casos de Prueba-FASE 2- bloque 2.xlsx`

Archivos generados:
- `catalogo_casos_prueba_bloque2.md`
- `catalogo_casos_prueba_bloque2.json`
- `scripts/generate-bloque2-specs.js`

Estructura generada:
- `tests/e2e/bloque-2/` - carpeta principal del bloque 2
- `tests/e2e/bloque-2/_shared/bloque2.fixture.ts` - fixture base del bloque 2
- `tests/e2e/bloque-2/carga-completa.spec.ts` - spec de scaffold inicial
- `tests/e2e/bloque-2/<ESCENARIO>/<ESCENARIO>.spec.ts` - 118 placeholders generados para cada escenario

Cómo regenerar las specs:
1. Ejecuta `node scripts/generate-bloque2-specs.js`
2. Esto recreará el esqueleto de los escenarios desde `catalogo_casos_prueba_bloque2.json`

Próximos pasos:
1. Implementar los casos más críticos del bloque 2 en los specs de cada escenario.
2. Crear page objects específicos de Bloque 2 si el flujo de navegación es distinto del resto.
3. Establecer qué casos `Automatizada` se pueden convertir de placeholders a pruebas reales primero.
