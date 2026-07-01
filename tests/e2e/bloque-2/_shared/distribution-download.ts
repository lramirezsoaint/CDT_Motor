import { expect, test } from '@fixtures/base.fixture';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { selectGtDistributionDownload } from './gt-distributionDownload';

export function DistributionDownloadCase(config: { caseId: string }) {
  test(`@bloque2 @gt @${config.caseId} descarga archivo de distribucion`, async ({ page }) => {
    test.setTimeout(120_000);
    await test.step('Abrir pantalla Distribucion', async () => {
      try {
        await page.goto('https://distribuciongastos.pacificotest.com.pe/');
        const loginPage = new LoginPage(page);
        await loginPage.login(env.gestorGTUsername, env.gestorGTPassword);
        await selectGtDistributionDownload(page);
      } catch (error) { }
      await expect(page, 'Debe abrir la pantalla de Distribuciones.').toHaveURL(/\/distribuciones/i, { timeout: 60_000 });
    });

    await test.step('Descargar y validar archivo', async () => {
      const downloadButton = page.locator('[data-testid$="-download"]').or(page.getByRole('button', { name: /Descargar/i })).first();
      await expect(downloadButton, 'Debe existir el boton Descargar de Distribucion.').toBeVisible({ timeout: 30_000 });
      await expect(downloadButton, 'El boton Descargar debe estar habilitado.').toBeEnabled();
      const [download] = await Promise.all([page.waitForEvent('download'), downloadButton.click()]);
      expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();
      expect(download.suggestedFilename(), 'El archivo descargado debe tener extension valida.').toMatch(/\.(xlsx|csv)$/i);
    });
  });
}