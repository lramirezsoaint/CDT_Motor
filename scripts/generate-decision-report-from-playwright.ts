const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const repoRoot = path.resolve(__dirname, '..');
const runDir = path.join(repoRoot, 'reports', 'history', '2026-05-04-220159', 'current-run');
const resultsPath = path.join(runDir, 'playwright-results.json');
const outputHtml = path.join(runDir, 'reporte-qa-automatizacion-decisiones.html');
const outputPdf = path.join(runDir, 'reporte-qa-automatizacion-decisiones.pdf');

const palette = {
  navy: '#10243e',
  blue: '#1d5fd0',
  sky: '#eaf2ff',
  cyan: '#13a7b7',
  green: '#1f9d67',
  red: '#d84b4b',
  amber: '#d5961f',
  purple: '#7b61ff',
  ink: '#172033',
  muted: '#637189',
  panel: '#ffffff',
  line: '#dde5f0',
  bg: '#f5f7fb',
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function stripAnsi(value) {
  return String(value ?? '').replace(/\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])/g, '');
}

function clean(value) {
  return stripAnsi(value).replace(/\s+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalize(value) {
  return clean(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function pct(value, total, digits = 1) {
  if (!total) return 0;
  return Number(((value / total) * 100).toFixed(digits));
}

function humanDuration(ms) {
  const totalSeconds = Math.round((ms || 0) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function walkSuites(suites, fileName = '', output = []) {
  for (const suite of suites || []) {
    const file = suite.file || fileName;
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        const last = test.results?.[test.results.length - 1] || {};
        const error = clean(last.error?.message || last.errors?.[0]?.message || '');
        const status = last.status || 'unknown';
        const expectedStatus = test.expectedStatus || 'passed';
        output.push({
          file,
          title: clean(spec.title),
          ok: status === expectedStatus || (status === 'passed' && expectedStatus === 'passed'),
          expectedStatus,
          status,
          duration: last.duration || 0,
          error,
          attachments: last.attachments || [],
          tags: spec.tags || [],
        });
      }
    }
    walkSuites(suite.suites, file, output);
  }
  return output;
}

function moduleOf(test) {
  const file = normalize(test.file);
  const title = normalize(test.title);
  if (file.includes('/auth/') || file.startsWith('auth/')) return 'Autenticacion';
  if (file.includes('/procesos/') || file.startsWith('procesos/')) return 'Procesos';
  if (file.includes('e63-c-bus') || file.includes('e41-dis') || file.includes('e44-dis') || title.includes('distribucion')) return 'Distribucion';
  if (title.includes('configuracion de parches') || file.includes('35-c-02.5') || file.includes('35-c-03.5') || file.includes('35-c-04.5') || file.includes('36-c-01.5') || file.includes('36-c-03.5')) return 'Configuracion de Parches';
  if (title.includes('maestro uoa')) return 'Maestro UoA';
  if (title.includes('unidades de cuenta')) return 'Unidades de Cuenta';
  if (title.includes('grupo producto')) return 'Grupo Producto';
  if (title.includes('subcanal')) return 'Subcanales';
  if (title.includes('canal')) return 'Canales';
  if (title.includes('linea')) return 'Lineas';
  if (file.includes('bloque-1/')) return 'Comunes';
  return 'Sin modulo';
}

function caseIdOf(test) {
  const fromTitle = test.title.match(/@([A-Z0-9]+(?:-[A-Z0-9]+)+(?:\.\d+)*)/);
  if (fromTitle) return fromTitle[1];
  const fromFile = test.file.match(/(E\d+[A-Z0-9.-]*(?:-[A-Z0-9.]+)*)/i);
  return fromFile ? fromFile[1].toUpperCase() : 'SIN-ID';
}

function causeOf(test) {
  const text = normalize(`${test.error} ${test.title}`);
  if (test.status === 'skipped') return 'Pendiente';
  if (test.status === 'timedOut' || text.includes('test timeout')) return 'Timeout';
  if (text.includes('[data]') || text.includes('no hay distribuciones') || text.includes('no hay datos') || text.includes('no existe un archivo controlado')) return 'Datos';
  if (text.includes('tohaveurl') || text.includes('expected pattern') && text.includes('distribuciones')) return 'Navegacion';
  if (text.includes('[bug]') || text.includes('no expone') || text.includes('no muestra') || text.includes('no aparece') || text.includes('no se habilita') || text.includes('no conserva') || text.includes('no contiene')) return 'Bug funcional';
  return test.status === 'failed' ? 'Tecnico/UI' : 'Correcto';
}

function patternOf(test) {
  const text = normalize(`${test.error} ${test.title}`);
  if (text.includes('input[type="file"]') || text.includes('no expone un input de archivo')) return 'Carga de archivos';
  if (text.includes('descarg') || text.includes('archivo descargado') || text.includes('cabeceras') || text.includes('xlsx')) return 'Descarga e integridad Excel';
  if (text.includes('configuracion de parches') || text.includes('parche') || text.includes('porcentaje')) return 'Configuracion de Parches';
  if (text.includes('dependenc') || text.includes('inactiv') || text.includes('elimin')) return 'Reglas de inactivacion';
  if (text.includes('filtro') || text.includes('etiqueta') || text.includes('label')) return 'Filtros y busqueda';
  if (text.includes('tohaveurl') || text.includes('distribuciones')) return 'Navegacion inicial';
  if (text.includes('paginador') || text.includes('pagina')) return 'Paginacion';
  if (causeOf(test) === 'Datos') return 'Datos insuficientes';
  if (causeOf(test) === 'Timeout') return 'Timeouts';
  return test.status === 'failed' || test.status === 'timedOut' ? 'Otros fallos' : 'Correcto';
}

function summarize(results) {
  const tests = walkSuites(results.suites).map((test) => ({
    ...test,
    module: moduleOf(test),
    caseId: caseIdOf(test),
    cause: causeOf(test),
    pattern: patternOf(test),
  }));

  const passed = tests.filter((test) => test.ok && test.status !== 'skipped').length;
  const skipped = tests.filter((test) => test.status === 'skipped').length;
  const failed = tests.filter((test) => !test.ok && test.status !== 'skipped').length;
  const total = tests.length;
  const failedTests = tests.filter((test) => !test.ok && test.status !== 'skipped');

  const byModule = aggregate(tests, 'module');
  const byCause = aggregate(failedTests, 'cause');
  const byPattern = aggregate(failedTests, 'pattern');
  const slowestFailures = [...failedTests].sort((a, b) => b.duration - a.duration).slice(0, 8);

  return {
    tests,
    failedTests,
    stats: {
      total,
      passed,
      failed,
      skipped,
      successRate: pct(passed, total),
      failureRate: pct(failed, total),
      durationMs: results.stats?.duration || tests.reduce((sum, test) => sum + test.duration, 0),
      startTime: results.stats?.startTime || '',
    },
    byModule,
    byCause,
    byPattern,
    slowestFailures,
  };
}

function aggregate(items, key) {
  const map = new Map();
  for (const item of items) {
    const name = item[key] || 'Sin clasificar';
    const current = map.get(name) || { name, total: 0, passed: 0, failed: 0, skipped: 0, duration: 0 };
    current.total += 1;
    current.duration += item.duration || 0;
    if (item.status === 'skipped') current.skipped += 1;
    else if (item.ok) current.passed += 1;
    else current.failed += 1;
    map.set(name, current);
  }
  return [...map.values()].sort((a, b) => b.failed - a.failed || b.total - a.total || a.name.localeCompare(b.name));
}

function donut(stats) {
  const total = Math.max(stats.total, 1);
  const segments = [
    { value: stats.passed, color: palette.green },
    { value: stats.failed, color: palette.red },
    { value: stats.skipped, color: palette.amber },
  ];
  let offset = 25;
  const circles = segments
    .map((segment) => {
      const dash = pct(segment.value, total, 4);
      const circle = `<circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="${segment.color}" stroke-width="5.5" stroke-dasharray="${dash} ${100 - dash}" stroke-dashoffset="${offset}" />`;
      offset -= dash;
      return circle;
    })
    .join('');
  return `<svg class="donut" viewBox="0 0 36 36">${circles}<circle cx="18" cy="18" r="10.8" fill="#fff" /></svg>`;
}

function statusStack(stats) {
  const passed = pct(stats.passed, stats.total, 4);
  const failed = pct(stats.failed, stats.total, 4);
  const skipped = Math.max(0, 100 - passed - failed);
  return `<div class="stack">
    <div style="width:${passed}%;background:${palette.green}"></div>
    <div style="width:${failed}%;background:${palette.red}"></div>
    <div style="width:${skipped}%;background:${palette.amber}"></div>
  </div>`;
}

function barRows(rows, options = {}) {
  const max = Math.max(...rows.map((row) => options.value ? options.value(row) : row.failed || row.total), 1);
  return rows
    .map((row) => {
      const value = options.value ? options.value(row) : row.failed || row.total;
      const width = pct(value, max, 3);
      const label = options.label ? options.label(row) : row.name;
      const detail = options.detail ? options.detail(row) : String(value);
      const color = options.color ? options.color(row) : palette.blue;
      return `<div class="bar-row">
        <div class="bar-label">${escapeHtml(label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%;background:${color}"></div></div>
        <div class="bar-value">${escapeHtml(detail)}</div>
      </div>`;
    })
    .join('');
}

function matrix(summary) {
  return summary.byModule
    .filter((row) => row.failed > 0)
    .slice(0, 10)
    .map((row) => {
      const rate = pct(row.failed, row.total);
      const cls = rate >= 70 ? 'risk-high' : rate >= 40 ? 'risk-mid' : 'risk-low';
      return `<tr>
        <td>${escapeHtml(row.name)}</td>
        <td>${row.total}</td>
        <td>${row.failed}</td>
        <td>${row.passed}</td>
        <td><span class="risk ${cls}">${rate}%</span></td>
      </tr>`;
    })
    .join('');
}

function topFailures(summary) {
  return summary.failedTests
    .map((test) => ({
      ...test,
      score:
        ({ 'Bug funcional': 500, Timeout: 420, Navegacion: 380, Datos: 300, 'Tecnico/UI': 260 }[test.cause] || 200) +
        Math.min(test.duration / 1000, 180),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((test) => `<tr>
      <td>${escapeHtml(test.caseId)}</td>
      <td>${escapeHtml(test.module)}</td>
      <td>${escapeHtml(test.pattern)}</td>
      <td>${escapeHtml(test.cause)}</td>
      <td>${escapeHtml(humanDuration(test.duration))}</td>
    </tr>`)
    .join('');
}

function render(summary) {
  const s = summary.stats;
  const executed = s.startTime ? new Date(s.startTime).toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' }) : 'No disponible';
  const generated = new Date().toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' });
  const releaseBlocked = s.failed > 0 || s.successRate < 90;
  const topModules = summary.byModule.filter((row) => row.failed > 0).slice(0, 6);
  const topPatterns = summary.byPattern.slice(0, 7);
  const bugCount = summary.byCause.find((row) => row.name === 'Bug funcional')?.total || 0;
  const dataCount = summary.byCause.find((row) => row.name === 'Datos')?.total || 0;
  const timeoutCount = summary.byCause.find((row) => row.name === 'Timeout')?.total || 0;
  const techCount = summary.byCause.find((row) => row.name === 'Tecnico/UI')?.total || 0;
  const navCount = summary.byCause.find((row) => row.name === 'Navegacion')?.total || 0;

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Reporte QA Automatizacion - Decisiones</title>
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; background: ${palette.bg}; color: ${palette.ink}; font-family: Arial, Helvetica, sans-serif; font-size: 11.5px; line-height: 1.42; }
    .page { background: #fff; min-height: 100vh; padding: 20px 22px 24px; }
    .cover { background: linear-gradient(135deg, ${palette.navy}, ${palette.blue} 62%, ${palette.cyan}); color: #fff; border-radius: 18px; padding: 24px; position: relative; overflow: hidden; }
    .cover:after { content: ""; position: absolute; width: 260px; height: 260px; right: -90px; top: -100px; border-radius: 50%; background: rgba(255,255,255,.14); }
    .eyebrow { text-transform: uppercase; letter-spacing: 1.8px; font-size: 10px; font-weight: 700; opacity: .82; }
    h1 { margin: 8px 0 8px; font-size: 30px; line-height: 1.04; letter-spacing: -.2px; max-width: 650px; }
    .lead { max-width: 650px; font-size: 13px; opacity: .9; }
    .meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 18px; max-width: 650px; }
    .meta div { background: rgba(255,255,255,.13); border: 1px solid rgba(255,255,255,.22); border-radius: 10px; padding: 9px; }
    .meta span { display: block; opacity: .75; font-size: 9px; text-transform: uppercase; font-weight: 700; }
    h2 { font-size: 17px; margin: 20px 0 10px; color: ${palette.navy}; }
    h3 { margin: 0 0 8px; font-size: 12.5px; color: ${palette.navy}; }
    .grid { display: grid; gap: 10px; }
    .kpis { grid-template-columns: repeat(5, 1fr); margin-top: 12px; }
    .card { background: ${palette.panel}; border: 1px solid ${palette.line}; border-radius: 12px; padding: 12px; box-shadow: 0 5px 16px rgba(16,36,62,.05); }
    .kpi .label { color: ${palette.muted}; font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: .5px; }
    .kpi .value { font-size: 25px; font-weight: 850; margin-top: 4px; }
    .green { color: ${palette.green}; }
    .red { color: ${palette.red}; }
    .amber { color: ${palette.amber}; }
    .blue { color: ${palette.blue}; }
    .decision { grid-template-columns: 180px 1fr; align-items: stretch; }
    .decision-box { border-radius: 14px; padding: 15px 12px; border: 2px solid ${releaseBlocked ? palette.red : palette.green}; background: ${releaseBlocked ? '#fff2f2' : '#ecfbf4'}; text-align: center; }
    .decision-box span { display: block; color: ${palette.muted}; font-size: 9px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; }
    .decision-box strong { color: ${releaseBlocked ? palette.red : palette.green}; font-size: 35px; line-height: 1; }
    .two { grid-template-columns: .95fr 1.05fr; align-items: start; }
    .three { grid-template-columns: repeat(3, 1fr); }
    .donut-wrap { display: grid; grid-template-columns: 150px 1fr; gap: 12px; align-items: center; }
    .donut { width: 145px; height: 145px; transform: rotate(-90deg); }
    .legend { display: grid; gap: 7px; }
    .legend-row { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #edf1f6; padding-bottom: 5px; }
    .dot { width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 6px; }
    .stack { height: 18px; display: flex; width: 100%; border-radius: 999px; overflow: hidden; background: #edf1f6; margin-top: 9px; }
    .bar-row { display: grid; grid-template-columns: 154px 1fr 48px; gap: 8px; align-items: center; margin: 7px 0; }
    .bar-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: ${palette.ink}; }
    .bar-track { height: 13px; border-radius: 999px; background: #eef3f9; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 999px; }
    .bar-value { text-align: right; font-weight: 700; color: ${palette.navy}; }
    .callout { border-left: 5px solid ${palette.blue}; background: #f0f6ff; border-radius: 10px; padding: 11px 13px; margin: 10px 0; }
    .warning { border-left-color: ${palette.red}; background: #fff4f4; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    th { background: ${palette.sky}; color: #3f526c; text-align: left; font-size: 9px; text-transform: uppercase; padding: 7px; border-bottom: 1px solid ${palette.line}; }
    td { padding: 7px; border-bottom: 1px solid ${palette.line}; vertical-align: top; }
    tr { page-break-inside: avoid; }
    .risk { border-radius: 999px; padding: 3px 8px; font-weight: 800; font-size: 10px; }
    .risk-high { background: #ffe1e1; color: #b42318; }
    .risk-mid { background: #fff1cc; color: #9a6700; }
    .risk-low { background: #e2f8ee; color: #18794e; }
    .section { page-break-inside: avoid; }
    .muted { color: ${palette.muted}; }
    ul, ol { margin: 7px 0 0 18px; padding: 0; }
    li { margin: 4px 0; }
    .footer { color: ${palette.muted}; font-size: 9.5px; border-top: 1px solid ${palette.line}; padding-top: 8px; margin-top: 18px; }
    .page-break { page-break-before: always; }
  </style>
</head>
<body>
  <main class="page">
    <section class="cover">
      <div class="eyebrow">QA Automation Decision Report</div>
      <h1>Reporte ejecutivo de la ultima corrida Playwright</h1>
      <div class="lead">Analisis de calidad orientado a decision: estado general, riesgos por modulo, causas probables, patrones de fallo y prioridades de correccion para entrega.</div>
      <div class="meta">
        <div><span>Ejecutado</span>${escapeHtml(executed)}</div>
        <div><span>Fuente</span>playwright-results.json</div>
        <div><span>Generado</span>${escapeHtml(generated)}</div>
      </div>
    </section>

    <section class="grid kpis">
      <div class="card kpi"><div class="label">Total</div><div class="value blue">${s.total}</div></div>
      <div class="card kpi"><div class="label">Pasaron</div><div class="value green">${s.passed}</div></div>
      <div class="card kpi"><div class="label">Fallaron</div><div class="value red">${s.failed}</div></div>
      <div class="card kpi"><div class="label">Omitidos</div><div class="value amber">${s.skipped}</div></div>
      <div class="card kpi"><div class="label">Exito</div><div class="value">${s.successRate}%</div></div>
    </section>

    <h2>1. Decision Ejecutiva</h2>
    <section class="grid decision section">
      <div class="decision-box"><span>Recomendacion</span><strong>${releaseBlocked ? 'NO' : 'SI'}</strong><div class="muted">liberar sin salvedades</div></div>
      <div class="card">
        <h3>Lectura principal</h3>
        <p>La corrida registra <strong>${s.failed} fallos de ${s.total} pruebas</strong>, con una tasa de exito de <strong>${s.successRate}%</strong>. La evidencia no respalda una liberacion limpia. Los fallos se concentran en carga/descarga de archivos, integridad de Excel, reglas sobre datos maestros, filtros y navegacion inicial.</p>
        <p>Para una entrega formal, este reporte debe presentarse como <strong>diagnostico de calidad con bloqueo</strong>, no como certificacion final. La prioridad inmediata es aislar si los defectos son de producto, datos de ambiente o cambios de UI no reflejados en la automatizacion.</p>
      </div>
    </section>

    <h2>2. Graficas de Resultado</h2>
    <section class="grid two section">
      <div class="card">
        <h3>Distribucion global</h3>
        <div class="donut-wrap">
          ${donut(s)}
          <div class="legend">
            <div class="legend-row"><span><i class="dot" style="background:${palette.green}"></i>Passed</span><strong>${s.passed} (${pct(s.passed, s.total)}%)</strong></div>
            <div class="legend-row"><span><i class="dot" style="background:${palette.red}"></i>Failed</span><strong>${s.failed} (${pct(s.failed, s.total)}%)</strong></div>
            <div class="legend-row"><span><i class="dot" style="background:${palette.amber}"></i>Skipped</span><strong>${s.skipped} (${pct(s.skipped, s.total)}%)</strong></div>
          </div>
        </div>
        ${statusStack(s)}
      </div>
      <div class="card">
        <h3>Fallos por modulo</h3>
        ${barRows(topModules, {
          value: (row) => row.failed,
          label: (row) => row.name,
          detail: (row) => `${row.failed}/${row.total}`,
          color: (row) => (pct(row.failed, row.total) >= 70 ? palette.red : pct(row.failed, row.total) >= 40 ? palette.amber : palette.blue),
        })}
      </div>
    </section>

    <section class="grid two section" style="margin-top:10px">
      <div class="card">
        <h3>Causa probable de fallos</h3>
        ${barRows(summary.byCause, {
          value: (row) => row.total,
          label: (row) => row.name,
          detail: (row) => String(row.total),
          color: (row) => ({ 'Bug funcional': palette.red, Timeout: palette.amber, Datos: palette.purple, Navegacion: palette.cyan, 'Tecnico/UI': palette.blue }[row.name] || palette.blue),
        })}
      </div>
      <div class="card">
        <h3>Patrones con mayor impacto</h3>
        ${barRows(topPatterns, {
          value: (row) => row.total,
          label: (row) => row.name,
          detail: (row) => String(row.total),
          color: () => palette.red,
        })}
      </div>
    </section>

    <div class="page-break"></div>
    <h2>3. Analisis Profesional de Fallos</h2>
    <section class="grid three section">
      <div class="card">
        <h3>Producto</h3>
        <p><strong>${bugCount}</strong> fallos tienen forma de defecto funcional: mensajes ausentes, cabeceras Excel no esperadas, controles que no se habilitan o estados que no se actualizan.</p>
      </div>
      <div class="card">
        <h3>Ambiente y datos</h3>
        <p><strong>${dataCount}</strong> fallos dependen de fixtures o registros visibles. No deben escalarse como bug sin preparar datos controlados.</p>
      </div>
      <div class="card">
        <h3>Tiempo y tecnica</h3>
        <p><strong>${timeoutCount + techCount + navCount}</strong> fallos requieren aislamiento: timeouts, rutas iniciales, selectores o expectativas de UI posiblemente desactualizadas.</p>
      </div>
    </section>

    <div class="callout warning">
      <strong>Advertencia para el informe:</strong> esta corrida no debe resumirse solo como porcentaje. Hay fallos que bloquean flujos de negocio completos, especialmente carga/descarga de parametros, Configuracion de Parches, filtros de Distribucion e inactivacion de datos maestros.
    </div>

    <h2>4. Riesgo por Modulo</h2>
    <table>
      <thead><tr><th>Modulo</th><th>Total</th><th>Fallos</th><th>Pasaron</th><th>% fallo</th></tr></thead>
      <tbody>${matrix(summary)}</tbody>
    </table>

    <h2>5. Top Fallos Criticos</h2>
    <table>
      <thead><tr><th>Caso</th><th>Modulo</th><th>Patron</th><th>Causa</th><th>Duracion</th></tr></thead>
      <tbody>${topFailures(summary)}</tbody>
    </table>

    <h2>6. Plan de Accion Recomendado</h2>
    <section class="grid two section">
      <div class="card">
        <h3>Prioridad 1: corregir bloqueo funcional</h3>
        <ol>
          <li>Revisar el modal de carga de archivos y exponer/controlar correctamente el input de archivo.</li>
          <li>Validar descargas Excel: evento de descarga, cabeceras y conservacion de datos visibles.</li>
          <li>Atender Configuracion de Parches: alta, duplicidad, edicion, porcentaje y carga.</li>
        </ol>
      </div>
      <div class="card">
        <h3>Prioridad 2: estabilizar evidencia</h3>
        <ol>
          <li>Preparar datos base de Distribuciones antes de re-ejecutar filtros y acciones.</li>
          <li>Separar re-ejecucion de fallos BUG vs DATA para medir avance real.</li>
          <li>Re-ejecutar primero los 52 fallidos y luego suite completa con historial.</li>
        </ol>
      </div>
    </section>

    <div class="footer">
      Fuente tecnica: ${escapeHtml(path.relative(repoRoot, resultsPath))}. Conteo usado: Playwright crudo, no summary ejecutivo intermedio. Duracion total reportada por Playwright: ${escapeHtml(humanDuration(s.durationMs))}.
    </div>
  </main>
</body>
</html>`;
}

async function exportPdf() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });
  await page.goto(`file://${outputHtml.replace(/\\/g, '/')}`, { waitUntil: 'load' });
  await page.pdf({
    path: outputPdf,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await browser.close();
}

async function main() {
  if (!fs.existsSync(resultsPath)) {
    throw new Error(`No existe ${path.relative(repoRoot, resultsPath)}`);
  }
  const results = readJson(resultsPath);
  const summary = summarize(results);
  fs.writeFileSync(outputHtml, render(summary), 'utf8');
  await exportPdf();
  console.log(`HTML: ${path.relative(repoRoot, outputHtml)}`);
  console.log(`PDF: ${path.relative(repoRoot, outputPdf)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
