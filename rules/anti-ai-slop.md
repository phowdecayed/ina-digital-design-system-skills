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
