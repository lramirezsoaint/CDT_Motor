import 'dotenv/config';
import { TrelloHttpClient, type TrelloClient } from '../../integrations/incidents/providers/trello/trello.client';
import { TrelloRequestError, type TrelloConfig, type TrelloList } from '../../integrations/incidents/providers/trello/trello.types';
import { readTrelloConfig } from './validate-trello-connection';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: TrelloConfig) => Pick<TrelloClient, 'getBoardLists'>;
};

type HarnessResult =
  | { status: 'DISABLED' }
  | { status: 'INVALID_CONFIG'; message: string }
  | { status: 'VALID'; boardId: string; lists: TrelloList[] }
  | { status: 'AUTH_ERROR' | 'BOARD_NOT_FOUND' | 'HTTP_ERROR'; statusCode?: number; message: string };

export async function runTrelloListBoardListsHarness(options: HarnessOptions = {}): Promise<HarnessResult> {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.TRELLO_RUN_LISTS !== 'true') {
    logger.log('[TRELLO LISTS] DISABLED');
    return { status: 'DISABLED' };
  }

  const config = readTrelloConfig(env);
  const configError = validateListConfig(config);
  if (configError) {
    logger.error('[TRELLO LISTS] INVALID_CONFIG');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'INVALID_CONFIG', message: configError };
  }

  const client = options.clientFactory?.(config) ?? new TrelloHttpClient(config);
  try {
    const lists = await client.getBoardLists(config.boardId);
    logger.log('[TRELLO LISTS]');
    logger.log(`boardId=${config.boardId}`);
    logger.log('');
    logger.log('availableLists:');
    logger.log('');
    for (const list of lists) {
      logger.log(`- name=${list.name}`);
      logger.log(`  id=${list.id}`);
    }
    return { status: 'VALID', boardId: config.boardId, lists };
  } catch (error) {
    const mapped = mapListError(error);
    logger.error(`[TRELLO LISTS] ${mapped.status}`);
    if (mapped.statusCode) {
      logger.error(`statusCode=${mapped.statusCode}`);
    }
    logger.error(`message=${sanitize(mapped.message)}`);
    return mapped;
  }
}

function validateListConfig(config: TrelloConfig): string | undefined {
  if (!config.baseUrl) return 'Falta TRELLO_BASE_URL.';
  if (!config.boardId) return 'Falta TRELLO_BOARD_ID.';
  if (!config.apiKey) return 'Falta TRELLO_API_KEY.';
  if (!config.token) return 'Falta TRELLO_TOKEN.';
  return undefined;
}

function mapListError(error: unknown): Extract<HarnessResult, { status: 'AUTH_ERROR' | 'BOARD_NOT_FOUND' | 'HTTP_ERROR' }> {
  if (error instanceof TrelloRequestError) {
    if (error.statusCode === 401) {
      return { status: 'AUTH_ERROR', statusCode: error.statusCode, message: error.message };
    }
    if (error.statusCode === 404) {
      return { status: 'BOARD_NOT_FOUND', statusCode: error.statusCode, message: error.message };
    }
    return { status: 'HTTP_ERROR', statusCode: error.statusCode, message: error.message };
  }

  return { status: 'HTTP_ERROR', message: error instanceof Error ? error.message : String(error) };
}

function sanitize(value: string): string {
  return value
    .replace(/\b(TRELLO_API_KEY|TRELLO_TOKEN|key|token|Authorization)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/([?&](?:key|token)=)[^&\s]+/gi, '$1[REDACTED]')
    .slice(0, 300);
}

if (require.main === module) {
  runTrelloListBoardListsHarness().catch((error) => {
    console.error('[TRELLO LISTS] HTTP_ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
