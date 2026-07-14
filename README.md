# IDDS AI Skills Package

Operational skill pack that teaches AI coding agents how to design, audit, and implement Indonesian government / public-service interfaces in alignment with the **INA Digital Design System (IDDS)**.

> The package does not replace the [official IDDS documentation](https://design.inadigital.go.id). It is an operational instruction set so AI agents apply IDDS decisions **consistently** when generating or reviewing UI for government, village administration, and public-service applications.

---

## Why This Package Exists

Generic "AI-slop" interfaces (random gradients, glassmorphism, fake metrics, vague error messages) are unsuitable for Indonesian public-service products. This package gives an agent:

- A **shared voice** about what IDDS-aligned UI looks like (calm, official, accessible, structured).
- A **decision tree** that routes any UI task to the right rules, patterns, and templates.
- **Copy-paste-ready code** for the three canonical IDDS implementation examples.

---

## What Is Inside

```txt
.idds-skills/
├── SKILL.md                       # entry point — read this first
├── README.md                      # this file
│
├── rules/                         # 7 rule files — non-negotiable constraints
│   ├── design-principles.md       # the 5 IDDS principles + non-negotiables
│   ├── color-system.md            # semantic color tokens (primary, content, surface, stroke)
│   ├── typography.md              # type scale + Peruri Sans usage
│   ├── spacing.md                 # 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 scale
│   ├── accessibility.md           # WCAG-aligned rules for labels, focus, contrast
│   ├── writing-tone.md            # Indonesian copy rules for government UI
│   └── anti-ai-slop.md            # forbids generic SaaS visuals in gov UI
│
├── patterns/                      # 6 page-level patterns
│   ├── admin-panel.md             # back-office / operator dashboards
│   ├── dashboard.md               # metric, chart, and table dashboards
│   ├── table-management.md        # dense record tables with filters
│   ├── public-service-form.md     # multi-step citizen submission forms
│   ├── login-register.md          # authentication screens
│   └── empty-state.md             # empty / no-data screens
│
├── implementation/                # 6 implementation guides
│   ├── react-idds.md              # official @idds/react usage
│   ├── vue-idds.md                # official @idds/vue usage
│   ├── sveltekit-adaptation.md    # SvelteKit adaptation (no official package)
│   ├── tailwind-token-mapping.md  # map IDDS tokens to Tailwind utilities
│   ├── shadcn-integration.md      # integrate shadcn/ui & shadcn-vue with IDDS tokens
│   └── component-mapping.md       # need → component decision table
│
├── templates/                     # 4 ready-to-use page templates
│   ├── README.md                  # template overview
│   ├── shared/                    # AppShell, TopBar, Sidebar (JSX + HTML)
│   ├── dashboard/                 # Product Designer Dashboard
│   ├── formulir/                  # Buat Akun (account registration form)
│   └── katalog-artikel/           # Article catalog with tabs + pagination
│
└── checklists/                    # 3 review checklists
    ├── ui-review.md               # generic UI review gate
    ├── accessibility-review.md    # WCAG-focused review gate
    └── government-app-review.md   # IDDS + anti-slop + accessibility
```

---

## Quick Start

### 1. Install

The easiest and recommended way to install this skill is using the `skills` CLI:

```bash
# Install to your active project (default)
npx skills add phowdecayed/ina-digital-design-system-skills

# Install globally to your agent's global skills directory
npx skills add phowdecayed/ina-digital-design-system-skills -g
```

Alternatively, you can manually copy the repository files into your project's or agent's skills directory:

```bash
# option A — copy to a project (e.g. for OpenCode, Cursor, Cline)
mkdir -p ./my-project/.agents/skills/idds
cp -r * ./my-project/.agents/skills/idds/

# option B — install to the agent's global skills folder (e.g. for OpenCode)
mkdir -p ~/.config/opencode/skills/idds
cp -r * ~/.config/opencode/skills/idds/
```

### 2. Point the agent at it

Use a single, clear instruction. The package is designed to be loaded **once**; the agent then routes per task.

```txt
You are working on a SvelteKit dashboard for an Indonesian village service.
Load the skill at .idds-skills/SKILL.md, then read these files in order:
1. rules/design-principles.md
2. rules/color-system.md
3. rules/spacing.md
4. rules/accessibility.md
5. patterns/dashboard.md
6. templates/dashboard/
Apply every non-negotiable rule and use the dashboard template as the
structural base. Output a detailed implementation-ready design spec.
```

### 3. Verify

Before merging any AI-generated UI, run the relevant checklist from `checklists/`:

- `ui-review.md` — every screen
- `accessibility-review.md` — every form, modal, navigation
- `government-app-review.md` — every citizen-facing or operator screen

---

## How to Choose the Right Files

| Task | Read in this order |
|---|---|
| Design a new admin dashboard | `SKILL.md` → `rules/*` → `patterns/dashboard.md` → `templates/dashboard/` → `checklists/ui-review.md` |
| Build a public-service form | `SKILL.md` → `rules/*` → `patterns/public-service-form.md` → `templates/formulir/` → `checklists/accessibility-review.md` |
| Audit an existing UI | `SKILL.md` → `rules/anti-ai-slop.md` → relevant `patterns/` → `checklists/government-app-review.md` |
| Add a new screen to a React app | `SKILL.md` → `implementation/react-idds.md` → `templates/shared/` → closest `templates/*/` → `checklists/ui-review.md` |
| Add a new screen to a Vue app | `SKILL.md` → `implementation/vue-idds.md` → `templates/shared/` → closest `templates/*/` → `checklists/ui-review.md` |
| Port IDDS to SvelteKit | `SKILL.md` → `implementation/sveltekit-adaptation.md` → `implementation/tailwind-token-mapping.md` → `templates/*/` |
| Review copy / Indonesian text | `SKILL.md` → `rules/writing-tone.md` → `checklists/government-app-review.md` |

---

## Template Catalogue

Every template ships in two forms:

- **`.jsx`** — production-ready React components using `@idds/react`.
- **`.html`** — static markup with Tailwind CDN + `@idds/js`, openable in any browser for review.

| Template | IDDS Playground source | When to use it | Key components |
|---|---|---|---|
| [`shared/`](./templates/shared/) | – | Wrap every page with a consistent sidebar + topbar | AppShell, TopBar, Sidebar, Avatar, Dropdown |
| [`dashboard/`](./templates/dashboard/) | [playground/react/dashboard](https://design.inadigital.go.id/playground/react/dashboard) | Admin / monitoring / statistics dashboards | Date Picker, Card, Tabs, Chart, Table, Badge, Pagination, EmptyState |
| [`formulir/`](./templates/formulir/) | [playground/react/form-submission](https://design.inadigital.go.id/playground/react/form-submission) | Registration, login, multi-field citizen forms | TextField, PhoneInput, Button, Checkbox, Divider, Alert |
| [`katalog-artikel/`](./templates/katalog-artikel/) | [playground/react/articles](https://design.inadigital.go.id/playground/react/articles) | Article / knowledge base / service directories | Tabs, TextField (search), Card, Chip, Avatar, Pagination, Dropdown |

> The three page templates are direct ports of the **"Penerapan di Sistem Pemerintahan"** examples on the official IDDS site.

---

## Brand Themes

IDDS ships with a fixed set of brand themes. Pick the one that matches the institution:

| Theme | When to use |
|---|---|
| `inagov` | Default for INAgov and most cross-ministry products. |
| `panrb` | Kementerian PANRB products. |
| `bkn` | Badan Kepegawaian Negara products. |
| `lan` | Lembaga Administrasi Negara products. |
| `bgn` | Badan Gizi Nasional products. |
| `default` | Use when no institution-specific brand is documented. |

Set the theme **once** in the application entry point. See [`implementation/react-idds.md`](./implementation/react-idds.md) for the exact code.

Do not switch brand themes per page unless the product is intentionally multi-brand.

---

## Framework Support

| Framework | Status | Use |
|---|---|---|
| **React + Vite/Next.js** | Official package available (`@idds/react`) | `implementation/react-idds.md` + `templates/*/*.jsx` |
| **Vue 3** | Official package available (`@idds/vue`) | `implementation/vue-idds.md` + port `templates/*/*.jsx` → `.vue` single-file components |
| **SvelteKit** | No official package — use as adaptation guide | `implementation/sveltekit-adaptation.md` |
| **Vanilla HTML / static prototype** | CDN-only via `@idds/js` + Tailwind CDN | `templates/*/*.html` |

If you adapt to a framework not listed above, follow [`implementation/sveltekit-adaptation.md`](./implementation/sveltekit-adaptation.md) as a starting point and preserve the **semantic token layer** (`primary-500`, `content-primary`, `surface-primary`, `stroke-primary`) rather than hard-coding hex values.

---

## Non-Negotiables (Quick Reference)

The full list is in `rules/anti-ai-slop.md` and `rules/design-principles.md`. The fastest way to keep an AI honest is to require it to answer "no" to each before submitting a screen:

- No random gradients on government UI.
- No excessive glassmorphism or stacked shadows.
- No arbitrary spacing values — use the 4/8/12/16/24/32/48 scale.
- No more than 3–5 status colors per screen.
- No status communicated by color only.
- No vague error messages like "Something went wrong".
- No fake metrics without context.
- No decorative-only icons.
- No critical information hidden in tooltips.
- No claiming official package support for undocumented frameworks.

---

## Example AI Instructions

### Design a new citizen submission screen

```txt
Use the .idds-skills/SKILL.md rules. I need a multi-step form for village
letter requests (Surat Keterangan Domisili). Apply the public-service-form
pattern, use templates/formulir/AccountForm.jsx as the structural base,
follow rules/writing-tone.md for Indonesian copy, and end with a
ticket-number confirmation screen. Output a full React spec with
states, validation, and accessibility notes.
```

### Audit an existing dashboard

```txt
Use the .idds-skills/SKILL.md rules. Audit this dashboard against
IDDS principles and run it through checklists/ui-review.md and
checklists/government-app-review.md. Use the "Standard Review Command"
template from SKILL.md (Diagnosis → IDDS Alignment → Problems Found →
Recommended Layout → Component Mapping → Token Corrections →
Accessibility Fixes → Anti-AI-Slop Fixes → Implementation Notes).
```

### Port a screen to SvelteKit

```txt
Use the .idds-skills/SKILL.md rules. Port templates/dashboard/ to
SvelteKit 2 with Svelte 5 runes, following
implementation/sveltekit-adaptation.md and
implementation/tailwind-token-mapping.md. Preserve the semantic token
layer; do not import @idds/react. Output the .svelte file plus a short
notes file on any decisions where the official React API had no direct
Svelte equivalent.
```

---

## Maintenance & Versioning

- **Version:** 1.4.1 (see `SKILL.md`).
- **Source of truth:** [design.inadigital.go.id](https://design.inadigital.go.id). When the official docs change, update the rule, pattern, and template files together.
- **Adding a template:** create a folder under `templates/`, mirror the structure of `templates/dashboard/`, and add an entry in `templates/README.md` and the table above.
- **Adding a pattern:** create `patterns/<name>.md` following the structure in `patterns/dashboard.md`, then reference it from `SKILL.md`'s file-reading order.

---

## References

- INA Digital Design System — [design.inadigital.go.id](https://design.inadigital.go.id)
- Implementation examples — [design.inadigital.go.id/implementation](https://design.inadigital.go.id/implementation)
- Component catalogue — [design.inadigital.go.id/components](https://design.inadigital.go.id/components)
- Foundation (color, typography, spacing) — [design.inadigital.go.id/foundation](https://design.inadigital.go.id/foundation)

## Notes

- React projects may use the official IDDS React package (`@idds/react`) when applicable.
- Vue projects may use the official IDDS Vue package (`@idds/vue`) when applicable.
- SvelteKit projects should use this as an adaptation guide unless official Svelte support is documented.
- Always verify against the latest official IDDS documentation when building production government systems.
