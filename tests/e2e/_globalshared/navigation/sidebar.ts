import { expect, Page } from '@fixtures/base.fixture';

export async function openSidebarSection(page: Page, sectionName: string): Promise<void> {
 const section = page
 .getByRole('button', { name: new RegExp(sectionName, 'i') })
 .or(page.getByText(new RegExp(sectionName, 'i')))
 .first();

 await expect(section, `Debe existir la seccion ${sectionName} en el sidebar.`).toBeVisible({ timeout: 15_000 });
 await section.click();
 await page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
}

export async function openSidebarView(page: Page, sectionName: string, viewName: string): Promise<void> {
 await openSidebarSection(page, sectionName);

 const targetLink = page.getByRole('link', { name: new RegExp(viewName, 'i') }).first();
 await expect(targetLink, `Debe existir la vista ${viewName} dentro de ${sectionName}.`).toBeVisible({ timeout: 15_000 });
 await targetLink.click();
 await page.getByText(/Cargando/i).waitFor({ state: 'hidden', timeout: 15_000 }).catch(() => undefined);
}
