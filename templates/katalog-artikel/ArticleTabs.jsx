import { Tabs, TabsList, TabsTrigger } from '@idds/react'

import { CATEGORIES } from './data.js'

export function ArticleTabs({ value, onChange }) {
  return (
    <Tabs value={value} onValueChange={onChange}>
      <TabsList aria-label="Kategori artikel">
        {CATEGORIES.map((cat) => (
          <TabsTrigger key={cat.value} value={cat.value}>
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
