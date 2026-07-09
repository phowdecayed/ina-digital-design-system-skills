import { TopBar } from './TopBar.jsx'
import { Sidebar } from './Sidebar.jsx'

export function AppShell({ user, activePath, children }) {
  return (
    <div className="flex min-h-screen bg-background-primary text-content-primary">
      <Sidebar activePath={activePath} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar user={user} />

        <main
          id="konten-utama"
          className="flex-1 overflow-y-auto px-4 py-24 md:px-32 md:py-32"
        >
          {children}
        </main>
      </div>
    </div>
  )
}
