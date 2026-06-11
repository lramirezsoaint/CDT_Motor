import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const authDir = path.join(__dirname, '.auth');
const fallbackAuth = path.join(__dirname, 'storageState.json');
const adminAuthFile = path.join(authDir, 'admin.json');
const gestorAuthFile = path.join(authDir, 'gestor.json');
const gestorGastoAuthFile = path.join(authDir, 'gestorGasto.json');

function resolveAuthFile(preferred: string): string | undefined {
  if (process.env.PW_NO_STORAGE === 'true') return undefined;
  if (fs.existsSync(preferred)) return preferred;
  if (preferred !== fallbackAuth && fs.existsSync(fallbackAuth)) return fallbackAuth;
  return undefined;
}

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 90_000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,

  workers: process.env.CI ? 1 : Number(process.env.PW_WORKERS) || 2,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never', theme: 'dark' }],
    ['json', { outputFile: 'reports/playwright-results.json' }],
    ['list'],
  ],

  use: {
    baseURL: process.env.MOTOR_BASE_URL,

    headless: process.env.HEADLESS === 'true',

    channel: process.env.PW_CHANNEL,

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: { mode: 'on', size: { width: 960, height: 540 } },

    actionTimeout: 20_000,
    navigationTimeout: 40_000,

    launchOptions: {
      slowMo: Number(process.env.PW_SLOWMO) || 0,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: resolveAuthFile(adminAuthFile) },
    },
    {
      name: 'chromium-gestor',
      use: { ...devices['Desktop Chrome'], storageState: resolveAuthFile(gestorAuthFile) },
    },
    {
      name: 'chromium-gestor-gasto',
      use: { ...devices['Desktop Chrome'], storageState: resolveAuthFile(gestorGastoAuthFile) },
    },
  ],

  outputDir: 'test-results',
});
