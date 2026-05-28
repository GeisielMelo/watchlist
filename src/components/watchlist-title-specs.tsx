type SpecItem = { label: string; value: string }

const formatMoney = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
}

export const WatchlistTitleSpecs: React.FC<{ data: IMovieData }> = ({ data }) => {
  const items: SpecItem[] = []

  if (data.status) items.push({ label: 'Status', value: data.status })
  if (data.original_language) items.push({ label: 'Language', value: data.original_language.toUpperCase() })
  if (data.runtime) items.push({ label: 'Runtime', value: formatRuntime(data.runtime) })
  if (data.budget > 0) items.push({ label: 'Budget', value: formatMoney(data.budget) })
  if (data.revenue > 0) items.push({ label: 'Revenue', value: formatMoney(data.revenue) })

  if (!items.length) return null

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {items.map(item => (
        <div key={item.label} className="border border-zinc-700 rounded-md shadow-sm bg-card/40 px-4 py-3">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{item.label}</span>
          <p className="text-sm font-semibold mt-1 truncate">{item.value}</p>
        </div>
      ))}
    </section>
  )
}
