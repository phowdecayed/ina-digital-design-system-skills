---
name: idds
description: Operational skill pack that teaches AI coding agents how to design, audit, and implement Indonesian government / public-service interfaces in alignment with the INA Digital Design System (IDDS).
---

# INA Digital Design System AI Skill

## Status

**Version:** 1.0.0  
**Scope:** AI-assisted UI/UX design, redesign, implementation review, and frontend generation for Indonesian government/public-service applications.  
**Reference basis:** INA Digital Design System (IDDS) public documentation, especially overview, foundation, components, patterns, and React developer guide.

> This skill does not replace the official INA Digital Design System documentation. Use it as an operational instruction set for AI agents so they consistently apply IDDS-aligned decisions when designing or implementing an application.

---

## Purpose

Use this skill when the AI is asked to design, redesign, audit, or implement interfaces for:

- Government portals
- Village administration applications
- Citizen-facing public service applications
- Internal government dashboards
- Document submission and verification systems
- Administrative back offices
- Data monitoring applications
- Multi-step service forms
- Registration and authentication flows

The output must look like a real public-sector product: calm, official, accessible, clear, consistent, and maintainable.

---

## Core IDDS Principles

Always apply these five principles:

1. **Consistent and recognizable**
   - Use familiar layout patterns.
   - Reuse component behavior consistently.
   - Avoid inventing UI patterns when a standard pattern exists.

2. **Gives certainty**
   - Every interaction must produce clear feedback.
   - Show status, progress, success, error, disabled, and empty states.
   - Use explicit language for validation, rejection, approval, and completion.

3. **Represents users**
   - Design for real users: citizens, operators, verifiers, civil servants, and decision makers.
   - Use language that matches the user’s literacy, task, and context.
   - Avoid unnecessary technical vocabulary in user-facing screens.

4. **Simplifies complexity**
   - Break long processes into steps.
   - Group related fields.
   - Put primary information first.
   - Remove decorative noise.

5. **Inclusive by default**
   - Make the interface readable, navigable, understandable, and usable by a wide range of users.
   - Respect accessibility, contrast, focus state, keyboard navigation, semantic HTML, and clear copywriting.

---

## When This Skill Must Be Used

Use this skill when the prompt contains any of these contexts:

- Pemerintah / government
- Desa / village
- OPD / dinas / instansi
- Layanan publik
- Dashboard admin pemerintahan
- Form pengajuan surat
- Sistem verifikasi dokumen
- Portal warga
- Satu data / monitoring / statistik layanan
- UI harus mengikuti INA Digital / IDDS
- Anti AI Slop for government application

---

## Output Behavior for AI

When designing or redesigning a screen, the AI must produce:

1. **Design diagnosis**
   - What is unclear, inconsistent, inaccessible, or visually weak.

2. **Target layout**
   - Page structure, content hierarchy, navigation, spacing, and responsive behavior.

3. **Component plan**
   - Which IDDS-aligned components should be used.

4. **Token plan**
   - Color, typography, spacing, radius, border, and elevation rules.

5. **State plan**
   - Empty, loading, success, warning, error, disabled, pending, rejected, approved.

6. **Accessibility plan**
   - Labels, keyboard navigation, contrast, focus state, heading order, ARIA only where needed.

7. **Implementation notes**
   - React IDDS package if using React.
   - Vue IDDS package if using Vue.
   - SvelteKit adaptation if no official Svelte package is available.
   - Tailwind token mapping where appropriate.
   - Use the closest example from `templates/` (Dashboard, Formulir, Katalog Artikel, or Shared App Shell) as the structural base, then adapt.

---

## Non-Negotiable Rules

The AI must not:

- Use random gradients for government UI.
- Use excessive glassmorphism.
- Use arbitrary spacing values.
- Use too many unrelated colors.
- Make dashboard cards without real hierarchy.
- Use icons as decoration without function.
- Hide critical information in tooltips.
- Communicate status by color only.
- Use vague error messages such as “Something went wrong”.
- Generate fake metrics unless explicitly asked to create mock data.
- Claim official package support for frameworks not documented by IDDS.

---

## Required File Reading Order

When an AI agent loads this skill, read these files in order:

1. `rules/design-principles.md`
2. `rules/color-system.md`
3. `rules/typography.md`
4. `rules/spacing.md`
5. `rules/accessibility.md`
6. `rules/writing-tone.md`
7. `rules/anti-ai-slop.md`
8. relevant file from `patterns/`
9. relevant file from `implementation/`
10. relevant template from `templates/` (if building a full page)
11. relevant checklist from `checklists/`

---

## Default UI Character

The default IDDS-aligned UI should feel:

- official
- simple
- calm
- structured
- legible
- service-oriented
- trustworthy
- accessible
- not generic SaaS
- not overly decorative
- not “AI-generated”

---

## Recommended Default Stack Mapping

### React

Use official IDDS React package when the project is React-based:

- `@idds/react`
- `@idds/react/index.css`
- `setBrandTheme()`
- `setThemeMode()`
- Tailwind token integration when needed

### Vue

Use official IDDS Vue package when the project is Vue-based:

- `@idds/vue`
- `@idds/vue/index.css`
- `setBrandTheme()`
- `setThemeMode()`
- Tailwind token integration when needed

### SvelteKit

Use IDDS as an adapted design system:

- local Svelte components
- IDDS-aligned tokens
- semantic component API
- Tailwind custom tokens
- accessibility-first implementation

Do not claim there is an official Svelte package unless the official documentation explicitly provides it.

---

## Standard Review Command

When asked to review a UI, use this structure:

```md
## Diagnosis

## IDDS Alignment

## Problems Found

## Recommended Layout

## Component Mapping

## Token Corrections

## Accessibility Fixes

## Anti AI Slop Fixes

## Implementation Notes

## Final Prompt / Code Direction
```

---

## Standard Redesign Prompt Template

Use this prompt when instructing a generative UI tool:

```txt
Redesign this interface using INA Digital Design System principles.
Make it suitable for an Indonesian government/public-service application.
The interface must feel official, calm, readable, accessible, and trustworthy.
Use consistent spacing tokens, clear typography hierarchy, semantic colors, and standard components.
Prioritize clarity over decoration.
Avoid random gradients, excessive shadows, glassmorphism, generic SaaS visuals, meaningless icons, and inconsistent card styles.
Show clear empty, loading, success, warning, error, and disabled states where relevant.
Use Indonesian UI copy that is professional, concise, and easy to understand.
```
