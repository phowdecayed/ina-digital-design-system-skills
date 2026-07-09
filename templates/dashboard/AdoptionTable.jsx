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
          title="No data found"
          description="Belum ada ringkasan adopsi untuk periode ini. Coba ubah rentang tanggal."
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
