# Pattern: Admin Panel

## Purpose

Use this pattern for internal government, village, or institutional management systems.

---

## Suitable For

- Super admin panel
- Village operator dashboard
- Service verification back office
- Tenant management
- User/role management
- Audit log system
- Configuration pages

---

## Layout Structure

Recommended desktop layout:

1. Sidebar navigation
2. Top bar
3. Main content header
4. Content area
5. Optional right drawer for contextual detail

Recommended mobile layout:

1. Top bar
2. Collapsible navigation drawer
3. Main content
4. Sticky action when needed

---

## Sidebar Rules

Sidebar should contain:

- Product/agency identity
- Primary navigation
- Grouped menu sections
- Active state
- User/tenant context

Avoid:

- Too many menu items.
- Icons without labels.
- Random decorative icons.
- Nested menus deeper than necessary.

---

## Top Bar Rules

Top bar may contain:

- Breadcrumb
- Search
- Notification
- Help
- User menu
- Theme toggle if supported

Keep it compact.

---

## Page Header Rules

Each admin page should have:

- Clear title
- Short description
- Primary action if relevant
- Optional status/filter context

Example:

```txt
Manajemen Desa
Kelola data desa, status langganan, dan konfigurasi nomor layanan.
```

---

## Content Patterns

Use the appropriate pattern:

- Dashboard: summary and monitoring
- Table management: records and actions
- Detail page: official review and audit trail
- Form: create/edit configuration
- Empty state: no data yet

---

## Role-Aware Navigation

Navigation must respect roles:

| Role | Navigation Priority |
|---|---|
| Super Admin | Tenant, billing, users, audit, system settings |
| Admin Desa | Layanan, operator, warga, dokumen, laporan |
| Operator | Pengajuan, verifikasi, warga |
| Verifier | Review, approval queue, history |
| Viewer | Dashboard, reports, read-only detail |

---

## Audit-Friendly Design

For government systems, detail pages should show:

- Created by
- Created at
- Last updated
- Status history
- Decision notes
- File/document history
- Actor identity

---

## Visual Rules

- Use neutral background.
- Use consistent card style.
- Use compact but readable spacing.
- Prioritize data clarity.
- Avoid landing-page visual effects inside admin.
- Use semantic badges for statuses.

---

## Accessibility

- Sidebar must be keyboard navigable.
- Active menu state must not rely on color only.
- Top bar controls need accessible names.
- Data tables must be semantic.
- Drawers/modals must manage focus.

---

## AI Prompt Snippet

```txt
Design an IDDS-aligned admin panel for an Indonesian government application. Use sidebar navigation, compact top bar, clear page header, neutral surfaces, semantic status badges, accessible tables/forms, role-aware navigation, and audit-friendly detail sections. Avoid generic SaaS decoration, large welcome heroes, random gradients, and meaningless icons.
```

---

## Review Checklist

- Is navigation role-aware?
- Is the active section clear?
- Is content hierarchy strong?
- Are admin actions consistent?
- Are audit details visible where needed?
- Is the layout usable on mobile?
- Does it avoid generic SaaS styling?
