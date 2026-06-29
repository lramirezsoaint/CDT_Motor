import type { Page, TestInfo } from '@playwright/test';
import { getRoleByProject, ROLES } from '@config/roles';
import { FAILURE_PHASE, FailureCause } from './failure-cause';

type DiagnosticContext = {
  caseId: string;
  phase: string;
  cause: FailureCause;
  message: string;
  expectedProject: string;
  actualProject: string;
  fileName?: string;
  section?: string;
  view?: string;
  role?: string;
  currentUrl?: string;
};

type DiagnosticInput = {
  page?: Page;
  testInfo: TestInfo;
  originalError: unknown;
};

const PROJECT_BY_ROLE: Array<{ pattern: RegExp; project: string; role: string }> = ROLES.map(role => ({
  pattern: new RegExp(role.diagnosticPatterns.map(p => p.source).join('|'), 'i'),
  project: role.project,
  role: role.displayName,
}));

export function buildDiagnosticError(context: DiagnosticContext, originalError: unknown): Error {
  const optionalLines = [
    context.fileName ? `Archivo: ${context.fileName}` : undefined,
    context.section ? `Seccion: ${context.section}` : undefined,
    context.view ? `Vista: ${context.view}` : undefined,
    context.role ? `Rol esperado: ${context.role}` : undefined,
    context.currentUrl ? `URL final: ${context.currentUrl}` : undefined,
  ].filter(Boolean);

  const error = new Error(
    [
      'DIAGNOSTICO',
      `Caso: ${context.caseId}`,
      `Fase: ${context.phase}`,
      `Causa probable: ${context.cause}`,
      `Mensaje: ${context.message}`,
      ...optionalLines,
      `Proyecto esperado: ${context.expectedProject}`,
      `Proyecto usado: ${context.actualProject}`,
    ].join('\n'),
  );
  error.stack = '';
  return error;
}

export function buildDiagnosticErrorFromTestInfo(input: DiagnosticInput): Error {
  const testIdentity = getTestIdentity(input.testInfo);
  const currentUrl = input.page?.url();
  const cause = classifyFailure(input.originalError, [testIdentity, currentUrl].filter(Boolean).join('\n'));
  const expectedProject = inferExpectedProject(testIdentity, input.testInfo.project.name);

  return buildDiagnosticError(
    {
      caseId: inferCaseId(input.testInfo),
      phase: FAILURE_PHASE[cause],
      cause,
      message: buildCauseMessage(cause),
      expectedProject: expectedProject.project,
      actualProject: input.testInfo.project.name,
      role: expectedProject.role,
      currentUrl,
    },
    input.originalError,
  );
}

export function classifyFailure(originalError: unknown, testIdentity = ''): FailureCause {
  const detail = `${formatOriginalError(originalError)}\n${testIdentity}`.toLowerCase();

  if (
    detail.includes('login.microsoftonline.com') ||
    detail.includes('microsoft') ||
    detail.includes('i0116') ||
    detail.includes('i0118') ||
    detail.includes('tohaveurl') && detail.includes('distribuciones')
  ) {
    return 'AUTH_FAILURE';
  }

  if (
    detail.includes('no hay distribuciones disponibles') ||
    detail.includes('session expired') ||
    detail.includes('sesion expirada') ||
    detail.includes('modal blanco') ||
    detail.includes('blank')
  ) {
    return 'ENV_FAILURE';
  }

  if (
    detail.includes('enoent') ||
    detail.includes('no such file') ||
    detail.includes('setfiles') ||
    detail.includes('filechooser') ||
    detail.includes('fixture') ||
    detail.includes('archivo no existe')
  ) {
    return 'DATA_FAILURE';
  }

  if (
    detail.includes('procesando archivo') ||
    detail.includes('subir otro archivo') ||
    detail.includes('descargar errores') ||
    detail.includes('processing') ||
    detail.includes('expect.poll') ||
    detail.includes('toBe(true)'.toLowerCase())
  ) {
    return 'PROCESSING_TIMEOUT';
  }

  if (
    detail.includes('permission') ||
    detail.includes('unauthorized') ||
    detail.includes('forbidden') ||
    detail.includes('no se le visualiza') ||
    detail.includes('permiso')
  ) {
    return 'PERMISSION_FAILURE';
  }

  if (
    detail.includes('getbyrole') && (detail.includes('link') || detail.includes('menu')) ||
    detail.includes('getbytext') && (detail.includes('comunes') || detail.includes('aprovisionamiento') || detail.includes('parametriz')) ||
    detail.includes('locator.click') && detail.includes('waiting for')
  ) {
    return 'NAV_FAILURE';
  }

  return 'ASSERTION_FAILURE';
}

function buildCauseMessage(cause: FailureCause): string {
  switch (cause) {
    case 'AUTH_FAILURE':
      return 'El test no logro validar una sesion autenticada o termino en el flujo de login.';
    case 'NAV_FAILURE':
      return 'No se encontro o no se pudo abrir el menu, modulo o vista esperada.';
    case 'PERMISSION_FAILURE':
      return 'La accion o vista esperada no esta disponible para el rol usado.';
    case 'DATA_FAILURE':
      return 'El archivo, fixture o dato requerido por el caso no esta disponible o no es valido.';
    case 'PROCESSING_TIMEOUT':
      return 'El proceso no llego al estado final esperado dentro del tiempo maximo.';
    case 'ENV_FAILURE':
      return 'El entorno quedo en un estado no apto para validar el caso.';
    default:
      return 'La UI no mostro el resultado esperado por el caso.';
  }
}

function inferCaseId(testInfo: TestInfo): string {
  const identity = getTestIdentity(testInfo);
  const tagMatch = identity.match(/@([A-Z]\d+(?:-[A-Z0-9]+)*(?:\.\d+)*)/i);
  if (tagMatch) return tagMatch[1];

  const pathMatch = testInfo.file.match(/[\\/](E\d+(?:-[A-Z0-9]+)*(?:\.\d+)*)[\\/]/i);
  if (pathMatch) return pathMatch[1];

  return 'SIN_CASE_ID';
}

function inferExpectedProject(testIdentity: string, actualProject: string): { project: string; role: string } {
  const match = PROJECT_BY_ROLE.find(({ pattern }) => pattern.test(testIdentity));
  if (match) return { project: match.project, role: match.role };

  const actualRole = getRoleByProject(actualProject);
  if (actualRole) return { project: actualRole.project, role: actualRole.displayName };

  return { project: 'No inferido', role: 'No inferido' };
}

function getTestIdentity(testInfo: TestInfo): string {
  return `${testInfo.file}\n${testInfo.title}\n${testInfo.titlePath.join(' ')}`;
}

function formatOriginalError(originalError: unknown): string {
  if (originalError && typeof originalError === 'object') {
    const obj = originalError as Record<string, unknown>;
    const message = obj.message ? String(obj.message) : '';
    const stack = obj.stack ? String(obj.stack) : '';
    const value = obj.value ? String(obj.value) : '';

    const FRAMEWORK_PATTERN = /(?:diagnostic-error|base\.fixture|node_modules|\/_globalshared\/)/i;
    const cleanedStack = stack
      .split('\n')
      .filter(line => !FRAMEWORK_PATTERN.test(line))
      .join('\n');

    const parts = [message];
    if (cleanedStack && cleanedStack.trim() !== message.trim()) {
      parts.push(cleanedStack);
    }
    if (value && value !== message) {
      parts.push(value);
    }

    return parts.filter(Boolean).join('\n\n');
  }
  return String(originalError);
}
