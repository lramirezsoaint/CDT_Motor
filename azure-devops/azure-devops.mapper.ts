import type { IncidentCandidate } from '../integrations/incidents/incident.types';
import { buildIncidentSignature } from '../integrations/incidents/incident-signature';

export type AzureJsonPatchOperation = {
  op: 'add';
  path: string;
  value: string;
};

export const buildDedupSignature = buildIncidentSignature;
export { buildIncidentSignature };

export function buildAzureTags(candidate: IncidentCandidate): string {
  return [
    'QA-AUTO',
    'Playwright',
    candidate.block.replace(/\s+/g, '-'),
    candidate.caseId,
    candidate.incidentDecision.classification,
    candidate.incidentDecision.probableCause,
  ]
    .map((tag) => tag.trim())
    .filter(Boolean)
    .join('; ');
}

export function buildAzureBugPatch(candidate: IncidentCandidate): AzureJsonPatchOperation[] {
  return [
    {
      op: 'add',
      path: '/fields/System.Title',
      value: candidate.bugTitle,
    },
    {
      op: 'add',
      path: '/fields/System.Description',
      value: buildAzureDescription(candidate),
    },
    {
      op: 'add',
      path: '/fields/System.Tags',
      value: buildAzureTags(candidate),
    },
  ];
}

export function buildAzureDescription(candidate: IncidentCandidate): string {
  const signature = buildIncidentSignature(candidate);

  return [
    '<h2>Resumen</h2>',
    line('Caso', candidate.caseId),
    line('Bloque', candidate.block),
    line('Clasificacion tecnica', candidate.incidentDecision.classification),
    line('Causa probable', candidate.incidentDecision.probableCause),
    line('Decision', candidate.incidentDecision.decision),
    line('Confianza', candidate.incidentDecision.confidence),
    '',
    '<h2>Motivo</h2>',
    escapeHtml(candidate.incidentDecision.reason),
    '',
    '<h2>Resultado esperado</h2>',
    escapeHtml(candidate.expectedResult),
    '',
    '<h2>Resultado observado</h2>',
    escapeHtml(candidate.observedResult),
    '',
    '<h2>Contexto</h2>',
    line('Rol', candidate.role),
    line('Proyecto Playwright', candidate.project),
    line('Vista', candidate.technicalDiagnostic.view),
    line('URL', candidate.finalUrl),
    line('Archivo', candidate.specFile),
    line('Origen tecnico', candidate.errorOrigin),
    '',
    '<h2>Evidencias locales</h2>',
    line('Screenshot', candidate.evidence.screenshot.join(', ') || 'N/D'),
    line('Video', candidate.evidence.video.join(', ') || 'N/D'),
    line('Trace', candidate.evidence.trace.join(', ') || 'N/D'),
    line('HTML report', candidate.evidence.htmlReport.join(', ') || 'N/D'),
    line('Logs', candidate.evidence.logs.join(', ') || 'N/D'),
    '',
    '<h2>Error original</h2>',
    `<pre>${escapeHtml(candidate.originalError)}</pre>`,
    '',
    '<h2>Firma QA</h2>',
    'QA-AUTO-SIGNATURE:<br>',
    escapeHtml(signature),
  ].join('\n');
}

function line(label: string, value: string): string {
  return `<b>${escapeHtml(label)}:</b> ${escapeHtml(value || 'N/D')}<br>`;
}

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
