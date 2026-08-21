import 'dotenv/config';
import { loadIncidentRuntimeConfig } from '../../azure-devops/azure-devops.client';
import { buildIncidentSignature } from '../../integrations/incidents/incident-signature';
import { JiraHttpClient } from '../../integrations/incidents/providers/jira/jira.client';
import { findJiraDuplicateBySignature } from '../../integrations/incidents/providers/jira/jira.dedup';
import type { JiraIssue } from '../../integrations/incidents/providers/jira/jira.types';
import { makeProviderTestCandidate } from '../../integrations/incidents/providers/provider-test-helpers';

async function main() {
  if (process.env.JIRA_RUN_REAL_DEDUP_TEST !== 'true') {
    console.log('JIRA DEDUP TEST DISABLED');
    return;
  }

  const config = loadIncidentRuntimeConfig();
  const candidate = makeProviderTestCandidate();
  const client = new JiraHttpClient({
    baseUrl: config.jiraBaseUrl,
    projectKey: config.jiraProjectKey,
    email: config.jiraEmail,
    apiToken: process.env.JIRA_API_TOKEN?.trim() ?? '',
    issueType: config.jiraIssueType,
    requestTimeoutMs: config.requestTimeoutMs,
  });
  const jql = [
    `project = "${config.jiraProjectKey.replace(/"/g, '\\"')}"`,
    'labels = QA-AUTO',
    `text ~ "${candidate.caseId}"`,
    'statusCategory != Done',
  ].join(' AND ');

  const issues = await client.searchIssues(jql);
  const duplicate = findJiraDuplicateBySignature(candidate, issues);

  console.log('[JIRA DEDUP]');
  console.log(`candidateCount=${issues.length}`);
  console.log(`signature=${buildIncidentSignature(candidate)}`);
  console.log(`duplicate=${formatJiraDedupDuplicate(issues, duplicate)}`);
}

export function formatJiraDedupDuplicate(_issues: JiraIssue[], duplicate: JiraIssue | undefined): string {
  return duplicate?.key ?? 'false';
}

if (require.main === module) {
  main().catch((error) => {
    console.error('[JIRA DEDUP] ERROR');
    console.error(`message=${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  });
}
