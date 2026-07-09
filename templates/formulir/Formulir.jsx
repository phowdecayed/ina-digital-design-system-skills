import { useState } from 'react'
import { Alert, Card } from '@idds/react'

import { AppShell } from '../shared/AppShell.jsx'
import { AccountForm } from './AccountForm.jsx'
import { OAUTH_PROVIDERS } from './oauth.js'

export function Formulir({ user = { name: 'John Doe', role: 'Product Designer' } }) {
  const [submitState, setSubmitState] = useState({ status: 'idle', message: null })

  return (
    <AppShell user={user} activePath="formulir">
      <div className="mx-auto max-w-xl">
        <header className="mb-24 text-center">
          <h1 className="text-h3 font-semibold text-content-primary md:text-h2">
            Buat akun Anda
          </h1>
          <p className="mt-8 text-content-secondary">
            Masukkan informasi berikut untuk membuat akun.
          </p>
        </header>

        {submitState.status === 'error' ? (
          <Alert
            tone="danger"
            title="Pengajuan gagal diproses"
            description={submitState.message}
            onClose={() => setSubmitState({ status: 'idle', message: null })}
            className="mb-16"
          />
        ) : null}

        <Card>
          <AccountForm
            onSubmit={async (values) => {
              setSubmitState({ status: 'submitting' })
              try {
                await fakeRegister(values)
                setSubmitState({ status: 'success' })
              } catch (err) {
                setSubmitState({ status: 'error', message: err.message })
              }
            }}
            submitting={submitState.status === 'submitting'}
          />

          <div
            className="my-24 flex items-center gap-12"
            role="separator"
            aria-orientation="horizontal"
          >
            <span className="h-px flex-1 bg-stroke-secondary" />
            <span className="text-caption text-content-secondary">Atau</span>
            <span className="h-px flex-1 bg-stroke-secondary" />
          </div>

          <div className="grid gap-12">
            {OAUTH_PROVIDERS.map((provider) => (
              <button
                key={provider.id}
                type="button"
                onClick={() => provider.onClick()}
                className="flex items-center justify-center gap-8 rounded-md border border-stroke-primary bg-surface-primary px-16 py-12 text-sm font-medium text-content-primary hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <provider.icon size={18} aria-hidden="true" />
                Buat Akun dengan {provider.label}
              </button>
            ))}
          </div>
        </Card>

        <p className="mt-16 text-center text-caption text-content-secondary">
          Dengan mendaftar, Anda menyetujui{' '}
          <a
            href="/ketentuan"
            className="font-medium text-primary-700 hover:underline"
          >
            Ketentuan
          </a>{' '}
          dan{' '}
          <a
            href="/privasi"
            className="font-medium text-primary-700 hover:underline"
          >
            Kebijakan Privasi
          </a>{' '}
          kami.
        </p>
      </div>
    </AppShell>
  )
}

async function fakeRegister() {
  await new Promise((r) => setTimeout(r, 800))
}
