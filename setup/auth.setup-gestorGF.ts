import { chromium, FullConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { env, validateRequiredEnv } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';

async function globalSetup(_: FullConfig): Promise<void> {
  validateRequiredEnv();
  const authDir = path.join(__dirname, '..', '.auth');

  fs.mkdirSync(authDir, { recursive: true });

  const browser = await chromium.launch({
    headless: env.headless,
    slowMo: env.slowMo,
    channel: process.env.PW_CHANNEL || undefined,
  });

  const page = await browser.newPage();
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  let attempts = 0;
  while (attempts < 2) {
    try {
      await loginPage.loginWithMicrosoft(env.gestorGFUsername || env.username, env.gestorGFPassword || env.password);
      await loginPage.assertAuthenticated();
      break;
    } catch (error) {
      attempts += 1;
      if (attempts >= 2) throw error;
    }
  }

  await page.context().storageState({ path: path.join(authDir, 'gestorGF.json') });
  await browser.close();
}

export default globalSetup;
