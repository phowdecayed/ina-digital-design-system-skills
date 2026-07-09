# Shared App Shell

Layout bersama yang membungkus seluruh template. Berisi:

- **Top bar** dengan logo INA, breadcrumb/judul halaman, dan profil pengguna.
- **Sidebar** dengan navigasi utama (Dashboard, Formulir, Katalog Artikel).

Pakai komponen ini sebagai wrapper di setiap halaman agar navigator tidak kehilangan posisi dan akses fitur konsisten.

---

## Struktur File

```txt
shared/
├── README.md
├── AppShell.jsx          # wrapper layout
├── AppShell.html         # versi HTML statis untuk preview
├── TopBar.jsx
├── TopBar.html
├── Sidebar.jsx
└── Sidebar.html
```

---

## AppShell.jsx

```jsx
import { TopBar } from './TopBar'
import { Sidebar } from './Sidebar'

export function AppShell({ user, activePath, children }) {
  return (
    <div className="flex min-h-screen bg-background-primary text-content-primary">
      <Sidebar activePath={activePath} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar user={user} />

        <main id="konten-utama" className="flex-1 overflow-y-auto px-4 py-24 md:px-32 md:py-32">
          {children}
        </main>
      </div>
    </div>
  )
}
```

---

## TopBar.jsx

```jsx
import { Avatar, Badge, Dropdown, DropdownItem } from '@idds/react'

export function TopBar({ user }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-16 border-b border-stroke-primary bg-surface-primary px-16 md:px-24">
      <div className="flex flex-1 items-center gap-12">
        <span aria-hidden="true" className="font-peruri text-lg font-bold text-primary-500">
          INA
        </span>
        <span className="hidden text-content-secondary md:inline">/ Playground</span>
      </div>

      <Dropdown
        align="end"
        trigger={
          <button
            type="button"
            className="flex items-center gap-8 rounded-md px-8 py-4 hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label={`Buka menu pengguna ${user.name}`}
          >
            <Avatar size="sm" name={user.name} />
            <span className="hidden text-left md:block">
              <span className="block text-sm font-medium text-content-primary">{user.name}</span>
              <span className="block text-xs text-content-secondary">{user.role}</span>
            </span>
          </button>
        }
      >
        <DropdownItem href="/profil">Profil Saya</DropdownItem>
        <DropdownItem href="/pengaturan">Pengaturan</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href="/keluar">Keluar</DropdownItem>
      </Dropdown>
    </header>
  )
}
```

---

## Sidebar.jsx

```jsx
import { IconHome, IconForms, IconNews } from '@tabler/icons-react'

const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: IconHome, value: 'dashboard' },
  { href: '/formulir', label: 'Formulir', icon: IconForms, value: 'formulir' },
  { href: '/katalog-artikel', label: 'Katalog Artikel', icon: IconNews, value: 'artikel' },
]

export function Sidebar({ activePath }) {
  return (
    <aside
      aria-label="Navigasi utama"
      className="hidden w-60 shrink-0 border-r border-stroke-primary bg-surface-primary md:flex md:flex-col"
    >
      <div className="flex h-16 items-center gap-8 border-b border-stroke-primary px-24">
        <span aria-hidden="true" className="font-peruri text-xl font-bold text-primary-500">
          IDDS
        </span>
        <span className="text-sm text-content-secondary">Playground</span>
      </div>

      <nav className="flex-1 px-12 py-16">
        <ul className="grid gap-4">
          {NAV.map(({ href, label, icon: Icon, value }) => {
            const active = activePath === value
            return (
              <li key={value}>
                <a
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'flex items-center gap-12 rounded-md px-12 py-8 text-sm font-medium',
                    active
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-content-secondary hover:bg-surface-secondary hover:text-content-primary',
                  ].join(' ')}
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t border-stroke-primary p-16 text-caption text-content-secondary">
        INA Digital Design System v1.0
      </div>
    </aside>
  )
}
```

---

## Versi HTML Statis (untuk preview tanpa bundler)

`AppShell.html` + `TopBar.html` + `Sidebar.html` berisi markup HTML murni dengan kelas IDDS yang siap dibuka di browser. Versi ini memakai CDN Tailwind + CSS IDDS, cocok untuk:

- Review desain ke pemangku kebijakan.
- Prototipe cepat sebelum integrasi ke framework.
- Pengujian responsif di Storybook alternatif.

Lihat [`AppShell.html`](./AppShell.html) untuk markup lengkap.

---

## Aturan App Shell

- Sidebar default tersembunyi di layar kecil, dapat dibuka lewat tombol menu di TopBar.
- Topbar selalu `sticky` agar judul halaman tetap terlihat saat konten di-scroll.
- Landmark `aside`, `header`, `main` selalu dipakai untuk aksesibilitas.
- Tombol menu pengguna selalu berlabel `aria-label` agar screen reader membacakan nama.
- Hindari menaruh CTA primer di Topbar; CTA primer halaman tetap di area konten.
