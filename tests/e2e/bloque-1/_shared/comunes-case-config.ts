export type ComunesUploadCaseConfig = {
 caseId: string;
 menu: string;
 route: string;
 modalPattern: RegExp;
 entityName: string;
 validFixtureDir?: string;
 validRelativePath?: string;
 invalidFixtureDir?: string;
 invalidRelativePath?: string;
 uploadName: string;
 headers: string[];
 minRows?: number;
 confirmReplaceWarning?: boolean;
};

export const comunesUploadCases: Record<string, ComunesUploadCaseConfig> = {
 lineas: {
 caseId: 'lineas',
 menu: 'Líneas',
 route: 'comunes/lineas',
 modalPattern: /cargar l[ií]neas/i,
 entityName: 'Líneas',
 validFixtureDir: 'fixtures/files/bloque-1/E4-C-02.1',
 validRelativePath: 'REAL Lineas.xlsx',
 invalidFixtureDir: 'fixtures/files/bloque-1/E5-C-02.1',
 invalidRelativePath: 'archivo-no-permitido.xlsx',
 uploadName: 'REAL Lineas.xlsx',
 headers: ['Codigo Linea', 'Nombre Linea', 'Estado'],
 minRows: 1,
 confirmReplaceWarning: true,
 },
 grupoProducto: {
 caseId: 'grupoProducto',
 menu: 'Grupo Producto',
 route: 'comunes/grupo-producto',
 modalPattern: /cargar (grupo producto|productos)/i,
 entityName: 'Grupo Producto',
 validFixtureDir: 'fixtures/files/bloque-1/E4-C-02.2',
 validRelativePath: 'REAL Grupo Producto.xlsx',
 invalidFixtureDir: 'fixtures/files/bloque-1/E5-C-02.2',
 invalidRelativePath: 'archivo-no-permitido.xlsx',
 uploadName: 'REAL Grupo Producto.xlsx',
 headers: ['Codigo Linea', 'Codigo Producto', 'Nombre Producto', 'Estado'],
 minRows: 1,
 confirmReplaceWarning: true,
 },
 canales: {
 caseId: 'canales',
 menu: 'Canales',
 route: 'comunes/canales',
 modalPattern: /cargar canales/i,
 entityName: 'Canales',
 validFixtureDir: 'fixtures/files/bloque-1/E4-C-02.3',
 validRelativePath: 'REAL Canales.xlsx',
 invalidFixtureDir: 'fixtures/files/bloque-1/E5-C-02.3',
 invalidRelativePath: 'archivo-no-permitido.xlsx',
 uploadName: 'REAL Canales.xlsx',
 headers: ['Codigo Canal', 'Nombre Canal', 'Estado'],
 minRows: 1,
 confirmReplaceWarning: true,
 },
 subcanales: {
 caseId: 'subcanales',
 menu: 'Subcanales',
 route: 'comunes/subcanales',
 modalPattern: /cargar subcanales/i,
 entityName: 'Subcanales',
 validFixtureDir: 'fixtures/files/bloque-1/E4-C-02.4',
 validRelativePath: 'REAL Subcanales.xlsx',
 invalidFixtureDir: 'fixtures/files/bloque-1/E5-C-02.4',
 invalidRelativePath: 'archivo-no-permitido.xlsx',
 uploadName: 'REAL Subcanales.xlsx',
 headers: ['Codigo Canal', 'Codigo Subcanal', 'Nombre Subcanal', 'Estado'],
 minRows: 1,
 confirmReplaceWarning: true,
 },
 maestroUoa: {
 caseId: 'maestroUoa',
 menu: 'Maestro UoA',
 route: 'comunes/maestro-uoa',
 modalPattern: /cargar maestro uo?a/i,
 entityName: 'Maestro UoA',
 validFixtureDir: 'fixtures/files/bloque-1/E4-C-02.5',
 validRelativePath: 'REAL Maestro UoA.xlsx',
 invalidFixtureDir: 'fixtures/files/bloque-1/E5-C-02.5',
 invalidRelativePath: 'archivo-no-permitido.xlsx',
 uploadName: 'REAL Maestro UoA.xlsx',
 headers: ['UoA Periodo', 'Periodo', 'Descripcion', 'Estado'],
 minRows: 1,
 confirmReplaceWarning: true,
 },
 configuracionParches: {
 caseId: 'configuracionParches',
 menu: 'Configuración de Parches',
 route: 'comunes/configuracion-parches',
 modalPattern: /cargar (configuraci[oó]n de )?parches/i,
 entityName: 'Configuración de Parches',
 validFixtureDir: 'fixtures/files/bloque-1/E4-C-02.7',
 validRelativePath: 'REAL Configuracion de Parches.xlsx',
 invalidFixtureDir: 'fixtures/files/bloque-1/E5-C-02.6',
 invalidRelativePath: 'archivo-no-permitido.xlsx',
 uploadName: 'REAL Configuración de Parches.xlsx',
 headers: ['Atribuible', 'GA/GM', 'Porcentaje', 'Estado'],
 minRows: 1,
 confirmReplaceWarning: true,
 },
};
