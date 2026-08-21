import 'dotenv/config';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { JiraHttpClient, validateJiraConfig, type JiraClient } from '../../integrations/incidents/providers/jira/jira.client';
import { uploadJiraEvidenceFiles } from '../../integrations/incidents/providers/jira/jira.evidence';
import type { IncidentAttachmentResult } from '../../integrations/incidents/providers/incident-provider.types';
import type { JiraConfig } from '../../integrations/incidents/providers/jira/jira.types';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: JiraConfig) => Pick<JiraClient, 'getIssueAttachments' | 'uploadAttachment'>;
  workDir?: string;
};

type HarnessResult =
  | { status: 'DISABLED' }
  | { status: 'DONE'; issueKey: string; attachments: IncidentAttachmentResult[] }
  | { status: 'ERROR'; message: string };

const TEST_ISSUE_KEY = 'SCRUM-2';
const TEST_CASE_ID = 'JIRA-ATTACHMENT-TEST';

export async function runRealJiraAttachmentHarness(options: HarnessOptions = {}): Promise<HarnessResult> {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;

  if (env.JIRA_RUN_REAL_ATTACHMENT_TEST !== 'true' || env.JIRA_TEST_ISSUE_KEY !== TEST_ISSUE_KEY) {
    logger.log('[JIRA ATTACHMENTS] DISABLED');
    return { status: 'DISABLED' };
  }

  const config = readJiraConfig(env);
  const configError = validateJiraConfig(config);
  if (configError) {
    logger.error('[JIRA ATTACHMENTS] ERROR');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'ERROR', message: configError };
  }

  const workDir = options.workDir ?? await fs.mkdtemp(path.join(os.tmpdir(), 'jira-attachments-'));
  await fs.mkdir(workDir, { recursive: true });
  const files = await prepareAttachmentFiles(workDir, env);
  const client = options.clientFactory?.(config) ?? new JiraHttpClient(config);
  const attachments = await uploadJiraEvidenceFiles(client, TEST_ISSUE_KEY, files);

  logger.log('[JIRA ATTACHMENTS]');
  logger.log(`issueKey=${TEST_ISSUE_KEY}`);
  for (const attachment of attachments) {
    logger.log(`${attachment.type}=${formatAttachmentStatus(attachment)}`);
  }

  return { status: 'DONE', issueKey: TEST_ISSUE_KEY, attachments };
}

export async function prepareAttachmentFiles(workDir: string, env: NodeJS.ProcessEnv = process.env) {
  const screenshotPath = path.join(workDir, 'QA-AUTO-SCRUM-2-screenshot.png');
  const tracePath = path.join(workDir, 'QA-AUTO-SCRUM-2-trace.zip');
  const videoPath = path.join(workDir, 'QA-AUTO-SCRUM-2-video.webm');

  await fs.writeFile(screenshotPath, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64'));
  await fs.writeFile(tracePath, Buffer.from('UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==', 'base64'));

  const existingVideo = await findExistingWebm(env.JIRA_TEST_WEBM_SOURCE_DIR ?? 'test-results');
  if (existingVideo) {
    await fs.copyFile(existingVideo, videoPath);
  }

  return [
    {
      type: 'screenshot' as const,
      filePath: screenshotPath,
      fileName: 'QA-AUTO-SCRUM-2-screenshot.png',
    },
    {
      type: 'trace' as const,
      filePath: tracePath,
      fileName: 'QA-AUTO-SCRUM-2-trace.zip',
    },
    {
      type: 'video' as const,
      filePath: videoPath,
      fileName: 'QA-AUTO-SCRUM-2-video.webm',
      maxVideoMb: readPositiveNumber(env.INCIDENT_MAX_VIDEO_MB, 50),
    },
  ];
}

export function formatAttachmentStatus(attachment: IncidentAttachmentResult): string {
  if (attachment.reason === 'VIDEO_TOO_LARGE') {
    return 'VIDEO_TOO_LARGE';
  }
  return attachment.status;
}

function readJiraConfig(env: NodeJS.ProcessEnv): JiraConfig {
  return {
    baseUrl: env.JIRA_BASE_URL?.trim() ?? '',
    projectKey: env.JIRA_PROJECT_KEY?.trim() ?? '',
    email: env.JIRA_EMAIL?.trim() ?? '',
    apiToken: env.JIRA_API_TOKEN?.trim() ?? '',
    issueType: env.JIRA_ISSUE_TYPE?.trim() ?? '',
    requestTimeoutMs: readPositiveNumber(env.INCIDENT_REQUEST_TIMEOUT_MS, 15_000),
  };
}

function readPositiveNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value ?? '');
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

async function findExistingWebm(root: string): Promise<string | undefined> {
  try {
    const stat = await fs.stat(root);
    if (stat.isFile()) {
      return root.toLowerCase().endsWith('.webm') ? root : undefined;
    }
  } catch {
    return undefined;
  }

  const pending = [root];
  while (pending.length > 0) {
    const current = pending.pop()!;
    let entries: Array<{ name: string; isDirectory(): boolean; isFile(): boolean }>;
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        pending.push(fullPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.webm')) {
        return fullPath;
      }
    }
  }
  return undefined;
}

function sanitize(value: string): string {
  return value
    .replace(/\b(JIRA_API_TOKEN|apiToken|token|Authorization)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\bBasic\s+[A-Za-z0-9+/=]+/gi, 'Basic [REDACTED]')
    .slice(0, 300);
}

if (require.main === module) {
  runRealJiraAttachmentHarness().catch((error) => {
    console.error('[JIRA ATTACHMENTS] ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
