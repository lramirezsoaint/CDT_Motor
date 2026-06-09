require("dotenv").config();
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const role = process.env.AUTH_ROLE === 'gestor' ? 'gestor' : 'admin';
const username = role === 'gestor' 
  ? (process.env.MOTOR_GESTOR_USERNAME || process.env.MOTOR_USERNAME)
  : process.env.MOTOR_USERNAME;
const password = role === 'gestor'
  ? (process.env.MOTOR_GESTOR_PASSWORD || process.env.MOTOR_PASSWORD)
  : process.env.MOTOR_PASSWORD;

console.log(`[${role.toUpperCase()}] Starting auth setup...`);
console.log(`[${role.toUpperCase()}] URL: ${process.env.MOTOR_BASE_URL}`);
console.log(`[${role.toUpperCase()}] Username: ${username}`);

(async () => {
  try {
    const authDir = path.join(__dirname, '..', '.auth');
    const authFile = path.join(authDir, `${role}.json`);
    fs.mkdirSync(authDir, { recursive: true });

    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    console.log(`[${role.toUpperCase()}] Navigating to ${process.env.MOTOR_BASE_URL}`);
    await page.goto(process.env.MOTOR_BASE_URL, { waitUntil: 'load', timeout: 30_000 })
      .catch(err => {
        console.log(`[${role.toUpperCase()}] Navigation warning:`, err.message);
        // Try domcontentloaded if load fails
        return page.goto(process.env.MOTOR_BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });
      });

    // Determine whether login is required.
    const currentUrl = new URL(page.url());
    const loginButton = page
      .getByRole('button', { name: /iniciar sesi[oó]n/i })
      .or(page.getByText(/iniciar sesi[oó]n/i));
    const loginButtonVisible = await loginButton.first().isVisible({ timeout: 5_000 }).catch(() => false);
    const emailInputDetected = page.locator('#i0116');
    const emailVisibleDetected = await emailInputDetected.isVisible({ timeout: 5_000 }).catch(() => false);
    const isLoginScreen = currentUrl.hostname.includes('login.microsoftonline.com')
      || currentUrl.pathname.includes('/login')
      || loginButtonVisible
      || emailVisibleDetected;

    const isAlreadyAuthenticated = !isLoginScreen && currentUrl.pathname.startsWith('/distribuciones');
    if (isAlreadyAuthenticated) {
      console.log(`[${role.toUpperCase()}] Already authenticated! Saving state...`);
      await page.context().storageState({ path: authFile });
      await browser.close();
      console.log(`[${role.toUpperCase()}] ✓ Storage saved to ${authFile}`);
      process.exit(0);
    }

    // Look for login button
    console.log(`[${role.toUpperCase()}] Looking for login button...`);
    const entryButton = page
      .getByRole('button', { name: /iniciar sesi[oó]n/i })
      .or(page.getByText(/iniciar sesi[oó]n/i));

    const isLoginButtonVisible = await entryButton.first().isVisible({ timeout: 10_000 }).catch(() => false);
    if (isLoginButtonVisible) {
      console.log(`[${role.toUpperCase()}] Found login button, clicking...`);
      await entryButton.first().click();
      await page.waitForLoadState('domcontentloaded');
    }

    // Try to fill email and password
    console.log(`[${role.toUpperCase()}] Attempting to fill credentials...`);
    await page.waitForURL(/login\.microsoftonline\.com|login\.microsoftonline\.com\/./i, { timeout: 30_000 }).catch(() => null);

    const emailInput = page
      .getByRole('textbox', { name: /enter your email, phone, or/i })
      .or(page.locator('#i0116'))
      .or(page.locator('input[name="loginfmt"]'));
    const emailVisible = await emailInput.first().isVisible({ timeout: 15_000 }).catch(() => false);

    if (emailVisible) {
      console.log(`[${role.toUpperCase()}] Filling email...`);
      await emailInput.first().fill(username);
      await page.getByRole('button', { name: /next/i }).first().click().catch(async () => {
        await page.locator('#idSIButton9').click();
      });

      const passwordInput = page
        .getByRole('textbox', { name: /enter the password for/i })
        .or(page.locator('#i0118'))
        .or(page.locator('input[name="passwd"]'));
      const passwordVisible = await passwordInput.first().isVisible({ timeout: 20_000 }).catch(() => false);

      if (passwordVisible) {
        console.log(`[${role.toUpperCase()}] Filling password...`);
        await passwordInput.first().fill(password);
        await page.getByRole('button', { name: /(sign in|iniciar sesi[oó]n|next)/i }).first().click().catch(async () => {
          await page.locator('#idSIButton9').click();
        });
        await page.waitForLoadState('networkidle');

        // Wait for consent or stay signed in prompt
        const staySignedBtn = page
          .getByRole('button', { name: /(yes|si)/i })
          .or(page.locator('#idSIButton9'));
        const btnVisible = await staySignedBtn.first().isVisible({ timeout: 10_000 }).catch(() => false);
        if (btnVisible) {
          console.log(`[${role.toUpperCase()}] Clicking stay signed in/consent...`);
          await staySignedBtn.first().click();
          await page.waitForLoadState('networkidle');
        }
      }
    }

    // Wait for final URL
    console.log(`[${role.toUpperCase()}] Waiting for redirect to ${process.env.MOTOR_BASE_URL}...`);
    await page.waitForURL(/distribuciones|distribuciongastos/i, { timeout: 120_000 })
      .catch(async (err) => {
        console.error(`[${role.toUpperCase()}] Navigation timeout. Current URL:`, page.url());
        throw err;
      });

    console.log(`[${role.toUpperCase()}] Successfully authenticated! Saving state...`);
    await page.context().storageState({ path: authFile });
    await browser.close();
    
    console.log(`[${role.toUpperCase()}] ✓ Storage saved to ${authFile}`);
    console.log(`[${role.toUpperCase()}] ✓ Setup complete!`);
    process.exit(0);
  } catch (error) {
    console.error(`[${role.toUpperCase()}] ✗ Auth setup failed:`, error.message);
    process.exit(1);
  }
})();
