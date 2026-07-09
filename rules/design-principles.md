# Design Principles

## Objective

This document converts INA Digital Design System principles into operational AI rules. Use it to guide any UI decision for government and public-service applications.

---

## Principle 1 — Consistent and Recognizable

### Meaning

Users should immediately understand how the interface works because it uses familiar patterns, stable hierarchy, repeated component behavior, and predictable navigation.

### AI Rules

- Reuse layout patterns across pages.
- Keep button hierarchy consistent.
- Keep form behavior consistent across all services.
- Keep table actions in the same order across modules.
- Use the same status wording across the product.
- Do not invent new interaction patterns for common tasks.

### Good Examples

- Primary action always appears on the right side of a form footer.
- “Simpan”, “Kirim”, “Verifikasi”, “Setujui”, and “Tolak” are used consistently.
- Status badges use the same color and wording across modules.

### Avoid

- Different button colors for the same action.
- Different layouts for similar forms.
- Icons with different meanings across pages.
- Replacing standard form controls with decorative custom UI.

---

## Principle 2 — Gives Certainty

### Meaning

Government services often involve official records, legal documents, and administrative decisions. Users must always know what happened, what is happening, and what to do next.

### AI Rules

- Every submission must show confirmation.
- Every failed action must explain the cause and next step.
- Every long process must show progress.
- Every destructive action must use confirmation.
- Every required field must be clearly marked.
- Every disabled action must have a visible reason when needed.

### Required States

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Warning
- Error
- Empty
- Pending
- Approved
- Rejected

### Better Error Copy

Bad:

> Error occurred.

Good:

> Pengajuan belum dapat dikirim karena NIK belum diisi. Lengkapi NIK terlebih dahulu.

---

## Principle 3 — Represents Users

### Meaning

Interfaces must reflect the needs of the people who use them: citizens, public servants, operators, verifiers, administrators, and decision makers.

### AI Rules

- Identify the primary user before designing.
- Match language to user role.
- Do not expose system jargon to citizens.
- Use official terms when the user is an operator or administrator.
- Use direct instructions for forms.
- Provide context for administrative statuses.

### User Role Mapping

| User | Design Implication |
|---|---|
| Citizen | Simple language, guided steps, clear requirements |
| Village operator | Fast verification, queue, status, document completeness |
| Secretary / verifier | Review summary, decision history, approval notes |
| Head of village / official | Final decision, minimal noise, signature/release readiness |
| Super admin | System-wide control, audit trail, tenant management |

---

## Principle 4 — Simplifies Complexity

### Meaning

Public service workflows can be complex. The interface must reduce cognitive load without hiding necessary information.

### AI Rules

- Break long forms into steps.
- Group fields by topic.
- Show progress using stepper.
- Use summary cards before final submission.
- Use progressive disclosure for optional information.
- Place important alerts near the related action.

### Recommended Form Structure

1. Pilih layanan
2. Data pemohon
3. Data layanan
4. Upload syarat
5. Tinjau pengajuan
6. Kirim

### Avoid

- One huge form with 50 fields.
- Long instructions above every field.
- Repeating the same explanation in multiple places.
- Hiding required information inside tooltips.

---

## Principle 5 — Inclusive by Default

### Meaning

A government interface should be usable by people with different abilities, devices, network quality, literacy levels, and administrative familiarity.

### AI Rules

- Use semantic HTML.
- Ensure keyboard navigation.
- Provide visible focus state.
- Do not rely on color only.
- Use readable font sizes.
- Use sufficient contrast.
- Support mobile layouts.
- Use plain Indonesian where possible.

---

## Decision Checklist

Before accepting a design, answer:

- Is the layout predictable?
- Is the primary action obvious?
- Is the status clear?
- Can a non-technical user understand the screen?
- Can the user recover from an error?
- Is the page usable on mobile?
- Are similar screens visually consistent?
- Are all key states designed?

If any answer is “no”, revise the design.
