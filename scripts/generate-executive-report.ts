const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const candidateResultsPaths = [
  path.join(repoRoot, 'reports', 'playwright-results.json'),
  path.join(repoRoot, 'reports', 'results.json'),
];
const outputDir = path.join(repoRoot, 'reports', 'executive-report');
const outputHtml = path.join(outputDir, 'index.html');
const outputJson = path.join(outputDir, 'summary.json');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function latestExistingPath(paths) {
  const existing = paths.filter((filePath) => fs.existsSync(filePath));
  if (!existing.length) return undefined;

  return existing
    .map((filePath) => ({
      filePath,
      mtimeMs: fs.statSync(filePath).mtimeMs,
    }))
    .sort((left, right) => right.mtimeMs - left.mtimeMs)[0]?.filePath;
}

function safeReadJson() {
  const filePath = latestExistingPath(candidateResultsPaths);
  if (!filePath) {
    throw new Error(
      'No se encontró un JSON de Playwright. Ejecuta Playwright primero para generar reports/playwright-results.json o reports/results.json.',
    );
  }

  return {
    filePath,
    json: JSON.parse(fs.readFileSync(filePath, 'utf8')),
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function cleanText(value) {
  return String(value || '')
    .replace(/@\S+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function msToHuman(ms) {
  const totalSeconds = Math.round((ms || 0) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function deriveCaseId({ title, file, caseId }) {
  const source = [title, file, caseId].filter(Boolean).join(' ');
  const match = source.match(/\b(E\d{1,3}-[A-Z]{1,6}-\d{2}\.\d)\b/i);
  return match ? match[1].toUpperCase() : 'SIN-ID';
}

function deriveBlock(filePath) {
  const normalized = String(filePath || '').replace(/\\/g, '/');
  const testsMatch = normalized.match(/tests\/e2e\/([^/]+)/i);
  if (testsMatch) return testsMatch[1];

  const relativeMatch = normalized.match(/^(bloque-\d+)\//i);
  return relativeMatch ? relativeMatch[1] : 'sin-bloque';
}

function deriveScenario(filePath, caseId) {
  const normalized = String(filePath || '').replace(/\\/g, '/');
  const parts = normalized.split('/');
  return parts.at(-2) || caseId || 'sin-escenario';
}

function deriveFunctionalModule(title, filePath) {
  const cleanedTitle = cleanText(title);
  const lowered = normalizeText(cleanedTitle);
  const match = cleanedTitle.match(/\ben\s+(.+)$/i);
  if (match) return match[1].trim();

  const knownModules = [
    'Maestro UoA',
    'Unidades de Cuenta - BBA/VFA',
    'Configuración de Parches',
    'Grupo Producto',
    'Subcanales',
    'Canales',
    'Líneas',
  ];

  const found = knownModules.find((moduleName) => lowered.includes(normalizeText(moduleName)));
  if (found) return found;

  const normalizedFile = normalizeText(filePath);
  if (normalizedFile.includes('maestro-uoa')) return 'Maestro UoA';
  if (normalizedFile.includes('unidades-cuenta-bba-vfa')) return 'Unidades de Cuenta - BBA/VFA';
  if (normalizedFile.includes('configuracion-parches')) return 'Configuración de Parches';

  return deriveScenario(filePath, '');
}

function classifyFailure(message, status, annotations) {
  if (status === 'SKIPPED') return 'QA_PENDING';

  const annotationText = (annotations || [])
    .map((annotation) => `${annotation.type || ''} ${annotation.description || ''}`)
    .join(' ');
  const normalized = normalizeText(`${message || ''} ${annotationText}`);

  if (
    normalized.includes('[tech]') ||
    normalized.includes('locator') ||
    normalized.includes('selector') ||
    normalized.includes('timeout') ||
    normalized.includes('chrome-error://chromewebdata') ||
    normalized.includes('navigation') ||
    normalized.includes('element(s) not found')
  ) {
    return 'TECH';
  }

  if (
    normalized.includes('[data]') ||
    normalized.includes('no hay registros') ||
    normalized.includes('no hay datos') ||
    normalized.includes('sin datos') ||
    normalized.includes('uoa') ||
    normalized.includes('fixture') ||
    normalized.includes('maestro')
  ) {
    return 'DATA';
  }

  if (
    normalized.includes('[qa_pending]') ||
    normalized.includes('pendiente') ||
    normalized.includes('validacion qa') ||
    normalized.includes('validación qa')
  ) {
    return 'QA_PENDING';
  }

  if (
    normalized.includes('[bug]') ||
    normalized.includes('inconsistencia') ||
    normalized.includes('no respeta') ||
    normalized.includes('desaparecen') ||
    normalized.includes('no se muestran') ||
    normalized.includes('no aparece') ||
    normalized.includes('no se guardan')
  ) {
    return 'BUG';
  }

  return status === 'FAILED' ? 'TECH' : 'N/A';
}

function buildExecutiveMessage(item) {
  if (item.status === 'PASSED') return `Correcto: ${item.validates}`;
  if (item.status === 'SKIPPED') return 'Pendiente de validación QA o ejecución futura.';
  if (item.failureType === 'BUG') return item.failureMessage || 'Se detectó un comportamiento funcional no esperado.';
  if (item.failureType === 'DATA') return item.failureMessage || 'La validación no pudo completarse por ausencia o inconsistencia de datos.';
  if (item.failureType === 'QA_PENDING') return item.failureMessage || 'El caso requiere validación adicional de QA.';
  return item.failureMessage || 'Se presentó un error técnico de automatización o entorno.';
}

function collectSpecs(node, bucket = []) {
  if (!node || typeof node !== 'object') return bucket;

  if (Array.isArray(node.specs)) {
    for (const spec of node.specs) {
      bucket.push({
        file: spec.file || node.file || '',
        title: spec.title || '',
        tests: spec.tests || [],
      });
    }
  }

  if (Array.isArray(node.suites)) {
    for (const suite of node.suites) {
      collectSpecs(suite, bucket);
    }
  }

  return bucket;
}

function collectAttachments(results) {
  const attachments = [];
  const seen = new Set();

  for (const result of results) {
    for (const attachment of result.attachments || []) {
      if (!attachment.path) continue;
      const relativePath = path.relative(repoRoot, attachment.path).replace(/\\/g, '/');
      if (seen.has(relativePath)) continue;
      seen.add(relativePath);
      attachments.push({
        name: attachment.name || path.basename(relativePath),
        path: relativePath,
      });
    }
  }

  const anyAttachment = attachments[0];
  if (anyAttachment) {
    const errorContextPath = path.join(repoRoot, path.dirname(anyAttachment.path), 'error-context.md');
    if (fs.existsSync(errorContextPath)) {
      const relativePath = path.relative(repoRoot, errorContextPath).replace(/\\/g, '/');
      if (!seen.has(relativePath)) {
        attachments.push({
          name: 'error-context',
          path: relativePath,
        });
      }
    }
  }

  return attachments;
}

function summarizeTest(test, file, specTitle) {
  const caseId = deriveCaseId({ title: test.title || specTitle, file });
  const results = Array.isArray(test.results) ? test.results : [];
  const finalResult = [...results].reverse().find((item) => item.status) || {};
  const rawStatus = String(finalResult.status || test.status || 'unknown').toUpperCase();
  const hadRetry = results.length > 1;
  const hadIntermediateFailure = results.some((result) => ['failed', 'timedOut', 'interrupted'].includes(result.status));
  const isFlaky = rawStatus === 'PASSED' && hadRetry && hadIntermediateFailure;
  const status = isFlaky ? 'FLAKY' : rawStatus;
  const failureMessage =
    finalResult.error?.message ||
    finalResult.errors?.[0]?.message ||
    results.flatMap((result) => result.errors || []).map((error) => error.message).find(Boolean) ||
    '';
  const annotations = test.annotations || [];
  const failureType = classifyFailure(failureMessage, status, annotations);
  const cleanedTitle = cleanText(test.title || specTitle || caseId);
  const fileRelative = path.relative(repoRoot, file || '').replace(/\\/g, '/');

  const item = {
    id: caseId,
    block: deriveBlock(file),
    scenario: deriveScenario(file, caseId),
    module: deriveFunctionalModule(cleanedTitle, fileRelative),
    file: fileRelative,
    title: cleanedTitle,
    validates:
      annotations.find((annotation) => annotation.type === 'business-validation')?.description ||
      cleanedTitle ||
      caseId,
    status,
    expectedStatus: String(test.expectedStatus || '').toUpperCase() || 'PASSED',
    durationMs: Number(finalResult.duration || 0),
    durationHuman: msToHuman(finalResult.duration || 0),
    failureType,
    failureMessage: failureMessage ? cleanText(failureMessage) : '',
    annotations,
    attachments: collectAttachments(results),
  };

  item.executiveSummary = buildExecutiveMessage(item);
  return item;
}

function buildExecutiveModel(jsonReport, resultsFilePath) {
  const specs = collectSpecs(jsonReport);
  const cases = [];

  for (const spec of specs) {
    for (const test of spec.tests) {
      cases.push(summarizeTest(test, spec.file, spec.title));
    }
  }

  const total = cases.length;
  const passed = cases.filter((item) => item.status === 'PASSED').length;
  const failed = cases.filter((item) => item.status === 'FAILED').length;
  const skipped = cases.filter((item) => item.status === 'SKIPPED').length;
  const flaky = cases.filter((item) => item.status === 'FLAKY').length;
  const durationMs = cases.reduce((sum, item) => sum + item.durationMs, 0);
  const successRate = total > 0 ? Number((((passed + flaky) / total) * 100).toFixed(2)) : 0;
  const runDate = jsonReport.stats?.startTime || jsonReport.config?.metadata?.generatedAt || new Date().toISOString();

  const grouped = {};
  for (const item of cases) {
    grouped[item.block] ??= {};
    grouped[item.block][item.module] ??= {};
    grouped[item.block][item.module][item.scenario] ??= [];
    grouped[item.block][item.module][item.scenario].push(item);
  }

  const findings = cases
    .filter((item) => item.status === 'FAILED' || item.status === 'FLAKY')
    .map((item) => ({
      id: item.id,
      block: item.block,
      module: item.module,
      type: item.failureType,
      status: item.status,
      summary: item.executiveSummary,
    }));

  const pending = cases.filter((item) => item.failureType === 'QA_PENDING' || item.status === 'SKIPPED');
  const functionalBugs = cases.filter((item) => item.failureType === 'BUG');
  const dataIssues = cases.filter((item) => item.failureType === 'DATA');
  const technicalIssues = cases.filter((item) => item.failureType === 'TECH');

  const risks = [];
  if (functionalBugs.length > 0) risks.push('Se detectaron posibles bugs funcionales que requieren revisión del producto.');
  if (dataIssues.length > 0) risks.push('Existen casos afectados por disponibilidad o consistencia de datos.');
  if (technicalIssues.length > 0) risks.push('Hay errores técnicos o de entorno que pueden distorsionar la señal de la suite.');
  if (pending.length > 0) risks.push('Hay casos pendientes de validación QA o no ejecutados.');
  if (risks.length === 0) risks.push('No se identifican riesgos críticos en la corrida procesada.');

  return {
    generatedAt: new Date().toISOString(),
    executedAt: runDate,
    sources: {
      json: path.relative(repoRoot, resultsFilePath).replace(/\\/g, '/'),
      html: 'playwright-report/index.html',
    },
    summary: {
      total,
      passed,
      failed,
      skipped,
      flaky,
      successRate,
      durationMs,
      durationHuman: msToHuman(durationMs),
    },
    grouped,
    cases,
    findings,
    pending,
    functionalBugs,
    dataIssues,
    technicalIssues,
    risks,
  };
}

function renderLinks(attachments) {
  if (!attachments.length) return '<span class="muted">Sin adjuntos</span>';
  return attachments
    .map((attachment) => `<a href="../../${escapeHtml(attachment.path)}">${escapeHtml(attachment.name)}</a>`)
    .join(' | ');
}

function renderList(items, emptyText) {
  if (!items.length) return `<li>${escapeHtml(emptyText)}</li>`;
  return items
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.id)}</strong> [${escapeHtml(item.status || item.type)}] ${escapeHtml(item.summary || item.executiveSummary || item.failureMessage || item.validates)}</li>`,
    )
    .join('');
}

function renderCasesRows(cases) {
  return cases
    .map(
      (item) => `
        <tr data-status="${escapeHtml(item.status)}" data-block="${escapeHtml(item.block)}" data-module="${escapeHtml(item.module)}" data-scenario="${escapeHtml(item.scenario)}">
          <td>${escapeHtml(item.id)}</td>
          <td>${escapeHtml(item.module)}</td>
          <td><span class="badge ${escapeHtml(item.status.toLowerCase())}">${escapeHtml(item.status)}</span></td>
          <td>${escapeHtml(item.validates)}</td>
          <td>${escapeHtml(item.failureType)}</td>
          <td>${escapeHtml(item.executiveSummary)}</td>
          <td>${escapeHtml(item.durationHuman)}</td>
          <td>${renderLinks(item.attachments)}</td>
        </tr>`,
    )
    .join('');
}

function renderGroupedSections(report) {
  return Object.entries(report.grouped)
    .map(([block, modules]) => {
      const moduleSections = Object.entries(modules)
        .map(([moduleName, scenarios]) => {
          const scenarioSections = Object.entries(scenarios)
            .map(([scenario, cases]) => {
              return `
                <section class="scenario">
                  <h4>${escapeHtml(scenario)}</h4>
                  <table class="cases-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Módulo</th>
                        <th>Estado</th>
                        <th>Qué valida</th>
                        <th>Tipo</th>
                        <th>Resumen funcional</th>
                        <th>Duración</th>
                        <th>Trazabilidad</th>
                      </tr>
                    </thead>
                    <tbody>${renderCasesRows(cases)}</tbody>
                  </table>
                </section>`;
            })
            .join('');

          return `<section class="module"><h3>${escapeHtml(moduleName)}</h3>${scenarioSections}</section>`;
        })
        .join('');

      return `<section class="block"><h2>${escapeHtml(block)}</h2>${moduleSections}</section>`;
    })
    .join('');
}

function renderHtml(report) {
  const total = Math.max(report.summary.total || 0, 1);
  const passedPct = ((report.summary.passed / total) * 100).toFixed(1);
  const failedPct = ((report.summary.failed / total) * 100).toFixed(1);
  const skippedPct = ((report.summary.skipped / total) * 100).toFixed(1);
  const flakyPct = ((report.summary.flaky / total) * 100).toFixed(1);

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Executive Report</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f3f7fd;
      --surface: rgba(255,255,255,.88);
      --surface-strong: #ffffff;
      --ink: #172033;
      --muted: #617086;
      --line: #d9e3f0;
      --brand: #0f6cbd;
      --brand-2: #0f9d8a;
      --passed: #1f9d67;
      --failed: #d64545;
      --skipped: #d49c00;
      --flaky: #f08c00;
      --shadow: 0 14px 34px rgba(15, 38, 71, .10);
    }
    * { box-sizing: border-box; }
    body {
      font-family: "Manrope", "Segoe UI", Arial, sans-serif;
      margin: 0;
      padding: 24px;
      color: var(--ink);
      background:
        radial-gradient(circle at top left, rgba(15,108,189,.16), transparent 28%),
        radial-gradient(circle at top right, rgba(15,157,138,.12), transparent 22%),
        linear-gradient(180deg, #f9fbff 0%, var(--bg) 100%);
    }
    h1, h2, h3, h4 { margin: 0 0 12px; line-height: 1.12; }
    h1 { font-size: 36px; font-weight: 800; letter-spacing: -.04em; }
    h2 { font-size: 22px; font-weight: 800; }
    h3 { font-size: 18px; font-weight: 800; }
    h4 { font-size: 15px; font-weight: 700; color: var(--brand); }
    .hero, .summary, .filters, .block, .module, .scenario, table, ul, .chart-card { margin-top: 20px; }
    .hero, .filters, .section-card, .block, table, ul, .chart-card, .card {
      background: var(--surface);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,.65);
      border-radius: 18px;
      box-shadow: var(--shadow);
    }
    .hero {
      padding: 24px;
      color: white;
      background: linear-gradient(135deg, rgba(15,108,189,.96), rgba(15,157,138,.92));
    }
    .hero .meta, .hero .links, .hero a, .hero .subtitle { color: rgba(255,255,255,.92); }
    .hero .subtitle { max-width: 920px; margin-top: 10px; line-height: 1.5; }
    .filters, .section-card, .block, .chart-card { padding: 18px; }
    .meta, .links { color: var(--muted); margin-top: 8px; }
    .summary { display: grid; grid-template-columns: repeat(7, minmax(120px, 1fr)); gap: 12px; }
    .card { padding: 16px; }
    .label { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; font-weight: 800; }
    .value { font-size: 30px; font-weight: 800; margin-top: 6px; letter-spacing: -.04em; }
    .hint { margin-top: 6px; font-size: 12px; color: var(--muted); }
    .dashboard { display: grid; grid-template-columns: 1.15fr .85fr; gap: 16px; margin-top: 20px; align-items: stretch; }
    .chart-wrap { display: grid; grid-template-columns: 240px 1fr; gap: 20px; align-items: center; }
    .ring {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      position: relative;
      margin: 0 auto;
      background:
        conic-gradient(
          var(--passed) 0 ${passedPct}%,
          var(--failed) ${passedPct}% calc(${passedPct}% + ${failedPct}%),
          var(--skipped) calc(${passedPct}% + ${failedPct}%) calc(${passedPct}% + ${failedPct}% + ${skippedPct}%),
          var(--flaky) calc(${passedPct}% + ${failedPct}% + ${skippedPct}%) 100%
        );
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.75);
    }
    .ring::after {
      content: "";
      position: absolute;
      inset: 26px;
      border-radius: 50%;
      background: var(--surface-strong);
      box-shadow: inset 0 0 0 1px var(--line);
    }
    .ring-center {
      position: absolute;
      inset: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
    .ring-center strong { font-size: 30px; font-weight: 800; }
    .ring-center span { color: var(--muted); font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    .legend { display: grid; gap: 10px; }
    .legend-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 12px;
      border-radius: 12px;
      background: rgba(255,255,255,.9);
      border: 1px solid var(--line);
    }
    .legend-left { display: flex; align-items: center; gap: 10px; font-weight: 700; }
    .swatch { width: 12px; height: 12px; border-radius: 50%; }
    .filters input, .filters select {
      padding: 11px 13px;
      border: 1px solid var(--line);
      border-radius: 12px;
      min-width: 220px;
      font: inherit;
      background: rgba(255,255,255,.96);
    }
    .filters-grid { display: flex; gap: 12px; flex-wrap: wrap; }
    table { width: 100%; border-collapse: collapse; overflow: hidden; }
    th, td { text-align: left; padding: 13px 12px; border-bottom: 1px solid var(--line); vertical-align: top; }
    th {
      background: linear-gradient(180deg, #eef5ff, #e7f0ff);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .06em;
      color: #48576d;
      position: sticky;
      top: 0;
    }
    tr:hover td { background: rgba(15,108,189,.035); }
    .badge { padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 800; display: inline-block; }
    .badge.passed { background: #def7ea; color: #18794e; }
    .badge.failed { background: #ffe2e2; color: #b42318; }
    .badge.skipped { background: #fff3cd; color: #9a6700; }
    .badge.flaky { background: #ffe5c2; color: #b54708; }
    .badge.unknown { background: #e5e7eb; color: #374151; }
    .two-col { display: grid; grid-template-columns: repeat(2, minmax(280px, 1fr)); gap: 16px; }
    ul { padding: 16px 24px; }
    li { margin-bottom: 8px; }
    a { color: var(--brand); text-decoration: none; font-weight: 700; }
    a:hover { text-decoration: underline; }
    .muted { color: var(--muted); }
    .module { margin-top: 18px; }
    .scenario { margin-top: 14px; }
    @media (max-width: 1100px) {
      .summary { grid-template-columns: repeat(3, minmax(120px, 1fr)); }
      .dashboard { grid-template-columns: 1fr; }
      .chart-wrap { grid-template-columns: 1fr; }
    }
    @media (max-width: 720px) {
      body { padding: 14px; }
      .summary { grid-template-columns: repeat(2, minmax(120px, 1fr)); }
      .two-col { grid-template-columns: 1fr; }
      .ring { width: 180px; height: 180px; }
      .ring::after { inset: 22px; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Executive Report</h1>
    <div class="subtitle">Vista ejecutiva complementaria al reporte técnico de Playwright. Resume el estado funcional de la corrida para QA, líderes técnicos y gerencia sin perder trazabilidad.</div>
    <div class="meta">Fecha/hora de generación: ${escapeHtml(report.generatedAt)}</div>
    <div class="meta">Fecha/hora de ejecución: ${escapeHtml(report.executedAt)}</div>
    <div class="links">
      <a href="../../playwright-report/index.html">Reporte HTML de Playwright</a> |
      <a href="../${escapeHtml(path.basename(report.sources.json))}">JSON de Playwright</a>
    </div>
  </section>

  <section class="summary">
    <div class="card"><div class="label">Total</div><div class="value">${report.summary.total}</div><div class="hint">Casos procesados</div></div>
    <div class="card"><div class="label">Passed</div><div class="value">${report.summary.passed}</div><div class="hint">Ejecuciones exitosas</div></div>
    <div class="card"><div class="label">Failed</div><div class="value">${report.summary.failed}</div><div class="hint">Casos con falla</div></div>
    <div class="card"><div class="label">Skipped</div><div class="value">${report.summary.skipped}</div><div class="hint">No ejecutados</div></div>
    <div class="card"><div class="label">Flaky</div><div class="value">${report.summary.flaky}</div><div class="hint">Inestables</div></div>
    <div class="card"><div class="label">% Éxito</div><div class="value">${report.summary.successRate}%</div><div class="hint">Passed + Flaky / Total</div></div>
    <div class="card"><div class="label">Duración</div><div class="value">${escapeHtml(report.summary.durationHuman)}</div><div class="hint">Tiempo acumulado</div></div>
  </section>

  <section class="dashboard">
    <div class="chart-card">
      <h2>Distribución de Resultados</h2>
      <div class="chart-wrap">
        <div class="ring">
          <div class="ring-center">
            <strong>${report.summary.successRate}%</strong>
            <span>Éxito</span>
          </div>
        </div>
        <div class="legend">
          <div class="legend-item"><div class="legend-left"><span class="swatch" style="background:var(--passed)"></span>Passed</div><strong>${report.summary.passed} (${passedPct}%)</strong></div>
          <div class="legend-item"><div class="legend-left"><span class="swatch" style="background:var(--failed)"></span>Failed</div><strong>${report.summary.failed} (${failedPct}%)</strong></div>
          <div class="legend-item"><div class="legend-left"><span class="swatch" style="background:var(--skipped)"></span>Skipped</div><strong>${report.summary.skipped} (${skippedPct}%)</strong></div>
          <div class="legend-item"><div class="legend-left"><span class="swatch" style="background:var(--flaky)"></span>Flaky</div><strong>${report.summary.flaky} (${flakyPct}%)</strong></div>
        </div>
      </div>
    </div>
    <div class="chart-card">
      <h2>Lectura Ejecutiva</h2>
      <ul>
        <li><strong>Resultado general:</strong> ${report.summary.successRate}% de éxito.</li>
        <li><strong>Casos con falla:</strong> ${report.summary.failed}.</li>
        <li><strong>Casos inestables:</strong> ${report.summary.flaky}.</li>
        <li><strong>Bloques detectados:</strong> ${Object.keys(report.grouped).length}.</li>
        <li><strong>Fuente:</strong> HTML y JSON estándar de Playwright más capa ejecutiva.</li>
      </ul>
    </div>
  </section>

  <section class="filters">
    <h2>Filtros</h2>
    <div class="filters-grid">
      <input id="caseFilter" type="search" placeholder="Buscar por ID, módulo o validación" />
      <select id="statusFilter">
        <option value="">Todos los estados</option>
        <option value="PASSED">PASSED</option>
        <option value="FAILED">FAILED</option>
        <option value="SKIPPED">SKIPPED</option>
        <option value="FLAKY">FLAKY</option>
      </select>
      <select id="typeFilter">
        <option value="">Todos los tipos</option>
        <option value="BUG">BUG</option>
        <option value="DATA">DATA</option>
        <option value="TECH">TECH</option>
        <option value="QA_PENDING">QA_PENDING</option>
      </select>
    </div>
  </section>

  <section class="two-col">
    <div class="section-card">
      <h2>Hallazgos Críticos</h2>
      <ul>${renderList(report.findings, 'No se registran hallazgos críticos en la corrida analizada.')}</ul>
    </div>
    <div class="section-card">
      <h2>Pendientes</h2>
      <ul>${renderList(report.pending, 'No hay casos pendientes de validación QA en esta corrida.')}</ul>
    </div>
    <div class="section-card">
      <h2>Bugs Funcionales</h2>
      <ul>${renderList(report.functionalBugs, 'No se detectan bugs funcionales en la corrida analizada.')}</ul>
    </div>
    <div class="section-card">
      <h2>Riesgos</h2>
      <ul>${report.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join('')}</ul>
    </div>
  </section>

  ${renderGroupedSections(report)}

  <script>
    const caseFilter = document.getElementById('caseFilter');
    const statusFilter = document.getElementById('statusFilter');
    const typeFilter = document.getElementById('typeFilter');

    function applyFilters() {
      const query = (caseFilter.value || '').toLowerCase();
      const status = statusFilter.value;
      const type = typeFilter.value;
      const rows = document.querySelectorAll('tbody tr');

      rows.forEach((row) => {
        const text = row.innerText.toLowerCase();
        const rowStatus = row.getAttribute('data-status') || '';
        const rowType = row.children[4]?.innerText?.trim() || '';
        const queryMatch = !query || text.includes(query);
        const statusMatch = !status || rowStatus === status;
        const typeMatch = !type || rowType === type;
        row.style.display = queryMatch && statusMatch && typeMatch ? '' : 'none';
      });
    }

    caseFilter.addEventListener('input', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
  </script>
</body>
</html>`;
}

function main() {
  const { filePath, json } = safeReadJson();
  const executiveReport = buildExecutiveModel(json, filePath);
  ensureDir(outputDir);
  fs.writeFileSync(outputJson, JSON.stringify(executiveReport, null, 2), 'utf8');
  fs.writeFileSync(outputHtml, renderHtml(executiveReport), 'utf8');
  console.log(`Executive report generado en ${path.relative(repoRoot, outputHtml)}`);
}

main();
