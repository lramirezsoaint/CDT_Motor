import type { IncidentCandidate, IncidentRuntimeConfig } from '../integrations/incidents/incident.types';
import { buildIncidentSignature } from './azure-devops.mapper';
import { debug } from '../integrations/incidents/incident-logger';

export type AzureDuplicateCandidate = {
  id: number;
  url?: string;
  _links?: {
    html?: {
      href?: string;
    };
  };
  fields?: {
    'System.Description'?: string;
    'System.State'?: string;
    'System.Tags'?: string;
  };
};

export const DEFAULT_CLOSED_STATES = ['Closed', 'Resolved', 'Done', 'Removed'];

export function getClosedStates(): string[] {
  const configured = process.env.AZURE_DEVOPS_CLOSED_STATES?.split(',').map((state) => state.trim()).filter(Boolean);
  return configured?.length ? configured : DEFAULT_CLOSED_STATES;
}

export function buildDuplicateWiql(candidate: IncidentCandidate, config: IncidentRuntimeConfig): string {
  const closedStates = getClosedStates().map(quoteWiqlValue).join(', ');

  return [
    'SELECT [System.Id], [System.Title], [System.State], [System.Tags]',
    'FROM WorkItems',
    'WHERE [System.TeamProject] = @project',
    "AND [System.WorkItemType] = 'Bug'",
    `AND [System.Tags] CONTAINS '${escapeWiql(candidate.caseId)}'`,
    "AND [System.Tags] CONTAINS 'QA-AUTO'",
    closedStates ? `AND [System.State] NOT IN (${closedStates})` : '',
    'ORDER BY [System.ChangedDate] DESC',
  ]
    .filter(Boolean)
    .join(' ');
}

export function findDuplicateBySignature(
  candidate: IncidentCandidate,
  items: AzureDuplicateCandidate[],
): AzureDuplicateCandidate | undefined {
  const currentSignature = normalizeIncidentSignature(buildIncidentSignature(candidate));
  const closedStates = getClosedStates();

  return items.find((item) => {
    const state = item.fields?.['System.State'] ?? '';
    const closedState = isClosedState(state, closedStates);

    debugDuplicateCandidate(item.id, state, closedState);

    if (closedState) {
      return false;
    }

    const description = item.fields?.['System.Description'] ?? '';
    const existingSignature = extractQaAutoSignature(description);
    const tags = item.fields?.['System.Tags'] ?? '';

    if (!existingSignature) {
      debugMissingSignature(item.id);
      logDedup('signature-check', {
        existingBugId: item.id,
        existingState: state || 'N/D',
        existingTags: tags || 'N/D',
        signatureFound: false,
        normalizedRequestedSignature: currentSignature,
        match: false,
      });
      return false;
    }

    const normalizedExistingSignature = normalizeIncidentSignature(existingSignature);
    const match = normalizedExistingSignature === currentSignature;
    logDedup('signature-check', {
      existingBugId: item.id,
      existingState: state || 'N/D',
      existingTags: tags || 'N/D',
      signatureFound: true,
      existingSignature,
      normalizedExistingSignature,
      normalizedRequestedSignature: currentSignature,
      match,
    });

    return match;
  });
}

export function extractQaAutoSignature(description: string): string | undefined {
  const normalizedDescription = normalizeDescriptionText(description);
  const signatures = [...normalizedDescription.matchAll(/QA-AUTO-SIGNATURE:\s*([^\n]+)/gi)]
    .map((match) => match[1]?.trim())
    .filter(Boolean);

  return signatures.length === 1 ? signatures[0] : undefined;
}

export function normalizeIncidentSignature(value: string): string {
  return value
    .replace(/\r\n/g, '\n')
    .split('|')
    .map((part) => normalizeSignaturePart(part))
    .join('|');
}

function isClosedState(state: string, closedStates: string[]): boolean {
  const normalizedState = normalizeIncidentSignature(state);
  return closedStates.some((closedState) => normalizeIncidentSignature(closedState) === normalizedState);
}

function normalizeDescriptionText(description: string): string {
  return decodeBasicHtmlEntities(description)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\r\n/g, '\n');
}

function decodeBasicHtmlEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function normalizeSignaturePart(value: string): string {
  const normalized = value.replace(/\s+/g, ' ').trim().toLowerCase();
  return normalized && !/^(unknown|undefined|null|n\/a|n\/d)$/i.test(normalized) ? normalized : 'n/d';
}

function debugDuplicateCandidate(existingBugId: number, existingState: string, closedState: boolean): void {
  debug('[AZURE DEDUP DEBUG]', {
    existingBugId,
    existingState: existingState || 'N/D',
    closedState,
  });
}

function debugMissingSignature(existingBugId: number): void {
  debug('[AZURE DEDUP DEBUG]', {
    message: 'Candidato Azure sin firma de deduplicacion.',
    existingBugId,
  });
}

function logDedup(step: string, details: Record<string, unknown>): void {
  debug('[AZURE DEDUP]', { step, ...details });
}

function quoteWiqlValue(value: string): string {
  return `'${escapeWiql(value)}'`;
}

function escapeWiql(value: string): string {
  return value.replace(/'/g, "''");
}
