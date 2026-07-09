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

      <nav className="flex-1 px-12 py-16" aria-label="Menu utama">
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
