import 'dotenv/config';
import { loadIncidentRuntimeConfig } from '../../azure-devops/azure-devops.client';
import { JiraHttpClient } from '../../integrations/incidents/providers/jira/jira.client';

async function main() {
  if (process.env.JIRA_RUN_REAL_VALIDATION !== 'true') {
    console.log('JIRA VALIDATION DISABLED');
    return;
  }

  const config = loadIncidentRuntimeConfig();
  const client = new JiraHttpClient({
    baseUrl: config.jiraBaseUrl,
    projectKey: config.jiraProjectKey,
    email: config.jiraEmail,
    apiToken: process.env.JIRA_API_TOKEN?.trim() ?? '',
    issueType: config.jiraIssueType,
    requestTimeoutMs: config.requestTimeoutMs,
  });

  const result = await client.validateConnection();
  console.log(`[JIRA VALIDATION] ${result.status}`);
  if (result.statusCode) {
    console.log(`statusCode=${result.statusCode}`);
  }
  if (result.message) {
    console.log(`message=${sanitize(result.message)}`);
  }
  if (result.project) {
    console.log(`project=${result.project.key}`);
  }
  if (result.issueType) {
    console.log(`issueType=${result.issueType.name}`);
  }
  if (result.requestedIssueType) {
    console.log(`requestedIssueType=${result.requestedIssueType}`);
  }
  if (result.availableIssueTypes) {
    console.log('availableIssueTypes:');
    for (const issueType of result.availableIssueTypes) {
      console.log(`- ${issueType.name}`);
    }
  }
}

function sanitize(value: string): string {
  return value
    .replace(/\b(JIRA_API_TOKEN|apiToken|token|Authorization)(\s*[:=]\s*)([^\s&]+)/gi, '$1$2[REDACTED]')
    .replace(/\bBasic\s+[A-Za-z0-9+/=]+/gi, 'Basic [REDACTED]')
    .slice(0, 300);
}

main().catch((error) => {
  console.error(`[JIRA VALIDATION] HTTP_ERROR`);
  console.error(`message=${sanitize(error instanceof Error ? error.message : String(error))}`);
  process.exitCode = 1;
});
