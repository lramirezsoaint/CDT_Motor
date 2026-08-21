import 'dotenv/config';
import { TrelloHttpClient, type TrelloClient } from '../../integrations/incidents/providers/trello/trello.client';
import { TrelloRequestError, type TrelloConfig } from '../../integrations/incidents/providers/trello/trello.types';
import { readTrelloConfig } from './validate-trello-connection';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: TrelloConfig) => Pick<TrelloClient, 'getCurrentMember'>;
};

type AuthResult =
  | { status: 'DISABLED' }
  | { status: 'INVALID_CONFIG'; message: string }
  | { status: 'VALID'; memberId: string; username?: string }
  | { status: 'INVALID_API_KEY' | 'INVALID_TOKEN' | 'AUTH_ERROR' | 'HTTP_ERROR'; statusCode?: number; message: string };

export async function runTrelloAuthHarness(options: HarnessOptions = {}): Promise<AuthResult> {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.TRELLO_RUN_REAL_AUTH_TEST !== 'true') {
    logger.log('[TRELLO AUTH] DISABLED');
    return { status: 'DISABLED' };
  }

  const diagnostics = buildConfigDiagnostics(env);
  logger.log(`apiKeyPresent=${diagnostics.apiKeyPresent}`);
  logger.log(`apiKeyLength=${diagnostics.apiKeyLength}`);
  logger.log(`tokenPresent=${diagnostics.tokenPresent}`);
  logger.log(`tokenLength=${diagnostics.tokenLength}`);
  logger.log(`apiKeyTrimmed=${diagnostics.apiKeyTrimmed}`);
  logger.log(`tokenTrimmed=${diagnostics.tokenTrimmed}`);

  const config = readTrelloConfig(env);
  const configError = validateAuthConfig(config);
  if (configError) {
    logger.error('[TRELLO AUTH] INVALID_CONFIG');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'INVALID_CONFIG', message: configError };
  }

  const client = options.clientFactory?.(config) ?? new TrelloHttpClient(config);
  const started = Date.now();
  try {
    const member = await client.getCurrentMember();
    logger.log('GET /1/members/me');
    logger.log(`statusCode=200`);
    logger.log(`elapsedMs=${Date.now() - started}`);
    logger.log('[TRELLO AUTH] VALID');
    logger.log(`memberId=${member.id}`);
    logger.log(`username=${member.username ?? 'N/D'}`);
    return { status: 'VALID', memberId: member.id, username: member.username };
  } catch (error) {
    const mapped = mapAuthError(error);
    logger.log('GET /1/members/me');
    if (mapped.statusCode) {
      logger.log(`statusCode=${mapped.statusCode}`);
    }
    logger.log(`elapsedMs=${Date.now() - started}`);
    logger.error(`[TRELLO AUTH] ${mapped.status}`);
    logger.error(`message=${sanitize(mapped.message)}`);
    return mapped;
  }
}

export function buildConfigDiagnostics(env: NodeJS.ProcessEnv) {
  const rawApiKey = env.TRELLO_API_KEY ?? '';
  const rawToken = env.TRELLO_TOKEN ?? '';
  const apiKey = rawApiKey.trim();
  const token = rawToken.trim();
  return {
    apiKeyPresent: apiKey.length > 0,
    apiKeyLength: apiKey.length,
    tokenPresent: token.length > 0,
    tokenLength: token.length,
    apiKeyTrimmed: rawApiKey !== apiKey,
    tokenTrimmed: rawToken !== token,
  };
}

function validateAuthConfig(config: TrelloConfig): string | undefined {
  if (!config.baseUrl) return 'Falta TRELLO_BASE_URL.';
  if (!config.apiKey) return 'Falta TRELLO_API_KEY.';
  if (!config.token) return 'Falta TRELLO_TOKEN.';
  return undefined;
}

function mapAuthError(error: unknown): Extract<AuthResult, { status: 'INVALID_API_KEY' | 'INVALID_TOKEN' | 'AUTH_ERROR' | 'HTTP_ERROR' }> {
  if (error instanceof TrelloRequestError) {
    const message = error.message;
    if (error.statusCode === 401 && /invalid key/i.test(message)) {
      return { status: 'INVALID_API_KEY', statusCode: error.statusCode, message };
    }
    if (error.statusCode === 401 && /invalid token/i.test(message)) {
      return { status: 'INVALID_TOKEN', statusCode: error.statusCode, message };
    }
    if (error.statusCode === 401) {
      return { status: 'AUTH_ERROR', statusCode: error.statusCode, message };
    }
    return { status: 'HTTP_ERROR', statusCode: error.statusCode, message };
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
  runTrelloAuthHarness().catch((error) => {
    console.error('[TRELLO AUTH] HTTP_ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
