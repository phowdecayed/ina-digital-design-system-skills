# Implementation: shadcn/ui & shadcn-vue Integration

## Purpose

Use this guide when integrating shadcn/ui (React) or shadcn-vue (Vue) components alongside INA Digital Design System (IDDS) in your application.

This guide ensures that any shadcn headless primitives you install automatically inherit the active IDDS brand themes, semantic tokens, and accessibility standards.

---

## Component Coexistence Rules

Do not replace core IDDS elements with shadcn clones. Maintain the following boundaries:

| Category | Prefer IDDS (`@idds/react` or `@idds/vue`) | Use shadcn (with IDDS styling) |
|---|---|---|
| **Core Inputs & Actions** | `Button`, `TextField`, `PhoneInput`, `Checkbox`, `Radio Group`, `Toggle` | Only if custom multiselect or combobox behavior is required |
| **Simple Feedback** | `Alert`, `Badge`, `Chip`, `Toast` | None |
| **Navigation & Layout** | `Breadcrumb`, `Pagination`, `Tabs` | Complex hierarchical tree-views, collapsible sidebar sub-levels |
| **Complex Headless Overlays** | None (unless built-in) | `Combobox` (Searchable Select), `Command Menu`, `Dialog`, `Sheet / Drawer`, `Hover Card`, `Popover` |

---

## The Golden Rule: Package Priority Over shadcn Reconciliation

To prevent visual inconsistencies, spacing pollution (like `p-6` or `p-5` in pre-generated shadcn markup), and code duplication, the AI must strictly adhere to this rule:

### 1. ALWAYS Import From IDDS Packages First
When a component exists in both `@idds/vue` (or `@idds/react`) and `shadcn-vue` (or `shadcn/ui`), you **must ALWAYS import and use the official IDDS package component**.
* **Forbidden**: Do not attempt to "reconcile" or adapt a pre-installed shadcn component (like `Accordion` or `Button`) by overriding its Tailwind classes to mimic IDDS.
* **Why**: Pre-generated shadcn components are bundled with their own unstandardized spacing utility classes (`p-5`, `p-6`, `gap-5`). Trying to override or reconcile them in your codebase is error-prone, pollutes your code, and leads to visual slop.

### 2. Mandatory Replacement of Duplicate shadcn Components
If you encounter pre-installed shadcn components in the codebase that have official IDDS equivalents (e.g., an existing shadcn `Accordion`, `Button`, or `Alert` in a starter kit), you must **replace them with the clean, official IDDS components** instead of trying to manually style or customize the pre-existing shadcn markup.

### 3. shadcn is ONLY for Missing Headless Primitives
Only use `shadcn` for components that **do not have equivalents** in the official IDDS component inventory (such as `Combobox`, `Command`, `Popover`, `Hover Card`). When styling these missing primitives, never copy shadcn's default padding/margin classes; style them strictly with IDDS-aligned layout and spacing.

---

## Theme Integration Bridge (Tailwind CSS v4)

shadcn uses standard CSS utility variables (like `--color-primary`, `--color-border`), whereas IDDS exposes its own set of semantic CSS variables under `data-theme`.

Map the shadcn variables to match IDDS tokens in your main CSS file:

```css
/* src/styles/main.css or src/index.css */
@import 'tailwindcss';
@import '@idds/styles/tailwind/css/idds.css';
@import '@idds/styles/tailwind/css/inagov.css'; /* or your active brand theme */

@theme {
  /* Bridge shadcn variables with IDDS semantic tokens */
  --color-background: var(--color-bg-primary);
  --color-foreground: var(--color-text-primary);
  
  --color-card: var(--color-bg-primary);
  --color-card-foreground: var(--color-text-primary);
  
  --color-popover: var(--color-bg-primary);
  --color-popover-foreground: var(--color-text-primary);
  
  --color-primary: var(--color-primary-500);
  --color-primary-foreground: #ffffff;
  
  --color-muted: var(--color-bg-secondary);
  --color-muted-foreground: var(--color-text-secondary);
  
  --color-accent: var(--color-primary-50);
  --color-accent-foreground: var(--color-primary-700);
  
  --color-destructive: var(--color-error-500);
  --color-destructive-foreground: #ffffff;
  
  --color-border: var(--color-stroke-secondary);
  --color-input: var(--color-stroke-primary);
  --color-ring: var(--color-primary-300);
}
```

*When `setBrandTheme('panrb')` or other themes are loaded dynamically, all shadcn components will automatically transition colors to match the active government brand!*

---

## Theme Integration Bridge (Tailwind CSS v3)

For Tailwind v3, map the variables in your `tailwind.config.js`:

