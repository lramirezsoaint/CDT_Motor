# Standard Workflow

## Input contract

Expect one Markdown file as input. Parse it before doing any implementation work.

Minimum fields to identify:
- scenario title
- test case ID
- module or feature
- tags
- preconditions
- numbered steps
- expected results
- required data
- constraints or forbidden actions

If the Markdown is missing a critical detail, infer it from the codebase only when the inference is low risk. Otherwise surface the gap explicitly.

## Catalog-specific handling

This repository may provide input through a consolidated catalog such as `catalogo_casos_prueba.md`.

When that happens:

1. Identify the exact `Caso de prueba` requested by the user.
2. Do not treat neighboring cases in the same scenario as implementation targets.
3. Verify whether the catalog says `Implementado: No`, but cross-check the actual specs before assuming the case is absent.
4. Reject incomplete cases for implementation when they are missing a meaningful title, expected result, critical data, or a stable business assertion.
5. Never persist credentials copied from the catalog into source-controlled files.
6. Default to one-case-at-a-time execution unless the user explicitly authorizes batch implementation.
7. Keep the original case ID exactly as it appears in the catalog so it remains traceable to the source Excel.

## Human approval model

Use these operating rules:

1. If the user requests a specific case, implement only that case.
2. If the user requests one case at a time, stop after each implementation and wait for human validation.
3. If the user later confirms the skill is working and asks for the remaining cases or a larger batch, continue in batch mode only from that point onward.
4. In batch mode, stop on the first ambiguous, incomplete, or failing case and report the blocker instead of silently skipping it.

## Automatable-or-not decision

For each requested case, classify it before implementation:

- `Automatable now`: enough data and a testable business assertion exist
- `Conditionally automatable`: feasible, but depends on missing data, stable selectors, environment setup, or external files
- `Not automatable yet`: the case is too incomplete, too manual, or lacks a stable automated oracle

Typical blockers:

- missing or empty expected result
- missing business data required to execute the flow
- unclear module or navigation target
- timing-only objective without a measurable acceptance threshold
- dependency on files or systems not available to the suite
- assertion that is purely manual or observational

If the case is not automatable now, do not generate speculative code. Record the reason in the tracking document and report it to the user.

## Implementation sequence

1. Locate the closest existing spec in `tests/e2e/`.
2. Locate the most relevant fixture and Page Object.
3. Reuse existing aliases, imports, and assertion style.
4. Decide where the new logic belongs:
- spec only for single-use assertions
- Page Object for reusable UI actions or reusable validations
5. Before automating a context switch in the application shell, verify whether that context is already selected:
- current flow
- current module family
- current mode or preset
- current region or company scope
Avoid re-selecting the active state when the visible chip, badge, or trigger text only reflects the current selection.
6. Preserve the current structure:
- `test.describe()` grouped by tags and case ID
- `test()` title containing tags and readable intent
- `test.step()` blocks using explicit business intent; Given/When/Then is recommended, not mandatory, unless the nearest module already uses it consistently
7. Add or update only the minimum code required by the scenario.

## Selector strategy

Prefer, in order:
1. `getByRole`
2. `getByLabel`
3. `getByPlaceholder`
4. `getByText`
5. `getByTestId`

Use raw CSS only when semantic locators are not available.

Use XPath only as a last resort and document why it could not be avoided.

## Waiting strategy

Prefer, in order:
1. `await expect(locator).toBeVisible()`
2. `await expect(locator).toBeEnabled()`
3. `await page.waitForURL(...)`
4. `await page.waitForLoadState(...)` when it matches the real navigation behavior

Do not use static sleeps as the main solution.

## Data strategy

- Reuse `@data/testData.json` when the scenario uses known static data.
- Generate unique values for create flows when collisions are possible.
- For dropdowns or catalogs, select an available option dynamically when the business rule allows it.
- Validate business results in the UI after creation or update; do not stop at a toast or successful click.
- If the source Markdown contains credentials or sensitive operational data, use environment variables or the existing auth mechanism instead of committing those values into fixtures.

## Verification sequence

Run in this order:
1. target file or `--grep` for the case ID
2. adjacent related test file if the Page Object was touched
3. wider suite only when the narrow run is green

For creation scenarios, prefer at least three consecutive targeted runs before considering the test stable.

## Failure handling

Classify failures before changing code:
- selector broke
- element rendered but is hidden or disabled
- navigation or auth state incorrect
- environment unavailable
- app bug

If the application throws a client-side exception or backend error, do not mask it with extra retries. Capture the context and report it as a product defect blocking automation.
