# Tracking Guidelines

## Purpose

When implementing cases from `catalogo_casos_prueba.md`, keep progress in a tracking document separate from the source catalog.

The catalog mirrors the Excel source and should preserve original IDs and source wording as much as possible. Progress, automation readiness, and follow-up notes belong in a tracking artifact, not as ad hoc edits to the source catalog.

## Recommended tracking fields

For each case, track at least:

- `case_id`
- `scenario_id`
- `catalog_implemented_flag`
- `implementation_status`
- `automation_readiness`
- `human_validation_status`
- `blocking_reason`
- `notes`

## Recommended values

### `implementation_status`

Use one of:

- `not_started`
- `already_in_code`
- `implemented`
- `blocked`
- `skipped`

### `automation_readiness`

Use one of:

- `automatable_now`
- `conditionally_automatable`
- `not_automatable_yet`

### `human_validation_status`

Use one of:

- `pending`
- `approved`
- `rejected`

## Interpretation

- `catalog_implemented_flag` reflects only what the source catalog says, even if it is wrong or outdated.
- `implementation_status` reflects the real state in the repository.
- `automation_readiness` reflects whether the case can be automated with current information and system support.
- `human_validation_status` reflects the mandatory human checkpoint when working case-by-case.

## Example row

```text
case_id: E0-LOGIN-ADMIN-01
scenario_id: E0-login-01
catalog_implemented_flag: No
implementation_status: already_in_code
automation_readiness: automatable_now
human_validation_status: pending
blocking_reason:
notes: Catalog says not implemented, but matching Playwright coverage exists in tests/e2e/auth.
```

## Practical rules

- Never rewrite case IDs to normalize casing or separators. Keep them exactly as they came from the source.
- Never copy credentials from the catalog into committed tracking files.
- If a case is incomplete, prefer `conditionally_automatable` or `not_automatable_yet` over guesswork.
- If a case exists in code but still needs review, use `already_in_code` plus the appropriate human validation status.
- In human-gated mode, update tracking after each case and stop for review.
- In batch mode, continue updating tracking per case and stop on the first blocker that makes the next decision ambiguous.
