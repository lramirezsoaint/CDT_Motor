require("dotenv").config();
const { chromium } = require('playwright');
(async()=>{
  const browser = await chromium.launch({ headless:true, channel:'msedge' });
  const page = await browser.newPage();
  await page.goto(process.env.MOTOR_BASE_URL,{waitUntil:'networkidle'});
  await page.getByText(/Iniciar sesi[oó]n/i).first().waitFor({state:'visible', timeout:30000});
  await page.getByText(/Iniciar sesi[oó]n/i).first().click();
  await page.waitForLoadState('domcontentloaded');
  await page.waitForURL(/login\.microsoftonline\.com|pacificotest\.com\.pe\/login/, { timeout: 60000 });
  await page.fill('#i0116', process.env.MOTOR_USERNAME);
  await page.click('#idSIButton9');
  await page.fill('#i0118', process.env.MOTOR_PASSWORD);
  await page.click('#idSIButton9');
  try { await page.getByRole('button',{name:/yes|si/i}).click({timeout:10000}); } catch{}
  await page.waitForURL(/distribuciones/i,{timeout:60000});
  await page.waitForLoadState('networkidle');
  const navTexts = await page.locator('button, a, span').allTextContents();
  const filtered = navTexts.filter(t=>/l[ií]ne/i.test(t)).slice(0,10);
  console.log('matches', filtered);
  await browser.close();
})();
