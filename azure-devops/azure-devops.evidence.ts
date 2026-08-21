import type { IncidentCandidate } from '../integrations/incidents/incident.types';
import { buildIncidentEvidenceSignature, INCIDENT_EVIDENCE_SIGNATURE_MARKER } from '../integrations/incidents/incident-signature';
import type { AzureWorkItemRelation, AzureWorkItemWithRelations } from './azure-devops.client';

const EVIDENCE_MARKER = INCIDENT_EVIDENCE_SIGNATURE_MARKER;

export type AzureEvidenceType = 'screenshot' | 'trace' | 'video';

export function buildAzureEvidenceSignature(candidate: IncidentCandidate, type: AzureEvidenceType): string {
  return buildIncidentEvidenceSignature(candidate, type);
}

export function buildAzureEvidenceComment(candidate: IncidentCandidate, type: AzureEvidenceType): string {
  const label = type === 'screenshot' ? 'Screenshot' : type === 'trace' ? 'Trace' : 'Video';
  return `QA-AUTO ${label} - ${candidate.caseId}\n${EVIDENCE_MARKER} ${buildAzureEvidenceSignature(candidate, type)}`;
}

export function hasAzureEvidenceSignature(
  workItem: AzureWorkItemWithRelations,
  signature: string,
): boolean {
  const expected = normalizeAzureEvidenceSignature(signature);

  return getAzureAttachedFileRelations(workItem).some((relation) => {
    const comment = relation.attributes?.comment;
    const found = typeof comment === 'string' ? extractAzureEvidenceSignature(comment) : undefined;
    return found !== undefined && normalizeAzureEvidenceSignature(found) === expected;
  });
}

export function getAzureAttachedFileRelations(workItem: AzureWorkItemWithRelations): AzureWorkItemRelation[] {
  return (workItem.relations ?? []).filter((relation) => relation.rel === 'AttachedFile');
}

export function extractAzureEvidenceSignature(comment: string): string | undefined {
  const match = comment.match(/QA-AUTO-EVIDENCE:\s*([^\r\n]+)/i);
  return match?.[1]?.trim() || undefined;
}

export function normalizeAzureEvidenceSignature(value: string): string {
  return value
    .replace(/\r\n/g, '\n')
    .trim()
    .split('|')
    .map((part) => part.replace(/\s+/g, ' ').trim().toLowerCase())
    .join('|');
}

export function sanitizeAzureEvidenceLogValue(value: string | undefined): string {
  if (!value) {
    return 'N/D';
  }

  return value
    .replace(/\b(AZURE_DEVOPS_PAT|PAT|password|secret|access_token|refresh_token)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\b(Basic|Bearer)\s+[A-Za-z0-9._~+/=-]+/gi, '$1 [REDACTED]')
    .replace(/[?\r\n].*$/g, '')
    .slice(0, 180);
}