```javascript
import { iddsColorToken, inagovTokens } from '@idds/react' // or '@idds/vue' for Vue

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // IDDS default mapping
        ...iddsColorToken,
        ...inagovTokens,
        
        // Map shadcn semantic keys to IDDS Tailwind tokens
        border: 'var(--color-stroke-secondary)',
        input: 'var(--color-stroke-primary)',
        ring: 'var(--color-primary-300)',
        background: 'var(--color-bg-primary)',
        foreground: 'var(--color-text-primary)',
        primary: {
          DEFAULT: 'var(--color-primary-500)',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: 'var(--color-error-500)',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'var(--color-bg-secondary)',
          foreground: 'var(--color-text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-primary-50)',
          foreground: 'var(--color-primary-700)',
        },
        popover: {
          DEFAULT: 'var(--color-bg-primary)',
          foreground: 'var(--color-text-primary)',
        },
        card: {
          DEFAULT: 'var(--color-bg-primary)',
          foreground: 'var(--color-text-primary)',
        },
      },
    },
  },
}
```

---

## Code Example: shadcn Combobox with IDDS Styling

Here is an example of a searchable **Combobox** (frequently needed in government forms for selecting provinces, sub-districts, or offices) styled to match IDDS guidelines:

### Vue (using `shadcn-vue`)

```html
<template>
  <div class="grid gap-8">
    <label class="text-body-sm font-medium text-content-primary">
      Pilih Instansi Pemerintahan <span class="text-error-500">*</span>
    </label>
    
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <button
          type="button"
          role="combobox"
          :aria-expanded="open"
          class="flex h-40 w-full items-center justify-between rounded-md border border-stroke-primary bg-surface-primary px-12 py-8 text-body-sm text-content-primary hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:opacity-50"
        >
          {{ value ? instansi.find((item) => item.value === value)?.label : 'Pilih instansi...' }}
          <ChevronsUpDown class="ml-8 h-16 w-16 shrink-0 opacity-50 text-content-secondary" />
        </button>
      </PopoverTrigger>
      
      <PopoverContent class="w-full min-w-[280px] p-0 border border-stroke-secondary bg-surface-primary shadow-md rounded-md">
        <Command class="bg-surface-primary">
          <CommandInput placeholder="Cari instansi..." class="h-36 text-body-sm px-12" />
          <CommandEmpty class="p-16 text-body-sm text-content-secondary text-center">
            Instansi tidak ditemukan.
          </CommandEmpty>
          <CommandGroup class="max-h-200 overflow-y-auto p-4">
            <CommandItem
              v-for="item in instansi"
              :key="item.value"
              :value="item.value"
              @select="handleSelect(item.value)"
              class="flex items-center px-12 py-8 rounded-sm text-body-sm text-content-primary cursor-pointer aria-selected:bg-primary-50 aria-selected:text-primary-700"
            >
              <Check
                :class="[
                  'mr-8 h-16 w-16',
                  value === item.value ? 'opacity-100 text-primary-500' : 'opacity-0'
                ]"
              />
              {{ item.label }}
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    
    <p class="text-caption text-content-secondary">
      Cari dan pilih instansi kementerian atau pemerintah daerah asal Anda.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'

const open = ref(false)
const value = ref('')

const instansi = [
  { value: 'panrb', label: 'Kementerian PANRB' },
  { value: 'bkn', label: 'Badan Kepegawaian Negara (BKN)' },
  { value: 'lan', label: 'Lembaga Administrasi Negara (LAN)' },
  { value: 'bgn', label: 'Badan Gizi Nasional (BGN)' },
]

const handleSelect = (currentValue) => {
  value.value = currentValue === value.value ? '' : currentValue
  open.value = false
}
</script>
```

---

## AI Implementation Rules

When generating shadcn code with IDDS, the AI must:

- Map shadcn CSS Variables to IDDS variables inside the main stylesheet.
- Use core IDDS input and feedback components instead of shadcn copies wherever possible.
- Wrap shadcn dialogs/menus in appropriate IDDS-aligned panels, keeping shadows flat and corners moderately rounded (not `rounded-2xl` or `shadow-2xl`).
- Ensure focus indicators use `ring-primary-300` and borders match `border-stroke-primary` or `border-stroke-secondary`.
- Utilize Indonesian UI copy.

---

## Review Checklist

- [ ] Are core actions (Button, Checkbox, etc.) from the official `@idds` packages?
- [ ] Is shadcn Popover/Dialog background mapped to `bg-surface-primary`?
- [ ] Are shadows and borders aligned with IDDS spacing and token definitions?
- [ ] Do search inputs and items inside shadcn `Command` use Indonesian placeholders and empty states?
- [ ] Does the active brand color scheme flow correctly into the shadcn Accent and Primary classes?
