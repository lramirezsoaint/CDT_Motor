import { expect, test } from '@playwright/test';
import { JiraHttpClient } from '../../integrations/incidents/providers/jira/jira.client';
import type { JiraConfig } from '../../integrations/incidents/providers/jira/jira.types';
import { buildMinimalIssue, runMinimalJiraCreateHarness } from './create-minimal-jira-issue';

test.describe('minimal Jira create harness', () => {
  test('JIRA_RUN_REAL_CREATE != true does not create', async () => {
    const calls = { create: 0 };
    const result = await runMinimalJiraCreateHarness({
      env: { ...enabledEnv(), JIRA_RUN_REAL_CREATE: 'false' },
      logger: memoryLogger(),
      clientFactory: () => ({
        async createIssue() {
          calls.create += 1;
          return { key: 'SCRUM-1' };
        },
      }),
    });

    expect(result.status).toBe('DISABLED');
    expect(calls.create).toBe(0);
  });

  test('JIRA_VALIDATE_ONLY != false does not create', async () => {
    const calls = { create: 0 };
    const result = await runMinimalJiraCreateHarness({
      env: { ...enabledEnv(), JIRA_VALIDATE_ONLY: 'true' },
      logger: memoryLogger(),
      clientFactory: () => ({
        async createIssue() {
          calls.create += 1;
          return { key: 'SCRUM-1' };
        },
      }),
    });

    expect(result.status).toBe('DISABLED');
    expect(calls.create).toBe(0);
  });

  test('both gates enabled calls createIssue once', async () => {
    const calls = { create: 0 };
    const result = await runMinimalJiraCreateHarness({
      env: enabledEnv(),
      logger: memoryLogger(),
      clientFactory: () => ({
        async createIssue() {
          calls.create += 1;
          return { id: '10001', key: 'SCRUM-123' };
        },
      }),
    });

    expect(result).toMatchObject({ status: 'CREATED', issueKey: 'SCRUM-123', issueId: '10001' });
    expect(calls.create).toBe(1);
  });

  test('201 returns CREATED using JiraHttpClient.createIssue', async () => {
    const logger = memoryLogger();
    let requestBody: { fields?: { description?: unknown } } | undefined;
    const result = await runMinimalJiraCreateHarness({
      env: enabledEnv(),
      logger,
      clientFactory: (config) => new JiraHttpClient(config, async (_url, init) => {
        requestBody = JSON.parse(String(init?.body)) as { fields?: { description?: unknown } };
        return jsonResponse(201, { id: '10001', key: 'SCRUM-123' });
      }),
    });

    expect(result).toMatchObject({ status: 'CREATED', issueKey: 'SCRUM-123', issueId: '10001' });
    expect(requestBody?.fields?.description).toMatchObject({ type: 'doc', version: 1 });
    expect(typeof requestBody?.fields?.description).not.toBe('string');
    expect(logger.lines).toContain('[JIRA CREATE] CREATED');
    expect(logger.lines).toContain('issueUrl=https://jira.example.test/browse/SCRUM-123');
  });

  test('400 returns ERROR', async () => {
    const result = await runWithHttpStatus(400, { errors: { summary: 'Summary required' } });
    expect(result).toMatchObject({ status: 'ERROR', statusCode: 400 });
  });

  test('401 returns ERROR', async () => {
    const result = await runWithHttpStatus(401, { errorMessages: ['Unauthorized'] });
    expect(result).toMatchObject({ status: 'ERROR', statusCode: 401 });
  });

  test('500 returns ERROR', async () => {
    const result = await runWithHttpStatus(500, { errorMessages: ['Internal Server Error'] });
    expect(result).toMatchObject({ status: 'ERROR', statusCode: 500 });
  });

  test('minimal payload uses only Jira project, issue type, summary, description and QA label', () => {
    const issue = buildMinimalIssue(config());

    expect(issue.fields.project).toEqual({ key: 'SCRUM' });
    expect(issue.fields.issuetype).toEqual({ name: 'Bug' });
    expect(issue.fields.summary).toContain('[QA-AUTO]');
    expect(issue.fields.labels).toEqual(['QA-AUTO']);
    expect(issue.fields.description).toMatchObject({ type: 'doc', version: 1 });
    expect(typeof issue.fields.description).not.toBe('string');
  });
});

async function runWithHttpStatus(status: number, body: unknown) {
  return runMinimalJiraCreateHarness({
    env: enabledEnv(),
    logger: memoryLogger(),
    clientFactory: (config) => new JiraHttpClient(config, mockFetch([jsonResponse(status, body)])),
  });
}

function enabledEnv(): NodeJS.ProcessEnv {
  return {
    JIRA_RUN_REAL_CREATE: 'true',
    JIRA_VALIDATE_ONLY: 'false',
    JIRA_BASE_URL: 'https://jira.example.test',
    JIRA_PROJECT_KEY: 'SCRUM',
    JIRA_EMAIL: 'qa@example.test',
    JIRA_API_TOKEN: 'secret-token',
    JIRA_ISSUE_TYPE: 'Bug',
  };
}

function config(): JiraConfig {
  return {
    baseUrl: 'https://jira.example.test',
    projectKey: 'SCRUM',
    email: 'qa@example.test',
    apiToken: 'secret-token',
    issueType: 'Bug',
    requestTimeoutMs: 15_000,
  };
}

function memoryLogger() {
  const lines: string[] = [];
  return {
    lines,
    log(message: string) {
      lines.push(message);
    },
    error(message: string) {
      lines.push(message);
    },
  };
}

function mockFetch(responses: Response[]): typeof fetch {
  const queue = [...responses];
  return async () => {
    const response = queue.shift();
    if (!response) {
      throw new Error('No mock response configured.');
    }
    return response;
  };
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status, statusText: status === 201 ? 'OK' : 'ERROR' });
}
