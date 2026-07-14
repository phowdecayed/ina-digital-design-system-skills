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

### 4. Mandatory Iconography and Illustration Types
- **Rule**: Feature lists, empty states, and banner blocks must utilize correct, standardized IDDS illustration and icon types.
- **Action**: 
  - **Feature Lists / Spots**: Use **Ilustrasi Spot** (low complexity, `1:1` ratio, `150x150px` to `50x50px`, no live characters, uses dynamic brand color only) or system icon containers (`w-48 h-48 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-16`).
  - **Empty States**: Use **Ilustrasi State** (medium complexity, `280x210px` or `4:3` ratio, uses static character color with dynamic backdrop color). Reference: [design.inadigital.go.id/foundation/illustration/](https://design.inadigital.go.id/foundation/illustration/).
  - **Onboarding / Homepage Headers**: Use **Ilustrasi Hero** (high complexity, narrative, front/top view, no text inside the image).

### 5. Precise Typography Spacing on Titles
- **Rule**: Headings must not look "raw" or loosely stacked.
- **Action**: Always apply strict typographical rhythm on display headers: `font-extrabold tracking-tight leading-tight` (or `leading-none`). Use `block mt-4 lg:inline lg:mt-0` for multi-word highlighting.

### 6. Official Logo Protection
- **Rule**: Never distort, apply drop shadows, glows, or modify the layout/proportion of official government or IDDS logos.
- **Action**: Logo must have a clear height boundary of at least `32px` on digital screens, with free space around it equal to the "gov" letters. Reference: [design.inadigital.go.id/foundation/logo/](https://design.inadigital.go.id/foundation/logo/).

### 7. Shadow/Effects Hierarchy
- **Rule**: Do not use massive arbitrary shadows (`shadow-2xl`) for everything.
- **Action**: Apply shadows strictly based on elevation:
  - **Focused**: Tight, sharp shadows for cards, buttons, or form groups to anchor them on the surface (`shadow-sm` or thin border).
  - **Float**: Loose, soft, light shadows for elevated overlays like tooltips, dialogs, dropdowns, and drawers (`shadow-md` or `shadow-lg`). Reference: [design.inadigital.go.id/foundation/effects/](https://design.inadigital.go.id/foundation/effects/).

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
