const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const sourceCandidates = [
  path.join(rootDir, 'docs', 'catalogos', 'excel', '2025-PACIFICO-DESARORROLLO-Casos de Prueba-FASE 2- bloque 2.xlsx'),
  path.join(rootDir, '2025-PACIFICO-DESARORROLLO-Casos de Prueba-FASE 2- bloque 2.xlsx'),
];
const sourceFile = sourceCandidates.find((candidate) => fs.existsSync(candidate));

if (!sourceFile) {
  throw new Error(`No se encontro el Excel fuente. Rutas revisadas: ${sourceCandidates.join(', ')}`);
}

const markdownOutput = path.join(rootDir, 'docs', 'catalogos', 'catalogo_casos_prueba_bloque2.md');
const jsonOutput = path.join(rootDir, 'data', 'catalogos-json', 'catalogo_casos_prueba_bloque2.json');

const workbook = xlsx.readFile(sourceFile);
const scenarios = xlsx.utils.sheet_to_json(workbook.Sheets['ESCENARIOS'], { header: 1, raw: false, range: 1 });
const caseRows = xlsx.utils.sheet_to_json(workbook.Sheets['Casos de prueba'], { header: 1, raw: false, range: 1 });
const normalize = (s) => (s ? String(s).trim() : '');

const scenarioMap = new Map();
for (const row of scenarios) {
  const id = normalize(row[1]);
  const desc = normalize(row[2]);
  if (id) scenarioMap.set(id.toLowerCase(), { id, desc });
}

const cases = [];
for (const row of caseRows) {
  const id = normalize(row[0]);
  if (!id) continue;

  let scenarioKey = normalize(row[1]);
  let scenarioId = '';

  if (scenarioKey) {
    const key = scenarioKey.toLowerCase();
    if (scenarioMap.has(key)) {
      scenarioId = scenarioMap.get(key).id;
    } else {
      let candidate = id;
      while (candidate) {
        if (scenarioMap.has(candidate.toLowerCase())) {
          scenarioId = scenarioMap.get(candidate.toLowerCase()).id;
          break;
        }
        const idx = candidate.lastIndexOf('.');
        if (idx === -1) break;
        candidate = candidate.slice(0, idx);
      }
      if (!scenarioId) scenarioId = scenarioKey;
    }
  } else {
    let candidate = id;
    while (candidate) {
      if (scenarioMap.has(candidate.toLowerCase())) {
        scenarioId = scenarioMap.get(candidate.toLowerCase()).id;
        break;
      }
      const idx = candidate.lastIndexOf('.');
      if (idx === -1) break;
      candidate = candidate.slice(0, idx);
    }
  }

  const title = normalize(row[2]);
  const description = normalize(row[3]);
  const preconditions = normalize(row[4]);
  const datos = normalize(row[5]);
  const pasos = normalize(row[6]);
  const resultado = normalize(row[7]);

  cases.push({ id, scenarioId, title, description, preconditions, datos, pasos, resultado });
}

const grouped = new Map();
for (const c of cases) {
  const key = c.scenarioId || 'NO_ESCENARIO';
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(c);
}

let out = '# Catalogo de casos de prueba\n\n---\n\n';
for (const [scenarioKey, items] of grouped) {
  const scenario = scenarioMap.get(scenarioKey.toLowerCase());
  const scenarioId = scenario ? scenario.id : scenarioKey;
  const scenarioDesc = scenario ? scenario.desc : 'Sin descripcion disponible';
  out += `## Escenario: ${scenarioId}\n**Descripcion:** ${scenarioDesc}\n\n`;

  for (const item of items) {
    out += `### Caso de prueba: ${item.id}\n- Implementado: No\n\n**Titulo:** ${item.title || 'Sin titulo'}\n\n**Descripcion:** ${item.description || 'Sin descripcion'}\n\n**Precondiciones:**\n${item.preconditions ? item.preconditions.split(/\n/).map((l, i) => `${i + 1}. ${l.trim()}`).join('\n') : '1. Ninguna'}\n\n**Datos:**\n${item.datos ? item.datos.split(/\n/).map((l) => `- ${l.trim()}`).join('\n') : '- Ninguno'}\n\n**Pasos:**\n${item.pasos ? item.pasos.split(/\n/).map((l, i) => `${i + 1}. ${l.trim()}`).join('\n') : '1. Ninguno'}\n\n**Resultado esperado:**\n${item.resultado || 'Sin resultado esperado'}\n\n---\n\n`;
  }
}

fs.mkdirSync(path.dirname(markdownOutput), { recursive: true });
fs.mkdirSync(path.dirname(jsonOutput), { recursive: true });
fs.writeFileSync(markdownOutput, out, 'utf8');
fs.writeFileSync(jsonOutput, JSON.stringify({ scenarios: [...scenarioMap.values()], cases }, null, 2), 'utf8');
console.log('Generated docs/catalogos/catalogo_casos_prueba_bloque2.md and data/catalogos-json/catalogo_casos_prueba_bloque2.json with', grouped.size, 'scenarios and', cases.length, 'cases');
