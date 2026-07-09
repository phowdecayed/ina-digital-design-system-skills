export function paginate(items, page, rowsPerPage) {
  const start = (page - 1) * rowsPerPage
  return items.slice(start, start + rowsPerPage)
}
