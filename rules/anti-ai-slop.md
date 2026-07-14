# Anti AI Slop Rules

## Objective

Prevent generated UI from looking generic, decorative, inconsistent, or obviously AI-generated. The design must feel like a real government product that can enter production.

---

## Definition of AI Slop in UI

AI Slop is a design output that appears visually polished at first glance but fails in structure, consistency, usability, accessibility, and real-world implementation.

Common signs:

- Random gradients
- Excessive rounded cards
- Decorative icons everywhere
- Inconsistent spacing
- Fake metrics
- Too many colors
- No real hierarchy
- Low-contrast text
- Stock SaaS layout
- Generic copy
- Unclear action flow
- No empty/error/loading states

---

## The "Finish & Polish" Rules (How to avoid sloppy mockups)

To prevent unpolished, generic, and "dead" draft outputs, the AI must strictly implement these exact micro-details and interactive states:

### 1. No Tailwind Default Color Names
- **Rule**: Never use default Tailwind color classes (like `bg-blue-500`, `text-gray-400`, `border-slate-200`) in final code.
- **Action**: You must ALWAYS map styling to IDDS semantic tokens (`bg-primary-600`, `text-content-primary`, `text-content-secondary`, `border-stroke-primary`, `border-stroke-secondary`, `bg-surface-secondary`).

### 2. No Pure Black Actions
- **Rule**: Never use pure black (`#000000`, `bg-black`, or `bg-neutral-900`) for primary buttons.
- **Action**: Use the official IDDS primary colors: `bg-primary-600` (hover: `hover:bg-primary-700`) with a white label for primary actions, and `border-stroke-primary` + `text-primary-700` (hover: `hover:bg-primary-50`) for secondary actions.

### 3. Mandatory Interactive Hover States
- **Rule**: Clickable cards, list items, and action items must never be static.
- **Action**: Always add interactive hover states and soft transitions: `transition-all duration-300 hover:border-primary-300 hover:bg-surface-secondary`.

### 4. Mandatory Iconography on Feature Cards
- **Rule**: Feature lists, service lists, and information blocks must not be empty or plain text.
- **Action**: Always embed functional icon badges (using `@tabler/icons-vue` or SVG inline wrappers). Format the icon container consistently: a rounded container `w-48 h-48 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-16`.

### 5. Precise Typography Spacing on Titles
- **Rule**: Headings must not look "raw" or loosely stacked.
- **Action**: Always apply strict typographical rhythm on display headers: `font-extrabold tracking-tight leading-tight` (or `leading-none`). Use `block mt-4 lg:inline lg:mt-0` for multi-word highlighting.

### 6. No Unofficial Tailwind Spacing Classes
- **Rule**: Never use Tailwind's default spacing classes that do not match the IDDS spacing scale (such as `p-5`, `p-6`, `p-10`, `m-7`, `gap-5`).
- **Action**: You must strictly use the official IDDS spacing scale. Tailwind's standard keys that are valid IDDS tokens are: `p-2` (2px), `p-4` (4px), `p-8` (8px), `p-12` (12px), `p-16` (16px), `p-24` (24px), `p-32` (32px), `p-40` (40px), `p-48` (48px), `p-56` (56px), `p-64` (64px), `p-80` (80px), and `p-128` (128px). Reference: [design.inadigital.go.id/foundation/spacing/](https://design.inadigital.go.id/foundation/spacing/) and `rules/spacing.md`.

---

## Visual Rules

### Avoid

- Bright gradient backgrounds for serious government workflows.
- Glassmorphism for data-heavy admin panels.
- Oversized decorative blobs.
- Multiple card styles on one page.
- Unnecessary emoji in UI.
- Floating elements with no function.
- Random illustration unrelated to the task.

### Prefer

- Neutral surfaces.
- Clear content hierarchy.
- Limited accent color.
- Strong typography rhythm.
- Consistent cards.
- Realistic data density.
- Explicit actions and states.

---

## Dashboard Anti-Slop Rules

Avoid:

- 12 metric cards with no priority.
- Fake trend lines that mean nothing.
- Charts without labels.
- Overly colorful charts.
- Metric titles like “Amazing Growth”.
- Cards that all compete visually.

Prefer:

- 3–5 priority metrics.
- Clear chart title and period.
- Table for operational detail.
- Filters for date/status/unit.
- Short and accurate metric labels.

---

## Form Anti-Slop Rules

Avoid:

- Long single-page form with no grouping.
- Placeholder-only labels.
- No required indicators.
- No validation state.
- Generic error messages.
- Upload fields without accepted file information.

Prefer:

- Stepper for complex services.
- Section titles.
- Visible labels.
- Helper text.
- Review step.
- Clear submission confirmation.

---

## Admin Panel Anti-Slop Rules

Avoid:

- Sidebar with too many random icons.
- Dashboard cards that look like landing-page cards.
- Generic “Welcome Back” hero taking too much space.
- Overdesigned empty states.
- Actions hidden behind unclear icons.

Prefer:

- Compact layout.
- Persistent navigation.
- Search and filters.
- Clear table actions.
- Audit-friendly detail pages.
- Role-aware navigation.

---

## Copy Anti-Slop Rules

Avoid:

- “Empower your workflow.”
- “Streamline your productivity.”
- “Unlock the future of public service.”
- “Something went wrong.”
- “Submit successful.”

Prefer:

- “Pengajuan berhasil dikirim.”
- “Data pemohon belum lengkap.”
- “Dokumen sedang diverifikasi.”
- “Pengajuan ditolak. Lihat catatan perbaikan.”

---

## AI Self-Review Questions

Before finalizing, the AI must ask:

- Does this look like a real government application?
- Is every visual element functional?
- Is the hierarchy obvious?
- Is the copy specific to the workflow?
- Are spacing and colors consistent?
- Are states defined?
- Would a developer know how to implement it?
- Would a citizen or operator understand it?

If any answer is weak, revise.
