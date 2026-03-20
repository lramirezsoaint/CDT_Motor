import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '.auth', 'admin.json');

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 90_000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,

  workers: process.env.CI ? 1 : Number(process.env.PW_WORKERS) || 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never', theme: 'dark' }],
    ['list'],
  ],

  globalSetup: './setup/auth.setup.ts',

  use: {
    baseURL: process.env.MOTOR_BASE_URL,

    headless: process.env.HEADLESS === 'true',

    // default bundled chromium; override with PW_CHANNEL if needed locally
    channel: process.env.PW_CHANNEL,
    storageState: authFile,

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 20_000,
    navigationTimeout: 40_000,

    launchOptions: {
      slowMo: Number(process.env.PW_SLOWMO) || 0,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  outputDir: 'test-results',
});
