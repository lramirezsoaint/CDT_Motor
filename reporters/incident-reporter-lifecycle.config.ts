import 'dotenv/config';
import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: '.',
  testMatch: ['reporters/incident-reporter-lifecycle.spec.ts'],
  reporter: [[path.join(__dirname, 'incident-reporter-lifecycle.mock.ts')], ['list']],
  workers: 1,
  use: {
    trace: 'off',
    screenshot: 'off',
    video: 'off',
  },
});
