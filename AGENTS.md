# AGENTS

## High-Signal Context

This repository is a customized Playwright framework for testing **Motor de Distribución**. 
Before writing or changing code, review this document to avoid common agent pitfalls and run validation steps correctly.

### 🛠️ Developer Commands & Execution Quirks

Do not guess or assume standard Playwright commands. The workspace relies on custom TypeScript loaders and scripts for execution.

- **Run all tests with history tracking (Default):**
  ```bash
  npm test
  ```
- **Direct Playwright execution (No hooks):**
  ```bash
  npm run test:raw
  ```
- **Run focused groups via tags:**
  ```bash
npm run test:login      # Authentication flows
npm run test:procesos   # Process flows
  ```
- **Run specific Bloque 1 tests sequentially:**
  ```bash
  npm run test:block1:sequential
  ```
- **Execute or target a single spec:**
  ```bash
  npx playwright test tests/e2e/bloque-3/E9-GF-03.3/E9-GF-03.3.spec.ts
  ```

---

### 🔑 Authentication & Roles

The framework enforces strict separation between roles. Playing tests under the wrong role leads to false passes or hard-to-debug failures.

- **Storage State:** Session auth states are resolved dynamically from `.auth/admin.json`, `.auth/gestorGF.json`, or `.auth/gestorGT.json` via `src/config/roles.json`, `src/config/roles.ts`, and `playwright.config.ts`.
- **Role Scoping:**
  - **Administrador:** Runs on the `chromium` project.
  - **Gestor (Gastos Financieros / GF):** Runs on the `chromium-gestorGF` project.
  - *Never* execute Gestor GF tests using an Admin session file. This causes failures due to menu mismatch permissions.
- **Regenerating Sessions:** Use `scripts/auth/create-auth.js` with `AUTH_ROLE=admin`, `AUTH_ROLE=gestorGF`, or `AUTH_ROLE=gestorGT` to refresh storage states when they expire or when `No hay distribuciones disponibles` states block the UI.

---

### 📐 Project Conventions & Selector Best Practices

Rigorously adhere to these custom design-patterns instead of standard Playwright strategies:

- **Fixtures:** Always import from and extend `@fixtures/base.fixture` or bloque-specific fixtures (e.g., `@bloque3/_shared/bloque3.fixture`).
- **Wait Strategies:**
  - **DO NOT** use `page.waitForTimeout(ms)` or default to `networkidle` strategies.
  - Prefer explicit web-first assertions: `await expect(locator).toBeVisible({ timeout })` or `.toBeEnabled()`.
- **Locators:**
  - **DO NOT** use JavaScript OR `||` fallbacks. Always use Playwright's native `.or(...)` operator or write explicit conditions.
  - Prefer `data-testid` where available. Fall back to semantic buttons/roles and visible text.
  - Do not use absolute XPath unless encapsulated as a last-resort fallback.
- **Sub-module Isolation:**
  - Before growing or updating tests in a module (e.g., Bloque 3 / Gastos Financieros), ensure the sub-module dropdown selector actually switches the header shell context to `Gastos Financieros`.
  - Validate that the sidebar sections match the specific module's profile, and that unauthorized views/actions (like "Comunes > Lineas" or delete/trash icons) are hidden.

---

### 📝 Tracking, Specs, & Reports

- **Spec Location:**
  - Bloque 1 tests: `tests/e2e/bloque-1/...`
  - Bloque 3 tests: `tests/e2e/bloque-3/...`
- **Catalog Integration:** Keep spec IDs exactly matching the markdown files in `docs/catalogs/` (`catalogo_casos_prueba_bloque3.md`, etc.). These match original Excel IDs.
- **Progress Tracking:** Update `docs/tracking/seguimiento_casos_prueba.md` to indicate real status, automation readiness, or human validation.
- **Generators:** Clean up and analyze runs with `npm run report:executive` to build custom executive PDF/JSON summaries after testing runs.
