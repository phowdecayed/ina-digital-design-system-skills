# Accessibility

## Objective

Government digital products must be usable by as many people as possible. Accessibility is a baseline requirement, not an optional enhancement.

---

## Core Rules

The AI must ensure:

- Semantic HTML structure.
- Proper heading order.
- Visible focus state.
- Keyboard navigation.
- Sufficient contrast.
- Input labels.
- Error messages tied to fields.
- Status is not communicated by color alone.
- Tables have headers.
- Dialogs manage focus.
- Buttons and links have accessible names.

---

## Semantic HTML

Use the correct element for the job:

| Need | Use |
|---|---|
| Page header | `header` |
| Main content | `main` |
| Navigation | `nav` |
| Button action | `button` |
| Page link | `a` |
| Form | `form` |
| Field label | `label` |
| Data table | `table`, `thead`, `tbody`, `th`, `td` |
| Dialog | accessible modal/dialog implementation |

Avoid using `div` as a replacement for semantic controls.

---

## Keyboard Navigation

Required:

- All interactive controls are reachable with `Tab`.
- Focus order follows visual order.
- Modal traps focus while open.
- Escape closes modal/drawer where appropriate.
- Dropdown and menu controls are keyboard-operable.
- Focus returns to the triggering control after modal close.

---

## Focus State

Every interactive element must have a visible focus state:

- Buttons
- Links
- Inputs
- Selects
- Checkboxes
- Radio buttons
- Menu items
- Tabs
- Pagination controls

Do not remove browser outline unless replacing it with an equal or better visible focus style.

---

## Form Accessibility

Each field must have:

- Visible label
- Optional helper text
- Clear required indicator
- Inline validation message
- Programmatic association between error and input

Example pattern:

```html
<label for="nik">NIK</label>
<input id="nik" name="nik" aria-describedby="nik-help nik-error" aria-invalid="true" />
<p id="nik-help">Masukkan 16 digit NIK sesuai KTP.</p>
<p id="nik-error">NIK wajib diisi.</p>
```

---

## Status and Feedback

Never rely on color alone.

Bad:

```txt
Only red border on invalid field.
```

Good:

```txt
Red border + error icon + text: "NIK wajib diisi."
```

---

## Table Accessibility

Data tables must have:

- Clear column headers.
- Consistent row action labels.
- Pagination controls with accessible names.
- Sort indicators with text/ARIA where applicable.
- No critical information hidden only in icons.

---

## Modal and Drawer Accessibility

Required:

- Clear title.
- Focus moves into modal when opened.
- Background content is not focusable.
- Escape key closes when safe.
- Destructive confirmations require explicit action.
- Closing returns focus to the trigger.

---

## Copy Accessibility

Use clear Indonesian:

- Avoid long sentences.
- Avoid technical jargon for citizen-facing screens.
- Explain next action.
- Use specific errors.
- Use active voice.

---

## Review Checklist

- Can the page be used with keyboard only?
- Are focus states visible?
- Are labels visible?
- Are error messages specific?
- Is heading order logical?
- Is color paired with text/icon?
- Are modals accessible?
- Are tables readable by assistive technology?
- Is text readable on mobile?
