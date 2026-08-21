const { spawnSync } = require('child_process');
const path = require('path');
require('dotenv').config({ override: false });

const repoRoot = path.resolve(__dirname, '..', '..');
const command = process.platform === 'win32' ? 'cmd.exe' : 'npx';
const args = [
  'playwright',
  'test',
  '-c',
  'playwright.incidents.config.ts',
  'azure-devops/azure-devops.validate-only.spec.ts',
  '--workers=1',
];
const commandArgs = process.platform === 'win32' ? ['/c', 'npx.cmd', ...args] : args;

const result = spawnSync(
  command,
  commandArgs,
  {
    cwd: repoRoot,
    env: {
      ...process.env,
      AZURE_DEVOPS_RUN_VALIDATE_ONLY: 'true',
      AZURE_DEVOPS_VALIDATE_ONLY: 'true',
      AUTO_CREATE_INCIDENTS: 'false',
      INCIDENT_MODE: 'preview',
    },
    stdio: 'inherit',
  },
);

if (result.error) {
  console.error('[AZURE VALIDATE ONLY RESULT]');
  console.error('status=ERROR');
  console.error(`message=${result.error.message}`);
}

process.exitCode = result.status ?? 1;
