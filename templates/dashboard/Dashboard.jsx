import { useState } from 'react'
import { DatePicker, Tabs, TabsList, TabsTrigger } from '@idds/react'

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
