# Implementation: SvelteKit Adaptation

## Purpose

Use this guide when applying IDDS principles in SvelteKit applications.

As of this skill version, the public IDDS documentation provides React implementation guidance. For SvelteKit, use IDDS as a design reference and implement local Svelte components that follow IDDS principles, tokens, patterns, and accessibility requirements.

Do not claim official Svelte package support unless it is explicitly documented by IDDS.

---

## Recommended Approach

1. Define IDDS-aligned tokens.
2. Build local Svelte components.
3. Use semantic props and variants.
4. Keep accessibility behavior built in.
5. Use Tailwind token mapping where helpful.
6. Document component usage.

---

## Suggested Folder Structure

```txt
src/
├── lib/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.svelte
│   │   │   ├── TextInput.svelte
│   │   │   ├── Select.svelte
│   │   │   ├── Checkbox.svelte
│   │   │   ├── Radio.svelte
│   │   │   ├── Alert.svelte
│   │   │   ├── Badge.svelte
│   │   │   ├── Card.svelte
│   │   │   ├── Modal.svelte
│   │   │   ├── Drawer.svelte
│   │   │   ├── Table.svelte
│   │   │   ├── Pagination.svelte
│   │   │   ├── Stepper.svelte
│   │   │   └── FileUpload.svelte
│   │   ├── layout/
│   │   └── patterns/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   └── utils/
├── routes/
└── app.css
```

---

## Component API Rules

Use semantic variants instead of raw styling props.

Example Button props:

```ts
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'
```

Avoid:

```svelte
<Button color="blue" padding="17px" shadow="big" />
```

Prefer:

```svelte
<Button variant="primary" size="md">Kirim Pengajuan</Button>
```

---

## Example Button Component Direction

```svelte
<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'tertiary' | 'danger' = 'primary'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let disabled = false
  export let loading = false
  export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button
  {type}
  {disabled}
  aria-busy={loading}
  class="idds-button"
  data-variant={variant}
  data-size={size}
>
  {#if loading}
    <span aria-hidden="true">Memproses...</span>
  {:else}
    <slot />
  {/if}
</button>
```

---

## Token Strategy

Use CSS variables in `app.css`:

```css
:root {
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;

  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #111827;
  --color-text-muted: #4b5563;
  --color-border: #d1d5db;
  --color-primary: #1d4ed8;
  --color-success: #15803d;
  --color-warning: #b45309;
  --color-error: #b91c1c;
  --color-info: #1d4ed8;
}
```

If official IDDS CSS token package is available in the project, prefer importing and mapping it instead of manually defining raw values.

---

## SvelteKit Layout Rules

For government apps:

- Use route groups for public and admin areas.
- Use server-side validation for official forms.
- Use progressive enhancement for forms.
- Avoid JavaScript-only critical flows where possible.
- Keep HTML semantic.

Suggested routing:

```txt
src/routes/
├── +layout.svelte
├── +page.svelte
├── layanan/
│   ├── +page.svelte
│   └── [slug]/+page.svelte
├── status/+page.svelte
└── admin/
    ├── +layout.svelte
    ├── +page.svelte
    ├── pengajuan/+page.svelte
    └── pengguna/+page.svelte
```

---

## AI Implementation Rules

When generating SvelteKit code, the AI must:

- State that this is an IDDS adaptation, not official package usage.
- Use tokens instead of arbitrary classes.
- Use accessible Svelte components.
- Provide loading/error/empty states.
- Use Indonesian UI copy.
- Keep layout calm and government-appropriate.
- Avoid generic SaaS decoration.

---

## Review Checklist

- Is the implementation honest about adaptation status?
- Are components reusable?
- Are props semantic?
- Are tokens centralized?
- Are components accessible?
- Are states implemented?
- Is the UI visually aligned with IDDS principles?
