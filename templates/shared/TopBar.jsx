import { Avatar, Dropdown, DropdownItem } from '@idds/react'

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
