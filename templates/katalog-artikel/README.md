# Template: Katalog Artikel

Contoh halaman direktori artikel sesuai contoh resmi **"Penerakan di Sistem Pemerintahan → Katalog Artikel"** pada dokumentasi IDDS.

Tujuan layar: mendaftar dan memfilter artikel informatif (layanan publik, kebijakan, panduan) dengan tab kategori, kartu artikel, dan paginasi.

> Pratinjau langsung: [design.inadigital.go.id/playground/react/articles](https://design.inadigital.go.id/playground/react/articles)

---

## Komponen yang Dipakai

| Komponen | Peran |
|---|---|
| `AppShell` | Layout sidebar + topbar. |
| `Tabs` | Filter kategori artikel (Semua / Layanan Publik / Kebijakan & Regulasi / Panduan Pengguna). |
| `TextField` (search) | Pencarian artikel. |
| `Card` | Kartu setiap artikel (judul + ringkasan + metadata). |
| `Avatar` | Inisial instansi/penulis. |
| `Chip` | Label kategori pada kartu. |
| `Pagination` | Navigasi halaman artikel. |
| `EmptyState` | Ditampilkan saat hasil kosong. |
| `Dropdown` (rows per page) | Pemilih jumlah baris per halaman. |

---

## Struktur File

```txt
katalog-artikel/
├── README.md
├── KatalogArtikel.jsx     # komponen utama
├── KatalogArtikel.html    # versi HTML statis
├── ArticleCard.jsx        # kartu artikel
├── ArticleTabs.jsx        # tab kategori
├── data.js                # mock data artikel
└── pagination.js          # util paginasi
```

---

## KatalogArtikel.jsx

```jsx
import { useMemo, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TextField, Pagination, Dropdown, EmptyState } from '@idds/react'
import { IconSearch } from '@tabler/icons-react'

import { AppShell } from '../shared/AppShell.jsx'
import { ArticleCard } from './ArticleCard.jsx'
import { articles, CATEGORIES } from './data.js'
import { paginate } from './pagination.js'

const ROW_OPTIONS = [12, 24, 48]

export function KatalogArtikel({ user = { name: 'John Doe', role: 'Product Designer' } }) {
  const [category, setCategory] = useState('semua')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(12)

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchCategory = category === 'semua' || article.category === category
      const matchQuery = article.title.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
  }, [category, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage))
  const pageItems = paginate(filtered, page, rowsPerPage)

  return (
    <AppShell user={user} activePath="artikel">
      <header className="mb-24">
        <h1 className="text-h3 font-semibold text-content-primary md:text-h2">
          Artikel
        </h1>
        <p className="mt-4 text-content-secondary">
          Kelola dan jelajahi artikel sebagai sumber informasi resmi INAgov.
        </p>
      </header>

      <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList aria-label="Kategori artikel">
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <TextField
          type="search"
          placeholder="Cari artikel…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPage(1)
          }}
          leadingIcon={<IconSearch size={16} aria-hidden="true" />}
          aria-label="Cari artikel"
          className="md:w-80"
        />
      </div>

      {pageItems.length === 0 ? (
        <EmptyState
          title="Belum ada artikel pada kategori ini"
          description="Coba pilih kategori lain atau ubah kata kunci pencarian."
        />
      ) : (
        <ul
          className="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3"
          aria-label="Daftar artikel"
        >
          {pageItems.map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-24 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-8 text-caption text-content-secondary">
          <span>Halaman {page} dari {totalPages}</span>
          <span aria-hidden="true">·</span>
          <Dropdown
            trigger={
              <button
                type="button"
                className="rounded-md border border-stroke-primary bg-surface-primary px-12 py-4 text-caption text-content-primary hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label="Pilih jumlah baris per halaman"
              >
                {rowsPerPage} baris per halaman ▾
              </button>
            }
            align="start"
          >
            {ROW_OPTIONS.map((n) => (
              <Dropdown.Item key={n} onSelect={() => setRowsPerPage(n)}>
                {n} baris per halaman
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>

        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </AppShell>
  )
}
```

---

## ArticleCard.jsx

```jsx
import { Chip, Avatar } from '@idds/react'
import { IconArrowUpRight } from '@tabler/icons-react'

const CATEGORY_LABEL = {
  'layanan-publik': 'Layanan Publik',
  'kebijakan-regulasi': 'Kebijakan & Regulasi',
  'panduan-pengguna': 'Panduan Pengguna',
}

export function ArticleCard({ article }) {
  return (
    <article className="flex h-full flex-col gap-12 rounded-lg border border-stroke-secondary bg-surface-primary p-16 md:p-24">
      <div className="flex items-center gap-8">
        <Chip variant="subtle" tone="primary">
          {CATEGORY_LABEL[article.category] ?? article.category}
        </Chip>
        <span className="text-caption text-content-secondary">
          {article.publishedAt}
        </span>
      </div>

      <h2 className="text-h5 font-semibold leading-snug text-content-primary">
        <a href={`/artikel/${article.slug}`} className="hover:underline">
          {article.title}
        </a>
      </h2>

      <p className="line-clamp-3 text-sm text-content-secondary">
        {article.summary}
      </p>

      <footer className="mt-auto flex items-center justify-between border-t border-stroke-secondary pt-16">
        <div className="flex items-center gap-8">
          <Avatar size="sm" name={article.author} />
          <span className="text-caption text-content-secondary">{article.author}</span>
        </div>
        <a
          href={`/artikel/${article.slug}`}
          className="inline-flex items-center gap-4 text-caption font-medium text-primary-700 hover:underline"
        >
          Baca
          <IconArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </article>
  )
}
```

---

## ArticleTabs.jsx (alternatif pemisah)

```jsx
import { Tabs, TabsList, TabsTrigger } from '@idds/react'

import { CATEGORIES } from './data.js'

export function ArticleTabs({ value, onChange }) {
  return (
    <Tabs value={value} onValueChange={onChange}>
      <TabsList aria-label="Kategori artikel">
        {CATEGORIES.map((cat) => (
          <TabsTrigger key={cat.value} value={cat.value}>
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
```

---

## data.js

```js
export const CATEGORIES = [
  { value: 'semua', label: 'Semua' },
  { value: 'layanan-publik', label: 'Layanan Publik' },
  { value: 'kebijakan-regulasi', label: 'Kebijakan & Regulasi' },
  { value: 'panduan-pengguna', label: 'Panduan Pengguna' },
]

export const articles = [
  {
    id: 1,
    slug: 'pemerintah-perkuat-layanan-digital-asn',
    title: 'Pemerintah Perkuat Layanan Digital ASN Melalui Integrasi INAgov',
    summary:
      'Integrasi layanan ke dalam INAgov diharapkan meningkatkan efisiensi dan akses informasi bagi Aparatur Sipil Negara di seluruh Indonesia.',
    category: 'layanan-publik',
    author: 'PANRB',
    publishedAt: '12 Januari 2026',
  },
  {
    id: 2,
    slug: 'panrb-resmikan-pembaruan-sistem-digital',
    title: 'PANRB Resmikan Pembaruan Sistem Digital Terpadu',
    summary:
      'Pembaruan ini mencakup peningkatan konten FAQ, artikel kebijakan, dan integrasi lintas kementerian.',
    category: 'kebijakan-regulasi',
    author: 'PANRB',
    publishedAt: '8 Januari 2026',
  },
  {
    id: 3,
    slug: 'informasi-layanan-publik-terpusat-inagov',
    title: 'Mulai 2025, Informasi Layanan Publik Terpusat di INAgov',
    summary:
      'Pemerintah menargetkan INAgov sebagai kanal utama penyampaian informasi layanan publik kepada masyarakat.',
    category: 'layanan-publik',
    author: 'Kementerian PANRB',
    publishedAt: '5 Januari 2026',
  },
  {
    id: 4,
    slug: 'inagov-dorong-transparansi-informasi',
    title: 'INAgov Dorong Transparansi Informasi Pemerintahan',
    summary:
      'Langkah ini dilakukan untuk memastikan ASN memperoleh informasi yang akurat dan terkini mengenai kebijakan pemerintah.',
    category: 'kebijakan-regulasi',
    author: 'Humas INAgov',
    publishedAt: '2 Januari 2026',
  },
  {
    id: 5,
    slug: 'pemerintah-tingkatkan-kualitas-konten',
    title: 'Pemerintah Tingkatkan Kualitas Konten Informasi Digital',
    summary:
      'Optimalisasi konten artikel dan pusat bantuan menjadi bagian dari strategi transformasi digital pemerintah.',
    category: 'panduan-pengguna',
    author: 'Tim Konten',
    publishedAt: '28 Desember 2025',
  },
  {
    id: 6,
    slug: 'panduan-mengakses-layanan-publik',
    title: 'Panduan Mengakses Layanan Publik Melalui INAgov',
    summary:
      'Pelajari langkah-langkah mudah untuk mengakses berbagai layanan publik yang tersedia di platform INAgov.',
    category: 'panduan-pengguna',
    author: 'Tim Konten',
    publishedAt: '20 Desember 2025',
  },
]
```

---

## pagination.js

```js
export function paginate(items, page, rowsPerPage) {
  const start = (page - 1) * rowsPerPage
  return items.slice(start, start + rowsPerPage)
}
```

---

## KatalogArtikel.html (potongan utama)

```html
<section class="mx-auto max-w-6xl">
  <header class="mb-24">
    <h1 class="text-2xl font-semibold text-content-primary md:text-3xl">Artikel</h1>
    <p class="mt-4 text-content-secondary">Kelola dan jelajahi artikel sebagai sumber informasi resmi INAgov.</p>
  </header>

  <div class="mb-16 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
    <div role="tablist" class="inline-flex rounded-md border border-stroke-secondary p-4" aria-label="Kategori artikel">
      <button type="button" role="tab" aria-selected="true" class="rounded-sm bg-surface-secondary px-12 py-4 text-sm font-medium text-content-primary">Semua</button>
      <button type="button" role="tab" aria-selected="false" class="rounded-sm px-12 py-4 text-sm font-medium text-content-secondary">Layanan Publik</button>
      <button type="button" role="tab" aria-selected="false" class="rounded-sm px-12 py-4 text-sm font-medium text-content-secondary">Kebijakan & Regulasi</button>
      <button type="button" role="tab" aria-selected="false" class="rounded-sm px-12 py-4 text-sm font-medium text-content-secondary">Panduan Pengguna</button>
    </div>
    <label class="relative md:w-80">
      <span class="sr-only">Cari artikel</span>
      <input type="search" placeholder="Cari artikel…" class="w-full rounded-md border border-stroke-primary bg-surface-primary px-12 py-8 pl-32" />
      <svg class="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-content-secondary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
    </label>
  </div>

  <ul class="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3" aria-label="Daftar artikel">
    <li>
      <article class="flex h-full flex-col gap-12 rounded-lg border border-stroke-secondary bg-surface-primary p-24">
        <div class="flex items-center gap-8">
          <span class="rounded-md bg-primary-50 px-8 py-4 text-caption font-medium text-primary-700">Layanan Publik</span>
          <span class="text-caption text-content-secondary">12 Januari 2026</span>
        </div>
        <h2 class="text-lg font-semibold leading-snug text-content-primary">
          <a href="#" class="hover:underline">Pemerintah Perkuat Layanan Digital ASN Melalui Integrasi INAgov</a>
        </h2>
        <p class="line-clamp-3 text-sm text-content-secondary">Integrasi layanan ke dalam INAgov diharapkan meningkatkan efisiensi dan akses informasi bagi Aparatur Sipil Negara di seluruh Indonesia.</p>
        <footer class="mt-auto flex items-center justify-between border-t border-stroke-secondary pt-16">
          <div class="flex items-center gap-8">
            <span class="grid h-8 w-8 place-items-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700" aria-hidden="true">PA</span>
            <span class="text-caption text-content-secondary">PANRB</span>
          </div>
          <a href="#" class="inline-flex items-center gap-4 text-caption font-medium text-primary-700 hover:underline">Baca →</a>
        </footer>
      </article>
    </li>
    <!-- Artikel lainnya mengikuti pola yang sama -->
  </ul>

  <nav class="mt-24 flex items-center justify-between" aria-label="Navigasi halaman">
    <p class="text-caption text-content-secondary">Halaman 1 dari 3</p>
    <ol class="flex items-center gap-4">
      <li><button class="rounded-md border border-stroke-primary bg-surface-primary px-12 py-4 text-caption">Sebelumnya</button></li>
      <li><button class="rounded-md bg-primary-500 px-12 py-4 text-caption text-white" aria-current="page">1</button></li>
      <li><button class="rounded-md border border-stroke-primary bg-surface-primary px-12 py-4 text-caption">2</button></li>
      <li><button class="rounded-md border border-stroke-primary bg-surface-primary px-12 py-4 text-caption">3</button></li>
      <li><button class="rounded-md border border-stroke-primary bg-surface-primary px-12 py-4 text-caption">Berikutnya</button></li>
    </ol>
  </nav>
</section>
```

Lihat [`KatalogArtikel.html`](./KatalogArtikel.html) untuk markup lengkap dengan 12 kartu artikel.

---

## State yang Harus Ditangani

| State | Perilaku |
|---|---|
| `idle` | Tampilkan daftar artikel sesuai filter. |
| `loading` | Skeleton kartu, 6 baris × 3 kolom. |
| `empty` (kategori) | `EmptyState` dengan ajakan ganti kategori. |
| `empty` (pencarian) | `EmptyState` "Artikel tidak ditemukan untuk kata kunci X". |
| `error` | Alert danger di atas daftar, tombol "Coba lagi". |
| `paginated` | Pagination + dropdown rows per page di bawah. |

## Catatan Aksesibilitas

- Tab kategori dibungkus `role="tablist"` dengan `aria-label`.
- Tombol paginasi memakai `aria-current="page"` untuk halaman aktif.
- Pencarian menggunakan `<input type="search">` dengan `aria-label`.
- `line-clamp-3` pada ringkasan agar kartu tetap setinggi.
- `Chip` kategori memuat label teks (tidak hanya warna).

## Daftar Periksa

- [ ] Tab memuat seluruh kategori yang tersedia.
- [ ] Pencarian memicu reset halaman ke 1.
- [ ] Pagination tidak hilang saat hasil kosong.
- [ ] Dropdown "baris per halaman" mudah dijangkau keyboard.
- [ ] Tidak ada gradient atau shadow dekoratif pada kartu.
- [ ] Bahasa Indonesia dipakai untuk semua label.
