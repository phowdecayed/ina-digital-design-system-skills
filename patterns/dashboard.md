# Pattern: Dashboard

## Purpose

Use this pattern for pages that summarize key data, operational status, service performance, monitoring results, or administrative metrics.

A dashboard is a control center. It should help users understand the current condition and decide what to do next without opening many pages.

---

## Suitable For

- Admin dashboard
- Village service monitoring
- Public service performance
- Document verification queue
- Transaction summary
- User activity monitoring
- Program progress dashboard
- System health overview

---

## Core Layout

Recommended order:

1. Page header
2. Primary filters
3. Priority metric cards
4. Main chart or summary visualization
5. Operational table / queue
6. Secondary insight / recent activity

---

## Page Header

Must include:

- Page title
- Short description
- Optional date range or scope
- Optional primary action

Example:

```txt
Dashboard Layanan Desa
Pantau pengajuan surat, status verifikasi, dan aktivitas layanan warga.
```

---

## Priority Metrics

Use 3–5 metric cards only.

Good metric examples:

- Total Pengajuan
- Menunggu Verifikasi
- Disetujui
- Ditolak
- Rata-rata Waktu Proses

Each metric card should contain:

- Label
- Value
- Optional trend/context
- Optional status icon

Avoid:

- Too many metrics.
- Long descriptive text inside card.
- Multiple competing colors.
- Fake numbers without context.

---

## Filter Area

Use filters only when they meaningfully change dashboard data.

Common filters:

- Date range
- Service type
- Status
- Village / unit
- Operator

Rules:

- Keep filters compact.
- Put primary date filter first.
- Use clear labels.
- Preserve selected filter state.

---

## Chart Area

Use charts when they help comparison or trend reading.

Recommended:

- Line chart for trend over time.
- Bar chart for category comparison.
- Donut/pie only when categories are few and proportion matters.

Rules:

- Use clear title.
- Show period.
- Label axes where needed.
- Do not over-color charts.
- Do not use chart if a table is clearer.

---

## Table Area

Use table for operational details.

Typical columns:

- Nomor tiket
- Pemohon
- Jenis layanan
- Status
- Waktu masuk
- Petugas
- Aksi

Rules:

- Include search.
- Include filters for large datasets.
- Use pagination.
- Use status badges.
- Keep row actions consistent.

---

## States

Dashboard must define:

- Loading state
- Empty data state
- Error state
- Partial data state
- No result after filter state

Example empty state:

```txt
Belum ada data pengajuan pada periode ini.
Ubah rentang tanggal atau tunggu pengajuan baru masuk.
```

---

## Accessibility

- Metric cards must be readable by screen readers.
- Charts must have textual summaries.
- Tables must have proper headers.
- Filters must be labeled.
- Color must not be the only status indicator.

---

## AI Prompt Snippet

```txt
Create a government admin dashboard using IDDS principles. Put 3–5 priority metric cards at the top, followed by chart visualization and an operational table. Use clear hierarchy, semantic status colors, concise Indonesian labels, accessible filters, and no decorative gradients. Include loading, empty, error, and filtered-no-result states.
```

---

## Review Checklist

- Are priority metrics limited and meaningful?
- Is the most important data at the top?
- Are charts readable and necessary?
- Is the table operationally useful?
- Are filters clear?
- Are loading/empty/error states designed?
- Does the dashboard avoid visual overload?
