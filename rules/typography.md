# Typography

## Objective

Typography must create hierarchy, readability, and trust. Use clean sans-serif typography with consistent scale and predictable hierarchy.

---

## Default Font

Use **Inter** as the preferred typeface. If Inter is unavailable, use a clean system sans-serif fallback:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

---

## Type Scale

Use this typography scale:

| Token | Size | Line Height | Use |
|---|---:|---:|---|
| Display Large | 52px | 56px | Hero title, rarely used |
| Display Small | 44px | 48px | Major landing section |
| Heading H1 | 40px | 48px | Page title |
| Heading H2 | 36px | 44px | Main section title |
| Heading H3 | 32px | 40px | Subsection title |
| Heading H4 | 28px | 36px | Card group title |
| Heading H5 | 24px | 32px | Card title / modal title |
| Body Large | 20px | 28px | Important paragraph |
| Body | 18px | 26px | Main body text |
| Body Small | 16px | 24px | Form labels, UI body |
| Caption | 14px | 20px | Helper text, metadata |
| Caption Small | 12px | 16px | Secondary metadata |
| Caption Extra Small | 10px | 12px | Rare microcopy only |

---

## Hierarchy Rules

### Page

- One H1 per page.
- H1 describes the page purpose, not decorative branding.
- H2 separates major sections.
- H3/H4 are used for grouped content.

### Dashboard

- Metric value may be visually larger than label.
- Metric label must remain readable.
- Avoid long card titles.
- Use supporting text only when it clarifies the metric.

### Form

- Label must be readable and close to its input.
- Helper text uses caption size.
- Error text must be at least caption size and clearly associated with the field.
- Do not use placeholder as the only label.

---

## Capitalization

### Title Case

Use for:

- Page title
- Feature title
- Major campaign or product section

Example:

```txt
Daftar Pengajuan Surat
Manajemen Desa
Laporan Transaksi Harian
```

### Sentence case

Use for:

- Description
- Helper text
- Error message
- Empty state
- Button labels where natural

Example:

```txt
Lengkapi data pemohon sebelum mengirim pengajuan.
Dokumen sedang diverifikasi oleh operator desa.
```

---

## AI Rules

The AI must:

- Use type scale consistently.
- Avoid random font sizes.
- Avoid tiny gray text for important information.
- Avoid all caps for long labels.
- Avoid decorative display fonts.
- Avoid gradient text.
- Keep paragraphs short and scannable.
- Use font weight to support hierarchy, not to decorate.

---

## Recommended CSS Tokens

```css
:root {
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --text-display-lg-size: 52px;
  --text-display-lg-line: 56px;
  --text-display-sm-size: 44px;
  --text-display-sm-line: 48px;

  --text-h1-size: 40px;
  --text-h1-line: 48px;
  --text-h2-size: 36px;
  --text-h2-line: 44px;
  --text-h3-size: 32px;
  --text-h3-line: 40px;
  --text-h4-size: 28px;
  --text-h4-line: 36px;
  --text-h5-size: 24px;
  --text-h5-line: 32px;

  --text-body-lg-size: 20px;
  --text-body-lg-line: 28px;
  --text-body-size: 18px;
  --text-body-line: 26px;
  --text-body-sm-size: 16px;
  --text-body-sm-line: 24px;
  --text-caption-size: 14px;
  --text-caption-line: 20px;
}
```

---

## Review Checklist

- Does the page have one clear H1?
- Is the hierarchy easy to scan?
- Are body texts readable?
- Are form labels visible without relying on placeholder?
- Is typography consistent across components?
- Are long paragraphs avoided?
- Is critical information larger or more prominent than secondary metadata?
