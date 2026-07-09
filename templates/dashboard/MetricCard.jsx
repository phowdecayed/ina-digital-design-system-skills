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
