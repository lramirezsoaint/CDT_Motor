import { expect, test } from '@playwright/test';
import { GtCaseBase, openGtView,  tagsFor,  visibleButton } from './gt-ui';
import { env } from '@config/env';
import { LoginPage } from '@pages/auth/LoginPage';
import { SelectGtDistributionOptions, selectGtDistribution } from './gt-distribution';
import { selectGtDistributionDownload } from './gt-distributionDownload';

type DownloadCaseConfig = GtCaseBase & {
  expectedExtension?: RegExp;
  distribution?: SelectGtDistributionOptions;
};

export function DownloadCase(config: DownloadCaseConfig) {


  test(`${tagsFor(config)} descarga archivo desde ${config.view}`, async ({ page }, testInfo) => {
    test.setTimeout(120_000);
    try {
      await page.goto('https://distribuciongastos.pacificotest.com.pe/');
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGTUsername,
        env.gestorGTPassword
      );
    } catch (error) { }
    await selectGtDistributionDownload(page);
    
    //await test.step(`Abrir vista ${config.section} > ${config.view}`, async () => {
      //await openGtView(page, config);
    //});

    const downloadButton = page.locator(
      '[data-testid$="-download"]'
    ).first();
    await test.step('Validar boton Descargar habilitado', async () => {
      await expect(downloadButton, 'Debe existir el boton Descargar.').toBeVisible();
      await expect(downloadButton, 'El boton Descargar debe estar habilitado.').toBeEnabled();
    });

    await test.step('Ejecutar descarga y validar archivo', async () => {
      const [download] = await Promise.all([page.waitForEvent('download'), downloadButton.click()]);
      expect(await download.failure(), 'La descarga no debe fallar.').toBeNull();
      expect(download.suggestedFilename(), 'El archivo descargado debe tener extension valida.').toMatch(
        config.expectedExtension ?? /\.(xlsx|csv)$/i,
      );
    });
  });
}
