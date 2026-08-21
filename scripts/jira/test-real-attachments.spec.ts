import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { expect, test } from '@playwright/test';
import { formatAttachmentStatus, prepareAttachmentFiles, runRealJiraAttachmentHarness } from './test-real-attachments';

test.describe('real Jira attachments harness', () => {
  test('gate disabled does not upload', async () => {
    const calls = { upload: 0 };
    const result = await runRealJiraAttachmentHarness({
      env: { ...enabledEnv(), JIRA_RUN_REAL_ATTACHMENT_TEST: 'false' },
      logger: memoryLogger(),
      clientFactory: () => makeClient(calls),
    });

    expect(result.status).toBe('DISABLED');
    expect(calls.upload).toBe(0);
  });

  test('missing expected issue key does not upload', async () => {
    const calls = { upload: 0 };
    const result = await runRealJiraAttachmentHarness({
      env: { ...enabledEnv(), JIRA_TEST_ISSUE_KEY: '' },
      logger: memoryLogger(),
      clientFactory: () => makeClient(calls),
    });

    expect(result.status).toBe('DISABLED');
    expect(calls.upload).toBe(0);
  });

  test('enabled harness uploads generated screenshot and trace, video is clear when missing', async () => {
    const calls = { upload: 0 };
    const logger = memoryLogger();
    const workDir = await fs.mkdtemp(path.join(os.tmpdir(), 'jira-attachment-harness-'));

    const result = await runRealJiraAttachmentHarness({
      env: { ...enabledEnv(), JIRA_TEST_WEBM_SOURCE_DIR: path.join(workDir, 'missing-webm-dir') },
      logger,
      workDir,
      clientFactory: () => makeClient(calls),
    });

    expect(result.status).toBe('DONE');
    expect(calls.upload).toBe(2);
    expect(logger.lines).toContain('[JIRA ATTACHMENTS]');
    expect(logger.lines).toContain('issueKey=SCRUM-2');
    expect(logger.lines).toContain('screenshot=LINKED');
    expect(logger.lines).toContain('trace=LINKED');
    expect(logger.lines).toContain('video=FILE_NOT_FOUND');
  });

  test('prepareAttachmentFiles reuses existing valid webm source', async () => {
    const sourceDir = await fs.mkdtemp(path.join(os.tmpdir(), 'jira-webm-source-'));
    const sourceVideo = path.join(sourceDir, 'sample.webm');
    await fs.writeFile(sourceVideo, 'webm');
    const workDir = await fs.mkdtemp(path.join(os.tmpdir(), 'jira-attachment-files-'));

    const files = await prepareAttachmentFiles(workDir, { JIRA_TEST_WEBM_SOURCE_DIR: sourceDir });

    await expect(fs.stat(files[2].filePath)).resolves.toMatchObject({ size: 4 });
    expect(files.map((file) => file.fileName)).toEqual([
      'QA-AUTO-SCRUM-2-screenshot.png',
      'QA-AUTO-SCRUM-2-trace.zip',
      'QA-AUTO-SCRUM-2-video.webm',
    ]);
  });

  test('formatAttachmentStatus prints VIDEO_TOO_LARGE reason', () => {
    expect(formatAttachmentStatus({ type: 'video', status: 'SKIPPED', reason: 'VIDEO_TOO_LARGE' })).toBe('VIDEO_TOO_LARGE');
  });
});

function enabledEnv(): NodeJS.ProcessEnv {
  return {
    JIRA_RUN_REAL_ATTACHMENT_TEST: 'true',
    JIRA_TEST_ISSUE_KEY: 'SCRUM-2',
    JIRA_BASE_URL: 'https://jira.example.test',
    JIRA_PROJECT_KEY: 'SCRUM',
    JIRA_EMAIL: 'qa@example.test',
    JIRA_API_TOKEN: 'secret-token',
    JIRA_ISSUE_TYPE: 'Bug',
    INCIDENT_MAX_VIDEO_MB: '50',
  };
}

function makeClient(calls: { upload: number }) {
  return {
    async getIssueAttachments() {
      return [];
    },
    async uploadAttachment(_issueKey: string, _filePath: string, fileName?: string) {
      calls.upload += 1;
      return [{ id: String(calls.upload), filename: fileName ?? path.basename(_filePath) }];
    },
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
