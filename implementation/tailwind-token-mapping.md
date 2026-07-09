# Implementation: Tailwind Token Mapping

## Purpose

Use this document to map IDDS-aligned design decisions into Tailwind utility usage while keeping tokens semantic and maintainable.

---

## Rule: Prefer Semantic Tokens

Avoid raw arbitrary classes when semantic tokens exist.

Avoid:

```html
<div class="bg-[#f8f9fa] text-[#333] p-[27px]">
```

Prefer:

```html
<div class="bg-surface-primary text-content-primary p-24">
```

---

## Tailwind v4 Strategy

If IDDS token CSS is available:

```css
@import 'tailwindcss';
@import '@idds/styles/tailwind/css/idds.css';
@import '@idds/styles/tailwind/css/inagov.css';
```

Use the brand file that matches the application context.

---

## Tailwind v3 Strategy

Use token extension in `tailwind.config.js` if project uses Tailwind v3.

```js
import { iddsColorToken, inagovTokens } from '@idds/react'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        ...iddsColorToken,
        ...inagovTokens,
      },
    },
  },
}
```

---

## Spacing Mapping

Create spacing keys that match IDDS tokens:

```js
spacing: {
  0: '0',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  80: '80px',
  128: '128px',
}
```

Usage examples:

```html
<section class="px-24 py-32 md:px-32 md:py-48">
  <div class="grid gap-24">
  </div>
</section>
```

---

## Typography Mapping

```js
fontSize: {
  'display-lg': ['52px', { lineHeight: '56px', letterSpacing: '-0.02em' }],
  'display-sm': ['44px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
  h1: ['40px', { lineHeight: '48px' }],
  h2: ['36px', { lineHeight: '44px' }],
  h3: ['32px', { lineHeight: '40px' }],
  h4: ['28px', { lineHeight: '36px' }],
  h5: ['24px', { lineHeight: '32px' }],
  'body-lg': ['20px', { lineHeight: '28px' }],
  body: ['18px', { lineHeight: '26px' }],
  'body-sm': ['16px', { lineHeight: '24px' }],
  caption: ['14px', { lineHeight: '20px' }],
  'caption-sm': ['12px', { lineHeight: '16px' }],
}
```

---

## Color Mapping

Use semantic utility naming where available:

| Need | Preferred Class |
|---|---|
| Main text | `text-content-primary` |
| Secondary text | `text-content-secondary` |
| Main background | `bg-surface-primary` |
| Secondary background | `bg-surface-secondary` |
| Primary action | `bg-primary-500` |
| Border | `border-stroke-primary` |
| Subtle border | `border-stroke-secondary` |
| Info background | `bg-info-subtle` |
| Success background | `bg-success-subtle` |
| Warning background | `bg-warning-subtle` |
| Error background | `bg-error-subtle` |

If exact classes differ in the installed IDDS token package, inspect available tokens and update this mapping.

---

## Component Utility Patterns

### Card

```html
<div class="rounded-lg border border-stroke-secondary bg-surface-primary p-24">
</div>
```

### Form Group

```html
<div class="grid gap-8">
  <label class="text-body-sm font-medium text-content-primary"></label>
  <input class="rounded-md border border-stroke-primary px-12 py-8" />
  <p class="text-caption text-content-secondary"></p>
</div>
```

### Page Section

```html
<section class="grid gap-24 px-16 py-32 md:px-32 md:py-48">
</section>
```

---

## AI Rules

The AI must:

- Avoid arbitrary Tailwind values unless no token exists.
- Use spacing token scale.
- Use semantic color classes.
- Keep typography scale consistent.
- Avoid random gradients.
- Avoid unbounded `shadow-xl` usage.
- Use responsive classes intentionally.

---

## Review Checklist

- Are raw hex values avoided in components?
- Are arbitrary spacing values avoided?
- Are semantic tokens used?
- Is typography consistent?
- Are Tailwind classes readable and maintainable?
- Are dark mode classes handled if needed?
