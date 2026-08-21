import 'dotenv/config';
import { textToAdf } from '../../integrations/incidents/providers/jira/jira-adf';
import { JiraHttpClient, validateJiraConfig, type JiraClient } from '../../integrations/incidents/providers/jira/jira.client';
import { JiraRequestError, type JiraConfig, type JiraCreateIssueInput } from '../../integrations/incidents/providers/jira/jira.types';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: JiraConfig) => Pick<JiraClient, 'createIssue'>;
};

type HarnessResult =
  | { status: 'DISABLED' }
  | { status: 'CREATED'; issueKey: string; issueId?: string; issueUrl?: string }
  | { status: 'ERROR'; statusCode?: number; message: string };

const SUMMARY = '[QA-AUTO] Prueba integración Jira';
const DESCRIPTION = [
  'Prueba técnica controlada de integración Jira desde Playwright QA Automation.',
  '',
  'QA-AUTO-TEST: MINIMAL-CREATE',
].join('\n');

export async function runMinimalJiraCreateHarness(options: HarnessOptions = {}): Promise<HarnessResult> {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.JIRA_RUN_REAL_CREATE !== 'true' || env.JIRA_VALIDATE_ONLY !== 'false') {
    logger.log('[JIRA CREATE] DISABLED');
    return { status: 'DISABLED' };
  }

  const config = readJiraConfig(env);
  const configError = validateJiraConfig(config);
  if (configError) {
    logger.error('[JIRA CREATE] ERROR');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'ERROR', message: configError };
  }

  const client = options.clientFactory?.(config) ?? new JiraHttpClient(config);

  try {
    const issue = await client.createIssue(buildMinimalIssue(config));
    const issueUrl = `${config.baseUrl.replace(/\/+$/g, '')}/browse/${issue.key}`;
    logger.log('[JIRA CREATE] CREATED');
    logger.log(`issueKey=${issue.key}`);
    if (issue.id) {
      logger.log(`issueId=${issue.id}`);
    }
    logger.log(`issueUrl=${issueUrl}`);
    return { status: 'CREATED', issueKey: issue.key, issueId: issue.id, issueUrl };
  } catch (error) {
    const statusCode = error instanceof JiraRequestError ? error.statusCode : undefined;
    const message = error instanceof Error ? error.message : String(error);
    logger.error('[JIRA CREATE] ERROR');
    if (statusCode) {
      logger.error(`statusCode=${statusCode}`);
    }
    logger.error(`message=${sanitize(message)}`);
    return { status: 'ERROR', statusCode, message };
  }
}

export function buildMinimalIssue(config: JiraConfig): JiraCreateIssueInput {
  return {
    fields: {
      project: { key: config.projectKey },
      issuetype: { name: config.issueType },
      summary: SUMMARY,
      description: textToAdf(DESCRIPTION),
      labels: ['QA-AUTO'],
    },
  };
}

function readJiraConfig(env: NodeJS.ProcessEnv): JiraConfig {
  return {
    baseUrl: env.JIRA_BASE_URL?.trim() ?? '',
    projectKey: env.JIRA_PROJECT_KEY?.trim() ?? '',
    email: env.JIRA_EMAIL?.trim() ?? '',
    apiToken: env.JIRA_API_TOKEN?.trim() ?? '',
    issueType: env.JIRA_ISSUE_TYPE?.trim() ?? '',
    requestTimeoutMs: readPositiveInt(env.INCIDENT_REQUEST_TIMEOUT_MS, 15_000),
  };
}

function readPositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function sanitize(value: string): string {
  return value
    .replace(/\b(JIRA_API_TOKEN|apiToken|token|Authorization)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\bBasic\s+[A-Za-z0-9+/=]+/gi, 'Basic [REDACTED]')
    .slice(0, 300);
}

if (require.main === module) {
  runMinimalJiraCreateHarness().catch((error) => {
    console.error('[JIRA CREATE] ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
