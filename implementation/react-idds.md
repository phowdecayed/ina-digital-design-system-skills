# Implementation: React + IDDS

## Purpose

Use this guide when implementing IDDS-aligned interfaces in React applications.

---

## Official Package

For React projects, use:

```bash
npm install @idds/react
```

Recommended supporting packages:

```bash
npm install @tabler/icons-react tailwindcss @tailwindcss/vite
```

---

## Requirements

Recommended baseline:

- React >= 18
- React DOM >= 18
- Node.js >= 16
- Tailwind CSS v4.x when using Tailwind integration
- TypeScript recommended for production projects

---

## CSS Import

Import IDDS CSS in the app entry point before application-specific component styles:

```tsx
// src/main.tsx or src/main.jsx
import '@idds/react/index.css'
```

---

## Basic Component Usage

Example:

```tsx
import { Button } from '@idds/react'

export function ExampleAction() {
  return (
    <Button hierarchy="primary" size="md">
      Kirim Pengajuan
    </Button>
  )
}
```

---

## Component Import Pattern

Use named imports:

```tsx
import {
  Button,
  TextField,
  Card,
} from '@idds/react'
```

Rules:

- Prefer IDDS components over custom components when available.
- Wrap IDDS components only when needed for application-specific API.
- Do not rewrite standard behavior unless required.

---

## Brand Theme

Set brand theme once at application start:

```tsx
import { setBrandTheme } from '@idds/react'

setBrandTheme('default')
```

Available documented themes include:

- `inagov`
- `panrb`
- `bkn`
- `lan`
- `bgn`
- `jabar`
- `default`

Rules:

- Choose the brand that matches the institution.
- If the institution does not match available themes, use `default` and apply product-level branding carefully.
- Do not change brand theme per page unless the product is intentionally multi-brand.

---

## Theme Mode

IDDS supports light and dark mode utilities.

Example:

```tsx
import { setThemeMode, getThemeMode, toggleThemeMode } from '@idds/react'

setThemeMode('light')
const currentMode = getThemeMode()
toggleThemeMode()
```

Rules:

- Default to light mode for public-service pages.
- Consider dark mode for monitoring/admin systems only if useful.
- Ensure both modes are tested.

---

## Tailwind CSS v4 Integration

Import Tailwind and IDDS tokens in the main CSS file:

```css
@import 'tailwindcss';
@import '@idds/styles/tailwind/css/idds.css';
@import '@idds/styles/tailwind/css/inagov.css';
```

Use another brand file if required:

```css
@import '@idds/styles/tailwind/css/panrb.css';
@import '@idds/styles/tailwind/css/bkn.css';
@import '@idds/styles/tailwind/css/lan.css';
/* Note: For regional themes like 'jabar', declare JDS tokens locally in your main CSS (see rules/color-system.md) */
```

---

## Tailwind CSS v3 Integration

Use token imports in `tailwind.config.js`:

```js
import { iddsColorToken, panrbTokens } from '@idds/react'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...iddsColorToken,
        ...panrbTokens,
      },
    },
  },
  plugins: [],
}
```

---

## Recommended Project Structure

```txt
src/
├── app/
├── components/
│   ├── layout/
│   ├── forms/
│   ├── tables/
│   └── feedback/
├── features/
│   ├── dashboard/
│   ├── services/
│   ├── submissions/
│   └── users/
├── lib/
│   ├── idds.ts
│   └── formatters.ts
└── styles/
    └── main.css
```

---

## Application Wrapper Example

```tsx
// src/lib/idds.ts
import { setBrandTheme, setThemeMode } from '@idds/react'

export function setupIdds() {
  setBrandTheme('default')
  setThemeMode('light')
}
```

```tsx
// src/main.tsx
import '@idds/react/index.css'
import './styles/main.css'
import { setupIdds } from './lib/idds'

setupIdds()
```

---

## AI Implementation Rules

When generating React code, the AI must:

- Use official IDDS React components where possible.
- Import CSS correctly.
- Set brand theme once.
- Use semantic component names.
- Include states: loading, empty, error, disabled.
- Use Indonesian UI copy by default.
- Avoid custom decorative components when IDDS components exist.
- Use accessible labels.

---

## Review Checklist

- Is `@idds/react/index.css` imported?
- Is brand theme configured?
- Is light/dark mode handled if used?
- Are IDDS components used instead of custom clones?
- Are Tailwind tokens integrated correctly?
- Are accessibility states preserved?
