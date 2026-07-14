# Pattern: Empty State

## Purpose

Use empty state when a page, section, table, list, or dashboard has no data to show.

An empty state should explain the condition and guide the user to the next action.

---

## Empty State Types

### 1. First Use Empty State

No data exists yet.

Example:

```txt
Belum ada pengajuan surat.
Pengajuan yang dikirim warga akan tampil di sini.
```

Action:

```txt
Buat Pengajuan Baru
```

---

### 2. Filtered Empty State

Data exists, but no result matches the filter.

Example:

```txt
Tidak ada pengajuan yang sesuai dengan filter.
Ubah kata kunci, status, atau rentang tanggal untuk melihat data lain.
```

Action:

```txt
Reset Filter
```

---

### 3. Permission Empty State

User does not have access.

Example:

```txt
Anda belum memiliki akses ke halaman ini.
Hubungi admin instansi jika akses ini diperlukan untuk tugas Anda.
```

Action:

```txt
Kembali ke Dashboard
```

---

### 4. Error-Like Empty State

Data cannot be loaded.

Example:

```txt
Data belum dapat dimuat.
Periksa koneksi internet atau coba muat ulang halaman.
```

Action:

```txt
Muat Ulang
```

---

## Structure

A good empty state includes:

1. Optional simple icon/illustration
2. Clear title
3. Helpful description
4. Primary action when applicable
5. Secondary action when applicable

---

## Visual Rules

- Keep it simple.
- Use one icon or **Ilustrasi State** at most (Standard size: `280x210px` or `4:3` ratio, as specified in `https://design.inadigital.go.id/foundation/illustration/`).
- Do not use text inside the illustration; keep copy in external HTML/text elements.
- Ensure background elements of the illustration use the active **Warna Dinamik** (dynamic brand theme color) while main characters/objects use **Warna Statik** (static colors).
- Do not overdecorate.
- Do not use humorous language in official workflows.
- Keep text centered only for small empty panels; use left alignment in large admin pages if it improves scanning.

---

## Copy Rules

Good empty state copy:

- States what is missing.
- Explains why it matters.
- Suggests next step.

Avoid:

```txt
No data.
Nothing here.
Oops!
```

Prefer:

```txt
Belum ada data desa.
Tambahkan data desa untuk mulai mengelola layanan.
```

---

## Accessibility

- Empty state text must be readable.
- Icon must be decorative unless it conveys meaning.
- Primary action must be keyboard accessible.
- Do not rely on illustration alone.

---

## AI Prompt Snippet

```txt
Create an IDDS-aligned empty state. Use a clear title, short explanation, and one useful action. Keep it official, calm, accessible, and avoid decorative AI-style illustrations or vague copy.
```

---

## Review Checklist

- Does it explain the empty condition?
- Does it provide next action?
- Is the copy specific?
- Is the illustration minimal?
- Is the action accessible?
