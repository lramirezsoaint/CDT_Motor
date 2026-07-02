import fs from 'fs';
import { Download, expect } from '@fixtures/base.fixture';

export async function expectValidExcelDownload(download: Download): Promise<void> {
 expect(download, 'Debe iniciarse la descarga del archivo.').toBeTruthy();

 const filename = download.suggestedFilename();
 expect(filename, 'El archivo descargado debe tener un nombre valido.').toBeTruthy();
 expect(filename.toLowerCase(), `El archivo descargado debe ser un Excel. Recibido: ${filename}`).toMatch(/\.xlsx?$/i);

 const failure = await download.failure();
 expect(failure, 'La descarga no debe fallar.').toBeNull();

 const downloadPath = await download.path().catch(() => null);
 if (downloadPath) {
 const stats = fs.statSync(downloadPath);
 expect(stats.size, `El archivo descargado debe tener contenido > 0. Recibido: ${stats.size} bytes`).toBeGreaterThan(0);
 }
}
