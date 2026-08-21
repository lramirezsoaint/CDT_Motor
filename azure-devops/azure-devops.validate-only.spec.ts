import { expect, test } from '@playwright/test';
import { createAzureBug, loadIncidentRuntimeConfig } from './azure-devops.client';
import type { AzureJsonPatchOperation } from './azure-devops.mapper';

test.skip(process.env.AZURE_DEVOPS_RUN_VALIDATE_ONLY !== 'true', 'Validacion real validateOnly deshabilitada por defecto.');

test.describe('Azure DevOps validateOnly harness', () => {
  test('minimal and full Bug POST validateOnly do not create Work Items', async () => {
    const config = loadIncidentRuntimeConfig();
    const minimalPatch: AzureJsonPatchOperation[] = [
      {
        op: 'add',
        path: '/fields/System.Title',
        value: '[QA-AUTO-VALIDATION] Test',
      },
    ];
    const fullPatch: AzureJsonPatchOperation[] = [
      {
        op: 'add',
        path: '/fields/System.Title',
        value: '[QA-AUTO-VALIDATION] Test completo',
      },
      {
        op: 'add',
        path: '/fields/System.Description',
        value: [
          'Validacion validateOnly=true desde el cliente Azure DevOps.',
          'Este request no debe guardar Work Item.',
          'QA-AUTO-SIGNATURE:<br>',
          'QA-AUTO-VALIDATION|VALIDATE_ONLY|Cliente Azure',
        ].join('\n'),
      },
      {
        op: 'add',
        path: '/fields/System.Tags',
        value: 'QA-AUTO; Playwright; QA-AUTO-VALIDATION',
      },
    ];

    await runValidationCase('minimal', minimalPatch, config);
    await runValidationCase('full', fullPatch, config);
  });
});

async function runValidationCase(
  name: string,
  patch: AzureJsonPatchOperation[],
  config: ReturnType<typeof loadIncidentRuntimeConfig>,
) {
  const started = Date.now();
  const requestBody = JSON.stringify(patch);

  console.log('[AZURE VALIDATE ONLY]');
  console.log(`case=${name}`);
  console.log('validateOnly=true');
  console.log(`bodyIsArray=${Array.isArray(patch)}`);
  console.log(`operations=${patch.length}`);
  console.log(`requestBodyBytes=${Buffer.byteLength(requestBody, 'utf8')}`);

  const response = await createAzureBug(patch, config, { validateOnly: true });

  console.log('[AZURE VALIDATE ONLY RESULT]');
  console.log(`case=${name}`);
  console.log('status=VALIDATED');
  console.log(`statusCode=${response.__statusCode ?? 'N/D'}`);
  console.log(`elapsedMs=${Date.now() - started}`);

  expect(response.__statusCode).toBeGreaterThanOrEqual(200);
  expect(response.__statusCode).toBeLessThan(300);
}
