# Spacing

## Reference Link

- Official IDDS Spacing Foundation: [design.inadigital.go.id/foundation/spacing/](https://design.inadigital.go.id/foundation/spacing/)

## Objective

Spacing must create a consistent visual rhythm across components and layouts. Use spacing tokens only; do not use arbitrary pixel values or non-standard Tailwind spacing classes.

---

## Primitive Spacing Tokens

Use only these spacing values:

| Token | Value |
|---|---:|
| spacing-0 | 0 |
| spacing-2 | 2px |
| spacing-4 | 4px |
| spacing-8 | 8px |
| spacing-12 | 12px |
| spacing-16 | 16px |
| spacing-24 | 24px |
| spacing-32 | 32px |
| spacing-40 | 40px |
| spacing-48 | 48px |
| spacing-56 | 56px |
| spacing-64 | 64px |
| spacing-80 | 80px |
| spacing-128 | 128px |

---

## Semantic Usage

### Micro Spacing

Use for icon-text gaps and tight internal spacing:

- 2px
- 4px
- 8px

### Component Spacing

Use for buttons, inputs, cards, and form fields:

- 8px
- 12px
- 16px
- 24px

### Layout Spacing

Use for sections, panels, grids, and page containers:

- 24px
- 32px
- 40px
- 48px
- 64px

### Large Page Spacing

Use for landing pages or major visual separation:

- 80px
- 128px

---

## Layout Rules

### Page Container

- Desktop max width should be intentional.
- Use `24px` or `32px` page padding for admin layouts.
- Use `16px` page padding on mobile.
- Avoid content touching viewport edges.

### Cards

- Internal padding: `16px`, `24px`, or `32px`.
- Gap between cards: `16px` or `24px`.
- Dashboard metric grid gap: `16px` or `24px`.

### Forms

- Gap between label and input: `4px` or `8px`.
- Gap between fields: `16px` or `24px`.
- Gap between form sections: `32px` or `40px`.
- Form footer top spacing: `24px` or `32px`.

### Tables

- Cell padding: `12px` or `16px`.
- Toolbar gap: `12px` or `16px`.
- Table-section separation: `24px`.

---

## AI Rules

The AI must:

- Use tokenized spacing only.
- Avoid values such as `13px`, `17px`, `21px`, `27px`, `35px`.
- Keep spacing consistent between similar components.
- Increase spacing to clarify hierarchy, not to decorate.
- Use more whitespace for complex workflows.
- Avoid cramped forms.

---

## CSS Token Example

```css
:root {
  --spacing-0: 0;
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;
}
```

---

## Review Checklist

- Are all spacing values tokenized?
- Are similar components spaced consistently?
- Is the page easy to scan?
- Are form fields grouped clearly?
- Is the dashboard not cramped?
- Is there enough mobile padding?
