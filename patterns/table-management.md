# Pattern: Table Management

## Purpose

Use this pattern for managing structured data records in admin or operator interfaces.

---

## Suitable For

- Applicant list
- Village list
- User management
- Document queue
- Transaction records
- Service submissions
- Audit logs
- Master data

---

## Recommended Layout

1. Page title and description
2. Primary action
3. Search and filters
4. Bulk action area if needed
5. Data table
6. Pagination
7. Empty/error/loading states

---

## Table Header

Include:

- Page title
- Short context
- Primary action button

Example:

```txt
Data Pengajuan Surat
Kelola pengajuan surat yang masuk dari warga.
```

Primary action:

```txt
Tambah Pengajuan
```

---

## Toolbar

Common controls:

- Search input
- Status filter
- Date range filter
- Service type filter
- Export button if needed

Rules:

- Search should have visible label or accessible name.
- Filters should be consistent across modules.
- Keep toolbar responsive.

---

## Column Rules

Good columns are:

- Relevant
- Scannable
- Stable
- Not too many

Recommended for service queue:

| Column | Notes |
|---|---|
| Nomor Tiket | Unique identifier |
| Pemohon | Citizen name |
| Jenis Layanan | Service requested |
| Status | Badge |
| Tanggal Masuk | Sortable |
| Petugas | Optional |
| Aksi | View/edit/verify |

---

## Action Rules

Use consistent action order:

1. Lihat Detail
2. Edit
3. Verifikasi
4. Setujui
5. Tolak
6. Hapus

Destructive actions must be visually and behaviorally distinct.

---

## Status Badge Rules

Use semantic labels:

- Draf
- Terkirim
- Menunggu Verifikasi
- Perlu Perbaikan
- Disetujui
- Ditolak
- Selesai

Always show text, not color only.

---

## Empty State

Example:

```txt
Belum ada data pengajuan.
Pengajuan yang dikirim warga akan tampil di tabel ini.
```

Action:

```txt
Tambah Pengajuan Manual
```

---

## Loading State

Use skeleton rows or clear loading message.

Do not shift layout aggressively after data loads.

---

## Error State

Example:

```txt
Data pengajuan belum dapat dimuat.
Periksa koneksi atau muat ulang halaman.
```

Action:

```txt
Muat Ulang
```

---

## Accessibility

- Use real table markup.
- Provide table caption or accessible title.
- Use `th` for headers.
- Do not use icon-only actions without accessible labels.
- Ensure pagination is keyboard accessible.

---

## AI Prompt Snippet

```txt
Design an IDDS-aligned table management page for a government admin system. Include page header, primary action, search, filters, semantic status badges, accessible data table, consistent row actions, pagination, loading, empty, error, and no-result states. Keep it compact, official, and readable.
```

---

## Review Checklist

- Are columns relevant?
- Are actions consistent?
- Are statuses clear?
- Is search/filter available?
- Is pagination included?
- Are states designed?
- Is the table accessible?
