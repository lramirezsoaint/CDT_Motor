const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const catalogPath = path.join(rootDir, 'docs', 'catalogs', 'catalogo_casos_prueba_bloque2.json');
const outputDir = path.join(rootDir, 'tests', 'e2e', 'bloque-2');
const sharedDir = path.join(outputDir, '_shared');

const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const casesByScenario = new Map();
for (const testCase of catalog.cases) {
  const scenarioKey = (testCase.scenarioId || 'NO_ESCENARIO').trim();
  if (!casesByScenario.has(scenarioKey)) casesByScenario.set(scenarioKey, []);
  casesByScenario.get(scenarioKey).push(testCase);
}

const scenarioIds = catalog.scenarios.map((scenario) => scenario.id.trim());
const sanitizedMap = new Map();

for (const scenarioId of scenarioIds) {
  let sanitized = scenarioId.replace(/\s+/g, '');
  let suffix = 1;
  while ([...sanitizedMap.values()].includes(sanitized)) {
    sanitized = `${scenarioId.replace(/\s+/g, '')}_${suffix}`;
    suffix += 1;
  }
  sanitizedMap.set(scenarioId, sanitized);
}

for (const scenario of catalog.scenarios) {
  const scenarioId = scenario.id.trim();
  const dirName = sanitizedMap.get(scenarioId);
  const scenarioDir = path.join(outputDir, dirName);

  if (!fs.existsSync(scenarioDir)) {
    fs.mkdirSync(scenarioDir, { recursive: true });
  }

  const cases = casesByScenario.get(scenarioId) || [];
  const casesComment = cases
    .map((testCase) => ` * - ${testCase.id}: ${testCase.title || 'Sin título'}`)
    .join('\n');

  const content = `import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: ${scenarioId}
 * Descripción: ${scenario.desc || 'Sin descripción disponible'}
${casesComment ? ` * Casos:
${casesComment}
` : ''} */

test.describe('@critical @bloque2 @gt @${scenarioId}', () => {
  test.skip('@critical @bloque2 @gt @${scenarioId} placeholder', async ({ page }) => {
    // TODO: implementar el flujo del escenario ${scenarioId}.
    // Usa el catálogo en docs/catalogs/catalogo_casos_prueba_bloque2.md como fuente de verdad.
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });
});
`;

  const specPath = path.join(scenarioDir, `${dirName}.spec.ts`);
  if (!fs.existsSync(specPath)) {
    fs.writeFileSync(specPath, content, 'utf8');
  }
}

console.log(`Created ${scenarioIds.length} scenario skeleton directories under ${outputDir}`);
