import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import {
  AzureDevOpsRequestError,
  linkAzureAttachmentToWorkItem,
  loadIncidentRuntimeConfig,
  uploadAzureAttachment,
} from '../../azure-devops/azure-devops.client';
import type { IncidentRuntimeConfig } from '../../integrations/incidents/incident.types';

dotenv.config({ override: false });

const OUTPUT_DIR = path.join(process.cwd(), 'test-results', 'azure-attachment-test');
const SCREENSHOT_FILE_NAME = 'QA-AUTO-ATTACHMENT-TEST-screenshot.png';
const TRACE_FILE_NAME = 'QA-AUTO-ATTACHMENT-TEST-trace.zip';

async function main(): Promise<void> {
  if (process.env.AZURE_DEVOPS_RUN_REAL_ATTACHMENT_TEST !== 'true') {
    console.log('ATTACHMENT TEST DISABLED - AZURE_DEVOPS_RUN_REAL_ATTACHMENT_TEST missing');
    return;
  }

  const workItemId = Number(process.env.AZURE_DEVOPS_TEST_WORK_ITEM_ID);
  if (!Number.isInteger(workItemId) || workItemId <= 0) {
    console.log('ATTACHMENT TEST DISABLED - AZURE_DEVOPS_TEST_WORK_ITEM_ID missing');
    return;
  }

  const config = loadIncidentRuntimeConfig();
  validateConfig(config);
  const files = createTestFiles();

  console.log('ATTACHMENT REAL TEST');
  console.log(`workItemId=${workItemId}`);

  const screenshot = await uploadAndLink({
    type: 'screenshot',
    filePath: files.screenshot,
    fileName: SCREENSHOT_FILE_NAME,
    comment: 'QA-AUTO Attachment Test - Screenshot',
    workItemId,
    config,
  });

  if (screenshot !== 'LINKED') {
    console.log('ATTACHMENT TEST RESULT');
    console.log(`screenshot=${screenshot}`);
    console.log('trace=SKIPPED');
    console.log(`workItemId=${workItemId}`);
    process.exitCode = 1;
    return;
  }

  const trace = await uploadAndLink({
    type: 'trace',
    filePath: files.trace,
    fileName: TRACE_FILE_NAME,
    comment: 'QA-AUTO Attachment Test - Trace',
    workItemId,
    config,
  });

  console.log('ATTACHMENT TEST RESULT');
  console.log(`screenshot=${screenshot}`);
  console.log(`trace=${trace}`);
  console.log(`workItemId=${workItemId}`);

  if (trace !== 'LINKED') {
    process.exitCode = 1;
  }
}

async function uploadAndLink(input: {
  type: 'screenshot' | 'trace';
  filePath: string;
  fileName: string;
  comment: string;
  workItemId: number;
  config: IncidentRuntimeConfig;
}): Promise<'LINKED' | 'UPLOAD_ERROR' | 'LINK_ERROR'> {
  const fileSizeBytes = fs.statSync(input.filePath).size;

  console.log(input.type.toUpperCase());
  console.log(`fileName=${input.fileName}`);
  console.log(`fileSizeBytes=${fileSizeBytes}`);

  let attachmentUrl = '';
  const uploadStarted = Date.now();
  try {
    const uploaded = await uploadAzureAttachment(input.filePath, input.fileName, input.config);
    attachmentUrl = uploaded.url;
    console.log('upload:');
    console.log(`statusCode=${uploaded.__statusCode ?? 'N/D'}`);
    console.log(`elapsedMs=${Date.now() - uploadStarted}`);
  } catch (error) {
    console.log('upload:');
    console.log('status=ERROR');
    console.log(`statusCode=${error instanceof AzureDevOpsRequestError ? error.statusCode ?? 'N/D' : 'N/D'}`);
    console.log(`elapsedMs=${Date.now() - uploadStarted}`);
    console.log(`message=${sanitizeMessage(error instanceof Error ? error.message : String(error))}`);
    return 'UPLOAD_ERROR';
  }

  const linkStarted = Date.now();
  try {
    const linked = await linkAzureAttachmentToWorkItem(input.workItemId, attachmentUrl, input.comment, input.config);
    console.log('link:');
    console.log(`statusCode=${linked.__statusCode ?? 'N/D'}`);
    console.log(`elapsedMs=${Date.now() - linkStarted}`);
    return 'LINKED';
  } catch (error) {
    console.log('link:');
    console.log('status=ERROR');
    console.log(`statusCode=${error instanceof AzureDevOpsRequestError ? error.statusCode ?? 'N/D' : 'N/D'}`);
    console.log(`elapsedMs=${Date.now() - linkStarted}`);
    console.log(`message=${sanitizeMessage(error instanceof Error ? error.message : String(error))}`);
    return 'LINK_ERROR';
  }
}

