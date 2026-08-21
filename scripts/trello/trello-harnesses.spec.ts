import { expect, test } from '@playwright/test';
import { buildIncidentSignature } from '../../integrations/incidents/incident-signature';
import { makeProviderTestCandidate } from '../../integrations/incidents/providers/provider-test-helpers';
import { TrelloRequestError } from '../../integrations/incidents/providers/trello/trello.types';
import { runMinimalTrelloCreateHarness } from './create-minimal-trello-card';
import { runTrelloListBoardListsHarness } from './list-board-lists';
import { buildConfigDiagnostics, runTrelloAuthHarness } from './test-trello-auth';
import { runTrelloDedupHarness } from './test-trello-dedup';
import { runRealTrelloAttachmentHarness } from './test-real-attachments';
import { runTrelloValidationHarness } from './validate-trello-connection';

test.describe('trello harnesses', () => {
  test('validation gate disabled does not call Trello', async () => {
    const logs: string[] = [];
    const result = await runTrelloValidationHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_VALIDATION: 'false' },
      logger: logger(logs),
      clientFactory: () => {
        throw new Error('should not call');
      },
    });

    expect(result.status).toBe('DISABLED');
    expect(logs).toContain('[TRELLO VALIDATION] DISABLED');
  });

  test('validation valid prints board and list', async () => {
    const logs: string[] = [];
    const result = await runTrelloValidationHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_VALIDATION: 'true' },
      logger: logger(logs),
      clientFactory: () => ({
        async validateConnection() {
          return { status: 'VALID', board: { id: 'board-1', name: 'Board' }, list: { id: 'list-1', name: 'List' } };
        },
      }),
    });

    expect(result.status).toBe('VALID');
    expect(logs).toContain('[TRELLO VALIDATION] VALID');
    expect(logs).toContain('boardId=board-1');
  });

  test('dedup disabled does not call Trello', async () => {
    const logs: string[] = [];
    const result = await runTrelloDedupHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_DEDUP_TEST: 'false' },
      logger: logger(logs),
      clientFactory: () => {
        throw new Error('should not call');
      },
    });

    expect(result.status).toBe('DISABLED');
    expect(logs).toContain('[TRELLO DEDUP] DISABLED');
  });

  test('dedup candidateCount=0 reports duplicate=false', async () => {
    const logs: string[] = [];
    const result = await runTrelloDedupHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_DEDUP_TEST: 'true' },
      logger: logger(logs),
      clientFactory: () => ({
        async getActiveCards() {
          return [];
        },
      }),
    });

    expect(result).toMatchObject({ status: 'DONE', candidateCount: 0, duplicate: false });
    expect(logs).toContain('candidateCount=0');
    expect(logs).toContain('duplicate=false');
  });

  test('dedup exact signature reports duplicate true with cardId', async () => {
    const logs: string[] = [];
    const signature = buildIncidentSignature(makeProviderTestCandidate());
    const result = await runTrelloDedupHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_DEDUP_TEST: 'true' },
      logger: logger(logs),
      clientFactory: () => ({
        async getActiveCards() {
          return [{ id: 'card-1', name: 'match', desc: `QA-AUTO-SIGNATURE:\n${signature}` }];
        },
      }),
    });

    expect(result).toMatchObject({ status: 'DONE', duplicate: true, cardId: 'card-1' });
    expect(logs).toContain('duplicate=true');
  });

  test('create gates disabled do not create', async () => {
    const first = await runMinimalTrelloCreateHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_CREATE: 'false', TRELLO_VALIDATE_ONLY: 'false' },
      logger: logger([]),
      clientFactory: () => {
        throw new Error('should not call');
      },
    });
    const second = await runMinimalTrelloCreateHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_CREATE: 'true', TRELLO_VALIDATE_ONLY: 'true' },
      logger: logger([]),
      clientFactory: () => {
        throw new Error('should not call');
      },
    });

    expect(first.status).toBe('DISABLED');
    expect(second.status).toBe('DISABLED');
  });

  test('create enabled calls create once and maps errors', async () => {
    let createCalls = 0;
    const created = await runMinimalTrelloCreateHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_CREATE: 'true', TRELLO_VALIDATE_ONLY: 'false' },
      logger: logger([]),
      clientFactory: () => ({
        async createCard() {
          createCalls += 1;
          return { id: 'card-1', name: 'created', url: 'https://trello.test/card-1' };
        },
      }),
    });
    expect(created).toMatchObject({ status: 'CREATED', cardId: 'card-1' });
    expect(createCalls).toBe(1);

    for (const statusCode of [400, 401, 500]) {
      const result = await runMinimalTrelloCreateHarness({
        env: { ...enabledEnv(), TRELLO_RUN_REAL_CREATE: 'true', TRELLO_VALIDATE_ONLY: 'false' },
        logger: logger([]),
        clientFactory: () => ({
          async createCard() {
            throw new TrelloRequestError(`Trello HTTP ${statusCode}`, statusCode, 'createCard');
          },
        }),
      });
      expect(result).toMatchObject({ status: 'ERROR', statusCode });
    }
  });

  test('attachments gate disabled and enabled with existing card', async () => {
    const disabled = await runRealTrelloAttachmentHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_ATTACHMENT_TEST: 'false', TRELLO_TEST_CARD_ID: 'card-1' },
      logger: logger([]),
    });
    expect(disabled.status).toBe('DISABLED');

    const result = await runRealTrelloAttachmentHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_ATTACHMENT_TEST: 'true', TRELLO_TEST_CARD_ID: 'card-1' },
      logger: logger([]),
      clientFactory: () => ({
        async getCardAttachments() {
          return [];
        },
        async uploadAttachment(_cardId, _filePath, fileName) {
          return { id: `att-${fileName}`, name: fileName ?? 'file.bin' };
        },
      }),
    });

    expect(result.status).toBe('DONE');
    if (result.status === 'DONE') {
      expect(result.attachments.map((attachment) => attachment.status)).toEqual(['LINKED', 'LINKED', 'LINKED']);
    }
  });

  test('list board lists prints available lists for valid board', async () => {
    const logs: string[] = [];
    const result = await runTrelloListBoardListsHarness({
      env: { ...enabledEnv(), TRELLO_RUN_LISTS: 'true', TRELLO_LIST_ID: '' },
      logger: logger(logs),
      clientFactory: () => ({
        async getBoardLists() {
          return [
            { id: 'list-backlog', name: 'Backlog', idBoard: 'board-1' },
            { id: 'list-todo', name: 'Por hacer', idBoard: 'board-1' },
          ];
        },
      }),
    });

    expect(result).toMatchObject({ status: 'VALID', boardId: 'board-1' });
    expect(logs).toContain('[TRELLO LISTS]');
    expect(logs).toContain('boardId=board-1');
    expect(logs).toContain('availableLists:');
    expect(logs).toContain('- name=Backlog');
    expect(logs).toContain('  id=list-backlog');
  });

  test('list board lists handles board without lists', async () => {
    const logs: string[] = [];
    const result = await runTrelloListBoardListsHarness({
      env: { ...enabledEnv(), TRELLO_RUN_LISTS: 'true', TRELLO_LIST_ID: '' },
      logger: logger(logs),
      clientFactory: () => ({
        async getBoardLists() {
          return [];
        },
      }),
    });

    expect(result).toMatchObject({ status: 'VALID', lists: [] });
    expect(logs).toContain('availableLists:');
    expect(logs.some((line) => line.startsWith('- name='))).toBe(false);
  });

  test('list board lists maps 401, 404 and 500', async () => {
    for (const [statusCode, status] of [[401, 'AUTH_ERROR'], [404, 'BOARD_NOT_FOUND'], [500, 'HTTP_ERROR']] as const) {
      const logs: string[] = [];
      const result = await runTrelloListBoardListsHarness({
        env: { ...enabledEnv(), TRELLO_RUN_LISTS: 'true', TRELLO_LIST_ID: '' },
        logger: logger(logs),
        clientFactory: () => ({
          async getBoardLists() {
            throw new TrelloRequestError(`Trello HTTP ${statusCode}: error`, statusCode, 'getBoardLists');
          },
        }),
      });

      expect(result).toMatchObject({ status, statusCode });
      expect(logs).toContain(`[TRELLO LISTS] ${status}`);
    }
  });

  test('auth disabled does not call Trello', async () => {
    const logs: string[] = [];
    const result = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'false' },
      logger: logger(logs),
      clientFactory: () => {
        throw new Error('should not call');
      },
    });

    expect(result.status).toBe('DISABLED');
    expect(logs).toContain('[TRELLO AUTH] DISABLED');
  });

  test('auth 200 maps to VALID without printing secrets', async () => {
    const logs: string[] = [];
    const result = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'true' },
      logger: logger(logs),
      clientFactory: () => ({
        async getCurrentMember() {
          return { id: 'member-1', username: 'qa-user' };
        },
      }),
    });

    expect(result).toMatchObject({ status: 'VALID', memberId: 'member-1', username: 'qa-user' });
    expect(logs).toContain('[TRELLO AUTH] VALID');
    expect(logs).toContain('GET /1/members/me');
    expect(logs).toContain('apiKeyPresent=true');
    expect(logs).toContain('apiKeyLength=10');
    expect(logs.join('\n')).not.toContain('secret-key');
    expect(logs.join('\n')).not.toContain('secret-token');
  });

  test('auth 401 invalid key maps to INVALID_API_KEY', async () => {
    const result = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'true' },
      logger: logger([]),
      clientFactory: () => ({
        async getCurrentMember() {
          throw new TrelloRequestError('Trello HTTP 401: invalid key', 401, 'getCurrentMember');
        },
      }),
    });

    expect(result).toMatchObject({ status: 'INVALID_API_KEY', statusCode: 401 });
  });

  test('auth 401 invalid token maps to INVALID_TOKEN', async () => {
    const result = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'true' },
      logger: logger([]),
      clientFactory: () => ({
        async getCurrentMember() {
          throw new TrelloRequestError('Trello HTTP 401: invalid token', 401, 'getCurrentMember');
        },
      }),
    });

    expect(result).toMatchObject({ status: 'INVALID_TOKEN', statusCode: 401 });
  });

  test('auth missing key or token maps to INVALID_CONFIG', async () => {
    const missingKey = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'true', TRELLO_API_KEY: '' },
      logger: logger([]),
    });
    const missingToken = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'true', TRELLO_TOKEN: '' },
      logger: logger([]),
    });

    expect(missingKey).toMatchObject({ status: 'INVALID_CONFIG', message: /TRELLO_API_KEY/ });
    expect(missingToken).toMatchObject({ status: 'INVALID_CONFIG', message: /TRELLO_TOKEN/ });
  });

  test('auth whitespace is detected and config is trimmed', async () => {
    let receivedKey = '';
    let receivedToken = '';
    const logs: string[] = [];
    const result = await runTrelloAuthHarness({
      env: { ...enabledEnv(), TRELLO_RUN_REAL_AUTH_TEST: 'true', TRELLO_API_KEY: ' secret-key ', TRELLO_TOKEN: '\tsecret-token\n' },
      logger: logger(logs),
      clientFactory: (config) => {
        receivedKey = config.apiKey;
        receivedToken = config.token;
        return {
          async getCurrentMember() {
            return { id: 'member-1', username: 'qa-user' };
          },
        };
      },
    });

    expect(result.status).toBe('VALID');
    expect(receivedKey).toBe('secret-key');
    expect(receivedToken).toBe('secret-token');
    expect(buildConfigDiagnostics({ TRELLO_API_KEY: ' secret-key ', TRELLO_TOKEN: '\tsecret-token\n' })).toMatchObject({
      apiKeyTrimmed: true,
      tokenTrimmed: true,
      apiKeyLength: 10,
      tokenLength: 12,
    });
    expect(logs).toContain('apiKeyTrimmed=true');
    expect(logs).toContain('tokenTrimmed=true');
  });
});

function enabledEnv(): NodeJS.ProcessEnv {
  return {
    TRELLO_BASE_URL: 'https://api.trello.test/1',
    TRELLO_BOARD_ID: 'board-1',
    TRELLO_LIST_ID: 'list-1',
    TRELLO_API_KEY: 'secret-key',
    TRELLO_TOKEN: 'secret-token',
    INCIDENT_REQUEST_TIMEOUT_MS: '15000',
  };
}

function logger(lines: string[]) {
  return {
    log(message: string) {
      lines.push(message);
    },
    error(message: string) {
      lines.push(message);
    },
  };
}
