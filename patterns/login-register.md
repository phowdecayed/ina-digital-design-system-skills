# Pattern: Login & Register

## Purpose

Use this pattern for authentication screens, account creation, operator login, citizen registration, and role-based access entry points.

---

## Suitable For

- Admin login
- Operator login
- Citizen account registration
- Village onboarding
- OTP verification
- Password reset
- Multi-tenant login

---

## Login Screen Structure

Recommended structure:

1. Service identity
2. Clear page title
3. Short instruction
4. Login form
5. Recovery/help link
6. Secondary action/register link
7. Security or privacy note

Example:

```txt
Masuk ke Dashboard Desa
Gunakan akun operator yang telah didaftarkan oleh admin desa.
```

---

## Register Screen Structure

Recommended structure:

1. Service identity
2. Registration purpose
3. Account data
4. Identity data
5. Verification method
6. Consent/privacy notice
7. Submit action

---

## Form Fields

### Login

- Email / username / nomor WhatsApp
- Password or OTP
- Remember device only when appropriate

### Register

- Name
- NIK where legally required
- Phone number
- Email if needed
- Village/agency selection
- Password or OTP method

---

## Multi-Tenant Rules

For government/village apps:

- Make tenant context visible.
- If selecting village/agency, use searchable select.
- Do not let users accidentally register under the wrong tenant.
- Show confirmation before final registration.

Example:

```txt
Anda mendaftar untuk Desa Mungguk, Kecamatan Sekadau Hilir.
```

---

## Security Copy

Use plain security notes:

```txt
Jangan bagikan kode OTP kepada siapa pun, termasuk petugas layanan.
```

```txt
Gunakan kata sandi yang berbeda dari layanan lain.
```

---

## Error Handling

Bad:

```txt
Login failed.
```

Good:

```txt
Email atau kata sandi tidak sesuai. Periksa kembali data masuk Anda.
```

For OTP:

```txt
Kode OTP tidak sesuai atau sudah kedaluwarsa. Minta kode baru untuk melanjutkan.
```

---

## Visual Rules

- Keep layout calm and focused.
- Avoid large decorative illustrations that push form below fold.
- Use official brand color for primary action.
- Use neutral background.
- Keep form width comfortable: around 360–480px on desktop.
- Make mobile form full width with adequate padding.

---

## Accessibility

- All fields must have labels.
- Password visibility toggle must have accessible label.
- Error summary should be available for failed submit.
- OTP inputs must support paste.
- Login form must submit with Enter.

---

## AI Prompt Snippet

```txt
Design an IDDS-aligned login/register screen for an Indonesian government application. Use a calm neutral layout, clear service identity, visible labels, specific validation messages, secure OTP/password guidance, and accessible form behavior. Avoid decorative gradients, generic SaaS hero graphics, and placeholder-only labels.
```

---

## Review Checklist

- Is the account context clear?
- Is tenant/agency/village context visible when relevant?
- Are labels visible?
- Are security instructions clear?
- Are errors specific?
- Is mobile layout usable?
- Is the form visually focused?
