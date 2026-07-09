# Implementation: Component Mapping

## Purpose

Map common application needs to IDDS-aligned components and behaviors.

---

## Component Inventory

IDDS documentation lists common interface components such as:

- Accordion
- Alert
- Avatar
- Badge
- Breadcrumb
- Button
- Button Group
- Card Content
- Charts
- Checkbox
- Chip
- Date Picker
- Drawer
- Dropdown Menu
- File Upload
- Loading
- Modal
- Pagination
- Radio Button
- Stepper
- Tab Menu
- Table Cell
- Text Input
- Toast
- Toggle
- Tooltip

---

## Mapping by Need

| Need | Use Component |
|---|---|
| Primary action | Button |
| Secondary action | Button secondary/tertiary |
| Destructive action | Button danger + confirmation modal |
| Short text entry | Text Input |
| Long text entry | Textarea adaptation |
| Fixed single choice | Radio Button / Select |
| Multiple choices | Checkbox |
| Date entry | Date Picker |
| File/document upload | File Upload |
| Temporary feedback | Toast |
| Persistent feedback | Alert |
| Status label | Badge / Chip |
| Multi-step flow | Stepper |
| Structured records | Table Cell + table pattern |
| Page hierarchy | Breadcrumb |
| Confirmation | Modal |
| Contextual side detail | Drawer |
| Loading feedback | Loading / Skeleton adaptation |
| Help text | Inline helper text first, Tooltip only for secondary explanation |

---

## Button Rules

Use hierarchy consistently:

- Primary: one main action per area.
- Secondary: alternative action.
- Tertiary: low-emphasis action.
- Danger: destructive action.

Examples:

```txt
Primary: Kirim Pengajuan
Secondary: Simpan Draf
Tertiary: Batal
Danger: Hapus Data
```

---

## Form Component Rules

Each input component must support:

- Label
- Required state
- Helper text
- Error text
- Disabled state
- Loading/submitting state where relevant

---

## Feedback Component Rules

### Alert

Use for persistent, page-level messages:

```txt
Beberapa data belum lengkap. Periksa kembali bagian Data Pemohon.
```

### Toast

Use for temporary event feedback:

```txt
Perubahan berhasil disimpan.
```

Do not use toast for critical information that the user must act on.

---

## Modal Rules

Use modal for:

- Confirmation
- Destructive action
- Short focused decision

Avoid modal for:

- Long forms
- Complex workflows
- Information that should remain visible

---

## Drawer Rules

Use drawer for:

- Row detail preview
- Contextual side information
- Audit trail preview
- Quick edit when not too complex

---

## Table Rules

Use table for structured records. Avoid card list for dense admin data unless mobile requires it.

---

## Tooltip Rules

Tooltip is only for supplementary explanation.

Do not put critical requirements, legal warnings, or errors only inside tooltip.

---

## Government Workflow Mapping

| Workflow | Components |
|---|---|
| Pengajuan surat | Stepper, Text Input, File Upload, Alert, Button, Review Card |
| Verifikasi dokumen | Table, Badge, Drawer, Modal, Textarea, Button |
| Approval | Detail Card, Badge, Alert, Modal, Button |
| Laporan | Dashboard Cards, Charts, Table, Date Picker, Pagination |
| User management | Table, Badge, Dropdown Menu, Modal, Text Input |
| Audit log | Table, Badge, Date Filter, Detail Drawer |

---

## AI Rules

The AI must:

- Choose standard components first.
- Explain component choices when producing a design spec.
- Include states for each component.
- Keep component behavior consistent.
- Avoid icon-only controls without labels.
- Avoid critical info in tooltip.

---

## Review Checklist

- Are standard components used?
- Is each component used for the right purpose?
- Are states defined?
- Are labels and helper text present?
- Are destructive actions confirmed?
- Are tooltips non-critical?
