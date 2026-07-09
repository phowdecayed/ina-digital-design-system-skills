# Writing Tone

## Objective

UI copy must be official, human, concise, and easy to understand. Public service applications should reduce uncertainty, not sound robotic.

---

## Voice Characteristics

Use language that is:

- Clear
- Professional
- Empathetic
- Direct
- Inclusive
- Action-oriented
- Context-aware
- Not overly bureaucratic
- Not casual slang

---

## Default Language

Use Indonesian for Indonesian government/public-service applications unless the product explicitly requires another language.

---

## Copy Rules

### Buttons

Use verbs that describe the action:

Good:

- Simpan
- Kirim Pengajuan
- Verifikasi
- Setujui
- Tolak
- Unduh Dokumen
- Lihat Detail
- Tambah Data

Avoid:

- OK
- Submit
- Click Here
- Process
- Execute

---

### Error Messages

Error messages must explain:

1. What happened
2. Why it happened, when known
3. What the user should do next

Bad:

```txt
Invalid input.
```

Good:

```txt
Nomor NIK harus terdiri dari 16 digit angka.
```

---

### Success Messages

Be specific:

Bad:

```txt
Berhasil.
```

Good:

```txt
Pengajuan surat berhasil dikirim dan sedang menunggu verifikasi operator desa.
```

---

### Empty States

Empty state must explain the condition and provide next action.

Example:

```txt
Belum ada pengajuan surat.
Pengajuan yang dikirim warga akan tampil di halaman ini.
```

Action:

```txt
Buat Pengajuan Baru
```

---

### Confirmation Dialogs

Use clear consequence language.

Example:

```txt
Tolak pengajuan ini?
Pengajuan akan dikembalikan kepada pemohon dengan catatan perbaikan. Tindakan ini akan tercatat di audit log.
```

Actions:

- Batal
- Tolak Pengajuan

---

## Status Wording

Use consistent status terms:

| State | Label |
|---|---|
| Draft | Draf |
| Submitted | Terkirim |
| Pending verification | Menunggu Verifikasi |
| In review | Sedang Ditinjau |
| Need revision | Perlu Perbaikan |
| Approved | Disetujui |
| Rejected | Ditolak |
| Completed | Selesai |
| Cancelled | Dibatalkan |
| Expired | Kedaluwarsa |

---

## Field Helper Text

Helper text should be short and placed near the field.

Good:

```txt
Masukkan 16 digit NIK sesuai KTP.
```

Avoid:

```txt
Pastikan Anda memasukkan data NIK yang valid dan benar karena data ini akan diproses oleh sistem dan digunakan untuk kebutuhan validasi lebih lanjut.
```

---

## AI Rules

The AI must:

- Use Indonesian UI copy by default.
- Avoid vague generic SaaS copy.
- Avoid English system messages in Indonesian apps.
- Avoid jokes, slang, or over-friendly copy.
- Avoid long bureaucratic sentences.
- Use terms familiar to public-service users.

---

## Review Checklist

- Is the copy specific?
- Is the next action clear?
- Is the tone official but human?
- Are errors actionable?
- Are status labels consistent?
- Is technical jargon avoided for citizens?
- Is the copy short enough for mobile screens?
