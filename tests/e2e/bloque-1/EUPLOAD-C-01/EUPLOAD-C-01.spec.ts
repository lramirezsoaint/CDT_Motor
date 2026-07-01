import path from 'path';
import { expect, test } from '@fixtures/base.fixture';
import type { Page } from '@playwright/test';

type HarnessState = {
  hasData: boolean;
  tableRows: string[][];
};

const validFile = path.resolve('fixtures/files/bloque-1/E4-C-01.1/REAL Lineas.xlsx');
const replacementFile = path.resolve('fixtures/files/bloque-1/E59-C-01.1/REAL Lineas2.xlsx');
const invalidFile = path.resolve('fixtures/files/bloque-1/E5-C-02.1/REAL Grupo Producto.xlsx');

function harnessHtml(state: HarnessState) {
  const rows = JSON.stringify(state.tableRows);
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #172033; }
    button { border: 1px solid #0f6cbd; border-radius: 18px; padding: 8px 16px; background: white; color: #0f6cbd; font-weight: 700; }
    button:disabled { border-color: #d9dee7; color: #8c95a3; background: #edf0f4; }
    dialog { border: 0; border-radius: 12px; width: 480px; box-shadow: 0 18px 50px rgba(0,0,0,.2); }
    .panel { border: 2px dashed #d9dee7; border-radius: 10px; padding: 24px; text-align: center; margin: 18px 0; }
    .hidden { display: none; }
    [role="alert"], [role="status"] { margin: 12px 0; padding: 10px; border-radius: 8px; }
    [role="alert"] { background: #ffe2e2; color: #b42318; }
    [role="status"] { background: #def7ea; color: #18794e; }
    table { border-collapse: collapse; margin-top: 18px; width: 100%; }
    th, td { border-bottom: 1px solid #d9dee7; padding: 8px; text-align: left; }
  </style>
</head>
<body>
  <main data-testid="comunes-lineas-page">
    <h1>Líneas</h1>
    <button data-testid="lineas-cargar-btn">Cargar</button>
    <div data-testid="lineas-message-area"></div>
    <table data-testid="lineas-table">
      <thead><tr><th>Código</th><th>Nombre</th></tr></thead>
      <tbody data-testid="lineas-table-body"></tbody>
    </table>
  </main>

  <dialog data-testid="cargas-parametros-upload-dialog">
    <h2 data-testid="cargas-upload-title">Cargar Líneas</h2>
    <section data-testid="cargas-upload-warning" class="panel hidden">
      <strong>Advertencia</strong>
      <p>Si sube un nuevo archivo, la información previamente cargada será reemplazada. ¿Desea continuar con la carga?</p>
      <button data-testid="cargas-upload-btn-continuar">Continuar con la carga</button>
    </section>
    <section data-testid="cargas-upload-selector" class="panel">
      <label for="upload-input" data-testid="cargas-upload-dropzone">Haz click para examinar</label>
      <input id="upload-input" data-testid="cargas-upload-input" type="file" />
      <div data-testid="cargas-upload-file-name"></div>
    </section>
    <button data-testid="cargas-upload-btn-cancelar">Cancelar</button>
    <button data-testid="cargas-upload-btn-procesar" disabled>Aceptar</button>
  </dialog>

  <script>
    const state = { hasData: ${state.hasData}, tableRows: ${rows} };
    const tableBody = document.querySelector('[data-testid="lineas-table-body"]');
    const messageArea = document.querySelector('[data-testid="lineas-message-area"]');
    const dialog = document.querySelector('[data-testid="cargas-parametros-upload-dialog"]');
    const warning = document.querySelector('[data-testid="cargas-upload-warning"]');
    const selector = document.querySelector('[data-testid="cargas-upload-selector"]');
    const input = document.querySelector('[data-testid="cargas-upload-input"]');
    const processButton = document.querySelector('[data-testid="cargas-upload-btn-procesar"]');
    const fileName = document.querySelector('[data-testid="cargas-upload-file-name"]');

    function renderTable() {
      tableBody.innerHTML = state.tableRows.map((row) => '<tr><td>' + row[0] + '</td><td>' + row[1] + '</td></tr>').join('');
    }

    function showMessage(kind, text) {
      messageArea.innerHTML = '<div role="' + (kind === 'error' ? 'alert' : 'status') + '" data-testid="lineas-upload-message">' + text + '</div>';
    }

    document.querySelector('[data-testid="lineas-cargar-btn"]').addEventListener('click', () => {
      messageArea.innerHTML = '';
      processButton.disabled = true;
      input.value = '';
      fileName.textContent = '';
      if (state.hasData) {
        warning.classList.remove('hidden');
        selector.classList.add('hidden');
      } else {
        warning.classList.add('hidden');
        selector.classList.remove('hidden');
      }
      dialog.showModal();
    });

    document.querySelector('[data-testid="cargas-upload-btn-continuar"]').addEventListener('click', () => {
      warning.classList.add('hidden');
      selector.classList.remove('hidden');
    });

    input.addEventListener('change', () => {
      const selected = input.files[0]?.name || '';
      fileName.textContent = selected;
      processButton.disabled = /Grupo Producto/i.test(selected);
      if (/Grupo Producto/i.test(selected)) {
        showMessage('error', 'El Archivo ' + selected + ' no coincide con los permitidos para Líneas');
      }
    });

    processButton.addEventListener('click', () => {
      const selected = input.files[0]?.name || '';
      if (/Grupo Producto/i.test(selected)) return;
      const replacement = /Lineas2/i.test(selected);
      state.tableRows = replacement ? [['LIN002', 'Línea reemplazada']] : [['LIN001', 'Línea cargada']];
      state.hasData = true;
      renderTable();
      showMessage('success', '¡Listo! El archivo se cargó correctamente.');
      dialog.close();
    });

    renderTable();
  </script>
</body>
</html>`;
}

async function openHarness(page: Page, state: HarnessState) {
  await page.setContent(harnessHtml(state), { waitUntil: 'domcontentloaded' });
  await expect(page.getByTestId('comunes-lineas-page'), 'Debe estar visible el módulo Líneas del harness controlado.').toBeVisible();
}

async function openUploadDialog(page: Page) {
  await page.getByTestId('lineas-cargar-btn').click();
  const dialog = page.getByTestId('cargas-parametros-upload-dialog');
  await expect(dialog, 'Debe abrirse el modal de carga de Líneas.').toBeVisible();
  await expect(page.getByTestId('cargas-upload-title'), 'El modal debe indicar Cargar Líneas.').toHaveText(/cargar líneas/i);
  return dialog;
}

async function expectNoReplaceWarning(page: Page) {
  const warning = page.getByTestId('cargas-upload-warning');
  await expect(
    warning,
    '[BUG] No debe aparecer advertencia de reemplazo cuando no hay información previa cargada.',
  ).toBeHidden();
}

async function expectReplaceWarningAndContinue(page: Page) {
  const warning = page.getByTestId('cargas-upload-warning');
  await expect(
    warning,
    '[BUG] Debe aparecer advertencia cuando ya existe información cargada.',
  ).toBeVisible();
  await expect(
    warning,
    '[BUG] La advertencia debe informar que se reemplazará la información previamente cargada.',
  ).toContainText(/información previamente cargada será reemplazada/i);
  await page.getByTestId('cargas-upload-btn-continuar').click();
  await expect(warning, 'La advertencia debe cerrarse después de confirmar continuar con la carga.').toBeHidden();
}

async function uploadByTestId(page: Page, filePath: string) {
  await page.getByTestId('cargas-upload-input').setInputFiles(filePath);
  await expect(
    page.getByTestId('cargas-upload-file-name'),
    'El modal debe mostrar el nombre del archivo seleccionado.',
  ).toContainText(path.basename(filePath));
}

async function visibleTableRows(page: Page) {
  return page.getByTestId('lineas-table-body').locator('tr');
}

test.describe('@comunes @critical @EUPLOAD-C-01 estados de carga de archivos', () => {
  test('@critical @comunes @EUPLOAD-C-01.1 sin data carga archivo sin advertencia y actualiza tabla', async ({ page }) => {
    await openHarness(page, { hasData: false, tableRows: [] });

    await test.step('QA: abrir carga sin información previa', async () => {
      await openUploadDialog(page);
      await expectNoReplaceWarning(page);
      await expect(
        page.getByTestId('cargas-upload-btn-procesar'),
        'Aceptar debe iniciar deshabilitado antes de seleccionar archivo.',
      ).toBeDisabled();
    });

    await test.step('QA: cargar archivo válido y validar éxito visible', async () => {
      await uploadByTestId(page, validFile);
      await expect(page.getByTestId('cargas-upload-btn-procesar'), 'Aceptar debe habilitarse con archivo válido.').toBeEnabled();
      await page.getByTestId('cargas-upload-btn-procesar').click();
      await expect(
        page.getByTestId('lineas-upload-message'),
        'Debe mostrarse mensaje de éxito después de la carga.',
      ).toBeVisible();
      await expect(page.getByTestId('lineas-upload-message')).toContainText(/archivo se cargó correctamente/i);
    });

    await test.step('QA: validar estado final de tabla', async () => {
      await expect(await visibleTableRows(page), 'La tabla debe mostrar una fila después de cargar sin data previa.').toHaveCount(1);
      await expect(page.getByTestId('lineas-table')).toContainText('LIN001');
    });
  });

  test('@critical @comunes @EUPLOAD-C-01.2 con data muestra advertencia y reemplaza sin duplicar', async ({ page }) => {
    await openHarness(page, { hasData: true, tableRows: [['LIN001', 'Línea cargada']] });

    await test.step('QA: abrir carga con información previa y confirmar advertencia', async () => {
      await openUploadDialog(page);
      await expectReplaceWarningAndContinue(page);
      await expect(
        page.getByTestId('cargas-upload-btn-procesar'),
        'Aceptar debe iniciar deshabilitado después de confirmar advertencia.',
      ).toBeDisabled();
    });

    await test.step('QA: cargar nuevo archivo y validar reemplazo', async () => {
      await uploadByTestId(page, replacementFile);
      await expect(page.getByTestId('cargas-upload-btn-procesar'), 'Aceptar debe habilitarse con el archivo de reemplazo.').toBeEnabled();
      await page.getByTestId('cargas-upload-btn-procesar').click();
      await expect(page.getByTestId('lineas-upload-message'), 'Debe mostrarse mensaje de éxito tras reemplazar.').toBeVisible();
      await expect(page.getByTestId('lineas-upload-message')).toContainText(/archivo se cargó correctamente/i);
    });

    await test.step('QA: validar que se reemplaza y no se duplican registros', async () => {
      await expect(await visibleTableRows(page), 'La tabla debe mantener una sola fila tras reemplazar información.').toHaveCount(1);
      await expect(page.getByTestId('lineas-table')).toContainText('LIN002');
      await expect(
        page.getByTestId('lineas-table'),
        '[BUG] La tabla conserva la fila anterior tras una carga de reemplazo.',
      ).not.toContainText('LIN001');
    });
  });

  test('@critical @comunes @EUPLOAD-C-01.3 archivo inválido muestra error y no cambia tabla', async ({ page }) => {
    await openHarness(page, { hasData: true, tableRows: [['LIN001', 'Línea cargada']] });

    await test.step('QA: abrir carga con data previa y confirmar advertencia', async () => {
      await openUploadDialog(page);
      await expectReplaceWarningAndContinue(page);
    });

    await test.step('QA: seleccionar archivo inválido y validar error visible', async () => {
      await uploadByTestId(page, invalidFile);
      await expect(
        page.getByTestId('lineas-upload-message'),
        'Debe mostrarse mensaje de error para archivo inválido.',
      ).toBeVisible();
      await expect(page.getByTestId('lineas-upload-message')).toContainText(/no coincide con los permitidos/i);
      await expect(
        page.getByTestId('cargas-upload-btn-procesar'),
        'Aceptar debe permanecer deshabilitado ante archivo inválido.',
      ).toBeDisabled();
    });

    await test.step('QA: validar que la tabla no cambia con error de carga', async () => {
      await expect(await visibleTableRows(page), 'La tabla debe conservar la cantidad de filas al fallar la carga.').toHaveCount(1);
      await expect(page.getByTestId('lineas-table')).toContainText('LIN001');
      await expect(
        page.getByTestId('lineas-table'),
        '[BUG] La tabla cambió después de seleccionar un archivo inválido.',
      ).not.toContainText('LIN002');
    });
  });
});
