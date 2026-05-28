export const WatchlistTitleKeywords: React.FC<{ keywords: IKeyword[] }> = ({ keywords }) => {
  if (!keywords.length) return null

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Keywords</h2>
      <ul className="flex flex-wrap gap-2">
        {keywords.map(keyword => (
          <li
            key={keyword.id}
            className="text-sm border border-zinc-700 rounded-full px-3 py-1 text-muted-foreground hover:text-foreground hover:border-zinc-500 transition-colors"
          >
            #{keyword.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
