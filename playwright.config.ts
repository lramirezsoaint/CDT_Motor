import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { resolveRoleAuthFile, roles } from './src/config/roles';

const isListCommand = process.argv.includes('--list');

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

  projects: roles.map((role) => ({
    name: role.projectName,
    testMatch: role.testMatch,
    testIgnore: role.testIgnore,
    use: { ...devices['Desktop Chrome'], storageState: resolveRoleAuthFile(role, __dirname, { validate: !isListCommand }) },
  })),

  outputDir: 'test-results',
});
