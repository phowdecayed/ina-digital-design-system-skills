# Implementation: Vue + IDDS

## Purpose

Use this guide when implementing IDDS-aligned interfaces in Vue 3 applications.

---

## Official Package

For Vue projects, use:

```bash
npm install @idds/vue
```

Recommended supporting packages:

```bash
npm install @tabler/icons-vue tailwindcss @tailwindcss/vite
```

---

## Requirements

Recommended baseline:

- Vue >= 3.4.0 (Composition API, `<script setup>` recommended)
- Node.js >= 16
- Tailwind CSS v4.x when using Tailwind integration
- TypeScript and `vue-tsc` recommended for production projects

---

## CSS Import

Import IDDS CSS in the app entry point before application-specific component styles:

```javascript
// src/main.js or src/main.ts
import '@idds/vue/index.css'
```

---

## Basic Component Usage

Example using `<script setup>`:

```html
<!-- src/components/ExampleAction.vue -->
<template>
  <Button hierarchy="primary" size="md">
    Kirim Pengajuan
  </Button>
</template>

<script setup>
import { Button } from '@idds/vue'
</script>
```

---

## Component Import Pattern

Use named imports:

```javascript
import {
  Button,
  TextField,
  Card,
} from '@idds/vue'
```

Rules:

- Prefer IDDS components over custom components when available.
- Wrap IDDS components only when needed for application-specific API.
- Do not rewrite standard behavior unless required.

---

## Brand Theme

Set brand theme once at application start:

```javascript
import { setBrandTheme } from '@idds/vue'

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

```javascript
import { setThemeMode, getThemeMode, toggleThemeMode } from '@idds/vue'

setThemeMode('light')
const currentMode = getThemeMode() // returns 'light' or 'dark'
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

```javascript
import { iddsColorToken, panrbTokens } from '@idds/vue'

export default {
  content: ['./src/**/*.{js,ts,vue}'],
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
│   ├── idds.js
│   └── formatters.js
├── styles/
│   └── main.css
├── App.vue
└── main.js
```

---

## Application Wrapper Example

```javascript
// src/lib/idds.js
import { setBrandTheme, setThemeMode } from '@idds/vue'

export function setupIdds() {
  setBrandTheme('default')
  setThemeMode('light')
}
```

```javascript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import '@idds/vue/index.css'
import './styles/main.css'
import { setupIdds } from './lib/idds'

setupIdds()

const app = createApp(App)
app.mount('#app')
```

---

## AI Implementation Rules

When generating Vue code, the AI must:

- Use official IDDS Vue components where possible.
- Import CSS correctly.
- Set brand theme once.
- Use semantic component names.
- Include states: loading, empty, error, disabled.
- Use Indonesian UI copy by default.
- Avoid custom decorative components when IDDS components exist.
- Use accessible labels.

---

## Review Checklist

- Is `@idds/vue/index.css` imported?
- Is brand theme configured?
- Is light/dark mode handled if used?
- Are IDDS components used instead of custom clones?
- Are Tailwind tokens integrated correctly?
- Are accessibility states preserved?
