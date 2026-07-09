# Pattern: Public Service Form

## Purpose

Use this pattern for citizen-facing or operator-assisted public-service forms, especially official document requests, permits, certificates, and administrative submissions.

---

## Suitable For

- Pengajuan surat desa
- Permohonan dokumen
- Registration service
- Complaint submission
- Permit request
- Data update request
- File/document upload workflows

---

## Recommended Flow

Use a stepped structure for complex services:

1. Pilih layanan
2. Data pemohon
3. Data kebutuhan layanan
4. Unggah persyaratan
5. Tinjau pengajuan
6. Kirim pengajuan
7. Status pengajuan

---

## Step 1 — Service Selection

Show:

- Service name
- Short description
- Estimated processing time if known
- Required documents
- Eligibility note if needed

Avoid:

- Listing 50 services as plain text without search.
- Starting with a long form before service context is clear.

---

## Step 2 — Applicant Data

Typical fields:

- Nama lengkap
- NIK
- Nomor KK
- Alamat
- Nomor WhatsApp
- Email optional

Rules:

- Show helper text for official number formats.
- Validate NIK and phone format.
- Mark required fields clearly.
- Do not use placeholder as label.

---

## Step 3 — Service Data

Fields depend on selected service.

Examples:

- Keperluan surat
- Alamat tujuan
- Nama usaha
- Jenis usaha
- Keterangan tambahan
- Tanggal kebutuhan

Rules:

- Only show fields relevant to the selected service.
- Use conditional fields carefully.
- Explain why sensitive data is requested.

---

## Step 4 — File Upload

Each upload field should show:

- Required/optional status
- Accepted file type
- Maximum file size
- Example document if useful
- Upload progress
- Error state
- Replace/delete action

Example copy:

```txt
Unggah foto KTP
Format JPG, PNG, atau PDF. Maksimal 5 MB.
```

---

## Step 5 — Review

Show a review summary before submission:

- Applicant data
- Service data
- Uploaded documents
- Declaration/confirmation

Primary action:

```txt
Kirim Pengajuan
```

Secondary action:

```txt
Kembali Perbaiki Data
```

---

## Step 6 — Submission Confirmation

After submission, show:

- Ticket number
- Service type
- Submission time
- Current status
- Next step
- Link/button to check status

Example:

```txt
Pengajuan berhasil dikirim.
Nomor tiket: DS-2026-000123
Pengajuan akan diverifikasi oleh operator desa.
```

---

## Validation Rules

Validation must be:

- Inline
- Specific
- Close to the field
- Persistent until fixed

Bad:

```txt
Data tidak valid.
```

Good:

```txt
Nomor KK harus terdiri dari 16 digit angka.
```

---

## Accessibility

- Use semantic form elements.
- Associate errors with inputs.
- Support keyboard navigation.
- Make stepper accessible.
- Provide summary of errors after failed submit.
- Ensure file upload is usable without drag-and-drop.

---

## AI Prompt Snippet

```txt
Create an IDDS-aligned public-service form for Indonesian citizens. Use a multi-step flow: service selection, applicant data, service data, document upload, review, and submission confirmation. Use clear Indonesian copy, visible labels, helper text, inline validation, accessible stepper, semantic status colors, and no decorative UI noise.
```

---

## Review Checklist

- Is the service context clear before the form starts?
- Are fields grouped logically?
- Is the form broken into manageable steps?
- Are required documents clear?
- Is validation specific?
- Is there a review step?
- Is the final ticket/status clear?
