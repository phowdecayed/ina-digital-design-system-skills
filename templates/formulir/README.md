# Template: Formulir

Contoh halaman formulir registrasi akun sesuai contoh resmi **"Penerapan di Sistem Pemerintahan → Formulir"** pada dokumentasi IDDS.

Tujuan layar: mengumpulkan data diri calon pengguna (nama, nomor ponsel, email, kata sandi) dengan validasi inline, pemisah visual, dan opsi daftar lewat pihak ketiga.

> Pratinjau langsung: [design.inadigital.go.id/playground/react/form-submission](https://design.inadigital.go.id/playground/react/form-submission)

---

## Komponen yang Dipakai

| Komponen | Peran |
|---|---|
| `AppShell` | Konsistensi sidebar + topbar dengan halaman lain. |
| `Card` | Wadah utama formulir. |
| `TextField` (Text Input) | Input nama lengkap, email, kata sandi, konfirmasi kata sandi. |
| `PhoneInput` | Input nomor ponsel dengan kode negara +62. |
| `Button` (primary) | Tombol "Buat Akun". |
| `Button` (tertiary) | Tombol "Buat Akun dengan Google". |
| `Divider` | Pemisah vertikal antara form utama dan opsi OAuth. |
| `Checkbox` | Persetujuan Ketentuan & Kebijakan Privasi. |
| `Link` | Tautan ke Ketentuan & Kebijakan Privasi. |
| `Alert` | Pesan kesalahan global di atas formulir (state `error`). |

---

## Struktur File

```txt
formulir/
├── README.md
├── Formulir.jsx          # komponen utama
├── Formulir.html         # versi HTML statis
├── AccountForm.jsx       # formulir dengan validasi
├── fields.js             # definisi field & validasi
└── oauth.js              # konfigurasi tombol OAuth (mock)
```

---

## Formulir.jsx

```jsx
import { useState } from 'react'
import { Alert, Card } from '@idds/react'

import { AppShell } from '../shared/AppShell.jsx'
import { AccountForm } from './AccountForm.jsx'
import { OAUTH_PROVIDERS } from './oauth.js'

export function Formulir({ user = { name: 'John Doe', role: 'Product Designer' } }) {
  const [submitState, setSubmitState] = useState({ status: 'idle', message: null })

  return (
    <AppShell user={user} activePath="formulir">
      <div className="mx-auto max-w-xl">
        <header className="mb-24 text-center">
          <h1 className="text-h3 font-semibold text-content-primary md:text-h2">
            Buat akun Anda
          </h1>
          <p className="mt-8 text-content-secondary">
            Masukkan informasi berikut untuk membuat akun.
          </p>
        </header>

        {submitState.status === 'error' ? (
          <Alert
            tone="danger"
            title="Pengajuan gagal diproses"
            description={submitState.message}
            onClose={() => setSubmitState({ status: 'idle', message: null })}
            className="mb-16"
          />
        ) : null}

        <Card>
          <AccountForm
            onSubmit={async (values) => {
              setSubmitState({ status: 'submitting' })
              try {
                await fakeRegister(values)
                setSubmitState({ status: 'success' })
              } catch (err) {
                setSubmitState({ status: 'error', message: err.message })
              }
            }}
            submitting={submitState.status === 'submitting'}
          />

          <div className="my-24 flex items-center gap-12" role="separator" aria-orientation="horizontal">
            <span className="h-px flex-1 bg-stroke-secondary" />
            <span className="text-caption text-content-secondary">Atau</span>
            <span className="h-px flex-1 bg-stroke-secondary" />
          </div>

          <div className="grid gap-12">
            {OAUTH_PROVIDERS.map((provider) => (
              <button
                key={provider.id}
                type="button"
                onClick={() => provider.onClick()}
                className="flex items-center justify-center gap-8 rounded-md border border-stroke-primary bg-surface-primary px-16 py-12 text-sm font-medium text-content-primary hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <provider.icon size={18} aria-hidden="true" />
                Buat Akun dengan {provider.label}
              </button>
            ))}
          </div>
        </Card>

        <p className="mt-16 text-center text-caption text-content-secondary">
          Dengan mendaftar, Anda menyetujui{' '}
          <a href="/ketentuan" className="font-medium text-primary-700 hover:underline">
            Ketentuan
          </a>{' '}
          dan{' '}
          <a href="/privasi" className="font-medium text-primary-700 hover:underline">
            Kebijakan Privasi
          </a>{' '}
          kami.
        </p>
      </div>
    </AppShell>
  )
}
```

---

## AccountForm.jsx

```jsx
import { useState } from 'react'
import { TextField, PhoneInput, Checkbox, Button } from '@idds/react'

import { FIELDS, validate } from './fields.js'

export function AccountForm({ onSubmit, submitting }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [agreed, setAgreed] = useState(false)

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: undefined }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values, agreed)
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return
    onSubmit(values)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-16">
      {FIELDS.map((field) => {
        if (field.type === 'tel') {
          return (
            <PhoneInput
              key={field.name}
              label={field.label}
              required={field.required}
              countryCode="+62"
              placeholder="812 3456 7890"
              helperText={field.helperText}
              value={values[field.name] ?? ''}
              onChange={(v) => handleChange(field.name, v)}
              error={errors[field.name]}
              disabled={submitting}
            />
          )
        }
        return (
          <TextField
            key={field.name}
            type={field.type}
            label={field.label}
            required={field.required}
            helperText={field.helperText}
            value={values[field.name] ?? ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            error={errors[field.name]}
            disabled={submitting}
            autoComplete={field.autoComplete}
          />
        )
      })}

      <Checkbox
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
        disabled={submitting}
        error={errors.agreement}
      >
        Saya menyetujui Ketentuan dan Kebijakan Privasi.
      </Checkbox>

      <Button
        type="submit"
        hierarchy="primary"
        size="lg"
        loading={submitting}
        disabled={!agreed || submitting}
        className="mt-8"
      >
        Buat Akun
      </Button>
    </form>
  )
}
```

---

## fields.js

```js
export const FIELDS = [
  {
    name: 'fullName',
    label: 'Nama Lengkap',
    type: 'text',
    required: true,
    autoComplete: 'name',
  },
  {
    name: 'phone',
    label: 'Nomor Ponsel',
    type: 'tel',
    required: true,
    helperText: 'Informasi ini digunakan untuk menghubungi Anda dan tidak akan dibagikan kepada pihak lain.',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Kata Sandi',
    type: 'password',
    required: true,
    helperText: 'Minimal 8 karakter.',
    autoComplete: 'new-password',
  },
  {
    name: 'passwordConfirm',
    label: 'Konfirmasi Kata Sandi',
    type: 'password',
    required: true,
    autoComplete: 'new-password',
  },
]

export function validate(values, agreed) {
  const errors = {}
  if (!values.fullName?.trim()) errors.fullName = 'Nama lengkap wajib diisi.'
  if (!values.phone || values.phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Nomor ponsel minimal 8 digit.'
  }
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Format email tidak valid.'
  }
  if (!values.password || values.password.length < 8) {
    errors.password = 'Kata sandi minimal 8 karakter.'
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Konfirmasi kata sandi tidak cocok.'
  }
  if (!agreed) errors.agreement = 'Anda harus menyetujui Ketentuan dan Kebijakan Privasi.'
  return errors
}

async function fakeRegister() {
  await new Promise((r) => setTimeout(r, 800))
  // Pada produksi, panggil API dan lempar Error bila gagal.
}
```

---

## oauth.js (mock)

```jsx
import { IconBrandGoogle } from '@tabler/icons-react'

export const OAUTH_PROVIDERS = [
  {
    id: 'google',
    label: 'Google',
    icon: IconBrandGoogle,
    onClick: () => console.warn('Hubungkan dengan OAuth Google sesuai dokumentasi IDDS.'),
  },
]
```

---

## Formulir.html (potongan utama)

```html
<form class="grid gap-16" novalidate>
  <label class="grid gap-4">
    <span class="text-sm font-medium text-content-primary">Nama Lengkap<span class="text-error-500">*</span></span>
    <input type="text" autocomplete="name" class="rounded-md border border-stroke-primary px-12 py-8" />
  </label>

  <label class="grid gap-4">
    <span class="text-sm font-medium text-content-primary">Nomor Ponsel<span class="text-error-500">*</span></span>
    <div class="flex">
      <span class="inline-flex items-center rounded-l-md border border-r-0 border-stroke-primary bg-surface-secondary px-12 text-sm text-content-secondary">+62</span>
      <input type="tel" autocomplete="tel" placeholder="812 3456 7890" class="w-full rounded-r-md border border-stroke-primary px-12 py-8" />
    </div>
    <span class="text-caption text-content-secondary">Informasi ini digunakan untuk menghubungi Anda dan tidak akan dibagikan kepada pihak lain.</span>
  </label>

  <label class="grid gap-4">
    <span class="text-sm font-medium text-content-primary">Email<span class="text-error-500">*</span></span>
    <input type="email" autocomplete="email" class="rounded-md border border-stroke-primary px-12 py-8" />
  </label>

  <label class="grid gap-4">
    <span class="text-sm font-medium text-content-primary">Kata Sandi<span class="text-error-500">*</span></span>
    <input type="password" autocomplete="new-password" class="rounded-md border border-stroke-primary px-12 py-8" />
    <span class="text-caption text-content-secondary">Minimal 8 karakter.</span>
  </label>

  <label class="grid gap-4">
    <span class="text-sm font-medium text-content-primary">Konfirmasi Kata Sandi<span class="text-error-500">*</span></span>
    <input type="password" autocomplete="new-password" class="rounded-md border border-stroke-primary px-12 py-8" />
  </label>

  <button type="submit" class="rounded-md bg-primary-500 px-16 py-12 text-sm font-semibold text-white hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
    Buat Akun
  </button>
</form>
```

Lihat [`Formulir.html`](./Formulir.html) untuk halaman lengkap.

---

## State yang Harus Ditangani

| State | Perilaku |
|---|---|
| `idle` | Formulir siap diisi. |
| `submitting` | Tombol "Buat Akun" memuat, field disabled. |
| `error` (field) | Tampilkan pesan error di bawah field yang relevan. |
| `error` (global) | Alert danger di atas Card. |
| `success` | Redirect ke halaman "Akun berhasil dibuat" + tampilkan nomor tiket. |
| `disabled` | Semua field nonaktif, tampilkan alasan. |

## Catatan Aksesibilitas

- Setiap field menggunakan `<label>` yang terhubung dengan `id` input.
- Pesan kesalahan diumumkan via `aria-describedby` ke input terkait.
- `autoComplete` diisi agar manajer kata sandi bawaan dapat bekerja.
- Checkbox persetujuan menggunakan `error` dengan `aria-live="polite"`.
- Pemisah "Atau" memakai `role="separator" aria-orientation="horizontal"`.

## Daftar Periksa

- [ ] Semua field wajib ditandai dengan `*` dan `required` HTML.
- [ ] Validasi inline spesifik (bukan "Data tidak valid").
- [ ] Pesan kesalahan dekat dengan field terkait.
- [ ] Tombol primer hanya satu (Buat Akun).
- [ ] Tidak ada gradient atau dekorasi pada tombol.
- [ ] Mikro-copy persetujuan jelas dan bukan sekadar tautan kosong.
