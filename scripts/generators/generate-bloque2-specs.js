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

function inferFlowTag(caseId) {
  if (/^E0-/i.test(caseId)) return '@login';
  if (/^E(?:40|41|42|44)-/i.test(caseId)) return '@distribucion';
  if (/^E(?:4|9|58|59|71)-/i.test(caseId)) return '@upload_valido';
  if (/^E(?:5|6|8|61|62|70)-/i.test(caseId)) return '@upload_invalido';
  if (/^E35-/i.test(caseId)) return '@registrar';
  if (/^E36-/i.test(caseId)) return '@editar';
  if (/^E(?:37|43|68)-/i.test(caseId)) return '@eliminar';
  if (/^E63-/i.test(caseId)) return '@busqueda';
  if (/^E60-/i.test(caseId)) return '@columnas';
  if (/^E56-/i.test(caseId)) return '@paginacion';
  if (/^E(?:47|51|52|64|65|66|69-GT-EC)-/i.test(caseId)) return '@procesos';
  if (/^E(?:10|11)-/i.test(caseId)) return '@download_catalogo';
  if (/^E(?:67|69-GT-01)-/i.test(caseId)) return '@download_reporte';
  return '@distribucion';
}

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
  const flowTag = inferFlowTag(scenarioId);

  const content = `import { test } from '../_shared/bloque2.fixture';

/**
 * Escenario: ${scenarioId}
 * Descripción: ${scenario.desc || 'Sin descripción disponible'}
${casesComment ? ` * Casos:
${casesComment}
` : ''} */

test.describe('@bloque2 @${scenarioId}', () => {
  test.skip('@bloque2 @${scenarioId} ${flowTag} placeholder', async ({ page }) => {
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
