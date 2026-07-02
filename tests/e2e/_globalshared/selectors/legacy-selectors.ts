/**
 * Selectores legacy tomados del framework actual.
 * TODO: reemplazar por data-testid o getByRole/getByLabel cuando Front los exponga.
 */
export const legacySelectors = {
 sidebar: {
 comunesToggle: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/button',
 lineas: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[1]/a/span',
 grupoProducto: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[2]/a/span',
 canales: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[3]/a/span',
 subcanales: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[4]/a/span',
 maestroUoa: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[5]/a/span',
 unidadesCuenta: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[6]/a/span',
 configuracionParches: 'xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div[1]/ul/div[1]/li/div/ul/li[7]/a/span',
 },
 distribucion: {
 nuevaDistribucionButton: 'xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[2]/div/button[1]',
 buscarInput: 'xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[1]/div/div/div[1]/div/input',
 primerRegistroTabla: 'xpath=/html/body/div[2]/div/main/div/div/div/div[2]/div/div/div[1]/table/tbody/tr[1]',
 },
 comunes: {
 buscarInput: 'xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[1]/div/div/div[1]/div/input',
 agregarButton: 'xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[2]/div/button[1]',
 exportarButton: 'xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[2]/div/button[3]',
 exportarButtonMaestro: 'xpath=/html/body/div[2]/div/main/div/div/div/div[1]/div[2]/div[4]/div/button',
 tablaResultados: 'xpath=/html/body/div[2]/div/main/div/div/div/div[2]/div',
 },
};
