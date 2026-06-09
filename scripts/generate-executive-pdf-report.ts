const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const repoRoot = path.resolve(__dirname, '..');
const summaryPath = path.join(repoRoot, 'reports', 'executive-report', 'summary.json');
const playwrightResultsPath = path.join(repoRoot, 'reports', 'playwright-results.json');
const outputDir = path.join(repoRoot, 'reports', 'executive-report');
const outputHtml = path.join(outputDir, 'index.html');
const outputPdf = path.join(outputDir, 'reporte-ejecutivo-qa.pdf');

const colors = {
  green: '#1f9d67',
  red: '#d64545',
  yellow: '#d49c00',
  ink: '#172033',
  muted: '#617086',
  blue: '#0f6cbd',
  line: '#d9e3f0',
  bg: '#f6f8fb',
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function stripAnsi(value) {
  return String(value ?? '').replace(/\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/g, '');
}

function fixEncoding(value) {
  return stripAnsi(value)
    .replace(/Ã³/g, 'ó')
    .replace(/Ã­/g, 'í')
    .replace(/Ã©/g, 'é')
    .replace(/Ã¡/g, 'á')
    .replace(/Ãº/g, 'ú')
    .replace(/Ã±/g, 'ñ')
    .replace(/Ã/g, 'Í')
    .replace(/Ã‰/g, 'É')
    .replace(/Ã/g, 'Á')
    .replace(/Ãš/g, 'Ú')
    .replace(/Ã‘/g, 'Ñ')
    .replace(/â€¦/g, '...')
    .replace(/Â¡/g, '¡')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value) {
  return fixEncoding(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pct(value, total) {
  if (!total) return 0;
  return Number(((value / total) * 100).toFixed(1));
}

function priority(failureRate) {
  if (failureRate > 70) return { label: 'CRÍTICO', icon: '🔴', className: 'critical' };
  if (failureRate >= 40) return { label: 'MEDIO', icon: '🟡', className: 'medium' };
  return { label: 'BAJO', icon: '🟢', className: 'low' };
}

function businessModule(item) {
  const raw = fixEncoding(item.module || item.scenario || item.file || 'Sin módulo');
  const file = normalize(item.file);
  const title = normalize(`${item.title || ''} ${item.validates || ''}`);

  if (file.includes('/auth/') || raw === 'sidebar' || raw === 'auth') return 'Autenticación';
  if (file.includes('/procesos/')) return 'Procesos';
  if (file.includes('e63-c-bus') || title.includes('distribucion')) return 'Distribución';
  if (file.includes('comunes') || file.includes('bloque-1/')) {
    if (title.includes('configuracion de parches') || file.includes('35-c-0') && raw.includes('Parches')) return 'Configuración de Parches';
    if (title.includes('linea') || raw.includes('Línea') || raw.includes('Lineas')) return 'Líneas';
    if (title.includes('grupo producto') || raw.includes('Grupo Producto')) return 'Grupo Producto';
    if (title.includes('subcanal') || raw.includes('Subcanales')) return 'Subcanales';
    if (title.includes('canal') || raw.includes('Canales')) return 'Canales';
    if (title.includes('maestro uoa') || raw.includes('Maestro UoA')) return 'Maestro UoA';
    if (title.includes('unidades de cuenta') || raw.includes('Unidades de Cuenta')) return 'Unidades de Cuenta';
    return 'Comunes';
  }
  return raw || 'Sin módulo';
}

function rootCause(item) {
  const text = normalize(`${item.failureMessage || ''} ${item.executiveSummary || ''} ${item.failureType || ''}`);
  if (item.status === 'SKIPPED') return 'QA_PENDING';
  if (text.includes('[data]') || text.includes('no hay registros') || text.includes('no hay datos') || text.includes('sin datos')) {
    return 'DATA';
  }
  if (text.includes('[bug]') || text.includes('no expone') || text.includes('no muestra') || text.includes('no aparece') || text.includes('no se habilita') || text.includes('no respeta')) {
    return 'BUG';
  }
  return item.status === 'FAILED' ? 'TECH' : 'N/A';
}

function failurePattern(item) {
  const text = normalize(`${item.failureMessage || ''} ${item.title || ''} ${item.validates || ''}`);
  if (text.includes('input[type="file"]') || text.includes('no expone un input de archivo')) {
    return {
      key: 'Carga de archivos',
      label: 'Modal de carga no permite seleccionar archivo',
      impact: 'Bloquea validación de cargas, reemplazos y estructura de archivos.',
    };
  }
  if (text.includes('descarg') || text.includes('xlsx') || text.includes('archivo descargado')) {
    return {
      key: 'Descarga / integridad',
      label: 'Descarga o validación de archivos inconsistente',
      impact: 'Impide validar salidas operativas usadas por negocio.',
    };
  }
  if (text.includes('label') || text.includes('etiqueta') || text.includes('filtro')) {
    return {
      key: 'Filtros / UI',
      label: 'Filtros esperados no están disponibles o cambiaron',
      impact: 'Afecta búsqueda y control operativo en pantallas clave.',
    };
  }
  if (text.includes('dependenc') || text.includes('inactiv') || text.includes('elimin')) {
    return {
      key: 'Reglas de negocio',
      label: 'Reglas de edición/inactivación no se confirman',
      impact: 'Riesgo de modificar datos maestros sin control esperado.',
    };
  }
  if (text.includes('tohaveurl') || text.includes('navigation') || text.includes('url')) {
    return {
      key: 'Navegación',
      label: 'Redirección o contexto inicial incorrecto',
      impact: 'Bloquea flujos dependientes de llegar al módulo correcto.',
    };
  }
  if (text.includes('no hay registros') || text.includes('no existen registros')) {
    return {
      key: 'Datos',
      label: 'Datos de prueba insuficientes',
      impact: 'No permite confirmar reglas sobre registros existentes.',
    };
  }
  return {
    key: 'Automatización / entorno',
    label: 'Falla técnica pendiente de aislar',
    impact: 'Reduce confiabilidad de la señal de la suite.',
  };
}

function aggregate(report) {
  const cases = (report.cases || []).map((item) => ({
    ...item,
    moduleExecutive: businessModule(item),
    cause: rootCause(item),
    pattern: failurePattern(item),
  }));

  const modules = new Map();
  for (const item of cases) {
    const current = modules.get(item.moduleExecutive) || { module: item.moduleExecutive, total: 0, failed: 0, passed: 0, skipped: 0 };
    current.total += 1;
    if (item.status === 'FAILED') current.failed += 1;
    if (item.status === 'PASSED' || item.status === 'FLAKY') current.passed += 1;
    if (item.status === 'SKIPPED') current.skipped += 1;
    modules.set(item.moduleExecutive, current);
  }

  const moduleStats = [...modules.values()]
    .map((item) => ({ ...item, failureRate: pct(item.failed, item.total), priority: priority(pct(item.failed, item.total)) }))
    .sort((a, b) => b.failureRate - a.failureRate || b.failed - a.failed);

  const causes = { BUG: [], DATA: [], TECH: [], QA_PENDING: [] };
  for (const item of cases.filter((entry) => entry.status === 'FAILED' || entry.status === 'SKIPPED')) {
    causes[item.cause]?.push(item);
  }

  const patterns = new Map();
  for (const item of cases.filter((entry) => entry.status === 'FAILED')) {
    const current = patterns.get(item.pattern.key) || { ...item.pattern, count: 0, modules: new Set(), ids: [] };
    current.count += 1;
    current.modules.add(item.moduleExecutive);
    if (current.ids.length < 5) current.ids.push(item.id);
    patterns.set(item.pattern.key, current);
  }

  const patternRows = [...patterns.values()]
    .map((item) => ({ ...item, modules: [...item.modules].join(', ') }))
    .sort((a, b) => b.count - a.count);

  const topFailures = cases
    .filter((item) => item.status === 'FAILED')
    .map((item) => ({
      id: item.id || 'SIN-ID',
      module: item.moduleExecutive,
      what: item.pattern.label,
      impact: item.pattern.impact,
      priorityScore:
        (item.cause === 'BUG' ? 3 : item.cause === 'DATA' ? 2 : 1) * 100 +
        (moduleStats.find((module) => module.module === item.moduleExecutive)?.failureRate || 0),
    }))
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 10);

  return { cases, moduleStats, causes, patternRows, topFailures };
}

function svgPie(summary) {
  const total = Math.max(summary.total, 1);
  const values = [
    { label: 'Passed', value: summary.passed, color: colors.green },
    { label: 'Failed', value: summary.failed, color: colors.red },
    { label: 'Skipped', value: summary.skipped, color: colors.yellow },
  ];
  let offset = 25;
  const circles = values
    .map((item) => {
      const dash = (item.value / total) * 100;
      const circle = `<circle r="15.9" cx="18" cy="18" fill="transparent" stroke="${item.color}" stroke-width="7" stroke-dasharray="${dash} ${100 - dash}" stroke-dashoffset="${offset}" />`;
      offset -= dash;
      return circle;
    })
    .join('');
  return `<svg viewBox="0 0 36 36" class="pie">${circles}<circle r="10.5" cx="18" cy="18" fill="#fff" /></svg>`;
}

function barChart(moduleStats) {
  const top = moduleStats.filter((item) => item.failed > 0).slice(0, 8);
  const max = Math.max(...top.map((item) => item.failed), 1);
  return top
    .map(
      (item) => `<div class="bar-row">
        <div class="bar-label">${escapeHtml(item.module)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(item.failed / max) * 100}%"></div></div>
        <strong>${item.failed}</strong>
      </div>`,
    )
    .join('');
}

function renderHtml(report, aggregateData, playwrightResults) {
  const { summary } = report;
  const releaseNo = summary.failed > 0 || summary.successRate < 90;
  const worstModules = aggregateData.moduleStats.filter((item) => item.failed > 0).slice(0, 3);
  const topPatterns = aggregateData.patternRows.slice(0, 3);
  const bugCount = aggregateData.causes.BUG.length;
  const dataCount = aggregateData.causes.DATA.length;
  const techCount = aggregateData.causes.TECH.length;
  const skippedCount = summary.skipped;
  const actualWorkers = playwrightResults.config?.metadata?.actualWorkers || playwrightResults.config?.workers || 'N/D';

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Reporte Ejecutivo QA</title>
  <style>
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Arial, Helvetica, sans-serif; color: ${colors.ink}; background: #fff; font-size: 12px; line-height: 1.42; }
    .cover { padding: 24px 26px; border-radius: 12px; background: linear-gradient(135deg, #0f6cbd, #0f9d8a); color: white; margin-bottom: 18px; }
    h1 { margin: 0 0 8px; font-size: 28px; letter-spacing: -0.3px; }
    h2 { margin: 22px 0 10px; font-size: 17px; color: ${colors.ink}; border-bottom: 2px solid ${colors.line}; padding-bottom: 6px; }
    h3 { margin: 0 0 8px; font-size: 13px; }
    .subtitle { max-width: 680px; color: rgba(255,255,255,.9); }
    .meta { margin-top: 12px; color: rgba(255,255,255,.88); font-size: 11px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .grid { display: grid; gap: 10px; }
    .kpis { grid-template-columns: repeat(5, 1fr); }
    .card { border: 1px solid ${colors.line}; border-radius: 10px; padding: 12px; background: #fff; }
    .kpi .label { color: ${colors.muted}; font-size: 10px; text-transform: uppercase; font-weight: 700; }
    .kpi .value { font-size: 24px; font-weight: 800; margin-top: 5px; }
    .ok { color: ${colors.green}; }
    .bad { color: ${colors.red}; }
    .warn { color: ${colors.yellow}; }
    .decision { display: grid; grid-template-columns: 170px 1fr; gap: 12px; align-items: stretch; }
    .decision-box { background: ${releaseNo ? '#fff1f1' : '#eefaf4'}; border: 2px solid ${releaseNo ? colors.red : colors.green}; color: ${releaseNo ? colors.red : colors.green}; border-radius: 12px; padding: 14px; text-align: center; font-weight: 800; font-size: 28px; }
    .decision-box span { display:block; font-size: 11px; color: ${colors.muted}; margin-bottom: 5px; }
    .two { grid-template-columns: 0.85fr 1.15fr; align-items: start; }
    .pie-wrap { display: grid; grid-template-columns: 160px 1fr; gap: 10px; align-items: center; }
    .pie { width: 150px; height: 150px; transform: rotate(-90deg); }
    .legend { display: grid; gap: 7px; }
    .legend-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; border-bottom: 1px solid #edf1f6; padding-bottom: 5px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 6px; }
    .bar-row { display: grid; grid-template-columns: 145px 1fr 28px; gap: 8px; align-items: center; margin: 8px 0; }
    .bar-label { color: ${colors.ink}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bar-track { height: 14px; background: #edf1f6; border-radius: 8px; overflow: hidden; }
    .bar-fill { height: 100%; background: ${colors.red}; border-radius: 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; page-break-inside: avoid; }
    th { background: #eef5ff; color: #48576d; font-size: 10px; text-transform: uppercase; text-align: left; padding: 8px; border-bottom: 1px solid ${colors.line}; }
    td { padding: 8px; border-bottom: 1px solid ${colors.line}; vertical-align: top; }
    tr { page-break-inside: avoid; }
    .pill { display: inline-block; border-radius: 999px; padding: 4px 8px; font-weight: 700; font-size: 10px; }
    .critical { background: #ffe2e2; color: #b42318; }
    .medium { background: #fff3cd; color: #9a6700; }
    .low { background: #def7ea; color: #18794e; }
    .note { color: ${colors.muted}; }
    .callout { border-left: 4px solid ${colors.blue}; background: #f4f8fd; padding: 10px 12px; border-radius: 8px; margin: 8px 0; }
    .avoid-break { page-break-inside: avoid; }
    ul { margin: 8px 0 0 18px; padding: 0; }
    li { margin: 4px 0; }
    .footer { margin-top: 18px; padding-top: 8px; border-top: 1px solid ${colors.line}; color: ${colors.muted}; font-size: 10px; }
  </style>
</head>
<body>
  <section class="cover">
    <h1>Reporte Ejecutivo QA Automatización</h1>
    <div class="subtitle">Lectura ejecutiva de la última corrida Playwright. El foco es decisión de liberación, riesgos de negocio y plan de acción; no detalle técnico.</div>
    <div class="meta">
      <div><strong>Ejecutado:</strong><br>${escapeHtml(report.executedAt)}</div>
      <div><strong>Generado:</strong><br>${escapeHtml(report.generatedAt)}</div>
      <div><strong>Paralelismo:</strong><br>${escapeHtml(actualWorkers)} workers</div>
    </div>
  </section>

  <h2>1. Resumen Ejecutivo</h2>
  <section class="grid kpis">
    <div class="card kpi"><div class="label">Total casos</div><div class="value">${summary.total}</div></div>
    <div class="card kpi"><div class="label">Passed</div><div class="value ok">${summary.passed}</div></div>
    <div class="card kpi"><div class="label">Failed</div><div class="value bad">${summary.failed}</div></div>
    <div class="card kpi"><div class="label">Skipped</div><div class="value warn">${summary.skipped}</div></div>
    <div class="card kpi"><div class="label">% éxito</div><div class="value">${summary.successRate}%</div></div>
  </section>
  <div class="callout">
    La suite valida ${summary.total} escenarios automatizados y solo ${summary.passed} concluyen correctamente. Un éxito de ${summary.successRate}% indica que la señal de calidad todavía no es suficiente para una liberación controlada: casi uno de cada dos controles automatizados está fallando o pendiente. El tiempo acumulado reportado es ${escapeHtml(summary.durationHuman)}, con ejecución paralela para acelerar la obtención de evidencia.
  </div>

  <h2>2. Lectura Ejecutiva</h2>
  <section class="decision avoid-break">
    <div class="decision-box"><span>¿Sistema liberable?</span>${releaseNo ? 'NO' : 'SÍ'}</div>
    <div class="card">
      <h3>Qué bloquea la liberación</h3>
      <ul>
        ${topPatterns.map((item) => `<li><strong>${escapeHtml(item.label)}:</strong> ${item.count} fallos en ${escapeHtml(item.modules)}.</li>`).join('')}
      </ul>
      <h3 style="margin-top:10px">Módulos más críticos</h3>
      <ul>
        ${worstModules.map((item) => `<li><strong>${escapeHtml(item.module)}</strong>: ${item.failed}/${item.total} fallos (${item.failureRate}%).</li>`).join('')}
      </ul>
    </div>
  </section>

  <h2>3. Distribución Visual</h2>
  <section class="grid two avoid-break">
    <div class="card">
      <h3>Distribución de resultados</h3>
      <div class="pie-wrap">
        ${svgPie(summary)}
        <div class="legend">
          <div class="legend-item"><span><span class="dot" style="background:${colors.green}"></span>Passed</span><strong>${summary.passed} (${pct(summary.passed, summary.total)}%)</strong></div>
          <div class="legend-item"><span><span class="dot" style="background:${colors.red}"></span>Failed</span><strong>${summary.failed} (${pct(summary.failed, summary.total)}%)</strong></div>
          <div class="legend-item"><span><span class="dot" style="background:${colors.yellow}"></span>Skipped</span><strong>${summary.skipped} (${pct(summary.skipped, summary.total)}%)</strong></div>
        </div>
      </div>
    </div>
    <div class="card">
      <h3>Fallos por módulo</h3>
      ${barChart(aggregateData.moduleStats)}
    </div>
  </section>

  <h2>4. Análisis de Fallos</h2>
  <section class="grid two avoid-break">
    <div class="card">
      <h3>Causa raíz ejecutiva</h3>
      <table>
        <tr><th>Causa</th><th>Casos</th><th>Lectura</th></tr>
        <tr><td>Bugs funcionales</td><td>${bugCount}</td><td>Comportamientos visibles no cumplen el flujo esperado.</td></tr>
        <tr><td>Datos / precondiciones</td><td>${dataCount}</td><td>La suite requiere datos controlados para concluir reglas de negocio.</td></tr>
        <tr><td>Problemas técnicos</td><td>${techCount}</td><td>Automatización, navegación o selectores distorsionan parte de la señal.</td></tr>
        <tr><td>Pendientes</td><td>${skippedCount}</td><td>Validaciones omitidas o condicionadas por la UI actual.</td></tr>
      </table>
    </div>
    <div class="card">
      <h3>Patrones detectados</h3>
      <ul>
        ${aggregateData.patternRows.slice(0, 5).map((item) => `<li><strong>${escapeHtml(item.label)}</strong>: ${item.count} casos. Impacto: ${escapeHtml(item.impact)}</li>`).join('')}
      </ul>
    </div>
  </section>

  <h2>5. Riesgo por Módulo</h2>
  <table>
    <thead><tr><th>Módulo</th><th>Total</th><th>Failed</th><th>% fallo</th><th>Prioridad</th></tr></thead>
    <tbody>
      ${aggregateData.moduleStats
        .map((item) => `<tr><td>${escapeHtml(item.module)}</td><td>${item.total}</td><td>${item.failed}</td><td>${item.failureRate}%</td><td><span class="pill ${item.priority.className}">${item.priority.icon} ${item.priority.label}</span></td></tr>`)
        .join('')}
    </tbody>
  </table>

  <h2>6. Top 10 Fallos Críticos</h2>
  <table>
    <thead><tr><th>ID caso</th><th>Módulo</th><th>Qué falla</th><th>Impacto en negocio</th></tr></thead>
    <tbody>
      ${aggregateData.topFailures
        .map((item) => `<tr><td>${escapeHtml(item.id)}</td><td>${escapeHtml(item.module)}</td><td>${escapeHtml(item.what)}</td><td>${escapeHtml(item.impact)}</td></tr>`)
        .join('')}
    </tbody>
  </table>

  <h2>7. Decisión Recomendada</h2>
  <section class="card avoid-break">
    <h3>${releaseNo ? 'NO liberar' : 'Liberación condicionada'}</h3>
    <p>${releaseNo ? 'La liberación no es recomendable mientras existan fallos sobre carga/descarga de archivos, reglas de datos maestros y filtros operativos. Estos flujos sostienen validaciones de información que negocio necesita antes de operar con confianza.' : 'La liberación puede considerarse solo si los pendientes no impactan el alcance productivo.'}</p>
    <table>
      <tr><th>Arreglar primero</th><th>No priorizar aún</th></tr>
      <tr>
        <td>
          <ol>
            ${topPatterns.slice(0, 3).map((item) => `<li>${escapeHtml(item.label)}.</li>`).join('')}
          </ol>
        </td>
        <td>Casos omitidos por paginación no visible, validaciones no destructivas y controles con datos de QA no disponibles, siempre que no formen parte del alcance de salida.</td>
      </tr>
    </table>
  </section>

  <h2>8. Plan de Acción</h2>
  <section class="grid two avoid-break">
    <div class="card">
      <h3>Corrección por causa raíz</h3>
      <ul>
        <li><strong>BUG:</strong> resolver primero los patrones de carga/descarga y controles de filtros.</li>
        <li><strong>DATA:</strong> preparar datos maestros QA estables para reglas de inactivación, edición y distribución.</li>
        <li><strong>TECH:</strong> aislar fallos de navegación/selectores para no mezclar defectos del producto con ruido de automatización.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Re-ejecución controlada</h3>
      <ul>
        <li>Re-ejecutar primero los fallos de módulos críticos.</li>
        <li>Separar corrida DATA de corrida BUG para medir avance real.</li>
        <li>Actualizar histórico y comparar contra esta línea base antes de decisión final.</li>
      </ul>
    </div>
  </section>

  <div class="footer">Fuente: reports/playwright-results.json y reports/executive-report/summary.json. Reporte ejecutivo sin detalle técnico de trazas.</div>
</body>
</html>`;
}

async function exportPdf() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${outputHtml.replace(/\\/g, '/')}`, { waitUntil: 'load' });
  await page.pdf({
    path: outputPdf,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
  });
  await browser.close();
}

async function main() {
  if (!fs.existsSync(summaryPath)) throw new Error(`No existe ${path.relative(repoRoot, summaryPath)}`);
  if (!fs.existsSync(playwrightResultsPath)) throw new Error(`No existe ${path.relative(repoRoot, playwrightResultsPath)}`);

  const report = readJson(summaryPath);
  const playwrightResults = readJson(playwrightResultsPath);
  const aggregateData = aggregate(report);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputHtml, renderHtml(report, aggregateData, playwrightResults), 'utf8');
  await exportPdf();
  console.log(`Reporte ejecutivo HTML: ${path.relative(repoRoot, outputHtml)}`);
  console.log(`Reporte ejecutivo PDF: ${path.relative(repoRoot, outputPdf)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
