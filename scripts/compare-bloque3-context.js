const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const contextDir = path.join(rootDir, 'tmp', 'bloque3-context');

function latest(label) {
  return fs
    .readdirSync(contextDir)
    .filter((name) => name.endsWith('.json') && name.includes(label))
    .sort()
    .map((name) => path.join(contextDir, name))
    .pop();
}

function read(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function keys(object) {
  return Object.keys(object || {}).sort();
}

function diffKeys(left, right) {
  const leftKeys = new Set(keys(left));
  const rightKeys = new Set(keys(right));
  return {
    onlyLeft: [...leftKeys].filter((key) => !rightKeys.has(key)),
    onlyRight: [...rightKeys].filter((key) => !leftKeys.has(key)),
    changed: [...leftKeys].filter((key) => rightKeys.has(key) && JSON.stringify(left[key]) !== JSON.stringify(right[key])),
  };
}

function networkSummary(snapshot) {
  return (snapshot.network || []).map((item) => ({
    status: item.status,
    method: item.method,
    url: item.url.replace(/[?#].*$/, ''),
    bodyKeys: item.body && typeof item.body === 'object' && !Array.isArray(item.body) ? keys(item.body) : [],
  }));
}

const manualPath = latest('manual-correcto');
const automationPath = latest('automation-stored');

if (!manualPath || !automationPath) {
  throw new Error('Faltan capturas manual-correcto o automation-stored en tmp/bloque3-context.');
}

const manual = read(manualPath);
const automation = read(automationPath);

const report = {
  manualPath,
  automationPath,
  ui: {
    manual: manual.ui,
    automation: automation.ui,
  },
  localStorage: diffKeys(manual.storage.localStorage, automation.storage.localStorage),
  sessionStorage: diffKeys(manual.storage.sessionStorage, automation.storage.sessionStorage),
  cookies: diffKeys(
    Object.fromEntries((manual.cookies || []).map((cookie) => [cookie.name, cookie.domain])),
    Object.fromEntries((automation.cookies || []).map((cookie) => [cookie.name, cookie.domain])),
  ),
  network: {
    manual: networkSummary(manual),
    automation: networkSummary(automation),
  },
};

const reportPath = path.join(contextDir, `${Date.now()}-comparison.json`);
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log(`Comparacion guardada: ${reportPath}`);
console.log(JSON.stringify(report.ui, null, 2));
console.log('localStorage diff:', JSON.stringify(report.localStorage, null, 2));
console.log('sessionStorage diff:', JSON.stringify(report.sessionStorage, null, 2));
console.log('cookies diff:', JSON.stringify(report.cookies, null, 2));
