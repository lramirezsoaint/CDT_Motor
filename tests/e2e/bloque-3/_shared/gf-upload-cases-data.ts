import { GfUploadCase } from '../_shared/gf-upload';

export interface GfDownloadCase {
 caseId: string;
 section: string;
 view: string;
 entityName: string;
}

export const UPLOAD_CASES: (GfUploadCase & { order: number })[] = [
 // Parametrización
 { order: 1, caseId: 'E4-GF-01', section: 'Parametrización', view: 'Cuentas Contables', entityName: 'Cuentas Contables', fileName: 'REAL Cuentas Contables GF.xlsx', modalTitle: /cargar cuentas contables/i },
 { order: 2, caseId: 'E4-GF-01.2', section: 'Parametrización', view: 'Centros', entityName: 'Centros', fileName: 'REAL Centros GF.xlsx', modalTitle: /cargar centros/i },
 { order: 3, caseId: 'E4-GF-01.3', section: 'Parametrización', view: 'Maestro Producto', entityName: 'Maestro Reservas Producto', fileName: 'REAL Maestro Reservas Producto GF.xlsx', modalTitle: /cargar maestro/i },
 // Aprovisionamiento
 { order: 4, caseId: 'E4-GF-02.3', section: 'Aprovisionamiento', view: 'AMED', entityName: 'AMED', fileName: 'REAL AMED GF.xlsx', modalTitle: /cargar amed/i },
 { order: 5, caseId: 'E4-GF-02.4', section: 'Aprovisionamiento', view: 'AP Vida', entityName: 'AP Vida', fileName: 'REAL AP Vida GF.xlsx', modalTitle: /cargar ap vida/i },
 { order: 6, caseId: 'E4-GF-02.5', section: 'Aprovisionamiento', view: 'Driver Producto', entityName: 'Driver Producto', fileName: 'REAL Driver Producto GF.xlsx', modalTitle: /cargar driver producto/i },
 { order: 7, caseId: 'E4-GF-02.6', section: 'Aprovisionamiento', view: 'Driver Subcanal', entityName: 'Driver Subcanal', fileName: 'REAL Driver Subcanal GF.xlsx', modalTitle: /cargar driver subcanal/i },
 { order: 8, caseId: 'E4-GF-02.7', section: 'Aprovisionamiento', view: 'Driver CC Vida', entityName: 'Driver CC Vida', fileName: 'REAL Driver CC VIDA GF.xlsx', modalTitle: /cargar driver cc vida/i },
 { order: 9, caseId: 'E4-GF-02.8', section: 'Aprovisionamiento', view: 'Maestro de Negocio y Embebidos', entityName: 'Maestro de Negocio y Embebidos', fileName: 'REAL Maestro Negocio y Embebidos GF.xlsx', modalTitle: /cargar maestro/i },
 // Asignaciones
 { order: 10, caseId: 'E4-GF-03.1', section: 'Asignaciones', view: 'Especiales NIIF', entityName: 'Especiales NIIF', fileName: 'REAL Especiales NIIF GF.xlsx', modalTitle: /cargar especiales niif/i },
 { order: 11, caseId: 'E4-GF-03.2', section: 'Asignaciones', view: 'Driver Reservas a UoA', entityName: 'Driver UoA VIDA', fileName: 'REAL Driver UOA VIDA GF.xlsx', modalTitle: /cargar driver/i },
 { order: 12, caseId: 'E4-GF-03.3', section: 'Asignaciones', view: 'Distribución UoA Generales Multiramo', entityName: 'Distribución UoA Generales Multiramo', fileName: 'REAL Distribucion UOA Generales Multiramo GF.xlsx', modalTitle: /cargar distribuci[oó]n uoa/i },
];

export const DOWNLOAD_CASES: GfDownloadCase[] = [
 { caseId: 'E10-GF-01.1', section: 'Parametrización', view: 'Cuentas Contables', entityName: 'Cuentas Contables' },
 { caseId: 'E10-GF-01.2', section: 'Parametrización', view: 'Centros', entityName: 'Centros' },
 { caseId: 'E10-GF-01.3', section: 'Aprovisionamiento', view: 'Exactus', entityName: 'Exactus' },
 { caseId: 'E10-GF-02.1', section: 'Aprovisionamiento', view: 'Exactus', entityName: 'Exactus' },
 { caseId: 'E10-GF-02.2', section: 'Aprovisionamiento', view: 'Driver Producto', entityName: 'Driver Producto' },
 { caseId: 'E10-GF-02.3', section: 'Aprovisionamiento', view: 'Driver Subcanal', entityName: 'Driver Subcanal' },
 { caseId: 'E10-GF-02.4', section: 'Aprovisionamiento', view: 'Drivers CC Vida', entityName: 'Drivers CC Vida' },
 { caseId: 'E10-GF-02.5', section: 'Aprovisionamiento', view: 'Maestro de Negocio Embebidos', entityName: 'Maestro de Negocio Embebidos' },
 { caseId: 'E10-GF-02.6', section: 'Aprovisionamiento', view: 'AMED', entityName: 'AMED' },
 { caseId: 'E10-GF-02.7', section: 'Aprovisionamiento', view: 'AP Vida', entityName: 'AP Vida' },
 { caseId: 'E10-GF-03.1', section: 'Asignaciones', view: 'Especiales NIIF', entityName: 'Especiales NIIF' },
 { caseId: 'E10-GF-03.2', section: 'Asignaciones', view: 'Driver UoA - VIDA', entityName: 'Driver UoA - VIDA' },
 { caseId: 'E10-GF-03.3', section: 'Asignaciones', view: 'Distribución UoA Generales Multiramo', entityName: 'Distribución UoA Generales Multiramo' },
];
