import dotenv from 'dotenv';
import {
  getAzureWorkItemWithRelations,
  loadIncidentRuntimeConfig,
} from '../../azure-devops/azure-devops.client';
import {
  extractAzureEvidenceSignature,
  getAzureAttachedFileRelations,
  sanitizeAzureEvidenceLogValue,
} from '../../azure-devops/azure-devops.evidence';
import type { IncidentRuntimeConfig } from '../../integrations/incidents/incident.types';

dotenv.config({ override: false });

async function main(): Promise<void> {
  const workItemId = Number(process.env.AZURE_DEVOPS_TEST_WORK_ITEM_ID);
  if (!Number.isInteger(workItemId) || workItemId <= 0) {
    console.log('ATTACHMENT DEDUP TEST DISABLED - AZURE_DEVOPS_TEST_WORK_ITEM_ID missing');
    return;
  }

  const config = loadIncidentRuntimeConfig();
  validateConfig(config);

  console.log('ATTACHMENT DEDUP TEST');
  console.log(`workItemId=${workItemId}`);

  const workItem = await getAzureWorkItemWithRelations(config, workItemId);
  const attachments = getAzureAttachedFileRelations(workItem);

  console.log(`attachmentsFound=${attachments.length}`);

  for (const attachment of attachments) {
    const comment = attachment.attributes?.comment ?? '';
    const signature = extractAzureEvidenceSignature(comment);
    const fileName = attachment.attributes?.name ?? getFileNameFromUrl(attachment.url);

    console.log('ATTACHMENT');
    console.log(`fileName=${sanitizeAzureEvidenceLogValue(fileName)}`);
    console.log(`signatureFound=${Boolean(signature)}`);
    console.log(`evidenceSignature=${sanitizeAzureEvidenceLogValue(signature)}`);
  }
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

function getFileNameFromUrl(value: string | undefined): string {
  if (!value) {
    return 'N/D';
  }

  try {
    const url = new URL(value);
    return url.pathname.split('/').filter(Boolean).at(-1) ?? 'N/D';
  } catch {
    return value.split(/[\\/]/).filter(Boolean).at(-1) ?? 'N/D';
  }
}

main().catch((error) => {
  console.error('ATTACHMENT DEDUP TEST');
  console.error('status=ERROR');
  console.error(`message=${sanitizeAzureEvidenceLogValue(error instanceof Error ? error.message : String(error))}`);
  process.exitCode = 1;
});
