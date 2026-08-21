import { expect, test } from '@playwright/test';

test.skip(
  process.env.INCIDENT_REPORTER_LIFECYCLE_REAL !== 'true',
  'Reporter lifecycle diagnostic deshabilitado por defecto.',
);

test('E37-AM-01.01.1 reporter lifecycle waits for delayed Azure mock', async () => {
  expect(false, 'intentional failure for reporter lifecycle diagnostic').toBe(true);
});
