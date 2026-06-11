import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { env } from '@config/env';
import path from 'path';

type UploadCaseConfig = {
  caseId: string;
  section: string;
  view: string;
  modalTitle: RegExp;
  fileFolder: string;
  fileName: string;
  expectedResult: 'success' | 'headersError' | 'emptyFile' | 'maxSize' | 'validationError' | 'validationDownload';
};

export function UploadCase(config: UploadCaseConfig) {
  test(config.caseId, async ({ page }) => {
    test.setTimeout(360000);

    try {
      const loginPage = new LoginPage(page);
      await loginPage.login(
        env.gestorGastoUsername,
        env.gestorGastoPassword
      );
    } catch (error) { }

    await expect(page).toHaveURL(/\/distribuciones/i);

    // 2. Asignaciones
    await page.getByText(config.section).click();

    await page.getByRole('link', {
      name: new RegExp(config.view, 'i')
    }).click();

    // 3. Cargar
    await page.getByRole('button', {
      name: /^cargar$/i
    }).click();

    // 4. Validar modal con advertencia
    const modal = page.getByTestId('cargas-parametros-upload-dialog');

    await expect(modal).toBeVisible();

    await expect(
      modal.getByText(config.modalTitle)
    ).toBeVisible();

    const procesarButton = modal.getByRole('button', {
      name: /procesar archivo|aceptar/i
    });

    await expect(procesarButton).toBeDisabled();

    try {
      await page.getByRole('button', {
        name: /Continuar con la carga/i
      }).click();
    } catch (error) { }

    // 5. Seleccionar archivo
    const archivo = path.resolve(
      'fixtures',
      'files',
      'bloque-2',
      config.fileFolder,
      config.fileName
    );

    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      modal.getByText('Haz click para examinar', {
        exact: true
      }).click()
    ]);

    await fileChooser.setFiles(archivo);
    if (config.expectedResult === 'success' || config.expectedResult === 'headersError' || config.expectedResult === 'validationError' || config.expectedResult === 'validationDownload') {
      // 6. Botón habilitado y botón subir nuevo archivo visible
      await expect(procesarButton).toBeEnabled();

      // 7. Procesar archivo
      await procesarButton.click();

      // 8. Validar mensaje procesando
      await expect(
        modal.getByText(/procesando archivo/i)
      ).toBeVisible();

      await expect(
        modal.getByText(/por favor espere mientras procesamos su archivo/i)
      ).toBeVisible();

      await expect(
        modal.getByText(/este proceso puede tardar varios minutos/i)
      ).toBeVisible();

      await expect.poll(
        async () => {
          try {
            if (config.expectedResult === 'success') {
              return await page
                .getByRole('button', {
                  name: /Subir otro archivo/i
                })
                .isVisible();
            } else if (config.expectedResult === 'headersError' || config.expectedResult === 'validationError') {
              return await page
                .getByRole('button', {
                  name: /intentar de nuevo/i
                })
                .isVisible();
            } else if (config.expectedResult === 'validationDownload') {
              return await page
                .getByRole('button', {
                  name: /descargar errores/i
                })
                .isVisible();
            }
          } catch {
            return false;
          }
        },
        {
          timeout: 300000,
          intervals: [1000, 2000, 3000]
        }
      ).toBe(true);
    }
    // 9. Validar mensaje de éxito
    if (config.expectedResult === 'success') {
      await expect(
        modal.getByText(
          /¡listo! el archivo se cargó correctamente/i
        )
      ).toBeVisible();

      await expect(
        modal.getByRole('button', {
          name: /subir otro archivo/i
        })
      ).toBeVisible();

      await expect(
        modal.getByRole('button', {
          name: /^aceptar$/i
        })
      ).toBeEnabled();
    }

    if (config.expectedResult === 'headersError') {

      await expect(
        modal.getByText(
          /las cabeceras del archivo no coinciden con las esperadas/i
        )
      ).toBeVisible();

      await expect(
        modal.getByText(/verifique la plantilla/i)
      ).toBeVisible();

      await expect(
        modal.getByRole('button', {
          name: /intentar de nuevo/i
        })
      ).toBeVisible();
    }

    if (config.expectedResult === 'emptyFile') {
      await expect(
        modal.getByText(
          /el archivo seleccionado no contiene información/i
        )
      ).toBeVisible({ timeout: 5000 });

      await expect(
        modal.getByText(
          /verifique el contenido antes de intentar cargarlo nuevamente/i
        )
      ).toBeVisible();
    }

    if (config.expectedResult === 'maxSize') {
      await expect(
        modal.getByText(
          /el archivo excede el tamaño máximo permitido/i
        )
      ).toBeVisible({ timeout: 5000 });

      await expect(
        modal.getByText(
          /\(30 mb\)/i
        )
      ).toBeVisible();

      await expect(
        modal.getByText(
          /seleccione un archivo que cumpla con el límite establecido/i
        )
      ).toBeVisible();
    }

    if (config.expectedResult === 'validationError') {
      await expect(
        modal.getByText(/faltan algunos datos obligatorios/i)
      ).toBeVisible();

      await expect(
        modal.getByText(/formato incorrecto/i)
      ).toBeVisible();

      await expect(
        modal.getByText(/datos que no existen en el catálogo relacionado/i)
      ).toBeVisible();

      await expect(
        modal.getByRole('button', {
          name: /descargar errores/i
        })
      ).toBeVisible();
    }
    if (config.expectedResult === 'validationDownload') {
      await expect(
        modal.getByText(/faltan algunos datos obligatorios/i)
      ).toBeVisible();

      await expect(
        modal.getByText(/formato incorrecto/i)
      ).toBeVisible();

      await expect(
        modal.getByText(/datos que no existen en el catálogo relacionado/i)
      ).toBeVisible();

      await expect(
        modal.getByRole('button', {
          name: /descargar errores/i
        })
      ).toBeVisible();
    }
  });
}


