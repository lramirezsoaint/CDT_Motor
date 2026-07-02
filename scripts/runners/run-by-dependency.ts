const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..', '..');
const dependenciesPath = path.join(repoRoot, 'src', 'config', 'test-dependencies.json');

const VALID_PROJECTS = ['chromium', 'chromium-gestorGT', 'chromium-gestorGF'];
const ALWAYS_GREP_INVERT = ['pendiente de automatizacion'];
const PROJECT_GREP_INVERT = {
  'chromium-gestorGF': ['@E0-LOGIN-ADMIN'],
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function buildTimestamp() {
  const now = new Date();
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`,
  ].join('-');
}

function safeName(value) {
  return value.replace(/^@/, '').replace(/[^a-zA-Z0-9.-]+/g, '-');
}

function grepValueForCli(value) {
  return process.platform === 'win32' && /\s/.test(value) ? `"${value}"` : value;
}

function loadDependencies() {
  if (!fs.existsSync(dependenciesPath)) {
    console.error(`Error: No se encontro el archivo de dependencias en ${dependenciesPath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(dependenciesPath, 'utf8')).dependencies;
}

function validateTagInProject(tag, project) {
  const deps = loadDependencies();
  const dep = deps.find(d => d.tag === tag);

  if (!dep) {
    const availableTags = deps.map(d => d.tag).join(', ');
    console.error(`Error: Tag "${tag}" no encontrado en dependencias`);
    console.error(`Tags disponibles: ${availableTags}`);
    process.exit(1);
  }

  if (project && !dep.projects.includes(project)) {
    console.error(`Error: Tag "${tag}" no existe en proyecto "${project}"`);
    console.error(`Tag "${tag}" existe en: ${dep.projects.join(', ')}`);
    process.exit(1);
  }

  return dep;
}

function resolveExecutionPlan(targetTag) {
  const deps = loadDependencies();
  const target = deps.find(d => d.tag === targetTag);

  const dependencyOrders = target.dependsOn;
  const plan = [];
  const allOrders = [...new Set(deps.map(d => d.order))].sort((a, b) => a - b);

  for (const order of allOrders) {
    const shouldInclude = dependencyOrders.includes(order) || order === target.order;
    if (!shouldInclude) continue;

    const tagsInOrder = deps
      .filter(d => d.order === order)
      .map(d => d.tag);

    plan.push({ order, tags: tagsInOrder });
  }

  return { target, plan };
}

function executeGroup(tags, order, project, htmlReportRoot) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Grupo [orden ${order}]: ${tags.join(', ')}`);
  console.log(`${'='.repeat(60)}`);

  const htmlReports = [];

  for (const tag of tags) {
    console.log(`\n> Ejecutando tests con tag: ${tag}`);

    const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    const htmlReportDir = path.join(htmlReportRoot, `${String(order).padStart(2, '0')}-${safeName(tag)}`);
    const grepValue = grepValueForCli(tag);
    const args = [
      'playwright', 'test',
      '--grep', grepValue,
      '--workers=1',
      '--reporter=list,html'
    ];

    if (project) {
      args.push('--project', project);
    }

    const grepInvertTags = [
      ...ALWAYS_GREP_INVERT,
      ...(project ? PROJECT_GREP_INVERT[project] ?? [] : []),
    ];
    if (grepInvertTags.length > 0) {
      args.push('--grep-invert', grepValueForCli(grepInvertTags.join('|')));
    }

    console.log(`> Comando: ${npxCommand} ${args.join(' ')}`);
    console.log(`> Reporte HTML: ${path.relative(repoRoot, path.join(htmlReportDir, 'index.html'))}`);

    const result = spawnSync(npxCommand, args, {
      cwd: repoRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        PLAYWRIGHT_HTML_OPEN: 'never',
        PLAYWRIGHT_HTML_OUTPUT_DIR: htmlReportDir,
      },
      shell: process.platform === 'win32'
    });

    htmlReports.push({
      order,
      tag,
      path: path.relative(repoRoot, path.join(htmlReportDir, 'index.html')).replace(/\\/g, '/'),
      exitCode: result.status,
    });

    if (result.error) {
      console.error(`Error al ejecutar: ${result.error.message}`);
    }

    if (result.status !== 0) {
      console.error(`> Process exited with code: ${result.status}`);
      return { success: false, failedTag: tag, failedOrder: order, htmlReports };
    }

    console.log(`\n✓ Tag: ${tag} completado exitosamente`);
  }

  return { success: true, htmlReports };
}

function generateReport(targetTag, plan, exitCode, project, htmlReportRoot, htmlReports) {
  console.log('\nGenerando reporte ejecutivo...');

  const executiveReportScript = path.join(repoRoot, 'scripts', 'reports', 'generate-executive-report.ts');
  if (fs.existsSync(executiveReportScript)) {
    const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    spawnSync(npxCommand, [
      'tsx',
      'scripts/reports/generate-executive-report.ts'
    ], { cwd: repoRoot, stdio: 'inherit', shell: process.platform === 'win32' });
  } else {
    console.log('Generador ejecutivo no encontrado; se omite reporte ejecutivo.');
  }

  const summaryPath = path.join(repoRoot, 'reports', 'dependency-run-summary.json');
  const summary = {
    executedAt: new Date().toISOString(),
    targetTag,
    project: project || 'all',
    plan: plan.map(g => ({ order: g.order, tags: g.tags })),
    htmlReportRoot: path.relative(repoRoot, htmlReportRoot).replace(/\\/g, '/'),
    htmlReports,
    exitCode,
    status: exitCode === 0 ? 'SUCCESS' : 'FAILED'
  };

  fs.mkdirSync(path.dirname(summaryPath), { recursive: true });
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  console.log(`Resumen guardado en: ${path.relative(repoRoot, summaryPath)}`);
  console.log(`Reportes HTML guardados en: ${path.relative(repoRoot, htmlReportRoot)}`);
}

function main() {
  const tagArg = process.argv.find(a => a.startsWith('--tag='));
  const projectArg = process.argv.find(a => a.startsWith('--project='));

  if (!tagArg) {
    console.error('Uso: npm run test:by-dependency -- --tag=@editar [--project=chromium]');
    console.error('');
    console.error('Ejemplos:');
    console.error('  npm run test:by-dependency -- --tag=@editar --project=chromium');
    console.error('  npm run test:by-dependency -- --tag=@upload_valido --project=chromium-gestorGF');
    console.error('  npm run test:by-dependency -- --tag=@eliminar');
    console.error('');
    console.error('Proyectos validos: chromium, chromium-gestorGT, chromium-gestorGF');
    process.exit(1);
  }

  const targetTag = tagArg.split('=')[1];
  const project = projectArg ? projectArg.split('=')[1] : null;
  const htmlReportRoot = path.join(repoRoot, 'reports', 'dependency-html', buildTimestamp());
  const htmlReports = [];

  if (project && !VALID_PROJECTS.includes(project)) {
    console.error(`Error: Proyecto "${project}" no valido`);
    console.error(`Proyectos validos: ${VALID_PROJECTS.join(', ')}`);
    process.exit(1);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Runner por Dependencias Funcionales`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Tag objetivo: ${targetTag}`);
  if (project) {
    console.log(`Proyecto: ${project}`);
  }

  validateTagInProject(targetTag, project);

  const { target, plan } = resolveExecutionPlan(targetTag);

  console.log('\nPlan de ejecucion:');
  plan.forEach((group, i) => {
    console.log(`  ${i + 1}. [Orden ${group.order}] ${group.tags.join(', ')}`);
  });

  for (const group of plan) {
    const result = executeGroup(group.tags, group.order, project, htmlReportRoot);
    htmlReports.push(...result.htmlReports);

    if (!result.success) {
      console.log(`\n${'='.repeat(60)}`);
      console.log(`EJECUCION DETENIDA - Fallo en orden ${result.failedOrder}, tag: ${result.failedTag}`);
      console.log(`${'='.repeat(60)}`);

      generateReport(targetTag, plan, 1, project, htmlReportRoot, htmlReports);
      process.exit(1);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`TODOS LOS GRUPOS COMPLETADOS EXITOSAMENTE`);
  console.log(`${'='.repeat(60)}`);

  generateReport(targetTag, plan, 0, project, htmlReportRoot, htmlReports);
  process.exit(0);
}

main();
