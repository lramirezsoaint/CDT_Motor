import 'dotenv/config';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { uploadTrelloEvidenceFiles } from '../../integrations/incidents/providers/trello/trello.evidence';
import { TrelloHttpClient, validateTrelloConfig, type TrelloClient } from '../../integrations/incidents/providers/trello/trello.client';
import type { IncidentAttachmentResult } from '../../integrations/incidents/providers/incident-provider.types';
import type { TrelloConfig } from '../../integrations/incidents/providers/trello/trello.types';
import { readTrelloConfig } from './validate-trello-connection';

type Logger = {
  log(message: string): void;
  error(message: string): void;
};

type HarnessOptions = {
  env?: NodeJS.ProcessEnv;
  logger?: Logger;
  clientFactory?: (config: TrelloConfig) => Pick<TrelloClient, 'getCardAttachments' | 'uploadAttachment'>;
  workDir?: string;
};

export async function runRealTrelloAttachmentHarness(options: HarnessOptions = {}) {
  const env = options.env ?? process.env;
  const logger = options.logger ?? console;
  const cardId = env.TRELLO_TEST_CARD_ID?.trim() ?? '';

  if (env.TRELLO_RUN_REAL_ATTACHMENT_TEST !== 'true' || !cardId) {
    logger.log('[TRELLO ATTACHMENTS] DISABLED');
    return { status: 'DISABLED' as const };
  }

  const config = readTrelloConfig(env);
  const configError = validateTrelloConfig(config);
  if (configError) {
    logger.error('[TRELLO ATTACHMENTS] ERROR');
    logger.error(`message=${sanitize(configError)}`);
    return { status: 'ERROR' as const, message: configError };
  }

  const workDir = options.workDir ?? await fs.mkdtemp(path.join(os.tmpdir(), 'trello-attachments-'));
  await fs.mkdir(workDir, { recursive: true });
  const files = await prepareTrelloAttachmentFiles(workDir, env);
  const client = options.clientFactory?.(config) ?? new TrelloHttpClient(config);
  const attachments = await uploadTrelloEvidenceFiles(client, cardId, files);

  logger.log('[TRELLO ATTACHMENTS]');
  logger.log(`cardId=${cardId}`);
  for (const attachment of attachments) {
    logger.log(`${attachment.type}=${formatAttachmentStatus(attachment)}`);
  }

  return { status: 'DONE' as const, cardId, attachments };
}

export async function prepareTrelloAttachmentFiles(workDir: string, env: NodeJS.ProcessEnv = process.env) {
  const screenshotPath = path.join(workDir, 'QA-AUTO-TRELLO-ATTACHMENT-TEST-screenshot.png');
  const tracePath = path.join(workDir, 'QA-AUTO-TRELLO-ATTACHMENT-TEST-trace.zip');
  const videoPath = path.join(workDir, 'QA-AUTO-TRELLO-ATTACHMENT-TEST-video.webm');

  await fs.writeFile(screenshotPath, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64'));
  await fs.writeFile(tracePath, Buffer.from('UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==', 'base64'));
  await fs.writeFile(videoPath, 'webm');

  return [
    { type: 'screenshot' as const, filePath: screenshotPath, fileName: path.basename(screenshotPath) },
    { type: 'trace' as const, filePath: tracePath, fileName: path.basename(tracePath) },
    { type: 'video' as const, filePath: videoPath, fileName: path.basename(videoPath), maxVideoMb: readPositiveNumber(env.INCIDENT_MAX_VIDEO_MB, 50) },
  ];
}

export function formatAttachmentStatus(attachment: IncidentAttachmentResult): string {
  if (attachment.reason === 'FILE_TOO_LARGE') {
    return 'FILE_TOO_LARGE';
  }
  if (attachment.reason === 'VIDEO_TOO_LARGE') {
    return 'VIDEO_TOO_LARGE';
  }
  return attachment.status;
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
  runRealTrelloAttachmentHarness().catch((error) => {
    console.error('[TRELLO ATTACHMENTS] ERROR');
    console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
    process.exitCode = 1;
  });
}
