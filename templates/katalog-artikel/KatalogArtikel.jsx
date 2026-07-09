import { useMemo, useState } from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TextField,
  Pagination,
  Dropdown,
  EmptyState,
} from '@idds/react'
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
          <span>
            Halaman {page} dari {totalPages}
          </span>
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
