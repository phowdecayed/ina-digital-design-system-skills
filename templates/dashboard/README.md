# Template: Dashboard

Contoh halaman dashboard admin sesuai contoh resmi **"Penerapan di Sistem Pemerintahan → Dashboard"** pada dokumentasi IDDS.

Tujuan layar: menampilkan ringkas kondisi sistem (komponen dipakai, halaman teradopsi, konsistensi desain) lengkap dengan filter periode, grafik tren, dan tabel operasional.

> Pratinjau langsung: [design.inadigital.go.id/playground/react/dashboard](https://design.inadigital.go.id/playground/react/dashboard)

---

## Komponen yang Dipakai

| Komponen | Peran |
|---|---|
| `AppShell` | Layout bersama (TopBar + Sidebar). |
| `DatePicker` | Filter rentang tanggal di header halaman. |
| `Card` | Kartu metrik (Komponen Digunakan, Halaman Teradopsi, Konsistensi Desain). |
| `Tabs` | Pilihan periode grafik (1 Tahun / 1 Bulan / 7 Hari). |
| `Chart` | Grafik tren adopsi komponen (ApexCharts). |
| `TableCell` + `Badge` | Tabel ringkasan adopsi per kategori. |
| `EmptyState` | Ditampilkan saat tidak ada data (`No data found`). |

---

## Struktur File

```txt
dashboard/
├── README.md
├── Dashboard.jsx         # komponen utama
├── Dashboard.html        # versi HTML statis
├── MetricCard.jsx        # kartu metrik kecil
├── AdoptionTable.jsx     # tabel ringkasan adopsi
├── AdoptionChart.jsx     # grafik tren
├── data.js               # contoh data (mock)
└── states.js             # definisi state loading/empty/error
```

---

## Dashboard.jsx

```jsx
import { useState } from 'react'
import { DatePicker, Tabs, TabsList, TabsTrigger, TabsContent } from '@idds/react'

import { AppShell } from '../shared/AppShell.jsx'
import { MetricCard } from './MetricCard.jsx'
import { AdoptionTable } from './AdoptionTable.jsx'
import { AdoptionChart } from './AdoptionChart.jsx'
import { dashboardData } from './data.js'

const PERIODS = [
  { value: '1y', label: '1 Tahun' },
  { value: '1m', label: '1 Bulan' },
  { value: '7d', label: '7 Hari' },
]

export function Dashboard({ user = { name: 'John Doe', role: 'Product Designer' } }) {
  const [range, setRange] = useState({ from: null, to: null })
  const [period, setPeriod] = useState('1y')

  const data = dashboardData({ range, period })

  return (
    <AppShell user={user} activePath="dashboard">
      {/* Header halaman */}
      <header className="mb-24 flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-h3 font-semibold text-content-primary md:text-h2">
            Dashboard
          </h1>
          <p className="mt-4 text-content-secondary">
            Ringkasan pertumbuhan penggunaan komponen di berbagai kategori
            antarmuka.
          </p>
        </div>

        <DatePicker
          mode="range"
          value={range}
          onChange={setRange}
          label="Pilih Rentang Tanggal"
        />
      </header>

      {/* Kartu metrik */}
      <section
        aria-label="Metrik utama"
        className="grid grid-cols-1 gap-16 md:grid-cols-3"
      >
        <MetricCard
          label="Komponen Digunakan"
          value="128"
          delta="+12"
          deltaLabel="komponen ditambahkan bulan ini"
        />
        <MetricCard
          label="Halaman Teradopsi"
          value="342"
          delta="+45"
          deltaLabel="halaman diperbarui"
        />
        <MetricCard
          label="Konsistensi Desain"
          value="92%"
          delta="+3%"
          deltaLabel="dibanding periode sebelumnya"
          tone="success"
        />
      </section>

      {/* Grafik */}
      <section
        aria-label="Tren adopsi komponen"
        className="mt-24 rounded-lg border border-stroke-secondary bg-surface-primary p-16 md:p-24"
      >
        <header className="mb-16 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-h5 font-semibold text-content-primary">
              Tren Adopsi Komponen Per Kategori
            </h2>
            <p className="text-sm text-content-secondary">
              Pilih jangka waktu untuk melihat tren adopsi.
            </p>
          </div>

          <Tabs value={period} onValueChange={setPeriod}>
            <TabsList>
              {PERIODS.map((p) => (
                <TabsTrigger key={p.value} value={p.value}>
                  {p.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </header>

        <AdoptionChart series={data.series} categories={data.categories} />
      </section>

      {/* Tabel operasional */}
      <section
        aria-label="Ringkasan adopsi"
        className="mt-24 rounded-lg border border-stroke-secondary bg-surface-primary"
      >
        <header className="flex items-center justify-between border-b border-stroke-secondary p-16 md:p-24">
          <h2 className="text-h5 font-semibold text-content-primary">
            Ringkasan Adopsi
          </h2>
        </header>
        <AdoptionTable rows={data.table} />
      </section>
    </AppShell>
  )
}
```

---

## MetricCard.jsx

```jsx
import { IconArrowUpRight } from '@tabler/icons-react'

export function MetricCard({ label, value, delta, deltaLabel, tone = 'neutral' }) {
  const toneClass = {
    neutral: 'text-content-secondary',
    success: 'text-success-600',
    warning: 'text-warning-600',
  }[tone]

  return (
    <article className="rounded-lg border border-stroke-secondary bg-surface-primary p-16 md:p-24">
      <p className="text-sm text-content-secondary">{label}</p>
      <p className="mt-8 text-h2 font-semibold text-content-primary md:text-display-sm">
        {value}
      </p>
      {delta ? (
        <p className={`mt-8 flex items-center gap-4 text-caption ${toneClass}`}>
          <IconArrowUpRight size={14} aria-hidden="true" />
          <span className="font-semibold">{delta}</span>
          <span className="text-content-secondary">{deltaLabel}</span>
        </p>
      ) : null}
    </article>
  )
}
```

---

## AdoptionTable.jsx

```jsx
import { Table, Badge, EmptyState, Pagination } from '@idds/react'

const STATUS_TONE = {
  aktif: 'success',
  proses: 'info',
  tertunda: 'warning',
}

export function AdoptionTable({ rows, page = 1, totalPages = 1, onPageChange }) {
  if (!rows?.length) {
    return (
      <div className="p-24">
        <EmptyState
          title="Belum ada data adopsi"
          description="Tambahkan komponen ke halaman untuk mulai melihat ringkasan di sini."
        />
      </div>
    )
  }

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Nama</Table.Head>
            <Table.Head>Progress</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Estimasi Efisiensi</Table.Head>
            <Table.Head className="text-right">Aksi</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell className="font-medium text-content-primary">
                {row.name}
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-8">
                  <div
                    className="h-2 w-32 rounded-full bg-surface-secondary"
                    role="progressbar"
                    aria-valuenow={row.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-2 rounded-full bg-primary-500"
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                  <span className="text-caption text-content-secondary">
                    {row.progress}%
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge tone={STATUS_TONE[row.status]} variant="subtle">
                  {row.status}
                </Badge>
              </Table.Cell>
              <Table.Cell className="text-content-secondary">
                {row.efficiency}
              </Table.Cell>
              <Table.Cell className="text-right">
                <a
                  href={`/adopsi/${row.id}`}
                  className="text-sm font-medium text-primary-700 hover:underline"
                >
                  Detail
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="flex items-center justify-end border-t border-stroke-secondary p-16">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  )
}
```

---

## AdoptionChart.jsx

```jsx
import { useEffect, useRef } from 'react'

export function AdoptionChart({ series, categories }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !window.ApexCharts) return
    const chart = new window.ApexCharts(ref.current, {
      chart: { type: 'line', toolbar: { show: false }, fontFamily: 'inherit' },
      series,
      xaxis: { categories },
      stroke: { curve: 'smooth', width: 3 },
      colors: ['#BE0000'],
      grid: { borderColor: '#E5E7EB' },
      dataLabels: { enabled: false },
      legend: { position: 'top' },
    })
    chart.render()
    return () => chart.destroy()
  }, [series, categories])

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Grafik garis tren adopsi komponen IDDS per kategori"
      className="h-72 w-full"
    />
  )
}
```

---

## data.js (contoh mock data)

```js
export function dashboardData({ range, period }) {
  // Pada produksi, panggil API dengan parameter range + period.
  // Contoh di bawah hanya untuk pratinjau.
  return {
    series: [
      { name: 'Tombol', data: [22, 28, 35, 41, 48, 55, 62, 70, 78] },
      { name: 'Form', data: [14, 16, 20, 24, 27, 30, 33, 36, 40] },
      { name: 'Tabel', data: [9, 12, 14, 17, 21, 25, 28, 32, 36] },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep'],
    table: [], // kosong untuk memicu EmptyState ("No data found")
  }
}
```

---

## states.js

```js
// Petakan setiap variasi UI ke status yang harus ditangani.
// Lihat ../checklists/ui-review.md untuk daftar lengkap.

export const DASHBOARD_STATES = {
  loading: 'Tampilkan skeleton pada kartu metrik dan tabel.',
  empty: 'EmptyState pada tabel + mikro-copy "Belum ada data adopsi".',
  error: 'Alert danger di atas kartu metrik + tombol "Coba lagi".',
  noResult: 'EmptyState khusus saat filter tidak menghasilkan data.',
  partial: 'Tampilkan banner info jika data tidak lengkap untuk sebagian kategori.',
}
```

---

## Catatan Aksesibilitas

- `aria-label` pada section grafik dan tabel.
- `role="progressbar"` + `aria-valuenow` pada bar progress adopsi.
- Grafik ApexCharts dibungkus `role="img"` dengan `aria-label` agar screen reader membacakan ringkasan.
- Tombol filter tanggal selalu berlabel dan memiliki fokus ring.
- Hindari hanya mengandalkan warna untuk status (`Badge` tetap menyertakan label teks).

## Daftar Periksa

- [ ] Metrik dibatasi 3–5, sesuai `patterns/dashboard.md`.
- [ ] Filter tanggal di atas konten, bukan di bawah.
- [ ] State loading, empty, error, dan no-result diterapkan.
- [ ] Tidak ada gradient atau shadow dekoratif.
- [ ] Spasi mengikuti token `16 / 24 / 32`.
- [ ] Bahasa Indonesia dipakai di seluruh label.
