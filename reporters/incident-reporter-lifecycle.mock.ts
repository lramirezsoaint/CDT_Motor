import { IncidentReporter } from './incident-reporter';
import type { AzureIncidentResult } from '../integrations/incidents/incident.types';

export default class IncidentReporterLifecycleMock extends IncidentReporter {
  constructor() {
    super({
      processAzureIncident: async () => {
        await delay(1000);
        return { status: 'SKIPPED', reason: 'lifecycle mock' } satisfies AzureIncidentResult;
      },
    });
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
