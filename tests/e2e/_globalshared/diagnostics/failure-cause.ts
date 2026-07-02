export type FailureCause =
 | 'AUTH_FAILURE'
 | 'NAV_FAILURE'
 | 'PERMISSION_FAILURE'
 | 'DATA_FAILURE'
 | 'PROCESSING_TIMEOUT'
 | 'ASSERTION_FAILURE'
 | 'ENV_FAILURE';

export const FAILURE_PHASE: Record<FailureCause, string> = {
 AUTH_FAILURE: '[AUTH] Validar sesion del usuario',
 NAV_FAILURE: '[NAV] Abrir modulo y vista',
 PERMISSION_FAILURE: '[PERMISSION] Validar permiso o accion disponible',
 DATA_FAILURE: '[DATA] Preparar archivo o datos',
 PROCESSING_TIMEOUT: '[VAL] Confirmar resultado de proceso',
 ASSERTION_FAILURE: '[VAL] Validar resultado esperado',
 ENV_FAILURE: '[ENV] Validar estabilidad del entorno',
};
