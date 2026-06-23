const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const sourceFile = process.env.CP_SOURCE || path.resolve(__dirname, '..', 'docs', 'catalogos', 'excel', '_2025-PACIFICO-DESARORROLLO-Casos de Prueba-FASE 2-sprint1.xlsx');
const outputDir = path.resolve(__dirname, '..', 'docs');
const outputFile = path.join(outputDir, 'bd1-case-matrix.csv');

if (!fs.existsSync(sourceFile)) {
  throw new Error(`No se encontró el archivo fuente: ${sourceFile}`);
}

const wb = XLSX.readFile(sourceFile);
const ws = wb.Sheets['Casos de prueba'];
const rows = XLSX.utils.sheet_to_json(ws, { defval: '' });

const filtered = rows
  .filter((row) => row['BLOQUE'] === 'BD1')
  .map((row) => ({
    cpId: row['__EMPTY'] || row['ID'] || '',
    bloque: row['BLOQUE'],
    titulo: row['Título'],
    prioridad: row['Prioridad'],
    tipo: row['tipo de prueba'],
    estatus: row['Estatus'],
  }));

fs.mkdirSync(outputDir, { recursive: true });
const csvLines = ['cpId,bloque,titulo,prioridad,tipo,estatus'];
for (const row of filtered) {
  csvLines.push([
    row.cpId,
    row.bloque,
    `"${String(row.titulo).replaceAll('"', '""')}"`,
    row.prioridad,
    row.tipo,
    row.estatus,
  ].join(','));
}
fs.writeFileSync(outputFile, csvLines.join('\n'));
console.log(`Matriz generada: ${outputFile}`);
