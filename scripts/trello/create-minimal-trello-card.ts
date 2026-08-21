import 'dotenv/config';
import { TrelloHttpClient, validateTrelloConfig, type TrelloClient } from '../../integrations/incidents/providers/trello/trello.client';
import type { TrelloConfig, TrelloCreateCardInput } from '../../integrations/incidents/providers/trello/trello.types';
import { TrelloRequestError } from '../../integrations/incidents/providers/trello/trello.types';
import { readTrelloConfig } from './validate-trello-connection';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: TrelloConfig) => Pick<TrelloClient, 'createCard'>;
};

export async function runMinimalTrelloCreateHarness(options: HarnessOptions = {}) {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.TRELLO_RUN_REAL_CREATE !== 'true' || env.TRELLO_VALIDATE_ONLY !== 'false') {
    logger.log('[TRELLO CREATE] DISABLED');
    return { status: 'DISABLED' as const };
  }

  const config = readTrelloConfig(env);
  const configError = validateTrelloConfig(config);
  if (configError) {
    logger.error('[TRELLO CREATE] ERROR');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'ERROR' as const, message: configError };
  }

  const client = options.clientFactory?.(config) ?? new TrelloHttpClient(config);
  try {
    const card = await client.createCard(buildMinimalTrelloCard(config));
    logger.log('[TRELLO CREATE] CREATED');
    logger.log(`cardId=${card.id}`);
    logger.log(`cardUrl=${card.url ?? card.shortUrl ?? 'N/D'}`);
    return { status: 'CREATED' as const, cardId: card.id, cardUrl: card.url ?? card.shortUrl };
  } catch (error) {
    const statusCode = error instanceof TrelloRequestError ? error.statusCode : undefined;
    const message = error instanceof Error ? error.message : String(error);
    logger.error('[TRELLO CREATE] ERROR');
    if (statusCode) logger.error(`statusCode=${statusCode}`);
    logger.error(`message=${sanitize(message)}`);
    return { status: 'ERROR' as const, statusCode, message };
  }
}

export function buildMinimalTrelloCard(config: TrelloConfig): TrelloCreateCardInput {
  return {
    idList: config.listId,
    name: '[QA-AUTO] Prueba integracion Trello',
    desc: [
      'Prueba tecnica controlada de integracion Trello desde Playwright QA Automation.',
      '',
      'QA-AUTO-TEST: MINIMAL-CREATE',
    ].join('\n'),
  };
}

function sanitize(value: string): string {
  return value
    .replace(/\b(TRELLO_API_KEY|TRELLO_TOKEN|key|token|Authorization)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .slice(0, 300);
}

if (require.main === module) {
  runMinimalTrelloCreateHarness().catch((error) => {
    console.error('[TRELLO CREATE] ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
