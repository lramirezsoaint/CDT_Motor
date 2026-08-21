import 'dotenv/config';
import { TrelloHttpClient, validateTrelloConfig, type TrelloClient } from '../../integrations/incidents/providers/trello/trello.client';
import type { TrelloConfig } from '../../integrations/incidents/providers/trello/trello.types';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: TrelloConfig) => Pick<TrelloClient, 'validateConnection'>;
};

export async function runTrelloValidationHarness(options: HarnessOptions = {}) {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.TRELLO_RUN_REAL_VALIDATION !== 'true') {
    logger.log('[TRELLO VALIDATION] DISABLED');
    return { status: 'DISABLED' as const };
  }

  const config = readTrelloConfig(env);
  const configError = validateTrelloConfig(config);
  if (configError) {
    logger.error('[TRELLO VALIDATION] INVALID_CONFIG');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'INVALID_CONFIG' as const, message: configError };
  }

  const client = options.clientFactory?.(config) ?? new TrelloHttpClient(config);
  const validation = await client.validateConnection();

  logger.log(`[TRELLO VALIDATION] ${validation.status}`);
  if (validation.status === 'VALID') {
    logger.log(`boardId=${validation.board.id}`);
    logger.log(`boardName=${validation.board.name}`);
    logger.log(`listId=${validation.list.id}`);
    logger.log(`listName=${validation.list.name}`);
  } else {
    if (validation.statusCode) logger.error(`statusCode=${validation.statusCode}`);
    if (validation.message) logger.error(`message=${sanitize(validation.message)}`);
  }

  return validation;
}

export function readTrelloConfig(env: NodeJS.ProcessEnv): TrelloConfig {
  return {
    baseUrl: env.TRELLO_BASE_URL?.trim() || 'https://api.trello.com/1',
    boardId: env.TRELLO_BOARD_ID?.trim() ?? '',
    listId: env.TRELLO_LIST_ID?.trim() ?? '',
    apiKey: env.TRELLO_API_KEY?.trim() ?? '',
    token: env.TRELLO_TOKEN?.trim() ?? '',
    requestTimeoutMs: readPositiveNumber(env.INCIDENT_REQUEST_TIMEOUT_MS, 15_000),
  };
}

function readPositiveNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value ?? '');
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function sanitize(value: string): string {
  return value
    .replace(/\b(TRELLO_API_KEY|TRELLO_TOKEN|key|token|Authorization)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .slice(0, 300);
}

if (require.main === module) {
  runTrelloValidationHarness().catch((error) => {
    console.error('[TRELLO VALIDATION] HTTP_ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
