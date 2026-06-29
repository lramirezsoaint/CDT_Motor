const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..', '..');
const block1Root = path.join(repoRoot, 'tests', 'e2e', 'bloque-1');
const generatedPaths = [
  path.join(repoRoot, 'reports', 'playwright-results.json'),
  path.join(repoRoot, 'reports', 'results.json'),
  path.join(repoRoot, 'reports', 'executive-report'),
  path.join(repoRoot, 'playwright-report'),
];
const excludedDirs = new Set(['_shared', 'sin-trazabilidad']);

function hasSpecs(dirPath) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .some((entry) => entry.isFile() && entry.name.endsWith('.spec.ts'));
}

function collectImplementedCaseDirs() {
  return fs
    .readdirSync(block1Root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => !excludedDirs.has(entry.name))
    .map((entry) => path.join(block1Root, entry.name))
    .filter((dirPath) => hasSpecs(dirPath))
    .sort((left, right) => path.basename(left).localeCompare(path.basename(right)));
}

function cleanGeneratedArtifacts() {
  for (const targetPath of generatedPaths) {
    if (!fs.existsSync(targetPath)) continue;
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const caseDirs = collectImplementedCaseDirs();

  if (!caseDirs.length) {
    console.error('No se encontraron carpetas implementadas en tests/e2e/bloque-1.');
    process.exit(1);
  }

  console.log(`Se encontraron ${caseDirs.length} carpetas de casos implementados en bloque-1.`);

  if (dryRun) {
    console.log('Modo dry-run. Se limpiarían estos artefactos:');
    for (const targetPath of generatedPaths) {
      console.log(`- ${path.relative(repoRoot, targetPath)}`);
    }
    console.log('Y se ejecutarían estas carpetas, una detrás de otra con workers=1:');
    for (const dirPath of caseDirs) {
      console.log(`- ${path.relative(repoRoot, dirPath)}`);
    }
    return;
  }

  cleanGeneratedArtifacts();

  const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const args = ['playwright', 'test', ...caseDirs, '--workers=1'];

  console.log('Iniciando corrida secuencial de bloque-1 con reportes frescos...');
  const result = spawnSync(npxCommand, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    env: process.env,
  });

  process.exit(result.status ?? 1);
}

main();
