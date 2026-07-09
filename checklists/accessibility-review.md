# Checklist: Accessibility Review

## Purpose

Use this checklist to evaluate whether a UI is accessible enough for government/public-service use.

---

## 1. Semantic Structure

- [ ] Page uses semantic landmarks: header, nav, main, footer where appropriate.
- [ ] Buttons are real `button` elements.
- [ ] Links are real `a` elements.
- [ ] Forms use `form` element.
- [ ] Tables use semantic table markup.
- [ ] Headings follow a logical order.

---

## 2. Keyboard Navigation

- [ ] All interactive elements are reachable by keyboard.
- [ ] Focus order follows the visual order.
- [ ] Focus state is visible.
- [ ] Modal traps focus while open.
- [ ] Focus returns to trigger after modal closes.
- [ ] Dropdowns and menus can be used by keyboard.
- [ ] Escape key works where expected.

---

## 3. Forms

- [ ] Every input has a visible label.
- [ ] Required fields are indicated clearly.
- [ ] Helper text is associated with the input.
- [ ] Error text is associated with the input.
- [ ] Placeholder is not used as the only label.
- [ ] Validation messages are specific.
- [ ] Submit failure shows summary or field-level errors.

---

## 4. Color and Contrast

- [ ] Text contrast is sufficient.
- [ ] Status is not communicated by color only.
- [ ] Icons have text labels where needed.
- [ ] Disabled state remains readable.
- [ ] Focus indicator has enough contrast.
- [ ] Light and dark modes are both checked if supported.

---

## 5. Feedback and Status

- [ ] Loading states are announced or clearly visible.
- [ ] Success messages are specific.
- [ ] Error messages explain recovery.
- [ ] Toast messages are not used for critical information only.
- [ ] Alerts are placed near related content.

---

## 6. Modal and Drawer

- [ ] Modal has clear title.
- [ ] Modal purpose is clear.
- [ ] Background is inert or not focusable.
- [ ] Close action is available.
- [ ] Destructive confirmation uses explicit action label.
- [ ] Long workflows are not forced into small modal.

---

## 7. Tables

- [ ] Headers use `th`.
- [ ] Sortable columns have accessible indication.
- [ ] Row actions have text or accessible labels.
- [ ] Pagination controls have accessible names.
- [ ] Empty/no-result state is clear.

---

## 8. Mobile Accessibility

- [ ] Tap targets are large enough.
- [ ] Text remains readable.
- [ ] Forms are not cramped.
- [ ] Sticky actions do not hide content.
- [ ] Horizontal scrolling is avoided unless unavoidable for data tables.

---

## Review Result Template

```md
## Accessibility Review Result

Overall status: Pass / Needs Revision / Fail

### Critical Issues

### Moderate Issues

### Minor Issues

### Required Fixes

### Final Verdict
```
