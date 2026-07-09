import { Chip, Avatar } from '@idds/react'
import { IconArrowUpRight } from '@tabler/icons-react'

const CATEGORY_LABEL = {
  'layanan-publik': 'Layanan Publik',
  'kebijakan-regulasi': 'Kebijakan & Regulasi',
  'panduan-pengguna': 'Panduan Pengguna',
}

export function ArticleCard({ article }) {
  return (
    <article className="flex h-full flex-col gap-12 rounded-lg border border-stroke-secondary bg-surface-primary p-16 md:p-24">
      <div className="flex items-center gap-8">
        <Chip variant="subtle" tone="primary">
          {CATEGORY_LABEL[article.category] ?? article.category}
        </Chip>
        <span className="text-caption text-content-secondary">
          {article.publishedAt}
        </span>
      </div>

      <h2 className="text-h5 font-semibold leading-snug text-content-primary">
        <a href={`/artikel/${article.slug}`} className="hover:underline">
          {article.title}
        </a>
      </h2>

      <p className="line-clamp-3 text-sm text-content-secondary">
        {article.summary}
      </p>

      <footer className="mt-auto flex items-center justify-between border-t border-stroke-secondary pt-16">
        <div className="flex items-center gap-8">
          <Avatar size="sm" name={article.author} />
          <span className="text-caption text-content-secondary">
            {article.author}
          </span>
        </div>
        <a
          href={`/artikel/${article.slug}`}
          className="inline-flex items-center gap-4 text-caption font-medium text-primary-700 hover:underline"
        >
          Baca
          <IconArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </article>
  )
}