function createTestFiles(): { screenshot: string; trace: string } {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const screenshot = path.join(OUTPUT_DIR, 'qa-auto-test-screenshot.png');
  const trace = path.join(OUTPUT_DIR, 'qa-auto-test-trace.zip');

  fs.writeFileSync(screenshot, Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=',
    'base64',
  ));
  fs.writeFileSync(trace, buildZip('trace.txt', 'QA-AUTO attachment trace test\n'));

  return { screenshot, trace };
}

function buildZip(fileName: string, content: string): Buffer {
  const name = Buffer.from(fileName, 'utf8');
  const data = Buffer.from(content, 'utf8');
  const crc = crc32(data);
  const localHeader = Buffer.alloc(30);
  localHeader.writeUInt32LE(0x04034b50, 0);
  localHeader.writeUInt16LE(20, 4);
  localHeader.writeUInt16LE(0, 6);
  localHeader.writeUInt16LE(0, 8);
  localHeader.writeUInt16LE(0, 10);
  localHeader.writeUInt16LE(0, 12);
  localHeader.writeUInt32LE(crc, 14);
  localHeader.writeUInt32LE(data.length, 18);
  localHeader.writeUInt32LE(data.length, 22);
  localHeader.writeUInt16LE(name.length, 26);
  localHeader.writeUInt16LE(0, 28);

  const centralHeader = Buffer.alloc(46);
  centralHeader.writeUInt32LE(0x02014b50, 0);
  centralHeader.writeUInt16LE(20, 4);
  centralHeader.writeUInt16LE(20, 6);
  centralHeader.writeUInt16LE(0, 8);
  centralHeader.writeUInt16LE(0, 10);
  centralHeader.writeUInt16LE(0, 12);
  centralHeader.writeUInt16LE(0, 14);
  centralHeader.writeUInt32LE(crc, 16);
  centralHeader.writeUInt32LE(data.length, 20);
  centralHeader.writeUInt32LE(data.length, 24);
  centralHeader.writeUInt16LE(name.length, 28);
  centralHeader.writeUInt16LE(0, 30);
  centralHeader.writeUInt16LE(0, 32);
  centralHeader.writeUInt16LE(0, 34);
  centralHeader.writeUInt16LE(0, 36);
  centralHeader.writeUInt32LE(0, 38);
  centralHeader.writeUInt32LE(0, 42);

  const centralSize = centralHeader.length + name.length;
  const centralOffset = localHeader.length + name.length + data.length;
  const endHeader = Buffer.alloc(22);
  endHeader.writeUInt32LE(0x06054b50, 0);
  endHeader.writeUInt16LE(0, 4);
  endHeader.writeUInt16LE(0, 6);
  endHeader.writeUInt16LE(1, 8);
  endHeader.writeUInt16LE(1, 10);
  endHeader.writeUInt32LE(centralSize, 12);
  endHeader.writeUInt32LE(centralOffset, 16);
  endHeader.writeUInt16LE(0, 20);

  return Buffer.concat([localHeader, name, data, centralHeader, name, endHeader]);
}

function crc32(buffer: Buffer): number {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function validateConfig(config: IncidentRuntimeConfig): void {
  const missing = [
    !config.azureOrganization ? 'AZURE_DEVOPS_ORGANIZATION' : '',
    !config.azureProject ? 'AZURE_DEVOPS_PROJECT' : '',
    !config.hasAzurePat ? 'AZURE_DEVOPS_PAT' : '',
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(`Configuracion incompleta: ${missing.join(', ')}`);
  }
}

function sanitizeMessage(value: string): string {
  return value
    .replace(/\b(AZURE_DEVOPS_PAT|PAT|password|secret|access_token|refresh_token)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\b(Basic|Bearer)\s+[A-Za-z0-9._~+/=-]+/gi, '$1 [REDACTED]')
    .replace(/([?&](?:sig|token|access_token|api-version)=)[^&\s]+/gi, '$1[REDACTED]');
}

main().catch((error) => {
  console.error('ATTACHMENT TEST RESULT');
  console.error('status=ERROR');
  console.error(`message=${sanitizeMessage(error instanceof Error ? error.message : String(error))}`);
  process.exitCode = 1;
});
