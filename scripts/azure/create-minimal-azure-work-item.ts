import 'dotenv/config';
import {
  AzureDevOpsRequestError,
  createAzureBug,
  getAzureWorkItems,
  loadIncidentRuntimeConfig,
  queryAzureWorkItems,
} from '../../azure-devops/azure-devops.client';
import type { AzureJsonPatchOperation } from '../../azure-devops/azure-devops.mapper';
import type { IncidentRuntimeConfig } from '../../integrations/incidents/incident.types';

const REAL_CREATE_TITLE = '[QA-AUTO-TEST] Validacion tecnica integracion Azure DevOps';
const MINIMAL_PATCH: AzureJsonPatchOperation[] = [
  {
    op: 'add',
    path: '/fields/System.Title',
    value: REAL_CREATE_TITLE,
  },
];

async function main() {
  if (process.env.AZURE_DEVOPS_RUN_REAL_CREATE !== 'true') {
    console.log('REAL CREATE DISABLED');
    console.log("Set AZURE_DEVOPS_RUN_REAL_CREATE='true' para ejecutar una unica creacion real minima.");
    return;
  }

  const config = loadIncidentRuntimeConfig();
  validateConfig(config);

  const requestBody = JSON.stringify(MINIMAL_PATCH);
  const started = Date.now();

  console.log('[AZURE REAL CREATE]');
  console.log('validateOnly=false');
  console.log(`title=${REAL_CREATE_TITLE}`);
  console.log(`bodyIsArray=${Array.isArray(MINIMAL_PATCH)}`);
  console.log(`operations=${MINIMAL_PATCH.length}`);
  console.log(`requestBodyBytes=${Buffer.byteLength(requestBody, 'utf8')}`);
  console.log(`requestStartedAt=${new Date(started).toISOString()}`);

  try {
    const created = await createAzureBug(MINIMAL_PATCH, config, { validateOnly: false });

    console.log('REAL CREATE RESULT');
    console.log('status=CREATED');
    console.log(`statusCode=${created.__statusCode ?? 'N/D'}`);
    console.log(`workItemId=${created.id}`);
    console.log(`elapsedMs=${Date.now() - started}`);
  } catch (error) {
    const elapsedMs = Date.now() - started;
    const timeout = isTimeoutError(error);

    console.log('REAL CREATE RESULT');
    console.log('status=ERROR');
    console.log(`type=${timeout ? 'TIMEOUT' : 'HTTP_OR_CLIENT_ERROR'}`);
    console.log(`statusCode=${error instanceof AzureDevOpsRequestError ? error.statusCode ?? 'N/D' : 'N/D'}`);
    console.log(`message=${sanitizeMessage(error instanceof Error ? error.message : String(error))}`);
    console.log(`elapsedMs=${elapsedMs}`);

    if (timeout) {
      const found = await findWorkItemByTitle(config, REAL_CREATE_TITLE);

      console.log('[AZURE REAL CREATE TIMEOUT CHECK]');
      console.log(`workItemFoundAfterTimeout=${Boolean(found)}`);
      if (found) {
        console.log(`workItemId=${found.id}`);
      }
    }
  }
}

function validateConfig(config: IncidentRuntimeConfig): void {
  const missing = [
    !config.azureOrganization ? 'AZURE_DEVOPS_ORGANIZATION' : '',
    !config.azureProject ? 'AZURE_DEVOPS_PROJECT' : '',
    !config.hasAzurePat ? 'AZURE_DEVOPS_PAT' : '',
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(`Configuracion incompleta: ${missing.join(', ')}`);
  }
}

async function findWorkItemByTitle(config: IncidentRuntimeConfig, title: string): Promise<{ id: number } | undefined> {
  const wiql = [
    'SELECT [System.Id], [System.Title], [System.State]',
    'FROM WorkItems',
    'WHERE [System.TeamProject] = @project',
    "AND [System.WorkItemType] = 'Bug'",
    `AND [System.Title] = '${escapeWiql(title)}'`,
    'ORDER BY [System.CreatedDate] DESC',
  ].join(' ');
  const queryResult = await queryAzureWorkItems(config, wiql);
  const ids = (queryResult.workItems ?? []).map((item) => item.id).filter((id) => Number.isFinite(id));
  const items = await getAzureWorkItems(config, ids.slice(0, 1));

  return items[0] ? { id: items[0].id } : undefined;
}

function isTimeoutError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /timeout|AbortError|aborted/i.test(message);
}

function escapeWiql(value: string): string {
  return value.replace(/'/g, "''");
}

function sanitizeMessage(value: string): string {
  return value
    .replace(/\b(AZURE_DEVOPS_PAT|PAT|password|secret|access_token|refresh_token)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\b(Basic|Bearer)\s+[A-Za-z0-9._~+/=-]+/gi, '$1 [REDACTED]');
}

main().catch((error) => {
  console.error('REAL CREATE RESULT');
  console.error('status=ERROR');
  console.error(`message=${sanitizeMessage(error instanceof Error ? error.message : String(error))}`);
  process.exitCode = 1;
});
