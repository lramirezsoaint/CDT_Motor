---
name: playwright-test-implementation
description: Implement Playwright end-to-end test cases from a Markdown input file that contains the scenario, business flow, validations, data rules, and execution constraints. Use when Codex must create or update Playwright specs in this project from a written test case, especially when the implementation must follow existing project patterns, preserve tags and naming conventions, reuse current fixtures/Page Objects, avoid flaky waits, and prevent the common mistakes already detected in this codebase.
---

# Playwright Test Implementation

Implement Playwright cases from the Markdown file provided by the user. Treat the Markdown as the primary source of truth for the business scenario, but always reconcile it with the existing test suite, fixtures, Page Objects, data files, and environment constraints before editing code.

Default operating mode is human-gated: implement one case, stop, and wait for explicit user approval before continuing to another case.

## Workflow

1. Read the Markdown input file first.
2. Extract these fields before writing code:
- case ID
- tags
- business goal
- preconditions
- steps
- expected results
- data rules
- restrictions
3. Inspect the nearest existing spec in `tests/e2e/` for naming, tags, `test.step()` style, and fixture usage.
4. Inspect the related Page Object before deciding whether to add logic there or keep the logic inside the spec.
5. Prefer extending existing Page Objects instead of creating new abstractions unless the scenario introduces a clearly reusable interaction.
6. Implement the smallest safe change set.
7. Run the narrowest useful Playwright command first:
- single file
- `--grep` by ID or title
- full suite only after the target scenario passes
8. If the test fails, diagnose the real cause before editing again:
- selector issue
- visibility issue
- timing or navigation issue
- invalid test data
- auth or environment issue
- frontend or backend defect
9. Stop only when the implemented scenario is stable and the relevant existing tests still pass.

Before editing code in this repository, read `references/levantamiento.md` and treat it as the baseline assessment of current strengths, weaknesses, and migration constraints in the suite.

When the input file is `catalogo_casos_prueba.md` or another catalog-style Markdown, isolate exactly one target case before implementing anything unless the user explicitly authorizes batch implementation after prior validation.

## Output Rules

- Keep existing tags such as `@smoke`, `@critical`, `@auth`, `@distribucion`, `@comunes`.
- Preserve the dominant style of the nearest module-level spec. If the target module already uses a title pattern, follow that local pattern first.
- When adding a new title pattern, prefer:
`@tags @CASE-ID accion + condicion + resultado observable`
- Use `test.step()` with explicit business intent. Given/When/Then wording is recommended when it fits naturally, but do not force awkward phrasing if the surrounding module uses concise Spanish step names.
- Add descriptive assertion messages in `expect(...)` when introducing new assertions or touching a spec that already uses them.
- Reuse `@fixtures/base.fixture` and project aliases already present in the repo.
- Keep business assertions intact; do not weaken validations just to make the test pass.
- Preserve the case ID exactly as written in the source. Do not normalize catalog IDs, because they must remain traceable back to the source Excel.
- In default mode, finish one case and stop. Summarize what was implemented, how to validate it, and wait for the user's next instruction.

## Editing Rules

- Modify existing test files or related Page Objects only when necessary.
- Do not change global config unless the Markdown explicitly requires an environment/config fix and the failure confirms it.
- Do not introduce `waitForTimeout()` except as a last-resort temporary diagnostic aid, and remove it before finishing.
- Do not hardcode data that can collide if the scenario requires unique creation; generate safe values.
- Do not duplicate login or navigation logic if the project already has it in fixtures or Page Objects.
- Do not add absolute file paths inside the skill or in generated documentation; use relative references such as `references/...`.
- Do not use `locatorA || locatorB` as a Playwright fallback strategy. Use `.or(...)` or explicit conditional visibility checks.
- Do not introduce fallbacks that change the business target of the test, such as validating another module when the requested module is unavailable, unless the Markdown explicitly defines that fallback behavior.
- Do not weaken an assertion from “action exists and is usable” to “screen title is visible”.
- Do not copy secrets from the Markdown catalog into committed test data. If the input includes credentials or sensitive values, move them to environment variables or existing secret handling.
- Do not implement cases with materially incomplete inputs as if they were complete. If title, expected result, or core data is missing, stop and surface the gap.
- Do not continue automatically from one case to the next unless the user explicitly asks for batch or sequential unattended implementation.

## Decision Guide

- If the scenario is mostly assertions on an existing screen, edit the spec only.
- If the scenario needs reusable UI interactions already repeated elsewhere, extend the related Page Object.
- If the scenario depends on business data from catalogs or dropdowns, select from available options dynamically instead of hardcoding fragile values.
- If a failure reveals an application crash or server defect, preserve the failing assertion context and report it clearly instead of masking it with retries.
- If authentication is needed, prefer `storageState`, existing fixtures, or `LoginPage`. Do not reimplement login inside functional Page Objects.
- Treat `README.md` as supportive context only. The codebase is the source of truth when README and implementation diverge.
- If the Markdown catalog says `Implementado: No`, verify the codebase anyway. The catalog may lag behind the actual specs.
- If the user asks for a specific case ID, implement only that case.
- If the user asks to continue with “the next case”, select the next pending case in the agreed sequence and stop again after finishing it.
- If the user explicitly authorizes implementing “the rest” or another batch after successful validation, process multiple pending cases, but still report progress and stop on ambiguity, missing data, or failing validation.
- Before implementing a case from the catalog, assess whether it is automatable with the information currently available. If it is not, explain why and record the blocker in the tracking document instead of forcing an implementation.
- Maintain a tracking artifact for catalog progress that distinguishes source-catalog status from implementation status, automation readiness, and human validation status.

## Project References

Read `references/levantamiento.md` first for the current repository assessment, including real issues already found in auth, navigation, selector strategy, and assertion strength.

Read `references/workflow.md` for the standardized implementation flow from Markdown input to stable Playwright scenario.

Read `references/project-patterns.md` before editing code in this repository. It distinguishes between patterns already observed in the codebase and the recommended practices that should guide new implementations.

Read `references/tracking-guidelines.md` when the task involves selecting cases from the catalog, deciding whether they are automatable, or updating progress and follow-up status.
