# AGENTS

## Purpose

This repository contains a local Codex skill intended to implement Playwright tests from business test cases written in Markdown.

The local skill lives at:

- `.codex/skills/playwright-test-implementation/`

Use it when the task is to create or update Playwright specs from a written case definition, especially when the implementation must follow this repository's existing fixtures, Page Objects, selector constraints, and test-tag conventions.

## Recommended activation

To activate the local skill in a prompt, explicitly mention:

- `$playwright-test-implementation`

Recommended prompt shape:

`Use $playwright-test-implementation with catalogo_casos_prueba.md and implement the case E0-LOGIN-ADMIN-01`

## Operating modes

This repo expects two valid ways of working:

### 1. Human-gated mode

This is the default and preferred mode at the start.

- the human asks for one exact case
- the agent implements only that case
- the agent stops and waits for human testing and validation
- the next case starts only after explicit user approval

Typical prompts:

- `Use $playwright-test-implementation with catalogo_casos_prueba.md and implement E0-LOGIN-ADMIN-01`
- `Use $playwright-test-implementation and implement the next pending case`

### 2. Authorized batch mode

This mode is allowed only after the human has validated that the skill is producing correct results.

- the human explicitly authorizes implementing multiple remaining cases
- the agent may continue with the rest of the requested pending cases
- the agent must still stop on ambiguity, missing information, or failing validation

Typical prompts:

- `Use $playwright-test-implementation and implement the remaining login cases`
- `Use $playwright-test-implementation and continue with the rest of the pending cases`
- `Use $playwright-test-implementation and implement the remaining cases automatically`

## Expected input

The main input format currently used in this repo is:

- `catalogo_casos_prueba.md`

That catalog is not guaranteed to be fully curated. It may contain:

- implemented and non-implemented cases mixed together
- incomplete cases
- inconsistent IDs
- sensitive credential examples that must not be copied into committed files

Those inconsistent IDs must be preserved exactly as they appear, because they map back to the source Excel.

Before implementing a case, the agent should:

1. isolate one exact case ID
2. verify whether the case already exists in `tests/e2e/`
3. validate that the case has enough information to automate safely
4. prefer existing auth fixtures and environment variables over catalog credentials

In human-gated mode, the agent must stop after step 4 for the selected case once implementation and local verification are finished, and wait for user confirmation before moving on.

The agent should also update the repository tracking document:

- `seguimiento_casos_prueba.md`

That file exists to track real implementation status, automation readiness, and human validation without altering the original catalog semantics.

## Repository conventions

Prefer these repository-local rules over generic Playwright habits when they conflict:

- reuse `@fixtures/base.fixture`
- inspect the closest existing spec in the same module before creating a new one
- extend existing Page Objects only when the interaction is reusable
- avoid `waitForTimeout()` and avoid using `networkidle` as the default synchronization strategy
- avoid JavaScript `||` as locator fallback logic
- avoid fallbacks that change the module under test
- do not weaken business assertions just to get a passing test

## References

The skill contains project-specific references here:

- `.codex/skills/playwright-test-implementation/references/levantamiento.md`
- `.codex/skills/playwright-test-implementation/references/project-patterns.md`
- `.codex/skills/playwright-test-implementation/references/tracking-guidelines.md`
- `.codex/skills/playwright-test-implementation/references/workflow.md`

When updating the skill, keep those references aligned with the actual codebase.
