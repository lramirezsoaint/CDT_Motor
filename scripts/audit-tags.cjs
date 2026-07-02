const { execFileSync } = require('child_process');

const flowTags = [
 '@login',
 '@distribucion',
 '@upload_valido',
 '@upload_invalido',
 '@registrar',
 '@editar',
 '@eliminar',
 '@busqueda',
 '@columnas',
 '@paginacion',
 '@procesos',
 '@download_catalogo',
 '@download_reporte',
];

const playwrightCli = require.resolve('@playwright/test/cli');
const output = execFileSync(process.execPath, [playwrightCli, 'test', '--list'], {
 encoding: 'utf8',
 stdio: ['ignore', 'pipe', 'pipe'],
});

const testLines = output
 .split(/\r?\n/)
 .filter((line) => /^\s+\[[^\]]+\]\s+›/.test(line));

const issues = [];

for (const line of testLines) {
 const bloqueMatches = line.match(/@bloque[123]\b/g) ?? [];
 const idMatches = line.match(/@[A-Za-z]*E[A-Za-z0-9_.-]+/g) ?? [];
 const presentFlowTags = flowTags.filter((tag) => line.includes(tag));

 if (bloqueMatches.length === 0) {
 issues.push(`Sin tag de bloque: ${line.trim()}`);
 }

 if (idMatches.length === 0) {
 issues.push(`Sin tag de ID: ${line.trim()}`);
 }

 if (presentFlowTags.length !== 1) {
 issues.push(`Debe tener exactamente un flujo funcional (${presentFlowTags.length}): ${line.trim()}`);
 }
}

if (issues.length > 0) {
 console.error(issues.join('\n'));
 console.error(`\nAuditoria de tags fallida. Issues: ${issues.length}`);
 process.exit(1);
}

console.log(`Auditoria de tags OK. Tests validados: ${testLines.length}`);
