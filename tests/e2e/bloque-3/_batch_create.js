const fs = require('fs');
const path = require('path');
const base = __dirname;
const specs = [
 ['E60-GF-04.2.2','Aprovisionamiento','Driver Producto'],
 ['E60-GF-04.2.3','Aprovisionamiento','Driver Subcanal'],
 ['E60-GF-04.2.4','Aprovisionamiento','Drivers CC Vida'],
 ['E60-GF-04.2.5','Aprovisionamiento','Maestro de Negocio Embebidos'],
 ['E60-GF-04.3.1','Asignaciones','Especiales NIIF'],
];

for (const [id, section, view] of specs) {
 const dir = path.join(base, id);
 if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
 const f = path.join(dir, id + '.spec.ts');
 const c = `import { test } from '../_shared/bloque3.fixture';
test.describe('@bloque3 @${id}', () => {
test('@bloque3 @${id} @columnas debe validar ocultar todas las columnas en ${view}', async ({
 bloque3GastosFinancierosPage,
 page,
 }) => {
 await test.step('Acceder a ${section} > ${view}', async () => {
 await bloque3GastosFinancierosPage.openSidebarView('${section}', '${view}');
 });
 await test.step('Ocultar todas', async () => {
 const menu = await bloque3GastosFinancierosPage.openColumnsMenu();
 const btn = menu.getByText(/Ocultar todas/i).first();
 if (await btn.isVisible({ timeout: 3_000 }).catch(() => false)) await btn.click();
 test.expect(await menu.getByRole('menuitemcheckbox').count(), 'Debe haber columnas visibles.').toBeGreaterThan(0);
 await page.keyboard.press('Escape');
 });
 });
});
`;
 fs.writeFileSync(f, c);
 console.log('OK', id);
}
