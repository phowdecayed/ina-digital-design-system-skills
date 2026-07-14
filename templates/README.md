# Templates

Contoh penerapan komponen dan pattern IDDS yang siap dipakai sebagai titik awal pembangunan aplikasi pemerintahan digital.

Seluruh template mengikuti tiga contoh resmi yang ditampilkan pada halaman **[Penerapan di Sistem Pemerintahan](https://design.inadigital.go.id/implementation)** dokumentasi IDDS, dengan struktur HTML/JSX yang dapat di-port ke React, Vue, SvelteKit, atau framework lain dengan penyesuaian minimal.

---

## Daftar Template

| Template | Cocok untuk | Komponen IDDS utama |
|---|---|---|
| [`dashboard/`](./dashboard/) | Dashboard admin, monitoring, statistik layanan | Card, Tabs, Date Picker, Charts, Table, Badge, Avatar, Dropdown |
| [`formulir/`](./formulir/) | Formulir registrasi, pengajuan, login | Text Input, Phone Input, Button, Divider, Checkbox, Link |
| [`katalog-artikel/`](./katalog-artikel/) | Direktori berita, knowledge base, daftar layanan | Tabs, Badge, Chip, Card, Pagination, Search, Avatar |
| [`shared/`](./shared/) | Layout bersama (navbar, sidebar, profil) | App Shell, Navbar, Sidebar, Dropdown User Menu |

---

## Cara Pakai

1. **Pilih template** yang paling dekat dengan kebutuhan layar.
2. **Salin struktur JSX/HTML** ke komponen halaman Anda.
3. **Ganti token brand** (`inagov`, `panrb`, `bkn`, `lan`, `bgn`, atau `default`) lewat `setBrandTheme()`.
4. **Pasang data dinamis** dengan tetap mempertahankan kelas token IDDS (jangan menulis kelas Tailwind arbitrary).
5. **Tambahkan state** (`loading`, `empty`, `error`, `disabled`) sesuai [`checklists/`](../checklists/).

Contoh pemanggilan untuk React:

```tsx
import { setBrandTheme, setThemeMode } from '@idds/react'
import '@idds/react/index.css'

import { Dashboard } from './templates/dashboard/Dashboard'

setBrandTheme('inagov')
setThemeMode('light')

export default function App() {
  return <Dashboard userName="John Doe" role="Product Designer" />
}
```

---

## Prinsip yang Dipakai di Semua Template

- **Layout app-shell konsisten.** Sidebar kiri + topbar dipakai oleh seluruh halaman, sehingga navigator tidak kehilangan posisi.
- **Hierarki visual IDDS.** Huruf besar hanya untuk judul halaman, spasi pakai token `4 / 8 / 12 / 16 / 24 / 32 / 48`, warna dibatasi pada `primary`, `content-primary`, `content-secondary`, `stroke-primary`, dan `surface-secondary`.
- **Konten Indonesia.** Label tombol, status, dan mikro-copy ditulis dengan bahasa Indonesia yang sopan dan ringkas.
- **Aksesible by default.** Landmark, label input, focus ring, dan status yang tidak hanya bergantung pada warna selalu disediakan.
- **Tanpa slop AI.** Tidak ada gradient tanpa maksud, tidak ada shadow yang menumpuk, tidak ada ikon dekoratif tanpa fungsi.

Lihat [`rules/anti-ai-slop.md`](../rules/anti-ai-slop.md) dan [`checklists/ui-review.md`](../checklists/ui-review.md) untuk aturan lengkap.

---

## Variasi Brand

Template pada folder ini ditulis untuk brand **`default`** + tema warna **`inagov`**. Untuk beralih ke brand lain, ubah dua hal:

1. `setBrandTheme('panrb')` di entry-point aplikasi.
2. Import CSS brand di file CSS utama:

```css
@import 'tailwindcss';
@import '@idds/styles/tailwind/css/idds.css';
@import '@idds/styles/tailwind/css/panrb.css'; /* ganti sesuai brand */
```

Pemetaan Tailwind token tersedia di [`implementation/tailwind-token-mapping.md`](../implementation/tailwind-token-mapping.md).

---

## Adaptasi ke Framework Lain

| Framework | Lokasi contoh | Catatan |
|---|---|---|
| React | `templates/*/*.jsx` | Pakai `@idds/react` resmi. |
| Vue | port manual dari JSX | Pakai `@idds/vue` resmi. Ikuti [`implementation/vue-idds.md`](../implementation/vue-idds.md). |
| SvelteKit | port manual ke Svelte 5 | Ikuti [`implementation/sveltekit-adaptation.md`](../implementation/sveltekit-adaptation.md). |
| HTML statis | lihat blok `html/` di tiap template | Untuk prototipe cepat, tetap pakai kelas token IDDS via CDN Tailwind. |

---

## Referensi Cepat

- Halaman resmi: [design.inadigital.go.id/implementation](https://design.inadigital.go.id/implementation)
- Daftar komponen: [design.inadigital.go.id/components](https://design.inadigital.go.id/components)
- Pattern: [`patterns/`](../patterns/)
- Aturan: [`rules/`](../rules/)
- Daftar periksa: [`checklists/`](../checklists/)
