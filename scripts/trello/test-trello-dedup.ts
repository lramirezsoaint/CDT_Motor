import 'dotenv/config';
import { buildIncidentSignature } from '../../integrations/incidents/incident-signature';
import { findTrelloDuplicateBySignature } from '../../integrations/incidents/providers/trello/trello.dedup';
import { TrelloHttpClient, validateTrelloConfig, type TrelloClient } from '../../integrations/incidents/providers/trello/trello.client';
import type { TrelloConfig } from '../../integrations/incidents/providers/trello/trello.types';
import { makeProviderTestCandidate } from '../../integrations/incidents/providers/provider-test-helpers';
import { readTrelloConfig } from './validate-trello-connection';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: TrelloConfig) => Pick<TrelloClient, 'getActiveCards'>;
};

export async function runTrelloDedupHarness(options: HarnessOptions = {}) {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.TRELLO_RUN_REAL_DEDUP_TEST !== 'true') {
    logger.log('[TRELLO DEDUP] DISABLED');
    return { status: 'DISABLED' as const };
  }

  const config = readTrelloConfig(env);
  const configError = validateTrelloConfig(config);
  if (configError) {
    logger.error('[TRELLO DEDUP] ERROR');
    logger.error(`message=${configError}`);
    return { status: 'ERROR' as const, message: configError };
  }

  const candidate = makeProviderTestCandidate();
  const signature = buildIncidentSignature(candidate);
  const client = options.clientFactory?.(config) ?? new TrelloHttpClient(config);

  try {
    const cards = await client.getActiveCards(config.boardId, config.listId);
    const duplicate = findTrelloDuplicateBySignature(candidate, cards);
    logger.log('[TRELLO DEDUP]');
    logger.log(`candidateCount=${cards.length}`);
    logger.log(`signature=${signature}`);
    logger.log(`duplicate=${duplicate ? 'true' : 'false'}`);
    if (duplicate) logger.log(`cardId=${duplicate.id}`);
    return { status: 'DONE' as const, candidateCount: cards.length, duplicate: Boolean(duplicate), cardId: duplicate?.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logger.error('[TRELLO DEDUP] ERROR');
    logger.error(`message=${message}`);
    return { status: 'ERROR' as const, message };
  }
}

if (require.main === module) {
  runTrelloDedupHarness().catch((error) => {
    console.error('[TRELLO DEDUP] ERROR');
    console.error(`message=${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  });
}
