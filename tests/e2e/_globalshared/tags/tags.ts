export type BloqueTag = '@bloque1' | '@bloque2' | '@bloque3';

export type FlowTag =
 | '@login'
 | '@distribucion'
 | '@upload_valido'
 | '@upload_invalido'
 | '@registrar'
 | '@editar'
 | '@eliminar'
 | '@busqueda'
 | '@columnas'
 | '@paginacion'
 | '@procesos'
 | '@download_catalogo'
 | '@download_reporte';

export type BuildTagsConfig = {
 bloque: BloqueTag;
 caseId: string;
 flowTag: FlowTag;
};

export const FLOW_TAGS: readonly FlowTag[] = [
 '@login',
 '@distribucion',
 '@upload_valido',
 '@upload_invalido',
 '@registrar',
 '@editar',
 '@eliminar',
 '@busqueda',
 '@columnas',
 '@paginacion',
 '@procesos',
 '@download_catalogo',
 '@download_reporte',
];

const BLOQUE_TAGS: readonly BloqueTag[] = ['@bloque1', '@bloque2', '@bloque3'];

export function buildTags(config: BuildTagsConfig) {
 const { bloque, caseId, flowTag } = config;

 if (!BLOQUE_TAGS.includes(bloque)) {
 throw new Error(`[tags] Bloque invalido: ${bloque}`);
 }

 if (!caseId?.trim()) {
 throw new Error('[tags] caseId es obligatorio');
 }

 if (!FLOW_TAGS.includes(flowTag)) {
 throw new Error(`[tags] flowTag invalido: ${flowTag}`);
 }

 return [bloque, `@${caseId.trim()}`, flowTag].join(' ');
}

export function flowTagForUploadResult(expectedResult: string): FlowTag {
 return expectedResult === 'success' ? '@upload_valido' : '@upload_invalido';
}
