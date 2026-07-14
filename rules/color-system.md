# Color System

## Reference Link

- Official IDDS Color System Foundation: [design.inadigital.go.id/foundation/color/](https://design.inadigital.go.id/foundation/color/)

## Objective

Use color as a semantic communication system, not decoration. Color must communicate hierarchy, state, feedback, identity, and structure.

---

## Core Color Roles

### 1. Brand Color

Used for identity and primary actions.

Apply to:

- Primary button
- Header accent
- Active navigation
- Key product identity
- Selected state
- Important links

Rules:

- Use one dominant brand family.
- Do not use multiple unrelated brand colors.
- Do not use brand color for every card.
- Use brand color intentionally to direct attention.

---

### 2. Sentiment Color

Used to communicate system status.

| Role | Use For |
|---|---|
| Success / Positive | Approved, completed, active, valid |
| Warning | Pending, incomplete, requires attention |
| Error / Negative | Failed, rejected, destructive, invalid |
| Info / Guidance | Neutral guidance, instructions, help |

Rules:

- Use red for destructive actions and errors.
- Use green for success and positive progress.
- Use blue for informational guidance.
- Use orange/yellow for pending or attention states.
- Always pair color with text or icon.

---

### 3. Neutral Color

Used for foundation, readability, and structure.

Apply to:

- Page background
- Surface/card background
- Text
- Border
- Divider
- Disabled state
- Table lines
- Secondary metadata

Rules:

- Most of the interface should be neutral.
- Use neutral colors to create hierarchy without visual noise.
- Avoid low-contrast gray text.

---

## Product Modes

### Light Mode

Use for default public-service and administrative interfaces.

Recommended:

- Bright neutral background
- White or near-white surfaces
- Dark readable text
- Subtle borders
- Brand color only for primary actions and active states

### Dark Mode

Use for monitoring, admin panels, operations dashboards, or user preference.

Recommended:

- Dark neutral background
- Slightly lighter surface layer
- High-contrast text
- Muted borders
- Brand color adjusted to remain readable

Rules:

- Maintain hierarchy in both modes.
- Do not simply invert colors.
- Ensure semantic colors remain clear in dark mode.

---

## Government Application Status Mapping

| Status | Color Role | Example Copy |
|---|---|---|
| Draft | Neutral | Draf |
| Submitted | Info | Terkirim |
| In Verification | Warning | Dalam Verifikasi |
| Need Revision | Warning | Perlu Perbaikan |
| Approved | Success | Disetujui |
| Rejected | Error | Ditolak |
| Cancelled | Neutral | Dibatalkan |
| Completed | Success | Selesai |
| Expired | Error/Neutral | Kedaluwarsa |

---

## Color Usage Rules for AI

The AI must:

- Use semantic color roles.
- Keep icons and text in the same color family when representing the same meaning.
- Use solid text colors for readability.
- Avoid gradients on typography.
- Avoid colorful decorative cards without meaning.
- Avoid random accent colors.
- Avoid status badges that only differ by color.

---

## Tailwind-Oriented Token Names

Use abstract token names instead of raw colors where possible:

```txt
bg-surface-primary
bg-surface-secondary
bg-surface-inverse
text-content-primary
text-content-secondary
text-content-disabled
border-stroke-primary
border-stroke-secondary
bg-primary-50
bg-primary-100
bg-primary-500
text-success-primary
text-warning-primary
text-error-primary
bg-success-subtle
bg-warning-subtle
bg-error-subtle
```

---

## Anti-Pattern Examples

Do not do this:

```txt
- Every card has a different gradient.
- Primary button is blue on one page and green on another.
- Error message uses only a red border with no text.
- Body text uses very light gray on white.
- Icons use colors unrelated to the status.
```

---

## Review Checklist

- Is color used semantically?
- Is the primary action visually clear?
- Are status colors consistent?
- Is text readable in light and dark mode?
- Are icons and labels aligned in meaning?
- Are gradients avoided for typography?
- Can the screen be understood without relying on color alone?

---

## Custom Regional Theme: Jabar (Jabar Digital Service / JDS)

Since regional themes like `'jabar'` do not exist as pre-built stylesheets in the official national `@idds/styles` package, you must declare these West Java Province / JDS brand color tokens locally in your main CSS file.

### Tiga Warna Utama Jawa Barat (JDS Co-Primary Colors)
Provinsi Jawa Barat / Jabar Digital Service (JDS) menggunakan **tiga warna utama yang semuanya berfungsi sebagai warna Primer/Brand**, bukan warna sentiment (sukses/peringatan). 

Untuk memfasilitasi kebutuhan ini, AI dapat memilih salah satu dari **tiga sub-tema** Jabar berikut sesuai konteks produk instansi Anda:

1. **JDS Blue** (`#1E88E5`): Warna identitas utama JDS yang melambangkan keandalan dan teknologi (`jabar-blue` atau `jabar` standar).
2. **JDS Green** (`#16A75C`): Melambangkan pertumbuhan, pelayanan publik, dan inklusivitas (`jabar-green`).
3. **JDS Yellow** (`#FFD026`): Melambangkan kemakmuran, kreativitas, dan keramahan (`jabar-yellow`).

```css
/* ============================================================= */
/* Custom Brand Theme: Jabar (Jabar Digital Service Co-Primary)  */
/* ============================================================= */

/* SUB-TEMA A: Jabar Blue (Default / JDS Blue Primary) */
[data-theme="jabar-blue"], [data-theme="jabar"] {
  --color-primary-50: #e3f2fd;
  --color-primary-100: #bbdefb;
  --color-primary-200: #90caf9;
  --color-primary-300: #64b5f6;
  --color-primary-400: #42a5f5;
  --color-primary-500: #2196f3;
  --color-primary-600: #1e88e5; /* JDS Blue (Utama) */
  --color-primary-700: #1976d2;
  --color-primary-800: #1565c0;
  --color-primary-900: #0d47a1;
}

/* SUB-TEMA B: Jabar Green (JDS Green Primary) */
[data-theme="jabar-green"] {
  --color-primary-50: #e8f5e9;
  --color-primary-100: #c8e6c9;
  --color-primary-200: #a5d6a7;
  --color-primary-300: #81c784;
  --color-primary-400: #66bb6a;
  --color-primary-500: #4caf50;
  --color-primary-600: #16a75c; /* JDS Green (Utama) */
  --color-primary-700: #388e3c;
  --color-primary-800: #2e7d32;
  --color-primary-900: #1b5e20;
}

/* SUB-TEMA C: Jabar Yellow (JDS Yellow Primary) */
[data-theme="jabar-yellow"] {
  --color-primary-50: #fffde7;
  --color-primary-100: #fff9c4;
  --color-primary-200: #fff59d;
  --color-primary-300: #fff176;
  --color-primary-400: #ffee58;
  --color-primary-500: #ffeb3b;
  --color-primary-600: #ffd026; /* JDS Yellow (Utama) */
  --color-primary-700: #fbc02d;
  --color-primary-800: #f9a825;
  --color-primary-900: #f57f17;
}
```

Ketika menginisialisasi aplikasi Vue/React, panggil sub-tema yang diinginkan (misalnya: `setBrandTheme('jabar-green')` atau `setBrandTheme('jabar-yellow')`), dan deklarasi CSS di atas akan secara otomatis menyesuaikan warna primer seluruh komponen IDDS!

---

## Pola Sinergi Tiga Warna Jabar (Jabar Tri-Color Synergy)

Jika Anda ingin menggunakan **ketiga warna co-primary Jawa Barat** (Blue, Green, dan Yellow) bersama-sama di dalam satu antarmuka halaman yang sama, AI harus menerapkan pola penataan yang harmonis berikut untuk menjaga wibawa layanan publik:

### 1. Garis Aksen Kepala (Tri-Color Header Strip)
Gunakan garis aksen 4px di bagian paling atas header halaman, terbagi menjadi tiga bagian sama rata mewakili harmoni identitas Jawa Barat:
* **Bagian 1 (Kiri)**: JDS Blue (`#1E88E5`)
* **Bagian 2 (Tengah)**: JDS Green (`#16A75C`)
* **Bagian 3 (Kanan)**: JDS Yellow (`#FFD026`)

*Contoh markup Vue/Tailwind:*
```html
<div class="h-4 w-full flex">
  <div class="h-full w-1/3 bg-[#1E88E5]"></div>
  <div class="h-full w-1/3 bg-[#16A75C]"></div>
  <div class="h-full w-1/3 bg-[#FFD026]"></div>
</div>
```

### 2. Pembagian Kategori & Modul Berbasis Peran/Fungsi (Co-Primary Role Mapping)
Ketika halaman memiliki beberapa kartu modul atau layanan utama, AI harus menetapkan warna JDS secara konsisten berdasarkan kategori berikut:
* 🔵 **JDS Blue (`#1E88E5` / `text-primary-700` / `bg-primary-50`)**: Digunakan untuk modul administrasi utama, data keanggotaan, atau sistem teknologi operasional.
* 🟢 **JDS Green (`#16A75C` / `text-success-700` / `bg-success-50`)**: Digunakan untuk program kemasyarakatan, sertifikasi keprofesian, dan layanan publik interaktif.
* 🟡 **JDS Yellow (`#FFD026` / `text-warning-700` / `bg-warning-50`)**: Digunakan untuk pengumuman khusus, pelatihan/diklat kreatif, atau sorotan keuangan/angka kredit.

### 3. Aturan Pembatasan Visual (No Color Overdecoration)
* **Aturan**: Dilarang menggunakan ketiga warna sebagai garis tepi acak atau gradasi bertumpuk pada satu kartu yang sama.
* **Tindakan**: Kartu tetap harus berwarna netral (`bg-surface-primary` dengan `border-stroke-secondary`). Tiga warna JDS **hanya boleh diaplikasikan pada kotak ikon penunjuk (badge ikon)** di dalam kartu tersebut (seperti contoh implementasi yang lolos audit JDS di Figma).
