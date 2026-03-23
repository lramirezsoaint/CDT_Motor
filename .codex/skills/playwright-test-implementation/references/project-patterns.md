# Project Patterns And Pitfalls

## Observed patterns in the current repo

These patterns are visible in the repository today and should inform new cases:

- Specs live under `tests/e2e/` by functional module.
- Shared fixtures come from `@fixtures/base.fixture`.
- Imports use project aliases such as `@pages`, `@config`, `@data`, `@components`.
- Test titles include tags plus the case ID and a readable business statement.
- `test.step()` is used, but the wording is not consistently Given/When/Then across the suite.
- Some newer assertions may include descriptive messages, but this is not yet a uniformly enforced pattern.

## Recommended title pattern

If the nearest module has no stronger local convention, use:
`@tag1 @tag2 @CASE-ID accion + condicion + resultado observable`

Examples aligned with the repo intent:
- auth login showing authenticated user in sidebar
- comunes search returning matching rows
- distribucion action available on authenticated home

## Recommended assertion pattern

Use message-bearing assertions:

```ts
await expect(page, 'Debe permanecer en Distribuciones tras autenticarse').toHaveURL(/distribuciones/i);
await expect(locator, 'Debe mostrar el buscador principal en el home').toBeVisible();
```

## Good implementation choices already seen

- Keep each scenario focused on one business outcome.
- Use `testData` for reusable values.
- Attach screenshots only when they add diagnostic value.
- Validate the UI state after actions, not just the action itself.
- Encapsulate at least part of the legacy selectors instead of scattering raw XPath across specs.

## Mistakes that must not be repeated

- Do not rely on absolute XPath selectors when a semantic locator is possible.
- Do not duplicate login logic inside unrelated Page Objects.
- Do not add silent retries that hide real application defects.
- Do not weaken assertions just to get a green run.
- Do not validate only a toast for create flows; also validate persistence in the UI.
- Do not assume remote environments are stable; verify whether failures are product defects or automation defects.
- Do not use `locatorA || locatorB` expecting Playwright locator fallback behavior.
- Do not use fallback navigation that changes the module under test unless the business case explicitly allows it.

## Real issues already detected in this repo

- Some Page Objects mix authentication concerns with feature navigation.
- There are fragile legacy locators using full-page XPath paths.
- The suite uses `networkidle` aggressively, which may amplify flakiness in dynamic environments.
- At least some locator fallbacks are implemented with JavaScript `||`, which is not valid fallback logic for Playwright locators.
- Some fallback paths weaken the original business assertion instead of failing clearly.

## Practical guardrails

- Before implementing a new case, inspect the closest passing spec in the same module.
- If the new case touches a flaky area, keep the test narrow and validate the app state before continuing.
- If the scenario requires creating data, use unique values and verify the created record appears in the grid or detail view.
- If the Markdown asks for a business rule, assert that rule directly in the UI with readable messages.
- Prefer `storageState`, fixture reuse, and `LoginPage` before adding any new auth handling.
- Prefer URL and locator expectations over `networkidle` and static waits.
