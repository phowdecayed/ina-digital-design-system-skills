# Color System

## Objective

Use color as a semantic communication system, not decoration. Color must communicate hierarchy, state, feedback, identity, and structure.

---

## Core Color Roles

### 1. Brand Color

Used for identity and primary actions.

Apply to:

- Primary button
- Header accent
- Active navigation
- Key product identity
- Selected state
- Important links

Rules:

- Use one dominant brand family.
- Do not use multiple unrelated brand colors.
- Do not use brand color for every card.
- Use brand color intentionally to direct attention.

---

### 2. Sentiment Color

Used to communicate system status.

| Role | Use For |
|---|---|
| Success / Positive | Approved, completed, active, valid |
| Warning | Pending, incomplete, requires attention |
| Error / Negative | Failed, rejected, destructive, invalid |
| Info / Guidance | Neutral guidance, instructions, help |

Rules:

- Use red for destructive actions and errors.
- Use green for success and positive progress.
- Use blue for informational guidance.
- Use orange/yellow for pending or attention states.
- Always pair color with text or icon.

---

### 3. Neutral Color

Used for foundation, readability, and structure.

Apply to:

- Page background
- Surface/card background
- Text
- Border
- Divider
- Disabled state
- Table lines
- Secondary metadata

Rules:

- Most of the interface should be neutral.
- Use neutral colors to create hierarchy without visual noise.
- Avoid low-contrast gray text.

---

## Product Modes

### Light Mode

Use for default public-service and administrative interfaces.

Recommended:

- Bright neutral background
- White or near-white surfaces
- Dark readable text
- Subtle borders
- Brand color only for primary actions and active states

### Dark Mode

Use for monitoring, admin panels, operations dashboards, or user preference.

Recommended:

- Dark neutral background
- Slightly lighter surface layer
- High-contrast text
- Muted borders
- Brand color adjusted to remain readable

Rules:

- Maintain hierarchy in both modes.
- Do not simply invert colors.
- Ensure semantic colors remain clear in dark mode.

---

## Government Application Status Mapping

| Status | Color Role | Example Copy |
|---|---|---|
| Draft | Neutral | Draf |
| Submitted | Info | Terkirim |
| In Verification | Warning | Dalam Verifikasi |
| Need Revision | Warning | Perlu Perbaikan |
| Approved | Success | Disetujui |
| Rejected | Error | Ditolak |
| Cancelled | Neutral | Dibatalkan |
| Completed | Success | Selesai |
| Expired | Error/Neutral | Kedaluwarsa |

---

## Color Usage Rules for AI

The AI must:

- Use semantic color roles.
- Keep icons and text in the same color family when representing the same meaning.
- Use solid text colors for readability.
- Avoid gradients on typography.
- Avoid colorful decorative cards without meaning.
- Avoid random accent colors.
- Avoid status badges that only differ by color.

---

## Tailwind-Oriented Token Names

Use abstract token names instead of raw colors where possible:

```txt
bg-surface-primary
bg-surface-secondary
bg-surface-inverse
text-content-primary
text-content-secondary
text-content-disabled
border-stroke-primary
border-stroke-secondary
bg-primary-50
bg-primary-100
bg-primary-500
text-success-primary
text-warning-primary
text-error-primary
bg-success-subtle
bg-warning-subtle
bg-error-subtle
```

---

## Anti-Pattern Examples

Do not do this:

```txt
- Every card has a different gradient.
- Primary button is blue on one page and green on another.
- Error message uses only a red border with no text.
- Body text uses very light gray on white.
- Icons use colors unrelated to the status.
```

---

## Review Checklist

- Is color used semantically?
- Is the primary action visually clear?
- Are status colors consistent?
- Is text readable in light and dark mode?
- Are icons and labels aligned in meaning?
- Are gradients avoided for typography?
- Can the screen be understood without relying on color alone?

---

## Custom Regional Theme: Jabar (Jabar Digital Service / JDS)

Since regional themes like `'jabar'` do not exist as pre-built stylesheets in the official national `@idds/styles` package, you must declare these West Java Province / JDS brand color tokens locally in your main CSS file:

```css
/* Custom Brand Theme: Jabar (Jabar Digital Service) */
[data-theme="jabar"] {
  --color-primary-50: #e3f2fd;
  --color-primary-100: #bbdefb;
  --color-primary-200: #90caf9;
  --color-primary-300: #64b5f6;
  --color-primary-400: #42a5f5;
  --color-primary-500: #2196f3;
  --color-primary-600: #1e88e5; /* JDS Blue Primary */
  --color-primary-700: #1976d2;
  --color-primary-800: #1565c0;
  --color-primary-900: #0d47a1;

  --color-success-50: #e8f5e9;
  --color-success-100: #c8e6c9;
  --color-success-200: #a5d6a7;
  --color-success-300: #81c784;
  --color-success-400: #66bb6a;
  --color-success-500: #4caf50;
  --color-success-600: #43a047;
  --color-success-700: #388e3c;
  --color-success-800: #2e7d32;
  --color-success-900: #1b5e20;

  --color-warning-50: #fffde7;
  --color-warning-100: #fff9c4;
  --color-warning-200: #fff59d;
  --color-warning-300: #fff176;
  --color-warning-400: #ffee58;
  --color-warning-500: #ffeb3b;
  --color-warning-600: #fdd835;
  --color-warning-700: #fbc02d;
  --color-warning-800: #f9a825;
  --color-warning-900: #f57f17;
}
```

When integrating in Vue/React, simply call `setBrandTheme('jabar')` at application start, and the local CSS declarations above will automatically override all IDDS components to Jabar/JDS colors!
